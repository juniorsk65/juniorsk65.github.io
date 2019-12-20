;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '1TsT': function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return c
      })
      n('V+eJ'), n('2Spj'), n('8+KV'), n('HAE/')
      var o = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      )
      var r = void 0
      function a() {
        return (
          void 0 === r &&
            (r = (function() {
              if (!o) return !1
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1
              var e = !1
              try {
                var t = Object.defineProperty({}, 'passive', {
                    get: function() {
                      e = !0
                    },
                  }),
                  n = function() {}
                window.addEventListener('testPassiveEventSupport', n, t),
                  window.removeEventListener('testPassiveEventSupport', n, t)
              } catch (r) {}
              return e
            })()),
          r
        )
      }
      function l(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice())
      }
      function i(e) {
        ;(this.target = e), (this.events = {})
      }
      ;(i.prototype.getEventHandlers = function(e, t) {
        var n,
          o =
            String(e) +
            ' ' +
            String(
              (n = t)
                ? !0 === n
                  ? 100
                  : (n.capture << 0) + (n.passive << 1) + (n.once << 2)
                : 0
            )
        return (
          this.events[o] ||
            ((this.events[o] = { handlers: [], handleEvent: void 0 }),
            (this.events[o].nextHandlers = this.events[o].handlers)),
          this.events[o]
        )
      }),
        (i.prototype.handleEvent = function(e, t, n) {
          var o = this.getEventHandlers(e, t)
          ;(o.handlers = o.nextHandlers),
            o.handlers.forEach(function(e) {
              e && e(n)
            })
        }),
        (i.prototype.add = function(e, t, n) {
          var o = this,
            r = this.getEventHandlers(e, n)
          l(r),
            0 === r.nextHandlers.length &&
              ((r.handleEvent = this.handleEvent.bind(this, e, n)),
              this.target.addEventListener(e, r.handleEvent, n)),
            r.nextHandlers.push(t)
          var a = !0
          return function() {
            if (a) {
              ;(a = !1), l(r)
              var i = r.nextHandlers.indexOf(t)
              r.nextHandlers.splice(i, 1),
                0 === r.nextHandlers.length &&
                  (o.target &&
                    o.target.removeEventListener(e, r.handleEvent, n),
                  (r.handleEvent = void 0))
            }
          }
        })
      var s = '__consolidated_events_handlers__'
      function c(e, t, n, o) {
        e[s] || (e[s] = new i(e))
        var r = (function(e) {
          if (e) return a() ? e : !!e.capture
        })(o)
        return e[s].add(t, n, r)
      }
    },
    '40cp': function(e, t) {
      e.exports =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+'
    },
    '7W2i': function(e, t, n) {
      var o = n('SksO')
      e.exports = function(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && o(e, t)
      }
    },
    Bnag: function(e, t) {
      e.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance')
      }
    },
    EbDI: function(e, t) {
      e.exports = function(e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e)
      }
    },
    Fxm3: function(e, t, n) {
      'use strict'
      n('HAE/'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var o = function(e) {
        var t,
          n,
          o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
        return function() {
          var r = +new Date()
          !!t && r < t + o
            ? (clearTimeout(n),
              (n = setTimeout(function() {
                ;(t = r), e()
              }, o)))
            : ((t = r), e())
        }
      }
      t.default = o
    },
    Ijbi: function(e, t) {
      e.exports = function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++)
            n[t] = e[t]
          return n
        }
      }
    },
    Nsbk: function(e, t) {
      function n(t) {
        return (
          (e.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          n(t)
        )
      }
      e.exports = n
    },
    RIqP: function(e, t, n) {
      var o = n('Ijbi'),
        r = n('EbDI'),
        a = n('Bnag')
      e.exports = function(e) {
        return o(e) || r(e) || a()
      }
    },
    RXBc: function(e, t, n) {
      'use strict'
      n.r(t)
      var o = n('Wbzz'),
        r = n('q1tI'),
        a = n.n(r),
        l = n('TJpk'),
        i = n.n(l),
        s = n('uuth'),
        c = n('U1wR'),
        u = n.n(c),
        p =
          (n('40cp'),
          function(e) {
            return a.a.createElement(
              'header',
              { id: 'header', className: 'alt' },
              a.a.createElement('h1', null, 'Luciano Júnior'),
              a.a.createElement('p', null, 'Computer Engineering Student')
            )
          }),
        f = n('Bl7J'),
        m = n('YIkO'),
        d = n.n(m),
        y = n('dwco'),
        h = n.n(y)
      var v = function(e) {
          return e.children
        },
        w = (function(e) {
          var t, n
          function o() {
            var t
            return (
              ((t = e.call(this) || this).handleClick = t.handleClick.bind(
                (function(e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    )
                  return e
                })(t)
              )),
              t
            )
          }
          ;(n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n)
          var r = o.prototype
          return (
            (r.componentDidMount = function() {
              h.a.polyfill()
            }),
            (r.handleClick = function(e) {
              e.preventDefault()
              var t = 0,
                n = !0,
                o = this.props,
                r = o.type,
                a = o.element,
                l = o.offset,
                i = o.timeout
              if (r && a)
                switch (r) {
                  case 'class':
                    n = !!(t = document.getElementsByClassName(a)[0])
                    break
                  case 'id':
                    n = !!(t = document.getElementById(a))
                }
              n
                ? this.scrollTo(t, l, i)
                : console.log('Element not found: ' + a)
            }),
            (r.scrollTo = function(e, t, n) {
              void 0 === t && (t = 0), void 0 === n && (n = null)
              var o = e ? e.getBoundingClientRect().top + window.pageYOffset : 0
              n
                ? setTimeout(function() {
                    window.scroll({ top: o + t, left: 0, behavior: 'smooth' })
                  }, n)
                : window.scroll({ top: o + t, left: 0, behavior: 'smooth' })
            }),
            (r.render = function() {
              return a.a.createElement(
                v,
                null,
                'object' == typeof this.props.children
                  ? a.a.cloneElement(this.props.children, {
                      onClick: this.handleClick,
                    })
                  : a.a.createElement(
                      'span',
                      { onClick: this.handleClick },
                      this.props.children
                    )
              )
            }),
            o
          )
        })(a.a.Component),
        E = function(e) {
          return a.a.createElement(
            'nav',
            { id: 'nav', className: e.sticky ? 'alt' : '' },
            a.a.createElement(
              d.a,
              {
                items: ['intro', 'first', 'second', 'cta'],
                currentClassName: 'is-active',
                offset: -300,
              },
              a.a.createElement(
                'li',
                null,
                a.a.createElement(
                  w,
                  { type: 'id', element: 'intro' },
                  a.a.createElement('a', { href: '#' }, 'About me')
                )
              ),
              a.a.createElement(
                'li',
                null,
                a.a.createElement(
                  w,
                  { type: 'id', element: 'first' },
                  a.a.createElement('a', { href: '#' }, 'Values')
                )
              ),
              a.a.createElement(
                'li',
                null,
                a.a.createElement(
                  w,
                  { type: 'id', element: 'second' },
                  a.a.createElement('a', { href: '#' }, 'Skills')
                )
              ),
              a.a.createElement(
                'li',
                null,
                a.a.createElement(
                  w,
                  { type: 'id', element: 'cta' },
                  a.a.createElement('a', { href: '#' }, 'Showcase')
                )
              )
            )
          )
        }
      var b = (function(e) {
        var t, n
        function r(t) {
          var n
          return (
            ((n = e.call(this, t) || this)._handleWaypointEnter = function() {
              n.setState(function() {
                return { stickyNav: !1 }
              })
            }),
            (n._handleWaypointLeave = function() {
              n.setState(function() {
                return { stickyNav: !0 }
              })
            }),
            (n.state = { stickyNav: !1 }),
            n
          )
        }
        return (
          (n = e),
          ((t = r).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (r.prototype.render = function() {
            return a.a.createElement(
              f.a,
              null,
              a.a.createElement(i.a, { title: 'Gatsby Starter - Stellar' }),
              a.a.createElement(p, null),
              a.a.createElement(s.a, {
                onEnter: this._handleWaypointEnter,
                onLeave: this._handleWaypointLeave,
              }),
              a.a.createElement(E, { sticky: this.state.stickyNav }),
              a.a.createElement(
                'div',
                { id: 'main' },
                a.a.createElement(
                  'section',
                  { id: 'intro', className: 'main' },
                  a.a.createElement(
                    'div',
                    { className: 'spotlight' },
                    a.a.createElement(
                      'div',
                      { className: 'content' },
                      a.a.createElement(
                        'header',
                        { className: 'major' },
                        a.a.createElement('h2', null, "Hi, I'm Luciano")
                      ),
                      a.a.createElement(
                        'p',
                        null,
                        'Graduating in computer engineering, loves embedded systems and web / mobile application creation. Dedicated, hardworking and always looking for new experiences.'
                      ),
                      a.a.createElement(
                        'ul',
                        { className: 'icons' },
                        a.a.createElement(
                          'li',
                          null,
                          a.a.createElement(
                            'a',
                            {
                              href: 'https://twitter.com/',
                              className: 'icon fa-twitter alt',
                            },
                            a.a.createElement(
                              'span',
                              { className: 'label' },
                              'Twitter'
                            )
                          )
                        ),
                        a.a.createElement(
                          'li',
                          null,
                          a.a.createElement(
                            'a',
                            {
                              href: 'https://facebook.com',
                              className: 'icon fa-facebook alt',
                            },
                            a.a.createElement(
                              'span',
                              { className: 'label' },
                              'Facebook'
                            )
                          )
                        ),
                        a.a.createElement(
                          'li',
                          null,
                          a.a.createElement(
                            'a',
                            {
                              href:
                                'https://www.instagram.com/luciano__junior/',
                              className: 'icon fa-instagram alt',
                            },
                            a.a.createElement(
                              'span',
                              { className: 'label' },
                              'Instagram'
                            )
                          )
                        ),
                        a.a.createElement(
                          'li',
                          null,
                          a.a.createElement(
                            'a',
                            {
                              href: 'https://github.com/juniorsk65',
                              className: 'icon fa-github alt',
                            },
                            a.a.createElement(
                              'span',
                              { className: 'label' },
                              'GitHub'
                            )
                          )
                        ),
                        a.a.createElement(
                          'li',
                          null,
                          a.a.createElement(
                            'a',
                            {
                              href: 'https://dribbble.com',
                              className: 'icon fa-dribbble alt',
                            },
                            a.a.createElement(
                              'span',
                              { className: 'label' },
                              'Dribbble'
                            )
                          )
                        )
                      )
                    ),
                    a.a.createElement(
                      'span',
                      { className: 'image' },
                      a.a.createElement('img', { src: u.a, alt: '' })
                    )
                  )
                ),
                a.a.createElement(
                  'section',
                  { id: 'first', className: 'main special' },
                  a.a.createElement(
                    'header',
                    { className: 'major' },
                    a.a.createElement('h2', null, 'Values'),
                    a.a.createElement(
                      'p',
                      null,
                      "Collaborating well is more important than someone's skillset."
                    )
                  ),
                  a.a.createElement(
                    'ul',
                    { className: 'statistics' },
                    a.a.createElement(
                      'li',
                      { className: 'style1' },
                      a.a.createElement('span', {
                        className: 'icon fa-heartbeat',
                      }),
                      a.a.createElement('strong', null),
                      ' Passion'
                    ),
                    a.a.createElement(
                      'li',
                      { className: 'style2' },
                      a.a.createElement('span', {
                        className: 'icon fa-comments',
                      }),
                      a.a.createElement('strong', null),
                      ' Comunication'
                    ),
                    a.a.createElement(
                      'li',
                      { className: 'style3' },
                      a.a.createElement('span', {
                        className: 'icon fa-bullseye',
                      }),
                      a.a.createElement('strong', null),
                      ' Focus'
                    ),
                    a.a.createElement(
                      'li',
                      { className: 'style4' },
                      a.a.createElement('span', {
                        className: 'icon fa-laptop',
                      }),
                      a.a.createElement('strong', null),
                      ' Curiosity'
                    ),
                    a.a.createElement(
                      'li',
                      { className: 'style5' },
                      a.a.createElement('span', {
                        className: 'icon fa-life-ring',
                      }),
                      a.a.createElement('strong', null),
                      ' Cooperation'
                    )
                  ),
                  a.a.createElement(
                    'p',
                    { className: 'content' },
                    'Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.'
                  )
                ),
                a.a.createElement(
                  'section',
                  { id: 'second', className: 'main special' },
                  a.a.createElement(
                    'header',
                    { className: 'major' },
                    a.a.createElement('h2', null, 'Toolbox'),
                    a.a.createElement('p', null, 'Front-End Development')
                  ),
                  a.a.createElement(
                    'ul',
                    { className: 'features' },
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'React Native')
                    ),
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'React JS')
                    ),
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'HTML | CSS')
                    ),
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'Typescript')
                    ),
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'Gatsby')
                    ),
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'PHP')
                    )
                  ),
                  a.a.createElement(
                    'header',
                    { className: 'major' },
                    a.a.createElement('p', null, 'Back-End Development')
                  ),
                  a.a.createElement(
                    'ul',
                    { className: 'features' },
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'Node JS')
                    ),
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'Rest APIs')
                    ),
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'GraphQL')
                    ),
                    a.a.createElement(
                      'li',
                      null,
                      a.a.createElement('span', {
                        className: 'icon major style5 fa-diamond',
                      }),
                      a.a.createElement('h3', null, 'MySQL')
                    )
                  ),
                  a.a.createElement(
                    'footer',
                    { className: 'major' },
                    a.a.createElement(
                      'ul',
                      { className: 'actions' },
                      a.a.createElement(
                        'li',
                        null,
                        a.a.createElement(
                          o.Link,
                          { to: '/generic', className: 'button' },
                          'Learn More'
                        )
                      )
                    )
                  )
                ),
                a.a.createElement(
                  'section',
                  { id: 'cta', className: 'main special' },
                  a.a.createElement(
                    'header',
                    { className: 'major' },
                    a.a.createElement('h2', null, 'Showcase'),
                    a.a.createElement(
                      'p',
                      null,
                      'Donec imperdiet consequat consequat. Suspendisse feugiat congue',
                      a.a.createElement('br', null),
                      'posuere. Nulla massa urna, fermentum eget quam aliquet.'
                    )
                  ),
                  a.a.createElement(
                    'footer',
                    { className: 'major' },
                    a.a.createElement(
                      'ul',
                      { className: 'actions' },
                      a.a.createElement(
                        'li',
                        null,
                        a.a.createElement(
                          o.Link,
                          { to: '/generic', className: 'button special' },
                          'Get Started'
                        )
                      ),
                      a.a.createElement(
                        'li',
                        null,
                        a.a.createElement(
                          o.Link,
                          { to: '/generic', className: 'button' },
                          'Learn More'
                        )
                      )
                    )
                  )
                )
              )
            )
          }),
          r
        )
      })(a.a.Component)
      t.default = b
    },
    SksO: function(e, t) {
      function n(t, o) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e
            }),
          n(t, o)
        )
      }
      e.exports = n
    },
    TOwV: function(e, t, n) {
      'use strict'
      e.exports = n('qT12')
    },
    TSYQ: function(e, t, n) {
      var o
      n('LK8F'),
        (function() {
          'use strict'
          var n = {}.hasOwnProperty
          function r() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var o = arguments[t]
              if (o) {
                var a = typeof o
                if ('string' === a || 'number' === a) e.push(o)
                else if (Array.isArray(o) && o.length) {
                  var l = r.apply(null, o)
                  l && e.push(l)
                } else if ('object' === a)
                  for (var i in o) n.call(o, i) && o[i] && e.push(i)
              }
            }
            return e.join(' ')
          }
          e.exports
            ? ((r.default = r), (e.exports = r))
            : void 0 ===
                (o = function() {
                  return r
                }.apply(t, [])) || (e.exports = o)
        })()
    },
    U1wR: function(e, t, n) {
      e.exports = n.p + 'static/me-a88ce7587f42dedfbced7f10d5173b11.jpg'
    },
    W8MJ: function(e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      e.exports = function(e, t, o) {
        return t && n(e.prototype, t), o && n(e, o), e
      }
    },
    YIkO: function(e, t, n) {
      'use strict'
      n('V+eJ'), n('dZ+Y'), n('bWfx'), n('2Spj'), n('LK8F'), n('HAE/')
      var o = n('TqRt')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var r = o(n('pVnL')),
        a = o(n('lSNA')),
        l = o(n('RIqP')),
        i = o(n('lwsE')),
        s = o(n('a1gu')),
        c = o(n('Nsbk')),
        u = o(n('PJYZ')),
        p = o(n('W8MJ')),
        f = o(n('7W2i')),
        m = o(n('17x9')),
        d = o(n('q1tI')),
        y = o(n('TSYQ')),
        h = o(n('Fxm3'))
      var v = (function(e) {
        function t(e) {
          var n
          return (
            (0, i.default)(this, t),
            ((n = (0, s.default)(
              this,
              (0, c.default)(t).call(this, e)
            )).state = {
              targetItems: [],
              inViewState: [],
              isScrolledPast: [],
            }),
            (n._handleSpy = n._handleSpy.bind((0, u.default)(n))),
            n
          )
        }
        return (
          (0, f.default)(t, e),
          (0, p.default)(t, null, [
            {
              key: 'propTypes',
              get: function() {
                return {
                  items: m.default.arrayOf(m.default.string).isRequired,
                  currentClassName: m.default.string.isRequired,
                  scrolledPastClassName: m.default.string,
                  style: m.default.object,
                  componentTag: m.default.oneOfType([
                    m.default.string,
                    m.default.element,
                  ]),
                  offset: m.default.number,
                  rootEl: m.default.string,
                  onUpdate: m.default.func,
                }
              },
            },
            {
              key: 'defaultProps',
              get: function() {
                return {
                  items: [],
                  currentClassName: '',
                  style: {},
                  componentTag: 'ul',
                  offset: 0,
                  onUpdate: function() {},
                }
              },
            },
          ]),
          (0, p.default)(t, [
            {
              key: '_initSpyTarget',
              value: function(e) {
                return e.map(function(e) {
                  return document.getElementById(e)
                })
              },
            },
            {
              key: '_fillArray',
              value: function(e, t) {
                for (var n = [], o = 0, r = e.length; o < r; o++) n[o] = t
                return n
              },
            },
            {
              key: '_isScrolled',
              value: function() {
                return this._getScrollDimension().scrollTop > 0
              },
            },
            {
              key: '_getScrollDimension',
              value: function() {
                var e = document,
                  t = this.props.rootEl
                return {
                  scrollTop: t
                    ? e.querySelector(t).scrollTop
                    : e.documentElement.scrollTop ||
                      e.body.parentNode.scrollTop ||
                      e.body.scrollTop,
                  scrollHeight: t
                    ? e.querySelector(t).scrollHeight
                    : e.documentElement.scrollHeight ||
                      e.body.parentNode.scrollHeight ||
                      e.body.scrollHeight,
                }
              },
            },
            {
              key: '_getElemsViewState',
              value: function(e) {
                for (
                  var t = [],
                    n = [],
                    o = [],
                    r = e || this.state.targetItems,
                    a = !1,
                    i = 0,
                    s = r.length;
                  i < s;
                  i++
                ) {
                  var c = r[i],
                    u = !a && this._isInView(c)
                  u ? ((a = !0), t.push(c)) : n.push(c)
                  var p = i === s - 1,
                    f = this._isScrolled()
                  this._isAtBottom() &&
                    this._isInView(c) &&
                    !u &&
                    p &&
                    f &&
                    (n.pop(),
                    n.push.apply(n, (0, l.default)(t)),
                    (t = [c]),
                    (o = this._fillArray(o, !1)),
                    (u = !0)),
                    o.push(u)
                }
                return {
                  inView: t,
                  outView: n,
                  viewStatusList: o,
                  scrolledPast:
                    this.props.scrolledPastClassName &&
                    this._getScrolledPast(o),
                }
              },
            },
            {
              key: '_isInView',
              value: function(e) {
                if (!e) return !1
                var t,
                  n = this.props,
                  o = n.rootEl,
                  r = n.offset
                o && (t = document.querySelector(o).getBoundingClientRect())
                var a = e.getBoundingClientRect(),
                  l = o ? t.height : window.innerHeight,
                  i = this._getScrollDimension().scrollTop,
                  s = i + l,
                  c = o ? a.top + i - t.top + r : a.top + i + r,
                  u = c + e.offsetHeight
                return c < s && u > i
              },
            },
            {
              key: '_isAtBottom',
              value: function() {
                var e = this.props.rootEl,
                  t = this._getScrollDimension(),
                  n = t.scrollTop,
                  o = t.scrollHeight
                return (
                  n +
                    (e
                      ? document.querySelector(e).getBoundingClientRect().height
                      : window.innerHeight) >=
                  o
                )
              },
            },
            {
              key: '_getScrolledPast',
              value: function(e) {
                if (
                  !e.some(function(e) {
                    return e
                  })
                )
                  return e
                var t = !1
                return e.map(function(e) {
                  return e && !t ? ((t = !0), !1) : !t
                })
              },
            },
            {
              key: '_spy',
              value: function(e) {
                var t = this,
                  n = this._getElemsViewState(e),
                  o = this.state.inViewState
                this.setState(
                  {
                    inViewState: n.viewStatusList,
                    isScrolledPast: n.scrolledPast,
                  },
                  function() {
                    t._update(o)
                  }
                )
              },
            },
            {
              key: '_update',
              value: function(e) {
                var t, n
                ;((t = this.state.inViewState),
                (n = e),
                t.length === n.length &&
                  t.every(function(e, t) {
                    return e === n[t]
                  })) ||
                  this.props.onUpdate(
                    this.state.targetItems[this.state.inViewState.indexOf(!0)]
                  )
              },
            },
            {
              key: '_handleSpy',
              value: function() {
                ;(0, h.default)(this._spy(), 100)
              },
            },
            {
              key: '_initFromProps',
              value: function() {
                var e = this._initSpyTarget(this.props.items)
                this.setState({ targetItems: e }), this._spy(e)
              },
            },
            {
              key: 'offEvent',
              value: function() {
                ;(this.props.rootEl
                  ? document.querySelector(this.props.rootEl)
                  : window
                ).removeEventListener('scroll', this._handleSpy)
              },
            },
            {
              key: 'onEvent',
              value: function() {
                ;(this.props.rootEl
                  ? document.querySelector(this.props.rootEl)
                  : window
                ).addEventListener('scroll', this._handleSpy)
              },
            },
            {
              key: 'componentDidMount',
              value: function() {
                this._initFromProps(), this.onEvent()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                this.offEvent()
              },
            },
            {
              key: 'UNSAFE_componentWillReceiveProps',
              value: function() {
                this._initFromProps()
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props.componentTag,
                  n = this.props,
                  o = n.children,
                  l = n.className,
                  i = n.scrolledPastClassName,
                  s = n.style,
                  c = 0,
                  u = d.default.Children.map(o, function(t, n) {
                    var o
                    if (!t) return null
                    var l = t.type,
                      s = i && e.state.isScrolledPast[n],
                      u = (0, y.default)(
                        ((o = {}),
                        (0, a.default)(
                          o,
                          ''.concat(t.props.className),
                          t.props.className
                        ),
                        (0, a.default)(
                          o,
                          ''.concat(e.props.currentClassName),
                          e.state.inViewState[n]
                        ),
                        (0, a.default)(
                          o,
                          ''.concat(e.props.scrolledPastClassName),
                          s
                        ),
                        o)
                      )
                    return d.default.createElement(
                      l,
                      (0, r.default)({}, t.props, { className: u, key: c++ }),
                      t.props.children
                    )
                  }),
                  p = (0, y.default)((0, a.default)({}, ''.concat(l), l))
                return d.default.createElement(t, { className: p, style: s }, u)
              },
            },
          ]),
          t
        )
      })(d.default.Component)
      t.default = v
    },
    a1gu: function(e, t, n) {
      var o = n('cDf5'),
        r = n('PJYZ')
      e.exports = function(e, t) {
        return !t || ('object' !== o(t) && 'function' != typeof t) ? r(e) : t
      }
    },
    cDf5: function(e, t) {
      function n(t) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? (e.exports = n = function(e) {
                return typeof e
              })
            : (e.exports = n = function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }),
          n(t)
        )
      }
      e.exports = n
    },
    dwco: function(e, t, n) {
      n('Oyvg'),
        n('eM6i'),
        n('2Spj'),
        (function() {
          'use strict'
          e.exports = {
            polyfill: function() {
              var e = window,
                t = document
              if (
                !(
                  'scrollBehavior' in t.documentElement.style &&
                  !0 !== e.__forceSmoothScrollPolyfill__
                )
              ) {
                var n,
                  o = e.HTMLElement || e.Element,
                  r = 468,
                  a = {
                    scroll: e.scroll || e.scrollTo,
                    scrollBy: e.scrollBy,
                    elementScroll: o.prototype.scroll || s,
                    scrollIntoView: o.prototype.scrollIntoView,
                  },
                  l =
                    e.performance && e.performance.now
                      ? e.performance.now.bind(e.performance)
                      : Date.now,
                  i =
                    ((n = e.navigator.userAgent),
                    new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(n)
                      ? 1
                      : 0)
                ;(e.scroll = e.scrollTo = function() {
                  void 0 !== arguments[0] &&
                    (!0 !== c(arguments[0])
                      ? y.call(
                          e,
                          t.body,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : e.scrollX || e.pageXOffset,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : e.scrollY || e.pageYOffset
                        )
                      : a.scroll.call(
                          e,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : 'object' != typeof arguments[0]
                            ? arguments[0]
                            : e.scrollX || e.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : e.scrollY || e.pageYOffset
                        ))
                }),
                  (e.scrollBy = function() {
                    void 0 !== arguments[0] &&
                      (c(arguments[0])
                        ? a.scrollBy.call(
                            e,
                            void 0 !== arguments[0].left
                              ? arguments[0].left
                              : 'object' != typeof arguments[0]
                              ? arguments[0]
                              : 0,
                            void 0 !== arguments[0].top
                              ? arguments[0].top
                              : void 0 !== arguments[1]
                              ? arguments[1]
                              : 0
                          )
                        : y.call(
                            e,
                            t.body,
                            ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                            ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                          ))
                  }),
                  (o.prototype.scroll = o.prototype.scrollTo = function() {
                    if (void 0 !== arguments[0])
                      if (!0 !== c(arguments[0])) {
                        var e = arguments[0].left,
                          t = arguments[0].top
                        y.call(
                          this,
                          this,
                          void 0 === e ? this.scrollLeft : ~~e,
                          void 0 === t ? this.scrollTop : ~~t
                        )
                      } else {
                        if (
                          'number' == typeof arguments[0] &&
                          void 0 === arguments[1]
                        )
                          throw new SyntaxError('Value could not be converted')
                        a.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : 'object' != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                        )
                      }
                  }),
                  (o.prototype.scrollBy = function() {
                    void 0 !== arguments[0] &&
                      (!0 !== c(arguments[0])
                        ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior,
                          })
                        : a.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left + this.scrollLeft
                              : ~~arguments[0] + this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top + this.scrollTop
                              : ~~arguments[1] + this.scrollTop
                          ))
                  }),
                  (o.prototype.scrollIntoView = function() {
                    if (!0 !== c(arguments[0])) {
                      var n = m(this),
                        o = n.getBoundingClientRect(),
                        r = this.getBoundingClientRect()
                      n !== t.body
                        ? (y.call(
                            this,
                            n,
                            n.scrollLeft + r.left - o.left,
                            n.scrollTop + r.top - o.top
                          ),
                          'fixed' !== e.getComputedStyle(n).position &&
                            e.scrollBy({
                              left: o.left,
                              top: o.top,
                              behavior: 'smooth',
                            }))
                        : e.scrollBy({
                            left: r.left,
                            top: r.top,
                            behavior: 'smooth',
                          })
                    } else
                      a.scrollIntoView.call(
                        this,
                        void 0 === arguments[0] || arguments[0]
                      )
                  })
              }
              function s(e, t) {
                ;(this.scrollLeft = e), (this.scrollTop = t)
              }
              function c(e) {
                if (
                  null === e ||
                  'object' != typeof e ||
                  void 0 === e.behavior ||
                  'auto' === e.behavior ||
                  'instant' === e.behavior
                )
                  return !0
                if ('object' == typeof e && 'smooth' === e.behavior) return !1
                throw new TypeError(
                  'behavior member of ScrollOptions ' +
                    e.behavior +
                    ' is not a valid value for enumeration ScrollBehavior.'
                )
              }
              function u(e, t) {
                return 'Y' === t
                  ? e.clientHeight + i < e.scrollHeight
                  : 'X' === t
                  ? e.clientWidth + i < e.scrollWidth
                  : void 0
              }
              function p(t, n) {
                var o = e.getComputedStyle(t, null)['overflow' + n]
                return 'auto' === o || 'scroll' === o
              }
              function f(e) {
                var t = u(e, 'Y') && p(e, 'Y'),
                  n = u(e, 'X') && p(e, 'X')
                return t || n
              }
              function m(e) {
                for (; e !== t.body && !1 === f(e); ) e = e.parentNode || e.host
                return e
              }
              function d(t) {
                var n,
                  o,
                  a,
                  i,
                  s = (l() - t.startTime) / r
                ;(i = s = s > 1 ? 1 : s),
                  (n = 0.5 * (1 - Math.cos(Math.PI * i))),
                  (o = t.startX + (t.x - t.startX) * n),
                  (a = t.startY + (t.y - t.startY) * n),
                  t.method.call(t.scrollable, o, a),
                  (o === t.x && a === t.y) ||
                    e.requestAnimationFrame(d.bind(e, t))
              }
              function y(n, o, r) {
                var i,
                  c,
                  u,
                  p,
                  f = l()
                n === t.body
                  ? ((i = e),
                    (c = e.scrollX || e.pageXOffset),
                    (u = e.scrollY || e.pageYOffset),
                    (p = a.scroll))
                  : ((i = n), (c = n.scrollLeft), (u = n.scrollTop), (p = s)),
                  d({
                    scrollable: i,
                    method: p,
                    startTime: f,
                    startX: c,
                    startY: u,
                    x: o,
                    y: r,
                  })
              }
            },
          }
        })()
    },
    lwsE: function(e, t) {
      e.exports = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
    },
    qT12: function(e, t, n) {
      'use strict'
      n('rE2o'),
        n('ioFf'),
        n('HAE/'),
        Object.defineProperty(t, '__esModule', { value: !0 })
      var o = 'function' == typeof Symbol && Symbol.for,
        r = o ? Symbol.for('react.element') : 60103,
        a = o ? Symbol.for('react.portal') : 60106,
        l = o ? Symbol.for('react.fragment') : 60107,
        i = o ? Symbol.for('react.strict_mode') : 60108,
        s = o ? Symbol.for('react.profiler') : 60114,
        c = o ? Symbol.for('react.provider') : 60109,
        u = o ? Symbol.for('react.context') : 60110,
        p = o ? Symbol.for('react.async_mode') : 60111,
        f = o ? Symbol.for('react.concurrent_mode') : 60111,
        m = o ? Symbol.for('react.forward_ref') : 60112,
        d = o ? Symbol.for('react.suspense') : 60113,
        y = o ? Symbol.for('react.suspense_list') : 60120,
        h = o ? Symbol.for('react.memo') : 60115,
        v = o ? Symbol.for('react.lazy') : 60116,
        w = o ? Symbol.for('react.fundamental') : 60117,
        E = o ? Symbol.for('react.responder') : 60118,
        b = o ? Symbol.for('react.scope') : 60119
      function g(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case p:
                case f:
                case l:
                case s:
                case i:
                case d:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case m:
                    case v:
                    case h:
                    case c:
                      return e
                    default:
                      return t
                  }
              }
            case a:
              return t
          }
        }
      }
      function N(e) {
        return g(e) === f
      }
      ;(t.typeOf = g),
        (t.AsyncMode = p),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = u),
        (t.ContextProvider = c),
        (t.Element = r),
        (t.ForwardRef = m),
        (t.Fragment = l),
        (t.Lazy = v),
        (t.Memo = h),
        (t.Portal = a),
        (t.Profiler = s),
        (t.StrictMode = i),
        (t.Suspense = d),
        (t.isValidElementType = function(e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === l ||
            e === f ||
            e === s ||
            e === i ||
            e === d ||
            e === y ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === h ||
                e.$$typeof === c ||
                e.$$typeof === u ||
                e.$$typeof === m ||
                e.$$typeof === w ||
                e.$$typeof === E ||
                e.$$typeof === b))
          )
        }),
        (t.isAsyncMode = function(e) {
          return N(e) || g(e) === p
        }),
        (t.isConcurrentMode = N),
        (t.isContextConsumer = function(e) {
          return g(e) === u
        }),
        (t.isContextProvider = function(e) {
          return g(e) === c
        }),
        (t.isElement = function(e) {
          return 'object' == typeof e && null !== e && e.$$typeof === r
        }),
        (t.isForwardRef = function(e) {
          return g(e) === m
        }),
        (t.isFragment = function(e) {
          return g(e) === l
        }),
        (t.isLazy = function(e) {
          return g(e) === v
        }),
        (t.isMemo = function(e) {
          return g(e) === h
        }),
        (t.isPortal = function(e) {
          return g(e) === a
        }),
        (t.isProfiler = function(e) {
          return g(e) === s
        }),
        (t.isStrictMode = function(e) {
          return g(e) === i
        }),
        (t.isSuspense = function(e) {
          return g(e) === d
        })
    },
    uuth: function(e, t, n) {
      'use strict'
      ;(function(e) {
        n.d(t, 'a', function() {
          return N
        })
        n('2Spj'), n('V+eJ'), n('/SS/'), n('hHhE'), n('HAE/')
        var o = n('1TsT'),
          r = (n('17x9'), n('q1tI')),
          a = n.n(r),
          l = n('TOwV')
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n]
            ;(o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o)
          }
        }
        function s(e) {
          return (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              })(e)
        }
        function c(e, t) {
          return (c =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        function u(e, t) {
          return !t || ('object' != typeof t && 'function' != typeof t)
            ? (function(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  )
                return e
              })(e)
            : t
        }
        function p(e, t) {
          var n,
            o =
              ((n = e),
              !isNaN(parseFloat(n)) && isFinite(n)
                ? parseFloat(n)
                : 'px' === n.slice(-2)
                ? parseFloat(n.slice(0, -2))
                : void 0)
          if ('number' == typeof o) return o
          var r = (function(e) {
            if ('%' === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100
          })(e)
          return 'number' == typeof r ? r * t : void 0
        }
        var f = 'above',
          m = 'inside',
          d = 'below',
          y = 'invisible'
        function h(e) {
          return 'string' == typeof e.type
        }
        var v,
          w =
            '<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.'
        var E = []
        function b(e) {
          E.push(e),
            v ||
              (v = setTimeout(function() {
                var e
                for (v = null; (e = E.shift()); ) e()
              }, 0))
          var t = !0
          return function() {
            if (t) {
              t = !1
              var n = E.indexOf(e)
              ;-1 !== n &&
                (E.splice(n, 1),
                !E.length && v && (clearTimeout(v), (v = null)))
            }
          }
        }
        var g = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: '0px',
            bottomOffset: '0px',
            horizontal: !1,
            onEnter: function() {},
            onLeave: function() {},
            onPositionChange: function() {},
            fireOnRapidScroll: !0,
          },
          N = (function(t) {
            function n(e) {
              var t
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function')
                })(this, n),
                ((t = u(this, s(n).call(this, e))).refElement = function(e) {
                  t._ref = e
                }),
                t
              )
            }
            var r, v, E
            return (
              (function(e, t) {
                if ('function' != typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  )
                ;(e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && c(e, t)
              })(n, t),
              (r = n),
              (v = [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this
                    n.getWindow() &&
                      (this.cancelOnNextTick = b(function() {
                        e.cancelOnNextTick = null
                        var t = e.props,
                          n = t.children
                        t.debug,
                          (function(e, t) {
                            if (e && !h(e) && !t) throw new Error(w)
                          })(n, e._ref),
                          (e._handleScroll = e._handleScroll.bind(e)),
                          (e.scrollableAncestor = e._findScrollableAncestor()),
                          (e.scrollEventListenerUnsubscribe = Object(
                            o.a
                          )(e.scrollableAncestor, 'scroll', e._handleScroll, {
                            passive: !0,
                          })),
                          (e.resizeEventListenerUnsubscribe = Object(
                            o.a
                          )(window, 'resize', e._handleScroll, {
                            passive: !0,
                          })),
                          e._handleScroll(null)
                      }))
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function() {
                    var e = this
                    n.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = b(function() {
                          ;(e.cancelOnNextTick = null), e._handleScroll(null)
                        })))
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    n.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick())
                  },
                },
                {
                  key: '_findScrollableAncestor',
                  value: function() {
                    var t = this.props,
                      n = t.horizontal,
                      o = t.scrollableAncestor
                    if (o)
                      return (function(t) {
                        return 'window' === t ? e.window : t
                      })(o)
                    for (var r = this._ref; r.parentNode; ) {
                      if ((r = r.parentNode) === document.body) return window
                      var a = window.getComputedStyle(r),
                        l =
                          (n
                            ? a.getPropertyValue('overflow-x')
                            : a.getPropertyValue('overflow-y')) ||
                          a.getPropertyValue('overflow')
                      if ('auto' === l || 'scroll' === l) return r
                    }
                    return window
                  },
                },
                {
                  key: '_handleScroll',
                  value: function(e) {
                    if (this._ref) {
                      var t = this._getBounds(),
                        n = (function(e) {
                          return e.viewportBottom - e.viewportTop == 0
                            ? y
                            : e.viewportTop <= e.waypointTop &&
                              e.waypointTop <= e.viewportBottom
                            ? m
                            : e.viewportTop <= e.waypointBottom &&
                              e.waypointBottom <= e.viewportBottom
                            ? m
                            : e.waypointTop <= e.viewportTop &&
                              e.viewportBottom <= e.waypointBottom
                            ? m
                            : e.viewportBottom < e.waypointTop
                            ? d
                            : e.waypointTop < e.viewportTop
                            ? f
                            : y
                        })(t),
                        o = this._previousPosition,
                        r = this.props,
                        a = (r.debug, r.onPositionChange),
                        l = r.onEnter,
                        i = r.onLeave,
                        s = r.fireOnRapidScroll
                      if (((this._previousPosition = n), o !== n)) {
                        var c = {
                          currentPosition: n,
                          previousPosition: o,
                          event: e,
                          waypointTop: t.waypointTop,
                          waypointBottom: t.waypointBottom,
                          viewportTop: t.viewportTop,
                          viewportBottom: t.viewportBottom,
                        }
                        a.call(this, c),
                          n === m
                            ? l.call(this, c)
                            : o === m && i.call(this, c),
                          s &&
                            ((o === d && n === f) || (o === f && n === d)) &&
                            (l.call(this, {
                              currentPosition: m,
                              previousPosition: o,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }),
                            i.call(this, {
                              currentPosition: n,
                              previousPosition: m,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }))
                      }
                    }
                  },
                },
                {
                  key: '_getBounds',
                  value: function() {
                    var e,
                      t,
                      n = this.props,
                      o = n.horizontal,
                      r = (n.debug, this._ref.getBoundingClientRect()),
                      a = r.left,
                      l = r.top,
                      i = r.right,
                      s = r.bottom,
                      c = o ? a : l,
                      u = o ? i : s
                    this.scrollableAncestor === window
                      ? ((e = o ? window.innerWidth : window.innerHeight),
                        (t = 0))
                      : ((e = o
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (t = o
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top))
                    var f = this.props,
                      m = f.bottomOffset
                    return {
                      waypointTop: c,
                      waypointBottom: u,
                      viewportTop: t + p(f.topOffset, e),
                      viewportBottom: t + e - p(m, e),
                    }
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props.children
                    return t
                      ? h(t) || Object(l.isForwardRef)(t)
                        ? a.a.cloneElement(t, {
                            ref: function(n) {
                              e.refElement(n),
                                t.ref &&
                                  ('function' == typeof t.ref
                                    ? t.ref(n)
                                    : (t.ref.current = n))
                            },
                          })
                        : a.a.cloneElement(t, { innerRef: this.refElement })
                      : a.a.createElement('span', {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        })
                  },
                },
              ]) && i(r.prototype, v),
              E && i(r, E),
              n
            )
          })(a.a.PureComponent)
        ;(N.above = f),
          (N.below = d),
          (N.inside = m),
          (N.invisible = y),
          (N.getWindow = function() {
            if ('undefined' != typeof window) return window
          }),
          (N.defaultProps = g),
          (N.displayName = 'Waypoint')
      }.call(this, n('yLpj')))
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-51347d53cf6929b49347.js.map
