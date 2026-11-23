(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@tsparticles/engine/browser/Utils/LogUtils.js
  function setLogger(logger) {
    if (logger.debug) {
      _logger.debug = wrap(logger.debug);
    }
    if (logger.error) {
      _logger.error = wrap(logger.error);
    }
    if (logger.info) {
      _logger.info = wrap(logger.info);
    }
    if (logger.log) {
      _logger.log = wrap(logger.log);
    }
    if (logger.trace) {
      _logger.trace = wrap(logger.trace);
    }
    if (logger.verbose) {
      _logger.verbose = wrap(logger.verbose);
    }
    if (logger.warning) {
      _logger.warning = wrap(logger.warning);
    }
  }
  function getLogger() {
    return _logger;
  }
  var errorPrefix, codedErrorPattern, fullMatchIndex, codeIndex, wrap, _logger;
  var init_LogUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/LogUtils.js"() {
      errorPrefix = "tsParticles - Error";
      codedErrorPattern = /^\[tsParticles Error (TSP-\d+)\]\s*/;
      fullMatchIndex = 0;
      codeIndex = 1;
      wrap = (fn) => (...args) => {
        fn(...args);
      };
      _logger = {
        debug: wrap(console.debug),
        error: (message, ...optionalParams) => {
          if (typeof message === "string") {
            const match = codedErrorPattern.exec(message);
            if (match?.[codeIndex]) {
              console.error(`tsParticles - ${match[codeIndex]} - ${message.slice(match[fullMatchIndex].length)}`, ...optionalParams);
              return;
            }
          }
          console.error(`${errorPrefix} - ${message}`, ...optionalParams);
        },
        info: wrap(console.info),
        log: wrap(console.log),
        trace: wrap(console.trace),
        verbose: wrap(console.log),
        warning: wrap(console.warn)
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js
  var MoveDirection;
  var init_MoveDirection = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Directions/MoveDirection.js"() {
      (function(MoveDirection2) {
        MoveDirection2["bottom"] = "bottom";
        MoveDirection2["bottomLeft"] = "bottom-left";
        MoveDirection2["bottomRight"] = "bottom-right";
        MoveDirection2["left"] = "left";
        MoveDirection2["none"] = "none";
        MoveDirection2["right"] = "right";
        MoveDirection2["top"] = "top";
        MoveDirection2["topLeft"] = "top-left";
        MoveDirection2["topRight"] = "top-right";
        MoveDirection2["outside"] = "outside";
        MoveDirection2["inside"] = "inside";
      })(MoveDirection || (MoveDirection = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js
  var generatedAttribute, fullPercent, defaultCompositeValue, resizeEvent, visibilityChangeEvent, percentDenominator, half, millisecondsToSeconds, originPoint, defaultTransform, randomColorValue, midColorValue, double, doublePI, defaultFps, defaultAlpha, generatedTrue, generatedFalse, canvasTag, defaultRetryCount, squareExp, spatialHashGridCellSize, defaultRemoveQuantity, defaultRatio, defaultReduceFactor, inverseFactorNumerator, rgbMax, hMax, sMax, lMax, hMin, sMin, hPhase, empty, quarter, threeQuarter, minVelocity, minDistance, minRadius, defaultTransformValue, minimumSize, zIndexFactorOffset, defaultOpacity, removeDeleteCount, removeMinIndex, defaultFpsLimit, minFpsLimit, canvasFirstIndex, loadRandomFactor, loadMinIndex, one, none, decayOffset, tryCountIncrement, minZ, minLimit, countOffset, minCount, minIndex, lengthOffset, defaultDensityFactor, deleteCount, defaultAngle, identity, minStrokeWidth, lFactor, lMin, maxNits, triple, sextuple, sNormalizedOffset, phaseNumerator, defaultRgbMin, defaultVelocity, defaultLoops, defaultTime, defaultZoom;
  var init_Constants = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/Constants.js"() {
      generatedAttribute = "generated";
      fullPercent = "100%";
      defaultCompositeValue = "source-over";
      resizeEvent = "resize";
      visibilityChangeEvent = "visibilitychange";
      percentDenominator = 100;
      half = 0.5;
      millisecondsToSeconds = 1e3;
      originPoint = {
        x: 0,
        y: 0,
        z: 0
      };
      defaultTransform = {
        a: 1,
        b: 0,
        c: 0,
        d: 1
      };
      randomColorValue = "random";
      midColorValue = "mid";
      double = 2;
      doublePI = Math.PI * double;
      defaultFps = 60;
      defaultAlpha = 1;
      generatedTrue = "true";
      generatedFalse = "false";
      canvasTag = "canvas";
      defaultRetryCount = 0;
      squareExp = 2;
      spatialHashGridCellSize = 100;
      defaultRemoveQuantity = 1;
      defaultRatio = 1;
      defaultReduceFactor = 1;
      inverseFactorNumerator = 1;
      rgbMax = 255;
      hMax = 360;
      sMax = 100;
      lMax = 100;
      hMin = 0;
      sMin = 0;
      hPhase = 60;
      empty = 0;
      quarter = 0.25;
      threeQuarter = half + quarter;
      minVelocity = 0;
      minDistance = 0;
      minRadius = 0;
      defaultTransformValue = 1;
      minimumSize = 0;
      zIndexFactorOffset = 1;
      defaultOpacity = 1;
      removeDeleteCount = 1;
      removeMinIndex = 0;
      defaultFpsLimit = 120;
      minFpsLimit = 0;
      canvasFirstIndex = 0;
      loadRandomFactor = 1e4;
      loadMinIndex = 0;
      one = 1;
      none = 0;
      decayOffset = 1;
      tryCountIncrement = 1;
      minZ = 0;
      minLimit = 0;
      countOffset = 1;
      minCount = 0;
      minIndex = 0;
      lengthOffset = 1;
      defaultDensityFactor = 1;
      deleteCount = 1;
      defaultAngle = 0;
      identity = 1;
      minStrokeWidth = 0;
      lFactor = 1;
      lMin = 0;
      maxNits = 400;
      triple = 3;
      sextuple = 6;
      sNormalizedOffset = 1;
      phaseNumerator = 1;
      defaultRgbMin = 0;
      defaultVelocity = 0;
      defaultLoops = 0;
      defaultTime = 0;
      defaultZoom = 1;
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js
  function getZ(source) {
    return "z" in source ? source.z : originPoint.z;
  }
  var Vector3d, Vector;
  var init_Vectors = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/Vectors.js"() {
      init_Constants();
      Vector3d = class _Vector3d {
        x;
        y;
        z;
        constructor(x = originPoint.x, y = originPoint.y, z = originPoint.z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        static get origin() {
          return _Vector3d.create(originPoint.x, originPoint.y, originPoint.z);
        }
        get angle() {
          return Math.atan2(this.y, this.x);
        }
        set angle(angle) {
          this.#updateFromAngle(angle, this.length);
        }
        get length() {
          return Math.sqrt(this.getLengthSq());
        }
        set length(length) {
          this.#updateFromAngle(this.angle, length);
        }
        static clone(source) {
          return _Vector3d.create(source.x, source.y, getZ(source));
        }
        static create(x, y, z) {
          if (typeof x === "number") {
            return new _Vector3d(x, y ?? originPoint.y, z ?? originPoint.z);
          }
          return new _Vector3d(x.x, x.y, getZ(x));
        }
        add(v) {
          return _Vector3d.create(this.x + v.x, this.y + v.y, this.z + getZ(v));
        }
        addTo(v) {
          this.x += v.x;
          this.y += v.y;
          this.z += getZ(v);
        }
        copy() {
          return _Vector3d.clone(this);
        }
        div(n) {
          return _Vector3d.create(this.x / n, this.y / n, this.z / n);
        }
        getLengthSq() {
          return this.x * this.x + this.y * this.y;
        }
        mult(n) {
          return _Vector3d.create(this.x * n, this.y * n, this.z * n);
        }
        multTo(n) {
          this.x *= n;
          this.y *= n;
          this.z *= n;
        }
        normalize() {
          const length = this.length;
          if (length !== none) {
            this.multTo(inverseFactorNumerator / length);
          }
        }
        rotate(angle) {
          return _Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), originPoint.z);
        }
        setTo(c) {
          this.x = c.x;
          this.y = c.y;
          this.z = getZ(c);
        }
        sub(v) {
          return _Vector3d.create(this.x - v.x, this.y - v.y, this.z - getZ(v));
        }
        subFrom(v) {
          this.x -= v.x;
          this.y -= v.y;
          this.z -= getZ(v);
        }
        #updateFromAngle(angle, length) {
          this.x = Math.cos(angle) * length;
          this.y = Math.sin(angle) * length;
        }
      };
      Vector = class _Vector extends Vector3d {
        constructor(x = originPoint.x, y = originPoint.y) {
          super(x, y, originPoint.z);
        }
        static get origin() {
          return _Vector.create(originPoint.x, originPoint.y);
        }
        static clone(source) {
          return _Vector.create(source.x, source.y);
        }
        static create(x, y) {
          if (typeof x === "number") {
            return new _Vector(x, y ?? originPoint.y);
          }
          return new _Vector(x.x, x.y);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  function isString(arg) {
    return typeof arg === "string";
  }
  function isNumber(arg) {
    return typeof arg === "number";
  }
  function isEnumValue(enumObject, arg) {
    return Object.values(enumObject).some((enumValue) => enumValue === arg);
  }
  function toEnumValue(enumObject, arg, defaultValue) {
    return isEnumValue(enumObject, arg) ? arg : defaultValue;
  }
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  function isArray(arg) {
    return Array.isArray(arg);
  }
  function isNull(arg) {
    return arg === null || arg === void 0;
  }
  var init_TypeUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/TypeUtils.js"() {
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/MathUtils.js
  function setRandom(rnd = Math.random) {
    _random = rnd;
  }
  function getRandomFn() {
    return _random;
  }
  function getRandom() {
    const min = 0, max = 1;
    return clamp(_random(), min, max - Number.EPSILON);
  }
  function getRandomInRange(min, max) {
    return getRandom() * (max - min) + min;
  }
  function animate(fn) {
    return _animationLoop.nextFrame(fn);
  }
  function cancelAnimation(handle) {
    _animationLoop.cancel(handle);
  }
  function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }
  function mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
  }
  function randomInRangeValue(r) {
    const max = getRangeMax(r), minOffset = 0;
    let min = getRangeMin(r);
    if (max === min) {
      min = minOffset;
    }
    return getRandomInRange(min, max);
  }
  function getRangeValue(value) {
    return isNumber(value) ? value : randomInRangeValue(value);
  }
  function getRangeMin(value) {
    return isNumber(value) ? value : value.min;
  }
  function getRangeMax(value) {
    return isNumber(value) ? value : value.max;
  }
  function setRangeValue(source, value) {
    if (source === value || value === void 0 && isNumber(source)) {
      return source;
    }
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== void 0 ? {
      min: Math.min(min, value),
      max: Math.max(max, value)
    } : setRangeValue(min, max);
  }
  function hypot(x, y) {
    return Math.sqrt(x * x + y * y);
  }
  function getDistanceSq(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y;
    return dx * dx + dy * dy;
  }
  function getDistance(pointA, pointB) {
    return Math.sqrt(getDistanceSq(pointA, pointB));
  }
  function checkDistance(pointA, pointB, distance) {
    return getDistanceSq(pointA, pointB) <= distance * distance;
  }
  function degToRad(degrees) {
    return degrees * degToRadFactor;
  }
  function getParticleDirectionAngle(direction, position, center) {
    if (isNumber(direction)) {
      return degToRad(direction);
    }
    switch (direction) {
      case MoveDirection.top:
        return -Math.PI * half;
      case MoveDirection.topRight:
        return -Math.PI * quarter;
      case MoveDirection.right:
        return empty;
      case MoveDirection.bottomRight:
        return Math.PI * quarter;
      case MoveDirection.bottom:
        return Math.PI * half;
      case MoveDirection.bottomLeft:
        return Math.PI * threeQuarter;
      case MoveDirection.left:
        return Math.PI;
      case MoveDirection.topLeft:
        return -Math.PI * threeQuarter;
      case MoveDirection.inside:
        return Math.atan2(center.y - position.y, center.x - position.x);
      case MoveDirection.outside:
        return Math.atan2(position.y - center.y, position.x - center.x);
      default:
        return getRandom() * doublePI;
    }
  }
  function getParticleBaseVelocity(direction) {
    const baseVelocity = Vector.origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
  }
  function collisionVelocity(v1, v2, m1, m2) {
    return Vector.create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * double * m2 / (m1 + m2), v1.y);
  }
  function calcPositionOrRandomFromSize(data) {
    return {
      x: (data.position?.x ?? getRandom() * percentDenominator) * data.size.width / percentDenominator,
      y: (data.position?.y ?? getRandom() * percentDenominator) * data.size.height / percentDenominator
    };
  }
  function calcPositionOrRandomFromSizeRanged(data) {
    const position = {
      x: data.position?.x !== void 0 ? getRangeValue(data.position.x) : void 0,
      y: data.position?.y !== void 0 ? getRangeValue(data.position.y) : void 0
    };
    return calcPositionOrRandomFromSize({ size: data.size, position });
  }
  function calcExactPositionOrRandomFromSize(data) {
    const { position, size } = data;
    return {
      x: position?.x ?? getRandom() * size.width,
      y: position?.y ?? getRandom() * size.height
    };
  }
  function parseAlpha(input) {
    if (!input) {
      return defaultAlpha;
    }
    return input.endsWith("%") ? Number.parseFloat(input) / percentDenominator : Number.parseFloat(input);
  }
  var piDeg, degToRadFactor, _random, _animationLoop;
  var init_MathUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/MathUtils.js"() {
      init_MoveDirection();
      init_Constants();
      init_Vectors();
      init_TypeUtils();
      piDeg = 180;
      degToRadFactor = Math.PI / piDeg;
      _random = Math.random;
      _animationLoop = {
        nextFrame: (cb) => requestAnimationFrame(cb),
        cancel: (idx) => {
          cancelAnimationFrame(idx);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ErrorCodes.js
  var ErrorCodes;
  var init_ErrorCodes = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ErrorCodes.js"() {
      ErrorCodes = {
        engineVersionMismatch: "TSP-1001",
        particlePositionNotFound: "TSP-1002",
        pluginRegisterAfterLoad: "TSP-1003",
        offscreenCanvasUnsupported: "TSP-1101",
        offscreenCanvasTransferFailed: "TSP-1102",
        hdrEnableInvalid: "TSP-1201",
        hdrModeInvalid: "TSP-1202",
        hdrPeakNitsInvalid: "TSP-1203"
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ErrorMessages.js
  var messages;
  var init_ErrorMessages = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ErrorMessages.js"() {
      init_ErrorCodes();
      messages = {
        [ErrorCodes.engineVersionMismatch]: "The tsParticles version is different from the loaded plugins version. Engine version: {0}. Plugin version: {1}",
        [ErrorCodes.particlePositionNotFound]: "a valid position cannot be found for particle",
        [ErrorCodes.pluginRegisterAfterLoad]: "Registration APIs must be called before engine initialization; plugins must be added from a registered loader",
        [ErrorCodes.offscreenCanvasUnsupported]: "OffscreenCanvas is required but not supported by this browser",
        [ErrorCodes.offscreenCanvasTransferFailed]: "OffscreenCanvas transfer failed",
        [ErrorCodes.hdrEnableInvalid]: 'Invalid HDR "enable" value: expected a boolean, got "{0}"',
        [ErrorCodes.hdrModeInvalid]: 'Invalid HDR "mode" value: expected one of {0}, got "{1}"',
        [ErrorCodes.hdrPeakNitsInvalid]: 'Invalid HDR "peakNits" value: expected a positive number, got "{0}"'
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ErrorUtils.js
  function addErrorMessages(extraMessages) {
    if (typeof process !== "undefined" && false) {
      return;
    }
    const catalog = ensureRegisteredMessages();
    for (const [code, message] of Object.entries(extraMessages)) {
      if (message !== void 0) {
        catalog.set(code, message);
      }
    }
  }
  function getErrorMessage(code, ...args) {
    if (typeof process !== "undefined" && false) {
      return `[tsParticles Error ${code}] https://particles.js.org/errors/#${code}`;
    }
    const template = ensureRegisteredMessages().get(code) ?? `Unknown error code ${code}`;
    return format(template, args);
  }
  var registeredMessages, ensureRegisteredMessages, toStringValue, format;
  var init_ErrorUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ErrorUtils.js"() {
      init_ErrorMessages();
      init_ErrorCodes();
      ensureRegisteredMessages = () => {
        registeredMessages ??= new Map(Object.entries(messages));
        return registeredMessages;
      };
      toStringValue = (value) => String(value);
      format = (template, args) => {
        return template.replace(/\{(\d+)\}/g, (match, index) => {
          const arg = args[Number(index)];
          return arg === void 0 ? match : toStringValue(arg);
        });
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js
  var OutModeDirection;
  var init_OutModeDirection = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Directions/OutModeDirection.js"() {
      (function(OutModeDirection2) {
        OutModeDirection2["bottom"] = "bottom";
        OutModeDirection2["left"] = "left";
        OutModeDirection2["right"] = "right";
        OutModeDirection2["top"] = "top";
      })(OutModeDirection || (OutModeDirection = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js
  var PixelMode;
  var init_PixelMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/PixelMode.js"() {
      (function(PixelMode2) {
        PixelMode2["precise"] = "precise";
        PixelMode2["percent"] = "percent";
      })(PixelMode || (PixelMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/Utils.js
  function isForbiddenKey(key) {
    return key === "__proto__" || key === "constructor" || key === "prototype";
  }
  function hasMatchMedia() {
    return typeof matchMedia !== "undefined";
  }
  function safeDocument() {
    return globalThis.document;
  }
  function safeMatchMedia(query) {
    if (!hasMatchMedia()) {
      return;
    }
    return matchMedia(query);
  }
  function safeMutationObserver(callback) {
    if (typeof MutationObserver === "undefined") {
      return;
    }
    return new MutationObserver(callback);
  }
  function isInArray(value, array) {
    return value === array || isArray(array) && array.includes(value);
  }
  function itemFromArray(array, index, useIndex = true) {
    return array[index !== void 0 && useIndex ? index % array.length : Math.floor(getRandom() * array.length)];
  }
  function isPointInside(point, size, offset, radius, direction) {
    return areBoundsInside(calculateBounds(point, radius ?? minRadius), size, offset, direction);
  }
  function areBoundsInside(bounds, size, offset, direction) {
    let inside = true;
    if (!direction || direction === OutModeDirection.bottom) {
      inside = bounds.top < size.height + offset.x;
    }
    if (inside && (!direction || direction === OutModeDirection.left)) {
      inside = bounds.right > offset.x;
    }
    if (inside && (!direction || direction === OutModeDirection.right)) {
      inside = bounds.left < size.width + offset.y;
    }
    if (inside && (!direction || direction === OutModeDirection.top)) {
      inside = bounds.bottom > offset.y;
    }
    return inside;
  }
  function calculateBounds(point, radius) {
    return {
      bottom: point.y + radius,
      left: point.x - radius,
      right: point.x + radius,
      top: point.y - radius
    };
  }
  function deepExtend(destination, ...sources) {
    for (const source of sources) {
      if (isNull(source)) {
        continue;
      }
      if (!isObject(source)) {
        destination = source;
        continue;
      }
      if (Array.isArray(source)) {
        if (!Array.isArray(destination)) {
          destination = [];
        }
      } else if (!isObject(destination) || Array.isArray(destination)) {
        destination = /* @__PURE__ */ Object.create(null);
      }
      const sourceKeys = Object.keys(source), hasNested = sourceKeys.some((k) => {
        const v = source[k];
        return isObject(v) || Array.isArray(v);
      });
      if (!hasNested) {
        const sourceDict = source, destDict = destination;
        for (const key of sourceKeys) {
          if (isForbiddenKey(key)) {
            continue;
          }
          const v = sourceDict[key];
          if (v !== void 0) {
            destDict[key] = v;
          }
        }
        continue;
      }
      for (const key of sourceKeys) {
        if (isForbiddenKey(key)) {
          continue;
        }
        const sourceDict = source, destDict = destination, value = sourceDict[key];
        destDict[key] = Array.isArray(value) ? value.map((v) => deepExtend(void 0, v)) : deepExtend(destDict[key], value);
      }
    }
    return destination;
  }
  function circleBounceDataFromParticle(p) {
    return {
      position: p.getPosition(),
      radius: p.getRadius(),
      mass: p.getMass(),
      velocity: p.velocity,
      factor: Vector.create(getRangeValue(p.options.bounce.horizontal.value), getRangeValue(p.options.bounce.vertical.value))
    };
  }
  function circleBounce(p1, p2) {
    const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [p1.position, p2.position], xDist = pos2.x - pos1.x, yDist = pos2.y - pos1.y, minimumDistance = 0;
    if (xVelocityDiff * xDist + yVelocityDiff * yDist < minimumDistance) {
      return;
    }
    const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = collisionVelocity(u1, u2, m1, m2), v2 = collisionVelocity(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
    p1.velocity.x = vFinal1.x * p1.factor.x;
    p1.velocity.y = vFinal1.y * p1.factor.y;
    p2.velocity.x = vFinal2.x * p2.factor.x;
    p2.velocity.y = vFinal2.y * p2.factor.y;
  }
  function executeOnSingleOrMultiple(obj, callback) {
    const defaultIndex3 = 0;
    return isArray(obj) ? obj.map((item, index) => callback(item, index)) : callback(obj, defaultIndex3);
  }
  function itemFromSingleOrMultiple(obj, index, useIndex) {
    return isArray(obj) ? itemFromArray(obj, index, useIndex) : obj;
  }
  function getPositionOrSize(positionOrSize, canvasSize) {
    const isPercent = positionOrSize.mode === PixelMode.percent;
    if (!isPercent) {
      const { mode: _, ...rest } = positionOrSize;
      return rest;
    }
    const isPosition = "x" in positionOrSize;
    if (isPosition) {
      return {
        x: positionOrSize.x / percentDenominator * canvasSize.width,
        y: positionOrSize.y / percentDenominator * canvasSize.height
      };
    } else {
      return {
        width: positionOrSize.width / percentDenominator * canvasSize.width,
        height: positionOrSize.height / percentDenominator * canvasSize.height
      };
    }
  }
  function getPosition(position, canvasSize) {
    return getPositionOrSize(position, canvasSize);
  }
  function cloneStyle(style) {
    const clonedStyle = safeDocument().createElement("div").style;
    for (const key in style) {
      const styleKey = style[key];
      if (!(key in style) || isNull(styleKey)) {
        continue;
      }
      const styleValue = style.getPropertyValue?.(styleKey);
      if (!styleValue) {
        continue;
      }
      const stylePriority = style.getPropertyPriority?.(styleKey);
      if (stylePriority) {
        clonedStyle.setProperty(styleKey, styleValue, stylePriority);
      } else {
        clonedStyle.setProperty(styleKey, styleValue);
      }
    }
    return clonedStyle;
  }
  function getFullScreenStyle(zIndex) {
    if (_cachedZIndex !== zIndex || !_cachedStyle) {
      _cachedZIndex = zIndex;
      const fullScreenStyle = safeDocument().createElement("div").style, radix = 10, style = {
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0",
        borderWidth: "0",
        position: "fixed",
        zIndex: zIndex.toString(radix),
        "z-index": zIndex.toString(radix),
        top: "0",
        left: "0",
        "pointer-events": "none"
      };
      for (const key in style) {
        const value = style[key];
        if (value === void 0) {
          continue;
        }
        fullScreenStyle.setProperty(key, value);
      }
      _cachedStyle = fullScreenStyle;
    }
    return _cachedStyle;
  }
  function manageListener(element, event, handler, add, options) {
    if (add) {
      let addOptions = { passive: true };
      if (isBoolean(options)) {
        addOptions.capture = options;
      } else if (options !== void 0) {
        addOptions = options;
      }
      element.addEventListener(event, handler, addOptions);
    } else {
      const removeOptions = options;
      element.removeEventListener(event, handler, removeOptions);
    }
  }
  async function getItemsFromInitializer(container, initializers) {
    return await Promise.all([...initializers.values()].map((t) => t(container)));
  }
  async function getItemMapFromInitializer(container, initializers) {
    const entries = await Promise.all([...initializers.entries()].map(([key, initializer]) => initializer(container).then((item) => [key, item])));
    return new Map(entries);
  }
  async function getDataFromUrl(data) {
    const url = itemFromSingleOrMultiple(data.url, data.index);
    if (!url) {
      return data.fallback;
    }
    try {
      const response = await fetch(url);
      if (response.ok) {
        const current = await response.json();
        if (isSourceOptionsValue(current)) {
          return current;
        }
        getLogger().error("invalid configuration data while retrieving config file");
      } else {
        getLogger().error(`${response.status.toString()} while retrieving config file`);
      }
    } catch (error) {
      getLogger().error(`error while retrieving config file: ${error}`);
    }
    return data.fallback;
  }
  function isSourceOptionsValue(value) {
    if (isArray(value)) {
      return value.every((entry) => isObject(entry) && !isArray(entry));
    }
    return isObject(value) && !isArray(value);
  }
  function getCanvasFromContainer(domContainer) {
    let canvasEl;
    const documentSafe = safeDocument(), isCanvas = domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === canvasTag;
    if (isCanvas) {
      canvasEl = domContainer;
      canvasEl.dataset[generatedAttribute] ??= generatedFalse;
      if (canvasEl.dataset[generatedAttribute] === generatedTrue) {
        canvasEl.style.width ||= fullPercent;
        canvasEl.style.height ||= fullPercent;
        canvasEl.style.pointerEvents = "none";
        canvasEl.style.setProperty("pointer-events", "none");
      }
    } else {
      const existingCanvases = domContainer.getElementsByTagName(canvasTag), foundCanvas = existingCanvases.item(canvasFirstIndex);
      if (foundCanvas) {
        canvasEl = foundCanvas;
        canvasEl.dataset[generatedAttribute] = generatedFalse;
      } else {
        canvasEl = documentSafe.createElement(canvasTag);
        canvasEl.dataset[generatedAttribute] = generatedTrue;
        domContainer.appendChild(canvasEl);
      }
      canvasEl.style.width ||= fullPercent;
      canvasEl.style.height ||= fullPercent;
      canvasEl.style.pointerEvents = "none";
      canvasEl.style.setProperty("pointer-events", "none");
    }
    return canvasEl;
  }
  function getDomContainer(id, source) {
    const documentSafe = safeDocument();
    let domContainer = source ?? documentSafe.getElementById(id);
    if (domContainer) {
      return domContainer;
    }
    domContainer = documentSafe.createElement("canvas");
    domContainer.id = id;
    domContainer.dataset[generatedAttribute] = generatedTrue;
    documentSafe.body.append(domContainer);
    return domContainer;
  }
  var _cachedZIndex, _cachedStyle;
  var init_Utils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/Utils.js"() {
      init_Constants();
      init_MathUtils();
      init_TypeUtils();
      init_OutModeDirection();
      init_PixelMode();
      init_Vectors();
      init_LogUtils();
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js
  var EventDispatcher;
  var init_EventDispatcher = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/EventDispatcher.js"() {
      init_Constants();
      EventDispatcher = class {
        #listeners;
        constructor() {
          this.#listeners = /* @__PURE__ */ new Map();
        }
        addEventListener(type, listener) {
          this.removeEventListener(type, listener);
          const arr = this.#listeners.get(type);
          this.#listeners.set(type, arr ? [...arr, listener] : [listener]);
        }
        dispatchEvent(type, args) {
          const listeners = this.#listeners.get(type);
          listeners?.forEach((handler) => {
            handler(args);
          });
        }
        hasEventListener(type) {
          return !!this.#listeners.get(type);
        }
        removeAllEventListeners(type) {
          if (!type) {
            this.#listeners = /* @__PURE__ */ new Map();
          } else {
            this.#listeners.delete(type);
          }
        }
        removeEventListener(type, listener) {
          const arr = this.#listeners.get(type);
          if (!arr) {
            return;
          }
          const length = arr.length, idx = arr.indexOf(listener);
          if (idx < minIndex) {
            return;
          }
          if (length === deleteCount) {
            this.#listeners.delete(type);
          } else {
            this.#listeners.set(type, [...arr.slice(minIndex, idx), ...arr.slice(idx + deleteCount)]);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js
  var EventType;
  var init_EventType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/EventType.js"() {
      (function(EventType2) {
        EventType2["configAdded"] = "configAdded";
        EventType2["containerInit"] = "containerInit";
        EventType2["particlesSetup"] = "particlesSetup";
        EventType2["containerStarted"] = "containerStarted";
        EventType2["containerStopped"] = "containerStopped";
        EventType2["containerDestroyed"] = "containerDestroyed";
        EventType2["containerPaused"] = "containerPaused";
        EventType2["containerPlay"] = "containerPlay";
        EventType2["containerBuilt"] = "containerBuilt";
        EventType2["particleAdded"] = "particleAdded";
        EventType2["particleDestroyed"] = "particleDestroyed";
        EventType2["particleRemoved"] = "particleRemoved";
      })(EventType || (EventType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/PluginManager.js
  var PluginManager;
  var init_PluginManager = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/PluginManager.js"() {
      init_ErrorUtils();
      init_EventType();
      PluginManager = class {
        colorManagers = /* @__PURE__ */ new Map();
        easingFunctions = /* @__PURE__ */ new Map();
        initializers = {
          effects: /* @__PURE__ */ new Map(),
          shapes: /* @__PURE__ */ new Map(),
          updaters: /* @__PURE__ */ new Map()
        };
        palettes = /* @__PURE__ */ new Map();
        presets = /* @__PURE__ */ new Map();
        #activeLoaderCount = 0;
        #allLoadersSet = /* @__PURE__ */ new Set();
        #configs = /* @__PURE__ */ new Map();
        #engine;
        #executedSet = /* @__PURE__ */ new Set();
        #inFlightLoaders = /* @__PURE__ */ new Set();
        #initialized = false;
        #initPromise;
        #isRunningLoaders = false;
        #loaderEngine;
        #loadPromises = /* @__PURE__ */ new Set();
        #plugins = [];
        #pluginsView;
        constructor(engine) {
          this.#engine = engine;
          const boundMethods = /* @__PURE__ */ new WeakMap(), loaderInit = () => this.#activeLoaderCount > 0 ? Promise.resolve() : engine.init();
          this.#loaderEngine = new Proxy(engine, {
            get: (target, property) => {
              if (property === "init") {
                return loaderInit;
              }
              const value = Reflect.get(target, property, target);
              if (typeof value !== "function") {
                return value;
              }
              let boundMethod = boundMethods.get(value);
              if (!boundMethod) {
                boundMethod = (...args) => Reflect.apply(value, target, args);
                boundMethods.set(value, boundMethod);
              }
              return boundMethod;
            }
          });
        }
        get configs() {
          const res = {};
          for (const [name, config] of this.#configs) {
            res[name] = config;
          }
          return res;
        }
        get initialized() {
          return this.#initialized;
        }
        get plugins() {
          return this.#pluginsView ??= Object.freeze([...this.#plugins]);
        }
        addColorManager(name, manager) {
          this.#checkRegistrationOpen();
          this.colorManagers.set(name, manager);
        }
        addConfig(config) {
          this.#checkRegistrationOpen();
          const key = config.key ?? config.name ?? "default";
          this.#configs.set(key, config);
          this.#engine.dispatchEvent(EventType.configAdded, { data: { name: key, config } });
        }
        addEasing(name, easing) {
          this.#checkRegistrationOpen();
          if (this.easingFunctions.get(name)) {
            return;
          }
          this.easingFunctions.set(name, easing);
        }
        addEffect(effect, drawer) {
          this.#checkRegistrationOpen();
          this.initializers.effects.set(effect, drawer);
        }
        addPalette(name, palette) {
          this.#checkRegistrationOpen();
          this.palettes.set(name, palette);
        }
        addParticleUpdater(name, updaterInitializer) {
          this.#checkRegistrationOpen();
          this.initializers.updaters.set(name, updaterInitializer);
        }
        addPlugin(plugin) {
          if (!this.#isRunningLoaders) {
            throw new Error(getErrorMessage(ErrorCodes.pluginRegisterAfterLoad));
          }
          if (this.getPlugin(plugin.id)) {
            return;
          }
          this.#plugins.push(plugin);
          this.#pluginsView = void 0;
        }
        addPreset(preset, options, override = false) {
          this.#checkRegistrationOpen();
          if (!(override || !this.getPreset(preset))) {
            return;
          }
          this.presets.set(preset, options);
        }
        addShape(shapes, drawer) {
          this.#checkRegistrationOpen();
          for (const shape of shapes) {
            this.initializers.shapes.set(shape, drawer);
          }
        }
        getEasing(name) {
          return this.easingFunctions.get(name) ?? ((value) => value);
        }
        getPalette(name) {
          return this.palettes.get(name);
        }
        getPlugin(plugin) {
          return this.#plugins.find((t) => t.id === plugin);
        }
        getPreset(preset) {
          return this.presets.get(preset);
        }
        async init() {
          if (this.#initialized) {
            return;
          }
          if (this.#initPromise) {
            return this.#initPromise;
          }
          this.#initPromise = Promise.resolve().then(async () => {
            this.#isRunningLoaders = true;
            this.#allLoadersSet = new Set(this.#loadPromises);
            try {
              while (this.#inFlightLoaders.size > 0 || [...this.#allLoadersSet].some((loader) => !this.#executedSet.has(loader))) {
                for (const loader of this.#allLoadersSet) {
                  await this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
                }
                const inFlightLoaders = [...this.#inFlightLoaders];
                if (inFlightLoaders.length) {
                  await Promise.all(inFlightLoaders);
                }
              }
              this.#loadPromises.clear();
              this.#initialized = true;
            } finally {
              this.#isRunningLoaders = false;
              this.#initPromise = void 0;
            }
          });
          return this.#initPromise;
        }
        async register(...loaders) {
          this.#checkRegistrationOpen();
          for (const loader of loaders) {
            if (this.#isRunningLoaders) {
              this.#loadPromises.add(loader);
              await this.#runLoader(loader, this.#executedSet, this.#allLoadersSet);
            } else {
              this.#loadPromises.add(loader);
            }
          }
        }
        #checkRegistrationOpen() {
          if (this.#initialized) {
            throw new Error(getErrorMessage(ErrorCodes.pluginRegisterAfterLoad));
          }
        }
        async #runLoader(loader, executed, allLoaders) {
          if (executed.has(loader)) {
            return;
          }
          executed.add(loader);
          allLoaders.add(loader);
          this.#activeLoaderCount++;
          const loaderPromise = (async () => loader(this.#loaderEngine))();
          this.#inFlightLoaders.add(loaderPromise);
          try {
            await loaderPromise;
          } catch (error) {
            executed.delete(loader);
            throw error;
          } finally {
            this.#activeLoaderCount--;
            this.#inFlightLoaders.delete(loaderPromise);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js
  var AlterType;
  var init_AlterType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/AlterType.js"() {
      (function(AlterType2) {
        AlterType2["darken"] = "darken";
        AlterType2["enlighten"] = "enlighten";
      })(AlterType || (AlterType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js
  var AnimationStatus;
  var init_AnimationStatus = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/AnimationStatus.js"() {
      (function(AnimationStatus2) {
        AnimationStatus2["increasing"] = "increasing";
        AnimationStatus2["decreasing"] = "decreasing";
      })(AnimationStatus || (AnimationStatus = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/HdrMode.js
  var HdrMode;
  var init_HdrMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/HdrMode.js"() {
      (function(HdrMode2) {
        HdrMode2["standard"] = "standard";
        HdrMode2["natural"] = "natural";
        HdrMode2["vivid"] = "vivid";
        HdrMode2["cinematic"] = "cinematic";
        HdrMode2["dynamic"] = "dynamic";
      })(HdrMode || (HdrMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js
  function getCachedStyle(key, generator) {
    let cached = styleCache.get(key);
    if (!cached) {
      cached = generator();
      if (styleCache.size > maxStyleCacheSize) {
        styleCache.clear();
      }
      styleCache.set(key, cached);
    }
    return cached;
  }
  function acesFilmic(x) {
    return clamp(x * (acesA * x + acesB) / (x * (acesC * x + acesD) + acesE), none, one);
  }
  function srgbToLinear(c) {
    return c <= srgbThreshold ? c / srgbDivisor : Math.pow((c + srgbOffset) / srgbScale, srgbExponent);
  }
  function linearToSrgb(c) {
    return c <= linearThreshold ? c * linearScale : srgbScale * Math.pow(c, one / srgbExponent) - srgbOffset;
  }
  function applyHdrModeAdjustments(r, g, b, mode, maxChannel) {
    switch (mode) {
      case HdrMode.vivid: {
        const avg = (r + g + b) / channelCount;
        return {
          b: clamp(clamp(avg + (b - avg) * saturationBoost, none, maxChannel) * lightnessBoost, none, maxChannel),
          g: clamp(clamp(avg + (g - avg) * saturationBoost, none, maxChannel) * lightnessBoost, none, maxChannel),
          r: clamp(clamp(avg + (r - avg) * saturationBoost, none, maxChannel) * lightnessBoost, none, maxChannel)
        };
      }
      case HdrMode.cinematic: {
        const tempR = r * temperatureR, tempB = b * temperatureB, avg = (tempR + g + tempB) / channelCount;
        return {
          b: clamp(avg + (tempB - avg) * contrastFactor, none, maxChannel),
          g: clamp(avg + (g - avg) * contrastFactor, none, maxChannel),
          r: clamp(avg + (tempR - avg) * contrastFactor, none, maxChannel)
        };
      }
      case HdrMode.dynamic: {
        const luminance = luminanceR * r + luminanceG * g + luminanceB * b, vividWeight = Math.min(one, luminance * dynamicLuminanceFactor), naturalWeight = one - vividWeight, avg = (r + g + b) / channelCount, vividR = clamp(avg + (r - avg) * saturationBoost, none, maxChannel) * lightnessBoost, vividG = clamp(avg + (g - avg) * saturationBoost, none, maxChannel) * lightnessBoost, vividB = clamp(avg + (b - avg) * saturationBoost, none, maxChannel) * lightnessBoost;
        return {
          b: clamp(b * naturalWeight + vividB * vividWeight, none, maxChannel),
          g: clamp(g * naturalWeight + vividG * vividWeight, none, maxChannel),
          r: clamp(r * naturalWeight + vividR * vividWeight, none, maxChannel)
        };
      }
      case HdrMode.standard:
        return { b, g, r };
      case HdrMode.natural:
      default:
        return { b, g, r };
    }
  }
  function stringToRgba(pluginManager, input) {
    if (!input) {
      return;
    }
    for (const manager of pluginManager.colorManagers.values()) {
      if (manager.accepts(input)) {
        return manager.parseString(input);
      }
    }
    return void 0;
  }
  function rangeColorToRgb(pluginManager, input, index, useIndex = true) {
    if (!input) {
      return;
    }
    const color = isString(input) ? { value: input } : input;
    if (isString(color.value)) {
      return colorToRgb(pluginManager, color.value, index, useIndex);
    }
    if (isArray(color.value)) {
      const value = itemFromArray(color.value, index, useIndex);
      if (!value) {
        return;
      }
      return rangeColorToRgb(pluginManager, {
        value
      });
    }
    for (const manager of pluginManager.colorManagers.values()) {
      const res = manager.handleRangeColor(color);
      if (res) {
        return res;
      }
    }
    return void 0;
  }
  function colorToRgb(pluginManager, input, index, useIndex = true) {
    if (!input) {
      return;
    }
    const color = isString(input) ? { value: input } : input;
    if (isString(color.value)) {
      return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(pluginManager, color.value);
    }
    if (isArray(color.value)) {
      const value = itemFromArray(color.value, index, useIndex);
      if (!value) {
        return;
      }
      return colorToRgb(pluginManager, {
        value
      });
    }
    for (const manager of pluginManager.colorManagers.values()) {
      const res = manager.handleColor(color);
      if (res) {
        return res;
      }
    }
    return void 0;
  }
  function rangeColorToHsl(pluginManager, color, index, useIndex = true) {
    const rgb = rangeColorToRgb(pluginManager, color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : void 0;
  }
  function rgbToHsl(color) {
    const r1 = color.r / rgbMax, g1 = color.g / rgbMax, b1 = color.b / rgbMax, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
      h: hMin,
      l: (max + min) * half,
      s: sMin
    };
    if (max !== min) {
      res.s = res.l < half ? (max - min) / (max + min) : (max - min) / (double - max - min);
      if (r1 === max) {
        res.h = (g1 - b1) / (max - min);
      } else if (g1 === max) {
        res.h = double + (b1 - r1) / (max - min);
      } else {
        res.h = double * double + (r1 - g1) / (max - min);
      }
    }
    res.l *= lMax;
    res.s *= sMax;
    res.h *= hPhase;
    if (res.h < hMin) {
      res.h += hMax;
    }
    if (res.h >= hMax) {
      res.h -= hMax;
    }
    return res;
  }
  function stringToRgb(pluginManager, input) {
    return stringToRgba(pluginManager, input);
  }
  function hslChannel(temp1, temp2, temp3) {
    const temp3Min = 0, temp3Max = 1;
    if (temp3 < temp3Min) {
      temp3++;
    }
    if (temp3 > temp3Max) {
      temp3--;
    }
    if (temp3 * sextuple < temp3Max) {
      return temp1 + (temp2 - temp1) * sextuple * temp3;
    }
    if (temp3 * double < temp3Max) {
      return temp2;
    }
    if (temp3 * triple < temp3Max * double) {
      const temp3Offset = double / triple;
      return temp1 + (temp2 - temp1) * (temp3Offset - temp3) * sextuple;
    }
    return temp1;
  }
  function hslToRgb(hsl) {
    const h = (hsl.h % hMax + hMax) % hMax, s = Math.max(sMin, Math.min(sMax, hsl.s)), l = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h / hMax, sNormalized = s / sMax, lNormalized = l / lMax;
    if (s === sMin) {
      const grayscaleValue = Math.round(lNormalized * rgbMax);
      return { r: grayscaleValue, g: grayscaleValue, b: grayscaleValue };
    }
    const temp2 = lNormalized < half ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp1 = double * lNormalized - temp2, phaseThird = phaseNumerator / triple, red = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized + phaseThird)), green = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized)), blue = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized - phaseThird));
    return { r: Math.round(red), g: Math.round(green), b: Math.round(blue) };
  }
  function hslToRgbFloat(hsl) {
    const h = (hsl.h % hMax + hMax) % hMax, s = Math.max(sMin, Math.min(sMax, hsl.s)), l = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h / hMax, sNormalized = s / sMax, lNormalized = l / lMax;
    if (s === sMin) {
      const grayscaleValue = lNormalized * rgbMax;
      return { r: grayscaleValue, g: grayscaleValue, b: grayscaleValue };
    }
    const temp2 = lNormalized < half ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp1 = double * lNormalized - temp2, phaseThird = phaseNumerator / triple, red = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized + phaseThird)), green = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized)), blue = Math.min(rgbMax, rgbMax * hslChannel(temp1, temp2, hNormalized - phaseThird));
    return { r: red, g: green, b: blue };
  }
  function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
      a: hsla.a,
      b: rgbResult.b,
      g: rgbResult.g,
      r: rgbResult.r
    };
  }
  function getRandomRgbColor(min, hdr) {
    const fixedMin = min ?? defaultRgbMin;
    if (hdr) {
      return {
        r: getRandomInRange(fixedMin, rgbMax),
        g: getRandomInRange(fixedMin, rgbMax),
        b: getRandomInRange(fixedMin, rgbMax)
      };
    }
    const fixedMax = rgbMax + identity, getRgbInRangeValue = () => Math.floor(getRandomInRange(fixedMin, fixedMax));
    return {
      b: getRgbInRangeValue(),
      g: getRgbInRangeValue(),
      r: getRgbInRangeValue()
    };
  }
  function getStyleFromRgb(color, hdr, opacity, peakNits, mode) {
    const rgbPrecision = hdr ? hdrRgbFixedPrecision : rgbFixedPrecision, op = opacity ?? defaultOpacity, key = hdr ? `rgb-${color.r.toFixed(rgbPrecision)}-${color.g.toFixed(rgbPrecision)}-${color.b.toFixed(rgbPrecision)}-hdr-${op.toString()}-${(peakNits ?? maxNits).toString()}-${mode ?? HdrMode.standard}` : `rgb-${color.r.toFixed(rgbPrecision)}-${color.g.toFixed(rgbPrecision)}-${color.b.toFixed(rgbPrecision)}-sdr-${op.toString()}`;
    return getCachedStyle(key, () => hdr ? getHdrStyleFromRgb(color, opacity, peakNits, mode) : getSdrStyleFromRgb(color, opacity));
  }
  function getHdrStyleFromRgb(color, opacity, peakNits = maxNits, mode = HdrMode.standard) {
    const headroom = peakNits / sdrReferenceWhiteNits, middleGray = 0.18, mapped = hdrToneMapColor(color, headroom, middleGray, mode);
    return `color(display-p3 ${mapped.r.toString()} ${mapped.g.toString()} ${mapped.b.toString()} / ${(opacity ?? defaultOpacity).toString()})`;
  }
  function hdrToneMapColor(color, headroom, middleGray, mode) {
    const rNorm = color.r / rgbMax, gNorm = color.g / rgbMax, bNorm = color.b / rgbMax;
    if (mode !== HdrMode.natural && mode !== HdrMode.vivid && mode !== HdrMode.cinematic && mode !== HdrMode.dynamic) {
      return { b: bNorm, g: gNorm, r: rNorm };
    }
    const maxChannel = Math.max(one, headroom), luminance = luminanceR * rNorm + luminanceG * gNorm + luminanceB * bNorm, mappedLuminance = hdrToneMap(luminance, headroom, middleGray), scale = luminance > none ? mappedLuminance / luminance : one;
    return applyHdrModeAdjustments(clamp(rNorm * scale, none, maxChannel), clamp(gNorm * scale, none, maxChannel), clamp(bNorm * scale, none, maxChannel), mode, maxChannel);
  }
  function hdrToneMap(normalized, headroom, middleGray) {
    if (normalized <= middleGray) {
      return acesFilmic(normalized);
    }
    const expanded = normalized + (normalized - middleGray) * (headroom - one);
    return acesFilmic(expanded);
  }
  function getSdrStyleFromRgb(color, opacity) {
    return `rgba(${color.r.toString()}, ${color.g.toString()}, ${color.b.toString()}, ${(opacity ?? defaultOpacity).toString()})`;
  }
  function getStyleFromHsl(color, hdr, opacity, peakNits, mode) {
    const hslPrecision = hdr ? hdrHslFixedPrecision : hslFixedPrecision, op = opacity ?? defaultOpacity, key = hdr ? `hsl-${color.h.toFixed(hslPrecision)}-${color.s.toFixed(hslPrecision)}-${color.l.toFixed(hslPrecision)}-hdr-${op.toString()}-${(peakNits ?? maxNits).toString()}-${mode ?? HdrMode.standard}` : `hsl-${color.h.toFixed(hslPrecision)}-${color.s.toFixed(hslPrecision)}-${color.l.toFixed(hslPrecision)}-sdr-${op.toString()}`;
    return getCachedStyle(key, () => hdr ? getStyleFromRgb(hslToRgbFloat(color), true, opacity, peakNits, mode) : `hsla(${color.h.toString()}, ${color.s.toString()}%, ${color.l.toString()}%, ${op.toString()})`);
  }
  function colorMix(color1, color2, size1, size2, hdr) {
    let rgb1 = color1, rgb2 = color2;
    if (!("r" in rgb1)) {
      rgb1 = hdr ? hslToRgbFloat(color1) : hslToRgb(color1);
    }
    if (!("r" in rgb2)) {
      rgb2 = hdr ? hslToRgbFloat(color2) : hslToRgb(color2);
    }
    if (hdr) {
      const lin1 = {
        b: srgbToLinear(rgb1.b / rgbMax),
        g: srgbToLinear(rgb1.g / rgbMax),
        r: srgbToLinear(rgb1.r / rgbMax)
      }, lin2 = {
        b: srgbToLinear(rgb2.b / rgbMax),
        g: srgbToLinear(rgb2.g / rgbMax),
        r: srgbToLinear(rgb2.r / rgbMax)
      }, totalWeight = size1 + size2;
      return {
        b: linearToSrgb((lin1.b * size1 + lin2.b * size2) / totalWeight) * rgbMax,
        g: linearToSrgb((lin1.g * size1 + lin2.g * size2) / totalWeight) * rgbMax,
        r: linearToSrgb((lin1.r * size1 + lin2.r * size2) / totalWeight) * rgbMax
      };
    }
    return {
      b: mix(rgb1.b, rgb2.b, size1, size2),
      g: mix(rgb1.g, rgb2.g, size1, size2),
      r: mix(rgb1.r, rgb2.r, size1, size2)
    };
  }
  function getLinkColor(p1, p2, linkColor, hdr) {
    if (linkColor === randomColorValue) {
      return getRandomRgbColor();
    } else if (linkColor === midColorValue) {
      const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = p2?.getFillColor() ?? p2?.getStrokeColor();
      if (sourceColor && destColor && p2) {
        return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius(), hdr);
      } else {
        const hslColor = sourceColor ?? destColor;
        if (hslColor) {
          return hslToRgb(hslColor);
        }
      }
    } else {
      return linkColor;
    }
    return void 0;
  }
  function getLinkRandomColor(pluginManager, optColor, blink, consent) {
    const color = isString(optColor) ? optColor : optColor.value;
    if (color === randomColorValue) {
      if (consent) {
        return rangeColorToRgb(pluginManager, {
          value: color
        });
      }
      if (blink) {
        return randomColorValue;
      }
      return midColorValue;
    } else if (color === midColorValue) {
      return midColorValue;
    } else {
      return rangeColorToRgb(pluginManager, {
        value: color
      });
    }
  }
  function getHslFromAnimation(animation) {
    return animation === void 0 ? void 0 : {
      h: animation.h.value,
      s: animation.s.value,
      l: animation.l.value
    };
  }
  function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    const resColor = {
      h: {
        enable: false,
        value: hsl.h,
        min: hMin,
        max: hMax
      },
      s: {
        enable: false,
        value: hsl.s,
        min: sMin,
        max: sMax
      },
      l: {
        enable: false,
        value: hsl.l,
        min: lMin,
        max: lMax
      }
    };
    if (animationOptions) {
      setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
      setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
      setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
  }
  function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    colorValue.min = colorAnimation.min;
    colorValue.max = colorAnimation.max;
    if (colorValue.enable) {
      colorValue.velocity = getRangeValue(colorAnimation.speed) / percentDenominator * reduceFactor;
      colorValue.decay = decayOffset - getRangeValue(colorAnimation.decay);
      colorValue.status = AnimationStatus.increasing;
      colorValue.loops = defaultLoops;
      colorValue.maxLoops = getRangeValue(colorAnimation.count);
      colorValue.time = defaultTime;
      colorValue.delayTime = getRangeValue(colorAnimation.delay) * millisecondsToSeconds;
      if (!colorAnimation.sync) {
        colorValue.velocity *= getRandom();
        colorValue.value *= getRandom();
      }
      colorValue.initialValue = colorValue.value;
      colorValue.offset = setRangeValue(colorAnimation.offset);
    } else {
      colorValue.velocity = defaultVelocity;
    }
  }
  function updateColorValue(data, decrease, delta, _hdr) {
    const minLoops2 = 0, minDelay = 0, identity4 = 1, minVelocity2 = 0, minOffset = 0, velocityFactor = 3.6;
    if (!data.enable || (data.maxLoops ?? minLoops2) > minLoops2 && (data.loops ?? minLoops2) > (data.maxLoops ?? minLoops2)) {
      return;
    }
    data.time ??= 0;
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
      data.time += delta.value;
    }
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) {
      return;
    }
    const offset = data.offset ? randomInRangeValue(data.offset) : minOffset, velocity = (data.velocity ?? minVelocity2) * delta.factor + offset * velocityFactor, decay = data.decay ?? identity4, max = data.max, min = data.min;
    if (!decrease || data.status === AnimationStatus.increasing) {
      data.value += velocity;
      if (data.value > max) {
        data.loops ??= 0;
        data.loops++;
        if (decrease) {
          data.status = AnimationStatus.decreasing;
        } else {
          data.value -= max;
        }
      }
    } else {
      data.value -= velocity;
      if (data.value < min) {
        data.loops ??= 0;
        data.loops++;
        data.status = AnimationStatus.increasing;
      }
    }
    if (data.velocity && decay !== identity4) {
      data.velocity *= decay;
    }
    data.value = clamp(data.value, min, max);
  }
  function updateColor(color, delta, hdr) {
    if (!color) {
      return;
    }
    const { h, s, l } = color;
    updateColorValue(h, false, delta, hdr);
    updateColorValue(s, true, delta, hdr);
    updateColorValue(l, true, delta, hdr);
  }
  function alterHsl(color, type, value) {
    return {
      h: color.h,
      s: color.s,
      l: color.l + (type === AlterType.darken ? -lFactor : lFactor) * value
    };
  }
  var styleCache, maxStyleCacheSize, rgbFixedPrecision, hslFixedPrecision, hdrRgbFixedPrecision, hdrHslFixedPrecision, sdrReferenceWhiteNits, acesA, acesB, acesC, acesD, acesE, saturationBoost, lightnessBoost, temperatureR, temperatureB, contrastFactor, luminanceR, luminanceG, luminanceB, dynamicLuminanceFactor, channelCount, srgbThreshold, srgbDivisor, srgbOffset, srgbScale, srgbExponent, linearThreshold, linearScale;
  var init_ColorUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ColorUtils.js"() {
      init_MathUtils();
      init_Constants();
      init_TypeUtils();
      init_AlterType();
      init_AnimationStatus();
      init_HdrMode();
      init_Utils();
      styleCache = /* @__PURE__ */ new Map();
      maxStyleCacheSize = 2e3;
      rgbFixedPrecision = 2;
      hslFixedPrecision = 2;
      hdrRgbFixedPrecision = 4;
      hdrHslFixedPrecision = 4;
      sdrReferenceWhiteNits = 203;
      acesA = 2.51;
      acesB = 0.03;
      acesC = 2.43;
      acesD = 0.59;
      acesE = 0.14;
      saturationBoost = 1.15;
      lightnessBoost = 1.05;
      temperatureR = 1.05;
      temperatureB = 0.95;
      contrastFactor = 1.1;
      luminanceR = 0.2126;
      luminanceG = 0.7152;
      luminanceB = 0.0722;
      dynamicLuminanceFactor = 2;
      channelCount = 3;
      srgbThreshold = 0.04045;
      srgbDivisor = 12.92;
      srgbOffset = 0.055;
      srgbScale = 1.055;
      srgbExponent = 2.4;
      linearThreshold = 31308e-7;
      linearScale = 12.92;
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/DrawLayer.js
  var DrawLayer;
  var init_DrawLayer = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/DrawLayer.js"() {
      (function(DrawLayer2) {
        DrawLayer2[DrawLayer2["BackgroundElement"] = 0] = "BackgroundElement";
        DrawLayer2[DrawLayer2["BackgroundDraw"] = 1] = "BackgroundDraw";
        DrawLayer2[DrawLayer2["BackgroundMask"] = 2] = "BackgroundMask";
        DrawLayer2[DrawLayer2["CanvasSetup"] = 3] = "CanvasSetup";
        DrawLayer2[DrawLayer2["PluginContent"] = 4] = "PluginContent";
        DrawLayer2[DrawLayer2["Particles"] = 5] = "Particles";
        DrawLayer2[DrawLayer2["CanvasCleanup"] = 6] = "CanvasCleanup";
        DrawLayer2[DrawLayer2["Foreground"] = 7] = "Foreground";
      })(DrawLayer || (DrawLayer = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/RenderManager.js
  function setTransformValue(factor, newFactor, key) {
    const newValue = newFactor[key];
    if (newValue !== void 0) {
      factor[key] = (factor[key] ?? defaultTransformValue) * newValue;
    }
  }
  var fColorIndex, sColorIndex, RenderManager;
  var init_RenderManager = __esm({
    "node_modules/@tsparticles/engine/browser/Core/RenderManager.js"() {
      init_Constants();
      init_ColorUtils();
      init_DrawLayer();
      init_LogUtils();
      fColorIndex = 0;
      sColorIndex = 1;
      RenderManager = class {
        #backgroundElement;
        #backgroundWarnings;
        #canvasClearPlugins;
        #canvasManager;
        #colorPlugins;
        #container;
        #context;
        #contextSettings;
        #drawParticlePlugins;
        #drawParticlesCleanupPlugins;
        #drawParticlesSetupPlugins;
        #layers;
        #pluginManager;
        #postDrawUpdaters;
        #preDrawUpdaters;
        #reusableColorStyles = {};
        #reusablePluginColors = [void 0, void 0];
        #reusableTransform = {};
        constructor(pluginManager, container, canvasManager) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.#canvasManager = canvasManager;
          this.#context = null;
          this.#backgroundElement = null;
          this.#backgroundWarnings = /* @__PURE__ */ new Set();
          this.#preDrawUpdaters = [];
          this.#postDrawUpdaters = [];
          this.#canvasClearPlugins = [];
          this.#colorPlugins = [];
          this.#drawParticlePlugins = [];
          this.#drawParticlesCleanupPlugins = [];
          this.#drawParticlesSetupPlugins = [];
          this.#layers = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: []
          };
        }
        get settings() {
          return this.#contextSettings;
        }
        canvasClear() {
          if (!this.#container.actualOptions.clear) {
            return;
          }
          this.draw((ctx) => {
            ctx.clearRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
          });
        }
        clear() {
          const visited = /* @__PURE__ */ new Set();
          for (const plugin of this.#canvasClearPlugins) {
            visited.add(plugin);
            if (plugin.canvasClear?.() ?? false) {
              return plugin;
            }
          }
          for (const layer of Object.values(DrawLayer)) {
            if (typeof layer === "number") {
              for (const plugin of this.#getLayerPlugins(layer)) {
                if (visited.has(plugin)) {
                  continue;
                }
                visited.add(plugin);
                if (plugin.canvasClear?.() ?? false) {
                  return plugin;
                }
              }
            }
          }
          this.canvasClear();
          return void 0;
        }
        destroy() {
          this.stop();
          this.#backgroundElement = null;
          this.#backgroundWarnings.clear();
          this.#preDrawUpdaters = [];
          this.#postDrawUpdaters = [];
          this.#canvasClearPlugins = [];
          this.#colorPlugins = [];
          this.#drawParticlePlugins = [];
          this.#drawParticlesCleanupPlugins = [];
          this.#drawParticlesSetupPlugins = [];
          for (const layer of Object.values(DrawLayer)) {
            if (typeof layer === "number") {
              this.#layers[layer] = [];
            }
          }
        }
        draw(cb) {
          const ctx = this.#context;
          if (!ctx) {
            return;
          }
          return cb(ctx);
        }
        drawParticle(particle, delta) {
          if (particle.spawning || particle.destroyed) {
            return;
          }
          const radius = particle.getRadius();
          if (radius <= minimumSize) {
            return;
          }
          const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor();
          let [fColor, sColor] = this.#getPluginParticleColors(particle);
          fColor ??= pfColor;
          sColor ??= psColor;
          if (!fColor && !sColor) {
            return;
          }
          const container = this.#container, zIndexOptions = particle.options.zIndex, zIndexFactor = zIndexFactorOffset - particle.zIndexFactor, { fillOpacity, opacity, strokeOpacity } = particle.getOpacity(), transform = this.#reusableTransform, colorStyles = this.#reusableColorStyles, fill = fColor ? getStyleFromHsl(fColor, container.hdr, fillOpacity * opacity, container.peakNits, container.hdrMode) : void 0, stroke = sColor ? getStyleFromHsl(sColor, container.hdr, strokeOpacity * opacity, container.peakNits, container.hdrMode) : fill;
          transform.a = transform.b = transform.c = transform.d = void 0;
          colorStyles.fill = fill;
          colorStyles.stroke = stroke;
          this.draw((context) => {
            for (const plugin of this.#drawParticlesSetupPlugins) {
              plugin.drawParticleSetup?.(context, particle, delta);
            }
            this.#applyPreDrawUpdaters(context, particle, radius, opacity, colorStyles, transform);
            this.#drawParticle({
              container,
              context,
              particle,
              delta,
              colorStyles,
              radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
              opacity,
              transform
            });
            this.#applyPostDrawUpdaters(particle);
            for (const plugin of this.#drawParticlesCleanupPlugins) {
              plugin.drawParticleCleanup?.(context, particle, delta);
            }
          });
        }
        drawParticlePlugins(particle, delta) {
          this.draw((ctx) => {
            for (const plugin of this.#drawParticlePlugins) {
              this.#drawParticlePlugin(ctx, plugin, particle, delta);
            }
          });
        }
        drawParticles(delta) {
          const { particles, actualOptions } = this.#container;
          this.clear();
          particles.update(delta);
          this.draw((ctx) => {
            const width = this.#canvasManager.size.width, height = this.#canvasManager.size.height;
            if (this.#backgroundElement) {
              try {
                ctx.drawImage(this.#backgroundElement, originPoint.x, originPoint.y, width, height);
              } catch {
                this.#warnOnce("background-element-draw-error", "Error drawing background element onto canvas");
              }
            }
            const background = actualOptions.background;
            if (background.draw) {
              try {
                background.draw(ctx, delta);
              } catch {
                this.#warnOnce("background-draw-error", "Error in background.draw callback");
              }
            }
            for (const plugin of this.#getLayerPlugins(DrawLayer.BackgroundMask)) {
              plugin.canvasPaint?.();
            }
            for (const plugin of this.#getLayerPlugins(DrawLayer.CanvasSetup)) {
              plugin.drawSettingsSetup?.(ctx, delta);
            }
            for (const plugin of this.#getLayerPlugins(DrawLayer.PluginContent)) {
              plugin.draw?.(ctx, delta);
            }
            particles.drawParticles(delta);
            for (const plugin of this.#getLayerPlugins(DrawLayer.CanvasCleanup)) {
              plugin.clearDraw?.(ctx, delta);
              plugin.drawSettingsCleanup?.(ctx, delta);
            }
          });
        }
        init() {
          this.initUpdaters();
          this.initPlugins();
          this.#resolveBackgroundElement();
          this.paint();
        }
        initPlugins() {
          this.#canvasClearPlugins = [];
          this.#colorPlugins = [];
          this.#drawParticlePlugins = [];
          this.#drawParticlesSetupPlugins = [];
          this.#drawParticlesCleanupPlugins = [];
          for (const layer of Object.values(DrawLayer)) {
            if (typeof layer === "number") {
              this.#layers[layer] = [];
            }
          }
          this.#initPluginsArray();
        }
        initUpdaters() {
          this.#preDrawUpdaters = [];
          this.#postDrawUpdaters = [];
          for (const updater of this.#container.particleUpdaters) {
            if (updater.afterDraw) {
              this.#postDrawUpdaters.push(updater);
            }
            if (updater.getColorStyles ?? updater.getTransformValues ?? updater.beforeDraw) {
              this.#preDrawUpdaters.push(updater);
            }
          }
        }
        paint() {
          let handled = false;
          for (const plugin of this.#getLayerPlugins(DrawLayer.BackgroundMask)) {
            handled = plugin.canvasPaint?.() ?? false;
            if (handled) {
              break;
            }
          }
          if (handled) {
            return;
          }
          this.paintBase();
        }
        paintBase(baseColor) {
          this.draw((ctx) => {
            ctx.fillStyle = baseColor ?? "rgba(0,0,0,0)";
            ctx.fillRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
          });
        }
        paintImage(image, opacity) {
          this.draw((ctx) => {
            if (!image) {
              return;
            }
            const prevAlpha = ctx.globalAlpha;
            ctx.globalAlpha = opacity;
            ctx.drawImage(image, originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
            ctx.globalAlpha = prevAlpha;
          });
        }
        setContext(context) {
          this.#context = context;
          if (this.#context) {
            this.#context.globalCompositeOperation = defaultCompositeValue;
          }
        }
        setContextSettings(settings) {
          this.#contextSettings = settings;
        }
        stop() {
          this.draw((ctx) => {
            ctx.clearRect(originPoint.x, originPoint.y, this.#canvasManager.size.width, this.#canvasManager.size.height);
          });
        }
        updateBackgroundElement() {
          this.#resolveBackgroundElement();
        }
        #applyPostDrawUpdaters(particle) {
          for (const updater of this.#postDrawUpdaters) {
            updater.afterDraw?.(particle);
          }
        }
        #applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform) {
          for (const updater of this.#preDrawUpdaters) {
            if (updater.getColorStyles) {
              const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
              if (fill) {
                colorStyles.fill = fill;
              }
              if (stroke) {
                colorStyles.stroke = stroke;
              }
            }
            if (updater.getTransformValues) {
              const updaterTransform = updater.getTransformValues(particle);
              for (const key in updaterTransform) {
                setTransformValue(transform, updaterTransform, key);
              }
            }
            updater.beforeDraw?.(particle);
          }
        }
        #drawAfterEffect(drawer, data) {
          if (!drawer?.drawAfter) {
            return;
          }
          const { particle } = data;
          if (!particle.effect) {
            return;
          }
          drawer.drawAfter(data);
        }
        #drawBeforeEffect(drawer, data) {
          if (!drawer?.drawBefore) {
            return;
          }
          const { particle } = data;
          if (!particle.effect) {
            return;
          }
          drawer.drawBefore(data);
        }
        #drawParticle(data) {
          const { container, context, particle, delta, colorStyles, radius, opacity, transform } = data, { effectDrawers, shapeDrawers } = container, pos = particle.getPosition(), transformData = particle.getTransformData(transform), drawScale = defaultZoom, drawPosition = {
            x: pos.x,
            y: pos.y
          };
          context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
          if (colorStyles.fill) {
            context.fillStyle = colorStyles.fill;
          }
          const fillEnabled = !!particle.fillEnabled, strokeWidth = particle.strokeWidth ?? minStrokeWidth;
          context.lineWidth = strokeWidth;
          if (colorStyles.stroke) {
            context.strokeStyle = colorStyles.stroke;
          }
          const drawData = {
            context,
            particle,
            radius,
            drawRadius: radius * drawScale,
            opacity,
            delta,
            pixelRatio: container.retina.pixelRatio,
            fill: fillEnabled,
            stroke: strokeWidth > minStrokeWidth,
            transformData,
            position: { ...pos },
            drawPosition,
            drawScale
          };
          for (const plugin of container.plugins) {
            plugin.drawParticleTransform?.(drawData);
          }
          const effect = particle.effect ? effectDrawers.get(particle.effect) : void 0, shape = particle.shape ? shapeDrawers.get(particle.shape) : void 0;
          this.#drawBeforeEffect(effect, drawData);
          this.#drawShapeBeforeDraw(shape, drawData);
          this.#drawShape(shape, drawData);
          this.#drawShapeAfterDraw(shape, drawData);
          this.#drawAfterEffect(effect, drawData);
          context.resetTransform();
        }
        #drawParticlePlugin(context, plugin, particle, delta) {
          if (!plugin.drawParticle) {
            return;
          }
          plugin.drawParticle(context, particle, delta);
        }
        #drawShape(drawer, data) {
          if (!drawer) {
            return;
          }
          const { context, fill, particle, stroke } = data;
          if (!particle.shape) {
            return;
          }
          context.beginPath();
          drawer.draw(data);
          if (particle.shapeClose) {
            context.closePath();
          }
          if (fill) {
            context.fill();
          }
          if (stroke) {
            context.stroke();
          }
        }
        #drawShapeAfterDraw(drawer, data) {
          if (!drawer?.afterDraw) {
            return;
          }
          const { particle } = data;
          if (!particle.shape) {
            return;
          }
          drawer.afterDraw(data);
        }
        #drawShapeBeforeDraw(drawer, data) {
          if (!drawer?.beforeDraw) {
            return;
          }
          const { particle } = data;
          if (!particle.shape) {
            return;
          }
          drawer.beforeDraw(data);
        }
        #getLayerPlugins(layer) {
          return this.#layers[layer];
        }
        #getPluginParticleColors(particle) {
          let fColor, sColor;
          for (const plugin of this.#colorPlugins) {
            if (!fColor && plugin.particleFillColor) {
              fColor = rangeColorToHsl(this.#pluginManager, plugin.particleFillColor(particle));
            }
            if (!sColor && plugin.particleStrokeColor) {
              sColor = rangeColorToHsl(this.#pluginManager, plugin.particleStrokeColor(particle));
            }
            if (fColor && sColor) {
              break;
            }
          }
          this.#reusablePluginColors[fColorIndex] = fColor;
          this.#reusablePluginColors[sColorIndex] = sColor;
          return this.#reusablePluginColors;
        }
        #initLayerPlugin(plugin) {
          const layerMap = [
            [DrawLayer.BackgroundMask, !!plugin.canvasPaint],
            [DrawLayer.CanvasSetup, !!plugin.drawSettingsSetup],
            [DrawLayer.PluginContent, !!plugin.draw],
            [DrawLayer.CanvasCleanup, !!(plugin.clearDraw ?? plugin.drawSettingsCleanup)]
          ];
          for (const [layer, active] of layerMap) {
            if (active) {
              this.#layers[layer].push(plugin);
            }
          }
        }
        #initPluginsArray() {
          for (const plugin of this.#container.plugins) {
            if (plugin.particleFillColor ?? plugin.particleStrokeColor) {
              this.#colorPlugins.push(plugin);
            }
            if (plugin.drawParticle) {
              this.#drawParticlePlugins.push(plugin);
            }
            if (plugin.drawParticleSetup) {
              this.#drawParticlesSetupPlugins.push(plugin);
            }
            if (plugin.drawParticleCleanup) {
              this.#drawParticlesCleanupPlugins.push(plugin);
            }
            if (plugin.canvasClear) {
              this.#canvasClearPlugins.push(plugin);
            }
            this.#initLayerPlugin(plugin);
          }
        }
        #isSupportedElement(element) {
          return typeof HTMLCanvasElement !== "undefined" && element instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && element instanceof OffscreenCanvas || typeof HTMLVideoElement !== "undefined" && element instanceof HTMLVideoElement || typeof HTMLImageElement !== "undefined" && element instanceof HTMLImageElement;
        }
        #resolveBackgroundElement() {
          const background = this.#container.actualOptions.background;
          this.#backgroundElement = null;
          if (!background.element) {
            return;
          }
          if (typeof background.element === "string") {
            if (typeof document !== "undefined") {
              let node;
              try {
                node = document.querySelector(background.element);
              } catch {
                this.#warnOnce("background-element-invalid-selector", `Background element selector "${background.element}" is invalid`);
                return;
              }
              if (node && this.#isSupportedElement(node)) {
                this.#backgroundElement = node;
              } else if (node) {
                this.#warnOnce("background-element-not-supported", `Background element "${background.element}" is not a supported drawable element (canvas, video, or img)`);
              } else {
                this.#warnOnce("background-element-not-found", `Background element selector "${background.element}" not found`);
              }
            }
          } else if (this.#isSupportedElement(background.element)) {
            this.#backgroundElement = background.element;
          }
        }
        #warnOnce(key, message) {
          if (!this.#backgroundWarnings.has(key)) {
            this.#backgroundWarnings.add(key);
            getLogger().warning(message);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/CanvasManager.js
  function setStyle(canvas, style, important = false) {
    if (!style) {
      return;
    }
    const element = canvas, elementStyle = element.style, keys = /* @__PURE__ */ new Set();
    for (let i = 0; i < elementStyle.length; i++) {
      const key = elementStyle.item(i);
      if (!key) {
        continue;
      }
      keys.add(key);
    }
    for (let i = 0; i < style.length; i++) {
      const key = style.item(i);
      if (!key) {
        continue;
      }
      keys.add(key);
    }
    for (const key of keys) {
      const value = style.getPropertyValue(key);
      if (value) {
        elementStyle.setProperty(key, value, important ? "important" : "");
      } else {
        elementStyle.removeProperty(key);
      }
    }
  }
  var transferredCanvases, getTransferredCanvas, isHtmlCanvasElement, getEffectiveColorSpace, CanvasManager;
  var init_CanvasManager = __esm({
    "node_modules/@tsparticles/engine/browser/Core/CanvasManager.js"() {
      init_ErrorUtils();
      init_Utils();
      init_Constants();
      init_ColorUtils();
      init_HdrMode();
      init_RenderManager();
      init_TypeUtils();
      transferredCanvases = /* @__PURE__ */ new WeakMap();
      getTransferredCanvas = (canvas) => {
        const transferredCanvas = transferredCanvases.get(canvas);
        if (transferredCanvas) {
          return transferredCanvas;
        }
        if (typeof canvas.transferControlToOffscreen !== "function") {
          throw new TypeError(getErrorMessage(ErrorCodes.offscreenCanvasUnsupported));
        }
        try {
          const offscreenCanvas = canvas.transferControlToOffscreen();
          transferredCanvases.set(canvas, offscreenCanvas);
          return offscreenCanvas;
        } catch {
          throw new TypeError(getErrorMessage(ErrorCodes.offscreenCanvasTransferFailed));
        }
      };
      isHtmlCanvasElement = (canvas) => {
        return typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement;
      };
      getEffectiveColorSpace = (context) => {
        if (!context) {
          return void 0;
        }
        const colorInfo = context;
        return colorInfo.getContextAttributes?.().colorSpace ?? void 0;
      };
      CanvasManager = class {
        domElement;
        render;
        renderCanvas;
        size;
        zoom = defaultZoom;
        #container;
        #generated;
        #hdrMediaListeners;
        #mutationObserver;
        #originalStyle;
        #pluginManager;
        #pointerEvents;
        #resizePlugins;
        #standardSize;
        #zoomCenter;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.render = new RenderManager(pluginManager, container, this);
          this.#standardSize = {
            height: 0,
            width: 0
          };
          const pxRatio = container.retina.pixelRatio, stdSize = this.#standardSize;
          this.size = {
            height: stdSize.height * pxRatio,
            width: stdSize.width * pxRatio
          };
          this.#generated = false;
          this.#resizePlugins = [];
          this.#pointerEvents = "none";
        }
        get #fullScreen() {
          return this.#container.actualOptions.fullScreen.enable;
        }
        destroy() {
          this.stop();
          if (this.#generated) {
            const element = this.domElement;
            element?.remove();
            this.domElement = void 0;
            this.renderCanvas = void 0;
          } else {
            this.#resetOriginalStyle();
          }
          this.render.destroy();
          this.#resizePlugins = [];
        }
        getZoomCenter() {
          const pxRatio = this.#container.retina.pixelRatio, { width, height } = this.size;
          if (this.#zoomCenter) {
            return this.#zoomCenter;
          }
          return {
            x: width * half / pxRatio,
            y: height * half / pxRatio
          };
        }
        init() {
          this.#safeMutationObserver((obs) => {
            obs.disconnect();
          });
          this.#mutationObserver = safeMutationObserver((records) => {
            for (const record of records) {
              if (record.type === "attributes" && record.attributeName === "style") {
                this.#repairStyle();
              }
            }
          });
          this.resize();
          this.#initStyle();
          this.#safeMutationObserver((obs) => {
            const element = this.domElement;
            if (!element || !(element instanceof Node)) {
              return;
            }
            obs.observe(element, { attributes: true });
          });
          this.initPlugins();
          this.#initContext();
          this.initBackground();
          this.#initHdrListeners();
          this.render.init();
        }
        initBackground() {
          const container = this.#container, options = container.actualOptions, background = options.background, element = this.domElement;
          if (!element) {
            return;
          }
          const elementStyle = element.style, color = rangeColorToRgb(this.#pluginManager, background.color);
          if (color) {
            const hdrOptions = container.actualOptions.hdr;
            elementStyle.backgroundColor = getStyleFromRgb(color, container.hdr, background.opacity, hdrOptions.peakNits, toEnumValue(HdrMode, hdrOptions.mode, HdrMode.standard));
          } else {
            elementStyle.backgroundColor = "";
          }
          elementStyle.backgroundImage = background.image || "";
          elementStyle.backgroundPosition = background.position || "";
          elementStyle.backgroundRepeat = background.repeat || "";
          elementStyle.backgroundSize = background.size || "";
        }
        initPlugins() {
          this.#resizePlugins = [];
          for (const plugin of this.#container.plugins) {
            if (plugin.resize) {
              this.#resizePlugins.push(plugin);
            }
          }
        }
        loadCanvas(canvas) {
          if (this.#generated && this.domElement) {
            this.domElement.remove();
          }
          const domCanvas = isHtmlCanvasElement(canvas) ? canvas : void 0;
          this.domElement = domCanvas;
          this.#generated = domCanvas ? domCanvas.dataset[generatedAttribute] === "true" : false;
          this.renderCanvas = domCanvas ? getTransferredCanvas(domCanvas) : canvas;
          const domElement = this.domElement;
          if (domElement) {
            domElement.ariaHidden = "true";
            this.#originalStyle = cloneStyle(domElement.style);
          }
          const standardSize = this.#standardSize, renderCanvas = this.renderCanvas;
          if (domElement) {
            standardSize.height = domElement.offsetHeight;
            standardSize.width = domElement.offsetWidth;
          } else {
            standardSize.height = renderCanvas.height;
            standardSize.width = renderCanvas.width;
          }
          const pxRatio = this.#container.retina.pixelRatio, retinaSize = this.size;
          renderCanvas.height = retinaSize.height = standardSize.height * pxRatio;
          renderCanvas.width = retinaSize.width = standardSize.width * pxRatio;
        }
        resize() {
          const element = this.domElement;
          if (!element) {
            return false;
          }
          const container = this.#container, renderCanvas = this.renderCanvas;
          if (renderCanvas === void 0) {
            return false;
          }
          const currentSize = container.canvas.#standardSize, newSize = {
            width: element.offsetWidth,
            height: element.offsetHeight
          }, pxRatio = container.retina.pixelRatio, retinaSize = {
            width: newSize.width * pxRatio,
            height: newSize.height * pxRatio
          };
          if (newSize.height === currentSize.height && newSize.width === currentSize.width && retinaSize.height === renderCanvas.height && retinaSize.width === renderCanvas.width) {
            return false;
          }
          const oldSize = { ...currentSize };
          currentSize.height = newSize.height;
          currentSize.width = newSize.width;
          const canvasSize = this.size;
          renderCanvas.width = canvasSize.width = retinaSize.width;
          renderCanvas.height = canvasSize.height = retinaSize.height;
          if (this.#container.started) {
            container.particles.setResizeFactor({
              width: currentSize.width / oldSize.width,
              height: currentSize.height / oldSize.height
            });
          }
          return true;
        }
        setPointerEvents(type) {
          const element = this.domElement;
          if (!element) {
            return;
          }
          this.#pointerEvents = type;
          this.#repairStyle();
        }
        setZoom(zoomLevel, center) {
          this.zoom = zoomLevel;
          this.#zoomCenter = center;
        }
        stop() {
          this.#safeMutationObserver((obs) => {
            obs.disconnect();
          });
          this.#mutationObserver = void 0;
          this.#removeHdrListeners();
          this.render.stop();
        }
        async windowResize() {
          if (!this.domElement || !this.resize()) {
            return;
          }
          const container = this.#container, needsRefresh = container.updateActualOptions();
          container.particles.setDensity();
          this.#applyResizePlugins();
          if (needsRefresh) {
            await container.refresh();
          }
        }
        #applyResizePlugins() {
          for (const plugin of this.#resizePlugins) {
            plugin.resize?.();
          }
        }
        #initContext() {
          const container = this.#container, canSupportHdr = container.actualOptions.hdr.enable && safeMatchMedia("(color-gamut: p3)")?.matches && safeMatchMedia("(dynamic-range: high)")?.matches;
          container.hdrMode = toEnumValue(HdrMode, container.actualOptions.hdr.mode, HdrMode.standard);
          container.peakNits = container.actualOptions.hdr.peakNits;
          const renderCanvas = this.renderCanvas;
          if (!renderCanvas) {
            container.hdr = canSupportHdr ?? false;
            return;
          }
          this.render.setContextSettings({
            alpha: true,
            desynchronized: true,
            willReadFrequently: false,
            ...canSupportHdr ? { colorSpace: "display-p3", colorType: "float16" } : { colorSpace: "srgb" }
          });
          let context;
          try {
            context = renderCanvas.getContext("2d", this.render.settings);
          } catch {
            context = null;
          }
          if (canSupportHdr && !context) {
            const sdrSettings = {
              alpha: true,
              desynchronized: true,
              willReadFrequently: false,
              colorSpace: "srgb"
            };
            this.render.setContextSettings(sdrSettings);
            try {
              context = renderCanvas.getContext("2d", sdrSettings);
            } catch {
              context = null;
            }
          }
          this.render.setContext(context);
          if (context) {
            const effectiveColorSpace = getEffectiveColorSpace(context);
            if (effectiveColorSpace !== void 0) {
              container.hdr = effectiveColorSpace === "display-p3";
            }
          }
        }
        #initHdrListeners() {
          this.#removeHdrListeners();
          const p3Query = safeMatchMedia("(color-gamut: p3)"), hdrQuery = safeMatchMedia("(dynamic-range: high)"), handleChange = () => {
            this.#initContext();
            this.initBackground();
          }, listeners = [];
          if (p3Query) {
            p3Query.addEventListener("change", handleChange);
            listeners.push({ handler: handleChange, mql: p3Query });
          }
          if (hdrQuery) {
            hdrQuery.addEventListener("change", handleChange);
            listeners.push({ handler: handleChange, mql: hdrQuery });
          }
          this.#hdrMediaListeners = listeners;
        }
        #initStyle() {
          const element = this.domElement, options = this.#container.actualOptions;
          if (!element) {
            return;
          }
          if (this.#fullScreen) {
            this.#setFullScreenStyle();
          } else {
            this.#resetOriginalStyle();
          }
          for (const key in options.style) {
            if (!key || !(key in options.style)) {
              continue;
            }
            const value = options.style[key];
            if (!value) {
              continue;
            }
            element.style.setProperty(key, value, "important");
          }
        }
        #removeHdrListeners() {
          if (!this.#hdrMediaListeners) {
            return;
          }
          for (const { handler, mql } of this.#hdrMediaListeners) {
            mql.removeEventListener("change", handler);
          }
          this.#hdrMediaListeners = void 0;
        }
        #repairStyle() {
          const element = this.domElement;
          if (!element) {
            return;
          }
          this.#safeMutationObserver((observer) => {
            observer.disconnect();
          });
          this.#initStyle();
          this.initBackground();
          const pointerEvents = this.#pointerEvents;
          element.style.pointerEvents = pointerEvents;
          element.style.setProperty("pointer-events", pointerEvents);
          this.#safeMutationObserver((observer) => {
            if (!(element instanceof Node)) {
              return;
            }
            observer.observe(element, { attributes: true });
          });
        }
        #resetOriginalStyle() {
          const element = this.domElement, originalStyle = this.#originalStyle;
          if (!element || !originalStyle) {
            return;
          }
          setStyle(element, originalStyle, true);
        }
        #safeMutationObserver(callback) {
          if (!this.#mutationObserver) {
            return;
          }
          callback(this.#mutationObserver);
        }
        #setFullScreenStyle() {
          const element = this.domElement;
          if (!element) {
            return;
          }
          setStyle(element, getFullScreenStyle(this.#container.actualOptions.fullScreen.zIndex), true);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/EventListeners.js
  var EventListeners;
  var init_EventListeners = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/EventListeners.js"() {
      init_Utils();
      init_Constants();
      EventListeners = class {
        #container;
        #handlers;
        #resizeObserver;
        #resizeTimeout;
        constructor(container) {
          this.#container = container;
          this.#handlers = {
            visibilityChange: () => {
              this.#handleVisibilityChange();
            },
            resize: () => {
              this.#handleWindowResize();
            }
          };
        }
        addListeners() {
          this.#manageListeners(true);
        }
        removeListeners() {
          if (this.#resizeTimeout !== void 0) {
            clearTimeout(this.#resizeTimeout);
            this.#resizeTimeout = void 0;
          }
          this.#manageListeners(false);
        }
        #handleVisibilityChange() {
          const container = this.#container, options = container.actualOptions;
          if (!options.pauseOnBlur) {
            return;
          }
          if (safeDocument().hidden) {
            container.pageHidden = true;
            container.pause();
          } else {
            container.pageHidden = false;
            if (container.animationStatus) {
              container.play(true);
            } else {
              container.draw(true);
            }
          }
        }
        #handleWindowResize() {
          if (this.#resizeTimeout) {
            clearTimeout(this.#resizeTimeout);
            this.#resizeTimeout = void 0;
          }
          const handleResize = async () => {
            await this.#container.canvas.windowResize();
          };
          this.#resizeTimeout = setTimeout(() => void handleResize(), this.#container.actualOptions.resize.delay * millisecondsToSeconds);
        }
        #manageListeners(add) {
          const handlers = this.#handlers;
          this.#manageResize(add);
          if (typeof document !== "undefined") {
            manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
          }
        }
        #manageResize(add) {
          const handlers = this.#handlers, container = this.#container, options = container.actualOptions;
          if (!options.resize.enable) {
            return;
          }
          if (typeof ResizeObserver === "undefined") {
            manageListener(globalThis, resizeEvent, handlers.resize, add);
            return;
          }
          const canvasEl = container.canvas.domElement;
          if (this.#resizeObserver && !add) {
            if (canvasEl) {
              this.#resizeObserver.unobserve(canvasEl);
            }
            this.#resizeObserver.disconnect();
            this.#resizeObserver = void 0;
          } else if (!this.#resizeObserver && add && canvasEl) {
            this.#resizeObserver = new ResizeObserver((entries) => {
              const res = entries.some((e) => e.target === canvasEl);
              if (!res) {
                return;
              }
              this.#handleWindowResize();
            });
            this.#resizeObserver.observe(canvasEl);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js
  function loadProperty(obj, key, value) {
    if (value !== void 0) {
      obj[key] = value;
    }
  }
  function loadRangeProperty(obj, key, value) {
    if (value !== void 0) {
      obj[key] = setRangeValue(value);
    }
  }
  function loadNestedProperty(obj, key, value) {
    if (value !== void 0) {
      obj[key].load(value);
    }
  }
  function loadLazyProperty(obj, key, value, factory) {
    if (value !== void 0) {
      const objRecord = obj;
      objRecord[key] ??= factory();
      objRecord[key].load(value);
    }
  }
  function loadOptionProperty(obj, key, optionClass, ...sources) {
    const objRecord = obj;
    objRecord[key] ??= new optionClass();
    const target = objRecord[key];
    for (const source of sources) {
      target.load(source?.[key]);
    }
  }
  var init_OptionsUtils = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/OptionsUtils.js"() {
      init_Utils();
      init_MathUtils();
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/OptionLoader.js
  function loadOptions(options, ...sourceOptionsArr) {
    for (const sourceOptions of sourceOptionsArr) {
      options.load(sourceOptions);
    }
  }
  var OptionLoader;
  var init_OptionLoader = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/OptionLoader.js"() {
      init_TypeUtils();
      OptionLoader = class {
        load(data) {
          if (isNull(data)) {
            return;
          }
          this.doLoad(data);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js
  var OptionsColor;
  var init_OptionsColor = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/OptionsColor.js"() {
      init_TypeUtils();
      init_OptionLoader();
      OptionsColor = class _OptionsColor extends OptionLoader {
        value = "";
        static create(source, data) {
          const color = new _OptionsColor();
          color.load(source);
          if (data !== void 0) {
            if (isString(data) || isArray(data)) {
              color.load({ value: data });
            } else {
              color.load(data);
            }
          }
          return color;
        }
        doLoad(data) {
          if (!isNull(data.value)) {
            this.value = data.value;
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js
  var Background;
  var init_Background = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Background/Background.js"() {
      init_OptionLoader();
      init_OptionsColor();
      init_OptionsUtils();
      Background = class extends OptionLoader {
        color;
        draw;
        element;
        image = "";
        opacity = 1;
        position = "";
        repeat = "";
        size = "";
        constructor() {
          super();
          this.color = new OptionsColor();
          this.color.value = "";
        }
        doLoad(data) {
          if (data.color !== void 0) {
            this.color = OptionsColor.create(this.color, data.color);
          }
          loadProperty(this, "element", data.element);
          loadProperty(this, "draw", data.draw);
          loadProperty(this, "image", data.image);
          loadProperty(this, "position", data.position);
          loadProperty(this, "repeat", data.repeat);
          loadProperty(this, "size", data.size);
          loadProperty(this, "opacity", data.opacity);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js
  var FullScreen;
  var init_FullScreen = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/FullScreen/FullScreen.js"() {
      init_OptionLoader();
      init_OptionsUtils();
      FullScreen = class extends OptionLoader {
        enable = true;
        zIndex = 0;
        doLoad(data) {
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "zIndex", data.zIndex);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/HDROptions.js
  var defaultPeakNits, minPeakNits, toStringValue2, HDROptions;
  var init_HDROptions = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/HDROptions.js"() {
      init_ErrorUtils();
      init_TypeUtils();
      init_HdrMode();
      init_OptionLoader();
      init_OptionsUtils();
      defaultPeakNits = 400;
      minPeakNits = 0;
      toStringValue2 = (value) => String(value);
      HDROptions = class extends OptionLoader {
        enable = true;
        mode = HdrMode.standard;
        peakNits = defaultPeakNits;
        doLoad(data) {
          if (data.enable !== void 0 && !isBoolean(data.enable)) {
            throw new Error(getErrorMessage(ErrorCodes.hdrEnableInvalid, String(data.enable)));
          }
          if (data.mode !== void 0 && !isEnumValue(HdrMode, data.mode)) {
            throw new Error(getErrorMessage(ErrorCodes.hdrModeInvalid, Object.values(HdrMode).join(", "), toStringValue2(data.mode)));
          }
          if (data.peakNits !== void 0 && (!isNumber(data.peakNits) || !Number.isFinite(data.peakNits) || data.peakNits <= minPeakNits)) {
            throw new Error(getErrorMessage(ErrorCodes.hdrPeakNitsInvalid, String(data.peakNits)));
          }
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "peakNits", data.peakNits);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/ResizeEvent.js
  var ResizeEvent;
  var init_ResizeEvent = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/ResizeEvent.js"() {
      init_OptionLoader();
      init_OptionsUtils();
      ResizeEvent = class extends OptionLoader {
        delay = 0.5;
        enable = true;
        doLoad(data) {
          loadProperty(this, "delay", data.delay);
          loadProperty(this, "enable", data.enable);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js
  var AnimationMode;
  var init_AnimationMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/AnimationMode.js"() {
      (function(AnimationMode2) {
        AnimationMode2["auto"] = "auto";
        AnimationMode2["increase"] = "increase";
        AnimationMode2["decrease"] = "decrease";
        AnimationMode2["random"] = "random";
      })(AnimationMode || (AnimationMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js
  var StartValueType;
  var init_StartValueType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/StartValueType.js"() {
      (function(StartValueType2) {
        StartValueType2["max"] = "max";
        StartValueType2["min"] = "min";
        StartValueType2["random"] = "random";
      })(StartValueType || (StartValueType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js
  var AnimationOptions, RangedAnimationOptions;
  var init_AnimationOptions = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/AnimationOptions.js"() {
      init_OptionsUtils();
      init_AnimationMode();
      init_OptionLoader();
      init_StartValueType();
      AnimationOptions = class extends OptionLoader {
        count = 0;
        decay = 0;
        delay = 0;
        enable = false;
        speed = 1;
        sync = false;
        doLoad(data) {
          loadRangeProperty(this, "count", data.count);
          loadProperty(this, "enable", data.enable);
          loadRangeProperty(this, "speed", data.speed);
          loadRangeProperty(this, "decay", data.decay);
          loadRangeProperty(this, "delay", data.delay);
          loadProperty(this, "sync", data.sync);
        }
      };
      RangedAnimationOptions = class extends AnimationOptions {
        mode = AnimationMode.auto;
        startValue = StartValueType.random;
        doLoad(data) {
          super.doLoad(data);
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "startValue", data.startValue);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js
  var ColorAnimation;
  var init_ColorAnimation = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/ColorAnimation.js"() {
      init_OptionsUtils();
      init_AnimationOptions();
      ColorAnimation = class extends AnimationOptions {
        max;
        min;
        offset = 0;
        sync = true;
        constructor(min, max) {
          super();
          this.min = min;
          this.max = max;
        }
        doLoad(data) {
          super.doLoad(data);
          loadProperty(this, "max", data.max);
          loadProperty(this, "min", data.min);
          loadRangeProperty(this, "offset", data.offset);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js
  var HslAnimation;
  var init_HslAnimation = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/HslAnimation.js"() {
      init_Constants();
      init_ColorAnimation();
      init_OptionLoader();
      HslAnimation = class extends OptionLoader {
        h = new ColorAnimation(hMin, hMax);
        l = new ColorAnimation(lMin, lMax);
        s = new ColorAnimation(sMin, sMax);
        doLoad(data) {
          this.h.load(data.h);
          this.s.load(data.s);
          this.l.load(data.l);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js
  var AnimatableColor;
  var init_AnimatableColor = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/AnimatableColor.js"() {
      init_TypeUtils();
      init_HslAnimation();
      init_OptionsColor();
      AnimatableColor = class _AnimatableColor extends OptionsColor {
        animation = new HslAnimation();
        static create(source, data) {
          const color = new _AnimatableColor();
          color.load(source);
          if (data !== void 0) {
            if (isString(data) || isArray(data)) {
              color.load({ value: data });
            } else {
              color.load(data);
            }
          }
          return color;
        }
        doLoad(data) {
          super.doLoad(data);
          const colorAnimation = data.animation;
          if (colorAnimation !== void 0) {
            if (colorAnimation.enable === void 0) {
              this.animation.load(data.animation);
            } else {
              this.animation.h.load(colorAnimation);
            }
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js
  var Effect;
  var init_Effect = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Effect/Effect.js"() {
      init_OptionLoader();
      init_Utils();
      init_OptionsUtils();
      Effect = class extends OptionLoader {
        close = true;
        options = {};
        type = [];
        doLoad(data) {
          const options = data.options;
          if (options !== void 0) {
            for (const effect in options) {
              const item = options[effect];
              if (item) {
                this.options[effect] = deepExtend(this.options[effect] ?? {}, item);
              }
            }
          }
          loadProperty(this, "close", data.close);
          loadProperty(this, "type", data.type);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Fill.js
  var Fill;
  var init_Fill = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Fill.js"() {
      init_OptionsUtils();
      init_AnimatableColor();
      init_OptionLoader();
      Fill = class extends OptionLoader {
        color;
        enable = true;
        opacity = 1;
        doLoad(data) {
          if (data.color !== void 0) {
            this.color = AnimatableColor.create(this.color, data.color);
          }
          loadProperty(this, "enable", data.enable);
          loadRangeProperty(this, "opacity", data.opacity);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js
  var MoveAngle;
  var init_MoveAngle = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveAngle.js"() {
      init_OptionLoader();
      init_OptionsUtils();
      MoveAngle = class extends OptionLoader {
        offset = 0;
        value = 90;
        doLoad(data) {
          loadRangeProperty(this, "offset", data.offset);
          loadRangeProperty(this, "value", data.value);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js
  var MoveCenter;
  var init_MoveCenter = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveCenter.js"() {
      init_OptionLoader();
      init_PixelMode();
      init_OptionsUtils();
      MoveCenter = class extends OptionLoader {
        mode = PixelMode.percent;
        radius = 0;
        x = 50;
        y = 50;
        doLoad(data) {
          loadProperty(this, "x", data.x);
          loadProperty(this, "y", data.y);
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "radius", data.radius);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js
  var MoveGravity;
  var init_MoveGravity = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/MoveGravity.js"() {
      init_OptionsUtils();
      init_OptionLoader();
      MoveGravity = class extends OptionLoader {
        acceleration = 9.81;
        enable = false;
        inverse = false;
        maxSpeed = 50;
        doLoad(data) {
          loadRangeProperty(this, "acceleration", data.acceleration);
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "inverse", data.inverse);
          loadRangeProperty(this, "maxSpeed", data.maxSpeed);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js
  var ValueWithRandom, AnimationValueWithRandom, RangedAnimationValueWithRandom;
  var init_ValueWithRandom = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/ValueWithRandom.js"() {
      init_AnimationOptions();
      init_OptionLoader();
      init_TypeUtils();
      init_OptionsUtils();
      init_MathUtils();
      ValueWithRandom = class extends OptionLoader {
        value = 0;
        doLoad(data) {
          if (!isNull(data.value)) {
            this.value = setRangeValue(data.value);
          }
        }
      };
      AnimationValueWithRandom = class extends ValueWithRandom {
        animation = new AnimationOptions();
        doLoad(data) {
          super.doLoad(data);
          loadNestedProperty(this, "animation", data.animation);
        }
      };
      RangedAnimationValueWithRandom = class extends AnimationValueWithRandom {
        animation = new RangedAnimationOptions();
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js
  var MovePath;
  var init_MovePath = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Path/MovePath.js"() {
      init_OptionLoader();
      init_ValueWithRandom();
      init_Utils();
      init_OptionsUtils();
      MovePath = class extends OptionLoader {
        clamp = true;
        delay = new ValueWithRandom();
        enable = false;
        generator;
        options = {};
        doLoad(data) {
          loadProperty(this, "clamp", data.clamp);
          this.delay.load(data.delay);
          loadProperty(this, "enable", data.enable);
          this.generator = data.generator;
          if (data.options) {
            this.options = deepExtend(this.options, data.options);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js
  var OutMode;
  var init_OutMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/OutMode.js"() {
      (function(OutMode2) {
        OutMode2["bounce"] = "bounce";
        OutMode2["none"] = "none";
        OutMode2["out"] = "out";
        OutMode2["destroy"] = "destroy";
        OutMode2["split"] = "split";
      })(OutMode || (OutMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js
  var OutModes;
  var init_OutModes = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/OutModes.js"() {
      init_OptionLoader();
      init_OutMode();
      OutModes = class extends OptionLoader {
        bottom;
        default = OutMode.out;
        left;
        right;
        top;
        doLoad(data) {
          if (data.default !== void 0) {
            this.default = data.default;
          }
          this.bottom = data.bottom ?? data.default;
          this.left = data.left ?? data.default;
          this.right = data.right ?? data.default;
          this.top = data.top ?? data.default;
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js
  var Spin;
  var init_Spin = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Spin.js"() {
      init_OptionsUtils();
      init_OptionLoader();
      init_Utils();
      Spin = class extends OptionLoader {
        acceleration = 0;
        enable = false;
        position;
        doLoad(data) {
          loadRangeProperty(this, "acceleration", data.acceleration);
          loadProperty(this, "enable", data.enable);
          if (data.position) {
            this.position = deepExtend({}, data.position);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js
  var Move;
  var init_Move = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Move/Move.js"() {
      init_MoveDirection();
      init_TypeUtils();
      init_OptionsUtils();
      init_MoveAngle();
      init_MoveCenter();
      init_MoveGravity();
      init_MovePath();
      init_OptionLoader();
      init_OutModes();
      init_Spin();
      Move = class extends OptionLoader {
        angle = new MoveAngle();
        center = new MoveCenter();
        decay = 0;
        direction = MoveDirection.none;
        distance = {};
        drift = 0;
        enable = false;
        gravity = new MoveGravity();
        outModes = new OutModes();
        path = new MovePath();
        random = false;
        size = false;
        speed = 2;
        spin = new Spin();
        straight = false;
        vibrate = false;
        warp = false;
        doLoad(data) {
          this.angle.load(isNumber(data.angle) ? { value: data.angle } : data.angle);
          this.center.load(data.center);
          loadRangeProperty(this, "decay", data.decay);
          loadProperty(this, "direction", data.direction);
          if (data.distance !== void 0) {
            this.distance = isNumber(data.distance) ? {
              horizontal: data.distance,
              vertical: data.distance
            } : { ...data.distance };
          }
          loadRangeProperty(this, "drift", data.drift);
          loadProperty(this, "enable", data.enable);
          this.gravity.load(data.gravity);
          const outModes = data.outModes;
          if (outModes !== void 0) {
            if (isObject(outModes)) {
              this.outModes.load(outModes);
            } else {
              this.outModes.load({
                default: outModes
              });
            }
          }
          this.path.load(data.path);
          loadProperty(this, "random", data.random);
          loadProperty(this, "size", data.size);
          loadRangeProperty(this, "speed", data.speed);
          this.spin.load(data.spin);
          loadProperty(this, "straight", data.straight);
          loadProperty(this, "vibrate", data.vibrate);
          loadProperty(this, "warp", data.warp);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js
  var Stroke;
  var init_Stroke = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Stroke.js"() {
      init_AnimatableColor();
      init_OptionLoader();
      init_OptionsUtils();
      Stroke = class extends OptionLoader {
        color;
        opacity;
        width = 0;
        doLoad(data) {
          if (data.color !== void 0) {
            this.color = AnimatableColor.create(this.color, data.color);
          }
          loadRangeProperty(this, "width", data.width);
          loadRangeProperty(this, "opacity", data.opacity);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Paint.js
  var Paint;
  var init_Paint = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Paint.js"() {
      init_AnimatableColor();
      init_Fill();
      init_OptionLoader();
      init_Stroke();
      init_OptionsUtils();
      Paint = class extends OptionLoader {
        color;
        fill;
        stroke;
        doLoad(data) {
          if (data.color !== void 0) {
            this.color = AnimatableColor.create(this.color, data.color);
          }
          loadLazyProperty(this, "fill", data.fill, () => new Fill());
          loadLazyProperty(this, "stroke", data.stroke, () => new Stroke());
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js
  var ParticlesBounceFactor;
  var init_ParticlesBounceFactor = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounceFactor.js"() {
      init_ValueWithRandom();
      ParticlesBounceFactor = class extends ValueWithRandom {
        value = 1;
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js
  var ParticlesBounce;
  var init_ParticlesBounce = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Bounce/ParticlesBounce.js"() {
      init_OptionLoader();
      init_ParticlesBounceFactor();
      ParticlesBounce = class extends OptionLoader {
        horizontal = new ParticlesBounceFactor();
        vertical = new ParticlesBounceFactor();
        doLoad(data) {
          this.horizontal.load(data.horizontal);
          this.vertical.load(data.vertical);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js
  var ParticlesDensity;
  var init_ParticlesDensity = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesDensity.js"() {
      init_OptionLoader();
      init_OptionsUtils();
      ParticlesDensity = class extends OptionLoader {
        enable = false;
        height = 1080;
        width = 1920;
        doLoad(data) {
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "width", data.width);
          loadProperty(this, "height", data.height);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js
  var LimitMode;
  var init_LimitMode = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Modes/LimitMode.js"() {
      (function(LimitMode2) {
        LimitMode2["delete"] = "delete";
        LimitMode2["wait"] = "wait";
      })(LimitMode || (LimitMode = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js
  var ParticlesNumberLimit;
  var init_ParticlesNumberLimit = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumberLimit.js"() {
      init_LimitMode();
      init_OptionLoader();
      init_OptionsUtils();
      ParticlesNumberLimit = class extends OptionLoader {
        mode = LimitMode.delete;
        value = 0;
        doLoad(data) {
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "value", data.value);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js
  var ParticlesNumber;
  var init_ParticlesNumber = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Number/ParticlesNumber.js"() {
      init_OptionLoader();
      init_ParticlesDensity();
      init_ParticlesNumberLimit();
      init_OptionsUtils();
      ParticlesNumber = class extends OptionLoader {
        density = new ParticlesDensity();
        limit = new ParticlesNumberLimit();
        value = 0;
        doLoad(data) {
          this.density.load(data.density);
          this.limit.load(data.limit);
          loadProperty(this, "value", data.value);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js
  var Shape;
  var init_Shape = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/Shape/Shape.js"() {
      init_OptionLoader();
      init_Utils();
      init_OptionsUtils();
      Shape = class extends OptionLoader {
        close = true;
        options = {};
        type = "circle";
        doLoad(data) {
          const options = data.options;
          if (options !== void 0) {
            for (const shape in options) {
              const item = options[shape];
              if (item) {
                this.options[shape] = deepExtend(this.options[shape] ?? {}, item);
              }
            }
          }
          loadProperty(this, "close", data.close);
          loadProperty(this, "type", data.type);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js
  var ZIndex;
  var init_ZIndex = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ZIndex/ZIndex.js"() {
      init_ValueWithRandom();
      init_OptionsUtils();
      ZIndex = class extends ValueWithRandom {
        opacityRate = 1;
        sizeRate = 1;
        velocityRate = 1;
        doLoad(data) {
          super.doLoad(data);
          loadProperty(this, "opacityRate", data.opacityRate);
          loadProperty(this, "sizeRate", data.sizeRate);
          loadProperty(this, "velocityRate", data.velocityRate);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js
  var ParticlesOptions;
  var init_ParticlesOptions = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Particles/ParticlesOptions.js"() {
      init_Utils();
      init_AnimatableColor();
      init_Effect();
      init_Fill();
      init_Move();
      init_OptionLoader();
      init_Paint();
      init_ParticlesBounce();
      init_ParticlesNumber();
      init_Shape();
      init_ZIndex();
      init_TypeUtils();
      ParticlesOptions = class extends OptionLoader {
        bounce = new ParticlesBounce();
        effect = new Effect();
        groups = {};
        move = new Move();
        number = new ParticlesNumber();
        paint;
        palette;
        reduceDuplicates = false;
        shape = new Shape();
        zIndex = new ZIndex();
        #container;
        #pluginManager;
        constructor(pluginManager, container) {
          super();
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.paint = new Paint();
          this.paint.color = new AnimatableColor();
          this.paint.color.value = "#fff";
          this.paint.fill = new Fill();
          this.paint.fill.enable = true;
        }
        doLoad(data) {
          if (data.palette) {
            this.palette = data.palette;
            this.#importPalette(this.palette);
          }
          if (data.groups !== void 0) {
            for (const group of Object.keys(data.groups)) {
              if (!(group in data.groups)) {
                continue;
              }
              const item = data.groups[group];
              if (item !== void 0) {
                this.groups[group] = deepExtend(this.groups[group] ?? {}, item);
              }
            }
          }
          if (data.reduceDuplicates !== void 0) {
            this.reduceDuplicates = data.reduceDuplicates;
          }
          this.bounce.load(data.bounce);
          this.effect.load(data.effect);
          this.move.load(data.move);
          this.number.load(data.number);
          const paintToLoad = data.paint;
          if (paintToLoad) {
            if (isArray(paintToLoad)) {
              this.paint = executeOnSingleOrMultiple(paintToLoad, (t) => {
                const tmp = new Paint();
                tmp.load(t);
                return tmp;
              });
            } else if (isArray(this.paint)) {
              this.paint = new Paint();
              this.paint.load(paintToLoad);
            } else {
              this.paint.load(paintToLoad);
            }
          }
          this.shape.load(data.shape);
          this.zIndex.load(data.zIndex);
          if (this.#container) {
            for (const plugin of this.#pluginManager.plugins) {
              if (plugin.loadParticlesOptions) {
                plugin.loadParticlesOptions(this.#container, this, data);
              }
            }
            const updaters = this.#container.particleUpdaters;
            for (const updater of updaters) {
              if (updater.loadOptions) {
                updater.loadOptions(this, data);
              }
            }
          }
        }
        #importPalette(palette) {
          const paletteData = this.#pluginManager.getPalette(palette);
          if (!paletteData) {
            return;
          }
          const paletteColors = paletteData.colors, defaultPaintStrokeWidth = 0, defaultPaintVariantsLength = 1, firstPaintVariantIndex = 0, defaultPalettePaintVariant = {}, colorVariants = isArray(paletteColors) ? paletteColors : [paletteColors], palettePaintVariants = colorVariants.flatMap((variant) => {
            const paletteFill = variant.fill, paletteStroke = variant.stroke, fillPart = paletteFill ? {
              color: {
                value: paletteFill.value
              },
              enable: paletteFill.enable,
              opacity: paletteFill.opacity
            } : void 0;
            if (!paletteStroke) {
              return [
                {
                  fill: fillPart
                }
              ];
            }
            return [
              {
                fill: fillPart,
                stroke: {
                  color: {
                    value: paletteStroke.value
                  },
                  opacity: paletteStroke.opacity,
                  width: paletteStroke.width || defaultPaintStrokeWidth
                }
              }
            ];
          }), palettePaint = palettePaintVariants.length > defaultPaintVariantsLength ? palettePaintVariants : palettePaintVariants[firstPaintVariantIndex] ?? defaultPalettePaintVariant;
          this.load({
            paint: palettePaint,
            blend: {
              enable: true,
              mode: paletteData.blendMode
            }
          });
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Utils/ParticlesOptionsLoader.js
  function loadParticlesOptions(pluginManager, container, ...sourceOptionsArr) {
    const options = new ParticlesOptions(pluginManager, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
  }
  var init_ParticlesOptionsLoader = __esm({
    "node_modules/@tsparticles/engine/browser/Utils/ParticlesOptionsLoader.js"() {
      init_ParticlesOptions();
      init_OptionLoader();
    }
  });

  // node_modules/@tsparticles/engine/browser/Options/Classes/Options.js
  var Options;
  var init_Options = __esm({
    "node_modules/@tsparticles/engine/browser/Options/Classes/Options.js"() {
      init_Utils();
      init_OptionsUtils();
      init_Background();
      init_FullScreen();
      init_HDROptions();
      init_HdrMode();
      init_OptionLoader();
      init_ResizeEvent();
      init_TypeUtils();
      init_ParticlesOptionsLoader();
      Options = class extends OptionLoader {
        autoPlay = true;
        background;
        clear = true;
        defaultThemes = {};
        delay = 0;
        detectRetina = true;
        duration = 0;
        fpsLimit = 120;
        fullScreen;
        hdr;
        key;
        name;
        palette;
        particles;
        pauseOnBlur = true;
        pauseOnOutsideViewport = true;
        preset;
        resize;
        smooth = false;
        style = {};
        zLayers = 100;
        #container;
        #pluginManager;
        constructor(pluginManager, container) {
          super();
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.background = new Background();
          this.fullScreen = new FullScreen();
          this.hdr = new HDROptions();
          this.particles = loadParticlesOptions(this.#pluginManager, this.#container);
          this.resize = new ResizeEvent();
        }
        doLoad(data) {
          if (data.preset !== void 0) {
            this.preset = data.preset;
            executeOnSingleOrMultiple(this.preset, (preset) => {
              this.#importPreset(preset);
            });
          }
          if (data.palette !== void 0) {
            this.palette = data.palette;
            this.#importPalette(this.palette);
          }
          loadProperty(this, "autoPlay", data.autoPlay);
          loadProperty(this, "clear", data.clear);
          loadProperty(this, "key", data.key);
          loadProperty(this, "name", data.name);
          loadRangeProperty(this, "delay", data.delay);
          loadProperty(this, "detectRetina", data.detectRetina);
          loadRangeProperty(this, "duration", data.duration);
          loadProperty(this, "fpsLimit", data.fpsLimit);
          const hdrData = data.hdr;
          if (isBoolean(hdrData)) {
            this.hdr.enable = hdrData;
            this.hdr.mode = HdrMode.standard;
            this.hdr.peakNits = 400;
          } else {
            this.hdr.load(hdrData);
          }
          loadProperty(this, "pauseOnBlur", data.pauseOnBlur);
          loadProperty(this, "pauseOnOutsideViewport", data.pauseOnOutsideViewport);
          loadProperty(this, "zLayers", data.zLayers);
          this.background.load(data.background);
          const fullScreen = data.fullScreen;
          if (isBoolean(fullScreen)) {
            this.fullScreen.enable = fullScreen;
          } else {
            this.fullScreen.load(fullScreen);
          }
          this.particles.load(data.particles);
          this.resize.load(data.resize);
          this.style = deepExtend(this.style, data.style);
          loadProperty(this, "smooth", data.smooth);
          this.#pluginManager.plugins.forEach((plugin) => {
            plugin.loadOptions(this.#container, this, data);
          });
        }
        #importPalette(palette) {
          const paletteData = this.#pluginManager.getPalette(palette);
          if (!paletteData) {
            return;
          }
          this.load({
            background: {
              color: paletteData.background
            },
            blend: {
              enable: true,
              mode: paletteData.blendMode
            },
            particles: {
              palette
            }
          });
        }
        #importPreset(preset) {
          this.load(this.#pluginManager.getPreset(preset));
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js
  var ParticleOutType;
  var init_ParticleOutType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/ParticleOutType.js"() {
      (function(ParticleOutType2) {
        ParticleOutType2["normal"] = "normal";
        ParticleOutType2["inside"] = "inside";
        ParticleOutType2["outside"] = "outside";
      })(ParticleOutType || (ParticleOutType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Particle.js
  function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
    const effectData = effectOptions.options[effect];
    return deepExtend({
      close: effectOptions.close
    }, itemFromSingleOrMultiple(effectData, id, reduceDuplicates));
  }
  function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
    const shapeData = shapeOptions.options[shape];
    return deepExtend({
      close: shapeOptions.close
    }, itemFromSingleOrMultiple(shapeData, id, reduceDuplicates));
  }
  function fixOutMode(data) {
    if (!isInArray(data.outMode, data.checkModes)) {
      return;
    }
    const diameter = data.radius * double;
    if (data.coord > data.maxCoord - diameter) {
      data.setCb(-data.radius);
    } else if (data.coord < diameter) {
      data.setCb(data.radius);
    }
  }
  function normalizeAngle(angle, modulus) {
    const normalized = angle % modulus;
    return normalized < defaultAngle ? normalized + modulus : normalized;
  }
  function initParticleState(particle, id, group) {
    particle.id = id;
    particle.group = group;
    particle.justWarped = false;
    particle.effectClose = true;
    particle.shapeClose = true;
    particle.pathRotation = false;
    particle.lastPathTime = 0;
    particle.destroyed = false;
    particle.unbreakable = false;
    particle.isRotating = false;
    particle.rotation = 0;
    particle.misplaced = false;
    particle.retina = {
      maxDistance: {},
      maxSpeed: 0,
      moveDrift: 0,
      moveSpeed: 0,
      sizeAnimationSpeed: 0
    };
    particle.size = {
      value: 1,
      max: 1,
      min: 1,
      enable: false
    };
    particle.outType = ParticleOutType.normal;
    particle.ignoresResizeRatio = true;
  }
  function resolveParticleOptions(particle, container, pluginManager, overrideOptions) {
    const mainOptions = container.actualOptions, particlesOptions = loadParticlesOptions(pluginManager, container, mainOptions.particles), reduceDuplicates = particlesOptions.reduceDuplicates;
    particle.effect = itemFromSingleOrMultiple(particlesOptions.effect.type, particle.id, reduceDuplicates);
    particle.shape = itemFromSingleOrMultiple(particlesOptions.shape.type, particle.id, reduceDuplicates);
    const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
    if (overrideOptions) {
      if (overrideOptions.effect) {
        const overrideEffectType = overrideOptions.effect.type;
        if (overrideEffectType && overrideEffectType !== particle.effect) {
          const effect = itemFromSingleOrMultiple(overrideEffectType, particle.id, reduceDuplicates);
          if (effect) {
            particle.effect = effect;
          }
        }
        effectOptions.load(overrideOptions.effect);
      }
      if (overrideOptions.shape) {
        const overrideShapeType = overrideOptions.shape.type;
        if (overrideShapeType && overrideShapeType !== particle.shape) {
          const shape = itemFromSingleOrMultiple(overrideShapeType, particle.id, reduceDuplicates);
          if (shape) {
            particle.shape = shape;
          }
        }
        shapeOptions.load(overrideOptions.shape);
      }
    }
    if (particle.effect === randomColorValue) {
      const availableEffects = [...container.effectDrawers.keys()];
      particle.effect = availableEffects[Math.floor(getRandom() * availableEffects.length)];
    }
    if (particle.shape === randomColorValue) {
      const availableShapes = [...container.shapeDrawers.keys()];
      particle.shape = availableShapes[Math.floor(getRandom() * availableShapes.length)];
    }
    particle.effectData = particle.effect ? loadEffectData(particle.effect, effectOptions, particle.id, reduceDuplicates) : void 0;
    particle.shapeData = particle.shape ? loadShapeData(particle.shape, shapeOptions, particle.id, reduceDuplicates) : void 0;
    particlesOptions.load(overrideOptions);
    const effectData = particle.effectData, shapeData = particle.shapeData;
    if (effectData) {
      particlesOptions.load(effectData.particles);
    }
    if (shapeData) {
      particlesOptions.load(shapeData.particles);
    }
    particle.effectClose = effectData?.close ?? particlesOptions.effect.close;
    particle.shapeClose = shapeData?.close ?? particlesOptions.shape.close;
    return particlesOptions;
  }
  function initParticleDrawers(particle, container) {
    let effectDrawer, shapeDrawer;
    if (particle.effect) {
      effectDrawer = container.effectDrawers.get(particle.effect);
    }
    if (effectDrawer?.loadEffect) {
      effectDrawer.loadEffect(particle);
    }
    if (particle.shape) {
      shapeDrawer = container.shapeDrawers.get(particle.shape);
    }
    if (shapeDrawer?.loadShape) {
      shapeDrawer.loadShape(particle);
    }
    const sideCountFunc = shapeDrawer?.getSidesCount;
    if (sideCountFunc) {
      particle.sides = sideCountFunc(particle);
    }
  }
  function runUpdaterPreInit(updaters, particle) {
    for (const updater of updaters) {
      updater.preInit?.(particle);
    }
  }
  function runUpdaterInit(updaters, particle) {
    for (const updater of updaters) {
      updater.init(particle);
    }
  }
  function runDrawerInit(container, particle) {
    const shapeDrawer = particle.shape ? container.shapeDrawers.get(particle.shape) : void 0, effectDrawer = particle.effect ? container.effectDrawers.get(particle.effect) : void 0;
    effectDrawer?.particleInit?.(container, particle);
    shapeDrawer?.particleInit?.(container, particle);
  }
  function runParticleCreatedPlugins(container, particle) {
    for (const plugin of container.particleCreatedPlugins) {
      plugin.particleCreated?.(particle);
    }
  }
  var Particle;
  var init_Particle = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Particle.js"() {
      init_ErrorUtils();
      init_Vectors();
      init_ColorUtils();
      init_MathUtils();
      init_Utils();
      init_Constants();
      init_EventType();
      init_MoveDirection();
      init_OutMode();
      init_OutModeDirection();
      init_ParticleOutType();
      init_ParticlesOptionsLoader();
      Particle = class {
        backColor;
        destroyed;
        direction;
        effect;
        effectClose;
        effectData;
        fillColor;
        fillEnabled;
        fillOpacity;
        group;
        id;
        ignoresResizeRatio;
        initialPosition;
        initialVelocity;
        isRotating;
        justWarped;
        lastPathTime;
        misplaced;
        moveCenter;
        offset;
        opacity;
        options;
        outType;
        pathRotation;
        position;
        randomIndexData;
        retina;
        roll;
        rotation;
        shape;
        shapeClose;
        shapeData;
        sides;
        size;
        spawning;
        strokeColor;
        strokeOpacity;
        strokeWidth;
        unbreakable;
        velocity;
        zIndexFactor;
        #cachedOpacityData = {
          fillOpacity: defaultOpacity,
          opacity: defaultOpacity,
          strokeOpacity: defaultOpacity
        };
        #cachedPosition = Vector3d.origin;
        #cachedRotateData = { sin: 0, cos: 0 };
        #cachedTransform = {
          a: 1,
          b: 0,
          c: 0,
          d: 1
        };
        #container;
        #modifiers = [];
        #pluginManager;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
        }
        addModifier(modifier) {
          this.#modifiers.push(modifier);
          this.#modifiers.sort((a, b) => a.priority - b.priority);
        }
        clearModifiers() {
          this.#modifiers.length = 0;
        }
        destroy(override) {
          if (this.unbreakable || this.destroyed) {
            return;
          }
          this.destroyed = true;
          this.clearModifiers();
          const container = this.#container, shapeDrawer = this.shape ? container.shapeDrawers.get(this.shape) : void 0;
          shapeDrawer?.particleDestroy?.(this);
          for (const plugin of container.particleDestroyedPlugins) {
            plugin.particleDestroyed?.(this, override);
          }
          for (const updater of container.particleUpdaters) {
            updater.particleDestroyed?.(this, override);
          }
          this.#container.dispatchEvent(EventType.particleDestroyed, {
            particle: this
          });
        }
        draw(delta) {
          const container = this.#container, render = container.canvas.render;
          render.drawParticlePlugins(this, delta);
          render.drawParticle(this, delta);
        }
        getAngle() {
          return this.rotation + (this.pathRotation ? this.velocity.angle : defaultAngle);
        }
        getFillColor() {
          return this.#getRollColor(this.#applyModifiers(getHslFromAnimation(this.fillColor), (m) => m.fillColor));
        }
        getMass() {
          return this.getRadius() ** squareExp * Math.PI * half;
        }
        getModifier(id) {
          return this.#modifiers.find((m) => m.id === id);
        }
        getOpacity() {
          const zIndexOptions = this.options.zIndex, zIndexFactor = zIndexFactorOffset - this.zIndexFactor, zOpacityFactor = zIndexFactor ** zIndexOptions.opacityRate, baseOpacity = getRangeValue(this.opacity?.value ?? defaultOpacity), modifierOpacity = this.#applyModifiers(void 0, (m) => m.opacity), opacity = modifierOpacity ?? baseOpacity;
          this.#cachedOpacityData.fillOpacity = this.fillOpacity ?? defaultOpacity;
          this.#cachedOpacityData.opacity = opacity * zOpacityFactor;
          this.#cachedOpacityData.strokeOpacity = this.strokeOpacity ?? defaultOpacity;
          return this.#cachedOpacityData;
        }
        getPosition() {
          this.#cachedPosition.x = this.position.x + this.offset.x;
          this.#cachedPosition.y = this.position.y + this.offset.y;
          this.#cachedPosition.z = this.position.z;
          return this.#cachedPosition;
        }
        getRadius() {
          return this.#applyModifiers(this.size.value, (m) => m.radius);
        }
        getRotateData() {
          const angle = this.getAngle();
          this.#cachedRotateData.sin = Math.sin(angle);
          this.#cachedRotateData.cos = Math.cos(angle);
          return this.#cachedRotateData;
        }
        getStrokeColor() {
          return this.#getRollColor(this.#applyModifiers(getHslFromAnimation(this.strokeColor), (m) => m.strokeColor));
        }
        getTransformData(externalTransform) {
          const rotateData = this.getRotateData(), rotating = this.isRotating;
          this.#cachedTransform.a = rotateData.cos * (externalTransform.a ?? defaultTransform.a);
          this.#cachedTransform.b = rotating ? rotateData.sin * (externalTransform.b ?? identity) : externalTransform.b ?? defaultTransform.b;
          this.#cachedTransform.c = rotating ? -rotateData.sin * (externalTransform.c ?? identity) : externalTransform.c ?? defaultTransform.c;
          this.#cachedTransform.d = rotateData.cos * (externalTransform.d ?? defaultTransform.d);
          return this.#cachedTransform;
        }
        init(id, position, overrideOptions, group) {
          const container = this.#container;
          initParticleState(this, id, group);
          this.options = resolveParticleOptions(this, container, this.#pluginManager, overrideOptions);
          container.retina.initParticle(this);
          runUpdaterPreInit(container.particleUpdaters, this);
          this.#initPosition(position);
          this.initialVelocity = this.#calculateVelocity();
          this.velocity = this.initialVelocity.copy();
          this.zIndexFactor = this.position.z / container.zLayers;
          this.sides = 24;
          initParticleDrawers(this, container);
          this.spawning = false;
          runUpdaterInit(container.particleUpdaters, this);
          runDrawerInit(container, this);
          runParticleCreatedPlugins(container, this);
        }
        isInsideCanvas(direction) {
          return this.#getInsideCanvasResult(direction).inside;
        }
        isInsideCanvasForOutMode(outMode, direction) {
          return this.#getInsideCanvasResult(direction, outMode).inside;
        }
        isShowingBack() {
          if (!this.roll) {
            return false;
          }
          const angle = this.roll.angle;
          if (this.roll.horizontal && this.roll.vertical) {
            const adjustedAngle = normalizeAngle(angle, doublePI);
            return adjustedAngle >= Math.PI * half && adjustedAngle < Math.PI * triple * half;
          }
          if (this.roll.horizontal) {
            const adjustedAngle = normalizeAngle(angle + Math.PI * half, doublePI);
            return adjustedAngle >= Math.PI && adjustedAngle < Math.PI * double;
          }
          if (this.roll.vertical) {
            const adjustedAngle = normalizeAngle(angle, doublePI);
            return adjustedAngle >= Math.PI && adjustedAngle < Math.PI * double;
          }
          return false;
        }
        isVisible() {
          return !this.destroyed && !this.spawning && this.isInsideCanvas();
        }
        removeModifier(id) {
          const idx = this.#modifiers.findIndex((m) => m.id === id);
          if (idx >= defaultAngle) {
            this.#modifiers.splice(idx, identity);
          }
        }
        reset() {
          for (const updater of this.#container.particleUpdaters) {
            updater.reset?.(this);
          }
        }
        #applyModifiers(base, getter) {
          let value = base;
          for (const mod of this.#modifiers) {
            if (mod.enabled) {
              const override = getter(mod);
              if (override !== void 0) {
                value = override;
              }
            }
          }
          return value;
        }
        #calcPosition(position, zIndex) {
          let tryCount = defaultRetryCount, posVec = position ? Vector3d.create(position.x, position.y, zIndex) : void 0;
          const container = this.#container, plugins = container.particlePositionPlugins, outModes = this.options.move.outModes, radius = this.getRadius(), canvasSize = container.canvas.size;
          for (; ; ) {
            for (const plugin of plugins) {
              const pluginPos = plugin.particlePosition?.(posVec, this);
              if (pluginPos) {
                return Vector3d.create(pluginPos.x, pluginPos.y, zIndex);
              }
            }
            const exactPosition = calcExactPositionOrRandomFromSize({
              size: canvasSize,
              position: posVec
            }), pos = Vector3d.create(exactPosition.x, exactPosition.y, zIndex);
            this.#fixHorizontal(pos, radius, outModes.left ?? outModes.default);
            this.#fixHorizontal(pos, radius, outModes.right ?? outModes.default);
            this.#fixVertical(pos, radius, outModes.top ?? outModes.default);
            this.#fixVertical(pos, radius, outModes.bottom ?? outModes.default);
            let isValidPosition = true;
            for (const plugin of container.particles.checkParticlePositionPlugins) {
              isValidPosition = plugin.checkParticlePosition?.(this, pos, tryCount) ?? true;
              if (!isValidPosition) {
                break;
              }
            }
            if (isValidPosition) {
              return pos;
            }
            tryCount += tryCountIncrement;
            posVec = void 0;
          }
        }
        #calculateVelocity() {
          const moveOptions = this.options.move, baseVelocity = getParticleBaseVelocity(this.direction), res = baseVelocity.copy();
          if (moveOptions.direction === MoveDirection.inside || moveOptions.direction === MoveDirection.outside) {
            return res;
          }
          const rad = degToRad(getRangeValue(moveOptions.angle.value)), radOffset = degToRad(getRangeValue(moveOptions.angle.offset)), range = {
            left: radOffset - rad * half,
            right: radOffset + rad * half
          };
          if (!moveOptions.straight) {
            res.angle += randomInRangeValue(setRangeValue(range.left, range.right));
          }
          if (moveOptions.random && typeof moveOptions.speed === "number") {
            res.length *= getRandom();
          }
          return res;
        }
        #fixHorizontal(pos, radius, outMode) {
          fixOutMode({
            outMode,
            checkModes: [OutMode.bounce],
            coord: pos.x,
            maxCoord: this.#container.canvas.size.width,
            setCb: (value) => pos.x += value,
            radius
          });
        }
        #fixVertical(pos, radius, outMode) {
          fixOutMode({
            outMode,
            checkModes: [OutMode.bounce],
            coord: pos.y,
            maxCoord: this.#container.canvas.size.height,
            setCb: (value) => pos.y += value,
            radius
          });
        }
        #getDefaultInsideCanvasResult(direction, outMode) {
          const radius = this.getRadius(), canvasSize = this.#container.canvas.size, isBounce = outMode === OutMode.bounce || outMode === OutMode.split, position = isBounce ? this.getPosition() : this.position;
          if (direction === OutModeDirection.bottom) {
            return {
              inside: isBounce ? position.y + radius < canvasSize.height : position.y - radius < canvasSize.height,
              reason: "default"
            };
          }
          if (direction === OutModeDirection.left) {
            return {
              inside: isBounce ? position.x - radius > defaultAngle : position.x + radius > defaultAngle,
              reason: "default"
            };
          }
          if (direction === OutModeDirection.right) {
            return {
              inside: isBounce ? position.x + radius < canvasSize.width : position.x - radius < canvasSize.width,
              reason: "default"
            };
          }
          if (direction === OutModeDirection.top) {
            return {
              inside: isBounce ? position.y - radius > defaultAngle : position.y + radius > defaultAngle,
              reason: "default"
            };
          }
          return {
            inside: position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius,
            reason: "default"
          };
        }
        #getInsideCanvasCallbackData(direction, outMode) {
          return {
            canvasSize: this.#container.canvas.size,
            direction,
            outMode,
            particle: this,
            radius: this.getRadius()
          };
        }
        #getInsideCanvasResult(direction, outMode) {
          const defaultResult = this.#getDefaultInsideCanvasResult(direction, outMode), container = this.#container, shapeDrawer = this.shape ? container.shapeDrawers.get(this.shape) : void 0, effectDrawer = this.effect ? container.effectDrawers.get(this.effect) : void 0;
          if (!shapeDrawer?.isInsideCanvas && !effectDrawer?.isInsideCanvas) {
            return defaultResult;
          }
          const callbackData = this.#getInsideCanvasCallbackData(direction, outMode), shapeResult = shapeDrawer?.isInsideCanvas ? this.#normalizeInsideCanvasResult(shapeDrawer.isInsideCanvas(callbackData), "shape") : void 0, effectResult = effectDrawer?.isInsideCanvas ? this.#normalizeInsideCanvasResult(effectDrawer.isInsideCanvas(callbackData), "effect") : void 0;
          if (shapeResult && effectResult) {
            const margin = Math.max(shapeResult.margin ?? defaultAngle, effectResult.margin ?? defaultAngle), useUnion = outMode === OutMode.destroy || outMode === OutMode.out;
            return {
              inside: useUnion ? shapeResult.inside || effectResult.inside : shapeResult.inside && effectResult.inside,
              margin: margin > defaultAngle ? margin : void 0,
              reason: "combined"
            };
          }
          return shapeResult ?? effectResult ?? defaultResult;
        }
        #getRollColor(color) {
          if (!color || !this.roll || !this.backColor && !this.roll.alter) {
            return color;
          }
          if (!this.isShowingBack()) {
            return color;
          }
          if (this.backColor) {
            return this.backColor;
          }
          if (this.roll.alter) {
            return alterHsl(color, this.roll.alter.type, this.roll.alter.value);
          }
          return color;
        }
        #initPosition(position) {
          const container = this.#container, zIndexValue = Math.floor(getRangeValue(this.options.zIndex.value)), initialPosition = this.#calcPosition(position, clamp(zIndexValue, minZ, container.zLayers));
          if (!initialPosition) {
            throw new Error(getErrorMessage(ErrorCodes.particlePositionNotFound));
          }
          this.position = initialPosition;
          this.initialPosition = this.position.copy();
          const canvasSize = container.canvas.size;
          this.moveCenter = {
            ...getPosition(this.options.move.center, canvasSize),
            radius: this.options.move.center.radius,
            mode: this.options.move.center.mode
          };
          this.direction = getParticleDirectionAngle(this.options.move.direction, this.position, this.moveCenter);
          switch (this.options.move.direction) {
            case MoveDirection.inside:
              this.outType = ParticleOutType.inside;
              break;
            case MoveDirection.outside:
              this.outType = ParticleOutType.outside;
              break;
            default:
              break;
          }
          this.offset = Vector.origin;
        }
        #normalizeInsideCanvasResult(result, reason) {
          if (typeof result === "boolean") {
            return {
              inside: result,
              reason
            };
          }
          return {
            inside: result.inside,
            margin: result.margin,
            reason: result.reason ?? reason
          };
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/RangeType.js
  var RangeType;
  var init_RangeType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/RangeType.js"() {
      (function(RangeType2) {
        RangeType2["circle"] = "circle";
        RangeType2["rectangle"] = "rectangle";
      })(RangeType || (RangeType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js
  var BaseRange, Circle, Rectangle;
  var init_Ranges = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/Ranges.js"() {
      init_RangeType();
      init_MathUtils();
      BaseRange = class {
        position;
        type;
        constructor(x, y, type) {
          this.position = {
            x,
            y
          };
          this.type = type;
        }
        _resetPosition(x, y) {
          this.position.x = x;
          this.position.y = y;
        }
      };
      Circle = class _Circle extends BaseRange {
        radius;
        constructor(x, y, radius) {
          super(x, y, RangeType.circle);
          this.radius = radius;
        }
        contains(point) {
          return checkDistance(point, this.position, this.radius);
        }
        intersects(range) {
          const pos1 = this.position, pos2 = range.position, r = this.radius, dx = pos2.x - pos1.x, dy = pos2.y - pos1.y;
          if (range instanceof _Circle || range.type === RangeType.circle) {
            const circleRange = range, rSum = r + circleRange.radius;
            return rSum > 0 && dx * dx + dy * dy < rSum * rSum;
          } else if (range instanceof Rectangle || range.type === RangeType.rectangle) {
            const rectRange = range, { width, height } = rectRange.size, absX = Math.abs(dx), absY = Math.abs(dy), xEdge = absX - width, yEdge = absY - height, edges = xEdge * xEdge + yEdge * yEdge;
            return edges <= r * r || absX <= r + width && absY <= r + height || absX <= width || absY <= height;
          }
          return false;
        }
        reset(x, y, radius) {
          this._resetPosition(x, y);
          this.radius = radius;
          return this;
        }
      };
      Rectangle = class _Rectangle extends BaseRange {
        size;
        constructor(x, y, width, height) {
          super(x, y, RangeType.rectangle);
          this.size = {
            height,
            width
          };
        }
        contains(point) {
          const w = this.size.width, h = this.size.height, pos = this.position;
          return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
        }
        intersects(range) {
          if (range instanceof Circle) {
            return range.intersects(this);
          }
          if (!(range instanceof _Rectangle)) {
            return false;
          }
          const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range.size, w2 = size2.width, h2 = size2.height;
          return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
        }
        reset(x, y, width, height) {
          this._resetPosition(x, y);
          this.size.width = width;
          this.size.height = height;
          return this;
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Utils/SpatialHashGrid.js
  var sparseQueryCellRatio, sparseQueryMinArea, SpatialHashGrid;
  var init_SpatialHashGrid = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Utils/SpatialHashGrid.js"() {
      init_Ranges();
      sparseQueryCellRatio = 16;
      sparseQueryMinArea = 64;
      SpatialHashGrid = class {
        #cells = /* @__PURE__ */ new Map();
        #cellSize;
        #circlePool = [];
        #circlePoolIdx;
        #pendingCellSize;
        #rectanglePool = [];
        #rectanglePoolIdx;
        constructor(cellSize) {
          this.#cellSize = cellSize;
          this.#circlePoolIdx = 0;
          this.#rectanglePoolIdx = 0;
        }
        get cellSize() {
          return this.#cellSize;
        }
        set cellSize(value) {
          this.#pendingCellSize = value;
        }
        clear() {
          this.#cells.clear();
          const pendingCellSize = this.#pendingCellSize;
          if (pendingCellSize) {
            this.#cellSize = pendingCellSize;
          }
          this.#pendingCellSize = void 0;
        }
        insert(particle) {
          const { x, y } = particle.getPosition(), key = this.#cellKeyFromCoords(x, y);
          if (!this.#cells.has(key)) {
            this.#cells.set(key, []);
          }
          this.#cells.get(key)?.push(particle);
        }
        query(range, check, out = []) {
          const bounds = this.#getRangeBounds(range);
          if (!bounds || !this.#cells.size) {
            return out;
          }
          const minCellX = Math.floor(bounds.minX / this.#cellSize), maxCellX = Math.floor(bounds.maxX / this.#cellSize), minCellY = Math.floor(bounds.minY / this.#cellSize), maxCellY = Math.floor(bounds.maxY / this.#cellSize);
          if (!Number.isSafeInteger(minCellX) || !Number.isSafeInteger(maxCellX) || !Number.isSafeInteger(minCellY) || !Number.isSafeInteger(maxCellY) || minCellX > maxCellX || minCellY > maxCellY) {
            return out;
          }
          if (!check && (maxCellX - minCellX + 1) * (maxCellY - minCellY + 1) > Math.max(sparseQueryMinArea, this.#cells.size * sparseQueryCellRatio)) {
            const occupied = [];
            for (const key of this.#cells.keys()) {
              const separator = key.indexOf("_"), x = Number(key.slice(0, separator)), y = Number(key.slice(separator + 1));
              if (x >= minCellX && x <= maxCellX && y >= minCellY && y <= maxCellY) {
                occupied.push({ x, y });
              }
            }
            occupied.sort((a, b) => a.x === b.x ? a.y - b.y : a.x - b.x);
            for (const { x, y } of occupied) {
              this.#queryCell(x, y, range, void 0, out);
            }
            return out;
          }
          for (let cx = minCellX; cx <= maxCellX; cx++) {
            for (let cy = minCellY; cy <= maxCellY; cy++) {
              this.#queryCell(cx, cy, range, check, out);
            }
          }
          return out;
        }
        queryCircle(position, radius, check, out = []) {
          const circle = this.#acquireCircle(position.x, position.y, radius);
          try {
            return this.query(circle, check, out);
          } finally {
            this.#circlePoolIdx--;
          }
        }
        queryRectangle(position, size, check, out = []) {
          const rect = this.#acquireRectangle(position.x, position.y, size.width, size.height);
          try {
            return this.query(rect, check, out);
          } finally {
            this.#rectanglePoolIdx--;
          }
        }
        #acquireCircle(x, y, r) {
          const idx = this.#circlePoolIdx++;
          let circle = this.#circlePool[idx];
          if (!circle) {
            circle = new Circle(x, y, r);
            this.#circlePool[idx] = circle;
          }
          return circle.reset(x, y, r);
        }
        #acquireRectangle(x, y, w, h) {
          const idx = this.#rectanglePoolIdx++;
          let rectangle = this.#rectanglePool[idx];
          if (!rectangle) {
            rectangle = new Rectangle(x, y, w, h);
            this.#rectanglePool[idx] = rectangle;
          }
          return rectangle.reset(x, y, w, h);
        }
        #cellKeyFromCoords(x, y) {
          const cellX = Math.floor(x / this.#cellSize), cellY = Math.floor(y / this.#cellSize);
          return `${cellX}_${cellY}`;
        }
        #getRangeBounds(range) {
          if (range instanceof Circle) {
            const r = range.radius, { x, y } = range.position;
            return {
              minX: x - r,
              maxX: x + r,
              minY: y - r,
              maxY: y + r
            };
          }
          if (range instanceof Rectangle) {
            const { x, y } = range.position, { width, height } = range.size;
            return {
              minX: x,
              maxX: x + width,
              minY: y,
              maxY: y + height
            };
          }
          return null;
        }
        #queryCell(cx, cy, range, check, out) {
          const cellParticles = this.#cells.get(`${cx}_${cy}`);
          if (!cellParticles) {
            return;
          }
          for (const p of cellParticles) {
            if (check && !check(p)) {
              continue;
            }
            if (range.contains(p.getPosition())) {
              out.push(p);
            }
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/ParticlesManager.js
  var ParticlesManager;
  var init_ParticlesManager = __esm({
    "node_modules/@tsparticles/engine/browser/Core/ParticlesManager.js"() {
      init_Constants();
      init_EventType();
      init_LimitMode();
      init_Particle();
      init_SpatialHashGrid();
      init_LogUtils();
      init_ParticlesOptionsLoader();
      init_TypeUtils();
      ParticlesManager = class {
        checkParticlePositionPlugins;
        #array;
        #container;
        #grid;
        #groupLimits;
        #limit;
        #nextId;
        #particleBuckets;
        #particleResetPlugins;
        #particleUpdatePlugins;
        #pluginManager;
        #pool;
        #postParticleUpdatePlugins;
        #postUpdatePlugins;
        #resizeFactor;
        #updatePlugins;
        #zBuckets;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.#nextId = 0;
          this.#array = [];
          this.#pool = [];
          this.#limit = 0;
          this.#groupLimits = /* @__PURE__ */ new Map();
          this.#particleBuckets = /* @__PURE__ */ new Map();
          this.#zBuckets = this.#createBuckets(this.#container.zLayers);
          this.#grid = new SpatialHashGrid(spatialHashGridCellSize);
          this.checkParticlePositionPlugins = [];
          this.#particleResetPlugins = [];
          this.#particleUpdatePlugins = [];
          this.#postUpdatePlugins = [];
          this.#postParticleUpdatePlugins = [];
          this.#updatePlugins = [];
        }
        get count() {
          return this.#array.length;
        }
        get grid() {
          return this.#grid;
        }
        addParticle(position, overrideOptions, group, initializer) {
          if (this.#checkAndApplyLimits(group, this.count)) {
            return;
          }
          try {
            const particle = this.#pool.pop() ?? new Particle(this.#pluginManager, this.#container);
            particle.init(this.#nextId, position, overrideOptions, group);
            let canAdd = true;
            if (initializer) {
              canAdd = initializer(particle);
            }
            if (!canAdd) {
              this.#pool.push(particle);
              return;
            }
            this.#array.push(particle);
            this.#insertParticleIntoBucket(particle);
            this.#nextId++;
            this.#container.dispatchEvent(EventType.particleAdded, {
              particle
            });
            return particle;
          } catch (e) {
            getLogger().warning(`error adding particle: ${e}`);
          }
          return void 0;
        }
        clear() {
          this.#array = [];
          this.#particleBuckets.clear();
          this.#resetBuckets(this.#container.zLayers);
        }
        destroy() {
          this.#array = [];
          this.#pool.length = 0;
          this.#particleBuckets.clear();
          this.#zBuckets = [];
          this.checkParticlePositionPlugins = [];
          this.#particleResetPlugins = [];
          this.#particleUpdatePlugins = [];
          this.#postUpdatePlugins = [];
          this.#postParticleUpdatePlugins = [];
          this.#updatePlugins = [];
        }
        drawParticles(delta) {
          for (let i = this.#zBuckets.length - one; i >= minIndex; i--) {
            const bucket = this.#zBuckets[i];
            if (!bucket) {
              continue;
            }
            for (const particle of bucket) {
              particle.draw(delta);
            }
          }
        }
        filter(condition) {
          return this.#array.filter(condition);
        }
        find(condition) {
          return this.#array.find(condition);
        }
        get(index) {
          return this.#array[index];
        }
        async init() {
          const container = this.#container;
          this.checkParticlePositionPlugins = [];
          this.#updatePlugins = [];
          this.#particleUpdatePlugins = [];
          this.#postUpdatePlugins = [];
          this.#particleResetPlugins = [];
          this.#postParticleUpdatePlugins = [];
          this.#particleBuckets.clear();
          this.#resetBuckets(container.zLayers);
          this.#grid = new SpatialHashGrid(spatialHashGridCellSize * container.retina.pixelRatio);
          this.#applyLimits(container.actualOptions.particles);
          const particlesOptions = container.actualOptions.particles, groups = particlesOptions.groups;
          for (const group in groups) {
            const groupData = groups[group];
            if (groupData) {
              this.#applyLimits(loadParticlesOptions(this.#pluginManager, this.#container, groupData), group, groupData);
            }
          }
          await this.#initPlugins();
        }
        push(nb, position, overrideOptions, group) {
          for (let i = 0; i < nb; i++) {
            this.addParticle(position, overrideOptions, group);
          }
        }
        async redraw() {
          this.clear();
          await this.init();
          this.#container.canvas.render.drawParticles({ value: 0, factor: 0 });
        }
        remove(particle, group, override) {
          this.removeAt(this.#array.indexOf(particle), void 0, group, override);
        }
        removeAt(index, quantity = defaultRemoveQuantity, group, override, matchGroup = true) {
          if (index < minIndex || index > this.count) {
            return;
          }
          let deleted = 0;
          for (let i = index; deleted < quantity && i < this.count; i++) {
            if (this.#removeParticle(i, group, override, matchGroup)) {
              i--;
              deleted++;
            }
          }
        }
        removeQuantity(quantity, group) {
          this.removeAt(minIndex, quantity, group);
        }
        setDensity() {
          const options = this.#container.actualOptions, groups = options.particles.groups;
          let pluginsCount = 0;
          for (const plugin of this.#container.plugins) {
            if (plugin.particlesDensityCount) {
              pluginsCount += plugin.particlesDensityCount();
            }
          }
          for (const group in groups) {
            const groupData = groups[group];
            if (!groupData) {
              continue;
            }
            const groupDataOptions = loadParticlesOptions(this.#pluginManager, this.#container, groupData);
            this.#applyDensity(groupDataOptions, pluginsCount, group);
          }
          this.#applyDensity(options.particles, pluginsCount);
        }
        setResizeFactor(factor) {
          this.#resizeFactor = factor;
        }
        update(delta) {
          this.#grid.clear();
          for (const plugin of this.#updatePlugins) {
            plugin.update?.(delta);
          }
          const particlesToDelete = this.#updateParticlesPhase1(delta);
          for (const plugin of this.#postUpdatePlugins) {
            plugin.postUpdate?.(delta);
          }
          this.#updateParticlesPhase2(delta, particlesToDelete);
          if (particlesToDelete.size) {
            for (const particle of particlesToDelete) {
              this.remove(particle, particle.group);
            }
          }
          this.#resizeFactor = void 0;
        }
        #addToPool(...particles) {
          this.#pool.push(...particles);
        }
        #applyDensity(options, pluginsCount, group, groupOptions) {
          const numberOptions = options.number;
          if (!numberOptions.density.enable) {
            this.#applyLimits(options, group, groupOptions);
            return;
          }
          const densityFactor = this.#initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, optParticlesLimit = numberOptions.limit.value > minLimit ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.round(Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + pluginsCount), particlesCount = this.#countGroup(group);
          if (group === void 0) {
            this.#limit = numberOptions.limit.value * densityFactor;
          } else {
            this.#groupLimits.set(group, {
              limit: numberOptions.limit.value * densityFactor,
              mode: toEnumValue(LimitMode, numberOptions.limit.mode, LimitMode.delete)
            });
          }
          if (particlesCount < particlesNumber) {
            this.push(Math.abs(particlesNumber - particlesCount), void 0, options, group);
          } else if (particlesCount > particlesNumber) {
            this.removeQuantity(particlesCount - particlesNumber, group);
          }
        }
        #applyLimits(options, group, groupOptions) {
          if (group === void 0) {
            this.#limit = options.number.limit.value;
            const groups = this.#container.actualOptions.particles.groups;
            for (const existingGroup of this.#groupLimits.keys()) {
              if (!(existingGroup in groups)) {
                this.#groupLimits.delete(existingGroup);
              }
            }
          } else {
            const limitValue = groupOptions?.number?.limit?.value ?? options.number.limit.value;
            if (limitValue > minLimit) {
              this.#groupLimits.set(group, {
                limit: limitValue,
                mode: toEnumValue(LimitMode, groupOptions?.number?.limit?.mode ?? options.number.limit.mode, LimitMode.delete)
              });
            } else {
              this.#groupLimits.delete(group);
            }
          }
        }
        #checkAndApplyLimits(group, currentCount) {
          const globalLimit = this.#limit, globalMode = this.#container.actualOptions.particles.number.limit.mode;
          if (globalLimit > minLimit && globalMode === LimitMode.wait && currentCount >= globalLimit) {
            return true;
          }
          const groupLimitEntry = group === void 0 ? void 0 : this.#groupLimits.get(group);
          if (groupLimitEntry && groupLimitEntry.limit > minLimit && groupLimitEntry.mode === LimitMode.wait) {
            const groupCount = this.#countGroup(group);
            if (groupCount >= groupLimitEntry.limit) {
              return true;
            }
          }
          if (groupLimitEntry && groupLimitEntry.limit > minLimit && groupLimitEntry.mode === LimitMode.delete) {
            const groupCountToRemove = this.#countGroup(group) + countOffset - groupLimitEntry.limit;
            if (groupCountToRemove > minCount) {
              this.removeQuantity(groupCountToRemove, group);
            }
          }
          if (globalLimit > minLimit && globalMode === LimitMode.delete) {
            const globalCountToRemove = this.count + countOffset - globalLimit;
            if (globalCountToRemove > minCount) {
              this.#removeAny(globalCountToRemove);
            }
          }
          return false;
        }
        #countGroup(group) {
          let count = 0;
          for (const particle of this.#array) {
            if (particle.group === group) {
              count++;
            }
          }
          return count;
        }
        #createBuckets(zLayers) {
          const bucketCount = Math.max(Math.floor(zLayers), one);
          return Array.from({ length: bucketCount }, () => []);
        }
        #getBucketIndex(zIndex) {
          const maxBucketIndex = this.#zBuckets.length - one;
          if (maxBucketIndex <= minIndex) {
            return minIndex;
          }
          return Math.min(Math.max(Math.floor(zIndex), minIndex), maxBucketIndex);
        }
        #initDensityFactor(densityOptions) {
          const container = this.#container;
          if (!densityOptions.enable) {
            return defaultDensityFactor;
          }
          const canvasSize = container.canvas.size, pxRatio = container.retina.pixelRatio;
          if (!Number.isFinite(canvasSize.width) || !Number.isFinite(canvasSize.height) || canvasSize.width <= 0 || canvasSize.height <= 0 || !Number.isFinite(densityOptions.width) || !Number.isFinite(densityOptions.height) || densityOptions.width <= 0 || densityOptions.height <= 0 || !Number.isFinite(pxRatio) || pxRatio <= 0) {
            return defaultDensityFactor;
          }
          const densityFactor = canvasSize.width * canvasSize.height / (densityOptions.height * densityOptions.width * pxRatio ** squareExp);
          return Number.isFinite(densityFactor) && densityFactor >= 0 ? densityFactor : defaultDensityFactor;
        }
        async #initDrawersAndUpdaters() {
          const container = this.#container;
          await container.initDrawersAndUpdaters();
          container.canvas.render.initUpdaters();
          for (const drawer of container.effectDrawers.values()) {
            await drawer.init?.(container);
          }
          for (const drawer of container.shapeDrawers.values()) {
            await drawer.init?.(container);
          }
        }
        async #initPlugins() {
          await this.#initPluginsArrays();
          await this.#initDrawersAndUpdaters();
          let handled = false;
          const container = this.#container;
          for (const plugin of container.plugins) {
            handled = plugin.particlesInitialization?.() ?? handled;
            if (handled) {
              break;
            }
          }
          if (handled) {
            return;
          }
          const particlesOptions = container.actualOptions.particles, groups = particlesOptions.groups;
          for (const group in groups) {
            const groupOptions = groups[group];
            if (!groupOptions) {
              continue;
            }
            for (let i = this.count, j = 0; j < groupOptions.number.value && i < particlesOptions.number.value; i++, j++) {
              this.addParticle(void 0, groupOptions, group);
            }
          }
          for (let i = this.count; i < particlesOptions.number.value; i++) {
            this.addParticle();
          }
        }
        async #initPluginsArrays() {
          const container = this.#container;
          for (const plugin of container.plugins) {
            if (plugin.redrawInit) {
              await plugin.redrawInit();
            }
            if (plugin.checkParticlePosition) {
              this.checkParticlePositionPlugins.push(plugin);
            }
            if (plugin.update) {
              this.#updatePlugins.push(plugin);
            }
            if (plugin.particleUpdate) {
              this.#particleUpdatePlugins.push(plugin);
            }
            if (plugin.postUpdate) {
              this.#postUpdatePlugins.push(plugin);
            }
            if (plugin.particleReset) {
              this.#particleResetPlugins.push(plugin);
            }
            if (plugin.postParticleUpdate) {
              this.#postParticleUpdatePlugins.push(plugin);
            }
          }
        }
        #insertParticleIntoBucket(particle) {
          const bucketIndex = this.#getBucketIndex(particle.position.z), bucket = this.#zBuckets[bucketIndex];
          if (!bucket) {
            return;
          }
          bucket.push(particle);
          this.#particleBuckets.set(particle.id, bucketIndex);
        }
        #removeAny(quantity) {
          this.removeAt(minIndex, quantity, void 0, void 0, false);
        }
        #removeParticle(index, group, override, matchGroup = true) {
          const particle = this.#array[index];
          if (!particle) {
            return false;
          }
          if (matchGroup && particle.group !== group) {
            return false;
          }
          this.#array.splice(index, deleteCount);
          this.#removeParticleFromBucket(particle);
          particle.destroy(override);
          this.#container.dispatchEvent(EventType.particleRemoved, {
            particle
          });
          this.#addToPool(particle);
          return true;
        }
        #removeParticleFromBucket(particle) {
          const bucketIndex = this.#particleBuckets.get(particle.id) ?? this.#getBucketIndex(particle.position.z), bucket = this.#zBuckets[bucketIndex];
          if (!bucket) {
            this.#particleBuckets.delete(particle.id);
            return;
          }
          const idx = bucket.findIndex((p) => p.id === particle.id);
          if (idx >= minIndex) {
            bucket.splice(idx, deleteCount);
          }
          this.#particleBuckets.delete(particle.id);
        }
        #resetBuckets(zLayers) {
          const bucketCount = Math.max(Math.floor(zLayers), one);
          if (this.#zBuckets.length !== bucketCount) {
            this.#zBuckets = this.#createBuckets(bucketCount);
            return;
          }
          for (const bucket of this.#zBuckets) {
            bucket.length = minIndex;
          }
        }
        #updateParticleBucket(particle) {
          const newBucketIndex = this.#getBucketIndex(particle.position.z), currentBucketIndex = this.#particleBuckets.get(particle.id);
          if (currentBucketIndex === void 0) {
            this.#insertParticleIntoBucket(particle);
            return;
          }
          if (currentBucketIndex === newBucketIndex) {
            return;
          }
          const currentBucket = this.#zBuckets[currentBucketIndex];
          if (currentBucket) {
            const idx = currentBucket.findIndex((p) => p.id === particle.id);
            if (idx >= minIndex) {
              currentBucket.splice(idx, deleteCount);
            }
          }
          const newBucket = this.#zBuckets[newBucketIndex];
          if (!newBucket) {
            this.#particleBuckets.set(particle.id, newBucketIndex);
            return;
          }
          newBucket.push(particle);
          if (newBucket.length >= double) {
            const prev = newBucket[newBucket.length - double];
            if (prev && particle.id < prev.id) {
              newBucket.sort((a, b) => a.id - b.id);
            }
          }
          this.#particleBuckets.set(particle.id, newBucketIndex);
        }
        #updateParticlesPhase1(delta) {
          const particlesToDelete = /* @__PURE__ */ new Set(), resizeFactor = this.#resizeFactor;
          for (const particle of this.#array) {
            if (resizeFactor && !particle.ignoresResizeRatio) {
              particle.position.x *= resizeFactor.width;
              particle.position.y *= resizeFactor.height;
              particle.initialPosition.x *= resizeFactor.width;
              particle.initialPosition.y *= resizeFactor.height;
            }
            particle.ignoresResizeRatio = false;
            for (const plugin of this.#particleResetPlugins) {
              plugin.particleReset?.(particle);
            }
            for (const plugin of this.#particleUpdatePlugins) {
              if (particle.destroyed) {
                break;
              }
              plugin.particleUpdate?.(particle, delta);
            }
            if (particle.destroyed) {
              particlesToDelete.add(particle);
              continue;
            }
            this.#grid.insert(particle);
          }
          return particlesToDelete;
        }
        #updateParticlesPhase2(delta, particlesToDelete) {
          for (const particle of this.#array) {
            if (particle.destroyed) {
              particlesToDelete.add(particle);
              continue;
            }
            for (const updater of this.#container.particleUpdaters) {
              updater.update(particle, delta);
            }
            if (!particle.spawning) {
              for (const plugin of this.#postParticleUpdatePlugins) {
                plugin.postParticleUpdate?.(particle, delta);
              }
            }
            this.#updateParticleBucket(particle);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Retina.js
  var Retina;
  var init_Retina = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Retina.js"() {
      init_Constants();
      init_MathUtils();
      Retina = class {
        pixelRatio;
        reduceFactor;
        #container;
        constructor(container) {
          this.#container = container;
          this.pixelRatio = defaultRatio;
          this.reduceFactor = defaultReduceFactor;
        }
        init() {
          const container = this.#container, options = container.actualOptions;
          this.pixelRatio = options.detectRetina ? devicePixelRatio : defaultRatio;
          this.reduceFactor = defaultReduceFactor;
          const ratio = this.pixelRatio, canvas = container.canvas, element = canvas.domElement;
          if (element) {
            canvas.size.width = element.offsetWidth * ratio;
            canvas.size.height = element.offsetHeight * ratio;
          }
        }
        initParticle(particle) {
          const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
          props.maxSpeed = getRangeValue(moveOptions.gravity.maxSpeed) * ratio;
          props.moveDrift = getRangeValue(moveOptions.drift) * ratio;
          props.moveSpeed = getRangeValue(moveOptions.speed) * ratio;
          const maxDistance = props.maxDistance;
          maxDistance.horizontal = moveDistance.horizontal === void 0 ? void 0 : moveDistance.horizontal * ratio;
          maxDistance.vertical = moveDistance.vertical === void 0 ? void 0 : moveDistance.vertical * ratio;
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Container.js
  var Container_exports = {};
  __export(Container_exports, {
    Container: () => Container
  });
  function guardCheck(container) {
    return !container.destroyed;
  }
  function updateDelta(delta, value, fpsLimit = defaultFps, smooth = false) {
    delta.value = value;
    delta.factor = smooth ? defaultFps / fpsLimit : defaultFps * value / millisecondsToSeconds;
  }
  function loadContainerOptions(pluginManager, container, ...sourceOptionsArr) {
    const options = new Options(pluginManager, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
  }
  var emptyPlugins, Container;
  var init_Container = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Container.js"() {
      init_MathUtils();
      init_Constants();
      init_Utils();
      init_CanvasManager();
      init_EventListeners();
      init_EventType();
      init_HdrMode();
      init_Options();
      init_ParticlesManager();
      init_Retina();
      init_LogUtils();
      init_OptionLoader();
      init_TypeUtils();
      emptyPlugins = Object.freeze([]);
      Container = class {
        actualOptions;
        canvas;
        destroyed;
        effectDrawers;
        fpsLimit;
        hdr;
        hdrMode;
        id;
        pageHidden;
        particles;
        particleUpdaters;
        peakNits;
        retina;
        shapeDrawers;
        started;
        zLayers;
        #delay;
        #delayResolve;
        #delayTimeout;
        #delta = { value: 0, factor: 0 };
        #dispatchCallback;
        #drawAnimationFrame;
        #duration;
        #eventListeners;
        #firstStart;
        #initialSourceOptions;
        #lastFrameTime;
        #lifeTime;
        #onDestroy;
        #options;
        #particleCreatedPlugins = emptyPlugins;
        #particleDestroyedPlugins = emptyPlugins;
        #particlePositionPlugins = emptyPlugins;
        #paused;
        #pluginManager;
        #plugins = emptyPlugins;
        #smooth;
        #sourceOptions;
        #startCancel;
        #startGeneration = 0;
        #startPromise;
        constructor(params) {
          const { dispatchCallback, pluginManager, id, onDestroy, sourceOptions } = params;
          this.#pluginManager = pluginManager;
          this.#dispatchCallback = dispatchCallback;
          this.#onDestroy = onDestroy;
          this.id = Symbol(id);
          this.fpsLimit = 120;
          this.hdr = false;
          this.hdrMode = HdrMode.standard;
          this.peakNits = 400;
          this.#smooth = false;
          this.#delay = 0;
          this.#duration = 0;
          this.#lifeTime = 0;
          this.#firstStart = true;
          this.started = false;
          this.destroyed = false;
          this.#paused = true;
          this.#lastFrameTime = 0;
          this.zLayers = 100;
          this.pageHidden = false;
          this.#sourceOptions = sourceOptions;
          this.#initialSourceOptions = sourceOptions;
          this.effectDrawers = /* @__PURE__ */ new Map();
          this.shapeDrawers = /* @__PURE__ */ new Map();
          this.particleUpdaters = [];
          this.retina = new Retina(this);
          this.canvas = new CanvasManager(this.#pluginManager, this);
          this.particles = new ParticlesManager(this.#pluginManager, this);
          this.#options = loadContainerOptions(this.#pluginManager, this);
          this.actualOptions = loadContainerOptions(this.#pluginManager, this);
          this.#eventListeners = new EventListeners(this);
          this.dispatchEvent(EventType.containerBuilt);
        }
        get animationStatus() {
          return !this.#paused && !this.pageHidden && guardCheck(this);
        }
        get options() {
          return this.#options;
        }
        get particleCreatedPlugins() {
          return this.#particleCreatedPlugins;
        }
        get particleDestroyedPlugins() {
          return this.#particleDestroyedPlugins;
        }
        get particlePositionPlugins() {
          return this.#particlePositionPlugins;
        }
        get plugins() {
          return this.#plugins;
        }
        get sourceOptions() {
          return this.#sourceOptions;
        }
        addLifeTime(value) {
          this.#lifeTime += value;
        }
        alive() {
          return !this.#duration || this.#lifeTime <= this.#duration;
        }
        destroy(remove = true) {
          if (!guardCheck(this)) {
            return;
          }
          this.stop();
          this.particles.destroy();
          this.canvas.destroy();
          for (const [, effectDrawer] of this.effectDrawers) {
            effectDrawer.destroy?.(this);
          }
          for (const [, shapeDrawer] of this.shapeDrawers) {
            shapeDrawer.destroy?.(this);
          }
          for (const plugin of this.plugins) {
            plugin.destroy?.();
          }
          this.effectDrawers = /* @__PURE__ */ new Map();
          this.shapeDrawers = /* @__PURE__ */ new Map();
          this.particleUpdaters = [];
          this.#plugins = emptyPlugins;
          this.destroyed = true;
          this.#onDestroy(remove);
          this.dispatchEvent(EventType.containerDestroyed);
        }
        dispatchEvent(type, data) {
          this.#dispatchCallback(type, {
            container: this,
            data
          });
        }
        draw(force) {
          if (!guardCheck(this)) {
            return;
          }
          if (this.#drawAnimationFrame !== void 0) {
            if (!force) {
              return;
            }
            cancelAnimation(this.#drawAnimationFrame);
            this.#drawAnimationFrame = void 0;
          }
          let refreshTime = force;
          this.#drawAnimationFrame = animate((timestamp) => {
            this.#drawAnimationFrame = void 0;
            if (refreshTime) {
              this.#lastFrameTime = void 0;
              refreshTime = false;
            }
            this.#nextFrame(timestamp);
          });
        }
        async export(type, options = {}) {
          for (const plugin of this.plugins) {
            if (!plugin.export) {
              continue;
            }
            const res = await plugin.export(type, options);
            if (!res.supported) {
              continue;
            }
            return res.blob;
          }
          getLogger().error(`Export plugin with type ${type} not found`);
          return void 0;
        }
        async init() {
          if (!guardCheck(this)) {
            return;
          }
          const generation = this.#startGeneration, allContainerPlugins = /* @__PURE__ */ new Map();
          for (const plugin of this.#pluginManager.plugins) {
            const containerPlugin = await plugin.getPlugin(this);
            if (generation !== this.#startGeneration || this.destroyed) {
              return;
            }
            if (containerPlugin.preInit) {
              await containerPlugin.preInit();
              if (generation !== this.#startGeneration) {
                return;
              }
            }
            allContainerPlugins.set(plugin, containerPlugin);
          }
          await this.initDrawersAndUpdaters();
          if (generation !== this.#startGeneration) {
            return;
          }
          this.#options = loadContainerOptions(this.#pluginManager, this, this.#initialSourceOptions, this.sourceOptions);
          this.actualOptions = loadContainerOptions(this.#pluginManager, this, this.#options);
          this.#initPlugins(allContainerPlugins);
          this.retina.init();
          this.canvas.init();
          this.updateActualOptions();
          this.canvas.initBackground();
          this.canvas.resize();
          const { delay, duration, fpsLimit, smooth, zLayers } = this.actualOptions, hdrOptions = this.actualOptions.hdr;
          this.hdrMode = toEnumValue(HdrMode, hdrOptions.mode, HdrMode.standard);
          this.peakNits = hdrOptions.peakNits;
          this.zLayers = zLayers;
          this.#duration = getRangeValue(duration) * millisecondsToSeconds;
          this.#delay = getRangeValue(delay) * millisecondsToSeconds;
          this.#lifeTime = 0;
          this.fpsLimit = fpsLimit > minFpsLimit ? fpsLimit : defaultFpsLimit;
          this.#smooth = smooth;
          for (const plugin of this.plugins) {
            await plugin.init?.();
            if (generation !== this.#startGeneration) {
              return;
            }
          }
          await this.particles.init();
          if (generation !== this.#startGeneration) {
            return;
          }
          this.dispatchEvent(EventType.containerInit);
          this.particles.setDensity();
          for (const plugin of this.plugins) {
            plugin.particlesSetup?.();
          }
          this.dispatchEvent(EventType.particlesSetup);
        }
        async initDrawersAndUpdaters() {
          const pluginManager = this.#pluginManager;
          this.effectDrawers = await getItemMapFromInitializer(this, pluginManager.initializers.effects);
          this.shapeDrawers = await getItemMapFromInitializer(this, pluginManager.initializers.shapes);
          this.particleUpdaters = await getItemsFromInitializer(this, pluginManager.initializers.updaters);
        }
        pause() {
          if (!guardCheck(this)) {
            return;
          }
          if (this.#drawAnimationFrame !== void 0) {
            cancelAnimation(this.#drawAnimationFrame);
            this.#drawAnimationFrame = void 0;
          }
          if (this.#paused) {
            return;
          }
          for (const plugin of this.plugins) {
            plugin.pause?.();
          }
          if (!this.pageHidden) {
            this.#paused = true;
          }
          this.dispatchEvent(EventType.containerPaused);
        }
        play(force) {
          if (!guardCheck(this)) {
            return;
          }
          const needsUpdate = this.#paused || force;
          if (this.#firstStart && !this.actualOptions.autoPlay) {
            this.#firstStart = false;
            return;
          }
          if (this.#paused) {
            this.#paused = false;
          }
          if (needsUpdate) {
            for (const plugin of this.plugins) {
              if (plugin.play) {
                plugin.play();
              }
            }
          }
          this.dispatchEvent(EventType.containerPlay);
          this.draw(needsUpdate ?? false);
        }
        async refresh() {
          if (!guardCheck(this)) {
            return;
          }
          this.stop();
          return this.start();
        }
        async reset(sourceOptions) {
          if (!guardCheck(this)) {
            return;
          }
          this.#initialSourceOptions = sourceOptions;
          this.#sourceOptions = sourceOptions;
          this.#options = loadContainerOptions(this.#pluginManager, this, this.#initialSourceOptions, this.sourceOptions);
          this.actualOptions = loadContainerOptions(this.#pluginManager, this, this.#options);
          return this.refresh();
        }
        async start() {
          if (!guardCheck(this) || this.started) {
            return;
          }
          if (this.#startPromise) {
            return this.#startPromise;
          }
          const generation = ++this.#startGeneration;
          let cancel;
          const cancelled = new Promise((resolve) => {
            cancel = resolve;
          });
          this.#startCancel = cancel;
          this.#startPromise = (async () => {
            try {
              await Promise.race([this.init(), cancelled]);
              if (generation !== this.#startGeneration) {
                return;
              }
              this.started = true;
              await Promise.race([
                new Promise((resolve) => {
                  this.#delayResolve = resolve;
                  this.#delayTimeout = setTimeout(() => {
                    this.#delayTimeout = void 0;
                    this.#delayResolve = void 0;
                    resolve();
                  }, this.#delay);
                }),
                cancelled
              ]);
              if (generation !== this.#startGeneration || this.destroyed) {
                return;
              }
              this.#eventListeners.addListeners();
              const startPlugins = async () => {
                for (const plugin of this.plugins) {
                  if (generation !== this.#startGeneration) {
                    return;
                  }
                  await plugin.start?.();
                }
              };
              await Promise.race([startPlugins(), cancelled]);
              if (generation !== this.#startGeneration) {
                return;
              }
              this.dispatchEvent(EventType.containerStarted);
              this.play();
            } catch (error) {
              if (generation === this.#startGeneration && !this.destroyed) {
                this.stop();
              }
              throw error;
            } finally {
              if (generation === this.#startGeneration) {
                this.#startPromise = void 0;
                this.#startCancel = void 0;
              }
            }
          })();
          return this.#startPromise;
        }
        stop() {
          if (!guardCheck(this)) {
            return;
          }
          this.#startGeneration++;
          this.#startCancel?.();
          this.#startCancel = void 0;
          this.#startPromise = void 0;
          if (!this.started) {
            return;
          }
          if (this.#delayTimeout !== void 0) {
            clearTimeout(this.#delayTimeout);
            this.#delayTimeout = void 0;
            this.#delayResolve?.();
            this.#delayResolve = void 0;
          }
          this.#firstStart = true;
          this.started = false;
          this.#eventListeners.removeListeners();
          this.pause();
          this.particles.clear();
          this.canvas.stop();
          for (const plugin of this.plugins) {
            plugin.stop?.();
          }
          this.#particleCreatedPlugins = emptyPlugins;
          this.#particleDestroyedPlugins = emptyPlugins;
          this.#particlePositionPlugins = emptyPlugins;
          this.#sourceOptions = this.#options;
          this.dispatchEvent(EventType.containerStopped);
        }
        updateActualOptions() {
          let refresh = false;
          for (const plugin of this.plugins) {
            if (plugin.updateActualOptions) {
              refresh = plugin.updateActualOptions() || refresh;
            }
          }
          this.canvas.render.updateBackgroundElement();
          return refresh;
        }
        #initPlugins(allContainerPlugins) {
          const plugins = [], particleCreatedPlugins = [], particleDestroyedPlugins = [], particlePositionPlugins = [];
          for (const [plugin, containerPlugin] of allContainerPlugins) {
            if (!plugin.needsPlugin(this.actualOptions)) {
              continue;
            }
            plugins.push(containerPlugin);
            if (containerPlugin.particleCreated) {
              particleCreatedPlugins.push(containerPlugin);
            }
            if (containerPlugin.particleDestroyed) {
              particleDestroyedPlugins.push(containerPlugin);
            }
            if (containerPlugin.particlePosition) {
              particlePositionPlugins.push(containerPlugin);
            }
          }
          this.#plugins = Object.freeze(plugins);
          this.#particleCreatedPlugins = Object.freeze(particleCreatedPlugins);
          this.#particleDestroyedPlugins = Object.freeze(particleDestroyedPlugins);
          this.#particlePositionPlugins = Object.freeze(particlePositionPlugins);
        }
        #nextFrame(timestamp) {
          try {
            if (!this.#smooth && this.#lastFrameTime !== void 0 && timestamp < this.#lastFrameTime + millisecondsToSeconds / this.fpsLimit) {
              this.draw(false);
              return;
            }
            this.#lastFrameTime ??= timestamp;
            updateDelta(this.#delta, timestamp - this.#lastFrameTime, this.fpsLimit, this.#smooth);
            this.addLifeTime(this.#delta.value);
            this.#lastFrameTime = timestamp;
            if (this.#delta.value > millisecondsToSeconds) {
              this.draw(false);
              return;
            }
            this.canvas.render.drawParticles(this.#delta);
            if (!this.alive()) {
              this.destroy();
              return;
            }
            if (this.animationStatus) {
              this.draw(false);
            }
          } catch (e) {
            getLogger().error("error in animation loop", e);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/Core/Engine.js
  var Engine;
  var init_Engine = __esm({
    "node_modules/@tsparticles/engine/browser/Core/Engine.js"() {
      init_ErrorUtils();
      init_Utils();
      init_Constants();
      init_EventDispatcher();
      init_PluginManager();
      init_MathUtils();
      Engine = class {
        pluginManager = new PluginManager(this);
        #anonymousElementId = 0;
        #anonymousElementIds = /* @__PURE__ */ new WeakMap();
        #domArray = [];
        #eventDispatcher = new EventDispatcher();
        #initialized = false;
        #loadSequence = 0;
        #loadSequences = /* @__PURE__ */ new Map();
        get items() {
          return this.#domArray;
        }
        get version() {
          return "4.6.0";
        }
        addEventListener(type, listener) {
          this.#eventDispatcher.addEventListener(type, listener);
        }
        checkVersion(pluginVersion) {
          if (this.version === pluginVersion) {
            return;
          }
          throw new Error(getErrorMessage(ErrorCodes.engineVersionMismatch, this.version, pluginVersion));
        }
        dispatchEvent(type, args) {
          this.#eventDispatcher.dispatchEvent(type, args);
        }
        async init() {
          if (this.#initialized) {
            return;
          }
          await this.pluginManager.init();
          this.#initialized = true;
        }
        item(index) {
          const items = this.items, item = items[index];
          if (item?.destroyed) {
            items.splice(index, removeDeleteCount);
            return;
          }
          return item;
        }
        async load(params) {
          let domSourceElement;
          if (typeof HTMLElement !== "undefined" && params.element instanceof HTMLElement) {
            domSourceElement = params.element;
          }
          const id = params.id ?? (domSourceElement ? this.#getElementId(domSourceElement) : void 0) ?? `tsparticles${Math.floor(getRandom() * loadRandomFactor).toString()}`, loadSequence = ++this.#loadSequence;
          this.#loadSequences.set(id, loadSequence);
          try {
            await this.init();
            const { Container: Container2 } = await Promise.resolve().then(() => (init_Container(), Container_exports)), { index, url } = params, options = url ? await getDataFromUrl({ fallback: params.options, url, index }) : params.options;
            if (this.#loadSequences.get(id) !== loadSequence) {
              return void 0;
            }
            const currentOptions = itemFromSingleOrMultiple(options, index), { items } = this, oldIndex = items.findIndex((v) => v.id.description === id), newItem = new Container2({
              dispatchCallback: (eventType, args) => {
                this.dispatchEvent(eventType, args);
              },
              id,
              onDestroy: (remove) => {
                if (!remove) {
                  return;
                }
                const mainArr = this.items, idx = mainArr.indexOf(newItem);
                if (idx >= removeMinIndex) {
                  mainArr.splice(idx, removeDeleteCount);
                }
              },
              pluginManager: this.pluginManager,
              sourceOptions: currentOptions
            });
            if (oldIndex >= loadMinIndex) {
              const old = this.item(oldIndex), deleteCount2 = old ? one : none;
              if (old && !old.destroyed) {
                old.destroy(false);
              }
              items.splice(oldIndex, deleteCount2, newItem);
            } else {
              items.push(newItem);
            }
            const sourceCanvas = typeof OffscreenCanvas !== "undefined" && params.element instanceof OffscreenCanvas ? params.element : getCanvasFromContainer(getDomContainer(id, domSourceElement));
            newItem.canvas.loadCanvas(sourceCanvas);
            try {
              await newItem.start();
            } catch (error) {
              newItem.destroy(false);
              const failedIndex = items.indexOf(newItem);
              if (failedIndex >= loadMinIndex) {
                items.splice(failedIndex, removeDeleteCount);
              }
              throw error;
            }
            if (newItem.destroyed) {
              return void 0;
            }
            return newItem;
          } finally {
            if (this.#loadSequences.get(id) === loadSequence) {
              this.#loadSequences.delete(id);
            }
          }
        }
        async refresh(refresh = true) {
          if (!refresh) {
            return;
          }
          await Promise.all(this.items.map((t) => t.refresh()));
        }
        removeEventListener(type, listener) {
          this.#eventDispatcher.removeEventListener(type, listener);
        }
        #getAnonymousElementId(element) {
          let id = this.#anonymousElementIds.get(element);
          if (!id) {
            id = `tsparticles${Math.floor(getRandom() * loadRandomFactor).toString()}_${this.#anonymousElementId++}`;
            this.#anonymousElementIds.set(element, id);
          }
          return id;
        }
        #getElementId(element) {
          return element.id.length ? element.id : this.#getAnonymousElementId(element);
        }
      };
    }
  });

  // node_modules/@tsparticles/engine/browser/initEngine.js
  function initEngine() {
    const existing = globalThis.tsParticles;
    if (existing?.pluginManager) {
      return existing;
    }
    return new Engine();
  }
  var init_initEngine = __esm({
    "node_modules/@tsparticles/engine/browser/initEngine.js"() {
      init_Engine();
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js
  var RotateDirection;
  var init_RotateDirection = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Directions/RotateDirection.js"() {
      (function(RotateDirection2) {
        RotateDirection2["clockwise"] = "clockwise";
        RotateDirection2["counterClockwise"] = "counter-clockwise";
        RotateDirection2["random"] = "random";
      })(RotateDirection || (RotateDirection = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js
  var DestroyType;
  var init_DestroyType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/DestroyType.js"() {
      (function(DestroyType2) {
        DestroyType2["none"] = "none";
        DestroyType2["max"] = "max";
        DestroyType2["min"] = "min";
      })(DestroyType || (DestroyType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js
  var GradientType;
  var init_GradientType = __esm({
    "node_modules/@tsparticles/engine/browser/Enums/Types/GradientType.js"() {
      (function(GradientType2) {
        GradientType2["linear"] = "linear";
        GradientType2["radial"] = "radial";
        GradientType2["random"] = "random";
      })(GradientType || (GradientType = {}));
    }
  });

  // node_modules/@tsparticles/engine/browser/exports.js
  var init_exports = __esm({
    "node_modules/@tsparticles/engine/browser/exports.js"() {
      init_Constants();
      init_Ranges();
      init_Vectors();
      init_MoveDirection();
      init_RotateDirection();
      init_OutModeDirection();
      init_AnimationMode();
      init_HdrMode();
      init_LimitMode();
      init_OutMode();
      init_PixelMode();
      init_AlterType();
      init_DestroyType();
      init_GradientType();
      init_ParticleOutType();
      init_StartValueType();
      init_EventType();
      init_AnimationStatus();
      init_DrawLayer();
      init_AnimatableColor();
      init_AnimationOptions();
      init_Background();
      init_ColorAnimation();
      init_FullScreen();
      init_HDROptions();
      init_HslAnimation();
      init_Options();
      init_OptionsColor();
      init_ParticlesBounce();
      init_ParticlesBounceFactor();
      init_ParticlesOptions();
      init_Fill();
      init_Paint();
      init_Stroke();
      init_Move();
      init_MoveAngle();
      init_MoveCenter();
      init_MoveGravity();
      init_OutModes();
      init_MovePath();
      init_Spin();
      init_ParticlesNumber();
      init_ParticlesNumberLimit();
      init_ParticlesDensity();
      init_Shape();
      init_ZIndex();
      init_ResizeEvent();
      init_ValueWithRandom();
      init_ColorUtils();
      init_ErrorCodes();
      init_ErrorUtils();
      init_LogUtils();
      init_MathUtils();
      init_OptionLoader();
      init_ParticlesOptionsLoader();
      init_OptionsUtils();
      init_Utils();
      init_TypeUtils();
    }
  });

  // node_modules/@tsparticles/engine/browser/index.js
  var tsParticles;
  var init_browser = __esm({
    "node_modules/@tsparticles/engine/browser/index.js"() {
      init_initEngine();
      init_exports();
      tsParticles = initEngine();
    }
  });

  // node_modules/@tsparticles/engine/browser/browser.js
  var globalObject;
  var init_browser2 = __esm({
    "node_modules/@tsparticles/engine/browser/browser.js"() {
      init_LogUtils();
      init_MathUtils();
      init_browser();
      init_browser();
      globalObject = globalThis;
      globalObject.__tsParticlesInternals = globalObject.__tsParticlesInternals ?? {};
      globalObject.tsParticles = tsParticles;
      globalObject.getParticlesLogger = getLogger;
      globalObject.setParticlesLogger = setLogger;
      globalObject.getParticlesRandom = getRandom;
      globalObject.getParticlesRandomFn = getRandomFn;
      globalObject.setParticlesRandom = setRandom;
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/ClickEvent.js
  var ClickEvent;
  var init_ClickEvent = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/ClickEvent.js"() {
      init_browser2();
      ClickEvent = class {
        enable = false;
        mode = [];
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "mode", data.mode);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Enums/DivType.js
  var DivType;
  var init_DivType = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Enums/DivType.js"() {
      (function(DivType2) {
        DivType2["circle"] = "circle";
        DivType2["rectangle"] = "rectangle";
      })(DivType || (DivType = {}));
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/DivEvent.js
  var DivEvent;
  var init_DivEvent = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/DivEvent.js"() {
      init_browser2();
      init_DivType();
      DivEvent = class {
        enable = false;
        mode = [];
        selectors = [];
        type = DivType.circle;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "selectors", data.selectors);
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "type", data.type);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/HoverEvent.js
  var HoverEvent;
  var init_HoverEvent = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/HoverEvent.js"() {
      init_browser2();
      HoverEvent = class {
        enable = false;
        mode = [];
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "enable", data.enable);
          loadProperty(this, "mode", data.mode);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/Events.js
  var Events;
  var init_Events = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Events/Events.js"() {
      init_browser2();
      init_ClickEvent();
      init_DivEvent();
      init_HoverEvent();
      Events = class {
        onClick = new ClickEvent();
        onDiv = new DivEvent();
        onHover = new HoverEvent();
        load(data) {
          if (isNull(data)) {
            return;
          }
          this.onClick.load(data.onClick);
          const onDiv = data.onDiv;
          if (onDiv !== void 0) {
            this.onDiv = executeOnSingleOrMultiple(onDiv, (t) => {
              const tmp = new DivEvent();
              tmp.load(t);
              return tmp;
            });
          }
          this.onHover.load(data.onHover);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Enums/InteractivityDetect.js
  var InteractivityDetect;
  var init_InteractivityDetect = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Enums/InteractivityDetect.js"() {
      (function(InteractivityDetect2) {
        InteractivityDetect2["canvas"] = "canvas";
        InteractivityDetect2["parent"] = "parent";
        InteractivityDetect2["window"] = "window";
      })(InteractivityDetect || (InteractivityDetect = {}));
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Modes/Modes.js
  var Modes;
  var init_Modes = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Modes/Modes.js"() {
      init_browser2();
      Modes = class {
        #container;
        constructor(container) {
          this.#container = container;
        }
        load(data) {
          if (isNull(data)) {
            return;
          }
          if (!this.#container) {
            return;
          }
          const interactors = this.#container.interactionManager?.interactors ?? [];
          for (const interactor of interactors) {
            if (!interactor.loadModeOptions) {
              continue;
            }
            interactor.loadModeOptions(this, data);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Interactivity.js
  var Interactivity;
  var init_Interactivity = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Options/Classes/Interactivity.js"() {
      init_browser2();
      init_Events();
      init_InteractivityDetect();
      init_Modes();
      Interactivity = class {
        detectsOn = InteractivityDetect.window;
        events = new Events();
        modes;
        constructor(container) {
          this.modes = new Modes(container);
        }
        load(data) {
          if (isNull(data)) {
            return;
          }
          const detectsOn = data.detectsOn;
          if (detectsOn !== void 0) {
            this.detectsOn = detectsOn;
          }
          this.events.load(data.events);
          this.modes.load(data.modes);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/InteractivityConstants.js
  var clickEvent, mouseDownEvent, mouseUpEvent, mouseLeaveEvent, mouseMoveEvent, touchStartEvent, touchEndEvent, touchMoveEvent, touchCancelEvent;
  var init_InteractivityConstants = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/InteractivityConstants.js"() {
      clickEvent = "click";
      mouseDownEvent = "pointerdown";
      mouseUpEvent = "pointerup";
      mouseLeaveEvent = "pointerleave";
      mouseMoveEvent = "pointermove";
      touchStartEvent = "touchstart";
      touchEndEvent = "touchend";
      touchMoveEvent = "touchmove";
      touchCancelEvent = "touchcancel";
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/InteractivityEventListeners.js
  var touchDelay, InteractivityEventListeners;
  var init_InteractivityEventListeners = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/InteractivityEventListeners.js"() {
      init_browser2();
      init_InteractivityConstants();
      init_InteractivityDetect();
      touchDelay = 500;
      InteractivityEventListeners = class {
        #canPush = true;
        #clickPositionPlugins;
        #container;
        #handlers;
        #interactionManager;
        #touches;
        constructor(container, interactionManager) {
          this.#container = container;
          this.#clickPositionPlugins = [];
          this.#interactionManager = interactionManager;
          this.#touches = /* @__PURE__ */ new Map();
          this.#handlers = {
            mouseDown: () => {
              this.#mouseDown();
            },
            mouseLeave: () => {
              this.#mouseTouchFinish();
            },
            mouseMove: (e) => {
              this.#mouseTouchMove(e);
            },
            mouseUp: (e) => {
              this.#mouseTouchClick(e);
            },
            touchStart: (e) => {
              this.#touchStart(e);
            },
            touchMove: (e) => {
              this.#mouseTouchMove(e);
            },
            touchEnd: (e) => {
              this.#touchEnd(e);
            },
            touchCancel: (e) => {
              this.#touchEnd(e);
            },
            touchEndClick: (e) => {
              this.#touchEndClick(e);
            },
            visibilityChange: () => {
              this.#handleVisibilityChange();
            }
          };
        }
        addListeners() {
          this.#manageListeners(true);
        }
        init() {
          this.#clickPositionPlugins.length = 0;
          for (const plugin of this.#container.plugins.filter((p) => !!p.clickPositionValid)) {
            this.#clickPositionPlugins.push(plugin);
          }
        }
        removeListeners() {
          this.#manageListeners(false);
        }
        #doMouseTouchClick(e) {
          const container = this.#container, interactionManager = this.#interactionManager, options = container.actualOptions;
          if (this.#canPush) {
            const mouseInteractivity = interactionManager.interactivityData.mouse, mousePos = mouseInteractivity.position;
            if (!mousePos) {
              return;
            }
            mouseInteractivity.clickPosition = { ...mousePos };
            mouseInteractivity.clickTime = performance.now();
            const onClick = options.interactivity?.events.onClick;
            if (!onClick?.mode) {
              return;
            }
            executeOnSingleOrMultiple(onClick.mode, (mode) => {
              interactionManager.handleClickMode(mode);
            });
          }
          if (e.type === "touchend") {
            setTimeout(() => {
              this.#mouseTouchFinish();
            }, touchDelay);
          }
        }
        #handleVisibilityChange() {
          this.#mouseTouchFinish();
        }
        #manageInteractivityListeners(add) {
          const handlers = this.#handlers, container = this.#container, interactionManager = this.#interactionManager, options = container.actualOptions, interactivityEl = interactionManager.interactivityData.element;
          if (!interactivityEl) {
            return;
          }
          const html = interactivityEl, canvas = container.canvas;
          canvas.setPointerEvents(html === canvas.domElement ? "initial" : "none");
          manageListener(interactivityEl, mouseMoveEvent, handlers.mouseMove, add);
          manageListener(interactivityEl, touchStartEvent, handlers.touchStart, add);
          manageListener(interactivityEl, touchMoveEvent, handlers.touchMove, add);
          const onClickEnabled = !!options.interactivity?.events.onClick.enable;
          manageListener(interactivityEl, touchEndEvent, handlers.touchEndClick, add && onClickEnabled);
          manageListener(interactivityEl, touchEndEvent, handlers.touchEnd, add && !onClickEnabled);
          manageListener(interactivityEl, mouseUpEvent, handlers.mouseUp, add);
          manageListener(interactivityEl, mouseDownEvent, handlers.mouseDown, add);
          manageListener(interactivityEl, mouseLeaveEvent, handlers.mouseLeave, add);
          manageListener(interactivityEl, touchCancelEvent, handlers.touchCancel, add);
        }
        #manageListeners(add) {
          const handlers = this.#handlers, container = this.#container, interactionManager = this.#interactionManager, options = container.actualOptions, detectType = options.interactivity?.detectsOn, canvasEl = container.canvas.domElement;
          if (detectType === InteractivityDetect.window) {
            interactionManager.interactivityData.element = safeDocument();
          } else if (detectType === InteractivityDetect.parent && canvasEl) {
            interactionManager.interactivityData.element = canvasEl.parentElement ?? canvasEl.parentNode;
          } else {
            interactionManager.interactivityData.element = canvasEl;
          }
          this.#manageInteractivityListeners(add);
          manageListener(document, visibilityChangeEvent, handlers.visibilityChange, add, false);
        }
        #mouseDown() {
          const { interactivityData } = this.#interactionManager, { mouse } = interactivityData;
          mouse.clicking = true;
          mouse.downPosition = mouse.position;
        }
        #mouseTouchClick(e) {
          const container = this.#container, interactionManager = this.#interactionManager, options = container.actualOptions, { mouse } = interactionManager.interactivityData;
          mouse.inside = true;
          const mousePosition = mouse.position;
          if (mousePosition && options.interactivity?.events.onClick.enable) {
            let handled = false;
            for (const plugin of this.#clickPositionPlugins) {
              handled = plugin.clickPositionValid?.(mousePosition) ?? false;
              if (handled) {
                break;
              }
            }
            if (!handled) {
              this.#doMouseTouchClick(e);
            }
          }
          mouse.clicking = false;
        }
        #mouseTouchFinish() {
          const { interactivityData } = this.#interactionManager, { mouse } = interactivityData;
          delete mouse.position;
          delete mouse.clickPosition;
          delete mouse.downPosition;
          interactivityData.status = mouseLeaveEvent;
          mouse.inside = false;
          mouse.clicking = false;
        }
        #mouseTouchMove(e) {
          const container = this.#container, interactionManager = this.#interactionManager, options = container.actualOptions, interactivity = interactionManager.interactivityData, canvasEl = container.canvas.domElement;
          if (!interactivity.element) {
            return;
          }
          interactivity.mouse.inside = true;
          let pos;
          if (e.type.startsWith("pointer")) {
            this.#canPush = true;
            const mouseEvent = e;
            if (interactivity.element === safeDocument()) {
              if (canvasEl) {
                const clientRect = canvasEl.getBoundingClientRect();
                pos = {
                  x: mouseEvent.clientX - clientRect.left,
                  y: mouseEvent.clientY - clientRect.top
                };
              }
            } else if (options.interactivity?.detectsOn === InteractivityDetect.parent) {
              const source = mouseEvent.target, target = mouseEvent.currentTarget;
              if (canvasEl) {
                const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                pos = {
                  x: mouseEvent.offsetX + double * sourceRect.left - (targetRect.left + canvasRect.left),
                  y: mouseEvent.offsetY + double * sourceRect.top - (targetRect.top + canvasRect.top)
                };
              } else {
                pos = {
                  x: mouseEvent.offsetX,
                  y: mouseEvent.offsetY
                };
              }
            } else if (mouseEvent.target === canvasEl) {
              pos = {
                x: mouseEvent.offsetX,
                y: mouseEvent.offsetY
              };
            }
          } else {
            this.#canPush = e.type !== "touchmove";
            if (canvasEl) {
              const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset], canvasRect = canvasEl.getBoundingClientRect();
              if (!lastTouch) {
                return;
              }
              pos = {
                x: lastTouch.clientX - canvasRect.left,
                y: lastTouch.clientY - canvasRect.top
              };
            }
          }
          const pxRatio = container.retina.pixelRatio;
          if (pos) {
            pos.x *= pxRatio;
            pos.y *= pxRatio;
          }
          interactivity.mouse.position = pos;
          interactivity.status = mouseMoveEvent;
        }
        #touchEnd(e) {
          const evt = e, touches = Array.from(evt.changedTouches);
          for (const touch of touches) {
            this.#touches.delete(touch.identifier);
          }
          this.#mouseTouchFinish();
        }
        #touchEndClick(e) {
          const evt = e, touches = Array.from(evt.changedTouches);
          for (const touch of touches) {
            this.#touches.delete(touch.identifier);
          }
          this.#mouseTouchClick(e);
        }
        #touchStart(e) {
          const evt = e, touches = Array.from(evt.changedTouches);
          for (const touch of touches) {
            this.#touches.set(touch.identifier, performance.now());
          }
          this.#mouseTouchMove(e);
          const { mouse } = this.#interactionManager.interactivityData;
          mouse.clicking = true;
          mouse.downPosition = mouse.position;
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/Enums/InteractorType.js
  var InteractorType;
  var init_InteractorType = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/Enums/InteractorType.js"() {
      (function(InteractorType2) {
        InteractorType2["external"] = "external";
        InteractorType2["particles"] = "particles";
      })(InteractorType || (InteractorType = {}));
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/InteractionManager.js
  function safeIntersectionObserver(callback) {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
    return new IntersectionObserver(callback);
  }
  var clickRadius, touchEndLengthOffset, minCoordinate, InteractionManager;
  var init_InteractionManager = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/InteractionManager.js"() {
      init_browser2();
      init_InteractivityConstants();
      init_InteractivityEventListeners();
      init_InteractorType();
      clickRadius = 1;
      touchEndLengthOffset = 1;
      minCoordinate = 0;
      InteractionManager = class {
        interactivityData;
        interactors;
        #clickHandlers;
        #container;
        #eventListeners;
        #externalInteractors;
        #intersectionObserver;
        #particleInteractors;
        #pluginManager;
        constructor(pluginManager, container) {
          this.#container = container;
          this.#pluginManager = pluginManager;
          this.interactors = [];
          this.#externalInteractors = [];
          this.#particleInteractors = [];
          this.#clickHandlers = /* @__PURE__ */ new Map();
          this.#eventListeners = new InteractivityEventListeners(container, this);
          this.interactivityData = {
            mouse: {
              clicking: false,
              inside: false
            }
          };
          this.#intersectionObserver = safeIntersectionObserver((entries) => {
            this.#intersectionManager(entries);
          });
        }
        addClickHandler(callback) {
          const container = this.#container, interactivityData = this.interactivityData;
          if (container.destroyed) {
            return;
          }
          const el = interactivityData.element;
          if (!el) {
            return;
          }
          const clickOrTouchHandler = (e, pos, radius) => {
            if (container.destroyed) {
              return;
            }
            const pxRatio = container.retina.pixelRatio, posRetina = {
              x: pos.x * pxRatio,
              y: pos.y * pxRatio
            }, particles = container.particles.grid.queryCircle(posRetina, radius * pxRatio);
            callback(e, particles);
          }, clickHandler = (e) => {
            if (container.destroyed) {
              return;
            }
            const mouseEvent = e, pos = {
              x: mouseEvent.offsetX,
              y: mouseEvent.offsetY
            };
            clickOrTouchHandler(e, pos, clickRadius);
          }, touchStartHandler = () => {
            if (container.destroyed) {
              return;
            }
            touched = true;
            touchMoved = false;
          }, touchMoveHandler = () => {
            if (container.destroyed) {
              return;
            }
            touchMoved = true;
          }, touchEndHandler = (e) => {
            if (container.destroyed) {
              return;
            }
            if (touched && !touchMoved) {
              const touchEvent = e, lastTouch = touchEvent.touches[touchEvent.touches.length - touchEndLengthOffset];
              if (!lastTouch) {
                return;
              }
              const element = container.canvas.domElement, canvasRect = element ? element.getBoundingClientRect() : void 0, pos = {
                x: lastTouch.clientX - (canvasRect ? canvasRect.left : minCoordinate),
                y: lastTouch.clientY - (canvasRect ? canvasRect.top : minCoordinate)
              };
              clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
            }
            touched = false;
            touchMoved = false;
          }, touchCancelHandler = () => {
            if (container.destroyed) {
              return;
            }
            touched = false;
            touchMoved = false;
          };
          let touched = false, touchMoved = false;
          this.#clickHandlers.set(clickEvent, clickHandler);
          this.#clickHandlers.set(touchStartEvent, touchStartHandler);
          this.#clickHandlers.set(touchMoveEvent, touchMoveHandler);
          this.#clickHandlers.set(touchEndEvent, touchEndHandler);
          this.#clickHandlers.set(touchCancelEvent, touchCancelHandler);
          for (const [key, handler] of this.#clickHandlers) {
            el.addEventListener(key, handler);
          }
        }
        addListeners() {
          this.#eventListeners.addListeners();
        }
        clearClickHandlers() {
          const container = this.#container, interactivityData = this.interactivityData;
          if (container.destroyed) {
            return;
          }
          for (const [key, handler] of this.#clickHandlers) {
            interactivityData.element?.removeEventListener(key, handler);
          }
          this.#clickHandlers.clear();
        }
        externalInteract(delta) {
          for (const interactor of this.#externalInteractors) {
            const interactivityData = this.interactivityData;
            if (interactor.isEnabled(interactivityData)) {
              interactor.interact(interactivityData, delta);
            }
          }
        }
        handleClickMode(mode) {
          if (this.#container.destroyed) {
            return;
          }
          const interactivityData = this.interactivityData;
          for (const interactor of this.#externalInteractors) {
            interactor.handleClickMode?.(mode, interactivityData);
          }
        }
        init() {
          this.#eventListeners.init();
          for (const interactor of this.interactors) {
            switch (interactor.type) {
              case InteractorType.external:
                this.#externalInteractors.push(interactor);
                break;
              case InteractorType.particles:
                this.#particleInteractors.push(interactor);
                break;
            }
            interactor.init();
          }
        }
        async initInteractors() {
          const pluginManager = this.#pluginManager;
          if (!pluginManager.initializers.interactors) {
            return;
          }
          this.interactors = await getItemsFromInitializer(this.#container, pluginManager.initializers.interactors);
          this.#externalInteractors = [];
          this.#particleInteractors = [];
        }
        particlesInteract(particle, delta) {
          const interactivityData = this.interactivityData;
          for (const interactor of this.#externalInteractors) {
            interactor.clear(particle, delta);
          }
          for (const interactor of this.#particleInteractors) {
            if (interactor.isEnabled(particle, interactivityData)) {
              interactor.interact(particle, interactivityData, delta);
            }
          }
        }
        removeListeners() {
          this.#eventListeners.removeListeners();
        }
        reset(particle) {
          const interactivityData = this.interactivityData;
          for (const interactor of this.#externalInteractors) {
            if (interactor.isEnabled(interactivityData)) {
              interactor.reset(interactivityData, particle);
            }
          }
          for (const interactor of this.#particleInteractors) {
            if (interactor.isEnabled(particle, interactivityData)) {
              interactor.reset(interactivityData, particle);
            }
          }
        }
        startObserving() {
          const interactivityData = this.interactivityData;
          if (interactivityData.element instanceof HTMLElement && this.#intersectionObserver) {
            this.#intersectionObserver.observe(interactivityData.element);
          }
        }
        stopObserving() {
          const interactivityData = this.interactivityData;
          if (interactivityData.element instanceof HTMLElement && this.#intersectionObserver) {
            this.#intersectionObserver.unobserve(interactivityData.element);
          }
        }
        updateMaxDistance() {
          let maxTotalDistance = 0;
          for (const interactor of this.interactors) {
            if (interactor.maxDistance > maxTotalDistance) {
              maxTotalDistance = interactor.maxDistance;
            }
          }
          const container = this.#container;
          container.particles.grid.cellSize = maxTotalDistance * container.retina.pixelRatio;
        }
        #intersectionManager(entries) {
          const container = this.#container;
          if (container.destroyed || !container.actualOptions.pauseOnOutsideViewport) {
            return;
          }
          for (const entry of entries) {
            if (entry.target !== this.interactivityData.element) {
              continue;
            }
            if (entry.isIntersecting) {
              container.play();
            } else {
              container.pause();
            }
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-interactivity/browser/InteractivityPluginInstance.js
  var InteractivityPluginInstance_exports = {};
  __export(InteractivityPluginInstance_exports, {
    InteractivityPluginInstance: () => InteractivityPluginInstance
  });
  var InteractivityPluginInstance;
  var init_InteractivityPluginInstance = __esm({
    "node_modules/@tsparticles/plugin-interactivity/browser/InteractivityPluginInstance.js"() {
      init_InteractionManager();
      init_Interactivity();
      InteractivityPluginInstance = class {
        #container;
        constructor(pluginManager, container) {
          container.addClickHandler = (callback) => {
            container.interactionManager?.addClickHandler(callback);
          };
          container.interactionManager = new InteractionManager(pluginManager, container);
          this.#container = container;
        }
        addClickHandler(callback) {
          this.#container.interactionManager?.addClickHandler(callback);
        }
        clearClickHandlers() {
          this.#container.interactionManager?.clearClickHandlers();
        }
        destroy() {
          this.clearClickHandlers();
        }
        particleCreated(particle) {
          const interactivityParticle = particle, container = this.#container, interactivity = new Interactivity(container);
          interactivity.load(container.actualOptions.interactivity);
          interactivity.load(interactivityParticle.options.interactivity);
          interactivityParticle.interactivity = interactivity;
        }
        particleReset(particle) {
          this.#container.interactionManager?.reset(particle);
        }
        postParticleUpdate(particle, delta) {
          this.#container.interactionManager?.particlesInteract(particle, delta);
        }
        postUpdate(delta) {
          const container = this.#container;
          container.interactionManager?.externalInteract(delta);
          container.interactionManager?.updateMaxDistance();
        }
        async preInit() {
          const container = this.#container;
          await container.interactionManager?.initInteractors();
          container.interactionManager?.init();
        }
        async redrawInit() {
          const container = this.#container;
          await container.interactionManager?.initInteractors();
          container.interactionManager?.init();
        }
        start() {
          const container = this.#container;
          container.interactionManager?.addListeners();
          container.interactionManager?.startObserving();
          return Promise.resolve();
        }
        stop() {
          this.#container.interactionManager?.removeListeners();
          this.#container.interactionManager?.stopObserving();
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberLife.js
  var AbsorberLife;
  var init_AbsorberLife = __esm({
    "node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberLife.js"() {
      init_browser2();
      AbsorberLife = class {
        count;
        delay;
        duration;
        wait = false;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "count", data.count);
          loadRangeProperty(this, "delay", data.delay);
          loadRangeProperty(this, "duration", data.duration);
          loadProperty(this, "wait", data.wait);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberSizeLimit.js
  var AbsorberSizeLimit;
  var init_AbsorberSizeLimit = __esm({
    "node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberSizeLimit.js"() {
      init_browser2();
      AbsorberSizeLimit = class {
        mass = 0;
        radius = 0;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "mass", data.mass);
          loadProperty(this, "radius", data.radius);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberSize.js
  var AbsorberSize;
  var init_AbsorberSize = __esm({
    "node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberSize.js"() {
      init_browser2();
      init_AbsorberSizeLimit();
      AbsorberSize = class extends ValueWithRandom {
        density = 5;
        limit = new AbsorberSizeLimit();
        value = 50;
        load(data) {
          if (isNull(data)) {
            return;
          }
          super.load(data);
          loadProperty(this, "density", data.density);
          if (isNumber(data.limit)) {
            this.limit.radius = data.limit;
          } else {
            this.limit.load(data.limit);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberSplit.js
  var defaultQuantity, minQuantity, maxQuantity, AbsorberSplit;
  var init_AbsorberSplit = __esm({
    "node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/AbsorberSplit.js"() {
      init_browser2();
      defaultQuantity = 4;
      minQuantity = 0;
      maxQuantity = 1e3;
      AbsorberSplit = class {
        enable = false;
        quantity = defaultQuantity;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "enable", data.enable);
          const quantity = data.quantity;
          if (isNumber(quantity) && Number.isFinite(quantity)) {
            this.quantity = Math.min(Math.max(Math.trunc(quantity), minQuantity), maxQuantity);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/Absorber.js
  var Absorber;
  var init_Absorber = __esm({
    "node_modules/@tsparticles/plugin-absorbers/browser/Options/Classes/Absorber.js"() {
      init_browser2();
      init_AbsorberLife();
      init_AbsorberSize();
      init_AbsorberSplit();
      Absorber = class {
        color;
        destroy;
        draggable;
        life;
        name;
        opacity;
        orbits;
        position;
        size;
        split;
        constructor() {
          this.color = new OptionsColor();
          this.color.value = "#000000";
          this.draggable = false;
          this.opacity = 1;
          this.destroy = true;
          this.orbits = false;
          this.life = new AbsorberLife();
          this.size = new AbsorberSize();
          this.split = new AbsorberSplit();
        }
        load(data) {
          if (isNull(data)) {
            return;
          }
          if (data.color !== void 0) {
            this.color = OptionsColor.create(this.color, data.color);
          }
          loadProperty(this, "draggable", data.draggable);
          if (data.life !== void 0) {
            this.life.load(data.life);
          }
          this.name = data.name;
          loadProperty(this, "opacity", data.opacity);
          if (data.position !== void 0) {
            this.position = {};
            if (data.position.x !== void 0) {
              this.position.x = setRangeValue(data.position.x);
            }
            if (data.position.y !== void 0) {
              this.position.y = setRangeValue(data.position.y);
            }
          }
          if (data.size !== void 0) {
            this.size.load(data.size);
          }
          if (data.split !== void 0) {
            this.split.load(data.split);
          }
          loadProperty(this, "destroy", data.destroy);
          loadProperty(this, "orbits", data.orbits);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-absorbers/browser/AbsorberInstance.js
  var AbsorberInstance_exports = {};
  __export(AbsorberInstance_exports, {
    AbsorberInstance: () => AbsorberInstance
  });
  var absorbFactor, minOrbitLength, minMass, minAngle, maxAngle, defaultLifeDelay, minLifeCount, defaultSpawnDelay, defaultLifeCount, maxAttractForce, AbsorberInstance;
  var init_AbsorberInstance = __esm({
    "node_modules/@tsparticles/plugin-absorbers/browser/AbsorberInstance.js"() {
      init_browser2();
      init_Absorber();
      absorbFactor = 0.033;
      minOrbitLength = 0;
      minMass = 0;
      minAngle = 0;
      maxAngle = doublePI;
      defaultLifeDelay = 0;
      minLifeCount = 0;
      defaultSpawnDelay = 0;
      defaultLifeCount = -1;
      maxAttractForce = 100;
      AbsorberInstance = class {
        color;
        limit;
        mass;
        name;
        opacity;
        options;
        orbits;
        position;
        size;
        #container;
        #currentDuration;
        #currentSpawnDelay;
        #duration;
        #firstSpawn;
        #immortal;
        #initialMass;
        #initialPosition;
        #initialSize;
        #lifeCount;
        #pluginManager;
        #spawnDelay;
        constructor(pluginManager, container, options, position) {
          this.#container = container;
          this.#pluginManager = pluginManager;
          this.#currentDuration = 0;
          this.#currentSpawnDelay = 0;
          this.#initialPosition = position ? Vector.create(position.x, position.y) : void 0;
          if (options instanceof Absorber) {
            this.options = options;
          } else {
            this.options = new Absorber();
            this.options.load(options);
          }
          this.name = this.options.name;
          this.opacity = this.options.opacity;
          this.orbits = this.options.orbits;
          this.size = getRangeValue(this.options.size.value) * container.retina.pixelRatio;
          this.mass = this.size * this.options.size.density * container.retina.reduceFactor;
          this.#initialSize = this.size;
          this.#initialMass = this.mass;
          const limit = this.options.size.limit;
          this.limit = {
            radius: limit.radius * container.retina.pixelRatio * container.retina.reduceFactor,
            mass: limit.mass
          };
          this.color = rangeColorToRgb(this.#pluginManager, this.options.color) ?? {
            b: 0,
            g: 0,
            r: 0
          };
          this.position = this.#initialPosition?.copy() ?? this.#calcPosition();
          this.#firstSpawn = !this.options.life.wait;
          this.#lifeCount = this.options.life.count ?? defaultLifeCount;
          this.#immortal = this.#lifeCount <= minLifeCount;
          this.#spawnDelay = container.retina.reduceFactor ? getRangeValue(this.options.life.delay ?? defaultLifeDelay) * millisecondsToSeconds / container.retina.reduceFactor : Infinity;
        }
        attract(particle, delta) {
          const container = this.#container, options = this.options, pos = particle.getPosition(), particleRadius = particle.getRadius(), distanceSq = getDistanceSq(this.position, pos), contactRadius = this.size + particleRadius;
          if (contactRadius > 0 && distanceSq < contactRadius * contactRadius) {
            const sizeFactor = particleRadius * absorbFactor * container.retina.pixelRatio * delta.factor, innerRadius = this.size - particleRadius;
            if (innerRadius > 0 && distanceSq < innerRadius * innerRadius || particle.absorberOrbit !== void 0 && particle.absorberOrbit.length < minOrbitLength) {
              if (options.destroy) {
                particle.destroy();
              } else {
                particle.needsNewPosition = true;
              }
            } else if (options.destroy) {
              particle.size.value -= sizeFactor;
            }
            if (this.limit.radius <= minRadius || this.size < this.limit.radius) {
              this.size += sizeFactor;
            }
            if (this.limit.mass <= minMass || this.mass < this.limit.mass) {
              this.mass += sizeFactor * this.options.size.density * container.retina.reduceFactor;
            }
          }
        }
        draw(context) {
          context.translate(this.position.x, this.position.y);
          context.beginPath();
          context.arc(originPoint.x, originPoint.y, this.size, minAngle, maxAngle, false);
          context.closePath();
          context.fillStyle = getStyleFromRgb(this.color, this.#container.hdr, this.opacity, this.#container.peakNits, this.#container.hdrMode);
          context.fill();
        }
        getAttraction(point) {
          const effectiveDistanceSq = Math.max(getDistanceSq(this.position, point), this.size * this.size, minRadius * minRadius);
          return Math.min(this.mass / effectiveDistanceSq * this.#container.retina.reduceFactor, maxAttractForce);
        }
        getForce(point) {
          const force = Vector.create(this.position.x - point.x, this.position.y - point.y);
          force.length = this.getAttraction(point);
          return force;
        }
        resize() {
          const initialPosition = this.#initialPosition;
          this.position = initialPosition && isPointInside(initialPosition, this.#container.canvas.size, Vector.origin) ? initialPosition : this.#calcPosition();
        }
        shouldSplit() {
          if (!this.options.split.enable) {
            return false;
          }
          const grown = this.size > this.#initialSize || this.mass > this.#initialMass, radiusLimitReached = this.limit.radius > minRadius && this.size >= this.limit.radius, massLimitReached = this.limit.mass > minMass && this.mass >= this.limit.mass;
          return grown && (radiusLimitReached || massLimitReached);
        }
        update(delta) {
          if (this.#firstSpawn) {
            this.#firstSpawn = false;
            this.#currentSpawnDelay = this.#spawnDelay ?? defaultSpawnDelay;
          }
          if (this.#duration !== void 0) {
            this.#currentDuration += delta.value;
            if (this.#currentDuration >= this.#duration) {
              if (!this.#immortal) {
                this.#lifeCount--;
              }
              if (this.#lifeCount > minLifeCount || this.#immortal) {
                this.position = this.#calcPosition();
                this.#spawnDelay = this.#container.retina.reduceFactor ? getRangeValue(this.options.life.delay ?? defaultLifeDelay) * millisecondsToSeconds / this.#container.retina.reduceFactor : Infinity;
              }
              this.#currentDuration -= this.#duration;
              this.#duration = void 0;
            }
          }
          if (this.#spawnDelay !== void 0) {
            this.#currentSpawnDelay += delta.value;
            if (this.#currentSpawnDelay >= this.#spawnDelay) {
              this.#play();
              this.#currentSpawnDelay -= this.#spawnDelay;
              this.#spawnDelay = void 0;
            }
          }
        }
        #calcPosition() {
          const exactPosition = calcPositionOrRandomFromSizeRanged({
            size: this.#container.canvas.size,
            position: this.options.position
          });
          return Vector.create(exactPosition.x, exactPosition.y);
        }
        #play() {
          if (!((this.#lifeCount > minLifeCount || this.#immortal || !this.options.life.count) && (this.#firstSpawn || this.#currentSpawnDelay >= (this.#spawnDelay ?? defaultSpawnDelay)))) {
            return;
          }
          if (this.#lifeCount > minLifeCount || this.#immortal) {
            this.#prepareToDie();
          }
        }
        #prepareToDie() {
          const duration = this.options.life.duration !== void 0 ? getRangeValue(this.options.life.duration) : void 0, minDuration = 0;
          if ((this.#lifeCount > minLifeCount || this.#immortal) && duration !== void 0 && duration > minDuration) {
            this.#duration = duration * millisecondsToSeconds;
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersInstancesManager.js
  var AbsorbersInstancesManager_exports = {};
  __export(AbsorbersInstancesManager_exports, {
    AbsorbersInstancesManager: () => AbsorbersInstancesManager
  });
  var defaultIndex, splitMassRatio, AbsorbersInstancesManager;
  var init_AbsorbersInstancesManager = __esm({
    "node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersInstancesManager.js"() {
      init_browser2();
      defaultIndex = 0;
      splitMassRatio = 0.9;
      AbsorbersInstancesManager = class {
        #containerArrays;
        #pluginManager;
        constructor(pluginManager) {
          this.#pluginManager = pluginManager;
          this.#containerArrays = /* @__PURE__ */ new Map();
        }
        async addAbsorber(container, options, position) {
          return this.addAbsorbers(container, [{ options, position }]).then((res) => res[defaultIndex]);
        }
        async addAbsorbers(container, absorbers) {
          const { AbsorberInstance: AbsorberInstance2 } = await Promise.resolve().then(() => (init_AbsorberInstance(), AbsorberInstance_exports)), res = [];
          for (const { options, position } of absorbers) {
            const absorber = new AbsorberInstance2(this.#pluginManager, container, options, position), array = this.getArray(container);
            array.push(absorber);
            res.push(absorber);
          }
          return res;
        }
        clear(container) {
          this.initContainer(container);
          this.#containerArrays.set(container, []);
        }
        getArray(container) {
          this.initContainer(container);
          let array = this.#containerArrays.get(container);
          if (!array) {
            array = [];
            this.#containerArrays.set(container, array);
          }
          return array;
        }
        initContainer(container) {
          if (this.#containerArrays.has(container)) {
            return;
          }
          this.#containerArrays.set(container, []);
          container.getAbsorber ??= (idxOrName) => {
            const array = this.getArray(container);
            return idxOrName === void 0 || isNumber(idxOrName) ? array[idxOrName ?? defaultIndex] : array.find((t) => t.name === idxOrName);
          };
          container.addAbsorber ??= (options, position) => {
            return this.addAbsorber(container, options, position);
          };
          container.addAbsorbers ??= (absorbers) => {
            return this.addAbsorbers(container, absorbers);
          };
        }
        removeAbsorber(container, absorber) {
          const index = this.getArray(container).indexOf(absorber), deleteCount2 = 1;
          if (index >= defaultIndex) {
            this.getArray(container).splice(index, deleteCount2);
          }
        }
        splitAbsorber(container, absorber) {
          if (!absorber.options.split.enable) {
            return;
          }
          const { size } = absorber, quantity = absorber.options.split.quantity, position = {
            x: absorber.position.x,
            y: absorber.position.y
          };
          this.removeAbsorber(container, absorber);
          if (quantity <= defaultIndex) {
            return;
          }
          const particleSize = size * splitMassRatio / quantity / container.retina.pixelRatio;
          for (let i = defaultIndex; i < quantity; i++) {
            const angle = getRandom() * doublePI;
            container.particles.addParticle({
              x: position.x + Math.cos(angle) * size,
              y: position.y + Math.sin(angle) * size
            }, { size: { value: particleSize } });
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersPluginInstance.js
  var AbsorbersPluginInstance_exports = {};
  __export(AbsorbersPluginInstance_exports, {
    AbsorbersPluginInstance: () => AbsorbersPluginInstance
  });
  var maxDegreeAngle, AbsorbersPluginInstance;
  var init_AbsorbersPluginInstance = __esm({
    "node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersPluginInstance.js"() {
      init_browser2();
      maxDegreeAngle = 360;
      AbsorbersPluginInstance = class {
        #container;
        #instancesManager;
        constructor(container, instancesManager) {
          this.#container = container;
          this.#instancesManager = instancesManager;
          this.#instancesManager.initContainer(container);
        }
        draw(context) {
          for (const absorber of this.#instancesManager.getArray(this.#container)) {
            absorber.draw(context);
          }
        }
        async init() {
          const absorbers = this.#container.actualOptions.absorbers, promises = executeOnSingleOrMultiple(absorbers, async (absorber) => {
            await this.#instancesManager.addAbsorber(this.#container, absorber);
          });
          if (isArray(promises)) {
            await Promise.all(promises);
          } else {
            await promises;
          }
        }
        particleUpdate(particle, delta) {
          const absorbers = this.#instancesManager.getArray(this.#container), orbiting = particle;
          if (!absorbers.length) {
            return;
          }
          const position = orbiting.getPosition(), force = Vector.origin, orbitDriven = absorbers.some((absorber) => absorber.orbits);
          for (const absorber of absorbers) {
            force.addTo(absorber.getForce(position));
          }
          const field = orbitDriven ? this.#getOrbitField(absorbers, position) : void 0;
          for (const absorber of absorbers) {
            absorber.attract(orbiting, delta);
            if (particle.destroyed) {
              return;
            }
          }
          if (orbiting.needsNewPosition) {
            this.#recycleParticle(orbiting);
            return;
          }
          if (field) {
            this.#updateOrbit(orbiting, delta, field, force);
          } else {
            orbiting.velocity.addTo(force);
          }
        }
        resize() {
          for (const absorber of this.#instancesManager.getArray(this.#container)) {
            absorber.resize();
          }
        }
        stop() {
          this.#instancesManager.clear(this.#container);
        }
        update(delta) {
          const absorbers = this.#instancesManager.getArray(this.#container);
          for (const absorber of absorbers) {
            absorber.update(delta);
          }
          for (const absorber of absorbers) {
            if (!absorber.shouldSplit()) {
              continue;
            }
            this.#instancesManager.splitAbsorber(this.#container, absorber);
            break;
          }
        }
        #getOrbitField(absorbers, position) {
          const center = Vector.origin;
          let orbitAttraction = 0, weightedSize = 0;
          for (const absorber of absorbers) {
            if (!absorber.orbits) {
              continue;
            }
            const absorberPosition = absorber.position, attraction = absorber.getAttraction(position);
            orbitAttraction += attraction;
            center.x += absorberPosition.x * attraction;
            center.y += absorberPosition.y * attraction;
            weightedSize += absorber.size * attraction;
          }
          if (orbitAttraction <= minRadius) {
            return { center, size: minRadius };
          }
          center.x /= orbitAttraction;
          center.y /= orbitAttraction;
          return {
            center,
            size: weightedSize / orbitAttraction
          };
        }
        #recycleParticle(particle) {
          particle.position.setTo(calcPositionOrRandomFromSize({ size: this.#container.canvas.size }));
          particle.velocity.setTo(particle.initialVelocity);
          particle.absorberOrbit = void 0;
          particle.absorberOrbitDirection = void 0;
          particle.needsNewPosition = false;
        }
        #updateOrbit(particle, delta, field, force) {
          const container = this.#container, { width, height } = container.canvas.size;
          particle.absorberOrbitDirection ??= particle.velocity.x >= minVelocity ? RotateDirection.clockwise : RotateDirection.counterClockwise;
          const clockwise = particle.absorberOrbitDirection === RotateDirection.clockwise, mirror = clockwise ? identity : -identity;
          if (particle.absorberOrbit === void 0) {
            const position = particle.getPosition(), offsetX = position.x - field.center.x, offsetY = position.y - field.center.y;
            particle.absorberOrbit = Vector.create(offsetX, mirror * offsetY);
          } else if (particle.absorberOrbit.length <= field.size) {
            this.#recycleParticle(particle);
            return;
          }
          const orbitRadius = particle.absorberOrbit.length, orbitAngle = particle.absorberOrbit.angle, cos = Math.cos(orbitAngle), sin = mirror * Math.sin(orbitAngle);
          particle.velocity.setTo(Vector.origin);
          const sizeFactor = particle.options.move.size ? particle.getRadius() / particle.size.max : identity, moveSpeed = particle.retina.moveSpeed * sizeFactor * (delta.factor || identity) * half, orbitX = field.center.x + orbitRadius * cos, orbitY = field.center.y + orbitRadius * sin;
          particle.position.setTo({
            x: clamp(orbitX, minRadius, width),
            y: clamp(orbitY, minRadius, height),
            z: particle.position.z
          });
          const radial = force.x * cos + force.y * sin, tangential = force.x * -sin + force.y * cos;
          particle.absorberOrbit.length = Math.max(minRadius, orbitRadius + radial);
          particle.absorberOrbit.angle += (moveSpeed + tangential * mirror) * container.retina.reduceFactor * (identity / maxDegreeAngle);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterLife.js
  var EmitterLife;
  var init_EmitterLife = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterLife.js"() {
      init_browser2();
      EmitterLife = class {
        count;
        delay;
        duration;
        wait = false;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "count", data.count);
          loadRangeProperty(this, "delay", data.delay);
          loadRangeProperty(this, "duration", data.duration);
          loadProperty(this, "wait", data.wait);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterRate.js
  var EmitterRate;
  var init_EmitterRate = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterRate.js"() {
      init_browser2();
      EmitterRate = class {
        delay = 0.1;
        quantity = 1;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadRangeProperty(this, "quantity", data.quantity);
          loadRangeProperty(this, "delay", data.delay);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShapeReplace.js
  var EmitterShapeReplace;
  var init_EmitterShapeReplace = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShapeReplace.js"() {
      init_browser2();
      EmitterShapeReplace = class {
        color = false;
        opacity = false;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "color", data.color);
          loadProperty(this, "opacity", data.opacity);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShape.js
  var EmitterShape;
  var init_EmitterShape = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterShape.js"() {
      init_browser2();
      init_EmitterShapeReplace();
      EmitterShape = class {
        options = {};
        replace = new EmitterShapeReplace();
        type = "square";
        load(data) {
          if (isNull(data)) {
            return;
          }
          if (data.options !== void 0) {
            this.options = deepExtend({}, data.options ?? {});
          }
          this.replace.load(data.replace);
          loadProperty(this, "type", data.type);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSize.js
  var EmitterSize;
  var init_EmitterSize = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSize.js"() {
      init_browser2();
      EmitterSize = class {
        height = 0;
        mode = PixelMode.percent;
        width = 0;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "mode", data.mode);
          loadProperty(this, "height", data.height);
          loadProperty(this, "width", data.width);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSpawn.js
  var EmitterSpawn;
  var init_EmitterSpawn = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/EmitterSpawn.js"() {
      init_browser2();
      EmitterSpawn = class {
        fill;
        stroke;
        load(data) {
          if (isNull(data)) {
            return;
          }
          if (data.fill) {
            this.fill ??= new Fill();
            this.fill.load(data.fill);
          }
          if (data.stroke) {
            this.stroke ??= new Stroke();
            this.stroke.load(data.stroke);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/Emitter.js
  var Emitter;
  var init_Emitter = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/Options/Classes/Emitter.js"() {
      init_browser2();
      init_EmitterLife();
      init_EmitterRate();
      init_EmitterShape();
      init_EmitterSize();
      init_EmitterSpawn();
      Emitter = class {
        autoPlay = true;
        direction;
        domId;
        draggable = false;
        draw = false;
        fill = true;
        life = new EmitterLife();
        name;
        particles;
        position;
        rate = new EmitterRate();
        shape = new EmitterShape();
        size;
        spawn = new EmitterSpawn();
        spawnFillColor;
        spawnStrokeColor;
        startCount = 0;
        load(data) {
          if (isNull(data)) {
            return;
          }
          loadProperty(this, "autoPlay", data.autoPlay);
          if (data.size !== void 0) {
            this.size ??= new EmitterSize();
            this.size.load(data.size);
          }
          loadProperty(this, "direction", data.direction);
          loadProperty(this, "domId", data.domId);
          loadProperty(this, "draggable", data.draggable);
          loadProperty(this, "draw", data.draw);
          loadProperty(this, "fill", data.fill);
          this.life.load(data.life);
          loadProperty(this, "name", data.name);
          this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
            return deepExtend({}, particles);
          });
          this.rate.load(data.rate);
          this.shape.load(data.shape);
          this.spawn.load(data.spawn);
          if (data.position !== void 0) {
            this.position = {};
            if (data.position.x !== void 0) {
              this.position.x = setRangeValue(data.position.x);
            }
            if (data.position.y !== void 0) {
              this.position.y = setRangeValue(data.position.y);
            }
          }
          if (data.spawnFillColor !== void 0) {
            this.spawnFillColor ??= new AnimatableColor();
            this.spawnFillColor.load(data.spawnFillColor);
          }
          if (data.spawnStrokeColor !== void 0) {
            this.spawnStrokeColor ??= new AnimatableColor();
            this.spawnStrokeColor.load(data.spawnStrokeColor);
          }
          loadProperty(this, "startCount", data.startCount);
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersPluginInstance.js
  var EmittersPluginInstance_exports = {};
  __export(EmittersPluginInstance_exports, {
    EmittersPluginInstance: () => EmittersPluginInstance
  });
  var EmittersPluginInstance;
  var init_EmittersPluginInstance = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/EmittersPluginInstance.js"() {
      init_browser2();
      EmittersPluginInstance = class {
        #container;
        #instancesManager;
        constructor(instancesManager, container) {
          this.#instancesManager = instancesManager;
          this.#container = container;
          this.#instancesManager.initContainer(container);
        }
        draw(context, _delta) {
          for (const emitter of this.#instancesManager.getArray(this.#container)) {
            emitter.draw(context);
          }
        }
        async init() {
          const emittersOptions = this.#container.actualOptions.emitters;
          if (isArray(emittersOptions)) {
            for (const emitterOptions of emittersOptions) {
              await this.#instancesManager.addEmitter(this.#container, emitterOptions);
            }
          } else {
            await this.#instancesManager.addEmitter(this.#container, emittersOptions);
          }
        }
        pause() {
          for (const emitter of this.#instancesManager.getArray(this.#container)) {
            emitter.pause();
          }
        }
        play() {
          for (const emitter of this.#instancesManager.getArray(this.#container)) {
            emitter.play();
          }
        }
        resize() {
          for (const emitter of this.#instancesManager.getArray(this.#container)) {
            emitter.resize();
          }
        }
        stop() {
          this.#instancesManager.clear(this.#container);
        }
        update(delta) {
          this.#instancesManager.getArray(this.#container).forEach((emitter) => {
            emitter.update(delta);
          });
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/ShapeManager.js
  var ShapeManager_exports = {};
  __export(ShapeManager_exports, {
    ShapeManager: () => ShapeManager
  });
  var shapeGenerators, ShapeManager;
  var init_ShapeManager = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/ShapeManager.js"() {
      shapeGenerators = /* @__PURE__ */ new Map();
      ShapeManager = class {
        addShapeGenerator(name, generator) {
          if (!this.getShapeGenerator(name)) {
            shapeGenerators.set(name, generator);
          }
        }
        getShapeGenerator(name) {
          return shapeGenerators.get(name);
        }
        getSupportedShapeGenerators() {
          return shapeGenerators.keys();
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/EmitterInstance.js
  var EmitterInstance_exports = {};
  __export(EmitterInstance_exports, {
    EmitterInstance: () => EmitterInstance
  });
  function setParticlesOptionsFillColor(particlesOptions, color, opacity, enable) {
    const paint = particlesOptions.paint ??= new Paint();
    paint.fill = {
      color: AnimatableColor.create(void 0, { value: color }),
      enable,
      opacity
    };
  }
  function setParticlesOptionsStrokeColor(particlesOptions, color, opacity, width) {
    const paint = particlesOptions.paint ??= new Paint();
    paint.stroke = {
      color: AnimatableColor.create(void 0, { value: color }),
      opacity,
      width
    };
  }
  var defaultLifeDelay2, minLifeCount2, defaultSpawnDelay2, defaultEmitDelay, defaultLifeCount2, defaultColorAnimationFactor, colorFactor, defaultStrokeWidth, EmitterInstance;
  var init_EmitterInstance = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/EmitterInstance.js"() {
      init_browser2();
      init_Emitter();
      init_EmitterSize();
      defaultLifeDelay2 = 0;
      minLifeCount2 = 0;
      defaultSpawnDelay2 = 0;
      defaultEmitDelay = 0;
      defaultLifeCount2 = -1;
      defaultColorAnimationFactor = 1;
      colorFactor = 3.6;
      defaultStrokeWidth = 1;
      EmitterInstance = class {
        fill;
        name;
        options;
        position;
        size;
        spawnFillColor;
        spawnFillEnabled;
        spawnFillOpacity;
        spawnStrokeColor;
        spawnStrokeOpacity;
        spawnStrokeWidth;
        #container;
        #currentDuration;
        #currentEmitDelay;
        #currentSpawnDelay;
        #duration;
        #emitDelay;
        #firstSpawn;
        #immortal;
        #initialPosition;
        #lifeCount;
        #mutationObserver;
        #particlesOptions;
        #paused;
        #pluginManager;
        #positionOverride = false;
        #removeCallback;
        #resizeObserver;
        #shape;
        #size;
        #spawnDelay;
        #startParticlesAdded;
        constructor(pluginManager, container, removeCallback, options, position) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.#removeCallback = removeCallback;
          this.#currentDuration = 0;
          this.#currentEmitDelay = 0;
          this.#currentSpawnDelay = 0;
          this.#initialPosition = position;
          if (options instanceof Emitter) {
            this.options = options;
          } else {
            this.options = new Emitter();
            this.options.load(options);
          }
          this.#spawnDelay = container.retina.reduceFactor ? getRangeValue(this.options.life.delay ?? defaultLifeDelay2) * millisecondsToSeconds / container.retina.reduceFactor : Infinity;
          this.position = this.#initialPosition ?? this.#calcPosition();
          this.name = this.options.name;
          this.fill = this.options.fill;
          this.#firstSpawn = !this.options.life.wait;
          this.#startParticlesAdded = false;
          const particlesOptions = deepExtend({}, this.options.particles);
          particlesOptions.move ??= {};
          particlesOptions.move.direction ??= this.options.direction;
          if (this.options.spawn.fill?.color) {
            this.spawnFillColor = rangeColorToHsl(this.#pluginManager, this.options.spawn.fill.color);
          }
          if (this.options.spawn.stroke?.color) {
            this.spawnStrokeColor = rangeColorToHsl(this.#pluginManager, this.options.spawn.stroke.color);
          }
          const spawnFill = this.options.spawn.fill, spawnStroke = this.options.spawn.stroke;
          this.spawnFillOpacity = spawnFill?.opacity === void 0 ? defaultOpacity : getRangeValue(spawnFill.opacity);
          this.spawnStrokeOpacity = spawnStroke?.opacity === void 0 ? defaultOpacity : getRangeValue(spawnStroke.opacity);
          this.spawnStrokeWidth = spawnStroke?.width === void 0 ? defaultStrokeWidth : getRangeValue(spawnStroke.width);
          this.#paused = !this.options.autoPlay;
          this.#particlesOptions = particlesOptions;
          this.#size = this.#calcSize();
          this.size = this.#size.mode === PixelMode.percent ? {
            width: this.#size.width / percentDenominator * this.#container.canvas.size.width,
            height: this.#size.height / percentDenominator * this.#container.canvas.size.height
          } : { width: this.#size.width, height: this.#size.height };
          this.#lifeCount = this.options.life.count ?? defaultLifeCount2;
          this.#immortal = this.#lifeCount <= minLifeCount2;
          if (this.options.domId) {
            const element = safeDocument().getElementById(this.options.domId);
            if (element) {
              this.#mutationObserver = new MutationObserver(() => {
                this.resize();
              });
              this.#resizeObserver = new ResizeObserver(() => {
                this.resize();
              });
              this.#mutationObserver.observe(element, {
                attributes: true,
                attributeFilter: ["style", "width", "height"]
              });
              this.#resizeObserver.observe(element);
            }
          }
          const shapeOptions = this.options.shape, shapeGenerator = this.#pluginManager.emitterShapeManager?.getShapeGenerator(shapeOptions.type);
          if (shapeGenerator) {
            this.#shape = shapeGenerator.generate(this.#container, this.position, this.size, this.fill, shapeOptions.options);
          }
          this.#container.dispatchEvent("emitterCreated", {
            emitter: this
          });
          this.play();
        }
        draw(context) {
          if (!this.options.draw || !this.#shape) {
            return;
          }
          const container = this.#container, fillEnabled = this.options.spawn.fill?.enable ?? true;
          context.save();
          context.beginPath();
          if (fillEnabled) {
            context.fillStyle = this.spawnFillColor ? getStyleFromHsl(this.spawnFillColor, container.hdr, this.spawnFillOpacity ?? defaultOpacity, container.peakNits, container.hdrMode) : getStyleFromRgb({ r: 0, g: 0, b: 0 }, container.hdr, defaultOpacity, container.peakNits, container.hdrMode);
          }
          if (this.spawnStrokeColor) {
            context.strokeStyle = getStyleFromHsl(this.spawnStrokeColor, container.hdr, this.spawnStrokeOpacity ?? defaultOpacity, container.peakNits, container.hdrMode);
            context.lineWidth = this.spawnStrokeWidth ?? defaultStrokeWidth;
          }
          this.#shape.draw?.(context);
          if (fillEnabled) {
            context.fill();
          }
          if (this.spawnStrokeColor) {
            context.stroke();
          }
          context.restore();
        }
        externalPause() {
          this.#paused = true;
          this.pause();
        }
        externalPlay() {
          this.#paused = false;
          this.play();
        }
        async init() {
          await this.#shape?.init();
        }
        pause() {
          if (this.#paused) {
            return;
          }
          this.#emitDelay = void 0;
        }
        play() {
          if (this.#paused) {
            return;
          }
          if (!((this.#lifeCount > minLifeCount2 || this.#immortal || !this.options.life.count) && (this.#firstSpawn || this.#currentSpawnDelay >= (this.#spawnDelay ?? defaultSpawnDelay2)))) {
            return;
          }
          const container = this.#container;
          if (this.#emitDelay === void 0) {
            const delay = getRangeValue(this.options.rate.delay);
            this.#emitDelay = container.retina.reduceFactor ? delay * millisecondsToSeconds / container.retina.reduceFactor : Infinity;
          }
          if (this.#lifeCount > minLifeCount2 || this.#immortal) {
            this.#prepareToDie();
          }
        }
        resize() {
          const container = this.#container;
          if (!this.#positionOverride) {
            const initialPosition = this.#initialPosition;
            this.position = initialPosition && isPointInside(initialPosition, container.canvas.size, Vector.origin) ? initialPosition : this.#calcPosition();
          }
          this.#size = this.#calcSize();
          this.size = this.#size.mode === PixelMode.percent ? {
            width: this.#size.width / percentDenominator * container.canvas.size.width,
            height: this.#size.height / percentDenominator * container.canvas.size.height
          } : { width: this.#size.width, height: this.#size.height };
          this.#shape?.resize(this.position, this.size);
        }
        setPosition(position) {
          this.#positionOverride = true;
          this.position = { ...position };
          this.#shape?.resize(this.position, this.size);
        }
        update(delta) {
          if (this.#paused) {
            return;
          }
          const container = this.#container;
          if (this.#firstSpawn) {
            this.#firstSpawn = false;
            this.#currentSpawnDelay = this.#spawnDelay ?? defaultSpawnDelay2;
            this.#currentEmitDelay = this.#emitDelay ?? defaultEmitDelay;
          }
          if (!this.#startParticlesAdded) {
            this.#startParticlesAdded = true;
            this.#emitParticles(this.options.startCount);
          }
          if (this.#duration !== void 0) {
            this.#currentDuration += delta.value;
            if (this.#currentDuration >= this.#duration) {
              this.pause();
              if (this.#spawnDelay !== void 0) {
                this.#spawnDelay = void 0;
              }
              if (!this.#immortal) {
                this.#lifeCount--;
              }
              if (this.#lifeCount > minLifeCount2 || this.#immortal) {
                if (!this.#positionOverride) {
                  this.position = this.#calcPosition();
                  this.#shape?.resize(this.position, this.size);
                }
                this.#spawnDelay = container.retina.reduceFactor ? getRangeValue(this.options.life.delay ?? defaultLifeDelay2) * millisecondsToSeconds / container.retina.reduceFactor : Infinity;
              } else {
                this.#destroy();
              }
              this.#currentDuration -= this.#duration;
              this.#duration = void 0;
            }
          }
          if (this.#spawnDelay !== void 0) {
            this.#currentSpawnDelay += delta.value;
            if (this.#currentSpawnDelay >= this.#spawnDelay) {
              this.#container.dispatchEvent("emitterPlay");
              this.play();
              this.#currentSpawnDelay -= this.#spawnDelay;
              this.#spawnDelay = void 0;
            }
          }
          if (this.#emitDelay !== void 0) {
            this.#currentEmitDelay += delta.value;
            if (this.#currentEmitDelay >= this.#emitDelay) {
              this.#emit();
              this.#currentEmitDelay -= this.#emitDelay;
            }
          }
        }
        #calcPosition() {
          const container = this.#container;
          if (this.options.domId) {
            const element = safeDocument().getElementById(this.options.domId);
            if (element) {
              const elRect = element.getBoundingClientRect(), pxRatio = container.retina.pixelRatio;
              return {
                x: (elRect.x + elRect.width * half) * pxRatio,
                y: (elRect.y + elRect.height * half) * pxRatio
              };
            }
          }
          return calcPositionOrRandomFromSizeRanged({
            size: container.canvas.size,
            position: this.options.position
          });
        }
        #calcSize() {
          const container = this.#container;
          if (this.options.domId) {
            const element = safeDocument().getElementById(this.options.domId);
            if (element) {
              const elRect = element.getBoundingClientRect();
              return {
                width: elRect.width * container.retina.pixelRatio,
                height: elRect.height * container.retina.pixelRatio,
                mode: PixelMode.precise
              };
            }
          }
          return this.options.size ?? (() => {
            const size = new EmitterSize();
            size.load({
              height: 0,
              mode: PixelMode.percent,
              width: 0
            });
            return size;
          })();
        }
        #destroy() {
          this.#mutationObserver?.disconnect();
          this.#mutationObserver = void 0;
          this.#resizeObserver?.disconnect();
          this.#resizeObserver = void 0;
          this.#removeCallback(this);
          this.#container.dispatchEvent("emitterDestroyed", {
            emitter: this
          });
        }
        #emit() {
          if (this.#paused) {
            return;
          }
          const quantity = getRangeValue(this.options.rate.quantity);
          this.#emitParticles(quantity);
        }
        #emitParticles(quantity) {
          const singleParticlesOptions = itemFromSingleOrMultiple(this.#particlesOptions) ?? {}, fillHslAnimation = this.options.spawn.fill?.color?.animation, fillEnabled = this.options.spawn.fill?.enable ?? !!this.options.spawn.fill?.color, fillOpacity = this.options.spawn.fill?.opacity === void 0 ? defaultOpacity : getRangeValue(this.options.spawn.fill.opacity), strokeHslAnimation = this.options.spawn.stroke?.color?.animation, strokeOpacity = this.options.spawn.stroke?.opacity === void 0 ? defaultOpacity : getRangeValue(this.options.spawn.stroke.opacity), strokeWidth = this.options.spawn.stroke?.width === void 0 ? defaultStrokeWidth : getRangeValue(this.options.spawn.stroke.width), reduceFactor = this.#container.retina.reduceFactor, needsFillColorAnimation = !!fillHslAnimation, needsStrokeColorAnimation = !!strokeHslAnimation, needsShapeData = !!this.#shape, needsColorAnimation = needsFillColorAnimation || needsStrokeColorAnimation, needsCopy = needsColorAnimation || needsShapeData, maxValues = needsColorAnimation ? { h: hMax, s: sMax, l: lMax } : null, shapeOptions = this.options.shape;
          for (let i = 0; i < quantity * reduceFactor; i++) {
            const particlesOptions = needsCopy ? deepExtend({}, singleParticlesOptions) : singleParticlesOptions;
            this.spawnFillOpacity = fillOpacity;
            this.spawnFillEnabled = fillEnabled;
            this.spawnStrokeOpacity = strokeOpacity;
            this.spawnStrokeWidth = strokeWidth;
            if (this.spawnFillColor) {
              if (fillHslAnimation && maxValues) {
                this.spawnFillColor.h = this.#setColorAnimation(fillHslAnimation.h, this.spawnFillColor.h, maxValues.h, colorFactor);
                this.spawnFillColor.s = this.#setColorAnimation(fillHslAnimation.s, this.spawnFillColor.s, maxValues.s);
                this.spawnFillColor.l = this.#setColorAnimation(fillHslAnimation.l, this.spawnFillColor.l, maxValues.l);
              }
              setParticlesOptionsFillColor(particlesOptions, this.spawnFillColor, this.spawnFillOpacity, this.spawnFillEnabled);
            }
            if (this.spawnStrokeColor) {
              if (strokeHslAnimation && maxValues) {
                this.spawnStrokeColor.h = this.#setColorAnimation(strokeHslAnimation.h, this.spawnStrokeColor.h, maxValues.h, colorFactor);
                this.spawnStrokeColor.s = this.#setColorAnimation(strokeHslAnimation.s, this.spawnStrokeColor.s, maxValues.s);
                this.spawnStrokeColor.l = this.#setColorAnimation(strokeHslAnimation.l, this.spawnStrokeColor.l, maxValues.l);
              }
              setParticlesOptionsStrokeColor(particlesOptions, this.spawnStrokeColor, this.spawnStrokeOpacity, this.spawnStrokeWidth);
            }
            let position = this.position;
            if (this.#shape) {
              const shapePosData = this.#shape.randomPosition();
              if (shapePosData) {
                position = shapePosData.position;
                const replaceData = shapeOptions.replace;
                if (replaceData.color && shapePosData.color) {
                  setParticlesOptionsFillColor(particlesOptions, shapePosData.color, replaceData.opacity ? shapePosData.opacity ?? defaultOpacity : defaultOpacity, true);
                }
              } else {
                position = null;
              }
            }
            if (position) {
              this.#container.particles.addParticle(position, particlesOptions);
            }
          }
        }
        #prepareToDie() {
          if (this.#paused) {
            return;
          }
          const duration = this.options.life.duration !== void 0 ? getRangeValue(this.options.life.duration) : void 0, minDuration = 0, minLifeCount3 = 0;
          if ((this.#lifeCount > minLifeCount3 || this.#immortal) && duration !== void 0 && duration > minDuration) {
            this.#duration = duration * millisecondsToSeconds;
          }
        }
        #setColorAnimation(animation, initValue, maxValue, factor = defaultColorAnimationFactor) {
          const container = this.#container;
          if (!animation.enable) {
            return initValue;
          }
          const colorOffset = randomInRangeValue(animation.offset), delay = getRangeValue(this.options.rate.delay), emitFactor = container.retina.reduceFactor ? delay * millisecondsToSeconds / container.retina.reduceFactor : Infinity, colorSpeed = getRangeValue(animation.speed);
          return (initValue + colorSpeed * container.fpsLimit / emitFactor + colorOffset * factor) % maxValue;
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersInstancesManager.js
  var EmittersInstancesManager_exports = {};
  __export(EmittersInstancesManager_exports, {
    EmittersInstancesManager: () => EmittersInstancesManager
  });
  var defaultIndex2, EmittersInstancesManager;
  var init_EmittersInstancesManager = __esm({
    "node_modules/@tsparticles/plugin-emitters/browser/EmittersInstancesManager.js"() {
      init_browser2();
      init_Emitter();
      defaultIndex2 = 0;
      EmittersInstancesManager = class {
        #containerArrays;
        #pluginManager;
        constructor(pluginManager) {
          this.#containerArrays = /* @__PURE__ */ new Map();
          this.#pluginManager = pluginManager;
        }
        async addEmitter(container, options, position) {
          return this.addEmitters(container, [{ options, position }]).then((t) => t[defaultIndex2]);
        }
        async addEmitters(container, emitters) {
          const { EmitterInstance: EmitterInstance2 } = await Promise.resolve().then(() => (init_EmitterInstance(), EmitterInstance_exports)), res = [];
          for (const { options, position } of emitters) {
            const emitterOptions = new Emitter();
            emitterOptions.load(options);
            const emitter = new EmitterInstance2(this.#pluginManager, container, (emitter2) => {
              this.removeEmitter(container, emitter2);
            }, emitterOptions, position);
            await emitter.init();
            this.getArray(container).push(emitter);
            res.push(emitter);
          }
          return res;
        }
        clear(container) {
          this.initContainer(container);
          this.#containerArrays.set(container, []);
        }
        getArray(container) {
          this.initContainer(container);
          let array = this.#containerArrays.get(container);
          if (!array) {
            array = [];
            this.#containerArrays.set(container, array);
          }
          return array;
        }
        initContainer(container) {
          if (this.#containerArrays.has(container)) {
            return;
          }
          this.#containerArrays.set(container, []);
          container.getEmitter = (idxOrName) => {
            const array = this.getArray(container);
            return idxOrName === void 0 || isNumber(idxOrName) ? array[idxOrName ?? defaultIndex2] : array.find((t) => t.name === idxOrName);
          };
          container.addEmitter = async (options, position) => this.addEmitter(container, options, position);
          container.addEmitters = async (emitters) => this.addEmitters(container, emitters);
          container.removeEmitter = (idxOrName) => {
            const emitter = container.getEmitter?.(idxOrName);
            if (emitter) {
              this.removeEmitter(container, emitter);
            }
          };
          container.playEmitter = (idxOrName) => {
            const emitter = container.getEmitter?.(idxOrName);
            if (emitter) {
              emitter.externalPlay();
            }
          };
          container.pauseEmitter = (idxOrName) => {
            const emitter = container.getEmitter?.(idxOrName);
            if (emitter) {
              emitter.externalPause();
            }
          };
        }
        removeEmitter(container, emitter) {
          const index = this.getArray(container).indexOf(emitter), deleteCount2 = 1;
          if (index >= minIndex) {
            this.getArray(container).splice(index, deleteCount2);
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-blend/browser/BlendPluginInstance.js
  var BlendPluginInstance_exports = {};
  __export(BlendPluginInstance_exports, {
    BlendPluginInstance: () => BlendPluginInstance
  });
  var BlendPluginInstance;
  var init_BlendPluginInstance = __esm({
    "node_modules/@tsparticles/plugin-blend/browser/BlendPluginInstance.js"() {
      init_browser2();
      BlendPluginInstance = class {
        layer = DrawLayer.CanvasSetup;
        #container;
        #defaultCompositeValue;
        constructor(container) {
          this.#container = container;
        }
        drawParticleCleanup(context, particle) {
          if (!particle.options.blend?.enable) {
            return;
          }
          context.globalCompositeOperation = particle.originalBlendMode ?? defaultCompositeValue;
          particle.originalBlendMode = void 0;
        }
        drawParticleSetup(context, particle) {
          if (!particle.options.blend?.enable) {
            return;
          }
          particle.originalBlendMode = context.globalCompositeOperation;
          context.globalCompositeOperation = particle.options.blend.mode;
        }
        drawSettingsCleanup(context) {
          if (!this.#defaultCompositeValue) {
            return;
          }
          context.globalCompositeOperation = this.#defaultCompositeValue;
        }
        drawSettingsSetup(context) {
          const previousComposite = context.globalCompositeOperation, blend = this.#container.actualOptions.blend;
          this.#defaultCompositeValue = previousComposite;
          context.globalCompositeOperation = blend?.enable ? blend.mode : previousComposite;
        }
      };
    }
  });

  // node_modules/@tsparticles/plugin-move/browser/Utils.js
  function applyDistance(particle) {
    const initialPosition = particle.initialPosition, dx = initialPosition.x - particle.position.x, dy = initialPosition.y - particle.position.y, dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
    if (!hDistance && !vDistance) {
      return;
    }
    const hasHDistance = (hDistance && dxFixed >= hDistance) ?? false, hasVDistance = (vDistance && dyFixed >= vDistance) ?? false;
    if ((hasHDistance || hasVDistance) && !particle.misplaced) {
      particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
      if (hDistance) {
        particle.velocity.x = particle.velocity.y * half - particle.velocity.x;
      }
      if (vDistance) {
        particle.velocity.y = particle.velocity.x * half - particle.velocity.y;
      }
    } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) {
      particle.misplaced = false;
    } else if (particle.misplaced) {
      const pos = particle.position, vel = particle.velocity;
      if (hDistance && (pos.x < initialPosition.x && vel.x < minVelocity || pos.x > initialPosition.x && vel.x > minVelocity)) {
        vel.x *= -getRandom();
      }
      if (vDistance && (pos.y < initialPosition.y && vel.y < minVelocity || pos.y > initialPosition.y && vel.y > minVelocity)) {
        vel.y *= -getRandom();
      }
    }
  }
  function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, reduceFactor, delta) {
    applyPath(particle, delta);
    const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -identity : identity, initialVelocityX = particle.velocity.x, initialVelocityY = particle.velocity.y, deltaFactor = delta.factor || identity, decay = particle.moveDecay ?? noDecay, decayFactor = decay < 0 ? decay : decay ** deltaFactor, accelerationX = moveDrift && moveSpeed ? moveDrift / (moveSpeedFactor * moveSpeed) : 0, accelerationY = gravityOptions?.enable && moveSpeed ? gravityFactor * gravityOptions.acceleration / (moveSpeedFactor * moveSpeed) : 0, integrateAcceleration = (acceleration) => {
      if (decay <= 0 || decay === noDecay) {
        return acceleration * deltaFactor;
      }
      return acceleration * (identity - decayFactor) / -Math.log(decay);
    };
    if (decay > 0) {
      particle.velocity.multTo(decayFactor);
    }
    particle.velocity.x += integrateAcceleration(accelerationX);
    particle.velocity.y += integrateAcceleration(accelerationY);
    if (decay <= 0) {
      particle.velocity.multTo(decayFactor);
    }
    const velocity = particle.velocity.mult(moveSpeed);
    let speedClamped = false;
    if (gravityOptions?.enable && maxSpeed > minVelocity && (!gravityOptions.inverse && velocity.y >= minVelocity && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= minVelocity && velocity.y <= -maxSpeed)) {
      velocity.y = gravityFactor * maxSpeed;
      speedClamped = true;
      if (moveSpeed) {
        particle.velocity.y = velocity.y / moveSpeed;
      }
    }
    const integrateDecayDisplacement = decay > 0 && decay < noDecay;
    if (integrateDecayDisplacement) {
      const decayRate = -Math.log(decay), decayIntegral = (identity - decayFactor) / decayRate, accelerationIntegral = (deltaFactor - decayIntegral) / decayRate;
      velocity.x = (initialVelocityX * decayIntegral + accelerationX * accelerationIntegral) * moveSpeed;
      velocity.y = speedClamped ? particle.velocity.y * moveSpeed * deltaFactor : (initialVelocityY * decayIntegral + accelerationY * accelerationIntegral) * moveSpeed;
    }
    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (identity - particle.zIndexFactor) ** zIndexOptions.velocityRate;
    velocity.multTo(zVelocityFactor);
    velocity.multTo(reduceFactor);
    if (!integrateDecayDisplacement) {
      velocity.multTo(deltaFactor);
    }
    const { position } = particle;
    position.addTo(velocity);
    if (moveOptions.vibrate) {
      position.x += Math.sin(position.x * Math.cos(position.y)) * reduceFactor;
      position.y += Math.cos(position.y * Math.sin(position.x)) * reduceFactor;
    }
  }
  function spin(container, particle, moveSpeed, reduceFactor) {
    if (!particle.spin) {
      return;
    }
    const spinClockwise = particle.spin.direction === RotateDirection.clockwise, updateFunc = {
      x: spinClockwise ? Math.cos : Math.sin,
      y: spinClockwise ? Math.sin : Math.cos
    };
    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle) * reduceFactor;
    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle) * reduceFactor;
    particle.spin.radius += particle.spin.acceleration * reduceFactor;
    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height), halfMaxSize = maxCanvasSize * half;
    if (particle.spin.radius > halfMaxSize) {
      particle.spin.radius = halfMaxSize;
      particle.spin.acceleration *= -identity;
    } else if (particle.spin.radius < minSpinRadius) {
      particle.spin.radius = minSpinRadius;
      particle.spin.acceleration *= -identity;
    }
    particle.spin.angle += moveSpeed * spinFactor * (identity - particle.spin.radius / maxCanvasSize);
  }
  function applyPath(particle, delta) {
    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
    if (!pathEnabled) {
      return;
    }
    const pathDelay = particle.pathDelay ?? defaultPathDelay;
    if (particle.lastPathTime <= pathDelay) {
      particle.lastPathTime += delta.value;
      return;
    }
    const path = particle.pathGenerator?.generate(particle, delta);
    if (path) {
      particle.velocity.addTo(path);
    }
    if (pathOptions.clamp) {
      particle.velocity.x = clamp(particle.velocity.x, -identity, identity);
      particle.velocity.y = clamp(particle.velocity.y, -identity, identity);
    }
    particle.lastPathTime -= pathDelay;
  }
  function getProximitySpeedFactor(particle) {
    const mod = particle.getModifier("slow");
    return mod?.enabled ? mod.speedFactor ?? identity : identity;
  }
  function initSpin(container, particle) {
    const options = particle.options, spinOptions = options.move.spin;
    if (!spinOptions.enable) {
      return;
    }
    const spinPos = spinOptions.position ?? { x: 50, y: 50 }, spinFactor2 = 0.01, spinCenter = {
      x: spinPos.x * spinFactor2 * container.canvas.size.width,
      y: spinPos.y * spinFactor2 * container.canvas.size.height
    }, pos = particle.getPosition(), distance = getDistance(pos, spinCenter), spinAcceleration = getRangeValue(spinOptions.acceleration);
    particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
    particle.spin = {
      center: spinCenter,
      direction: particle.velocity.x >= minVelocity ? RotateDirection.clockwise : RotateDirection.counterClockwise,
      angle: getRandom() * doublePI,
      radius: distance,
      acceleration: particle.retina.spinAcceleration
    };
  }
  var moveSpeedFactor, minSpinRadius, spinFactor, defaultPathDelay, noDecay;
  var init_Utils2 = __esm({
    "node_modules/@tsparticles/plugin-move/browser/Utils.js"() {
      init_browser2();
      moveSpeedFactor = 60;
      minSpinRadius = 0;
      spinFactor = 0.01;
      defaultPathDelay = 0;
      noDecay = 1;
    }
  });

  // node_modules/@tsparticles/plugin-move/browser/MovePluginInstance.js
  var MovePluginInstance_exports = {};
  __export(MovePluginInstance_exports, {
    MovePluginInstance: () => MovePluginInstance
  });
  var defaultSizeFactor, MovePluginInstance;
  var init_MovePluginInstance = __esm({
    "node_modules/@tsparticles/plugin-move/browser/MovePluginInstance.js"() {
      init_browser2();
      init_Utils2();
      defaultSizeFactor = 1;
      MovePluginInstance = class {
        availablePathGenerators;
        pathGenerators;
        #container;
        #pluginManager;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.availablePathGenerators = /* @__PURE__ */ new Map();
          this.pathGenerators = /* @__PURE__ */ new Map();
        }
        destroy() {
          this.availablePathGenerators = /* @__PURE__ */ new Map();
          this.pathGenerators = /* @__PURE__ */ new Map();
        }
        isEnabled(particle) {
          return !particle.destroyed && particle.options.move.enable;
        }
        particleCreated(particle) {
          const options = particle.options, moveOptions = options.move, gravityOptions = moveOptions.gravity, pathOptions = moveOptions.path;
          particle.moveDecay = decayOffset - getRangeValue(moveOptions.decay);
          particle.pathDelay = getRangeValue(pathOptions.delay.value) * millisecondsToSeconds;
          if (pathOptions.generator) {
            let pathGenerator = this.pathGenerators.get(pathOptions.generator);
            if (!pathGenerator) {
              pathGenerator = this.availablePathGenerators.get(pathOptions.generator);
              if (pathGenerator) {
                this.pathGenerators.set(pathOptions.generator, pathGenerator);
                pathGenerator.init();
              }
            }
            particle.pathGenerator = pathGenerator;
          }
          particle.gravity = {
            enable: gravityOptions.enable,
            acceleration: getRangeValue(gravityOptions.acceleration),
            inverse: gravityOptions.inverse
          };
          initSpin(this.#container, particle);
        }
        particleDestroyed(particle) {
          const pathGenerator = particle.pathGenerator;
          pathGenerator?.reset(particle);
        }
        particleUpdate(particle, delta) {
          const particleOptions = particle.options, moveOptions = particleOptions.move;
          if (!moveOptions.enable) {
            return;
          }
          const container = this.#container, slowFactor = getProximitySpeedFactor(particle), reduceFactor = container.retina.reduceFactor, baseSpeed = particle.retina.moveSpeed, moveDrift = particle.retina.moveDrift, maxSize = particle.size.max, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : defaultSizeFactor, moveSpeed = baseSpeed * sizeFactor * slowFactor * half, maxSpeed = particle.retina.maxSpeed;
          if (moveOptions.spin.enable) {
            spin(container, particle, moveSpeed * (delta.factor || identity), reduceFactor);
          } else {
            move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, reduceFactor, delta);
          }
          applyDistance(particle);
        }
        preInit() {
          return this.#init();
        }
        redrawInit() {
          return this.#init();
        }
        update() {
          for (const pathGenerator of this.pathGenerators.values()) {
            pathGenerator.update();
          }
        }
        async #init() {
          const pluginManager = this.#pluginManager;
          if (!pluginManager.initializers.pathGenerators) {
            return;
          }
          this.availablePathGenerators = await getItemMapFromInitializer(this.#container, pluginManager.initializers.pathGenerators);
          this.pathGenerators = /* @__PURE__ */ new Map();
          for (const pathGenerator of this.pathGenerators.values()) {
            pathGenerator.init();
          }
        }
      };
    }
  });

  // node_modules/@tsparticles/shape-image/browser/ImagePreloaderInstance.js
  var ImagePreloaderInstance_exports = {};
  __export(ImagePreloaderInstance_exports, {
    ImagePreloaderInstance: () => ImagePreloaderInstance
  });
  var ImagePreloaderInstance;
  var init_ImagePreloaderInstance = __esm({
    "node_modules/@tsparticles/shape-image/browser/ImagePreloaderInstance.js"() {
      ImagePreloaderInstance = class {
        #container;
        #engine;
        constructor(engine, container) {
          this.#engine = engine;
          this.#container = container;
        }
        destroy() {
          this.#engine.images?.delete(this.#container);
        }
      };
    }
  });

  // node_modules/@tsparticles/interaction-particles-collisions/browser/ErrorCodes.js
  var ErrorCodes6;
  var init_ErrorCodes2 = __esm({
    "node_modules/@tsparticles/interaction-particles-collisions/browser/ErrorCodes.js"() {
      ErrorCodes6 = {
        overlapNotPlaced: "TSP-4001"
      };
    }
  });

  // node_modules/@tsparticles/interaction-particles-collisions/browser/OverlapPluginInstance.js
  var OverlapPluginInstance_exports = {};
  __export(OverlapPluginInstance_exports, {
    OverlapPluginInstance: () => OverlapPluginInstance
  });
  var minRetries, OverlapPluginInstance;
  var init_OverlapPluginInstance = __esm({
    "node_modules/@tsparticles/interaction-particles-collisions/browser/OverlapPluginInstance.js"() {
      init_browser2();
      init_ErrorCodes2();
      minRetries = 0;
      OverlapPluginInstance = class {
        #container;
        constructor(container) {
          this.#container = container;
        }
        checkParticlePosition(particle, position, tryCount) {
          return !this.#hasOverlaps(particle, position, tryCount);
        }
        #hasOverlaps(particle, pos, tryCount) {
          const collisionsOptions = particle.options.collisions;
          if (!collisionsOptions?.enable) {
            return false;
          }
          const overlapOptions = collisionsOptions.overlap;
          if (overlapOptions.enable) {
            return false;
          }
          const retries = overlapOptions.retries;
          if (retries >= minRetries && tryCount > retries) {
            throw new Error(getErrorMessage(ErrorCodes6.overlapNotPlaced));
          }
          return !!this.#container.particles.find((p) => {
            const radius = particle.getRadius() + p.getRadius();
            return radius > 0 && getDistanceSq(pos, p.position) < radius * radius;
          });
        }
      };
    }
  });

  // node_modules/@tsparticles/interaction-particles-links/browser/Utils.js
  function getLinkKey(ids) {
    return [...ids].sort((a, b) => a - b).join("_");
  }
  function setLinkFrequency(particles, dictionary) {
    const key = getLinkKey(particles.map((t) => t.id));
    let res = dictionary.get(key);
    if (res === void 0) {
      res = getRandom();
      dictionary.set(key, res);
    }
    return res;
  }
  var init_Utils3 = __esm({
    "node_modules/@tsparticles/interaction-particles-links/browser/Utils.js"() {
      init_browser2();
    }
  });

  // node_modules/@tsparticles/interaction-particles-links/browser/LinkInstance.js
  var LinkInstance_exports = {};
  __export(LinkInstance_exports, {
    LinkInstance: () => LinkInstance
  });
  var minOpacity2, minWidth, minDistance7, maxFrequency, defaultFrequency, LinkInstance;
  var init_LinkInstance = __esm({
    "node_modules/@tsparticles/interaction-particles-links/browser/LinkInstance.js"() {
      init_browser2();
      init_Utils3();
      minOpacity2 = 0;
      minWidth = 0;
      minDistance7 = 0;
      maxFrequency = 1;
      defaultFrequency = 0;
      LinkInstance = class {
        #colorCache = /* @__PURE__ */ new Map();
        #container;
        #freqs;
        #pluginManager;
        constructor(pluginManager, container) {
          this.#pluginManager = pluginManager;
          this.#container = container;
          this.#freqs = { links: /* @__PURE__ */ new Map(), triangles: /* @__PURE__ */ new Map() };
        }
        drawParticle(context, particle) {
          const { links, options } = particle;
          if (!links?.length || !options.links) {
            return;
          }
          const linkOpts = options.links, width = particle.retina.linksWidth ?? minWidth, pos1 = particle.getPosition(), twinkle = particle.options["twinkle"]?.links, trianglesEnabled = linkOpts.triangles.enable, p1Destinations = trianglesEnabled ? new Set(links.map((l) => l.destination.id)) : null, originalAlpha = context.globalAlpha;
          let currentColorStyle = "", currentWidth = -1, currentAlpha = -1, pathOpen = false;
          const flushLines = () => {
            if (pathOpen) {
              context.stroke();
              pathOpen = false;
            }
          };
          for (const link of links) {
            if (linkOpts.frequency < maxFrequency && this.#getLinkFrequency(particle, link.destination) > linkOpts.frequency) {
              continue;
            }
            const pos2 = link.destination.getPosition();
            if (trianglesEnabled && !link.isWarped && p1Destinations) {
              flushLines();
              this.#drawTriangles(options, particle, link, p1Destinations, pos1, pos2, context);
            }
            if (link.opacity <= minOpacity2 || width <= minWidth) {
              continue;
            }
            if (!linkOpts.enable) {
              continue;
            }
            let opacity = link.opacity, colorLine = link.color;
            const twinkleRgb = twinkle?.enable && getRandom() < twinkle.frequency ? rangeColorToRgb(this.#pluginManager, twinkle.color) : void 0;
            if (twinkle && twinkleRgb) {
              colorLine = twinkleRgb;
              opacity = getRangeValue(twinkle.opacity);
            }
            if (!colorLine) {
              const linkColor = linkOpts.id !== void 0 ? this.#container.particles.linksColors.get(linkOpts.id) : this.#container.particles.linksColor;
              colorLine = getLinkColor(particle, link.destination, linkColor);
            }
            if (!colorLine) {
              continue;
            }
            const colorStyle = this.#getCachedStyle(colorLine);
            if (colorStyle !== currentColorStyle || width !== currentWidth || opacity !== currentAlpha) {
              flushLines();
              context.strokeStyle = colorStyle;
              context.lineWidth = width;
              context.globalAlpha = opacity;
              currentColorStyle = colorStyle;
              currentWidth = width;
              currentAlpha = opacity;
              context.beginPath();
              pathOpen = true;
            }
            if (link.isWarped) {
              const canvasSize = this.#container.canvas.size, dx = pos2.x - pos1.x, dy = pos2.y - pos1.y;
              let sx = originPoint.x, sy = originPoint.y;
              if (Math.abs(dx) > canvasSize.width * half) {
                sx = dx > minDistance7 ? -canvasSize.width : canvasSize.width;
              }
              if (Math.abs(dy) > canvasSize.height * half) {
                sy = dy > minDistance7 ? -canvasSize.height : canvasSize.height;
              }
              context.moveTo(pos1.x, pos1.y);
              context.lineTo(pos2.x + sx, pos2.y + sy);
              context.moveTo(pos1.x - sx, pos1.y - sy);
              context.lineTo(pos2.x, pos2.y);
            } else {
              context.moveTo(pos1.x, pos1.y);
              context.lineTo(pos2.x, pos2.y);
            }
          }
          flushLines();
          context.globalAlpha = originalAlpha;
        }
        init() {
          this.#freqs.links.clear();
          this.#freqs.triangles.clear();
          this.#colorCache.clear();
          return Promise.resolve();
        }
        particleCreated(particle) {
          particle.links = [];
          if (!particle.options.links) {
            return;
          }
          particle.linksDistance = particle.options.links.distance;
          particle.linksWidth = particle.options.links.width;
          const ratio = this.#container.retina.pixelRatio;
          particle.retina.linksDistance = particle.linksDistance * ratio;
          particle.retina.linksWidth = particle.linksWidth * ratio;
        }
        particleDestroyed(particle) {
          particle.links = [];
        }
        #drawTriangles(options, p1, link, p1Destinations, pos1, pos2, context) {
          const p2 = link.destination, triangleOptions = options.links?.triangles;
          if (!triangleOptions?.enable || !p2.options.links?.triangles.enable) {
            return;
          }
          const p2Links = p2.links;
          if (!p2Links?.length) {
            return;
          }
          for (const vertex of p2Links) {
            if (vertex.isWarped || this.#getLinkFrequency(p2, vertex.destination) > p2.options.links.frequency || !p1Destinations.has(vertex.destination.id)) {
              continue;
            }
            const p3 = vertex.destination;
            if (this.#getTriangleFrequency(p1, p2, p3) > (options.links?.triangles.frequency ?? defaultFrequency)) {
              continue;
            }
            const opacityTriangle = triangleOptions.opacity ?? (link.opacity + vertex.opacity) * half, colorTriangle = rangeColorToRgb(this.#pluginManager, triangleOptions.color) ?? link.color;
            if (!colorTriangle || opacityTriangle <= minOpacity2) {
              continue;
            }
            const pos3 = p3.getPosition();
            context.save();
            context.fillStyle = this.#getCachedStyle(colorTriangle);
            context.globalAlpha = opacityTriangle;
            context.beginPath();
            context.moveTo(pos1.x, pos1.y);
            context.lineTo(pos2.x, pos2.y);
            context.lineTo(pos3.x, pos3.y);
            context.closePath();
            context.fill();
            context.restore();
          }
        }
        #getCachedStyle(rgb) {
          const key = `${rgb.r},${rgb.g},${rgb.b}-${this.#container.hdr}-${this.#container.peakNits}-${this.#container.hdrMode}`;
          let style = this.#colorCache.get(key);
          if (!style) {
            style = getStyleFromRgb(rgb, this.#container.hdr, void 0, this.#container.peakNits, this.#container.hdrMode);
            this.#colorCache.set(key, style);
          }
          return style;
        }
        #getLinkFrequency(p1, p2) {
          return setLinkFrequency([p1, p2], this.#freqs.links);
        }
        #getTriangleFrequency(p1, p2, p3) {
          return setLinkFrequency([p1, p2, p3], this.#freqs.triangles);
        }
      };
    }
  });

  // site-particles.ts
  init_browser2();

  // node_modules/@tsparticles/plugin-interactivity/browser/index.js
  init_browser2();

  // node_modules/@tsparticles/plugin-interactivity/browser/ErrorCodes.js
  var ErrorCodes2 = {
    interactivityPluginNotLoaded: "TSP-3201",
    interactivityClickHandlerNotSet: "TSP-3202"
  };

  // node_modules/@tsparticles/plugin-interactivity/browser/ErrorMessages.js
  var ErrorMessages = {
    [ErrorCodes2.interactivityPluginNotLoaded]: "tsParticles Interactivity Plugin is not loaded",
    [ErrorCodes2.interactivityClickHandlerNotSet]: "Click handlers can only be set after calling tsParticles.load()"
  };

  // node_modules/@tsparticles/plugin-interactivity/browser/InteractivityPlugin.js
  init_browser2();
  init_Interactivity();
  var InteractivityPlugin = class {
    id = "interactivity";
    #pluginManager;
    constructor(pluginManager) {
      this.#pluginManager = pluginManager;
    }
    async getPlugin(container) {
      const { InteractivityPluginInstance: InteractivityPluginInstance2 } = await Promise.resolve().then(() => (init_InteractivityPluginInstance(), InteractivityPluginInstance_exports));
      return new InteractivityPluginInstance2(this.#pluginManager, container);
    }
    loadOptions(container, options, source) {
      if (!this.needsPlugin()) {
        return;
      }
      let interactivityOptions = options.interactivity;
      if (!interactivityOptions?.load) {
        options.interactivity = interactivityOptions = new Interactivity(container);
      }
      interactivityOptions.load(source?.interactivity);
      const interactors = container.interactionManager?.interactors;
      if (!interactors) {
        return;
      }
      for (const interactor of interactors) {
        if (interactor.loadOptions) {
          interactor.loadOptions(options, source);
        }
      }
    }
    loadParticlesOptions(container, options, source) {
      if (source?.interactivity) {
        options.interactivity = deepExtend({}, source.interactivity);
      }
      const interactors = container.interactionManager?.interactors;
      if (!interactors) {
        return;
      }
      for (const interactor of interactors) {
        interactor.loadParticlesOptions?.(options, source);
      }
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/plugin-interactivity/browser/BaseClasses/ExternalInteractorBase.js
  init_InteractorType();
  var ExternalInteractorBase = class {
    type = InteractorType.external;
    container;
    constructor(container) {
      this.container = container;
    }
  };

  // node_modules/@tsparticles/plugin-interactivity/browser/BaseClasses/ParticlesInteractorBase.js
  init_InteractorType();
  var ParticlesInteractorBase = class {
    type = InteractorType.particles;
    container;
    constructor(container) {
      this.container = container;
    }
  };

  // node_modules/@tsparticles/plugin-interactivity/browser/index.js
  init_InteractivityConstants();
  init_DivType();
  init_InteractivityDetect();
  init_InteractorType();

  // node_modules/@tsparticles/plugin-interactivity/browser/utils.js
  init_browser2();
  function findItemFromSingleOrMultiple(obj, callback) {
    if (isArray(obj)) {
      return obj.find((t, index) => callback(t, index));
    }
    const defaultIndex3 = 0;
    return callback(obj, defaultIndex3) ? obj : void 0;
  }
  function checkSelector(element, selectors) {
    const res = executeOnSingleOrMultiple(selectors, (selector) => {
      return element.matches(selector);
    });
    return isArray(res) ? res.some((t) => t) : res;
  }
  function isDivModeEnabled(mode, divs) {
    return !!findItemFromSingleOrMultiple(divs, (t) => t.enable && isInArray(mode, t.mode));
  }
  function divModeExecute(mode, divs, callback) {
    executeOnSingleOrMultiple(divs, (div) => {
      const divMode2 = div.mode, divEnabled = div.enable;
      if (divEnabled && isInArray(mode, divMode2)) {
        singleDivModeExecute(div, callback);
      }
    });
  }
  function singleDivModeExecute(div, callback) {
    const selectors = div.selectors;
    executeOnSingleOrMultiple(selectors, (selector) => {
      callback(selector, div);
    });
  }
  function divMode(divs, element) {
    if (!element || !divs) {
      return;
    }
    return findItemFromSingleOrMultiple(divs, (div) => {
      return checkSelector(element, div.selectors);
    });
  }

  // node_modules/@tsparticles/plugin-interactivity/browser/index.js
  init_DivEvent();
  init_Modes();
  async function loadInteractivityPlugin(engine) {
    engine.checkVersion("4.6.0");
    if (typeof process !== "undefined" && true) {
      addErrorMessages(ErrorMessages);
    }
    await engine.pluginManager.register((e) => {
      const interactivityEngine = e, interactivityPluginManager = interactivityEngine.pluginManager;
      interactivityPluginManager.addPlugin(new InteractivityPlugin(interactivityPluginManager));
      interactivityPluginManager.initializers.interactors ??= /* @__PURE__ */ new Map();
      interactivityPluginManager.addInteractor = (name, interactorInitializer) => {
        if (interactivityPluginManager.initialized) {
          return;
        }
        interactivityPluginManager.initializers.interactors ??= /* @__PURE__ */ new Map();
        interactivityPluginManager.initializers.interactors.set(name, interactorInitializer);
      };
      interactivityPluginManager.setOnClickHandler = (callback) => {
        const { items } = interactivityEngine;
        if (!items.length) {
          throw new Error(getErrorMessage(ErrorCodes2.interactivityClickHandlerNotSet));
        }
        items.forEach((item) => {
          const interactivityContainer = item;
          interactivityContainer.addClickHandler?.(callback);
        });
      };
    });
  }
  function ensureInteractivityPluginLoaded(e) {
    if (!e.pluginManager.addInteractor) {
      throw new Error(getErrorMessage(ErrorCodes2.interactivityPluginNotLoaded));
    }
  }

  // node_modules/@tsparticles/plugin-interactivity/browser/browser.js
  var globalObject2 = globalThis;
  globalObject2.__tsParticlesInternals = globalObject2.__tsParticlesInternals ?? {};
  globalObject2.loadInteractivityPlugin = loadInteractivityPlugin;

  // node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersInteractor.js
  init_browser2();
  init_Absorber();
  var absorbersMode = "absorbers";
  var absorberSplitMode = "absorber-split";
  var AbsorbersInteractor = class extends ExternalInteractorBase {
    handleClickMode;
    maxDistance;
    #dragging = false;
    #draggingAbsorber;
    #instancesManager;
    constructor(container, instancesManager) {
      super(container);
      this.maxDistance = 0;
      this.#instancesManager = instancesManager;
      this.#instancesManager.initContainer(container);
      this.handleClickMode = (mode, interactivityData) => {
        const container2 = this.container, options = container2.actualOptions, absorbers = options.interactivity.modes.absorbers, { clickPosition } = interactivityData.mouse;
        if (mode === absorberSplitMode) {
          if (!clickPosition) {
            return;
          }
          let target, nearestDistanceSq = Infinity;
          for (const absorber of instancesManager.getArray(container2)) {
            const distanceSq = getDistanceSq(absorber.position, clickPosition);
            if (absorber.size > 0 && distanceSq < absorber.size * absorber.size && distanceSq < nearestDistanceSq) {
              target = absorber;
              nearestDistanceSq = distanceSq;
            }
          }
          if (target?.options.split.enable) {
            this.#instancesManager.splitAbsorber(container2, target);
          }
          return;
        }
        if (mode !== absorbersMode || !absorbers) {
          return;
        }
        if (clickPosition) {
          const existingAbsorber = instancesManager.getArray(container2).some((t) => t.size > 0 && getDistanceSq(t.position, clickPosition) < t.size * t.size);
          if (existingAbsorber) {
            return;
          }
        }
        const absorbersModeOptions = itemFromArray(absorbers) ?? new Absorber();
        void this.#instancesManager.addAbsorber(container2, absorbersModeOptions, clickPosition);
      };
    }
    clear() {
    }
    init() {
    }
    interact(interactivityData, _delta) {
      const absorbers = this.#instancesManager.getArray(this.container), mouse = interactivityData.mouse;
      for (const absorber of absorbers) {
        if (!absorber.options.draggable) {
          continue;
        }
        if (mouse.clicking && mouse.downPosition) {
          if (!this.#dragging) {
            if (absorber.size >= 0 && getDistanceSq(absorber.position, mouse.downPosition) <= absorber.size * absorber.size) {
              this.#dragging = true;
              this.#draggingAbsorber = absorber;
            }
          }
        } else {
          this.#dragging = false;
          this.#draggingAbsorber = void 0;
        }
        if (this.#dragging && this.#draggingAbsorber === absorber && mouse.position) {
          absorber.position.x = mouse.position.x;
          absorber.position.y = mouse.position.y;
        }
      }
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity).events;
      if (!mouse.clicking && this.#dragging) {
        this.#dragging = false;
        this.#draggingAbsorber = void 0;
      }
      if (!particle && mouse.clicking && this.#instancesManager.getArray(container).some((absorber) => absorber.options.draggable)) {
        return true;
      }
      if (!mouse.clickPosition || !events.onClick.enable) {
        return false;
      }
      return isInArray(absorbersMode, events.onClick.mode) || isInArray(absorberSplitMode, events.onClick.mode);
    }
    loadModeOptions(options, ...sources) {
      options.absorbers ??= [];
      for (const source of sources) {
        if (!source) {
          continue;
        }
        if (isArray(source.absorbers)) {
          for (const absorber of source.absorbers) {
            const tmp = new Absorber();
            tmp.load(absorber);
            options.absorbers.push(tmp);
          }
        } else {
          const tmp = new Absorber();
          tmp.load(source.absorbers);
          options.absorbers.push(tmp);
        }
      }
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/plugin-absorbers/browser/getAbsorbersInstancesManager.js
  var instancesManagers = /* @__PURE__ */ new WeakMap();
  function getAbsorbersInstancesManager(e) {
    const pluginManager = e.pluginManager;
    let manager = instancesManagers.get(pluginManager);
    if (!manager) {
      manager = Promise.resolve().then(() => (init_AbsorbersInstancesManager(), AbsorbersInstancesManager_exports)).then(({ AbsorbersInstancesManager: AbsorbersInstancesManager2 }) => new AbsorbersInstancesManager2(pluginManager)).catch((error) => {
        instancesManagers.delete(pluginManager);
        throw error;
      });
      instancesManagers.set(pluginManager, manager);
    }
    return manager;
  }

  // node_modules/@tsparticles/plugin-absorbers/browser/interaction.js
  init_Absorber();
  init_AbsorberLife();
  init_AbsorberSize();
  init_AbsorberSizeLimit();
  init_AbsorberSplit();
  async function loadAbsorbersInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register(async (e) => {
      const pluginManager = e.pluginManager, instancesManager = await getAbsorbersInstancesManager(e);
      ensureInteractivityPluginLoaded(e);
      pluginManager.addInteractor?.("externalAbsorbers", (container) => {
        return Promise.resolve(new AbsorbersInteractor(container, instancesManager));
      });
    });
  }

  // node_modules/@tsparticles/plugin-absorbers/browser/AbsorbersPlugin.js
  init_browser2();
  init_Absorber();
  var AbsorbersPlugin = class {
    id = "absorbers";
    #instancesManager;
    constructor(instancesManager) {
      this.#instancesManager = instancesManager;
    }
    async getPlugin(container) {
      const { AbsorbersPluginInstance: AbsorbersPluginInstance2 } = await Promise.resolve().then(() => (init_AbsorbersPluginInstance(), AbsorbersPluginInstance_exports));
      return new AbsorbersPluginInstance2(container, this.#instancesManager);
    }
    loadOptions(_container, options, source) {
      if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
        return;
      }
      if (source?.absorbers) {
        options.absorbers = executeOnSingleOrMultiple(source.absorbers, (absorber) => {
          const tmp = new Absorber();
          tmp.load(absorber);
          return tmp;
        });
      }
    }
    needsPlugin(options) {
      if (!options) {
        return false;
      }
      const absorbers = options.absorbers;
      if (isArray(absorbers)) {
        return !!absorbers.length;
      } else if (absorbers) {
        return true;
      }
      return false;
    }
  };

  // node_modules/@tsparticles/plugin-absorbers/browser/plugin.js
  init_Absorber();
  init_AbsorberLife();
  init_AbsorberSize();
  init_AbsorberSizeLimit();
  init_AbsorberSplit();
  async function loadAbsorbersPluginSimple(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register(async (e) => {
      const pluginManager = e.pluginManager, instancesManager = await getAbsorbersInstancesManager(e);
      pluginManager.addPlugin(new AbsorbersPlugin(instancesManager));
    });
  }

  // node_modules/@tsparticles/plugin-absorbers/browser/index.js
  init_Absorber();
  init_AbsorberLife();
  init_AbsorberSize();
  init_AbsorberSizeLimit();
  init_AbsorberSplit();
  async function loadAbsorbersPlugin(engine) {
    await loadAbsorbersPluginSimple(engine);
    await loadAbsorbersInteraction(engine);
  }

  // node_modules/@tsparticles/plugin-absorbers/browser/browser.js
  var globalObject3 = globalThis;
  globalObject3.__tsParticlesInternals = globalObject3.__tsParticlesInternals ?? {};
  globalObject3.loadAbsorbersPlugin = loadAbsorbersPlugin;

  // node_modules/@tsparticles/updater-destroy/browser/DestroyUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-destroy/browser/Options/Classes/Destroy.js
  init_browser2();

  // node_modules/@tsparticles/updater-destroy/browser/Options/Classes/DestroyBounds.js
  init_browser2();
  var DestroyBounds = class {
    bottom;
    left;
    right;
    top;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "bottom", data.bottom);
      loadRangeProperty(this, "left", data.left);
      loadRangeProperty(this, "right", data.right);
      loadRangeProperty(this, "top", data.top);
    }
  };

  // node_modules/@tsparticles/updater-destroy/browser/Enums/DestroyMode.js
  var DestroyMode;
  (function(DestroyMode2) {
    DestroyMode2["explode"] = "explode";
    DestroyMode2["none"] = "none";
    DestroyMode2["split"] = "split";
  })(DestroyMode || (DestroyMode = {}));

  // node_modules/@tsparticles/updater-destroy/browser/Options/Classes/Explode.js
  init_browser2();
  var Explode = class {
    maxSizeFactor = 3;
    speed = 2;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "maxSizeFactor", data.maxSizeFactor);
      loadProperty(this, "speed", data.speed);
    }
  };

  // node_modules/@tsparticles/updater-destroy/browser/Options/Classes/Split.js
  init_browser2();

  // node_modules/@tsparticles/updater-destroy/browser/Options/Classes/SplitFactor.js
  init_browser2();
  var SplitFactor = class extends ValueWithRandom {
    value = 3;
  };

  // node_modules/@tsparticles/updater-destroy/browser/Options/Classes/SplitRate.js
  init_browser2();
  var SplitRate = class extends ValueWithRandom {
    value = { min: 4, max: 9 };
  };

  // node_modules/@tsparticles/updater-destroy/browser/Options/Classes/Split.js
  var Split = class {
    count = 1;
    factor = new SplitFactor();
    fillColor;
    fillColorOffset;
    particles;
    rate = new SplitRate();
    sizeOffset = true;
    strokeColor;
    strokeColorOffset;
    load(data) {
      if (isNull(data)) {
        return;
      }
      if (data.fillColor !== void 0) {
        this.fillColor = OptionsColor.create(this.fillColor, data.fillColor);
      }
      if (data.strokeColor !== void 0) {
        this.strokeColor = OptionsColor.create(this.strokeColor, data.strokeColor);
      }
      loadProperty(this, "count", data.count);
      this.factor.load(data.factor);
      this.rate.load(data.rate);
      this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
        return deepExtend({}, particles);
      });
      loadProperty(this, "sizeOffset", data.sizeOffset);
      if (data.fillColorOffset) {
        this.fillColorOffset = this.fillColorOffset ?? {};
        if (data.fillColorOffset.h !== void 0) {
          this.fillColorOffset.h = data.fillColorOffset.h;
        }
        if (data.fillColorOffset.s !== void 0) {
          this.fillColorOffset.s = data.fillColorOffset.s;
        }
        if (data.fillColorOffset.l !== void 0) {
          this.fillColorOffset.l = data.fillColorOffset.l;
        }
      }
      if (data.strokeColorOffset) {
        this.strokeColorOffset = this.strokeColorOffset ?? {};
        if (data.strokeColorOffset.h !== void 0) {
          this.strokeColorOffset.h = data.strokeColorOffset.h;
        }
        if (data.strokeColorOffset.s !== void 0) {
          this.strokeColorOffset.s = data.strokeColorOffset.s;
        }
        if (data.strokeColorOffset.l !== void 0) {
          this.strokeColorOffset.l = data.strokeColorOffset.l;
        }
      }
    }
  };

  // node_modules/@tsparticles/updater-destroy/browser/Options/Classes/Destroy.js
  var Destroy = class {
    bounds = new DestroyBounds();
    explode = new Explode();
    mode = DestroyMode.none;
    split = new Split();
    load(data) {
      if (isNull(data)) {
        return;
      }
      if (data.mode) {
        this.mode = data.mode;
      }
      if (data.bounds) {
        this.bounds.load(data.bounds);
      }
      this.explode.load(data.explode);
      this.split.load(data.split);
    }
  };

  // node_modules/@tsparticles/updater-destroy/browser/Utils.js
  init_browser2();
  var defaultOffset = 0;
  var minDestroySize = 0.5;
  var defaultSplitCount = 0;
  var increment = 1;
  var unbreakableTime = 500;
  var minSplitCount = 0;
  var minHue = 0;
  var hueRange = 360;
  var minSaturation = 0;
  var maxSaturation = 100;
  var minLightness = 0;
  var maxLightness = 100;
  function createParentColor(parentColor) {
    return AnimatableColor.create(void 0, {
      value: {
        hsl: parentColor
      }
    });
  }
  function createOffsetColor(parentColor, offset) {
    const offsetH = getRangeValue(offset.h ?? defaultOffset), offsetS = getRangeValue(offset.s ?? defaultOffset), offsetL = getRangeValue(offset.l ?? defaultOffset), h = (parentColor.h + offsetH) % hueRange, s = Math.max(minSaturation, Math.min(maxSaturation, parentColor.s + offsetS)), l = Math.max(minLightness, Math.min(maxLightness, parentColor.l + offsetL));
    return AnimatableColor.create(void 0, {
      value: {
        hsl: {
          h: h < minHue ? h + hueRange : h,
          s,
          l
        }
      }
    });
  }
  function resolveSplitColor(offset, splitColor, splitParticlesColor, parentColor) {
    if (offset && parentColor) {
      return createOffsetColor(parentColor, offset);
    }
    if (splitColor) {
      return AnimatableColor.create(void 0, splitColor);
    }
    if (splitParticlesColor) {
      return AnimatableColor.create(void 0, splitParticlesColor);
    }
    return parentColor ? createParentColor(parentColor) : void 0;
  }
  function addSplitParticle(pluginManager, container, parent, splitParticlesOptions) {
    const destroyOptions = parent.options.destroy;
    if (!destroyOptions) {
      return;
    }
    const splitOptions = destroyOptions.split, splitParticleOptions = loadParticlesOptions(pluginManager, container, parent.options), splitFillColor = itemFromSingleOrMultiple(splitOptions.fillColor), splitStrokeColor = itemFromSingleOrMultiple(splitOptions.strokeColor), parentFillColor = parent.getFillColor(), parentStrokeColor = parent.getStrokeColor();
    splitParticleOptions.move.load({
      center: {
        x: parent.position.x,
        y: parent.position.y,
        mode: PixelMode.precise
      }
    });
    const factor = identity / getRangeValue(splitOptions.factor.value), sizeOptions = splitParticleOptions["size"];
    if (sizeOptions) {
      if (isNumber(sizeOptions.value)) {
        sizeOptions.value *= factor;
      } else {
        sizeOptions.value.min *= factor;
        sizeOptions.value.max *= factor;
      }
    }
    splitParticleOptions.load(splitParticlesOptions);
    const splitParticlePaintOptions = itemFromSingleOrMultiple(splitParticleOptions.paint), splitParticleFillOptions = splitParticlePaintOptions?.fill, splitParticleStrokeOptions = splitParticlePaintOptions?.stroke, fillColor = resolveSplitColor(splitOptions.fillColorOffset, splitFillColor, splitParticleFillOptions?.color, parentFillColor), strokeColor = resolveSplitColor(splitOptions.strokeColorOffset, splitStrokeColor, splitParticleStrokeOptions?.color, parentStrokeColor);
    if (fillColor && splitParticleFillOptions) {
      splitParticleFillOptions.color = fillColor;
    }
    if (strokeColor && splitParticleStrokeOptions) {
      splitParticleStrokeOptions.color = strokeColor;
    }
    const offset = splitOptions.sizeOffset ? setRangeValue(-parent.size.value, parent.size.value) : defaultOffset, position = {
      x: parent.position.x + randomInRangeValue(offset),
      y: parent.position.y + randomInRangeValue(offset)
    };
    return container.particles.addParticle(position, splitParticleOptions, parent.group, (particle) => {
      if (particle.size.value < minDestroySize) {
        return false;
      }
      particle.velocity.length = randomInRangeValue(setRangeValue(parent.velocity.length, particle.velocity.length));
      particle.splitCount = (parent.splitCount ?? defaultSplitCount) + increment;
      particle.unbreakable = true;
      particle.unbreakableUntil = performance.now() + unbreakableTime;
      return true;
    });
  }
  function split(pluginManager, container, particle) {
    const destroyOptions = particle.options.destroy;
    if (!destroyOptions) {
      return;
    }
    const splitOptions = destroyOptions.split;
    if (splitOptions.count >= minSplitCount) {
      if (particle.splitCount === void 0 || particle.splitCount > splitOptions.count) {
        return;
      }
      particle.splitCount++;
    }
    const rate = getRangeValue(splitOptions.rate.value), particlesSplitOptions = itemFromSingleOrMultiple(splitOptions.particles);
    for (let i = 0; i < rate; i++) {
      addSplitParticle(pluginManager, container, particle, particlesSplitOptions);
    }
  }

  // node_modules/@tsparticles/updater-destroy/browser/DestroyUpdater.js
  var defaultDeltaFactor = 1;
  var fpsFactor = 60;
  var minExplodeSpeed = 0.01;
  var maxExplodeProgress = 1;
  var DestroyUpdater = class {
    #container;
    #pluginManager;
    constructor(pluginManager, container) {
      this.#container = container;
      this.#pluginManager = pluginManager;
    }
    init(particle) {
      const container = this.#container, particlesOptions = particle.options, destroyOptions = particlesOptions.destroy;
      if (!destroyOptions) {
        return;
      }
      particle.exploding = void 0;
      particle.splitCount = 0;
      const destroyBoundsOptions = destroyOptions.bounds;
      particle.destroyBounds ??= {};
      const { bottom, left, right, top } = destroyBoundsOptions, { destroyBounds } = particle, canvasSize = container.canvas.size;
      if (bottom) {
        destroyBounds.bottom = getRangeValue(bottom) * canvasSize.height / percentDenominator;
      }
      if (left) {
        destroyBounds.left = getRangeValue(left) * canvasSize.width / percentDenominator;
      }
      if (right) {
        destroyBounds.right = getRangeValue(right) * canvasSize.width / percentDenominator;
      }
      if (top) {
        destroyBounds.top = getRangeValue(top) * canvasSize.height / percentDenominator;
      }
    }
    isEnabled(particle) {
      const destroyParticle = particle;
      return !destroyParticle.destroyed || !!destroyParticle.exploding;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "destroy", Destroy, ...sources);
    }
    particleDestroyed(particle, override) {
      if (override) {
        return;
      }
      const destroyOptions = particle.options.destroy;
      switch (destroyOptions?.mode) {
        case DestroyMode.split:
          split(this.#pluginManager, this.#container, particle);
          break;
        case DestroyMode.explode: {
          if (particle.exploding) {
            particle.destroyed = false;
            break;
          }
          const { explode } = destroyOptions, initialSize = particle.size.value, maxSize = initialSize * explode.maxSizeFactor, opacity = particle.getOpacity();
          particle.exploding = {
            initialFillOpacity: opacity.fillOpacity,
            initialSize,
            initialStrokeOpacity: opacity.strokeOpacity,
            maxSize,
            progress: 0,
            speed: Math.max(explode.speed, minExplodeSpeed)
          };
          particle.fillOpacity = opacity.fillOpacity;
          particle.strokeOpacity = opacity.strokeOpacity;
          particle.destroyed = false;
          break;
        }
        default:
          break;
      }
    }
    update(particle, delta) {
      if (particle.exploding) {
        const explosionState = particle.exploding, deltaFactor = delta.factor || defaultDeltaFactor;
        explosionState.progress = Math.min(maxExplodeProgress, explosionState.progress + explosionState.speed * deltaFactor / fpsFactor);
        const progress = explosionState.progress;
        particle.size.value = explosionState.initialSize + (explosionState.maxSize - explosionState.initialSize) * progress;
        particle.fillOpacity = explosionState.initialFillOpacity * (maxExplodeProgress - progress);
        particle.strokeOpacity = explosionState.initialStrokeOpacity * (maxExplodeProgress - progress);
        if (progress >= maxExplodeProgress) {
          particle.exploding = void 0;
          particle.destroy(true);
        }
        return;
      }
      if (particle.unbreakableUntil !== void 0 && performance.now() >= particle.unbreakableUntil) {
        particle.unbreakable = false;
        particle.unbreakableUntil = void 0;
      }
      const position = particle.getPosition(), bounds = particle.destroyBounds;
      if (!bounds) {
        return;
      }
      if (bounds.bottom !== void 0 && position.y >= bounds.bottom || bounds.left !== void 0 && position.x <= bounds.left || bounds.right !== void 0 && position.x >= bounds.right || bounds.top !== void 0 && position.y <= bounds.top) {
        particle.destroy();
      }
    }
  };

  // node_modules/@tsparticles/updater-destroy/browser/index.js
  async function loadDestroyUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("destroy", (container) => {
        return Promise.resolve(new DestroyUpdater(e.pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/updater-destroy/browser/browser.js
  var globalObject4 = globalThis;
  globalObject4.__tsParticlesInternals = globalObject4.__tsParticlesInternals ?? {};
  globalObject4.loadDestroyUpdater = loadDestroyUpdater;

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersInteractor.js
  init_browser2();
  init_Emitter();

  // node_modules/@tsparticles/plugin-emitters/browser/Enums/EmitterClickMode.js
  var EmitterClickMode;
  (function(EmitterClickMode2) {
    EmitterClickMode2["emitter"] = "emitter";
  })(EmitterClickMode || (EmitterClickMode = {}));

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersInteractor.js
  init_EmittersPluginInstance();

  // node_modules/@tsparticles/plugin-emitters/browser/constants.js
  var defaultRandomOptions = {
    count: 1,
    enable: true
  };

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersInteractor.js
  var emittersMode = EmitterClickMode.emitter;
  var EmittersInteractor = class extends ExternalInteractorBase {
    handleClickMode;
    maxDistance;
    #dragging = false;
    #draggingEmitter;
    #instancesManager;
    constructor(instancesManager, container) {
      super(container);
      this.#instancesManager = instancesManager;
      this.maxDistance = 0;
      this.handleClickMode = (mode, interactivityData) => {
        const container2 = this.container, options = container2.actualOptions, modeEmitters = options.interactivity.modes.emitters;
        if (!modeEmitters || mode !== emittersMode) {
          return;
        }
        let emittersModeOptions;
        if (isArray(modeEmitters.value)) {
          const minLength3 = 0, modeEmittersCount = modeEmitters.value.length;
          if (modeEmittersCount > minLength3 && modeEmitters.random.enable) {
            emittersModeOptions = [];
            const usedIndexes = /* @__PURE__ */ new Set();
            for (let i = 0; i < modeEmitters.random.count; i++) {
              const idx = Math.floor(getRandom() * modeEmitters.value.length);
              if (usedIndexes.has(idx) && usedIndexes.size < modeEmittersCount) {
                i--;
                continue;
              }
              usedIndexes.add(idx);
              const selectedOptions = itemFromArray(modeEmitters.value, idx);
              if (!selectedOptions) {
                continue;
              }
              emittersModeOptions.push(selectedOptions);
            }
          } else {
            emittersModeOptions = modeEmitters.value;
          }
        } else {
          emittersModeOptions = modeEmitters.value;
        }
        const emittersOptions = emittersModeOptions, ePosition = interactivityData.mouse.clickPosition;
        void executeOnSingleOrMultiple(emittersOptions, async (emitter) => {
          await this.#instancesManager.addEmitter(this.container, emitter, ePosition);
        });
      };
    }
    clear() {
    }
    init() {
    }
    interact(interactivityData, delta) {
      const container = this.container, emitters = this.#instancesManager.getArray(container), updateEmitters = !container.plugins.some((plugin) => plugin instanceof EmittersPluginInstance);
      if (!interactivityData.mouse.clicking) {
        this.#dragging = false;
        this.#draggingEmitter = void 0;
      }
      for (const emitter of emitters) {
        if (emitter.options.draggable && !emitter.options.domId) {
          const mouse = interactivityData.mouse;
          if (mouse.clicking && mouse.downPosition) {
            if (!this.#dragging) {
              const inside = Math.abs(mouse.downPosition.x - emitter.position.x) <= emitter.size.width * half && Math.abs(mouse.downPosition.y - emitter.position.y) <= emitter.size.height * half;
              if (inside) {
                this.#dragging = true;
                this.#draggingEmitter = emitter;
              }
            }
          }
          if (this.#dragging && this.#draggingEmitter === emitter && mouse.position) {
            emitter.setPosition(mouse.position);
          }
        }
        if (updateEmitters) {
          emitter.update(delta);
        }
      }
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity).events;
      if (!mouse.clicking && this.#dragging) {
        this.#dragging = false;
        this.#draggingEmitter = void 0;
      }
      if (this.#dragging) {
        return true;
      }
      if (mouse.clicking && this.#instancesManager.getArray(container).some((emitter) => emitter.options.draggable && !emitter.options.domId)) {
        return true;
      }
      if (!mouse.clickPosition || !events.onClick.enable) {
        return false;
      }
      return isInArray(emittersMode, events.onClick.mode);
    }
    loadModeOptions(options, ...sources) {
      options.emitters = {
        random: defaultRandomOptions,
        value: []
      };
      for (const source of sources) {
        if (!source?.emitters) {
          continue;
        }
        if (isArray(source.emitters)) {
          for (const emitter of source.emitters) {
            const tmp = new Emitter();
            tmp.load(emitter);
            options.emitters.value.push(tmp);
          }
        } else if ("value" in source.emitters) {
          const emitterModeOptions = source.emitters;
          options.emitters.random.enable = emitterModeOptions.random?.enable ?? options.emitters.random.enable;
          options.emitters.random.count = emitterModeOptions.random?.count ?? options.emitters.random.count;
          if (isArray(emitterModeOptions.value)) {
            for (const emitter of emitterModeOptions.value) {
              const tmp = new Emitter();
              tmp.load(emitter);
              options.emitters.value.push(tmp);
            }
          } else {
            const tmp = new Emitter();
            tmp.load(emitterModeOptions.value);
            options.emitters.value.push(tmp);
          }
        } else {
          const tmp = new Emitter();
          tmp.load(source.emitters);
          options.emitters.value.push(tmp);
        }
      }
    }
    removeEmitter(emitter) {
      const index = this.#instancesManager.getArray(this.container).indexOf(emitter), deleteCount2 = 1;
      if (index >= minIndex) {
        this.#instancesManager.getArray(this.container).splice(index, deleteCount2);
      }
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/addEmittersShapesManager.js
  async function addEmittersShapesManager(e) {
    const { ShapeManager: ShapeManager2 } = await Promise.resolve().then(() => (init_ShapeManager(), ShapeManager_exports)), pluginManager = e.pluginManager;
    pluginManager.emitterShapeManager ??= new ShapeManager2();
    pluginManager.addEmitterShapeGenerator ??= (name, generator) => {
      pluginManager.emitterShapeManager?.addShapeGenerator(name, generator);
    };
  }

  // node_modules/@tsparticles/plugin-emitters/browser/getEmittersInstancesManager.js
  var instancesManagers2 = /* @__PURE__ */ new WeakMap();
  function getEmittersInstancesManager(e) {
    const pluginManager = e.pluginManager;
    let manager = instancesManagers2.get(pluginManager);
    if (!manager) {
      manager = Promise.resolve().then(() => (init_EmittersInstancesManager(), EmittersInstancesManager_exports)).then(({ EmittersInstancesManager: EmittersInstancesManager2 }) => new EmittersInstancesManager2(pluginManager)).catch((error) => {
        instancesManagers2.delete(pluginManager);
        throw error;
      });
      instancesManagers2.set(pluginManager, manager);
    }
    return manager;
  }

  // node_modules/@tsparticles/plugin-emitters/browser/EmitterShapeBase.js
  var EmitterShapeBase = class {
    fill;
    options;
    position;
    size;
    constructor(position, size, fill, options) {
      this.position = position;
      this.size = size;
      this.fill = fill;
      this.options = options;
    }
    draw(_context) {
    }
    resize(position, size) {
      this.position = position;
      this.size = size;
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/interaction.js
  async function loadEmittersInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register(async (e) => {
      const instancesManager = await getEmittersInstancesManager(e);
      ensureInteractivityPluginLoaded(e);
      await addEmittersShapesManager(e);
      e.pluginManager.addInteractor?.("externalEmitters", (container) => {
        return Promise.resolve(new EmittersInteractor(instancesManager, container));
      });
    });
  }

  // node_modules/@tsparticles/plugin-emitters/browser/EmittersPlugin.js
  init_browser2();
  init_Emitter();
  var EmittersPlugin = class {
    id = "emitters";
    #instancesManager;
    constructor(instancesManager) {
      this.#instancesManager = instancesManager;
    }
    async getPlugin(container) {
      const { EmittersPluginInstance: EmittersPluginInstance2 } = await Promise.resolve().then(() => (init_EmittersPluginInstance(), EmittersPluginInstance_exports));
      return new EmittersPluginInstance2(this.#instancesManager, container);
    }
    loadOptions(_container, options, source) {
      if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
        return;
      }
      if (source?.emitters) {
        options.emitters = executeOnSingleOrMultiple(source.emitters, (emitter) => {
          const tmp = new Emitter();
          tmp.load(emitter);
          return tmp;
        });
      }
    }
    needsPlugin(options) {
      if (!options) {
        return false;
      }
      const emitters = options.emitters;
      return isArray(emitters) && !!emitters.length || emitters !== void 0;
    }
  };

  // node_modules/@tsparticles/plugin-emitters/browser/ErrorCodes.js
  var ErrorCodes3 = {
    emittersPluginNotLoaded: "TSP-3101"
  };

  // node_modules/@tsparticles/plugin-emitters/browser/ErrorMessages.js
  var ErrorMessages2 = {
    [ErrorCodes3.emittersPluginNotLoaded]: "tsParticles Emitters Plugin is not loaded"
  };

  // node_modules/@tsparticles/plugin-emitters/browser/plugin.js
  init_browser2();
  async function loadEmittersPluginSimple(engine) {
    engine.checkVersion("4.6.0");
    if (typeof process !== "undefined" && true) {
      addErrorMessages(ErrorMessages2);
    }
    await engine.pluginManager.register(async (e) => {
      const instancesManager = await getEmittersInstancesManager(e);
      await addEmittersShapesManager(e);
      e.pluginManager.addPlugin(new EmittersPlugin(instancesManager));
    });
  }

  // node_modules/@tsparticles/plugin-emitters/browser/ensureEmittersPluginLoaded.js
  init_browser2();
  function ensureEmittersPluginLoaded(e) {
    if (!e.pluginManager.addEmitterShapeGenerator) {
      throw new Error(getErrorMessage(ErrorCodes3.emittersPluginNotLoaded));
    }
  }

  // node_modules/@tsparticles/plugin-emitters/browser/index.js
  async function loadEmittersPlugin(engine) {
    await loadEmittersPluginSimple(engine);
    await loadEmittersInteraction(engine);
  }

  // node_modules/@tsparticles/plugin-emitters/browser/browser.js
  var globalObject5 = globalThis;
  globalObject5.__tsParticlesInternals = globalObject5.__tsParticlesInternals ?? {};
  globalObject5.loadEmittersPlugin = loadEmittersPlugin;

  // node_modules/@tsparticles/plugin-emitters-shape-circle/browser/EmittersCircleShape.js
  init_browser2();
  var EmittersCircleShape = class extends EmitterShapeBase {
    constructor(position, size, fill, options) {
      super(position, size, fill, options);
    }
    draw(context) {
      const position = this.position, size = this.size, rotation = 0, startAngle = 0, endAngle = doublePI;
      context.ellipse(position.x, position.y, size.width * half, size.height * half, rotation, startAngle, endAngle);
    }
    async init() {
    }
    randomPosition() {
      const size = this.size, fill = this.fill, position = this.position, generateTheta = (x, y) => {
        const u = getRandom() * quarter, theta = Math.atan(y / x * Math.tan(doublePI * u)), v = getRandom();
        if (v < quarter) {
          return theta;
        } else if (v < double * quarter) {
          return Math.PI - theta;
        } else if (v < double * quarter + quarter) {
          return Math.PI + theta;
        } else {
          return -theta;
        }
      }, radius = (x, y, theta) => x * y / Math.sqrt((y * Math.cos(theta)) ** squareExp + (x * Math.sin(theta)) ** squareExp), [a, b] = [size.width * half, size.height * half], randomTheta = generateTheta(a, b), maxRadius = radius(a, b, randomTheta), randomRadius = fill ? maxRadius * Math.sqrt(getRandom()) : maxRadius;
      return {
        position: {
          x: position.x + randomRadius * Math.cos(randomTheta),
          y: position.y + randomRadius * Math.sin(randomTheta)
        }
      };
    }
  };

  // node_modules/@tsparticles/plugin-emitters-shape-circle/browser/EmittersCircleShapeGenerator.js
  var EmittersCircleShapeGenerator = class {
    generate(_container, position, size, fill, options) {
      return new EmittersCircleShape(position, size, fill, options);
    }
  };

  // node_modules/@tsparticles/plugin-emitters-shape-circle/browser/index.js
  async function loadEmittersShapeCircle(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureEmittersPluginLoaded(e);
      e.pluginManager.addEmitterShapeGenerator?.("circle", new EmittersCircleShapeGenerator());
    });
  }

  // node_modules/@tsparticles/plugin-emitters-shape-circle/browser/browser.js
  var globalObject6 = globalThis;
  globalObject6.__tsParticlesInternals = globalObject6.__tsParticlesInternals ?? {};
  globalObject6.loadEmittersShapeCircle = loadEmittersShapeCircle;

  // node_modules/@tsparticles/plugin-emitters-shape-square/browser/EmittersSquareShape.js
  init_browser2();
  var sides = 4;
  var Sides;
  (function(Sides2) {
    Sides2[Sides2["TopLeft"] = 0] = "TopLeft";
    Sides2[Sides2["TopRight"] = 1] = "TopRight";
    Sides2[Sides2["BottomRight"] = 2] = "BottomRight";
    Sides2[Sides2["BottomLeft"] = 3] = "BottomLeft";
  })(Sides || (Sides = {}));
  function randomSquareCoordinate(position, offset) {
    return position + offset * (getRandom() - half);
  }
  function getRandomSize(sides7) {
    return toEnumValue(Sides, Math.floor(getRandom() * sides7), Sides.BottomLeft);
  }
  var EmittersSquareShape = class extends EmitterShapeBase {
    constructor(position, size, fill, options) {
      super(position, size, fill, options);
    }
    draw(context) {
      const position = this.position, size = this.size, halfW = size.width * half, halfH = size.height * half;
      context.rect(position.x - halfW, position.y - halfH, size.width, size.height);
    }
    async init() {
    }
    randomPosition() {
      const fill = this.fill, position = this.position, size = this.size;
      if (fill) {
        return {
          position: {
            x: randomSquareCoordinate(position.x, size.width),
            y: randomSquareCoordinate(position.y, size.height)
          }
        };
      } else {
        const halfW = size.width * half, halfH = size.height * half, side = getRandomSize(sides), v = (getRandom() - half) * double;
        switch (side) {
          case Sides.TopLeft:
            return {
              position: {
                x: position.x + v * halfW,
                y: position.y - halfH
              }
            };
          case Sides.TopRight:
            return {
              position: {
                x: position.x - halfW,
                y: position.y + v * halfH
              }
            };
          case Sides.BottomRight:
            return {
              position: {
                x: position.x + v * halfW,
                y: position.y + halfH
              }
            };
          case Sides.BottomLeft:
          default:
            return {
              position: {
                x: position.x + halfW,
                y: position.y + v * halfH
              }
            };
        }
      }
    }
  };

  // node_modules/@tsparticles/plugin-emitters-shape-square/browser/EmittersSquareShapeGenerator.js
  var EmittersSquareShapeGenerator = class {
    generate(_container, position, size, fill, options) {
      return new EmittersSquareShape(position, size, fill, options);
    }
  };

  // node_modules/@tsparticles/plugin-emitters-shape-square/browser/index.js
  async function loadEmittersShapeSquare(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureEmittersPluginLoaded(e);
      e.pluginManager.addEmitterShapeGenerator?.("square", new EmittersSquareShapeGenerator());
    });
  }

  // node_modules/@tsparticles/plugin-emitters-shape-square/browser/browser.js
  var globalObject7 = globalThis;
  globalObject7.__tsParticlesInternals = globalObject7.__tsParticlesInternals ?? {};
  globalObject7.loadEmittersShapeSquare = loadEmittersShapeSquare;

  // node_modules/@tsparticles/interaction-external-drag/browser/Options/Classes/Drag.js
  init_browser2();
  var defaultMomentumFactor = 0.03;
  var defaultPreserveMomentum = false;
  var Drag = class {
    momentumFactor = defaultMomentumFactor;
    preserveMomentum = defaultPreserveMomentum;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "momentumFactor", data.momentumFactor);
      loadProperty(this, "preserveMomentum", data.preserveMomentum);
    }
  };

  // node_modules/@tsparticles/interaction-external-drag/browser/Dragger.js
  init_browser2();
  var clickReleaseDelayMs = 50;
  var defaultMomentumFactor2 = 0.03;
  var dragMode = "drag";
  var firstSampleIndex = 0;
  var lastSampleOffset = 1;
  var maxMomentumSamples = 5;
  var minSamplesForMomentum = 2;
  var momentumToVelocityFactor = millisecondsToSeconds / defaultFps;
  var zeroValue = 0;
  var Dragger = class extends ExternalInteractorBase {
    maxDistance = 0;
    #draggedParticle;
    #dragStartClickingFalseTime;
    #dragStartClickTime;
    #grabOffset;
    #lastMousePosition;
    #momentumSamples = [];
    #mouseDownHandled = false;
    #savedVelocity;
    constructor(container) {
      super(container);
    }
    clear(_particle, _delta) {
    }
    init() {
    }
    interact(interactivityData, _delta) {
      const mouse = interactivityData.mouse, mousePos = mouse.position;
      if (mousePos) {
        this.#lastMousePosition = mousePos;
      }
      if (this.#draggedParticle) {
        const now = performance.now();
        if (!mouse.clicking) {
          this.#dragStartClickingFalseTime ??= now;
        } else {
          this.#dragStartClickingFalseTime = void 0;
        }
        const hasStableClickEndWithoutClickTime = this.#dragStartClickTime === void 0 && this.#dragStartClickingFalseTime !== void 0 && now - this.#dragStartClickingFalseTime >= clickReleaseDelayMs;
        if (!mouse.inside || this.#hasClickEnded(mouse) || hasStableClickEndWithoutClickTime) {
          this.#releaseDragged();
          this.#mouseDownHandled = false;
          return;
        }
        const pointerPos = mousePos ?? this.#lastMousePosition;
        if (!pointerPos) {
          return;
        }
        this.#momentumSamples.push({ x: pointerPos.x, y: pointerPos.y, t: now });
        if (this.#momentumSamples.length > maxMomentumSamples) {
          this.#momentumSamples.shift();
        }
        const targetX = pointerPos.x + (this.#grabOffset?.x ?? zeroValue), targetY = pointerPos.y + (this.#grabOffset?.y ?? zeroValue);
        this.#draggedParticle.position.x = targetX - this.#draggedParticle.offset.x;
        this.#draggedParticle.position.y = targetY - this.#draggedParticle.offset.y;
        this.#draggedParticle.velocity.x = zeroValue;
        this.#draggedParticle.velocity.y = zeroValue;
        this.#draggedParticle.initialPosition.x = this.#draggedParticle.position.x;
        this.#draggedParticle.initialPosition.y = this.#draggedParticle.position.y;
        this.#draggedParticle.misplaced = false;
        return;
      }
      if (!mouse.clicking) {
        this.#releaseDragged();
        this.#mouseDownHandled = false;
        return;
      }
      if (this.#mouseDownHandled) {
        return;
      }
      this.#mouseDownHandled = true;
      const downPos = mouse.downPosition ?? mousePos ?? this.#lastMousePosition, closest = this.#findParticleUnderCursor(interactivityData, downPos);
      if (!closest || !mousePos) {
        if (!closest) {
          this.#mouseDownHandled = false;
        }
        return;
      }
      const renderedPos = closest.getPosition();
      this.#draggedParticle = closest;
      this.#dragStartClickTime = mouse.clickTime;
      this.#grabOffset = {
        x: renderedPos.x - mousePos.x,
        y: renderedPos.y - mousePos.y
      };
      this.#savedVelocity = { x: closest.velocity.x, y: closest.velocity.y };
      this.#dragStartClickingFalseTime = void 0;
      this.#momentumSamples = [{ x: mousePos.x, y: mousePos.y, t: performance.now() }];
      closest.velocity.x = zeroValue;
      closest.velocity.y = zeroValue;
      closest.position.x = renderedPos.x - closest.offset.x;
      closest.position.y = renderedPos.y - closest.offset.y;
      closest.initialPosition.x = closest.position.x;
      closest.initialPosition.y = closest.position.y;
      closest.misplaced = false;
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
      if (this.#draggedParticle || this.#mouseDownHandled) {
        return true;
      }
      return !!events?.onClick.enable && mouse.clicking && !!mouse.position && isInArray(dragMode, events.onClick.mode);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "drag", Drag, ...sources);
    }
    reset(_interactivityData, _particle) {
    }
    #findParticleUnderCursor(interactivityData, mousePos) {
      if (!mousePos) {
        return;
      }
      const candidates = this.container.particles.filter((p) => this.isEnabled(interactivityData, p));
      let closest, closestDist = Infinity;
      for (const candidate of candidates) {
        const distSq = getDistanceSq(candidate.getPosition(), mousePos), radius = candidate.getRadius();
        if (!Number.isFinite(distSq) || !Number.isFinite(radius) || radius < 0 || distSq > radius * radius || distSq >= closestDist) {
          continue;
        }
        closest = candidate;
        closestDist = distSq;
      }
      return closest;
    }
    #hasClickEnded(mouse) {
      return this.#dragStartClickTime !== void 0 && mouse.clickTime !== void 0 && mouse.clickTime !== this.#dragStartClickTime;
    }
    #releaseDragged() {
      if (this.#draggedParticle) {
        const dragOptions = this.container.actualOptions.interactivity?.modes.drag, preserveMomentum = dragOptions?.preserveMomentum ?? false;
        if (preserveMomentum && this.#momentumSamples.length >= minSamplesForMomentum) {
          const first = this.#momentumSamples[firstSampleIndex], last = this.#momentumSamples[this.#momentumSamples.length - lastSampleOffset];
          if (first && last) {
            const dt = last.t - first.t;
            if (dt > zeroValue) {
              const factor = dragOptions?.momentumFactor ?? defaultMomentumFactor2;
              this.#draggedParticle.velocity.x = (last.x - first.x) / dt * momentumToVelocityFactor * factor;
              this.#draggedParticle.velocity.y = (last.y - first.y) / dt * momentumToVelocityFactor * factor;
            } else if (this.#savedVelocity) {
              this.#draggedParticle.velocity.x = this.#savedVelocity.x;
              this.#draggedParticle.velocity.y = this.#savedVelocity.y;
            }
          } else if (this.#savedVelocity) {
            this.#draggedParticle.velocity.x = this.#savedVelocity.x;
            this.#draggedParticle.velocity.y = this.#savedVelocity.y;
          }
        } else if (this.#savedVelocity) {
          this.#draggedParticle.velocity.x = this.#savedVelocity.x;
          this.#draggedParticle.velocity.y = this.#savedVelocity.y;
        }
      }
      this.#draggedParticle = void 0;
      this.#dragStartClickTime = void 0;
      this.#dragStartClickingFalseTime = void 0;
      this.#grabOffset = void 0;
      this.#lastMousePosition = void 0;
      this.#momentumSamples = [];
      this.#savedVelocity = void 0;
    }
  };

  // node_modules/@tsparticles/interaction-external-drag/browser/index.js
  async function loadExternalDragInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalDrag", (container) => {
        return Promise.resolve(new Dragger(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-drag/browser/browser.js
  var globalObject8 = globalThis;
  globalObject8.__tsParticlesInternals = globalObject8.__tsParticlesInternals ?? {};
  globalObject8.loadExternalDragInteraction = loadExternalDragInteraction;

  // node_modules/@tsparticles/interaction-external-trail/browser/TrailMaker.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/Trail.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/TrailColorComponent.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/TrailColorWeight.js
  init_browser2();
  var TrailColorWeight = class {
    x = 0;
    y = 0;
    load(data) {
      if (!data) {
        return;
      }
      loadProperty(this, "x", data.x);
      loadProperty(this, "y", data.y);
    }
  };

  // node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/TrailColorComponent.js
  var TrailColorComponent = class {
    value;
    weights = new TrailColorWeight();
    load(data) {
      if (!data) {
        return;
      }
      if (data.weights) {
        this.weights ??= new TrailColorWeight();
        this.weights.load(data.weights);
      }
      if (!isNull(data.value)) {
        this.value = setRangeValue(data.value);
      }
    }
  };

  // node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/TrailColorCoords.js
  var TrailColorCoords = class {
    h = new TrailColorComponent();
    l = new TrailColorComponent();
    s = new TrailColorComponent();
    load(data) {
      if (!data) {
        return;
      }
      if (data.h) {
        this.h ??= new TrailColorComponent();
        this.h.load(data.h);
      }
      if (data.s) {
        this.s ??= new TrailColorComponent();
        this.s.load(data.s);
      }
      if (data.l) {
        this.l ??= new TrailColorComponent();
        this.l.load(data.l);
      }
    }
  };

  // node_modules/@tsparticles/interaction-external-trail/browser/Options/Classes/Trail.js
  var Trail = class {
    colorCoords = new TrailColorCoords();
    delay = 1;
    particles;
    pauseOnStop = false;
    quantity = 1;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "delay", data.delay);
      loadProperty(this, "quantity", data.quantity);
      loadProperty(this, "pauseOnStop", data.pauseOnStop);
      if (data.particles !== void 0) {
        this.particles = deepExtend({}, data.particles);
      }
      if (data.colorCoords) {
        this.colorCoords ??= new TrailColorCoords();
        this.colorCoords.load(data.colorCoords);
      }
    }
  };

  // node_modules/@tsparticles/interaction-external-trail/browser/TrailMaker.js
  var trailMode = "trail";
  var defaultMin = 0;
  var defaultWeight = 0;
  var TrailMaker = class extends ExternalInteractorBase {
    maxDistance = 0;
    #delay;
    #lastPosition;
    #pluginManager;
    constructor(pluginManager, container) {
      super(container);
      this.#pluginManager = pluginManager;
      this.#delay = 0;
    }
    clear() {
    }
    init() {
    }
    interact(interactivityData, delta) {
      const container = this.container;
      if (!container.retina.reduceFactor) {
        return;
      }
      const options = container.actualOptions, trailOptions = options.interactivity?.modes.trail;
      if (!trailOptions) {
        return;
      }
      const optDelay = trailOptions.delay * millisecondsToSeconds / this.container.retina.reduceFactor;
      if (this.#delay < optDelay) {
        this.#delay += delta.value;
      }
      if (this.#delay < optDelay) {
        return;
      }
      const mousePos = interactivityData.mouse.position, canEmit = !(trailOptions.pauseOnStop && (mousePos === this.#lastPosition || mousePos?.x === this.#lastPosition?.x && mousePos?.y === this.#lastPosition?.y));
      if (mousePos) {
        this.#lastPosition = { ...mousePos };
      } else {
        this.#lastPosition = void 0;
      }
      if (canEmit && mousePos) {
        let particleOptions = trailOptions.particles;
        const colorCoords = trailOptions.colorCoords;
        if (colorCoords) {
          const { width, height } = container.canvas.size, norm = {
            x: mousePos.x / width,
            y: mousePos.y / height
          }, hasWeights = (comp) => {
            return !!(comp?.weights?.x ?? comp?.weights?.y);
          }, calculateValue = (comp, originalValue, defaultMax) => {
            if (!hasWeights(comp)) {
              return void 0;
            }
            const w = comp?.weights, factor = norm.x * (w?.x ?? defaultWeight) + norm.y * (w?.y ?? defaultWeight), rangeSource = comp?.value ?? originalValue, min = getRangeMin(rangeSource ?? defaultMin), max = getRangeMax(rangeSource ?? defaultMax), result = min + factor * (max - min);
            return Math.min(max, Math.max(min, result));
          }, trailPaintOptions = trailOptions.particles?.paint ? itemFromSingleOrMultiple(trailOptions.particles.paint) : void 0, fillData = trailPaintOptions?.fill, baseHsl = fillData ? rangeColorToHsl(this.#pluginManager, AnimatableColor.create(void 0, fillData.color)) : void 0, h = calculateValue(colorCoords.h, baseHsl?.h, hMax), s = calculateValue(colorCoords.s, baseHsl?.s, sMax), l = calculateValue(colorCoords.l, baseHsl?.l, lMax);
          if (h !== void 0 || s !== void 0 || l !== void 0) {
            particleOptions = deepExtend({}, trailOptions.particles, {
              paint: {
                fill: {
                  color: {
                    value: {
                      h: h ?? baseHsl?.h,
                      s: s ?? baseHsl?.s,
                      l: l ?? baseHsl?.l
                    }
                  }
                }
              }
            });
          }
        }
        container.particles.push(trailOptions.quantity, mousePos, particleOptions);
      }
      this.#delay -= optDelay;
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
      return !!events && (mouse.clicking && mouse.inside && !!mouse.position && isInArray(trailMode, events.onClick.mode) || mouse.inside && !!mouse.position && isInArray(trailMode, events.onHover.mode));
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "trail", Trail, ...sources);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-external-trail/browser/index.js
  async function loadExternalTrailInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalTrail", (container) => {
        return Promise.resolve(new TrailMaker(e.pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-trail/browser/browser.js
  var globalObject9 = globalThis;
  globalObject9.__tsParticlesInternals = globalObject9.__tsParticlesInternals ?? {};
  globalObject9.loadExternalTrailInteraction = loadExternalTrailInteraction;

  // node_modules/@tsparticles/updater-roll/browser/RollUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-roll/browser/Utils.js
  init_browser2();

  // node_modules/@tsparticles/updater-roll/browser/RollMode.js
  var RollMode;
  (function(RollMode2) {
    RollMode2["both"] = "both";
    RollMode2["horizontal"] = "horizontal";
    RollMode2["vertical"] = "vertical";
  })(RollMode || (RollMode = {}));

  // node_modules/@tsparticles/updater-roll/browser/Utils.js
  var maxAngle2 = 360;
  function initParticle(pluginManager, particle) {
    const rollOpt = particle.options.roll;
    if (!rollOpt?.enable) {
      particle.roll = {
        enable: false,
        horizontal: false,
        vertical: false,
        angle: 0,
        speed: 0
      };
      return;
    }
    particle.roll = {
      enable: rollOpt.enable,
      horizontal: rollOpt.mode === RollMode.horizontal || rollOpt.mode === RollMode.both,
      vertical: rollOpt.mode === RollMode.vertical || rollOpt.mode === RollMode.both,
      angle: getRandom() * doublePI,
      speed: getRangeValue(rollOpt.speed) / maxAngle2
    };
    if (rollOpt.backColor) {
      particle.backColor = rangeColorToHsl(pluginManager, rollOpt.backColor);
    } else if (rollOpt.darken.enable && rollOpt.enlighten.enable) {
      const alterType = getRandom() >= half ? AlterType.darken : AlterType.enlighten;
      particle.roll.alter = {
        type: alterType,
        value: getRangeValue(alterType === AlterType.darken ? rollOpt.darken.value : rollOpt.enlighten.value)
      };
    } else if (rollOpt.darken.enable) {
      particle.roll.alter = {
        type: AlterType.darken,
        value: getRangeValue(rollOpt.darken.value)
      };
    } else if (rollOpt.enlighten.enable) {
      particle.roll.alter = {
        type: AlterType.enlighten,
        value: getRangeValue(rollOpt.enlighten.value)
      };
    }
  }
  function updateRoll(particle, delta) {
    const roll = particle.options.roll, data = particle.roll;
    if (!data || !roll?.enable) {
      return;
    }
    const speed = data.speed * delta.factor, max = doublePI;
    data.angle += speed;
    if (data.angle > max) {
      data.angle -= max;
    }
  }

  // node_modules/@tsparticles/updater-roll/browser/Options/Classes/Roll.js
  init_browser2();

  // node_modules/@tsparticles/updater-roll/browser/Options/Classes/RollLight.js
  init_browser2();
  var RollLight = class {
    enable = false;
    value = 0;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "enable", data.enable);
      loadRangeProperty(this, "value", data.value);
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/Options/Classes/Roll.js
  var Roll = class {
    backColor;
    darken = new RollLight();
    enable = false;
    enlighten = new RollLight();
    mode = RollMode.vertical;
    speed = 25;
    load(data) {
      if (isNull(data)) {
        return;
      }
      if (data.backColor !== void 0) {
        this.backColor = OptionsColor.create(this.backColor, data.backColor);
      }
      this.darken.load(data.darken);
      loadProperty(this, "enable", data.enable);
      this.enlighten.load(data.enlighten);
      loadProperty(this, "mode", data.mode);
      loadRangeProperty(this, "speed", data.speed);
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/RollUpdater.js
  var RollUpdater = class {
    #pluginManager;
    constructor(pluginManager) {
      this.#pluginManager = pluginManager;
    }
    getTransformValues(particle) {
      const roll = particle.roll?.enable && particle.roll, rollHorizontal = roll && roll.horizontal, rollVertical = roll && roll.vertical;
      return {
        a: rollHorizontal ? Math.cos(roll.angle) : void 0,
        d: rollVertical ? Math.sin(roll.angle) : void 0
      };
    }
    init(particle) {
      initParticle(this.#pluginManager, particle);
    }
    isEnabled(particle) {
      const roll = particle.options.roll;
      return !particle.destroyed && !particle.spawning && !!roll?.enable;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "roll", Roll, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateRoll(particle, delta);
    }
  };

  // node_modules/@tsparticles/updater-roll/browser/index.js
  async function loadRollUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("roll", () => {
        return Promise.resolve(new RollUpdater(e.pluginManager));
      });
    });
  }

  // node_modules/@tsparticles/updater-roll/browser/browser.js
  var globalObject10 = globalThis;
  globalObject10.__tsParticlesInternals = globalObject10.__tsParticlesInternals ?? {};
  globalObject10.loadRollUpdater = loadRollUpdater;

  // node_modules/@tsparticles/plugin-blend/browser/Options/Classes/Blend.js
  init_browser2();
  var Blend = class {
    enable = false;
    mode = "destination-out";
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "mode", data.mode);
      loadProperty(this, "enable", data.enable);
    }
  };

  // node_modules/@tsparticles/plugin-blend/browser/BlendPlugin.js
  function hasEnabledBlend(particleOptions) {
    if (!particleOptions || typeof particleOptions !== "object" || !("blend" in particleOptions)) {
      return false;
    }
    const blend = particleOptions.blend;
    return !!blend && typeof blend === "object" && "enable" in blend && !!blend.enable;
  }
  var BlendPlugin = class {
    id = "blend";
    async getPlugin(container) {
      const { BlendPluginInstance: BlendPluginInstance2 } = await Promise.resolve().then(() => (init_BlendPluginInstance(), BlendPluginInstance_exports));
      return new BlendPluginInstance2(container);
    }
    loadOptions(_container, options, source) {
      if (!this.needsPlugin(options) && !this.needsPlugin(source)) {
        return;
      }
      let blendOptions = options.blend;
      if (!blendOptions?.load) {
        options.blend = blendOptions = new Blend();
      }
      blendOptions.load(source?.blend);
    }
    loadParticlesOptions(_container, options, source) {
      options.blend ??= new Blend();
      options.blend.load(source?.blend);
    }
    needsPlugin(options) {
      if (options?.blend?.enable || options?.particles?.blend?.enable || Object.values(options?.particles?.groups ?? {}).some(hasEnabledBlend)) {
        return true;
      }
      const emitters = options?.["emitters"];
      let emitterList = [];
      if (Array.isArray(emitters)) {
        emitterList = emitters;
      } else if (emitters) {
        emitterList = [emitters];
      }
      return emitterList.some((emitter) => {
        if (!emitter || typeof emitter !== "object" || !("particles" in emitter)) {
          return false;
        }
        const particles = emitter.particles;
        return Array.isArray(particles) ? particles.some(hasEnabledBlend) : hasEnabledBlend(particles);
      });
    }
  };

  // node_modules/@tsparticles/plugin-blend/browser/index.js
  async function loadBlendPlugin(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addPlugin(new BlendPlugin());
    });
  }

  // node_modules/@tsparticles/plugin-blend/browser/browser.js
  var globalObject11 = globalThis;
  globalObject11.__tsParticlesInternals = globalObject11.__tsParticlesInternals ?? {};
  globalObject11.loadBlendPlugin = loadBlendPlugin;

  // node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js
  init_browser2();

  // node_modules/@tsparticles/shape-circle/browser/Utils.js
  init_browser2();
  var minAngle2 = 0;
  function drawCircle(data) {
    const { context, particle, radius } = data;
    particle.circleRange ??= { min: minAngle2, max: doublePI };
    const circleRange = particle.circleRange;
    context.arc(originPoint.x, originPoint.y, radius, circleRange.min, circleRange.max, false);
  }

  // node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js
  var sides2 = 12;
  var maxAngle3 = 360;
  var minAngle3 = 0;
  var CircleDrawer = class {
    draw(data) {
      drawCircle(data);
    }
    getSidesCount() {
      return sides2;
    }
    particleInit(_container, particle) {
      const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
        max: maxAngle3,
        min: minAngle3
      };
      particle.circleRange = isObject(angle) ? { min: degToRad(angle.min), max: degToRad(angle.max) } : {
        min: minAngle3,
        max: degToRad(angle)
      };
    }
  };

  // node_modules/@tsparticles/shape-circle/browser/index.js
  async function loadCircleShape(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["circle"], () => {
        return Promise.resolve(new CircleDrawer());
      });
    });
  }

  // node_modules/@tsparticles/shape-circle/browser/browser.js
  var globalObject12 = globalThis;
  globalObject12.__tsParticlesInternals = globalObject12.__tsParticlesInternals ?? {};
  globalObject12.loadCircleShape = loadCircleShape;

  // node_modules/@tsparticles/plugin-hex-color/browser/HexColorManager.js
  init_browser2();
  var RgbIndexes;
  (function(RgbIndexes3) {
    RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
    RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
    RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
    RgbIndexes3[RgbIndexes3["a"] = 4] = "a";
  })(RgbIndexes || (RgbIndexes = {}));
  var shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
  var hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
  var hexRadix = 16;
  var alphaFactor = 255;
  var HexColorManager = class {
    accepts(input) {
      return input.startsWith("#");
    }
    handleColor(color) {
      return this.#parseString(color.value);
    }
    handleRangeColor(color) {
      return this.#parseString(color.value);
    }
    parseString(input) {
      return this.#parseString(input);
    }
    #parseString(hexColor) {
      if (typeof hexColor !== "string" || !this.accepts(hexColor)) {
        return;
      }
      const hexFixed = hexColor.replace(shorthandHexRegex, (_, r, g, b, a) => {
        return r + r + g + g + b + b + (a === void 0 ? "" : a + a);
      }), result = hexRegex.exec(hexFixed);
      return result ? {
        a: result[RgbIndexes.a] ? Number.parseInt(result[RgbIndexes.a], hexRadix) / alphaFactor : defaultAlpha,
        b: Number.parseInt(result[RgbIndexes.b] ?? "0", hexRadix),
        g: Number.parseInt(result[RgbIndexes.g] ?? "0", hexRadix),
        r: Number.parseInt(result[RgbIndexes.r] ?? "0", hexRadix)
      } : void 0;
    }
  };

  // node_modules/@tsparticles/plugin-hex-color/browser/index.js
  async function loadHexColorPlugin(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("hex", new HexColorManager());
    });
  }

  // node_modules/@tsparticles/plugin-hex-color/browser/browser.js
  var globalObject13 = globalThis;
  globalObject13.__tsParticlesInternals = globalObject13.__tsParticlesInternals ?? {};
  globalObject13.loadHexColorPlugin = loadHexColorPlugin;

  // node_modules/@tsparticles/plugin-hsl-color/browser/HslColorManager.js
  init_browser2();
  var HslIndexes;
  (function(HslIndexes2) {
    HslIndexes2[HslIndexes2["h"] = 1] = "h";
    HslIndexes2[HslIndexes2["s"] = 2] = "s";
    HslIndexes2[HslIndexes2["l"] = 3] = "l";
    HslIndexes2[HslIndexes2["a"] = 5] = "a";
  })(HslIndexes || (HslIndexes = {}));
  var hslRegex = /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i;
  var HslColorManager = class {
    accepts(input) {
      return input.startsWith("hsl");
    }
    handleColor(color) {
      const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
      if (!("h" in hslColor) || !("s" in hslColor) || !("l" in hslColor)) {
        return;
      }
      return hslToRgb(hslColor);
    }
    handleRangeColor(color) {
      const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
      if (!("h" in hslColor) || !("s" in hslColor) || !("l" in hslColor)) {
        return;
      }
      return hslToRgb({
        h: getRangeValue(hslColor.h),
        l: getRangeValue(hslColor.l),
        s: getRangeValue(hslColor.s)
      });
    }
    parseString(input) {
      if (!this.accepts(input)) {
        return;
      }
      const result = hslRegex.exec(input), minLength3 = 4, radix = 10;
      return result ? hslaToRgba({
        a: result.length > minLength3 ? parseAlpha(result[HslIndexes.a]) : defaultAlpha,
        h: Number.parseInt(result[HslIndexes.h] ?? "0", radix),
        l: Number.parseInt(result[HslIndexes.l] ?? "0", radix),
        s: Number.parseInt(result[HslIndexes.s] ?? "0", radix)
      }) : void 0;
    }
  };

  // node_modules/@tsparticles/plugin-hsl-color/browser/index.js
  async function loadHslColorPlugin(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("hsl", new HslColorManager());
    });
  }

  // node_modules/@tsparticles/plugin-hsl-color/browser/browser.js
  var globalObject14 = globalThis;
  globalObject14.__tsParticlesInternals = globalObject14.__tsParticlesInternals ?? {};
  globalObject14.loadHslColorPlugin = loadHslColorPlugin;

  // node_modules/@tsparticles/plugin-move/browser/index.js
  init_browser2();

  // node_modules/@tsparticles/plugin-move/browser/ErrorCodes.js
  var ErrorCodes4 = {
    baseMoverNotLoaded: "TSP-3203"
  };

  // node_modules/@tsparticles/plugin-move/browser/ErrorMessages.js
  var ErrorMessages3 = {
    [ErrorCodes4.baseMoverNotLoaded]: "tsParticles Base Mover is not loaded"
  };

  // node_modules/@tsparticles/plugin-move/browser/MovePlugin.js
  var MovePlugin = class {
    id = "move";
    #pluginManager;
    constructor(pluginManager) {
      this.#pluginManager = pluginManager;
    }
    async getPlugin(container) {
      const { MovePluginInstance: MovePluginInstance2 } = await Promise.resolve().then(() => (init_MovePluginInstance(), MovePluginInstance_exports));
      return new MovePluginInstance2(this.#pluginManager, container);
    }
    loadOptions() {
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/plugin-move/browser/index.js
  async function loadMovePlugin(engine) {
    engine.checkVersion("4.6.0");
    if (typeof process !== "undefined" && true) {
      addErrorMessages(ErrorMessages3);
    }
    await engine.pluginManager.register((e) => {
      const moveEngine = e, movePluginManager = moveEngine.pluginManager;
      movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
      movePluginManager.addPathGenerator = (name, generator) => {
        if (movePluginManager.initialized) {
          return;
        }
        movePluginManager.initializers.pathGenerators ??= /* @__PURE__ */ new Map();
        movePluginManager.initializers.pathGenerators.set(name, generator);
      };
      e.pluginManager.addPlugin(new MovePlugin(e.pluginManager));
    });
  }

  // node_modules/@tsparticles/plugin-move/browser/browser.js
  var globalObject15 = globalThis;
  globalObject15.__tsParticlesInternals = globalObject15.__tsParticlesInternals ?? {};
  globalObject15.loadMovePlugin = loadMovePlugin;

  // node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js
  init_browser2();

  // node_modules/@tsparticles/animation-utils/browser/Utils.js
  init_browser2();
  function checkDestroy(particle, destroyType, value, minValue, maxValue) {
    switch (destroyType) {
      case DestroyType.max:
        if (value >= maxValue) {
          particle.destroy();
        }
        break;
      case DestroyType.min:
        if (value <= minValue) {
          particle.destroy();
        }
        break;
      default:
        break;
    }
  }
  function initParticleNumericAnimationValue(options, pxRatio) {
    const valueRange = options.value, animationOptions = options.animation, res = {
      delayTime: getRangeValue(animationOptions.delay) * millisecondsToSeconds,
      enable: animationOptions.enable,
      value: getRangeValue(options.value) * pxRatio,
      max: getRangeMax(valueRange) * pxRatio,
      min: getRangeMin(valueRange) * pxRatio,
      loops: 0,
      maxLoops: getRangeValue(animationOptions.count),
      time: 0
    }, decayOffset2 = 1;
    if (animationOptions.enable) {
      res.decay = decayOffset2 - getRangeValue(animationOptions.decay);
      switch (animationOptions.mode) {
        case AnimationMode.increase:
          res.status = AnimationStatus.increasing;
          break;
        case AnimationMode.decrease:
          res.status = AnimationStatus.decreasing;
          break;
        case AnimationMode.random:
          res.status = getRandom() >= half ? AnimationStatus.increasing : AnimationStatus.decreasing;
          break;
        default:
          break;
      }
      const autoStatus = animationOptions.mode === AnimationMode.auto;
      switch (animationOptions.startValue) {
        case StartValueType.min:
          res.value = res.min;
          if (autoStatus) {
            res.status = AnimationStatus.increasing;
          }
          break;
        case StartValueType.max:
          res.value = res.max;
          if (autoStatus) {
            res.status = AnimationStatus.decreasing;
          }
          break;
        case StartValueType.random:
        default:
          res.value = randomInRangeValue(res);
          if (autoStatus) {
            res.status = getRandom() >= half ? AnimationStatus.increasing : AnimationStatus.decreasing;
          }
          break;
      }
    }
    res.initialValue = res.value;
    return res;
  }
  function updateAnimation(particle, data, changeDirection, destroyType, delta) {
    const minLoops2 = 0, minDelay = 0, identity4 = 1, minVelocity2 = 0, minDecay = 1;
    if (particle.destroyed || !data.enable || (data.maxLoops ?? minLoops2) > minLoops2 && (data.loops ?? minLoops2) > (data.maxLoops ?? minLoops2)) {
      return;
    }
    const velocity = (data.velocity ?? minVelocity2) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? minDecay;
    data.time ??= 0;
    const delayTime = data.delayTime ?? minDelay;
    if (delayTime > minDelay && data.time < delayTime) {
      data.time += delta.value;
      if (data.time < delayTime) {
        return;
      }
    }
    switch (data.status) {
      case AnimationStatus.increasing:
        data.value += velocity;
        break;
      case AnimationStatus.decreasing:
        data.value -= velocity;
        break;
      default:
        break;
    }
    if (data.velocity && decay !== identity4) {
      data.velocity *= decay;
    }
    switch (data.status) {
      case AnimationStatus.increasing:
        if (data.value >= maxValue) {
          if (changeDirection) {
            data.status = AnimationStatus.decreasing;
          } else {
            data.value -= maxValue;
          }
          data.loops ??= minLoops2;
          data.loops++;
        }
        break;
      case AnimationStatus.decreasing:
        if (data.value <= minValue) {
          if (changeDirection) {
            data.status = AnimationStatus.increasing;
          } else {
            data.value += maxValue;
          }
          data.loops ??= minLoops2;
          data.loops++;
        }
        break;
      default:
        break;
    }
    checkDestroy(particle, destroyType, data.value, minValue, maxValue);
    if (!particle.destroyed) {
      data.value = clamp(data.value, minValue, maxValue);
    }
  }

  // node_modules/@tsparticles/animation-utils/browser/browser.js
  var globalObject16 = globalThis;
  globalObject16.__tsParticlesInternals = globalObject16.__tsParticlesInternals ?? {};

  // node_modules/@tsparticles/updater-opacity/browser/Options/Classes/Opacity.js
  init_browser2();

  // node_modules/@tsparticles/updater-opacity/browser/Options/Classes/OpacityAnimation.js
  init_browser2();
  var OpacityAnimation = class extends RangedAnimationOptions {
    destroy = DestroyType.none;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "destroy", data.destroy);
    }
  };

  // node_modules/@tsparticles/updater-opacity/browser/Options/Classes/Opacity.js
  var Opacity = class extends RangedAnimationValueWithRandom {
    animation = new OpacityAnimation();
    value = 1;
    load(data) {
      if (isNull(data)) {
        return;
      }
      super.load(data);
      const animation = data.animation;
      if (animation !== void 0) {
        this.animation.load(animation);
      }
    }
  };

  // node_modules/@tsparticles/updater-opacity/browser/OpacityUpdater.js
  var OpacityUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const opacityOptions = particle.options.opacity, pxRatio = 1;
      if (!opacityOptions) {
        return;
      }
      particle.opacity = initParticleNumericAnimationValue(opacityOptions, pxRatio);
      const opacityAnimation = opacityOptions.animation;
      if (opacityAnimation.enable) {
        particle.opacity.velocity = getRangeValue(opacityAnimation.speed) / percentDenominator * this.#container.retina.reduceFactor;
        if (!opacityAnimation.sync) {
          particle.opacity.velocity *= getRandom();
        }
      }
    }
    isEnabled(particle) {
      const none2 = 0;
      return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none2) <= none2 || (particle.opacity.maxLoops ?? none2) > none2 && (particle.opacity.loops ?? none2) < (particle.opacity.maxLoops ?? none2));
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "opacity", Opacity, ...sources);
    }
    reset(particle) {
      if (!particle.opacity) {
        return;
      }
      particle.opacity.time = 0;
      particle.opacity.loops = 0;
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.opacity || !particle.options.opacity) {
        return;
      }
      updateAnimation(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
    }
  };

  // node_modules/@tsparticles/updater-opacity/browser/index.js
  async function loadOpacityUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("opacity", (container) => {
        return Promise.resolve(new OpacityUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-opacity/browser/browser.js
  var globalObject17 = globalThis;
  globalObject17.__tsParticlesInternals = globalObject17.__tsParticlesInternals ?? {};
  globalObject17.loadOpacityUpdater = loadOpacityUpdater;

  // node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js
  init_browser2();

  // node_modules/@tsparticles/updater-out-modes/browser/Utils.js
  init_browser2();
  var boundsMin = 0;
  var bounceAxisConfigs = {
    [OutModeDirection.left]: {
      axis: "x",
      canvas: "width",
      bounce: "horizontal",
      negativeEdge: "right",
      positiveEdge: "left",
      negative: true
    },
    [OutModeDirection.right]: {
      axis: "x",
      canvas: "width",
      bounce: "horizontal",
      negativeEdge: "right",
      positiveEdge: "left",
      negative: false
    },
    [OutModeDirection.top]: {
      axis: "y",
      canvas: "height",
      bounce: "vertical",
      negativeEdge: "bottom",
      positiveEdge: "top",
      negative: true
    },
    [OutModeDirection.bottom]: {
      axis: "y",
      canvas: "height",
      bounce: "vertical",
      negativeEdge: "bottom",
      positiveEdge: "top",
      negative: false
    }
  };
  function bounce(data) {
    if (data.outMode !== OutMode.bounce && data.outMode !== OutMode.split || !(data.direction in bounceAxisConfigs)) {
      return;
    }
    const config = bounceAxisConfigs[data.direction], bounds = data.bounds, canvasDim = data.canvasSize[config.canvas], position = data.particle.position, velocity = data.particle.velocity[config.axis];
    if (config.negative && bounds[config.negativeEdge] < boundsMin) {
      position[config.axis] = data.size + data.offset[config.axis];
    } else if (!config.negative && bounds[config.positiveEdge] > canvasDim) {
      position[config.axis] = canvasDim - data.size - data.offset[config.axis];
    }
    if (data.outOfCanvas && (config.negative && velocity < minVelocity || !config.negative && velocity > minVelocity)) {
      data.particle.velocity[config.axis] *= -getRangeValue(data.particle.options.bounce[config.bounce].value);
    } else {
      return;
    }
    const minPos = data.offset[config.axis] + data.size;
    position[config.axis] = config.negative ? minPos : canvasDim - minPos;
    if (data.outMode === OutMode.split) {
      data.particle.destroy();
    }
  }

  // node_modules/@tsparticles/updater-out-modes/browser/BounceOutMode.js
  var BounceOutMode = class {
    modes;
    #container;
    #particleBouncePlugins;
    constructor(container) {
      this.#container = container;
      this.modes = [
        OutMode.bounce,
        OutMode.split
      ];
      this.#particleBouncePlugins = container.plugins.filter((p) => !!p.particleBounce);
    }
    update(particle, direction, delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      for (const plugin of this.#particleBouncePlugins) {
        if (plugin.particleBounce?.(particle, delta, direction)) {
          return;
        }
      }
      const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = calculateBounds(pos, size), canvasSize = this.#container.canvas.size, outOfCanvas = !particle.isInsideCanvasForOutMode(outMode, direction);
      bounce({ particle, outMode, direction, bounds, canvasSize, offset, outOfCanvas, size });
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/DestroyOutMode.js
  init_browser2();
  var DestroyOutMode = class {
    modes;
    constructor(_container) {
      this.modes = [OutMode.destroy];
    }
    update(particle, direction, _delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      switch (particle.outType) {
        case ParticleOutType.normal:
        case ParticleOutType.outside:
          if (particle.isInsideCanvasForOutMode(outMode, direction)) {
            return;
          }
          break;
        case ParticleOutType.inside: {
          const dx = particle.position.x - particle.moveCenter.x, dy = particle.position.y - particle.moveCenter.y, { x: vx, y: vy } = particle.velocity;
          if (vx < minVelocity && dx > particle.moveCenter.radius || vy < minVelocity && dy > particle.moveCenter.radius || vx >= minVelocity && dx < -particle.moveCenter.radius || vy >= minVelocity && dy < -particle.moveCenter.radius) {
            return;
          }
          break;
        }
      }
      particle.destroy(true);
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/NoneOutMode.js
  init_browser2();
  var NoneOutMode = class {
    modes;
    #container;
    constructor(container) {
      this.#container = container;
      this.modes = [OutMode.none];
    }
    update(particle, direction, _delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      if ((particle.options.move.distance.horizontal && (direction === OutModeDirection.left || direction === OutModeDirection.right)) ?? (particle.options.move.distance.vertical && (direction === OutModeDirection.top || direction === OutModeDirection.bottom))) {
        return;
      }
      const gravityOptions = particle.options.move.gravity, container = this.#container, canvasSize = container.canvas.size, pRadius = particle.getRadius();
      if (!gravityOptions.enable) {
        if (particle.velocity.y > minVelocity && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < minVelocity && particle.position.y >= -pRadius || particle.velocity.x > minVelocity && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < minVelocity && particle.position.x >= -pRadius) {
          return;
        }
        if (!isPointInside(particle.position, container.canvas.size, originPoint, pRadius, direction)) {
          particle.destroy();
        }
      } else {
        const position = particle.position;
        if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === OutModeDirection.bottom || gravityOptions.inverse && position.y < -pRadius && direction === OutModeDirection.top) {
          particle.destroy();
        }
      }
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/OutOutMode.js
  init_browser2();
  var updateVector = Vector.origin;
  var OutOutMode = class {
    modes;
    #container;
    constructor(container) {
      this.#container = container;
      this.modes = [OutMode.out];
    }
    update(particle, direction, _delta, outMode) {
      if (!this.modes.includes(outMode)) {
        return;
      }
      const container = this.#container;
      if (particle.outType === ParticleOutType.inside) {
        this.#applyOutModeInside(particle, container);
      } else {
        if (particle.isInsideCanvasForOutMode(outMode, direction)) {
          return;
        }
        if (particle.outType === ParticleOutType.outside) {
          this.#applyParticleModeOutside(particle);
        } else {
          this.#applyOutModeNormal(particle, container, direction);
        }
      }
    }
    #applyOutModeInside(particle, container) {
      const { x: vx, y: vy } = particle.velocity;
      updateVector.setTo(originPoint);
      updateVector.length = particle.moveCenter.radius;
      updateVector.angle = particle.velocity.angle + Math.PI;
      updateVector.addTo(particle.moveCenter);
      const dx = particle.position.x - updateVector.x, dy = particle.position.y - updateVector.y;
      if (vx <= minVelocity && dx >= minDistance || vy <= minVelocity && dy >= minDistance || vx >= minVelocity && dx <= minDistance || vy >= minVelocity && dy <= minDistance) {
        return;
      }
      particle.position.x = Math.floor(randomInRangeValue({
        min: 0,
        max: container.canvas.size.width
      }));
      particle.position.y = Math.floor(randomInRangeValue({
        min: 0,
        max: container.canvas.size.height
      }));
      const newDx = particle.position.x - particle.moveCenter.x, newDy = particle.position.y - particle.moveCenter.y;
      particle.direction = Math.atan2(-newDy, -newDx);
      particle.velocity.angle = particle.direction;
      particle.justWarped = true;
    }
    #applyOutModeNormal(particle, container, direction) {
      const warp = particle.options.move.warp, canvasSize = container.canvas.size, sizeValue = particle.getRadius(), newPos = {
        bottom: canvasSize.height + sizeValue + particle.offset.y,
        left: -sizeValue - particle.offset.x,
        right: canvasSize.width + sizeValue + particle.offset.x,
        top: -sizeValue - particle.offset.y
      }, nextBounds = calculateBounds(particle.position, sizeValue);
      if (direction === OutModeDirection.right && nextBounds.left > canvasSize.width + particle.offset.x) {
        particle.position.x = newPos.left;
        particle.initialPosition.x = particle.position.x;
        if (!warp) {
          particle.position.y = getRandom() * canvasSize.height;
          particle.initialPosition.y = particle.position.y;
        }
        particle.justWarped = true;
      } else if (direction === OutModeDirection.left && nextBounds.right < -particle.offset.x) {
        particle.position.x = newPos.right;
        particle.initialPosition.x = particle.position.x;
        if (!warp) {
          particle.position.y = getRandom() * canvasSize.height;
          particle.initialPosition.y = particle.position.y;
        }
        particle.justWarped = true;
      }
      if (direction === OutModeDirection.bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
        if (!warp) {
          particle.position.x = getRandom() * canvasSize.width;
          particle.initialPosition.x = particle.position.x;
        }
        particle.position.y = newPos.top;
        particle.initialPosition.y = particle.position.y;
        particle.justWarped = true;
      } else if (direction === OutModeDirection.top && nextBounds.bottom < -particle.offset.y) {
        if (!warp) {
          particle.position.x = getRandom() * canvasSize.width;
          particle.initialPosition.x = particle.position.x;
        }
        particle.position.y = newPos.bottom;
        particle.initialPosition.y = particle.position.y;
        particle.justWarped = true;
      }
    }
    #applyParticleModeOutside(particle) {
      particle.position.x = Math.floor(randomInRangeValue({
        min: -particle.moveCenter.radius,
        max: particle.moveCenter.radius
      })) + particle.moveCenter.x;
      particle.position.y = Math.floor(randomInRangeValue({
        min: -particle.moveCenter.radius,
        max: particle.moveCenter.radius
      })) + particle.moveCenter.y;
      const dx = particle.position.x - particle.moveCenter.x, dy = particle.position.y - particle.moveCenter.y;
      if (particle.moveCenter.radius) {
        particle.direction = Math.atan2(dy, dx);
        particle.velocity.angle = particle.direction;
      }
      particle.justWarped = true;
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/OutOfCanvasUpdater.js
  var checkOutMode = (outModes, outMode) => {
    return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
  };
  var OutOfCanvasUpdater = class {
    updaters;
    #container;
    constructor(container) {
      this.#container = container;
      this.updaters = /* @__PURE__ */ new Map();
    }
    init(particle) {
      this.#addUpdaterIfMissing(particle, OutMode.bounce, (container) => new BounceOutMode(container));
      this.#addUpdaterIfMissing(particle, OutMode.out, (container) => new OutOutMode(container));
      this.#addUpdaterIfMissing(particle, OutMode.destroy, (container) => new DestroyOutMode(container));
      this.#addUpdaterIfMissing(particle, OutMode.none, (container) => new NoneOutMode(container));
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning;
    }
    update(particle, delta) {
      const outModes = particle.options.move.outModes;
      particle.justWarped = false;
      this.#updateOutMode(particle, delta, outModes.bottom ?? outModes.default, OutModeDirection.bottom);
      this.#updateOutMode(particle, delta, outModes.left ?? outModes.default, OutModeDirection.left);
      this.#updateOutMode(particle, delta, outModes.right ?? outModes.default, OutModeDirection.right);
      this.#updateOutMode(particle, delta, outModes.top ?? outModes.default, OutModeDirection.top);
    }
    #addUpdaterIfMissing(particle, outMode, getUpdater) {
      const outModes = particle.options.move.outModes;
      if (!this.updaters.has(outMode) && checkOutMode(outModes, outMode)) {
        this.updaters.set(outMode, getUpdater(this.#container));
      }
    }
    #updateOutMode(particle, delta, outMode, direction) {
      for (const updater of this.updaters.values()) {
        updater.update(particle, direction, delta, outMode);
      }
    }
  };

  // node_modules/@tsparticles/updater-out-modes/browser/index.js
  async function loadOutModesUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("outModes", (container) => {
        return Promise.resolve(new OutOfCanvasUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-out-modes/browser/browser.js
  var globalObject18 = globalThis;
  globalObject18.__tsParticlesInternals = globalObject18.__tsParticlesInternals ?? {};
  globalObject18.loadOutModesUpdater = loadOutModesUpdater;

  // node_modules/@tsparticles/updater-paint/browser/PaintUpdater.js
  init_browser2();
  var defaultOpacity2 = 1;
  var PaintUpdater = class {
    #container;
    #pluginManager;
    constructor(pluginManager, container) {
      this.#container = container;
      this.#pluginManager = pluginManager;
    }
    init(particle) {
      const container = this.#container, options = particle.options, paint = itemFromSingleOrMultiple(options.paint, particle.id, options.reduceDuplicates);
      this.#initFill(paint, particle, container);
      this.#initStroke(paint, particle, container);
    }
    isEnabled(particle) {
      const { fillAnimation, fillColor, strokeAnimation, strokeColor } = particle, fillEnabled = !!fillAnimation && (fillColor?.h.value !== void 0 && fillColor.h.enable || fillColor?.s.value !== void 0 && fillColor.s.enable || fillColor?.l.value !== void 0 && fillColor.l.enable), strokeEnabled = !!strokeAnimation && (strokeColor?.h.value !== void 0 && strokeColor.h.enable || strokeColor?.s.value !== void 0 && strokeColor.s.enable || strokeColor?.l.value !== void 0 && strokeColor.l.enable);
      return !particle.destroyed && !particle.spawning && (fillEnabled || strokeEnabled);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateColor(particle.fillColor, delta, this.#container.hdr);
      updateColor(particle.strokeColor, delta, this.#container.hdr);
    }
    #initFill(paint, particle, container) {
      const fill = paint?.fill, color = paint?.color, paintColor = color ?? void 0;
      if (!fill) {
        particle.fillEnabled = false;
        particle.fillAnimation = void 0;
        particle.fillColor = void 0;
        particle.fillOpacity = defaultOpacity2;
        return;
      }
      const fillColor = AnimatableColor.create(paintColor === void 0 ? void 0 : AnimatableColor.create(void 0, paintColor), fill.color);
      particle.fillEnabled = fill.enable;
      particle.fillOpacity = getRangeValue(fill.opacity);
      particle.fillAnimation = fillColor.animation;
      const fillHslColor = rangeColorToHsl(this.#pluginManager, fillColor);
      if (!fillHslColor) {
        return;
      }
      particle.fillColor = getHslAnimationFromHsl(fillHslColor, particle.fillAnimation, container.retina.reduceFactor);
    }
    #initStroke(paint, particle, container) {
      const stroke = paint?.stroke, color = paint?.color, paintColor = color ?? void 0;
      if (!stroke) {
        particle.strokeAnimation = void 0;
        particle.strokeColor = void 0;
        particle.strokeOpacity = defaultOpacity2;
        particle.strokeWidth = 0;
        return;
      }
      const strokeColor = AnimatableColor.create(paintColor === void 0 ? void 0 : AnimatableColor.create(void 0, paintColor), stroke.color);
      particle.strokeWidth = getRangeValue(stroke.width) * container.retina.pixelRatio;
      particle.strokeOpacity = getRangeValue(stroke.opacity ?? defaultOpacity2);
      particle.strokeAnimation = strokeColor.animation;
      const strokeHslColor = rangeColorToHsl(this.#pluginManager, strokeColor) ?? particle.getFillColor();
      if (!strokeHslColor) {
        return;
      }
      particle.strokeColor = getHslAnimationFromHsl(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
    }
  };

  // node_modules/@tsparticles/updater-paint/browser/index.js
  async function loadPaintUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("paint", (container) => {
        return Promise.resolve(new PaintUpdater(e.pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/updater-paint/browser/browser.js
  var globalObject19 = globalThis;
  globalObject19.__tsParticlesInternals = globalObject19.__tsParticlesInternals ?? {};
  globalObject19.loadPaintUpdater = loadPaintUpdater;

  // node_modules/@tsparticles/plugin-rgb-color/browser/RgbColorManager.js
  init_browser2();
  var RgbIndexes2;
  (function(RgbIndexes3) {
    RgbIndexes3[RgbIndexes3["r"] = 1] = "r";
    RgbIndexes3[RgbIndexes3["g"] = 2] = "g";
    RgbIndexes3[RgbIndexes3["b"] = 3] = "b";
    RgbIndexes3[RgbIndexes3["a"] = 5] = "a";
  })(RgbIndexes2 || (RgbIndexes2 = {}));
  var rgbRegex = /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i;
  var RgbColorManager = class {
    accepts(input) {
      return input.startsWith("rgb");
    }
    handleColor(color) {
      const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
      if (!("r" in rgbColor) || !("g" in rgbColor) || !("b" in rgbColor)) {
        return;
      }
      return rgbColor;
    }
    handleRangeColor(color) {
      const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
      if (!("r" in rgbColor) || !("g" in rgbColor) || !("b" in rgbColor)) {
        return;
      }
      return {
        r: getRangeValue(rgbColor.r),
        g: getRangeValue(rgbColor.g),
        b: getRangeValue(rgbColor.b)
      };
    }
    parseString(input) {
      if (!this.accepts(input)) {
        return;
      }
      const result = rgbRegex.exec(input), radix = 10, minLength3 = 4;
      return result ? {
        a: result.length > minLength3 ? parseAlpha(result[RgbIndexes2.a]) : defaultAlpha,
        b: parseInt(result[RgbIndexes2.b] ?? "0", radix),
        g: parseInt(result[RgbIndexes2.g] ?? "0", radix),
        r: parseInt(result[RgbIndexes2.r] ?? "0", radix)
      } : void 0;
    }
  };

  // node_modules/@tsparticles/plugin-rgb-color/browser/index.js
  async function loadRgbColorPlugin(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addColorManager("rgb", new RgbColorManager());
    });
  }

  // node_modules/@tsparticles/plugin-rgb-color/browser/browser.js
  var globalObject20 = globalThis;
  globalObject20.__tsParticlesInternals = globalObject20.__tsParticlesInternals ?? {};
  globalObject20.loadRgbColorPlugin = loadRgbColorPlugin;

  // node_modules/@tsparticles/updater-size/browser/SizeUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-size/browser/Options/Classes/Size.js
  init_browser2();

  // node_modules/@tsparticles/updater-size/browser/Options/Classes/SizeAnimation.js
  init_browser2();
  var SizeAnimation = class extends RangedAnimationOptions {
    destroy = DestroyType.none;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "destroy", data.destroy);
    }
  };

  // node_modules/@tsparticles/updater-size/browser/Options/Classes/Size.js
  var Size = class extends RangedAnimationValueWithRandom {
    animation = new SizeAnimation();
    value = 3;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      const animation = data.animation;
      if (animation !== void 0) {
        this.animation.load(animation);
      }
    }
  };

  // node_modules/@tsparticles/updater-size/browser/SizeUpdater.js
  var minLoops = 0;
  var SizeUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const container = this.#container, sizeOptions = particle.options.size;
      if (!sizeOptions) {
        return;
      }
      const sizeAnimation = sizeOptions.animation;
      if (!sizeAnimation.enable) {
        return;
      }
      particle.size.velocity = particle.retina.sizeAnimationSpeed / percentDenominator * container.retina.reduceFactor;
      if (sizeAnimation.sync) {
        return;
      }
      particle.size.velocity *= getRandom();
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "size", Size, ...sources);
    }
    preInit(particle) {
      const pxRatio = this.#container.retina.pixelRatio, options = particle.options, sizeOptions = options.size;
      if (!sizeOptions) {
        return;
      }
      particle.size = initParticleNumericAnimationValue(sizeOptions, pxRatio);
      particle.retina.sizeAnimationSpeed = getRangeValue(sizeOptions.animation.speed) * pxRatio;
    }
    reset(particle) {
      particle.size.time = 0;
      particle.size.loops = 0;
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.options.size) {
        return;
      }
      updateAnimation(particle, particle.size, true, particle.options.size.animation.destroy, delta);
    }
  };

  // node_modules/@tsparticles/updater-size/browser/index.js
  async function loadSizeUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("size", (container) => {
        return Promise.resolve(new SizeUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-size/browser/browser.js
  var globalObject21 = globalThis;
  globalObject21.__tsParticlesInternals = globalObject21.__tsParticlesInternals ?? {};
  globalObject21.loadSizeUpdater = loadSizeUpdater;

  // node_modules/@tsparticles/basic/browser/index.js
  async function loadBasic(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register(async (e) => {
      await Promise.all([
        loadBlendPlugin(e),
        loadHexColorPlugin(e),
        loadHslColorPlugin(e),
        loadRgbColorPlugin(e),
        loadMovePlugin(e),
        loadCircleShape(e),
        loadPaintUpdater(e),
        loadOpacityUpdater(e),
        loadOutModesUpdater(e),
        loadSizeUpdater(e)
      ]);
    });
  }

  // node_modules/@tsparticles/basic/browser/browser.js
  var globalObject22 = globalThis;
  globalObject22.__tsParticlesInternals = globalObject22.__tsParticlesInternals ?? {};
  globalObject22.loadBasic = loadBasic;

  // node_modules/@tsparticles/plugin-easing-quad/browser/easingsFunctions.js
  var easingsFunctions = /* @__PURE__ */ new Map();
  easingsFunctions.set("ease-in-quad", (value) => value ** 2);
  easingsFunctions.set("ease-out-quad", (value) => 1 - (1 - value) ** 2);
  easingsFunctions.set("ease-in-out-quad", (value) => value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2);

  // node_modules/@tsparticles/plugin-easing-quad/browser/index.js
  async function loadEasingQuadPlugin(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      for (const [easing, easingFn] of easingsFunctions) {
        e.pluginManager.addEasing(easing, easingFn);
      }
    });
  }

  // node_modules/@tsparticles/plugin-easing-quad/browser/browser.js
  var globalObject23 = globalThis;
  globalObject23.__tsParticlesInternals = globalObject23.__tsParticlesInternals ?? {};
  globalObject23.loadEasingQuadPlugin = loadEasingQuadPlugin;

  // node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js
  init_browser2();

  // node_modules/@tsparticles/shape-emoji/browser/Utils.js
  init_browser2();
  var validTypes = ["emoji"];
  function drawEmoji(data, image) {
    const { context, opacity } = data, previousAlpha = context.globalAlpha, diameter = image.width, radius = diameter * half;
    context.globalAlpha = opacity;
    context.drawImage(image, -radius, -radius, diameter, diameter);
    context.globalAlpha = previousAlpha;
  }

  // node_modules/@tsparticles/canvas-utils/browser/Utils.js
  init_browser2();
  var alphaMax = 255;
  var alphaFactor2 = identity / alphaMax;
  function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
  }
  async function loadFont(font, weight) {
    try {
      await safeDocument().fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
    } catch {
    }
  }

  // node_modules/@tsparticles/canvas-utils/browser/browser.js
  var globalObject24 = globalThis;
  globalObject24.__tsParticlesInternals = globalObject24.__tsParticlesInternals ?? {};

  // node_modules/@tsparticles/shape-emoji/browser/EmojiDrawer.js
  var defaultFont = '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
  var noPadding = 0;
  var firstItem = 0;
  var EmojiDrawer = class {
    #emojiShapeDict = /* @__PURE__ */ new Map();
    destroy() {
      for (const [key, data] of this.#emojiShapeDict) {
        if (data instanceof ImageBitmap) {
          data.close();
        }
        this.#emojiShapeDict.delete(key);
      }
    }
    draw(data) {
      const key = data.particle.emojiDataKey;
      if (!key) {
        return;
      }
      const image = this.#emojiShapeDict.get(key);
      if (!image) {
        return;
      }
      drawEmoji(data, image);
    }
    async init(container) {
      const options = container.actualOptions, shapeData = options.particles.shape;
      if (!validTypes.some((t) => isInArray(t, shapeData.type))) {
        return;
      }
      const promises = [loadFont(defaultFont)], shapeOptions = validTypes.map((t) => shapeData.options[t])[firstItem];
      executeOnSingleOrMultiple(shapeOptions, (shape) => {
        if (shape.font) {
          promises.push(loadFont(shape.font));
        }
      });
      await Promise.all(promises);
    }
    particleDestroy(particle) {
      particle.emojiDataKey = void 0;
    }
    particleInit(container, particle) {
      const shapeData = particle.shapeData;
      if (!shapeData.value) {
        return;
      }
      const emoji = itemFromSingleOrMultiple(shapeData.value, particle.randomIndexData);
      if (!emoji) {
        return;
      }
      const emojiOptions = typeof emoji === "string" ? {
        font: shapeData.font ?? defaultFont,
        padding: shapeData.padding ?? noPadding,
        value: emoji
      } : {
        font: defaultFont,
        padding: noPadding,
        ...shapeData,
        ...emoji
      }, font = emojiOptions.font, value = emojiOptions.value, cacheKey = `${value}_${font}`;
      if (this.#emojiShapeDict.has(cacheKey)) {
        particle.emojiDataKey = cacheKey;
        return;
      }
      const padding = emojiOptions.padding * double, maxSize = getRangeMax(particle.size.value), fullSize = maxSize + padding, canvasSize = fullSize * double, cacheCanvas = new OffscreenCanvas(canvasSize, canvasSize), context = cacheCanvas.getContext("2d", container.canvas.render.settings);
      if (!context) {
        return;
      }
      context.font = `400 ${(maxSize * double).toString()}px ${font}`;
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.fillText(value, fullSize, fullSize);
      const image = cacheCanvas instanceof HTMLCanvasElement ? cacheCanvas : cacheCanvas.transferToImageBitmap();
      this.#emojiShapeDict.set(cacheKey, image);
      particle.emojiDataKey = cacheKey;
    }
  };

  // node_modules/@tsparticles/shape-emoji/browser/index.js
  async function loadEmojiShape(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(validTypes, () => Promise.resolve(new EmojiDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-emoji/browser/browser.js
  var globalObject25 = globalThis;
  globalObject25.__tsParticlesInternals = globalObject25.__tsParticlesInternals ?? {};
  globalObject25.loadEmojiShape = loadEmojiShape;

  // node_modules/@tsparticles/interaction-external-attract/browser/Attractor.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-attract/browser/Utils.js
  init_browser2();
  var minFactor = 1;
  var updateVector2 = Vector.origin;
  function processAttract(pluginManager, container, position, attractRadius, area, queryCb, onAttractParticle) {
    const attractOptions = container.actualOptions.interactivity?.modes.attract;
    if (!attractOptions) {
      return;
    }
    const query = container.particles.grid.query(area, queryCb);
    for (const particle of query) {
      const dx = particle.position.x - position.x, dy = particle.position.y - position.y, distance = hypot(dx, dy), velocity = attractOptions.speed * attractOptions.factor, attractFactor2 = clamp(pluginManager.getEasing(attractOptions.easing)(identity - distance / attractRadius) * velocity, minFactor, attractOptions.maxSpeed);
      updateVector2.x = !distance ? velocity : dx / distance * attractFactor2;
      updateVector2.y = !distance ? velocity : dy / distance * attractFactor2;
      onAttractParticle?.(particle);
      particle.position.subFrom(updateVector2);
    }
  }
  function clickAttract(pluginManager, container, interactivityData, enabledCb, onAttractParticle) {
    container.attract ??= { particles: [] };
    const { attract } = container;
    if (!attract.finish) {
      attract.count ??= 0;
      attract.count++;
      if (attract.count === container.particles.count) {
        attract.finish = true;
      }
    }
    if (attract.clicking) {
      const mousePos = interactivityData.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
      if (!attractRadius || attractRadius < minRadius || !mousePos) {
        return;
      }
      processAttract(pluginManager, container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p) => enabledCb(p), onAttractParticle);
    } else if (attract.clicking === false) {
      attract.particles = [];
    }
  }
  function hoverAttract(pluginManager, container, interactivityData, enabledCb, onAttractParticle) {
    const mousePos = interactivityData.mouse.position, attractRadius = container.retina.attractModeDistance;
    if (!attractRadius || attractRadius < minRadius || !mousePos) {
      return;
    }
    processAttract(pluginManager, container, mousePos, attractRadius, new Circle(mousePos.x, mousePos.y, attractRadius), (p) => enabledCb(p), onAttractParticle);
  }

  // node_modules/@tsparticles/interaction-external-attract/browser/Options/Classes/Attract.js
  init_browser2();
  var Attract = class {
    distance = 200;
    duration = 0.4;
    easing = "ease-out-quad";
    factor = 1;
    maxSpeed = 50;
    restore;
    speed = 1;
    constructor() {
      this.restore = {
        enable: false,
        delay: 0,
        speed: 0.08,
        follow: true
      };
    }
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "distance", data.distance);
      loadProperty(this, "duration", data.duration);
      if (data.easing !== void 0) {
        this.easing = data.easing;
      }
      loadProperty(this, "factor", data.factor);
      if (data.maxSpeed !== void 0) {
        this.maxSpeed = data.maxSpeed;
      }
      loadProperty(this, "speed", data.speed);
      if (data.restore !== void 0) {
        this.restore.enable = data.restore.enable ?? this.restore.enable;
        this.restore.delay = data.restore.delay ?? this.restore.delay;
        this.restore.speed = data.restore.speed ?? this.restore.speed;
        this.restore.follow = data.restore.follow ?? this.restore.follow;
      }
    }
  };

  // node_modules/@tsparticles/interaction-external-attract/browser/Attractor.js
  var attractMode = "attract";
  var minVelocityLengthSq = 0;
  var minRestoreSpeed = 1e-3;
  var maxRestoreSpeed = 1;
  var restoreEpsilon = 0.5;
  var Attractor = class extends ExternalInteractorBase {
    handleClickMode;
    #interactedThisFrame;
    #maxDistance;
    #pluginManager;
    #restoreData;
    constructor(pluginManager, container) {
      super(container);
      this.#pluginManager = pluginManager;
      this.#maxDistance = 0;
      this.#interactedThisFrame = /* @__PURE__ */ new Set();
      this.#restoreData = /* @__PURE__ */ new Map();
      container.attract ??= { particles: [] };
      this.handleClickMode = (mode, interactivityData) => {
        const options = this.container.actualOptions, attract = options.interactivity?.modes.attract;
        if (!attract || mode !== attractMode) {
          return;
        }
        container.attract ??= { particles: [] };
        container.attract.clicking = true;
        container.attract.count = 0;
        for (const particle of container.attract.particles) {
          if (!this.isEnabled(interactivityData, particle)) {
            continue;
          }
          particle.velocity.setTo(particle.initialVelocity);
        }
        container.attract.particles = [];
        container.attract.finish = false;
        setTimeout(() => {
          if (container.destroyed) {
            return;
          }
          container.attract ??= { particles: [] };
          container.attract.clicking = false;
        }, attract.duration * millisecondsToSeconds);
      };
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
      const container = this.container, attract = container.actualOptions.interactivity?.modes.attract;
      if (!attract) {
        return;
      }
      this.#maxDistance = attract.distance;
      container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
    }
    interact(interactivityData) {
      this.#interactedThisFrame.clear();
      const container = this.container, options = container.actualOptions, mouseMoveStatus = interactivityData.status === mouseMoveEvent, events = options.interactivity?.events;
      if (!events) {
        return;
      }
      const { enable: hoverEnabled, mode: hoverMode } = events.onHover, { enable: clickEnabled, mode: clickMode } = events.onClick;
      if (mouseMoveStatus && hoverEnabled && isInArray(attractMode, hoverMode)) {
        hoverAttract(this.#pluginManager, this.container, interactivityData, (p) => this.isEnabled(interactivityData, p), (p) => {
          this.#trackInteractedParticle(p);
        });
      } else if (clickEnabled && isInArray(attractMode, clickMode)) {
        clickAttract(this.#pluginManager, this.container, interactivityData, (p) => this.isEnabled(interactivityData, p), (p) => {
          this.#trackInteractedParticle(p);
        });
      }
      this.#restoreParticles();
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
      if ((!mouse.position || !events?.onHover.enable) && (!mouse.clickPosition || !events?.onClick.enable)) {
        return false;
      }
      const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
      return isInArray(attractMode, hoverMode) || isInArray(attractMode, clickMode);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "attract", Attract, ...sources);
    }
    reset() {
    }
    #restoreParticles() {
      const restore = this.container.actualOptions.interactivity?.modes.attract?.restore;
      if (!restore?.enable || !this.#restoreData.size) {
        return;
      }
      const now = Date.now(), restoreDelay = restore.delay * millisecondsToSeconds, restoreSpeed = Math.max(minRestoreSpeed, Math.min(maxRestoreSpeed, restore.speed));
      for (const [particle, restoreData] of this.#restoreData) {
        if (this.#interactedThisFrame.has(particle)) {
          continue;
        }
        if (particle.destroyed) {
          this.#restoreData.delete(particle);
          continue;
        }
        const target = restoreData.target;
        if (now - restoreData.lastInteractionTime < restoreDelay) {
          continue;
        }
        let dx = target.x - particle.position.x, dy = target.y - particle.position.y, dz = target.z - particle.position.z;
        if (restore.follow && particle.options.move.enable) {
          const { x: vx, y: vy, z: vz } = particle.velocity, velocityLengthSq = vx * vx + vy * vy + vz * vz;
          if (velocityLengthSq > minVelocityLengthSq) {
            const parallelScale = (dx * vx + dy * vy + dz * vz) / velocityLengthSq;
            dx -= vx * parallelScale;
            dy -= vy * parallelScale;
            dz -= vz * parallelScale;
          }
        }
        particle.position.x += dx * restoreSpeed;
        particle.position.y += dy * restoreSpeed;
        particle.position.z += dz * restoreSpeed;
        if (Math.abs(dx) <= restoreEpsilon && Math.abs(dy) <= restoreEpsilon) {
          particle.position.x = target.x;
          particle.position.y = target.y;
          particle.position.z = target.z;
          this.#restoreData.delete(particle);
          continue;
        }
      }
    }
    #trackInteractedParticle(particle) {
      this.#interactedThisFrame.add(particle);
      const restore = this.container.actualOptions.interactivity?.modes.attract?.restore;
      if (!restore?.enable) {
        return;
      }
      const now = Date.now();
      let restoreData = this.#restoreData.get(particle);
      if (!restoreData) {
        restoreData = {
          target: particle.position.copy(),
          lastInteractionTime: now
        };
        this.#restoreData.set(particle, restoreData);
      }
      restoreData.lastInteractionTime = now;
    }
  };

  // node_modules/@tsparticles/interaction-external-attract/browser/index.js
  async function loadExternalAttractInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalAttract", (container) => {
        return Promise.resolve(new Attractor(e.pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-attract/browser/browser.js
  var globalObject26 = globalThis;
  globalObject26.__tsParticlesInternals = globalObject26.__tsParticlesInternals ?? {};
  globalObject26.loadExternalAttractInteraction = loadExternalAttractInteraction;

  // node_modules/@tsparticles/interaction-external-bounce/browser/Bouncer.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-bounce/browser/Utils.js
  init_browser2();
  var halfPI = Math.PI * half;
  var toleranceFactor = 10;
  function processBounce(container, position, radius, area, enabledCb) {
    const query = container.particles.grid.query(area, enabledCb);
    for (const particle of query) {
      if (area instanceof Circle) {
        circleBounce(circleBounceDataFromParticle(particle), {
          position,
          radius,
          mass: radius ** squareExp * halfPI,
          velocity: Vector.origin,
          factor: Vector.origin
        });
      } else if (area instanceof Rectangle) {
        rectBounce(particle, calculateBounds(position, radius));
      }
    }
  }
  function singleSelectorBounce(container, selector, div, bounceCb) {
    const query = safeDocument().querySelectorAll(selector);
    if (!query.length) {
      return;
    }
    query.forEach((item) => {
      const elem = item, pxRatio = container.retina.pixelRatio, pos = {
        x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
      }, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * double, elem.offsetHeight * pxRatio + tolerance * double);
      bounceCb(pos, radius, area);
    });
  }
  function divBounce(container, divs, bounceMode2, enabledCb) {
    divModeExecute(bounceMode2, divs, (selector, div) => {
      singleSelectorBounce(container, selector, div, (pos, radius, area) => {
        processBounce(container, pos, radius, area, enabledCb);
      });
    });
  }
  function mouseBounce(container, interactivityData, enabledCb) {
    const pxRatio = container.retina.pixelRatio, tolerance = toleranceFactor * pxRatio, mousePos = interactivityData.mouse.position, radius = container.retina.bounceModeDistance;
    if (!radius || radius < minRadius || !mousePos) {
      return;
    }
    processBounce(container, mousePos, radius, new Circle(mousePos.x, mousePos.y, radius + tolerance), enabledCb);
  }
  function rectSideBounce(data) {
    const res = { bounced: false }, { pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor } = data;
    if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) {
      return res;
    }
    if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) * half && velocity > minVelocity || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) * half && velocity < minVelocity) {
      res.velocity = velocity * -factor;
      res.bounced = true;
    }
    return res;
  }
  function rectBounce(particle, divBounds) {
    const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), bounceOptions = particle.options.bounce, resH = rectSideBounce({
      pSide: {
        min: bounds.left,
        max: bounds.right
      },
      pOtherSide: {
        min: bounds.top,
        max: bounds.bottom
      },
      rectSide: {
        min: divBounds.left,
        max: divBounds.right
      },
      rectOtherSide: {
        min: divBounds.top,
        max: divBounds.bottom
      },
      velocity: particle.velocity.x,
      factor: getRangeValue(bounceOptions.horizontal.value)
    });
    if (resH.bounced) {
      if (resH.velocity !== void 0) {
        particle.velocity.x = resH.velocity;
      }
      if (resH.position !== void 0) {
        particle.position.x = resH.position;
      }
    }
    const resV = rectSideBounce({
      pSide: {
        min: bounds.top,
        max: bounds.bottom
      },
      pOtherSide: {
        min: bounds.left,
        max: bounds.right
      },
      rectSide: {
        min: divBounds.top,
        max: divBounds.bottom
      },
      rectOtherSide: {
        min: divBounds.left,
        max: divBounds.right
      },
      velocity: particle.velocity.y,
      factor: getRangeValue(bounceOptions.vertical.value)
    });
    if (resV.bounced) {
      if (resV.velocity !== void 0) {
        particle.velocity.y = resV.velocity;
      }
      if (resV.position !== void 0) {
        particle.position.y = resV.position;
      }
    }
  }

  // node_modules/@tsparticles/interaction-external-bounce/browser/Options/Classes/Bounce.js
  init_browser2();
  var Bounce = class {
    distance = 200;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "distance", data.distance);
    }
  };

  // node_modules/@tsparticles/interaction-external-bounce/browser/Bouncer.js
  var bounceMode = "bounce";
  var Bouncer = class extends ExternalInteractorBase {
    #maxDistance;
    constructor(container) {
      super(container);
      this.#maxDistance = 0;
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
      const container = this.container, bounce3 = container.actualOptions.interactivity?.modes.bounce;
      if (!bounce3) {
        return;
      }
      this.#maxDistance = bounce3.distance;
      container.retina.bounceModeDistance = bounce3.distance * container.retina.pixelRatio;
    }
    interact(interactivityData) {
      const container = this.container, options = container.actualOptions, events = options.interactivity?.events, mouseMoveStatus = interactivityData.status === mouseMoveEvent;
      if (!events) {
        return;
      }
      const hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
      if (mouseMoveStatus && hoverEnabled && isInArray(bounceMode, hoverMode)) {
        mouseBounce(this.container, interactivityData, (p) => this.isEnabled(interactivityData, p));
      } else {
        divBounce(this.container, divs, bounceMode, (p) => this.isEnabled(interactivityData, p));
      }
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
      if (!events) {
        return false;
      }
      const divs = events.onDiv;
      return !!mouse.position && events.onHover.enable && isInArray(bounceMode, events.onHover.mode) || isDivModeEnabled(bounceMode, divs);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "bounce", Bounce, ...sources);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-external-bounce/browser/index.js
  async function loadExternalBounceInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalBounce", (container) => {
        return Promise.resolve(new Bouncer(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-bounce/browser/browser.js
  var globalObject27 = globalThis;
  globalObject27.__tsParticlesInternals = globalObject27.__tsParticlesInternals ?? {};
  globalObject27.loadExternalBounceInteraction = loadExternalBounceInteraction;

  // node_modules/@tsparticles/interaction-external-bubble/browser/Bubbler.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/Bubble.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleBase.js
  init_browser2();
  var BubbleBase = class {
    color;
    distance = 200;
    duration = 0.4;
    mix = false;
    opacity;
    size;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "distance", data.distance);
      loadProperty(this, "duration", data.duration);
      loadProperty(this, "mix", data.mix);
      loadRangeProperty(this, "opacity", data.opacity);
      if (data.color !== void 0) {
        const sourceColor = isArray(this.color) ? void 0 : this.color;
        this.color = executeOnSingleOrMultiple(data.color, (color) => {
          return OptionsColor.create(sourceColor, color);
        });
      }
      loadProperty(this, "size", data.size);
    }
  };

  // node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/BubbleDiv.js
  init_browser2();
  var BubbleDiv = class extends BubbleBase {
    selectors = [];
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "selectors", data.selectors);
    }
  };

  // node_modules/@tsparticles/interaction-external-bubble/browser/Options/Classes/Bubble.js
  var Bubble = class extends BubbleBase {
    divs;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
        const tmp = new BubbleDiv();
        tmp.load(div);
        return tmp;
      });
    }
  };

  // node_modules/@tsparticles/interaction-external-bubble/browser/BubbleModifier.js
  var BubbleModifier = class {
    div;
    enabled = false;
    fillColor;
    finalColor;
    id = "bubble";
    inRange = false;
    opacity;
    priority = 100;
    radius;
    strokeColor;
  };

  // node_modules/@tsparticles/interaction-external-bubble/browser/Enums.js
  var ProcessBubbleType;
  (function(ProcessBubbleType2) {
    ProcessBubbleType2["color"] = "color";
    ProcessBubbleType2["opacity"] = "opacity";
    ProcessBubbleType2["size"] = "size";
  })(ProcessBubbleType || (ProcessBubbleType = {}));

  // node_modules/@tsparticles/interaction-external-bubble/browser/Utils.js
  init_browser2();
  function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue >= optionsValue) {
      const value = particleValue + (modeValue - optionsValue) * ratio;
      return clamp(value, particleValue, modeValue);
    } else if (modeValue < optionsValue) {
      const value = particleValue - (optionsValue - modeValue) * ratio;
      return clamp(value, modeValue, particleValue);
    }
    return void 0;
  }

  // node_modules/@tsparticles/interaction-external-bubble/browser/Bubbler.js
  var bubbleMode = "bubble";
  var minDistance2 = 0;
  var defaultClickTime = 0;
  var defaultOpacity3 = 1;
  var ratioOffset = 1;
  var defaultBubbleValue = 0;
  var minRatio = 0;
  var Bubbler = class extends ExternalInteractorBase {
    handleClickMode;
    #maxDistance;
    #modifiers = /* @__PURE__ */ new WeakMap();
    #pluginManager;
    constructor(pluginManager, container) {
      super(container);
      this.#pluginManager = pluginManager;
      this.#maxDistance = 0;
      container.bubble ??= {};
      this.handleClickMode = (mode) => {
        if (mode !== bubbleMode) {
          return;
        }
        container.bubble ??= {};
        container.bubble.clicking = true;
      };
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear(particle, _delta, force) {
      const mod = this.#modifiers.get(particle);
      if (mod?.inRange && !force) {
        return;
      }
      particle.removeModifier(bubbleMode);
      this.#modifiers.delete(particle);
    }
    getOrCreateModifier(particle) {
      let mod = this.#modifiers.get(particle);
      if (!mod) {
        mod = new BubbleModifier();
        this.#modifiers.set(particle, mod);
      }
      if (particle.getModifier(mod.id) !== mod) {
        particle.addModifier(mod);
      }
      return mod;
    }
    init() {
      const container = this.container, bubble = container.actualOptions.interactivity?.modes.bubble;
      if (!bubble) {
        return;
      }
      this.#maxDistance = bubble.distance;
      container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
      if (bubble.size !== void 0) {
        container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
      }
    }
    interact(interactivityData, delta) {
      const options = this.container.actualOptions, events = options.interactivity?.events;
      if (!events) {
        return;
      }
      const onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
      if (hoverEnabled && isInArray(bubbleMode, hoverMode)) {
        this.#hoverBubble(interactivityData);
      } else if (clickEnabled && isInArray(bubbleMode, clickMode)) {
        this.#clickBubble(interactivityData);
      } else {
        divModeExecute(bubbleMode, divs, (selector, div) => {
          this.#singleSelectorHover(interactivityData, delta, selector, div);
        });
      }
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
      if (!events) {
        return false;
      }
      const { onClick, onDiv, onHover } = events, divBubble = isDivModeEnabled(bubbleMode, onDiv);
      if (!(divBubble || onHover.enable && !!mouse.position || onClick.enable && mouse.clickPosition)) {
        return false;
      }
      return isInArray(bubbleMode, onHover.mode) || isInArray(bubbleMode, onClick.mode) || divBubble;
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "bubble", Bubble, ...sources);
    }
    reset(_interactivityData, particle) {
      const mod = this.#modifiers.get(particle);
      if (mod) {
        mod.enabled = false;
        mod.inRange = false;
      }
    }
    #clickBubble(interactivityData) {
      const container = this.container, options = container.actualOptions, mouseClickPos = interactivityData.mouse.clickPosition, bubbleOptions = options.interactivity?.modes.bubble;
      if (!bubbleOptions || !mouseClickPos) {
        return;
      }
      container.bubble ??= {};
      const distance = container.retina.bubbleModeDistance;
      if (!distance || distance < minDistance2) {
        return;
      }
      const distanceSq = distance * distance, query = container.particles.grid.queryCircle(mouseClickPos, distance, (p) => this.isEnabled(interactivityData, p)), { bubble } = container;
      for (const particle of query) {
        if (!bubble.clicking) {
          continue;
        }
        const mod = this.getOrCreateModifier(particle);
        mod.enabled = !bubble.durationEnd;
        mod.inRange = !bubble.durationEnd;
        const pos = particle.getPosition(), mouseDistanceSq = getDistanceSq(pos, mouseClickPos), timeSpent = (performance.now() - (interactivityData.mouse.clickTime ?? defaultClickTime)) / millisecondsToSeconds;
        if (timeSpent > bubbleOptions.duration) {
          bubble.durationEnd = true;
        }
        if (timeSpent > bubbleOptions.duration * double) {
          bubble.clicking = false;
          bubble.durationEnd = false;
        }
        const sizeData = {
          bubbleObj: {
            optValue: container.retina.bubbleModeSize,
            value: mod.radius
          },
          particlesObj: {
            optValue: particle.size.max,
            value: particle.size.value
          },
          type: ProcessBubbleType.size
        };
        this.#process(particle, mouseDistanceSq, timeSpent, sizeData);
        const opacityData = {
          bubbleObj: {
            optValue: bubbleOptions.opacity,
            value: mod.opacity
          },
          particlesObj: {
            optValue: particle.opacity?.max ?? defaultOpacity3,
            value: particle.opacity?.value ?? defaultOpacity3
          },
          type: ProcessBubbleType.opacity
        };
        this.#process(particle, mouseDistanceSq, timeSpent, opacityData);
        if (!bubble.durationEnd && mouseDistanceSq <= distanceSq) {
          this.#hoverBubbleColor(particle, Math.sqrt(mouseDistanceSq));
        } else {
          mod.fillColor = void 0;
          mod.strokeColor = void 0;
        }
      }
    }
    #hoverBubble(interactivityData) {
      const container = this.container, mousePos = interactivityData.mouse.position, distance = container.retina.bubbleModeDistance;
      if (!distance || distance < minDistance2 || !mousePos) {
        return;
      }
      const query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
      for (const particle of query) {
        const mod = this.getOrCreateModifier(particle);
        mod.enabled = true;
        mod.inRange = true;
        const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos), ratio = ratioOffset - pointDistance / distance;
        if (pointDistance <= distance) {
          if (ratio >= minRatio && interactivityData.status === mouseMoveEvent) {
            this.#hoverBubbleSize(particle, ratio);
            this.#hoverBubbleOpacity(particle, ratio);
            this.#hoverBubbleColor(particle, ratio);
          }
        } else {
          this.reset(interactivityData, particle);
        }
        if (interactivityData.status === mouseLeaveEvent) {
          this.reset(interactivityData, particle);
        }
      }
    }
    #hoverBubbleColor(particle, ratio, divBubble) {
      const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity?.modes.bubble, mod = this.getOrCreateModifier(particle);
      if (!bubbleOptions) {
        return;
      }
      if (!mod.finalColor) {
        const modeColor = bubbleOptions.color;
        if (!modeColor) {
          return;
        }
        const bubbleColor = itemFromSingleOrMultiple(modeColor);
        mod.finalColor = rangeColorToHsl(this.#pluginManager, bubbleColor);
      }
      if (!mod.finalColor) {
        return;
      }
      if (bubbleOptions.mix) {
        mod.fillColor = void 0;
        mod.strokeColor = void 0;
        const pColor = particle.getFillColor();
        if (pColor) {
          const mixedColor = rgbToHsl(colorMix(pColor, mod.finalColor, ratioOffset - ratio, ratio, this.container.hdr));
          mod.fillColor = mixedColor;
          mod.strokeColor = mixedColor;
        } else {
          mod.fillColor = mod.finalColor;
          mod.strokeColor = mod.finalColor;
        }
      } else {
        mod.fillColor = mod.finalColor;
        mod.strokeColor = mod.finalColor;
      }
    }
    #hoverBubbleOpacity(particle, ratio, divBubble) {
      const container = this.container, options = container.actualOptions, modeOpacity = divBubble?.opacity ?? options.interactivity?.modes.bubble?.opacity;
      if (!modeOpacity) {
        return;
      }
      const pOpacity = particle.opacity?.value ?? defaultOpacity3, opacity = calculateBubbleValue(pOpacity, modeOpacity, particle.opacity?.max ?? defaultOpacity3, ratio);
      if (opacity !== void 0) {
        const mod = this.getOrCreateModifier(particle);
        mod.opacity = opacity;
      }
    }
    #hoverBubbleSize(particle, ratio, divBubble) {
      const container = this.container, modeSize = divBubble?.size ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
      if (modeSize === void 0) {
        return;
      }
      const pSize = particle.size.value, size = calculateBubbleValue(pSize, modeSize, particle.size.max, ratio);
      if (size !== void 0) {
        const mod = this.getOrCreateModifier(particle);
        mod.radius = size;
      }
    }
    #process(particle, mouseDistanceSq, timeSpent, data) {
      const container = this.container, bubbleParam = data.bubbleObj.optValue, options = container.actualOptions, bubbleOptions = options.interactivity?.modes.bubble;
      if (!bubbleOptions || bubbleParam === void 0) {
        return;
      }
      const bubbleDuration = bubbleOptions.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value ?? defaultBubbleValue, type = data.type;
      if (!bubbleDistance || bubbleDistance < minDistance2 || bubbleParam === particlesParam) {
        return;
      }
      container.bubble ??= {};
      const mod = this.getOrCreateModifier(particle);
      if (container.bubble.durationEnd) {
        if (pObjBubble) {
          if (type === ProcessBubbleType.size) {
            mod.radius = void 0;
          }
          if (type === ProcessBubbleType.opacity) {
            mod.opacity = void 0;
          }
        }
      } else {
        if (mouseDistanceSq <= bubbleDistance * bubbleDistance) {
          const obj = pObjBubble ?? pObj;
          if (obj !== bubbleParam) {
            const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
            if (type === ProcessBubbleType.size) {
              mod.radius = value;
            }
            if (type === ProcessBubbleType.opacity) {
              mod.opacity = value;
            }
          }
        } else {
          if (type === ProcessBubbleType.size) {
            mod.radius = void 0;
          }
          if (type === ProcessBubbleType.opacity) {
            mod.opacity = void 0;
          }
        }
      }
    }
    #singleSelectorHover(interactivityData, delta, selector, div) {
      const container = this.container, selectors = safeDocument().querySelectorAll(selector), bubble = container.actualOptions.interactivity?.modes.bubble;
      if (!bubble || !selectors.length) {
        return;
      }
      selectors.forEach((item) => {
        const elem = item, pxRatio = container.retina.pixelRatio, pos = {
          x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
        }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.grid.query(area, (p) => this.isEnabled(interactivityData, p));
        for (const particle of query) {
          if (!area.contains(particle.getPosition())) {
            continue;
          }
          let mod = this.getOrCreateModifier(particle);
          mod.enabled = true;
          mod.inRange = true;
          const divs = bubble.divs, divBubble = divMode(divs, elem);
          if (!mod.div || mod.div !== elem) {
            this.clear(particle, delta, true);
            mod = this.getOrCreateModifier(particle);
            mod.enabled = true;
            mod.inRange = true;
            mod.div = elem;
          }
          this.#hoverBubbleSize(particle, defaultRatio, divBubble);
          this.#hoverBubbleOpacity(particle, defaultRatio, divBubble);
          this.#hoverBubbleColor(particle, defaultRatio, divBubble);
        }
      });
    }
  };

  // node_modules/@tsparticles/interaction-external-bubble/browser/index.js
  async function loadExternalBubbleInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalBubble", (container) => {
        return Promise.resolve(new Bubbler(e.pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-bubble/browser/browser.js
  var globalObject28 = globalThis;
  globalObject28.__tsParticlesInternals = globalObject28.__tsParticlesInternals ?? {};
  globalObject28.loadExternalBubbleInteraction = loadExternalBubbleInteraction;

  // node_modules/@tsparticles/interaction-external-connect/browser/Connector.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/Connect.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/ConnectLinks.js
  init_browser2();
  var ConnectLinks = class {
    opacity = 0.5;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "opacity", data.opacity);
    }
  };

  // node_modules/@tsparticles/interaction-external-connect/browser/Options/Classes/Connect.js
  var Connect = class {
    distance = 80;
    links = new ConnectLinks();
    radius = 60;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "distance", data.distance);
      this.links.load(data.links);
      loadProperty(this, "radius", data.radius);
    }
  };

  // node_modules/@tsparticles/interaction-external-connect/browser/Utils.js
  init_browser2();
  var gradientMin = 0;
  var gradientMax = 1;
  var defaultLinksWidth = 0;
  function gradient(container, context, p1, p2, opacity) {
    const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
    if (!color1 || !color2) {
      return;
    }
    const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = colorMix(color1, color2, p1.getRadius(), p2.getRadius(), container.hdr), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(gradientMin, getStyleFromHsl(color1, container.hdr, opacity, container.peakNits, container.hdrMode));
    grad.addColorStop(clamp(gradStop, gradientMin, gradientMax), getStyleFromRgb(midRgb, container.hdr, opacity, container.peakNits, container.hdrMode));
    grad.addColorStop(gradientMax, getStyleFromHsl(color2, container.hdr, opacity, container.peakNits, container.hdrMode));
    return grad;
  }
  function drawConnectLine(context, width, lineStyle2, begin, end) {
    drawLine(context, begin, end);
    context.lineWidth = width;
    context.strokeStyle = lineStyle2;
    context.stroke();
  }
  function lineStyle(container, ctx, p1, p2) {
    const options = container.actualOptions, connectOptions = options.interactivity?.modes.connect;
    if (!connectOptions) {
      return;
    }
    return gradient(container, ctx, p1, p2, connectOptions.links.opacity);
  }
  function drawConnection(container, p1, p2) {
    container.canvas.render.draw((ctx) => {
      const ls = lineStyle(container, ctx, p1, p2);
      if (!ls) {
        return;
      }
      const pos1 = p1.getPosition(), pos2 = p2.getPosition();
      drawConnectLine(ctx, p1.retina.linksWidth ?? defaultLinksWidth, ls, pos1, pos2);
    });
  }

  // node_modules/@tsparticles/interaction-external-connect/browser/Connector.js
  var connectMode = "connect";
  var minDistance3 = 0;
  var Connector = class extends ExternalInteractorBase {
    #maxDistance;
    constructor(container) {
      super(container);
      this.#maxDistance = 0;
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
      const container = this.container, connect = container.actualOptions.interactivity?.modes.connect;
      if (!connect) {
        return;
      }
      this.#maxDistance = connect.distance;
      container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
      container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
    }
    interact(interactivityData) {
      const container = this.container, options = container.actualOptions;
      if (options.interactivity?.events.onHover.enable && interactivityData.status === "pointermove") {
        const mousePos = interactivityData.mouse.position, { connectModeDistance, connectModeRadius } = container.retina;
        if (!connectModeDistance || connectModeDistance < minDistance3 || !connectModeRadius || connectModeRadius < minDistance3 || !mousePos) {
          return;
        }
        const distance = Math.abs(connectModeRadius), query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
        query.forEach((p1, i) => {
          const pos1 = p1.getPosition(), indexOffset = 1;
          for (const p2 of query.slice(i + indexOffset)) {
            const pos2 = p2.getPosition(), distMax = Math.abs(connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
            if (xDiff < distMax && yDiff < distMax) {
              drawConnection(container, p1, p2);
            }
          }
        });
      }
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
      if (!(events?.onHover.enable && mouse.position)) {
        return false;
      }
      return isInArray(connectMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "connect", Connect, ...sources);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-external-connect/browser/index.js
  async function loadExternalConnectInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalConnect", (container) => {
        return Promise.resolve(new Connector(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-connect/browser/browser.js
  var globalObject29 = globalThis;
  globalObject29.__tsParticlesInternals = globalObject29.__tsParticlesInternals ?? {};
  globalObject29.loadExternalConnectInteraction = loadExternalConnectInteraction;

  // node_modules/@tsparticles/interaction-external-destroy/browser/Destroyer.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-destroy/browser/Utils.js
  init_browser2();
  var toleranceFactor2 = 10;
  function processDestroy(container, area) {
    const query = container.particles.grid.query(area);
    for (const particle of query) {
      particle.destroy();
    }
  }
  function singleSelectorDestroy(container, selector, div) {
    const query = safeDocument().querySelectorAll(selector);
    if (!query.length) {
      return;
    }
    query.forEach((item) => {
      const elem = item, pxRatio = container.retina.pixelRatio, pos = {
        x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
        y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
      }, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor2 * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, radius + tolerance) : new Rectangle(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * double, elem.offsetHeight * pxRatio + tolerance * double);
      processDestroy(container, area);
    });
  }
  function divDestroy(container, divs, destroyMode2) {
    divModeExecute(destroyMode2, divs, (selector, div) => {
      singleSelectorDestroy(container, selector, div);
    });
  }
  function mouseDestroy(container, interactivityData) {
    const pxRatio = container.retina.pixelRatio, tolerance = toleranceFactor2 * pxRatio, mousePos = interactivityData.mouse.position, radius = container.retina.destroyModeDistance;
    if (!radius || radius < minRadius || !mousePos) {
      return;
    }
    processDestroy(container, new Circle(mousePos.x, mousePos.y, radius + tolerance));
  }

  // node_modules/@tsparticles/interaction-external-destroy/browser/Options/Classes/Destroy.js
  init_browser2();
  var Destroy2 = class {
    distance = 200;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "distance", data.distance);
    }
  };

  // node_modules/@tsparticles/interaction-external-destroy/browser/Destroyer.js
  var destroyMode = "destroy";
  var Destroyer = class extends ExternalInteractorBase {
    #maxDistance;
    constructor(container) {
      super(container);
      this.#maxDistance = 0;
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
      const container = this.container, destroy2 = container.actualOptions.interactivity?.modes.destroy;
      if (!destroy2) {
        return;
      }
      this.#maxDistance = destroy2.distance;
      container.retina.destroyModeDistance = destroy2.distance * container.retina.pixelRatio;
    }
    interact(interactivityData) {
      const container = this.container, options = container.actualOptions, events = options.interactivity?.events, mouseMoveStatus = interactivityData.status === mouseMoveEvent;
      if (!events) {
        return;
      }
      const hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
      if (mouseMoveStatus && hoverEnabled && isInArray(destroyMode, hoverMode)) {
        mouseDestroy(this.container, interactivityData);
      } else {
        divDestroy(this.container, divs, destroyMode);
      }
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
      if (!events) {
        return false;
      }
      const divs = events.onDiv;
      return !!mouse.position && events.onHover.enable && isInArray(destroyMode, events.onHover.mode) || isDivModeEnabled(destroyMode, divs);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "destroy", Destroy2, ...sources);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-external-destroy/browser/index.js
  async function loadExternalDestroyInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalDestroy", async (container) => {
        return Promise.resolve(new Destroyer(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-destroy/browser/browser.js
  var globalObject30 = globalThis;
  globalObject30.__tsParticlesInternals = globalObject30.__tsParticlesInternals ?? {};
  globalObject30.loadExternalDestroyInteraction = loadExternalDestroyInteraction;

  // node_modules/@tsparticles/interaction-external-grab/browser/Grabber.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/Grab.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/GrabLinks.js
  init_browser2();
  var GrabLinks = class {
    blink = false;
    color;
    consent = false;
    opacity = 1;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "blink", data.blink);
      if (data.color !== void 0) {
        this.color = OptionsColor.create(this.color, data.color);
      }
      loadProperty(this, "consent", data.consent);
      loadRangeProperty(this, "opacity", data.opacity);
    }
  };

  // node_modules/@tsparticles/interaction-external-grab/browser/Options/Classes/Grab.js
  var Grab = class {
    distance = 100;
    links = new GrabLinks();
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "distance", data.distance);
      this.links.load(data.links);
    }
  };

  // node_modules/@tsparticles/interaction-external-grab/browser/Utils.js
  init_browser2();
  var defaultWidth = 0;
  function drawGrabLine(context, width, begin, end, colorLine, opacity, hdr = false, peakNits, mode) {
    drawLine(context, begin, end);
    context.strokeStyle = getStyleFromRgb(colorLine, hdr, opacity, peakNits, mode);
    context.lineWidth = width;
    context.stroke();
  }
  function drawGrab(container, particle, lineColor, opacity, mousePos) {
    container.canvas.render.draw((ctx) => {
      const beginPos = particle.getPosition();
      drawGrabLine(ctx, particle.retina.linksWidth ?? defaultWidth, beginPos, mousePos, lineColor, opacity, container.hdr, container.peakNits, container.hdrMode);
    });
  }

  // node_modules/@tsparticles/interaction-external-grab/browser/Grabber.js
  var grabMode = "grab";
  var minDistance4 = 0;
  var minOpacity = 0;
  var Grabber = class extends ExternalInteractorBase {
    #maxDistance;
    #pluginManager;
    constructor(pluginManager, container) {
      super(container);
      this.#pluginManager = pluginManager;
      this.#maxDistance = 0;
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
      const container = this.container, grab = container.actualOptions.interactivity?.modes.grab;
      if (!grab) {
        return;
      }
      this.#maxDistance = grab.distance;
      container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
    }
    interact(interactivityData) {
      const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
      if (!interactivity?.modes.grab || !interactivity.events.onHover.enable || interactivityData.status !== mouseMoveEvent) {
        return;
      }
      const mousePos = interactivityData.mouse.position;
      if (!mousePos) {
        return;
      }
      const distance = container.retina.grabModeDistance;
      if (!distance || distance < minDistance4) {
        return;
      }
      const query = container.particles.grid.queryCircle(mousePos, distance, (p) => this.isEnabled(interactivityData, p));
      for (const particle of query) {
        const pos = particle.getPosition(), pointDistance = getDistance(pos, mousePos);
        if (pointDistance > distance) {
          continue;
        }
        const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
        if (opacityLine <= minOpacity) {
          continue;
        }
        const optColor = grabLineOptions.color ?? particle.options.links?.color;
        if (!container.particles.grabLineColor && optColor) {
          const linksOptions = interactivity.modes.grab.links;
          container.particles.grabLineColor = getLinkRandomColor(this.#pluginManager, optColor, linksOptions.blink, linksOptions.consent);
        }
        const colorLine = getLinkColor(particle, void 0, container.particles.grabLineColor, container.hdr);
        if (!colorLine) {
          continue;
        }
        drawGrab(container, particle, colorLine, opacityLine, mousePos);
      }
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
      return !!events?.onHover.enable && !!mouse.position && isInArray(grabMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "grab", Grab, ...sources);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-external-grab/browser/index.js
  async function loadExternalGrabInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalGrab", (container) => {
        return Promise.resolve(new Grabber(e.pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-grab/browser/browser.js
  var globalObject31 = globalThis;
  globalObject31.__tsParticlesInternals = globalObject31.__tsParticlesInternals ?? {};
  globalObject31.loadExternalGrabInteraction = loadExternalGrabInteraction;

  // node_modules/@tsparticles/interaction-external-parallax/browser/Parallaxer.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-parallax/browser/Options/Classes/Parallax.js
  init_browser2();
  var Parallax = class {
    force = 2;
    smooth = 10;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "force", data.force);
      loadProperty(this, "smooth", data.smooth);
    }
  };

  // node_modules/@tsparticles/interaction-external-parallax/browser/Parallaxer.js
  var parallaxMode = "parallax";
  var Parallaxer = class extends ExternalInteractorBase {
    maxDistance = 0;
    constructor(container) {
      super(container);
    }
    clear() {
    }
    init() {
    }
    interact(interactivityData) {
      for (const particle of this.container.particles.filter((p) => this.isEnabled(interactivityData, p))) {
        this.#parallaxInteract(interactivityData, particle);
      }
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
      return !!events?.onHover.enable && !!mouse.position && isInArray(parallaxMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "parallax", Parallax, ...sources);
    }
    reset() {
    }
    #parallaxInteract(interactivityData, particle) {
      if (!this.isEnabled(interactivityData, particle)) {
        return;
      }
      const container = this.container, options = container.actualOptions, parallaxOptions = options.interactivity?.modes.parallax;
      if (!parallaxOptions) {
        return;
      }
      const parallaxForce = parallaxOptions.force, mousePos = interactivityData.mouse.position;
      if (!mousePos) {
        return;
      }
      const canvasSize = container.canvas.size, canvasCenter = {
        x: canvasSize.width * half,
        y: canvasSize.height * half
      }, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
        x: (mousePos.x - canvasCenter.x) * factor,
        y: (mousePos.y - canvasCenter.y) * factor
      }, { offset } = particle;
      offset.x += (centerDistance.x - offset.x) / parallaxSmooth;
      offset.y += (centerDistance.y - offset.y) / parallaxSmooth;
    }
  };

  // node_modules/@tsparticles/interaction-external-parallax/browser/index.js
  async function loadExternalParallaxInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalParallax", (container) => {
        return Promise.resolve(new Parallaxer(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-parallax/browser/browser.js
  var globalObject32 = globalThis;
  globalObject32.__tsParticlesInternals = globalObject32.__tsParticlesInternals ?? {};
  globalObject32.loadExternalParallaxInteraction = loadExternalParallaxInteraction;

  // node_modules/@tsparticles/interaction-external-pause/browser/Pauser.js
  init_browser2();
  var pauseMode = "pause";
  var Pauser = class extends ExternalInteractorBase {
    handleClickMode;
    maxDistance = 0;
    constructor(container) {
      super(container);
      this.handleClickMode = (mode) => {
        if (mode !== pauseMode) {
          return;
        }
        const container2 = this.container;
        if (container2.animationStatus) {
          container2.pause();
        } else {
          container2.play();
        }
      };
    }
    clear() {
    }
    init() {
    }
    interact() {
    }
    isEnabled(_interactivityData, particle) {
      const container = this.container, options = container.actualOptions, events = (particle?.interactivity ?? options.interactivity)?.events;
      return !!events && isInArray(pauseMode, events.onClick.mode);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-external-pause/browser/index.js
  async function loadExternalPauseInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalPause", (container) => {
        return Promise.resolve(new Pauser(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-pause/browser/browser.js
  var globalObject33 = globalThis;
  globalObject33.__tsParticlesInternals = globalObject33.__tsParticlesInternals ?? {};
  globalObject33.loadExternalPauseInteraction = loadExternalPauseInteraction;

  // node_modules/@tsparticles/interaction-external-push/browser/Pusher.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-push/browser/Options/Classes/Push.js
  init_browser2();
  var Push = class {
    default = true;
    groups = [];
    particles;
    quantity = 4;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "default", data.default);
      if (data.groups !== void 0) {
        this.groups = data.groups.map((t) => t);
      }
      if (!this.groups.length) {
        this.default = true;
      }
      loadRangeProperty(this, "quantity", data.quantity);
      this.particles = executeOnSingleOrMultiple(data.particles, (particles) => {
        return deepExtend({}, particles);
      });
    }
  };

  // node_modules/@tsparticles/interaction-external-push/browser/Pusher.js
  var pushMode = "push";
  var minQuantity2 = 0;
  var Pusher = class extends ExternalInteractorBase {
    handleClickMode;
    maxDistance = 0;
    constructor(container) {
      super(container);
      this.handleClickMode = (mode, interactivityData) => {
        if (mode !== pushMode) {
          return;
        }
        const container2 = this.container, options = container2.actualOptions, pushOptions = options.interactivity?.modes.push;
        if (!pushOptions) {
          return;
        }
        const quantity = getRangeValue(pushOptions.quantity);
        if (quantity <= minQuantity2) {
          return;
        }
        const group = itemFromArray([void 0, ...pushOptions.groups]), groupOptions = group !== void 0 ? container2.actualOptions.particles.groups[group] : void 0, particlesOptions = itemFromSingleOrMultiple(pushOptions.particles), overrideOptions = deepExtend(groupOptions, particlesOptions);
        container2.particles.push(quantity, interactivityData.mouse.position, overrideOptions, group);
      };
    }
    clear() {
    }
    init() {
    }
    interact() {
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
      return !!events && mouse.clicking && mouse.inside && !!mouse.position && isInArray(pushMode, events.onClick.mode);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "push", Push, ...sources);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-external-push/browser/index.js
  async function loadExternalPushInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalPush", (container) => {
        return Promise.resolve(new Pusher(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-push/browser/browser.js
  var globalObject34 = globalThis;
  globalObject34.__tsParticlesInternals = globalObject34.__tsParticlesInternals ?? {};
  globalObject34.loadExternalPushInteraction = loadExternalPushInteraction;

  // node_modules/@tsparticles/interaction-external-remove/browser/Remover.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-remove/browser/Options/Classes/Remove.js
  init_browser2();
  var Remove = class {
    quantity = 2;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "quantity", data.quantity);
    }
  };

  // node_modules/@tsparticles/interaction-external-remove/browser/Remover.js
  var removeMode = "remove";
  var Remover = class extends ExternalInteractorBase {
    handleClickMode;
    maxDistance = 0;
    constructor(container) {
      super(container);
      this.handleClickMode = (mode) => {
        const container2 = this.container, options = container2.actualOptions;
        if (!options.interactivity?.modes.remove || mode !== removeMode) {
          return;
        }
        const removeNb = getRangeValue(options.interactivity.modes.remove.quantity);
        for (let i = 0; i < removeNb; i++) {
          container2.particles.get(i)?.destroy();
        }
      };
    }
    clear() {
    }
    init() {
    }
    interact() {
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
      return !!events && mouse.clicking && mouse.inside && !!mouse.position && isInArray(removeMode, events.onClick.mode);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "remove", Remove, ...sources);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-external-remove/browser/index.js
  async function loadExternalRemoveInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalRemove", (container) => {
        return Promise.resolve(new Remover(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-remove/browser/browser.js
  var globalObject35 = globalThis;
  globalObject35.__tsParticlesInternals = globalObject35.__tsParticlesInternals ?? {};
  globalObject35.loadExternalRemoveInteraction = loadExternalRemoveInteraction;

  // node_modules/@tsparticles/interaction-external-repulse/browser/Repulser.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/Repulse.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseBase.js
  init_browser2();
  var RepulseBase = class {
    distance = 200;
    duration = 0.4;
    easing = "ease-out-quad";
    factor = 100;
    maxSpeed = 50;
    restore;
    speed = 1;
    constructor() {
      this.restore = {
        enable: false,
        delay: 0,
        speed: 0.08,
        follow: true
      };
    }
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "distance", data.distance);
      loadProperty(this, "duration", data.duration);
      loadProperty(this, "easing", data.easing);
      loadProperty(this, "factor", data.factor);
      loadProperty(this, "speed", data.speed);
      loadProperty(this, "maxSpeed", data.maxSpeed);
      if (data.restore !== void 0) {
        this.restore.enable = data.restore.enable ?? this.restore.enable;
        this.restore.delay = data.restore.delay ?? this.restore.delay;
        this.restore.speed = data.restore.speed ?? this.restore.speed;
        this.restore.follow = data.restore.follow ?? this.restore.follow;
      }
    }
  };

  // node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/RepulseDiv.js
  init_browser2();
  var RepulseDiv = class extends RepulseBase {
    selectors = [];
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "selectors", data.selectors);
    }
  };

  // node_modules/@tsparticles/interaction-external-repulse/browser/Options/Classes/Repulse.js
  var Repulse = class extends RepulseBase {
    divs;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      this.divs = executeOnSingleOrMultiple(data.divs, (div) => {
        const tmp = new RepulseDiv();
        tmp.load(div);
        return tmp;
      });
    }
  };

  // node_modules/@tsparticles/interaction-external-repulse/browser/Repulser.js
  var repulseMode = "repulse";
  var minDistance5 = 0;
  var repulseRadiusFactor = 6;
  var repulseRadiusPower = 3;
  var minSpeed = 0;
  var easingOffset = 1;
  var minRestoreSpeed2 = 1e-3;
  var maxRestoreSpeed2 = 1;
  var restoreEpsilon2 = 0.5;
  var Repulser = class extends ExternalInteractorBase {
    handleClickMode;
    #clickVec;
    #interactedThisFrame;
    #maxDistance;
    #normVec;
    #pluginManager;
    #restoreData;
    constructor(pluginManager, container) {
      super(container);
      this.#pluginManager = pluginManager;
      this.#maxDistance = 0;
      this.#normVec = Vector.origin;
      this.#interactedThisFrame = /* @__PURE__ */ new Set();
      this.#clickVec = Vector.origin;
      this.#restoreData = /* @__PURE__ */ new Map();
      container.repulse ??= { particles: [] };
      this.handleClickMode = (mode, interactivityData) => {
        const options = this.container.actualOptions, repulseOpts = options.interactivity?.modes.repulse;
        if (!repulseOpts || mode !== repulseMode) {
          return;
        }
        container.repulse ??= { particles: [] };
        const repulse = container.repulse;
        repulse.clicking = true;
        repulse.count = 0;
        for (const particle of container.repulse.particles) {
          if (!this.isEnabled(interactivityData, particle)) {
            continue;
          }
          particle.velocity.setTo(particle.initialVelocity);
        }
        repulse.particles = [];
        repulse.finish = false;
        setTimeout(() => {
          if (container.destroyed) {
            return;
          }
          repulse.clicking = false;
        }, repulseOpts.duration * millisecondsToSeconds);
      };
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
      const container = this.container, repulse = container.actualOptions.interactivity?.modes.repulse;
      if (!repulse) {
        return;
      }
      this.#maxDistance = repulse.distance;
      container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
    }
    interact(interactivityData) {
      this.#interactedThisFrame.clear();
      const container = this.container, options = container.actualOptions, mouseMoveStatus = interactivityData.status === mouseMoveEvent, events = options.interactivity?.events;
      if (!events) {
        return;
      }
      const hover = events.onHover, hoverEnabled = hover.enable, hoverMode = hover.mode, click = events.onClick, clickEnabled = click.enable, clickMode = click.mode, divs = events.onDiv;
      if (mouseMoveStatus && hoverEnabled && isInArray(repulseMode, hoverMode)) {
        this.#hoverRepulse(interactivityData);
      } else if (clickEnabled && isInArray(repulseMode, clickMode)) {
        this.#clickRepulse(interactivityData);
      } else {
        divModeExecute(repulseMode, divs, (selector, div) => {
          this.#singleSelectorRepulse(interactivityData, selector, div);
        });
      }
      this.#restoreParticles();
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, options = container.actualOptions, mouse = interactivityData.mouse, events = (particle?.interactivity ?? options.interactivity)?.events;
      if (!events) {
        return false;
      }
      const divs = events.onDiv, hover = events.onHover, click = events.onClick, divRepulse = isDivModeEnabled(repulseMode, divs);
      if (!(divRepulse || hover.enable && !!mouse.position || click.enable && mouse.clickPosition)) {
        return false;
      }
      const hoverMode = hover.mode, clickMode = click.mode;
      return isInArray(repulseMode, hoverMode) || isInArray(repulseMode, clickMode) || divRepulse;
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "repulse", Repulse, ...sources);
    }
    reset() {
    }
    #clickRepulse(interactivityData) {
      const container = this.container, repulseOptions = container.actualOptions.interactivity?.modes.repulse;
      if (!repulseOptions) {
        return;
      }
      const repulse = container.repulse ?? { particles: [] };
      if (!repulse.finish) {
        repulse.count ??= 0;
        repulse.count++;
        if (repulse.count === container.particles.count) {
          repulse.finish = true;
        }
      }
      if (repulse.clicking) {
        const repulseDistance = container.retina.repulseModeDistance;
        if (!repulseDistance || repulseDistance < minDistance5) {
          return;
        }
        const repulseRadius = Math.pow(repulseDistance / repulseRadiusFactor, repulseRadiusPower), mouseClickPos = interactivityData.mouse.clickPosition;
        if (mouseClickPos === void 0) {
          return;
        }
        const query = container.particles.grid.queryCircle(mouseClickPos, repulseRadius, (p) => this.isEnabled(interactivityData, p)), forceScale = repulseRadius * repulseOptions.speed;
        for (const particle of query) {
          const dx = particle.position.x - mouseClickPos.x, dy = particle.position.y - mouseClickPos.y, distanceSq = dx * dx + dy * dy;
          if (distanceSq <= repulseRadius) {
            this.#trackInteractedParticle(particle);
            repulse.particles.push(particle);
            const inverseDistance = distanceSq > minDistance5 ? 1 / Math.sqrt(distanceSq) : minSpeed, force = distanceSq > minDistance5 ? forceScale / distanceSq : minSpeed;
            this.#clickVec.x = dx * inverseDistance * force;
            this.#clickVec.y = dy * inverseDistance * force;
            particle.velocity.setTo(this.#clickVec);
          }
        }
      } else if (repulse.clicking === false) {
        for (const particle of repulse.particles) {
          particle.velocity.setTo(particle.initialVelocity);
        }
        repulse.particles = [];
      }
    }
    #hoverRepulse(interactivityData) {
      const container = this.container, mousePos = interactivityData.mouse.position, repulseRadius = container.retina.repulseModeDistance;
      if (!repulseRadius || repulseRadius < minRadius || !mousePos) {
        return;
      }
      this.#processRepulse(interactivityData, mousePos, repulseRadius, new Circle(mousePos.x, mousePos.y, repulseRadius));
    }
    #processRepulse(interactivityData, position, repulseRadius, area, divRepulse) {
      const container = this.container, query = container.particles.grid.query(area, (p) => this.isEnabled(interactivityData, p)), repulseOptions = container.actualOptions.interactivity?.modes.repulse;
      if (!repulseOptions) {
        return;
      }
      const { easing, speed, factor, maxSpeed } = repulseOptions, easingFunc = this.#pluginManager.getEasing(easing), velocity = (divRepulse?.speed ?? speed) * factor;
      for (const particle of query) {
        const dx = particle.position.x - position.x, dy = particle.position.y - position.y, distance = hypot(dx, dy), repulseFactor = clamp(easingFunc(easingOffset - distance / repulseRadius) * velocity, minSpeed, maxSpeed);
        this.#normVec.x = !distance ? velocity : dx / distance * repulseFactor;
        this.#normVec.y = !distance ? velocity : dy / distance * repulseFactor;
        this.#trackInteractedParticle(particle);
        particle.position.addTo(this.#normVec);
      }
    }
    #restoreParticles() {
      const restore = this.container.actualOptions.interactivity?.modes.repulse?.restore;
      if (!restore?.enable || !this.#restoreData.size) {
        return;
      }
      const now = Date.now(), restoreDelay = restore.delay * millisecondsToSeconds, restoreSpeed = Math.max(minRestoreSpeed2, Math.min(maxRestoreSpeed2, restore.speed));
      for (const [particle, restoreData] of this.#restoreData) {
        if (this.#interactedThisFrame.has(particle)) {
          continue;
        }
        if (particle.destroyed) {
          this.#restoreData.delete(particle);
          continue;
        }
        const target = restoreData.target;
        if (now - restoreData.lastInteractionTime < restoreDelay) {
          continue;
        }
        if (restore.follow && particle.options.move.enable) {
          target.x += particle.velocity.x;
          target.y += particle.velocity.y;
          target.z += particle.velocity.z;
        }
        const dx = target.x - particle.position.x, dy = target.y - particle.position.y, dz = target.z - particle.position.z;
        particle.position.x += dx * restoreSpeed;
        particle.position.y += dy * restoreSpeed;
        particle.position.z += dz * restoreSpeed;
        if (Math.abs(dx) <= restoreEpsilon2 && Math.abs(dy) <= restoreEpsilon2) {
          particle.position.x = target.x;
          particle.position.y = target.y;
          particle.position.z = target.z;
          this.#restoreData.delete(particle);
          continue;
        }
      }
    }
    #singleSelectorRepulse(interactivityData, selector, div) {
      const container = this.container, repulse = container.actualOptions.interactivity?.modes.repulse;
      if (!repulse) {
        return;
      }
      const query = safeDocument().querySelectorAll(selector);
      if (!query.length) {
        return;
      }
      query.forEach((item) => {
        const elem = item, pxRatio = container.retina.pixelRatio, pos = {
          x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
          y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
        }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === DivType.circle ? new Circle(pos.x, pos.y, repulseRadius) : new Rectangle(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = divMode(divs, elem);
        this.#processRepulse(interactivityData, pos, repulseRadius, area, divRepulse);
      });
    }
    #trackInteractedParticle(particle) {
      this.#interactedThisFrame.add(particle);
      const restore = this.container.actualOptions.interactivity?.modes.repulse?.restore;
      if (!restore?.enable) {
        return;
      }
      const now = Date.now();
      let restoreData = this.#restoreData.get(particle);
      if (!restoreData) {
        restoreData = {
          target: particle.position.copy(),
          lastInteractionTime: now
        };
        this.#restoreData.set(particle, restoreData);
      }
      restoreData.lastInteractionTime = now;
      if (restore.follow && particle.options.move.enable) {
        restoreData.target.x += particle.velocity.x;
        restoreData.target.y += particle.velocity.y;
        restoreData.target.z += particle.velocity.z;
      }
    }
  };

  // node_modules/@tsparticles/interaction-external-repulse/browser/index.js
  async function loadExternalRepulseInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      const pluginManager = e.pluginManager;
      pluginManager.addInteractor?.("externalRepulse", (container) => {
        return Promise.resolve(new Repulser(pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-repulse/browser/browser.js
  var globalObject36 = globalThis;
  globalObject36.__tsParticlesInternals = globalObject36.__tsParticlesInternals ?? {};
  globalObject36.loadExternalRepulseInteraction = loadExternalRepulseInteraction;

  // node_modules/@tsparticles/interaction-external-slow/browser/Slower.js
  init_browser2();

  // node_modules/@tsparticles/interaction-external-slow/browser/Options/Classes/Slow.js
  init_browser2();
  var Slow = class {
    factor = 3;
    radius = 200;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "factor", data.factor);
      loadProperty(this, "radius", data.radius);
    }
  };

  // node_modules/@tsparticles/interaction-external-slow/browser/SlowModifier.js
  var SlowModifier = class {
    enabled = false;
    id = "slow";
    priority = 100;
    speedFactor = 1;
  };

  // node_modules/@tsparticles/interaction-external-slow/browser/Slower.js
  var slowMode = "slow";
  var Slower = class extends ExternalInteractorBase {
    #maxDistance;
    #modifiers = /* @__PURE__ */ new WeakMap();
    constructor(container) {
      super(container);
      this.#maxDistance = 0;
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear(particle, _delta, force) {
      const mod = this.#modifiers.get(particle);
      if (mod?.enabled && !force) {
        return;
      }
      particle.removeModifier(slowMode);
      this.#modifiers.delete(particle);
    }
    getOrCreateModifier(particle) {
      let mod = this.#modifiers.get(particle);
      if (!mod) {
        mod = new SlowModifier();
        this.#modifiers.set(particle, mod);
      }
      if (particle.getModifier(mod.id) !== mod) {
        particle.addModifier(mod);
      }
      return mod;
    }
    init() {
      const container = this.container, slow = container.actualOptions.interactivity?.modes.slow;
      if (!slow) {
        return;
      }
      this.#maxDistance = slow.radius;
      container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
    }
    interact() {
    }
    isEnabled(interactivityData, particle) {
      const container = this.container, mouse = interactivityData.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity)?.events;
      return !!events?.onHover.enable && !!mouse.position && isInArray(slowMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
      loadOptionProperty(options, "slow", Slow, ...sources);
    }
    reset(interactivityData, particle) {
      const mod = this.#modifiers.get(particle);
      if (mod) {
        mod.enabled = false;
      }
      const container = this.container, options = container.actualOptions, mousePos = interactivityData.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity?.modes.slow;
      if (!slowOptions || !radius || radius < minRadius || !mousePos) {
        return;
      }
      const particlePos = particle.getPosition(), dist = getDistance(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slowOptions.factor;
      if (dist > radius) {
        return;
      }
      const activeMod = this.getOrCreateModifier(particle);
      activeMod.enabled = true;
      activeMod.speedFactor = proximityFactor / slowFactor;
    }
  };

  // node_modules/@tsparticles/interaction-external-slow/browser/index.js
  async function loadExternalSlowInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("externalSlow", (container) => {
        return Promise.resolve(new Slower(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-external-slow/browser/browser.js
  var globalObject37 = globalThis;
  globalObject37.__tsParticlesInternals = globalObject37.__tsParticlesInternals ?? {};
  globalObject37.loadExternalSlowInteraction = loadExternalSlowInteraction;

  // node_modules/@tsparticles/shape-image/browser/Utils.js
  init_browser2();
  var shapeTypes = ["image", "images"];
  var stringStart = 0;
  var defaultOpacity4 = 1;
  var currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
  function replaceColorSvg(imageShape, color, opacity, hdr = false, peakNits, mode) {
    const { svgData } = imageShape;
    if (!svgData) {
      return "";
    }
    const colorStyle = getStyleFromHsl(color, hdr, opacity, peakNits, mode);
    if (svgData.includes("fill")) {
      return svgData.replaceAll(currentColorRegex, () => colorStyle);
    }
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(stringStart, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
  }
  async function loadImage(image) {
    return new Promise((resolve) => {
      image.loading = true;
      const img = new Image();
      image.element = img;
      img.addEventListener("load", () => {
        image.loading = false;
        resolve();
      });
      img.addEventListener("error", () => {
        image.element = void 0;
        image.error = true;
        image.loading = false;
        getLogger().error(`Error loading image: ${image.source}`);
        resolve();
      });
      img.src = image.source;
    });
  }
  async function downloadSvgImage(image) {
    if (image.type !== "svg") {
      await loadImage(image);
      return;
    }
    image.loading = true;
    const response = await fetch(image.source);
    if (response.ok) {
      image.svgData = await response.text();
    } else {
      getLogger().error("Image not found");
      image.error = true;
    }
    image.loading = false;
  }
  function replaceImageColor(image, imageData, color, particle, hdr = false, peakNits, mode) {
    const svgColoredData = replaceColorSvg(image, color, particle.opacity?.value ?? defaultOpacity4, hdr, peakNits, mode), imageRes = {
      color,
      data: {
        ...image,
        svgData: svgColoredData
      },
      loaded: false,
      ratio: imageData.width / imageData.height,
      replaceColor: imageData.replaceColor,
      source: imageData.src
    };
    return new Promise((resolve) => {
      const svg = new Blob([svgColoredData], { type: "image/svg+xml" }), url = URL.createObjectURL(svg), img = new Image();
      img.addEventListener("load", () => {
        imageRes.loaded = true;
        imageRes.element = img;
        resolve(imageRes);
        URL.revokeObjectURL(url);
      });
      const errorHandler = async () => {
        URL.revokeObjectURL(url);
        const img2 = {
          ...image,
          error: false,
          loading: true
        };
        await loadImage(img2);
        imageRes.loaded = true;
        imageRes.element = img2.element;
        resolve(imageRes);
      };
      img.addEventListener("error", () => void errorHandler());
      img.src = url;
    });
  }

  // node_modules/@tsparticles/shape-image/browser/index.js
  init_browser2();

  // node_modules/@tsparticles/shape-image/browser/ErrorCodes.js
  var ErrorCodes5 = {
    imageCollectionNotFound: "TSP-2001",
    imageSourceNotFound: "TSP-2002",
    imageNotFound: "TSP-2003",
    imageShapeNotInitialized: "TSP-2004"
  };

  // node_modules/@tsparticles/shape-image/browser/ErrorMessages.js
  var ErrorMessages4 = {
    [ErrorCodes5.imageCollectionNotFound]: "No images collection found",
    [ErrorCodes5.imageSourceNotFound]: "No image source provided",
    [ErrorCodes5.imageNotFound]: "{0} not found",
    [ErrorCodes5.imageShapeNotInitialized]: "Image shape not initialized"
  };

  // node_modules/@tsparticles/shape-image/browser/ImageDrawer.js
  init_browser2();
  var sides3 = 12;
  var ImageDrawer = class {
    #container;
    #engine;
    constructor(engine, container) {
      this.#engine = engine;
      this.#container = container;
    }
    draw(data) {
      const { context, radius, particle, opacity } = data, image = particle.image, element = image?.element;
      if (!image) {
        return;
      }
      context.globalAlpha = opacity;
      if (element) {
        const ratio = image.ratio, pos = {
          x: -radius,
          y: -radius
        }, diameter = radius * double;
        context.drawImage(element, pos.x, pos.y, diameter, diameter / ratio);
      }
      context.globalAlpha = defaultAlpha;
    }
    getSidesCount() {
      return sides3;
    }
    async init(container) {
      const options = container.actualOptions;
      if (!options.preload || !this.#engine.loadImage) {
        return;
      }
      const promises = [];
      for (const imageData of options.preload) {
        promises.push(this.#engine.loadImage(container, imageData));
      }
      await Promise.all(promises);
    }
    loadShape(particle) {
      const container = this.#container;
      if (!particle.shape || !shapeTypes.includes(particle.shape)) {
        return;
      }
      const imageData = particle.shapeData;
      if (!imageData) {
        return;
      }
      const images = this.#engine.getImages?.(container), image = images?.find((t) => t.name === imageData.name || t.source === imageData.src);
      if (image) {
        return;
      }
      void this.#loadImageShape(container, imageData).then(() => {
        this.loadShape(particle);
      });
    }
    particleInit(container, particle) {
      if (particle.shape !== "image" && particle.shape !== "images") {
        return;
      }
      const images = this.#engine.getImages?.(container), imageData = particle.shapeData;
      if (!imageData) {
        return;
      }
      const color = particle.getFillColor(), image = images?.find((t) => t.name === imageData.name || t.source === imageData.src);
      if (!image) {
        return;
      }
      const replaceColor = imageData.replaceColor;
      if (image.loading) {
        setTimeout(() => {
          this.particleInit(container, particle);
        });
        return;
      }
      void (async () => {
        let imageRes;
        if (image.svgData && color) {
          imageRes = await replaceImageColor(image, imageData, color, particle, container.hdr, container.peakNits, container.hdrMode);
        } else {
          imageRes = {
            color,
            data: image,
            element: image.element,
            loaded: true,
            ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? defaultRatio,
            replaceColor,
            source: imageData.src
          };
        }
        if (!imageRes.ratio) {
          imageRes.ratio = 1;
        }
        const close = imageData.close ?? particle.shapeClose, imageShape = {
          image: imageRes,
          close
        };
        particle.image = imageShape.image;
        particle.shapeClose = imageShape.close;
      })();
    }
    #loadImageShape = async (container, imageShape) => {
      if (!this.#engine.loadImage) {
        throw new Error(getErrorMessage(ErrorCodes5.imageShapeNotInitialized));
      }
      await this.#engine.loadImage(container, {
        name: imageShape.name,
        replaceColor: imageShape.replaceColor,
        src: imageShape.src
      });
    };
  };

  // node_modules/@tsparticles/shape-image/browser/Options/Classes/Preload.js
  init_browser2();
  var Preload = class {
    height;
    name;
    replaceColor;
    src = "";
    width;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "height", data.height);
      loadProperty(this, "name", data.name);
      loadProperty(this, "replaceColor", data.replaceColor);
      loadProperty(this, "src", data.src);
      loadProperty(this, "width", data.width);
    }
  };

  // node_modules/@tsparticles/shape-image/browser/ImagePreloader.js
  var ImagePreloaderPlugin = class {
    id = "image-preloader";
    #engine;
    constructor(engine) {
      this.#engine = engine;
    }
    async getPlugin(container) {
      const { ImagePreloaderInstance: ImagePreloaderInstance2 } = await Promise.resolve().then(() => (init_ImagePreloaderInstance(), ImagePreloaderInstance_exports));
      return new ImagePreloaderInstance2(this.#engine, container);
    }
    loadOptions(_container, options, source) {
      if (!source?.preload) {
        return;
      }
      options.preload ??= [];
      const preloadOptions = options.preload;
      for (const item of source.preload) {
        const existing = preloadOptions.find((t) => t.name === item.name || t.src === item.src);
        if (existing) {
          existing.load(item);
        } else {
          const preload = new Preload();
          preload.load(item);
          preloadOptions.push(preload);
        }
      }
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/shape-image/browser/index.js
  var extLength = 3;
  function addLoadImageToEngine(engine) {
    engine.getImages ??= (container) => {
      engine.images ??= /* @__PURE__ */ new Map();
      let images = engine.images.get(container);
      if (!images) {
        images = [];
        engine.images.set(container, images);
      }
      return images;
    };
    engine.loadImage ??= async (container, data) => {
      if (!engine.getImages) {
        throw new Error(getErrorMessage(ErrorCodes5.imageCollectionNotFound));
      }
      if (!data.name && !data.src) {
        throw new Error(getErrorMessage(ErrorCodes5.imageSourceNotFound));
      }
      engine.images ??= /* @__PURE__ */ new Map();
      const containerImages = engine.getImages(container);
      if (containerImages.some((t) => t.name === data.name || t.source === data.src)) {
        return;
      }
      try {
        const image = {
          name: data.name ?? data.src,
          source: data.src,
          type: data.src.substring(data.src.length - extLength),
          error: false,
          loading: true,
          replaceColor: data.replaceColor,
          ratio: data.width && data.height ? data.width / data.height : void 0
        };
        containerImages.push(image);
        engine.images.set(container, containerImages);
        let imageFunc;
        if (data.replaceColor) {
          imageFunc = downloadSvgImage;
        } else {
          imageFunc = loadImage;
        }
        await imageFunc(image);
      } catch {
        throw new Error(getErrorMessage(ErrorCodes5.imageNotFound, data.name ?? data.src));
      }
    };
  }
  async function loadImageShape(engine) {
    engine.checkVersion("4.6.0");
    if (typeof process !== "undefined" && true) {
      addErrorMessages(ErrorMessages4);
    }
    await engine.pluginManager.register((e) => {
      addLoadImageToEngine(e);
      e.pluginManager.addPlugin(new ImagePreloaderPlugin(e));
      e.pluginManager.addShape(shapeTypes, (container) => Promise.resolve(new ImageDrawer(e, container)));
    });
  }

  // node_modules/@tsparticles/shape-image/browser/browser.js
  var globalObject38 = globalThis;
  globalObject38.__tsParticlesInternals = globalObject38.__tsParticlesInternals ?? {};
  globalObject38.loadImageShape = loadImageShape;

  // node_modules/@tsparticles/updater-life/browser/LifeUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/Life.js
  init_browser2();

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDelay.js
  init_browser2();
  var LifeDelay = class extends ValueWithRandom {
    sync = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      super.load(data);
      loadProperty(this, "sync", data.sync);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/LifeDuration.js
  init_browser2();
  var LifeDuration = class extends ValueWithRandom {
    sync = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      super.load(data);
      loadProperty(this, "sync", data.sync);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Options/Classes/Life.js
  var Life = class {
    count = 0;
    delay = new LifeDelay();
    duration = new LifeDuration();
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "count", data.count);
      this.delay.load(data.delay);
      this.duration.load(data.duration);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/Utils.js
  init_browser2();
  var noTime = 0;
  var infiniteValue = -1;
  var noLife = 0;
  var minCanvasSize = 0;
  function updateLife(particle, delta, canvasSize) {
    if (!particle.life) {
      return;
    }
    const life = particle.life;
    let justSpawned = false;
    if (particle.spawning) {
      life.delayTime += delta.value;
      if (life.delayTime >= particle.life.delay) {
        justSpawned = true;
        particle.spawning = false;
        life.delayTime = noTime;
        life.time = noTime;
      } else {
        return;
      }
    }
    if (life.duration === infiniteValue) {
      return;
    }
    if (justSpawned) {
      life.time = noTime;
    } else {
      life.time += delta.value;
    }
    if (life.time < life.duration) {
      return;
    }
    life.time = noTime;
    if (particle.life.count > noLife) {
      particle.life.count--;
    }
    if (particle.life.count === noLife) {
      particle.destroy();
      return;
    }
    const widthRange = setRangeValue(minCanvasSize, canvasSize.width), heightRange = setRangeValue(minCanvasSize, canvasSize.height);
    particle.position.x = randomInRangeValue(widthRange);
    particle.position.y = randomInRangeValue(heightRange);
    particle.spawning = true;
    life.delayTime = noTime;
    life.time = noTime;
    particle.reset();
    const lifeOptions = particle.options.life;
    if (lifeOptions) {
      life.delay = getRangeValue(lifeOptions.delay.value) * millisecondsToSeconds;
      life.duration = getRangeValue(lifeOptions.duration.value) * millisecondsToSeconds;
    }
  }

  // node_modules/@tsparticles/updater-life/browser/LifeUpdater.js
  var noTime2 = 0;
  var identity2 = 1;
  var infiniteValue2 = -1;
  var LifeUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const container = this.#container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
      if (!lifeOptions) {
        return;
      }
      const delayFactor = lifeOptions.delay.sync ? identity2 : getRandom(), durationFactor = lifeOptions.duration.sync ? identity2 : getRandom();
      particle.life = {
        delay: container.retina.reduceFactor ? getRangeValue(lifeOptions.delay.value) * delayFactor / container.retina.reduceFactor * millisecondsToSeconds : noTime2,
        delayTime: noTime2,
        duration: container.retina.reduceFactor ? getRangeValue(lifeOptions.duration.value) * durationFactor / container.retina.reduceFactor * millisecondsToSeconds : noTime2,
        time: noTime2,
        count: lifeOptions.count
      };
      if (particle.life.duration <= noTime2) {
        particle.life.duration = infiniteValue2;
      }
      if (particle.life.count <= noTime2) {
        particle.life.count = infiniteValue2;
      }
      particle.spawning = particle.life.delay > noTime2;
    }
    isEnabled(particle) {
      return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "life", Life, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.life) {
        return;
      }
      updateLife(particle, delta, this.#container.canvas.size);
    }
  };

  // node_modules/@tsparticles/updater-life/browser/index.js
  async function loadLifeUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("life", (container) => {
        return Promise.resolve(new LifeUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-life/browser/browser.js
  var globalObject39 = globalThis;
  globalObject39.__tsParticlesInternals = globalObject39.__tsParticlesInternals ?? {};
  globalObject39.loadLifeUpdater = loadLifeUpdater;

  // node_modules/@tsparticles/shape-line/browser/Utils.js
  function drawLine2(data) {
    const { context, particle, radius } = data, shapeData = particle.shapeData, centerY = 0;
    context.moveTo(-radius, centerY);
    context.lineTo(radius, centerY);
    context.lineCap = shapeData?.cap ?? "butt";
  }

  // node_modules/@tsparticles/shape-line/browser/LineDrawer.js
  var sides4 = 1;
  var LineDrawer = class {
    draw(data) {
      drawLine2(data);
    }
    getSidesCount() {
      return sides4;
    }
  };

  // node_modules/@tsparticles/shape-line/browser/index.js
  async function loadLineShape(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["line"], () => Promise.resolve(new LineDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-line/browser/browser.js
  var globalObject40 = globalThis;
  globalObject40.__tsParticlesInternals = globalObject40.__tsParticlesInternals ?? {};
  globalObject40.loadLineShape = loadLineShape;

  // node_modules/@tsparticles/interaction-particles-attract/browser/Attractor.js
  init_browser2();

  // node_modules/@tsparticles/interaction-particles-attract/browser/Options/Classes/Attract.js
  init_browser2();
  var Attract2 = class {
    distance = 200;
    enable = false;
    rotate;
    constructor() {
      this.rotate = {
        x: 3e3,
        y: 3e3
      };
    }
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "distance", data.distance);
      loadProperty(this, "enable", data.enable);
      if (data.rotate) {
        const rotateX = data.rotate.x;
        if (rotateX !== void 0) {
          this.rotate.x = rotateX;
        }
        const rotateY = data.rotate.y;
        if (rotateY !== void 0) {
          this.rotate.y = rotateY;
        }
      }
    }
  };

  // node_modules/@tsparticles/interaction-particles-attract/browser/Attractor.js
  var attractFactor = 1e3;
  var identity3 = 1;
  var Attractor2 = class extends ParticlesInteractorBase {
    #maxDistance;
    constructor(container) {
      super(container);
      this.#maxDistance = 0;
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
    }
    interact(p1) {
      if (!p1.options.attract?.enable) {
        return;
      }
      const container = this.container;
      if (isNull(p1.attractDistance)) {
        const attractDistance = getRangeValue(p1.options.attract.distance);
        if (attractDistance > this.#maxDistance) {
          this.#maxDistance = attractDistance;
        }
        p1.attractDistance = attractDistance * container.retina.pixelRatio;
      }
      const distance = p1.attractDistance, pos1 = p1.getPosition(), query = container.particles.grid.queryCircle(pos1, distance);
      for (const p2 of query) {
        if (p1 === p2 || !p2.options.attract?.enable || p2.destroyed || p2.spawning) {
          continue;
        }
        const pos2 = p2.getPosition(), dx = pos1.x - pos2.x, dy = pos1.y - pos2.y, rotate = p1.options.attract.rotate, ax = dx / (rotate.x * attractFactor), ay = dy / (rotate.y * attractFactor), p1Factor = p2.size.value / p1.size.value, p2Factor = identity3 / p1Factor;
        p1.velocity.x -= ax * p1Factor;
        p1.velocity.y -= ay * p1Factor;
        p2.velocity.x += ax * p2Factor;
        p2.velocity.y += ay * p2Factor;
      }
    }
    isEnabled(particle) {
      return particle.options.attract?.enable ?? false;
    }
    loadParticlesOptions(options, ...sources) {
      loadOptionProperty(options, "attract", Attract2, ...sources);
    }
    reset() {
    }
  };

  // node_modules/@tsparticles/interaction-particles-attract/browser/index.js
  async function loadParticlesAttractInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addInteractor?.("particlesAttract", (container) => {
        return Promise.resolve(new Attractor2(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-particles-attract/browser/browser.js
  var globalObject41 = globalThis;
  globalObject41.__tsParticlesInternals = globalObject41.__tsParticlesInternals ?? {};
  globalObject41.loadParticlesAttractInteraction = loadParticlesAttractInteraction;

  // node_modules/@tsparticles/interaction-particles-collisions/browser/index.js
  init_browser2();

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Collider.js
  init_browser2();

  // node_modules/@tsparticles/interaction-particles-collisions/browser/CollisionMode.js
  var CollisionMode;
  (function(CollisionMode2) {
    CollisionMode2["absorb"] = "absorb";
    CollisionMode2["bounce"] = "bounce";
    CollisionMode2["destroy"] = "destroy";
    CollisionMode2["fluid"] = "fluid";
  })(CollisionMode || (CollisionMode = {}));

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Options/Classes/Collisions.js
  init_browser2();

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Options/Classes/CollisionsAbsorb.js
  init_browser2();
  var CollisionsAbsorb = class {
    speed = 2;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "speed", data.speed);
    }
  };

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Options/Classes/CollisionsFluid.js
  init_browser2();
  var CollisionsFluid = class {
    maxForce = 2.5;
    maxNeighbors = 64;
    nearStiffness = 0.5;
    radius = 30;
    restDensity = 3;
    stiffness = 0.5;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "maxForce", data.maxForce);
      loadProperty(this, "maxNeighbors", data.maxNeighbors);
      loadRangeProperty(this, "nearStiffness", data.nearStiffness);
      loadRangeProperty(this, "radius", data.radius);
      loadRangeProperty(this, "restDensity", data.restDensity);
      loadRangeProperty(this, "stiffness", data.stiffness);
    }
  };

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Options/Classes/CollisionsOverlap.js
  init_browser2();
  var CollisionsOverlap = class {
    enable = true;
    retries = 0;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "enable", data.enable);
      loadProperty(this, "retries", data.retries);
    }
  };

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Options/Classes/Collisions.js
  var Collisions = class {
    absorb = new CollisionsAbsorb();
    bounce = new ParticlesBounce();
    enable = false;
    fluid = new CollisionsFluid();
    maxSpeed = 50;
    mode = CollisionMode.bounce;
    overlap = new CollisionsOverlap();
    load(data) {
      if (isNull(data)) {
        return;
      }
      this.absorb.load(data.absorb);
      this.bounce.load(data.bounce);
      loadProperty(this, "enable", data.enable);
      this.fluid.load(data.fluid);
      loadRangeProperty(this, "maxSpeed", data.maxSpeed);
      loadProperty(this, "mode", data.mode);
      this.overlap.load(data.overlap);
    }
  };

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Fluid.js
  init_browser2();
  var wallMarginFactor = 0.15;
  var restRetention = 0.1;
  var supportContacts = 5;
  var wallSpringFactor = half;
  var minNeighborDistance = 1e-4;
  var solverIterations = 3;
  var separationIterations = 3;
  function applyWallSpring(position, margin, maxX, maxY) {
    if (position.x < margin) {
      position.x += (margin - position.x) * wallSpringFactor;
    } else if (position.x > maxX) {
      position.x -= (position.x - maxX) * wallSpringFactor;
    }
    if (position.y < margin) {
      position.y += (margin - position.y) * wallSpringFactor;
    } else if (position.y > maxY) {
      position.y -= (position.y - maxY) * wallSpringFactor;
    }
  }
  function clampToWalls(position, margin, maxX, maxY) {
    if (position.x < margin) {
      position.x = margin;
    } else if (position.x > maxX) {
      position.x = maxX;
    }
    if (position.y < margin) {
      position.y = margin;
    } else if (position.y > maxY) {
      position.y = maxY;
    }
  }
  var FluidSolver = class {
    #dir = Vector.origin;
    #isNeighbor;
    #maxNeighbors = minCount;
    #neighbors = [];
    #owner;
    #ownerZ = defaultAngle;
    constructor() {
      this.#isNeighbor = (particle) => {
        const owner = this.#owner, neighbor = particle;
        if (!owner || this.#neighbors.length >= this.#maxNeighbors || neighbor === owner || neighbor.destroyed || neighbor.spawning || !neighbor.options.collisions?.enable || neighbor.options.collisions.mode !== CollisionMode.fluid) {
          return false;
        }
        const ownerRadius = owner.getRadius();
        return Math.abs(Math.round(this.#ownerZ) - Math.round(neighbor.getPosition().z)) <= ownerRadius + neighbor.getRadius();
      };
    }
    separateOverlaps(particle, position, margin, maxX, maxY) {
      const neighbors = this.#neighbors, particlePosition = particle.position;
      particlePosition.setTo(position);
      for (let iteration = 0; iteration < separationIterations; iteration++) {
        for (const neighbor of neighbors) {
          this.#projectPair(particle, neighbor);
        }
      }
      if (margin !== void 0 && maxX !== void 0 && maxY !== void 0) {
        clampToWalls(particlePosition, margin, maxX, maxY);
      }
    }
    solve(container, particle) {
      const collisionsOptions = particle.options.collisions;
      if (!collisionsOptions) {
        return;
      }
      const fluidOptions = collisionsOptions.fluid, pixelRatio = container.retina.pixelRatio, radius = getRangeValue(fluidOptions.radius) * pixelRatio, radiusSq = radius * Math.abs(radius), stiffness = getRangeValue(fluidOptions.stiffness), nearStiffness = getRangeValue(fluidOptions.nearStiffness), restDensity = getRangeValue(fluidOptions.restDensity), maxForce = getRangeValue(fluidOptions.maxForce), maxNeighbors = fluidOptions.maxNeighbors, particleRadius = particle.getRadius(), position = particle.position, canvasSize = container.canvas.size, hasBounds = canvasSize.width > minRadius && canvasSize.height > minRadius, margin = hasBounds ? particleRadius * wallMarginFactor : minRadius, maxX = canvasSize.width - margin, maxY = canvasSize.height - margin, neighbors = this.#neighbors;
      this.#owner = particle;
      this.#maxNeighbors = maxNeighbors;
      this.#ownerZ = particle.getPosition().z;
      this.#queryNeighbors(container, particle, radius, maxNeighbors);
      for (let iteration = 0; iteration < solverIterations; iteration++) {
        const focalPosition = particle.getPosition();
        let density = 0, densityNear = 0;
        for (const neighbor of neighbors) {
          const dist = getDistance(focalPosition, neighbor.getPosition()), q = identity - dist / radius, q2 = q * q;
          density += q2;
          densityNear += q2 * q;
        }
        const pressure = (density - restDensity) * stiffness * half, pressureNear = densityNear * nearStiffness * half;
        if (hasBounds) {
          applyWallSpring(position, margin, maxX, maxY);
        }
        for (const neighbor of neighbors) {
          const neighborPosition = neighbor.getPosition(), dx = neighborPosition.x - focalPosition.x, dy = neighborPosition.y - focalPosition.y, distanceSq = dx * dx + dy * dy;
          if (distanceSq > radiusSq) {
            continue;
          }
          const dist = Math.sqrt(distanceSq), q = identity - dist / radius, force = clamp(pressure + pressureNear * q, -maxForce, maxForce), contactDistance = particleRadius + neighbor.getRadius(), push = Math.max(q * force * half, contactDistance - dist);
          if (dist > minNeighborDistance) {
            const inverseDist = inverseFactorNumerator / dist;
            this.#dir.x = dx * inverseDist * push;
            this.#dir.y = dy * inverseDist * push;
          } else {
            this.#dir.x = (particle.id + neighbor.id) % double === minCount ? identity : -identity;
            this.#dir.y = defaultAngle;
            this.#dir.multTo(push);
          }
          position.x -= this.#dir.x;
          position.y -= this.#dir.y;
        }
      }
      this.#queryNeighbors(container, particle, radius, maxNeighbors);
      if (hasBounds) {
        clampToWalls(position, margin, maxX, maxY);
      }
      this.separateOverlaps(particle, position, hasBounds ? margin : void 0, maxX, maxY);
      this.#dampContacts(particle);
      if (hasBounds) {
        this.#cancelWallVelocity(particle, margin, maxX, maxY);
      }
    }
    #cancelWallVelocity(particle, margin, maxX, maxY) {
      const position = particle.position, velocity = particle.velocity;
      if (position.x <= margin) {
        velocity.x = defaultAngle;
      } else if (position.x >= maxX) {
        velocity.x = defaultAngle;
      }
      if (position.y <= margin) {
        velocity.y = defaultAngle;
      } else if (position.y >= maxY) {
        velocity.y = defaultAngle;
      }
    }
    #dampContacts(particle) {
      const neighbors = this.#neighbors, position = particle.position, velocity = particle.velocity;
      let touching = minCount;
      for (const neighbor of neighbors) {
        const neighborPosition = neighbor.getPosition(), dx = position.x - neighborPosition.x, dy = position.y - neighborPosition.y, distanceSq = dx * dx + dy * dy, contactDistance = particle.getRadius() + neighbor.getRadius();
        if (distanceSq >= contactDistance * contactDistance || distanceSq <= minNeighborDistance) {
          continue;
        }
        if (++touching < supportContacts) {
          continue;
        }
        velocity.x *= restRetention;
        velocity.y *= restRetention;
        return;
      }
    }
    #projectPair(p1, p2) {
      const pos1 = p1.position, pos2 = p2.position, dx = pos1.x - pos2.x, dy = pos1.y - pos2.y, distanceSq = dx * dx + dy * dy, minDistance8 = p1.getRadius() + p2.getRadius();
      if (distanceSq >= minDistance8 * minDistance8) {
        return;
      }
      if (distanceSq > minNeighborDistance) {
        const distance = Math.sqrt(distanceSq), inverseDistance = inverseFactorNumerator / distance, correction = minDistance8 - distance;
        pos1.x += dx * inverseDistance * correction;
        pos1.y += dy * inverseDistance * correction;
      } else {
        const direction = (p1.id + p2.id) % double === minCount ? identity : -identity;
        pos1.x += direction * minDistance8;
      }
    }
    #queryNeighbors(container, particle, radius, maxNeighbors) {
      this.#neighbors.length = 0;
      if (radius <= minRadius || maxNeighbors <= minCount) {
        return;
      }
      container.particles.grid.queryCircle(particle.getPosition(), radius, this.#isNeighbor, this.#neighbors);
    }
  };

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Absorb.js
  init_browser2();
  var minAbsorbAmount = 0;
  function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
    if (!p1.options.collisions || !p2.options.collisions) {
      return;
    }
    const absorbSpeed = p1.options.collisions.absorb.speed, shrinkAmount = clamp(absorbSpeed * delta.factor, minAbsorbAmount, r2);
    p1.size.value = Math.sqrt(r1 * r1 + shrinkAmount * shrinkAmount);
    p2.size.value -= shrinkAmount;
    if (p2.size.value <= pixelRatio) {
      p2.size.value = 0;
      p2.destroy();
    }
  }
  function absorb(p1, p2, delta, pixelRatio) {
    const r1 = p1.getRadius(), r2 = p2.getRadius();
    if (!r1 && r2) {
      p1.destroy();
    } else if (r1 && !r2) {
      p2.destroy();
    } else if (r1 && r2) {
      if (r1 >= r2) {
        updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
      } else {
        updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
      }
    }
  }

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Bounce.js
  init_browser2();
  var energyCorrectionMinRatio = 1e-6;
  var energyDriftThreshold = 1e-4;
  var correctionFactorNeutral = 1;
  var fixBounceSpeed = (p) => {
    if (!p.options.collisions) {
      return;
    }
    p.collisionMaxSpeed ??= getRangeValue(p.options.collisions.maxSpeed);
    const maxSpeed = p.collisionMaxSpeed;
    if (p.velocity.getLengthSq() > maxSpeed * Math.abs(maxSpeed)) {
      p.velocity.length = maxSpeed;
    }
  };
  function bounce2(p1, p2) {
    const m1 = p1.getMass(), m2 = p2.getMass(), keBefore = m1 * p1.velocity.getLengthSq() + m2 * p2.velocity.getLengthSq();
    circleBounce(circleBounceDataFromParticle(p1), circleBounceDataFromParticle(p2));
    const speed1SqAfter = p1.velocity.getLengthSq(), speed2SqAfter = p2.velocity.getLengthSq(), keAfter = m1 * speed1SqAfter + m2 * speed2SqAfter;
    if (keAfter > keBefore * energyCorrectionMinRatio) {
      const correctionFactor = Math.sqrt(keBefore / keAfter);
      if (Math.abs(correctionFactor - correctionFactorNeutral) > energyDriftThreshold) {
        p1.velocity.length = Math.sqrt(speed1SqAfter) * correctionFactor;
        p2.velocity.length = Math.sqrt(speed2SqAfter) * correctionFactor;
      }
    }
    fixBounceSpeed(p1);
    fixBounceSpeed(p2);
  }

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Destroy.js
  function destroy(p1, p2) {
    if (!p1.unbreakable && !p2.unbreakable) {
      bounce2(p1, p2);
    }
    const p1Radius = p1.getRadius(), p2Radius = p2.getRadius();
    if (!p1Radius && p2Radius) {
      p1.destroy();
    } else if (p1Radius && !p2Radius) {
      p2.destroy();
    } else if (p1Radius && p2Radius) {
      const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;
      deleteP.destroy();
    }
  }

  // node_modules/@tsparticles/interaction-particles-collisions/browser/ResolveCollision.js
  function resolveCollision(p1, p2, delta, pixelRatio) {
    if (!p1.options.collisions || !p2.options.collisions) {
      return;
    }
    switch (p1.options.collisions.mode) {
      case CollisionMode.absorb: {
        absorb(p1, p2, delta, pixelRatio);
        break;
      }
      case CollisionMode.bounce: {
        bounce2(p1, p2);
        break;
      }
      case CollisionMode.destroy: {
        destroy(p1, p2);
        break;
      }
      case CollisionMode.fluid: {
        break;
      }
      default:
        break;
    }
  }

  // node_modules/@tsparticles/interaction-particles-collisions/browser/Collider.js
  var Collider = class extends ParticlesInteractorBase {
    #fluidSolver;
    #maxDistance;
    constructor(container) {
      super(container);
      this.#fluidSolver = new FluidSolver();
      this.#maxDistance = 0;
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
    }
    interact(p1, _interactivityData, delta) {
      if (p1.destroyed || p1.spawning) {
        return;
      }
      const collisions = p1.options.collisions;
      if (!collisions?.enable) {
        return;
      }
      if (collisions.mode === CollisionMode.fluid) {
        const fluidRadius = getRangeValue(collisions.fluid.radius);
        if (fluidRadius > this.#maxDistance) {
          this.#maxDistance = fluidRadius;
        }
        this.#fluidSolver.solve(this.container, p1);
        return;
      }
      const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.grid.queryCircle(pos1, radius1 * double);
      for (const p2 of query) {
        if (p1 === p2 || !p2.options.collisions?.enable || collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) {
          continue;
        }
        const pos2 = p2.getPosition(), radius2 = p2.getRadius();
        if (radius1 < radius2 || radius1 === radius2 && p1.id > p2.id) {
          continue;
        }
        const contactDistance = radius1 + radius2;
        if (contactDistance < 0 || Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > contactDistance) {
          continue;
        }
        if (getDistanceSq(pos1, pos2) > contactDistance * contactDistance) {
          continue;
        }
        resolveCollision(p1, p2, delta, container.retina.pixelRatio);
      }
    }
    isEnabled(particle) {
      return !!particle.options.collisions?.enable;
    }
    loadParticlesOptions(options, ...sources) {
      loadOptionProperty(options, "collisions", Collisions, ...sources);
    }
    reset(_interactivityData, _particle) {
    }
  };

  // node_modules/@tsparticles/interaction-particles-collisions/browser/ErrorMessages.js
  init_ErrorCodes2();
  var ErrorMessages5 = {
    [ErrorCodes6.overlapNotPlaced]: "Particle is overlapping and can't be placed"
  };

  // node_modules/@tsparticles/interaction-particles-collisions/browser/OverlapPlugin.js
  var OverlapPlugin = class {
    id = "overlap";
    async getPlugin(container) {
      const { OverlapPluginInstance: OverlapPluginInstance2 } = await Promise.resolve().then(() => (init_OverlapPluginInstance(), OverlapPluginInstance_exports));
      return new OverlapPluginInstance2(container);
    }
    loadOptions() {
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/interaction-particles-collisions/browser/index.js
  async function loadParticlesCollisionsInteraction(engine) {
    engine.checkVersion("4.6.0");
    if (typeof process !== "undefined" && true) {
      addErrorMessages(ErrorMessages5);
    }
    await engine.pluginManager.register((e) => {
      ensureInteractivityPluginLoaded(e);
      e.pluginManager.addPlugin(new OverlapPlugin());
      e.pluginManager.addInteractor?.("particlesCollisions", (container) => {
        return Promise.resolve(new Collider(container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-particles-collisions/browser/browser.js
  var globalObject42 = globalThis;
  globalObject42.__tsParticlesInternals = globalObject42.__tsParticlesInternals ?? {};
  globalObject42.loadParticlesCollisionsInteraction = loadParticlesCollisionsInteraction;

  // node_modules/@tsparticles/interaction-particles-links/browser/Linker.js
  init_browser2();

  // node_modules/@tsparticles/interaction-particles-links/browser/CircleWarp.js
  init_browser2();
  var CircleWarp = class extends Circle {
    #canvasSize;
    constructor(x, y, radius, canvasSize) {
      super(x, y, radius);
      this.#canvasSize = canvasSize;
    }
    contains(point) {
      const center = this.position, dx = point.x - center.x, dy = point.y - center.y, dxSq = dx * dx, dySq = dy * dy, radiusSq = this.radius * this.radius;
      if (dxSq + dySq <= radiusSq) {
        return true;
      }
      const { width, height } = this.#canvasSize, left = point.x - width - center.x, right = point.x + width - center.x, top = point.y - height - center.y, bottom = point.y + height - center.y;
      return Math.min(dxSq, left * left, right * right) + Math.min(dySq, top * top, bottom * bottom) <= radiusSq;
    }
    intersects(range) {
      if (super.intersects(range)) {
        return true;
      }
      const { width, height } = this.#canvasSize, pos = range.position, shifts = [
        { x: -width, y: 0 },
        { x: width, y: 0 },
        { x: 0, y: -height },
        { x: 0, y: height },
        { x: -width, y: -height },
        { x: width, y: height },
        { x: -width, y: height },
        { x: width, y: -height }
      ];
      for (const shift of shifts) {
        const shiftedPos = { x: pos.x + shift.x, y: pos.y + shift.y };
        let shiftedRange;
        if (range instanceof Circle) {
          shiftedRange = new Circle(shiftedPos.x, shiftedPos.y, range.radius);
        } else {
          const rect = range;
          shiftedRange = new Rectangle(shiftedPos.x, shiftedPos.y, rect.size.width, rect.size.height);
        }
        if (super.intersects(shiftedRange)) {
          return true;
        }
      }
      return false;
    }
    query(grid) {
      const { x, y } = this.position, { width, height } = this.#canvasSize, radius = this.radius, crossesLeft = x - radius <= originPoint.x, crossesRight = x + radius >= width, crossesTop = y - radius <= originPoint.y, crossesBottom = y + radius >= height;
      if (!crossesLeft && !crossesRight && !crossesTop && !crossesBottom) {
        return grid.query(this);
      }
      const xShifts = [originPoint.x], yShifts = [originPoint.y];
      if (crossesLeft) {
        xShifts.push(width);
      }
      if (crossesRight) {
        xShifts.push(-width);
      }
      if (crossesTop) {
        yShifts.push(height);
      }
      if (crossesBottom) {
        yShifts.push(-height);
      }
      const particles = /* @__PURE__ */ new Set();
      for (const dx of xShifts) {
        for (const dy of yShifts) {
          for (const particle of grid.queryCircle({ x: x + dx, y: y + dy }, radius)) {
            particles.add(particle);
          }
        }
      }
      return [...particles];
    }
  };

  // node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/Links.js
  init_browser2();

  // node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksShadow.js
  init_browser2();
  var LinksShadow = class {
    blur = 5;
    color = new OptionsColor();
    enable = false;
    constructor() {
      this.color.value = "#000";
    }
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "blur", data.blur);
      this.color = OptionsColor.create(this.color, data.color);
      loadProperty(this, "enable", data.enable);
    }
  };

  // node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/LinksTriangle.js
  init_browser2();
  var LinksTriangle = class {
    color;
    enable = false;
    frequency = 1;
    opacity;
    load(data) {
      if (isNull(data)) {
        return;
      }
      if (data.color !== void 0) {
        this.color = OptionsColor.create(this.color, data.color);
      }
      loadProperty(this, "enable", data.enable);
      loadProperty(this, "frequency", data.frequency);
      loadProperty(this, "opacity", data.opacity);
    }
  };

  // node_modules/@tsparticles/interaction-particles-links/browser/Options/Classes/Links.js
  var Links = class {
    blink = false;
    color = new OptionsColor();
    consent = false;
    distance = 100;
    enable = false;
    frequency = 1;
    id;
    opacity = 1;
    shadow = new LinksShadow();
    triangles = new LinksTriangle();
    warp = false;
    width = 1;
    constructor() {
      this.color.value = "#fff";
    }
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "id", data.id);
      loadProperty(this, "blink", data.blink);
      this.color = OptionsColor.create(this.color, data.color);
      loadProperty(this, "consent", data.consent);
      loadProperty(this, "distance", data.distance);
      loadProperty(this, "enable", data.enable);
      loadProperty(this, "frequency", data.frequency);
      loadProperty(this, "opacity", data.opacity);
      this.shadow.load(data.shadow);
      this.triangles.load(data.triangles);
      loadProperty(this, "width", data.width);
      loadProperty(this, "warp", data.warp);
    }
  };

  // node_modules/@tsparticles/interaction-particles-links/browser/Linker.js
  var opacityOffset = 1;
  var minDistance6 = 0;
  function getWarpDistanceSq(dx, dy, canvasSize) {
    const absX = Math.abs(dx), absY = Math.abs(dy), x = Math.min(absX, canvasSize.width - absX), y = Math.min(absY, canvasSize.height - absY);
    return x * x + y * y;
  }
  var Linker = class extends ParticlesInteractorBase {
    #maxDistance;
    #pluginManager;
    constructor(pluginManager, container) {
      super(container);
      this.#pluginManager = pluginManager;
      this.#maxDistance = 0;
    }
    get maxDistance() {
      return this.#maxDistance;
    }
    clear() {
    }
    init() {
      this.container.particles.linksColor = void 0;
      this.container.particles.linksColors = /* @__PURE__ */ new Map();
    }
    interact(p1) {
      if (!p1.options.links) {
        return;
      }
      p1.links = [];
      if (p1.linksDistance && p1.linksDistance > this.#maxDistance) {
        this.#maxDistance = p1.linksDistance;
      }
      const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
      if (pos1.x < originPoint.x || pos1.y < originPoint.y || pos1.x > canvasSize.width || pos1.y > canvasSize.height) {
        return;
      }
      const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = p1.retina.linksDistance ?? minDistance6, optDistanceSq = optDistance * Math.abs(optDistance), warp = linkOpt1.warp, query = warp ? new CircleWarp(pos1.x, pos1.y, optDistance, canvasSize).query(container.particles.grid) : container.particles.grid.queryCircle(pos1, optDistance);
      for (const p2 of query) {
        const linkOpt2 = p2.options.links;
        if (p1 === p2 || !linkOpt2?.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || !p2.links || p1.links.some((t) => t.destination === p2) || p2.links.some((t) => t.destination === p1)) {
          continue;
        }
        const pos2 = p2.getPosition();
        if (pos2.x < originPoint.x || pos2.y < originPoint.y || pos2.x > canvasSize.width || pos2.y > canvasSize.height) {
          continue;
        }
        const dx = pos1.x - pos2.x, dy = pos1.y - pos2.y, distDirectSq = dx * dx + dy * dy, distWarpSq = warp && linkOpt2.warp ? getWarpDistanceSq(dx, dy, canvasSize) : distDirectSq, distanceSq = Math.min(distDirectSq, distWarpSq);
        if (distanceSq > optDistanceSq) {
          continue;
        }
        const distance = Math.sqrt(distanceSq), opacityLine = (opacityOffset - distance / optDistance) * optOpacity;
        this.#setColor(p1);
        p1.links.push({
          destination: p2,
          opacity: opacityLine,
          color: this.#getLinkColor(p1, p2),
          isWarped: distWarpSq < distDirectSq
        });
      }
    }
    isEnabled(particle) {
      return !!particle.options.links?.enable;
    }
    loadParticlesOptions(options, ...sources) {
      loadOptionProperty(options, "links", Links, ...sources);
    }
    reset() {
    }
    #getLinkColor(p1, p2) {
      const container = this.container, linksOptions = p1.options.links;
      if (!linksOptions) {
        return;
      }
      const linkColor = linksOptions.id !== void 0 ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
      return getLinkColor(p1, p2, linkColor, container.hdr);
    }
    #setColor(p1) {
      if (!p1.options.links) {
        return;
      }
      const container = this.container, linksOptions = p1.options.links;
      let linkColor = linksOptions.id === void 0 ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);
      if (linkColor) {
        return;
      }
      linkColor = getLinkRandomColor(this.#pluginManager, linksOptions.color, linksOptions.blink, linksOptions.consent);
      if (linksOptions.id === void 0) {
        container.particles.linksColor = linkColor;
      } else {
        container.particles.linksColors.set(linksOptions.id, linkColor);
      }
    }
  };

  // node_modules/@tsparticles/interaction-particles-links/browser/LinksPlugin.js
  var LinksPlugin = class {
    id = "links";
    #pluginManager;
    constructor(pluginManager) {
      this.#pluginManager = pluginManager;
    }
    async getPlugin(container) {
      const { LinkInstance: LinkInstance2 } = await Promise.resolve().then(() => (init_LinkInstance(), LinkInstance_exports));
      return new LinkInstance2(this.#pluginManager, container);
    }
    loadOptions() {
    }
    needsPlugin() {
      return true;
    }
  };

  // node_modules/@tsparticles/interaction-particles-links/browser/index.js
  async function loadParticlesLinksInteraction(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      const pluginManager = e.pluginManager;
      ensureInteractivityPluginLoaded(e);
      pluginManager.addPlugin(new LinksPlugin(pluginManager));
      pluginManager.addInteractor?.("particlesLinks", (container) => {
        return Promise.resolve(new Linker(pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/interaction-particles-links/browser/browser.js
  var globalObject43 = globalThis;
  globalObject43.__tsParticlesInternals = globalObject43.__tsParticlesInternals ?? {};
  globalObject43.loadParticlesLinksInteraction = loadParticlesLinksInteraction;

  // node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js
  init_browser2();

  // node_modules/@tsparticles/shape-polygon/browser/Utils.js
  init_browser2();
  var polygonCache = /* @__PURE__ */ new Map();
  var noOffset = 0;
  function getUnitPolygon(sides7) {
    const cached = polygonCache.get(sides7);
    if (cached) {
      return cached;
    }
    const step = doublePI / sides7, isOdd = !!(sides7 % double), baseAngle = (-Math.PI + (isOdd ? noOffset : step)) * half, verts = [];
    for (let i = 0; i < sides7; i++) {
      const angle = baseAngle + i * step;
      verts[i] = {
        x: Math.cos(angle),
        y: Math.sin(angle)
      };
    }
    polygonCache.set(sides7, verts);
    return verts;
  }
  function drawPolygon(data, side) {
    const { context, radius } = data, sides7 = side.count.numerator / side.count.denominator, verts = getUnitPolygon(sides7);
    context.beginPath();
    for (let i = 0; i < verts.length; i++) {
      const vert = verts[i];
      if (!vert) {
        continue;
      }
      const x = vert.x * radius, y = vert.y * radius;
      if (i) {
        context.lineTo(x, y);
      } else {
        context.moveTo(x, y);
      }
    }
    context.closePath();
  }

  // node_modules/@tsparticles/shape-polygon/browser/PolygonDrawerBase.js
  var defaultSides = 5;
  var PolygonDrawerBase = class {
    draw(data) {
      const { particle, radius } = data, side = this.getSidesData(particle, radius);
      drawPolygon(data, side);
    }
    getSidesCount(particle) {
      const polygon = particle.shapeData;
      return Math.round(getRangeValue(polygon?.sides ?? defaultSides));
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/PolygonDrawer.js
  var yFactor = 2.66;
  var sidesFactor = 3;
  var PolygonDrawer = class extends PolygonDrawerBase {
    getSidesData(particle, radius) {
      const { sides: sides7 } = particle;
      return {
        count: {
          denominator: 1,
          numerator: sides7
        },
        length: radius * yFactor / (sides7 / sidesFactor)
      };
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/TriangleDrawer.js
  var sides5 = 3;
  var yFactor2 = 2.66;
  var sidesFactor2 = 3;
  var TriangleDrawer = class extends PolygonDrawerBase {
    getSidesCount() {
      return sides5;
    }
    getSidesData(_particle, radius) {
      return {
        count: {
          denominator: 1,
          numerator: sides5
        },
        length: radius * yFactor2 / (sides5 / sidesFactor2)
      };
    }
  };

  // node_modules/@tsparticles/shape-polygon/browser/index.js
  async function loadGenericPolygonShape(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["polygon"], () => Promise.resolve(new PolygonDrawer()));
    });
  }
  async function loadTriangleShape(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["triangle"], () => Promise.resolve(new TriangleDrawer()));
    });
  }
  async function loadPolygonShape(engine) {
    engine.checkVersion("4.6.0");
    await Promise.all([
      loadGenericPolygonShape(engine),
      loadTriangleShape(engine)
    ]);
  }

  // node_modules/@tsparticles/shape-polygon/browser/browser.js
  var globalObject44 = globalThis;
  globalObject44.__tsParticlesInternals = globalObject44.__tsParticlesInternals ?? {};
  globalObject44.loadGenericPolygonShape = loadGenericPolygonShape;
  globalObject44.loadPolygonShape = loadPolygonShape;
  globalObject44.loadTriangleShape = loadTriangleShape;

  // node_modules/@tsparticles/updater-rotate/browser/RotateUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-rotate/browser/Options/Classes/Rotate.js
  init_browser2();

  // node_modules/@tsparticles/updater-rotate/browser/Options/Classes/RotateAnimation.js
  init_browser2();
  var RotateAnimation = class {
    decay = 0;
    enable = false;
    speed = 0;
    sync = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "enable", data.enable);
      loadRangeProperty(this, "speed", data.speed);
      loadRangeProperty(this, "decay", data.decay);
      loadProperty(this, "sync", data.sync);
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/Options/Classes/Rotate.js
  var Rotate = class extends ValueWithRandom {
    animation = new RotateAnimation();
    direction = RotateDirection.clockwise;
    path = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      super.load(data);
      loadProperty(this, "direction", data.direction);
      this.animation.load(data.animation);
      loadProperty(this, "path", data.path);
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/RotateUpdater.js
  var doublePIDeg = 360;
  var RotateUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const rotateOptions = particle.options.rotate;
      if (!rotateOptions) {
        return;
      }
      particle.rotate = {
        enable: rotateOptions.animation.enable,
        value: degToRad(getRangeValue(rotateOptions.value)),
        min: 0,
        max: doublePI
      };
      particle.pathRotation = rotateOptions.path;
      let rotateDirection = rotateOptions.direction;
      if (rotateDirection === RotateDirection.random) {
        const index = Math.floor(getRandom() * double);
        rotateDirection = index > minIndex ? RotateDirection.counterClockwise : RotateDirection.clockwise;
      }
      switch (rotateDirection) {
        case RotateDirection.counterClockwise:
        case "counterClockwise":
          particle.rotate.status = AnimationStatus.decreasing;
          break;
        case RotateDirection.clockwise:
          particle.rotate.status = AnimationStatus.increasing;
          break;
        default:
          break;
      }
      const rotateAnimation = rotateOptions.animation;
      if (rotateAnimation.enable) {
        particle.rotate.decay = identity - getRangeValue(rotateAnimation.decay);
        particle.rotate.velocity = getRangeValue(rotateAnimation.speed) / doublePIDeg * this.#container.retina.reduceFactor;
        if (!rotateAnimation.sync) {
          particle.rotate.velocity *= getRandom();
        }
      }
      particle.rotation = particle.rotate.value;
    }
    isEnabled(particle) {
      const rotate = particle.options.rotate;
      if (!rotate) {
        return false;
      }
      return !particle.destroyed && !particle.spawning && (!!rotate.value || rotate.animation.enable || rotate.path);
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "rotate", Rotate, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      particle.isRotating = !!particle.rotate;
      if (!particle.rotate) {
        return;
      }
      updateAnimation(particle, particle.rotate, false, DestroyType.none, delta);
      particle.rotation = particle.rotate.value;
    }
  };

  // node_modules/@tsparticles/updater-rotate/browser/index.js
  async function loadRotateUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("rotate", (container) => {
        return Promise.resolve(new RotateUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-rotate/browser/browser.js
  var globalObject45 = globalThis;
  globalObject45.__tsParticlesInternals = globalObject45.__tsParticlesInternals ?? {};
  globalObject45.loadRotateUpdater = loadRotateUpdater;

  // node_modules/@tsparticles/shape-square/browser/Utils.js
  init_browser2();
  function drawSquare(data) {
    const { context, radius } = data, fixedRadius = radius * Math.SQRT1_2, fixedDiameter = fixedRadius * double;
    context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
  }

  // node_modules/@tsparticles/shape-square/browser/SquareDrawer.js
  var sides6 = 4;
  var SquareDrawer = class {
    draw(data) {
      drawSquare(data);
    }
    getSidesCount() {
      return sides6;
    }
  };

  // node_modules/@tsparticles/shape-square/browser/index.js
  async function loadSquareShape(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["edge", "square"], () => Promise.resolve(new SquareDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-square/browser/browser.js
  var globalObject46 = globalThis;
  globalObject46.__tsParticlesInternals = globalObject46.__tsParticlesInternals ?? {};
  globalObject46.loadSquareShape = loadSquareShape;

  // node_modules/@tsparticles/shape-star/browser/StarDrawer.js
  init_browser2();

  // node_modules/@tsparticles/shape-star/browser/Utils.js
  var defaultInset = 2;
  var origin = { x: 0, y: 0 };
  function drawStar(data) {
    const { context, particle, radius } = data, sides7 = particle.sides, inset = particle.starInset ?? defaultInset;
    context.moveTo(origin.x, origin.y - radius);
    for (let i = 0; i < sides7; i++) {
      context.rotate(Math.PI / sides7);
      context.lineTo(origin.x, origin.y - radius * inset);
      context.rotate(Math.PI / sides7);
      context.lineTo(origin.x, origin.y - radius);
    }
  }

  // node_modules/@tsparticles/shape-star/browser/StarDrawer.js
  var defaultInset2 = 2;
  var defaultSides2 = 5;
  var StarDrawer = class {
    draw(data) {
      drawStar(data);
    }
    getSidesCount(particle) {
      const star = particle.shapeData;
      return Math.round(getRangeValue(star?.sides ?? defaultSides2));
    }
    particleInit(_container, particle) {
      const star = particle.shapeData;
      particle.starInset = getRangeValue(star?.inset ?? defaultInset2);
    }
  };

  // node_modules/@tsparticles/shape-star/browser/index.js
  async function loadStarShape(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(["star"], () => Promise.resolve(new StarDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-star/browser/browser.js
  var globalObject47 = globalThis;
  globalObject47.__tsParticlesInternals = globalObject47.__tsParticlesInternals ?? {};
  globalObject47.loadStarShape = loadStarShape;

  // node_modules/@tsparticles/slim/browser/index.js
  async function loadSlim(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register(async (e) => {
      const loadInteractivityForSlim = async (e2) => {
        await loadInteractivityPlugin(e2);
        await Promise.all([
          loadExternalParallaxInteraction(e2),
          loadExternalAttractInteraction(e2),
          loadExternalBounceInteraction(e2),
          loadExternalBubbleInteraction(e2),
          loadExternalConnectInteraction(e2),
          loadExternalDestroyInteraction(e2),
          loadExternalGrabInteraction(e2),
          loadExternalPauseInteraction(e2),
          loadExternalPushInteraction(e2),
          loadExternalRemoveInteraction(e2),
          loadExternalRepulseInteraction(e2),
          loadExternalSlowInteraction(e2),
          loadParticlesAttractInteraction(e2),
          loadParticlesCollisionsInteraction(e2),
          loadParticlesLinksInteraction(e2)
        ]);
      };
      await Promise.all([
        loadBasic(e),
        loadInteractivityForSlim(e),
        loadEasingQuadPlugin(e),
        loadEmojiShape(e),
        loadImageShape(e),
        loadLineShape(e),
        loadPolygonShape(e),
        loadSquareShape(e),
        loadStarShape(e),
        loadLifeUpdater(e),
        loadPaintUpdater(e),
        loadRotateUpdater(e)
      ]);
    });
  }

  // node_modules/@tsparticles/slim/browser/browser.js
  var globalObject48 = globalThis;
  globalObject48.__tsParticlesInternals = globalObject48.__tsParticlesInternals ?? {};
  globalObject48.loadSlim = loadSlim;

  // node_modules/@tsparticles/shape-text/browser/TextDrawer.js
  init_browser2();

  // node_modules/@tsparticles/shape-text/browser/Utils.js
  init_browser2();
  var validTypes2 = ["text", "character", "char", "multiline-text"];
  var firstIndex = 0;
  var minLength = 0;
  function drawText(data) {
    const { context, particle, fill, stroke, radius, opacity } = data, character = particle.shapeData;
    if (!character) {
      return;
    }
    const textData = character.value;
    particle.textLines ??= itemFromSingleOrMultiple(textData, particle.randomIndexData)?.split("\n") ?? [];
    particle.maxTextLength ??= particle.textLines.length ? Math.max(...particle.textLines.map((t) => t.length)) : particle.textLines[firstIndex]?.length ?? minLength;
    if (!particle.textLines.length || !particle.maxTextLength) {
      return;
    }
    const lines = particle.textLines, style = character.style ?? "", weight = character.weight ?? "400", font = character.font ?? "Verdana", size = Math.round(radius) * double / (lines.length * particle.maxTextLength);
    context.font = `${style} ${weight} ${size.toString()}px "${font}"`;
    const originalGlobalAlpha = context.globalAlpha;
    context.globalAlpha = opacity;
    for (let i = 0; i < lines.length; i++) {
      const currentLine = lines[i];
      if (!currentLine) {
        continue;
      }
      drawTextLine(context, currentLine, size, i, fill, stroke);
    }
    context.globalAlpha = originalGlobalAlpha;
  }
  function drawTextLine(context, line, size, index, fill, stroke) {
    const pos = {
      x: -(line.length * size * half),
      y: size * half + index * size
    };
    if (fill) {
      context.fillText(line, pos.x, pos.y);
    }
    if (stroke) {
      context.strokeText(line, pos.x, pos.y);
    }
  }

  // node_modules/@tsparticles/shape-text/browser/TextDrawer.js
  var firstIndex2 = 0;
  var minLength2 = 0;
  var TextDrawer = class {
    draw(data) {
      drawText(data);
    }
    async init(container) {
      const options = container.actualOptions;
      if (validTypes2.find((t) => isInArray(t, options.particles.shape.type))) {
        const shapeOptions = validTypes2.map((t) => options.particles.shape.options[t]).find((t) => !!t), promises = [];
        executeOnSingleOrMultiple(shapeOptions, (shape) => {
          promises.push(loadFont(shape.font, shape.weight));
        });
        await Promise.all(promises);
      }
    }
    particleInit(_container, particle) {
      if (!particle.shape || !validTypes2.includes(particle.shape)) {
        return;
      }
      const character = particle.shapeData;
      if (character === void 0) {
        return;
      }
      const textData = character.value;
      if (!textData) {
        return;
      }
      particle.textLines = itemFromSingleOrMultiple(textData, particle.randomIndexData)?.split("\n") ?? [];
      particle.maxTextLength = particle.textLines.length ? Math.max(...particle.textLines.map((t) => t.length)) : particle.textLines[firstIndex2]?.length ?? minLength2;
    }
  };

  // node_modules/@tsparticles/shape-text/browser/index.js
  async function loadTextShape(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addShape(validTypes2, () => Promise.resolve(new TextDrawer()));
    });
  }

  // node_modules/@tsparticles/shape-text/browser/browser.js
  var globalObject49 = globalThis;
  globalObject49.__tsParticlesInternals = globalObject49.__tsParticlesInternals ?? {};
  globalObject49.loadTextShape = loadTextShape;

  // node_modules/@tsparticles/updater-tilt/browser/TiltUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-tilt/browser/Options/Classes/Tilt.js
  init_browser2();

  // node_modules/@tsparticles/updater-tilt/browser/TiltDirection.js
  var TiltDirection;
  (function(TiltDirection2) {
    TiltDirection2["clockwise"] = "clockwise";
    TiltDirection2["counterClockwise"] = "counter-clockwise";
    TiltDirection2["random"] = "random";
  })(TiltDirection || (TiltDirection = {}));

  // node_modules/@tsparticles/updater-tilt/browser/Options/Classes/TiltAnimation.js
  init_browser2();
  var TiltAnimation = class {
    decay = 0;
    enable = false;
    speed = 0;
    sync = false;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadProperty(this, "enable", data.enable);
      loadRangeProperty(this, "speed", data.speed);
      loadRangeProperty(this, "decay", data.decay);
      loadProperty(this, "sync", data.sync);
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/Options/Classes/Tilt.js
  var Tilt = class extends ValueWithRandom {
    animation = new TiltAnimation();
    direction = TiltDirection.clockwise;
    enable = false;
    load(data) {
      super.load(data);
      if (isNull(data)) {
        return;
      }
      this.animation.load(data.animation);
      loadProperty(this, "direction", data.direction);
      loadProperty(this, "enable", data.enable);
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/TiltUpdater.js
  var maxAngle4 = 360;
  var TiltUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    getTransformValues(particle) {
      const tilt = particle.tilt?.enable && particle.tilt;
      return {
        b: tilt ? Math.cos(tilt.value) * tilt.cosDirection : void 0,
        c: tilt ? Math.sin(tilt.value) * tilt.sinDirection : void 0
      };
    }
    init(particle) {
      const tiltOptions = particle.options.tilt;
      if (!tiltOptions) {
        return;
      }
      particle.tilt = {
        enable: tiltOptions.enable,
        value: degToRad(getRangeValue(tiltOptions.value)),
        sinDirection: getRandom() >= half ? identity : -identity,
        cosDirection: getRandom() >= half ? identity : -identity,
        min: 0,
        max: doublePI
      };
      let tiltDirection = tiltOptions.direction;
      if (tiltDirection === TiltDirection.random) {
        const index = Math.floor(getRandom() * double);
        tiltDirection = index > minIndex ? TiltDirection.counterClockwise : TiltDirection.clockwise;
      }
      switch (tiltDirection) {
        case TiltDirection.counterClockwise:
        case "counterClockwise":
          particle.tilt.status = AnimationStatus.decreasing;
          break;
        case TiltDirection.clockwise:
          particle.tilt.status = AnimationStatus.increasing;
          break;
        default:
          break;
      }
      const tiltAnimation = particle.options.tilt?.animation;
      if (tiltAnimation?.enable) {
        particle.tilt.decay = identity - getRangeValue(tiltAnimation.decay);
        particle.tilt.velocity = getRangeValue(tiltAnimation.speed) / maxAngle4 * this.#container.retina.reduceFactor;
        if (!tiltAnimation.sync) {
          particle.tilt.velocity *= getRandom();
        }
      }
    }
    isEnabled(particle) {
      const tiltAnimation = particle.options.tilt?.animation;
      return !particle.destroyed && !particle.spawning && !!tiltAnimation?.enable;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "tilt", Tilt, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle) || !particle.tilt) {
        return;
      }
      updateAnimation(particle, particle.tilt, false, DestroyType.none, delta);
    }
  };

  // node_modules/@tsparticles/updater-tilt/browser/index.js
  async function loadTiltUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("tilt", (container) => {
        return Promise.resolve(new TiltUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-tilt/browser/browser.js
  var globalObject50 = globalThis;
  globalObject50.__tsParticlesInternals = globalObject50.__tsParticlesInternals ?? {};
  globalObject50.loadTiltUpdater = loadTiltUpdater;

  // node_modules/@tsparticles/updater-twinkle/browser/TwinkleUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-twinkle/browser/Options/Classes/Twinkle.js
  init_browser2();

  // node_modules/@tsparticles/updater-twinkle/browser/Options/Classes/TwinkleLinksValues.js
  init_browser2();
  var TwinkleLinksValues = class {
    color;
    enable = false;
    frequency = 0.05;
    opacity = 1;
    load(data) {
      if (isNull(data)) {
        return;
      }
      if (data.color !== void 0) {
        this.color = OptionsColor.create(this.color, data.color);
      }
      loadProperty(this, "enable", data.enable);
      loadProperty(this, "frequency", data.frequency);
      loadRangeProperty(this, "opacity", data.opacity);
    }
  };

  // node_modules/@tsparticles/updater-twinkle/browser/Options/Classes/TwinkleParticlesValues.js
  init_browser2();
  var TwinkleParticlesValues = class {
    enable = false;
    fillColor;
    frequency = 0.05;
    opacity = 1;
    strokeColor;
    load(data) {
      if (isNull(data)) {
        return;
      }
      if (data.fillColor !== void 0) {
        this.fillColor = OptionsColor.create(this.fillColor, data.fillColor);
      }
      if (data.strokeColor !== void 0) {
        this.strokeColor = OptionsColor.create(this.strokeColor, data.strokeColor);
      }
      loadProperty(this, "enable", data.enable);
      loadProperty(this, "frequency", data.frequency);
      loadRangeProperty(this, "opacity", data.opacity);
    }
  };

  // node_modules/@tsparticles/updater-twinkle/browser/Options/Classes/Twinkle.js
  var Twinkle = class {
    links = new TwinkleLinksValues();
    particles = new TwinkleParticlesValues();
    load(data) {
      if (isNull(data)) {
        return;
      }
      this.links.load(data.links);
      this.particles.load(data.particles);
    }
  };

  // node_modules/@tsparticles/updater-twinkle/browser/TwinkleUpdater.js
  var TwinkleUpdater = class {
    #container;
    #pluginManager;
    constructor(pluginManager, container) {
      this.#pluginManager = pluginManager;
      this.#container = container;
    }
    getColorStyles(particle, _context, _radius, opacity) {
      const pOptions = particle.options, container = this.#container, twinkleOptions = pOptions["twinkle"];
      if (!twinkleOptions) {
        return {};
      }
      const twinkle = twinkleOptions.particles, twinkling = twinkle.enable && getRandom() < twinkle.frequency, zIndexOptions = particle.options.zIndex, zOffset = 1, zOpacityFactor = (zOffset - particle.zIndexFactor) ** zIndexOptions.opacityRate, twinklingOpacity = twinkling ? getRangeValue(twinkle.opacity) * zOpacityFactor : opacity, twinkleFillRgb = rangeColorToHsl(this.#pluginManager, twinkle.fillColor), twinkleStrokeRgb = rangeColorToHsl(this.#pluginManager, twinkle.strokeColor), getTwinkleFillStyle = () => {
        if (!twinkleFillRgb) {
          return void 0;
        }
        return getStyleFromHsl(twinkleFillRgb, container.hdr, twinklingOpacity, container.peakNits, container.hdrMode);
      }, getTwinkleStrokeStyle = () => {
        if (!twinkleStrokeRgb) {
          return void 0;
        }
        return getStyleFromHsl(twinkleStrokeRgb, container.hdr, twinklingOpacity, container.peakNits, container.hdrMode);
      }, twinkleFillStyle = getTwinkleFillStyle(), twinkleStrokeStyle = getTwinkleStrokeStyle(), res = {}, needsTwinkle = twinkling && (!!twinkleFillStyle || !!twinkleStrokeStyle);
      res.fill = needsTwinkle ? twinkleFillStyle : void 0;
      res.stroke = needsTwinkle ? twinkleStrokeStyle : void 0;
      return res;
    }
    init() {
    }
    isEnabled(particle) {
      const pOptions = particle.options, twinkleOptions = pOptions.twinkle;
      if (!twinkleOptions) {
        return false;
      }
      return twinkleOptions.particles.enable;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "twinkle", Twinkle, ...sources);
    }
    update() {
    }
  };

  // node_modules/@tsparticles/updater-twinkle/browser/index.js
  async function loadTwinkleUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("twinkle", (container) => {
        return Promise.resolve(new TwinkleUpdater(e.pluginManager, container));
      });
    });
  }

  // node_modules/@tsparticles/updater-twinkle/browser/browser.js
  var globalObject51 = globalThis;
  globalObject51.__tsParticlesInternals = globalObject51.__tsParticlesInternals ?? {};
  globalObject51.loadTwinkleUpdater = loadTwinkleUpdater;

  // node_modules/@tsparticles/updater-wobble/browser/WobbleUpdater.js
  init_browser2();

  // node_modules/@tsparticles/updater-wobble/browser/Options/Classes/Wobble.js
  init_browser2();

  // node_modules/@tsparticles/updater-wobble/browser/Options/Classes/WobbleSpeed.js
  init_browser2();
  var WobbleSpeed = class {
    angle = 50;
    move = 10;
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "angle", data.angle);
      loadRangeProperty(this, "move", data.move);
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/Options/Classes/Wobble.js
  var Wobble = class {
    distance = 5;
    enable = false;
    speed = new WobbleSpeed();
    load(data) {
      if (isNull(data)) {
        return;
      }
      loadRangeProperty(this, "distance", data.distance);
      loadProperty(this, "enable", data.enable);
      if (data.speed !== void 0) {
        if (isNumber(data.speed)) {
          this.speed.load({ angle: data.speed });
        } else {
          const rangeSpeed = data.speed;
          if ("min" in rangeSpeed) {
            this.speed.load({ angle: rangeSpeed });
          } else {
            this.speed.load(data.speed);
          }
        }
      }
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/Utils.js
  init_browser2();
  var defaultDistance = 0;
  var distanceFactor = 60;
  function updateWobble(container, particle, delta) {
    const { wobble: wobbleOptions } = particle.options, { wobble } = particle;
    if (!wobbleOptions?.enable || !wobble) {
      return;
    }
    const reduceFactor = container.retina.reduceFactor, angleSpeed = wobble.angleSpeed * delta.factor * reduceFactor, moveSpeed = wobble.moveSpeed * delta.factor * reduceFactor, distance = moveSpeed * (particle.retina.wobbleDistance ?? defaultDistance) / (millisecondsToSeconds / distanceFactor), max = doublePI, { position } = particle;
    wobble.angle += angleSpeed;
    if (wobble.angle > max) {
      wobble.angle -= max;
    }
    position.x += distance * Math.cos(wobble.angle);
    position.y += distance * Math.abs(Math.sin(wobble.angle));
  }

  // node_modules/@tsparticles/updater-wobble/browser/WobbleUpdater.js
  var maxAngle5 = 360;
  var moveSpeedFactor2 = 10;
  var defaultDistance2 = 0;
  var WobbleUpdater = class {
    #container;
    constructor(container) {
      this.#container = container;
    }
    init(particle) {
      const wobbleOpt = particle.options.wobble;
      if (wobbleOpt?.enable) {
        particle.wobble = {
          angle: getRandom() * doublePI,
          angleSpeed: getRangeValue(wobbleOpt.speed.angle) / maxAngle5,
          moveSpeed: getRangeValue(wobbleOpt.speed.move) / moveSpeedFactor2
        };
      } else {
        particle.wobble = {
          angle: 0,
          angleSpeed: 0,
          moveSpeed: 0
        };
      }
      particle.retina.wobbleDistance = getRangeValue(wobbleOpt?.distance ?? defaultDistance2) * this.#container.retina.pixelRatio;
    }
    isEnabled(particle) {
      return !particle.destroyed && !particle.spawning && !!particle.options.wobble?.enable;
    }
    loadOptions(options, ...sources) {
      loadOptionProperty(options, "wobble", Wobble, ...sources);
    }
    update(particle, delta) {
      if (!this.isEnabled(particle)) {
        return;
      }
      updateWobble(this.#container, particle, delta);
    }
  };

  // node_modules/@tsparticles/updater-wobble/browser/index.js
  async function loadWobbleUpdater(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register((e) => {
      e.pluginManager.addParticleUpdater("wobble", (container) => {
        return Promise.resolve(new WobbleUpdater(container));
      });
    });
  }

  // node_modules/@tsparticles/updater-wobble/browser/browser.js
  var globalObject52 = globalThis;
  globalObject52.__tsParticlesInternals = globalObject52.__tsParticlesInternals ?? {};
  globalObject52.loadWobbleUpdater = loadWobbleUpdater;

  // node_modules/tsparticles/browser/index.js
  async function loadFull(engine) {
    engine.checkVersion("4.6.0");
    await engine.pluginManager.register(async (e) => {
      const loadEmittersPluginBundle = async (e2) => {
        await loadEmittersPlugin(e2);
        await Promise.all([
          loadEmittersShapeCircle(e2),
          loadEmittersShapeSquare(e2)
        ]);
      }, loadInteractivityForFull = async (e2) => {
        await loadSlim(e2);
        await Promise.all([
          loadExternalDragInteraction(e2),
          loadExternalTrailInteraction(e2),
          loadAbsorbersPlugin(e2),
          loadEmittersPluginBundle(e2)
        ]);
      };
      await Promise.all([
        loadInteractivityForFull(e),
        loadDestroyUpdater(e),
        loadRollUpdater(e),
        loadTiltUpdater(e),
        loadTwinkleUpdater(e),
        loadWobbleUpdater(e),
        loadTextShape(e)
      ]);
    });
  }

  // node_modules/tsparticles/browser/browser.js
  var globalObject53 = globalThis;
  globalObject53.__tsParticlesInternals = globalObject53.__tsParticlesInternals ?? {};
  globalObject53.loadFull = loadFull;

  // site-particles.ts
  (async () => {
    await loadFull(tsParticles);
    await tsParticles.load({
      id: "tsparticles",
      options: {
        fpsLimit: 60,
        particles: {
          number: { value: 55, density: { enable: true } },
          color: { value: ["#d9a441", "#f0d48a", "#b97f26"] },
          links: { enable: true, color: "#d9a441", distance: 130, opacity: 0.12, width: 1 },
          move: { enable: true, speed: 0.55, outModes: { default: "out" } },
          size: { value: { min: 1, max: 2.6 } },
          opacity: { value: { min: 0.25, max: 0.8 }, animation: { enable: true, speed: 0.6 } }
        },
        detectRetina: true
      }
    });
  })();
})();
