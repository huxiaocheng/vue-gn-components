module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2704":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkIn_vue_vue_type_style_index_0_id_10669a9f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("43a4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkIn_vue_vue_type_style_index_0_id_10669a9f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkIn_vue_vue_type_style_index_0_id_10669a9f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkIn_vue_vue_type_style_index_0_id_10669a9f_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "43a4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "688f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "70b0":
/***/ (function(module, exports, __webpack_require__) {

(function (global) {
    'use strict';

    var util = newUtil();
    var inliner = newInliner();
    var fontFaces = newFontFaces();
    var images = newImages();

    // Default impl options
    var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false
    };

    var domtoimage = {
        toSvg: toSvg,
        toPng: toPng,
        toJpeg: toJpeg,
        toBlob: toBlob,
        toPixelData: toPixelData,
        impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
        }
    };

    if (true)
        module.exports = domtoimage;
    else
        {}


    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options
     * @param {Function} options.filter - Should return true if passed node should be included in the output
     *          (excluding node means excluding it's children as well). Not called on the root node.
     * @param {String} options.bgcolor - color for the background, any valid CSS color value.
     * @param {Number} options.width - width to be applied to node before rendering.
     * @param {Number} options.height - height to be applied to node before rendering.
     * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
     * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                defaults to 1.0.
     * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
     * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
     * @return {Promise} - A promise that is fulfilled with a SVG image data URL
     * */
    function toSvg(node, options) {
        options = options || {};
        copyOptions(options);
        return Promise.resolve(node)
            .then(function (node) {
                return cloneNode(node, options.filter, true);
            })
            .then(embedFonts)
            .then(inlineImages)
            .then(applyOptions)
            .then(function (clone) {
                return makeSvgDataUri(clone,
                    options.width || util.width(node),
                    options.height || util.height(node)
                );
            });

        function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;

            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';

            if (options.style)
                Object.keys(options.style).forEach(function (property) {
                    clone.style[property] = options.style[property];
                });

            return clone;
        }
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
     * */
    function toPixelData(node, options) {
        return draw(node, options || {})
            .then(function (canvas) {
                return canvas.getContext('2d').getImageData(
                    0,
                    0,
                    util.width(node),
                    util.height(node)
                ).data;
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image data URL
     * */
    function toPng(node, options) {
        return draw(node, options || {})
            .then(function (canvas) {
                return canvas.toDataURL();
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
     * */
    function toJpeg(node, options) {
        options = options || {};
        return draw(node, options)
            .then(function (canvas) {
                return canvas.toDataURL('image/jpeg', options.quality || 1.0);
            });
    }

    /**
     * @param {Node} node - The DOM Node object to render
     * @param {Object} options - Rendering options, @see {@link toSvg}
     * @return {Promise} - A promise that is fulfilled with a PNG image blob
     * */
    function toBlob(node, options) {
        return draw(node, options || {})
            .then(util.canvasToBlob);
    }

    function copyOptions(options) {
        // Copy options to impl options for use in impl
        if(typeof(options.imagePlaceholder) === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
        } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
        }

        if(typeof(options.cacheBust) === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
        } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
        }
    }

    function draw(domNode, options) {
        return toSvg(domNode, options)
            .then(util.makeImage)
            .then(util.delay(100))
            .then(function (image) {
                var canvas = newCanvas(domNode);
                canvas.getContext('2d').drawImage(image, 0, 0);
                return canvas;
            });

        function newCanvas(domNode) {
            var canvas = document.createElement('canvas');
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);

            if (options.bgcolor) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = options.bgcolor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
        }
    }

    function cloneNode(node, filter, root) {
        if (!root && filter && !filter(node)) return Promise.resolve();

        return Promise.resolve(node)
            .then(makeNodeCopy)
            .then(function (clone) {
                return cloneChildren(node, clone, filter);
            })
            .then(function (clone) {
                return processClone(node, clone);
            });

        function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
        }

        function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);

            return cloneChildrenInOrder(clone, util.asArray(children), filter)
                .then(function () {
                    return clone;
                });

            function cloneChildrenInOrder(parent, children, filter) {
                var done = Promise.resolve();
                children.forEach(function (child) {
                    done = done
                        .then(function () {
                            return cloneNode(child, filter);
                        })
                        .then(function (childClone) {
                            if (childClone) parent.appendChild(childClone);
                        });
                });
                return done;
            }
        }

        function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;

            return Promise.resolve()
                .then(cloneStyle)
                .then(clonePseudoElements)
                .then(copyUserInput)
                .then(fixSvg)
                .then(function () {
                    return clone;
                });

            function cloneStyle() {
                copyStyle(window.getComputedStyle(original), clone.style);

                function copyStyle(source, target) {
                    if (source.cssText) target.cssText = source.cssText;
                    else copyProperties(source, target);

                    function copyProperties(source, target) {
                        util.asArray(source).forEach(function (name) {
                            target.setProperty(
                                name,
                                source.getPropertyValue(name),
                                source.getPropertyPriority(name)
                            );
                        });
                    }
                }
            }

            function clonePseudoElements() {
                [':before', ':after'].forEach(function (element) {
                    clonePseudoElement(element);
                });

                function clonePseudoElement(element) {
                    var style = window.getComputedStyle(original, element);
                    var content = style.getPropertyValue('content');

                    if (content === '' || content === 'none') return;

                    var className = util.uid();
                    clone.className = clone.className + ' ' + className;
                    var styleElement = document.createElement('style');
                    styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                    clone.appendChild(styleElement);

                    function formatPseudoElementStyle(className, element, style) {
                        var selector = '.' + className + ':' + element;
                        var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                        return document.createTextNode(selector + '{' + cssText + '}');

                        function formatCssText(style) {
                            var content = style.getPropertyValue('content');
                            return style.cssText + ' content: ' + content + ';';
                        }

                        function formatCssProperties(style) {

                            return util.asArray(style)
                                .map(formatProperty)
                                .join('; ') + ';';

                            function formatProperty(name) {
                                return name + ': ' +
                                    style.getPropertyValue(name) +
                                    (style.getPropertyPriority(name) ? ' !important' : '');
                            }
                        }
                    }
                }
            }

            function copyUserInput() {
                if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
                if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
                if (!(clone instanceof SVGElement)) return;
                clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

                if (!(clone instanceof SVGRectElement)) return;
                ['width', 'height'].forEach(function (attribute) {
                    var value = clone.getAttribute(attribute);
                    if (!value) return;

                    clone.style.setProperty(attribute, value);
                });
            }
        }
    }

    function embedFonts(node) {
        return fontFaces.resolveAll()
            .then(function (cssText) {
                var styleNode = document.createElement('style');
                node.appendChild(styleNode);
                styleNode.appendChild(document.createTextNode(cssText));
                return node;
            });
    }

    function inlineImages(node) {
        return images.inlineAll(node)
            .then(function () {
                return node;
            });
    }

    function makeSvgDataUri(node, width, height) {
        return Promise.resolve(node)
            .then(function (node) {
                node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
                return new XMLSerializer().serializeToString(node);
            })
            .then(util.escapeXhtml)
            .then(function (xhtml) {
                return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
            })
            .then(function (foreignObject) {
                return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' +
                    foreignObject + '</svg>';
            })
            .then(function (svg) {
                return 'data:image/svg+xml;charset=utf-8,' + svg;
            });
    }

    function newUtil() {
        return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
        };

        function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';

            return {
                'woff': WOFF,
                'woff2': WOFF,
                'ttf': 'application/font-truetype',
                'eot': 'application/vnd.ms-fontobject',
                'png': 'image/png',
                'jpg': JPEG,
                'jpeg': JPEG,
                'gif': 'image/gif',
                'tiff': 'image/tiff',
                'svg': 'image/svg+xml'
            };
        }

        function parseExtension(url) {
            var match = /\.([^\.\/]*?)$/g.exec(url);
            if (match) return match[1];
            else return '';
        }

        function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
        }

        function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
        }

        function toBlob(canvas) {
            return new Promise(function (resolve) {
                var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
                var length = binaryString.length;
                var binaryArray = new Uint8Array(length);

                for (var i = 0; i < length; i++)
                    binaryArray[i] = binaryString.charCodeAt(i);

                resolve(new Blob([binaryArray], {
                    type: 'image/png'
                }));
            });
        }

        function canvasToBlob(canvas) {
            if (canvas.toBlob)
                return new Promise(function (resolve) {
                    canvas.toBlob(resolve);
                });

            return toBlob(canvas);
        }

        function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
        }

        function uid() {
            var index = 0;

            return function () {
                return 'u' + fourRandomChars() + index++;

                function fourRandomChars() {
                    /* see http://stackoverflow.com/a/6248722/2519373 */
                    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
                }
            };
        }

        function makeImage(uri) {
            return new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    resolve(image);
                };
                image.onerror = reject;
                image.src = uri;
            });
        }

        function getAndEncode(url) {
            var TIMEOUT = 30000;
            if(domtoimage.impl.options.cacheBust) {
                // Cache bypass so we dont have CORS issues with cached images
                // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
                url += ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime();
            }

            return new Promise(function (resolve) {
                var request = new XMLHttpRequest();

                request.onreadystatechange = done;
                request.ontimeout = timeout;
                request.responseType = 'blob';
                request.timeout = TIMEOUT;
                request.open('GET', url, true);
                request.send();

                var placeholder;
                if(domtoimage.impl.options.imagePlaceholder) {
                    var split = domtoimage.impl.options.imagePlaceholder.split(/,/);
                    if(split && split[1]) {
                        placeholder = split[1];
                    }
                }

                function done() {
                    if (request.readyState !== 4) return;

                    if (request.status !== 200) {
                        if(placeholder) {
                            resolve(placeholder);
                        } else {
                            fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                        }

                        return;
                    }

                    var encoder = new FileReader();
                    encoder.onloadend = function () {
                        var content = encoder.result.split(/,/)[1];
                        resolve(content);
                    };
                    encoder.readAsDataURL(request.response);
                }

                function timeout() {
                    if(placeholder) {
                        resolve(placeholder);
                    } else {
                        fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                    }
                }

                function fail(message) {
                    console.error(message);
                    resolve('');
                }
            });
        }

        function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
        }

        function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
        }

        function delay(ms) {
            return function (arg) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve(arg);
                    }, ms);
                });
            };
        }

        function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;
            for (var i = 0; i < length; i++) array.push(arrayLike[i]);
            return array;
        }

        function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
        }

        function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
        }

        function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
        }

        function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
        }
    }

    function newInliner() {
        var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;

        return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
                readUrls: readUrls,
                inline: inline
            }
        };

        function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
        }

        function readUrls(string) {
            var result = [];
            var match;
            while ((match = URL_REGEX.exec(string)) !== null) {
                result.push(match[1]);
            }
            return result.filter(function (url) {
                return !util.isDataUrl(url);
            });
        }

        function inline(string, url, baseUrl, get) {
            return Promise.resolve(url)
                .then(function (url) {
                    return baseUrl ? util.resolveUrl(url, baseUrl) : url;
                })
                .then(get || util.getAndEncode)
                .then(function (data) {
                    return util.dataAsUrl(data, util.mimeType(url));
                })
                .then(function (dataUrl) {
                    return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
                });

            function urlAsRegex(url) {
                return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
        }

        function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);

            return Promise.resolve(string)
                .then(readUrls)
                .then(function (urls) {
                    var done = Promise.resolve(string);
                    urls.forEach(function (url) {
                        done = done.then(function (string) {
                            return inline(string, url, baseUrl, get);
                        });
                    });
                    return done;
                });

            function nothingToInline() {
                return !shouldProcess(string);
            }
        }
    }

    function newFontFaces() {
        return {
            resolveAll: resolveAll,
            impl: {
                readAll: readAll
            }
        };

        function resolveAll() {
            return readAll(document)
                .then(function (webFonts) {
                    return Promise.all(
                        webFonts.map(function (webFont) {
                            return webFont.resolve();
                        })
                    );
                })
                .then(function (cssStrings) {
                    return cssStrings.join('\n');
                });
        }

        function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets))
                .then(getCssRules)
                .then(selectWebFontRules)
                .then(function (rules) {
                    return rules.map(newWebFont);
                });

            function selectWebFontRules(cssRules) {
                return cssRules
                    .filter(function (rule) {
                        return rule.type === CSSRule.FONT_FACE_RULE;
                    })
                    .filter(function (rule) {
                        return inliner.shouldProcess(rule.style.getPropertyValue('src'));
                    });
            }

            function getCssRules(styleSheets) {
                var cssRules = [];
                styleSheets.forEach(function (sheet) {
                    try {
                        util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                    } catch (e) {
                        console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                    }
                });
                return cssRules;
            }

            function newWebFont(webFontRule) {
                return {
                    resolve: function resolve() {
                        var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                        return inliner.inlineAll(webFontRule.cssText, baseUrl);
                    },
                    src: function () {
                        return webFontRule.style.getPropertyValue('src');
                    }
                };
            }
        }
    }

    function newImages() {
        return {
            inlineAll: inlineAll,
            impl: {
                newImage: newImage
            }
        };

        function newImage(element) {
            return {
                inline: inline
            };

            function inline(get) {
                if (util.isDataUrl(element.src)) return Promise.resolve();

                return Promise.resolve(element.src)
                    .then(get || util.getAndEncode)
                    .then(function (data) {
                        return util.dataAsUrl(data, util.mimeType(element.src));
                    })
                    .then(function (dataUrl) {
                        return new Promise(function (resolve, reject) {
                            element.onload = resolve;
                            element.onerror = reject;
                            element.src = dataUrl;
                        });
                    });
            }
        }

        function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);

            return inlineBackground(node)
                .then(function () {
                    if (node instanceof HTMLImageElement)
                        return newImage(node).inline();
                    else
                        return Promise.all(
                            util.asArray(node.childNodes).map(function (child) {
                                return inlineAll(child);
                            })
                        );
                });

            function inlineBackground(node) {
                var background = node.style.getPropertyValue('background');

                if (!background) return Promise.resolve(node);

                return inliner.inlineAll(background)
                    .then(function (inlined) {
                        node.style.setProperty(
                            'background',
                            inlined,
                            node.style.getPropertyPriority('background')
                        );
                    })
                    .then(function () {
                        return node;
                    });
            }
        }
    }
})(this);


/***/ }),

/***/ "8cc6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imgLabel_vue_vue_type_style_index_0_id_38cbc95a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a919");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imgLabel_vue_vue_type_style_index_0_id_38cbc95a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imgLabel_vue_vue_type_style_index_0_id_38cbc95a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_imgLabel_vue_vue_type_style_index_0_id_38cbc95a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8d6e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_magnifier_vue_vue_type_style_index_0_id_d775f678_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("688f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_magnifier_vue_vue_type_style_index_0_id_d775f678_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_magnifier_vue_vue_type_style_index_0_id_d775f678_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_magnifier_vue_vue_type_style_index_0_id_d775f678_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9788":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a919":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d10e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideCheck_vue_vue_type_style_index_0_id_48604140_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e78f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideCheck_vue_vue_type_style_index_0_id_48604140_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideCheck_vue_vue_type_style_index_0_id_48604140_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slideCheck_vue_vue_type_style_index_0_id_48604140_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e78f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57445aee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkIn/checkIn.vue?vue&type=template&id=10669a9f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datepicker-wrap"},[_c('div',{staticClass:"date-wrapper",style:({'width': typeof _vm.size === String ? _vm.size : _vm.size + 'px'})},[_c('div',{staticClass:"header"},[_c('a',{staticClass:"btn prev",style:({'color': _vm.theme}),attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.showDateInfo('prevYear')}}},[_vm._v("<<")]),_c('a',{staticClass:"btn prev",style:({'color': _vm.theme}),attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.showDateInfo('prevMonth')}}},[_vm._v("<")]),_c('a',{staticClass:"btn next",style:({'color': _vm.theme}),attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.showDateInfo('nextYear')}}},[_vm._v(">>")]),_c('a',{staticClass:"btn next",style:({'color': _vm.theme}),attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.showDateInfo('nextMonth')}}},[_vm._v(">")]),_c('span',{staticClass:"curr-month"},[_vm._v(_vm._s(_vm.dateInfo.year)+"-"+_vm._s(10 > _vm.dateInfo.month ? '0' + _vm.dateInfo.month : _vm.dateInfo.month))])]),_c('div',{ref:"content",staticClass:"date-content"},[_c('ul',{staticClass:"week-title",style:({'background': _vm.theme})},[_c('li',{staticClass:"week-item"},[_vm._v("一")]),_c('li',{staticClass:"week-item"},[_vm._v("二")]),_c('li',{staticClass:"week-item"},[_vm._v("三")]),_c('li',{staticClass:"week-item"},[_vm._v("四")]),_c('li',{staticClass:"week-item"},[_vm._v("五")]),_c('li',{staticClass:"week-item"},[_vm._v("六")]),_c('li',{staticClass:"week-item"},[_vm._v("日")])]),_vm._l((_vm.dateInfo.detailInfo.length / 7),function(item,i){return _c('ul',{key:i,ref:"week",refInFor:true,staticClass:"date-list"},_vm._l((_vm.dateInfo.detailInfo.slice(i * 7, i * 7 + 7)),function(date,index){return _c('li',{key:index,staticClass:"date-item",class:{'active': date.isCheckIn, 'no-current-month': date.date !== date.curDate},on:{"click":function($event){return _vm.onSelectMonth(date.curMonth + 1, _vm.dateInfo)}}},[_vm._v(" "+_vm._s(date.curDate)+" "),(date.isCheckIn)?_c('span',{style:({'background': _vm.theme})}):_vm._e()])}),0)})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/checkIn/checkIn.vue?vue&type=template&id=10669a9f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkIn/checkIn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var checkInvue_type_script_lang_js_ = ({
  name: "CheckIn",
  props: {
    checkIns: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      type: [String, Number],
      default: 500
    },
    theme: {
      type: String,
      default: "#369"
    }
  },
  data() {
    return {
      dateInfo: {}
    };
  },
  created() {
    this.getDateInfo();
  },
  mounted() {
    this._normalizeTreeToInfo(this._createDateTree(this.checkIns));
  },
  watch: {
    checkIns(newIns) {
      this._normalizeTreeToInfo(this._createDateTree(newIns));
    }
  },
  methods: {
    getDateInfo(
      year = new Date().getFullYear(),
      month = new Date().getMonth() + 1
    ) {
      const currMonthFirstDay = new Date(year, month - 1, 1); // 当前月份第一天
      let currMonthFirstDayWeek = currMonthFirstDay.getDay(); // 是星期几
      !currMonthFirstDayWeek && (currMonthFirstDayWeek = 7); // 如果返回0 表示是星期日
      year = currMonthFirstDay.getFullYear();
      month = currMonthFirstDay.getMonth() + 1;
      const currMonthDate = new Date(year, month, 0); // 当前月份最后一天
      const currMonthDateDay = currMonthDate.getDate(); // 当前月有多少天
      const prevMonthLastDay = new Date(year, month - 1, 0); // 上个月最后一天
      const prevMonthLastDayWeek = prevMonthLastDay.getDate(); // 上个月有多少天
      const ret = [];
      for (let i = 0; i < 42; i++) {
        const date = i - currMonthFirstDayWeek + 2;
        let curDate = date;
        let curMonth = month - 1;
        if (date <= 0) {
          curMonth--;
          curDate = prevMonthLastDayWeek + date;
        } else if (date > currMonthDateDay) {
          curMonth++;
          curDate = date - currMonthDateDay;
        }
        if (curMonth >= 13) {
          curMonth = 12;
        }
        ret.push({
          date,
          year,
          curDate,
          curMonth,
          dateStr: normalizeDate(year, curMonth, curDate)
        });
      }
      function normalizeDate(year, month, day) {
        const D = new Date(year, month, day);
        const y = D.getFullYear();
        const m = D.getMonth() + 1 < 10 ? D.getMonth() + 1 : D.getMonth() + 1;
        const d = D.getDate() < 10 ? D.getDate() : D.getDate();
        return `${y}-${m}-${d}`;
      }
      this.dateInfo = {
        year,
        month,
        detailInfo: ret
      };
      this._normalizeTreeToInfo(this._createDateTree(this.checkIns));
    },
    onSelectMonth(month, curMonth) {
      if (month === curMonth.month) {
        return;
      }
      this.getDateInfo(curMonth.year, month);
    },
    showDateInfo(sign) {
      let { year, month } = this.dateInfo;
      if (sign === "prevYear") {
        year--;
      } else if (sign === "nextYear") {
        year++;
      } else if (sign === "prevMonth") {
        month--;
      } else if (sign === "nextMonth") {
        month++;
      }
      this.getDateInfo(year, month);
    },
    _createDateTree(dates) {
      if (!dates.length) {
        return {};
      }
      const ret = {};
      this._normalizeDate(dates).forEach(date => {
        const year = date.split("-")[0];
        const month = date.split("-")[1];
        ret[year] = ret[year] || {};
        (ret[year][month] || (ret[year][month] = [])).push(date);
        ret[year][month] = [...new Set(ret[year][month])];
      });
      return ret;
    },
    _normalizeDate(dates) {
      if (Array.isArray(dates)) {
        return dates.map(date => {
          if ((date + "").length === 13) {
            const D = new Date(date);
            return `${D.getFullYear()}-${D.getMonth() + 1}-${D.getDate()}`;
          } else if (date.indexOf(".") > -1) {
            return date.replace(/\./g, "-");
          } else {
            return date;
          }
        });
      }
    },
    _normalizeTreeToInfo(dateTree = {}) {
      if (!this.isSetFontSize) {
        setTimeout(() => {
          this.isSetFontSize = true;
          this.$refs["content"].style.fontSize =
            this.$refs["week"] &&
            this.$refs["week"][0].clientHeight * 0.3 + "px";
        }, 20);
      }

      if (!Object.keys(dateTree).length) {
        return;
      }
      const currentDate = dateTree[this.dateInfo.year]
        ? dateTree[this.dateInfo.year][
            this.dateInfo.month < 10 ? this.dateInfo.month : this.dateInfo.month
          ] || []
        : [];
      if (!currentDate.length) {
        return;
      }

      const { detailInfo } = this.dateInfo;
      for (let i = 0, l = currentDate.length; i < l; i++) {
        for (let j = 0, len = detailInfo.length; j < len; j++) {
          const info = detailInfo[j];
          if (info.dateStr === currentDate[i]) {
            info["isCheckIn"] = true;
          }
        }
      }

      this.dateInfo.detailInfo.__ob__.dep.notify();
    }
  }
});

// CONCATENATED MODULE: ./packages/checkIn/checkIn.vue?vue&type=script&lang=js&
 /* harmony default export */ var checkIn_checkInvue_type_script_lang_js_ = (checkInvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/checkIn/checkIn.vue?vue&type=style&index=0&id=10669a9f&scoped=true&lang=stylus&
var checkInvue_type_style_index_0_id_10669a9f_scoped_true_lang_stylus_ = __webpack_require__("2704");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/checkIn/checkIn.vue






/* normalize component */

var component = normalizeComponent(
  checkIn_checkInvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "10669a9f",
  null
  
)

/* harmony default export */ var checkIn = (component.exports);
// CONCATENATED MODULE: ./packages/checkIn/index.js

checkIn.install = Vue => Vue.component(checkIn.name, checkIn)
/* harmony default export */ var packages_checkIn = (checkIn);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57445aee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/countdown/countdown.vue?vue&type=template&id=4f6e4630&
var countdownvue_type_template_id_4f6e4630_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default",null,{"date":_vm.date})],2)}
var countdownvue_type_template_id_4f6e4630_staticRenderFns = []


// CONCATENATED MODULE: ./packages/countdown/countdown.vue?vue&type=template&id=4f6e4630&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/countdown/countdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var countdownvue_type_script_lang_js_ = ({
  name: "Countdown",
  props: {
    time: {
      type: [Date, String, Number],
      default() {
        return new Date();
      }
    },
    isSMSMode: {
      type: Boolean,
      default: false
    },
    totalTime: {
      type: [Number, String],
      default: 0
    }
  },
  created() {
    if (!this.isSMSMode || localStorage.getItem("__SMS_total_time__") > 0) {
      this.start();
    }
  },
  data() {
    return {
      date: {
        year: 0,
        month: 0,
        date: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        timeLeft: localStorage.getItem("__SMS_total_time__") || this.totalTime
      }
    };
  },
  methods: {
    start() {
      this.initTime();
    },
    pause() {
      clearTimeout(this.timer);
    },
    initTime() {
      if (this.isSMSMode && this.date.timeLeft > 0) {
        this.mySetInterval(timer => {
          localStorage.setItem("__SMS_total_time__", (this.date.timeLeft -= 1));
          if (localStorage.getItem("__SMS_total_time__") <= 0) {
            this.$emit("end");
            clearTimeout(timer);
            localStorage.removeItem("__SMS_total_time__");
          }
        }, 1000);
      } else {
        let time;
        if (Object.prototype.toString.call(this.time) === "[object Date]") {
          time = this.time;
        } else if (typeof this.time === "string") {
          if (this.time.indexOf("-") !== -1) {
            const temp = this.time.split("-");
            temp[1] = temp[1] - 1;
            time = new Date(...temp);
          } else if (this.time.indexOf(".") !== -1) {
            const temp = this.time.split(".");
            temp[1] = temp[1] - 1;
            time = new Date(...temp);
          }
        } else if ((this.time + "").length === 13) {
          time = new Date(this.time);
        }
        time = time.getTime() - new Date().getTime();

        if (time < 0) {
          return;
        }

        this.mySetInterval(timer => {
          time -= 1000;
          this.timer = timer;
          if (time <= 0) {
            this.$emit("end");
            this.pause();
          }
          this.normalizeTime(time);
        }, 1000);
      }
    },
    normalizeTime(time) {
      time = time / 1000;
      const oneYear = 60 * 60 * 24 * 365;
      const oneMonth = 60 * 60 * 24 * 30;
      const oneDay = 60 * 60 * 24;
      const oneHours = 60 * 60;
      const oneMinutes = 60;

      if (time > oneYear) {
        this.date.year = this.paramsProcess(time, oneYear);
      }
      if (time > oneMonth) {
        this.date.month = this.paramsProcess(time, oneYear, oneMonth);
      }
      if (time > oneDay) {
        this.date.date = this.paramsProcess(time, oneYear, oneMonth, oneDay);
      }
      if (time > oneHours) {
        this.date.hours = this.paramsProcess(
          time,
          oneYear,
          oneMonth,
          oneDay,
          oneHours
        );
      }
      if (time > oneMinutes) {
        this.date.minutes = this.paramsProcess(
          time,
          oneYear,
          oneMonth,
          oneDay,
          oneHours,
          oneMinutes
        );
      }
      if (time > 1) {
        this.date.seconds = this.paramsProcess(
          time,
          oneYear,
          oneMonth,
          oneDay,
          oneHours,
          oneMinutes,
          1
        );
      }
    },
    paramsProcess(...args) {
      const params = args.slice(0, -1);
      const last = args[args.length - 1];
      const val = params.reduce((pre, cur) => {
        return pre % cur;
      });
      return Math.floor(val / last > 1 ? val / last : 0);
    },
    mySetInterval(fn, delay) {
      let timer;
      const loop = (fn, delay) => {
        timer = setTimeout(() => {
          loop(fn, delay);
          fn.call(this, timer);
        }, delay);
      };
      loop(fn, delay);
    }
  }
});

// CONCATENATED MODULE: ./packages/countdown/countdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var countdown_countdownvue_type_script_lang_js_ = (countdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/countdown/countdown.vue





/* normalize component */

var countdown_component = normalizeComponent(
  countdown_countdownvue_type_script_lang_js_,
  countdownvue_type_template_id_4f6e4630_render,
  countdownvue_type_template_id_4f6e4630_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var countdown = (countdown_component.exports);
// CONCATENATED MODULE: ./packages/countdown/index.js

countdown.install = Vue => Vue.component(countdown.name, countdown)
/* harmony default export */ var packages_countdown = (countdown);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57445aee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/imgLabel/imgLabel.vue?vue&type=template&id=38cbc95a&scoped=true&
var imgLabelvue_type_template_id_38cbc95a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrap",staticClass:"wrap"},[_c('img',{ref:"img",staticClass:"img",attrs:{"src":_vm.src,"width":_vm.imgWidth,"draggable":false},on:{"dragover":function($event){$event.preventDefault();$event.stopPropagation();},"click":_vm.handleVoidClick,"contextmenu":function($event){$event.preventDefault();return _vm.handleContextmenu($event)}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isHideLabels),expression:"isHideLabels"}],staticClass:"label-list"},_vm._l((_vm.labels),function(item,index){return _c('div',{key:item._id,ref:"label-item",refInFor:true,staticClass:"label-item",style:({left: item.left + 'px', top: item.top + 'px'}),attrs:{"draggable":true},on:{"contextmenu":function($event){$event.preventDefault();},"dblclick":_vm.handleDoubleClick,"click":function($event){return _vm.handleRemoveLabel(index)},"dragend":function($event){return _vm.ondragend($event, index)},"dragstart":function($event){return _vm.ondragstart($event,index)}}},[_c('span',{staticClass:"label-text",on:{"click":function($event){$event.stopPropagation();},"blur":function($event){return _vm.handleDivBlur($event, index)}}},[_vm._v(_vm._s(item.text))])])}),0),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowMenu),expression:"isShowMenu"}],ref:"menu",staticClass:"menu-list",on:{"click":_vm.hideMenu}},_vm._l((_vm.menus),function(item,index){return _c('li',{key:index,staticClass:"menu-item",on:{"contextmenu":function($event){$event.preventDefault();},"mouseenter":_vm.onMouseEnter,"mouseleave":_vm.onMouseLeave,"click":function($event){return _vm.onMenuClick(item)}}},[_vm._v(_vm._s(item))])}),0)])}
var imgLabelvue_type_template_id_38cbc95a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/imgLabel/imgLabel.vue?vue&type=template&id=38cbc95a&scoped=true&

// EXTERNAL MODULE: ./node_modules/dom-to-image/src/dom-to-image.js
var dom_to_image = __webpack_require__("70b0");
var dom_to_image_default = /*#__PURE__*/__webpack_require__.n(dom_to_image);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/imgLabel/imgLabel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const LABEL_INIT_HEIGHT = 30;
const TRIANGLE_HEIGHT = 5;
const CLOSE_BTN_BORDER = 6;

/* harmony default export */ var imgLabelvue_type_script_lang_js_ = ({
  name: "ImgLabel",
  props: {
    isShowSaveBtn: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      default: ""
    },
    width: {
      type: [Number, String],
      default: 500
    },
    theme: {
      type: String,
      default: "#3b8bcc"
    }
  },
  created() {
    this.pos = {};
    this.dragstart = {};
    !this.isShowSaveBtn && this.menus.splice(1, 1);
  },
  mounted() {
    this.$nextTick(() => {
      this.menu = this.$refs["menu"];
      this.img = this.$refs["img"];
    });
  },
  data() {
    return {
      isHideLabels: true,
      menus: ["新建标签", "保存标签", "清除标签", "隐藏标签", "导出为图片"],
      isShowMenu: false,
      labels: JSON.parse(localStorage.getItem(`__labels__`)) || []
    };
  },
  computed: {
    imgWidth() {
      return typeof this.width === "number"
        ? this.width
        : this.width.slice(0, -2);
    }
  },
  methods: {
    ondragend(e, index) {
      const bouding = this.img.getBoundingClientRect();
      const labelWidth = this.$refs["label-item"][index].clientWidth;
      const labelHeight = this.$refs["label-item"][index].clientHeight;
      this.labels[index].left = Math.max(
        0,
        Math.min(
          e.clientX - bouding.left - this.dragstart.left,
          bouding.width - labelWidth - CLOSE_BTN_BORDER
        )
      );
      this.labels[index].top = Math.max(
        0 + CLOSE_BTN_BORDER,
        Math.min(
          e.clientY - bouding.top - this.dragstart.top,
          bouding.height - labelHeight - TRIANGLE_HEIGHT * 2
        )
      );
    },
    ondragstart(e, index) {
      const bouding = this.img.getBoundingClientRect();
      this.dragstart["left"] =
        e.clientX - bouding.left - this.labels[index].left;
      this.dragstart["top"] = e.clientY - bouding.top - this.labels[index].top;
    },
    onMenuClick(item) {
      switch (item) {
        case "新建标签":
          this.createdLabel();
          break;
        case "保存标签":
          this.saveLabel();
          break;
        case "清除标签":
          this.clearLabel();
          break;
        case "隐藏标签":
        case "显示标签":
          this.hideLabel();
          break;
        case "导出为图片":
          this.exportImg();
          break;
        default:
          "";
      }
    },
    handleRemoveLabel(index) {
      this.labels.splice(index, 1);
    },
    handleVoidClick() {
      this.hideMenu();
    },
    handleDivBlur(e, index) {
      e.target.innerHTML === "" && this.labels.splice(index, 1);
      e.target.setAttribute("contenteditable", false);
      this.labels[index].text = e.target.innerHTML;
    },
    handleDoubleClick(e) {
      e.target.setAttribute("contenteditable", true);
      e.target.focus();
      this.$nextTick(() => {
        if (document.selection) {
          let range = document.body.createTextRange();
          range.moveToElementText(e.target);
          range.select();
        } else if (window.getSelection) {
          const range = document.createRange();
          range.selectNodeContents(e.target);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
        }
      });
    },
    createdLabel() {
      this.labels.push({
        left: this.pos.left,
        top: this.pos.top,
        text: "新建标签",
        _id: new Date().getTime()
      });
    },
    saveLabel() {
      localStorage.setItem(`__labels__`, JSON.stringify(this.labels));
    },
    clearLabel() {
      localStorage.removeItem(`__labels__`);
      this.labels = [];
    },
    hideLabel() {
      this.isHideLabels = !this.isHideLabels;
      if (!this.labels.length) return;
      this.menus[3] = this.menus[3] === "显示标签" ? "隐藏标签" : "显示标签";
    },
    exportImg() {
      setTimeout(() => {
        dom_to_image_default.a.toJpeg(this.$refs["wrap"]).then(dataUrl => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = this.getDate();
          link.click();
        });
      });
    },
    handleContextmenu(e) {
      const bouding = e.target.getBoundingClientRect();
      this.showMenu();
      this.$nextTick(() => {
        const left = Math.min(
          e.clientX - bouding.left,
          this.img.offsetWidth - this.menu.offsetWidth
        );
        const top = Math.min(
          e.clientY - bouding.top,
          this.img.offsetHeight - this.menu.offsetHeight
        );
        this.pos["left"] = left;
        this.pos["top"] =
          e.clientY - bouding.top + LABEL_INIT_HEIGHT + TRIANGLE_HEIGHT >
          this.img.offsetWidth
            ? e.clientY - bouding.top - LABEL_INIT_HEIGHT - TRIANGLE_HEIGHT
            : e.clientY - bouding.top;

        this.menu.style.top = top + "px";
        this.menu.style.left = left + "px";
      });
    },
    showMenu() {
      this.isShowMenu = true;
    },
    hideMenu() {
      this.isShowMenu = false;
    },
    onMouseEnter(e) {
      e.target.style.backgroundColor = this.theme;
      e.target.style.color = "#fff";
    },
    onMouseLeave(e) {
      e.target.style.backgroundColor = "#fff";
      e.target.style.color = "#000";
    },
    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      const date1 = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      return `图片-${year}-${month}-${date1}`;
    }
  }
});

// CONCATENATED MODULE: ./packages/imgLabel/imgLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var imgLabel_imgLabelvue_type_script_lang_js_ = (imgLabelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/imgLabel/imgLabel.vue?vue&type=style&index=0&id=38cbc95a&lang=stylus&scoped=true&
var imgLabelvue_type_style_index_0_id_38cbc95a_lang_stylus_scoped_true_ = __webpack_require__("8cc6");

// CONCATENATED MODULE: ./packages/imgLabel/imgLabel.vue






/* normalize component */

var imgLabel_component = normalizeComponent(
  imgLabel_imgLabelvue_type_script_lang_js_,
  imgLabelvue_type_template_id_38cbc95a_scoped_true_render,
  imgLabelvue_type_template_id_38cbc95a_scoped_true_staticRenderFns,
  false,
  null,
  "38cbc95a",
  null
  
)

/* harmony default export */ var imgLabel = (imgLabel_component.exports);
// CONCATENATED MODULE: ./packages/imgLabel/index.js

imgLabel.install = Vue => Vue.component(imgLabel.name, imgLabel)
/* harmony default export */ var packages_imgLabel = (imgLabel);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57445aee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/magnifier/magnifier.vue?vue&type=template&id=d775f678&scoped=true&
var magnifiervue_type_template_id_d775f678_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"wrap",staticClass:"magnifier-wrap"},[_c('div',{ref:"small",staticClass:"small-wrap",on:{"mouseleave":_vm.onMouseleave,"mousemove":_vm.onMousemove,"mouseenter":_vm.onMouseenter}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],ref:"mask",staticClass:"mask-wrap"}),_c('img',{attrs:{"src":_vm.minImgUrl,"width":_vm.boxSize,"height":_vm.boxSize}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],ref:"maxBox",staticClass:"max-wrap"},[_c('img',{ref:"img",staticClass:"img",style:({width: _vm.maxImgWidth + 'px', height: _vm.maxImgHeight + 'px'}),attrs:{"src":_vm.maxImgUrl},on:{"load":_vm.setMaskSize}})])])])}
var magnifiervue_type_template_id_d775f678_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/magnifier/magnifier.vue?vue&type=template&id=d775f678&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/magnifier/magnifier.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var magnifiervue_type_script_lang_js_ = ({
  name: 'Magnifier',
  props: {
    boxSize: {
      type: Number,
      default: 500
    },
    minImgUrl: {
      type: String,
      default: ""
    },
    maxImgUrl: {
      type: String,
      default: ""
    },
    autoReverse: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "right"
    }
  },
  data() {
    return {
      isShow: false,
      maxImgWidth: "",
      maxImgHeight: ""
    };
  },
  methods: {
    setMaskSize(e) {
      this.isLoad = true;
      this.maxImgWidth = e.target.width;
      this.maxImgHeight = e.target.height;
      this.$refs["img"].width = e.target.width;
      this.$refs["img"].height = e.target.height;
      this.$nextTick(() => {
        this.initDom();
      });
    },
    initDom() {
      this.wrap = this.$refs["wrap"];
      this.maxBox = this.$refs["maxBox"];
      this.mask = this.$refs["mask"];
      this.maxImg = this.$refs["img"];
      this.small = this.$refs["small"];
      this.smallWidth = this.getDomAttr(this.small, "width");
      this.smallHeight = this.getDomAttr(this.small, "height");
      this.maxBox.style.width = this.boxSize + "px";
      this.maxBox.style.height = this.boxSize + "px";
    },
    getDomAttr(el, attr) {
      return parseInt(getComputedStyle(el)[attr].slice(0, -2));
    },
    onMouseenter() {
      this.isShow = true;
    },
    onMouseleave() {
      this.isShow = false;
    },
    onMousemove(e) {
      if (!this.wrap || !this.isLoad) return;

      const mask = this.$refs["mask"];
      const maxImgWidth = this.$refs["img"].width;
      const minBoxWidth = this.smallWidth;
      mask.style.width = minBoxWidth * (minBoxWidth / maxImgWidth) + "px";
      mask.style.height = minBoxWidth * (minBoxWidth / maxImgWidth) + "px";

      const leftPosition = this.wrap.getBoundingClientRect().left;
      const topPosition = this.wrap.getBoundingClientRect().top;
      const paddingLeft = this.getDomAttr(this.wrap, "padding-left");
      const padddingTop = this.getDomAttr(this.wrap, "padding-top");

      let left = e.clientX - leftPosition - this.mask.offsetWidth / 2;
      let top = e.clientY - topPosition - this.mask.offsetHeight / 2;

      const maxBoxRightPos =
        leftPosition +
        this.maxBox.clientLeft +
        this.small.clientLeft +
        this.wrap.clientLeft +
        paddingLeft +
        this.small.clientWidth;

      const maxBoxLeftPos =
        leftPosition +
        this.wrap.clientLeft +
        paddingLeft -
        this.small.clientLeft * 2 -
        this.small.clientWidth;

      let maxBoxPos = -1;

      if (this.autoReverse) {
        const isMaxBoxExceedWindow =
          maxBoxRightPos + this.getDomAttr(this.maxBox, "width") >
          window.innerWidth;
        maxBoxPos = isMaxBoxExceedWindow ? maxBoxLeftPos : maxBoxRightPos;
      } else {
        if (this.direction === "right") {
          maxBoxPos = maxBoxRightPos;
        } else if (this.direction === "left") {
          maxBoxPos = maxBoxLeftPos;
        }
      }
      this.maxBox.style.left = maxBoxPos + "px";

      this.maxBox.style.top =
        topPosition +
        this.wrap.clientTop -
        this.maxBox.clientTop +
        padddingTop +
        this.small.clientTop +
        "px";

      if (left < paddingLeft) {
        left = paddingLeft;
      } else if (
        left >
        this.small.offsetWidth - this.mask.offsetWidth + paddingLeft
      ) {
        left = this.small.offsetWidth - this.mask.offsetWidth + paddingLeft;
      }

      if (top < padddingTop) {
        top = padddingTop;
      } else if (
        top >
        this.small.offsetHeight - this.mask.offsetHeight + padddingTop
      ) {
        top = this.small.offsetHeight - this.mask.offsetHeight + padddingTop;
      }

      this.mask.style.left = left + "px";
      this.mask.style.top = top + "px";
      const pX =
        (left - paddingLeft) / (this.smallWidth - this.mask.offsetWidth);
      const pY =
        (top - padddingTop) / (this.smallHeight - this.mask.offsetHeight);
      this.maxImg.style.left =
        -pX * (this.maxImg.width - this.maxBox.offsetWidth) + "px";
      this.maxImg.style.top =
        -pY * (this.maxImg.height - this.maxBox.offsetHeight) + "px";
    }
  }
});

// CONCATENATED MODULE: ./packages/magnifier/magnifier.vue?vue&type=script&lang=js&
 /* harmony default export */ var magnifier_magnifiervue_type_script_lang_js_ = (magnifiervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/magnifier/magnifier.vue?vue&type=style&index=0&id=d775f678&lang=stylus&scoped=true&
var magnifiervue_type_style_index_0_id_d775f678_lang_stylus_scoped_true_ = __webpack_require__("8d6e");

// CONCATENATED MODULE: ./packages/magnifier/magnifier.vue






/* normalize component */

var magnifier_component = normalizeComponent(
  magnifier_magnifiervue_type_script_lang_js_,
  magnifiervue_type_template_id_d775f678_scoped_true_render,
  magnifiervue_type_template_id_d775f678_scoped_true_staticRenderFns,
  false,
  null,
  "d775f678",
  null
  
)

/* harmony default export */ var magnifier = (magnifier_component.exports);
// CONCATENATED MODULE: ./packages/magnifier/index.js

magnifier.install = Vue => Vue.component(magnifier.name, magnifier)
/* harmony default export */ var packages_magnifier = (magnifier);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"57445aee-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/slideCheck/slideCheck.vue?vue&type=template&id=48604140&scoped=true&
var slideCheckvue_type_template_id_48604140_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrap",style:({ width: _vm.width + 'px' }),on:{"mouseup":_vm.onMouseup,"mousemove":function($event){$event.stopPropagation();return _vm.onMousemove($event)},"mouseleave":_vm.onMouseup}},[_c('div',{staticClass:"tips-info"},[_c('span',{staticClass:"tips"},[_vm._v("完成拼图验证")]),(_vm.showNextImg)?_c('span',{staticClass:"next-img",on:{"click":_vm.onNextImg}},[_vm._v("换一张")]):_vm._e()]),_c('div',{staticClass:"slider-check-wrap",style:({ width: _vm.width + 'px' })},[_c('canvas',{ref:"bg",staticClass:"bg-canvas",attrs:{"width":_vm.width,"height":_vm.height}}),_c('canvas',{ref:"card",staticClass:"card-canvas",attrs:{"width":_vm.width,"height":_vm.height}}),_c('div',{staticClass:"slider-wrap"},[_c('div',{ref:"progress-bar",staticClass:"progress-bar"}),_c('div',{ref:"btn",staticClass:"btn",on:{"mousedown":function($event){$event.stopPropagation();return _vm.onMousedown($event)}}},[_vm._v(">")]),_c('div',{ref:"slider",staticClass:"slider"},[_vm._v(_vm._s(_vm.tips))])])])])}
var slideCheckvue_type_template_id_48604140_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/slideCheck/slideCheck.vue?vue&type=template&id=48604140&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/slideCheck/slideCheck.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const BTN_WIDTH = 50;

/* harmony default export */ var slideCheckvue_type_script_lang_js_ = ({
  name: "SlideCheck",
  props: {
    radius: {
      type: Number,
      default: 10
    },
    src: {
      type: [String, Array],
      default: ""
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    theme: {
      type: String,
      default: "#369"
    }
  },
  data() {
    return {
      range: 0,
      tips: "向右滑动完成拼图"
    };
  },
  computed: {
    showNextImg() {
      return Array.isArray(this.src) && this.src.length > 1;
    }
  },
  mounted() {
    if (Array.isArray(this.src)) {
      this.initCanvas(this.src[0]);
    } else {
      this.initCanvas(this.src);
    }
    this.initDomInfo();
  },
  methods: {
    onNextImg() {
      this.reset();
      if (Array.isArray(this.src)) {
        this.initCanvas(this.src[Math.floor(Math.random() * this.src.length)]);
      } else {
        this.initCanvas(this.src);
      }
    },
    initDomInfo() {
      this.pos = this.$refs["btn"].getBoundingClientRect();
      if (this.theme !== "#369") {
        this.$refs["slider"].style.boxShadow = `0 0 10px 0 ${this.theme}`;
        this.$refs["slider"].style.color = this.theme;
        this.$refs["btn"].style.background = this.theme;
        this.$refs["btn"].style.boxShadow = `0 0 10px 0 ${this.theme}`;
      }
    },
    onMousedown(e) {
      this.track = {
        top: e.clientY,
        bottom: e.clientY
      };
      this.track2 = {
        top: e.clientY,
        bottom: e.clientY
      };
      this.isEnterDown = true;
      this.clickPos = e.clientX;
      this.tips = "向右滑动完成拼图";
      this.$refs["btn"].style.transition = "";
      this.$refs["card"].style.transition = "";
      this.$refs["progress-bar"].style.transition = "";
      this.diff = e.clientX - this.pos.left;
    },
    calcTrack(y) {
      let moveToBottom = this.track.top;
      let moveToTop = this.track.bottom;
      if (y > this.track.top) {
        this.track.top = y;
        if (y > moveToTop) {
          moveToTop = y;
        }
      } else if (y < this.track.bottom) {
        this.track.bottom = y;
        if (y < moveToBottom) {
          moveToBottom = y;
        }
      }
    },
    onMousemove(e) {
      if (!this.isEnterDown) return;
      const slideWidth = this.$refs["slider"].clientWidth;
      if (
        e.clientX - this.pos.left - this.diff - 10 + BTN_WIDTH > slideWidth ||
        e.clientX - this.pos.left - this.diff - 10 < 0
      ) {
        return;
      }
      this.calcTrack(e.clientY);
      this.cardMovePos =
        ((this.width - this.radius * 5 + 2) /
          (this.$refs["slider"].clientWidth - BTN_WIDTH)) *
        (e.clientX - this.pos.left - this.diff - 11);
      this.$refs[
        "card"
      ].style.transform = `translate3d(${this.cardMovePos}px,0,0)`;
      this.$refs["btn"].style.transform = `translate3d(${e.clientX -
        this.pos.left -
        this.diff -
        10}px, 0, 0)`;
      this.$refs["progress-bar"].style.width = `${e.clientX -
        this.pos.left -
        this.diff -
        10}px`;
      this.$refs["progress-bar"].style.background = "#42c3fc";
    },
    onMouseup(e) {
      if (!this.isEnterDown) return;
      this.isEnterDown = false;

      if (this.clickPos === e.clientX) return;

      if (this.cardMovePos + 3 > this.x && this.cardMovePos - 3 < this.x) {
        this.tips = "验证通过";
        this.$refs["progress-bar"].style.background = "#2cd277";
        setTimeout(() => {
          this.$emit("success", {
            top: Math.abs(this.track.bottom - this.track2.bottom),
            bottom: Math.abs(this.track.top - this.track2.top)
          });
        }, 1000);
      } else {
        setTimeout(() => {
          this.$emit("fail");
        }, 1000);
        this.$refs["progress-bar"].style.background = "#ff5b57";
      }

      setTimeout(() => {
        this.reset();
        this.$refs["progress-bar"].style.transition = "0.3s all";
        this.$refs["progress-bar"].style.width = "0px";
        this.$refs["btn"].style.transition = "0.3s all";
        this.$refs["btn"].style.transform = `translate3d(0,0,0)`;
        this.$refs["card"].style.transition = "0.3s all";
        this.$refs["card"].style.transform = `translate3d(0,0,0)`;
        if (Array.isArray(this.src)) {
          this.initCanvas(
            this.src[Math.floor(Math.random() * this.src.length)]
          );
        } else {
          this.initCanvas(this.src);
        }
      }, 1000);
    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    initCanvas(src) {
      const bg = this.$refs["bg"];
      const card = this.$refs["card"];
      const bgCtx = bg.getContext("2d");
      const cardCtx = card.getContext("2d");
      const r = this.radius;
      const w = r * 4;
      const cardSize = r * 6;
      this.x = this.random(this.width / 2, this.width - cardSize);
      const y = this.random(2 * r, this.height - cardSize);
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        bgCtx.drawImage(img, 0, 0, this.width, this.height);
        cardCtx.drawImage(img, 0, 0, this.width, this.height);
        const _y = y - r * 2 + 3;
        const ImageData = cardCtx.getImageData(this.x, _y, cardSize, cardSize);
        card.width = cardSize;
        cardCtx.putImageData(ImageData, 0, _y);
      };
      const rect = {
        x: this.x,
        y,
        w,
        r
      };
      img.src = src;
      this.draw(bgCtx, "fill", rect);
      this.draw(cardCtx, "clip", rect);
    },
    reset() {
      const bgCtx = this.$refs["bg"].getContext("2d");
      const card = this.$refs["card"];
      const cardCtx = card.getContext("2d");
      bgCtx.clearRect(0, 0, this.width, this.height);
      cardCtx.clearRect(0, 0, this.width, this.height);
      card.width = this.width;
    },
    draw(ctx, operation, rect) {
      const PI = Math.PI;
      const { x, y, w, r } = rect;
      ctx.beginPath();
      ctx.lineTo(x, y);
      ctx.arc(x + w / 2, y, r, PI, 0);
      ctx.lineTo(x + w, y);
      ctx.arc(x + w, y + w / 2, r, 1.5 * PI, 0.5 * PI);
      ctx.lineTo(x + w, y + w);
      ctx.lineTo(x, y + w);
      ctx.arc(x, y + w / 2, r, 0.5 * PI, 1.5 * PI, true);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.stroke();
      ctx[operation]();
      ctx.globalCompositeOperation = "destination-over";
    }
  }
});

// CONCATENATED MODULE: ./packages/slideCheck/slideCheck.vue?vue&type=script&lang=js&
 /* harmony default export */ var slideCheck_slideCheckvue_type_script_lang_js_ = (slideCheckvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/slideCheck/slideCheck.vue?vue&type=style&index=0&id=48604140&lang=stylus&scoped=true&
var slideCheckvue_type_style_index_0_id_48604140_lang_stylus_scoped_true_ = __webpack_require__("d10e");

// CONCATENATED MODULE: ./packages/slideCheck/slideCheck.vue






/* normalize component */

var slideCheck_component = normalizeComponent(
  slideCheck_slideCheckvue_type_script_lang_js_,
  slideCheckvue_type_template_id_48604140_scoped_true_render,
  slideCheckvue_type_template_id_48604140_scoped_true_staticRenderFns,
  false,
  null,
  "48604140",
  null
  
)

/* harmony default export */ var slideCheck = (slideCheck_component.exports);
// CONCATENATED MODULE: ./packages/slideCheck/index.js

slideCheck.install = Vue => Vue.component(slideCheck.name, slideCheck)
/* harmony default export */ var packages_slideCheck = (slideCheck);
// CONCATENATED MODULE: ./packages/watermark/index.js
function inserted(el, binding) {
  const {
    src,
    text,
    opacity = 0.3,
    rotate = 20,
    fontSize = 20,
    type = "repeat"
  } = binding.value;
  el.src = src;
  el.addEventListener("load", e => {
    const canvas1 = document.createElement("canvas");
    const ctx1 = canvas1.getContext("2d");
    const canvas2 = document.createElement("canvas");
    const ctx2 = canvas2.getContext("2d");
    const width = e.target.width;
    const height = e.target.height;

    canvas1.width = width;
    canvas1.height = height;
    canvas2.width = width;
    canvas2.height = height;

    ctx2.font = `${fontSize}px Arial`;
    ctx2.fillStyle = `rgba(0,0,0,${opacity})`;
    ctx2.textBaseLine = "middle";
    const textWidth = ctx2.measureText(text).width + 50;
    if (type === "repeat") {
      ctx2.rotate((-rotate * Math.PI) / 180);
      const xN = Math.ceil(width / textWidth) + 15;
      const yN = Math.ceil(height / textWidth) + 15;
      for (let i = 0; i < xN; i++) {
        for (let j = 0; j < yN; j++) {
          ctx2.fillText(
            text,
            i * textWidth - Math.min(rotate, 90) - textWidth * 3,
            j * (textWidth / 2) - Math.min(rotate, 90) - textWidth * 3
          );
        }
      }
    } else if (type === "left-top") {
      ctx2.fillText(text, 30, 30 + fontSize);
    } else if (type === "right-top") {
      ctx2.fillText(text, width - 30 - textWidth, 30 + fontSize);
    } else if (type === "right-bottom") {
      ctx2.fillText(text, width - 30 - textWidth, height - 30);
    } else if (type === "left-bottom") {
      ctx2.fillText(text, 30, height - 30);
    }

    ctx1.clearRect(0, 0, width, height);
    ctx1.drawImage(el, 0, 0, width, height);
    ctx1.drawImage(canvas2, 0, 0, width, height);
    el.parentNode.appendChild(canvas1);

    setTimeout(() => {
      el.parentNode.removeChild(el);
    }, 0);
  });
}
// EXTERNAL MODULE: ./packages/reset.css
var packages_reset = __webpack_require__("9788");

// CONCATENATED MODULE: ./packages/index.js








const components = [
  packages_checkIn,
  packages_countdown,
  packages_imgLabel,
  packages_magnifier,
  packages_slideCheck
]

const install = Vue => {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component))
  Vue.directive('watermark', inserted)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  install,
  CheckIn: packages_checkIn,
  Countdown: packages_countdown,
  ImgLabel: packages_imgLabel,
  Magnifier: packages_magnifier,
  SlideCheck: packages_slideCheck,
  watermark: inserted
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=vue-gn-components.common.js.map