(() => {
  var e = {
      264: (e) => {
        !(function (e, t, n, r, a) {
          if ('customElements' in n) a();
          else {
            if (n.AWAITING_WEB_COMPONENTS_POLYFILL) return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(a);
            var o = (n.AWAITING_WEB_COMPONENTS_POLYFILL = c());
            o.then(a);
            var i =
                n.WEB_COMPONENTS_POLYFILL ||
                '//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js',
              s = n.ES6_CORE_POLYFILL || '//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js';
            'Promise' in n
              ? l(i).then(function () {
                  (o.isDone = !0), o.exec();
                })
              : l(s).then(function () {
                  l(i).then(function () {
                    (o.isDone = !0), o.exec();
                  });
                });
          }
          function c() {
            var e = [];
            return (
              (e.isDone = !1),
              (e.exec = function () {
                e.splice(0).forEach(function (e) {
                  e();
                });
              }),
              (e.then = function (t) {
                return e.isDone ? t() : e.push(t), e;
              }),
              e
            );
          }
          function l(e) {
            var t = c(),
              n = r.createElement('script');
            return (
              (n.type = 'text/javascript'),
              n.readyState
                ? (n.onreadystatechange = function () {
                    ('loaded' != n.readyState && 'complete' != n.readyState) ||
                      ((n.onreadystatechange = null), (t.isDone = !0), t.exec());
                  })
                : (n.onload = function () {
                    (t.isDone = !0), t.exec();
                  }),
              (n.src = e),
              r.getElementsByTagName('head')[0].appendChild(n),
              (n.then = t.then),
              n
            );
          }
        })(0, 0, window, document, function () {
          var t;
          window,
            (t = function () {
              return (function (e) {
                var t = {};
                function n(r) {
                  if (t[r]) return t[r].exports;
                  var a = (t[r] = { i: r, l: !1, exports: {} });
                  return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
                }
                return (
                  (n.m = e),
                  (n.c = t),
                  (n.d = function (e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                  }),
                  (n.r = function (e) {
                    'undefined' != typeof Symbol &&
                      Symbol.toStringTag &&
                      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                      Object.defineProperty(e, '__esModule', { value: !0 });
                  }),
                  (n.t = function (e, t) {
                    if ((1 & t && (e = n(e)), 8 & t)) return e;
                    if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (
                      (n.r(r),
                      Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                      2 & t && 'string' != typeof e)
                    )
                      for (var a in e)
                        n.d(
                          r,
                          a,
                          function (t) {
                            return e[t];
                          }.bind(null, a)
                        );
                    return r;
                  }),
                  (n.n = function (e) {
                    var t =
                      e && e.__esModule
                        ? function () {
                            return e.default;
                          }
                        : function () {
                            return e;
                          };
                    return n.d(t, 'a', t), t;
                  }),
                  (n.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                  }),
                  (n.p = ''),
                  n((n.s = 5))
                );
              })([
                function (e, t) {
                  e.exports = function (e) {
                    var t = [];
                    return (
                      (t.toString = function () {
                        return this.map(function (t) {
                          var n = (function (e, t) {
                            var n,
                              r = e[1] || '',
                              a = e[3];
                            if (!a) return r;
                            if (t && 'function' == typeof btoa) {
                              var o =
                                  ((n = a),
                                  '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                    btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                                    ' */'),
                                i = a.sources.map(function (e) {
                                  return '/*# sourceURL=' + a.sourceRoot + e + ' */';
                                });
                              return [r].concat(i).concat([o]).join('\n');
                            }
                            return [r].join('\n');
                          })(t, e);
                          return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
                        }).join('');
                      }),
                      (t.i = function (e, n) {
                        'string' == typeof e && (e = [[null, e, '']]);
                        for (var r = {}, a = 0; a < this.length; a++) {
                          var o = this[a][0];
                          'number' == typeof o && (r[o] = !0);
                        }
                        for (a = 0; a < e.length; a++) {
                          var i = e[a];
                          ('number' == typeof i[0] && r[i[0]]) ||
                            (n && !i[2] ? (i[2] = n) : n && (i[2] = '(' + i[2] + ') and (' + n + ')'), t.push(i));
                        }
                      }),
                      t
                    );
                  };
                },
                function (e, t, n) {
                  var r = n(3);
                  e.exports = 'string' == typeof r ? r : r.toString();
                },
                function (e, t, n) {
                  var r = n(4);
                  e.exports = 'string' == typeof r ? r : r.toString();
                },
                function (e, t, n) {
                  (e.exports = n(0)(!1)).push([
                    e.i,
                    '@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}',
                    '',
                  ]);
                },
                function (e, t, n) {
                  (e.exports = n(0)(!1)).push([
                    e.i,
                    '.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',
                    '',
                  ]);
                },
                function (e, t, n) {
                  'use strict';
                  n.r(t),
                    n.d(t, 'BoxIconElement', function () {
                      return b;
                    });
                  var r,
                    a,
                    o,
                    i,
                    s = n(1),
                    c = n.n(s),
                    l = n(2),
                    u = n.n(l),
                    d =
                      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                            return typeof e;
                          }
                        : function (e) {
                            return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                          },
                    m = (function () {
                      function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                        }
                      }
                      return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                      };
                    })(),
                    f =
                      ((a =
                        (r = Object).getPrototypeOf ||
                        function (e) {
                          return e.__proto__;
                        }),
                      (o =
                        r.setPrototypeOf ||
                        function (e, t) {
                          return (e.__proto__ = t), e;
                        }),
                      (i =
                        'object' === ('undefined' == typeof Reflect ? 'undefined' : d(Reflect))
                          ? Reflect.construct
                          : function (e, t, n) {
                              var r,
                                a = [null];
                              return a.push.apply(a, t), (r = e.bind.apply(e, a)), o(new r(), n.prototype);
                            }),
                      function (e) {
                        var t = a(e);
                        return o(
                          e,
                          o(function () {
                            return i(t, arguments, a(this).constructor);
                          }, t)
                        );
                      }),
                    h = window,
                    g = {},
                    y = document.createElement('template'),
                    p = function () {
                      return !!h.ShadyCSS;
                    };
                  y.innerHTML =
                    '\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n' +
                    c.a +
                    '\n' +
                    u.a +
                    '\n</style>\n<div id="icon"></div>';
                  var b = f(
                    (function (e) {
                      function t() {
                        !(function (e, t) {
                          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                        })(this, t);
                        var e = (function (e, t) {
                          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return (
                          (e.$ui = e.attachShadow({ mode: 'open' })),
                          e.$ui.appendChild(e.ownerDocument.importNode(y.content, !0)),
                          p() && h.ShadyCSS.styleElement(e),
                          (e._state = { $iconHolder: e.$ui.getElementById('icon'), type: e.getAttribute('type') }),
                          e
                        );
                      }
                      return (
                        (function (e, t) {
                          if ('function' != typeof t && null !== t)
                            throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
                          (e.prototype = Object.create(t && t.prototype, {
                            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                          })),
                            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        })(t, HTMLElement),
                        m(t, null, [
                          {
                            key: 'getIconSvg',
                            value: function (e, t) {
                              var n = this.cdnUrl + '/regular/bx-' + e + '.svg';
                              return (
                                'solid' === t
                                  ? (n = this.cdnUrl + '/solid/bxs-' + e + '.svg')
                                  : 'logo' === t && (n = this.cdnUrl + '/logos/bxl-' + e + '.svg'),
                                (n && g[n]) ||
                                  (g[n] = new Promise(function (e, t) {
                                    var r = new XMLHttpRequest();
                                    r.addEventListener('load', function () {
                                      this.status < 200 || this.status >= 300
                                        ? t(new Error(this.status + ' ' + this.responseText))
                                        : e(this.responseText);
                                    }),
                                      (r.onerror = t),
                                      (r.onabort = t),
                                      r.open('GET', n),
                                      r.send();
                                  })),
                                g[n]
                              );
                            },
                          },
                          {
                            key: 'define',
                            value: function (e) {
                              (e = e || this.tagName),
                                p() && h.ShadyCSS.prepareTemplate(y, e),
                                customElements.define(e, this);
                            },
                          },
                          {
                            key: 'cdnUrl',
                            get: function () {
                              return '//unpkg.com/boxicons@2.1.4/svg';
                            },
                          },
                          {
                            key: 'tagName',
                            get: function () {
                              return 'box-icon';
                            },
                          },
                          {
                            key: 'observedAttributes',
                            get: function () {
                              return ['type', 'name', 'color', 'size', 'rotate', 'flip', 'animation', 'border', 'pull'];
                            },
                          },
                        ]),
                        m(t, [
                          {
                            key: 'attributeChangedCallback',
                            value: function (e, t, n) {
                              var r = this._state.$iconHolder;
                              switch (e) {
                                case 'type':
                                  !(function (e, t, n) {
                                    var r = e._state;
                                    (r.$iconHolder.textContent = ''),
                                      r.type && (r.type = null),
                                      (r.type = !n || ('solid' !== n && 'logo' !== n) ? 'regular' : n),
                                      void 0 !== r.currentName &&
                                        e.constructor
                                          .getIconSvg(r.currentName, r.type)
                                          .then(function (e) {
                                            r.type === n && (r.$iconHolder.innerHTML = e);
                                          })
                                          .catch(function (e) {
                                            console.error('Failed to load icon: ' + r.currentName + '\n' + e);
                                          });
                                  })(this, 0, n);
                                  break;
                                case 'name':
                                  !(function (e, t, n) {
                                    var r = e._state;
                                    (r.currentName = n),
                                      (r.$iconHolder.textContent = ''),
                                      n &&
                                        void 0 !== r.type &&
                                        e.constructor
                                          .getIconSvg(n, r.type)
                                          .then(function (e) {
                                            r.currentName === n && (r.$iconHolder.innerHTML = e);
                                          })
                                          .catch(function (e) {
                                            console.error('Failed to load icon: ' + n + '\n' + e);
                                          });
                                  })(this, 0, n);
                                  break;
                                case 'color':
                                  r.style.fill = n || '';
                                  break;
                                case 'size':
                                  !(function (e, t, n) {
                                    var r = e._state;
                                    r.size &&
                                      ((r.$iconHolder.style.width = r.$iconHolder.style.height = ''),
                                      (r.size = r.sizeType = null)),
                                      n &&
                                        !/^(xs|sm|md|lg)$/.test(r.size) &&
                                        ((r.size = n.trim()),
                                        (r.$iconHolder.style.width = r.$iconHolder.style.height = r.size));
                                  })(this, 0, n);
                                  break;
                                case 'rotate':
                                  t && r.classList.remove('bx-rotate-' + t), n && r.classList.add('bx-rotate-' + n);
                                  break;
                                case 'flip':
                                  t && r.classList.remove('bx-flip-' + t), n && r.classList.add('bx-flip-' + n);
                                  break;
                                case 'animation':
                                  t && r.classList.remove('bx-' + t), n && r.classList.add('bx-' + n);
                              }
                            },
                          },
                          {
                            key: 'connectedCallback',
                            value: function () {
                              p() && h.ShadyCSS.styleElement(this);
                            },
                          },
                        ]),
                        t
                      );
                    })()
                  );
                  (t.default = b), b.define();
                },
              ]);
            }),
            (e.exports = t());
        });
      },
      365: (e) => {
        e.exports = (function (e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var a = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.i = function (e) {
              return e;
            }),
            (n.d = function (e, t, r) {
              n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, 'a', t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 3))
          );
        })([
          function (e, t, n) {
            'use strict';
            e.exports = function (e, t, n) {
              var r = Math.floor(6 * e),
                a = 6 * e - r,
                o = n * (1 - t),
                i = n * (1 - a * t),
                s = n * (1 - (1 - a) * t),
                c = 255,
                l = 255,
                u = 255;
              switch (r) {
                case 0:
                  (c = n), (l = s), (u = o);
                  break;
                case 1:
                  (c = i), (l = n), (u = o);
                  break;
                case 2:
                  (c = o), (l = n), (u = s);
                  break;
                case 3:
                  (c = o), (l = i), (u = n);
                  break;
                case 4:
                  (c = s), (l = o), (u = n);
                  break;
                case 5:
                  (c = n), (l = o), (u = i);
              }
              return [Math.floor(255 * c), Math.floor(255 * l), Math.floor(255 * u)];
            };
          },
          function (e, t, n) {
            'use strict';
            var r = n(2);
            e.exports = function (e) {
              return (
                '#' +
                e
                  .map(function (e) {
                    return r(e.toString(16));
                  })
                  .join('')
              );
            };
          },
          function (e, t, n) {
            'use strict';
            e.exports = function (e) {
              return e.length > 2 ? e : new Array(2 - e.length + 1).join('0') + e;
            };
          },
          function (e, t, n) {
            'use strict';
            var r = n(0),
              a = n(1),
              o = void 0;
            function i() {
              o = Math.random();
            }
            function s(e, t) {
              var n = (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.hue,
                  n = e.saturation,
                  a = e.value;
                return (
                  void 0 === t && ((o += 0.618033988749895), (t = o %= 1)),
                  'number' != typeof n && (n = 0.5),
                  'number' != typeof a && (a = 0.95),
                  r(t, n, a)
                );
              })(e, t);
              return a(n);
            }
            i(), (s.reSeed = i), (e.exports = s);
          },
        ]);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (() => {
    'use strict';
    function e(e, t) {
      const n = document.querySelector(`form.${t} > button[type=submit]`),
        r = /^[a-z0-9]+( [a-z0-9]+)*$/i;
      '' == e.value ? (n.disabled = !0) : '' == e.value || r.test(e.value) ? (n.disabled = !1) : (n.disabled = !0),
        e.addEventListener('keyup', () => {
          r.test(e.value) ? (n.disabled = !1) : (n.disabled = !0);
        });
    }
    function t(e) {
      const t = Object.prototype.toString.call(e);
      return e instanceof Date || ('object' == typeof e && '[object Date]' === t)
        ? new e.constructor(+e)
        : 'number' == typeof e || '[object Number]' === t || 'string' == typeof e || '[object String]' === t
          ? new Date(e)
          : new Date(NaN);
    }
    function r(e) {
      const n = t(e);
      return n.setHours(0, 0, 0, 0), n;
    }
    function a(e, t) {
      return +r(e) == +r(t);
    }
    function o(e, t) {
      return e instanceof Date ? new e.constructor(t) : new Date(t);
    }
    function i(e) {
      return a(
        e,
        (function (e, n) {
          const r = t(e);
          return isNaN(n) ? o(e, NaN) : n ? (r.setDate(r.getDate() + n), r) : r;
        })(Date.now(), 1)
      );
    }
    function s(e) {
      return +t(e) > Date.now();
    }
    function c(e, t) {
      localStorage.setItem(t, JSON.stringify(e));
    }
    function l(e, t) {
      const n = localStorage.getItem('allObjs') ? JSON.parse(localStorage.getItem('allObjs')) : {};
      Object.keys(n).forEach((r) => {
        if (e.taskId === n[r].taskId) {
          const a = n[r];
          console.log(`Old ${t}: ${a[t]} vs New ${t}: ${e[t]}`), (a[t] = e[t]);
        }
      }),
        c(n, 'allObjs');
    }
    function u() {
      const e = Array.from(document.querySelector('ul.lists').children),
        t = m().countsForEachList;
      e.forEach((e) => {
        const n = Array.from(e.children);
        n.forEach((r) => {
          if (Object.keys(t).includes(r.textContent)) {
            if (!n.includes(e.querySelector('div.counter'))) {
              const t = document.createElement('div');
              (t.className = 'counter'), e.insertAdjacentElement('beforeend', t);
            }
            e.querySelector('div.counter').textContent = t[r.textContent];
          } else
            'A' === r.tagName && n.includes(e.querySelector('div.counter')) && e.querySelector('div.counter').remove();
        });
      });
    }
    function d() {
      const e = Array.from(document.querySelector('ul.tags').children),
        t = m().countsForEachTag;
      e.forEach((e) => {
        const n = Array.from(e.children);
        n.forEach((r) => {
          const a = r.textContent.replace('#', '');
          if (Object.keys(t).includes(a)) {
            if (!n.includes(e.querySelector('div.counter'))) {
              const t = document.createElement('div');
              (t.className = 'counter'), e.insertAdjacentElement('beforeend', t);
            }
            e.querySelector('div.counter').textContent = t[a];
          } else
            'A' === r.tagName && n.includes(e.querySelector('div.counter')) && e.querySelector('div.counter').remove();
        });
      });
    }
    function m() {
      const e = localStorage.getItem('allObjs') ? JSON.parse(localStorage.getItem('allObjs')) : null,
        t = {},
        n = {};
      return (
        Object.keys(e).forEach((r) => {
          const a = e[r];
          (t[a.list] = t[a.list] ? t[a.list] + 1 : 1),
            a.tags.forEach((e) => {
              n[e] = n[e] ? n[e] + 1 : 1;
            });
        }),
        c(n, 'tagCounter'),
        c(t, 'listCounter'),
        { countsForEachList: t, countsForEachTag: n }
      );
    }
    function f(e) {
      const t = JSON.parse(localStorage.getItem('allObjs')),
        n = e.querySelector('p').textContent;
      e.remove(),
        Object.keys(t).forEach((e, r) => {
          if (n === e) {
            const n = Array.from(document.getElementsByClassName('toDoDiv')).reverse(),
              a = (function (e, t, n) {
                const r = () => {
                  if (0 !== t.length) return t[0].id.split('-');
                };
                if (null != r()) {
                  const n = r();
                  return (
                    t.forEach((e, t) => {
                      e.id = `${n[0]}-${++t}`;
                      const r = e.querySelector('input').id.split('-');
                      e.querySelector('input').id = `${r[0]}-${t}`;
                    }),
                    (e = Object.keys(e).map((t, r) => ((e[t].taskId = `${n[0]}-${++r}`), { [e[t].title]: e[t] }))),
                    Object.assign({}, ...e)
                  );
                }
                return Object.keys(e)
                  .filter((e) => e !== n)
                  .reduce((t, n) => ((t[n] = e[n]), t), {});
              })(g(t, r), n, e);
            c(a, 'allObjs'), u(), d();
          }
        });
    }
    function h() {
      const e = document.createElement('button');
      return (
        (e.className = 'deleteTask'),
        (e.type = 'button'),
        (e.innerHTML = "<i class='bx bxs-x-circle bx-rotate-90'></i>"),
        e
      );
    }
    function g(e, t, n = 1) {
      let r = {};
      return (
        Object.entries(e).forEach(([e, a], o) => {
          (o >= t && o - t < n) || (r[e] = a);
        }),
        r
      );
    }
    function y(e, t) {
      const n = JSON.parse(localStorage.getItem('allObjs'));
      e.remove(),
        Object.keys(n).forEach((n) => {
          if (n === t.taskId) {
            const n = t.checklist;
            Object.keys(n).forEach((r, a) => {
              if (r === e.querySelector('label').id) {
                const e = Array.from(document.getElementById('checkList').getElementsByClassName('checklistItem')).map(
                    (e) => e.parentElement
                  ),
                  r = (function (e, t) {
                    t.forEach((e, t) => {
                      (e.querySelector('label').id = 'checklistInput-' + ++t),
                        (e.querySelector('label').htmlFor = e.querySelector('input').id);
                    }),
                      (e = Object.keys(e).map(
                        (t, n) => ((e[t].labelElemId = 'checklistInput-' + ++n), { [e[t].labelElemId]: e[t] })
                      ));
                    return Object.assign({}, ...e);
                  })(g(n, a), e);
                (t.checklist = r), l(t, 'checklist');
              }
            });
          }
        });
    }
    function p(e) {
      ++e;
      const t = document.createElement('div'),
        n = document.createElement('input');
      (n.type = 'checkbox'), (n.className = 'toDoObj');
      const r = document.createElement('input');
      return (
        (r.type = 'text'),
        (r.className = 'taskInputs checklistItem'),
        (t.id = `checklistDiv-${e}`),
        (r.id = `checklistInput-${e}`),
        (n.id = `checkbox-${e}`),
        t.append(n),
        t.append(r),
        t
      );
    }
    function b(e) {
      if ('LABEL' === e.tagName) {
        const t = document.createElement('input');
        return (t.value = e.textContent), (t.type = 'text'), (t.id = e.id), (t.className = e.className), t;
      }
      if ('INPUT' === e.tagName) {
        const t = document.createElement('label');
        return (
          (t.id = e.id),
          (t.className = e.className),
          (t.textContent = e.value),
          (t.htmlFor = e.parentElement.querySelector('input[type="checkbox"]').id),
          t
        );
      }
    }
    n(264);
    const v = {
      lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
      xSeconds: { one: '1 second', other: '{{count}} seconds' },
      halfAMinute: 'half a minute',
      lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
      xMinutes: { one: '1 minute', other: '{{count}} minutes' },
      aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
      xHours: { one: '1 hour', other: '{{count}} hours' },
      xDays: { one: '1 day', other: '{{count}} days' },
      aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
      xWeeks: { one: '1 week', other: '{{count}} weeks' },
      aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
      xMonths: { one: '1 month', other: '{{count}} months' },
      aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
      xYears: { one: '1 year', other: '{{count}} years' },
      overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
      almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
    };
    function w(e) {
      return (t = {}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth];
      };
    }
    const k = {
        date: w({
          formats: { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
          defaultWidth: 'full',
        }),
        time: w({
          formats: { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
          defaultWidth: 'full',
        }),
        dateTime: w({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}',
          },
          defaultWidth: 'full',
        }),
      },
      x = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P',
      };
    function E(e) {
      return (t, n) => {
        let r;
        if ('formatting' === (n?.context ? String(n.context) : 'standalone') && e.formattingValues) {
          const t = e.defaultFormattingWidth || e.defaultWidth,
            a = n?.width ? String(n.width) : t;
          r = e.formattingValues[a] || e.formattingValues[t];
        } else {
          const t = e.defaultWidth,
            a = n?.width ? String(n.width) : e.defaultWidth;
          r = e.values[a] || e.values[t];
        }
        return r[e.argumentCallback ? e.argumentCallback(t) : t];
      };
    }
    function S(e) {
      return (t, n = {}) => {
        const r = n.width,
          a = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
          o = t.match(a);
        if (!o) return null;
        const i = o[0],
          s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
          c = Array.isArray(s)
            ? (function (e, t) {
                for (let t = 0; t < e.length; t++) if (e[t].test(i)) return t;
              })(s)
            : (function (e, t) {
                for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t) && e[t].test(i)) return t;
              })(s);
        let l;
        return (
          (l = e.valueCallback ? e.valueCallback(c) : c),
          (l = n.valueCallback ? n.valueCallback(l) : l),
          { value: l, rest: t.slice(i.length) }
        );
      };
    }
    var C;
    const N = {
      code: 'en-US',
      formatDistance: (e, t, n) => {
        let r;
        const a = v[e];
        return (
          (r = 'string' == typeof a ? a : 1 === t ? a.one : a.other.replace('{{count}}', t.toString())),
          n?.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
        );
      },
      formatLong: k,
      formatRelative: (e, t, n, r) => x[e],
      localize: {
        ordinalNumber: (e, t) => {
          const n = Number(e),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + 'st';
              case 2:
                return n + 'nd';
              case 3:
                return n + 'rd';
            }
          return n + 'th';
        },
        era: E({
          values: { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
          defaultWidth: 'wide',
        }),
        quarter: E({
          values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
            wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
          },
          defaultWidth: 'wide',
          argumentCallback: (e) => e - 1,
        }),
        month: E({
          values: {
            narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            wide: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          },
          defaultWidth: 'wide',
        }),
        day: E({
          values: {
            narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          },
          defaultWidth: 'wide',
        }),
        dayPeriod: E({
          values: {
            narrow: {
              am: 'a',
              pm: 'p',
              midnight: 'mi',
              noon: 'n',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
            abbreviated: {
              am: 'AM',
              pm: 'PM',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
            wide: {
              am: 'a.m.',
              pm: 'p.m.',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'morning',
              afternoon: 'afternoon',
              evening: 'evening',
              night: 'night',
            },
          },
          defaultWidth: 'wide',
          formattingValues: {
            narrow: {
              am: 'a',
              pm: 'p',
              midnight: 'mi',
              noon: 'n',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
            abbreviated: {
              am: 'AM',
              pm: 'PM',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
            wide: {
              am: 'a.m.',
              pm: 'p.m.',
              midnight: 'midnight',
              noon: 'noon',
              morning: 'in the morning',
              afternoon: 'in the afternoon',
              evening: 'in the evening',
              night: 'at night',
            },
          },
          defaultFormattingWidth: 'wide',
        }),
      },
      match: {
        ordinalNumber:
          ((C = { matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: (e) => parseInt(e, 10) }),
          (e, t = {}) => {
            const n = e.match(C.matchPattern);
            if (!n) return null;
            const r = n[0],
              a = e.match(C.parsePattern);
            if (!a) return null;
            let o = C.valueCallback ? C.valueCallback(a[0]) : a[0];
            return (o = t.valueCallback ? t.valueCallback(o) : o), { value: o, rest: e.slice(r.length) };
          }),
        era: S({
          matchPatterns: {
            narrow: /^(b|a)/i,
            abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i,
          },
          defaultMatchWidth: 'wide',
          parsePatterns: { any: [/^b/i, /^(a|c)/i] },
          defaultParseWidth: 'any',
        }),
        quarter: S({
          matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
          defaultMatchWidth: 'wide',
          parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
          defaultParseWidth: 'any',
          valueCallback: (e) => e + 1,
        }),
        month: S({
          matchPatterns: {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
          },
          defaultMatchWidth: 'wide',
          parsePatterns: {
            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
            any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
          },
          defaultParseWidth: 'any',
        }),
        day: S({
          matchPatterns: {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
          },
          defaultMatchWidth: 'wide',
          parsePatterns: {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
          },
          defaultParseWidth: 'any',
        }),
        dayPeriod: S({
          matchPatterns: {
            narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
          },
          defaultMatchWidth: 'any',
          parsePatterns: {
            any: {
              am: /^a/i,
              pm: /^p/i,
              midnight: /^mi/i,
              noon: /^no/i,
              morning: /morning/i,
              afternoon: /afternoon/i,
              evening: /evening/i,
              night: /night/i,
            },
          },
          defaultParseWidth: 'any',
        }),
      },
      options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
    let T = {};
    function M() {
      return T;
    }
    Math.pow(10, 8);
    const O = 6048e5,
      D = 864e5;
    function I(e) {
      const n = t(e),
        r = new Date(
          Date.UTC(
            n.getFullYear(),
            n.getMonth(),
            n.getDate(),
            n.getHours(),
            n.getMinutes(),
            n.getSeconds(),
            n.getMilliseconds()
          )
        );
      return r.setUTCFullYear(n.getFullYear()), +e - +r;
    }
    function j(e) {
      const n = t(e);
      return (
        (function (e, t) {
          const n = r(e),
            a = r(t),
            o = +n - I(n),
            i = +a - I(a);
          return Math.round((o - i) / D);
        })(
          n,
          (function (e) {
            const n = t(e),
              r = o(e, 0);
            return r.setFullYear(n.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
          })(n)
        ) + 1
      );
    }
    function L(e, n) {
      const r = M(),
        a =
          n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
        o = t(e),
        i = o.getDay(),
        s = (i < a ? 7 : 0) + i - a;
      return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
    }
    function q(e) {
      return L(e, { weekStartsOn: 1 });
    }
    function A(e) {
      const n = t(e),
        r = n.getFullYear(),
        a = o(e, 0);
      a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
      const i = q(a),
        s = o(e, 0);
      s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
      const c = q(s);
      return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
    }
    function B(e) {
      const n = t(e),
        r =
          +q(n) -
          +(function (e) {
            const t = A(e),
              n = o(e, 0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), q(n);
          })(n);
      return Math.round(r / O) + 1;
    }
    function P(e, n) {
      const r = t(e),
        a = r.getFullYear(),
        i = M(),
        s =
          n?.firstWeekContainsDate ??
          n?.locale?.options?.firstWeekContainsDate ??
          i.firstWeekContainsDate ??
          i.locale?.options?.firstWeekContainsDate ??
          1,
        c = o(e, 0);
      c.setFullYear(a + 1, 0, s), c.setHours(0, 0, 0, 0);
      const l = L(c, n),
        u = o(e, 0);
      u.setFullYear(a, 0, s), u.setHours(0, 0, 0, 0);
      const d = L(u, n);
      return r.getTime() >= l.getTime() ? a + 1 : r.getTime() >= d.getTime() ? a : a - 1;
    }
    function $(e, n) {
      const r = t(e),
        a =
          +L(r, n) -
          +(function (e, t) {
            const n = M(),
              r =
                t?.firstWeekContainsDate ??
                t?.locale?.options?.firstWeekContainsDate ??
                n.firstWeekContainsDate ??
                n.locale?.options?.firstWeekContainsDate ??
                1,
              a = P(e, t),
              i = o(e, 0);
            return i.setFullYear(a, 0, r), i.setHours(0, 0, 0, 0), L(i, t);
          })(r, n);
      return Math.round(a / O) + 1;
    }
    function H(e, t) {
      return (e < 0 ? '-' : '') + Math.abs(e).toString().padStart(t, '0');
    }
    const W = {
        y(e, t) {
          const n = e.getFullYear(),
            r = n > 0 ? n : 1 - n;
          return H('yy' === t ? r % 100 : r, t.length);
        },
        M(e, t) {
          const n = e.getMonth();
          return 'M' === t ? String(n + 1) : H(n + 1, 2);
        },
        d: (e, t) => H(e.getDate(), t.length),
        a(e, t) {
          const n = e.getHours() / 12 >= 1 ? 'pm' : 'am';
          switch (t) {
            case 'a':
            case 'aa':
              return n.toUpperCase();
            case 'aaa':
              return n;
            case 'aaaaa':
              return n[0];
            default:
              return 'am' === n ? 'a.m.' : 'p.m.';
          }
        },
        h: (e, t) => H(e.getHours() % 12 || 12, t.length),
        H: (e, t) => H(e.getHours(), t.length),
        m: (e, t) => H(e.getMinutes(), t.length),
        s: (e, t) => H(e.getSeconds(), t.length),
        S(e, t) {
          const n = t.length,
            r = e.getMilliseconds();
          return H(Math.trunc(r * Math.pow(10, n - 3)), t.length);
        },
      },
      Y = {
        G: function (e, t, n) {
          const r = e.getFullYear() > 0 ? 1 : 0;
          switch (t) {
            case 'G':
            case 'GG':
            case 'GGG':
              return n.era(r, { width: 'abbreviated' });
            case 'GGGGG':
              return n.era(r, { width: 'narrow' });
            default:
              return n.era(r, { width: 'wide' });
          }
        },
        y: function (e, t, n) {
          if ('yo' === t) {
            const t = e.getFullYear(),
              r = t > 0 ? t : 1 - t;
            return n.ordinalNumber(r, { unit: 'year' });
          }
          return W.y(e, t);
        },
        Y: function (e, t, n, r) {
          const a = P(e, r),
            o = a > 0 ? a : 1 - a;
          return 'YY' === t ? H(o % 100, 2) : 'Yo' === t ? n.ordinalNumber(o, { unit: 'year' }) : H(o, t.length);
        },
        R: function (e, t) {
          return H(A(e), t.length);
        },
        u: function (e, t) {
          return H(e.getFullYear(), t.length);
        },
        Q: function (e, t, n) {
          const r = Math.ceil((e.getMonth() + 1) / 3);
          switch (t) {
            case 'Q':
              return String(r);
            case 'QQ':
              return H(r, 2);
            case 'Qo':
              return n.ordinalNumber(r, { unit: 'quarter' });
            case 'QQQ':
              return n.quarter(r, { width: 'abbreviated', context: 'formatting' });
            case 'QQQQQ':
              return n.quarter(r, { width: 'narrow', context: 'formatting' });
            default:
              return n.quarter(r, { width: 'wide', context: 'formatting' });
          }
        },
        q: function (e, t, n) {
          const r = Math.ceil((e.getMonth() + 1) / 3);
          switch (t) {
            case 'q':
              return String(r);
            case 'qq':
              return H(r, 2);
            case 'qo':
              return n.ordinalNumber(r, { unit: 'quarter' });
            case 'qqq':
              return n.quarter(r, { width: 'abbreviated', context: 'standalone' });
            case 'qqqqq':
              return n.quarter(r, { width: 'narrow', context: 'standalone' });
            default:
              return n.quarter(r, { width: 'wide', context: 'standalone' });
          }
        },
        M: function (e, t, n) {
          const r = e.getMonth();
          switch (t) {
            case 'M':
            case 'MM':
              return W.M(e, t);
            case 'Mo':
              return n.ordinalNumber(r + 1, { unit: 'month' });
            case 'MMM':
              return n.month(r, { width: 'abbreviated', context: 'formatting' });
            case 'MMMMM':
              return n.month(r, { width: 'narrow', context: 'formatting' });
            default:
              return n.month(r, { width: 'wide', context: 'formatting' });
          }
        },
        L: function (e, t, n) {
          const r = e.getMonth();
          switch (t) {
            case 'L':
              return String(r + 1);
            case 'LL':
              return H(r + 1, 2);
            case 'Lo':
              return n.ordinalNumber(r + 1, { unit: 'month' });
            case 'LLL':
              return n.month(r, { width: 'abbreviated', context: 'standalone' });
            case 'LLLLL':
              return n.month(r, { width: 'narrow', context: 'standalone' });
            default:
              return n.month(r, { width: 'wide', context: 'standalone' });
          }
        },
        w: function (e, t, n, r) {
          const a = $(e, r);
          return 'wo' === t ? n.ordinalNumber(a, { unit: 'week' }) : H(a, t.length);
        },
        I: function (e, t, n) {
          const r = B(e);
          return 'Io' === t ? n.ordinalNumber(r, { unit: 'week' }) : H(r, t.length);
        },
        d: function (e, t, n) {
          return 'do' === t ? n.ordinalNumber(e.getDate(), { unit: 'date' }) : W.d(e, t);
        },
        D: function (e, t, n) {
          const r = j(e);
          return 'Do' === t ? n.ordinalNumber(r, { unit: 'dayOfYear' }) : H(r, t.length);
        },
        E: function (e, t, n) {
          const r = e.getDay();
          switch (t) {
            case 'E':
            case 'EE':
            case 'EEE':
              return n.day(r, { width: 'abbreviated', context: 'formatting' });
            case 'EEEEE':
              return n.day(r, { width: 'narrow', context: 'formatting' });
            case 'EEEEEE':
              return n.day(r, { width: 'short', context: 'formatting' });
            default:
              return n.day(r, { width: 'wide', context: 'formatting' });
          }
        },
        e: function (e, t, n, r) {
          const a = e.getDay(),
            o = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (t) {
            case 'e':
              return String(o);
            case 'ee':
              return H(o, 2);
            case 'eo':
              return n.ordinalNumber(o, { unit: 'day' });
            case 'eee':
              return n.day(a, { width: 'abbreviated', context: 'formatting' });
            case 'eeeee':
              return n.day(a, { width: 'narrow', context: 'formatting' });
            case 'eeeeee':
              return n.day(a, { width: 'short', context: 'formatting' });
            default:
              return n.day(a, { width: 'wide', context: 'formatting' });
          }
        },
        c: function (e, t, n, r) {
          const a = e.getDay(),
            o = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (t) {
            case 'c':
              return String(o);
            case 'cc':
              return H(o, t.length);
            case 'co':
              return n.ordinalNumber(o, { unit: 'day' });
            case 'ccc':
              return n.day(a, { width: 'abbreviated', context: 'standalone' });
            case 'ccccc':
              return n.day(a, { width: 'narrow', context: 'standalone' });
            case 'cccccc':
              return n.day(a, { width: 'short', context: 'standalone' });
            default:
              return n.day(a, { width: 'wide', context: 'standalone' });
          }
        },
        i: function (e, t, n) {
          const r = e.getDay(),
            a = 0 === r ? 7 : r;
          switch (t) {
            case 'i':
              return String(a);
            case 'ii':
              return H(a, t.length);
            case 'io':
              return n.ordinalNumber(a, { unit: 'day' });
            case 'iii':
              return n.day(r, { width: 'abbreviated', context: 'formatting' });
            case 'iiiii':
              return n.day(r, { width: 'narrow', context: 'formatting' });
            case 'iiiiii':
              return n.day(r, { width: 'short', context: 'formatting' });
            default:
              return n.day(r, { width: 'wide', context: 'formatting' });
          }
        },
        a: function (e, t, n) {
          const r = e.getHours() / 12 >= 1 ? 'pm' : 'am';
          switch (t) {
            case 'a':
            case 'aa':
              return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' });
            case 'aaa':
              return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
            case 'aaaaa':
              return n.dayPeriod(r, { width: 'narrow', context: 'formatting' });
            default:
              return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
          }
        },
        b: function (e, t, n) {
          const r = e.getHours();
          let a;
          switch (((a = 12 === r ? 'noon' : 0 === r ? 'midnight' : r / 12 >= 1 ? 'pm' : 'am'), t)) {
            case 'b':
            case 'bb':
              return n.dayPeriod(a, { width: 'abbreviated', context: 'formatting' });
            case 'bbb':
              return n.dayPeriod(a, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
            case 'bbbbb':
              return n.dayPeriod(a, { width: 'narrow', context: 'formatting' });
            default:
              return n.dayPeriod(a, { width: 'wide', context: 'formatting' });
          }
        },
        B: function (e, t, n) {
          const r = e.getHours();
          let a;
          switch (((a = r >= 17 ? 'evening' : r >= 12 ? 'afternoon' : r >= 4 ? 'morning' : 'night'), t)) {
            case 'B':
            case 'BB':
            case 'BBB':
              return n.dayPeriod(a, { width: 'abbreviated', context: 'formatting' });
            case 'BBBBB':
              return n.dayPeriod(a, { width: 'narrow', context: 'formatting' });
            default:
              return n.dayPeriod(a, { width: 'wide', context: 'formatting' });
          }
        },
        h: function (e, t, n) {
          if ('ho' === t) {
            let t = e.getHours() % 12;
            return 0 === t && (t = 12), n.ordinalNumber(t, { unit: 'hour' });
          }
          return W.h(e, t);
        },
        H: function (e, t, n) {
          return 'Ho' === t ? n.ordinalNumber(e.getHours(), { unit: 'hour' }) : W.H(e, t);
        },
        K: function (e, t, n) {
          const r = e.getHours() % 12;
          return 'Ko' === t ? n.ordinalNumber(r, { unit: 'hour' }) : H(r, t.length);
        },
        k: function (e, t, n) {
          let r = e.getHours();
          return 0 === r && (r = 24), 'ko' === t ? n.ordinalNumber(r, { unit: 'hour' }) : H(r, t.length);
        },
        m: function (e, t, n) {
          return 'mo' === t ? n.ordinalNumber(e.getMinutes(), { unit: 'minute' }) : W.m(e, t);
        },
        s: function (e, t, n) {
          return 'so' === t ? n.ordinalNumber(e.getSeconds(), { unit: 'second' }) : W.s(e, t);
        },
        S: function (e, t) {
          return W.S(e, t);
        },
        X: function (e, t, n) {
          const r = e.getTimezoneOffset();
          if (0 === r) return 'Z';
          switch (t) {
            case 'X':
              return z(r);
            case 'XXXX':
            case 'XX':
              return F(r);
            default:
              return F(r, ':');
          }
        },
        x: function (e, t, n) {
          const r = e.getTimezoneOffset();
          switch (t) {
            case 'x':
              return z(r);
            case 'xxxx':
            case 'xx':
              return F(r);
            default:
              return F(r, ':');
          }
        },
        O: function (e, t, n) {
          const r = e.getTimezoneOffset();
          switch (t) {
            case 'O':
            case 'OO':
            case 'OOO':
              return 'GMT' + X(r, ':');
            default:
              return 'GMT' + F(r, ':');
          }
        },
        z: function (e, t, n) {
          const r = e.getTimezoneOffset();
          switch (t) {
            case 'z':
            case 'zz':
            case 'zzz':
              return 'GMT' + X(r, ':');
            default:
              return 'GMT' + F(r, ':');
          }
        },
        t: function (e, t, n) {
          return H(Math.trunc(e.getTime() / 1e3), t.length);
        },
        T: function (e, t, n) {
          return H(e.getTime(), t.length);
        },
      };
    function X(e, t = '') {
      const n = e > 0 ? '-' : '+',
        r = Math.abs(e),
        a = Math.trunc(r / 60),
        o = r % 60;
      return 0 === o ? n + String(a) : n + String(a) + t + H(o, 2);
    }
    function z(e, t) {
      return e % 60 == 0 ? (e > 0 ? '-' : '+') + H(Math.abs(e) / 60, 2) : F(e, t);
    }
    function F(e, t = '') {
      const n = e > 0 ? '-' : '+',
        r = Math.abs(e);
      return n + H(Math.trunc(r / 60), 2) + t + H(r % 60, 2);
    }
    const _ = (e, t) => {
        switch (e) {
          case 'P':
            return t.date({ width: 'short' });
          case 'PP':
            return t.date({ width: 'medium' });
          case 'PPP':
            return t.date({ width: 'long' });
          default:
            return t.date({ width: 'full' });
        }
      },
      R = (e, t) => {
        switch (e) {
          case 'p':
            return t.time({ width: 'short' });
          case 'pp':
            return t.time({ width: 'medium' });
          case 'ppp':
            return t.time({ width: 'long' });
          default:
            return t.time({ width: 'full' });
        }
      },
      G = {
        p: R,
        P: (e, t) => {
          const n = e.match(/(P+)(p+)?/) || [],
            r = n[1],
            a = n[2];
          if (!a) return _(e, t);
          let o;
          switch (r) {
            case 'P':
              o = t.dateTime({ width: 'short' });
              break;
            case 'PP':
              o = t.dateTime({ width: 'medium' });
              break;
            case 'PPP':
              o = t.dateTime({ width: 'long' });
              break;
            default:
              o = t.dateTime({ width: 'full' });
          }
          return o.replace('{{date}}', _(r, t)).replace('{{time}}', R(a, t));
        },
      },
      J = /^D+$/,
      Q = /^Y+$/,
      U = ['D', 'DD', 'YY', 'YYYY'];
    function V(e) {
      if (
        !((n = e),
        n instanceof Date ||
          ('object' == typeof n && '[object Date]' === Object.prototype.toString.call(n)) ||
          'number' == typeof e)
      )
        return !1;
      var n;
      const r = t(e);
      return !isNaN(Number(r));
    }
    const K = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      Z = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      ee = /^'([^]*?)'?$/,
      te = /''/g,
      ne = /[a-zA-Z]/;
    function re(e, n, r) {
      const a = M(),
        o = r?.locale ?? a.locale ?? N,
        i =
          r?.firstWeekContainsDate ??
          r?.locale?.options?.firstWeekContainsDate ??
          a.firstWeekContainsDate ??
          a.locale?.options?.firstWeekContainsDate ??
          1,
        s =
          r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0,
        c = t(e);
      if (!V(c)) throw new RangeError('Invalid time value');
      let l = n
        .match(Z)
        .map((e) => {
          const t = e[0];
          return 'p' === t || 'P' === t ? (0, G[t])(e, o.formatLong) : e;
        })
        .join('')
        .match(K)
        .map((e) => {
          if ("''" === e) return { isToken: !1, value: "'" };
          const t = e[0];
          if ("'" === t) return { isToken: !1, value: ae(e) };
          if (Y[t]) return { isToken: !0, value: e };
          if (t.match(ne))
            throw new RangeError('Format string contains an unescaped latin alphabet character `' + t + '`');
          return { isToken: !1, value: e };
        });
      o.localize.preprocessor && (l = o.localize.preprocessor(c, l));
      const u = { firstWeekContainsDate: i, weekStartsOn: s, locale: o };
      return l
        .map((t) => {
          if (!t.isToken) return t.value;
          const a = t.value;
          return (
            ((!r?.useAdditionalWeekYearTokens &&
              (function (e) {
                return Q.test(e);
              })(a)) ||
              (!r?.useAdditionalDayOfYearTokens &&
                (function (e) {
                  return J.test(e);
                })(a))) &&
              (function (e, t, n) {
                const r = (function (e, t, n) {
                  const r = 'Y' === e[0] ? 'years' : 'days of the month';
                  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                })(e, t, n);
                if ((console.warn(r), U.includes(e))) throw new RangeError(r);
              })(a, n, String(e)),
            (0, Y[a[0]])(c, a, o.localize, u)
          );
        })
        .join('');
    }
    function ae(e) {
      const t = e.match(ee);
      return t ? t[1].replace(te, "'") : e;
    }
    const oe = /[ ]{2,}/;
    class ie {
      constructor(e, t, n, r = []) {
        (this.title = e),
          (this.checklist = {}),
          (this.notes = ''),
          (this.rawReminderDate = ''),
          (this.tags = r),
          (this.list = n),
          (this.taskId = t),
          (this.completed = !1);
      }
      viewTask() {
        console.log(this),
          (function (e) {
            const t = document.getElementById('divTwoContainer');
            (t.dataset.task = e.taskId),
              (function (e, t) {
                const n = e.completed,
                  r = Array.from(t.classList),
                  a = Array.from(t.getElementsByTagName('input')),
                  o = Array.from(t.getElementsByTagName('button'));
                if (e.taskId === t.dataset.task)
                  if (!n && r.includes('disable')) {
                    const e = r.filter((e) => 'disable' !== e);
                    (t.className = e.join(' ')),
                      a.forEach((e) => {
                        e.disabled = !1;
                      }),
                      o.forEach((e) => {
                        e.disabled = !1;
                      });
                  } else
                    n &&
                      (r.includes('disable') ||
                        ((t.className += ' disable'),
                        a.forEach((e) => {
                          e.disabled = !0;
                        }),
                        o.forEach((e) => {
                          e.disabled = !0;
                        })),
                      (() => {
                        let t;
                        return (
                          Array.from(document.getElementsByClassName('toDoDiv'))
                            .reverse()
                            .forEach((n) => {
                              n.querySelector('p').textContent === e.title && (t = n);
                            }),
                          t
                        );
                      })()
                        .querySelector('button')
                        .addEventListener('click', () => {
                          t.remove();
                        }));
                !(function (e) {
                  Object.keys(e.checklist).forEach((t) => {
                    e.checklist[t].completed &&
                      setTimeout(() => {
                        const n = document.getElementById(t);
                        (n.className += ' complete'), (n.querySelector('input[type="checkbox"]').checked = !0);
                        const r = h();
                        Array.from(n.children).includes(n.querySelector('button')) ||
                          (n.append(r),
                          r.addEventListener('click', () => {
                            y(n, e);
                          }));
                      }, 0);
                  });
                })(e);
              })(e, t),
              (document.getElementById('detailHeader').textContent = e.title),
              (document.getElementById('notes').value = e.notes);
            const n = document.getElementById('checkList'),
              r = Array.from(n.children).filter((e) => 'DIV' === e.tagName);
            if (0 === Object.keys(e.checklist).length)
              console.log(`${e.title} has no checklist items`),
                0 !== r.length &&
                  r.forEach((e) => {
                    e.remove();
                  });
            else {
              let t = !1;
              if (0 !== r.length) {
                const r = Array.from(n.getElementsByClassName('checklistItem'));
                t = Object.keys(e.checklist).every((t, n) => e.checklist[t].value === r[n].textContent);
              }
              if (!0 === t)
                return void console.log('All checklist current items are identical with currentObj checklist items');
              0 !== r.length &&
                (console.log('Overwrite current divs'),
                r.forEach((e) => {
                  e.remove();
                })),
                Object.keys(e.checklist).forEach((t, r) => {
                  const a = p(r),
                    o = e.checklist[t],
                    i = a.querySelector("input[type='text']"),
                    s = b(i);
                  (s.textContent = o.value), i.replaceWith(s), n.append(a);
                });
            }
            const a = document.getElementById('remindMe');
            '' === e.rawReminderDate
              ? (a.innerHTML = "<i class='bx bxs-bell-ring' style='color:#fdfdfd'></i>Remind Me")
              : (a.textContent = e.formattedReminderDate),
              (document.getElementById('currentList').innerHTML = `<i class='bx bx-list-ul'></i>${e.list}`),
              Array.from(linksContainer.children).forEach((t) => {
                t.className.includes('current') && t.textContent !== e.list
                  ? (t.className = 'list')
                  : t.className.includes('current') || t.textContent !== e.list || (t.className += ' current');
              });
            const o = document.getElementById('selectedTagsDivContainer'),
              i = document.getElementById('tagsDiv'),
              s = document.getElementById('tags'),
              c = document.getElementById('additionalElems'),
              l = Array.from(document.getElementById('divTwoContainer').children);
            if (0 === e.tags.length)
              l.includes(o) &&
                (o.remove(),
                (s.innerHTML = "<i class='bx bx-hash' style='color:#fdfdfd'></i>Tags"),
                (s.className = 'additionalFeatBtns'),
                c.insertAdjacentElement('beforeend', i));
            else if ((console.log('currentObj tags not empty'), l.includes(o))) {
              console.log('has selectedTagDivContainer');
              const t = s.querySelector('i');
              (s.innerHTML = ''),
                e.tags.forEach((e) => {
                  const t = document.createElement('div');
                  (t.className = 'selectedTags'), (t.id = e.toLowerCase()), (t.textContent = e), s.append(t);
                }),
                s.insertAdjacentElement('beforeend', t);
            } else {
              console.log('no selectedTagsDivContainer');
              const t = document.createElement('div');
              (t.id = 'selectedTagsDivContainer'),
                (s.innerHTML = ''),
                e.tags.forEach((e) => {
                  const t = document.createElement('div');
                  (t.className = 'selectedTags'), (t.id = e.toLowerCase()), (t.textContent = e), s.append(t);
                }),
                (s.innerHTML += " <i class='bx bx-message-square-add selectedTags'></i>"),
                (s.className = 'selectedTagsDivContainer'),
                t.appendChild(i),
                c.insertAdjacentElement('afterend', t);
            }
            Array.from(document.getElementById('allTags').children).forEach((t) => {
              e.tags.includes(t.textContent)
                ? (console.log(`${e.title} includes ${t.textContent}`),
                  (t.innerHTML = `${t.textContent}<i class='bx bxs-check-circle'></i>`))
                : (t.innerHTML = `${t.textContent}`);
            });
          })(this);
      }
      changeTaskTitle(e) {
        const t = this;
        if ('DIV' === e.tagName) {
          const n = document.createElement('input');
          (n.type = 'text'),
            (n.className = 'taskInputs'),
            (n.id = e.id),
            (n.value = e.textContent),
            e.replaceWith(n),
            n.focus(),
            n.addEventListener(
              'focusout',
              function () {
                const e = document.createElement('div');
                (e.className = 'taskDetails'), (e.id = n.id), (e.textContent = n.value);
                const [r] = Array.from(document.getElementsByClassName('toDoDiv')).filter(
                  (e) => e.querySelector('p').textContent === t.title
                );
                (r.querySelector('p').textContent = e.textContent),
                  (t.title = e.textContent),
                  n.replaceWith(e),
                  l(t, 'title');
                const a = se(),
                  o = Object.keys(a).map((e) => (a[e].taskId === t.taskId ? { [n.value]: a[e] } : { [e]: a[e] }));
                c(Object.assign({}, ...o), 'allObjs');
              },
              { once: !0 }
            );
        }
      }
      addToChecklist() {
        const e = document.getElementsByClassName('checklistItem'),
          t = e[e.length - 1];
        0 === e.length || ('' !== t.value && !0 !== oe.test(t.value))
          ? (function (e, t, n) {
              const r = document.getElementById('checkList');
              let a = t.length;
              const o = p(a);
              r.append(o);
              const i = o.querySelector("input[type='text']");
              i.focus(),
                i.addEventListener(
                  'focusout',
                  () => {
                    const t = { value: i.value };
                    if ('' === i.value || !0 === n.test(i.value)) o.remove();
                    else {
                      const n = document.createElement('label');
                      (n.className = 'taskInputs checklistItem'),
                        (n.id = 'checklistInput-' + ++a),
                        (n.textContent = i.value);
                      const r = o.querySelector("input[type='checkbox']");
                      (n.htmlFor = r.id), i.replaceWith(n), (t.labelElemId = n.id), (e.checklist[n.id] = t);
                    }
                    l(e, 'checklist');
                  },
                  { once: !0 }
                );
            })(this, e, oe)
          : (console.log('Invalid input'), (t.value = ''), t.focus()),
          l(this, 'checklist'),
          console.log(this.checklist);
      }
      createNote() {
        const e = this,
          t = document.getElementById('notes');
        t.addEventListener(
          'focusout',
          () => {
            !0 === oe.test(t.value)
              ? (console.log('whitespaces'), (t.value = ''))
              : ((e.notes = t.value), l(e, 'notes'));
          },
          { once: !0 }
        );
      }
      reminder(e) {
        const t = this;
        console.log(t);
        const n = document.getElementById('reminder'),
          r = document.getElementById('setReminder'),
          a = document.getElementById('dateInput');
        (a.min = `${re(new Date(), 'yyyy')}-${re(new Date(), 'MM')}-${re(new Date(), 'dd')}T${re(new Date(), 'HH')}:${re(new Date(), 'mm')}`),
          n.showModal(),
          a.focus(),
          '' !== this.rawReminderDate ? (a.value = this.rawReminderDate) : (a.value = a.min),
          n.addEventListener('click', function e(t) {
            t.target === n && (n.close(), this.removeEventListener('click', e));
          }),
          r.addEventListener(
            'submit',
            function (r) {
              r.preventDefault();
              const o = re(a.value, 'MMM do, yyyy, hh:mma');
              (e.textContent = `${o}`),
                (t.rawReminderDate = a.value),
                (t.formattedReminderDate = o),
                l(t, 'rawReminderDate'),
                l(t, 'formattedReminderDate');
              const i = document.querySelector('.overview');
              1 === Array.from(i.classList).length && Array.from(i.classList).includes('overview') && le(t), n.close();
            },
            { once: !0 }
          ),
          r.addEventListener(
            'reset',
            function () {
              (e.textContent = 'Remind Me'),
                (t.rawReminderDate = ''),
                (t.formattedReminderDate = ''),
                l(t, 'rawReminderDate'),
                l(t, 'formattedReminderDate'),
                le(t),
                n.close();
            },
            { once: !0 }
          );
      }
      editList(e) {
        const t = this,
          n = Array.from(document.querySelectorAll('ul.lists > li > a.list')).map((e) => e.cloneNode(!0)),
          r = document.getElementById('linksContainer'),
          a = Array.from(r.children).map((e) => e.textContent);
        n.forEach((t) => {
          (t.className = 'list'),
            (t.innerHTML = t.textContent),
            a.includes(t.textContent) ||
              (r.append(t),
              this.list === t.textContent &&
                ((t.className += ' current'), (e.innerHTML = `<i class='bx bx-list-ul'></i>${this.list}`)));
        });
        const o = document.getElementById('list');
        o.showModal(),
          o.addEventListener('click', function n(a) {
            if (a.target === o) o.close(), this.removeEventListener('click', n);
            else if ('A' === a.target.tagName) {
              let n = [t.list],
                o = a.target;
              if (o.textContent === t.list) return void console.log(`Object currently in ${o.textContent}`);
              {
                (t.list = o.textContent), (e.innerHTML = `<i class='bx bx-list-ul'></i>${t.list}`), n.push(t.list);
                const a = [];
                Array.from(r.children).forEach((e) => {
                  n.forEach((t) => {
                    e.textContent === t && a.push(e);
                  });
                }),
                  a.forEach((e) => {
                    t.list === e.textContent ? (e.className += ' current') : (e.className = 'list');
                  }),
                  console.log(`Object moved to ${t.list}`),
                  l(t, 'list');
                const i = se(),
                  s = Array.from(document.getElementsByClassName('toDoDiv'));
                Object.keys(i).forEach((e) => {
                  if (e === t.title) {
                    const [e] = s.filter((e) => {
                        if (e.querySelector('p').textContent === t.title) return e;
                      }),
                      n = document.querySelector('.overview');
                    Array.from(n.classList).length > 1 && e.remove();
                  }
                });
              }
              u();
            }
          });
      }
      setTag() {
        const e = this,
          t = Array.from(document.getElementsByClassName('currentTags'))
            .map((e) => e.textContent)
            .map((e) => e.replace('#', '')),
          n = document.getElementById('allTags');
        0 === n.children.length &&
          t.forEach((e) => {
            const t = document.createElement('a');
            (t.textContent = e), n.append(t);
          });
        const r = document.getElementById('tagDialog');
        r.showModal();
        const a = Array.from(n.children),
          o = [],
          i = [];
        0 !== this.tags.length
          ? this.tags.forEach((e) => {
              o.push(e),
                a.forEach((t) => {
                  e === t.textContent && (t.innerHTML = `${e}<i class='bx bxs-check-circle'></i>`);
                });
            })
          : a.forEach((e) => {
              e.innerHTML = e.textContent;
            }),
          r.addEventListener('click', function t(n) {
            const s = document.getElementById('saveTagSelection'),
              c = document.getElementById('cancelBtn');
            if (n.target === r || n.target === c)
              r.close(),
                this.removeEventListener('click', t),
                a.forEach((e) => {
                  e.innerHTML = e.textContent;
                });
            else if ('A' === n.target.tagName) {
              const e = n.target;
              a.forEach((t) => {
                if (e !== t || o.includes(e.textContent)) {
                  if (e === t && o.includes(e.textContent))
                    for (let t = 0; t < o.length; t++)
                      o[t] === e.textContent &&
                        (console.log(`${o[t]} at ${t} in currentObj.tags array will be removed.`),
                        i.push(t),
                        o.splice(t, 1),
                        console.log(o),
                        (e.innerHTML = e.textContent));
                } else o.push(e.textContent), (e.innerHTML += "<i class='bx bxs-check-circle'></i>");
              });
            } else if (n.target === s) {
              if (0 === e.tags.length) e.tags = o;
              else if (0 !== o.length) {
                console.log(e);
                const t = () => {
                    const t = Array.from(document.getElementsByClassName('toDoDiv')),
                      [n] = t.filter((t) => {
                        if (t.querySelector('p').textContent === e.title) return t;
                      });
                    return n;
                  },
                  [n] = o.filter((t) => {
                    if (!e.tags.includes(t)) return t;
                  });
                if (n) e.tags.push(n);
                else {
                  const [n] = e.tags.filter((e) => {
                      if (!o.includes(e)) return e;
                    }),
                    r = document.querySelector('.overview');
                  let [a] = Array.from(r.classList).filter((e) => 'overview' !== e);
                  (a = a.replace('#', '')), a === n.toLowerCase() && t().remove(), (e.tags = o);
                }
              } else console.log('tempTagsList empty'), (e.tags = o);
              l(e, 'tags'),
                d(),
                (function (e) {
                  const t = document.getElementById('tags'),
                    n = document.getElementById('tagsDiv'),
                    r = document.getElementById('divTwoContainer'),
                    a = Array.from(r.children),
                    o = document.getElementById('selectedTagsDivContainer'),
                    i = document.getElementById('additionalElems');
                  if (a.includes(o) || 0 === e.tags.length) {
                    const r = t.querySelector('i');
                    0 === e.tags.length
                      ? ((t.innerHTML = "<i class='bx bx-hash' style='color:#fdfdfd'></i>Tags"),
                        (t.className = 'additionalFeatBtns'),
                        o.remove(),
                        i.insertAdjacentElement('beforeend', n))
                      : ((t.innerHTML = ''),
                        e.tags.forEach((e) => {
                          const n = document.createElement('div');
                          (n.className = 'selectedTags'), (n.id = e.toLowerCase()), (n.textContent = e), t.append(n);
                        }),
                        t.insertAdjacentElement('beforeend', r));
                  } else {
                    const r = document.createElement('div');
                    (r.id = 'selectedTagsDivContainer'),
                      (t.innerHTML = ''),
                      e.tags.forEach((e) => {
                        const n = document.createElement('div');
                        (n.className = 'selectedTags'), (n.id = e.toLowerCase()), (n.textContent = e), t.append(n);
                      }),
                      (t.innerHTML += " <i class='bx bx-message-square-add selectedTags'></i>"),
                      (t.className = 'selectedTagsDivContainer'),
                      r.appendChild(n),
                      i.insertAdjacentElement('afterend', r);
                  }
                })(e),
                this.removeEventListener('click', t),
                r.close();
            }
          });
      }
    }
    function se() {
      return localStorage.getItem('allObjs') ? JSON.parse(localStorage.getItem('allObjs')) : null;
    }
    function ce(e) {
      const t = (function (e) {
          const t = document.createElement('div');
          t.className = 'toDoDiv';
          const n = document.createElement('p');
          (n.textContent = e), (n.className = 'taskTitle');
          const r = document.createElement('input');
          return (
            (r.type = 'checkbox'),
            (r.className = 'toDoObj'),
            (function (e, t) {
              const n = document.getElementsByClassName('toDoDiv');
              if (0 == n.length) (t.id = 'taskDiv-1'), (e.id = 'task-1');
              else {
                const r = n.length;
                (t.id = `taskDiv-${r + 1}`), (e.id = `task-${r + 1}`);
              }
            })(r, t),
            t.append(r),
            t.append(n),
            t
          );
        })(e),
        n = document.querySelector('.overview'),
        r = document.getElementById('today'),
        a = Array.from(n.children).includes(r) ? r : n;
      a.insertAdjacentElement('afterbegin', t);
      const [o] = Array.from(a.classList).filter((e) => 'overview' !== e);
      if (o) {
        const n = () => {
            if (o.includes('#')) return console.log(`${o} belongs to Tags.`), 'Personal';
            {
              const e = o.split('');
              return e.map((t, n) => (0 === n ? e[0].toUpperCase() : e[n])).join('');
            }
          },
          r = () => {
            if (o.includes('#'))
              return [
                Array.from(o.replace('#', ''))
                  .map((e, t) => (0 === t ? e.toUpperCase() : e.toLowerCase()))
                  .join(''),
              ];
          };
        return new ie(e, t.id, n(), r());
      }
      return new ie(e, t.id, 'Personal');
    }
    function le(e) {
      const t = Array.from(document.getElementsByClassName('toDoDiv'));
      for (const n of t)
        n.textContent === e.title &&
          (a(e.rawReminderDate, Date.now())
            ? document.getElementById('today').append(n)
            : i(e.rawReminderDate)
              ? document.getElementById('tomorrow').append(n)
              : s(e.rawReminderDate)
                ? document.getElementById('upcoming').append(n)
                : document.getElementById('today').append(n));
    }
    function ue(e) {
      Array.from(document.getElementsByClassName('toDoDiv'))
        .reverse()
        .forEach((t) => {
          if (t.querySelector('p').textContent === e.title) {
            const e = t;
            (e.className += ' complete'), (e.querySelector('input').checked = !0);
            const n = h();
            e.append(n),
              n.addEventListener('click', () => {
                f(e);
              });
          }
        });
    }
    function de(e, t) {
      let n;
      return (
        e.forEach((e) => {
          e.querySelector('p').textContent === t && (n = e);
        }),
        n
      );
    }
    const me = n(365);
    function fe() {
      const e = localStorage.getItem('allObjs') ? JSON.parse(localStorage.getItem('allObjs')) : {};
      return (
        Object.keys(e).forEach((t) => {
          e[t] = Object.assign(new ie(), e[t]);
        }),
        e
      );
    }
    !(function () {
      !(function () {
        try {
          const e = 'testKey';
          return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
        } catch (e) {
          return !1;
        }
      })()
        ? console.log("You don't have localStorage")
        : console.log('You have localStorage'),
        (document.getElementById('userProfile').querySelector('button').style.backgroundColor = me({
          hue: (Math.random() + 0.618) % 1,
          saturation: 0.5,
          value: 0.8,
        })),
        (async function () {
          const e = await fetch('https://hellosalut.stefanbohacek.dev/?mode=auto');
          return await e.json();
        })().then((e) => {
          document.getElementById('userName').textContent = `${e.hello}!`;
        });
      const t = document.getElementById('divTwoContainer');
      (t.style.display = 'none'), t.remove();
      const n = document.getElementById('mainHeader'),
        r = document.createElement('h1');
      (r.textContent = 'All My Tasks'), n.append(r);
      const a = document.querySelector('.overview'),
        o = Array.from(a.children).map((e) => {
          if ('FIELDSET' === e.tagName) return e;
        });
      document.querySelector('.header > button').addEventListener('click', (t) => {
        !(function (t) {
          const n = t.className,
            r = document.querySelector(`dialog.${n}`),
            a = document.querySelector(`input.${n}`);
          r.showModal(),
            a.focus(),
            r.addEventListener('mousedown', (e) => {
              e.target === r && r.close();
            }),
            document.querySelector(`form.${n} > button.exit`).addEventListener('click', () => {
              r.close();
            }),
            (function (t, n, r) {
              e(t, n);
              const a = document.querySelector(`form.${n}`);
              a.addEventListener(
                'submit',
                function (e) {
                  !(function (e) {
                    const t = document.querySelector('ul.secondary.lists'),
                      n = document.createElement('li'),
                      r = document.createElement('a');
                    (r.className = 'list'), r.removeAttribute('href'), (r.textContent = e), n.append(r), t.append(n);
                  })(a.listInput.value),
                    setTimeout(() => {
                      a.listInput.value = '';
                    }, 1e3),
                    r.close(),
                    e.preventDefault();
                },
                { once: !0 }
              );
            })(a, n, r);
        })(t.currentTarget);
      });
      const i = document.querySelector('aside');
      let s = [];
      i.addEventListener('click', (e) => {
        if ('A' === e.target.tagName) {
          const t = e.target;
          if (
            ((r.textContent = t.textContent),
            Array.from(document.querySelector('aside').getElementsByClassName('list')).forEach((e) => {
              e.textContent === t.textContent &&
                (e.className.includes('viewing') || (t.className += ' viewing'), s.push(e));
            }),
            s.length > 1)
          ) {
            const e = s[s.length - 1],
              t = s[s.length - 2];
            e.textContent !== t.textContent &&
              ((t.className = t.className.includes('currentTags') ? 'list currentTags' : 'list'),
              (t.innerHTML = t.textContent));
          }
          !(function (e, t) {
            const n = localStorage.getItem('allObjs') ? JSON.parse(localStorage.getItem('allObjs')) : {},
              r = document.querySelector('.overview');
            if (
              ((r.className = 'overview'),
              document.getElementById('divTwoContainer') && document.getElementById('divTwoContainer').remove(),
              'All My Tasks' === e.textContent)
            ) {
              Array.from(r.children).forEach((e) => {
                'DIV' === e.tagName && e.remove();
              }),
                t.forEach((e) => {
                  r.append(e);
                });
              const e = () => Array.from(document.getElementsByClassName('toDoDiv')).reverse(),
                a = (e) => e.map((e) => e.querySelector('p').textContent);
              let o = e(),
                i = a(o),
                s = n;
              Object.keys(n).forEach((t, r) => {
                if (
                  (i.includes(t) ||
                    (o.length !== Object.keys(n).length
                      ? (console.log(`${t} not included`), ce(t))
                      : (o[r].querySelector('p').textContent = t)),
                  (o = e()),
                  (i = a(o)),
                  i[r] === n[t].title)
                ) {
                  const e = o[r].id;
                  s[t].taskId = e;
                }
                const c = de(o, t);
                n[t].completed
                  ? Array.from(c.classList).includes('complete') || ue(n[t])
                  : !n[t].completed &&
                    Array.from(c.classList).includes('complete') &&
                    Array.from(c.classList).includes('complete') &&
                    ((c.className = 'toDoDiv'),
                    (c.querySelector('input').checked = !1),
                    c.querySelector('button').remove()),
                  '' !== n[t].rawReminderDate && le(n[t]);
              });
              const l = Object.keys(n);
              if (l.length !== i.length) {
                const [e] = i.filter((e) => {
                  if (!l.includes(e)) return e;
                });
                de(o, e).remove();
              }
              c(s, 'allObjs');
            } else {
              const t = e.textContent.toLowerCase();
              let a;
              t.includes('#') &&
                (a = Array.from(e.textContent.toLowerCase().replace('#', ''))
                  .map((e, t) => (0 === t ? e.toUpperCase() : e))
                  .join('')),
                (r.className += ` ${t}`),
                Array.from(r.children).forEach((e) => {
                  e.remove();
                }),
                Object.keys(n).forEach((e) => {
                  const r = n[e].tags;
                  (n[e].list.toLowerCase() === t || r.includes(a)) && (ce(n[e].title), n[e].completed && ue(n[e]));
                });
            }
          })(t, o);
        }
      });
      const m = document.getElementById('addNewTask'),
        g = document.getElementById('addTask'),
        p = document.querySelector('button.addTask');
      (p.disabled = !0),
        m.addEventListener('focus', () => {
          e(m, g.className);
        });
      let v = fe();
      var w;
      let k;
      0 === Object.keys(v).length
        ? console.log('No tasks.')
        : ((w = v),
          u(),
          d(),
          Object.keys(w).forEach((e) => {
            const t = w[e];
            ce(t.title), '' !== t.rawReminderDate && le(t), !0 === t.completed && ue(t);
          })),
        g.addEventListener('submit', (e) => {
          (v = fe()),
            (k = ce(m.value)),
            (v[k.title] = k),
            (m.value = ''),
            (p.disabled = !0),
            c(v, 'allObjs'),
            u(),
            d(),
            e.preventDefault(),
            console.log(v);
        }),
        a.addEventListener('click', (e) => {
          if (
            ((v = fe()),
            Array.from(e.target.parentNode.classList).includes('toDoDiv') || e.target.className.includes('toDoDiv'))
          ) {
            const n = e.target.textContent;
            Object.keys(v).forEach((e) => {
              v[e].title === n &&
                ((k = v[e]), document.querySelector('main').append(t), (t.style.display = 'flex'), k.viewTask());
            });
          }
          if ('INPUT' === e.target.tagName) {
            const n = e.target.parentNode,
              r = n.querySelector('p').textContent;
            for (let e of Object.keys(v)) e === r && (k = v[e]);
            !(function (e, t, n) {
              let r = localStorage.getItem('allObjs') ? JSON.parse(localStorage.getItem('allObjs')) : {};
              const a = Array.from(e.classList),
                o = Array.from(t.classList),
                i = Array.from(t.getElementsByTagName('input')),
                s = Array.from(t.getElementsByTagName('button'));
              i.forEach((e) => (e.disabled = !0)), s.forEach((e) => (e.disabled = !0));
              const c = h();
              let u = !0;
              a.includes('complete')
                ? ((u = !1),
                  (e.className = a.filter((e) => 'complete' !== e).join(' ')),
                  n.taskId === t.dataset.task && (t.className = o.filter((e) => 'disable' !== e).join(' ')),
                  i.forEach((e) => (e.disabled = !1)),
                  s.forEach((e) => (e.disabled = !1)),
                  e.querySelector('button').remove())
                : ((e.className += ' complete'),
                  n.taskId === t.dataset.task &&
                    ((t.className += ' disable'),
                    c.addEventListener('click', () => {
                      t.remove();
                    })),
                  e.append(c),
                  c.addEventListener('click', () => {
                    f(e);
                  })),
                (function (e, t, n) {
                  Object.keys(n).forEach((r) => {
                    n[r].taskId === t.taskId && ((t.completed = !!e), l(t, 'completed'));
                  });
                })(u, n, r);
            })(n, t, k);
          }
        }),
        t.addEventListener('click', function (e) {
          0 !== Object.keys(v).length &&
            (function (e, t) {
              const n = e.target;
              'detailHeader' === n.id
                ? t.changeTaskTitle(n)
                : 'addChecklistItem' === n.id
                  ? (t.addToChecklist(), e.preventDefault())
                  : 'notes' === n.id
                    ? t.createNote()
                    : 'remindMe' === n.id
                      ? t.reminder(n)
                      : 'currentList' === n.id
                        ? t.editList(n)
                        : 'tags' === n.id || n.className.includes('selectedTags')
                          ? t.setTag()
                          : n.className.includes('checklistItem')
                            ? (function (e, t) {
                                const n = document.getElementById(`${e.target.id}`),
                                  r = n.parentElement.querySelector('input[type="checkbox"]').id,
                                  a = 'LABEL' === n.tagName ? b(n) : null;
                                null !== a &&
                                  (n.replaceWith(a),
                                  a.focus(),
                                  a.addEventListener(
                                    'focusout',
                                    function () {
                                      Object.keys(t.checklist).forEach((e) => {
                                        t.checklist[e].labelElemId === a.id && '' !== a.value
                                          ? (console.log('Valid input'), (t.checklist[e].value = a.value))
                                          : t.checklist[e].labelElemId === a.id &&
                                            '' === a.value &&
                                            (console.log('Invalid input'), (a.value = t.checklist[e].value));
                                      });
                                      const e = b(a);
                                      (e.htmlFor = r), a.replaceWith(e), l(t, 'checklist');
                                    },
                                    { once: !0 }
                                  ));
                              })(e, t)
                            : 'toDoObj' === n.className &&
                              (function (e, t) {
                                const n = localStorage.getItem('allObjs')
                                    ? JSON.parse(localStorage.getItem('allObjs'))
                                    : {},
                                  r = h();
                                Object.keys(n).forEach((n) => {
                                  if (n === t.taskId) {
                                    const n = e.parentElement,
                                      a = n.querySelector('input'),
                                      o = n.querySelector('label'),
                                      i = t.checklist;
                                    Object.keys(i).forEach((e) => {
                                      i[e].labelElemId === o.id &&
                                        (console.log(`${o.id} checked: ${a.checked}`),
                                        a.checked
                                          ? ((n.className += ' complete'),
                                            (i[e].completed = !0),
                                            n.append(r),
                                            r.addEventListener('click', () => {
                                              y(n, t);
                                            }))
                                          : ((n.className = Array.from(n.classList)
                                              .filter((e) => 'complete' !== e)
                                              .join(' ')),
                                            (i[e].completed = !1),
                                            n.querySelector('button').remove()));
                                    }),
                                      l(t, 'checklist');
                                  }
                                });
                              })(n, t);
            })(e, k);
        });
    })();
  })();
})();
