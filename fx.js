/* 検証ラボ — 演出用スクリプト
   - Zdog: ヒーローの金貨エンブレム（疑似3D回転）
   - カードのポインタ追従チルト（立体感）
   - スクロールでふわりと現れるリビール */
(function () {
  'use strict';

  /* ---------- Zdog ヒーローエンブレム ---------- */
  var heroCanvas = document.getElementById('zdog-hero');
  if (heroCanvas && window.Zdog) {
    var illo = new Zdog.Illustration({
      element: heroCanvas,
      dragRotate: true,
      rotate: {x: -0.35},
    });
    var coin = new Zdog.Anchor({addTo: illo});

    // 金貨本体
    new Zdog.Cylinder({
      addTo: coin,
      diameter: 118,
      length: 20,
      color: '#d9a441',
      backface: '#b97f26',
      rotate: {x: Zdog.TAU / 4},
    });
    // 内側のリング刻印
    new Zdog.Ellipse({
      addTo: coin,
      diameter: 84,
      stroke: 5,
      color: '#f0d48a',
      translate: {z: 11},
    });
    new Zdog.Ellipse({
      addTo: coin,
      diameter: 84,
      stroke: 5,
      color: '#8a5f14',
      translate: {z: -11},
    });
    // 「検」の一文字を線で描く代わりに、中央のダイヤ
    new Zdog.Polygon({
      addTo: coin,
      radius: 22,
      sides: 4,
      stroke: 7,
      color: '#fff3d6',
      translate: {z: 12},
    });
    // 周囲を回る軌道リング
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 205,
      stroke: 4,
      color: 'rgba(217,164,65,0.55)',
      rotate: {x: Zdog.TAU / 4.6},
    });
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 235,
      stroke: 2,
      color: 'rgba(240,212,138,0.30)',
      rotate: {x: Zdog.TAU / 3.6, y: 0.4},
    });

    var tick = 0;
    (function animate() {
      tick += 0.008;
      coin.rotate.y = tick;
      coin.rotate.x = Math.sin(tick * 0.6) * 0.35;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    })();
  }

  /* ---------- カードのチルト ---------- */
  var fine = window.matchMedia('(pointer: fine)').matches;
  if (fine) {
    document.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          'perspective(900px) rotateY(' + (px * 5).toFixed(2) + 'deg)' +
          ' rotateX(' + (-py * 5).toFixed(2) + 'deg) translateY(-3px)';
      });
      card.addEventListener('pointerleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ---------- スクロール・リビール ---------- */
  var targets = document.querySelectorAll('.card, .verdict-box, .table-scroll, .pr-note, .viz, .kpi');
  if ('IntersectionObserver' in window && targets.length) {
    targets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, {threshold: 0.08});
    targets.forEach(function (el) { io.observe(el); });
  }
})();
