/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.22 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/**
 * Copyright (C) 2012 Martijn van de Rijdt for JavaRosa functions added to XPathJS to make XPathJS_javarosa
 *
 * Original copyright notice for XPathJS:
 *
 * Copyright (C) 2011 Andrej Pavlovic for XPathJS
 *
 * This file is part of XPathJS.
 *
 * XPathJS is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * XPathJS is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * XML merging class
 * Merge multiple XML sources
 * 
 * @package     MergeXML
 * @author      Vallo Reima
 * @copyright   (C)2014
 */
/**
 * Simple XPath Compatibility Plugin for jQuery 1.1
 * By John Resig
 * Dual licensed under MIT and GPL.
 * Original plugin code here: http://code.google.com/p/jqueryjs/source/browse/trunk/plugins/xpath/jquery.xpath.js?spec=svn3167&r=3167
 * some changes made by Martijn van de Rijdt (not replacing $.find(), removed context, dot escaping)
 *
 * @param  {string} selector [description]
 * @return {?(Array.<(Element|null)>|Element)}          [description]
 */
/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.9
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
/*
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
 *
 * $Date: 2012-14-05 (Mon, 14 May 2012) $
 * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
 *
 * $Date: 2012-06-06 (Wed, 06 June 2012) $
 * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
 *
 * $Date: 2012-05-06 (Fri, 05 June 2012) $
 * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.
 *
 * $Date: 2012-29-07 (Sun, 29 July 2012) $
 * $version: 1.3.2	- Added fallbackToMouseEvents option to NOT capture mouse events on non touch devices.
 * 			- Added "all" fingers value to the fingers property, so any combination of fingers triggers the swipe, allowing event handlers to check the finger count
 *
 * $Date: 2012-09-08 (Thurs, 9 Aug 2012) $
 * $version: 1.3.3	- Code tidy prep for minefied version
 *
 * $Date: 2012-04-10 (wed, 4 Oct 2012) $
 * $version: 1.4.0	- Added pinch support, pinchIn and pinchOut
 *
 * $Date: 2012-11-10 (Thurs, 11 Oct 2012) $
 * $version: 1.5.0	- Added excludedElements, a jquery selector that specifies child elements that do NOT trigger swipes. By default, this is one select that removes all form, input select, button and anchor elements.
 *
 * $Date: 2012-22-10 (Mon, 22 Oct 2012) $
 * $version: 1.5.1	- Fixed bug with jQuery 1.8 and trailing comma in excludedElements
 *					- Fixed bug with IE and eventPreventDefault()
 * $Date: 2013-01-12 (Fri, 12 Jan 2013) $
 * $version: 1.6.0	- Fixed bugs with pinching, mainly when both pinch and swipe enabled, as well as adding time threshold for multifinger gestures, so releasing one finger beofre the other doesnt trigger as single finger gesture.
 *					- made the demo site all static local HTML pages so they can be run locally by a developer
 *					- added jsDoc comments and added documentation for the plugin	
 *					- code tidy
 *					- added triggerOnTouchLeave property that will end the event when the user swipes off the element.
 * $Date: 2013-03-23 (Sat, 23 Mar 2013) $
 * $version: 1.6.1	- Added support for ie8 touch events
 * $version: 1.6.2	- Added support for events binding with on / off / bind in jQ for all callback names.
 *                   - Deprecated the 'click' handler in favour of tap.
 *                   - added cancelThreshold property
 *                   - added option method to update init options at runtime
 * $version 1.6.3    - added doubletap, longtap events and longTapThreshold, doubleTapThreshold property
 *
 * $Date: 2013-04-04 (Thurs, 04 April 2013) $
 * $version 1.6.4    - Fixed bug with cancelThreshold introduced in 1.6.3, where swipe status no longer fired start event, and stopped once swiping back.
 *
 * $Date: 2013-08-24 (Sat, 24 Aug 2013) $
 * $version 1.6.5    - Merged a few pull requests fixing various bugs, added AMD support.
 *
 * $Date: 2014-06-04 (Wed, 04 June 2014) $
 * $version 1.6.6 	- Merge of pull requests.
 *    				- IE10 touch support 
 *    				- Only prevent default event handling on valid swipe
 *    				- Separate license/changelog comment
 *    				- Detect if the swipe is valid at the end of the touch event.
 *    				- Pass fingerdata to event handlers. 
 *    				- Add 'hold' gesture 
 *    				- Be more tolerant about the tap distance
 *    				- Typos and minor fixes
 *
 * $Date: 2015-22-01 (Thurs, 22 Jan 2015) $
 * $version 1.6.7    - Added patch from https://github.com/mattbryson/TouchSwipe-Jquery-Plugin/issues/206 to fix memory leak
 *
 * $Date: 2015-2-2 (Mon, 2 Feb 2015) $
 * $version 1.6.8    - Added preventDefaultEvents option to proxy events regardless.
 *					- Fixed issue with swipe and pinch not triggering at the same time
 *
 * $Date: 2015-9-6 (Tues, 9 June 2015) $
 * $version 1.6.9    - Added PR from jdalton/hybrid to fix pointer events
 *					- Added scrolling demo
 *					- Added version property to plugin
 *
 *
 */
/**
 * @preserve Copyright 2012 Martijn van de Rijdt & Modi Labs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*!
	Papa Parse
	v4.1.2
	https://github.com/mholt/PapaParse
*/
/**
 * @preserve Copyright 2012 Silvio Moreto, Martijn van de Rijdt & Modilabs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @preserve Copyright 2012 Martijn van de Rijdt & Modilabs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @preserve Copyright 2013 Martijn van de Rijdt & Modi Labs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
/**
 * @preserve Copyright 2014 Martijn van de Rijdt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
/*!
 * Timepicker Component for Twitter Bootstrap
 *
 * Copyright 2013 Joris de Wit
 *
 * Contributors https://github.com/jdewit/bootstrap-timepicker/graphs/contributors
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/* =========================================================
 * bootstrap-slider.js v3.0.0
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
function getFormData(t) {
    var e = new FormData;
    return e.append('form_data', t),
    e.append('form_code', questionnaire_code),
    addAttachmentData(e)
}
function addAttachmentData(t) {
    var e = [
    ],
    n = $('form.or input[type="file"]');
    return n ? (n.each(function () {
        var n = this.files[0];
        if (n && t.append(n.name, n), submissionUpdateUrl) {
            var i = $(this) .attr('data-loaded-file-name');
            i && e.push(i)
        }
    }), e.length > 0 && t.append('retain_files', e), t)  : t
}
function saveXformSubmission(t) {
    if (form.validate(), form.isValid()) {
        DW.loading();
        var e = form.getDataStr(),
        n = submissionUpdateUrl || submissionCreateUrl,
        i = function (e, n) {
            DW.trackEvent('advanced-qns-submission', 'advanced-qns-submission-success'),
            'function' == typeof t ? t()  : window.location.reload()
        },
        o = function () {
            DW.trackEvent('advanced-qns-submission', 'advanced-qns-submission-failure')
        },
        r = getFormData(e);
        $.ajax({
            url: n,
            type: 'POST',
            data: r,
            processData: !1,
            contentType: !1,
            success: i,
            error: o
        })
    }
}
var requirejs,
require,
define;
!function (global) {
    function isFunction(t) {
        return '[object Function]' === ostring.call(t)
    }
    function isArray(t) {
        return '[object Array]' === ostring.call(t)
    }
    function each(t, e) {
        if (t) {
            var n;
            for (n = 0; n < t.length && (!t[n] || !e(t[n], n, t)); n += 1);
        }
    }
    function eachReverse(t, e) {
        if (t) {
            var n;
            for (n = t.length - 1; n > - 1 && (!t[n] || !e(t[n], n, t)); n -= 1);
        }
    }
    function hasProp(t, e) {
        return hasOwn.call(t, e)
    }
    function getOwn(t, e) {
        return hasProp(t, e) && t[e]
    }
    function eachProp(t, e) {
        var n;
        for (n in t)
        if (hasProp(t, n) && e(t[n], n)) break
    }
    function mixin(t, e, n, i) {
        return e && eachProp(e, function (e, o) {
            (n || !hasProp(t, o)) && (!i || 'object' != typeof e || !e || isArray(e) || isFunction(e) || e instanceof RegExp ? t[o] = e : (t[o] || (t[o] = {
            }), mixin(t[o], e, n, i)))
        }),
        t
    }
    function bind(t, e) {
        return function () {
            return e.apply(t, arguments)
        }
    }
    function scripts() {
        return document.getElementsByTagName('script')
    }
    function defaultOnError(t) {
        throw t
    }
    function getGlobal(t) {
        if (!t) return t;
        var e = global;
        return each(t.split('.'), function (t) {
            e = e[t]
        }),
        e
    }
    function makeError(t, e, n, i) {
        var o = new Error(e + '\nhttp://requirejs.org/docs/errors.html#' + t);
        return o.requireType = t,
        o.requireModules = i,
        n && (o.originalError = n),
        o
    }
    function newContext(t) {
        function e(t) {
            var e,
            n;
            for (e = 0; e < t.length; e++)
            if (n = t[e], '.' === n) t.splice(e, 1),
            e -= 1;
             else if ('..' === n) {
                if (0 === e || 1 === e && '..' === t[2] || '..' === t[e - 1]) continue;
                e > 0 && (t.splice(e - 1, 2), e -= 2)
            }
        }
        function n(t, n, i) {
            var o,
            r,
            s,
            a,
            l,
            u,
            h,
            c,
            d,
            p,
            f,
            m,
            g = n && n.split('/'),
            v = k.map,
            y = v && v['*'];
            if (t && (t = t.split('/'), h = t.length - 1, k.nodeIdCompat && jsSuffixRegExp.test(t[h]) && (t[h] = t[h].replace(jsSuffixRegExp, '')), '.' === t[0].charAt(0) && g && (m = g.slice(0, g.length - 1), t = m.concat(t)), e(t), t = t.join('/')), i && v && (g || y)) {
                s = t.split('/');
                t: for (a = s.length; a > 0; a -= 1) {
                    if (u = s.slice(0, a) .join('/'), g)
                    for (l = g.length; l > 0; l -= 1)
                    if (r = getOwn(v, g.slice(0, l) .join('/')), r && (r = getOwn(r, u))) {
                        c = r,
                        d = a;
                        break t
                    }
                    !p && y && getOwn(y, u) && (p = getOwn(y, u), f = a)
                }
                !c && p && (c = p, d = f),
                c && (s.splice(0, d, c), t = s.join('/'))
            }
            return o = getOwn(k.pkgs, t),
            o ? o : t
        }
        function i(t) {
            isBrowser && each(scripts(), function (e) {
                return e.getAttribute('data-requiremodule') === t && e.getAttribute('data-requirecontext') === b.contextName ? (e.parentNode.removeChild(e), !0)  : void 0
            })
        }
        function o(t) {
            var e = getOwn(k.paths, t);
            return e && isArray(e) && e.length > 1 ? (e.shift(), b.require.undef(t), b.makeRequire(null, {
                skipMap: !0
            }) ([t]), !0)  : void 0
        }
        function r(t) {
            var e,
            n = t ? t.indexOf('!')  : - 1;
            return n > - 1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)),
            [
                e,
                t
            ]
        }
        function s(t, e, i, o) {
            var s,
            a,
            l,
            u,
            h = null,
            c = e ? e.name : null,
            d = t,
            p = !0,
            f = '';
            return t || (p = !1, t = '_@r' + (M += 1)),
            u = r(t),
            h = u[0],
            t = u[1],
            h && (h = n(h, c, o), a = getOwn(S, h)),
            t && (h ? f = a && a.normalize ? a.normalize(t, function (t) {
                return n(t, c, o)
            })  : - 1 === t.indexOf('!') ? n(t, c, o)  : t : (f = n(t, c, o), u = r(f), h = u[0], f = u[1], i = !0, s = b.nameToUrl(f))),
            l = !h || a || i ? '' : '_unnormalized' + (N += 1),
            {
                prefix: h,
                name: f,
                parentMap: e,
                unnormalized: !!l,
                url: s,
                originalName: d,
                isDefine: p,
                id: (h ? h + '!' + f : f) + l
            }
        }
        function a(t) {
            var e = t.id,
            n = getOwn(D, e);
            return n || (n = D[e] = new b.Module(t)),
            n
        }
        function l(t, e, n) {
            var i = t.id,
            o = getOwn(D, i);
            !hasProp(S, i) || o && !o.defineEmitComplete ? (o = a(t), o.error && 'error' === e ? n(o.error)  : o.on(e, n))  : 'defined' === e && n(S[i])
        }
        function u(t, e) {
            var n = t.requireModules,
            i = !1;
            e ? e(t)  : (each(n, function (e) {
                var n = getOwn(D, e);
                n && (n.error = t, n.events.error && (i = !0, n.emit('error', t)))
            }), i || req.onError(t))
        }
        function h() {
            globalDefQueue.length && (each(globalDefQueue, function (t) {
                var e = t[0];
                'string' == typeof e && (b.defQueueMap[e] = !0),
                P.push(t)
            }), globalDefQueue = [
            ])
        }
        function c(t) {
            delete D[t],
            delete E[t]
        }
        function d(t, e, n) {
            var i = t.map.id;
            t.error ? t.emit('error', t.error)  : (e[i] = !0, each(t.depMaps, function (i, o) {
                var r = i.id,
                s = getOwn(D, r);
                !s || t.depMatched[o] || n[r] || (getOwn(e, r) ? (t.defineDep(o, S[r]), t.check())  : d(s, e, n))
            }), n[i] = !0)
        }
        function p() {
            var t,
            e,
            n = 1000 * k.waitSeconds,
            r = n && b.startTime + n < (new Date) .getTime(),
            s = [
            ],
            a = [
            ],
            l = !1,
            h = !0;
            if (!y) {
                if (y = !0, eachProp(E, function (t) {
                    var n = t.map,
                    u = n.id;
                    if (t.enabled && (n.isDefine || a.push(t), !t.error))
                    if (!t.inited && r) o(u) ? (e = !0, l = !0)  : (s.push(u), i(u));
                     else if (!t.inited && t.fetched && n.isDefine && (l = !0, !n.prefix)) return h = !1
                }), r && s.length) return t = makeError('timeout', 'Load timeout for modules: ' + s, null, s),
                t.contextName = b.contextName,
                u(t);
                h && each(a, function (t) {
                    d(t, {
                    }, {
                    })
                }),
                r && !e || !l || !isBrowser && !isWebWorker || x || (x = setTimeout(function () {
                    x = 0,
                    p()
                }, 50)),
                y = !1
            }
        }
        function f(t) {
            hasProp(S, t[0]) || a(s(t[0], null, !0)) .init(t[1], t[2])
        }
        function m(t, e, n, i) {
            t.detachEvent && !isOpera ? i && t.detachEvent(i, e)  : t.removeEventListener(n, e, !1)
        }
        function g(t) {
            var e = t.currentTarget || t.srcElement;
            return m(e, b.onScriptLoad, 'load', 'onreadystatechange'),
            m(e, b.onScriptError, 'error'),
            {
                node: e,
                id: e && e.getAttribute('data-requiremodule')
            }
        }
        function v() {
            var t;
            for (h(); P.length; ) {
                if (t = P.shift(), null === t[0]) return u(makeError('mismatch', 'Mismatched anonymous define() module: ' + t[t.length - 1]));
                f(t)
            }
            b.defQueueMap = {
            }
        }
        var y,
        _,
        b,
        w,
        x,
        k = {
            waitSeconds: 7,
            baseUrl: './',
            paths: {
            },
            bundles: {
            },
            pkgs: {
            },
            shim: {
            },
            config: {
            }
        },
        D = {
        },
        E = {
        },
        T = {
        },
        P = [
        ],
        S = {
        },
        C = {
        },
        L = {
        },
        M = 1,
        N = 1;
        return w = {
            require: function (t) {
                return t.require ? t.require : t.require = b.makeRequire(t.map)
            },
            exports: function (t) {
                return t.usingExports = !0,
                t.map.isDefine ? t.exports ? S[t.map.id] = t.exports : t.exports = S[t.map.id] = {
                }
                 : void 0
            },
            module: function (t) {
                return t.module ? t.module : t.module = {
                    id: t.map.id,
                    uri: t.map.url,
                    config: function () {
                        return getOwn(k.config, t.map.id) || {
                        }
                    },
                    exports: t.exports || (t.exports = {
                    })
                }
            }
        },
        _ = function (t) {
            this.events = getOwn(T, t.id) || {
            },
            this.map = t,
            this.shim = getOwn(k.shim, t.id),
            this.depExports = [
            ],
            this.depMaps = [
            ],
            this.depMatched = [
            ],
            this.pluginMaps = {
            },
            this.depCount = 0
        },
        _.prototype = {
            init: function (t, e, n, i) {
                i = i || {
                },
                this.inited || (this.factory = e, n ? this.on('error', n)  : this.events.error && (n = bind(this, function (t) {
                    this.emit('error', t)
                })), this.depMaps = t && t.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable()  : this.check())
            },
            defineDep: function (t, e) {
                this.depMatched[t] || (this.depMatched[t] = !0, this.depCount -= 1, this.depExports[t] = e)
            },
            fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0,
                    b.startTime = (new Date) .getTime();
                    var t = this.map;
                    return this.shim ? void b.makeRequire(this.map, {
                        enableBuildCallback: !0
                    }) (this.shim.deps || [], bind(this, function () {
                        return t.prefix ? this.callPlugin()  : this.load()
                    }))  : t.prefix ? this.callPlugin()  : this.load()
                }
            },
            load: function () {
                var t = this.map.url;
                C[t] || (C[t] = !0, b.load(this.map.id, t))
            },
            check: function () {
                if (this.enabled && !this.enabling) {
                    var t,
                    e,
                    n = this.map.id,
                    i = this.depExports,
                    o = this.exports,
                    r = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit('error', this.error);
                         else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(r)) {
                                    try {
                                        o = b.execCb(n, r, i, o)
                                    } catch (s) {
                                        t = s
                                    }
                                    if (this.map.isDefine && void 0 === o && (e = this.module, e ? o = e.exports : this.usingExports && (o = this.exports)), t) {
                                        if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) return t.requireMap = this.map,
                                        t.requireModules = this.map.isDefine ? [
                                            this.map.id
                                        ] : null,
                                        t.requireType = this.map.isDefine ? 'define' : 'require',
                                        u(this.error = t);
                                        'undefined' != typeof console && console.error ? console.error(t)  : req.onError(t)
                                    }
                                } else o = r;
                                if (this.exports = o, this.map.isDefine && !this.ignore && (S[n] = o, req.onResourceLoad)) {
                                    var a = [
                                    ];
                                    each(this.depMaps, function (t) {
                                        a.push(t.normalizedMap || t)
                                    }),
                                    req.onResourceLoad(b, this.map, a)
                                }
                                c(n),
                                this.defined = !0
                            }
                            this.defining = !1,
                            this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit('defined', this.exports), this.defineEmitComplete = !0)
                        }
                    } else hasProp(b.defQueueMap, n) || this.fetch()
                }
            },
            callPlugin: function () {
                var t = this.map,
                e = t.id,
                i = s(t.prefix);
                this.depMaps.push(i),
                l(i, 'defined', bind(this, function (i) {
                    var o,
                    r,
                    h,
                    d = getOwn(L, this.map.id),
                    p = this.map.name,
                    f = this.map.parentMap ? this.map.parentMap.name : null,
                    m = b.makeRequire(t.parentMap, {
                        enableBuildCallback: !0
                    });
                    return this.map.unnormalized ? (i.normalize && (p = i.normalize(p, function (t) {
                        return n(t, f, !0)
                    }) || ''), r = s(t.prefix + '!' + p, this.map.parentMap), l(r, 'defined', bind(this, function (t) {
                        this.map.normalizedMap = r,
                        this.init([], function () {
                            return t
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), h = getOwn(D, r.id), void (h && (this.depMaps.push(r), this.events.error && h.on('error', bind(this, function (t) {
                        this.emit('error', t)
                    })), h.enable())))  : d ? (this.map.url = b.nameToUrl(d), void this.load())  : (o = bind(this, function (t) {
                        this.init([], function () {
                            return t
                        }, null, {
                            enabled: !0
                        })
                    }), o.error = bind(this, function (t) {
                        this.inited = !0,
                        this.error = t,
                        t.requireModules = [
                            e
                        ],
                        eachProp(D, function (t) {
                            0 === t.map.id.indexOf(e + '_unnormalized') && c(t.map.id)
                        }),
                        u(t)
                    }), o.fromText = bind(this, function (n, i) {
                        var r = t.name,
                        l = s(r),
                        h = useInteractive;
                        i && (n = i),
                        h && (useInteractive = !1),
                        a(l),
                        hasProp(k.config, e) && (k.config[r] = k.config[e]);
                        try {
                            req.exec(n)
                        } catch (c) {
                            return u(makeError('fromtexteval', 'fromText eval for ' + e + ' failed: ' + c, c, [
                                e
                            ]))
                        }
                        h && (useInteractive = !0),
                        this.depMaps.push(l),
                        b.completeLoad(r),
                        m([r], o)
                    }), void i.load(t.name, m, o, k))
                })),
                b.enable(i, this),
                this.pluginMaps[i.id] = i
            },
            enable: function () {
                E[this.map.id] = this,
                this.enabled = !0,
                this.enabling = !0,
                each(this.depMaps, bind(this, function (t, e) {
                    var n,
                    i,
                    o;
                    if ('string' == typeof t) {
                        if (t = s(t, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[e] = t, o = getOwn(w, t.id)) return void (this.depExports[e] = o(this));
                        this.depCount += 1,
                        l(t, 'defined', bind(this, function (t) {
                            this.undefed || (this.defineDep(e, t), this.check())
                        })),
                        this.errback ? l(t, 'error', bind(this, this.errback))  : this.events.error && l(t, 'error', bind(this, function (t) {
                            this.emit('error', t)
                        }))
                    }
                    n = t.id,
                    i = D[n],
                    hasProp(w, n) || !i || i.enabled || b.enable(t, this)
                })),
                eachProp(this.pluginMaps, bind(this, function (t) {
                    var e = getOwn(D, t.id);
                    e && !e.enabled && b.enable(t, this)
                })),
                this.enabling = !1,
                this.check()
            },
            on: function (t, e) {
                var n = this.events[t];
                n || (n = this.events[t] = [
                ]),
                n.push(e)
            },
            emit: function (t, e) {
                each(this.events[t], function (t) {
                    t(e)
                }),
                'error' === t && delete this.events[t]
            }
        },
        b = {
            config: k,
            contextName: t,
            registry: D,
            defined: S,
            urlFetched: C,
            defQueue: P,
            defQueueMap: {
            },
            Module: _,
            makeModuleMap: s,
            nextTick: req.nextTick,
            onError: u,
            configure: function (t) {
                t.baseUrl && '/' !== t.baseUrl.charAt(t.baseUrl.length - 1) && (t.baseUrl += '/');
                var e = k.shim,
                n = {
                    paths: !0,
                    bundles: !0,
                    config: !0,
                    map: !0
                };
                eachProp(t, function (t, e) {
                    n[e] ? (k[e] || (k[e] = {
                    }), mixin(k[e], t, !0, !0))  : k[e] = t
                }),
                t.bundles && eachProp(t.bundles, function (t, e) {
                    each(t, function (t) {
                        t !== e && (L[t] = e)
                    })
                }),
                t.shim && (eachProp(t.shim, function (t, n) {
                    isArray(t) && (t = {
                        deps: t
                    }),
                    !t.exports && !t.init || t.exportsFn || (t.exportsFn = b.makeShimExports(t)),
                    e[n] = t
                }), k.shim = e),
                t.packages && each(t.packages, function (t) {
                    var e,
                    n;
                    t = 'string' == typeof t ? {
                        name: t
                    }
                     : t,
                    n = t.name,
                    e = t.location,
                    e && (k.paths[n] = t.location),
                    k.pkgs[n] = t.name + '/' + (t.main || 'main') .replace(currDirRegExp, '') .replace(jsSuffixRegExp, '')
                }),
                eachProp(D, function (t, e) {
                    t.inited || t.map.unnormalized || (t.map = s(e, null, !0))
                }),
                (t.deps || t.callback) && b.require(t.deps || [], t.callback)
            },
            makeShimExports: function (t) {
                function e() {
                    var e;
                    return t.init && (e = t.init.apply(global, arguments)),
                    e || t.exports && getGlobal(t.exports)
                }
                return e
            },
            makeRequire: function (e, o) {
                function r(n, i, l) {
                    var h,
                    c,
                    d;
                    return o.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0),
                    'string' == typeof n ? isFunction(i) ? u(makeError('requireargs', 'Invalid require call'), l)  : e && hasProp(w, n) ? w[n](D[e.id])  : req.get ? req.get(b, n, e, r)  : (c = s(n, e, !1, !0), h = c.id, hasProp(S, h) ? S[h] : u(makeError('notloaded', 'Module name "' + h + '" has not been loaded yet for context: ' + t + (e ? '' : '. Use require([])'))))  : (v(), b.nextTick(function () {
                        v(),
                        d = a(s(null, e)),
                        d.skipMap = o.skipMap,
                        d.init(n, i, l, {
                            enabled: !0
                        }),
                        p()
                    }), r)
                }
                return o = o || {
                },
                mixin(r, {
                    isBrowser: isBrowser,
                    toUrl: function (t) {
                        var i,
                        o = t.lastIndexOf('.'),
                        r = t.split('/') [0],
                        s = '.' === r || '..' === r;
                        return - 1 !== o && (!s || o > 1) && (i = t.substring(o, t.length), t = t.substring(0, o)),
                        b.nameToUrl(n(t, e && e.id, !0), i, !0)
                    },
                    defined: function (t) {
                        return hasProp(S, s(t, e, !1, !0) .id)
                    },
                    specified: function (t) {
                        return t = s(t, e, !1, !0) .id,
                        hasProp(S, t) || hasProp(D, t)
                    }
                }),
                e || (r.undef = function (t) {
                    h();
                    var n = s(t, e, !0),
                    o = getOwn(D, t);
                    o.undefed = !0,
                    i(t),
                    delete S[t],
                    delete C[n.url],
                    delete T[t],
                    eachReverse(P, function (e, n) {
                        e[0] === t && P.splice(n, 1)
                    }),
                    delete b.defQueueMap[t],
                    o && (o.events.defined && (T[t] = o.events), c(t))
                }),
                r
            },
            enable: function (t) {
                var e = getOwn(D, t.id);
                e && a(t) .enable()
            },
            completeLoad: function (t) {
                var e,
                n,
                i,
                r = getOwn(k.shim, t) || {
                },
                s = r.exports;
                for (h(); P.length; ) {
                    if (n = P.shift(), null === n[0]) {
                        if (n[0] = t, e) break;
                        e = !0
                    } else n[0] === t && (e = !0);
                    f(n)
                }
                if (b.defQueueMap = {
                }, i = getOwn(D, t), !e && !hasProp(S, t) && i && !i.inited) {
                    if (!(!k.enforceDefine || s && getGlobal(s))) return o(t) ? void 0 : u(makeError('nodefine', 'No define call for ' + t, null, [
                        t
                    ]));
                    f([t,
                    r.deps || [],
                    r.exportsFn])
                }
                p()
            },
            nameToUrl: function (t, e, n) {
                var i,
                o,
                r,
                s,
                a,
                l,
                u,
                h = getOwn(k.pkgs, t);
                if (h && (t = h), u = getOwn(L, t)) return b.nameToUrl(u, e, n);
                if (req.jsExtRegExp.test(t)) a = t + (e || '');
                 else {
                    for (i = k.paths, o = t.split('/'), r = o.length; r > 0; r -= 1)
                    if (s = o.slice(0, r) .join('/'), l = getOwn(i, s)) {
                        isArray(l) && (l = l[0]),
                        o.splice(0, r, l);
                        break
                    }
                    a = o.join('/'),
                    a += e || (/^data\:|\?/.test(a) || n ? '' : '.js'),
                    a = ('/' === a.charAt(0) || a.match(/^[\w\+\.\-]+:/) ? '' : k.baseUrl) + a
                }
                return k.urlArgs ? a + (( - 1 === a.indexOf('?') ? '?' : '&') + k.urlArgs)  : a
            },
            load: function (t, e) {
                req.load(b, t, e)
            },
            execCb: function (t, e, n, i) {
                return e.apply(i, n)
            },
            onScriptLoad: function (t) {
                if ('load' === t.type || readyRegExp.test((t.currentTarget || t.srcElement) .readyState)) {
                    interactiveScript = null;
                    var e = g(t);
                    b.completeLoad(e.id)
                }
            },
            onScriptError: function (t) {
                var e = g(t);
                if (!o(e.id)) {
                    var n = [
                    ];
                    return eachProp(D, function (t, i) {
                        0 !== i.indexOf('_@r') && each(t.depMaps, function (t) {
                            return t.id === e.id && n.push(i),
                            !0
                        })
                    }),
                    u(makeError('scripterror', 'Script error for "' + e.id + (n.length ? '", needed by: ' + n.join(', ')  : '"'), t, [
                        e.id
                    ]))
                }
            }
        },
        b.require = b.makeRequire(),
        b
    }
    function getInteractiveScript() {
        return interactiveScript && 'interactive' === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function (t) {
            return 'interactive' === t.readyState ? interactiveScript = t : void 0
        }), interactiveScript)
    }
    var req,
    s,
    head,
    baseElement,
    dataMain,
    src,
    interactiveScript,
    currentlyAddingScript,
    mainScript,
    subPath,
    version = '2.1.22',
    commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    ap = Array.prototype,
    isBrowser = !('undefined' == typeof window || 'undefined' == typeof navigator || !window.document),
    isWebWorker = !isBrowser && 'undefined' != typeof importScripts,
    readyRegExp = isBrowser && 'PLAYSTATION 3' === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
    defContextName = '_',
    isOpera = 'undefined' != typeof opera && '[object Opera]' === opera.toString(),
    contexts = {
    },
    cfg = {
    },
    globalDefQueue = [
    ],
    useInteractive = !1;
    if ('undefined' == typeof define) {
        if ('undefined' != typeof requirejs) {
            if (isFunction(requirejs)) return ;
            cfg = requirejs,
            requirejs = void 0
        }
        'undefined' == typeof require || isFunction(require) || (cfg = require, require = void 0),
        req = requirejs = function (t, e, n, i) {
            var o,
            r,
            s = defContextName;
            return isArray(t) || 'string' == typeof t || (r = t, isArray(e) ? (t = e, e = n, n = i)  : t = [
            ]),
            r && r.context && (s = r.context),
            o = getOwn(contexts, s),
            o || (o = contexts[s] = req.s.newContext(s)),
            r && o.configure(r),
            o.require(t, e, n)
        },
        req.config = function (t) {
            return req(t)
        },
        req.nextTick = 'undefined' != typeof setTimeout ? function (t) {
            setTimeout(t, 4)
        }
         : function (t) {
            t()
        },
        require || (require = req),
        req.version = version,
        req.jsExtRegExp = /^\/|:|\?|\.js$/,
        req.isBrowser = isBrowser,
        s = req.s = {
            contexts: contexts,
            newContext: newContext
        },
        req({
        }),
        each(['toUrl',
        'undef',
        'defined',
        'specified'], function (t) {
            req[t] = function () {
                var e = contexts[defContextName];
                return e.require[t].apply(e, arguments)
            }
        }),
        isBrowser && (head = s.head = document.getElementsByTagName('head') [0], baseElement = document.getElementsByTagName('base') [0], baseElement && (head = s.head = baseElement.parentNode)),
        req.onError = defaultOnError,
        req.createNode = function (t, e, n) {
            var i = t.xhtml ? document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script')  : document.createElement('script');
            return i.type = t.scriptType || 'text/javascript',
            i.charset = 'utf-8',
            i.async = !0,
            i
        },
        req.load = function (t, e, n) {
            var i,
            o = t && t.config || {
            };
            if (isBrowser) return i = req.createNode(o, e, n),
            o.onNodeCreated && o.onNodeCreated(i, o, e, n),
            i.setAttribute('data-requirecontext', t.contextName),
            i.setAttribute('data-requiremodule', e),
            !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString() .indexOf('[native code') < 0 || isOpera ? (i.addEventListener('load', t.onScriptLoad, !1), i.addEventListener('error', t.onScriptError, !1))  : (useInteractive = !0, i.attachEvent('onreadystatechange', t.onScriptLoad)),
            i.src = n,
            currentlyAddingScript = i,
            baseElement ? head.insertBefore(i, baseElement)  : head.appendChild(i),
            currentlyAddingScript = null,
            i;
            if (isWebWorker) try {
                importScripts(n),
                t.completeLoad(e)
            } catch (r) {
                t.onError(makeError('importscripts', 'importScripts failed for ' + e + ' at ' + n, r, [
                    e
                ]))
            }
        },
        isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function (t) {
            return head || (head = t.parentNode),
            dataMain = t.getAttribute('data-main'),
            dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split('/'), mainScript = src.pop(), subPath = src.length ? src.join('/') + '/' : './', cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ''), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript)  : [
                mainScript
            ], !0)  : void 0
        }),
        define = function (t, e, n) {
            var i,
            o;
            'string' != typeof t && (n = e, e = t, t = null),
            isArray(e) || (n = e, e = null),
            !e && isFunction(n) && (e = [
            ], n.length && (n.toString() .replace(commentRegExp, '') .replace(cjsRequireRegExp, function (t, n) {
                e.push(n)
            }), e = (1 === n.length ? [
                'require'
            ] : [
                'require',
                'exports',
                'module'
            ]) .concat(e))),
            useInteractive && (i = currentlyAddingScript || getInteractiveScript(), i && (t || (t = i.getAttribute('data-requiremodule')), o = contexts[i.getAttribute('data-requirecontext')])),
            o ? (o.defQueue.push([t,
            e,
            n]), o.defQueueMap[t] = !0)  : globalDefQueue.push([t,
            e,
            n])
        },
        define.amd = {
            jQuery: !0
        },
        req.exec = function (text) {
            return eval(text)
        },
        req(cfg)
    }
}(this),
define('bower-components/requirejs/require.js', function () {
}),
require.config({
    baseUrl: '../lib',
    paths: {
        'enketo-js': '../src/js',
        'enketo-widget': '../src/widget',
        'enketo-config': '../config.json',
        'require-config': '../require-config',
        text: 'text/text',
        xpath: 'xpath/build/enketo-xpathjs',
        'file-manager': '../src/js/file-manager',
        jquery: 'bower-components/jquery/dist/jquery',
        'jquery.xpath': 'jquery-xpath/jquery.xpath',
        'jquery.touchswipe': 'jquery-touchswipe/jquery.touchSwipe',
        leaflet: 'bower-components/leaflet/dist/leaflet',
        'bootstrap-slider': 'bootstrap-slider/js/bootstrap-slider',
        'merge-xml': 'bower-components/mergexml/mergexml',
        q: 'bower-components/q/q',
        support: '../src/js/support',
        papaparse: 'bower-components/papaparse/papaparse'
    },
    shim: {
        xpath: {
            exports: 'XPathJS'
        },
        'widget/date/bootstrap3-datepicker/js/bootstrap-datepicker': {
            deps: [
                'jquery'
            ],
            exports: 'jQuery.fn.datepicker'
        },
        'widget/time/bootstrap3-timepicker/js/bootstrap-timepicker': {
            deps: [
                'jquery'
            ],
            exports: 'jQuery.fn.timepicker'
        },
        leaflet: {
            exports: 'L'
        }
    }
}),
define('require-config', function () {
}),
define('enketo-js/support', [
], function () {
    var t = {
        inputtypes: {
        }
    },
    e = [
        'date',
        'datetime',
        'time'
    ];
    return e.forEach(function (e) {
        var n = document.createElement('input');
        n.setAttribute('type', e),
        t.inputtypes[e] = 'text' !== n.type
    }),
    'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ? (t.touch = !0, document.documentElement.classList += ' touch')  : t.touch = !1,
    t
}),
XPathJS = function () {
    var t,
    e,
    n,
    i,
    o,
    r,
    s,
    a,
    l,
    u,
    h,
    c,
    d,
    p,
    f,
    m,
    g,
    y = [
    ],
    _ = 'http://www.w3.org/XML/1998/namespace',
    b = 'http://www.w3.org/2000/xmlns/',
    x = 'http://www.w3.org/1999/xhtml',
    k = function (t) {
        return t.ownerDocument
    },
    D = function (t) {
        var e = [
        ],
        n = function (t, e) {
            var n,
            i,
            o = [
            ];
            for (i = 0; i < t.length; i++) n = t.item(i),
            !1 !== arrayIndexOf(n.nodeType, e) && o.push(n);
            return o
        };
        switch (t.nodeType) {
        case 1:
            e = n(t.childNodes, supportedChildNodeTypes = [
                1,
                3,
                4,
                7,
                8
            ]);
            break;
        case 9:
            e = n(t.childNodes, supportedChildNodeTypes = [
                1,
                7,
                8
            ]);
            break;
        case 2:
        case 3:
        case 4:
        case 7:
        case 8:
        case 13:
            break;
        default:
            throw new Error('Internal Error: nodeChildren - unsupported node type: ' + t.nodeType)
        }
        return e
    },
    E = function (t) {
        var e,
        n,
        i = [
        ];
        for (e = D(t), n = 0; n < e.length; n++) i.push(e[n]),
        i.push.apply(i, E(e[n]));
        return i
    },
    T = function (t) {
        var e;
        switch (t.nodeType) {
        case 1:
        case 3:
        case 4:
        case 7:
        case 8:
        case 9:
            return t.parentNode;
        case 2:
            return t.ownerElement ? t.ownerElement : e = nodeAttributeSearch(t.ownerDocument, !0, function (e, n) {
                return n === t ? !0 : void 0
            });
        case 13:
            return t.ownerElement;
        default:
            throw new Error('Internal Error: nodeParent - node type not supported: ' + t.type)
        }
    },
    P = function (t) {
        for (var e, n = [
        ]; e = T(t); ) n.push(e),
        t = e;
        return n
    },
    S = function (t) {
        return L(t, 'nextSibling')
    },
    C = function (t) {
        return L(t, 'previousSibling')
    },
    L = function (t, e) {
        for (var n, i = [
        ]; n = t[e]; ) {
            switch (n.nodeType) {
            case 1:
            case 3:
            case 4:
            case 7:
            case 8:
            case 9:
                i.push(n)
            }
            t = n
        }
        return i
    },
    M = function (t) {
        var e,
        n,
        i,
        o,
        r = [
        ];
        for (e = P(t), e.unshift(t), n = 0; n < e.length; n++)
        for (i = S(e[n]), o = 0; o < i.length; o++) r.push(i[o]),
        r.push.apply(r, E(i[o]));
        return r
    },
    N = function (t) {
        var e,
        n,
        i,
        o,
        r = [
        ];
        for (e = P(t), e.unshift(t), n = 0; n < e.length; n++)
        for (i = C(e[n]), o = 0; o < i.length; o++) r.push.apply(r, E(i[o]) .reverse()),
        r.push(i[o]);
        return r
    },
    k = function (t) {
        switch (t.nodeType) {
        case 9:
            return t;
        default:
            return t.ownerDocument
        }
    };
    return nodeAttribute = function (t) {
        var e,
        n = [
        ];
        if (1 === t.nodeType)
        for (e = 0; e < t.attributes.length; e++) t.attributes[e].specified && !1 === isNamespaceAttributeNode(t.attributes[e]) && n.push(t.attributes[e]);
        return n
    },
    nodeNamespace = function (t, e) {
        var n,
        i,
        o,
        r = e || [];
        if (1 === t.nodeType) {
            if (t.ownerDocument.documentElement === t && 'object' == typeof t.ownerDocument.namespaces)
            for (n = t.ownerDocument.namespaces.length - 1; n >= 0; n--) o = t.ownerDocument.namespaces.item(n),
            insertNamespaceIfNotDeclared.call(this, r, o.name, o.urn, t);
            for (n = t.attributes.length - 1; n >= 0; n--) t.attributes[n].specified && !1 !== (i = isNamespaceAttributeNode(t.attributes[n])) && (1 !== i.length ? insertNamespaceIfNotDeclared.call(this, r, i[1], t.attributes[n].nodeValue, t)  : insertNamespaceIfNotDeclared.call(this, r, '', t.attributes[n].nodeValue, t));
            if (nodeNamespace.call(this, t.parentNode, r), void 0 === e && (insertNamespaceIfNotDeclared.call(this, r, 'xml', _, t), r[0] && '' === r[0].prefix && '' === r[0].namespaceURI && r.shift()), void 0 === e)
            for (n = 0; n < r.length; n++) r[n].ownerElement !== t && (r[n] = createNamespaceNode(r[n].prefix, r[n].nodeValue, t))
        }
        return r
    },
    insertNamespaceIfNotDeclared = function (t, e, n, i) {
        var o,
        r;
        for (this.opts['case-sensitive'] || (e = e.toLowerCase()), o = 0; o < t.length; o++)
        if (t[o].prefix === e) return !1;
        return r = createNamespaceNode(e, n, i),
        '' === e && null !== n ? t.unshift(r)  : t.push(r),
        !0
    },
    isNamespaceAttributeNode = function (t) {
        var e = t.nodeName.split(':');
        return 'xmlns' === e[0] ? e : !1
    },
    nodeIdAttribute = function (t, e) {
        var n,
        i,
        o,
        r,
        s,
        a;
        if (1 === t.nodeType)
        for (o = e ? [
            e
        ] : nodeAttribute(t), r = nodeNamespace.call(this, t), n = 0; n < o.length; n++) {
            for (a = o[n].nodeName.split(':'), 1 === a.length && (a[1] = a[0], a[0] = ''), s = null, i = 0; i < r.length; i++)
            if (r[i].prefix === a[0]) {
                s = r[i].namespaceURI;
                break
            }
            if (null === s && (s = ''), this.opts['unique-ids'][s] === a[1]) return o[n]
        }
        return null
    },
    nodeAttributeSearch = function (t, e, n) {
        var i,
        o,
        r,
        s,
        a = [
        ];
        for (r = t.getElementsByTagName('*'), i = 0; i < r.length; i++)
        if (s = r.item(i), 1 == s.nodeType)
        for (o = 0; o < s.attributes.length; o++)
        if (s.attributes[o].specified && n(s, s.attributes[o]) === !0) {
            if (e) return s;
            a.push(s);
            break
        }
        return e ? null : a
    },
    nodeExpandedName = function (t) {
        var e,
        n,
        i,
        o;
        switch (t.nodeType) {
        case 1:
            for ('undefined' != typeof t.scopeName ? o = {
                prefix: 'HTML' == t.scopeName ? '' : t.scopeName,
                name: t.nodeName
            }
             : (e = t.nodeName.split(':'), o = 1 == e.length ? {
                prefix: '',
                name: e[0]
            }
             : {
                prefix: e[0],
                name: e[1]
            }), this.opts['case-sensitive'] || (o.prefix = o.prefix.toLowerCase(), o.name = o.name.toLowerCase()), n = nodeNamespace.call(this, t), i = 0; i < n.length; i++)
            if (n[i].prefix === o.prefix) return o.ns = n[i].namespaceURI,
            o;
            if ('' === o.prefix) return o.ns = null,
            o;
            throw new Error('Internal Error: nodeExpandedName - Failed to expand namespace prefix "' + o.prefix + '" on element: ' + t.nodeName);
        case 2:
            if (e = t.nodeName.split(':'), 1 == e.length) return {
                prefix: '',
                ns: null,
                name: e[0]
            };
            for (o = {
                prefix: e[0],
                name: e[1]
            }, this.opts['case-sensitive'] || (o.prefix = o.prefix.toLowerCase(), o.name = o.name.toLowerCase()), n = nodeNamespace.call(this, T(t)), i = 0; i < n.length; i++)
            if (n[i].prefix === o.prefix) return o.ns = n[i].namespaceURI,
            o;
            throw new Error('Internal Error: nodeExpandedName - Failed to expand namespace prefix "' + o.prefix + '" on attribute: ' + t.nodeName);
        case 13:
            return {
                prefix: null,
                ns: null,
                name: this.opts['case-sensitive'] ? t.prefix.toLowerCase()  : t.prefix
            };
        case 7:
            return {
                prefix: null,
                ns: null,
                name: this.opts['case-sensitive'] ? t.target.toLowerCase()  : t.target
            };
        default:
            return !1
        }
    },
    nodeStringValue = function (t) {
        var e,
        n,
        i = '';
        switch (t.nodeType) {
        case 9:
        case 1:
            for (n = a(new h(t, 1, 1, {
            }, {
            }, {
            }), {
                type: 'step',
                args: [
                    'descendant',
                    {
                        type: 'nodeType',
                        args: [
                            'text',
                            [
                            ]
                        ]
                    }
                ]
            }), n.sortDocumentOrder(), e = 0; e < n.value.length; e++) i += n.value[e].data;
            return i;
        case 2:
            return t.nodeValue;
        case 13:
            return t.namespaceURI;
        case 7:
        case 8:
        case 3:
        case 4:
            return t.data;
        default:
            throw new Error('Internal Error: nodeStringValue does not support node type: ' + t.nodeType)
        }
    },
    createError = function (t, e, n) {
        var i = new Error(n);
        return i.name = e,
        i.code = t,
        i
    },
    arrayIndexOf = function (t, e) {
        for (var n = e.length; n--; )
        if (e[n] === t) return n;
        return !1
    },
    compareOperator = function (t, e, n, i) {
        var o,
        r,
        s,
        a,
        l;
        if (t instanceof m)
        if (e instanceof m) {
            for (a = e.stringValues(), s = t.stringValues(), o = 0; o < s.length; o++)
            for (r = 0; r < a.length; r++)
            if (l = compareOperator(s[o], a[r], n, i), l.toBoolean()) return l
        } else if (e instanceof f) {
            for (s = t.stringValues(), o = 0; o < s.length; o++)
            if (l = compareOperator(new f(s[o].toNumber()), e, n, i), l.toBoolean()) return l
        } else if (e instanceof DateType || e instanceof p && e.isDateString()) {
            for (e instanceof p && (e = new DateType(e)), s = t.stringValues(), o = 0; o < s.length; o++)
            if (l = compareOperator(new DateType(s[o].toDate()), e, n, i), l.toBoolean()) return l
        } else {
            if (!(e instanceof p)) return compareOperator(new d(t.toBoolean()), e, n, i);
            for (s = t.stringValues(), o = 0; o < s.length; o++)
            if (l = compareOperator(s[o], e, n, i), l.toBoolean()) return l
        } else if (e instanceof m)
        if (t instanceof f) {
            for (a = e.stringValues(), o = 0; o < a.length; o++)
            if (l = compareOperator(t, new f(a[o].toNumber()), n, i), l.toBoolean()) return l
        } else if (t instanceof DateType || t instanceof p && t.isDateString()) {
            for (t instanceof p && (t = new DateType(t)), a = e.stringValues(), o = 0; o < a.length; o++)
            if (l = compareOperator(t, new DateType(a[o].toDate()), n, i), l.toBoolean()) return l
        } else {
            if (!(t instanceof p)) return compareOperator(t, new d(e.toBoolean()), n, i);
            for (a = e.stringValues(), o = 0; o < a.length; o++)
            if (l = compareOperator(t, a[o], n, i), l.toBoolean()) return l
        } else switch (n) {
        case '=':
        case '!=':
            return new d(t instanceof d || e instanceof d ? i(t.toBoolean(), e.toBoolean())  : t instanceof f || e instanceof f ? i(t.toNumber(), e.toNumber())  : i(t.toString(), e.toString()));
        default:
            return new d(i(t.toNumber(), e.toNumber()))
        }
        return new d(!1)
    },
    getComparableNode = function (t) {
        switch (t.nodeType) {
        case 2:
        case 3:
        case 4:
        case 7:
        case 8:
            return T(t);
        case 1:
        case 9:
            return t;
        case 13:
        default:
            throw new Error('Internal Error: getComparableNode - Node type not supported: ' + t.nodeType)
        }
    },
    compareDocumentPosition = function (t, e) {
        var n,
        i,
        o;
        if (13 == t.nodeType && 13 == e.nodeType && t.ownerElement == e.ownerElement) {
            if (t === e) return 0;
            for (i = nodeNamespace.call(g, t.ownerElement), o = 0; o < i.length; o++) {
                if (i[o] === t) {
                    n = 4;
                    break
                }
                if (i[o] === e) {
                    n = 2;
                    break
                }
            }
        } else 13 == t.nodeType && (t = t.ownerElement),
        13 == e.nodeType && (e = e.ownerElement),
        n = compareDocumentPositionNoNamespace(t, e);
        return n
    },
    compareDocumentPositionNoNamespace = function (t, e) {
        var n,
        i,
        o,
        r,
        s,
        a = function (t, e, n, i, o, r, s, a, l) {
            return 0 === o || (o & r) === r ? a + r : (o & s) === s ? l : o
        };
        if (t.compareDocumentPosition) return t.compareDocumentPosition(e);
        if (t === e) return 0;
        if (n = getComparableNode(t), i = getComparableNode(e), 9 === n.nodeType)
        if (9 === i.nodeType) {
            if (n !== i) return 1;
            o = 0
        } else {
            if (n !== i.ownerDocument) return 1;
            o = 20
        } else if (9 === i.nodeType) {
            if (i !== n.ownerDocument) return 1;
            o = 10
        } else {
            if (n.ownerDocument !== i.ownerDocument) return 1;
            if (!n.contains || 'undefined' == typeof n.sourceIndex || !i.contains || 'undefined' == typeof i.sourceIndex) throw new Error('Cannot compare elements. Neither "compareDocumentPosition" nor "contains" available.');
            o = (n != i && n.contains(i) && 16) + (n != i && i.contains(n) && 8) + (n.sourceIndex >= 0 && i.sourceIndex >= 0 ? (n.sourceIndex < i.sourceIndex && 4) + (n.sourceIndex > i.sourceIndex && 2)  : 1) + 0
        }
        if (t === n && e === i) return o;
        if (t === n) return a(t, n, e, i, o, 16, 8, 4, 2);
        if (e === i) return a(e, i, t, n, o, 8, 16, 2, 4);
        if (16 === (16 & o)) return 4;
        if (8 === (8 & o)) return 2;
        if (0 === o) {
            for (r = 0; r < n.attributes.length; r++)
            if (s = n.attributes[r], s.specified) {
                if (s === e) return 2;
                if (s === t) return 4
            }
            throw new Error('Internal Error: compareDocumentPosition failed to sort attributes.')
        }
        return o
    },
    nodeSupported = function (t) {
        if (!t) throw createError(9, 'NOT_SUPPORTED_ERR', 'Context node was not supplied.');
        if (9 != t.nodeType && 1 != t.nodeType && 2 != t.nodeType && 3 != t.nodeType && 4 != t.nodeType && 8 != t.nodeType && 7 != t.nodeType && 13 != t.nodeType) throw createError(9, 'NOT_SUPPORTED_ERR', 'The supplied node type is not supported. (nodeType: ' + t.nodeType + ')');
        if (2 == t.nodeType && !t.specified) throw createError(9, 'NOT_SUPPORTED_ERR', 'The supplied node is a non-specified attribute node. Only specified attribute nodes are supported.')
    },
    createNamespaceNode = function (t, e, n) {
        var i,
        o;
        for (i = 0; i < y.length; i++)
        if (o = y[i], o.prefix === t && o.nodeValue === e && o.ownerElement === n) return o;
        return o = new r(t, e, n),
        y.push(o),
        o
    },
    c = function (t, e, n) {
        this.value = t,
        this.type = e,
        this.supports = n
    },
    c.prototype = {
        value: null,
        type: null,
        supports: [
        ],
        toBoolean: function () {
            throw new Error('Unable to convert "' + this.type + '" to "boolean".')
        },
        toString: function () {
            throw new Error('Unable to convert "' + this.type + '" to "string".')
        },
        toNumber: function () {
            throw new Error('Unable to convert "' + this.type + '" to "number".')
        },
        toNodeSet: function () {
            throw new Error('Unable to convert "' + this.type + '" to "node-set".')
        },
        toDate: function () {
            throw new Error('Unable to convert "' + this.type + '" to "date".')
        },
        canConvertTo: function (t) {
            return !1 !== arrayIndexOf(t, this.supports)
        }
    },
    d = function (t) {
        c.call(this, t, 'boolean', [
            'boolean',
            'string',
            'number',
            'date'
        ])
    },
    d.prototype = new c,
    d.constructor = d,
    d.prototype.toBoolean = function () {
        return this.value
    },
    d.prototype.toString = function () {
        return this.value === !0 ? 'true' : 'false'
    },
    d.prototype.toNumber = function () {
        return this.value ? 1 : 0
    },
    d.prototype.toDate = function () {
        return null
    },
    m = function (t, e) {
        c.call(this, t, 'node-set', [
            'boolean',
            'string',
            'number',
            'node-set',
            'date'
        ]),
        this.docOrder = e || 'unsorted'
    },
    m.prototype = new c,
    m.constructor = m,
    m.prototype.toBoolean = function () {
        return this.value.length > 0 ? !0 : !1
    },
    m.prototype.toString = function () {
        return this.value.length < 1 ? '' : (this.sortDocumentOrder(), nodeStringValue(this.value[0]))
    },
    m.prototype.toNumber = function () {
        return new p(this.toString()) .toNumber()
    },
    m.prototype.toNodeSet = function () {
        return this.value
    },
    m.prototype.toDate = function () {
        return new p(this.toString()) .toDate()
    },
    m.prototype.sortDocumentOrder = function () {
        switch (this.docOrder) {
        case 'document-order':
            break;
        case 'reverse-document-order':
            this.value.reverse();
            break;
        default:
            this.value.sort(function (t, e) {
                var n = compareDocumentPosition(t, e);
                if (4 == (4 & n)) return - 1;
                if (2 == (2 & n)) return 1;
                throw new Error('NodeSetType.sortDocumentOrder - unexpected compare result: ' + n)
            })
        }
        this.docOrder = 'document-order'
    },
    m.prototype.sortReverseDocumentOrder = function () {
        switch (this.docOrder) {
        case 'document-order':
            this.value.reverse();
            break;
        case 'reverse-document-order':
            break;
        default:
            this.sortDocumentOrder(),
            this.value.reverse()
        }
        this.docOrder = 'reverse-document-order'
    },
    m.prototype.append = function (t) {
        var e,
        n = 0,
        i = 0;
        if (!t instanceof m) throw new Error('NodeSetType can be passed into NodeSetType.append method');
        for (this.sortDocumentOrder(), t.sortDocumentOrder(); n < this.value.length && i < t.value.length; )
        if (e = compareDocumentPosition(this.value[n], t.value[i]), 0 == e) i++;
         else if (4 == (4 & e)) n++;
         else {
            if (2 != (2 & e)) throw new Error('Internal Error: NodeSetType.append - unable to sort nodes. (result: ' + e + ')');
            this.value.splice(n, 0, t.value[i]),
            n++,
            i++
        }
        for (; i < t.value.length; i++) this.value.push(t.value[i]);
        this.docOrder = 'document-order'
    },
    m.prototype.stringValues = function () {
        var t,
        e,
        n = [
        ];
        for (t = 0; t < this.value.length; t++) e = new p(nodeStringValue(this.value[t])),
        e.isDateString() && (e = new DateType(e.value)),
        n.push(e);
        return n
    },
    p = function (t) {
        c.call(this, t, 'string', [
            'boolean',
            'string',
            'number',
            'date'
        ])
    },
    p.prototype = new c,
    p.constructor = p,
    p.prototype.toBoolean = function () {
        return this.value.length > 0 ? !0 : !1
    },
    p.prototype.toString = function () {
        return this.value
    },
    p.prototype.toNumber = function () {
        var t;
        return this.isDateString(this.value) ? new DateType(this.value) .toNumber()  : (t = this.value.match(/^[ \t\r\n]*(-?[0-9]+(?:[.][0-9]*)?)[ \t\r\n]*$/), null !== t ? parseFloat(t[1])  : (t = this.value.match(/^[ \t\r\n]*(-?[.][0-9]+)[ \t\r\n]*$/), null !== t ? parseFloat(t[1])  : Number.NaN))
    },
    p.prototype.toDate = function () {
        return new Date(this.value)
    },
    p.prototype.isDateString = function () {
        return isNaN(this.value) ? isNaN(Date.parse(this.value)) ? !1 : /('|")?[0-9]{4}(-|\/)[0-9]{2}(-|\/)[0-9]{2}('|")?/.test(this.value) ? (console.debug('found string value that passes check for datestringiness: ' + this.value), !0)  : !1 : !1
    },
    f = function (t) {
        c.call(this, t, 'number', [
            'boolean',
            'string',
            'number',
            'date'
        ])
    },
    f.prototype = new c,
    f.constructor = f,
    f.prototype.toBoolean = function () {
        return 0 === this.value || isNaN(this.value) ? !1 : !0
    },
    f.prototype.toString = function () {
        return this.value.toString()
    },
    f.prototype.toNumber = function () {
        return this.value
    },
    f.prototype.toDate = function () {
        return new Date(86400000 * this.value)
    },
    DateType = function (t) {
        c.call(this, t, 'date', [
            'date',
            'string',
            'number',
            'boolean'
        ])
    },
    DateType.prototype = new c,
    DateType.constructor = DateType,
    DateType.prototype.toDate = function () {
        return new Date(this.value)
    },
    DateType.prototype.toString = function () {
        return new Date(this.value) .toUTCString()
    },
    DateType.prototype.toNumber = function () {
        return new Date(this.value) .getTime() / 86400000
    },
    DateType.prototype.toBoolean = function () {
        return !isNaN(new Date(this.value) .getTime())
    },
    t = function (e, n) {
        var i;
        switch (this.code = e, this.code) {
        case t.INVALID_EXPRESSION_ERR:
            this.name = 'INVALID_EXPRESSION_ERR';
            break;
        case t.TYPE_ERR:
            this.name = 'TYPE_ERR';
            break;
        default:
            throw i = new Error('Unsupported XPathException code: ' + this.code),
            i.name = 'XPathExceptionInternalError',
            i
        }
        this.message = n || ''
    },
    t.prototype.toString = function () {
        return 'XPathException: "' + this.message + '", code: "' + this.code + '", name: "' + this.name + '"'
    },
    t.INVALID_EXPRESSION_ERR = 51,
    t.TYPE_ERR = 52,
    e = function (t) {
        var e,
        n,
        i;
        for (e in t) {
            i = !1;
            for (n in this.opts)
            if (e === n) {
                this.opts[e] = t[e],
                i = !0;
                break
            }
            if (!i) throw new Error('Unsupported option: ' + e)
        }
        this.opts['unique-ids'][_] = 'id',
        this.opts['unique-ids'][x] = 'id'
    },
    e.prototype = {
        opts: {
            'unique-ids': {
            },
            'case-sensitive': !1
        },
        createExpression: function (e, i) {
            var o,
            r,
            s,
            a,
            l = {
            };
            try {
                o = XPathJS._parser.parse(e)
            } catch (u) {
                throw r = 'The expression is not a legal expression.',
                r += u instanceof XPathJS._parser.SyntaxError ? ' (line: ' + u.line + ', character: ' + u.column + ')' : ' (' + u.message + ')',
                new t(t.INVALID_EXPRESSION_ERR, r)
            }
            if (o.nsPrefixes.length > 0) {
                if ('object' != typeof i || 'undefined' == typeof i.lookupNamespaceURI) throw new t(t.INVALID_EXPRESSION_ERR, 'No namespace resolver provided or lookupNamespaceURI function not supported.');
                for (s = 0; s < o.nsPrefixes.length; s++)
                if (a = o.nsPrefixes[s], l[a] = i.lookupNamespaceURI(a), null === l[a]) throw createError(14, 'NAMESPACE_ERR', 'Undefined namespace prefix "' + a + '" in the context of the given resolver.')
            }
            return new n(o, l, this.opts)
        },
        createNSResolver: function (t) {
            return new i(t)
        },
        evaluate: function (t, e, n, i, o) {
            var t = this.createExpression(t, n);
            return t.evaluate(e, i, o)
        }
    },
    n = function (t, e, n) {
        this.parsedExpression = t,
        this.namespaceMapping = e,
        this.opts = n || {
        }
    },
    n.prototype = {
        parsedExpression: null,
        namespaceMapping: null,
        opts: {
        },
        evaluate: function (t, e, n) {
            var i;
            return g = this,
            nodeSupported(t),
            i = new h(t, 1, 1, {
            }, u, this.namespaceMapping, this.opts),
            o.factory(i, e, a(i, this.parsedExpression.tree))
        }
    },
    h = function (t, e, n, i, o, r, s) {
        this.node = t,
        this.pos = e,
        this.size = n,
        this.vars = i,
        this.fns = o,
        this.nsMap = r,
        this.opts = s || {
        }
    },
    h.prototype = {
        node: null,
        pos: null,
        size: null,
        vars: null,
        fns: null,
        nsMap: null,
        opts: null,
        clone: function (t, e, n) {
            return new h(t || this.node, 'undefined' != typeof e ? e : this.pos, 'undefined' != typeof n ? n : this.size, this.vars, this.fns, this.nsMap, this.opts)
        }
    },
    i = function (t) {
        nodeSupported(t),
        this.node = t
    },
    i.prototype = {
        node: null,
        lookupNamespaceURI: function (t) {
            var e,
            n,
            i,
            o = this.node;
            switch (t) {
            case 'xml':
                return _;
            case 'xmlns':
                return b;
            default:
                switch (this.node.nodeType) {
                case 9:
                    o = o.documentElement;
                    break;
                case 1:
                    break;
                default:
                    o = T(o)
                }
                if (null != o && 1 == o.nodeType) {
                    if ('' == t) {
                        if (n = o.getAttribute('xmlns'), null !== n) return n
                    } else if (o.ownerDocument.documentElement === o && 'object' == typeof o.ownerDocument.namespaces) {
                        for (e = 0; e < o.ownerDocument.namespaces.length; e++)
                        if (n = o.ownerDocument.namespaces.item(e), n.name == t) return n.urn
                    } else
                    for (e = 0; e < o.attributes.length; e++)
                    if (o.attributes[e].specified && 'xmlns:' + t == o.attributes[e].nodeName) return o.attributes[e].nodeValue;
                    if (o.ownerDocument.documentElement !== o && o.parentNode) return i = this.node,
                    this.node = o.parentNode,
                    n = this.lookupNamespaceURI(t),
                    this.node = i,
                    n
                }
                return null
            }
        }
    },
    l = {
        '/': function (t, e) {
            var n,
            i,
            o,
            r,
            s;
            if (null === t) i = new m([k(this.node)], 'document-order');
             else if (i = a(this, t), !i instanceof m) throw new Error('Left side of path separator (/) must be of node-set type. (type: ' + i.type + ')');
            if (null === e) r = i;
             else
            for (r = new m([], 'document-order'), n = 0; n < i.value.length; n++) {
                if (s = this.clone(i.value[n]), o = a(s, e), !o instanceof m) throw new Error('Right side of path separator (/) must be of node-set type. (type: ' + o.type + ')');
                r.append(o)
            }
            return r
        },
        step: function (t, e) {
            var n,
            i,
            o,
            r,
            s,
            l,
            u;
            switch (t) {
            case 'child':
                n = new m(D(this.node), 'document-order');
                break;
            case 'descendant':
                n = new m(E(this.node), 'document-order');
                break;
            case 'parent':
                o = T(this.node),
                n = new m(o ? [
                    o
                ] : [
                ], 'document-order');
                break;
            case 'ancestor':
                n = new m(P(this.node), 'reverse-document-order');
                break;
            case 'following-sibling':
                n = new m(S(this.node), 'document-order');
                break;
            case 'preceding-sibling':
                n = new m(C(this.node), 'reverse-document-order');
                break;
            case 'following':
                n = new m(M(this.node), 'document-order');
                break;
            case 'preceding':
                n = new m(N(this.node), 'reverse-document-order');
                break;
            case 'attribute':
                n = new m(nodeAttribute(this.node), 'document-order');
                break;
            case 'namespace':
                n = new m(nodeNamespace.call(this, this.node), 'document-order');
                break;
            case 'self':
                n = new m([this.node], 'document-order');
                break;
            case 'descendant-or-self':
                r = E(this.node),
                r.unshift(this.node),
                n = new m(r, 'document-order');
                break;
            case 'ancestor-or-self':
                r = P(this.node),
                r.unshift(this.node),
                n = new m(r, 'reverse-document-order');
                break;
            default:
                throw new Error('Axis type not supported: ' + t)
            }
            switch (e.type) {
            case 'nodeType':
                if ('node' == e.args[0]) break;
                for (i = n.value.length - 1; i >= 0; i--) switch (e.args[0]) {
                case 'text':
                    3 != n.value[i].nodeType && 4 != n.value[i].nodeType && n.value.splice(i, 1);
                    break;
                case 'comment':
                    8 != n.value[i].nodeType && n.value.splice(i, 1);
                    break;
                case 'processing-instruction':
                    (7 != n.value[i].nodeType || e.args[1].length > 0 && a(this, e.args[1][0]) != n.value[i].nodeName) && n.value.splice(i, 1)
                }
                break;
            case 'name':
                switch (s = a(this, e), t) {
                case 'attribute':
                    l = 2;
                    break;
                case 'namespace':
                    l = 13;
                    break;
                default:
                    l = 1
                }
                for (i = n.value.length - 1; i >= 0; i--) n.value[i].nodeType == l ? (null !== s.ns || null !== s.name) && (u = nodeExpandedName.call(this, n.value[i]), u !== !1 && u.ns === s.ns ? null !== s.name && u.name.toLowerCase() != s.name.toLowerCase() && n.value.splice(i, 1)  : n.value.splice(i, 1))  : n.value.splice(i, 1);
                break;
            default:
                throw new Error('NodeTest type not supported in step: ' + e.type)
            }
            return n
        },
        predicate: function (t, e, n) {
            var i,
            o,
            r,
            s,
            l,
            u;
            if (i = a(this, e), !i instanceof m) throw new Error('Expected "node-set", got: ' + i.type);
            switch (t) {
            case 'ancestor':
            case 'ancestor-or-self':
            case 'preceding':
            case 'preceding-sibling':
                i.sortReverseDocumentOrder();
                break;
            default:
                i.sortDocumentOrder()
            }
            for (s = 0; s < n.length; s++)
            for (o = 0, l = 1, u = i.value.length; o < i.value.length; l++) {
                if (r = a(this.clone(i.value[o], l, u), n[s]), r instanceof f) {
                    if (r.value != l) {
                        i.value.splice(o, 1);
                        continue
                    }
                } else if (!r.toBoolean()) {
                    i.value.splice(o, 1);
                    continue
                }
                o++
            }
            return i
        },
        'function': function (t, e) {
            var n,
            i,
            o,
            r,
            s = [
            ],
            l = function (t) {
                return (null !== t.ns ? '{' + t.ns + '}' : '{}') + t.name
            },
            u = function (t) {
                var e,
                n,
                i = [
                ];
                for (e = 0; e < t.length; e++) n = void 0 === t[e].t ? 'object' : t[e].t,
                t[e].r !== !1 ? t[e].rep === !0 && (n += '+')  : n += t[e].rep === !0 ? '*' : '?',
                i.push(n);
                return '(' + i.join(', ') + ')'
            },
            h = 0,
            d = [
            ];
            if (n = a(this, t), null === n.ns && (n.ns = ''), !this.fns[n.ns] || !this.fns[n.ns][n.name]) throw new Error('Function "' + l(n) + '" does not exist.');
            for (i = this.fns[n.ns][n.name], i.args || (i.args = [
            ]), o = 0, h = 0; o < i.args.length; h++, o++) {
                if (void 0 === e[h]) {
                    if (i.args[o].r !== !1) throw new Error('Function "' + l(n) + '" expects ' + u(i.args) + '.')
                } else d.push(void 0 === i.args[o].t ? 'object' : i.args[o].t);
                if (i.args[o].rep === !0) {
                    for (; h < e.length; h++) d.push(void 0 === i.args[o].t ? 'object' : i.args[o].t);
                    break
                }
            }
            if (d.length < e.length) throw new Error('Function "' + l(n) + '" expects ' + u(i.args) + '.');
            for (o = 0; o < e.length; o++) {
                if (r = a(this, e[o]), 'object' !== d[o] && !r.canConvertTo(d[o])) throw new Error('Function "' + l(n) + '" expects ' + u(i.args) + '.Cannot convert "' + r.type + '" to "' + d[o] + '".');
                s.push(r)
            }
            if (result = i.fn.apply(this, s), !result instanceof c) throw new Error('Function "' + l(n) + '" did not return a value that inherits from BaseType.');
            if ('object' !== i.ret && !result.canConvertTo(i.ret)) throw new Error('Function "' + l(n) + '" return "' + result.type + '" type that cannot be converted to "' + i.ret + '".');
            return result
        },
        '|': function (t, e) {
            if (t = a(this, t), e = a(this, e), 'undefined' == typeof t || 'undefined' == typeof e || !t instanceof m || !e instanceof m) throw new Error('Unable to perform union on non-"node-set" types.');
            return t.append(e),
            t
        },
        or: function (t, e) {
            return new d(a(this, t) .toBoolean() ? !0 : a(this, e) .toBoolean())
        },
        and: function (t, e) {
            return new d(a(this, t) .toBoolean() ? a(this, e) .toBoolean()  : !1)
        },
        '=': function (t, e) {
            return compareOperator.call(this, a(this, t), a(this, e), '=', function (t, e) {
                return t == e
            })
        },
        '!=': function (t, e) {
            return compareOperator.call(this, a(this, t), a(this, e), '!=', function (t, e) {
                return t != e
            })
        },
        '<=': function (t, e) {
            return compareOperator.call(this, a(this, t), a(this, e), '<=', function (t, e) {
                return e >= t
            })
        },
        '<': function (t, e) {
            return compareOperator.call(this, a(this, t), a(this, e), '<', function (t, e) {
                return e > t
            })
        },
        '>=': function (t, e) {
            return compareOperator.call(this, a(this, t), a(this, e), '>=', function (t, e) {
                return t >= e
            })
        },
        '>': function (t, e) {
            return compareOperator.call(this, a(this, t), a(this, e), '>', function (t, e) {
                return t > e
            })
        },
        '+': function (t, e) {
            return new f(a(this, t) .toNumber() + a(this, e) .toNumber())
        },
        '-': function (t, e) {
            return new f(a(this, t) .toNumber() - a(this, e) .toNumber())
        },
        div: function (t, e) {
            return new f(a(this, t) .toNumber() / a(this, e) .toNumber())
        },
        mod: function (t, e) {
            return new f(a(this, t) .toNumber() % a(this, e) .toNumber())
        },
        '*': function (t, e) {
            return new f(a(this, t) .toNumber() * a(this, e) .toNumber())
        },
        string: function (t) {
            return new p(t)
        },
        number: function (t) {
            return new f(t)
        },
        $: function (t) {
            throw new Error('TODO: Not implemented.16')
        },
        name: function (t, e) {
            var n = null;
            if (null !== t && (n = this.nsMap[t], !n)) throw new Error('Namespace prefix "' + t + '" is not mapped to a namespace.');
            return {
                ns: n,
                name: e
            }
        }
    },
    u = {
        '': {
            last: {
                fn: function () {
                    return new f(this.size)
                },
                ret: 'number'
            },
            count: {
                fn: function (t) {
                    return new f(t.toNodeSet() .length)
                },
                args: [
                    {
                        t: 'node-set'
                    }
                ],
                ret: 'number'
            },
            id: {
                fn: function (t) {
                    var e,
                    n,
                    i,
                    o = this,
                    r = [
                    ],
                    s = [
                    ],
                    a = function (t) {
                        var e,
                        n = t.split(/[\u0020\u0009\u000D\u000A]+/);
                        for (e = n.length - 1; e >= 0; e--) 0 == n[e].length && n.splice(e, 1);
                        return n
                    };
                    if (t instanceof m)
                    for (e = 0; e < t.value.length; e++) r.push.apply(r, a(nodeStringValue(t.value[e])));
                     else t = t.toString(),
                    r = a(t);
                    for (e = r.length - 1; e >= 0; e--)
                    for (n = e - 1; n >= 0; n--)
                    if (r[e] == r[n] && e != n) {
                        r.splice(e, 1);
                        break
                    }
                    for (e = 0; e < r.length; e++) i = k(this.node) .getElementById(r[e]),
                    i && nodeIdAttribute.call(this, i) ? s.push(i)  : nodeAttributeSearch(k(this.node), !0, function (t, n) {
                        var i = nodeIdAttribute.call(o, t, n);
                        return i && i.nodeValue == r[e] ? (s.push(t), !0)  : void 0
                    });
                    return new m(s)
                },
                args: [
                    {
                    }
                ],
                ret: 'node-set'
            },
            'local-name': {
                fn: function (t) {
                    var e,
                    n = '';
                    return 0 == arguments.length && (t = new m([this.node])),
                    t.toNodeSet() .length > 0 && (t.sortDocumentOrder(), e = nodeExpandedName.call(this, t.value[0]), e !== !1 && (n = e.name)),
                    new p(n)
                },
                args: [
                    {
                        t: 'node-set',
                        r: !1
                    }
                ],
                ret: 'string'
            },
            'namespace-uri': {
                fn: function (t) {
                    var e,
                    n = '';
                    return 0 == arguments.length && (t = new m([this.node])),
                    t.toNodeSet() .length > 0 && (t.sortDocumentOrder(), e = nodeExpandedName.call(this, t.value[0]), e !== !1 && null !== e.ns && (n = e.ns)),
                    new p(n)
                },
                args: [
                    {
                        t: 'node-set',
                        r: !1
                    }
                ],
                ret: 'string'
            },
            name: {
                fn: function (t) {
                    var e,
                    n = '';
                    return 0 == arguments.length && (t = new m([this.node])),
                    t.toNodeSet() .length > 0 && (t.sortDocumentOrder(), e = nodeExpandedName.call(this, t.value[0]), e !== !1 && (n = e.prefix && e.prefix.length > 0 ? e.prefix + ':' + e.name : e.name)),
                    new p(n)
                },
                args: [
                    {
                        t: 'node-set',
                        r: !1
                    }
                ],
                ret: 'string'
            },
            string: {
                fn: function (t) {
                    return 0 == arguments.length && (t = new m([this.node], 'document-order')),
                    new p(t.toString())
                },
                args: [
                    {
                        t: 'object',
                        r: !1
                    }
                ],
                ret: 'string'
            },
            'starts-with': {
                fn: function (t, e) {
                    return new d(t.toString() .substr(0, (e = e.toString()) .length) == e)
                },
                args: [
                    {
                        t: 'string'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'string'
            },
            contains: {
                fn: function (t, e) {
                    return new d( - 1 != t.toString() .indexOf(e = e.toString()))
                },
                args: [
                    {
                        t: 'string'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'string'
            },
            'substring-before': {
                fn: function (t, e) {
                    return t = t.toString(),
                    e = t.indexOf(e.toString()),
                    new p( - 1 == e ? '' : t.substr(0, e))
                },
                args: [
                    {
                        t: 'string'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'string'
            },
            'substring-after': {
                fn: function (t, e) {
                    var n;
                    return t = t.toString(),
                    e = e.toString(),
                    n = t.indexOf(e),
                    new p( - 1 == n ? '' : t.substr(n + e.length))
                },
                args: [
                    {
                        t: 'string'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'string'
            },
            substring: {
                fn: function (t, e, n) {
                    return t = t.toString(),
                    e = Math.round(e.toNumber()) - 1,
                    new p(isNaN(e) ? '' : 2 == arguments.length ? t.substring(0 > e ? 0 : e)  : t.substring(0 > e ? 0 : e, e + Math.round(n.toNumber())))
                },
                args: [
                    {
                        t: 'string'
                    },
                    {
                        t: 'number'
                    },
                    {
                        t: 'number',
                        r: !1
                    }
                ],
                ret: 'string'
            },
            'string-length': {
                fn: function (t) {
                    return t = 0 == arguments.length ? nodeStringValue(this.node)  : t.toString(),
                    new f(t.length)
                },
                args: [
                    {
                        t: 'string',
                        r: !1
                    }
                ],
                ret: 'number'
            },
            'normalize-space': {
                fn: function (t) {
                    return t = 0 == arguments.length ? nodeStringValue(this.node)  : t.toString(),
                    new p(t.replace(/^[\u0020\u0009\u000D\u000A]+/, '') .replace(/[\u0020\u0009\u000D\u000A]+$/, '') .replace(/[\u0020\u0009\u000D\u000A]+/g, ' '))
                },
                args: [
                    {
                        t: 'string',
                        r: !1
                    }
                ],
                ret: 'string'
            },
            translate: {
                fn: function (t, e, n) {
                    var i,
                    o,
                    r,
                    s = '';
                    for (t = t.toString(), e = e.toString(), n = n.toString(), i = 0; i < t.length; i++) ( - 1 == (o = e.indexOf(r = t.charAt(i))) || (r = n.charAt(o))) && (s += r);
                    return new p(s)
                },
                args: [
                    {
                        t: 'string'
                    },
                    {
                        t: 'string'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'string'
            },
            'boolean': {
                fn: function (t) {
                    return new d(t.toBoolean())
                },
                args: [
                    {
                        r: !0
                    }
                ],
                ret: 'boolean'
            },
            not: {
                fn: function (t) {
                    return new d(!t.toBoolean())
                },
                args: [
                    {
                        t: 'boolean'
                    }
                ],
                ret: 'boolean'
            },
            'true': {
                fn: function () {
                    return new d(!0)
                },
                ret: 'boolean'
            },
            'false': {
                fn: function () {
                    return new d(!1)
                },
                ret: 'boolean'
            },
            lang: {
                fn: function (t) {
                    for (var e, n, i, o, r, s, a, l = this.node, u = t.toString() .toLowerCase() .split('-'); 9 != l.nodeType; l = T(l))
                    for (e = nodeAttribute(l), r = 0; r < e.length; r++)
                    if (n = e[r].nodeName.split(':'), 1 === n.length && (n[1] = n[0], n[0] = ''), 'lang' == n[1]) {
                        if (i = e[r].nodeValue.toLowerCase() .split('-'), i.length < u.length) continue;
                        for (a = !0, s = 0; s < u.length; s++)
                        if (u[s] != i[s]) {
                            a = !1;
                            break
                        }
                        if (a)
                        for (o = nodeNamespace.call(this, l), s = 0; s < o.length; s++)
                        if (o[s].prefix == n[0] && o[s].nodeValue == _) return new d(!0)
                    }
                    return new d(!1)
                },
                args: [
                    {
                        t: 'string'
                    }
                ],
                ret: 'boolean'
            },
            number: {
                fn: function (t) {
                    return 0 == arguments.length && (t = new m([this.node], 'document-order')),
                    new f(t.toNumber())
                },
                args: [
                    {
                        t: 'object',
                        r: !1
                    }
                ],
                ret: 'number'
            },
            sum: {
                fn: function (t) {
                    var e,
                    n = 0;
                    for (t = t.toNodeSet(), e = 0; e < t.length; e++) n += new p(nodeStringValue(t[e])) .toNumber();
                    return new f(n)
                },
                args: [
                    {
                        t: 'node-set'
                    }
                ],
                ret: 'number'
            },
            floor: {
                fn: function (t) {
                    return new f(Math.floor(t))
                },
                args: [
                    {
                        t: 'number'
                    }
                ],
                ret: 'number'
            },
            ceiling: {
                fn: function (t) {
                    return new f(Math.ceil(t))
                },
                args: [
                    {
                        t: 'number'
                    }
                ],
                ret: 'number'
            },
            sum_jr: {
                fn: function (t) {
                    var e,
                    n;
                    for (sum = 0, t = t.toNodeSet(), e = 0; e < t.length; e++) n = '' == nodeStringValue(t[e]) ? '0' : nodeStringValue(t[e]),
                    sum += new p(n) .toNumber();
                    return new f(sum)
                },
                args: [
                    {
                        t: 'node-set'
                    }
                ],
                ret: 'number'
            },
            position: {
                fn: function (t) {
                    if (t) {
                        var e,
                        n,
                        i;
                        if (t = t.toNodeSet(), 1 === t.length) {
                            for (e = t[0], i = 1, n = e.tagName; e.previousElementSibling && e.previousElementSibling.tagName === n; ) e = e.previousElementSibling,
                            i++;
                            return new f(i)
                        }
                        throw new Error('nodeset provided to position() contained multiple nodes')
                    }
                    return new f(this.pos)
                },
                args: [
                    {
                        t: 'node-set',
                        r: !1
                    }
                ],
                ret: 'number'
            },
            concat: {
                fn: function (t) {
                    var e,
                    n,
                    i = '';
                    for (e = 0; e < arguments.length; e++) n = arguments[e] instanceof m ? arguments[e].stringValues() .join('')  : arguments[e].toString(),
                    i += n;
                    return new p(i)
                },
                args: [
                    {
                        t: 'object',
                        r: !1,
                        rep: !0
                    }
                ],
                ret: 'string'
            },
            round: {
                fn: function (t, e) {
                    return e = Math.round(e) || 0,
                    new f(Math.round(t * Math.pow(10, e)) / Math.pow(10, e))
                },
                args: [
                    {
                        t: 'number'
                    },
                    {
                        t: 'number',
                        r: !1
                    }
                ],
                ret: 'number'
            },
            selected: {
                fn: function (t, e) {
                    var n;
                    return e = e.toString() .trim(),
                    n = t.toString(),
                    new d( - 1 != (' ' + n + ' ') .indexOf(' ' + e + ' '))
                },
                args: [
                    {
                        t: 'object'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'boolean'
            },
            'selected-at': {
                fn: function (t, e) {
                    var n,
                    i,
                    o;
                    return e = Math.round(e.toNumber()),
                    n = t.toString(),
                    i = n.split(' '),
                    o = e >= 0 && e < i.length ? i[e] : '',
                    new p(o)
                },
                args: [
                    {
                        t: 'object'
                    },
                    {
                        t: 'number'
                    }
                ],
                ret: 'string'
            },
            'count-selected': {
                fn: function (t) {
                    var e = [
                    ];
                    return t = t.toNodeSet(),
                    t.length > 0 ? (e = nodeStringValue(t[0]) .trim() .split(' '), new f(1 == e.length && '' === e[0] ? 0 : e.length))  : new f(0)
                },
                args: [
                    {
                        t: 'node-set'
                    }
                ],
                ret: 'number'
            },
            checklist: {
                fn: function (t, e, n) {
                    var i,
                    o,
                    r = 0;
                    for (t = t.toNumber(), e = e.toNumber(), i = 2; i < arguments.length; i++)
                    if (arguments[i] instanceof m)
                    for (o = 0; o < arguments[i].stringValues() .length; o++) arguments[i].stringValues() [o].toBoolean() === !0 && r++;
                     else arguments[i].toBoolean() === !0 && r++;
                    return new d((0 > t || r >= t) && (0 > e || e >= r))
                },
                args: [
                    {
                        t: 'number'
                    },
                    {
                        t: 'number'
                    },
                    {
                        t: 'object'
                    },
                    {
                        t: 'object',
                        r: !1,
                        rep: !0
                    }
                ],
                ret: 'boolean'
            },
            'weighted-checklist': {
                fn: function (t, e, n, i) {
                    var o,
                    r = [
                    ],
                    s = [
                    ],
                    a = 0;
                    for (t = t.toNumber(), e = e.toNumber(), o = 2; o < arguments.length; o += 2) v = arguments[o],
                    w = arguments[o + 1],
                    v && w && (v instanceof m ? r = r.concat(v.stringValues())  : r.push(v), w instanceof m ? s = s.concat(w.stringValues())  : s.push(w));
                    for (o = 0; o < r.length; o++) r[o].toBoolean() === !0 && (a += s[o].toNumber());
                    return new d((0 > t || a >= t) && (0 > e || e >= a))
                },
                args: [
                    {
                        t: 'number'
                    },
                    {
                        t: 'number'
                    },
                    {
                        t: 'object'
                    },
                    {
                        t: 'object'
                    },
                    {
                        t: 'object',
                        r: !1,
                        rep: !0
                    }
                ],
                ret: 'boolean'
            },
            'boolean-from-string': {
                fn: function (t) {
                    return new d('true' === t.toString() .toLowerCase() || '1' === String(t))
                },
                args: [
                    {
                        t: 'string'
                    }
                ],
                ret: 'boolean'
            },
            'if': {
                fn: function (t, e, n) {
                    return t.toBoolean() ? e : n
                },
                args: [
                    {
                        t: 'object'
                    },
                    {
                        t: 'object'
                    },
                    {
                        t: 'object'
                    }
                ],
                ret: 'object'
            },
            date: {
                fn: function (t) {
                    return new DateType(t.toDate())
                },
                args: [
                    {
                        t: 'object'
                    }
                ],
                ret: 'string'
            },
            'date-time': {
                fn: function (t) {
                    return new DateType(t.toDate())
                },
                args: [
                    {
                        t: 'object'
                    }
                ],
                ret: 'string'
            },
            'decimal-date-time': {
                fn: function (t) {
                    return new DateType(t.toDate())
                },
                args: [
                    {
                        t: 'object'
                    }
                ],
                ret: 'string'
            },
            today: {
                fn: function () {
                    var t = new Date;
                    return new DateType(new Date(t.getFullYear(), t.getMonth(), t.getDate()))
                },
                ret: 'string'
            },
            now: {
                fn: function () {
                    return new DateType(new Date)
                },
                ret: 'string'
            },
            regex: {
                fn: function (t, e) {
                    var n,
                    i;
                    return n = t.toString(),
                    i = new RegExp(e),
                    new d(i.test(n))
                },
                args: [
                    {
                        t: 'object'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'boolean'
            },
            uuid: {
                fn: function () {
                    var t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
                        var e = 16 * Math.random() | 0,
                        n = 'x' == t ? e : 3 & e | 8;
                        return n.toString(16)
                    });
                    return new p(t)
                },
                ret: 'string'
            },
            'int': {
                fn: function (t) {
                    return new f(parseInt(t))
                },
                args: [
                    {
                        t: 'number'
                    }
                ],
                ret: 'number'
            },
            substr: {
                fn: function (t, e, n) {
                    return t = t.toString(),
                    length = t.length,
                    e = Math.round(e.toNumber()),
                    n = n ? Math.round(n.toNumber())  : length,
                    new p(isNaN(e) ? '' : t.substring(0 > e ? length + e : e, 0 > n ? length + n : n))
                },
                args: [
                    {
                        t: 'string'
                    },
                    {
                        t: 'number'
                    },
                    {
                        t: 'number',
                        r: !1
                    }
                ],
                ret: 'string'
            },
            random: {
                fn: function () {
                    return new f(Math.random() .toFixed(15))
                },
                ret: 'number'
            },
            min: {
                fn: function (t, e) {
                    var n,
                    i,
                    o,
                    r;
                    for (console.log('min args', arguments), n = 0; n < arguments.length; n++)
                    if (arguments[n] instanceof m)
                    for (r = arguments[n].toNodeSet(), n = 0; n < r.length; n++) o = new p(nodeStringValue(r[n])),
                    o && '' !== o.toString() && (i = i ? Math.min(i, o.toNumber())  : o.toNumber());
                     else o = new p(arguments[n].toString()),
                    o && '' !== o.toString() && (i = i ? Math.min(i, o.toNumber())  : o.toNumber());
                    return new f(i)
                },
                args: [
                    {
                        t: 'object'
                    },
                    {
                        t: 'object',
                        r: !1,
                        rep: !0
                    }
                ],
                ret: 'number'
            },
            max: {
                fn: function (t, e) {
                    var n,
                    i,
                    o,
                    r;
                    for (n = 0; n < arguments.length; n++)
                    if (arguments[n] instanceof m)
                    for (r = arguments[n].toNodeSet(), n = 0; n < r.length; n++) o = new p(nodeStringValue(r[n])),
                    o && '' !== o.toString() && (i = i ? Math.max(i, o.toNumber())  : o.toNumber());
                     else o = new p(arguments[n].toString()),
                    o && '' !== o.toString() && (i = i ? Math.max(i, o.toNumber())  : o.toNumber());
                    return new f(i)
                },
                args: [
                    {
                        t: 'object'
                    },
                    {
                        t: 'object',
                        r: !1,
                        rep: !0
                    }
                ],
                ret: 'number'
            },
            join: {
                fn: function (t, e) {
                    var n,
                    i = [
                    ];
                    for (n = 1; n < arguments.length; n++) arguments[n] instanceof m ? i = i.concat(arguments[n].stringValues())  : i.push(arguments[n].toString());
                    for (value = i[0] || '', n = 1; n < i.length; n++) value += t.toString() + i[n];
                    return new p(value)
                },
                args: [
                    {
                        t: 'string'
                    },
                    {
                        t: 'object',
                        r: !1,
                        rep: !0
                    }
                ],
                ret: 'string'
            },
            coalesce: {
                fn: function (t, e) {
                    return t.toString() .length > 0 ? t : e
                },
                args: [
                    {
                        t: 'object'
                    },
                    {
                        t: 'object'
                    }
                ],
                ret: 'string'
            },
            'format-date': {
                fn: function (t, e) {
                    var n,
                    t = new DateType(t),
                    i = t.toDate(),
                    o = e.toString(),
                    r = function (t, e) {
                        var i = t.toString(),
                        o = e - i.length;
                        for (n = 0; o > n; n++) i = '0' + i;
                        return i
                    };
                    if (!t.toBoolean()) return new p(i.toString());
                    props = {
                        Y: i.getFullYear(),
                        y: i.getFullYear() .toString() .substring(2, 4),
                        m: r(i.getMonth() + 1, 2),
                        n: i.getMonth() + 1,
                        b: [
                            'Jan',
                            'Feb',
                            'Mar',
                            'Apr',
                            'May',
                            'Jun',
                            'Jul',
                            'Aug',
                            'Sep',
                            'Oct',
                            'Nov',
                            'Dec'
                        ][i.getMonth()],
                        d: r(i.getDate(), 2),
                        e: i.getDate(),
                        H: r(i.getHours(), 2),
                        h: i.getHours(),
                        M: r(i.getMinutes(), 2),
                        S: r(i.getSeconds(), 2),
                        3: r(i.getMilliseconds(), 3),
                        a: [
                            'Sun',
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thu',
                            'Fri',
                            'Sat'
                        ][i.getDay()]
                    };
                    for (prop in props) o = o.replace('%' + prop, props[prop]);
                    return new p(o)
                },
                args: [
                    {
                        t: 'date'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'string'
            },
            'format-date-time': {
                fn: function (t, e) {
                    var n,
                    t = new DateType(t),
                    i = t.toDate(),
                    o = e.toString(),
                    r = function (t, e) {
                        var i = t.toString(),
                        o = e - i.length;
                        for (n = 0; o > n; n++) i = '0' + i;
                        return i
                    };
                    if (!t.toBoolean()) return new p(i.toString());
                    props = {
                        Y: i.getFullYear(),
                        y: i.getFullYear() .toString() .substring(2, 4),
                        m: r(i.getMonth() + 1, 2),
                        n: i.getMonth() + 1,
                        b: [
                            'Jan',
                            'Feb',
                            'Mar',
                            'Apr',
                            'May',
                            'Jun',
                            'Jul',
                            'Aug',
                            'Sep',
                            'Oct',
                            'Nov',
                            'Dec'
                        ][i.getMonth()],
                        d: r(i.getDate(), 2),
                        e: i.getDate(),
                        H: r(i.getHours(), 2),
                        h: i.getHours(),
                        M: r(i.getMinutes(), 2),
                        S: r(i.getSeconds(), 2),
                        3: r(i.getMilliseconds(), 3),
                        a: [
                            'Sun',
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thu',
                            'Fri',
                            'Sat'
                        ][i.getDay()]
                    };
                    for (prop in props) o = o.replace('%' + prop, props[prop]);
                    return new p(o)
                },
                args: [
                    {
                        t: 'date'
                    },
                    {
                        t: 'string'
                    }
                ],
                ret: 'string'
            },
            pow: {
                fn: function (t, e) {
                    return new f(Math.pow(t, e))
                },
                args: [
                    {
                        t: 'number'
                    },
                    {
                        t: 'number'
                    }
                ],
                ret: 'number'
            },
            version: {
                fn: function () {
                    var t = '#document' === this.node.nodeName ? this.node.documentElement : this.node.ownerDocument.documentElement,
                    e = t.attributes.version;
                    return new p(e ? e.textContent : '')
                },
                args: [
                ],
                ret: 'string'
            },
            once: {
                fn: function (t) {
                    var e = nodeStringValue(this.node),
                    n = t.toString();
                    return n = 'NaN' === n ? '' : n,
                    new p('' !== e ? e : n)
                },
                args: [
                    {
                        t: 'string'
                    }
                ],
                ret: 'string'
            },
            area: {
                fn: function (t) {
                    var e,
                    n,
                    i = [
                    ],
                    o = [
                    ];
                    if (t instanceof m && t.value.length > 1 ? t.value.forEach(function (t) {
                        i.push(nodeStringValue(t))
                    })  : t instanceof m ? i = nodeStringValue(t.value[0]) .split(';')  : t instanceof p && (i = t.value.split(';')), o = i.map(function (t) {
                        return t.trim() .split(' ')
                    }), n = o.every(function (t) {
                        return '' !== t[0] && t[0] >= - 90 && t[0] <= 90 && '' !== t[1] && t[1] >= - 180 && t[1] <= 180 && ('undefined' == typeof t[2] || !isNaN(t[2])) && ('undefined' == typeof t[3] || !isNaN(t[3]) && t[3] >= 0)
                    })) {
                        var r,
                        s,
                        a = 6378100,
                        l = o.length,
                        u = Math.PI / 180;
                        if (e = 0, l > 2) {
                            for (var h = 0; l > h; h++) r = {
                                lat: o[h][0],
                                lng: o[h][1]
                            },
                            s = {
                                lat: o[(h + 1) % l][0],
                                lng: o[(h + 1) % l][1]
                            },
                            e += (s.lng - r.lng) * u * (2 + Math.sin(r.lat * u) + Math.sin(s.lat * u));
                            e = e * a * a / 2
                        }
                        e = Math.abs(Math.round(100 * e)) / 100
                    } else e = Number.NaN;
                    return new f(e)
                },
                args: [
                    {
                        t: 'string'
                    }
                ],
                ret: 'number'
            }
        }
    },
    a = function (t, e) {
        if ('function' != typeof l[e.type]) throw new Error('Internal Error: Expression type does not exist: ' + e.type);
        return l[e.type].apply(t, e.args)
    },
    o = function (e, n, i) {
        switch (n) {
        case o.NUMBER_TYPE:
            this.resultType = o.NUMBER_TYPE,
            this.numberValue = i.toNumber();
            break;
        case o.STRING_TYPE:
            this.resultType = o.STRING_TYPE,
            this.stringValue = i.toString();
            break;
        case o.BOOLEAN_TYPE:
            this.resultType = o.BOOLEAN_TYPE,
            this.booleanValue = i.toBoolean();
            break;
        case o.UNORDERED_NODE_ITERATOR_TYPE:
        case o.ORDERED_NODE_ITERATOR_TYPE:
        case o.UNORDERED_NODE_SNAPSHOT_TYPE:
        case o.ORDERED_NODE_SNAPSHOT_TYPE:
        case o.ANY_UNORDERED_NODE_TYPE:
        case o.FIRST_ORDERED_NODE_TYPE:
            if (!i instanceof m) throw new Error('Expected result of type "node-set", got: "' + i.type + '"');
            switch (this.resultType = n, n) {
            case o.UNORDERED_NODE_ITERATOR_TYPE:
            case o.UNORDERED_NODE_SNAPSHOT_TYPE:
                this._value = i.toNodeSet(),
                this.snapshotLength = this._value.length;
                break;
            case o.ORDERED_NODE_ITERATOR_TYPE:
            case o.ORDERED_NODE_SNAPSHOT_TYPE:
                i.sortDocumentOrder(),
                this._value = i.toNodeSet(),
                this.snapshotLength = this._value.length;
                break;
            case o.ANY_UNORDERED_NODE_TYPE:
                i = i.toNodeSet(),
                this.singleNodeValue = i.length ? i[0] : null;
                break;
            case o.FIRST_ORDERED_NODE_TYPE:
                i.sortDocumentOrder(),
                i = i.toNodeSet(),
                this.singleNodeValue = i.length ? i[0] : null;
                break;
            default:
                throw new t(t.TYPE_ERR, 'XPath result type not supported. (type: ' + n + ')')
            }
            break;
        default:
            throw new t(t.TYPE_ERR, 'XPath result type not supported. (type: ' + n + ')')
        }
    },
    o.factory = function (e, n, i) {
        var r;
        if (n !== o.ANY_TYPE) return new o(e, n, i);
        if (i instanceof m) r = new o(e, o.UNORDERED_NODE_ITERATOR_TYPE, i);
         else if (i instanceof f) r = new o(e, o.NUMBER_TYPE, i);
         else if (i instanceof d) r = new o(e, o.BOOLEAN_TYPE, i);
         else {
            if (!(i instanceof p)) throw new t(t.TYPE_ERR, 'Internal Error: Unsupported value type: ' + typeof i);
            r = new o(e, o.STRING_TYPE, i)
        }
        return r
    },
    o.prototype = {
        resultType: null,
        numberValue: null,
        stringValue: null,
        booleanValue: null,
        singleNodeValue: null,
        invalidIteratorState: null,
        snapshotLength: null,
        _iteratorIndex: 0,
        iterateNext: function () {
            if (this.resultType != o.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != o.ORDERED_NODE_ITERATOR_TYPE) throw new t(t.TYPE_ERR, 'iterateNext() method may only be used with results of type UNORDERED_NODE_ITERATOR_TYPE or ORDERED_NODE_ITERATOR_TYPE');
            return this._iteratorIndex < this._value.length ? this._value[this._iteratorIndex++] : null
        },
        snapshotItem: function (e) {
            if (this.resultType != o.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != o.ORDERED_NODE_SNAPSHOT_TYPE) throw new t(t.TYPE_ERR, 'snapshotItem() method may only be used with results of type UNORDERED_NODE_SNAPSHOT_TYPE or ORDERED_NODE_SNAPSHOT_TYPE');
            return this._value[e]
        }
    },
    o.ANY_TYPE = 0,
    o.NUMBER_TYPE = 1,
    o.STRING_TYPE = 2,
    o.BOOLEAN_TYPE = 3,
    o.UNORDERED_NODE_ITERATOR_TYPE = 4,
    o.ORDERED_NODE_ITERATOR_TYPE = 5,
    o.UNORDERED_NODE_SNAPSHOT_TYPE = 6,
    o.ORDERED_NODE_SNAPSHOT_TYPE = 7,
    o.ANY_UNORDERED_NODE_TYPE = 8,
    o.FIRST_ORDERED_NODE_TYPE = 9,
    r = function (t, e, n) {
        if (1 != n.nodeType) throw new Error('Internal Error: XPathNamespace owner element must be an Element node.');
        this.ownerElement = n,
        this.ownerDocument = n.ownerDocument,
        this.nodeName = '#namespace',
        this.prefix = t,
        this.localName = t,
        this.nodeType = r.XPATH_NAMESPACE_NODE,
        this.namespaceURI = e,
        this.nodeValue = e
    },
    r.XPATH_NAMESPACE_NODE = 13,
    s = {
        XPathException: t,
        XPathEvaluator: e,
        XPathNSResolver: i,
        XPathExpression: n,
        XPathResult: o,
        XPathNamespace: r,
        getCurrentDomLevel3XPathBindings: function () {
            return {
                window: {
                    XPathException: window.XPathException,
                    XPathExpression: window.XPathExpression,
                    XPathNSResolver: window.XPathNSResolver,
                    XPathResult: window.XPathResult,
                    XPathNamespace: window.XPathNamespace
                },
                document: {
                    createExpression: document.createExpression,
                    createNSResolver: document.createNSResolver,
                    evaluate: document.evaluate
                }
            }
        },
        createDomLevel3XPathBindings: function (s) {
            var a = new e(s);
            return {
                window: {
                    XPathException: t,
                    XPathExpression: n,
                    XPathNSResolver: i,
                    XPathResult: o,
                    XPathNamespace: r
                },
                document: {
                    createExpression: function () {
                        return a.createExpression.apply(a, arguments)
                    },
                    createNSResolver: function () {
                        return a.createNSResolver.apply(a, arguments)
                    },
                    evaluate: function () {
                        return a.evaluate.apply(a, arguments)
                    }
                }
            }
        },
        bindDomLevel3XPath: function (t, e) {
            var n,
            i = e || s.createDomLevel3XPathBindings(),
            o = s.getCurrentDomLevel3XPathBindings(),
            t = t || document;
            for (n in i.window) window[n] = i.window[n];
            for (n in i.document) t[n] = i.document[n];
            return o
        }
    }
}(),
XPathJS._parser = function () {
    function t(t, e) {
        function n() {
            this.constructor = t
        }
        n.prototype = e.prototype,
        t.prototype = new n
    }
    function e(t, e, n, i, o, r) {
        this.message = t,
        this.expected = e,
        this.found = n,
        this.offset = i,
        this.line = o,
        this.column = r,
        this.name = 'SyntaxError'
    }
    function n(t) {
        function n(e) {
            function n(e, n, i) {
                var o,
                r;
                for (o = n; i > o; o++) r = t.charAt(o),
                '\n' === r ? (e.seenCR || e.line++, e.column = 1, e.seenCR = !1)  : '' === r || '' === r || '' === r ? (e.line++, e.column = 1, e.seenCR = !0)  : (e.column++, e.seenCR = !1)
            }
            return pi !== e && (pi > e && (pi = 0, fi = {
                line: 1,
                column: 1,
                seenCR: !1
            }), n(fi, pi, e), pi = e),
            fi
        }
        function o(t) {
            mi > ci || (ci > mi && (mi = ci, gi = [
            ]), gi.push(t))
        }
        function r(i, o, r) {
            function s(t) {
                var e = 1;
                for (t.sort(function (t, e) {
                    return t.description < e.description ? - 1 : t.description > e.description ? 1 : 0
                }); e < t.length; ) t[e - 1] === t[e] ? t.splice(e, 1)  : e++
            }
            function a(t, e) {
                function n(t) {
                    function e(t) {
                        return t.charCodeAt(0) .toString(16) .toUpperCase()
                    }
                    return t.replace(/\\/g, '\\') .replace(/"/g, '\"') .replace(/\x08/g, '\b') .replace(/\t/g, '\t') .replace(/\n/g, '\n') .replace(/\f/g, '\f') .replace(/\r/g, '\r') .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (t) {
                        return '\\x0' + e(t)
                    }) .replace(/[\x10-\x1F\x80-\xFF]/g, function (t) {
                        return '\\x' + e(t)
                    }) .replace(/[\u0180-\u0FFF]/g, function (t) {
                        return '\\u0' + e(t)
                    }) .replace(/[\u1080-\uFFFF]/g, function (t) {
                        return '\\u' + e(t)
                    })
                }
                var i,
                o,
                r,
                s = new Array(t.length);
                for (r = 0; r < t.length; r++) s[r] = t[r].description;
                return i = t.length > 1 ? s.slice(0, - 1) .join(', ') + ' or ' + s[t.length - 1] : s[0],
                o = e ? '"' + n(e) + '"' : 'end of input',
                'Expected ' + i + ' but ' + o + ' found.'
            }
            var l = n(r),
            u = r < t.length ? t.charAt(r)  : null;
            return null !== o && s(o),
            new e(null !== i ? i : a(o, u), o, u, r, l.line, l.column)
        }
        function s() {
            var t,
            e,
            n,
            i;
            return t = ci,
            e = F(),
            e !== Y ? (n = y(), n !== Y ? (i = F(), i !== Y ? (di = t, e = tt(n), t = e)  : (ci = t, t = Q))  : (ci = t, t = Q))  : (ci = t, t = Q),
            t
        }
        function a() {
            var t;
            return t = u(),
            t === Y && (t = l()),
            t
        }
        function l() {
            var e,
            n,
            i,
            r,
            s;
            return e = m(),
            e === Y && (e = ci, 47 === t.charCodeAt(ci) ? (n = et, ci++)  : (n = Y, 0 === vi && o(nt)), n !== Y ? (i = ci, r = F(), r !== Y ? (s = u(), s !== Y ? (r = [
                r,
                s
            ], i = r)  : (ci = i, i = Q))  : (ci = i, i = Q), i === Y && (i = it), i !== Y ? (di = e, n = ot(i), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q)),
            e
        }
        function u() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            if (e = ci, n = h(), n !== Y) {
                for (i = [
                ], r = ci, s = F(), s !== Y ? (t.substr(ci, 2) === rt ? (a = rt, ci += 2)  : (a = Y, 0 === vi && o(st)), a === Y && (47 === t.charCodeAt(ci) ? (a = et, ci++)  : (a = Y, 0 === vi && o(nt))), a !== Y ? (l = F(), l !== Y ? (u = h(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) i.push(r),
                r = ci,
                s = F(),
                s !== Y ? (t.substr(ci, 2) === rt ? (a = rt, ci += 2)  : (a = Y, 0 === vi && o(st)), a === Y && (47 === t.charCodeAt(ci) ? (a = et, ci++)  : (a = Y, 0 === vi && o(nt))), a !== Y ? (l = F(), l !== Y ? (u = h(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q);
                i !== Y ? (di = e, n = at(n, i), e = n)  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function h() {
            var t,
            e,
            n,
            i,
            o,
            r,
            s,
            a;
            if (t = ci, e = c(), e !== Y)
            if (n = F(), n !== Y)
            if (i = p(), i !== Y) {
                for (o = [
                ], r = ci, s = F(), s !== Y ? (a = f(), a !== Y ? (s = [
                    s,
                    a
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) o.push(r),
                r = ci,
                s = F(),
                s !== Y ? (a = f(), a !== Y ? (s = [
                    s,
                    a
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q);
                o !== Y ? (di = t, e = lt(e, i, o), t = e)  : (ci = t, t = Q)
            } else ci = t,
            t = Q;
             else ci = t,
            t = Q;
             else ci = t,
            t = Q;
            return t === Y && (t = g()),
            t
        }
        function c() {
            var e,
            n,
            i,
            r;
            return e = ci,
            n = d(),
            n !== Y ? (i = F(), i !== Y ? (t.substr(ci, 2) === ut ? (r = ut, ci += 2)  : (r = Y, 0 === vi && o(ht)), r !== Y ? (di = e, n = ct(n), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q),
            e === Y && (e = ci, n = v(), n !== Y && (di = e, n = dt(n)), e = n),
            e
        }
        function d() {
            var e;
            return t.substr(ci, 16) === pt ? (e = pt, ci += 16)  : (e = Y, 0 === vi && o(ft)),
            e === Y && (t.substr(ci, 8) === mt ? (e = mt, ci += 8)  : (e = Y, 0 === vi && o(gt)), e === Y && (t.substr(ci, 9) === vt ? (e = vt, ci += 9)  : (e = Y, 0 === vi && o(yt)), e === Y && (t.substr(ci, 5) === _t ? (e = _t, ci += 5)  : (e = Y, 0 === vi && o(bt)), e === Y && (t.substr(ci, 18) === wt ? (e = wt, ci += 18)  : (e = Y, 0 === vi && o(xt)), e === Y && (t.substr(ci, 10) === kt ? (e = kt, ci += 10)  : (e = Y, 0 === vi && o(Dt)), e === Y && (t.substr(ci, 17) === Et ? (e = Et, ci += 17)  : (e = Y, 0 === vi && o(Tt)), e === Y && (t.substr(ci, 9) === Pt ? (e = Pt, ci += 9)  : (e = Y, 0 === vi && o(St)), e === Y && (t.substr(ci, 9) === Ct ? (e = Ct, ci += 9)  : (e = Y, 0 === vi && o(Lt)), e === Y && (t.substr(ci, 6) === Mt ? (e = Mt, ci += 6)  : (e = Y, 0 === vi && o(Nt)), e === Y && (t.substr(ci, 17) === It ? (e = It, ci += 17)  : (e = Y, 0 === vi && o(Ot)), e === Y && (t.substr(ci, 9) === At ? (e = At, ci += 9)  : (e = Y, 0 === vi && o(Rt)), e === Y && (t.substr(ci, 4) === Ut ? (e = Ut, ci += 4)  : (e = Y, 0 === vi && o(jt)))))))))))))),
            e
        }
        function p() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            return e = ci,
            n = j(),
            n !== Y ? (i = F(), i !== Y ? (40 === t.charCodeAt(ci) ? (r = Bt, ci++)  : (r = Y, 0 === vi && o(Ft)), r !== Y ? (s = F(), s !== Y ? (41 === t.charCodeAt(ci) ? (a = zt, ci++)  : (a = Y, 0 === vi && o($t)), a !== Y ? (di = e, n = Vt(n), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q),
            e === Y && (e = ci, t.substr(ci, 22) === qt ? (n = qt, ci += 22)  : (n = Y, 0 === vi && o(Wt)), n !== Y ? (i = F(), i !== Y ? (40 === t.charCodeAt(ci) ? (r = Bt, ci++)  : (r = Y, 0 === vi && o(Ft)), r !== Y ? (s = F(), s !== Y ? (a = M(), a !== Y ? (l = F(), l !== Y ? (41 === t.charCodeAt(ci) ? (u = zt, ci++)  : (u = Y, 0 === vi && o($t)), u !== Y ? (di = e, n = Zt(n, a), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q), e === Y && (e = ci, n = U(), n !== Y && (di = e, n = Ht(n)), e = n)),
            e
        }
        function f() {
            var e,
            n,
            i,
            r,
            s,
            a;
            return e = ci,
            91 === t.charCodeAt(ci) ? (n = Xt, ci++)  : (n = Y, 0 === vi && o(Gt)),
            n !== Y ? (i = F(), i !== Y ? (r = y(), r !== Y ? (s = F(), s !== Y ? (93 === t.charCodeAt(ci) ? (a = Yt, ci++)  : (a = Y, 0 === vi && o(Jt)), a !== Y ? (di = e, n = Kt(r), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q),
            e
        }
        function m() {
            var e,
            n,
            i,
            r;
            return e = ci,
            t.substr(ci, 2) === rt ? (n = rt, ci += 2)  : (n = Y, 0 === vi && o(st)),
            n !== Y ? (i = F(), i !== Y ? (r = u(), r !== Y ? (di = e, n = Qt(r), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q),
            e
        }
        function g() {
            var e,
            n;
            return e = ci,
            t.substr(ci, 2) === te ? (n = te, ci += 2)  : (n = Y, 0 === vi && o(ee)),
            n === Y && (46 === t.charCodeAt(ci) ? (n = ne, ci++)  : (n = Y, 0 === vi && o(ie))),
            n !== Y && (di = e, n = oe(n)),
            e = n
        }
        function v() {
            var e,
            n;
            return e = ci,
            64 === t.charCodeAt(ci) ? (n = re, ci++)  : (n = Y, 0 === vi && o(se)),
            n === Y && (n = it),
            n !== Y && (di = e, n = ae(n)),
            e = n
        }
        function y() {
            var t,
            e;
            return t = ci,
            e = D(),
            e !== Y && (di = t, e = Kt(e)),
            t = e
        }
        function _() {
            var e,
            n,
            i,
            r,
            s,
            a;
            return e = ci,
            n = R(),
            n !== Y && (di = e, n = le(n)),
            e = n,
            e === Y && (e = ci, 40 === t.charCodeAt(ci) ? (n = Bt, ci++)  : (n = Y, 0 === vi && o(Ft)), n !== Y ? (i = F(), i !== Y ? (r = y(), r !== Y ? (s = F(), s !== Y ? (41 === t.charCodeAt(ci) ? (a = zt, ci++)  : (a = Y, 0 === vi && o($t)), a !== Y ? (di = e, n = Kt(r), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q), e === Y && (e = ci, n = M(), n !== Y && (di = e, n = ue(n)), e = n, e === Y && (e = ci, n = N(), n !== Y && (di = e, n = he(n)), e = n, e === Y && (e = b())))),
            e
        }
        function b() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u,
            h,
            c,
            d,
            p,
            f;
            if (e = ci, n = A(), n !== Y)
            if (i = F(), i !== Y)
            if (40 === t.charCodeAt(ci) ? (r = Bt, ci++)  : (r = Y, 0 === vi && o(Ft)), r !== Y) {
                if (s = ci, a = F(), a !== Y)
                if (l = y(), l !== Y) {
                    for (u = [
                    ], h = ci, c = F(), c !== Y ? (44 === t.charCodeAt(ci) ? (d = ce, ci++)  : (d = Y, 0 === vi && o(de)), d !== Y ? (p = F(), p !== Y ? (f = y(), f !== Y ? (c = [
                        c,
                        d,
                        p,
                        f
                    ], h = c)  : (ci = h, h = Q))  : (ci = h, h = Q))  : (ci = h, h = Q))  : (ci = h, h = Q); h !== Y; ) u.push(h),
                    h = ci,
                    c = F(),
                    c !== Y ? (44 === t.charCodeAt(ci) ? (d = ce, ci++)  : (d = Y, 0 === vi && o(de)), d !== Y ? (p = F(), p !== Y ? (f = y(), f !== Y ? (c = [
                        c,
                        d,
                        p,
                        f
                    ], h = c)  : (ci = h, h = Q))  : (ci = h, h = Q))  : (ci = h, h = Q))  : (ci = h, h = Q);
                    u !== Y ? (a = [
                        a,
                        l,
                        u
                    ], s = a)  : (ci = s, s = Q)
                } else ci = s,
                s = Q;
                 else ci = s,
                s = Q;
                s === Y && (s = it),
                s !== Y ? (a = F(), a !== Y ? (41 === t.charCodeAt(ci) ? (l = zt, ci++)  : (l = Y, 0 === vi && o($t)), l !== Y ? (di = e, n = pe(n, s), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
             else ci = e,
            e = Q;
             else ci = e,
            e = Q;
            return e
        }
        function w() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            if (e = ci, n = x(), n !== Y) {
                for (i = [
                ], r = ci, s = F(), s !== Y ? (124 === t.charCodeAt(ci) ? (a = fe, ci++)  : (a = Y, 0 === vi && o(me)), a !== Y ? (l = F(), l !== Y ? (u = x(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) i.push(r),
                r = ci,
                s = F(),
                s !== Y ? (124 === t.charCodeAt(ci) ? (a = fe, ci++)  : (a = Y, 0 === vi && o(me)), a !== Y ? (l = F(), l !== Y ? (u = x(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q);
                i !== Y ? (di = e, n = ge(n, i), e = n)  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function x() {
            var e,
            n,
            i,
            r,
            s,
            l,
            h;
            return e = ci,
            n = k(),
            n !== Y ? (i = ci, r = F(), r !== Y ? (t.substr(ci, 2) === rt ? (s = rt, ci += 2)  : (s = Y, 0 === vi && o(st)), s === Y && (47 === t.charCodeAt(ci) ? (s = et, ci++)  : (s = Y, 0 === vi && o(nt))), s !== Y ? (l = F(), l !== Y ? (h = u(), h !== Y ? (r = [
                r,
                s,
                l,
                h
            ], i = r)  : (ci = i, i = Q))  : (ci = i, i = Q))  : (ci = i, i = Q))  : (ci = i, i = Q), i === Y && (i = it), i !== Y ? (di = e, n = ve(n, i), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q),
            e === Y && (e = ci, n = a(), n !== Y && (di = e, n = ye(n)), e = n),
            e
        }
        function k() {
            var t,
            e,
            n,
            i,
            o,
            r;
            if (t = ci, e = _(), e !== Y) {
                for (n = [
                ], i = ci, o = F(), o !== Y ? (r = f(), r !== Y ? (o = [
                    o,
                    r
                ], i = o)  : (ci = i, i = Q))  : (ci = i, i = Q); i !== Y; ) n.push(i),
                i = ci,
                o = F(),
                o !== Y ? (r = f(), r !== Y ? (o = [
                    o,
                    r
                ], i = o)  : (ci = i, i = Q))  : (ci = i, i = Q);
                n !== Y ? (di = t, e = _e(e, n), t = e)  : (ci = t, t = Q)
            } else ci = t,
            t = Q;
            return t
        }
        function D() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            if (e = ci, n = E(), n !== Y) {
                for (i = [
                ], r = ci, s = F(), s !== Y ? (t.substr(ci, 2) === be ? (a = be, ci += 2)  : (a = Y, 0 === vi && o(we)), a !== Y ? (l = F(), l !== Y ? (u = E(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) i.push(r),
                r = ci,
                s = F(),
                s !== Y ? (t.substr(ci, 2) === be ? (a = be, ci += 2)  : (a = Y, 0 === vi && o(we)), a !== Y ? (l = F(), l !== Y ? (u = E(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q);
                i !== Y ? (di = e, n = ge(n, i), e = n)  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function E() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            if (e = ci, n = T(), n !== Y) {
                for (i = [
                ], r = ci, s = F(), s !== Y ? (t.substr(ci, 3) === xe ? (a = xe, ci += 3)  : (a = Y, 0 === vi && o(ke)), a !== Y ? (l = F(), l !== Y ? (u = T(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) i.push(r),
                r = ci,
                s = F(),
                s !== Y ? (t.substr(ci, 3) === xe ? (a = xe, ci += 3)  : (a = Y, 0 === vi && o(ke)), a !== Y ? (l = F(), l !== Y ? (u = T(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q);
                i !== Y ? (di = e, n = ge(n, i), e = n)  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function T() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            if (e = ci, n = P(), n !== Y) {
                for (i = [
                ], r = ci, s = F(), s !== Y ? (61 === t.charCodeAt(ci) ? (a = De, ci++)  : (a = Y, 0 === vi && o(Ee)), a === Y && (t.substr(ci, 2) === Te ? (a = Te, ci += 2)  : (a = Y, 0 === vi && o(Pe))), a !== Y ? (l = F(), l !== Y ? (u = P(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) i.push(r),
                r = ci,
                s = F(),
                s !== Y ? (61 === t.charCodeAt(ci) ? (a = De, ci++)  : (a = Y, 0 === vi && o(Ee)), a === Y && (t.substr(ci, 2) === Te ? (a = Te, ci += 2)  : (a = Y, 0 === vi && o(Pe))), a !== Y ? (l = F(), l !== Y ? (u = P(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q);
                i !== Y ? (di = e, n = ge(n, i), e = n)  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function P() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            if (e = ci, n = S(), n !== Y) {
                for (i = [
                ], r = ci, s = F(), s !== Y ? (t.substr(ci, 2) === Se ? (a = Se, ci += 2)  : (a = Y, 0 === vi && o(Ce)), a === Y && (60 === t.charCodeAt(ci) ? (a = Le, ci++)  : (a = Y, 0 === vi && o(Me)), a === Y && (t.substr(ci, 2) === Ne ? (a = Ne, ci += 2)  : (a = Y, 0 === vi && o(Ie)), a === Y && (62 === t.charCodeAt(ci) ? (a = Oe, ci++)  : (a = Y, 0 === vi && o(Ae))))), a !== Y ? (l = F(), l !== Y ? (u = S(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) i.push(r),
                r = ci,
                s = F(),
                s !== Y ? (t.substr(ci, 2) === Se ? (a = Se, ci += 2)  : (a = Y, 0 === vi && o(Ce)), a === Y && (60 === t.charCodeAt(ci) ? (a = Le, ci++)  : (a = Y, 0 === vi && o(Me)), a === Y && (t.substr(ci, 2) === Ne ? (a = Ne, ci += 2)  : (a = Y, 0 === vi && o(Ie)), a === Y && (62 === t.charCodeAt(ci) ? (a = Oe, ci++)  : (a = Y, 0 === vi && o(Ae))))), a !== Y ? (l = F(), l !== Y ? (u = S(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q);
                i !== Y ? (di = e, n = ge(n, i), e = n)  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function S() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            if (e = ci, n = C(), n !== Y) {
                for (i = [
                ], r = ci, s = F(), s !== Y ? (43 === t.charCodeAt(ci) ? (a = Re, ci++)  : (a = Y, 0 === vi && o(Ue)), a === Y && (45 === t.charCodeAt(ci) ? (a = je, ci++)  : (a = Y, 0 === vi && o(Be))), a !== Y ? (l = F(), l !== Y ? (u = C(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) i.push(r),
                r = ci,
                s = F(),
                s !== Y ? (43 === t.charCodeAt(ci) ? (a = Re, ci++)  : (a = Y, 0 === vi && o(Ue)), a === Y && (45 === t.charCodeAt(ci) ? (a = je, ci++)  : (a = Y, 0 === vi && o(Be))), a !== Y ? (l = F(), l !== Y ? (u = C(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q);
                i !== Y ? (di = e, n = ge(n, i), e = n)  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function C() {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u;
            if (e = ci, n = L(), n !== Y) {
                for (i = [
                ], r = ci, s = F(), s !== Y ? (a = O(), a === Y && (t.substr(ci, 3) === Fe ? (a = Fe, ci += 3)  : (a = Y, 0 === vi && o(ze)), a === Y && (t.substr(ci, 3) === $e ? (a = $e, ci += 3)  : (a = Y, 0 === vi && o(Ve)))), a !== Y ? (l = F(), l !== Y ? (u = L(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q); r !== Y; ) i.push(r),
                r = ci,
                s = F(),
                s !== Y ? (a = O(), a === Y && (t.substr(ci, 3) === Fe ? (a = Fe, ci += 3)  : (a = Y, 0 === vi && o(ze)), a === Y && (t.substr(ci, 3) === $e ? (a = $e, ci += 3)  : (a = Y, 0 === vi && o(Ve)))), a !== Y ? (l = F(), l !== Y ? (u = L(), u !== Y ? (s = [
                    s,
                    a,
                    l,
                    u
                ], r = s)  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q))  : (ci = r, r = Q);
                i !== Y ? (di = e, n = ge(n, i), e = n)  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function L() {
            var e,
            n,
            i,
            r;
            return e = ci,
            n = w(),
            n !== Y && (di = e, n = Kt(n)),
            e = n,
            e === Y && (e = ci, 45 === t.charCodeAt(ci) ? (n = je, ci++)  : (n = Y, 0 === vi && o(Be)), n !== Y ? (i = F(), i !== Y ? (r = L(), r !== Y ? (di = e, n = qe(r), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q)),
            e
        }
        function M() {
            var e,
            n,
            i,
            r;
            if (e = ci, 34 === t.charCodeAt(ci) ? (n = We, ci++)  : (n = Y, 0 === vi && o(Ze)), n !== Y) {
                for (i = [
                ], He.test(t.charAt(ci)) ? (r = t.charAt(ci), ci++)  : (r = Y, 0 === vi && o(Xe)); r !== Y; ) i.push(r),
                He.test(t.charAt(ci)) ? (r = t.charAt(ci), ci++)  : (r = Y, 0 === vi && o(Xe));
                i !== Y ? (34 === t.charCodeAt(ci) ? (r = We, ci++)  : (r = Y, 0 === vi && o(Ze)), r !== Y ? (di = e, n = Ge(i), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            if (e === Y)
            if (e = ci, 39 === t.charCodeAt(ci) ? (n = Ye, ci++)  : (n = Y, 0 === vi && o(Je)), n !== Y) {
                for (i = [
                ], Ke.test(t.charAt(ci)) ? (r = t.charAt(ci), ci++)  : (r = Y, 0 === vi && o(Qe)); r !== Y; ) i.push(r),
                Ke.test(t.charAt(ci)) ? (r = t.charAt(ci), ci++)  : (r = Y, 0 === vi && o(Qe));
                i !== Y ? (39 === t.charCodeAt(ci) ? (r = Ye, ci++)  : (r = Y, 0 === vi && o(Je)), r !== Y ? (di = e, n = Ge(i), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q)
            } else ci = e,
            e = Q;
            return e
        }
        function N() {
            var e,
            n,
            i,
            r,
            s;
            return e = ci,
            n = I(),
            n !== Y ? (i = ci, 46 === t.charCodeAt(ci) ? (r = ne, ci++)  : (r = Y, 0 === vi && o(ie)), r !== Y ? (s = I(), s === Y && (s = it), s !== Y ? (r = [
                r,
                s
            ], i = r)  : (ci = i, i = Q))  : (ci = i, i = Q), i === Y && (i = it), i !== Y ? (di = e, n = tn(n, i), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q),
            e === Y && (e = ci, 46 === t.charCodeAt(ci) ? (n = ne, ci++)  : (n = Y, 0 === vi && o(ie)), n !== Y ? (i = I(), i !== Y ? (di = e, n = en(i), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q)),
            e
        }
        function I() {
            var e,
            n,
            i;
            if (e = ci, n = [
            ], nn.test(t.charAt(ci)) ? (i = t.charAt(ci), ci++)  : (i = Y, 0 === vi && o(on)), i !== Y)
            for (; i !== Y; ) n.push(i),
            nn.test(t.charAt(ci)) ? (i = t.charAt(ci), ci++)  : (i = Y, 0 === vi && o(on));
             else n = Q;
            return n !== Y && (di = e, n = rn(n)),
            e = n
        }
        function O() {
            var e;
            return 42 === t.charCodeAt(ci) ? (e = sn, ci++)  : (e = Y, 0 === vi && o(an)),
            e
        }
        function A() {
            var t,
            e,
            n;
            return t = ci,
            e = z(),
            e !== Y ? (di = ci, n = ln(e), n = n ? un : Q, n !== Y ? (di = t, e = hn(e), t = e)  : (ci = t, t = Q))  : (ci = t, t = Q),
            t
        }
        function R() {
            var e,
            n,
            i;
            return e = ci,
            36 === t.charCodeAt(ci) ? (n = cn, ci++)  : (n = Y, 0 === vi && o(dn)),
            n !== Y ? (i = z(), i !== Y ? (di = e, n = pn(i), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q),
            e
        }
        function U() {
            var e,
            n,
            i,
            r;
            return e = ci,
            42 === t.charCodeAt(ci) ? (n = sn, ci++)  : (n = Y, 0 === vi && o(an)),
            n !== Y && (di = e, n = fn()),
            e = n,
            e === Y && (e = ci, n = q(), n !== Y ? (58 === t.charCodeAt(ci) ? (i = mn, ci++)  : (i = Y, 0 === vi && o(gn)), i !== Y ? (42 === t.charCodeAt(ci) ? (r = sn, ci++)  : (r = Y, 0 === vi && o(an)), r !== Y ? (di = e, n = vn(n), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q), e === Y && (e = ci, n = z(), n !== Y && (di = e, n = yn(n)), e = n)),
            e
        }
        function j() {
            var e;
            return t.substr(ci, 7) === _n ? (e = _n, ci += 7)  : (e = Y, 0 === vi && o(bn)),
            e === Y && (t.substr(ci, 4) === wn ? (e = wn, ci += 4)  : (e = Y, 0 === vi && o(xn)), e === Y && (t.substr(ci, 22) === qt ? (e = qt, ci += 22)  : (e = Y, 0 === vi && o(Wt)), e === Y && (t.substr(ci, 4) === kn ? (e = kn, ci += 4)  : (e = Y, 0 === vi && o(Dn))))),
            e
        }
        function B() {
            var e,
            n;
            if (e = [
            ], En.test(t.charAt(ci)) ? (n = t.charAt(ci), ci++)  : (n = Y, 0 === vi && o(Tn)), n !== Y)
            for (; n !== Y; ) e.push(n),
            En.test(t.charAt(ci)) ? (n = t.charAt(ci), ci++)  : (n = Y, 0 === vi && o(Tn));
             else e = Q;
            return e
        }
        function F() {
            var t;
            return t = B(),
            t === Y && (t = it),
            t
        }
        function z() {
            var t,
            e;
            return t = ci,
            e = $(),
            e === Y && (e = V()),
            e !== Y && (di = t, e = Pn(e)),
            t = e
        }
        function $() {
            var e,
            n,
            i,
            r;
            return e = ci,
            n = q(),
            n !== Y ? (58 === t.charCodeAt(ci) ? (i = mn, ci++)  : (i = Y, 0 === vi && o(gn)), i !== Y ? (r = q(), r !== Y ? (di = e, n = Sn(n, r), e = n)  : (ci = e, e = Q))  : (ci = e, e = Q))  : (ci = e, e = Q),
            e
        }
        function V() {
            var t,
            e;
            return t = ci,
            e = q(),
            e !== Y && (di = t, e = Cn(e)),
            t = e
        }
        function q() {
            var t;
            return t = H()
        }
        function W() {
            var e;
            return Ln.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Mn)),
            e === Y && (95 === t.charCodeAt(ci) ? (e = Nn, ci++)  : (e = Y, 0 === vi && o(In)), e === Y && (On.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(An)), e === Y && (Rn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Un)), e === Y && (jn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Bn)), e === Y && (Fn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(zn)), e === Y && ($n.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Vn)), e === Y && (qn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Wn)), e === Y && (Zn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Hn)), e === Y && (Xn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Gn)), e === Y && (Yn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Jn)), e === Y && (Kn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(Qn)), e === Y && (ti.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(ei)), e === Y && (ni.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(ii))))))))))))))),
            e
        }
        function Z() {
            var e;
            return e = W(),
            e === Y && (45 === t.charCodeAt(ci) ? (e = je, ci++)  : (e = Y, 0 === vi && o(Be)), e === Y && (46 === t.charCodeAt(ci) ? (e = ne, ci++)  : (e = Y, 0 === vi && o(ie)), e === Y && (nn.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(on)), e === Y && (oi.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(ri)), e === Y && (si.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(ai)), e === Y && (li.test(t.charAt(ci)) ? (e = t.charAt(ci), ci++)  : (e = Y, 0 === vi && o(ui)))))))),
            e
        }
        function H() {
            var t,
            e,
            n,
            i;
            if (t = ci, e = W(), e !== Y) {
                for (n = [
                ], i = Z(); i !== Y; ) n.push(i),
                i = Z();
                n !== Y ? (di = t, e = hi(e, n), t = e)  : (ci = t, t = Q)
            } else ci = t,
            t = Q;
            return t
        }
        var X,
        G = arguments.length > 1 ? arguments[1] : {
        },
        Y = {
        },
        J = {
            XPath: s
        },
        K = s,
        Q = Y,
        tt = function (t) {
            return {
                tree: t,
                nsPrefixes: wi
            }
        },
        et = '/',
        nt = {
            type: 'literal',
            value: '/',
            description: '"/"'
        },
        it = null,
        ot = function (t) {
            return {
                type: '/',
                args: [
                    null,
                    t ? t[1] : null
                ]
            }
        },
        rt = '//',
        st = {
            type: 'literal',
            value: '//',
            description: '"//"'
        },
        at = function (t, e) {
            var n;
            for (n = 0; n < e.length; n++) t = Di(e[n][1], t, e[n][3]);
            return t
        },
        lt = function (t, e, n) {
            return bi({
                type: 'step',
                args: [
                    t,
                    e
                ]
            }, t, n, 1)
        },
        ut = '::',
        ht = {
            type: 'literal',
            value: '::',
            description: '"::"'
        },
        ct = function (t) {
            return t
        },
        dt = function (t) {
            return t.length ? t : 'child'
        },
        pt = 'ancestor-or-self',
        ft = {
            type: 'literal',
            value: 'ancestor-or-self',
            description: '"ancestor-or-self"'
        },
        mt = 'ancestor',
        gt = {
            type: 'literal',
            value: 'ancestor',
            description: '"ancestor"'
        },
        vt = 'attribute',
        yt = {
            type: 'literal',
            value: 'attribute',
            description: '"attribute"'
        },
        _t = 'child',
        bt = {
            type: 'literal',
            value: 'child',
            description: '"child"'
        },
        wt = 'descendant-or-self',
        xt = {
            type: 'literal',
            value: 'descendant-or-self',
            description: '"descendant-or-self"'
        },
        kt = 'descendant',
        Dt = {
            type: 'literal',
            value: 'descendant',
            description: '"descendant"'
        },
        Et = 'following-sibling',
        Tt = {
            type: 'literal',
            value: 'following-sibling',
            description: '"following-sibling"'
        },
        Pt = 'following',
        St = {
            type: 'literal',
            value: 'following',
            description: '"following"'
        },
        Ct = 'namespace',
        Lt = {
            type: 'literal',
            value: 'namespace',
            description: '"namespace"'
        },
        Mt = 'parent',
        Nt = {
            type: 'literal',
            value: 'parent',
            description: '"parent"'
        },
        It = 'preceding-sibling',
        Ot = {
            type: 'literal',
            value: 'preceding-sibling',
            description: '"preceding-sibling"'
        },
        At = 'preceding',
        Rt = {
            type: 'literal',
            value: 'preceding',
            description: '"preceding"'
        },
        Ut = 'self',
        jt = {
            type: 'literal',
            value: 'self',
            description: '"self"'
        },
        Bt = '(',
        Ft = {
            type: 'literal',
            value: '(',
            description: '"("'
        },
        zt = ')',
        $t = {
            type: 'literal',
            value: ')',
            description: '")"'
        },
        Vt = function (t) {
            return {
                type: 'nodeType',
                args: [
                    t,
                    [
                    ]
                ]
            }
        },
        qt = 'processing-instruction',
        Wt = {
            type: 'literal',
            value: 'processing-instruction',
            description: '"processing-instruction"'
        },
        Zt = function (t, e) {
            return {
                type: 'nodeType',
                args: [
                    t,
                    [
                        e
                    ]
                ]
            }
        },
        Ht = function (t) {
            return t
        },
        Xt = '[',
        Gt = {
            type: 'literal',
            value: '[',
            description: '"["'
        },
        Yt = ']',
        Jt = {
            type: 'literal',
            value: ']',
            description: '"]"'
        },
        Kt = function (t) {
            return t
        },
        Qt = function (t) {
            return Di('//', null, t)
        },
        te = '..',
        ee = {
            type: 'literal',
            value: '..',
            description: '".."'
        },
        ne = '.',
        ie = {
            type: 'literal',
            value: '.',
            description: '"."'
        },
        oe = function (t) {
            var e = {
                type: 'step',
                args: [
                    'self',
                    {
                        type: 'nodeType',
                        args: [
                            'node',
                            [
                            ]
                        ]
                    }
                ]
            };
            return '..' == t && (e.args[0] = 'parent'),
            e
        },
        re = '@',
        se = {
            type: 'literal',
            value: '@',
            description: '"@"'
        },
        ae = function (t) {
            return t ? 'attribute' : ''
        },
        le = function (t) {
            return t
        },
        ue = function (t) {
            return t
        },
        he = function (t) {
            return t
        },
        ce = ',',
        de = {
            type: 'literal',
            value: ',',
            description: '","'
        },
        pe = function (t, e) {
            var n,
            i = [
            ];
            if (e)
            for (i.push(e[1]), n = 0; n < e[2].length; n++) i.push(e[2][n][3]);
            return {
                type: 'function',
                args: [
                    t,
                    i
                ]
            }
        },
        fe = '|',
        me = {
            type: 'literal',
            value: '|',
            description: '"|"'
        },
        ge = function (t, e) {
            return _i(t, e, 1, 3)
        },
        ve = function (t, e) {
            return e ? Di(e[1], t, e[3])  : t
        },
        ye = function (t) {
            return t
        },
        _e = function (t, e) {
            return bi(t, 'child', e, 1)
        },
        be = 'or',
        we = {
            type: 'literal',
            value: 'or',
            description: '"or"'
        },
        xe = 'and',
        ke = {
            type: 'literal',
            value: 'and',
            description: '"and"'
        },
        De = '=',
        Ee = {
            type: 'literal',
            value: '=',
            description: '"="'
        },
        Te = '!=',
        Pe = {
            type: 'literal',
            value: '!=',
            description: '"!="'
        },
        Se = '<=',
        Ce = {
            type: 'literal',
            value: '<=',
            description: '"<="'
        },
        Le = '<',
        Me = {
            type: 'literal',
            value: '<',
            description: '"<"'
        },
        Ne = '>=',
        Ie = {
            type: 'literal',
            value: '>=',
            description: '">="'
        },
        Oe = '>',
        Ae = {
            type: 'literal',
            value: '>',
            description: '">"'
        },
        Re = '+',
        Ue = {
            type: 'literal',
            value: '+',
            description: '"+"'
        },
        je = '-',
        Be = {
            type: 'literal',
            value: '-',
            description: '"-"'
        },
        Fe = 'div',
        ze = {
            type: 'literal',
            value: 'div',
            description: '"div"'
        },
        $e = 'mod',
        Ve = {
            type: 'literal',
            value: 'mod',
            description: '"mod"'
        },
        qe = function (t) {
            return {
                type: '*',
                args: [
                    {
                        type: 'number',
                        args: [
                            - 1
                        ]
                    },
                    t
                ]
            }
        },
        We = '"',
        Ze = {
            type: 'literal',
            value: '"',
            description: '"\""'
        },
        He = /^[^"]/,
        Xe = {
            type: 'class',
            value: '[^"]',
            description: '[^"]'
        },
        Ge = function (t) {
            return {
                type: 'string',
                args: [
                    t.join('')
                ]
            }
        },
        Ye = '\'',
        Je = {
            type: 'literal',
            value: '\'',
            description: '"\'"'
        },
        Ke = /^[^']/,
        Qe = {
            type: 'class',
            value: '[^\']',
            description: '[^\']'
        },
        tn = function (t, e) {
            return {
                type: 'number',
                args: [
                    e ? parseFloat(t + '.' + e[1])  : parseInt(t)
                ]
            }
        },
        en = function (t) {
            return {
                type: 'number',
                args: [
                    parseFloat('.' + t)
                ]
            }
        },
        nn = /^[0-9]/,
        on = {
            type: 'class',
            value: '[0-9]',
            description: '[0-9]'
        },
        rn = function (t) {
            return t.join('')
        },
        sn = '*',
        an = {
            type: 'literal',
            value: '*',
            description: '"*"'
        },
        ln = function (t) {
            var e;
            if (null === yi.args[0])
            for (e = 0; e < ki.length; e++)
            if (yi.args[1] == ki[e]) return !1;
            return !0
        },
        un = void 0,
        hn = function (t) {
            return '' === t.args[0] ? t = {
                type: t.type,
                args: [
                    null,
                    t.args[1]
                ]
            }
             : xi(t.args[0]),
            t
        },
        cn = '$',
        dn = {
            type: 'literal',
            value: '$',
            description: '"$"'
        },
        pn = function (t) {
            return xi(t.args[0]),
            {
                type: '$',
                args: [
                    t
                ]
            }
        },
        fn = function () {
            return {
                type: 'name',
                args: [
                    null,
                    null
                ]
            }
        },
        mn = ':',
        gn = {
            type: 'literal',
            value: ':',
            description: '":"'
        },
        vn = function (t) {
            return xi(t),
            {
                type: 'name',
                args: [
                    t,
                    null
                ]
            }
        },
        yn = function (t) {
            return xi(t.args[0]),
            t
        },
        _n = 'comment',
        bn = {
            type: 'literal',
            value: 'comment',
            description: '"comment"'
        },
        wn = 'text',
        xn = {
            type: 'literal',
            value: 'text',
            description: '"text"'
        },
        kn = 'node',
        Dn = {
            type: 'literal',
            value: 'node',
            description: '"node"'
        },
        En = /^[ \t\r\n]/,
        Tn = {
            type: 'class',
            value: '[ \t\r\n]',
            description: '[ \t\r\n]'
        },
        Pn = function (t) {
            return yi = t,
            t
        },
        Sn = function (t, e) {
            return {
                type: 'name',
                args: [
                    t,
                    e
                ]
            }
        },
        Cn = function (t) {
            return {
                type: 'name',
                args: [
                    null,
                    t
                ]
            }
        },
        Ln = /^[A-Z]/,
        Mn = {
            type: 'class',
            value: '[A-Z]',
            description: '[A-Z]'
        },
        Nn = '_',
        In = {
            type: 'literal',
            value: '_',
            description: '"_"'
        },
        On = /^[a-z]/,
        An = {
            type: 'class',
            value: '[a-z]',
            description: '[a-z]'
        },
        Rn = /^[\xC0-\xD6]/,
        Un = {
            type: 'class',
            value: '[\xC0-\xD6]',
            description: '[\xC0-\xD6]'
        },
        jn = /^[\xD8-\xF6]/,
        Bn = {
            type: 'class',
            value: '[\xD8-\xF6]',
            description: '[\xD8-\xF6]'
        },
        Fn = /^[\xF8-\u02FF]/,
        zn = {
            type: 'class',
            value: '[\xF8-\u02FF]',
            description: '[\xF8-\u02FF]'
        },
        $n = /^[\u0370-\u037D]/,
        Vn = {
            type: 'class',
            value: '[\u0370-\u037D]',
            description: '[\u0370-\u037D]'
        },
        qn = /^[\u037F-\u1FFF]/,
        Wn = {
            type: 'class',
            value: '[\u037F-\u1FFF]',
            description: '[\u037F-\u1FFF]'
        },
        Zn = /^[\u200C-\u200D]/,
        Hn = {
            type: 'class',
            value: '[\u200C-\u200D]',
            description: '[\u200C-\u200D]'
        },
        Xn = /^[\u2070-\u218F]/,
        Gn = {
            type: 'class',
            value: '[\u2070-\u218F]',
            description: '[\u2070-\u218F]'
        },
        Yn = /^[\u2C00-\u2FEF]/,
        Jn = {
            type: 'class',
            value: '[\u2C00-\u2FEF]',
            description: '[\u2C00-\u2FEF]'
        },
        Kn = /^[\u3001-\uD7FF]/,
        Qn = {
            type: 'class',
            value: '[\u3001-\uD7FF]',
            description: '[\u3001-\uD7FF]'
        },
        ti = /^[\uF900-\uFDCF]/,
        ei = {
            type: 'class',
            value: '[\uF900-\uFDCF]',
            description: '[\uF900-\uFDCF]'
        },
        ni = /^[\uFDF0-\uFFFD]/,
        ii = {
            type: 'class',
            value: '[\uFDF0-\uFFFD]',
            description: '[\uFDF0-\uFFFD]'
        },
        oi = /^[\xB7]/,
        ri = {
            type: 'class',
            value: '[\xB7]',
            description: '[\xB7]'
        },
        si = /^[\u0300-\u036F]/,
        ai = {
            type: 'class',
            value: '[\u0300-\u036F]',
            description: '[\u0300-\u036F]'
        },
        li = /^[\u203F-\u2040]/,
        ui = {
            type: 'class',
            value: '[\u203F-\u2040]',
            description: '[\u203F-\u2040]'
        },
        hi = function (t, e) {
            return t + e.join('')
        },
        ci = 0,
        di = 0,
        pi = 0,
        fi = {
            line: 1,
            column: 1,
            seenCR: !1
        },
        mi = 0,
        gi = [
        ],
        vi = 0;
        if ('startRule' in G) {
            if (!(G.startRule in J)) throw new Error('Can\'t start parsing from rule "' + G.startRule + '".');
            K = J[G.startRule]
        }
        var yi,
        _i = function (t, e, n, i) {
            var o,
            r,
            s = {
                type: '',
                args: [
                ]
            };
            for (s.args.push(t), o = 0; o < e.length; o++) {
                switch (typeof n) {
                case 'string':
                    s.type = n;
                    break;
                case 'object':
                    for (s.type = e[o][n[0]], r = 1; r < n.length; r++) s.type = s.type[n[r]];
                    break;
                default:
                    s.type = e[o][n]
                }
                s.args.push('undefined' == typeof i ? e[o] : e[o][i]),
                s = {
                    type: '',
                    args: [
                        s
                    ]
                }
            }
            return s.args[0]
        },
        bi = function (t, e, n, o) {
            var r = [
            ];
            if (n.length < 1) return t;
            for (i = 0; i < n.length; i++) r.push(n[i][o]);
            return {
                type: 'predicate',
                args: [
                    e,
                    t,
                    r
                ]
            }
        },
        wi = [
        ],
        xi = function (t) {
            var e,
            n = !1;
            if (null !== t) {
                for (e = 0; e < wi.length; e++)
                if (wi[e] === t) {
                    n = !0;
                    break
                }
                n || wi.push(t)
            }
        },
        ki = [
            'comment',
            'text',
            'processing-instruction',
            'node'
        ],
        Di = function (t, e, n) {
            return '/' == t ? {
                type: '/',
                args: [
                    e,
                    n
                ]
            }
             : {
                type: '/',
                args: [
                    {
                        type: '/',
                        args: [
                            e,
                            {
                                type: 'step',
                                args: [
                                    'descendant-or-self',
                                    {
                                        type: 'nodeType',
                                        args: [
                                            'node',
                                            [
                                            ]
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    n
                ]
            }
        };
        if (X = K(), X !== Y && ci === t.length) return X;
        throw X !== Y && ci < t.length && o({
            type: 'end',
            description: 'end of input'
        }),
        r(null, gi, mi)
    }
    return t(e, Error),
    {
        SyntaxError: e,
        parse: n
    }
}(),
define('xpath', function (t) {
    return function () {
        var e;
        return e || t.XPathJS
    }
}(this)),
function (t, e) {
    'use strict';
    'function' == typeof define && define.amd ? define('merge-xml', [
    ], e)  : 'object' == typeof exports ? module.exports = e()  : t.MergeXML = e()
}(this, function () {
    return function (t) {
        var e,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        u,
        h = '_',
        c = 1,
        d = 3,
        p = 8,
        f = 7,
        m = this;
        m.Init = function () {
            return m.dom = null,
            m.nsp = {
            },
            m.count = 0,
            l[1] = !1,
            e > 0 && (m.error = {
                code: '',
                text: ''
            }),
            e > 0
        },
        m.AddFile = function (t) {
            var e;
            return e = t && t.target ? t.target.result ? m.AddSource(t.target.result)  : E('emf')  : E('nof')
        },
        m.AddSource = function (t) {
            var n,
            i;
            if ('object' == typeof t) i = m.Get(1, t) ? t : !1,
            i && (1 === e && !window.DOMParser || 2 === e && !i.selectSingleNode('/')) && (i = null);
             else try {
                i = g(t)
            } catch (o) {
                i = !1
            }
            if (null === i) n = E('nos');
             else if (i === !1) n = E('inv');
             else if (i === !0) m.nsp = w(m.dom.documentElement),
            m.count = 1,
            n = m.dom;
             else if (y(i)) {
                if (_(i, '/'), l[1] === !0) {
                    var r = m.dom.createTextNode('\n');
                    m.dom.documentElement.appendChild(r)
                }
                m.count++,
                n = m.dom
            } else n = !1;
            return n
        };
        var g = function (t) {
            var o,
            r;
            return 1 === e ? m.dom ? (r = i.parseFromString(t, 'text/xml'), o = v(r) ? r : !1)  : (m.dom = i.parseFromString(t, 'text/xml'), o = v(m.dom) ? !0 : !1)  : m.dom ? (r = new ActiveXObject(n), r.async = !1, o = r.loadXML(t) ? r : !1)  : (m.dom = new ActiveXObject(n), m.dom.async = !1, m.dom.setProperty('SelectionLanguage', 'XPath'), o = m.dom.loadXML(t) ? !0 : !1),
            o
        },
        v = function (t) {
            return 0 === t.getElementsByTagNameNS(o, 'parsererror') .length
        },
        y = function (t) {
            var n = !0;
            if (t.inputEncoding !== m.dom.inputEncoding || t.xmlEncoding !== m.dom.xmlEncoding) n = E('enc');
             else if (t.documentElement.namespaceURI !== m.dom.documentElement.namespaceURI) n = E('nse');
             else if (t.documentElement.nodeName !== m.dom.documentElement.nodeName)
            if (l[0]) {
                if (!l[1]) {
                    var i = m.dom.inputEncoding ? m.dom.inputEncoding : m.dom.xmlEncoding ? m.dom.xmlEncoding : 'utf-8',
                    o = m.dom.xmlVersion ? m.dom.xmlVersion : '1.0',
                    r = '<?xml version="' + o + '" encoding="' + i + '"?>\n<' + l[0] + '>\n</' + l[0] + '>',
                    a = g(r);
                    if (a) {
                        var h = m.dom.documentElement.cloneNode(!0);
                        a.documentElement.appendChild(h),
                        h = a.createTextNode('\n'),
                        a.documentElement.appendChild(h),
                        m.dom = a,
                        l[1] = !0
                    } else n = E('jne'),
                    l[1] = null
                }
            } else n = E('dif');
            if (n) {
                var c = w(t.documentElement);
                for (var d in c) m.nsp[d] || (m.dom.documentElement.setAttribute('xmlns:' + d, c[d]), m.nsp[d] = c[d]);
                u ? 1 === e ? s = x : k()  : s = null
            }
            return n
        },
        _ = function (t, e) {
            for (var n = 0; n < t.childNodes.length; n++) {
                var i,
                o = t.childNodes[n],
                r = b(t.childNodes, o, e, n),
                s = m.Query(r);
                if (o.nodeType === c) {
                    var l = !0;
                    if (null === s || s.namespaceURI !== o.namespaceURI) i = o.cloneNode(!0),
                    s = m.Query(e),
                    s.appendChild(i);
                     else if (D(s.getAttribute('stay'), a) !== !1 && (l = !1), l) try {
                        for (var u = 0; u < o.attributes.length; u++) s.setAttribute(o.attributes[u].nodeName, o.attributes[u].nodeValue)
                    } catch (h) {
                    }
                    o.hasChildNodes() && l && _(o, r)
                } else (o.nodeType === d || o.nodeType === p) && (null === s || s.nodeType !== o.nodeType ? (s = m.Query(e), i = o.nodeType === d ? m.dom.createTextNode(o.nodeValue)  : m.dom.createComment(o.nodeValue), s.appendChild(i))  : s.nodeValue = o.nodeValue)
            }
        },
        b = function (t, n, i, o) {
            var r,
            s,
            a = 0;
            if (n.nodeType === c) {
                for (s = 0; o >= s; s++) (u && t[s].nodeType === n.nodeType && t[s].nodeName === n.nodeName || !u && t[s].nodeType !== f) && a++;
                if (u) {
                    var l = !1,
                    g = w(n);
                    for (var v in g) v !== h && (m.nsp[v] = g[v], l = 2 === e);
                    l && k(),
                    r = n.prefix ? n.prefix + ':' : m.nsp[h] ? h + ':' : '',
                    r += n.localName ? n.localName : n.baseName
                } else r = 'node()'
            } else if (n.nodeType === d || n.nodeType === p) {
                for (s = 0; o >= s; s++) t[s].nodeType === n.nodeType && a++;
                r = n.nodeType === d ? 'text()' : 'comment()'
            } else r = i;
            return a && (r = i + ('/' === i.slice( - 1) ? '' : '/') + r + '[' + a + ']'),
            r
        },
        w = function (t) {
            for (var e = {
            }, n = t.attributes, i = 0; i < n.length; ++i) {
                var o = n[i].name.split(':');
                if ('xmlns' === o[0]) {
                    var r = o[1] ? o[1] : h;
                    e[r] = n[i].value
                }
            }
            return e
        };
        m.Query = function (t) {
            var n;
            l[1] && (t = '/' + m.dom.documentElement.nodeName + ('/' === t ? '' : t));
            try {
                1 === e ? (n = r.evaluate(t, m.dom, s, XPathResult.FIRST_ORDERED_NODE_TYPE, null), n = n.singleNodeValue)  : n = m.dom.selectSingleNode(t)
            } catch (i) {
                n = null
            }
            return n
        };
        var x = function (t) {
            return m.nsp[t] || null
        },
        k = function () {
            var t = '';
            for (var e in m.nsp) t += ' xmlns:' + e + '=\'' + m.nsp[e] + '\'';
            t && m.dom.setProperty('SelectionNamespaces', t.substr(1))
        },
        D = function (t, e) {
            var n = !1;
            for (var i in e)
            if (e[i] === t) {
                n = i;
                break
            }
            return n
        };
        m.Get = function (t, e) {
            var n;
            if (t && !e && (e = m.dom), t)
            if (e)
            if (e.xml) n = e.xml;
             else try {
                n = (new XMLSerializer) .serializeToString(e)
            } catch (i) {
                n = null
            } else n = '';
             else n = m.dom;
            if (n && 2 === t) {
                if (l[1]) {
                    var o = n.indexOf('<' + l[0]);
                    n = n.substr(0, o) + '\n' + n.substr(o)
                }
                n = n.replace(/</g, '&lt;') .replace(/>/g, '&gt;') .replace(/ |\t/g, '&nbsp;'),
                n = n.replace(/(\r\n|\n|\r)/g, '<br>')
            }
            return n
        };
        var E = function (t) {
            var e = {
                nod: 'XML DOM is not supported in this browser',
                nox: 'xPath is not supported in this browser',
                nos: 'Incompatible source object',
                nof: 'File not found',
                emf: 'File is empty',
                inv: 'Invalid XML source',
                enc: 'Different encoding',
                dif: 'Different root nodes',
                jne: 'Invalid join parameter',
                nse: 'Namespace incompatibility',
                und: 'Undefined error'
            };
            return m.error.code = e[t] ? t : 'und',
            m.error.text = e[m.error.code],
            !1
        },
        T = function () {
            for (var t, e = !1, s = [
                'MSXML2.DOMDocument.6.0',
                'MSXML2.DOMDocument.3.0',
                'MSXML2.DOMDocument',
                'Microsoft.XmlDom'
            ], a = s.length, l = 0; a > l; l++) try {
                var u = new ActiveXObject(s[l]);
                if (u.async = !1, e = !0, u.loadXML('<x></x>') && u.selectSingleNode('/')) break
            } catch (h) {
            }
            if (e) a > l ? (n = s[l], t = 2)  : t = 'nox';
             else if (window.DOMParser)
            if (window.XPathEvaluator) {
                i = new DOMParser;
                var h = i.parseFromString('Invalid', 'text/xml');
                o = h.getElementsByTagName('parsererror') [0].namespaceURI,
                r = new XPathEvaluator,
                t = 1
            } else t = 'nox';
             else t = 'nod';
            return t
        };
        'object' != typeof t && (t = {
        }),
        a = 'undefined' == typeof t.stay ? [
            'all'
        ] : t.stay ? 'object' == typeof t.stay && t.stay instanceof Array ? t.stay : [
            t.stay
        ] : [
        ],
        l = 'undefined' == typeof t.join ? [
            'root'
        ] : [
            t.join ? String(t.join)  : !1
        ],
        u = 'undefined' == typeof t.updn ? !0 : t.updn,
        e = T(),
        'string' == typeof e && (m.error = {
        }, E(e), e = 0),
        m.Init()
    }
}),
define('enketo-js/utils', [
], function () {
    function t(t, e) {
        var n,
        i,
        o,
        r,
        s = new RegExp(e+"\\s*\\(","g"),
        a = [
        ];
        if (!t || !e) return a;
        for (; null !== (i = s.exec(t)); ) {
            for (o = 1, r = i.index, n = s.lastIndex; 0 !== o; ) n++,
            '(' === t[n] ? o++ : ')' === t[n] && o--;
            a.push([t.substring(r, n + 1),
            t.substring(s.lastIndex, n) .trim()])
        }
        return a
    }
    return {
        parseFunctionFromExpression: t
    }
}),
define('enketo-js/plugins', [
    'jquery'
], function (t) {
    t.fn.clearInputs = function (e) {
        return e = e || 'edit',
        this.each(function () {
            t(this) .find('.file-preview') .remove(),
            t(this) .find('.remove-file') .remove(),
            t(this) .find('.get_image_link') .remove(),
            t(this) .find('input, select, textarea') .not('.ignore') .each(function () {
                var n = t(this),
                i = n.attr('type');
                switch ('SELECT' === n.prop('nodeName') .toUpperCase() && (i = 'select'), 'TEXTAREA' === n.prop('nodeName') .toUpperCase() && (i = 'textarea'), i) {
                case 'date':
                case 'datetime':
                case 'time':
                case 'number':
                case 'search':
                case 'color':
                case 'range':
                case 'url':
                case 'email':
                case 'password':
                case 'text':
                case 'file':
                    n.removeAttr('data-previous-file-name data-loaded-file-name');
                case 'hidden':
                case 'textarea':
                    '' !== n.val() && n.val('') .trigger(e);
                    break;
                case 'radio':
                case 'checkbox':
                    n.prop('checked') && (n.prop('checked', !1), n.trigger(e));
                    break;
                case 'select':
                    n[0].selectedIndex >= 0 && (n[0].selectedIndex = - 1, n.trigger(e));
                    break;
                default:
                    console.error('Unrecognized input type found when trying to reset', this)
                }
            })
        })
    },
    t.fn.markdownToHtml = function () {
        return this.each(function () {
            var e,
            n = t('<div/>');
            t(this) .children(':not(input, select, textarea)') .each(function (e) {
                var i = '$$$' + e;
                t(this) .clone() .markdownToHtml() .appendTo(n),
                t(this) .replaceWith(i)
            }),
            e = t(this) .html(),
            e = e.replace(/__([^\s][^_]*[^\s])__/gm, '<strong>$1</strong>'),
            e = e.replace(/\*\*([^\s][^\*]*[^\s])\*\*/gm, '<strong>$1</strong>'),
            e = e.replace(/_([^\s][^_]*[^\s])_/gm, '<em>$1</em>'),
            e = e.replace(/\*([^\s][^\*]*[^\s])\*/gm, '<em>$1</em>'),
            e = e.replace(/\[([^\]]*)\]\(([^\)]+)\)/gm, '<a href="$2" target="_blank">$1</a>'),
            e = e.replace(/\n/gm, '<br />'),
            n.children() .each(function (n) {
                var i = new RegExp('\$\$\$' + n);
                e = e.replace(i, t(this) [0].outerHTML)
            }),
            t(this) .text('') .append(e)
        })
    },
    t.fn.reverse = [
    ].reverse
}),
define('enketo-js/extend', [
    'require'
], function (t) {
    String.prototype.pad = function (t) {
        for (var e = this; e.length < t; ) e = '0' + e;
        return e
    },
    Date.prototype.toISOLocalString = function () {
        var t = {
        },
        e = function (t) {
            return 10 > t ? '0' + t : t
        };
        return 'Invalid Date' === this.toString() ? this.toString()  : (t.minstotal = this.getTimezoneOffset(), t.direction = t.minstotal < 0 ? '+' : '-', t.hrspart = e(Math.abs(Math.floor(Math.abs(t.minstotal) / 60))), t.minspart = e(Math.abs(Math.floor(t.minstotal % 60))), new Date(this.getTime() - 60 * t.minstotal * 1000) .toISOString() .replace('Z', t.direction + t.hrspart + ':' + t.minspart))
    }
}),
function (t) {
    'function' == typeof define && define.amd ? define('jquery.xpath', [
        'jquery'
    ], t)  : t(jQuery)
}(function (t) {
    t.fn.getXPath = function (t, e) {
        var n,
        i = [
        ],
        o = '',
        r = this.first(),
        s = r.prop('nodeName'),
        a = r.parent(),
        l = a.prop('nodeName');
        for (t = t || '#document', e = e || !1, e && (n = r.siblings(s) .addBack(), o = n.length > 1 ? '[' + (n.index(r) + 1) + ']' : ''), i.push(s + o); 1 == a.length && l !== t && '#document' !== l; ) e && (n = a.siblings(l) .addBack(), o = n.length > 1 ? '[' + (n.index(a) + 1) + ']' : ''),
        i.push(l + o),
        a = a.parent(),
        l = a.prop('nodeName');
        return '/' + i.reverse() .join('/')
    },
    t.fn.xfind = function (t) {
        var e,
        n,
        i;
        if (t = t.replace(/\/\//g, ' '), t = t.replace(/^\//, ''), t = t.replace(/\/\.$/, ''), t = t.replace(/\//g, '>'), t = t.replace(/\[([^@].*?)\]/g, function (t, e) {
            return ':has(' + e + ')'
        }), t.indexOf('>..') >= 0) {
            for (e = t.split(/>\.\.>?/g), n = jQuery(e[0], this), i = 1; i < e.length; i++) n = n.parent(e[i]);
            return n.get()
        }
        return t = t.replace(/\./gi, '\.'),
        this.find(t)
    }
}),
define('enketo-js/FormModel', [
    'xpath',
    'merge-xml',
    'enketo-js/utils',
    'jquery',
    'enketo-js/plugins',
    'enketo-js/extend',
    'jquery.xpath'
], function (t, e, n, i) {
    'use strict';
    var o,
    r,
    s;
    return o = function (t, e) {
        'string' == typeof t && (t = {
            modelStr: t
        }),
        t.external = t.external || [],
        t.submitted = 'undefined' != typeof t.submitted ? t.submitted : !0,
        e = e || {
        },
        e.full = 'undefined' != typeof e.full ? e.full : !0,
        this.convertedExpressions = {
        },
        this.templates = {
        },
        this.loadErrors = [
        ],
        this.INSTANCE = /instance\([\'|\"]([^\/:\s]+)[\'|\"]\)/g,
        this.OPENROSA = /(decimal-date-time\(|pow\(|indexed-repeat\(|format-date\(|coalesce\(|join\(|max\(|min\(|random\(|substr\(|int\(|uuid\(|regex\(|now\(|today\(|date\(|if\(|boolean-from-string\(|checklist\(|selected\(|selected-at\(|round\(|area\(|position\([^\)])/,
        this.data = t,
        this.options = e
    },
    o.prototype.init = function () {
        var t,
        e,
        n,
        o = this;
        this.data.modelStr = this.data.modelStr.replace(/\s(xmlns\=("|')[^\s\>]+("|'))/g, ' data-$1'),
        this.options.full || (this.data.modelStr = this.data.modelStr.replace(/^(<model\s*><instance((?!<instance).)+<\/instance\s*>\s*)(<instance.+<\/instance\s*>)*/, '$1'));
        try {
            t = 'model',
            this.xml = i.parseXML(this.data.modelStr),
            this.data.external.forEach(function (r) {
                t = 'instance "' + r.id + '"' || 'instance unknown',
                e = o.xml.getElementById(r.id),
                n = e.querySelector('root'),
                n && e.removeChild(n),
                e.appendChild(i.parseXML(r.xmlStr) .firstChild)
            })
        } catch (r) {
            console.error(r),
            this.loadErrors.push('Error trying to parse XML ' + t + '. ' + r.message)
        }
        if (this.xml) {
            this.$ = i(this.xml),
            this.hasInstance = !!this.xml.querySelector('model > instance') || !1,
            this.rootElement = this.xml.querySelector('instance > *') || this.xml.documentElement,
            this.$.find('model > instance[src]:empty') .each(function (t, e) {
                o.loadErrors.push('External instance "' + i(e) .attr('id') + '" is empty.')
            }),
            this.trimValues(),
            this.cloneAllTemplates(),
            this.extractTemplates();
            try {
                t = 'record',
                this.data.instanceStr && (this.mergeXml(this.data.instanceStr), this.data.submitted && this.deprecateId())
            } catch (r) {
                console.error(r),
                this.loadErrors.push('Error trying to parse XML ' + t + '. ' + r.message)
            }
        }
        return this.loadErrors
    },
    o.prototype.node = function (t, e, n) {
        return new r(t, e, n, this)
    },
    o.prototype.mergeXml = function (t) {
        var n,
        o,
        r,
        s,
        a = this;
        if (t) {
            if (r = this.xml.querySelector('instance'), s = this.xml.querySelector('instance > *'), !s) throw new Error('Model is corrupt. It does not contain a childnode of instance');
            if (i(i.parseXML(t)) .find('*') .each(function () {
                var t,
                e = i(this),
                n = e.prop('nodeName');
                try {
                    var o = e.siblings(n);
                    o.length > 0 && 0 === e.prev(n) .length && (t = e.getXPath('instance'), o.each(function (e) {
                        a.cloneRepeat(t, e, !0)
                    }))
                } catch (r) {
                    console.error('Ignored error:', r)
                }
            }), o = new e({
                join: !1
            }), n = (new XMLSerializer) .serializeToString(s), o.AddSource(n), o.AddSource(t), o.error.code) throw new Error(o.error.text);
            this.xml.querySelector('instance') .removeChild(s),
            s = this.xml.adoptNode(o.Get(0) .documentElement, !0),
            r.appendChild(s),
            this.rootElement = s
        }
    },
    o.prototype.trimValues = function () {
        this.node(null, null, {
            noEmpty: !0
        }) .get() .each(function () {
            this.textContent = this.textContent.trim()
        })
    },
    o.prototype.deprecateId = function () {
        var t,
        e,
        n,
        o,
        r;
        if (t = this.xml.querySelectorAll('* > meta > instanceID'), 1 !== t.length) throw new Error('Invalid primary instance. Found ' + t.length + ' instanceID nodes but expected 1.');
        if (e = t[0], n = this.xml.querySelectorAll('* > meta > deprecatedID'), n.length > 1) throw new Error('Invalid primary instance. Found ' + n.length + ' deprecatedID nodes but expected 1.');
        o = n[0],
        o || (o = i.parseXML('<deprecatedID/>') .documentElement, this.xml.adoptNode(o), r = this.xml.querySelector('* > meta'), r.appendChild(o)),
        o.textContent = e.textContent,
        e.textContent = ''
    },
    o.prototype.bindJsEvaluator = function () {
        var e = new t.XPathEvaluator;
        t.bindDomLevel3XPath(this.xml, {
            window: {
                JsXPathException: !0,
                JsXPathExpression: !0,
                JsXPathNSResolver: !0,
                JsXPathResult: !0,
                JsXPathNamespace: !0
            },
            document: {
                jsCreateExpression: function () {
                    return e.createExpression.apply(e, arguments)
                },
                jsCreateNSResolver: function () {
                    return e.createNSResolver.apply(e, arguments)
                },
                jsEvaluate: function () {
                    return e.evaluate.apply(e, arguments)
                }
            }
        })
    },
    o.prototype.getInstanceID = function () {
        return this.node('/*/meta/instanceID') .getVal() [0]
    },
    o.prototype.getInstanceName = function () {
        return this.node('/*/meta/instanceName') .getVal() [0]
    },
    o.prototype.cloneRepeat = function (t, e, n) {
        var o,
        r,
        s,
        a,
        l = this.templates[t] || this.node(t, 0) .get(),
        u = this;
        r = l.prop('nodeName'),
        o = this.node(t, e) .get(),
        l[0] && 1 === o.length && 0 === o.nextAll(r) .length ? (a = l.clone() .insertAfter(o), n ? a.find('*') .text('')  : (s = [
            l.prop('nodeName')
        ], l.find('*') .each(function () {
            s.push(i(this) .prop('nodeName'))
        }), this.$.trigger('dataupdate', {
            nodes: s,
            repeatPath: t,
            repeatIndex: u.node(t, e) .determineIndex(a)
        })))  : 0 === o.nextAll(r) .length && console.error('Could not find template node and/or node to insert the clone after')
    },
    o.prototype.extractTemplates = function () {
        var t = this;
        this.evaluate('/model/instance[1]/*//*[@template] | /model/instance[1]/*//*[@jr:template]', 'nodes', null, null, !0) .reverse() .forEach(function (e) {
            var n = i(e);
            t.templates[n.getXPath('instance')] = n.removeAttr('template') .removeAttr('jr:template') .remove()
        })
    },
    o.prototype.getTemplatePath = function (t) {
        var e,
        n = this;
        return t.split('/') .some(function (t, i, o) {
            return e = o.slice(0, o.length - i) .join('/'),
            n.templates[e]
        }),
        e || void 0
    },
    o.prototype.cloneAllTemplates = function () {
        var t = this;
        this.evaluate('/model/instance[1]/*//*[@template] | /model/instance[1]/*//*[@jr:template]', 'nodes', null, null, !0) .forEach(function (e) {
            var n = e.nodeName,
            o = i(e) .getXPath('instance'),
            r = t.evaluate('ancestor::' + n + '[@template] | ancestor::' + n + '[@jr:template]', 'nodes', o, 0, !0);
            0 === r.length && 0 === i(e) .siblings(n) .length && i(e) .clone() .insertAfter(i(e)) .find('*') .addBack() .removeAttr('template') .removeAttr('jr:template')
        })
    },
    o.prototype.get = function () {
        return this.$ || null
    },
    o.prototype.getXML = function () {
        return this.xml || null
    },
    o.prototype.getStr = function () {
        var t = (new XMLSerializer) .serializeToString(this.xml.querySelector('instance > *') || this.xml.documentElement, 'text/xml');
        return t = t.replace(/\t/g, ''),
        t = t.replace(/\s(data-)(xmlns\=("|')[^\s\>]+("|'))/g, ' $2')
    },
    o.prototype.makeBugCompliant = function (t, e, n) {
        var i,
        o,
        r,
        s,
        a,
        l,
        u,
        h;
        for (s = this.node(e, n) .get(), h = s.parents() .add(s), i = h.length - 1; i >= 0; i--) a = h.eq(i),
        l = a.prop('nodeName') .replace(/\./g, '\.'),
        u = a.siblings(l) .not('[template]'),
        'instance' !== l.toLowerCase() && 'model' !== l.toLowerCase() && u.length > 0 && (o = a.getXPath('instance'), r = u.add(a) .index(a), new RegExp(o + '\[') .test(t) || (t = t.replace(new RegExp(o, 'g'), o + '[' + (r + 1) + ']')));
        return t
    },
    o.prototype.nsResolver = {
        lookupNamespaceURI: function (t) {
            var e = {
                jr: 'http://openrosa.org/javarosa',
                xsd: 'http://www.w3.org/2001/XMLSchema',
                orx: 'http://openrosa.org/xforms/',
                cc: 'http://commcarehq.org/xforms'
            };
            return e[t] || null
        }
    },
    o.prototype.shiftRoot = function (t) {
        return this.hasInstance && (t = t.replace(/^(\/(?!model\/)[^\/][^\/\s]*\/)/g, '/model/instance[1]$1'), t = t.replace(/([^a-zA-Z0-9\.\]\)\/\*_-])(\/(?!model\/)[^\/][^\/\s]*\/)/g, '$1/model/instance[1]$2')),
        t
    },
    o.prototype.replaceInstanceFn = function (t) {
        return t.replace(this.INSTANCE, function (t, e) {
            return '/model/instance[@id="' + e + '"]'
        })
    },
    o.prototype.replaceCurrentFn = function (t) {
        return t = t.replace(/current\(\)\/\./g, '.'),
        t = t.replace(/current\(\)/g, '')
    },
    o.prototype.replaceIndexedRepeatFn = function (t, e, i) {
        var o = this,
        r = n.parseFunctionFromExpression(t, 'indexed-repeat');
        return r.length ? (r.forEach(function (n) {
            var r,
            s,
            a,
            l = n[1].split(',');
            if (l.length % 2 !== 1) return console.error('indexed repeat with incorrect number of parameters found', n[0]),
            '"Error with indexed-repeat parameters"';
            for (l = l.map(function (t) {
                return t.trim()
            }), s = l[0], r = l.length - 1; r > 1; r -= 2) a = isNaN(l[r]) ? o.evaluate(l[r], 'number', e, i, !0)  : l[r],
            s = s.replace(l[r - 1], l[r - 1] + '[position() = ' + a + ']');
            t = t.replace(n[0], s)
        }), t)  : t
    },
    o.prototype.evaluate = function (t, e, n, o, r) {
        var s,
        a,
        l,
        u,
        h,
        c,
        d,
        p,
        f,
        m,
        g,
        v,
        y;
        v = t,
        r = r || !1,
        e = e || 'any',
        o = o || 0,
        u = this.xml,
        m = null,
        n ? (p = this.node(n) .get(), m = p.length, l = p.eq(o) [0])  : l = this.rootElement,
        g = [
            t,
            n,
            o,
            m
        ].join('|'),
        t = this.replaceIndexedRepeatFn(t, n, o),
        y = v === t,
        this.convertedExpressions[g] ? t = this.convertedExpressions[g] : (t = t, t = t.trim(), t = this.shiftRoot(t), t = this.replaceInstanceFn(t), t = this.replaceCurrentFn(t), m && m > 1 && (t = this.makeBugCompliant(t, n, o)), t = t.replace(/&lt;/g, '<'), t = t.replace(/&gt;/g, '>'), t = t.replace(/&quot;/g, '"'), y && (this.convertedExpressions[g] = t)),
        c = {
            0: [
                'any',
                'ANY_TYPE'
            ],
            1: [
                'number',
                'NUMBER_TYPE',
                'numberValue'
            ],
            2: [
                'string',
                'STRING_TYPE',
                'stringValue'
            ],
            3: [
                'boolean',
                'BOOLEAN_TYPE',
                'booleanValue'
            ],
            7: [
                'nodes',
                'ORDERED_NODE_SNAPSHOT_TYPE'
            ],
            9: [
                'node',
                'FIRST_ORDERED_NODE_TYPE',
                'singleNodeValue'
            ]
        };
        for (h in c)
        if (c.hasOwnProperty(h)) {
            if (h = Number(h), c[h][0] === e) break;
            h = 0
        }
        if (r && 'undefined' != typeof u.evaluate && !this.OPENROSA.test(t)) try {
            d = u.evaluate(t, l, this.nsResolver, h, null)
        } catch (_) {
            console.log('%cWell native XPath evaluation did not work... No worries, worth a shot, the expression probably contained unknown OpenRosa functions or errors:', 'color:orange', t)
        }
        if (!d) try {
            'undefined' == typeof u.jsEvaluate && this.bindJsEvaluator(),
            d = u.jsEvaluate(t, l, this.nsResolver, h, null)
        } catch (_) {
            return a = 'Error occurred trying to evaluate: ' + t + ', message: ' + _.message,
            console.error(a),
            i(document) .trigger('xpatherror', a),
            this.loadErrors.push(a),
            null
        }
        if (d) {
            if (0 === h) {
                for (h in c)
                if (c.hasOwnProperty(h) && (h = Number(h), h === Number(d.resultType) && h > 0 && 4 > h)) {
                    f = d[c[h][2]];
                    break
                }
                console.error('Expression: ' + t + ' did not return any boolean, string or number value as expected')
            } else if (7 === h)
            for (f = [
            ], s = 0; s < d.snapshotLength; s++) f.push(d.snapshotItem(s));
             else f = d[c[h][2]];
            return f
        }
    },
    r = function (t, e, n, i) {
        var o = i.hasInstance ? '/model/instance[1]//*' : '//*';
        this.model = i,
        this.originalSelector = t,
        this.selector = 'string' == typeof t && t.length > 0 ? t : o,
        n = 'undefined' != typeof n && null !== n ? n : {
        },
        this.filter = n,
        this.filter.onlyLeaf = 'undefined' != typeof n.onlyLeaf ? n.onlyLeaf : !1,
        this.filter.noEmpty = 'undefined' != typeof n.noEmpty ? n.noEmpty : !1,
        this.index = e
    },
    r.prototype.get = function () {
        var t,
        e;
        return this.nodes || (this.nodes = this.model.evaluate(this.selector, 'nodes', null, null, !0)),
        t = this.filter.noEmpty === !0 ? i(this.nodes) .filter(function () {
            var t = i(this);
            return e = t.text(),
            0 === t.children() .length && e.trim() .length > 0
        })  : this.filter.onlyLeaf === !0 ? i(this.nodes) .filter(function () {
            return 0 === i(this) .children() .length
        })  : i(this.nodes),
        'undefined' != typeof this.index && null !== this.index ? t.eq(this.index)  : t
    },
    r.prototype.setIndex = function (t) {
        this.index = t
    },
    r.prototype.setVal = function (t, e, n) {
        var o,
        r,
        s,
        a,
        l;
        return r = this.getVal() [0],
        s = 'undefined' != typeof t && null !== t ? i.isArray(t) ? t.join(' ')  : t.toString()  : '',
        s = this.convert(s, n),
        o = this.get(),
        1 === o.length && i.trim(s.toString()) !== i.trim(r.toString()) ? (o.text(s), a = this.validate(e, n), l = this.getClosestRepeat(), l.nodes = [
            o.prop('nodeName')
        ], this.model.$.trigger('dataupdate', l), 'binary' === n && (s.length > 0 ? o.attr('type', 'file')  : o.removeAttr('type')), a)  : o.length > 1 ? (console.error('nodeset.setVal expected nodeset with one node, but received multiple'), null)  : 0 === o.length ? (console.error('Data node: ' + this.selector + ' with null-based index: ' + this.index + ' not found. Ignored.'), null)  : null
    },
    r.prototype.getVal = function () {
        var t = [
        ];
        return this.get() .each(function () {
            t.push(i(this) .text())
        }),
        t
    },
    r.prototype.determineIndex = function (t) {
        var e,
        n,
        o;
        return t = t || this.get(),
        1 === t.length ? (e = t.prop('nodeName'), n = t.getXPath('instance'), o = this.model.$.find(e) .filter(function () {
            return n === i(this) .getXPath('instance')
        }), 1 === o.length ? null : o.index(t))  : (console.error('no node, or multiple nodes, provided to nodeset.determineIndex'), - 1)
    },
    r.prototype.getClosestRepeat = function () {
        for (var t = this.get(), e = t.prop('nodeName'); 0 === t.siblings(e) .length && 'instance' !== e; ) t = t.parent(),
        e = t.prop('nodeName');
        return 'instance' === e ? {
        }
         : {
            repeatPath: t.getXPath('instance'),
            repeatIndex: this.determineIndex(t)
        }
    },
    r.prototype.remove = function () {
        var t,
        e,
        n,
        o,
        r;
        t = this.get(),
        t.length > 0 ? (e = [
            t.prop('nodeName')
        ], t.find('*') .each(function () {
            n = i(this),
            e.push(n.prop('nodeName'))
        }), o = t.getXPath('instance'), r = this.determineIndex(t), t.remove(), this.nodes = null, this.model.$.trigger('dataupdate', {
            updatedNodes: e,
            repeatPath: o,
            repeatIndex: r
        }))  : console.error('could not find node ' + this.selector + ' with index ' + this.index + ' to remove ')
    },
    r.prototype.convert = function (t, e) {
        return '' === t.toString() ? t : 'undefined' != typeof e && null !== e && 'undefined' != typeof s[e.toLowerCase()] && 'undefined' != typeof s[e.toLowerCase()].convert ? s[e.toLowerCase()].convert(t)  : t
    },
    r.prototype.validate = function (t, e) {
        var n,
        i,
        o;
        return e && 'undefined' != typeof s[e.toLowerCase()] || (e = 'string'),
        t || 'string' !== e && 'select' !== e && 'select1' !== e && 'binary' !== e ? (o = this.getVal() [0], '' === o.toString() ? !0 : (n = s[e.toLowerCase()].validate(o), i = 'undefined' != typeof t && null !== t && t.length > 0 ? this.model.evaluate(t, 'boolean', this.originalSelector, this.index)  : !0, n && i))  : !0
    },
    s = {
        string: {
            validate: function () {
                return !0
            }
        },
        select: {
            validate: function () {
                return !0
            }
        },
        select1: {
            validate: function () {
                return !0
            }
        },
        decimal: {
            validate: function (t) {
                return isNaN(t - 0) || null === t ? !1 : !0
            },
            convert: function (t) {
                return 'NaN' === t ? '' : t
            }
        },
        'int': {
            validate: function (t) {
                return isNaN(t - 0) || null === t || Math.round(t) .toString() !== t.toString() ? !1 : !0
            },
            convert: function (t) {
                return 'NaN' === t ? '' : t
            }
        },
        date: {
            validate: function (t) {
                var e = /([0-9]{4})([\-]|[\/])([0-9]{2})([\-]|[\/])([0-9]{2})/,
                n = e.exec(t);
                return n && 6 === n.length ? 'Invalid Date' !== new Date(Number(n[1]), Number(n[3]) - 1, Number(n[5])) .toString()  : !1
            },
            convert: function (t) {
                var e = /([0-9]{4})([\-]|[\/])([0-9]{2})([\-]|[\/])([0-9]{2})/,
                n = e.exec(t),
                i = new Date(t);
                return 'Invalid Date' === new Date(t) .toString() && n && Number(n[1]) > 0 && Number(n[3]) >= 0 && Number(n[3]) < 12 && Number(n[5]) < 32 && (i = new Date(Number(n[1]), Number(n[3]) - 1, Number(n[5]))),
                i.getUTCFullYear() .toString() .pad(4) + '-' + (i.getUTCMonth() + 1) .toString() .pad(2) + '-' + i.getUTCDate() .toString() .pad(2)
            }
        },
        datetime: {
            validate: function (t) {
                return 'Invalid Date' !== new Date(t.toString()) .toString() || 'Invalid Date' !== new Date(this.convert(t.toString())) .toString()
            },
            convert: function (t) {
                var e,
                n = /([0-9]{4}\-[0-9]{2}\-[0-9]{2})([T]|[\s])([0-9]){2}:([0-9]){2}([0-9:.]*)(\+|\-)([0-9]{2}):([0-9]{2})$/,
                i = /([0-9]{4}\-[0-9]{2}\-[0-9]{2})([T]|[\s])([0-9]){2}:([0-9]){2}([0-9:.]*)(\+|\-)([0-9]{2})$/;
                return 'Invalid Date' !== new Date(t) .toString() && n.test(t) ? t : 'Invalid Date' === new Date(t) .toString() && i.test(t) ? t + ':00' : (e = new Date(t), 'Invalid Date' !== e.toString() ? e.toISOLocalString()  : e.toString())
            }
        },
        time: {
            validate: function (t) {
                var e = new Date,
                n = t.toString() .split(':');
                return n.length < 2 ? !1 : (n[2] = n[2] ? Number(n[2].toString() .split('.') [0])  : 0, n[0] < 24 && n[0] >= 0 && n[1] < 60 && n[1] >= 0 && n[2] < 60 && n[2] >= 0 && 'Invalid Date' !== e.toString())
            },
            convert: function (t) {
                var e = t.toString() .split(':');
                return i.each(e, function (t, n) {
                    e[t] = n.toString() .pad(2)
                }),
                e.join(':')
            }
        },
        barcode: {
            validate: function () {
                return !0
            }
        },
        geopoint: {
            validate: function (t) {
                var e = t.toString() .trim() .split(' ');
                return '' !== e[0] && e[0] >= - 90 && e[0] <= 90 && '' !== e[1] && e[1] >= - 180 && e[1] <= 180 && ('undefined' == typeof e[2] || !isNaN(e[2])) && ('undefined' == typeof e[3] || !isNaN(e[3]) && e[3] >= 0)
            },
            convert: function (t) {
                return i.trim(t.toString())
            }
        },
        geotrace: {
            validate: function (t) {
                var e = t.toString() .split(';');
                return e.length >= 2 && e.every(function (t) {
                    return s.geopoint.validate(t)
                })
            },
            convert: function (t) {
                return t.toString() .trim()
            }
        },
        geoshape: {
            validate: function (t) {
                console.debug('validating geoshape, this: ', this);
                var e = t.toString() .split(';');
                return e.length >= 4 && e[0] === e[e.length - 1] && e.every(function (t) {
                    return s.geopoint.validate(t)
                })
            },
            convert: function (t) {
                return t.toString() .trim()
            }
        },
        binary: {
            validate: function () {
                return !0
            }
        }
    },
    o
}),
define('text', [
    'module'
], function (t) {
    'use strict';
    var e,
    n,
    i,
    o,
    r,
    s = [
        'Msxml2.XMLHTTP',
        'Microsoft.XMLHTTP',
        'Msxml2.XMLHTTP.4.0'
    ],
    a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
    l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
    u = 'undefined' != typeof location && location.href,
    h = u && location.protocol && location.protocol.replace(/\:/, ''),
    c = u && location.hostname,
    d = u && (location.port || void 0),
    p = {
    },
    f = t.config && t.config() || {
    };
    return e = {
        version: '2.0.10',
        strip: function (t) {
            if (t) {
                t = t.replace(a, '');
                var e = t.match(l);
                e && (t = e[1])
            } else t = '';
            return t
        },
        jsEscape: function (t) {
            return t.replace(/(['\\])/g, '\$1') .replace(/[\f]/g, '\f') .replace(/[\b]/g, '\b') .replace(/[\n]/g, '\n') .replace(/[\t]/g, '\t') .replace(/[\r]/g, '\r') .replace(/[\u2028]/g, '\u2028') .replace(/[\u2029]/g, '\u2029')
        },
        createXhr: f.createXhr || function () {
            var t,
            e,
            n;
            if ('undefined' != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ('undefined' != typeof ActiveXObject)
            for (e = 0; 3 > e; e += 1) {
                n = s[e];
                try {
                    t = new ActiveXObject(n)
                } catch (i) {
                }
                if (t) {
                    s = [
                        n
                    ];
                    break
                }
            }
            return t
        },
        parseName: function (t) {
            var e,
            n,
            i,
            o = !1,
            r = t.indexOf('.'),
            s = 0 === t.indexOf('./') || 0 === t.indexOf('../');
            return - 1 !== r && (!s || r > 1) ? (e = t.substring(0, r), n = t.substring(r + 1, t.length))  : e = t,
            i = n || e,
            r = i.indexOf('!'),
            - 1 !== r && (o = 'strip' === i.substring(r + 1), i = i.substring(0, r), n ? n = i : e = i),
            {
                moduleName: e,
                ext: n,
                strip: o
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function (t, n, i, o) {
            var r,
            s,
            a,
            l = e.xdRegExp.exec(t);
            return l ? (r = l[2], s = l[3], s = s.split(':'), a = s[1], s = s[0], !(r && r !== n || s && s.toLowerCase() !== i.toLowerCase() || (a || s) && a !== o))  : !0
        },
        finishLoad: function (t, n, i, o) {
            i = n ? e.strip(i)  : i,
            f.isBuild && (p[t] = i),
            o(i)
        },
        load: function (t, n, i, o) {
            if (o.isBuild && !o.inlineText) return void i();
            f.isBuild = o.isBuild;
            var r = e.parseName(t),
            s = r.moduleName + (r.ext ? '.' + r.ext : ''),
            a = n.toUrl(s),
            l = f.useXhr || e.useXhr;
            return 0 === a.indexOf('empty:') ? void i()  : void (!u || l(a, h, c, d) ? e.get(a, function (n) {
                e.finishLoad(t, r.strip, n, i)
            }, function (t) {
                i.error && i.error(t)
            })  : n([s], function (t) {
                e.finishLoad(r.moduleName + '.' + r.ext, r.strip, t, i)
            }))
        },
        write: function (t, n, i, o) {
            if (p.hasOwnProperty(n)) {
                var r = e.jsEscape(p[n]);
                i.asModule(t + '!' + n, 'define(function () { return \'' + r + '\';});\n')
            }
        },
        writeFile: function (t, n, i, o, r) {
            var s = e.parseName(n),
            a = s.ext ? '.' + s.ext : '',
            l = s.moduleName + a,
            u = i.toUrl(s.moduleName + a) + '.js';
            e.load(l, i, function (n) {
                var i = function (t) {
                    return o(u, t)
                };
                i.asModule = function (t, e) {
                    return o.asModule(t, u, e)
                },
                e.write(t, l, i, r)
            }, r)
        }
    },
    'node' === f.env || !f.env && 'undefined' != typeof process && process.versions && process.versions.node && !process.versions['node-webkit'] ? (n = require.nodeRequire('fs'), e.get = function (t, e, i) {
        try {
            var o = n.readFileSync(t, 'utf8');
            0 === o.indexOf('﻿') && (o = o.substring(1)),
            e(o)
        } catch (r) {
            i(r)
        }
    })  : 'xhr' === f.env || !f.env && e.createXhr() ? e.get = function (t, n, i, o) {
        var r,
        s = e.createXhr();
        if (s.open('GET', t, !0), o)
        for (r in o) o.hasOwnProperty(r) && s.setRequestHeader(r.toLowerCase(), o[r]);
        f.onXhr && f.onXhr(s, t),
        s.onreadystatechange = function (e) {
            var o,
            r;
            4 === s.readyState && (o = s.status, o > 399 && 600 > o ? (r = new Error(t + ' HTTP status: ' + o), r.xhr = s, i(r))  : n(s.responseText), f.onXhrComplete && f.onXhrComplete(s, t))
        },
        s.send(null)
    }
     : 'rhino' === f.env || !f.env && 'undefined' != typeof Packages && 'undefined' != typeof java ? e.get = function (t, e) {
        var n,
        i,
        o = 'utf-8',
        r = new java.io.File(t),
        s = java.lang.System.getProperty('line.separator'),
        a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), o)),
        l = '';
        try {
            for (n = new java.lang.StringBuffer, i = a.readLine(), i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)), null !== i && n.append(i); null !== (i = a.readLine()); ) n.append(s),
            n.append(i);
            l = String(n.toString())
        } finally {
            a.close()
        }
        e(l)
    }
     : ('xpconnect' === f.env || !f.env && 'undefined' != typeof Components && Components.classes && Components.interfaces) && (i = Components.classes, o = Components.interfaces, Components.utils['import']('resource://gre/modules/FileUtils.jsm'), r = '@mozilla.org/windows-registry-key;1' in i, e.get = function (t, e) {
        var n,
        s,
        a,
        l = {
        };
        r && (t = t.replace(/\//g,"\\")),
        a = new FileUtils.File(t);
        try {
            n = i['@mozilla.org/network/file-input-stream;1'].createInstance(o.nsIFileInputStream),
            n.init(a, 1, 0, !1),
            s = i['@mozilla.org/intl/converter-input-stream;1'].createInstance(o.nsIConverterInputStream),
            s.init(n, 'utf-8', n.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
            s.readString(n.available(), l),
            s.close(),
            n.close(),
            e(l.value)
        } catch (u) {
            throw new Error((a && a.path || '') + ': ' + u)
        }
    }),
    e
}),
define('text!enketo-config', [
], function () {
    return '{\n    "widgets": [\n        "enketo-widget/note/notewidget",\n        "enketo-widget/select-desktop/selectpicker",\n        "enketo-widget/select-mobile/selectpicker",\n        "enketo-widget/geo/geopicker",\n        "enketo-widget/table/tablewidget",\n        "enketo-widget/radio/radiopicker",\n        "enketo-widget/date/datepicker-extended",\n        "enketo-widget/time/timepicker-extended",\n        "enketo-widget/datetime/datetimepicker-extended",\n        "enketo-widget/mediagrid/mediagridpicker",\n        "enketo-widget/file/filepicker",\n        "enketo-widget/select-likert/likertitem",\n        "enketo-widget/distress/distresspicker",\n        "enketo-widget/horizontal-choices/horizontalchoices"\n    ],\n    "maps": [ {\n        "tiles": [ "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" ],\n        "name": "streets",\n        "attribution": "Map data © <a href=\\"http://openstreetmap.org\\">OpenStreetMap</a> contributors"\n    }, {\n        "tiles": "GOOGLE_SATELLITE",\n        "name": "satellite"\n    } ],\n    "googleApiKey": ""\n}\n'
}),
function (t) {
    if ('function' == typeof bootstrap) bootstrap('promise', t);
     else if ('object' == typeof exports) module.exports = t();
     else if ('function' == typeof define && define.amd) define('q', t);
     else if ('undefined' != typeof ses) {
        if (!ses.ok()) return ;
        ses.makeQ = t
    } else Q = t()
}(function () {
    'use strict';
    function t(t) {
        return function () {
            return H.apply(t, arguments)
        }
    }
    function e(t) {
        return t === Object(t)
    }
    function n(t) {
        return '[object StopIteration]' === et(t) || t instanceof V
    }
    function i(t, e) {
        if (F && e.stack && 'object' == typeof t && null !== t && t.stack && - 1 === t.stack.indexOf(nt)) {
            for (var n = [
            ], i = e; i; i = i.source) i.stack && n.unshift(i.stack);
            n.unshift(t.stack);
            var r = n.join('\n' + nt + '\n');
            t.stack = o(r)
        }
    }
    function o(t) {
        for (var e = t.split('\n'), n = [
        ], i = 0; i < e.length; ++i) {
            var o = e[i];
            a(o) || r(o) || !o || n.push(o)
        }
        return n.join('\n')
    }
    function r(t) {
        return - 1 !== t.indexOf('(module.js:') || - 1 !== t.indexOf('(node.js:')
    }
    function s(t) {
        var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (e) return [e[1],
        Number(e[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (n) return [n[1],
        Number(n[2])];
        var i = /.*@(.+):(\d+)$/.exec(t);
        return i ? [
            i[1],
            Number(i[2])
        ] : void 0
    }
    function a(t) {
        var e = s(t);
        if (!e) return !1;
        var n = e[0],
        i = e[1];
        return n === $ && i >= q && st >= i
    }
    function l() {
        if (F) try {
            throw new Error
        } catch (t) {
            var e = t.stack.split('\n'),
            n = e[0].indexOf('@') > 0 ? e[1] : e[2],
            i = s(n);
            if (!i) return ;
            return $ = i[0],
            i[1]
        }
    }
    function u(t, e, n) {
        return function () {
            return 'undefined' != typeof console && 'function' == typeof console.warn && console.warn(e + ' is deprecated, use ' + n + ' instead.', new Error('') .stack),
            t.apply(t, arguments)
        }
    }
    function h(t) {
        return v(t) ? t : y(t) ? P(t)  : T(t)
    }
    function c() {
        function t(t) {
            e = t,
            r.source = t,
            G(n, function (e, n) {
                Z(function () {
                    t.promiseDispatch.apply(t, n)
                })
            }, void 0),
            n = void 0,
            i = void 0
        }
        var e,
        n = [
        ],
        i = [
        ],
        o = K(c.prototype),
        r = K(f.prototype);
        if (r.promiseDispatch = function (t, o, r) {
            var s = X(arguments);
            n ? (n.push(s), 'when' === o && r[1] && i.push(r[1]))  : Z(function () {
                e.promiseDispatch.apply(e, s)
            })
        }, r.valueOf = function () {
            if (n) return r;
            var t = g(e);
            return v(t) && (e = t),
            t
        }, r.inspect = function () {
            return e ? e.inspect()  : {
                state: 'pending'
            }
        }, h.longStackSupport && F) try {
            throw new Error
        } catch (s) {
            r.stack = s.stack.substring(s.stack.indexOf('\n') + 1)
        }
        return o.promise = r,
        o.resolve = function (n) {
            e || t(h(n))
        },
        o.fulfill = function (n) {
            e || t(T(n))
        },
        o.reject = function (n) {
            e || t(E(n))
        },
        o.notify = function (t) {
            e || G(i, function (e, n) {
                Z(function () {
                    n(t)
                })
            }, void 0)
        },
        o
    }
    function d(t) {
        if ('function' != typeof t) throw new TypeError('resolver must be a function.');
        var e = c();
        try {
            t(e.resolve, e.reject, e.notify)
        } catch (n) {
            e.reject(n)
        }
        return e.promise
    }
    function p(t) {
        return d(function (e, n) {
            for (var i = 0, o = t.length; o > i; i++) h(t[i]) .then(e, n)
        })
    }
    function f(t, e, n) {
        void 0 === e && (e = function (t) {
            return E(new Error('Promise does not support operation: ' + t))
        }),
        void 0 === n && (n = function () {
            return {
                state: 'unknown'
            }
        });
        var i = K(f.prototype);
        if (i.promiseDispatch = function (n, o, r) {
            var s;
            try {
                s = t[o] ? t[o].apply(i, r)  : e.call(i, o, r)
            } catch (a) {
                s = E(a)
            }
            n && n(s)
        }, i.inspect = n, n) {
            var o = n();
            'rejected' === o.state && (i.exception = o.reason),
            i.valueOf = function () {
                var t = n();
                return 'pending' === t.state || 'rejected' === t.state ? i : t.value
            }
        }
        return i
    }
    function m(t, e, n, i) {
        return h(t) .then(e, n, i)
    }
    function g(t) {
        if (v(t)) {
            var e = t.inspect();
            if ('fulfilled' === e.state) return e.value
        }
        return t
    }
    function v(t) {
        return e(t) && 'function' == typeof t.promiseDispatch && 'function' == typeof t.inspect
    }
    function y(t) {
        return e(t) && 'function' == typeof t.then
    }
    function _(t) {
        return v(t) && 'pending' === t.inspect() .state
    }
    function b(t) {
        return !v(t) || 'fulfilled' === t.inspect() .state
    }
    function w(t) {
        return v(t) && 'rejected' === t.inspect() .state
    }
    function x() {
        it.length = 0,
        ot.length = 0,
        rt || (rt = !0)
    }
    function k(t, e) {
        rt && (ot.push(t), e && 'undefined' != typeof e.stack ? it.push(e.stack)  : it.push('(no stack) ' + e))
    }
    function D(t) {
        if (rt) {
            var e = Y(ot, t);
            - 1 !== e && (ot.splice(e, 1), it.splice(e, 1))
        }
    }
    function E(t) {
        var e = f({
            when: function (e) {
                return e && D(this),
                e ? e(t)  : this
            }
        }, function () {
            return this
        }, function () {
            return {
                state: 'rejected',
                reason: t
            }
        });
        return k(e, t),
        e
    }
    function T(t) {
        return f({
            when: function () {
                return t
            },
            get: function (e) {
                return t[e]
            },
            set: function (e, n) {
                t[e] = n
            },
            'delete': function (e) {
                delete t[e]
            },
            post: function (e, n) {
                return null === e || void 0 === e ? t.apply(void 0, n)  : t[e].apply(t, n)
            },
            apply: function (e, n) {
                return t.apply(e, n)
            },
            keys: function () {
                return tt(t)
            }
        }, void 0, function () {
            return {
                state: 'fulfilled',
                value: t
            }
        })
    }
    function P(t) {
        var e = c();
        return Z(function () {
            try {
                t.then(e.resolve, e.reject, e.notify)
            } catch (n) {
                e.reject(n)
            }
        }),
        e.promise
    }
    function S(t) {
        return f({
            isDef: function () {
            }
        }, function (e, n) {
            return O(t, e, n)
        }, function () {
            return h(t) .inspect()
        })
    }
    function C(t, e, n) {
        return h(t) .spread(e, n)
    }
    function L(t) {
        return function () {
            function e(t, e) {
                var s;
                if ('undefined' == typeof StopIteration) {
                    try {
                        s = i[t](e)
                    } catch (a) {
                        return E(a)
                    }
                    return s.done ? s.value : m(s.value, o, r)
                }
                try {
                    s = i[t](e)
                } catch (a) {
                    return n(a) ? a.value : E(a)
                }
                return m(s, o, r)
            }
            var i = t.apply(this, arguments),
            o = e.bind(e, 'next'),
            r = e.bind(e, 'throw');
            return o()
        }
    }
    function M(t) {
        h.done(h.async(t) ())
    }
    function N(t) {
        throw new V(t)
    }
    function I(t) {
        return function () {
            return C([this,
            A(arguments)], function (e, n) {
                return t.apply(e, n)
            })
        }
    }
    function O(t, e, n) {
        return h(t) .dispatch(e, n)
    }
    function A(t) {
        return m(t, function (t) {
            var e = 0,
            n = c();
            return G(t, function (i, o, r) {
                var s;
                v(o) && 'fulfilled' === (s = o.inspect()) .state ? t[r] = s.value : (++e, m(o, function (i) {
                    t[r] = i,
                    0 === --e && n.resolve(t)
                }, n.reject, function (t) {
                    n.notify({
                        index: r,
                        value: t
                    })
                }))
            }, void 0),
            0 === e && n.resolve(t),
            n.promise
        })
    }
    function R(t) {
        return m(t, function (t) {
            return t = J(t, h),
            m(A(J(t, function (t) {
                return m(t, W, W)
            })), function () {
                return t
            })
        })
    }
    function U(t) {
        return h(t) .allSettled()
    }
    function j(t, e) {
        return h(t) .then(void 0, void 0, e)
    }
    function B(t, e) {
        return h(t) .nodeify(e)
    }
    var F = !1;
    try {
        throw new Error
    } catch (z) {
        F = !!z.stack
    }
    var $,
    V,
    q = l(),
    W = function () {
    },
    Z = function () {
        function t() {
            for (; e.next; ) {
                e = e.next;
                var n = e.task;
                e.task = void 0;
                var o = e.domain;
                o && (e.domain = void 0, o.enter());
                try {
                    n()
                } catch (s) {
                    if (r) throw o && o.exit(),
                    setTimeout(t, 0),
                    o && o.enter(),
                    s;
                    setTimeout(function () {
                        throw s
                    }, 0)
                }
                o && o.exit()
            }
            i = !1
        }
        var e = {
            task: void 0,
            next: null
        },
        n = e,
        i = !1,
        o = void 0,
        r = !1;
        if (Z = function (t) {
            n = n.next = {
                task: t,
                domain: r && process.domain,
                next: null
            },
            i || (i = !0, o())
        }, 'undefined' != typeof process && process.nextTick) r = !0,
        o = function () {
            process.nextTick(t)
        };
         else if ('function' == typeof setImmediate) o = 'undefined' != typeof window ? setImmediate.bind(window, t)  : function () {
            setImmediate(t)
        };
         else if ('undefined' != typeof MessageChannel) {
            var s = new MessageChannel;
            s.port1.onmessage = function () {
                o = a,
                s.port1.onmessage = t,
                t()
            };
            var a = function () {
                s.port2.postMessage(0)
            };
            o = function () {
                setTimeout(t, 0),
                a()
            }
        } else o = function () {
            setTimeout(t, 0)
        };
        return Z
    }(),
    H = Function.call,
    X = t(Array.prototype.slice),
    G = t(Array.prototype.reduce || function (t, e) {
        var n = 0,
        i = this.length;
        if (1 === arguments.length)
        for (; ; ) {
            if (n in this) {
                e = this[n++];
                break
            }
            if (++n >= i) throw new TypeError
        }
        for (; i > n; n++) n in this && (e = t(e, this[n], n));
        return e
    }),
    Y = t(Array.prototype.indexOf || function (t) {
        for (var e = 0; e < this.length; e++)
        if (this[e] === t) return e;
        return - 1
    }),
    J = t(Array.prototype.map || function (t, e) {
        var n = this,
        i = [
        ];
        return G(n, function (o, r, s) {
            i.push(t.call(e, r, s, n))
        }, void 0),
        i
    }),
    K = Object.create || function (t) {
        function e() {
        }
        return e.prototype = t,
        new e
    },
    Q = t(Object.prototype.hasOwnProperty),
    tt = Object.keys || function (t) {
        var e = [
        ];
        for (var n in t) Q(t, n) && e.push(n);
        return e
    },
    et = t(Object.prototype.toString);
    V = 'undefined' != typeof ReturnValue ? ReturnValue : function (t) {
        this.value = t
    };
    var nt = 'From previous event:';
    h.resolve = h,
    h.nextTick = Z,
    h.longStackSupport = !1,
    h.defer = c,
    c.prototype.makeNodeResolver = function () {
        var t = this;
        return function (e, n) {
            e ? t.reject(e)  : arguments.length > 2 ? t.resolve(X(arguments, 1))  : t.resolve(n)
        }
    },
    h.Promise = d,
    h.promise = d,
    d.race = p,
    d.all = A,
    d.reject = E,
    d.resolve = h,
    h.passByCopy = function (t) {
        return t
    },
    f.prototype.passByCopy = function () {
        return this
    },
    h.join = function (t, e) {
        return h(t) .join(e)
    },
    f.prototype.join = function (t) {
        return h([this,
        t]) .spread(function (t, e) {
            if (t === e) return t;
            throw new Error('Can\'t join: not the same: ' + t + ' ' + e)
        })
    },
    h.race = p,
    f.prototype.race = function () {
        return this.then(h.race)
    },
    h.makePromise = f,
    f.prototype.toString = function () {
        return '[object Promise]'
    },
    f.prototype.then = function (t, e, n) {
        function o(e) {
            try {
                return 'function' == typeof t ? t(e)  : e
            } catch (n) {
                return E(n)
            }
        }
        function r(t) {
            if ('function' == typeof e) {
                i(t, a);
                try {
                    return e(t)
                } catch (n) {
                    return E(n)
                }
            }
            return E(t)
        }
        function s(t) {
            return 'function' == typeof n ? n(t)  : t
        }
        var a = this,
        l = c(),
        u = !1;
        return Z(function () {
            a.promiseDispatch(function (t) {
                u || (u = !0, l.resolve(o(t)))
            }, 'when', [
                function (t) {
                    u || (u = !0, l.resolve(r(t)))
                }
            ])
        }),
        a.promiseDispatch(void 0, 'when', [
            void 0,
            function (t) {
                var e,
                n = !1;
                try {
                    e = s(t)
                } catch (i) {
                    if (n = !0, !h.onerror) throw i;
                    h.onerror(i)
                }
                n || l.notify(e)
            }
        ]),
        l.promise
    },
    h.when = m,
    f.prototype.thenResolve = function (t) {
        return this.then(function () {
            return t
        })
    },
    h.thenResolve = function (t, e) {
        return h(t) .thenResolve(e)
    },
    f.prototype.thenReject = function (t) {
        return this.then(function () {
            throw t
        })
    },
    h.thenReject = function (t, e) {
        return h(t) .thenReject(e)
    },
    h.nearer = g,
    h.isPromise = v,
    h.isPromiseAlike = y,
    h.isPending = _,
    f.prototype.isPending = function () {
        return 'pending' === this.inspect() .state
    },
    h.isFulfilled = b,
    f.prototype.isFulfilled = function () {
        return 'fulfilled' === this.inspect() .state
    },
    h.isRejected = w,
    f.prototype.isRejected = function () {
        return 'rejected' === this.inspect() .state
    };
    var it = [
    ],
    ot = [
    ],
    rt = !0;
    h.resetUnhandledRejections = x,
    h.getUnhandledReasons = function () {
        return it.slice()
    },
    h.stopUnhandledRejectionTracking = function () {
        x(),
        rt = !1
    },
    x(),
    h.reject = E,
    h.fulfill = T,
    h.master = S,
    h.spread = C,
    f.prototype.spread = function (t, e) {
        return this.all() .then(function (e) {
            return t.apply(void 0, e)
        }, e)
    },
    h.async = L,
    h.spawn = M,
    h['return'] = N,
    h.promised = I,
    h.dispatch = O,
    f.prototype.dispatch = function (t, e) {
        var n = this,
        i = c();
        return Z(function () {
            n.promiseDispatch(i.resolve, t, e)
        }),
        i.promise
    },
    h.get = function (t, e) {
        return h(t) .dispatch('get', [
            e
        ])
    },
    f.prototype.get = function (t) {
        return this.dispatch('get', [
            t
        ])
    },
    h.set = function (t, e, n) {
        return h(t) .dispatch('set', [
            e,
            n
        ])
    },
    f.prototype.set = function (t, e) {
        return this.dispatch('set', [
            t,
            e
        ])
    },
    h.del = h['delete'] = function (t, e) {
        return h(t) .dispatch('delete', [
            e
        ])
    },
    f.prototype.del = f.prototype['delete'] = function (t) {
        return this.dispatch('delete', [
            t
        ])
    },
    h.mapply = h.post = function (t, e, n) {
        return h(t) .dispatch('post', [
            e,
            n
        ])
    },
    f.prototype.mapply = f.prototype.post = function (t, e) {
        return this.dispatch('post', [
            t,
            e
        ])
    },
    h.send = h.mcall = h.invoke = function (t, e) {
        return h(t) .dispatch('post', [
            e,
            X(arguments, 2)
        ])
    },
    f.prototype.send = f.prototype.mcall = f.prototype.invoke = function (t) {
        return this.dispatch('post', [
            t,
            X(arguments, 1)
        ])
    },
    h.fapply = function (t, e) {
        return h(t) .dispatch('apply', [
            void 0,
            e
        ])
    },
    f.prototype.fapply = function (t) {
        return this.dispatch('apply', [
            void 0,
            t
        ])
    },
    h['try'] = h.fcall = function (t) {
        return h(t) .dispatch('apply', [
            void 0,
            X(arguments, 1)
        ])
    },
    f.prototype.fcall = function () {
        return this.dispatch('apply', [
            void 0,
            X(arguments)
        ])
    },
    h.fbind = function (t) {
        var e = h(t),
        n = X(arguments, 1);
        return function () {
            return e.dispatch('apply', [
                this,
                n.concat(X(arguments))
            ])
        }
    },
    f.prototype.fbind = function () {
        var t = this,
        e = X(arguments);
        return function () {
            return t.dispatch('apply', [
                this,
                e.concat(X(arguments))
            ])
        }
    },
    h.keys = function (t) {
        return h(t) .dispatch('keys', [
        ])
    },
    f.prototype.keys = function () {
        return this.dispatch('keys', [
        ])
    },
    h.all = A,
    f.prototype.all = function () {
        return A(this)
    },
    h.allResolved = u(R, 'allResolved', 'allSettled'),
    f.prototype.allResolved = function () {
        return R(this)
    },
    h.allSettled = U,
    f.prototype.allSettled = function () {
        return this.then(function (t) {
            return A(J(t, function (t) {
                function e() {
                    return t.inspect()
                }
                return t = h(t),
                t.then(e, e)
            }))
        })
    },
    h.fail = h['catch'] = function (t, e) {
        return h(t) .then(void 0, e)
    },
    f.prototype.fail = f.prototype['catch'] = function (t) {
        return this.then(void 0, t)
    },
    h.progress = j,
    f.prototype.progress = function (t) {
        return this.then(void 0, void 0, t)
    },
    h.fin = h['finally'] = function (t, e) {
        return h(t) ['finally'](e)
    },
    f.prototype.fin = f.prototype['finally'] = function (t) {
        return t = h(t),
        this.then(function (e) {
            return t.fcall() .then(function () {
                return e
            })
        }, function (e) {
            return t.fcall() .then(function () {
                throw e
            })
        })
    },
    h.done = function (t, e, n, i) {
        return h(t) .done(e, n, i)
    },
    f.prototype.done = function (t, e, n) {
        var o = function (t) {
            Z(function () {
                if (i(t, r), !h.onerror) throw t;
                h.onerror(t)
            })
        },
        r = t || e || n ? this.then(t, e, n)  : this;
        'object' == typeof process && process && process.domain && (o = process.domain.bind(o)),
        r.then(void 0, o)
    },
    h.timeout = function (t, e, n) {
        return h(t) .timeout(e, n)
    },
    f.prototype.timeout = function (t, e) {
        var n = c(),
        i = setTimeout(function () {
            n.reject(new Error(e || 'Timed out after ' + t + ' ms'))
        }, t);
        return this.then(function (t) {
            clearTimeout(i),
            n.resolve(t)
        }, function (t) {
            clearTimeout(i),
            n.reject(t)
        }, n.notify),
        n.promise
    },
    h.delay = function (t, e) {
        return void 0 === e && (e = t, t = void 0),
        h(t) .delay(e)
    },
    f.prototype.delay = function (t) {
        return this.then(function (e) {
            var n = c();
            return setTimeout(function () {
                n.resolve(e)
            }, t),
            n.promise
        })
    },
    h.nfapply = function (t, e) {
        return h(t) .nfapply(e)
    },
    f.prototype.nfapply = function (t) {
        var e = c(),
        n = X(t);
        return n.push(e.makeNodeResolver()),
        this.fapply(n) .fail(e.reject),
        e.promise
    },
    h.nfcall = function (t) {
        var e = X(arguments, 1);
        return h(t) .nfapply(e)
    },
    f.prototype.nfcall = function () {
        var t = X(arguments),
        e = c();
        return t.push(e.makeNodeResolver()),
        this.fapply(t) .fail(e.reject),
        e.promise
    },
    h.nfbind = h.denodeify = function (t) {
        var e = X(arguments, 1);
        return function () {
            var n = e.concat(X(arguments)),
            i = c();
            return n.push(i.makeNodeResolver()),
            h(t) .fapply(n) .fail(i.reject),
            i.promise
        }
    },
    f.prototype.nfbind = f.prototype.denodeify = function () {
        var t = X(arguments);
        return t.unshift(this),
        h.denodeify.apply(void 0, t)
    },
    h.nbind = function (t, e) {
        var n = X(arguments, 2);
        return function () {
            function i() {
                return t.apply(e, arguments)
            }
            var o = n.concat(X(arguments)),
            r = c();
            return o.push(r.makeNodeResolver()),
            h(i) .fapply(o) .fail(r.reject),
            r.promise
        }
    },
    f.prototype.nbind = function () {
        var t = X(arguments, 0);
        return t.unshift(this),
        h.nbind.apply(void 0, t)
    },
    h.nmapply = h.npost = function (t, e, n) {
        return h(t) .npost(e, n)
    },
    f.prototype.nmapply = f.prototype.npost = function (t, e) {
        var n = X(e || []),
        i = c();
        return n.push(i.makeNodeResolver()),
        this.dispatch('post', [
            t,
            n
        ]) .fail(i.reject),
        i.promise
    },
    h.nsend = h.nmcall = h.ninvoke = function (t, e) {
        var n = X(arguments, 2),
        i = c();
        return n.push(i.makeNodeResolver()),
        h(t) .dispatch('post', [
            e,
            n
        ]) .fail(i.reject),
        i.promise
    },
    f.prototype.nsend = f.prototype.nmcall = f.prototype.ninvoke = function (t) {
        var e = X(arguments, 1),
        n = c();
        return e.push(n.makeNodeResolver()),
        this.dispatch('post', [
            t,
            e
        ]) .fail(n.reject),
        n.promise
    },
    h.nodeify = B,
    f.prototype.nodeify = function (t) {
        return t ? void this.then(function (e) {
            Z(function () {
                t(null, e)
            })
        }, function (e) {
            Z(function () {
                t(e)
            })
        })  : this
    };
    var st = l();
    return h
}),
define('enketo-js/widgets', [
    'text!enketo-config',
    'enketo-js/support',
    'q',
    'jquery'
], function (t, e, n, i) {
    'use strict';
    var o,
    r,
    s,
    a,
    l,
    u,
    h,
    c,
    d,
    p,
    f,
    m = [
    ];
    return r = function (e) {
        o = i('form.or'),
        e = e || o,
        u(JSON.parse(t)) .then(function (t) {
            c(e)
        })
    },
    s = function (t) {
        for (var e, n, i = 0; i < m.length; i++) e = m[i],
        e.name && (n = h(t, e.selector), n[e.name]('enable'))
    },
    a = function (t) {
        for (var e, n, i = 0; i < m.length; i++) e = m[i],
        e.name && (n = h(t, e.selector), n[e.name]('disable'))
    },
    l = function (t) {
        for (var e, n, i = 0; i < m.length; i++) e = m[i],
        e.name && (n = h(t, e.selector), n[e.name]('destroy'))
    },
    u = function (t) {
        for (var e, i, o = n.defer(), r = [
        ], s = 0; s < t.widgets.length; s++) e = 'text!' + t.widgets[s].substr(0, t.widgets[s].lastIndexOf('/') + 1) + 'config.json',
        r.push(e);
        return require(r, function () {
            for (var e = 0; e < arguments.length; e++) i = JSON.parse(arguments[e]),
            i.path = t.widgets[e],
            m.push(i);
            o.resolve(m)
        }),
        o.promise
    },
    h = function (t, e) {
        return e ? 'form' === e ? o : t.find(e)  : i()
    },
    c = function (t) {
        m.forEach(function (n) {
            var i;
            return n.options = n.options || {
            },
            n.options.touch = e.touch,
            n.selector || null === n.selector ? (i = h(t, n.selector), void (i.length && (n.load || (n.load = d(n)), n.load.then(function (t) {
                t.name && (i[t.name](t.options), p(t, i), f(t, i))
            }))))  : console.error('widget configuration has no acceptable selector property', n)
        })
    },
    d = function (t) {
        var e = n.defer();
        return require([t.path], function (n) {
            t.name = n,
            e.resolve(t)
        }),
        e.promise
    },
    p = function (t, e) {
        e.length > 0 && o.on('changelanguage', function () {
            e[t.name]('update')
        })
    },
    f = function (t, e) {
        e.length > 0 && 'select' === e.prop('nodeName') .toLowerCase() && o.on('changeoption', 'select', function () {
            i(this) [t.name]('update')
        })
    },
    {
        init: r,
        enable: s,
        disable: a,
        destroy: l
    }
}),
function (t) {
    'function' == typeof define && define.amd && define.amd.jQuery ? define('jquery.touchswipe', [
        'jquery'
    ], t)  : t(jQuery)
}(function (t) {
    'use strict';
    function e(e) {
        return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = h),
        void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
        e || (e = {
        }),
        e = t.extend({
        }, t.fn.swipe.defaults, e),
        this.each(function () {
            var i = t(this),
            o = i.data(S);
            o || (o = new n(this, e), i.data(S, o))
        })
    }
    function n(e, n) {
        function i(e) {
            if (!(ut() || t(e.target) .closest(n.excludedElements, qt) .length > 0)) {
                var i,
                o = e.originalEvent ? e.originalEvent : e,
                r = o.touches,
                s = r ? r[0] : o;
                return Wt = w,
                r ? Zt = r.length : e.preventDefault(),
                At = 0,
                Rt = null,
                $t = null,
                Ut = 0,
                jt = 0,
                Bt = 0,
                Ft = 1,
                zt = 0,
                Ht = ft(),
                Vt = vt(),
                at(),
                !r || Zt === n.fingers || n.fingers === _ || V() ? (ct(0, s), Xt = Tt(), 2 == Zt && (ct(1, r[1]), jt = Bt = bt(Ht[0].start, Ht[1].start)), (n.swipeStatus || n.pinchStatus) && (i = A(o, Wt)))  : i = !1,
                i === !1 ? (Wt = D, A(o, Wt), i)  : (n.hold && (te = setTimeout(t.proxy(function () {
                    qt.trigger('hold', [
                        o.target
                    ]),
                    n.hold && (i = n.hold.call(qt, o, o.target))
                }, this), n.longTapThreshold)), ht(!0), null)
            }
        }
        function C(t) {
            var e = t.originalEvent ? t.originalEvent : t;
            if (Wt !== k && Wt !== D && !lt()) {
                var i,
                o = e.touches,
                r = o ? o[0] : e,
                s = dt(r);
                if (Gt = Tt(), o && (Zt = o.length), n.hold && clearTimeout(te), Wt = x, 2 == Zt && (0 == jt ? (ct(1, o[1]), jt = Bt = bt(Ht[0].start, Ht[1].start))  : (dt(o[1]), Bt = bt(Ht[0].end, Ht[1].end), $t = xt(Ht[0].end, Ht[1].end)), Ft = wt(jt, Bt), zt = Math.abs(jt - Bt)), Zt === n.fingers || n.fingers === _ || !o || V()) {
                    if (Rt = Et(s.start, s.end), z(t, Rt), At = kt(s.start, s.end), Ut = _t(), mt(Rt, At), (n.swipeStatus || n.pinchStatus) && (i = A(e, Wt)), !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
                        var a = !0;
                        if (n.triggerOnTouchLeave) {
                            var l = Pt(this);
                            a = St(s.end, l)
                        }
                        !n.triggerOnTouchEnd && a ? Wt = O(x)  : n.triggerOnTouchLeave && !a && (Wt = O(k)),
                        (Wt == D || Wt == k) && A(e, Wt)
                    }
                } else Wt = D,
                A(e, Wt);
                i === !1 && (Wt = D, A(e, Wt))
            }
        }
        function L(t) {
            var e = t.originalEvent ? t.originalEvent : t,
            i = e.touches;
            return i && i.length ? (st(), !0)  : (lt() && (Zt = Jt), Gt = Tt(), Ut = _t(), j() || !U() ? (Wt = D, A(e, Wt))  : n.triggerOnTouchEnd || 0 == n.triggerOnTouchEnd && Wt === x ? (t.preventDefault(), Wt = k, A(e, Wt))  : !n.triggerOnTouchEnd && Y() ? (Wt = k, R(e, Wt, f))  : Wt === x && (Wt = D, A(e, Wt)), ht(!1), null)
        }
        function M() {
            Zt = 0,
            Gt = 0,
            Xt = 0,
            jt = 0,
            Bt = 0,
            Ft = 1,
            at(),
            ht(!1)
        }
        function N(t) {
            var e = t.originalEvent ? t.originalEvent : t;
            n.triggerOnTouchLeave && (Wt = O(k), A(e, Wt))
        }
        function I() {
            qt.unbind(Lt, i),
            qt.unbind(Ot, M),
            qt.unbind(Mt, C),
            qt.unbind(Nt, L),
            It && qt.unbind(It, N),
            ht(!1)
        }
        function O(t) {
            var e = t,
            i = F(),
            o = U(),
            r = j();
            return !i || r ? e = D : !o || t != x || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !o && t == k && n.triggerOnTouchLeave && (e = D)  : e = k,
            e
        }
        function A(t, e) {
            var n,
            i = t.touches;
            return H() || Z() || q() || V() ? ((H() || Z()) && (n = R(t, e, d)), (q() || V()) && n !== !1 && (n = R(t, e, p)))  : ot() && n !== !1 ? n = R(t, e, m)  : rt() && n !== !1 ? n = R(t, e, g)  : it() && n !== !1 && (n = R(t, e, f)),
            e === D && M(t),
            e === k && (i ? i.length || M(t)  : M(t)),
            n
        }
        function R(e, i, h) {
            var c;
            if (h == d) {
                if (qt.trigger('swipeStatus', [
                    i,
                    Rt || null,
                    At || 0,
                    Ut || 0,
                    Zt,
                    Ht
                ]), n.swipeStatus && (c = n.swipeStatus.call(qt, e, i, Rt || null, At || 0, Ut || 0, Zt, Ht), c === !1)) return !1;
                if (i == k && W()) {
                    if (qt.trigger('swipe', [
                        Rt,
                        At,
                        Ut,
                        Zt,
                        Ht
                    ]), n.swipe && (c = n.swipe.call(qt, e, Rt, At, Ut, Zt, Ht), c === !1)) return !1;
                    switch (Rt) {
                    case o:
                        qt.trigger('swipeLeft', [
                            Rt,
                            At,
                            Ut,
                            Zt,
                            Ht
                        ]),
                        n.swipeLeft && (c = n.swipeLeft.call(qt, e, Rt, At, Ut, Zt, Ht));
                        break;
                    case r:
                        qt.trigger('swipeRight', [
                            Rt,
                            At,
                            Ut,
                            Zt,
                            Ht
                        ]),
                        n.swipeRight && (c = n.swipeRight.call(qt, e, Rt, At, Ut, Zt, Ht));
                        break;
                    case s:
                        qt.trigger('swipeUp', [
                            Rt,
                            At,
                            Ut,
                            Zt,
                            Ht
                        ]),
                        n.swipeUp && (c = n.swipeUp.call(qt, e, Rt, At, Ut, Zt, Ht));
                        break;
                    case a:
                        qt.trigger('swipeDown', [
                            Rt,
                            At,
                            Ut,
                            Zt,
                            Ht
                        ]),
                        n.swipeDown && (c = n.swipeDown.call(qt, e, Rt, At, Ut, Zt, Ht))
                    }
                }
            }
            if (h == p) {
                if (qt.trigger('pinchStatus', [
                    i,
                    $t || null,
                    zt || 0,
                    Ut || 0,
                    Zt,
                    Ft,
                    Ht
                ]), n.pinchStatus && (c = n.pinchStatus.call(qt, e, i, $t || null, zt || 0, Ut || 0, Zt, Ft, Ht), c === !1)) return !1;
                if (i == k && $()) switch ($t) {
                case l:
                    qt.trigger('pinchIn', [
                        $t || null,
                        zt || 0,
                        Ut || 0,
                        Zt,
                        Ft,
                        Ht
                    ]),
                    n.pinchIn && (c = n.pinchIn.call(qt, e, $t || null, zt || 0, Ut || 0, Zt, Ft, Ht));
                    break;
                case u:
                    qt.trigger('pinchOut', [
                        $t || null,
                        zt || 0,
                        Ut || 0,
                        Zt,
                        Ft,
                        Ht
                    ]),
                    n.pinchOut && (c = n.pinchOut.call(qt, e, $t || null, zt || 0, Ut || 0, Zt, Ft, Ht))
                }
            }
            return h == f ? (i === D || i === k) && (clearTimeout(Qt), clearTimeout(te), J() && !tt() ? (Kt = Tt(), Qt = setTimeout(t.proxy(function () {
                Kt = null,
                qt.trigger('tap', [
                    e.target
                ]),
                n.tap && (c = n.tap.call(qt, e, e.target))
            }, this), n.doubleTapThreshold))  : (Kt = null, qt.trigger('tap', [
                e.target
            ]), n.tap && (c = n.tap.call(qt, e, e.target))))  : h == m ? (i === D || i === k) && (clearTimeout(Qt), Kt = null, qt.trigger('doubletap', [
                e.target
            ]), n.doubleTap && (c = n.doubleTap.call(qt, e, e.target)))  : h == g && (i === D || i === k) && (clearTimeout(Qt), Kt = null, qt.trigger('longtap', [
                e.target
            ]), n.longTap && (c = n.longTap.call(qt, e, e.target))),
            c
        }
        function U() {
            var t = !0;
            return null !== n.threshold && (t = At >= n.threshold),
            t
        }
        function j() {
            var t = !1;
            return null !== n.cancelThreshold && null !== Rt && (t = gt(Rt) - At >= n.cancelThreshold),
            t
        }
        function B() {
            return null !== n.pinchThreshold ? zt >= n.pinchThreshold : !0
        }
        function F() {
            var t;
            return t = n.maxTimeThreshold && Ut >= n.maxTimeThreshold ? !1 : !0
        }
        function z(t, e) {
            if (n.preventDefaultEvents !== !1)
            if (n.allowPageScroll === h) t.preventDefault();
             else {
                var i = n.allowPageScroll === c;
                switch (e) {
                case o:
                    (n.swipeLeft && i || !i && n.allowPageScroll != v) && t.preventDefault();
                    break;
                case r:
                    (n.swipeRight && i || !i && n.allowPageScroll != v) && t.preventDefault();
                    break;
                case s:
                    (n.swipeUp && i || !i && n.allowPageScroll != y) && t.preventDefault();
                    break;
                case a:
                    (n.swipeDown && i || !i && n.allowPageScroll != y) && t.preventDefault()
                }
            }
        }
        function $() {
            var t = X(),
            e = G(),
            n = B();
            return t && e && n
        }
        function V() {
            return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
        }
        function q() {
            return !(!$() || !V())
        }
        function W() {
            var t = F(),
            e = U(),
            n = X(),
            i = G(),
            o = j(),
            r = !o && i && n && e && t;
            return r
        }
        function Z() {
            return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
        }
        function H() {
            return !(!W() || !Z())
        }
        function X() {
            return Zt === n.fingers || n.fingers === _ || !E
        }
        function G() {
            return 0 !== Ht[0].end.x
        }
        function Y() {
            return !!n.tap
        }
        function J() {
            return !!n.doubleTap
        }
        function K() {
            return !!n.longTap
        }
        function Q() {
            if (null == Kt) return !1;
            var t = Tt();
            return J() && t - Kt <= n.doubleTapThreshold
        }
        function tt() {
            return Q()
        }
        function et() {
            return (1 === Zt || !E) && (isNaN(At) || At < n.threshold)
        }
        function nt() {
            return Ut > n.longTapThreshold && b > At
        }
        function it() {
            return !(!et() || !Y())
        }
        function ot() {
            return !(!Q() || !J())
        }
        function rt() {
            return !(!nt() || !K())
        }
        function st() {
            Yt = Tt(),
            Jt = event.touches.length + 1
        }
        function at() {
            Yt = 0,
            Jt = 0
        }
        function lt() {
            var t = !1;
            if (Yt) {
                var e = Tt() - Yt;
                e <= n.fingerReleaseThreshold && (t = !0)
            }
            return t
        }
        function ut() {
            return !(qt.data(S + '_intouch') !== !0)
        }
        function ht(t) {
            t === !0 ? (qt.bind(Mt, C), qt.bind(Nt, L), It && qt.bind(It, N))  : (qt.unbind(Mt, C, !1), qt.unbind(Nt, L, !1), It && qt.unbind(It, N, !1)),
            qt.data(S + '_intouch', t === !0)
        }
        function ct(t, e) {
            var n = void 0 !== e.identifier ? e.identifier : 0;
            return Ht[t].identifier = n,
            Ht[t].start.x = Ht[t].end.x = e.pageX || e.clientX,
            Ht[t].start.y = Ht[t].end.y = e.pageY || e.clientY,
            Ht[t]
        }
        function dt(t) {
            var e = void 0 !== t.identifier ? t.identifier : 0,
            n = pt(e);
            return n.end.x = t.pageX || t.clientX,
            n.end.y = t.pageY || t.clientY,
            n
        }
        function pt(t) {
            for (var e = 0; e < Ht.length; e++)
            if (Ht[e].identifier == t) return Ht[e]
        }
        function ft() {
            for (var t = [
            ], e = 0; 5 >= e; e++) t.push({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                identifier: 0
            });
            return t
        }
        function mt(t, e) {
            e = Math.max(e, gt(t)),
            Vt[t].distance = e
        }
        function gt(t) {
            return Vt[t] ? Vt[t].distance : void 0
        }
        function vt() {
            var t = {
            };
            return t[o] = yt(o),
            t[r] = yt(r),
            t[s] = yt(s),
            t[a] = yt(a),
            t
        }
        function yt(t) {
            return {
                direction: t,
                distance: 0
            }
        }
        function _t() {
            return Gt - Xt
        }
        function bt(t, e) {
            var n = Math.abs(t.x - e.x),
            i = Math.abs(t.y - e.y);
            return Math.round(Math.sqrt(n * n + i * i))
        }
        function wt(t, e) {
            var n = e / t * 1;
            return n.toFixed(2)
        }
        function xt() {
            return 1 > Ft ? u : l
        }
        function kt(t, e) {
            return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
        }
        function Dt(t, e) {
            var n = t.x - e.x,
            i = e.y - t.y,
            o = Math.atan2(i, n),
            r = Math.round(180 * o / Math.PI);
            return 0 > r && (r = 360 - Math.abs(r)),
            r
        }
        function Et(t, e) {
            var n = Dt(t, e);
            return 45 >= n && n >= 0 ? o : 360 >= n && n >= 315 ? o : n >= 135 && 225 >= n ? r : n > 45 && 135 > n ? a : s
        }
        function Tt() {
            var t = new Date;
            return t.getTime()
        }
        function Pt(e) {
            e = t(e);
            var n = e.offset(),
            i = {
                left: n.left,
                right: n.left + e.outerWidth(),
                top: n.top,
                bottom: n.top + e.outerHeight()
            };
            return i
        }
        function St(t, e) {
            return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
        }
        var Ct = E || P || !n.fallbackToMouseEvents,
        Lt = Ct ? P ? T ? 'MSPointerDown' : 'pointerdown' : 'touchstart' : 'mousedown',
        Mt = Ct ? P ? T ? 'MSPointerMove' : 'pointermove' : 'touchmove' : 'mousemove',
        Nt = Ct ? P ? T ? 'MSPointerUp' : 'pointerup' : 'touchend' : 'mouseup',
        It = Ct ? null : 'mouseleave',
        Ot = P ? T ? 'MSPointerCancel' : 'pointercancel' : 'touchcancel',
        At = 0,
        Rt = null,
        Ut = 0,
        jt = 0,
        Bt = 0,
        Ft = 1,
        zt = 0,
        $t = 0,
        Vt = null,
        qt = t(e),
        Wt = 'start',
        Zt = 0,
        Ht = null,
        Xt = 0,
        Gt = 0,
        Yt = 0,
        Jt = 0,
        Kt = 0,
        Qt = null,
        te = null;
        try {
            qt.bind(Lt, i),
            qt.bind(Ot, M)
        } catch (ee) {
            t.error('events not supported ' + Lt + ',' + Ot + ' on jQuery.swipe')
        }
        this.enable = function () {
            return qt.bind(Lt, i),
            qt.bind(Ot, M),
            qt
        },
        this.disable = function () {
            return I(),
            qt
        },
        this.destroy = function () {
            I(),
            qt.data(S, null),
            qt = null
        },
        this.option = function (e, i) {
            if (void 0 !== n[e]) {
                if (void 0 === i) return n[e];
                n[e] = i
            } else t.error('Option ' + e + ' does not exist on jQuery.swipe.options');
            return null
        }
    }
    var i = '1.6.9',
    o = 'left',
    r = 'right',
    s = 'up',
    a = 'down',
    l = 'in',
    u = 'out',
    h = 'none',
    c = 'auto',
    d = 'swipe',
    p = 'pinch',
    f = 'tap',
    m = 'doubletap',
    g = 'longtap',
    v = 'horizontal',
    y = 'vertical',
    _ = 'all',
    b = 10,
    w = 'start',
    x = 'move',
    k = 'end',
    D = 'cancel',
    E = 'ontouchstart' in window,
    T = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
    P = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
    S = 'TouchSwipe',
    C = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: 'auto',
        fallbackToMouseEvents: !0,
        excludedElements: 'label, button, input, select, textarea, a, .noSwipe',
        preventDefaultEvents: !0
    };
    t.fn.swipe = function (n) {
        var i = t(this),
        o = i.data(S);
        if (o && 'string' == typeof n) {
            if (o[n]) return o[n].apply(this, Array.prototype.slice.call(arguments, 1));
            t.error('Method ' + n + ' does not exist on jQuery.swipe')
        } else if (!(o || 'object' != typeof n && n)) return e.apply(this, arguments);
        return i
    },
    t.fn.swipe.version = i,
    t.fn.swipe.defaults = C,
    t.fn.swipe.phases = {
        PHASE_START: w,
        PHASE_MOVE: x,
        PHASE_END: k,
        PHASE_CANCEL: D
    },
    t.fn.swipe.directions = {
        LEFT: o,
        RIGHT: r,
        UP: s,
        DOWN: a,
        IN: l,
        OUT: u
    },
    t.fn.swipe.pageScroll = {
        NONE: h,
        HORIZONTAL: v,
        VERTICAL: y,
        AUTO: c
    },
    t.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: _
    }
}),
define('enketo-js/Form', [
    'enketo-js/FormModel',
    'enketo-js/widgets',
    'jquery',
    'enketo-js/plugins',
    'enketo-js/extend',
    'jquery.touchswipe'
], function (t, e, n) {
    'use strict';
    function i(i, o) {
        function r(t) {
            u = n(t),
            this.$ = u,
            this.$nonRepeats = {
            }
        }
        var s,
        a,
        l,
        u,
        h,
        c,
        d,
        p = [
        ];
        this.init = function () {
            return h = n(i) .clone() .appendTo('<original></original>'),
            s = new t(o),
            p = p.concat(s.init()),
            l = new r(i),
            c = n(i) .find('.or-repeat') .length > 0,
            l.init(),
            window.scrollTo && window.scrollTo(0, 0),
            p
        },
        this.ex = function (t, e, n, i, o) {
            return s.evaluate(t, e, n, i, o)
        },
        this.getModel = function () {
            return s
        },
        this.getInstanceID = function () {
            return s.getInstanceID()
        },
        this.getInstanceName = function () {
            return s.getInstanceName()
        },
        this.getView = function () {
            return l
        },
        this.getEncryptionKey = function () {
            return l.$.data('base64rsapublickey')
        },
        this.getDataStr = function () {
            return s.getStr()
        },
        this.getRecordName = function () {
            return l.recordName.get()
        },
        this.setRecordName = function (t) {
            return l.recordName.set(t)
        },
        this.setEditStatus = function (t) {
            return l.editStatus.set(t)
        },
        this.getEditStatus = function () {
            return l.editStatus.get()
        },
        this.getSurveyName = function () {
            return u.find('#form-title') .text()
        },
        this.resetView = function () {
            n('#form-languages') .remove(),
            u.replaceWith(h)
        },
        this.resetHTML = this.resetView,
        this.validate = function () {
            return l.validateAll()
        },
        this.isValid = function () {
            return l.isValid()
        },
        d = function (t, e, i, o, r) {
            var a,
            l,
            h,
            c = '',
            d = t.match(/jr:choice-name\(([^,]+),\s?'(.*?)'\)/);
            return d ? (a = s.evaluate(d[1], e, i, o, r), l = d[2].trim(), h = u.find('[name="' + l + '"]'), h.length > 0 && 'select' === h.prop('nodeName') .toLowerCase() ? c = h.find('[value="' + a + '"]') .text()  : h.length > 0 && 'input' === h.prop('nodeName') .toLowerCase() && (c = h.filter(function () {
                return n(this) .attr('value') === a
            }) .siblings('.option-label.active') .text()), t.replace(d[0], '"' + c + '"'))  : t
        },
        r.prototype.init = function () {
            var n = this;
            return 'undefined' != typeof s && s instanceof t ? (this.preloads.init(this), this.grosslyViolateStandardComplianceByIgnoringCertainCalcs(), this.calcUpdate(), this.langs.init(), this.repeat.init(this), this.itemsetUpdate(), this.setAllVals(), e.init(), this.branchUpdate(), this.pages.init(), this.outputUpdate(), this.setEventHandlers(), this.editStatus.set(!1), void setTimeout(function () {
                n.progress.update()
            }, 0))  : console.error('variable data needs to be defined as instance of FormModel')
        },
        r.prototype.pages = {
            active: !1,
            $current: [
            ],
            $activePages: n(),
            init: function () {
                if (u.hasClass('pages')) {
                    var t = u.find('.note, .question, .trigger, .or-appearance-field-list') .filter(function () {
                        return 0 === n(this) .parent() .closest('.or-appearance-field-list') .length
                    }) .attr('role', 'page');
                    (t.length > 1 || t.eq(0) .hasClass('or-repeat')) && (this.$formFooter = n('.form-footer'), this.$btnFirst = this.$formFooter.find('.first-page'), this.$btnPrev = this.$formFooter.find('.previous-page'), this.$btnNext = this.$formFooter.find('.next-page'), this.$btnLast = this.$formFooter.find('.last-page'), this.updateAllActive(t), this.toggleButtons(0), this.setButtonHandlers(), this.setRepeatHandlers(), this.setBranchHandlers(), this.setSwipeHandlers(), this.active = !0),
                    this.flipToFirst(),
                    u.show()
                }
            },
            setButtonHandlers: function () {
                var t = this;
                this.$btnFirst.off('.pagemode') .on('click.pagemode', function () {
                    return t.flipToFirst(),
                    !1
                }),
                this.$btnPrev.off('.pagemode') .on('click.pagemode', function () {
                    return t.prev(),
                    !1
                }),
                this.$btnNext.off('.pagemode') .on('click.pagemode', function () {
                    return t.next(),
                    !1
                }),
                this.$btnLast.off('.pagemode') .on('click.pagemode', function () {
                    return t.flipToLast(),
                    !1
                })
            },
            setSwipeHandlers: function () {
                var t = this,
                e = n('.main');
                e.swipe('destroy'),
                e.swipe({
                    allowPageScroll: 'vertical',
                    threshold: 150,
                    swipeLeft: function () {
                        t.next()
                    },
                    swipeRight: function () {
                        t.prev()
                    }
                })
            },
            setRepeatHandlers: function () {
                var t = this;
                u.off('addrepeat.pagemode') .on('addrepeat.pagemode', function (e) {
                    t.updateAllActive(),
                    n(e.target) .removeClass('current contains-current') .find('.current') .removeClass('current'),
                    t.flipToPageContaining(n(e.target))
                }) .off('removerepeat.pagemode') .on('removerepeat.pagemode', function (e) {
                    0 === t.$current.closest('html') .length && (t.updateAllActive(), t.flipToPageContaining(n(e.target)))
                })
            },
            setBranchHandlers: function () {
                var t = this;
                u.off('changebranch.pagemode') .on('changebranch.pagemode', function () {
                    t.updateAllActive(),
                    t.toggleButtons()
                })
            },
            getCurrent: function () {
                return this.$current
            },
            updateAllActive: function (t) {
                t = t || n('.or [role="page"]'),
                this.$activePages = t.filter(function () {
                    return 0 === n(this) .closest('.disabled') .length
                })
            },
            getAllActive: function () {
                return this.$activePages
            },
            getPrev: function (t) {
                return this.$activePages[t - 1]
            },
            getNext: function (t) {
                return this.$activePages[t + 1]
            },
            getCurrentIndex: function () {
                return this.$activePages.index(this.$current)
            },
            next: function () {
                var t,
                e;
                this.updateAllActive(),
                e = this.getCurrentIndex(),
                t = this.getNext(e),
                t && this.flipTo(t, e + 1)
            },
            prev: function () {
                var t,
                e;
                this.updateAllActive(),
                e = this.getCurrentIndex(),
                t = this.getPrev(e),
                t && this.flipTo(t, e - 1)
            },
            setToCurrent: function (t) {
                var e = n(t);
                e.addClass('current hidden'),
                this.$current = e.removeClass('hidden') .parentsUntil('.or', '.or-group, .or-group-data, .or-repeat') .addClass('contains-current') .end()
            },
            flipTo: function (t, e) {
                this.$current.length > 0 && 1 === this.$current.closest('html') .length ? this.$current[0] !== t && (this.$current.removeClass('current fade-out') .parentsUntil('.or', '.or-group, .or-group-data, .or-repeat') .removeClass('contains-current'), this.setToCurrent(t), this.focusOnFirstQuestion(t), this.toggleButtons(e))  : (this.setToCurrent(t), this.focusOnFirstQuestion(t), this.toggleButtons(e)),
                window.scrollTo && window.scrollTo(0, 0),
                n(t) .trigger('pageflip.enketo')
            },
            flipToFirst: function () {
                this.updateAllActive(),
                this.flipTo(this.$activePages[0])
            },
            flipToLast: function () {
                this.updateAllActive(),
                this.flipTo(this.$activePages.last() [0])
            },
            flipToPageContaining: function (t) {
                var e;
                e = t.closest('[role="page"]'),
                e = 0 === e.length ? t.find('[role="page"]')  : e,
                this.flipTo(e[0])
            },
            focusOnFirstQuestion: function (t) {
                n(t) .find('.question:not(.disabled)') .filter(function () {
                    return 0 === n(this) .parentsUntil('.or', '.disabled') .length
                }) .eq(0) .find('input, select, textarea') .eq(0) .trigger('fakefocus')
            },
            toggleButtons: function (t) {
                var e = t || this.getCurrentIndex(),
                n = this.getNext(e),
                i = this.getPrev(e);
                this.$btnNext.add(this.$btnLast) .toggleClass('disabled', !n),
                this.$btnPrev.add(this.$btnFirst) .toggleClass('disabled', !i),
                this.$formFooter.toggleClass('end', !n)
            }
        },
        r.prototype.input = {
            getWrapNodes: function (t) {
                var e = this.getInputType(t.eq(0));
                return 'fieldset' === e ? t : t.closest('.question, .note')
            },
            getProps: function (t) {
                return 1 !== t.length ? console.error('getProps(): no input node provided or multiple')  : {
                    path: this.getName(t),
                    ind: this.getIndex(t),
                    inputType: this.getInputType(t),
                    xmlType: this.getXmlType(t),
                    constraint: this.getConstraint(t),
                    calculation: this.getCalculation(t),
                    relevant: this.getRelevant(t),
                    val: this.getVal(t),
                    required: this.isRequired(t),
                    enabled: this.isEnabled(t),
                    multiple: this.isMultiple(t)
                }
            },
            getInputType: function (t) {
                var e;
                return 1 !== t.length ? '' : (e = t.prop('nodeName') .toLowerCase(), 'input' === e ? t.attr('type') .length > 0 ? t.attr('type') .toLowerCase()  : console.error('<input> node has no type')  : 'select' === e ? 'select' : 'textarea' === e ? 'textarea' : 'fieldset' === e || 'section' === e ? 'fieldset' : console.error('unexpected input node type provided'))
            },
            getConstraint: function (t) {
                return t.attr('data-constraint')
            },
            getRelevant: function (t) {
                return t.attr('data-relevant')
            },
            getCalculation: function (t) {
                return t.attr('data-calculate')
            },
            getXmlType: function (t) {
                return 1 !== t.length ? console.error('getXMLType(): no input node provided or multiple')  : t.attr('data-type-xml')
            },
            getName: function (t) {
                var e;
                return 1 !== t.length ? console.error('getName(): no input node provided or multiple')  : (e = t.attr('data-name') || t.attr('name'), e || console.error('input node has no name'))
            },
            getIndex: function (t) {
                var e,
                n,
                i,
                o;
                return 1 !== t.length ? console.error('getIndex(): no input node provided or multiple')  : (e = this.getInputType(t), n = this.getName(t), i = this.getWrapNodes(t), o = 'radio' === e && n !== t.attr('name') ? this.getWrapNodes(u.find('[data-name="' + n + '"]'))  : 'fieldset' === e && t.hasClass('or-repeat') ? this.getWrapNodes(u.find('.or-repeat[name="' + n + '"]'))  : 'fieldset' === e && t.hasClass('or-group') ? this.getWrapNodes(u.find('.or-group[name="' + n + '"]'))  : this.getWrapNodes(u.find('[name="' + n + '"]')), o.index(i))
            },
            isMultiple: function (t) {
                return 'checkbox' === this.getInputType(t) || void 0 !== t.attr('multiple') ? !0 : !1
            },
            isEnabled: function (t) {
                return !(t.prop('disabled') || t.parentsUntil('.or', '.disabled') .length > 0)
            },
            isRequired: function (t) {
                return void 0 !== t.attr('required') && 0 === t.parentsUntil('.or', '.or-appearance-label') .length
            },
            getVal: function (t) {
                var e,
                i,
                o = [
                ];
                return 1 !== t.length ? console.error('getVal(): no inputNode provided or multiple')  : (e = this.getInputType(t), i = this.getName(t), 'radio' === e ? this.getWrapNodes(t) .find('input:checked') .val() || '' : 'checkbox' === e ? (this.getWrapNodes(t) .find('input[name="' + i + '"]:checked') .each(function () {
                    o.push(n(this) .val())
                }), o)  : t.val() ? n.isArray(t.val()) ? t.val() .join(' ') .trim()  : t.val() .trim()  : '')
            },
            setVal: function (t, e, n) {
                var i,
                o;
                if (e = e || 0, 'radio' === this.getInputType(u.find('[data-name="' + t + '"]') .eq(0))) o = 'radio',
                i = this.getWrapNodes(u.find('[data-name="' + t + '"]')) .eq(e) .find('[data-name="' + t + '"]');
                 else {
                    if (i = this.getWrapNodes(u.find('[name="' + t + '"]')) .eq(e) .find('[name="' + t + '"]'), o = this.getInputType(i.eq(0)), 'file' === o) return i.eq(0) .attr('data-loaded-file-name', n),
                    !1;
                    ('date' === o || 'datetime' === o) && (n = s.node(t, e) .convert(n, o))
                }
                this.isMultiple(i.eq(0)) === !0 ? n = n.split(' ')  : 'radio' === o && (n = [
                    n
                ]),
                i.is('[readonly]') && i.toggleClass('has-value', !!n),
                i.val(n),
                'select' == o && i.hasClass('autocomplete') && 'undefined' != typeof i.data('combobox') && i.data('combobox') .propagate()
            }
        },
        r.prototype.setAllVals = function (t, e) {
            var i,
            o,
            r,
            a = this,
            l = t && t.attr('name') ? t.attr('name')  : null;
            e = 'undefined' != typeof e ? e : null,
            s.node(l, e) .get() .find('*') .filter(function () {
                var t = n(this);
                return 0 === t.children() .length && t.text()
            }) .each(function () {
                var t = n(this);
                try {
                    r = t.text(),
                    o = t.getXPath('instance'),
                    i = s.node(o) .get() .index(this),
                    a.input.setVal(o, i, r)
                } catch (e) {
                    console.error(e),
                    p.push('Could not load input field value with name: ' + o + ' and value: ' + r)
                }
            })
        },
        r.prototype.langs = {
            init: function () {
                var t,
                e = this,
                i = u.find('#form-languages'),
                o = n('.form-language-selector'),
                r = i.attr('data-default-lang') || i.find('option') .eq(0) .attr('value'),
                s = i.find('[value="' + r + '"]') .attr('data-dir') || 'ltr';
                i.detach() .appendTo(o) .val(r),
                u.attr('dir', s),
                i.find('option') .length < 2 || (o.removeClass('hide'), i.change(function (i) {
                    i.preventDefault(),
                    t = n(this) .val(),
                    e.setAll(t)
                }))
            },
            setAll: function (t) {
                var e = this,
                i = n('#form-languages') .find('[value="' + t + '"]') .attr('data-dir') || 'ltr';
                u.attr('dir', i) .find('[lang]') .removeClass('active') .filter('[lang="' + t + '"], [lang=""]') .filter(function () {
                    var t = n(this);
                    return !t.hasClass('or-form-short') || t.hasClass('or-form-short') && 0 === t.siblings('.or-form-long') .length
                }) .addClass('active'),
                u.find('select') .each(function () {
                    e.setSelect(n(this))
                }),
                u.trigger('changelanguage')
            },
            setSelect: function (t) {
                var e,
                i,
                o;
                t.children('option') .not('[value=""]') .each(function () {
                    var t = n(this);
                    i = t.text(),
                    e = t.attr('value'),
                    o = t.parent('select') .siblings('.or-option-translations') .children('.active[data-option-value="' + e + '"]') .text() .trim(),
                    o = 'undefined' != typeof o && o.length > 0 ? o : i,
                    t.text(o)
                })
            }
        },
        r.prototype.editStatus = {
            set: function (t) {
                t && t !== u.data('edited') && u.trigger('edited.enketo'),
                u.data('edited', t)
            },
            get: function () {
                return !!u.data('edited')
            }
        },
        r.prototype.recordName = {
            set: function (t) {
                u.attr('name', t)
            },
            get: function () {
                return u.attr('name')
            }
        },
        r.prototype.getNodesToUpdate = function (t, e, i) {
            var o,
            r = null,
            s = [
            ],
            a = this;
            return i = i || {
            },
            e = e || '',
            this.$nonRepeats[t] || (this.$nonRepeats[t] = u.find(e + '[' + t + ']') .parentsUntil('.or', '.calculation, .question, .note, .trigger') .filter(function () {
                return 0 === n(this) .closest('.or-repeat') .length
            })),
            'undefined' != typeof i.repeatPath && i.repeatIndex >= 0 && (r = u.find('.or-repeat[name="' + i.repeatPath + '"]') .eq(i.repeatIndex)),
            o = r ? this.$nonRepeats[t].add(r)  : u,
            i.nodes && 0 !== i.nodes.length ? (i.nodes.forEach(function (n) {
                s = s.concat(a.getQuerySelectorsForLogic(e, t, n))
            }), s = s.concat(a.getQuerySelectorsForLogic(e, t, '*')))  : s = s.concat([e + '[' + t + ']']),
            o.find(s.join())
        },
        r.prototype.getQuerySelectorsForLogic = function (t, e, n) {
            return [t + '[' + e + '*="/' + n + ' "]',
            t + '[' + e + '*="/' + n + ')"]',
            t + '[' + e + '*="/' + n + ',"]',
            t + '[' + e + '$="/' + n + '"]',
            t + '[' + e + '*="/' + n + ']"]']
        },
        r.prototype.branchUpdate = function (t) {
            function i(t, e, n) {
                var i = s.evaluate(t, 'boolean', e, n);
                return i
            }
            function o(t, e) {
                e === !0 ? a(t)  : l(t)
            }
            function r(t) {
                return !t.hasClass('disabled') && !t.hasClass('pre-init')
            }
            function a(t) {
                var n;
                r(t) || (w = !0, t.removeClass('disabled pre-init'), e.enable(t), n = t.prop('nodeName') .toLowerCase(), 'label' === n ? t.children('input, select, textarea') .prop('disabled', !1)  : 'fieldset' === n ? (t.prop('disabled', !1), t.find('*:not(.or-branch) input[type="file"]:not([data-relevant])') .prop('disabled', !0) .prop('disabled', !1))  : t.find('fieldset, input, select, textarea') .prop('disabled', !1))
            }
            function l(t) {
                var i = t.prop('nodeName') .toLowerCase(),
                o = t.hasClass('pre-init');
                (o || r(t)) && (w = !0, t.addClass('disabled'), o ? t.removeClass('pre-init')  : (t.clearInputs('change'), e.disable(t), t.find('.invalid-required, .invalid-constraint') .find('input, select, textarea') .each(function () {
                    x.setValid(n(this))
                })), 'label' === i ? t.children('input, select, textarea') .prop('disabled', !0)  : 'fieldset' === i ? t.prop('disabled', !0)  : t.find('fieldset, input, select, textarea') .prop('disabled', !0))
            }
            var h,
            d,
            p,
            f,
            m,
            g,
            v,
            y,
            _ = {
            },
            b = [
            ],
            w = !1,
            x = this;
            v = this.getNodesToUpdate('data-relevant', '', t),
            y = c && u.find('.or-repeat.clone') .length > 0 ? !0 : !1,
            v.each(function () {
                var t = n(this);
                if ( - 1 === n.inArray(t.attr('name'), b)) {
                    if (d = t.closest('.or-branch'), h = {
                    }, g = null, h.relevant = x.input.getRelevant(t), h.path = x.input.getName(t), 1 !== d.length) return void (0 === t.parentsUntil('.or', '#or-calculated-items') .length && console.error('could not find branch node for ', n(this)));
                    f = y && d.parentsUntil('.or', '.or-repeat') .length > 0 ? !0 : !1,
                    m = y && d.parentsUntil('.or', '.or-repeat.clone') .length > 0 ? !0 : !1,
                    h.ind = m ? x.input.getIndex(t)  : 0,
                    - 1 === h.relevant.indexOf('..') && (g = f ? h.relevant + '__' + h.path.substring(0, h.path.lastIndexOf('/')) + '__' + h.ind : h.relevant),
                    g && 'undefined' != typeof _[g] ? p = _[g] : (p = i(h.relevant, h.path, h.ind), _[g] = p),
                    f || b.push(n(this) .attr('name')),
                    o(d, p)
                }
            }),
            w && this.$.trigger('changebranch')
        },
        r.prototype.itemsetUpdate = function (t) {
            var e,
            i,
            o,
            r,
            a = this,
            l = {
            };
            r = this.getNodesToUpdate('data-items-path', '.itemset-template', t),
            e = c && u.find('.or-repeat.clone') .length > 0 ? !0 : !1,
            r.each(function () {
                var t,
                r,
                u,
                h,
                c,
                d,
                p,
                f,
                m,
                g,
                v,
                y,
                _,
                b,
                w,
                x,
                k;
                if (f = n(this), !f.parentsUntil('.or', '.or-branch') .parentsUntil('.or', '.disabled') .length) {
                    if (m = {
                    }, g = f.data(), v = f.prop('nodeName') .toLowerCase(), y = 'label' === v ? f.children('input') .eq(0)  : f.parent('select'), _ = f.closest('label, select') .siblings('.itemset-labels'), b = f.attr('data-items-path'), w = _.attr('data-label-type'), x = _.attr('data-label-ref'), k = _.attr('data-value-ref'), d = a.input.getName(y), i = e && y.parentsUntil('.or', '.or-repeat') .length > 0 ? !0 : !1, o = e && y.parentsUntil('.or', '.or-repeat.clone') .length > 0 ? !0 : !1, c = o ? a.input.getIndex(y)  : 0, 'undefined' != typeof l[b]) h = l[b];
                     else {
                        var D = !0;
                        h = n(s.evaluate(b, 'nodes', d, c, D)),
                        i || (l[b] = h)
                    }
                    m.length = h.length,
                    m.text = h.text(),
                    (m.length !== g.length || m.text !== g.text) && (f.data(m), f.closest('.question') .clearInputs('change') .find(v) .not(f) .remove(), f.parent('select') .siblings('.or-option-translations') .empty(), h.each(function () {
                        var e = n(this);
                        p = e.children(x) .text(),
                        t = n('<root/>'),
                        f.clone() .appendTo(t) .removeClass('itemset-template') .addClass('itemset') .removeAttr('data-items-path'),
                        r = 'itext' === w && _.find('[data-itext-id="' + p + '"]') .length > 0 ? _.find('[data-itext-id="' + p + '"]') .addClass('option-label') .clone()  : n('<span class="option-label active" lang="">' + p + '</span>'),
                        u = e.children(k) .text(),
                        t.find('[value]') .attr('value', u),
                        'label' === v ? (t.find('input') .after(r), _.before(t.find(':first')))  : 'option' === v && (1 === r.length && t.find('option') .text(r.text()), r.attr('data-option-value', u) .attr('data-itext-id', '') .appendTo(_.siblings('.or-option-translations')), f.siblings() .addBack() .last() .after(t.find(':first')))
                    }), 'select' === y.prop('nodeName') .toLowerCase() && (a.langs.setSelect(y), y.trigger('changeoption')))
                }
            })
        },
        r.prototype.outputUpdate = function (t) {
            var e,
            i,
            o,
            r,
            a,
            l,
            h,
            d,
            p,
            f = {
            },
            m = '',
            g = this;
            p = this.getNodesToUpdate('data-value', '.or-output', t),
            i = c && u.find('.or-repeat.clone') .length > 0,
            p.each(function () {
                l = n(this),
                console.debug(l),
                l.closest('.or-branch') .parent() .closest('.disabled') .length || (e = l.attr('data-value'), a = l.closest('.question, .note, .or-group') .find('[name]') .eq(0), h = a.length ? g.input.getName(a)  : void 0, o = i && l.parentsUntil('.or', '.or-repeat') .length > 0, r = o && l.parentsUntil('.or', '.or-repeat.clone') .length > 0, d = r ? g.input.getIndex(a)  : 0, 'undefined' != typeof f[e] ? m = f[e] : (m = s.evaluate(e, 'string', h, d, !0), o || (f[e] = m)), l.text !== m && l.text(m))
            })
        },
        r.prototype.grosslyViolateStandardComplianceByIgnoringCertainCalcs = function () {
            var t = u.find('[name$="/meta/instanceID"][data-calculate]');
            t.length > 0 && t.removeAttr('data-calculate')
        },
        r.prototype.calcUpdate = function (t) {
            var e,
            i = this;
            t = t || {
            },
            e = this.getNodesToUpdate('data-calculate', '', t),
            e = e.add(this.getNodesToUpdate('data-relevant', '[data-calculate]', t)),
            e.each(function () {
                function e(t) {
                    f = d(f, 'string', c, t),
                    o = y && f ? s.evaluate(f, 'string', c, t)  : '',
                    a.setIndex(t),
                    r = a.setVal(o, g, m),
                    i.input.setVal(c, t, o)
                }
                var o,
                r,
                a,
                l,
                u,
                h,
                c,
                p,
                f,
                m,
                g,
                v,
                y,
                _;
                _ = n(this),
                c = i.input.getName(_),
                p = - 1 !== c.lastIndexOf('/') ? c.substring(c.lastIndexOf('/') + 1)  : c,
                f = i.input.getCalculation(_),
                m = i.input.getXmlType(_),
                g = i.input.getConstraint(_),
                v = i.input.getRelevant(_),
                y = v ? s.evaluate(v, 'boolean', c)  : !0,
                a = s.node(c),
                l = a.get(),
                l.length > 1 && t.repeatPath && - 1 !== c.indexOf(t.repeatPath) ? (u = s.node(t.repeatPath, t.repeatIndex) .get() .find(p), h = n(l) .index(u), e(h))  : 1 === l.length ? (h = 0, e(h))  : l.each(function (t) {
                    e(t)
                })
            })
        },
        r.prototype.preloads = {
            init: function (t) {
                var e,
                i,
                o,
                r,
                a,
                l,
                h,
                c,
                d,
                p,
                f = this;
                u.find('#or-preload-items input') .each(function () {
                    p = n(this),
                    c = t.input.getProps(p),
                    e = p.attr('data-preload') .toLowerCase(),
                    i = p.attr('data-preload-params') .toLowerCase(),
                    'undefined' != typeof f[e] ? (h = s.node(c.path, c.index), r = h.getVal() [0], a = f[e]({
                        param: i,
                        curVal: r,
                        dataNode: h
                    }), h.setVal(a, null, c.xmlType))  : console.log('Preload "' + e + '" not supported. May or may not be a big deal.')
                }),
                l = s.node('/*/meta/*'),
                l.get() .each(function () {
                    if (e = null, o = n(this) .prop('nodeName'), h = s.node('/*/meta/' + o), r = h.getVal() [0], 0 === u.find('#or-preload-items input[name$="/meta/' + o + '"][data-preload]') .length) switch (o) {
                    case 'instanceID':
                        e = 'instance',
                        d = 'string',
                        i = '';
                        break;
                    case 'timeStart':
                        e = 'timestamp',
                        d = 'datetime',
                        i = 'start';
                        break;
                    case 'timeEnd':
                        e = 'timestamp',
                        d = 'datetime',
                        i = 'end';
                        break;
                    case 'deviceID':
                        e = 'property',
                        d = 'string',
                        i = 'deviceid';
                        break;
                    case 'userID':
                        e = 'property',
                        d = 'string',
                        i = 'username'
                    }
                    e && h.setVal(f[e]({
                        param: i,
                        curVal: r,
                        dataNode: h
                    }), null, d)
                })
            },
            timestamp: function (t) {
                var e;
                return 'start' === t.param ? t.curVal.length > 0 ? t.curVal : s.evaluate('now()', 'string')  : 'end' === t.param ? (u.on('beforesave', function () {
                    e = s.evaluate('now()', 'string'),
                    t.dataNode.setVal(e, null, 'datetime')
                }), s.evaluate('now()', 'string'))  : 'error - unknown timestamp parameter'
            },
            date: function (t) {
                var e,
                n,
                i,
                o;
                return 0 === t.curVal.length ? (e = new Date(s.evaluate('today()', 'string')), n = e.getFullYear() .toString() .pad(4), i = (e.getMonth() + 1) .toString() .pad(2), o = e.getDate() .toString() .pad(2), n + '-' + i + '-' + o)  : t.curVal
            },
            property: function (t) {
                var e,
                n,
                i;
                if (e = function (t, e, n, i) {
                    if (a) return a[t];
                    for (e = document.cookie.split('; '), a = {
                    }, i = e.length - 1; i >= 0; i--) n = e[i].split('='),
                    n[1] = decodeURIComponent(n[1]),
                    's:' === n[1].substr(0, 2) && (n[1] = n[1].slice(2), n[1] = n[1].slice(0, n[1].lastIndexOf('.'))),
                    a[n[0]] = decodeURIComponent(n[1]);
                    return a[t]
                }, 0 === t.curVal.length) {
                    switch (n = 'no ' + t.param + ' property in enketo', t.param) {
                    case 'deviceid':
                        i = e('__enketo_meta_deviceid') || 'Error: could not determine deviceID';
                        break;
                    case 'username':
                        i = e('__enketo_meta_uid');
                        break;
                    default:
                        i = n
                    }
                    return i
                }
                return t.curVal
            },
            context: function (t) {
                return 0 === t.curVal.length ? 'application' === t.param ? 'enketo' : t.param + ' not supported in enketo' : t.curVal
            },
            patient: function (t) {
                return 0 === t.curVal.length ? 'patient preload not supported in enketo' : t.curVal
            },
            user: function (t) {
                return 0 === t.curVal.length ? 'user preload item not supported in enketo yet' : t.curVal;
            },
            uid: function (t) {
                return 0 === t.curVal.length ? 'no uid yet in enketo' : t.curVal
            },
            instance: function (t) {
                var e = t.curVal.length > 0 ? t.curVal : s.evaluate('concat("uuid:", uuid())', 'string');
                return u.data({
                    instanceID: e
                }),
                e
            }
        },
        r.prototype.repeat = {
            init: function (t) {
                var e,
                i,
                o,
                r,
                a,
                l,
                h,
                c = this;
                this.formO = t,
                u.find('.or-repeat') .prepend('<span class="repeat-number"></span>'),
                u.find('.or-repeat:not([data-repeat-fixed])') .append('<div class="repeat-buttons"><button type="button" class="btn btn-default repeat"><i class="icon icon-plus"> </i></button><button type="button" disabled class="btn btn-default remove"><i class="icon icon-minus"> </i></button></div>'),
                u.on('click', 'button.repeat:enabled', function () {
                    return c.clone(n(this) .closest('.or-repeat')),
                    !1
                }),
                u.on('click', 'button.remove:enabled', function () {
                    return c.remove(n(this) .closest('.or-repeat.clone')),
                    !1
                }),
                a = function (t, d) {
                    i = t.attr('data-repeat-count') || '',
                    e = i.length > 0 ? parseInt(s.node(i) .getVal() [0], 10)  : 0,
                    h = u.find('.or-repeat[name="' + t.attr('name') + '"]') .index(t),
                    l = s.node(t.attr('name'), h) .get(),
                    o = l.siblings(l.prop('nodeName')) .addBack() .length,
                    r = e > o ? e : o,
                    r > 1 && c.clone(t.siblings() .addBack() .last(), r - 1, !0),
                    t.siblings('.or-repeat') .addBack() .find('.or-repeat') .filter(function () {
                        return n(this) .parentsUntil('.or', '.or-repeat') .length === d
                    }) .each(function () {
                        a(n(this), d + 1)
                    })
                },
                u.find('.or-repeat') .filter(function () {
                    return 0 === n(this) .parentsUntil('.or', '.or-repeat') .length
                }) .each(function () {
                    a(n(this), 1)
                })
            },
            clone: function (t, i, o) {
                var r,
                a,
                l,
                h,
                c,
                d,
                p,
                f,
                m = this;
                if (i = i || 1, 1 !== t.length) return console.error('Nothing to clone'),
                !1;
                for (r = t.siblings('.or-repeat'), a = t.hasClass('clone') ? r.not('.clone') .eq(0)  : t, l = a.clone(!0, !0), f = a.attr('name'), l.addClass('clone') .find('.clone') .remove(), l.find('.invalid-required, .invalid-constraint') .find('input, select, textarea') .each(function () {
                    m.formO.setValid(n(this))
                }), d = u.find('.or-repeat[name="' + f + '"]') .index(t), l.clearInputs(''), p = i + d; p > d; d++) l.find('.option-wrapper') .each(this.fixRadioNames),
                o || e.destroy(l),
                l.insertAfter(t),
                f.length > 0 && d >= 0 && s.cloneRepeat(f, d),
                l.trigger('addrepeat', d + 1),
                l.find('.autocomplete, .autocomplete_input') .removeData(),
                l.find('.autocomplete_input') .detach(),
                l.find('.autocomplete') .combobox(),
                c = l.find('[type="radio"],[type="checkbox"]'),
                c.parent('label') .removeAttr('data-checked'),
                c.filter(':checked') .parent('label') .attr('data-checked', 'true'),
                o ? m.formO.calcUpdate({
                    repeatPath: f,
                    repeatIndex: d + 1
                })  : e.init(l),
                r = r.add(l),
                l = l.clone();
                return h = r.add(t) .add(r.find('.or-repeat')),
                this.numberRepeats(h),
                this.toggleButtons(h),
                !0
            },
            remove: function (t) {
                var e = 600,
                n = this,
                i = t.prev('.or-repeat'),
                o = t.attr('name'),
                r = u.find('.or-repeat[name="' + o + '"]') .index(t),
                a = t.siblings('.or-repeat');
                t.hide(e, function () {
                    t.find('.autocomplete, .autocomplete_input') .removeData() .detach(),
                    t.remove(),
                    n.numberRepeats(a),
                    n.toggleButtons(a),
                    i.trigger('removerepeat'),
                    s.node(o, r) .remove()
                })
            },
            fixRadioNames: function (t, e) {
                n(e) .find('input[type="radio"]') .attr('name', Math.floor(10000000 * Math.random() + 1))
            },
            toggleButtons: function (t) {
                var e,
                i;
                t = t && 0 !== t.length ? t : u,
                t.each(function () {
                    e = n(this),
                    i = e.siblings('.or-repeat') .addBack(),
                    i.children('.repeat-buttons') .find('button.repeat, button.remove') .prop('disabled', !0),
                    i.last() .children('.repeat-buttons') .find('button.repeat') .prop('disabled', !1),
                    i.children('.repeat-buttons') .find('button.remove') .not(':first') .prop('disabled', !1)
                })
            },
            numberRepeats: function (t) {
                t.each(function () {
                    var t,
                    e,
                    i,
                    o = n(this);
                    0 === o.prev('.or-repeat') .length && (t = n(this) .siblings('.or-repeat'), e = t.length + 1, e > 1 ? (o.find('.repeat-number') .text('1'), i = 2, t.each(function () {
                        n(this) .find('.repeat-number') .eq(0) .text(i),
                        i++
                    }))  : o.find('.repeat-number') .eq(0) .empty())
                })
            }
        },
        r.prototype.setEventHandlers = function () {
            var t = this;
            u.attr('onsubmit', 'return false;'),
            u.on('blur', 'input:not([type="text"], [type="radio"], [type="checkbox"])', function () {
                var t = n(this);
                'undefined' != typeof t.prop('validity') .badInput && t.prop('validity') .badInput && t.val('')
            }),
            u.on('change.file validate', 'input:not(.ignore), select:not(.ignore), textarea:not(.ignore)', function (e) {
                var i,
                o,
                r,
                a = n(this),
                l = {
                    path: t.input.getName(a),
                    inputType: t.input.getInputType(a),
                    xmlType: t.input.getXmlType(a),
                    enabled: t.input.isEnabled(a),
                    constraint: t.input.getConstraint(a),
                    val: t.input.getVal(a),
                    required: t.input.isRequired(a)
                },
                h = function () {
                    return r || (l.ind = t.input.getIndex(a), r = s.node(l.path, l.ind)),
                    r
                };
                l.val.length > 0 && 'file' === l.inputType && a[0].files[0] && a[0].files[0].size > 0 && (l.val = a[0].files[0].name),
                'validate' === e.type ? i = l.enabled && 'hidden' !== l.inputType && (l.constraint || 'string' !== l.xmlType && 'select' !== l.xmlType && 'select1' !== l.xmlType && 'binary' !== l.xmlType) ? h() .validate(l.constraint, l.xmlType)  : !0 : (i = h() .setVal(l.val, l.constraint, l.xmlType), i = i !== !1 || 'geotrace' !== l.xmlType && 'geoshape' !== l.xmlType ? i : null),
                o = !(l.enabled && 'hidden' !== l.inputType && l.required && 0 === h() .getVal() [0].length),
                o === !1 ? (t.setValid(a, 'constraint'), 'validate' === e.type && t.setInvalid(a, 'required'))  : (t.setValid(a, 'required'), 'undefined' != typeof i && i === !1 ? t.setInvalid(a, 'constraint')  : null !== i && t.setValid(a, 'constraint')),
                'change' === e.type && u.trigger('valuechange.enketo')
            }),
            u.on('focus fakefocus', 'input:not(.ignore), select:not(.ignore), textarea:not(.ignore)', function (e) {
                t.progress.update(e.target)
            }),
            u.on('focus blur fakefocus fakeblur', 'input:not(.ignore), select:not(.ignore), textarea:not(.ignore)', function (e) {
                var i = n(this),
                o = t.input.getProps(i),
                r = i.closest('.question'),
                s = r.find('legend') .eq(0),
                a = r.hasClass('invalid-required') || r.hasClass('invalid-constraint'),
                l = i.parentsUntil('.or', '.or-appearance-list-nolabel') .length > 0,
                u = r.find('.required-subtle'),
                h = n('<span class="required-subtle" style="color: transparent;">Required</span>');
                'focusin' === e.type || 'fakefocus' === e.type ? (r.addClass('focus'), o.required && 0 === u.length && !l && (u = n(h), s.length > 0 ? s.append(u)  : u.insertBefore(this), a || u.show(function () {
                    n(this) .removeAttr('style')
                })))  : ('focusout' === e.type || 'fakeblur' === e.type) && (r.removeClass('focus'), o.required && o.val.length > 0 ? u.remove()  : a || u.removeAttr('style'))
            }),
            s.$.on('dataupdate', function (e, n) {
                t.calcUpdate(n),
                t.branchUpdate(n),
                t.outputUpdate(n),
                t.itemsetUpdate(n),
                t.editStatus.set(!0)
            }),
            u.on('addrepeat', function (e, i) {
                var o = n(e.target);
                t.setAllVals(o, i),
                t.calcUpdate({
                    repeatPath: o.attr('name'),
                    repeatIndex: i
                }),
                t.progress.update()
            }),
            u.on('removerepeat', function () {
                t.progress.update()
            }),
            u.on('changelanguage', function () {
                t.outputUpdate()
            })
        },
        r.prototype.setValid = function (t, e) {
            var n = e ? 'invalid-' + e : 'invalid-constraint invalid-required';
            this.input.getWrapNodes(t) .removeClass(n)
        },
        r.prototype.setInvalid = function (t, e) {
            e = e || 'constraint',
            this.input.getWrapNodes(t) .addClass('invalid-' + e) .find('.required-subtle') .attr('style', 'color: transparent;')
        },
        r.prototype.validateAll = function () {
            var t,
            e = this;
            return u.find('fieldset:disabled input, fieldset:disabled select, fieldset:disabled textarea, input:disabled, select:disabled, textarea:disabled') .each(function () {
                e.setValid(n(this))
            }),
            u.find('.question') .each(function () {
                n(this) .find('input:not(.ignore):not(:disabled), select:not(.ignore):not(:disabled), textarea:not(.ignore):not(:disabled)') .eq(0) .trigger('validate')
            }),
            t = u.find('.invalid-required, .invalid-constraint') .eq(0),
            t.length > 0 && window.scrollTo && (this.pages.active && this.pages.flipToPageContaining(t), window.scrollTo(0, t.offset() .top - 50)),
            0 === t.length
        },
        r.prototype.progress = {
            status: 0,
            lastChanged: null,
            $all: null,
            updateTotal: function () {
                this.$all = u.find('.question') .not('.disabled') .filter(function () {
                    return 0 === n(this) .parentsUntil('.or', '.disabled') .length
                })
            },
            update: function (t) {
                var e;
                this.$all && t || this.updateTotal(),
                this.lastChanged = t || this.lastChanged,
                e = Math.round(100 * (this.$all.index(n(this.lastChanged) .closest('.question')) + 1) / this.$all.length),
                e > 0 && e !== this.status && (this.status = e, u.trigger('progressupdate.enketo', e))
            },
            get: function () {
                return this.status
            }
        },
        r.prototype.isValid = function () {
            return u.find('.invalid-required, .invalid-constraint') .length > 0 ? !1 : !0
        },
        r.prototype.addPageBreaks = function () {
        }
    }
    return i
}),
define('file-manager', [
    'q',
    'jquery'
], function (t, e) {
    'use strict';
    function n() {
        var e = t.defer();
        return h ? e.resolve(!0)  : e.reject(new Error('FileReader not supported.')),
        e.promise
    }
    function i() {
        return h
    }
    function o() {
        return !1
    }
    function r(e) {
        var n,
        i,
        o = t.defer();
        return e ? 'string' == typeof e || ('object' == typeof e ? s(e) ? (n = new Error('File too large (max ' + Math.round(100 * a() / 1048576) / 100 + ' Mb)'), o.reject(n))  : (i = new FileReader, i.onload = function (t) {
            o.resolve(t.target.result)
        }, i.onerror = function (t) {
            o.reject(n)
        }, i.readAsDataURL(e))  : o.reject(new Error('Unknown error occurred')))  : o.resolve(null),
        o.promise
    }
    function s(t) {
        return t && t.size > a()
    }
    function a() {
        return u || (u = e(document) .data('maxSubmissionSize') || 5242880),
        u
    }
    function l() {
        var t,
        n = [
        ];
        return e('form.or input[type="file"]') .each(function () {
            t = this.files[0],
            t && n.push(t)
        }),
        n
    }
    var u,
    h = 'undefined' != typeof FileReader,
    c = '';
    return {
        isSupported: i,
        notSupportedAdvisoryMsg: c,
        isWaitingForPermissions: o,
        init: n,
        getFileUrl: r,
        getCurrentFiles: l
    }
}),
function (t) {
    'use strict';
    function e(e, n) {
        if (n = n || {
        }, n.worker && D.WORKERS_SUPPORTED) {
            var i = h();
            return i.userStep = n.step,
            i.userChunk = n.chunk,
            i.userComplete = n.complete,
            i.userError = n.error,
            n.step = v(n.step),
            n.chunk = v(n.chunk),
            n.complete = v(n.complete),
            n.error = v(n.error),
            delete n.worker,
            void i.postMessage({
                input: e,
                config: n,
                workerId: i.id
            })
        }
        var a = null;
        return 'string' == typeof e ? a = n.download ? new o(n)  : new s(n)  : (t.File && e instanceof File || e instanceof Object) && (a = new r(n)),
        a.stream(e)
    }
    function n(t, e) {
        function n() {
            'object' == typeof e && ('string' == typeof e.delimiter && 1 == e.delimiter.length && - 1 == D.BAD_DELIMITERS.indexOf(e.delimiter) && (l = e.delimiter), ('boolean' == typeof e.quotes || e.quotes instanceof Array) && (a = e.quotes), 'string' == typeof e.newline && (u = e.newline))
        }
        function i(t) {
            if ('object' != typeof t) return [];
            var e = [
            ];
            for (var n in t) e.push(n);
            return e
        }
        function o(t, e) {
            var n = '';
            'string' == typeof t && (t = JSON.parse(t)),
            'string' == typeof e && (e = JSON.parse(e));
            var i = t instanceof Array && t.length > 0,
            o = !(e[0] instanceof Array);
            if (i) {
                for (var s = 0; s < t.length; s++) s > 0 && (n += l),
                n += r(t[s], s);
                e.length > 0 && (n += u)
            }
            for (var a = 0; a < e.length; a++) {
                for (var h = i ? t.length : e[a].length, c = 0; h > c; c++) {
                    c > 0 && (n += l);
                    var d = i && o ? t[c] : c;
                    n += r(e[a][d], c)
                }
                a < e.length - 1 && (n += u)
            }
            return n
        }
        function r(t, e) {
            if ('undefined' == typeof t || null === t) return '';
            t = t.toString() .replace(/"/g, '""');
            var n = 'boolean' == typeof a && a || a instanceof Array && a[e] || s(t, D.BAD_DELIMITERS) || t.indexOf(l) > - 1 || ' ' == t.charAt(0) || ' ' == t.charAt(t.length - 1);
            return n ? '"' + t + '"' : t
        }
        function s(t, e) {
            for (var n = 0; n < e.length; n++)
            if (t.indexOf(e[n]) > - 1) return !0;
            return !1
        }
        var a = !1,
        l = ',',
        u = '\n';
        if (n(), 'string' == typeof t && (t = JSON.parse(t)), t instanceof Array) {
            if (!t.length || t[0] instanceof Array) return o(null, t);
            if ('object' == typeof t[0]) return o(i(t[0]), t)
        } else if ('object' == typeof t) return 'string' == typeof t.data && (t.data = JSON.parse(t.data)),
        t.data instanceof Array && (t.fields || (t.fields = t.data[0] instanceof Array ? t.fields : i(t.data[0])), t.data[0] instanceof Array || 'object' == typeof t.data[0] || (t.data = [
            t.data
        ])),
        o(t.fields || [], t.data || []);
        throw 'exception: Unable to serialize unrecognized input'
    }
    function i(e) {
        function n(t) {
            var e = m(t);
            e.chunkSize = parseInt(e.chunkSize),
            t.step || t.chunk || (e.chunkSize = null),
            this._handle = new a(e),
            this._handle.streamer = this,
            this._config = e
        }
        this._handle = null,
        this._paused = !1,
        this._finished = !1,
        this._input = null,
        this._baseIndex = 0,
        this._partialLine = '',
        this._rowCount = 0,
        this._start = 0,
        this._nextChunk = null,
        this.isFirstChunk = !0,
        this._completeResults = {
            data: [
            ],
            errors: [
            ],
            meta: {
            }
        },
        n.call(this, e),
        this.parseChunk = function (e) {
            if (this.isFirstChunk && v(this._config.beforeFirstChunk)) {
                var n = this._config.beforeFirstChunk(e);
                void 0 !== n && (e = n)
            }
            this.isFirstChunk = !1;
            var i = this._partialLine + e;
            this._partialLine = '';
            var o = this._handle.parse(i, this._baseIndex, !this._finished);
            if (!this._handle.paused() && !this._handle.aborted()) {
                var r = o.meta.cursor;
                this._finished || (this._partialLine = i.substring(r - this._baseIndex), this._baseIndex = r),
                o && o.data && (this._rowCount += o.data.length);
                var s = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                if (b) t.postMessage({
                    results: o,
                    workerId: D.WORKER_ID,
                    finished: s
                });
                 else if (v(this._config.chunk)) {
                    if (this._config.chunk(o, this._handle), this._paused) return ;
                    o = void 0,
                    this._completeResults = void 0
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(o.data), this._completeResults.errors = this._completeResults.errors.concat(o.errors), this._completeResults.meta = o.meta),
                !s || !v(this._config.complete) || o && o.meta.aborted || this._config.complete(this._completeResults),
                s || o && o.meta.paused || this._nextChunk(),
                o
            }
        },
        this._sendError = function (e) {
            v(this._config.error) ? this._config.error(e)  : b && this._config.error && t.postMessage({
                workerId: D.WORKER_ID,
                error: e,
                finished: !1
            })
        }
    }
    function o(t) {
        function e(t) {
            var e = t.getResponseHeader('Content-Range');
            return parseInt(e.substr(e.lastIndexOf('/') + 1))
        }
        t = t || {
        },
        t.chunkSize || (t.chunkSize = D.RemoteChunkSize),
        i.call(this, t);
        var n;
        _ ? this._nextChunk = function () {
            this._readChunk(),
            this._chunkLoaded()
        }
         : this._nextChunk = function () {
            this._readChunk()
        },
        this.stream = function (t) {
            this._input = t,
            this._nextChunk()
        },
        this._readChunk = function () {
            if (this._finished) return void this._chunkLoaded();
            if (n = new XMLHttpRequest, _ || (n.onload = g(this._chunkLoaded, this), n.onerror = g(this._chunkError, this)), n.open('GET', this._input, !_), this._config.chunkSize) {
                var t = this._start + this._config.chunkSize - 1;
                n.setRequestHeader('Range', 'bytes=' + this._start + '-' + t),
                n.setRequestHeader('If-None-Match', 'webkit-no-cache')
            }
            try {
                n.send()
            } catch (e) {
                this._chunkError(e.message)
            }
            _ && 0 == n.status ? this._chunkError()  : this._start += this._config.chunkSize
        },
        this._chunkLoaded = function () {
            if (4 == n.readyState) {
                if (n.status < 200 || n.status >= 400) return void this._chunkError();
                this._finished = !this._config.chunkSize || this._start > e(n),
                this.parseChunk(n.responseText)
            }
        },
        this._chunkError = function (t) {
            var e = n.statusText || t;
            this._sendError(e)
        }
    }
    function r(t) {
        t = t || {
        },
        t.chunkSize || (t.chunkSize = D.LocalChunkSize),
        i.call(this, t);
        var e,
        n,
        o = 'undefined' != typeof FileReader;
        this.stream = function (t) {
            this._input = t,
            n = t.slice || t.webkitSlice || t.mozSlice,
            o ? (e = new FileReader, e.onload = g(this._chunkLoaded, this), e.onerror = g(this._chunkError, this))  : e = new FileReaderSync,
            this._nextChunk()
        },
        this._nextChunk = function () {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
        },
        this._readChunk = function () {
            var t = this._input;
            if (this._config.chunkSize) {
                var i = Math.min(this._start + this._config.chunkSize, this._input.size);
                t = n.call(t, this._start, i)
            }
            var r = e.readAsText(t, this._config.encoding);
            o || this._chunkLoaded({
                target: {
                    result: r
                }
            })
        },
        this._chunkLoaded = function (t) {
            this._start += this._config.chunkSize,
            this._finished = !this._config.chunkSize || this._start >= this._input.size,
            this.parseChunk(t.target.result)
        },
        this._chunkError = function () {
            this._sendError(e.error)
        }
    }
    function s(t) {
        t = t || {
        },
        i.call(this, t);
        var e,
        n;
        this.stream = function (t) {
            return e = t,
            n = t,
            this._nextChunk()
        },
        this._nextChunk = function () {
            if (!this._finished) {
                var t = this._config.chunkSize,
                e = t ? n.substr(0, t)  : n;
                return n = t ? n.substr(t)  : '',
                this._finished = !n,
                this.parseChunk(e)
            }
        }
    }
    function a(t) {
        function e() {
            if (w && d && (u('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + D.DefaultDelimiter + '\''), d = !1), t.skipEmptyLines)
            for (var e = 0; e < w.data.length; e++) 1 == w.data[e].length && '' == w.data[e][0] && w.data.splice(e--, 1);
            return n() && i(),
            o()
        }
        function n() {
            return t.header && 0 == b.length
        }
        function i() {
            if (w) {
                for (var t = 0; n() && t < w.data.length; t++)
                for (var e = 0; e < w.data[t].length; e++) b.push(w.data[t][e]);
                w.data.splice(0, 1)
            }
        }
        function o() {
            if (!w || !t.header && !t.dynamicTyping) return w;
            for (var e = 0; e < w.data.length; e++) {
                for (var n = {
                }, i = 0; i < w.data[e].length; i++) {
                    if (t.dynamicTyping) {
                        var o = w.data[e][i];
                        'true' == o || 'TRUE' == o ? w.data[e][i] = !0 : 'false' == o || 'FALSE' == o ? w.data[e][i] = !1 : w.data[e][i] = a(o)
                    }
                    t.header && (i >= b.length ? (n.__parsed_extra || (n.__parsed_extra = [
                    ]), n.__parsed_extra.push(w.data[e][i]))  : n[b[i]] = w.data[e][i])
                }
                t.header && (w.data[e] = n, i > b.length ? u('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + b.length + ' fields but parsed ' + i, e)  : i < b.length && u('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + b.length + ' fields but parsed ' + i, e))
            }
            return t.header && w.meta && (w.meta.fields = b),
            w
        }
        function r(e) {
            for (var n, i, o, r = [
                ',',
                '	',
                '|',
                ';',
                D.RECORD_SEP,
                D.UNIT_SEP
            ], s = 0; s < r.length; s++) {
                var a = r[s],
                u = 0,
                h = 0;
                o = void 0;
                for (var c = new l({
                    delimiter: a,
                    preview: 10
                }) .parse(e), d = 0; d < c.data.length; d++) {
                    var p = c.data[d].length;
                    h += p,
                    'undefined' != typeof o ? p > 1 && (u += Math.abs(p - o), o = p)  : o = p
                }
                c.data.length > 0 && (h /= c.data.length),
                ('undefined' == typeof i || i > u) && h > 1.99 && (i = u, n = a)
            }
            return t.delimiter = n,
            {
                successful: !!n,
                bestDelimiter: n
            }
        }
        function s(t) {
            t = t.substr(0, 1048576);
            var e = t.split('');
            if (1 == e.length) return '\n';
            for (var n = 0, i = 0; i < e.length; i++) '\n' == e[i][0] && n++;
            return n >= e.length / 2 ? '\n' : ''
        }
        function a(t) {
            var e = p.test(t);
            return e ? parseFloat(t)  : t
        }
        function u(t, e, n, i) {
            w.errors.push({
                type: t,
                code: e,
                message: n,
                row: i
            })
        }
        var h,
        c,
        d,
        p = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,
        f = this,
        g = 0,
        y = !1,
        _ = !1,
        b = [
        ],
        w = {
            data: [
            ],
            errors: [
            ],
            meta: {
            }
        };
        if (v(t.step)) {
            var x = t.step;
            t.step = function (i) {
                if (w = i, n()) e();
                 else {
                    if (e(), 0 == w.data.length) return ;
                    g += i.data.length,
                    t.preview && g > t.preview ? c.abort()  : x(w, f)
                }
            }
        }
        this.parse = function (n, i, o) {
            if (t.newline || (t.newline = s(n)), d = !1, !t.delimiter) {
                var a = r(n);
                a.successful ? t.delimiter = a.bestDelimiter : (d = !0, t.delimiter = D.DefaultDelimiter),
                w.meta.delimiter = t.delimiter
            }
            var u = m(t);
            return t.preview && t.header && u.preview++,
            h = n,
            c = new l(u),
            w = c.parse(h, i, o),
            e(),
            y ? {
                meta: {
                    paused: !0
                }
            }
             : w || {
                meta: {
                    paused: !1
                }
            }
        },
        this.paused = function () {
            return y
        },
        this.pause = function () {
            y = !0,
            c.abort(),
            h = h.substr(c.getCharIndex())
        },
        this.resume = function () {
            y = !1,
            f.streamer.parseChunk(h)
        },
        this.aborted = function () {
            return _
        },
        this.abort = function () {
            _ = !0,
            c.abort(),
            w.meta.aborted = !0,
            v(t.complete) && t.complete(w),
            h = ''
        }
    }
    function l(t) {
        t = t || {
        };
        var e = t.delimiter,
        n = t.newline,
        i = t.comments,
        o = t.step,
        r = t.preview,
        s = t.fastMode;
        if (('string' != typeof e || D.BAD_DELIMITERS.indexOf(e) > - 1) && (e = ','), i === e) throw 'Comment character same as delimiter';
        i === !0 ? i = '#' : ('string' != typeof i || D.BAD_DELIMITERS.indexOf(i) > - 1) && (i = !1),
        '\n' != n && '' != n && '\n' != n && (n = '\n');
        var a = 0,
        l = !1;
        this.parse = function (t, u, h) {
            function c(t) {
                w.push(t),
                D = a
            }
            function d(e) {
                return h ? f()  : ('undefined' == typeof e && (e = t.substr(a)), k.push(e), a = g, c(k), b && m(), f())
            }
            function p(e) {
                a = e,
                c(k),
                k = [
                ],
                S = t.indexOf(n, a)
            }
            function f(t) {
                return {
                    data: w,
                    errors: x,
                    meta: {
                        delimiter: e,
                        linebreak: n,
                        aborted: l,
                        truncated: !!t,
                        cursor: D + (u || 0)
                    }
                }
            }
            function m() {
                o(f()),
                w = [
                ],
                x = [
                ]
            }
            if ('string' != typeof t) throw 'Input must be a string';
            var g = t.length,
            v = e.length,
            y = n.length,
            _ = i.length,
            b = 'function' == typeof o;
            a = 0;
            var w = [
            ],
            x = [
            ],
            k = [
            ],
            D = 0;
            if (!t) return f();
            if (s || s !== !1 && - 1 === t.indexOf('"')) {
                for (var E = t.split(n), T = 0; T < E.length; T++) {
                    var k = E[T];
                    if (a += k.length, T !== E.length - 1) a += n.length;
                     else if (h) return f();
                    if (!i || k.substr(0, _) != i) {
                        if (b) {
                            if (w = [
                            ], c(k.split(e)), m(), l) return f()
                        } else c(k.split(e));
                        if (r && T >= r) return w = w.slice(0, r),
                        f(!0)
                    }
                }
                return f()
            }
            for (var P = t.indexOf(e, a), S = t.indexOf(n, a); ; )
            if ('"' != t[a])
            if (i && 0 === k.length && t.substr(a, _) === i) {
                if ( - 1 == S) return f();
                a = S + y,
                S = t.indexOf(n, a),
                P = t.indexOf(e, a)
            } else if ( - 1 !== P && (S > P || - 1 === S)) k.push(t.substring(a, P)),
            a = P + v,
            P = t.indexOf(e, a);
             else {
                if ( - 1 === S) break;
                if (k.push(t.substring(a, S)), p(S + y), b && (m(), l)) return f();
                if (r && w.length >= r) return f(!0)
            } else {
                var C = a;
                for (a++; ; ) {
                    var C = t.indexOf('"', C + 1);
                    if ( - 1 === C) return h || x.push({
                        type: 'Quotes',
                        code: 'MissingQuotes',
                        message: 'Quoted field unterminated',
                        row: w.length,
                        index: a
                    }),
                    d();
                    if (C === g - 1) {
                        var L = t.substring(a, C) .replace(/""/g, '"');
                        return d(L)
                    }
                    if ('"' != t[C + 1]) {
                        if (t[C + 1] == e) {
                            k.push(t.substring(a, C) .replace(/""/g, '"')),
                            a = C + 1 + v,
                            P = t.indexOf(e, a),
                            S = t.indexOf(n, a);
                            break
                        }
                        if (t.substr(C + 1, y) === n) {
                            if (k.push(t.substring(a, C) .replace(/""/g, '"')), p(C + 1 + y), P = t.indexOf(e, a), b && (m(), l)) return f();
                            if (r && w.length >= r) return f(!0);
                            break
                        }
                    } else C++
                }
            }
            return d()
        },
        this.abort = function () {
            l = !0
        },
        this.getCharIndex = function () {
            return a
        }
    }
    function u() {
        var t = document.getElementsByTagName('script');
        return t.length ? t[t.length - 1].src : ''
    }
    function h() {
        if (!D.WORKERS_SUPPORTED) return !1;
        if (!w && null === D.SCRIPT_PATH) throw new Error('Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.');
        var e = D.SCRIPT_PATH || y;
        e += ( - 1 !== e.indexOf('?') ? '&' : '?') + 'papaworker';
        var n = new t.Worker(e);
        return n.onmessage = c,
        n.id = k++,
        x[n.id] = n,
        n
    }
    function c(t) {
        var e = t.data,
        n = x[e.workerId],
        i = !1;
        if (e.error) n.userError(e.error, e.file);
         else if (e.results && e.results.data) {
            var o = function () {
                i = !0,
                d(e.workerId, {
                    data: [
                    ],
                    errors: [
                    ],
                    meta: {
                        aborted: !0
                    }
                })
            },
            r = {
                abort: o,
                pause: p,
                resume: p
            };
            if (v(n.userStep)) {
                for (var s = 0; s < e.results.data.length && (n.userStep({
                    data: [
                        e.results.data[s]
                    ],
                    errors: e.results.errors,
                    meta: e.results.meta
                }, r), !i); s++);
                delete e.results
            } else v(n.userChunk) && (n.userChunk(e.results, r, e.file), delete e.results)
        }
        e.finished && !i && d(e.workerId, e.results)
    }
    function d(t, e) {
        var n = x[t];
        v(n.userComplete) && n.userComplete(e),
        n.terminate(),
        delete x[t]
    }
    function p() {
        throw 'Not implemented.'
    }
    function f(e) {
        var n = e.data;
        if ('undefined' == typeof D.WORKER_ID && n && (D.WORKER_ID = n.workerId), 'string' == typeof n.input) t.postMessage({
            workerId: D.WORKER_ID,
            results: D.parse(n.input, n.config),
            finished: !0
        });
         else if (t.File && n.input instanceof File || n.input instanceof Object) {
            var i = D.parse(n.input, n.config);
            i && t.postMessage({
                workerId: D.WORKER_ID,
                results: i,
                finished: !0
            })
        }
    }
    function m(t) {
        if ('object' != typeof t) return t;
        var e = t instanceof Array ? [
        ] : {
        };
        for (var n in t) e[n] = m(t[n]);
        return e
    }
    function g(t, e) {
        return function () {
            t.apply(e, arguments)
        }
    }
    function v(t) {
        return 'function' == typeof t
    }
    var y,
    _ = !t.document && !!t.postMessage,
    b = _ && /(\?|&)papaworker(=|&|$)/.test(t.location.search),
    w = !1,
    x = {
    },
    k = 0,
    D = {
    };
    if (D.parse = e, D.unparse = n, D.RECORD_SEP = String.fromCharCode(30), D.UNIT_SEP = String.fromCharCode(31), D.BYTE_ORDER_MARK = '﻿', D.BAD_DELIMITERS = [
        '',
        '\n',
        '"',
        D.BYTE_ORDER_MARK
    ], D.WORKERS_SUPPORTED = !_ && !!t.Worker, D.SCRIPT_PATH = null, D.LocalChunkSize = 10485760, D.RemoteChunkSize = 5242880, D.DefaultDelimiter = ',', D.Parser = l, D.ParserHandle = a, D.NetworkStreamer = o, D.FileStreamer = r, D.StringStreamer = s, 'undefined' != typeof module && module.exports ? module.exports = D : v(t.define) && t.define.amd ? define('papaparse', [
    ], function () {
        return D
    })  : t.Papa = D, t.jQuery) {
        var E = t.jQuery;
        E.fn.parse = function (e) {
            function n() {
                if (0 == s.length) return void (v(e.complete) && e.complete());
                var t = s[0];
                if (v(e.before)) {
                    var n = e.before(t.file, t.inputElem);
                    if ('object' == typeof n) {
                        if ('abort' == n.action) return void i('AbortError', t.file, t.inputElem, n.reason);
                        if ('skip' == n.action) return void o();
                        'object' == typeof n.config && (t.instanceConfig = E.extend(t.instanceConfig, n.config))
                    } else if ('skip' == n) return void o()
                }
                var r = t.instanceConfig.complete;
                t.instanceConfig.complete = function (e) {
                    v(r) && r(e, t.file, t.inputElem),
                    o()
                },
                D.parse(t.file, t.instanceConfig)
            }
            function i(t, n, i, o) {
                v(e.error) && e.error({
                    name: t
                }, n, i, o)
            }
            function o() {
                s.splice(0, 1),
                n()
            }
            var r = e.config || {
            },
            s = [
            ];
            return this.each(function (e) {
                var n = 'INPUT' == E(this) .prop('tagName') .toUpperCase() && 'file' == E(this) .attr('type') .toLowerCase() && t.FileReader;
                if (!n || !this.files || 0 == this.files.length) return !0;
                for (var i = 0; i < this.files.length; i++) s.push({
                    file: this.files[i],
                    inputElem: this,
                    instanceConfig: E.extend({
                    }, r)
                })
            }),
            n(),
            this
        }
    }
    b ? t.onmessage = f : D.WORKERS_SUPPORTED && (y = u(), document.body ? document.addEventListener('DOMContentLoaded', function () {
        w = !0
    }, !0)  : w = !0),
    o.prototype = Object.create(i.prototype),
    o.prototype.constructor = o,
    r.prototype = Object.create(i.prototype),
    r.prototype.constructor = r,
    s.prototype = Object.create(s.prototype),
    s.prototype.constructor = s
}('undefined' != typeof window ? window : this),
define('jquery', [
], function () {
    return jQuery
}),
define('bootstrap', [
], function () {
    return jQuery
}),
requirejs(['require-config'], function (t) {
    requirejs(['jquery',
    'enketo-js/support',
    'enketo-js/Form',
    'file-manager',
    'papaparse'], function (t, e, n, i, o) {
        function r(t, e) {
            var n,
            i = o.parse(t),
            r = i.data,
            a = r.shift();
            if (i.errors.length) throw i.errors[0];
            return a = a.map(function (t) {
                return t.trim()
            }),
            a.every(s),
            n = '<root>' + r.map(function (t) {
                return t[0] == e.id ? '<item>' + t.map(function (t, e) {
                    return '' != t && 0 != e ? '<{n}>{v}</{n}>'.replace(/{n}/g, a[e]) .replace(/{v}/g, t.trim())  : void 0
                }) .join('') + '</item>' : void 0
            }) .join('') + '</root>'
        }
        function s(t) {
            if (/^(?!xml)[A-Za-z._][A-Za-z0-9._]*$/.test(t)) return !0;
            throw new Error('CSV column heading "' + t + '" cannot be turned into a valid XML element')
        }
        function a() {
            h = new n('form.or:eq(0)', {
                modelStr: d,
                external: p,
                instanceStr: dataStrToEdit
            }),
            window.form = h,
            u = h.init(),
            u.length > 0 && alert('loadErrors: ' + u.join(', '))
        }
        function l(t) {
            return decodeURI((new RegExp(t + '=(.+?)(&|$)') .exec(location.search) || [null,
            null]) [1])
        }
        var u,
        h,
        c,
        d,
        p,
        f,
        m;
        'true' === l('touch') && (e.touch = !0, t('html') .addClass('touch')),
        t('.guidance') .remove();
        var g;
        data = xform_xml.replace(/jr\:template=/gi, 'template='),
        g = t(t.parseXML(data)),
        t(g.find('form:eq(0)') [0]) .find('#form-title') .remove(),
        c = (new XMLSerializer) .serializeToString(g.find('form:eq(0)') [0]),
        d = (new XMLSerializer) .serializeToString(g.find('model:eq(0)') [0]),
        p = [
        ],
        t('#validate-form') .before(c),
        m = t(t.parseXML(d)),
        m.find('model > instance[src]') .each(function (e, n) {
            var i = t(n) .attr('id');
            p.push({
                id: i
            })
        }),
        t.get(externalItemsetUrl, function (e) {
            f = e,
            p = p.map(function (t) {
                return {
                    id: t.id,
                    xmlStr: r(f, t)
                }
            }),
            t('form') .trigger('initializePostFormLoadAction'),
            a(),
            t('form') .trigger('postFormLoadAction'),
            t('#validate-form') .on('click', function () {
                saveXformSubmission(),
                console.log('media files:', i.getCurrentFiles())
            })
        })
    })
}),
define('../app', function () {
}),
define('enketo-js/Widget', [
    'jquery'
], function (t) {
    var e = function (t, e, n) {
        this.element = t,
        this.options = e || {
        },
        this.namespace = this.namespace || 'somewidget',
        this.options.touch = 'undefined' != typeof this.options.touch ? this.options.touch : !1,
        this.event = n || null
    };
    return e.prototype = {
        destroy: function (e) {
            t(e) .removeData(this.namespace) .off('.' + this.namespace) .show() .next('.widget') .remove()
        },
        disable: function () {
        },
        enable: function () {
        },
        update: function () {
        }
    },
    e
}),
define('enketo-widget/note/notewidget', [
    'enketo-js/Widget',
    'jquery',
    'enketo-js/plugins'
], function (t, e) {
    'use strict';
    function n(e, n) {
        this.namespace = i,
        t.call(this, e, n),
        this._init()
    }
    var i = 'notewidget';
    return n.prototype = Object.create(t.prototype),
    n.prototype.constructor = n,
    n.prototype._init = function () {
        var t = e(this.element);
        t.find('.question-label') .markdownToHtml() .end() .find('[readonly]') .addClass('ignore'),
        t.is('.note') && !t.next() .is('.note') && t.addClass('last-of-class')
    },
    n.prototype.destroy = function (t) {
    },
    e.fn[i] = function (t, o) {
        return this.each(function () {
            var r = e(this),
            s = r.data(i);
            t = t || {
            },
            s || 'object' != typeof t ? s && 'string' == typeof t && s[t](this)  : r.data(i, s = new n(this, t, o))
        })
    },
    i
}),
define('enketo-widget/select-desktop/selectpicker', [
    'jquery',
    'enketo-js/Widget'
], function (t, e) {
    'use strict';
    function n(n, o, r) {
        this.namespace = i,
        e.call(this, n, o),
        r && (r.stopPropagation(), r.preventDefault()),
        this.$picker = null,
        this.noneSelectedText = o.noneSelectedText || 'none selected',
        this.lengthmax = o.maxlength || 15,
        this.multiple = 'undefined' != typeof t(n) .attr('multiple') && t(n) .attr('multiple') !== !1,
        this._init()
    }
    var i = 'desktopSelectpicker';
    return n.prototype = Object.create(e.prototype),
    n.prototype.constructor = n,
    n.prototype._init = function () {
        var e = this._getTemplate(),
        n = t(this.element);
        n.css('display', 'none');
        var i = n.hasClass('autocomplete');
        i ? n.combobox()  : (e = this._createLi(e), this.$picker = e.insertAfter(n), this.$picker.find('> a') .addClass(this.selectClass), this._clickListener(), this._focusListener())
    },
    n.prototype._getTemplate = function () {
        var t = '<div class="btn-group bootstrap-select widget clearfix"><button type="button" class="btn btn-default dropdown-toggle clearfix" data-toggle="dropdown"><span class="selected">__SELECTED_OPTIONS</span><span class="caret"></span></button><ul class="dropdown-menu" role="menu">__ADD_LI</ul></div>';
        return t
    },
    n.prototype._createLi = function (e) {
        var n,
        i,
        o = [
        ],
        r = '',
        s = this.multiple ? 'type="checkbox"' : 'type="radio" name="' + 100000 * Math.random() + '"',
        a = this;
        if (t(this.element) .find('option') .each(function () {
            o.push({
                label: t(this) .text(),
                selected: t(this) .is(':selected'),
                value: t(this) .attr('value')
            })
        }), o.length > 0) {
            e = e.replace('__SELECTED_OPTIONS', this._createSelectedStr());
            for (var l = 0; l < o.length; l++) o[l].value && (n = o[l].selected ? ' checked="checked"' : '', i = o[l].selected && !a.multiple ? 'class="active"' : '', r += '<li ' + i + '><a class="option-wrapper" tabindex="-1" href="#"><label><input class="ignore" ' + s + n + 'value="' + o[l].value + '" /><span class="option-label">' + o[l].label + '</span></label></a></li>')
        }
        return e = e.replace('__ADD_LI', r),
        t(e)
    },
    n.prototype._createSelectedStr = function () {
        var e,
        n = [
        ],
        i = t(this.element);
        return i.find('option:selected') .each(function () {
            t(this) .attr('value') .length > 0 && n.push(t(this) .text())
        }),
        0 === n.length ? this.noneSelectedText : (e = n.join(', '), e.length > this.lengthmax ? n.length + ' selected' : e)
    },
    n.prototype._clickListener = function () {
        var e = this;
        this.$picker.on('click', 'li:not(.disabled)', function (n) {
            n.preventDefault();
            var i = t(this),
            o = i.find('input'),
            r = t(e.element),
            s = r.find('option[value="' + o.val() + '"]'),
            a = s.is(':selected');
            e.multiple ? n.stopPropagation()  : (e.$picker.find('li') .removeClass('active'), s.siblings('option') .prop('selected', !1), e.$picker.find('input') .prop('checked', !1)),
            a ? (i.removeClass('active'), o.prop('checked', !1), s.prop('selected', !1))  : (e.multiple || i.addClass('active'), o.prop('checked', !0), s.prop('selected', !0)),
            e.$picker.find('.selected') .html(e._createSelectedStr()),
            r.trigger('change')
        })
    },
    n.prototype._focusListener = function () {
        var e = this;
        this.$picker.on('shown.bs.dropdown', function () {
            return t(e.element) .trigger('fakefocus'),
            !0
        }) .on('hidden.bs.dropdown', function () {
            return t(e.element) .trigger('fakeblur'),
            !0
        })
    },
    n.prototype.disable = function () {
        this.$picker.find('li') .addClass('disabled')
    },
    n.prototype.enable = function () {
        this.$picker.find('li') .removeClass('disabled')
    },
    n.prototype.update = function () {
        this.$picker.remove(),
        this._init()
    },
    t.fn[i] = function (e, o) {
        return e = e || {
        },
        this.each(function () {
            var r = t(this),
            s = r.data(i);
            s || 'object' != typeof e || e.touch ? s && 'string' == typeof e && s[e](this)  : r.data(i, s = new n(this, e, o))
        })
    },
    + function (t) {
        function e(e) {
            t(i) .remove(),
            t(o) .each(function () {
                var i = n(t(this)),
                o = {
                    relatedTarget: this
                };
                i.hasClass('open') && (i.trigger(e = t.Event('hide.bs.dropdown', o)), e.isDefaultPrevented() || i.removeClass('open') .trigger('hidden.bs.dropdown', o))
            })
        }
        function n(e) {
            var n = e.attr('data-target');
            n || (n = e.attr('href'), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ''));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }
        var i = '.dropdown-backdrop',
        o = '[data-toggle=dropdown]',
        r = function (e) {
            t(e) .on('click.bs.dropdown', this.toggle)
        };
        r.prototype.toggle = function (i) {
            var o = t(this);
            if (!o.is('.disabled, :disabled')) {
                var r = n(o),
                s = r.hasClass('open');
                if (e(), !s) {
                    'ontouchstart' in document.documentElement && !r.closest('.navbar-nav') .length && t('<div class="dropdown-backdrop"/>') .insertAfter(t(this)) .on('click', e);
                    var a = {
                        relatedTarget: this
                    };
                    if (r.trigger(i = t.Event('show.bs.dropdown', a)), i.isDefaultPrevented()) return ;
                    r.toggleClass('open') .trigger('shown.bs.dropdown', a),
                    o.focus()
                }
                return !1
            }
        },
        r.prototype.keydown = function (e) {
            if (/(38|40|27)/.test(e.keyCode)) {
                var i = t(this);
                if (e.preventDefault(), e.stopPropagation(), !i.is('.disabled, :disabled')) {
                    var r = n(i),
                    s = r.hasClass('open');
                    if (!s || s && 27 === e.keyCode) return 27 === e.which && r.find(o) .focus(),
                    i.click();
                    var a = ' li:not(.divider):visible a',
                    l = r.find('[role=menu]' + a + ', [role=listbox]' + a);
                    if (l.length) {
                        var u = l.index(l.filter(':focus'));
                        38 === e.keyCode && u > 0 && u--,
                        40 === e.keyCode && u < l.length - 1 && u++,
                        ~u || (u = 0),
                        l.eq(u) .focus()
                    }
                }
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = function (e) {
            return this.each(function () {
                var n = t(this),
                i = n.data('bs.dropdown');
                i || n.data('bs.dropdown', i = new r(this)),
                'string' == typeof e && i[e].call(n)
            })
        },
        t.fn.dropdown.Constructor = r,
        t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = s,
            this
        },
        t(document) .on('click.bs.dropdown.data-api', e) .on('click.bs.dropdown.data-api', '.dropdown form', function (t) {
            t.stopPropagation()
        }) .on('click.bs.dropdown.data-api', o, r.prototype.toggle) .on('keydown.bs.dropdown.data-api', o + ', [role=menu], [role=listbox]', r.prototype.keydown)
    }(jQuery),
    i
}),
define('enketo-widget/select-mobile/selectpicker', [
    'jquery',
    'enketo-js/Widget'
], function (t, e) {
    'use strict';
    function n(t, n, o) {
        this.namespace = i,
        e.call(this, t, n),
        this._init()
    }
    var i = 'mobileSelectpicker';
    return n.prototype = Object.create(e.prototype),
    n.prototype.constructor = n,
    n.prototype._init = function () {
        var e = this;
        t(this.element) .on('change.' + i, function () {
            return e._showSelectedValues(),
            !0
        }),
        this._showSelectedValues()
    },
    n.prototype._showSelectedValues = function () {
        var e,
        n = [
        ],
        i = '<span class="widget mobileselect"></span>',
        o = t(this.element),
        r = o.next('.widget') .length > 0 ? o.next('.widget')  : t(i) .insertAfter(o),
        s = t.isArray(o.val()) ? o.val()  : [
            o.val()
        ];
        for (e = 0; e < s.length; e++) n.push(t(this) .find('option[value="' + s[e] + '"]') .text());
        r.text(s.join(', '))
    },
    t.fn[i] = function (e, o) {
        return e = e || {
        },
        this.each(function () {
            var r = t(this),
            s = r.data(i);
            !s && 'object' == typeof e && e.touch && r.data(i, s = new n(this, e, o)),
            s && 'string' == typeof e && s[e](this)
        })
    },
    i
}),
!function (t, e, n) {
    var i = t.L,
    o = {
    };
    o.version = '0.7.7',
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = o : 'function' == typeof define && define.amd && define('leaflet', o),
    o.noConflict = function () {
        return t.L = i,
        this
    },
    t.L = o,
    o.Util = {
        extend: function (t) {
            var e,
            n,
            i,
            o,
            r = Array.prototype.slice.call(arguments, 1);
            for (n = 0, i = r.length; i > n; n++) {
                o = r[n] || {
                };
                for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
            }
            return t
        },
        bind: function (t, e) {
            var n = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2)  : null;
            return function () {
                return t.apply(e, n || arguments)
            }
        },
        stamp: function () {
            var t = 0,
            e = '_leaflet_id';
            return function (n) {
                return n[e] = n[e] || ++t,
                n[e]
            }
        }(),
        invokeEach: function (t, e, n) {
            var i,
            o;
            if ('object' == typeof t) {
                o = Array.prototype.slice.call(arguments, 3);
                for (i in t) e.apply(n, [
                    i,
                    t[i]
                ].concat(o));
                return !0
            }
            return !1
        },
        limitExecByInterval: function (t, e, n) {
            var i,
            o;
            return function r() {
                var s = arguments;
                return i ? void (o = !0)  : (i = !0, setTimeout(function () {
                    i = !1,
                    o && (r.apply(n, s), o = !1)
                }, e), void t.apply(n, s))
            }
        },
        falseFn: function () {
            return !1
        },
        formatNum: function (t, e) {
            var n = Math.pow(10, e || 5);
            return Math.round(t * n) / n
        },
        trim: function (t) {
            return t.trim ? t.trim()  : t.replace(/^\s+|\s+$/g, '')
        },
        splitWords: function (t) {
            return o.Util.trim(t) .split(/\s+/)
        },
        setOptions: function (t, e) {
            return t.options = o.extend({
            }, t.options, e),
            t.options
        },
        getParamString: function (t, e, n) {
            var i = [
            ];
            for (var o in t) i.push(encodeURIComponent(n ? o.toUpperCase()  : o) + '=' + encodeURIComponent(t[o]));
            return (e && - 1 !== e.indexOf('?') ? '&' : '?') + i.join('&')
        },
        template: function (t, e) {
            return t.replace(/\{ *([\w_]+) *\}/g, function (t, i) {
                var o = e[i];
                if (o === n) throw new Error('No value provided for variable ' + t);
                return 'function' == typeof o && (o = o(e)),
                o
            })
        },
        isArray: Array.isArray || function (t) {
            return '[object Array]' === Object.prototype.toString.call(t)
        },
        emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    },
    function () {
        function e(e) {
            var n,
            i,
            o = [
                'webkit',
                'moz',
                'o',
                'ms'
            ];
            for (n = 0; n < o.length && !i; n++) i = t[o[n] + e];
            return i
        }
        function n(e) {
            var n = + new Date,
            o = Math.max(0, 16 - (n - i));
            return i = n + o,
            t.setTimeout(e, o)
        }
        var i = 0,
        r = t.requestAnimationFrame || e('RequestAnimationFrame') || n,
        s = t.cancelAnimationFrame || e('CancelAnimationFrame') || e('CancelRequestAnimationFrame') || function (e) {
            t.clearTimeout(e)
        };
        o.Util.requestAnimFrame = function (e, i, s, a) {
            return e = o.bind(e, i),
            s && r === n ? void e()  : r.call(t, e, a)
        },
        o.Util.cancelAnimFrame = function (e) {
            e && s.call(t, e)
        }
    }(),
    o.extend = o.Util.extend,
    o.bind = o.Util.bind,
    o.stamp = o.Util.stamp,
    o.setOptions = o.Util.setOptions,
    o.Class = function () {
    },
    o.Class.extend = function (t) {
        var e = function () {
            this.initialize && this.initialize.apply(this, arguments),
            this._initHooks && this.callInitHooks()
        },
        n = function () {
        };
        n.prototype = this.prototype;
        var i = new n;
        i.constructor = e,
        e.prototype = i;
        for (var r in this) this.hasOwnProperty(r) && 'prototype' !== r && (e[r] = this[r]);
        t.statics && (o.extend(e, t.statics), delete t.statics),
        t.includes && (o.Util.extend.apply(null, [
            i
        ].concat(t.includes)), delete t.includes),
        t.options && i.options && (t.options = o.extend({
        }, i.options, t.options)),
        o.extend(i, t),
        i._initHooks = [
        ];
        var s = this;
        return e.__super__ = s.prototype,
        i.callInitHooks = function () {
            if (!this._initHooksCalled) {
                s.prototype.callInitHooks && s.prototype.callInitHooks.call(this),
                this._initHooksCalled = !0;
                for (var t = 0, e = i._initHooks.length; e > t; t++) i._initHooks[t].call(this)
            }
        },
        e
    },
    o.Class.include = function (t) {
        o.extend(this.prototype, t)
    },
    o.Class.mergeOptions = function (t) {
        o.extend(this.prototype.options, t)
    },
    o.Class.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
        n = 'function' == typeof t ? t : function () {
            this[t].apply(this, e)
        };
        this.prototype._initHooks = this.prototype._initHooks || [],
        this.prototype._initHooks.push(n)
    };
    var r = '_leaflet_events';
    o.Mixin = {
    },
    o.Mixin.Events = {
        addEventListener: function (t, e, n) {
            if (o.Util.invokeEach(t, this.addEventListener, this, e, n)) return this;
            var i,
            s,
            a,
            l,
            u,
            h,
            c,
            d = this[r] = this[r] || {
            },
            p = n && n !== this && o.stamp(n);
            for (t = o.Util.splitWords(t), i = 0, s = t.length; s > i; i++) a = {
                action: e,
                context: n || this
            },
            l = t[i],
            p ? (u = l + '_idx', h = u + '_len', c = d[u] = d[u] || {
            }, c[p] || (c[p] = [
            ], d[h] = (d[h] || 0) + 1), c[p].push(a))  : (d[l] = d[l] || [], d[l].push(a));
            return this
        },
        hasEventListeners: function (t) {
            var e = this[r];
            return !!e && (t in e && e[t].length > 0 || t + '_idx' in e && e[t + '_idx_len'] > 0)
        },
        removeEventListener: function (t, e, n) {
            if (!this[r]) return this;
            if (!t) return this.clearAllEventListeners();
            if (o.Util.invokeEach(t, this.removeEventListener, this, e, n)) return this;
            var i,
            s,
            a,
            l,
            u,
            h,
            c,
            d,
            p,
            f = this[r],
            m = n && n !== this && o.stamp(n);
            for (t = o.Util.splitWords(t), i = 0, s = t.length; s > i; i++)
            if (a = t[i], h = a + '_idx', c = h + '_len', d = f[h], e) {
                if (l = m && d ? d[m] : f[a]) {
                    for (u = l.length - 1; u >= 0; u--) l[u].action !== e || n && l[u].context !== n || (p = l.splice(u, 1), p[0].action = o.Util.falseFn);
                    n && d && 0 === l.length && (delete d[m], f[c]--)
                }
            } else delete f[a],
            delete f[h],
            delete f[c];
            return this
        },
        clearAllEventListeners: function () {
            return delete this[r],
            this
        },
        fireEvent: function (t, e) {
            if (!this.hasEventListeners(t)) return this;
            var n,
            i,
            s,
            a,
            l,
            u = o.Util.extend({
            }, e, {
                type: t,
                target: this
            }),
            h = this[r];
            if (h[t])
            for (n = h[t].slice(), i = 0, s = n.length; s > i; i++) n[i].action.call(n[i].context, u);
            a = h[t + '_idx'];
            for (l in a)
            if (n = a[l].slice())
            for (i = 0, s = n.length; s > i; i++) n[i].action.call(n[i].context, u);
            return this
        },
        addOneTimeEventListener: function (t, e, n) {
            if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, n)) return this;
            var i = o.bind(function () {
                this.removeEventListener(t, e, n) .removeEventListener(t, i, n)
            }, this);
            return this.addEventListener(t, e, n) .addEventListener(t, i, n)
        }
    },
    o.Mixin.Events.on = o.Mixin.Events.addEventListener,
    o.Mixin.Events.off = o.Mixin.Events.removeEventListener,
    o.Mixin.Events.once = o.Mixin.Events.addOneTimeEventListener,
    o.Mixin.Events.fire = o.Mixin.Events.fireEvent,
    function () {
        var i = 'ActiveXObject' in t,
        r = i && !e.addEventListener,
        s = navigator.userAgent.toLowerCase(),
        a = - 1 !== s.indexOf('webkit'),
        l = - 1 !== s.indexOf('chrome'),
        u = - 1 !== s.indexOf('phantom'),
        h = - 1 !== s.indexOf('android'),
        c = - 1 !== s.search('android [23]'),
        d = - 1 !== s.indexOf('gecko'),
        p = typeof orientation != n + '',
        f = !t.PointerEvent && t.MSPointerEvent,
        m = t.PointerEvent && t.navigator.pointerEnabled || f,
        g = 'devicePixelRatio' in t && t.devicePixelRatio > 1 || 'matchMedia' in t && t.matchMedia('(min-resolution:144dpi)') && t.matchMedia('(min-resolution:144dpi)') .matches,
        v = e.documentElement,
        y = i && 'transition' in v.style,
        _ = 'WebKitCSSMatrix' in t && 'm11' in new t.WebKitCSSMatrix && !c,
        b = 'MozPerspective' in v.style,
        w = 'OTransition' in v.style,
        x = !t.L_DISABLE_3D && (y || _ || b || w) && !u,
        k = !t.L_NO_TOUCH && !u && (m || 'ontouchstart' in t || t.DocumentTouch && e instanceof t.DocumentTouch);
        o.Browser = {
            ie: i,
            ielt9: r,
            webkit: a,
            gecko: d && !a && !t.opera && !i,
            android: h,
            android23: c,
            chrome: l,
            ie3d: y,
            webkit3d: _,
            gecko3d: b,
            opera3d: w,
            any3d: x,
            mobile: p,
            mobileWebkit: p && a,
            mobileWebkit3d: p && _,
            mobileOpera: p && t.opera,
            touch: k,
            msPointer: f,
            pointer: m,
            retina: g
        }
    }(),
    o.Point = function (t, e, n) {
        this.x = n ? Math.round(t)  : t,
        this.y = n ? Math.round(e)  : e
    },
    o.Point.prototype = {
        clone: function () {
            return new o.Point(this.x, this.y)
        },
        add: function (t) {
            return this.clone() ._add(o.point(t))
        },
        _add: function (t) {
            return this.x += t.x,
            this.y += t.y,
            this
        },
        subtract: function (t) {
            return this.clone() ._subtract(o.point(t))
        },
        _subtract: function (t) {
            return this.x -= t.x,
            this.y -= t.y,
            this
        },
        divideBy: function (t) {
            return this.clone() ._divideBy(t)
        },
        _divideBy: function (t) {
            return this.x /= t,
            this.y /= t,
            this
        },
        multiplyBy: function (t) {
            return this.clone() ._multiplyBy(t)
        },
        _multiplyBy: function (t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        round: function () {
            return this.clone() ._round()
        },
        _round: function () {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        floor: function () {
            return this.clone() ._floor()
        },
        _floor: function () {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        distanceTo: function (t) {
            t = o.point(t);
            var e = t.x - this.x,
            n = t.y - this.y;
            return Math.sqrt(e * e + n * n)
        },
        equals: function (t) {
            return t = o.point(t),
            t.x === this.x && t.y === this.y
        },
        contains: function (t) {
            return t = o.point(t),
            Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function () {
            return 'Point(' + o.Util.formatNum(this.x) + ', ' + o.Util.formatNum(this.y) + ')'
        }
    },
    o.point = function (t, e, i) {
        return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1])  : t === n || null === t ? t : new o.Point(t, e, i)
    },
    o.Bounds = function (t, e) {
        if (t)
        for (var n = e ? [
            t,
            e
        ] : t, i = 0, o = n.length; o > i; i++) this.extend(n[i])
    },
    o.Bounds.prototype = {
        extend: function (t) {
            return t = o.point(t),
            this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y))  : (this.min = t.clone(), this.max = t.clone()),
            this
        },
        getCenter: function (t) {
            return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function () {
            return new o.Point(this.min.x, this.max.y)
        },
        getTopRight: function () {
            return new o.Point(this.max.x, this.min.y)
        },
        getSize: function () {
            return this.max.subtract(this.min)
        },
        contains: function (t) {
            var e,
            n;
            return t = 'number' == typeof t[0] || t instanceof o.Point ? o.point(t)  : o.bounds(t),
            t instanceof o.Bounds ? (e = t.min, n = t.max)  : e = n = t,
            e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
        },
        intersects: function (t) {
            t = o.bounds(t);
            var e = this.min,
            n = this.max,
            i = t.min,
            r = t.max,
            s = r.x >= e.x && i.x <= n.x,
            a = r.y >= e.y && i.y <= n.y;
            return s && a
        },
        isValid: function () {
            return !(!this.min || !this.max)
        }
    },
    o.bounds = function (t, e) {
        return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
    },
    o.Transformation = function (t, e, n, i) {
        this._a = t,
        this._b = e,
        this._c = n,
        this._d = i
    },
    o.Transformation.prototype = {
        transform: function (t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function (t, e) {
            return e = e || 1,
            t.x = e * (this._a * t.x + this._b),
            t.y = e * (this._c * t.y + this._d),
            t
        },
        untransform: function (t, e) {
            return e = e || 1,
            new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    },
    o.DomUtil = {
        get: function (t) {
            return 'string' == typeof t ? e.getElementById(t)  : t
        },
        getStyle: function (t, n) {
            var i = t.style[n];
            if (!i && t.currentStyle && (i = t.currentStyle[n]), (!i || 'auto' === i) && e.defaultView) {
                var o = e.defaultView.getComputedStyle(t, null);
                i = o ? o[n] : null
            }
            return 'auto' === i ? null : i
        },
        getViewportOffset: function (t) {
            var n,
            i = 0,
            r = 0,
            s = t,
            a = e.body,
            l = e.documentElement;
            do {
                if (i += s.offsetTop || 0, r += s.offsetLeft || 0, i += parseInt(o.DomUtil.getStyle(s, 'borderTopWidth'), 10) || 0, r += parseInt(o.DomUtil.getStyle(s, 'borderLeftWidth'), 10) || 0, n = o.DomUtil.getStyle(s, 'position'), s.offsetParent === a && 'absolute' === n) break;
                if ('fixed' === n) {
                    i += a.scrollTop || l.scrollTop || 0,
                    r += a.scrollLeft || l.scrollLeft || 0;
                    break
                }
                if ('relative' === n && !s.offsetLeft) {
                    var u = o.DomUtil.getStyle(s, 'width'),
                    h = o.DomUtil.getStyle(s, 'max-width'),
                    c = s.getBoundingClientRect();
                    ('none' !== u || 'none' !== h) && (r += c.left + s.clientLeft),
                    i += c.top + (a.scrollTop || l.scrollTop || 0);
                    break
                }
                s = s.offsetParent
            } while (s);
            s = t;
            do {
                if (s === a) break;
                i -= s.scrollTop || 0,
                r -= s.scrollLeft || 0,
                s = s.parentNode
            } while (s);
            return new o.Point(r, i)
        },
        documentIsLtr: function () {
            return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = 'ltr' === o.DomUtil.getStyle(e.body, 'direction')),
            o.DomUtil._docIsLtr
        },
        create: function (t, n, i) {
            var o = e.createElement(t);
            return o.className = n,
            i && i.appendChild(o),
            o
        },
        hasClass: function (t, e) {
            if (t.classList !== n) return t.classList.contains(e);
            var i = o.DomUtil._getClass(t);
            return i.length > 0 && new RegExp('(^|\s)' + e + '(\s|$)') .test(i)
        },
        addClass: function (t, e) {
            if (t.classList !== n)
            for (var i = o.Util.splitWords(e), r = 0, s = i.length; s > r; r++) t.classList.add(i[r]);
             else if (!o.DomUtil.hasClass(t, e)) {
                var a = o.DomUtil._getClass(t);
                o.DomUtil._setClass(t, (a ? a + ' ' : '') + e)
            }
        },
        removeClass: function (t, e) {
            t.classList !== n ? t.classList.remove(e)  : o.DomUtil._setClass(t, o.Util.trim((' ' + o.DomUtil._getClass(t) + ' ') .replace(' ' + e + ' ', ' ')))
        },
        _setClass: function (t, e) {
            t.className.baseVal === n ? t.className = e : t.className.baseVal = e
        },
        _getClass: function (t) {
            return t.className.baseVal === n ? t.className : t.className.baseVal
        },
        setOpacity: function (t, e) {
            if ('opacity' in t.style) t.style.opacity = e;
             else if ('filter' in t.style) {
                var n = !1,
                i = 'DXImageTransform.Microsoft.Alpha';
                try {
                    n = t.filters.item(i)
                } catch (o) {
                    if (1 === e) return
                }
                e = Math.round(100 * e),
                n ? (n.Enabled = 100 !== e, n.Opacity = e)  : t.style.filter += ' progid:' + i + '(opacity=' + e + ')'
            }
        },
        testProp: function (t) {
            for (var n = e.documentElement.style, i = 0; i < t.length; i++)
            if (t[i] in n) return t[i];
            return !1
        },
        getTranslateString: function (t) {
            var e = o.Browser.webkit3d,
            n = 'translate' + (e ? '3d' : '') + '(',
            i = (e ? ',0' : '') + ')';
            return n + t.x + 'px,' + t.y + 'px' + i
        },
        getScaleString: function (t, e) {
            var n = o.DomUtil.getTranslateString(e.add(e.multiplyBy( - 1 * t))),
            i = ' scale(' + t + ') ';
            return n + i
        },
        setPosition: function (t, e, n) {
            t._leaflet_pos = e,
            !n && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e)  : (t.style.left = e.x + 'px', t.style.top = e.y + 'px')
        },
        getPosition: function (t) {
            return t._leaflet_pos
        }
    },
    o.DomUtil.TRANSFORM = o.DomUtil.testProp(['transform',
    'WebkitTransform',
    'OTransform',
    'MozTransform',
    'msTransform']),
    o.DomUtil.TRANSITION = o.DomUtil.testProp(['webkitTransition',
    'transition',
    'OTransition',
    'MozTransition',
    'msTransition']),
    o.DomUtil.TRANSITION_END = 'webkitTransition' === o.DomUtil.TRANSITION || 'OTransition' === o.DomUtil.TRANSITION ? o.DomUtil.TRANSITION + 'End' : 'transitionend',
    function () {
        if ('onselectstart' in e) o.extend(o.DomUtil, {
            disableTextSelection: function () {
                o.DomEvent.on(t, 'selectstart', o.DomEvent.preventDefault)
            },
            enableTextSelection: function () {
                o.DomEvent.off(t, 'selectstart', o.DomEvent.preventDefault)
            }
        });
         else {
            var n = o.DomUtil.testProp(['userSelect',
            'WebkitUserSelect',
            'OUserSelect',
            'MozUserSelect',
            'msUserSelect']);
            o.extend(o.DomUtil, {
                disableTextSelection: function () {
                    if (n) {
                        var t = e.documentElement.style;
                        this._userSelect = t[n],
                        t[n] = 'none'
                    }
                },
                enableTextSelection: function () {
                    n && (e.documentElement.style[n] = this._userSelect, delete this._userSelect)
                }
            })
        }
        o.extend(o.DomUtil, {
            disableImageDrag: function () {
                o.DomEvent.on(t, 'dragstart', o.DomEvent.preventDefault)
            },
            enableImageDrag: function () {
                o.DomEvent.off(t, 'dragstart', o.DomEvent.preventDefault)
            }
        })
    }(),
    o.LatLng = function (t, e, i) {
        if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
        this.lat = t,
        this.lng = e,
        i !== n && (this.alt = parseFloat(i))
    },
    o.extend(o.LatLng, {
        DEG_TO_RAD: Math.PI / 180,
        RAD_TO_DEG: 180 / Math.PI,
        MAX_MARGIN: 1e-9
    }),
    o.LatLng.prototype = {
        equals: function (t) {
            if (!t) return !1;
            t = o.latLng(t);
            var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
            return e <= o.LatLng.MAX_MARGIN
        },
        toString: function (t) {
            return 'LatLng(' + o.Util.formatNum(this.lat, t) + ', ' + o.Util.formatNum(this.lng, t) + ')'
        },
        distanceTo: function (t) {
            t = o.latLng(t);
            var e = 6378137,
            n = o.LatLng.DEG_TO_RAD,
            i = (t.lat - this.lat) * n,
            r = (t.lng - this.lng) * n,
            s = this.lat * n,
            a = t.lat * n,
            l = Math.sin(i / 2),
            u = Math.sin(r / 2),
            h = l * l + u * u * Math.cos(s) * Math.cos(a);
            return 2 * e * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h))
        },
        wrap: function (t, e) {
            var n = this.lng;
            return t = t || - 180,
            e = e || 180,
            n = (n + e) % (e - t) + (t > n || n === e ? e : t),
            new o.LatLng(this.lat, n)
        }
    },
    o.latLng = function (t, e) {
        return t instanceof o.LatLng ? t : o.Util.isArray(t) ? 'number' == typeof t[0] || 'string' == typeof t[0] ? new o.LatLng(t[0], t[1], t[2])  : null : t === n || null === t ? t : 'object' == typeof t && 'lat' in t ? new o.LatLng(t.lat, 'lng' in t ? t.lng : t.lon)  : e === n ? null : new o.LatLng(t, e)
    },
    o.LatLngBounds = function (t, e) {
        if (t)
        for (var n = e ? [
            t,
            e
        ] : t, i = 0, o = n.length; o > i; i++) this.extend(n[i])
    },
    o.LatLngBounds.prototype = {
        extend: function (t) {
            if (!t) return this;
            var e = o.latLng(t);
            return t = null !== e ? e : o.latLngBounds(t),
            t instanceof o.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng))  : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng))  : t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)),
            this
        },
        pad: function (t) {
            var e = this._southWest,
            n = this._northEast,
            i = Math.abs(e.lat - n.lat) * t,
            r = Math.abs(e.lng - n.lng) * t;
            return new o.LatLngBounds(new o.LatLng(e.lat - i, e.lng - r), new o.LatLng(n.lat + i, n.lng + r))
        },
        getCenter: function () {
            return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function () {
            return this._southWest
        },
        getNorthEast: function () {
            return this._northEast
        },
        getNorthWest: function () {
            return new o.LatLng(this.getNorth(), this.getWest())
        },
        getSouthEast: function () {
            return new o.LatLng(this.getSouth(), this.getEast())
        },
        getWest: function () {
            return this._southWest.lng
        },
        getSouth: function () {
            return this._southWest.lat
        },
        getEast: function () {
            return this._northEast.lng
        },
        getNorth: function () {
            return this._northEast.lat
        },
        contains: function (t) {
            t = 'number' == typeof t[0] || t instanceof o.LatLng ? o.latLng(t)  : o.latLngBounds(t);
            var e,
            n,
            i = this._southWest,
            r = this._northEast;
            return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), n = t.getNorthEast())  : e = n = t,
            e.lat >= i.lat && n.lat <= r.lat && e.lng >= i.lng && n.lng <= r.lng
        },
        intersects: function (t) {
            t = o.latLngBounds(t);
            var e = this._southWest,
            n = this._northEast,
            i = t.getSouthWest(),
            r = t.getNorthEast(),
            s = r.lat >= e.lat && i.lat <= n.lat,
            a = r.lng >= e.lng && i.lng <= n.lng;
            return s && a
        },
        toBBoxString: function () {
            return [this.getWest(),
            this.getSouth(),
            this.getEast(),
            this.getNorth()].join(',')
        },
        equals: function (t) {
            return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast()))  : !1
        },
        isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    },
    o.latLngBounds = function (t, e) {
        return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
    },
    o.Projection = {
    },
    o.Projection.SphericalMercator = {
        MAX_LATITUDE: 85.0511287798,
        project: function (t) {
            var e = o.LatLng.DEG_TO_RAD,
            n = this.MAX_LATITUDE,
            i = Math.max(Math.min(n, t.lat), - n),
            r = t.lng * e,
            s = i * e;
            return s = Math.log(Math.tan(Math.PI / 4 + s / 2)),
            new o.Point(r, s)
        },
        unproject: function (t) {
            var e = o.LatLng.RAD_TO_DEG,
            n = t.x * e,
            i = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
            return new o.LatLng(i, n)
        }
    },
    o.Projection.LonLat = {
        project: function (t) {
            return new o.Point(t.lng, t.lat)
        },
        unproject: function (t) {
            return new o.LatLng(t.y, t.x)
        }
    },
    o.CRS = {
        latLngToPoint: function (t, e) {
            var n = this.projection.project(t),
            i = this.scale(e);
            return this.transformation._transform(n, i)
        },
        pointToLatLng: function (t, e) {
            var n = this.scale(e),
            i = this.transformation.untransform(t, n);
            return this.projection.unproject(i)
        },
        project: function (t) {
            return this.projection.project(t)
        },
        scale: function (t) {
            return 256 * Math.pow(2, t)
        },
        getSize: function (t) {
            var e = this.scale(t);
            return o.point(e, e)
        }
    },
    o.CRS.Simple = o.extend({
    }, o.CRS, {
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1, 0, - 1, 0),
        scale: function (t) {
            return Math.pow(2, t)
        }
    }),
    o.CRS.EPSG3857 = o.extend({
    }, o.CRS, {
        code: 'EPSG:3857',
        projection: o.Projection.SphericalMercator,
        transformation: new o.Transformation(0.5 / Math.PI, 0.5, - 0.5 / Math.PI, 0.5),
        project: function (t) {
            var e = this.projection.project(t),
            n = 6378137;
            return e.multiplyBy(n)
        }
    }),
    o.CRS.EPSG900913 = o.extend({
    }, o.CRS.EPSG3857, {
        code: 'EPSG:900913'
    }),
    o.CRS.EPSG4326 = o.extend({
    }, o.CRS, {
        code: 'EPSG:4326',
        projection: o.Projection.LonLat,
        transformation: new o.Transformation(1 / 360, 0.5, - 1 / 360, 0.5)
    }),
    o.Map = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            crs: o.CRS.EPSG3857,
            fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
            trackResize: !0,
            markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
        },
        initialize: function (t, e) {
            e = o.setOptions(this, e),
            this._initContainer(t),
            this._initLayout(),
            this._onResize = o.bind(this._onResize, this),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            e.center && e.zoom !== n && this.setView(o.latLng(e.center), e.zoom, {
                reset: !0
            }),
            this._handlers = [
            ],
            this._layers = {
            },
            this._zoomBoundLayers = {
            },
            this._tileLayersNum = 0,
            this.callInitHooks(),
            this._addLayers(e.layers)
        },
        setView: function (t, e) {
            return e = e === n ? this.getZoom()  : e,
            this._resetView(o.latLng(t), this._limitZoom(e)),
            this
        },
        setZoom: function (t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: e
            })  : (this._zoom = this._limitZoom(t), this)
        },
        zoomIn: function (t, e) {
            return this.setZoom(this._zoom + (t || 1), e)
        },
        zoomOut: function (t, e) {
            return this.setZoom(this._zoom - (t || 1), e)
        },
        setZoomAround: function (t, e, n) {
            var i = this.getZoomScale(e),
            r = this.getSize() .divideBy(2),
            s = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
            a = s.subtract(r) .multiplyBy(1 - 1 / i),
            l = this.containerPointToLatLng(r.add(a));
            return this.setView(l, e, {
                zoom: n
            })
        },
        fitBounds: function (t, e) {
            e = e || {
            },
            t = t.getBounds ? t.getBounds()  : o.latLngBounds(t);
            var n = o.point(e.paddingTopLeft || e.padding || [0,
            0]),
            i = o.point(e.paddingBottomRight || e.padding || [0,
            0]),
            r = this.getBoundsZoom(t, !1, n.add(i));
            r = e.maxZoom ? Math.min(e.maxZoom, r)  : r;
            var s = i.subtract(n) .divideBy(2),
            a = this.project(t.getSouthWest(), r),
            l = this.project(t.getNorthEast(), r),
            u = this.unproject(a.add(l) .divideBy(2) .add(s), r);
            return this.setView(u, r, e)
        },
        fitWorld: function (t) {
            return this.fitBounds([
            [ - 90,
            - 180],
            [
                90,
                180
            ]
            ], t)
        },
        panTo: function (t, e) {
            return this.setView(t, this._zoom, {
                pan: e
            })
        },
        panBy: function (t) {
            return this.fire('movestart'),
            this._rawPanBy(o.point(t)),
            this.fire('move'),
            this.fire('moveend')
        },
        setMaxBounds: function (t) {
            return t = o.latLngBounds(t),
            this.options.maxBounds = t,
            t ? (this._loaded && this._panInsideMaxBounds(), this.on('moveend', this._panInsideMaxBounds, this))  : this.off('moveend', this._panInsideMaxBounds, this)
        },
        panInsideBounds: function (t, e) {
            var n = this.getCenter(),
            i = this._limitCenter(n, this._zoom, t);
            return n.equals(i) ? this : this.panTo(i, e)
        },
        addLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on('load', this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
        },
        removeLayer: function (t) {
            var e = o.stamp(t);
            return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire('layerremove', {
                layer: t
            }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off('load', this._onTileLayerLoad, this)), this)  : this
        },
        hasLayer: function (t) {
            return t ? o.stamp(t) in this._layers : !1
        },
        eachLayer: function (t, e) {
            for (var n in this._layers) t.call(e, this._layers[n]);
            return this
        },
        invalidateSize: function (t) {
            if (!this._loaded) return this;
            t = o.extend({
                animate: !1,
                pan: !0
            }, t === !0 ? {
                animate: !0
            }
             : t);
            var e = this.getSize();
            this._sizeChanged = !0,
            this._initialCenter = null;
            var n = this.getSize(),
            i = e.divideBy(2) .round(),
            r = n.divideBy(2) .round(),
            s = i.subtract(r);
            return s.x || s.y ? (t.animate && t.pan ? this.panBy(s)  : (t.pan && this._rawPanBy(s), this.fire('move'), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, 'moveend'), 200))  : this.fire('moveend')), this.fire('resize', {
                oldSize: e,
                newSize: n
            }))  : this
        },
        addHandler: function (t, e) {
            if (!e) return this;
            var n = this[t] = new e(this);
            return this._handlers.push(n),
            this.options[t] && n.enable(),
            this
        },
        remove: function () {
            this._loaded && this.fire('unload'),
            this._initEvents('off');
            try {
                delete this._container._leaflet
            } catch (t) {
                this._container._leaflet = n
            }
            return this._clearPanes(),
            this._clearControlPos && this._clearControlPos(),
            this._clearHandlers(),
            this
        },
        getCenter: function () {
            return this._checkIfLoaded(),
            this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function () {
            return this._zoom
        },
        getBounds: function () {
            var t = this.getPixelBounds(),
            e = this.unproject(t.getBottomLeft()),
            n = this.unproject(t.getTopRight());
            return new o.LatLngBounds(e, n)
        },
        getMinZoom: function () {
            return this.options.minZoom === n ? this._layersMinZoom === n ? 0 : this._layersMinZoom : this.options.minZoom
        },
        getMaxZoom: function () {
            return this.options.maxZoom === n ? this._layersMaxZoom === n ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function (t, e, n) {
            t = o.latLngBounds(t);
            var i,
            r = this.getMinZoom() - (e ? 1 : 0),
            s = this.getMaxZoom(),
            a = this.getSize(),
            l = t.getNorthWest(),
            u = t.getSouthEast(),
            h = !0;
            n = o.point(n || [0,
            0]);
            do r++,
            i = this.project(u, r) .subtract(this.project(l, r)) .add(n),
            h = e ? i.x < a.x || i.y < a.y : a.contains(i);
            while (h && s >= r);
            return h && e ? null : e ? r : r - 1
        },
        getSize: function () {
            return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1),
            this._size.clone()
        },
        getPixelBounds: function () {
            var t = this._getTopLeftPoint();
            return new o.Bounds(t, t.add(this.getSize()))
        },
        getPixelOrigin: function () {
            return this._checkIfLoaded(),
            this._initialTopLeftPoint
        },
        getPanes: function () {
            return this._panes
        },
        getContainer: function () {
            return this._container
        },
        getZoomScale: function (t) {
            var e = this.options.crs;
            return e.scale(t) / e.scale(this._zoom)
        },
        getScaleZoom: function (t) {
            return this._zoom + Math.log(t) / Math.LN2
        },
        project: function (t, e) {
            return e = e === n ? this._zoom : e,
            this.options.crs.latLngToPoint(o.latLng(t), e)
        },
        unproject: function (t, e) {
            return e = e === n ? this._zoom : e,
            this.options.crs.pointToLatLng(o.point(t), e)
        },
        layerPointToLatLng: function (t) {
            var e = o.point(t) .add(this.getPixelOrigin());
            return this.unproject(e)
        },
        latLngToLayerPoint: function (t) {
            var e = this.project(o.latLng(t)) ._round();
            return e._subtract(this.getPixelOrigin())
        },
        containerPointToLayerPoint: function (t) {
            return o.point(t) .subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function (t) {
            return o.point(t) .add(this._getMapPanePos())
        },
        containerPointToLatLng: function (t) {
            var e = this.containerPointToLayerPoint(o.point(t));
            return this.layerPointToLatLng(e)
        },
        latLngToContainerPoint: function (t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
        },
        mouseEventToContainerPoint: function (t) {
            return o.DomEvent.getMousePosition(t, this._container)
        },
        mouseEventToLayerPoint: function (t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function (t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function (t) {
            var e = this._container = o.DomUtil.get(t);
            if (!e) throw new Error('Map container not found.');
            if (e._leaflet) throw new Error('Map container is already initialized.');
            e._leaflet = !0
        },
        _initLayout: function () {
            var t = this._container;
            o.DomUtil.addClass(t, 'leaflet-container' + (o.Browser.touch ? ' leaflet-touch' : '') + (o.Browser.retina ? ' leaflet-retina' : '') + (o.Browser.ielt9 ? ' leaflet-oldie' : '') + (this.options.fadeAnimation ? ' leaflet-fade-anim' : ''));
            var e = o.DomUtil.getStyle(t, 'position');
            'absolute' !== e && 'relative' !== e && 'fixed' !== e && (t.style.position = 'relative'),
            this._initPanes(),
            this._initControlPos && this._initControlPos()
        },
        _initPanes: function () {
            var t = this._panes = {
            };
            this._mapPane = t.mapPane = this._createPane('leaflet-map-pane', this._container),
            this._tilePane = t.tilePane = this._createPane('leaflet-tile-pane', this._mapPane),
            t.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane),
            t.shadowPane = this._createPane('leaflet-shadow-pane'),
            t.overlayPane = this._createPane('leaflet-overlay-pane'),
            t.markerPane = this._createPane('leaflet-marker-pane'),
            t.popupPane = this._createPane('leaflet-popup-pane');
            var e = ' leaflet-zoom-hide';
            this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e), o.DomUtil.addClass(t.popupPane, e))
        },
        _createPane: function (t, e) {
            return o.DomUtil.create('div', t, e || this._panes.objectsPane)
        },
        _clearPanes: function () {
            this._container.removeChild(this._mapPane)
        },
        _addLayers: function (t) {
            t = t ? o.Util.isArray(t) ? t : [
                t
            ] : [
            ];
            for (var e = 0, n = t.length; n > e; e++) this.addLayer(t[e])
        },
        _resetView: function (t, e, n, i) {
            var r = this._zoom !== e;
            i || (this.fire('movestart'), r && this.fire('zoomstart')),
            this._zoom = e,
            this._initialCenter = t,
            this._initialTopLeftPoint = this._getNewTopLeftPoint(t),
            n ? this._initialTopLeftPoint._add(this._getMapPanePos())  : o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)),
            this._tileLayersToLoad = this._tileLayersNum;
            var s = !this._loaded;
            this._loaded = !0,
            this.fire('viewreset', {
                hard: !n
            }),
            s && (this.fire('load'), this.eachLayer(this._layerAdd, this)),
            this.fire('move'),
            (r || i) && this.fire('zoomend'),
            this.fire('moveend', {
                hard: !n
            })
        },
        _rawPanBy: function (t) {
            o.DomUtil.setPosition(this._mapPane, this._getMapPanePos() .subtract(t))
        },
        _getZoomSpan: function () {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _updateZoomLevels: function () {
            var t,
            e = 1 / 0,
            i = - (1 / 0),
            o = this._getZoomSpan();
            for (t in this._zoomBoundLayers) {
                var r = this._zoomBoundLayers[t];
                isNaN(r.options.minZoom) || (e = Math.min(e, r.options.minZoom)),
                isNaN(r.options.maxZoom) || (i = Math.max(i, r.options.maxZoom))
            }
            t === n ? this._layersMaxZoom = this._layersMinZoom = n : (this._layersMaxZoom = i, this._layersMinZoom = e),
            o !== this._getZoomSpan() && this.fire('zoomlevelschange')
        },
        _panInsideMaxBounds: function () {
            this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function () {
            if (!this._loaded) throw new Error('Set map center and zoom first.')
        },
        _initEvents: function (e) {
            if (o.DomEvent) {
                e = e || 'on',
                o.DomEvent[e](this._container, 'click', this._onMouseClick, this);
                var n,
                i,
                r = [
                    'dblclick',
                    'mousedown',
                    'mouseup',
                    'mouseenter',
                    'mouseleave',
                    'mousemove',
                    'contextmenu'
                ];
                for (n = 0, i = r.length; i > n; n++) o.DomEvent[e](this._container, r[n], this._fireMouseEvent, this);
                this.options.trackResize && o.DomEvent[e](t, 'resize', this._onResize, this)
            }
        },
        _onResize: function () {
            o.Util.cancelAnimFrame(this._resizeRequest),
            this._resizeRequest = o.Util.requestAnimFrame(function () {
                this.invalidateSize({
                    debounceMoveend: !0
                })
            }, this, !1, this._container)
        },
        _onMouseClick: function (t) {
            !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || o.DomEvent._skipped(t) || (this.fire('preclick'), this._fireMouseEvent(t))
        },
        _fireMouseEvent: function (t) {
            if (this._loaded && !o.DomEvent._skipped(t)) {
                var e = t.type;
                if (e = 'mouseenter' === e ? 'mouseover' : 'mouseleave' === e ? 'mouseout' : e, this.hasEventListeners(e)) {
                    'contextmenu' === e && o.DomEvent.preventDefault(t);
                    var n = this.mouseEventToContainerPoint(t),
                    i = this.containerPointToLayerPoint(n),
                    r = this.layerPointToLatLng(i);
                    this.fire(e, {
                        latlng: r,
                        layerPoint: i,
                        containerPoint: n,
                        originalEvent: t
                    })
                }
            }
        },
        _onTileLayerLoad: function () {
            this._tileLayersToLoad--,
            this._tileLayersNum && !this._tileLayersToLoad && this.fire('tilelayersload')
        },
        _clearHandlers: function () {
            for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
        },
        whenReady: function (t, e) {
            return this._loaded ? t.call(e || this, this)  : this.on('load', t, e),
            this
        },
        _layerAdd: function (t) {
            t.onAdd(this),
            this.fire('layeradd', {
                layer: t
            })
        },
        _getMapPanePos: function () {
            return o.DomUtil.getPosition(this._mapPane)
        },
        _moved: function () {
            var t = this._getMapPanePos();
            return t && !t.equals([0,
            0])
        },
        _getTopLeftPoint: function () {
            return this.getPixelOrigin() .subtract(this._getMapPanePos())
        },
        _getNewTopLeftPoint: function (t, e) {
            var n = this.getSize() ._divideBy(2);
            return this.project(t, e) ._subtract(n) ._round()
        },
        _latLngToNewLayerPoint: function (t, e, n) {
            var i = this._getNewTopLeftPoint(n, e) .add(this._getMapPanePos());
            return this.project(t, e) ._subtract(i)
        },
        _getCenterLayerPoint: function () {
            return this.containerPointToLayerPoint(this.getSize() ._divideBy(2))
        },
        _getCenterOffset: function (t) {
            return this.latLngToLayerPoint(t) .subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function (t, e, n) {
            if (!n) return t;
            var i = this.project(t, e),
            r = this.getSize() .divideBy(2),
            s = new o.Bounds(i.subtract(r), i.add(r)),
            a = this._getBoundsOffset(s, n, e);
            return this.unproject(i.add(a), e)
        },
        _limitOffset: function (t, e) {
            if (!e) return t;
            var n = this.getPixelBounds(),
            i = new o.Bounds(n.min.add(t), n.max.add(t));
            return t.add(this._getBoundsOffset(i, e))
        },
        _getBoundsOffset: function (t, e, n) {
            var i = this.project(e.getNorthWest(), n) .subtract(t.min),
            r = this.project(e.getSouthEast(), n) .subtract(t.max),
            s = this._rebound(i.x, - r.x),
            a = this._rebound(i.y, - r.y);
            return new o.Point(s, a)
        },
        _rebound: function (t, e) {
            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function (t) {
            var e = this.getMinZoom(),
            n = this.getMaxZoom();
            return Math.max(e, Math.min(n, t));
        }
    }),
    o.map = function (t, e) {
        return new o.Map(t, e)
    },
    o.Projection.Mercator = {
        MAX_LATITUDE: 85.0840591556,
        R_MINOR: 6356752.314245179,
        R_MAJOR: 6378137,
        project: function (t) {
            var e = o.LatLng.DEG_TO_RAD,
            n = this.MAX_LATITUDE,
            i = Math.max(Math.min(n, t.lat), - n),
            r = this.R_MAJOR,
            s = this.R_MINOR,
            a = t.lng * e * r,
            l = i * e,
            u = s / r,
            h = Math.sqrt(1 - u * u),
            c = h * Math.sin(l);
            c = Math.pow((1 - c) / (1 + c), 0.5 * h);
            var d = Math.tan(0.5 * (0.5 * Math.PI - l)) / c;
            return l = - r * Math.log(d),
            new o.Point(a, l)
        },
        unproject: function (t) {
            for (var e, n = o.LatLng.RAD_TO_DEG, i = this.R_MAJOR, r = this.R_MINOR, s = t.x * n / i, a = r / i, l = Math.sqrt(1 - a * a), u = Math.exp( - t.y / i), h = Math.PI / 2 - 2 * Math.atan(u), c = 15, d = 1e-7, p = c, f = 0.1; Math.abs(f) > d && --p > 0; ) e = l * Math.sin(h),
            f = Math.PI / 2 - 2 * Math.atan(u * Math.pow((1 - e) / (1 + e), 0.5 * l)) - h,
            h += f;
            return new o.LatLng(h * n, s)
        }
    },
    o.CRS.EPSG3395 = o.extend({
    }, o.CRS, {
        code: 'EPSG:3395',
        projection: o.Projection.Mercator,
        transformation: function () {
            var t = o.Projection.Mercator,
            e = t.R_MAJOR,
            n = 0.5 / (Math.PI * e);
            return new o.Transformation(n, 0.5, - n, 0.5)
        }()
    }),
    o.TileLayer = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minZoom: 0,
            maxZoom: 18,
            tileSize: 256,
            subdomains: 'abc',
            errorTileUrl: '',
            attribution: '',
            zoomOffset: 0,
            opacity: 1,
            unloadInvisibleTiles: o.Browser.mobile,
            updateWhenIdle: o.Browser.mobile
        },
        initialize: function (t, e) {
            e = o.setOptions(this, e),
            e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--),
            e.bounds && (e.bounds = o.latLngBounds(e.bounds)),
            this._url = t;
            var n = this.options.subdomains;
            'string' == typeof n && (this.options.subdomains = n.split(''))
        },
        onAdd: function (t) {
            this._map = t,
            this._animated = t._zoomAnimated,
            this._initContainer(),
            t.on({
                viewreset: this._reset,
                moveend: this._update
            }, this),
            this._animated && t.on({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this),
            this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150, this), t.on('move', this._limitedUpdate, this)),
            this._reset(),
            this._update()
        },
        addTo: function (t) {
            return t.addLayer(this),
            this
        },
        onRemove: function (t) {
            this._container.parentNode.removeChild(this._container),
            t.off({
                viewreset: this._reset,
                moveend: this._update
            }, this),
            this._animated && t.off({
                zoomanim: this._animateZoom,
                zoomend: this._endZoomAnim
            }, this),
            this.options.updateWhenIdle || t.off('move', this._limitedUpdate, this),
            this._container = null,
            this._map = null
        },
        bringToFront: function () {
            var t = this._map._panes.tilePane;
            return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)),
            this
        },
        bringToBack: function () {
            var t = this._map._panes.tilePane;
            return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)),
            this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        getContainer: function () {
            return this._container
        },
        setOpacity: function (t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this
        },
        setZIndex: function (t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        setUrl: function (t, e) {
            return this._url = t,
            e || this.redraw(),
            this
        },
        redraw: function () {
            return this._map && (this._reset({
                hard: !0
            }), this._update()),
            this
        },
        _updateZIndex: function () {
            this._container && this.options.zIndex !== n && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function (t, e) {
            var n,
            i,
            o,
            r = t.children,
            s = - e(1 / 0, - (1 / 0));
            for (i = 0, o = r.length; o > i; i++) r[i] !== this._container && (n = parseInt(r[i].style.zIndex, 10), isNaN(n) || (s = e(s, n)));
            this.options.zIndex = this._container.style.zIndex = (isFinite(s) ? s : 0) + e(1, - 1)
        },
        _updateOpacity: function () {
            var t,
            e = this._tiles;
            if (o.Browser.ielt9)
            for (t in e) o.DomUtil.setOpacity(e[t], this.options.opacity);
             else o.DomUtil.setOpacity(this._container, this.options.opacity)
        },
        _initContainer: function () {
            var t = this._map._panes.tilePane;
            if (!this._container) {
                if (this._container = o.DomUtil.create('div', 'leaflet-layer'), this._updateZIndex(), this._animated) {
                    var e = 'leaflet-tile-container';
                    this._bgBuffer = o.DomUtil.create('div', e, this._container),
                    this._tileContainer = o.DomUtil.create('div', e, this._container)
                } else this._tileContainer = this._container;
                t.appendChild(this._container),
                this.options.opacity < 1 && this._updateOpacity()
            }
        },
        _reset: function (t) {
            for (var e in this._tiles) this.fire('tileunload', {
                tile: this._tiles[e]
            });
            this._tiles = {
            },
            this._tilesToLoad = 0,
            this.options.reuseTiles && (this._unusedTiles = [
            ]),
            this._tileContainer.innerHTML = '',
            this._animated && t && t.hard && this._clearBgBuffer(),
            this._initContainer()
        },
        _getTileSize: function () {
            var t = this._map,
            e = t.getZoom() + this.options.zoomOffset,
            n = this.options.maxNativeZoom,
            i = this.options.tileSize;
            return n && e > n && (i = Math.round(t.getZoomScale(e) / t.getZoomScale(n) * i)),
            i
        },
        _update: function () {
            if (this._map) {
                var t = this._map,
                e = t.getPixelBounds(),
                n = t.getZoom(),
                i = this._getTileSize();
                if (!(n > this.options.maxZoom || n < this.options.minZoom)) {
                    var r = o.bounds(e.min.divideBy(i) ._floor(), e.max.divideBy(i) ._floor());
                    this._addTilesFromCenterOut(r),
                    (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(r)
                }
            }
        },
        _addTilesFromCenterOut: function (t) {
            var n,
            i,
            r,
            s = [
            ],
            a = t.getCenter();
            for (n = t.min.y; n <= t.max.y; n++)
            for (i = t.min.x; i <= t.max.x; i++) r = new o.Point(i, n),
            this._tileShouldBeLoaded(r) && s.push(r);
            var l = s.length;
            if (0 !== l) {
                s.sort(function (t, e) {
                    return t.distanceTo(a) - e.distanceTo(a)
                });
                var u = e.createDocumentFragment();
                for (this._tilesToLoad || this.fire('loading'), this._tilesToLoad += l, i = 0; l > i; i++) this._addTile(s[i], u);
                this._tileContainer.appendChild(u)
            }
        },
        _tileShouldBeLoaded: function (t) {
            if (t.x + ':' + t.y in this._tiles) return !1;
            var e = this.options;
            if (!e.continuousWorld) {
                var n = this._getWrapTileNum();
                if (e.noWrap && (t.x < 0 || t.x >= n.x) || t.y < 0 || t.y >= n.y) return !1
            }
            if (e.bounds) {
                var i = this._getTileSize(),
                o = t.multiplyBy(i),
                r = o.add([i,
                i]),
                s = this._map.unproject(o),
                a = this._map.unproject(r);
                if (e.continuousWorld || e.noWrap || (s = s.wrap(), a = a.wrap()), !e.bounds.intersects([s,
                a])) return !1
            }
            return !0
        },
        _removeOtherTiles: function (t) {
            var e,
            n,
            i,
            o;
            for (o in this._tiles) e = o.split(':'),
            n = parseInt(e[0], 10),
            i = parseInt(e[1], 10),
            (n < t.min.x || n > t.max.x || i < t.min.y || i > t.max.y) && this._removeTile(o)
        },
        _removeTile: function (t) {
            var e = this._tiles[t];
            this.fire('tileunload', {
                tile: e,
                url: e.src
            }),
            this.options.reuseTiles ? (o.DomUtil.removeClass(e, 'leaflet-tile-loaded'), this._unusedTiles.push(e))  : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e),
            o.Browser.android || (e.onload = null, e.src = o.Util.emptyImageUrl),
            delete this._tiles[t]
        },
        _addTile: function (t, e) {
            var n = this._getTilePos(t),
            i = this._getTile();
            o.DomUtil.setPosition(i, n, o.Browser.chrome),
            this._tiles[t.x + ':' + t.y] = i,
            this._loadTile(i, t),
            i.parentNode !== this._tileContainer && e.appendChild(i)
        },
        _getZoomForUrl: function () {
            var t = this.options,
            e = this._map.getZoom();
            return t.zoomReverse && (e = t.maxZoom - e),
            e += t.zoomOffset,
            t.maxNativeZoom ? Math.min(e, t.maxNativeZoom)  : e
        },
        _getTilePos: function (t) {
            var e = this._map.getPixelOrigin(),
            n = this._getTileSize();
            return t.multiplyBy(n) .subtract(e)
        },
        getTileUrl: function (t) {
            return o.Util.template(this._url, o.extend({
                s: this._getSubdomain(t),
                z: t.z,
                x: t.x,
                y: t.y
            }, this.options))
        },
        _getWrapTileNum: function () {
            var t = this._map.options.crs,
            e = t.getSize(this._map.getZoom());
            return e.divideBy(this._getTileSize()) ._floor()
        },
        _adjustTilePoint: function (t) {
            var e = this._getWrapTileNum();
            this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x),
            this.options.tms && (t.y = e.y - t.y - 1),
            t.z = this._getZoomForUrl()
        },
        _getSubdomain: function (t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e]
        },
        _getTile: function () {
            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                var t = this._unusedTiles.pop();
                return this._resetTile(t),
                t
            }
            return this._createTile()
        },
        _resetTile: function () {
        },
        _createTile: function () {
            var t = o.DomUtil.create('img', 'leaflet-tile');
            return t.style.width = t.style.height = this._getTileSize() + 'px',
            t.galleryimg = 'no',
            t.onselectstart = t.onmousemove = o.Util.falseFn,
            o.Browser.ielt9 && this.options.opacity !== n && o.DomUtil.setOpacity(t, this.options.opacity),
            o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = 'hidden'),
            t
        },
        _loadTile: function (t, e) {
            t._layer = this,
            t.onload = this._tileOnLoad,
            t.onerror = this._tileOnError,
            this._adjustTilePoint(e),
            t.src = this.getTileUrl(e),
            this.fire('tileloadstart', {
                tile: t,
                url: t.src
            })
        },
        _tileLoaded: function () {
            this._tilesToLoad--,
            this._animated && o.DomUtil.addClass(this._tileContainer, 'leaflet-zoom-animated'),
            this._tilesToLoad || (this.fire('load'), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(o.bind(this._clearBgBuffer, this), 500)))
        },
        _tileOnLoad: function () {
            var t = this._layer;
            this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, 'leaflet-tile-loaded'), t.fire('tileload', {
                tile: this,
                url: this.src
            })),
            t._tileLoaded()
        },
        _tileOnError: function () {
            var t = this._layer;
            t.fire('tileerror', {
                tile: this,
                url: this.src
            });
            var e = t.options.errorTileUrl;
            e && (this.src = e),
            t._tileLoaded()
        }
    }),
    o.tileLayer = function (t, e) {
        return new o.TileLayer(t, e)
    },
    o.TileLayer.WMS = o.TileLayer.extend({
        defaultWmsParams: {
            service: 'WMS',
            request: 'GetMap',
            version: '1.1.1',
            layers: '',
            styles: '',
            format: 'image/jpeg',
            transparent: !1
        },
        initialize: function (t, e) {
            this._url = t;
            var n = o.extend({
            }, this.defaultWmsParams),
            i = e.tileSize || this.options.tileSize;
            e.detectRetina && o.Browser.retina ? n.width = n.height = 2 * i : n.width = n.height = i;
            for (var r in e) this.options.hasOwnProperty(r) || 'crs' === r || (n[r] = e[r]);
            this.wmsParams = n,
            o.setOptions(this, e)
        },
        onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs,
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
            this.wmsParams[e] = this._crs.code,
            o.TileLayer.prototype.onAdd.call(this, t)
        },
        getTileUrl: function (t) {
            var e = this._map,
            n = this.options.tileSize,
            i = t.multiplyBy(n),
            r = i.add([n,
            n]),
            s = this._crs.project(e.unproject(i, t.z)),
            a = this._crs.project(e.unproject(r, t.z)),
            l = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [
                a.y,
                s.x,
                s.y,
                a.x
            ].join(',')  : [
                s.x,
                a.y,
                a.x,
                s.y
            ].join(','),
            u = o.Util.template(this._url, {
                s: this._getSubdomain(t)
            });
            return u + o.Util.getParamString(this.wmsParams, u, !0) + '&BBOX=' + l
        },
        setParams: function (t, e) {
            return o.extend(this.wmsParams, t),
            e || this.redraw(),
            this
        }
    }),
    o.tileLayer.wms = function (t, e) {
        return new o.TileLayer.WMS(t, e)
    },
    o.TileLayer.Canvas = o.TileLayer.extend({
        options: {
            async: !1
        },
        initialize: function (t) {
            o.setOptions(this, t)
        },
        redraw: function () {
            this._map && (this._reset({
                hard: !0
            }), this._update());
            for (var t in this._tiles) this._redrawTile(this._tiles[t]);
            return this
        },
        _redrawTile: function (t) {
            this.drawTile(t, t._tilePoint, this._map._zoom)
        },
        _createTile: function () {
            var t = o.DomUtil.create('canvas', 'leaflet-tile');
            return t.width = t.height = this.options.tileSize,
            t.onselectstart = t.onmousemove = o.Util.falseFn,
            t
        },
        _loadTile: function (t, e) {
            t._layer = this,
            t._tilePoint = e,
            this._redrawTile(t),
            this.options.async || this.tileDrawn(t)
        },
        drawTile: function () {
        },
        tileDrawn: function (t) {
            this._tileOnLoad.call(t)
        }
    }),
    o.tileLayer.canvas = function (t) {
        return new o.TileLayer.Canvas(t)
    },
    o.ImageOverlay = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            opacity: 1
        },
        initialize: function (t, e, n) {
            this._url = t,
            this._bounds = o.latLngBounds(e),
            o.setOptions(this, n)
        },
        onAdd: function (t) {
            this._map = t,
            this._image || this._initImage(),
            t._panes.overlayPane.appendChild(this._image),
            t.on('viewreset', this._reset, this),
            t.options.zoomAnimation && o.Browser.any3d && t.on('zoomanim', this._animateZoom, this),
            this._reset()
        },
        onRemove: function (t) {
            t.getPanes() .overlayPane.removeChild(this._image),
            t.off('viewreset', this._reset, this),
            t.options.zoomAnimation && t.off('zoomanim', this._animateZoom, this)
        },
        addTo: function (t) {
            return t.addLayer(this),
            this
        },
        setOpacity: function (t) {
            return this.options.opacity = t,
            this._updateOpacity(),
            this
        },
        bringToFront: function () {
            return this._image && this._map._panes.overlayPane.appendChild(this._image),
            this
        },
        bringToBack: function () {
            var t = this._map._panes.overlayPane;
            return this._image && t.insertBefore(this._image, t.firstChild),
            this
        },
        setUrl: function (t) {
            this._url = t,
            this._image.src = this._url
        },
        getAttribution: function () {
            return this.options.attribution
        },
        _initImage: function () {
            this._image = o.DomUtil.create('img', 'leaflet-image-layer'),
            this._map.options.zoomAnimation && o.Browser.any3d ? o.DomUtil.addClass(this._image, 'leaflet-zoom-animated')  : o.DomUtil.addClass(this._image, 'leaflet-zoom-hide'),
            this._updateOpacity(),
            o.extend(this._image, {
                galleryimg: 'no',
                onselectstart: o.Util.falseFn,
                onmousemove: o.Util.falseFn,
                onload: o.bind(this._onImageLoad, this),
                src: this._url
            })
        },
        _animateZoom: function (t) {
            var e = this._map,
            n = this._image,
            i = e.getZoomScale(t.zoom),
            r = this._bounds.getNorthWest(),
            s = this._bounds.getSouthEast(),
            a = e._latLngToNewLayerPoint(r, t.zoom, t.center),
            l = e._latLngToNewLayerPoint(s, t.zoom, t.center) ._subtract(a),
            u = a._add(l._multiplyBy(0.5 * (1 - 1 / i)));
            n.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(u) + ' scale(' + i + ') '
        },
        _reset: function () {
            var t = this._image,
            e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            n = this._map.latLngToLayerPoint(this._bounds.getSouthEast()) ._subtract(e);
            o.DomUtil.setPosition(t, e),
            t.style.width = n.x + 'px',
            t.style.height = n.y + 'px'
        },
        _onImageLoad: function () {
            this.fire('load')
        },
        _updateOpacity: function () {
            o.DomUtil.setOpacity(this._image, this.options.opacity)
        }
    }),
    o.imageOverlay = function (t, e, n) {
        return new o.ImageOverlay(t, e, n)
    },
    o.Icon = o.Class.extend({
        options: {
            className: ''
        },
        initialize: function (t) {
            o.setOptions(this, t)
        },
        createIcon: function (t) {
            return this._createIcon('icon', t)
        },
        createShadow: function (t) {
            return this._createIcon('shadow', t)
        },
        _createIcon: function (t, e) {
            var n = this._getIconUrl(t);
            if (!n) {
                if ('icon' === t) throw new Error('iconUrl not set in Icon options (see the docs).');
                return null
            }
            var i;
            return i = e && 'IMG' === e.tagName ? this._createImg(n, e)  : this._createImg(n),
            this._setIconStyles(i, t),
            i
        },
        _setIconStyles: function (t, e) {
            var n,
            i = this.options,
            r = o.point(i[e + 'Size']);
            n = 'shadow' === e ? o.point(i.shadowAnchor || i.iconAnchor)  : o.point(i.iconAnchor),
            !n && r && (n = r.divideBy(2, !0)),
            t.className = 'leaflet-marker-' + e + ' ' + i.className,
            n && (t.style.marginLeft = - n.x + 'px', t.style.marginTop = - n.y + 'px'),
            r && (t.style.width = r.x + 'px', t.style.height = r.y + 'px')
        },
        _createImg: function (t, n) {
            return n = n || e.createElement('img'),
            n.src = t,
            n
        },
        _getIconUrl: function (t) {
            return o.Browser.retina && this.options[t + 'RetinaUrl'] ? this.options[t + 'RetinaUrl'] : this.options[t + 'Url']
        }
    }),
    o.icon = function (t) {
        return new o.Icon(t)
    },
    o.Icon.Default = o.Icon.extend({
        options: {
            iconSize: [
                25,
                41
            ],
            iconAnchor: [
                12,
                41
            ],
            popupAnchor: [
                1,
                - 34
            ],
            shadowSize: [
                41,
                41
            ]
        },
        _getIconUrl: function (t) {
            var e = t + 'Url';
            if (this.options[e]) return this.options[e];
            o.Browser.retina && 'icon' === t && (t += '-2x');
            var n = o.Icon.Default.imagePath;
            if (!n) throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
            return n + '/marker-' + t + '.png'
        }
    }),
    o.Icon.Default.imagePath = function () {
        var t,
        n,
        i,
        o,
        r,
        s = e.getElementsByTagName('script'),
        a = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
        for (t = 0, n = s.length; n > t; t++)
        if (i = s[t].src, o = i.match(a)) return r = i.split(a) [0],
        (r ? r + '/' : '') + 'images'
    }(),
    o.Marker = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            icon: new o.Icon.Default,
            title: '',
            alt: '',
            clickable: !0,
            draggable: !1,
            keyboard: !0,
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250
        },
        initialize: function (t, e) {
            o.setOptions(this, e),
            this._latlng = o.latLng(t)
        },
        onAdd: function (t) {
            this._map = t,
            t.on('viewreset', this.update, this),
            this._initIcon(),
            this.update(),
            this.fire('add'),
            t.options.zoomAnimation && t.options.markerZoomAnimation && t.on('zoomanim', this._animateZoom, this)
        },
        addTo: function (t) {
            return t.addLayer(this),
            this
        },
        onRemove: function (t) {
            this.dragging && this.dragging.disable(),
            this._removeIcon(),
            this._removeShadow(),
            this.fire('remove'),
            t.off({
                viewreset: this.update,
                zoomanim: this._animateZoom
            }, this),
            this._map = null
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t),
            this.update(),
            this.fire('move', {
                latlng: this._latlng
            })
        },
        setZIndexOffset: function (t) {
            return this.options.zIndexOffset = t,
            this.update(),
            this
        },
        setIcon: function (t) {
            return this.options.icon = t,
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup),
            this
        },
        update: function () {
            return this._icon && this._setPos(this._map.latLngToLayerPoint(this._latlng) .round()),
            this
        },
        _initIcon: function () {
            var t = this.options,
            e = this._map,
            n = e.options.zoomAnimation && e.options.markerZoomAnimation,
            i = n ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide',
            r = t.icon.createIcon(this._icon),
            s = !1;
            r !== this._icon && (this._icon && this._removeIcon(), s = !0, t.title && (r.title = t.title), t.alt && (r.alt = t.alt)),
            o.DomUtil.addClass(r, i),
            t.keyboard && (r.tabIndex = '0'),
            this._icon = r,
            this._initInteraction(),
            t.riseOnHover && o.DomEvent.on(r, 'mouseover', this._bringToFront, this) .on(r, 'mouseout', this._resetZIndex, this);
            var a = t.icon.createShadow(this._shadow),
            l = !1;
            a !== this._shadow && (this._removeShadow(), l = !0),
            a && o.DomUtil.addClass(a, i),
            this._shadow = a,
            t.opacity < 1 && this._updateOpacity();
            var u = this._map._panes;
            s && u.markerPane.appendChild(this._icon),
            a && l && u.shadowPane.appendChild(this._shadow)
        },
        _removeIcon: function () {
            this.options.riseOnHover && o.DomEvent.off(this._icon, 'mouseover', this._bringToFront) .off(this._icon, 'mouseout', this._resetZIndex),
            this._map._panes.markerPane.removeChild(this._icon),
            this._icon = null
        },
        _removeShadow: function () {
            this._shadow && this._map._panes.shadowPane.removeChild(this._shadow),
            this._shadow = null
        },
        _setPos: function (t) {
            o.DomUtil.setPosition(this._icon, t),
            this._shadow && o.DomUtil.setPosition(this._shadow, t),
            this._zIndex = t.y + this.options.zIndexOffset,
            this._resetZIndex()
        },
        _updateZIndex: function (t) {
            this._icon.style.zIndex = this._zIndex + t
        },
        _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) .round();
            this._setPos(e)
        },
        _initInteraction: function () {
            if (this.options.clickable) {
                var t = this._icon,
                e = [
                    'dblclick',
                    'mousedown',
                    'mouseover',
                    'mouseout',
                    'contextmenu'
                ];
                o.DomUtil.addClass(t, 'leaflet-clickable'),
                o.DomEvent.on(t, 'click', this._onMouseClick, this),
                o.DomEvent.on(t, 'keypress', this._onKeyPress, this);
                for (var n = 0; n < e.length; n++) o.DomEvent.on(t, e[n], this._fireMouseEvent, this);
                o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
            }
        },
        _onMouseClick: function (t) {
            var e = this.dragging && this.dragging.moved();
            (this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t),
            e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            })
        },
        _onKeyPress: function (t) {
            13 === t.keyCode && this.fire('click', {
                originalEvent: t,
                latlng: this._latlng
            })
        },
        _fireMouseEvent: function (t) {
            this.fire(t.type, {
                originalEvent: t,
                latlng: this._latlng
            }),
            'contextmenu' === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t),
            'mousedown' !== t.type ? o.DomEvent.stopPropagation(t)  : o.DomEvent.preventDefault(t)
        },
        setOpacity: function (t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this
        },
        _updateOpacity: function () {
            o.DomUtil.setOpacity(this._icon, this.options.opacity),
            this._shadow && o.DomUtil.setOpacity(this._shadow, this.options.opacity)
        },
        _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function () {
            this._updateZIndex(0)
        }
    }),
    o.marker = function (t, e) {
        return new o.Marker(t, e)
    },
    o.DivIcon = o.Icon.extend({
        options: {
            iconSize: [
                12,
                12
            ],
            className: 'leaflet-div-icon',
            html: !1
        },
        createIcon: function (t) {
            var n = t && 'DIV' === t.tagName ? t : e.createElement('div'),
            i = this.options;
            return i.html !== !1 ? n.innerHTML = i.html : n.innerHTML = '',
            i.bgPos && (n.style.backgroundPosition = - i.bgPos.x + 'px ' + - i.bgPos.y + 'px'),
            this._setIconStyles(n, 'icon'),
            n
        },
        createShadow: function () {
            return null
        }
    }),
    o.divIcon = function (t) {
        return new o.DivIcon(t)
    },
    o.Map.mergeOptions({
        closePopupOnClick: !0
    }),
    o.Popup = o.Class.extend({
        includes: o.Mixin.Events,
        options: {
            minWidth: 50,
            maxWidth: 300,
            autoPan: !0,
            closeButton: !0,
            offset: [
                0,
                7
            ],
            autoPanPadding: [
                5,
                5
            ],
            keepInView: !1,
            className: '',
            zoomAnimation: !0
        },
        initialize: function (t, e) {
            o.setOptions(this, t),
            this._source = e,
            this._animated = o.Browser.any3d && this.options.zoomAnimation,
            this._isOpen = !1
        },
        onAdd: function (t) {
            this._map = t,
            this._container || this._initLayout();
            var e = t.options.fadeAnimation;
            e && o.DomUtil.setOpacity(this._container, 0),
            t._panes.popupPane.appendChild(this._container),
            t.on(this._getEvents(), this),
            this.update(),
            e && o.DomUtil.setOpacity(this._container, 1),
            this.fire('open'),
            t.fire('popupopen', {
                popup: this
            }),
            this._source && this._source.fire('popupopen', {
                popup: this
            })
        },
        addTo: function (t) {
            return t.addLayer(this),
            this
        },
        openOn: function (t) {
            return t.openPopup(this),
            this
        },
        onRemove: function (t) {
            t._panes.popupPane.removeChild(this._container),
            o.Util.falseFn(this._container.offsetWidth),
            t.off(this._getEvents(), this),
            t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0),
            this._map = null,
            this.fire('close'),
            t.fire('popupclose', {
                popup: this
            }),
            this._source && this._source.fire('popupclose', {
                popup: this
            })
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t),
            this._map && (this._updatePosition(), this._adjustPan()),
            this
        },
        getContent: function () {
            return this._content
        },
        setContent: function (t) {
            return this._content = t,
            this.update(),
            this
        },
        update: function () {
            this._map && (this._container.style.visibility = 'hidden', this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = '', this._adjustPan())
        },
        _getEvents: function () {
            var t = {
                viewreset: this._updatePosition
            };
            return this._animated && (t.zoomanim = this._zoomAnimation),
            ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
        },
        _close: function () {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function () {
            var t,
            e = 'leaflet-popup',
            n = e + ' ' + this.options.className + ' leaflet-zoom-' + (this._animated ? 'animated' : 'hide'),
            i = this._container = o.DomUtil.create('div', n);
            this.options.closeButton && (t = this._closeButton = o.DomUtil.create('a', e + '-close-button', i), t.href = '#close', t.innerHTML = '&#215;', o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, 'click', this._onCloseButtonClick, this));
            var r = this._wrapper = o.DomUtil.create('div', e + '-content-wrapper', i);
            o.DomEvent.disableClickPropagation(r),
            this._contentNode = o.DomUtil.create('div', e + '-content', r),
            o.DomEvent.disableScrollPropagation(this._contentNode),
            o.DomEvent.on(r, 'contextmenu', o.DomEvent.stopPropagation),
            this._tipContainer = o.DomUtil.create('div', e + '-tip-container', i),
            this._tip = o.DomUtil.create('div', e + '-tip', this._tipContainer)
        },
        _updateContent: function () {
            if (this._content) {
                if ('string' == typeof this._content) this._contentNode.innerHTML = this._content;
                 else {
                    for (; this._contentNode.hasChildNodes(); ) this._contentNode.removeChild(this._contentNode.firstChild);
                    this._contentNode.appendChild(this._content)
                }
                this.fire('contentupdate')
            }
        },
        _updateLayout: function () {
            var t = this._contentNode,
            e = t.style;
            e.width = '',
            e.whiteSpace = 'nowrap';
            var n = t.offsetWidth;
            n = Math.min(n, this.options.maxWidth),
            n = Math.max(n, this.options.minWidth),
            e.width = n + 1 + 'px',
            e.whiteSpace = '',
            e.height = '';
            var i = t.offsetHeight,
            r = this.options.maxHeight,
            s = 'leaflet-popup-scrolled';
            r && i > r ? (e.height = r + 'px', o.DomUtil.addClass(t, s))  : o.DomUtil.removeClass(t, s),
            this._containerWidth = this._container.offsetWidth
        },
        _updatePosition: function () {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                e = this._animated,
                n = o.point(this.options.offset);
                e && o.DomUtil.setPosition(this._container, t),
                this._containerBottom = - n.y - (e ? 0 : t.y),
                this._containerLeft = - Math.round(this._containerWidth / 2) + n.x + (e ? 0 : t.x),
                this._container.style.bottom = this._containerBottom + 'px',
                this._container.style.left = this._containerLeft + 'px'
            }
        },
        _zoomAnimation: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            o.DomUtil.setPosition(this._container, e)
        },
        _adjustPan: function () {
            if (this.options.autoPan) {
                var t = this._map,
                e = this._container.offsetHeight,
                n = this._containerWidth,
                i = new o.Point(this._containerLeft, - e - this._containerBottom);
                this._animated && i._add(o.DomUtil.getPosition(this._container));
                var r = t.layerPointToContainerPoint(i),
                s = o.point(this.options.autoPanPadding),
                a = o.point(this.options.autoPanPaddingTopLeft || s),
                l = o.point(this.options.autoPanPaddingBottomRight || s),
                u = t.getSize(),
                h = 0,
                c = 0;
                r.x + n + l.x > u.x && (h = r.x + n - u.x + l.x),
                r.x - h - a.x < 0 && (h = r.x - a.x),
                r.y + e + l.y > u.y && (c = r.y + e - u.y + l.y),
                r.y - c - a.y < 0 && (c = r.y - a.y),
                (h || c) && t.fire('autopanstart') .panBy([h,
                c])
            }
        },
        _onCloseButtonClick: function (t) {
            this._close(),
            o.DomEvent.stop(t)
        }
    }),
    o.popup = function (t, e) {
        return new o.Popup(t, e)
    },
    o.Map.include({
        openPopup: function (t, e, n) {
            if (this.closePopup(), !(t instanceof o.Popup)) {
                var i = t;
                t = new o.Popup(n) .setLatLng(e) .setContent(i)
            }
            return t._isOpen = !0,
            this._popup = t,
            this.addLayer(t)
        },
        closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null),
            t && (this.removeLayer(t), t._isOpen = !1),
            this
        }
    }),
    o.Marker.include({
        openPopup: function () {
            return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)),
            this
        },
        closePopup: function () {
            return this._popup && this._popup._close(),
            this
        },
        togglePopup: function () {
            return this._popup && (this._popup._isOpen ? this.closePopup()  : this.openPopup()),
            this
        },
        bindPopup: function (t, e) {
            var n = o.point(this.options.icon.options.popupAnchor || [0,
            0]);
            return n = n.add(o.Popup.prototype.options.offset),
            e && e.offset && (n = n.add(e.offset)),
            e = o.extend({
                offset: n
            }, e),
            this._popupHandlersAdded || (this.on('click', this.togglePopup, this) .on('remove', this.closePopup, this) .on('move', this._movePopup, this), this._popupHandlersAdded = !0),
            t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t, t._source = this)  : this._popup = new o.Popup(e, this) .setContent(t),
            this
        },
        setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t),
            this
        },
        unbindPopup: function () {
            return this._popup && (this._popup = null, this.off('click', this.togglePopup, this) .off('remove', this.closePopup, this) .off('move', this._movePopup, this), this._popupHandlersAdded = !1),
            this
        },
        getPopup: function () {
            return this._popup
        },
        _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        }
    }),
    o.LayerGroup = o.Class.extend({
        initialize: function (t) {
            this._layers = {
            };
            var e,
            n;
            if (t)
            for (e = 0, n = t.length; n > e; e++) this.addLayer(t[e])
        },
        addLayer: function (t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t,
            this._map && this._map.addLayer(t),
            this
        },
        removeLayer: function (t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
            delete this._layers[e],
            this
        },
        hasLayer: function (t) {
            return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
        },
        clearLayers: function () {
            return this.eachLayer(this.removeLayer, this),
            this
        },
        invoke: function (t) {
            var e,
            n,
            i = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers) n = this._layers[e],
            n[t] && n[t].apply(n, i);
            return this
        },
        onAdd: function (t) {
            this._map = t,
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function (t) {
            this.eachLayer(t.removeLayer, t),
            this._map = null
        },
        addTo: function (t) {
            return t.addLayer(this),
            this
        },
        eachLayer: function (t, e) {
            for (var n in this._layers) t.call(e, this._layers[n]);
            return this
        },
        getLayer: function (t) {
            return this._layers[t]
        },
        getLayers: function () {
            var t = [
            ];
            for (var e in this._layers) t.push(this._layers[e]);
            return t
        },
        setZIndex: function (t) {
            return this.invoke('setZIndex', t)
        },
        getLayerId: function (t) {
            return o.stamp(t)
        }
    }),
    o.layerGroup = function (t) {
        return new o.LayerGroup(t)
    },
    o.FeatureGroup = o.LayerGroup.extend({
        includes: o.Mixin.Events,
        statics: {
            EVENTS: 'click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose'
        },
        addLayer: function (t) {
            return this.hasLayer(t) ? this : ('on' in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire('layeradd', {
                layer: t
            }))
        },
        removeLayer: function (t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), 'off' in t && t.off(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke('unbindPopup'), this.fire('layerremove', {
                layer: t
            }))  : this
        },
        bindPopup: function (t, e) {
            return this._popupContent = t,
            this._popupOptions = e,
            this.invoke('bindPopup', t, e)
        },
        openPopup: function (t) {
            for (var e in this._layers) {
                this._layers[e].openPopup(t);
                break
            }
            return this
        },
        setStyle: function (t) {
            return this.invoke('setStyle', t)
        },
        bringToFront: function () {
            return this.invoke('bringToFront')
        },
        bringToBack: function () {
            return this.invoke('bringToBack')
        },
        getBounds: function () {
            var t = new o.LatLngBounds;
            return this.eachLayer(function (e) {
                t.extend(e instanceof o.Marker ? e.getLatLng()  : e.getBounds())
            }),
            t
        },
        _propagateEvent: function (t) {
            t = o.extend({
                layer: t.target,
                target: this
            }, t),
            this.fire(t.type, t)
        }
    }),
    o.featureGroup = function (t) {
        return new o.FeatureGroup(t)
    },
    o.Path = o.Class.extend({
        includes: [
            o.Mixin.Events
        ],
        statics: {
            CLIP_PADDING: function () {
                var e = o.Browser.mobile ? 1280 : 2000,
                n = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
                return Math.max(0, Math.min(0.5, n))
            }()
        },
        options: {
            stroke: !0,
            color: '#0033ff',
            dashArray: null,
            lineCap: null,
            lineJoin: null,
            weight: 5,
            opacity: 0.5,
            fill: !1,
            fillColor: null,
            fillOpacity: 0.2,
            clickable: !0
        },
        initialize: function (t) {
            o.setOptions(this, t)
        },
        onAdd: function (t) {
            this._map = t,
            this._container || (this._initElements(), this._initEvents()),
            this.projectLatlngs(),
            this._updatePath(),
            this._container && this._map._pathRoot.appendChild(this._container),
            this.fire('add'),
            t.on({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        addTo: function (t) {
            return t.addLayer(this),
            this
        },
        onRemove: function (t) {
            t._pathRoot.removeChild(this._container),
            this.fire('remove'),
            this._map = null,
            o.Browser.vml && (this._container = null, this._stroke = null, this._fill = null),
            t.off({
                viewreset: this.projectLatlngs,
                moveend: this._updatePath
            }, this)
        },
        projectLatlngs: function () {
        },
        setStyle: function (t) {
            return o.setOptions(this, t),
            this._container && this._updateStyle(),
            this
        },
        redraw: function () {
            return this._map && (this.projectLatlngs(), this._updatePath()),
            this
        }
    }),
    o.Map.include({
        _updatePathViewport: function () {
            var t = o.Path.CLIP_PADDING,
            e = this.getSize(),
            n = o.DomUtil.getPosition(this._mapPane),
            i = n.multiplyBy( - 1) ._subtract(e.multiplyBy(t) ._round()),
            r = i.add(e.multiplyBy(1 + 2 * t) ._round());
            this._pathViewport = new o.Bounds(i, r)
        }
    }),
    o.Path.SVG_NS = 'http://www.w3.org/2000/svg',
    o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path.SVG_NS, 'svg') .createSVGRect),
    o.Path = o.Path.extend({
        statics: {
            SVG: o.Browser.svg
        },
        bringToFront: function () {
            var t = this._map._pathRoot,
            e = this._container;
            return e && t.lastChild !== e && t.appendChild(e),
            this
        },
        bringToBack: function () {
            var t = this._map._pathRoot,
            e = this._container,
            n = t.firstChild;
            return e && n !== e && t.insertBefore(e, n),
            this
        },
        getPathString: function () {
        },
        _createElement: function (t) {
            return e.createElementNS(o.Path.SVG_NS, t)
        },
        _initElements: function () {
            this._map._initPathRoot(),
            this._initPath(),
            this._initStyle()
        },
        _initPath: function () {
            this._container = this._createElement('g'),
            this._path = this._createElement('path'),
            this.options.className && o.DomUtil.addClass(this._path, this.options.className),
            this._container.appendChild(this._path)
        },
        _initStyle: function () {
            this.options.stroke && (this._path.setAttribute('stroke-linejoin', 'round'), this._path.setAttribute('stroke-linecap', 'round')),
            this.options.fill && this._path.setAttribute('fill-rule', 'evenodd'),
            this.options.pointerEvents && this._path.setAttribute('pointer-events', this.options.pointerEvents),
            this.options.clickable || this.options.pointerEvents || this._path.setAttribute('pointer-events', 'none'),
            this._updateStyle()
        },
        _updateStyle: function () {
            this.options.stroke ? (this._path.setAttribute('stroke', this.options.color), this._path.setAttribute('stroke-opacity', this.options.opacity), this._path.setAttribute('stroke-width', this.options.weight), this.options.dashArray ? this._path.setAttribute('stroke-dasharray', this.options.dashArray)  : this._path.removeAttribute('stroke-dasharray'), this.options.lineCap && this._path.setAttribute('stroke-linecap', this.options.lineCap), this.options.lineJoin && this._path.setAttribute('stroke-linejoin', this.options.lineJoin))  : this._path.setAttribute('stroke', 'none'),
            this.options.fill ? (this._path.setAttribute('fill', this.options.fillColor || this.options.color), this._path.setAttribute('fill-opacity', this.options.fillOpacity))  : this._path.setAttribute('fill', 'none')
        },
        _updatePath: function () {
            var t = this.getPathString();
            t || (t = 'M0 0'),
            this._path.setAttribute('d', t)
        },
        _initEvents: function () {
            if (this.options.clickable) {
                (o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, 'leaflet-clickable'),
                o.DomEvent.on(this._container, 'click', this._onMouseClick, this);
                for (var t = [
                    'dblclick',
                    'mousedown',
                    'mouseover',
                    'mouseout',
                    'mousemove',
                    'contextmenu'
                ], e = 0; e < t.length; e++) o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this);
            }
        },
        _onMouseClick: function (t) {
            this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
        },
        _fireMouseEvent: function (t) {
            if (this._map && this.hasEventListeners(t.type)) {
                var e = this._map,
                n = e.mouseEventToContainerPoint(t),
                i = e.containerPointToLayerPoint(n),
                r = e.layerPointToLatLng(i);
                this.fire(t.type, {
                    latlng: r,
                    layerPoint: i,
                    containerPoint: n,
                    originalEvent: t
                }),
                'contextmenu' === t.type && o.DomEvent.preventDefault(t),
                'mousemove' !== t.type && o.DomEvent.stopPropagation(t)
            }
        }
    }),
    o.Map.include({
        _initPathRoot: function () {
            this._pathRoot || (this._pathRoot = o.Path.prototype._createElement('svg'), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-animated'), this.on({
                zoomanim: this._animatePathZoom,
                zoomend: this._endPathZoom
            }))  : o.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-hide'), this.on('moveend', this._updateSvgViewport), this._updateSvgViewport())
        },
        _animatePathZoom: function (t) {
            var e = this.getZoomScale(t.zoom),
            n = this._getCenterOffset(t.center) ._multiplyBy( - e) ._add(this._pathViewport.min);
            this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(n) + ' scale(' + e + ') ',
            this._pathZooming = !0
        },
        _endPathZoom: function () {
            this._pathZooming = !1
        },
        _updateSvgViewport: function () {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport,
                e = t.min,
                n = t.max,
                i = n.x - e.x,
                r = n.y - e.y,
                s = this._pathRoot,
                a = this._panes.overlayPane;
                o.Browser.mobileWebkit && a.removeChild(s),
                o.DomUtil.setPosition(s, e),
                s.setAttribute('width', i),
                s.setAttribute('height', r),
                s.setAttribute('viewBox', [
                    e.x,
                    e.y,
                    i,
                    r
                ].join(' ')),
                o.Browser.mobileWebkit && a.appendChild(s)
            }
        }
    }),
    o.Path.include({
        bindPopup: function (t, e) {
            return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)), this._popup.setContent(t)),
            this._popupHandlersAdded || (this.on('click', this._openPopup, this) .on('remove', this.closePopup, this), this._popupHandlersAdded = !0),
            this
        },
        unbindPopup: function () {
            return this._popup && (this._popup = null, this.off('click', this._openPopup) .off('remove', this.closePopup), this._popupHandlersAdded = !1),
            this
        },
        openPopup: function (t) {
            return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                latlng: t
            })),
            this
        },
        closePopup: function () {
            return this._popup && this._popup._close(),
            this
        },
        _openPopup: function (t) {
            this._popup.setLatLng(t.latlng),
            this._map.openPopup(this._popup)
        }
    }),
    o.Browser.vml = !o.Browser.svg && function () {
        try {
            var t = e.createElement('div');
            t.innerHTML = '<v:shape adj="1"/>';
            var n = t.firstChild;
            return n.style.behavior = 'url(#default#VML)',
            n && 'object' == typeof n.adj
        } catch (i) {
            return !1
        }
    }(),
    o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
        statics: {
            VML: !0,
            CLIP_PADDING: 0.02
        },
        _createElement: function () {
            try {
                return e.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
                function (t) {
                    return e.createElement('<lvml:' + t + ' class="lvml">')
                }
            } catch (t) {
                return function (t) {
                    return e.createElement('<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        _initPath: function () {
            var t = this._container = this._createElement('shape');
            o.DomUtil.addClass(t, 'leaflet-vml-shape' + (this.options.className ? ' ' + this.options.className : '')),
            this.options.clickable && o.DomUtil.addClass(t, 'leaflet-clickable'),
            t.coordsize = '1 1',
            this._path = this._createElement('path'),
            t.appendChild(this._path),
            this._map._pathRoot.appendChild(t)
        },
        _initStyle: function () {
            this._updateStyle()
        },
        _updateStyle: function () {
            var t = this._stroke,
            e = this._fill,
            n = this.options,
            i = this._container;
            i.stroked = n.stroke,
            i.filled = n.fill,
            n.stroke ? (t || (t = this._stroke = this._createElement('stroke'), t.endcap = 'round', i.appendChild(t)), t.weight = n.weight + 'px', t.color = n.color, t.opacity = n.opacity, n.dashArray ? t.dashStyle = o.Util.isArray(n.dashArray) ? n.dashArray.join(' ')  : n.dashArray.replace(/( *, *)/g, ' ')  : t.dashStyle = '', n.lineCap && (t.endcap = n.lineCap.replace('butt', 'flat')), n.lineJoin && (t.joinstyle = n.lineJoin))  : t && (i.removeChild(t), this._stroke = null),
            n.fill ? (e || (e = this._fill = this._createElement('fill'), i.appendChild(e)), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity)  : e && (i.removeChild(e), this._fill = null)
        },
        _updatePath: function () {
            var t = this._container.style;
            t.display = 'none',
            this._path.v = this.getPathString() + ' ',
            t.display = ''
        }
    }),
    o.Map.include(o.Browser.svg || !o.Browser.vml ? {
    }
     : {
        _initPathRoot: function () {
            if (!this._pathRoot) {
                var t = this._pathRoot = e.createElement('div');
                t.className = 'leaflet-vml-container',
                this._panes.overlayPane.appendChild(t),
                this.on('moveend', this._updatePathViewport),
                this._updatePathViewport()
            }
        }
    }),
    o.Browser.canvas = function () {
        return !!e.createElement('canvas') .getContext
    }(),
    o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
        statics: {
            CANVAS: !0,
            SVG: !1
        },
        redraw: function () {
            return this._map && (this.projectLatlngs(), this._requestUpdate()),
            this
        },
        setStyle: function (t) {
            return o.setOptions(this, t),
            this._map && (this._updateStyle(), this._requestUpdate()),
            this
        },
        onRemove: function (t) {
            t.off('viewreset', this.projectLatlngs, this) .off('moveend', this._updatePath, this),
            this.options.clickable && (this._map.off('click', this._onClick, this), this._map.off('mousemove', this._onMouseMove, this)),
            this._requestUpdate(),
            this.fire('remove'),
            this._map = null
        },
        _requestUpdate: function () {
            this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
        },
        _fireMapMoveEnd: function () {
            o.Path._updateRequest = null,
            this.fire('moveend')
        },
        _initElements: function () {
            this._map._initPathRoot(),
            this._ctx = this._map._canvasCtx
        },
        _updateStyle: function () {
            var t = this.options;
            t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color),
            t.fill && (this._ctx.fillStyle = t.fillColor || t.color),
            t.lineCap && (this._ctx.lineCap = t.lineCap),
            t.lineJoin && (this._ctx.lineJoin = t.lineJoin)
        },
        _drawPath: function () {
            var t,
            e,
            n,
            i,
            r,
            s;
            for (this._ctx.beginPath(), t = 0, n = this._parts.length; n > t; t++) {
                for (e = 0, i = this._parts[t].length; i > e; e++) r = this._parts[t][e],
                s = (0 === e ? 'move' : 'line') + 'To',
                this._ctx[s](r.x, r.y);
                this instanceof o.Polygon && this._ctx.closePath()
            }
        },
        _checkIfEmpty: function () {
            return !this._parts.length
        },
        _updatePath: function () {
            if (!this._checkIfEmpty()) {
                var t = this._ctx,
                e = this.options;
                this._drawPath(),
                t.save(),
                this._updateStyle(),
                e.fill && (t.globalAlpha = e.fillOpacity, t.fill(e.fillRule || 'evenodd')),
                e.stroke && (t.globalAlpha = e.opacity, t.stroke()),
                t.restore()
            }
        },
        _initEvents: function () {
            this.options.clickable && (this._map.on('mousemove', this._onMouseMove, this), this._map.on('click dblclick contextmenu', this._fireMouseEvent, this))
        },
        _fireMouseEvent: function (t) {
            this._containsPoint(t.layerPoint) && this.fire(t.type, t)
        },
        _onMouseMove: function (t) {
            this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = 'pointer', this._mouseInside = !0, this.fire('mouseover', t))  : this._mouseInside && (this._ctx.canvas.style.cursor = '', this._mouseInside = !1, this.fire('mouseout', t)))
        }
    }),
    o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {
    }
     : {
        _initPathRoot: function () {
            var t,
            n = this._pathRoot;
            n || (n = this._pathRoot = e.createElement('canvas'), n.style.position = 'absolute', t = this._canvasCtx = n.getContext('2d'), t.lineCap = 'round', t.lineJoin = 'round', this._panes.overlayPane.appendChild(n), this.options.zoomAnimation && (this._pathRoot.className = 'leaflet-zoom-animated', this.on('zoomanim', this._animatePathZoom), this.on('zoomend', this._endPathZoom)), this.on('moveend', this._updateCanvasViewport), this._updateCanvasViewport())
        },
        _updateCanvasViewport: function () {
            if (!this._pathZooming) {
                this._updatePathViewport();
                var t = this._pathViewport,
                e = t.min,
                n = t.max.subtract(e),
                i = this._pathRoot;
                o.DomUtil.setPosition(i, e),
                i.width = n.x,
                i.height = n.y,
                i.getContext('2d') .translate( - e.x, - e.y)
            }
        }
    }),
    o.LineUtil = {
        simplify: function (t, e) {
            if (!e || !t.length) return t.slice();
            var n = e * e;
            return t = this._reducePoints(t, n),
            t = this._simplifyDP(t, n)
        },
        pointToSegmentDistance: function (t, e, n) {
            return Math.sqrt(this._sqClosestPointOnSegment(t, e, n, !0))
        },
        closestPointOnSegment: function (t, e, n) {
            return this._sqClosestPointOnSegment(t, e, n)
        },
        _simplifyDP: function (t, e) {
            var i = t.length,
            o = typeof Uint8Array != n + '' ? Uint8Array : Array,
            r = new o(i);
            r[0] = r[i - 1] = 1,
            this._simplifyDPStep(t, r, e, 0, i - 1);
            var s,
            a = [
            ];
            for (s = 0; i > s; s++) r[s] && a.push(t[s]);
            return a
        },
        _simplifyDPStep: function (t, e, n, i, o) {
            var r,
            s,
            a,
            l = 0;
            for (s = i + 1; o - 1 >= s; s++) a = this._sqClosestPointOnSegment(t[s], t[i], t[o], !0),
            a > l && (r = s, l = a);
            l > n && (e[r] = 1, this._simplifyDPStep(t, e, n, i, r), this._simplifyDPStep(t, e, n, r, o))
        },
        _reducePoints: function (t, e) {
            for (var n = [
                t[0]
            ], i = 1, o = 0, r = t.length; r > i; i++) this._sqDist(t[i], t[o]) > e && (n.push(t[i]), o = i);
            return r - 1 > o && n.push(t[r - 1]),
            n
        },
        clipSegment: function (t, e, n, i) {
            var o,
            r,
            s,
            a = i ? this._lastCode : this._getBitCode(t, n),
            l = this._getBitCode(e, n);
            for (this._lastCode = l; ; ) {
                if (!(a | l)) return [t,
                e];
                if (a & l) return !1;
                o = a || l,
                r = this._getEdgeIntersection(t, e, o, n),
                s = this._getBitCode(r, n),
                o === a ? (t = r, a = s)  : (e = r, l = s)
            }
        },
        _getEdgeIntersection: function (t, e, n, i) {
            var r = e.x - t.x,
            s = e.y - t.y,
            a = i.min,
            l = i.max;
            return 8 & n ? new o.Point(t.x + r * (l.y - t.y) / s, l.y)  : 4 & n ? new o.Point(t.x + r * (a.y - t.y) / s, a.y)  : 2 & n ? new o.Point(l.x, t.y + s * (l.x - t.x) / r)  : 1 & n ? new o.Point(a.x, t.y + s * (a.x - t.x) / r)  : void 0
        },
        _getBitCode: function (t, e) {
            var n = 0;
            return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2),
            t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8),
            n
        },
        _sqDist: function (t, e) {
            var n = e.x - t.x,
            i = e.y - t.y;
            return n * n + i * i
        },
        _sqClosestPointOnSegment: function (t, e, n, i) {
            var r,
            s = e.x,
            a = e.y,
            l = n.x - s,
            u = n.y - a,
            h = l * l + u * u;
            return h > 0 && (r = ((t.x - s) * l + (t.y - a) * u) / h, r > 1 ? (s = n.x, a = n.y)  : r > 0 && (s += l * r, a += u * r)),
            l = t.x - s,
            u = t.y - a,
            i ? l * l + u * u : new o.Point(s, a)
        }
    },
    o.Polyline = o.Path.extend({
        initialize: function (t, e) {
            o.Path.prototype.initialize.call(this, e),
            this._latlngs = this._convertLatLngs(t)
        },
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        projectLatlngs: function () {
            this._originalPoints = [
            ];
            for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
        },
        getPathString: function () {
            for (var t = 0, e = this._parts.length, n = ''; e > t; t++) n += this._getPathPartStr(this._parts[t]);
            return n
        },
        getLatLngs: function () {
            return this._latlngs
        },
        setLatLngs: function (t) {
            return this._latlngs = this._convertLatLngs(t),
            this.redraw()
        },
        addLatLng: function (t) {
            return this._latlngs.push(o.latLng(t)),
            this.redraw()
        },
        spliceLatLngs: function () {
            var t = [
            ].splice.apply(this._latlngs, arguments);
            return this._convertLatLngs(this._latlngs, !0),
            this.redraw(),
            t
        },
        closestLayerPoint: function (t) {
            for (var e, n, i = 1 / 0, r = this._parts, s = null, a = 0, l = r.length; l > a; a++)
            for (var u = r[a], h = 1, c = u.length; c > h; h++) {
                e = u[h - 1],
                n = u[h];
                var d = o.LineUtil._sqClosestPointOnSegment(t, e, n, !0);
                i > d && (i = d, s = o.LineUtil._sqClosestPointOnSegment(t, e, n))
            }
            return s && (s.distance = Math.sqrt(i)),
            s
        },
        getBounds: function () {
            return new o.LatLngBounds(this.getLatLngs())
        },
        _convertLatLngs: function (t, e) {
            var n,
            i,
            r = e ? t : [
            ];
            for (n = 0, i = t.length; i > n; n++) {
                if (o.Util.isArray(t[n]) && 'number' != typeof t[n][0]) return ;
                r[n] = o.latLng(t[n])
            }
            return r
        },
        _initEvents: function () {
            o.Path.prototype._initEvents.call(this)
        },
        _getPathPartStr: function (t) {
            for (var e, n = o.Path.VML, i = 0, r = t.length, s = ''; r > i; i++) e = t[i],
            n && e._round(),
            s += (i ? 'L' : 'M') + e.x + ' ' + e.y;
            return s
        },
        _clipPoints: function () {
            var t,
            e,
            n,
            i = this._originalPoints,
            r = i.length;
            if (this.options.noClip) return void (this._parts = [
                i
            ]);
            this._parts = [
            ];
            var s = this._parts,
            a = this._map._pathViewport,
            l = o.LineUtil;
            for (t = 0, e = 0; r - 1 > t; t++) n = l.clipSegment(i[t], i[t + 1], a, t),
            n && (s[e] = s[e] || [], s[e].push(n[0]), (n[1] !== i[t + 1] || t === r - 2) && (s[e].push(n[1]), e++))
        },
        _simplifyPoints: function () {
            for (var t = this._parts, e = o.LineUtil, n = 0, i = t.length; i > n; n++) t[n] = e.simplify(t[n], this.options.smoothFactor)
        },
        _updatePath: function () {
            this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this))
        }
    }),
    o.polyline = function (t, e) {
        return new o.Polyline(t, e)
    },
    o.PolyUtil = {
    },
    o.PolyUtil.clipPolygon = function (t, e) {
        var n,
        i,
        r,
        s,
        a,
        l,
        u,
        h,
        c,
        d = [
            1,
            4,
            2,
            8
        ],
        p = o.LineUtil;
        for (i = 0, u = t.length; u > i; i++) t[i]._code = p._getBitCode(t[i], e);
        for (s = 0; 4 > s; s++) {
            for (h = d[s], n = [
            ], i = 0, u = t.length, r = u - 1; u > i; r = i++) a = t[i],
            l = t[r],
            a._code & h ? l._code & h || (c = p._getEdgeIntersection(l, a, h, e), c._code = p._getBitCode(c, e), n.push(c))  : (l._code & h && (c = p._getEdgeIntersection(l, a, h, e), c._code = p._getBitCode(c, e), n.push(c)), n.push(a));
            t = n
        }
        return t
    },
    o.Polygon = o.Polyline.extend({
        options: {
            fill: !0
        },
        initialize: function (t, e) {
            o.Polyline.prototype.initialize.call(this, t, e),
            this._initWithHoles(t)
        },
        _initWithHoles: function (t) {
            var e,
            n,
            i;
            if (t && o.Util.isArray(t[0]) && 'number' != typeof t[0][0])
            for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, n = this._holes.length; n > e; e++) i = this._holes[e] = this._convertLatLngs(this._holes[e]),
            i[0].equals(i[i.length - 1]) && i.pop();
            t = this._latlngs,
            t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
        },
        projectLatlngs: function () {
            if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [
            ], this._holes) {
                var t,
                e,
                n,
                i;
                for (t = 0, n = this._holes.length; n > t; t++)
                for (this._holePoints[t] = [
                ], e = 0, i = this._holes[t].length; i > e; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
            }
        },
        setLatLngs: function (t) {
            return t && o.Util.isArray(t[0]) && 'number' != typeof t[0][0] ? (this._initWithHoles(t), this.redraw())  : o.Polyline.prototype.setLatLngs.call(this, t)
        },
        _clipPoints: function () {
            var t = this._originalPoints,
            e = [
            ];
            if (this._parts = [
                t
            ].concat(this._holePoints), !this.options.noClip) {
                for (var n = 0, i = this._parts.length; i > n; n++) {
                    var r = o.PolyUtil.clipPolygon(this._parts[n], this._map._pathViewport);
                    r.length && e.push(r)
                }
                this._parts = e
            }
        },
        _getPathPartStr: function (t) {
            var e = o.Polyline.prototype._getPathPartStr.call(this, t);
            return e + (o.Browser.svg ? 'z' : 'x')
        }
    }),
    o.polygon = function (t, e) {
        return new o.Polygon(t, e)
    },
    function () {
        function t(t) {
            return o.FeatureGroup.extend({
                initialize: function (t, e) {
                    this._layers = {
                    },
                    this._options = e,
                    this.setLatLngs(t)
                },
                setLatLngs: function (e) {
                    var n = 0,
                    i = e.length;
                    for (this.eachLayer(function (t) {
                        i > n ? t.setLatLngs(e[n++])  : this.removeLayer(t)
                    }, this); i > n; ) this.addLayer(new t(e[n++], this._options));
                    return this
                },
                getLatLngs: function () {
                    var t = [
                    ];
                    return this.eachLayer(function (e) {
                        t.push(e.getLatLngs())
                    }),
                    t
                }
            })
        }
        o.MultiPolyline = t(o.Polyline),
        o.MultiPolygon = t(o.Polygon),
        o.multiPolyline = function (t, e) {
            return new o.MultiPolyline(t, e)
        },
        o.multiPolygon = function (t, e) {
            return new o.MultiPolygon(t, e)
        }
    }(),
    o.Rectangle = o.Polygon.extend({
        initialize: function (t, e) {
            o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function (t) {
            this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function (t) {
            return t = o.latLngBounds(t),
            [
                t.getSouthWest(),
                t.getNorthWest(),
                t.getNorthEast(),
                t.getSouthEast()
            ]
        }
    }),
    o.rectangle = function (t, e) {
        return new o.Rectangle(t, e)
    },
    o.Circle = o.Path.extend({
        initialize: function (t, e, n) {
            o.Path.prototype.initialize.call(this, n),
            this._latlng = o.latLng(t),
            this._mRadius = e
        },
        options: {
            fill: !0
        },
        setLatLng: function (t) {
            return this._latlng = o.latLng(t),
            this.redraw()
        },
        setRadius: function (t) {
            return this._mRadius = t,
            this.redraw()
        },
        projectLatlngs: function () {
            var t = this._getLngRadius(),
            e = this._latlng,
            n = this._map.latLngToLayerPoint([e.lat,
            e.lng - t]);
            this._point = this._map.latLngToLayerPoint(e),
            this._radius = Math.max(this._point.x - n.x, 1)
        },
        getBounds: function () {
            var t = this._getLngRadius(),
            e = this._mRadius / 40075017 * 360,
            n = this._latlng;
            return new o.LatLngBounds([n.lat - e,
            n.lng - t], [
                n.lat + e,
                n.lng + t
            ])
        },
        getLatLng: function () {
            return this._latlng
        },
        getPathString: function () {
            var t = this._point,
            e = this._radius;
            return this._checkIfEmpty() ? '' : o.Browser.svg ? 'M' + t.x + ',' + (t.y - e) + 'A' + e + ',' + e + ',0,1,1,' + (t.x - 0.1) + ',' + (t.y - e) + ' z' : (t._round(), e = Math.round(e), 'AL ' + t.x + ',' + t.y + ' ' + e + ',' + e + ' 0,23592600')
        },
        getRadius: function () {
            return this._mRadius
        },
        _getLatRadius: function () {
            return this._mRadius / 40075017 * 360
        },
        _getLngRadius: function () {
            return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
        },
        _checkIfEmpty: function () {
            if (!this._map) return !1;
            var t = this._map._pathViewport,
            e = this._radius,
            n = this._point;
            return n.x - e > t.max.x || n.y - e > t.max.y || n.x + e < t.min.x || n.y + e < t.min.y
        }
    }),
    o.circle = function (t, e, n) {
        return new o.Circle(t, e, n)
    },
    o.CircleMarker = o.Circle.extend({
        options: {
            radius: 10,
            weight: 2
        },
        initialize: function (t, e) {
            o.Circle.prototype.initialize.call(this, t, null, e),
            this._radius = this.options.radius
        },
        projectLatlngs: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng)
        },
        _updateStyle: function () {
            o.Circle.prototype._updateStyle.call(this),
            this.setRadius(this.options.radius)
        },
        setLatLng: function (t) {
            return o.Circle.prototype.setLatLng.call(this, t),
            this._popup && this._popup._isOpen && this._popup.setLatLng(t),
            this
        },
        setRadius: function (t) {
            return this.options.radius = this._radius = t,
            this.redraw()
        },
        getRadius: function () {
            return this._radius
        }
    }),
    o.circleMarker = function (t, e) {
        return new o.CircleMarker(t, e)
    },
    o.Polyline.include(o.Path.CANVAS ? {
        _containsPoint: function (t, e) {
            var n,
            i,
            r,
            s,
            a,
            l,
            u,
            h = this.options.weight / 2;
            for (o.Browser.touch && (h += 10), n = 0, s = this._parts.length; s > n; n++)
            for (u = this._parts[n], i = 0, a = u.length, r = a - 1; a > i; r = i++)
            if ((e || 0 !== i) && (l = o.LineUtil.pointToSegmentDistance(t, u[r], u[i]), h >= l)) return !0;
            return !1
        }
    }
     : {
    }),
    o.Polygon.include(o.Path.CANVAS ? {
        _containsPoint: function (t) {
            var e,
            n,
            i,
            r,
            s,
            a,
            l,
            u,
            h = !1;
            if (o.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
            for (r = 0, l = this._parts.length; l > r; r++)
            for (e = this._parts[r], s = 0, u = e.length, a = u - 1; u > s; a = s++) n = e[s],
            i = e[a],
            n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (h = !h);
            return h
        }
    }
     : {
    }),
    o.Circle.include(o.Path.CANVAS ? {
        _drawPath: function () {
            var t = this._point;
            this._ctx.beginPath(),
            this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
        },
        _containsPoint: function (t) {
            var e = this._point,
            n = this.options.stroke ? this.options.weight / 2 : 0;
            return t.distanceTo(e) <= this._radius + n
        }
    }
     : {
    }),
    o.CircleMarker.include(o.Path.CANVAS ? {
        _updateStyle: function () {
            o.Path.prototype._updateStyle.call(this)
        }
    }
     : {
    }),
    o.GeoJSON = o.FeatureGroup.extend({
        initialize: function (t, e) {
            o.setOptions(this, e),
            this._layers = {
            },
            t && this.addData(t)
        },
        addData: function (t) {
            var e,
            n,
            i,
            r = o.Util.isArray(t) ? t : t.features;
            if (r) {
                for (e = 0, n = r.length; n > e; e++) i = r[e],
                (i.geometries || i.geometry || i.features || i.coordinates) && this.addData(r[e]);
                return this
            }
            var s = this.options;
            if (!s.filter || s.filter(t)) {
                var a = o.GeoJSON.geometryToLayer(t, s.pointToLayer, s.coordsToLatLng, s);
                return a.feature = o.GeoJSON.asFeature(t),
                a.defaultOptions = a.options,
                this.resetStyle(a),
                s.onEachFeature && s.onEachFeature(t, a),
                this.addLayer(a)
            }
        },
        resetStyle: function (t) {
            var e = this.options.style;
            e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
        },
        setStyle: function (t) {
            this.eachLayer(function (e) {
                this._setLayerStyle(e, t)
            }, this)
        },
        _setLayerStyle: function (t, e) {
            'function' == typeof e && (e = e(t.feature)),
            t.setStyle && t.setStyle(e)
        }
    }),
    o.extend(o.GeoJSON, {
        geometryToLayer: function (t, e, n, i) {
            var r,
            s,
            a,
            l,
            u = 'Feature' === t.type ? t.geometry : t,
            h = u.coordinates,
            c = [
            ];
            switch (n = n || this.coordsToLatLng, u.type) {
            case 'Point':
                return r = n(h),
                e ? e(t, r)  : new o.Marker(r);
            case 'MultiPoint':
                for (a = 0, l = h.length; l > a; a++) r = n(h[a]),
                c.push(e ? e(t, r)  : new o.Marker(r));
                return new o.FeatureGroup(c);
            case 'LineString':
                return s = this.coordsToLatLngs(h, 0, n),
                new o.Polyline(s, i);
            case 'Polygon':
                if (2 === h.length && !h[1].length) throw new Error('Invalid GeoJSON object.');
                return s = this.coordsToLatLngs(h, 1, n),
                new o.Polygon(s, i);
            case 'MultiLineString':
                return s = this.coordsToLatLngs(h, 1, n),
                new o.MultiPolyline(s, i);
            case 'MultiPolygon':
                return s = this.coordsToLatLngs(h, 2, n),
                new o.MultiPolygon(s, i);
            case 'GeometryCollection':
                for (a = 0, l = u.geometries.length; l > a; a++) c.push(this.geometryToLayer({
                    geometry: u.geometries[a],
                    type: 'Feature',
                    properties: t.properties
                }, e, n, i));
                return new o.FeatureGroup(c);
            default:
                throw new Error('Invalid GeoJSON object.')
            }
        },
        coordsToLatLng: function (t) {
            return new o.LatLng(t[1], t[0], t[2])
        },
        coordsToLatLngs: function (t, e, n) {
            var i,
            o,
            r,
            s = [
            ];
            for (o = 0, r = t.length; r > o; o++) i = e ? this.coordsToLatLngs(t[o], e - 1, n)  : (n || this.coordsToLatLng) (t[o]),
            s.push(i);
            return s
        },
        latLngToCoords: function (t) {
            var e = [
                t.lng,
                t.lat
            ];
            return t.alt !== n && e.push(t.alt),
            e
        },
        latLngsToCoords: function (t) {
            for (var e = [
            ], n = 0, i = t.length; i > n; n++) e.push(o.GeoJSON.latLngToCoords(t[n]));
            return e
        },
        getFeature: function (t, e) {
            return t.feature ? o.extend({
            }, t.feature, {
                geometry: e
            })  : o.GeoJSON.asFeature(e)
        },
        asFeature: function (t) {
            return 'Feature' === t.type ? t : {
                type: 'Feature',
                properties: {
                },
                geometry: t
            }
        }
    });
    var s = {
        toGeoJSON: function () {
            return o.GeoJSON.getFeature(this, {
                type: 'Point',
                coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
            })
        }
    };
    o.Marker.include(s),
    o.Circle.include(s),
    o.CircleMarker.include(s),
    o.Polyline.include({
        toGeoJSON: function () {
            return o.GeoJSON.getFeature(this, {
                type: 'LineString',
                coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
            })
        }
    }),
    o.Polygon.include({
        toGeoJSON: function () {
            var t,
            e,
            n,
            i = [
                o.GeoJSON.latLngsToCoords(this.getLatLngs())
            ];
            if (i[0].push(i[0][0]), this._holes)
            for (t = 0, e = this._holes.length; e > t; t++) n = o.GeoJSON.latLngsToCoords(this._holes[t]),
            n.push(n[0]),
            i.push(n);
            return o.GeoJSON.getFeature(this, {
                type: 'Polygon',
                coordinates: i
            })
        }
    }),
    function () {
        function t(t) {
            return function () {
                var e = [
                ];
                return this.eachLayer(function (t) {
                    e.push(t.toGeoJSON() .geometry.coordinates)
                }),
                o.GeoJSON.getFeature(this, {
                    type: t,
                    coordinates: e
                })
            }
        }
        o.MultiPolyline.include({
            toGeoJSON: t('MultiLineString')
        }),
        o.MultiPolygon.include({
            toGeoJSON: t('MultiPolygon')
        }),
        o.LayerGroup.include({
            toGeoJSON: function () {
                var e,
                n = this.feature && this.feature.geometry,
                i = [
                ];
                if (n && 'MultiPoint' === n.type) return t('MultiPoint') .call(this);
                var r = n && 'GeometryCollection' === n.type;
                return this.eachLayer(function (t) {
                    t.toGeoJSON && (e = t.toGeoJSON(), i.push(r ? e.geometry : o.GeoJSON.asFeature(e)))
                }),
                r ? o.GeoJSON.getFeature(this, {
                    geometries: i,
                    type: 'GeometryCollection'
                })  : {
                    type: 'FeatureCollection',
                    features: i
                }
            }
        })
    }(),
    o.geoJson = function (t, e) {
        return new o.GeoJSON(t, e)
    },
    o.DomEvent = {
        addListener: function (t, e, n, i) {
            var r,
            s,
            a,
            l = o.stamp(n),
            u = '_leaflet_' + e + l;
            return t[u] ? this : (r = function (e) {
                return n.call(i || t, e || o.DomEvent._getEvent())
            }, o.Browser.pointer && 0 === e.indexOf('touch') ? this.addPointerListener(t, e, r, l)  : (o.Browser.touch && 'dblclick' === e && this.addDoubleTapListener && this.addDoubleTapListener(t, r, l), 'addEventListener' in t ? 'mousewheel' === e ? (t.addEventListener('DOMMouseScroll', r, !1), t.addEventListener(e, r, !1))  : 'mouseenter' === e || 'mouseleave' === e ? (s = r, a = 'mouseenter' === e ? 'mouseover' : 'mouseout', r = function (e) {
                return o.DomEvent._checkMouse(t, e) ? s(e)  : void 0
            }, t.addEventListener(a, r, !1))  : 'click' === e && o.Browser.android ? (s = r, r = function (t) {
                return o.DomEvent._filterClick(t, s)
            }, t.addEventListener(e, r, !1))  : t.addEventListener(e, r, !1)  : 'attachEvent' in t && t.attachEvent('on' + e, r), t[u] = r, this))
        },
        removeListener: function (t, e, n) {
            var i = o.stamp(n),
            r = '_leaflet_' + e + i,
            s = t[r];
            return s ? (o.Browser.pointer && 0 === e.indexOf('touch') ? this.removePointerListener(t, e, i)  : o.Browser.touch && 'dblclick' === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, i)  : 'removeEventListener' in t ? 'mousewheel' === e ? (t.removeEventListener('DOMMouseScroll', s, !1), t.removeEventListener(e, s, !1))  : 'mouseenter' === e || 'mouseleave' === e ? t.removeEventListener('mouseenter' === e ? 'mouseover' : 'mouseout', s, !1)  : t.removeEventListener(e, s, !1)  : 'detachEvent' in t && t.detachEvent('on' + e, s), t[r] = null, this)  : this
        },
        stopPropagation: function (t) {
            return t.stopPropagation ? t.stopPropagation()  : t.cancelBubble = !0,
            o.DomEvent._skipped(t),
            this
        },
        disableScrollPropagation: function (t) {
            var e = o.DomEvent.stopPropagation;
            return o.DomEvent.on(t, 'mousewheel', e) .on(t, 'MozMousePixelScroll', e)
        },
        disableClickPropagation: function (t) {
            for (var e = o.DomEvent.stopPropagation, n = o.Draggable.START.length - 1; n >= 0; n--) o.DomEvent.on(t, o.Draggable.START[n], e);
            return o.DomEvent.on(t, 'click', o.DomEvent._fakeStop) .on(t, 'dblclick', e)
        },
        preventDefault: function (t) {
            return t.preventDefault ? t.preventDefault()  : t.returnValue = !1,
            this
        },
        stop: function (t) {
            return o.DomEvent.preventDefault(t) .stopPropagation(t)
        },
        getMousePosition: function (t, e) {
            if (!e) return new o.Point(t.clientX, t.clientY);
            var n = e.getBoundingClientRect();
            return new o.Point(t.clientX - n.left - e.clientLeft, t.clientY - n.top - e.clientTop)
        },
        getWheelDelta: function (t) {
            var e = 0;
            return t.wheelDelta && (e = t.wheelDelta / 120),
            t.detail && (e = - t.detail / 3),
            e
        },
        _skipEvents: {
        },
        _fakeStop: function (t) {
            o.DomEvent._skipEvents[t.type] = !0
        },
        _skipped: function (t) {
            var e = this._skipEvents[t.type];
            return this._skipEvents[t.type] = !1,
            e
        },
        _checkMouse: function (t, e) {
            var n = e.relatedTarget;
            if (!n) return !0;
            try {
                for (; n && n !== t; ) n = n.parentNode
            } catch (i) {
                return !1
            }
            return n !== t
        },
        _getEvent: function () {
            var e = t.event;
            if (!e)
            for (var n = arguments.callee.caller; n && (e = n.arguments[0], !e || t.Event !== e.constructor); ) n = n.caller;
            return e
        },
        _filterClick: function (t, e) {
            var n = t.timeStamp || t.originalEvent.timeStamp,
            i = o.DomEvent._lastClick && n - o.DomEvent._lastClick;
            return i && i > 100 && 500 > i || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t)  : (o.DomEvent._lastClick = n, e(t))
        }
    },
    o.DomEvent.on = o.DomEvent.addListener,
    o.DomEvent.off = o.DomEvent.removeListener,
    o.Draggable = o.Class.extend({
        includes: o.Mixin.Events,
        statics: {
            START: o.Browser.touch ? [
                'touchstart',
                'mousedown'
            ] : [
                'mousedown'
            ],
            END: {
                mousedown: 'mouseup',
                touchstart: 'touchend',
                pointerdown: 'touchend',
                MSPointerDown: 'touchend'
            },
            MOVE: {
                mousedown: 'mousemove',
                touchstart: 'touchmove',
                pointerdown: 'touchmove',
                MSPointerDown: 'touchmove'
            }
        },
        initialize: function (t, e) {
            this._element = t,
            this._dragStartTarget = e || t
        },
        enable: function () {
            if (!this._enabled) {
                for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.on(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled = !0
            }
        },
        disable: function () {
            if (this._enabled) {
                for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.off(this._dragStartTarget, o.Draggable.START[t], this._onDown, this);
                this._enabled = !1,
                this._moved = !1
            }
        },
        _onDown: function (t) {
            if (this._moved = !1, !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (o.DomEvent.stopPropagation(t), !o.Draggable._disabled && (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), !this._moving))) {
                var n = t.touches ? t.touches[0] : t;
                this._startPoint = new o.Point(n.clientX, n.clientY),
                this._startPos = this._newPos = o.DomUtil.getPosition(this._element),
                o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this) .on(e, o.Draggable.END[t.type], this._onUp, this)
            }
        },
        _onMove: function (t) {
            if (t.touches && t.touches.length > 1) return void (this._moved = !0);
            var n = t.touches && 1 === t.touches.length ? t.touches[0] : t,
            i = new o.Point(n.clientX, n.clientY),
            r = i.subtract(this._startPoint);
            (r.x || r.y) && (o.Browser.touch && Math.abs(r.x) + Math.abs(r.y) < 3 || (o.DomEvent.preventDefault(t), this._moved || (this.fire('dragstart'), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element) .subtract(r), o.DomUtil.addClass(e.body, 'leaflet-dragging'), this._lastTarget = t.target || t.srcElement, o.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target')), this._newPos = this._startPos.add(r), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
        },
        _updatePosition: function () {
            this.fire('predrag'),
            o.DomUtil.setPosition(this._element, this._newPos),
            this.fire('drag')
        },
        _onUp: function () {
            o.DomUtil.removeClass(e.body, 'leaflet-dragging'),
            this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target'), this._lastTarget = null);
            for (var t in o.Draggable.MOVE) o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove) .off(e, o.Draggable.END[t], this._onUp);
            o.DomUtil.enableImageDrag(),
            o.DomUtil.enableTextSelection(),
            this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire('dragend', {
                distance: this._newPos.distanceTo(this._startPos)
            })),
            this._moving = !1
        }
    }),
    o.Handler = o.Class.extend({
        initialize: function (t) {
            this._map = t
        },
        enable: function () {
            this._enabled || (this._enabled = !0, this.addHooks())
        },
        disable: function () {
            this._enabled && (this._enabled = !1, this.removeHooks())
        },
        enabled: function () {
            return !!this._enabled
        }
    }),
    o.Map.mergeOptions({
        dragging: !0,
        inertia: !o.Browser.android23,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        inertiaThreshold: o.Browser.touch ? 32 : 18,
        easeLinearity: 0.25,
        worldCopyJump: !1
    }),
    o.Map.Drag = o.Handler.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new o.Draggable(t._mapPane, t._container),
                this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this),
                t.options.worldCopyJump && (this._draggable.on('predrag', this._onPreDrag, this), t.on('viewreset', this._onViewReset, this), t.whenReady(this._onViewReset, this))
            }
            this._draggable.enable()
        },
        removeHooks: function () {
            this._draggable.disable()
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function () {
            var t = this._map;
            t._panAnim && t._panAnim.stop(),
            t.fire('movestart') .fire('dragstart'),
            t.options.inertia && (this._positions = [
            ], this._times = [
            ])
        },
        _onDrag: function () {
            if (this._map.options.inertia) {
                var t = this._lastTime = + new Date,
                e = this._lastPos = this._draggable._newPos;
                this._positions.push(e),
                this._times.push(t),
                t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
            }
            this._map.fire('move') .fire('drag')
        },
        _onViewReset: function () {
            var t = this._map.getSize() ._divideBy(2),
            e = this._map.latLngToLayerPoint([0,
            0]);
            this._initialWorldOffset = e.subtract(t) .x,
            this._worldWidth = this._map.project([0,
            180]) .x
        },
        _onPreDrag: function () {
            var t = this._worldWidth,
            e = Math.round(t / 2),
            n = this._initialWorldOffset,
            i = this._draggable._newPos.x,
            o = (i - e + n) % t + e - n,
            r = (i + e + n) % t - e - n,
            s = Math.abs(o + n) < Math.abs(r + n) ? o : r;
            this._draggable._newPos.x = s
        },
        _onDragEnd: function (t) {
            var e = this._map,
            n = e.options,
            i = + new Date - this._lastTime,
            r = !n.inertia || i > n.inertiaThreshold || !this._positions[0];
            if (e.fire('dragend', t), r) e.fire('moveend');
             else {
                var s = this._lastPos.subtract(this._positions[0]),
                a = (this._lastTime + i - this._times[0]) / 1000,
                l = n.easeLinearity,
                u = s.multiplyBy(l / a),
                h = u.distanceTo([0,
                0]),
                c = Math.min(n.inertiaMaxSpeed, h),
                d = u.multiplyBy(c / h),
                p = c / (n.inertiaDeceleration * l),
                f = d.multiplyBy( - p / 2) .round();
                f.x && f.y ? (f = e._limitOffset(f, e.options.maxBounds), o.Util.requestAnimFrame(function () {
                    e.panBy(f, {
                        duration: p,
                        easeLinearity: l,
                        noMoveStart: !0
                    })
                }))  : e.fire('moveend')
            }
        }
    }),
    o.Map.addInitHook('addHandler', 'dragging', o.Map.Drag),
    o.Map.mergeOptions({
        doubleClickZoom: !0
    }),
    o.Map.DoubleClickZoom = o.Handler.extend({
        addHooks: function () {
            this._map.on('dblclick', this._onDoubleClick, this)
        },
        removeHooks: function () {
            this._map.off('dblclick', this._onDoubleClick, this)
        },
        _onDoubleClick: function (t) {
            var e = this._map,
            n = e.getZoom() + (t.originalEvent.shiftKey ? - 1 : 1);
            'center' === e.options.doubleClickZoom ? e.setZoom(n)  : e.setZoomAround(t.containerPoint, n)
        }
    }),
    o.Map.addInitHook('addHandler', 'doubleClickZoom', o.Map.DoubleClickZoom),
    o.Map.mergeOptions({
        scrollWheelZoom: !0
    }),
    o.Map.ScrollWheelZoom = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this),
            o.DomEvent.on(this._map._container, 'MozMousePixelScroll', o.DomEvent.preventDefault),
            this._delta = 0
        },
        removeHooks: function () {
            o.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll),
            o.DomEvent.off(this._map._container, 'MozMousePixelScroll', o.DomEvent.preventDefault)
        },
        _onWheelScroll: function (t) {
            var e = o.DomEvent.getWheelDelta(t);
            this._delta += e,
            this._lastMousePos = this._map.mouseEventToContainerPoint(t),
            this._startTime || (this._startTime = + new Date);
            var n = Math.max(40 - ( + new Date - this._startTime), 0);
            clearTimeout(this._timer),
            this._timer = setTimeout(o.bind(this._performZoom, this), n),
            o.DomEvent.preventDefault(t),
            o.DomEvent.stopPropagation(t)
        },
        _performZoom: function () {
            var t = this._map,
            e = this._delta,
            n = t.getZoom();
            e = e > 0 ? Math.ceil(e)  : Math.floor(e),
            e = Math.max(Math.min(e, 4), - 4),
            e = t._limitZoom(n + e) - n,
            this._delta = 0,
            this._startTime = null,
            e && ('center' === t.options.scrollWheelZoom ? t.setZoom(n + e)  : t.setZoomAround(this._lastMousePos, n + e))
        }
    }),
    o.Map.addInitHook('addHandler', 'scrollWheelZoom', o.Map.ScrollWheelZoom),
    o.extend(o.DomEvent, {
        _touchstart: o.Browser.msPointer ? 'MSPointerDown' : o.Browser.pointer ? 'pointerdown' : 'touchstart',
        _touchend: o.Browser.msPointer ? 'MSPointerUp' : o.Browser.pointer ? 'pointerup' : 'touchend',
        addDoubleTapListener: function (t, n, i) {
            function r(t) {
                var e;
                if (o.Browser.pointer ? (f.push(t.pointerId), e = f.length)  : e = t.touches.length, !(e > 1)) {
                    var n = Date.now(),
                    i = n - (a || n);
                    l = t.touches ? t.touches[0] : t,
                    u = i > 0 && h >= i,
                    a = n
                }
            }
            function s(t) {
                if (o.Browser.pointer) {
                    var e = f.indexOf(t.pointerId);
                    if ( - 1 === e) return ;
                    f.splice(e, 1)
                }
                if (u) {
                    if (o.Browser.pointer) {
                        var i,
                        r = {
                        };
                        for (var s in l) i = l[s],
                        'function' == typeof i ? r[s] = i.bind(l)  : r[s] = i;
                        l = r
                    }
                    l.type = 'dblclick',
                    n(l),
                    a = null
                }
            }
            var a,
            l,
            u = !1,
            h = 250,
            c = '_leaflet_',
            d = this._touchstart,
            p = this._touchend,
            f = [
            ];
            t[c + d + i] = r,
            t[c + p + i] = s;
            var m = o.Browser.pointer ? e.documentElement : t;
            return t.addEventListener(d, r, !1),
            m.addEventListener(p, s, !1),
            o.Browser.pointer && m.addEventListener(o.DomEvent.POINTER_CANCEL, s, !1),
            this
        },
        removeDoubleTapListener: function (t, n) {
            var i = '_leaflet_';
            return t.removeEventListener(this._touchstart, t[i + this._touchstart + n], !1),
            (o.Browser.pointer ? e.documentElement : t) .removeEventListener(this._touchend, t[i + this._touchend + n], !1),
            o.Browser.pointer && e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL, t[i + this._touchend + n], !1),
            this
        }
    }),
    o.extend(o.DomEvent, {
        POINTER_DOWN: o.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
        POINTER_MOVE: o.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
        POINTER_UP: o.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
        POINTER_CANCEL: o.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',
        _pointers: [
        ],
        _pointerDocumentListener: !1,
        addPointerListener: function (t, e, n, i) {
            switch (e) {
            case 'touchstart':
                return this.addPointerListenerStart(t, e, n, i);
            case 'touchend':
                return this.addPointerListenerEnd(t, e, n, i);
            case 'touchmove':
                return this.addPointerListenerMove(t, e, n, i);
            default:
                throw 'Unknown touch event type'
            }
        },
        addPointerListenerStart: function (t, n, i, r) {
            var s = '_leaflet_',
            a = this._pointers,
            l = function (t) {
                'mouse' !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && o.DomEvent.preventDefault(t);
                for (var e = !1, n = 0; n < a.length; n++)
                if (a[n].pointerId === t.pointerId) {
                    e = !0;
                    break
                }
                e || a.push(t),
                t.touches = a.slice(),
                t.changedTouches = [
                    t
                ],
                i(t)
            };
            if (t[s + 'touchstart' + r] = l, t.addEventListener(this.POINTER_DOWN, l, !1), !this._pointerDocumentListener) {
                var u = function (t) {
                    for (var e = 0; e < a.length; e++)
                    if (a[e].pointerId === t.pointerId) {
                        a.splice(e, 1);
                        break
                    }
                };
                e.documentElement.addEventListener(this.POINTER_UP, u, !1),
                e.documentElement.addEventListener(this.POINTER_CANCEL, u, !1),
                this._pointerDocumentListener = !0
            }
            return this
        },
        addPointerListenerMove: function (t, e, n, i) {
            function o(t) {
                if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && 'mouse' !== t.pointerType || 0 !== t.buttons) {
                    for (var e = 0; e < s.length; e++)
                    if (s[e].pointerId === t.pointerId) {
                        s[e] = t;
                        break
                    }
                    t.touches = s.slice(),
                    t.changedTouches = [
                        t
                    ],
                    n(t)
                }
            }
            var r = '_leaflet_',
            s = this._pointers;
            return t[r + 'touchmove' + i] = o,
            t.addEventListener(this.POINTER_MOVE, o, !1),
            this
        },
        addPointerListenerEnd: function (t, e, n, i) {
            var o = '_leaflet_',
            r = this._pointers,
            s = function (t) {
                for (var e = 0; e < r.length; e++)
                if (r[e].pointerId === t.pointerId) {
                    r.splice(e, 1);
                    break
                }
                t.touches = r.slice(),
                t.changedTouches = [
                    t
                ],
                n(t)
            };
            return t[o + 'touchend' + i] = s,
            t.addEventListener(this.POINTER_UP, s, !1),
            t.addEventListener(this.POINTER_CANCEL, s, !1),
            this
        },
        removePointerListener: function (t, e, n) {
            var i = '_leaflet_',
            o = t[i + e + n];
            switch (e) {
            case 'touchstart':
                t.removeEventListener(this.POINTER_DOWN, o, !1);
                break;
            case 'touchmove':
                t.removeEventListener(this.POINTER_MOVE, o, !1);
                break;
            case 'touchend':
                t.removeEventListener(this.POINTER_UP, o, !1),
                t.removeEventListener(this.POINTER_CANCEL, o, !1)
            }
            return this
        }
    }),
    o.Map.mergeOptions({
        touchZoom: o.Browser.touch && !o.Browser.android23,
        bounceAtZoomLimits: !0
    }),
    o.Map.TouchZoom = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this)
        },
        removeHooks: function () {
            o.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this)
        },
        _onTouchStart: function (t) {
            var n = this._map;
            if (t.touches && 2 === t.touches.length && !n._animatingZoom && !this._zooming) {
                var i = n.mouseEventToLayerPoint(t.touches[0]),
                r = n.mouseEventToLayerPoint(t.touches[1]),
                s = n._getCenterLayerPoint();
                this._startCenter = i.add(r) ._divideBy(2),
                this._startDist = i.distanceTo(r),
                this._moved = !1,
                this._zooming = !0,
                this._centerOffset = s.subtract(this._startCenter),
                n._panAnim && n._panAnim.stop(),
                o.DomEvent.on(e, 'touchmove', this._onTouchMove, this) .on(e, 'touchend', this._onTouchEnd, this),
                o.DomEvent.preventDefault(t)
            }
        },
        _onTouchMove: function (t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var n = e.mouseEventToLayerPoint(t.touches[0]),
                i = e.mouseEventToLayerPoint(t.touches[1]);
                this._scale = n.distanceTo(i) / this._startDist,
                this._delta = n._add(i) ._divideBy(2) ._subtract(this._startCenter),
                1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane, 'leaflet-touching'), e.fire('movestart') .fire('zoomstart'), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(t))
            }
        },
        _updateOnMove: function () {
            var t = this._map,
            e = this._getScaleOrigin(),
            n = t.layerPointToLatLng(e),
            i = t.getScaleZoom(this._scale);
            t._animateZoom(n, i, this._startCenter, this._scale, this._delta, !1, !0)
        },
        _onTouchEnd: function () {
            if (!this._moved || !this._zooming) return void (this._zooming = !1);
            var t = this._map;
            this._zooming = !1,
            o.DomUtil.removeClass(t._mapPane, 'leaflet-touching'),
            o.Util.cancelAnimFrame(this._animRequest),
            o.DomEvent.off(e, 'touchmove', this._onTouchMove) .off(e, 'touchend', this._onTouchEnd);
            var n = this._getScaleOrigin(),
            i = t.layerPointToLatLng(n),
            r = t.getZoom(),
            s = t.getScaleZoom(this._scale) - r,
            a = s > 0 ? Math.ceil(s)  : Math.floor(s),
            l = t._limitZoom(r + a),
            u = t.getZoomScale(l) / this._scale;
            t._animateZoom(i, l, n, u)
        },
        _getScaleOrigin: function () {
            var t = this._centerOffset.subtract(this._delta) .divideBy(this._scale);
            return this._startCenter.add(t)
        }
    }),
    o.Map.addInitHook('addHandler', 'touchZoom', o.Map.TouchZoom),
    o.Map.mergeOptions({
        tap: !0,
        tapTolerance: 15
    }),
    o.Map.Tap = o.Handler.extend({
        addHooks: function () {
            o.DomEvent.on(this._map._container, 'touchstart', this._onDown, this)
        },
        removeHooks: function () {
            o.DomEvent.off(this._map._container, 'touchstart', this._onDown, this)
        },
        _onDown: function (t) {
            if (t.touches) {
                if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1,
                void clearTimeout(this._holdTimeout);
                var n = t.touches[0],
                i = n.target;
                this._startPos = this._newPos = new o.Point(n.clientX, n.clientY),
                i.tagName && 'a' === i.tagName.toLowerCase() && o.DomUtil.addClass(i, 'leaflet-active'),
                this._holdTimeout = setTimeout(o.bind(function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent('contextmenu', n))
                }, this), 1000),
                o.DomEvent.on(e, 'touchmove', this._onMove, this) .on(e, 'touchend', this._onUp, this)
            }
        },
        _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, 'touchmove', this._onMove, this) .off(e, 'touchend', this._onUp, this), this._fireClick && t && t.changedTouches) {
                var n = t.changedTouches[0],
                i = n.target;
                i && i.tagName && 'a' === i.tagName.toLowerCase() && o.DomUtil.removeClass(i, 'leaflet-active'),
                this._isTapValid() && this._simulateEvent('click', n)
            }
        },
        _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function (t) {
            var e = t.touches[0];
            this._newPos = new o.Point(e.clientX, e.clientY)
        },
        _simulateEvent: function (n, i) {
            var o = e.createEvent('MouseEvents');
            o._simulated = !0,
            i.target._simulatedClick = !0,
            o.initMouseEvent(n, !0, !0, t, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
            i.target.dispatchEvent(o)
        }
    }),
    o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook('addHandler', 'tap', o.Map.Tap),
    o.Map.mergeOptions({
        boxZoom: !0
    }),
    o.Map.BoxZoom = o.Handler.extend({
        initialize: function (t) {
            this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane,
            this._moved = !1
        },
        addHooks: function () {
            o.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this)
        },
        removeHooks: function () {
            o.DomEvent.off(this._container, 'mousedown', this._onMouseDown),
            this._moved = !1
        },
        moved: function () {
            return this._moved
        },
        _onMouseDown: function (t) {
            return this._moved = !1,
            !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void o.DomEvent.on(e, 'mousemove', this._onMouseMove, this) .on(e, 'mouseup', this._onMouseUp, this) .on(e, 'keydown', this._onKeyDown, this))
        },
        _onMouseMove: function (t) {
            this._moved || (this._box = o.DomUtil.create('div', 'leaflet-zoom-box', this._pane), o.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = 'crosshair', this._map.fire('boxzoomstart'));
            var e = this._startLayerPoint,
            n = this._box,
            i = this._map.mouseEventToLayerPoint(t),
            r = i.subtract(e),
            s = new o.Point(Math.min(i.x, e.x), Math.min(i.y, e.y));
            o.DomUtil.setPosition(n, s),
            this._moved = !0,
            n.style.width = Math.max(0, Math.abs(r.x) - 4) + 'px',
            n.style.height = Math.max(0, Math.abs(r.y) - 4) + 'px'
        },
        _finish: function () {
            this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ''),
            o.DomUtil.enableTextSelection(),
            o.DomUtil.enableImageDrag(),
            o.DomEvent.off(e, 'mousemove', this._onMouseMove) .off(e, 'mouseup', this._onMouseUp) .off(e, 'keydown', this._onKeyDown)
        },
        _onMouseUp: function (t) {
            this._finish();
            var e = this._map,
            n = e.mouseEventToLayerPoint(t);
            if (!this._startLayerPoint.equals(n)) {
                var i = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(n));
                e.fitBounds(i),
                e.fire('boxzoomend', {
                    boxZoomBounds: i
                })
            }
        },
        _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    }),
    o.Map.addInitHook('addHandler', 'boxZoom', o.Map.BoxZoom),
    o.Map.mergeOptions({
        keyboard: !0,
        keyboardPanOffset: 80,
        keyboardZoomOffset: 1
    }),
    o.Map.Keyboard = o.Handler.extend({
        keyCodes: {
            left: [
                37
            ],
            right: [
                39
            ],
            down: [
                40
            ],
            up: [
                38
            ],
            zoomIn: [
                187,
                107,
                61,
                171
            ],
            zoomOut: [
                189,
                109,
                173
            ]
        },
        initialize: function (t) {
            this._map = t,
            this._setPanOffset(t.options.keyboardPanOffset),
            this._setZoomOffset(t.options.keyboardZoomOffset)
        },
        addHooks: function () {
            var t = this._map._container;
            - 1 === t.tabIndex && (t.tabIndex = '0'),
            o.DomEvent.on(t, 'focus', this._onFocus, this) .on(t, 'blur', this._onBlur, this) .on(t, 'mousedown', this._onMouseDown, this),
            this._map.on('focus', this._addHooks, this) .on('blur', this._removeHooks, this)
        },
        removeHooks: function () {
            this._removeHooks();
            var t = this._map._container;
            o.DomEvent.off(t, 'focus', this._onFocus, this) .off(t, 'blur', this._onBlur, this) .off(t, 'mousedown', this._onMouseDown, this),
            this._map.off('focus', this._addHooks, this) .off('blur', this._removeHooks, this)
        },
        _onMouseDown: function () {
            if (!this._focused) {
                var n = e.body,
                i = e.documentElement,
                o = n.scrollTop || i.scrollTop,
                r = n.scrollLeft || i.scrollLeft;
                this._map._container.focus(),
                t.scrollTo(r, o)
            }
        },
        _onFocus: function () {
            this._focused = !0,
            this._map.fire('focus')
        },
        _onBlur: function () {
            this._focused = !1,
            this._map.fire('blur')
        },
        _setPanOffset: function (t) {
            var e,
            n,
            i = this._panKeys = {
            },
            o = this.keyCodes;
            for (e = 0, n = o.left.length; n > e; e++) i[o.left[e]] = [
                - 1 * t,
                0
            ];
            for (e = 0, n = o.right.length; n > e; e++) i[o.right[e]] = [
                t,
                0
            ];
            for (e = 0, n = o.down.length; n > e; e++) i[o.down[e]] = [
                0,
                t
            ];
            for (e = 0, n = o.up.length; n > e; e++) i[o.up[e]] = [
                0,
                - 1 * t
            ]
        },
        _setZoomOffset: function (t) {
            var e,
            n,
            i = this._zoomKeys = {
            },
            o = this.keyCodes;
            for (e = 0, n = o.zoomIn.length; n > e; e++) i[o.zoomIn[e]] = t;
            for (e = 0, n = o.zoomOut.length; n > e; e++) i[o.zoomOut[e]] = - t
        },
        _addHooks: function () {
            o.DomEvent.on(e, 'keydown', this._onKeyDown, this)
        },
        _removeHooks: function () {
            o.DomEvent.off(e, 'keydown', this._onKeyDown, this)
        },
        _onKeyDown: function (t) {
            var e = t.keyCode,
            n = this._map;
            if (e in this._panKeys) {
                if (n._panAnim && n._panAnim._inProgress) return ;
                n.panBy(this._panKeys[e]),
                n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
            } else {
                if (!(e in this._zoomKeys)) return ;
                n.setZoom(n.getZoom() + this._zoomKeys[e])
            }
            o.DomEvent.stop(t)
        }
    }),
    o.Map.addInitHook('addHandler', 'keyboard', o.Map.Keyboard),
    o.Handler.MarkerDrag = o.Handler.extend({
        initialize: function (t) {
            this._marker = t
        },
        addHooks: function () {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new o.Draggable(t, t)),
            this._draggable.on('dragstart', this._onDragStart, this) .on('drag', this._onDrag, this) .on('dragend', this._onDragEnd, this),
            this._draggable.enable(),
            o.DomUtil.addClass(this._marker._icon, 'leaflet-marker-draggable')
        },
        removeHooks: function () {
            this._draggable.off('dragstart', this._onDragStart, this) .off('drag', this._onDrag, this) .off('dragend', this._onDragEnd, this),
            this._draggable.disable(),
            o.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable')
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        _onDragStart: function () {
            this._marker.closePopup() .fire('movestart') .fire('dragstart')
        },
        _onDrag: function () {
            var t = this._marker,
            e = t._shadow,
            n = o.DomUtil.getPosition(t._icon),
            i = t._map.layerPointToLatLng(n);
            e && o.DomUtil.setPosition(e, n),
            t._latlng = i,
            t.fire('move', {
                latlng: i
            }) .fire('drag')
        },
        _onDragEnd: function (t) {
            this._marker.fire('moveend') .fire('dragend', t)
        }
    }),
    o.Control = o.Class.extend({
        options: {
            position: 'topright'
        },
        initialize: function (t) {
            o.setOptions(this, t)
        },
        getPosition: function () {
            return this.options.position
        },
        setPosition: function (t) {
            var e = this._map;
            return e && e.removeControl(this),
            this.options.position = t,
            e && e.addControl(this),
            this
        },
        getContainer: function () {
            return this._container
        },
        addTo: function (t) {
            this._map = t;
            var e = this._container = this.onAdd(t),
            n = this.getPosition(),
            i = t._controlCorners[n];
            return o.DomUtil.addClass(e, 'leaflet-control'),
            - 1 !== n.indexOf('bottom') ? i.insertBefore(e, i.firstChild)  : i.appendChild(e),
            this
        },
        removeFrom: function (t) {
            var e = this.getPosition(),
            n = t._controlCorners[e];
            return n.removeChild(this._container),
            this._map = null,
            this.onRemove && this.onRemove(t),
            this
        },
        _refocusOnMap: function () {
            this._map && this._map.getContainer() .focus()
        }
    }),
    o.control = function (t) {
        return new o.Control(t)
    },
    o.Map.include({
        addControl: function (t) {
            return t.addTo(this),
            this
        },
        removeControl: function (t) {
            return t.removeFrom(this),
            this
        },
        _initControlPos: function () {
            function t(t, r) {
                var s = n + t + ' ' + n + r;
                e[t + r] = o.DomUtil.create('div', s, i)
            }
            var e = this._controlCorners = {
            },
            n = 'leaflet-',
            i = this._controlContainer = o.DomUtil.create('div', n + 'control-container', this._container);
            t('top', 'left'),
            t('top', 'right'),
            t('bottom', 'left'),
            t('bottom', 'right')
        },
        _clearControlPos: function () {
            this._container.removeChild(this._controlContainer)
        }
    }),
    o.Control.Zoom = o.Control.extend({
        options: {
            position: 'topleft',
            zoomInText: '+',
            zoomInTitle: 'Zoom in',
            zoomOutText: '-',
            zoomOutTitle: 'Zoom out'
        },
        onAdd: function (t) {
            var e = 'leaflet-control-zoom',
            n = o.DomUtil.create('div', e + ' leaflet-bar');
            return this._map = t,
            this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + '-in', n, this._zoomIn, this),
            this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + '-out', n, this._zoomOut, this),
            this._updateDisabled(),
            t.on('zoomend zoomlevelschange', this._updateDisabled, this),
            n
        },
        onRemove: function (t) {
            t.off('zoomend zoomlevelschange', this._updateDisabled, this)
        },
        _zoomIn: function (t) {
            this._map.zoomIn(t.shiftKey ? 3 : 1)
        },
        _zoomOut: function (t) {
            this._map.zoomOut(t.shiftKey ? 3 : 1)
        },
        _createButton: function (t, e, n, i, r, s) {
            var a = o.DomUtil.create('a', n, i);
            a.innerHTML = t,
            a.href = '#',
            a.title = e;
            var l = o.DomEvent.stopPropagation;
            return o.DomEvent.on(a, 'click', l) .on(a, 'mousedown', l) .on(a, 'dblclick', l) .on(a, 'click', o.DomEvent.preventDefault) .on(a, 'click', r, s) .on(a, 'click', this._refocusOnMap, s),
            a
        },
        _updateDisabled: function () {
            var t = this._map,
            e = 'leaflet-disabled';
            o.DomUtil.removeClass(this._zoomInButton, e),
            o.DomUtil.removeClass(this._zoomOutButton, e),
            t._zoom === t.getMinZoom() && o.DomUtil.addClass(this._zoomOutButton, e),
            t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton, e)
        }
    }),
    o.Map.mergeOptions({
        zoomControl: !0
    }),
    o.Map.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new o.Control.Zoom, this.addControl(this.zoomControl))
    }),
    o.control.zoom = function (t) {
        return new o.Control.Zoom(t)
    },
    o.Control.Attribution = o.Control.extend({
        options: {
            position: 'bottomright',
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize: function (t) {
            o.setOptions(this, t),
            this._attributions = {
            }
        },
        onAdd: function (t) {
            this._container = o.DomUtil.create('div', 'leaflet-control-attribution'),
            o.DomEvent.disableClickPropagation(this._container);
            for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return t.on('layeradd', this._onLayerAdd, this) .on('layerremove', this._onLayerRemove, this),
            this._update(),
            this._container
        },
        onRemove: function (t) {
            t.off('layeradd', this._onLayerAdd) .off('layerremove', this._onLayerRemove)
        },
        setPrefix: function (t) {
            return this.options.prefix = t,
            this._update(),
            this
        },
        addAttribution: function (t) {
            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this)  : void 0
        },
        removeAttribution: function (t) {
            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this)  : void 0
        },
        _update: function () {
            if (this._map) {
                var t = [
                ];
                for (var e in this._attributions) this._attributions[e] && t.push(e);
                var n = [
                ];
                this.options.prefix && n.push(this.options.prefix),
                t.length && n.push(t.join(', ')),
                this._container.innerHTML = n.join(' | ')
            }
        },
        _onLayerAdd: function (t) {
            t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
        },
        _onLayerRemove: function (t) {
            t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
        }
    }),
    o.Map.mergeOptions({
        attributionControl: !0
    }),
    o.Map.addInitHook(function () {
        this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution) .addTo(this))
    }),
    o.control.attribution = function (t) {
        return new o.Control.Attribution(t)
    },
    o.Control.Scale = o.Control.extend({
        options: {
            position: 'bottomleft',
            maxWidth: 100,
            metric: !0,
            imperial: !0,
            updateWhenIdle: !1
        },
        onAdd: function (t) {
            this._map = t;
            var e = 'leaflet-control-scale',
            n = o.DomUtil.create('div', e),
            i = this.options;
            return this._addScales(i, e, n),
            t.on(i.updateWhenIdle ? 'moveend' : 'move', this._update, this),
            t.whenReady(this._update, this),
            n
        },
        onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this)
        },
        _addScales: function (t, e, n) {
            t.metric && (this._mScale = o.DomUtil.create('div', e + '-line', n)),
            t.imperial && (this._iScale = o.DomUtil.create('div', e + '-line', n))
        },
        _update: function () {
            var t = this._map.getBounds(),
            e = t.getCenter() .lat,
            n = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
            i = n * (t.getNorthEast() .lng - t.getSouthWest() .lng) / 180,
            o = this._map.getSize(),
            r = this.options,
            s = 0;
            o.x > 0 && (s = i * (r.maxWidth / o.x)),
            this._updateScales(r, s)
        },
        _updateScales: function (t, e) {
            t.metric && e && this._updateMetric(e),
            t.imperial && e && this._updateImperial(e)
        },
        _updateMetric: function (t) {
            var e = this._getRoundNum(t);
            this._mScale.style.width = this._getScaleWidth(e / t) + 'px',
            this._mScale.innerHTML = 1000 > e ? e + ' m' : e / 1000 + ' km'
        },
        _updateImperial: function (t) {
            var e,
            n,
            i,
            o = 3.2808399 * t,
            r = this._iScale;
            o > 5280 ? (e = o / 5280, n = this._getRoundNum(e), r.style.width = this._getScaleWidth(n / e) + 'px', r.innerHTML = n + ' mi')  : (i = this._getRoundNum(o), r.style.width = this._getScaleWidth(i / o) + 'px', r.innerHTML = i + ' ft')
        },
        _getScaleWidth: function (t) {
            return Math.round(this.options.maxWidth * t) - 10
        },
        _getRoundNum: function (t) {
            var e = Math.pow(10, (Math.floor(t) + '') .length - 1),
            n = t / e;
            return n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1,
            e * n
        }
    }),
    o.control.scale = function (t) {
        return new o.Control.Scale(t)
    },
    o.Control.Layers = o.Control.extend({
        options: {
            collapsed: !0,
            position: 'topright',
            autoZIndex: !0
        },
        initialize: function (t, e, n) {
            o.setOptions(this, n),
            this._layers = {
            },
            this._lastZIndex = 0,
            this._handlingClick = !1;
            for (var i in t) this._addLayer(t[i], i);
            for (i in e) this._addLayer(e[i], i, !0)
        },
        onAdd: function (t) {
            return this._initLayout(),
            this._update(),
            t.on('layeradd', this._onLayerChange, this) .on('layerremove', this._onLayerChange, this),
            this._container
        },
        onRemove: function (t) {
            t.off('layeradd', this._onLayerChange, this) .off('layerremove', this._onLayerChange, this)
        },
        addBaseLayer: function (t, e) {
            return this._addLayer(t, e),
            this._update(),
            this
        },
        addOverlay: function (t, e) {
            return this._addLayer(t, e, !0),
            this._update(),
            this
        },
        removeLayer: function (t) {
            var e = o.stamp(t);
            return delete this._layers[e],
            this._update(),
            this
        },
        _initLayout: function () {
            var t = 'leaflet-control-layers',
            e = this._container = o.DomUtil.create('div', t);
            e.setAttribute('aria-haspopup', !0),
            o.Browser.touch ? o.DomEvent.on(e, 'click', o.DomEvent.stopPropagation)  : o.DomEvent.disableClickPropagation(e) .disableScrollPropagation(e);
            var n = this._form = o.DomUtil.create('form', t + '-list');
            if (this.options.collapsed) {
                o.Browser.android || o.DomEvent.on(e, 'mouseover', this._expand, this) .on(e, 'mouseout', this._collapse, this);
                var i = this._layersLink = o.DomUtil.create('a', t + '-toggle', e);
                i.href = '#',
                i.title = 'Layers',
                o.Browser.touch ? o.DomEvent.on(i, 'click', o.DomEvent.stop) .on(i, 'click', this._expand, this)  : o.DomEvent.on(i, 'focus', this._expand, this),
                o.DomEvent.on(n, 'click', function () {
                    setTimeout(o.bind(this._onInputClick, this), 0)
                }, this),
                this._map.on('click', this._collapse, this)
            } else this._expand();
            this._baseLayersList = o.DomUtil.create('div', t + '-base', n),
            this._separator = o.DomUtil.create('div', t + '-separator', n),
            this._overlaysList = o.DomUtil.create('div', t + '-overlays', n),
            e.appendChild(n)
        },
        _addLayer: function (t, e, n) {
            var i = o.stamp(t);
            this._layers[i] = {
                layer: t,
                name: e,
                overlay: n
            },
            this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
        },
        _update: function () {
            if (this._container) {
                this._baseLayersList.innerHTML = '',
                this._overlaysList.innerHTML = '';
                var t,
                e,
                n = !1,
                i = !1;
                for (t in this._layers) e = this._layers[t],
                this._addItem(e),
                i = i || e.overlay,
                n = n || !e.overlay;
                this._separator.style.display = i && n ? '' : 'none'
            }
        },
        _onLayerChange: function (t) {
            var e = this._layers[o.stamp(t.layer)];
            if (e) {
                this._handlingClick || this._update();
                var n = e.overlay ? 'layeradd' === t.type ? 'overlayadd' : 'overlayremove' : 'layeradd' === t.type ? 'baselayerchange' : null;
                n && this._map.fire(n, e)
            }
        },
        _createRadioElement: function (t, n) {
            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
            n && (i += ' checked="checked"'),
            i += '/>';
            var o = e.createElement('div');
            return o.innerHTML = i,
            o.firstChild
        },
        _addItem: function (t) {
            var n,
            i = e.createElement('label'),
            r = this._map.hasLayer(t.layer);
            t.overlay ? (n = e.createElement('input'), n.type = 'checkbox', n.className = 'leaflet-control-layers-selector', n.defaultChecked = r)  : n = this._createRadioElement('leaflet-base-layers', r),
            n.layerId = o.stamp(t.layer),
            o.DomEvent.on(n, 'click', this._onInputClick, this);
            var s = e.createElement('span');
            s.innerHTML = ' ' + t.name,
            i.appendChild(n),
            i.appendChild(s);
            var a = t.overlay ? this._overlaysList : this._baseLayersList;
            return a.appendChild(i),
            i
        },
        _onInputClick: function () {
            var t,
            e,
            n,
            i = this._form.getElementsByTagName('input'),
            o = i.length;
            for (this._handlingClick = !0, t = 0; o > t; t++) e = i[t],
            n = this._layers[e.layerId],
            e.checked && !this._map.hasLayer(n.layer) ? this._map.addLayer(n.layer)  : !e.checked && this._map.hasLayer(n.layer) && this._map.removeLayer(n.layer);
            this._handlingClick = !1,
            this._refocusOnMap()
        },
        _expand: function () {
            o.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded')
        },
        _collapse: function () {
            this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '')
        }
    }),
    o.control.layers = function (t, e, n) {
        return new o.Control.Layers(t, e, n)
    },
    o.PosAnimation = o.Class.extend({
        includes: o.Mixin.Events,
        run: function (t, e, n, i) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._newPos = e,
            this.fire('start'),
            t.style[o.DomUtil.TRANSITION] = 'all ' + (n || 0.25) + 's cubic-bezier(0,0,' + (i || 0.5) + ',1)',
            o.DomEvent.on(t, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
            o.DomUtil.setPosition(t, e),
            o.Util.falseFn(t.offsetWidth),
            this._stepTimer = setInterval(o.bind(this._onStep, this), 50)
        },
        stop: function () {
            this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(this._el.offsetWidth))
        },
        _onStep: function () {
            var t = this._getPos();
            return t ? (this._el._leaflet_pos = t, void this.fire('step'))  : void this._onTransitionEnd()
        },
        _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
        _getPos: function () {
            var e,
            n,
            i,
            r = this._el,
            s = t.getComputedStyle(r);
            if (o.Browser.any3d) {
                if (i = s[o.DomUtil.TRANSFORM].match(this._transformRe), !i) return ;
                e = parseFloat(i[1]),
                n = parseFloat(i[2])
            } else e = parseFloat(s.left),
            n = parseFloat(s.top);
            return new o.Point(e, n, !0)
        },
        _onTransitionEnd: function () {
            o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this),
            this._inProgress && (this._inProgress = !1, this._el.style[o.DomUtil.TRANSITION] = '', this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire('step') .fire('end'))
        }
    }),
    o.Map.include({
        setView: function (t, e, i) {
            if (e = e === n ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), i = i || {
            }, this._panAnim && this._panAnim.stop(), this._loaded && !i.reset && i !== !0) {
                i.animate !== n && (i.zoom = o.extend({
                    animate: i.animate
                }, i.zoom), i.pan = o.extend({
                    animate: i.animate
                }, i.pan));
                var r = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom)  : this._tryAnimatedPan(t, i.pan);
                if (r) return clearTimeout(this._sizeTimer),
                this
            }
            return this._resetView(t, e),
            this
        },
        panBy: function (t, e) {
            if (t = o.point(t) .round(), e = e || {
            }, !t.x && !t.y) return this;
            if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)), e.noMoveStart || this.fire('movestart'), e.animate !== !1) {
                o.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');
                var n = this._getMapPanePos() .subtract(t);
                this._panAnim.run(this._mapPane, n, e.duration || 0.25, e.easeLinearity)
            } else this._rawPanBy(t),
            this.fire('move') .fire('moveend');
            return this
        },
        _onPanTransitionStep: function () {
            this.fire('move')
        },
        _onPanTransitionEnd: function () {
            o.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim'),
            this.fire('moveend')
        },
        _tryAnimatedPan: function (t, e) {
            var n = this._getCenterOffset(t) ._floor();
            return (e && e.animate) === !0 || this.getSize() .contains(n) ? (this.panBy(n, e), !0)  : !1
        }
    }),
    o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
        run: function (t, e, n, i) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._duration = n || 0.25,
            this._easeOutPower = 1 / Math.max(i || 0.5, 0.2),
            this._startPos = o.DomUtil.getPosition(t),
            this._offset = e.subtract(this._startPos),
            this._startTime = + new Date,
            this.fire('start'),
            this._animate()
        },
        stop: function () {
            this._inProgress && (this._step(), this._complete())
        },
        _animate: function () {
            this._animId = o.Util.requestAnimFrame(this._animate, this),
            this._step()
        },
        _step: function () {
            var t = + new Date - this._startTime,
            e = 1000 * this._duration;
            e > t ? this._runFrame(this._easeOut(t / e))  : (this._runFrame(1), this._complete())
        },
        _runFrame: function (t) {
            var e = this._startPos.add(this._offset.multiplyBy(t));
            o.DomUtil.setPosition(this._el, e),
            this.fire('step')
        },
        _complete: function () {
            o.Util.cancelAnimFrame(this._animId),
            this._inProgress = !1,
            this.fire('end')
        },
        _easeOut: function (t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }),
    o.Map.mergeOptions({
        zoomAnimation: !0,
        zoomAnimationThreshold: 4
    }),
    o.DomUtil.TRANSITION && o.Map.addInitHook(function () {
        this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 && !o.Browser.mobileOpera,
        this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
    }),
    o.Map.include(o.DomUtil.TRANSITION ? {
        _catchTransitionEnd: function (t) {
            this._animatingZoom && t.propertyName.indexOf('transform') >= 0 && this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function () {
            return !this._container.getElementsByClassName('leaflet-zoom-animated') .length
        },
        _tryAnimatedZoom: function (t, e, n) {
            if (this._animatingZoom) return !0;
            if (n = n || {
            }, !this._zoomAnimated || n.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
            var i = this.getZoomScale(e),
            o = this._getCenterOffset(t) ._divideBy(1 - 1 / i),
            r = this._getCenterLayerPoint() ._add(o);
            return n.animate === !0 || this.getSize() .contains(o) ? (this.fire('movestart') .fire('zoomstart'), this._animateZoom(t, e, r, i, null, !0), !0)  : !1
        },
        _animateZoom: function (t, e, n, i, r, s, a) {
            a || (this._animatingZoom = !0),
            o.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim'),
            this._animateToCenter = t,
            this._animateToZoom = e,
            o.Draggable && (o.Draggable._disabled = !0),
            o.Util.requestAnimFrame(function () {
                this.fire('zoomanim', {
                    center: t,
                    zoom: e,
                    origin: n,
                    scale: i,
                    delta: r,
                    backwards: s
                }),
                setTimeout(o.bind(this._onZoomTransitionEnd, this), 250)
            }, this)
        },
        _onZoomTransitionEnd: function () {
            this._animatingZoom && (this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim'), o.Util.requestAnimFrame(function () {
                this._resetView(this._animateToCenter, this._animateToZoom, !0, !0),
                o.Draggable && (o.Draggable._disabled = !1)
            }, this))
        }
    }
     : {
    }),
    o.TileLayer.include({
        _animateZoom: function (t) {
            this._animating || (this._animating = !0, this._prepareBgBuffer());
            var e = this._bgBuffer,
            n = o.DomUtil.TRANSFORM,
            i = t.delta ? o.DomUtil.getTranslateString(t.delta)  : e.style[n],
            r = o.DomUtil.getScaleString(t.scale, t.origin);
            e.style[n] = t.backwards ? r + ' ' + i : i + ' ' + r
        },
        _endZoomAnim: function () {
            var t = this._tileContainer,
            e = this._bgBuffer;
            t.style.visibility = '',
            t.parentNode.appendChild(t),
            o.Util.falseFn(e.offsetWidth);
            var n = this._map.getZoom();
            (n > this.options.maxZoom || n < this.options.minZoom) && this._clearBgBuffer(),
            this._animating = !1
        },
        _clearBgBuffer: function () {
            var t = this._map;
            !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = '', this._bgBuffer.style[o.DomUtil.TRANSFORM] = '')
        },
        _prepareBgBuffer: function () {
            var t = this._tileContainer,
            e = this._bgBuffer,
            n = this._getLoadedTilesPercentage(e),
            i = this._getLoadedTilesPercentage(t);
            return e && n > 0.5 && 0.5 > i ? (t.style.visibility = 'hidden', void this._stopLoadingImages(t))  : (e.style.visibility = 'hidden', e.style[o.DomUtil.TRANSFORM] = '', this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), void clearTimeout(this._clearBgBufferTimer))
        },
        _getLoadedTilesPercentage: function (t) {
            var e,
            n,
            i = t.getElementsByTagName('img'),
            o = 0;
            for (e = 0, n = i.length; n > e; e++) i[e].complete && o++;
            return o / n
        },
        _stopLoadingImages: function (t) {
            var e,
            n,
            i,
            r = Array.prototype.slice.call(t.getElementsByTagName('img'));
            for (e = 0, n = r.length; n > e; e++) i = r[e],
            i.complete || (i.onload = o.Util.falseFn, i.onerror = o.Util.falseFn, i.src = o.Util.emptyImageUrl, i.parentNode.removeChild(i))
        }
    }),
    o.Map.include({
        _defaultLocateOptions: {
            watch: !1,
            setView: !1,
            maxZoom: 1 / 0,
            timeout: 10000,
            maximumAge: 0,
            enableHighAccuracy: !1
        },
        locate: function (t) {
            if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
                code: 0,
                message: 'Geolocation not supported.'
            }),
            this;
            var e = o.bind(this._handleGeolocationResponse, this),
            n = o.bind(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, n, t)  : navigator.geolocation.getCurrentPosition(e, n, t),
            this
        },
        stopLocate: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
        },
        _handleGeolocationError: function (t) {
            var e = t.code,
            n = t.message || (1 === e ? 'permission denied' : 2 === e ? 'position unavailable' : 'timeout');
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire('locationerror', {
                code: e,
                message: 'Geolocation error: ' + n + '.'
            })
        },
        _handleGeolocationResponse: function (t) {
            var e = t.coords.latitude,
            n = t.coords.longitude,
            i = new o.LatLng(e, n),
            r = 180 * t.coords.accuracy / 40075017,
            s = r / Math.cos(o.LatLng.DEG_TO_RAD * e),
            a = o.latLngBounds([e - r,
            n - s], [
                e + r,
                n + s
            ]),
            l = this._locateOptions;
            if (l.setView) {
                var u = Math.min(this.getBoundsZoom(a), l.maxZoom);
                this.setView(i, u)
            }
            var h = {
                latlng: i,
                bounds: a,
                timestamp: t.timestamp
            };
            for (var c in t.coords) 'number' == typeof t.coords[c] && (h[c] = t.coords[c]);
            this.fire('locationfound', h)
        }
    })
}(window, document),
define('enketo-widget/geo/geopicker', [
    'jquery',
    'enketo-js/Widget',
    'text!enketo-config',
    'leaflet',
    'q'
], function (t, e, n, i, o) {
    'use strict';
    function r(t, n) {
        this.namespace = l,
        e.call(this, t, n),
        this._init()
    }
    var s,
    a,
    l = 'geopicker',
    u = JSON.parse(n),
    h = 15,
    c = u && u.maps && u.maps.length > 0 ? u.maps : [
        {
            name: 'streets',
            maxzoom: 24,
            tiles: [
                'http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png'
            ],
            attribution: 'Tiles courtesy of <a href="http://hot.openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        }
    ],
    d = 'https://maps.googleapis.com/maps/api/geocode/json?address={address}&sensor=true&key={api_key}',
    p = u.googleApiKey || u.google_api_key,
    f = i.divIcon({
        iconSize: 24,
        className: 'enketo-geopoint-marker'
    }),
    m = i.divIcon({
        iconSize: 16,
        className: 'enketo-geopoint-circle-marker'
    }),
    g = i.divIcon({
        iconSize: 16,
        className: 'enketo-geopoint-circle-marker-active'
    });
    return r.prototype = Object.create(e.prototype),
    r.prototype.constructor = r,
    r.prototype._init = function () {
        var e = t(this.element) .val() .trim(),
        n = this;
        this.$form = t(this.element) .closest('form.or'),
        this.$question = t(this.element) .closest('.question'),
        this.mapId = Math.round(10000000 * Math.random()),
        this.props = this._getProps(),
        this._addDomElements(),
        this.currentIndex = 0,
        this.points = [
        ],
        e && t(this.element) .val() .trim() .split(';') .forEach(function (t, e) {
            n.points[e] = t.trim() .split(' '),
            n.points[e].forEach(function (t, e, n) {
                n[e] = Number(t)
            })
        }),
        this.$widget.find('[name="lat"], [name="long"], [name="alt"], [name="acc"]') .on('change change.bymap change.bysearch', function (t) {
            var e = n.$lat.val() ? Number(n.$lat.val())  : '',
            i = n.$lng.val() ? Number(n.$lng.val())  : '',
            o = n.$alt.val() ? Number(n.$alt.val())  : '',
            r = n.$acc.val() ? Number(n.$acc.val())  : '',
            s = {
                lat: e,
                lng: i
            };
            t.stopImmediatePropagation(),
            'bymap' !== t.namespace && 'bysearch' !== t.namespace && n.polyline && !n.containsEmptyPoints(n.points, n.currentIndex) && n.updatedPolylineWouldIntersect(s, n.currentIndex) ? (n._showIntersectError(), n._updateInputs(n.points[n.currentIndex], 'nochange'))  : (n._editPoint([e,
            i,
            o,
            r]), 'bysearch' !== t.namespace && n.$search && n.$search.val(''))
        }),
        this.$kmlInput.on('change', function (e) {
            var i = n.$points.find('.addpoint'),
            o = t(this) .prev('.paste-progress') .removeClass('hide'),
            r = e.target.value,
            s = n._convertKmlCoordinatesToLeafletCoordinates(r);
            e.target.value = '',
            setTimeout(function () {
                s.forEach(function (t, e) {
                    n._updateInputs(t),
                    e < s.length - 1 && i.click()
                }),
                o.remove(),
                n._switchInputType('points')
            }, 10)
        }),
        this.$widget.find('.toggle-input-type-btn') .on('click', function (t) {
            var e = n.$inputGroup.hasClass('kml-input-mode') ? 'points' : 'kml';
            return n._switchInputType(e),
            !1
        }),
        t(this.element) .on('change', function () {
            n.$kmlInput.prop('disabled', !!this.value)
        }),
        this.$points.on('click', '.point', function () {
            return n._setCurrent(n.$points.find('.point') .index(t(this))),
            n._switchInputType('points'),
            !1
        }),
        this.$points.find('.addpoint') .on('click', function () {
            return n._addPoint(),
            !1
        }),
        this.$widget.find('.close-chain-btn') .on('click', function () {
            return n._closePolygon(),
            !1
        }),
        this.$widget.find('.btn-remove') .on('click', function () {
            n.points.length < 2 ? n._updateInputs([])  : window.confirm('This will completely remove the current geopoint from the list of geopoints and cannot be undone. Are you sure you want to do this?') && n._removePoint()
        }),
        this.$map.find('.show-map-btn') .on('click', function () {
            return n.$widget.find('.search-bar') .removeClass('hide-search'),
            n.$widget.addClass('full-screen'),
            n._updateMap(),
            !1
        }),
        this.$form.on('pageflip.enketo.map' + this.mapId, function (e) {
            n.map && t.contains(e.target, n.element) && (n.map.invalidateSize(), n.$form.off('pageflip.enketo.map' + n.mapId))
        }),
        this.props.wide && this.$widget.addClass('wide'),
        this.$widget.toggleClass('hide-input', this.$question.hasClass('or-appearance-hide-input')) .find('.toggle-input-visibility-btn') .on('click', function () {
            n.$widget.toggleClass('hide-input'),
            t(this) .toggleClass('open', n.$widget.hasClass('hide-input')),
            n.map && n.map.invalidateSize(!1)
        }) .toggleClass('open', n.$widget.hasClass('hide-input')),
        this.$widget.find('.hide-map-btn') .on('click', function () {
            return n.$widget.find('.search-bar') .addClass('hide-search'),
            n.$widget.removeClass('full-screen') .find('.map-canvas') .removeClass('leaflet-container'),
            n.map && (n.map.remove(), n.map = null, n.polygon = null, n.polyline = null),
            !1
        }),
        this.$widget.on('focus blur', 'input', function (e) {
            t(n.element) .trigger(e.type)
        }),
        this.props.search && this._enableSearch(),
        this.props.detect && this._enableDetection(),
        e ? this.points.forEach(function (t, e) {
            n._addPointBtn(e + 1)
        })  : this._addPoint(),
        e ? (this._updateMap(), this._setCurrent(this.currentIndex))  : (this._updateMap([0,
        0], 1), this.props.detect && navigator.geolocation.getCurrentPosition(function (t) {
            n._updateMap([t.coords.latitude,
            t.coords.longitude], h)
        }))
    },
    r.prototype._switchInputType = function (t) {
        'kml' === t ? this.$inputGroup.addClass('kml-input-mode')  : 'points' === t && this.$inputGroup.removeClass('kml-input-mode')
    },
    r.prototype._getProps = function () {
        var e = [
        ],
        n = this.options.touch !== !0 || this.options.touch === !0 && t(this.element) .closest('.or-appearance-maps') .length > 0;
        return n && (e = t(this.element) .closest('.question') .attr('class') .split(' ') .filter(function (t) {
            return 'or-appearance-maps' !== t && /or-appearance-/.test(t)
        }), e.forEach(function (t, n) {
            e[n] = t.substring(14)
        })),
        {
            detect: !!navigator.geolocation,
            map: n,
            search: n,
            appearances: e,
            type: this.element.attributes['data-type-xml'].value,
            touch: this.options.touch,
            wide: this.$question.width() / this.$question.closest('form.or') .width() > 0.8
        }
    },
    r.prototype._addPointBtn = function (t) {
        this.$points.find('.addpoint') .before('<a href="#" class="point"> </a>')
    },
    r.prototype._addDomElements = function () {
        var e = '<div class="map-canvas-wrapper"><div class=map-canvas id="map' + this.mapId + '"></div></div>',
        n = '<div class="points"><button type="button" class="addpoint">+</button></div>',
        i = '<a href="#" class="toggle-input-type-btn"><span class="kml-input">KML</span><span class="points-input">points</span></a><label class="geo kml">KML coordinates<progress class="paste-progress hide"></progress><textarea class="ignore" name="kml" placeholder="paste KML coordinates here"></textarea><span class="disabled-msg">remove all points to enable</span></label>',
        o = '<button type="button" class="close-chain-btn btn btn-default btn-xs">close polygon</button>',
        r = '<button type="button" class="show-map-btn btn btn-default">Map</button>';
        if (this.$widget = t('<div class="geopicker widget"><div class="search-bar hide-search no-map no-detect"><button type="button" class="hide-map-btn btn btn-default"><span class="icon icon-arrow-left"> </span></button><button name="geodetect" type="button" class="btn btn-default" title="detect current location" data-placement="top"><span class="icon icon-crosshairs"> </span></button><div class="input-group"><input class="geo ignore" name="search" type="text" placeholder="search for place or address" disabled="disabled"/><button type="button" class="btn btn-default search-btn"><i class="icon icon-search"> </i></button></div></div><div class="geo-inputs"><label class="geo lat">latitude (x.y &deg;)<input class="ignore" name="lat" type="number" step="0.000001" min="-90" max="90"/></label><label class="geo long">longitude (x.y &deg;)<input class="ignore" name="long" type="number" step="0.000001" min="-180" max="180"/></label><label class="geo alt">altitude (m)<input class="ignore" name="alt" type="number" step="0.1" /></label><label class="geo acc">accuracy (m)<input class="ignore" name="acc" type="number" step="0.1" /></label><button type="button" class="btn-icon-only btn-remove"><span class="icon icon-trash"> </span></button></div></div>'), this.props.detect && (this.$widget.find('.search-bar') .removeClass('no-detect'), this.$detect = this.$widget.find('button[name="geodetect"]')), this.$search = this.$widget.find('[name="search"]'), this.$inputGroup = this.$widget.find('.geo-inputs'), this.props.map ? (this.$widget.find('.search-bar') .removeClass('no-map') .after(e), this.$map = this.$widget.find('.map-canvas'), this.$map.parent() .append('<button type="button" class="toggle-input-visibility-btn"> </button>'))  : this.$map = t(), this.props.touch && this.props.map && this.$map.append(r), this.props.touch || this.$widget.find('.search-bar') .removeClass('hide-search'), 'geopoint' !== this.props.type) {
            this.$points = t(n),
            this.$widget.prepend(this.$points),
            'geoshape' === this.props.type && this.$inputGroup.append(o);
            var s = t(i);
            this.$kmlInput = s.find('[name="kml"]'),
            this.$inputGroup.prepend(s)
        } else this.$points = t(),
        this.$kmlInput = t();
        this.$lat = this.$widget.find('[name="lat"]'),
        this.$lng = this.$widget.find('[name="long"]'),
        this.$alt = this.$widget.find('[name="alt"]'),
        this.$acc = this.$widget.find('[name="acc"]'),
        t(this.element) .hide() .after(this.$widget) .parent() .addClass('clearfix')
    },
    r.prototype._updateValue = function () {
        var e = t(this.element) .val(),
        n = '',
        i = this;
        return this._markAsValid(),
        this.points.forEach(function (t, e, o) {
            var r,
            s = 'number' == typeof t[0] ? t[0] : 'number' == typeof t.lat ? t.lat : null,
            a = 'number' == typeof t[1] ? t[1] : 'number' == typeof t.lng ? t.lng : null,
            l = 'number' == typeof t[2] ? t[2] : 0,
            u = 'number' == typeof t[3] ? t[3] : 0;
            r = s && a ? s + ' ' + a + ' ' + l + ' ' + u : '',
            i._isValidGeopoint(r) || '' === r && e === o.length - 1 || i._markAsInvalid(e),
            '' !== r || e !== o.length - 1 ? (n += r, e !== o.length - 1 && (n += ';'))  : n = n.substring(0, n.lastIndexOf(';'))
        }),
        e !== n ? (t(this.element) .val(n) .trigger('change'), !0)  : !1
    },
    r.prototype._isValidGeopoint = function (t) {
        var e;
        return t ? (e = t.toString() .split(' '), '' !== e[0] && e[0] >= - 90 && e[0] <= 90 && '' !== e[1] && e[1] >= - 180 && e[1] <= 180 && ('undefined' == typeof e[2] || !isNaN(e[2])) && ('undefined' == typeof e[3] || !isNaN(e[3]) && e[3] >= 0))  : !1
    },
    r.prototype._isValidLatLngList = function (t) {
        var e = this;
        return t.every(function (t, n, i) {
            return e._isValidLatLng(t) || '' === t.join() && n === i.length - 1
        })
    },
    r.prototype._isValidLatLng = function (t) {
        var e,
        n;
        return e = 'number' == typeof t[0] ? t[0] : 'number' == typeof t.lat ? t.lat : null,
        n = 'number' == typeof t[1] ? t[1] : 'number' == typeof t.lng ? t.lng : null,
        null !== e && null !== n && e >= - 90 && 90 >= e && n >= - 180 && 180 >= n
    },
    r.prototype._markAsInvalid = function (t) {
        this.$points.find('.point') .eq(t) .addClass('has-error')
    },
    r.prototype._markAsValid = function () {
        this.$points.find('.point') .removeClass('has-error')
    },
    r.prototype._setCurrent = function (t) {
        this.currentIndex = t,
        this.$points.find('.point') .removeClass('active') .eq(t) .addClass('active'),
        this._updateInputs(this.points[t], ''),
        !this.map || this.props.touch && !this._inFullScreenMode() || this._updateMarkers()
    },
    r.prototype._enableDetection = function () {
        var t = this,
        e = {
            enableHighAccuracy: !0,
            maximumAge: 0
        };
        this.$detect.click(function (n) {
            return n.preventDefault(),
            navigator.geolocation.getCurrentPosition(function (e) {
                var n = {
                    lat: Math.round(1000000 * e.coords.latitude) / 1000000,
                    lng: Math.round(1000000 * e.coords.longitude) / 1000000
                };
                t.polyline && t.updatedPolylineWouldIntersect(n, t.currentIndex) ? t._showIntersectError()  : (t._updateInputs([n.lat,
                n.lng,
                e.coords.altitude,
                e.coords.accuracy]), t.currentIndex === t.points.length - 1 && 'geopoint' !== t.props.type && t._addPoint())
            }, function () {
                console.error('error occurred trying to obtain position')
            }, e),
            !1
        })
    },
    r.prototype._enableSearch = function () {
        var e = this;
        d = p ? d.replace('{api_key}', p)  : d.replace('&key={api_key}', ''),
        this.$search.prop('disabled', !1) .on('change', function (n) {
            var i = t(this) .val();
            n.stopImmediatePropagation(),
            i && (i = i.split(/\s+/) .join('+'), t.get(d.replace('{address}', i), function (t) {
                var n;
                t.results && t.results.length > 0 && t.results[0].geometry && t.results[0].geometry.location ? (n = t.results[0].geometry.location, e._updateMap([n.lat,
                n.lng], h), e.$search.closest('.input-group') .removeClass('has-error'))  : (e.$search.closest('.input-group') .addClass('has-error'), console.log('Location "' + i + '" not found'))
            }, 'json') .fail(function () {
                e.$search.closest('.input-group') .addClass('has-error'),
                console.log('Error. Geocoding service may not be available or app is offline')
            }) .always(function () {
            }))
        })
    },
    r.prototype._dynamicMapAvailable = function () {
        return !!this.map
    },
    r.prototype._inFullScreenMode = function () {
        return this.$widget.hasClass('full-screen')
    },
    r.prototype._updateMap = function (t, e) {
        var n = this;
        this.props.map && (e || (e = this.map ? this.map.getZoom() || h : h), t && (this.lastLatLng = t, this.lastZoom = e), (!this.props.touch || this._inFullScreenMode()) && (this.map ? n._updateDynamicMapView(t, e)  : this._addDynamicMap() .then(function () {
            n._updateDynamicMapView(t, e)
        })))
    },
    r.prototype._addDynamicMap = function () {
        var t = this;
        return this._getLayers() .then(function (e) {
            var n = o.defer(),
            r = {
                layers: t._getDefaultLayer(e)
            };
            return t.map = i.map('map' + t.mapId, r) .on('click', function (e) {
                var n = e.latlng,
                i = t.$lat.val() && t.$lng.val() ? t.points.length : t.currentIndex;
                n.lat = Math.round(1000000 * n.lat) / 1000000,
                n.lng = Math.round(1000000 * n.lng) / 1000000,
                'geopoint' !== t.props.type && !t.containsEmptyPoints(t.points, i) && t.updatedPolylineWouldIntersect(n, i) ? t._showIntersectError()  : t.$lat.val() && t.$lng.val() && 'geopoint' !== t.props.type ? t.$lat.val() && t.$lng.val() && (t._addPoint(), t._updateInputs(n, 'change.bymap'))  : t._updateInputs(n, 'change.bymap')
            }),
            t.map.attributionControl.setPrefix(''),
            e.length > 1 && i.control.layers(t._getBaseLayers(e), null) .addTo(t.map),
            t.$widget.find('.leaflet-control-layers-toggle') .append('<span class="icon icon-globe"></span>'),
            t.map.on('baselayerchange', function () {
                t.$widget.find('.leaflet-control-container input') .addClass('ignore no-unselect') .next('span') .addClass('option-label')
            }),
            n.resolve(),
            n.promise
        })
    },
    r.prototype._updateDynamicMapView = function (t, e) {
        t ? this.map.setView(t, e || h)  : (this._updatePolyline(), this._updateMarkers(), 1 === this.points.length && '' === this.points[0].toString() && (this.lastLatLng ? this.map.setView(this.lastLatLng, this.lastZoom || h)  : this.map.setView(i.latLng(0, 0), e || h)))
    },
    r.prototype._showIntersectError = function () {
        alert('Borders cannot intersect!')
    },
    r.prototype._getLayers = function () {
        var t = this,
        e = [
        ];
        return c.forEach(function (n, i) {
            'string' == typeof n.tiles && /^GOOGLE_(SATELLITE|ROADMAP|HYBRID|TERRAIN)/.test(n.tiles) ? e.push(t._getGoogleTileLayer(n, i))  : n.tiles ? e.push(t._getLeafletTileLayer(n, i))  : console.error('Configuration error for map tiles. Not a valid tile layer: ', n)
        }),
        o.all(e)
    },
    r.prototype._getLeafletTileLayer = function (t, e) {
        var n,
        r = this._getTileOptions(t, e),
        s = o.defer();
        return t.tileIndex = void 0 === t.tileIndex ? Math.round(100 * Math.random()) % t.tiles.length : t.tileIndex,
        n = t.tiles[t.tileIndex],
        s.resolve(i.tileLayer(n, r)),
        s.promise
    },
    r.prototype._getGoogleTileLayer = function (t, e) {
        var n = o.defer(),
        r = this._getTileOptions(t, e),
        s = t.tiles.substring(7);
        return this._loadGoogleMapsScript() .then(function () {
            n.resolve(new i.Google(s, r))
        }),
        n.promise
    },
    r.prototype._getTileOptions = function (t, e) {
        var n = t.name || 'map-' + (e + 1);
        return {
            id: t.id || n,
            maxZoom: t.maxzoom || 18,
            minZoom: t.minzoom || 0,
            name: n,
            attribution: t.attribution || ''
        }
    },
    r.prototype._loadGoogleMapsScript = function () {
        var t,
        e;
        return s || (a = o.defer(), window.gmapsLoaded = function () {
            delete window.gmapsLoaded,
            a.resolve()
        }, t = p ? '&key=' + p : '', e = '//maps.google.com/maps/api/js?v=3.exp' + t + '&sensor=false&libraries=places&callback=gmapsLoaded', require([e]), s = !0),
        a.promise
    },
    r.prototype._getDefaultLayer = function (t) {
        var e,
        n = this;
        return t.reverse() .some(function (t) {
            return e = t,
            n.props.appearances.some(function (e) {
                return e === t.options.name
            })
        }),
        e
    },
    r.prototype._getBaseLayers = function (t) {
        var e = {
        };
        return t.forEach(function (t) {
            e[t.options.name] = t
        }),
        e
    },
    r.prototype._updateMarkers = function () {
        var t = [
        ],
        e = [
        ],
        n = this;
        this.markerLayer && this.markerLayer.clearLayers(),
        this.points.length < 2 && '' === this.points[0].join() || (this.points.forEach(function (o, r) {
            var s = 'geopoint' === n.props.type ? f : r === n.currentIndex ? g : m;
            n._isValidLatLng(o) ? (t.push(o), e.push(i.marker(o, {
                icon: s,
                clickable: !0,
                draggable: !0,
                alt: r,
                opacity: 0.9
            }) .on('click', function (t) {
                0 === t.target.options.alt && 'geoshape' === n.props.type ? n._closePolygon()  : n._setCurrent(t.target.options.alt)
            }) .on('dragend', function (t) {
                var e = t.target.getLatLng(),
                i = t.target.options.alt;
                e.lat = Math.round(1000000 * e.lat) / 1000000,
                e.lng = Math.round(1000000 * e.lng) / 1000000,
                n.polyline && n.updatedPolylineWouldIntersect(e, i) ? (n._showIntersectError(), n._updateMarkers())  : (n._setCurrent(i), n._updateInputs(e, 'change.bymap'), n._updateMap())
            })))  : console.debug('this latLng was not considered valid', o)
        }), e.length > 0 && (this.markerLayer = i.layerGroup(e) .addTo(this.map), 1 !== this.points.length && this._isValidLatLngList(this.points) || this.map.setView(t[0], this.lastZoom || h)))
    },
    r.prototype._updatePolyline = function () {
        var t,
        e = this;
        if ('geopoint' !== this.props.type) {
            if (this.points.length < 2 || !this._isValidLatLngList(this.points)) return this.map && (this.polyline && this.map.removeLayer(this.polyline), this.polygon && this.map.removeLayer(this.polygon)),
            this.polyline = null,
            void (this.polygon = null);
            'geoshape' === this.props.type && this._updatePolygon(),
            t = '' !== this.points[this.points.length - 1].join('') ? this.points : this.points.slice(0, this.points.length - 1),
            this.polyline ? this.polyline.setLatLngs(t)  : (this.polyline = i.polyline(t, {
                color: 'red'
            }), this.map.addLayer(this.polyline)),
            setTimeout(function () {
                e.map.fitBounds(e.polyline.getBounds())
            }, 0)
        }
    },
    r.prototype._updatePolygon = function () {
        var t;
        'geopoint' !== this.props.type && 'geotrace' !== this.props.type && (t = '' !== this.points[this.points.length - 1].join('') ? this.points : this.points.slice(0, this.points.length - 1), this.polygon ? this.polygon.setLatLngs(t)  : (this.polygon = i.polygon(t, {
            color: 'red',
            stroke: !1
        }), this.map.addLayer(this.polygon)), this._updateArea(t))
    },
    r.prototype._updateArea = function (t) {
        var e,
        n;
        t.length > 2 ? (e = i.GeometryUtil.geodesicArea(t), n = i.GeometryUtil.readableArea(e), i.popup({
            className: 'enketo-area-popup'
        }) .setLatLng(this.polygon.getBounds() .getCenter()) .setContent(n) .openOn(this.map))  : this.map.closePopup()
    },
    r.prototype._addPoint = function () {
        this._addPointBtn(this.points.length + 1),
        this.points.push([]),
        this._setCurrent(this.points.length - 1),
        this._updateValue()
    },
    r.prototype._editPoint = function (t) {
        var e;
        return this.points[this.currentIndex] = t,
        e = this._updateValue(),
        e && this._updateMap(),
        e
    },
    r.prototype._removePoint = function () {
        var t = this.currentIndex;
        this.points.splice(this.currentIndex, 1),
        this._updateValue(),
        this.$points.find('.point') .eq(this.currentIndex) .remove(),
        'undefined' == typeof this.points[this.currentIndex] && (t = this.currentIndex - 1),
        this._setCurrent(t),
        this._updateMap()
    },
    r.prototype._closePolygon = function () {
        var t = this.points[this.points.length - 1];
        if (!(this.points.length < 3 || 3 === this.points.length && !this._isValidLatLng(this.points[2]) || JSON.stringify(this.points[0]) === JSON.stringify(t))) return this._isValidLatLng(t) ? (console.log('current last point is valid, so will create a new one to use to close'), this._addPoint())  : (console.log('current last point is not a valid point, so will use this as closing point'), this.currentIndex = this.points.length - 1),
        this.polyline && !this.containsEmptyPoints(this.points, this.points.length) && this.updatedPolylineWouldIntersect(this.points[0], this.currentIndex) ? this._showIntersectError()  : void this._updateInputs(this.points[0])
    },
    r.prototype._updateInputs = function (t, e) {
        var n = t[0] || t.lat || '',
        i = t[1] || t.lng || '',
        o = t[2] || t.alt || '',
        r = t[3] || t.acc || '';
        e = 'undefined' != typeof e ? e : 'change',
        this.$lat.val(n || ''),
        this.$lng.val(i || ''),
        this.$alt.val(o || ''),
        this.$acc.val(r || '') .trigger(e)
    },
    r.prototype._convertKmlCoordinatesToLeafletCoordinates = function (t) {
        var e = [
        ],
        n = /<\s?coordinates>(([^<]|\n)*)<\/\s?coordinates\s?>/,
        i = n.test(t);
        return t = i ? t.match(n) [1] : t,
        t.trim() .split(/\s+/) .forEach(function (t) {
            var n = [
            ];
            t.split(',') .forEach(function (t, e) {
                var i = Number(t);
                0 === e ? n[1] = i : 1 === e ? n[0] = i : 2 === e && (n[2] = i)
            }),
            e.push(n)
        }),
        e
    },
    r.prototype.disable = function () {
        this.$map.hide(),
        this.$widget.find('.btn') .addClass('disabled')
    },
    r.prototype.enable = function () {
        this.$map.show(),
        this.$widget.find('.btn') .removeClass('disabled'),
        this.map && this.map.invalidateSize()
    },
    r.prototype.containsEmptyPoints = function (t, e) {
        return t.some(function (t, n) {
            return !(n === e || t[0] && t[1])
        })
    },
    r.prototype.updatedPolylineWouldIntersect = function (e, n) {
        var o,
        r,
        s,
        a = [
        ];
        return this.points < 3 ? !1 : (t.extend(!0, a, this.points), a[n] = [
            e[0] || e.lat,
            e[1] || e.lng
        ], o = '' !== a[a.length - 1].join('') ? a : a.slice(0, a.length - 1), o[0][0] === o[o.length - 1][0] && o[0][1] === o[o.length - 1][1] && (o = o.slice(0, o.length - 1)), r = i.polyline(o, {
            color: 'white'
        }), this.map.addLayer(r), s = r.intersects(), this.map.removeLayer(r), s)
    },
    i.GeometryUtil = i.extend(i.GeometryUtil || {
    }, {
        geodesicArea: function (t) {
            var e,
            n,
            o = 6378100,
            r = t.length,
            s = 0,
            a = i.LatLng.DEG_TO_RAD;
            if (r > 2) {
                for (var l = 0; r > l; l++) e = {
                    lat: t[l][0],
                    lng: t[l][1]
                },
                n = {
                    lat: t[(l + 1) % r][0],
                    lng: t[(l + 1) % r][1]
                },
                s += (n.lng - e.lng) * a * (2 + Math.sin(e.lat * a) + Math.sin(n.lat * a));
                s = s * o * o / 2
            }
            return Math.abs(s)
        },
        readableArea: function (t) {
            var e;
            return e = t >= 10000 ? (0.0001 * t) .toFixed(2) + ' ha' : t.toFixed(0) + ' m&sup2;'
        }
    }),
    i.Polyline.include({
        intersects: function () {
            var t,
            e,
            n,
            i = this._originalPoints,
            o = i ? i.length : 0;
            if (this._tooFewPointsForIntersection()) return !1;
            for (t = o - 1; t >= 3; t--)
            if (e = i[t - 1], n = i[t], this._lineSegmentsIntersectsRange(e, n, t - 2)) return !0;
            return !1
        },
        _tooFewPointsForIntersection: function (t) {
            var e = this._originalPoints,
            n = e ? e.length : 0;
            return n += t || 0,
            !this._originalPoints || 3 >= n
        },
        _lineSegmentsIntersectsRange: function (t, e, n, o) {
            var r,
            s,
            a = this._originalPoints;
            o = o || 0;
            for (var l = n; l > o; l--)
            if (r = a[l - 1], s = a[l], i.LineUtil.segmentsIntersect(t, e, r, s)) return !0;
            return !1
        }
    }),
    i.Util.extend(i.LineUtil, {
        segmentsIntersect: function (t, e, n, i) {
            return this._checkCounterclockwise(t, n, i) !== this._checkCounterclockwise(e, n, i) && this._checkCounterclockwise(t, e, n) !== this._checkCounterclockwise(t, e, i)
        },
        _checkCounterclockwise: function (t, e, n) {
            return (n.y - t.y) * (e.x - t.x) > (e.y - t.y) * (n.x - t.x)
        }
    }),
    t.fn[l] = function (e, n) {
        return this.each(function () {
            var i = t(this),
            o = t(this) .data(l);
            e = e || {
            },
            o || 'object' != typeof e ? o && 'string' == typeof e && o[e](this)  : i.data(l, o = new r(this, e, n))
        })
    },
    i.Google = i.Class.extend({
        includes: i.Mixin.Events,
        options: {
            minZoom: 0,
            maxZoom: 18,
            tileSize: 256,
            subdomains: 'abc',
            errorTileUrl: '',
            attribution: '',
            opacity: 1,
            continuousWorld: !1,
            noWrap: !1,
            mapOptions: {
                backgroundColor: '#dddddd'
            }
        },
        initialize: function (t, e) {
            i.Util.setOptions(this, e),
            this._ready = void 0 !== google.maps.Map,
            this._ready || i.Google.asyncWait.push(this),
            this._type = t || 'SATELLITE'
        },
        onAdd: function (t, e) {
            this._map = t,
            this._insertAtTheBottom = e,
            this._initContainer(),
            this._initMapObject(),
            t.on('viewreset', this._resetCallback, this),
            this._limitedUpdate = i.Util.limitExecByInterval(this._update, 150, this),
            t.on('move', this._update, this),
            t.on('zoomanim', this._handleZoomAnim, this),
            t._controlCorners.bottomright.style.marginBottom = '20px',
            this._reset(),
            this._update()
        },
        onRemove: function (t) {
            t._container.removeChild(this._container),
            t.off('viewreset', this._resetCallback, this),
            t.off('move', this._update, this),
            t.off('zoomanim', this._handleZoomAnim, this),
            t._controlCorners.bottomright.style.marginBottom = '0em'
        },
        getAttribution: function () {
            return this.options.attribution
        },
        setOpacity: function (t) {
            this.options.opacity = t,
            1 > t && i.DomUtil.setOpacity(this._container, t)
        },
        setElementSize: function (t, e) {
            t.style.width = e.x + 'px',
            t.style.height = e.y + 'px'
        },
        _initContainer: function () {
            var t = this._map._container,
            e = t.firstChild;
            this._container || (this._container = i.DomUtil.create('div', 'leaflet-google-layer leaflet-top leaflet-left'), this._container.id = '_GMapContainer_' + i.Util.stamp(this), this._container.style.zIndex = 'auto'),
            t.insertBefore(this._container, e),
            this.setOpacity(this.options.opacity),
            this.setElementSize(this._container, this._map.getSize())
        },
        _initMapObject: function () {
            if (this._ready) {
                this._google_center = new google.maps.LatLng(0, 0);
                var t = new google.maps.Map(this._container, {
                    center: this._google_center,
                    zoom: 0,
                    tilt: 0,
                    mapTypeId: google.maps.MapTypeId[this._type],
                    disableDefaultUI: !0,
                    keyboardShortcuts: !1,
                    draggable: !1,
                    disableDoubleClickZoom: !0,
                    scrollwheel: !1,
                    streetViewControl: !1,
                    styles: this.options.mapOptions.styles,
                    backgroundColor: this.options.mapOptions.backgroundColor
                }),
                e = this;
                this._reposition = google.maps.event.addListenerOnce(t, 'center_changed', function () {
                    e.onReposition()
                }),
                this._google = t,
                google.maps.event.addListenerOnce(t, 'idle', function () {
                    e._checkZoomLevels()
                }),
                this.fire('MapObjectInitialized', {
                    mapObject: t
                })
            }
        },
        _checkZoomLevels: function () {
            this._google.getZoom() !== this._map.getZoom() && this._map.setZoom(this._google.getZoom())
        },
        _resetCallback: function (t) {
            this._reset(t.hard)
        },
        _reset: function (t) {
            this._initContainer()
        },
        _update: function (t) {
            if (this._google) {
                this._resize();
                var e = this._map.getCenter(),
                n = new google.maps.LatLng(e.lat, e.lng);
                this._google.setCenter(n),
                this._google.setZoom(Math.round(this._map.getZoom())),
                this._checkZoomLevels()
            }
        },
        _resize: function () {
            var t = this._map.getSize();
            (this._container.style.width !== t.x || this._container.style.height !== t.y) && (this.setElementSize(this._container, t), this.onReposition())
        },
        _handleZoomAnim: function (t) {
            var e = t.center,
            n = new google.maps.LatLng(e.lat, e.lng);
            this._google.setCenter(n),
            this._google.setZoom(Math.round(t.zoom))
        },
        onReposition: function () {
            this._google && google.maps.event.trigger(this._google, 'resize')
        }
    }),
    i.Google.asyncWait = [
    ],
    i.Google.asyncInitialize = function () {
        var t;
        for (t = 0; t < i.Google.asyncWait.length; t++) {
            var e = i.Google.asyncWait[t];
            e._ready = !0,
            e._container && (e._initMapObject(), e._update())
        }
        i.Google.asyncWait = [
        ]
    },
    l
}),
define('enketo-widget/table/tablewidget', function () {
}),
define('enketo-widget/radio/radiopicker', [
    'enketo-js/Widget',
    'jquery',
    'enketo-js/plugins'
], function (t, e) {
    'use strict';
    function n(e, n) {
        this.namespace = o,
        t.call(this, e, n),
        this._init()
    }
    var i = null,
    o = 'radiopicker';
    return n.prototype = Object.create(t.prototype),
    n.prototype.constructor = n,
    n.prototype._init = function () {
        this._setDelegatedHandlers()
    },
    n.prototype._setDelegatedHandlers = function () {
        var t,
        n,
        o = e(this.element);
        o.on('click', 'input[type="radio"]:checked', function (t) {
            e(this) .parent('label') .siblings() .removeAttr('data-checked') .end() .attr('data-checked', 'true')
        }),
        o.on('click', 'input[type="checkbox"]', function (i) {
            n = e(this),
            t = n.parent('label'),
            n.is(':checked') ? t.attr('data-checked', 'true')  : t.removeAttr('data-checked')
        }),
        o.on('click', 'input[type="radio"], input[type="checkbox"]', function (t) {
            i && i.trigger('fakeblur'),
            i = e(this) .trigger('fakefocus')
        }),
        o.on('focusin fakefocus', 'input:not([type="radio"], [type="checkbox"]), textarea, select', function (t) {
            i && i.trigger('fakeblur'),
            i = null
        }),
        o.find('input[type="radio"]:checked, input[type="checkbox"]:checked') .parent('label') .attr('data-checked', 'true'),
        o.on('click', '[data-checked]>input[type="radio"]:not(.no-unselect)', function (t) {
            e(this) .prop('checked', !1) .trigger('change') .parent() .removeAttr('data-checked')
        })
    },
    n.prototype.destroy = function (t) {
    },
    e.fn[o] = function (t, i) {
        var r = e(this),
        s = r.data(o);
        return t = t || {
        },
        s || 'object' != typeof t ? s && 'string' == typeof t && s[t](this)  : r.data(o, s = new n(r[0], t, i)),
        this
    },
    o
}),
function (t, e) {
    function n() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function i() {
        var t = new Date;
        return n(t.getFullYear(), t.getMonth(), t.getDate())
    }
    function o(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }
    function r(e, n) {
        var i,
        o = t(e) .data(),
        r = {
        },
        s = new RegExp('^' + n.toLowerCase() + '([A-Z])'),
        n = new RegExp('^' + n.toLowerCase());
        for (var a in o) n.test(a) && (i = a.replace(s, function (t, e) {
            return e.toLowerCase()
        }), r[i] = o[a]);
        return r
    }
    function s(e) {
        var n = {
        };
        if (f[e] || (e = e.split('-') [0], f[e])) {
            var i = f[e];
            return t.each(p, function (t, e) {
                e in i && (n[e] = i[e])
            }),
            n
        }
    }
    var a = t(window),
    l = function () {
        var e = {
            get: function (t) {
                return this.slice(t) [0]
            },
            contains: function (t) {
                for (var e = t && t.valueOf(), n = 0, i = this.length; i > n; n++)
                if (this[n].valueOf() === e) return n;
                return - 1
            },
            remove: function (t) {
                this.splice(t, 1)
            },
            replace: function (e) {
                e && (t.isArray(e) || (e = [
                    e
                ]), this.clear(), this.push.apply(this, e))
            },
            clear: function () {
                this.splice(0)
            },
            copy: function () {
                var t = new l;
                return t.replace(this),
                t
            }
        };
        return function () {
            var n = [
            ];
            return n.push.apply(n, arguments),
            t.extend(n, e),
            n
        }
    }(),
    u = function (e, n) {
        this.dates = new l,
        this.viewDate = i(),
        this.focusDate = null,
        this._process_options(n),
        this.element = t(e),
        this.isInline = !1,
        this.isInput = this.element.is('input'),
        this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn')  : !1,
        this.hasInput = this.component && this.element.find('input') .length,
        this.component && 0 === this.component.length && (this.component = !1),
        this.picker = t(m.template),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline ? this.picker.addClass('datepicker-inline') .appendTo(this.element)  : this.picker.addClass('datepicker-dropdown dropdown-menu'),
        this.o.rtl && this.picker.addClass('datepicker-rtl'),
        this.viewMode = this.o.startView,
        this.o.calendarWeeks && this.picker.find('tfoot th.today') .attr('colspan', function (t, e) {
            return parseInt(e) + 1
        }),
        this._allow_update = !1,
        this.setStartDate(this._o.startDate),
        this.setEndDate(this._o.endDate),
        this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),
        this.fillDow(),
        this.fillMonths(),
        this._allow_update = !0,
        this.update(),
        this.showMode(),
        this.isInline && this.show()
    };
    u.prototype = {
        constructor: u,
        _process_options: function (e) {
            this._o = t.extend({
            }, this._o, e);
            var n = this.o = t.extend({
            }, this._o),
            i = n.language;
            switch (f[i] || (i = i.split('-') [0], f[i] || (i = d.language)), n.language = i, n.startView) {
            case 2:
            case 'decade':
                n.startView = 2;
                break;
            case 1:
            case 'year':
                n.startView = 1;
                break;
            default:
                n.startView = 0
            }
            switch (n.minViewMode) {
            case 1:
            case 'months':
                n.minViewMode = 1;
                break;
            case 2:
            case 'years':
                n.minViewMode = 2;
                break;
            default:
                n.minViewMode = 0
            }
            n.startView = Math.max(n.startView, n.minViewMode),
            n.multidate !== !0 && (n.multidate = Number(n.multidate) || !1, n.multidate !== !1 ? n.multidate = Math.max(0, n.multidate)  : n.multidate = 1),
            n.multidateSeparator = String(n.multidateSeparator),
            n.weekStart %= 7,
            n.weekEnd = (n.weekStart + 6) % 7;
            var o = m.parseFormat(n.format);
            n.startDate !== - (1 / 0) && (n.startDate ? n.startDate instanceof Date ? n.startDate = this._local_to_utc(this._zero_time(n.startDate))  : n.startDate = m.parseDate(n.startDate, o, n.language)  : n.startDate = - (1 / 0)),
            n.endDate !== 1 / 0 && (n.endDate ? n.endDate instanceof Date ? n.endDate = this._local_to_utc(this._zero_time(n.endDate))  : n.endDate = m.parseDate(n.endDate, o, n.language)  : n.endDate = 1 / 0),
            n.daysOfWeekDisabled = n.daysOfWeekDisabled || [],
            t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)),
            n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function (t) {
                return parseInt(t, 10)
            });
            var r = String(n.orientation) .toLowerCase() .split(/\s+/g),
            s = n.orientation.toLowerCase();
            if (r = t.grep(r, function (t) {
                return /^auto|left|right|top|bottom$/.test(t)
            }), n.orientation = {
                x: 'auto',
                y: 'auto'
            }, s && 'auto' !== s)
            if (1 === r.length) switch (r[0]) {
            case 'top':
            case 'bottom':
                n.orientation.y = r[0];
                break;
            case 'left':
            case 'right':
                n.orientation.x = r[0]
            } else s = t.grep(r, function (t) {
                return /^left|right$/.test(t)
            }),
            n.orientation.x = s[0] || 'auto',
            s = t.grep(r, function (t) {
                return /^top|bottom$/.test(t)
            }),
            n.orientation.y = s[0] || 'auto';
             else ;
        },
        _events: [
        ],
        _secondaryEvents: [
        ],
        _applyEvents: function (t) {
            for (var n, i, o, r = 0; r < t.length; r++) n = t[r][0],
            2 == t[r].length ? (i = e, o = t[r][1])  : 3 == t[r].length && (i = t[r][1], o = t[r][2]),
            n.on(o, i)
        },
        _unapplyEvents: function (t) {
            for (var n, i, o = 0; o < t.length; o++) n = t[o][0],
            2 == t[o].length ? (ch = e, i = t[o][1])  : 3 == t[o].length && (ch = t[o][1], i = t[o][2]),
            n.off(i, ch)
        },
        _buildEvents: function () {
            this.isInput ? this._events = [
                [this.element,
                {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(function (e) {
                        - 1 === t.inArray(e.keyCode, [
                            27,
                            37,
                            39,
                            38,
                            40,
                            32,
                            13,
                            9
                        ]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                }
                ]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find('input'),
                {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(function (e) {
                        - 1 === t.inArray(e.keyCode, [
                            27,
                            37,
                            39,
                            38,
                            40,
                            32,
                            13,
                            9
                        ]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                }
                ],
                [
                    this.component,
                    {
                        click: t.proxy(this.show, this)
                    }
                ]
            ] : this.element.is('div') ? this.isInline = !0 : this._events = [
                [this.element,
                {
                    click: t.proxy(this.show, this)
                }
                ]
            ],
            this._events.push([this.element,
            '*',
            {
                blur: t.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }
            ], [
                this.element,
                {
                    blur: t.proxy(function (t) {
                        this._focused_from = t.target
                    }, this)
                }
            ]),
            this._secondaryEvents = [
                [this.picker,
                {
                    click: t.proxy(this.click, this)
                }
                ],
                [
                    t(window),
                    {
                        resize: t.proxy(this.place, this)
                    }
                ],
                [
                    t(document),
                    {
                        'mousedown touchstart': t.proxy(function (t) {
                            this.element.is(t.target) || this.element.find(t.target) .length || this.picker.is(t.target) || this.picker.find(t.target) .length || this.hide()
                        }, this)
                    }
                ]
            ]
        },
        _attachEvents: function () {
            this._detachEvents(),
            this._applyEvents(this._events)
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(),
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function (e, n) {
            var i = n || this.dates.get( - 1),
            o = this._utc_to_local(i);
            this.element.trigger({
                type: e,
                date: o,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function (t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format)  : 'string' == typeof t && (e = t, t = this.dates.length - 1),
                    e = e || this.o.format;
                    var n = this.dates.get(t);
                    return m.formatDate(n, e, this.o.language)
                }, this)
            })
        },
        show: function (t) {
            this.isInline || this.picker.appendTo('body'),
            this.picker.show(),
            this.height = this.component ? this.component.outerHeight()  : this.element.outerHeight(),
            this.place(),
            this._attachSecondaryEvents(),
            this._trigger('show')
        },
        hide: function () {
            this.isInline || this.picker.is(':visible') && (this.focusDate = null, this.picker.hide() .detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input') .val()) && this.setValue(), this._trigger('hide'))
        },
        remove: function () {
            this.hide(),
            this._detachEvents(),
            this._detachSecondaryEvents(),
            this.picker.remove(),
            delete this.element.data() .datepicker,
            this.isInput || delete this.element.data() .date
        },
        _utc_to_local: function (t) {
            return t && new Date(t.getTime() + 60000 * t.getTimezoneOffset())
        },
        _local_to_utc: function (t) {
            return t && new Date(t.getTime() - 60000 * t.getTimezoneOffset())
        },
        _zero_time: function (t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function (t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        },
        getDates: function () {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function () {
            return t.map(this.dates, function (t) {
                return new Date(t)
            })
        },
        getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function () {
            return new Date(this.dates.get( - 1))
        },
        setDates: function () {
            this.update.apply(this, arguments),
            this._trigger('changeDate'),
            this.setValue()
        },
        setUTCDates: function () {
            this.update.apply(this, t.map(arguments, this._utc_to_local)),
            this._trigger('changeDate'),
            this.setValue()
        },
        setDate: o('setDates'),
        setUTCDate: o('setUTCDates'),
        setValue: function () {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t) .change()  : this.component && this.element.find('input') .val(t) .change()
        },
        getFormattedDate: function (n) {
            n === e && (n = this.o.format);
            var i = this.o.language;
            return t.map(this.dates, function (t) {
                return m.formatDate(t, n, i)
            }) .join(this.o.multidateSeparator)
        },
        setStartDate: function (t) {
            this._process_options({
                startDate: t
            }),
            this.update(),
            this.updateNavArrows()
        },
        setEndDate: function (t) {
            this._process_options({
                endDate: t
            }),
            this.update(),
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function (t) {
            this._process_options({
                daysOfWeekDisabled: t
            }),
            this.update(),
            this.updateNavArrows()
        },
        place: function () {
            if (!this.isInline) {
                var e = this.picker.outerWidth(),
                n = this.picker.outerHeight(),
                i = 10,
                o = a.width(),
                r = a.height(),
                s = a.scrollTop(),
                l = parseInt(this.element.parents() .filter(function () {
                    return 'auto' != t(this) .css('z-index')
                }) .first() .css('z-index')) + 10,
                u = this.component ? this.component.parent() .offset()  : this.element.offset(),
                h = this.component ? this.component.outerHeight(!0)  : this.element.outerHeight(!1),
                c = this.component ? this.component.outerWidth(!0)  : this.element.outerWidth(!1),
                d = u.left,
                p = u.top;
                this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left'),
                'auto' !== this.o.orientation.x ? (this.picker.addClass('datepicker-orient-' + this.o.orientation.x), 'right' === this.o.orientation.x && (d -= e - c))  : (this.picker.addClass('datepicker-orient-left'), u.left < 0 ? d -= u.left - i : u.left + e > o && (d = o - e - i));
                var f,
                m,
                g = this.o.orientation.y;
                'auto' === g && (f = - s + u.top - n, m = s + r - (u.top + h + n), g = Math.max(f, m) === m ? 'top' : 'bottom'),
                this.picker.addClass('datepicker-orient-' + g),
                'top' === g ? p += h : p -= n + parseInt(this.picker.css('padding-top')),
                this.picker.css({
                    top: p,
                    left: d,
                    zIndex: l
                })
            }
        },
        _allow_update: !0,
        update: function () {
            if (this._allow_update) {
                var e = this.dates.copy(),
                n = [
                ],
                i = !1;
                arguments.length ? (t.each(arguments, t.proxy(function (t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)),
                    n.push(e)
                }, this)), i = !0)  : (n = this.isInput ? this.element.val()  : this.element.data('date') || this.element.find('input') .val(), n = n && this.o.multidate ? n.split(this.o.multidateSeparator)  : [
                    n
                ], delete this.element.data() .date),
                n = t.map(n, t.proxy(function (t) {
                    return m.parseDate(t, this.o.format, this.o.language)
                }, this)),
                n = t.grep(n, t.proxy(function (t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                }, this), !0),
                this.dates.replace(n),
                this.dates.length ? this.viewDate = new Date(this.dates.get( - 1))  : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate)  : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)),
                i ? this.setValue()  : n.length && String(e) !== String(this.dates) && this._trigger('changeDate'),
                !this.dates.length && e.length && this._trigger('clearDate'),
                this.fill()
            }
        },
        fillDow: function () {
            var t = this.o.weekStart,
            e = '<tr>';
            if (this.o.calendarWeeks) {
                var n = '<th class="cw">&nbsp;</th>';
                e += n,
                this.picker.find('.datepicker-days thead tr:first-child') .prepend(n)
            }
            for (; t < this.o.weekStart + 7; ) e += '<th class="dow">' + f[this.o.language].daysMin[t++ % 7] + '</th>';
            e += '</tr>',
            this.picker.find('.datepicker-days thead') .append(e)
        },
        fillMonths: function () {
            for (var t = '', e = 0; 12 > e; ) t += '<span class="month">' + f[this.o.language].monthsShort[e++] + '</span>';
            this.picker.find('.datepicker-months td') .html(t)
        },
        setRange: function (e) {
            e && e.length ? this.range = t.map(e, function (t) {
                return t.valueOf()
            })  : delete this.range,
            this.fill()
        },
        getClassNames: function (e) {
            var n = [
            ],
            i = this.viewDate.getUTCFullYear(),
            o = this.viewDate.getUTCMonth(),
            r = new Date;
            return e.getUTCFullYear() < i || e.getUTCFullYear() == i && e.getUTCMonth() < o ? n.push('old')  : (e.getUTCFullYear() > i || e.getUTCFullYear() == i && e.getUTCMonth() > o) && n.push('new'),
            this.focusDate && e.valueOf() === this.focusDate.valueOf() && n.push('focused'),
            this.o.todayHighlight && e.getUTCFullYear() == r.getFullYear() && e.getUTCMonth() == r.getMonth() && e.getUTCDate() == r.getDate() && n.push('today'),
            - 1 !== this.dates.contains(e) && n.push('active'),
            (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || - 1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && n.push('disabled'),
            this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push('range'), - 1 != t.inArray(e.valueOf(), this.range) && n.push('selected')),
            n
        },
        fill: function () {
            var i,
            o = new Date(this.viewDate),
            r = o.getUTCFullYear(),
            s = o.getUTCMonth(),
            a = this.o.startDate !== - (1 / 0) ? this.o.startDate.getUTCFullYear()  : - (1 / 0),
            l = this.o.startDate !== - (1 / 0) ? this.o.startDate.getUTCMonth()  : - (1 / 0),
            u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear()  : 1 / 0,
            h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth()  : 1 / 0;
            this.picker.find('.datepicker-days thead th.datepicker-switch') .text(f[this.o.language].months[s] + ' ' + r),
            this.picker.find('tfoot th.today') .text(f[this.o.language].today) .toggle(this.o.todayBtn !== !1),
            this.picker.find('tfoot th.clear') .text(f[this.o.language].clear) .toggle(this.o.clearBtn !== !1),
            this.updateNavArrows(),
            this.fillMonths();
            var c = n(r, s - 1, 28),
            d = m.getDaysInMonth(c.getUTCFullYear(), c.getUTCMonth());
            c.setUTCDate(d),
            c.setUTCDate(d - (c.getUTCDay() - this.o.weekStart + 7) % 7);
            var p = new Date(c);
            p.setUTCDate(p.getUTCDate() + 42),
            p = p.valueOf();
            for (var g, v = [
            ]; c.valueOf() < p; ) {
                if (c.getUTCDay() == this.o.weekStart && (v.push('<tr>'), this.o.calendarWeeks)) {
                    var y = new Date( + c + (this.o.weekStart - c.getUTCDay() - 7) % 7 * 86400000),
                    _ = new Date( + y + (11 - y.getUTCDay()) % 7 * 86400000),
                    b = new Date( + (b = n(_.getUTCFullYear(), 0, 1)) + (11 - b.getUTCDay()) % 7 * 86400000),
                    w = (_ - b) / 86400000 / 7 + 1;
                    v.push('<td class="cw">' + w + '</td>')
                }
                if (g = this.getClassNames(c), g.push('day'), this.o.beforeShowDay !== t.noop) {
                    var x = this.o.beforeShowDay(this._utc_to_local(c));
                    x === e ? x = {
                    }
                     : 'boolean' == typeof x ? x = {
                        enabled: x
                    }
                     : 'string' == typeof x && (x = {
                        classes: x
                    }),
                    x.enabled === !1 && g.push('disabled'),
                    x.classes && (g = g.concat(x.classes.split(/\s+/))),
                    x.tooltip && (i = x.tooltip)
                }
                g = t.unique(g),
                v.push('<td class="' + g.join(' ') + '"' + (i ? ' title="' + i + '"' : '') + '>' + c.getUTCDate() + '</td>'),
                c.getUTCDay() == this.o.weekEnd && v.push('</tr>'),
                c.setUTCDate(c.getUTCDate() + 1)
            }
            this.picker.find('.datepicker-days tbody') .empty() .append(v.join(''));
            var k = this.picker.find('.datepicker-months') .find('th:eq(1)') .text(r) .end() .find('span') .removeClass('active');
            t.each(this.dates, function (t, e) {
                e.getUTCFullYear() == r && k.eq(e.getUTCMonth()) .addClass('active')
            }),
            (a > r || r > u) && k.addClass('disabled'),
            r == a && k.slice(0, l) .addClass('disabled'),
            r == u && k.slice(h + 1) .addClass('disabled'),
            v = '',
            r = 10 * parseInt(r / 10, 10);
            var D = this.picker.find('.datepicker-years') .find('th:eq(1)') .text(r + '-' + (r + 9)) .end() .find('td');
            r -= 1;
            for (var E, T = t.map(this.dates, function (t) {
                return t.getUTCFullYear()
            }), P = - 1; 11 > P; P++) E = [
                'year'
            ],
            - 1 === P ? E.push('old')  : 10 === P && E.push('new'),
            - 1 !== t.inArray(r, T) && E.push('active'),
            (a > r || r > u) && E.push('disabled'),
            v += '<span class="' + E.join(' ') + '">' + r + '</span>',
            r += 1;
            D.html(v)
        },
        updateNavArrows: function () {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                e = t.getUTCFullYear(),
                n = t.getUTCMonth();
                switch (this.viewMode) {
                case 0:
                    this.o.startDate !== - (1 / 0) && e <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find('.prev') .css({
                        visibility: 'hidden'
                    })  : this.picker.find('.prev') .css({
                        visibility: 'visible'
                    }),
                    this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find('.next') .css({
                        visibility: 'hidden'
                    })  : this.picker.find('.next') .css({
                        visibility: 'visible'
                    });
                    break;
                case 1:
                case 2:
                    this.o.startDate !== - (1 / 0) && e <= this.o.startDate.getUTCFullYear() ? this.picker.find('.prev') .css({
                        visibility: 'hidden'
                    })  : this.picker.find('.prev') .css({
                        visibility: 'visible'
                    }),
                    this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? this.picker.find('.next') .css({
                        visibility: 'hidden'
                    })  : this.picker.find('.next') .css({
                        visibility: 'visible'
                    })
                }
            }
        },
        click: function (e) {
            e.preventDefault();
            var i,
            o,
            r,
            s = t(e.target) .closest('span, td, th');
            if (1 == s.length) switch (s[0].nodeName.toLowerCase()) {
            case 'th':
                switch (s[0].className) {
                case 'datepicker-switch':
                    this.showMode(1);
                    break;
                case 'prev':
                case 'next':
                    var a = m.modes[this.viewMode].navStep * ('prev' == s[0].className ? - 1 : 1);
                    switch (this.viewMode) {
                    case 0:
                        this.viewDate = this.moveMonth(this.viewDate, a),
                        this._trigger('changeMonth', this.viewDate);
                        break;
                    case 1:
                    case 2:
                        this.viewDate = this.moveYear(this.viewDate, a),
                        1 === this.viewMode && this._trigger('changeYear', this.viewDate)
                    }
                    this.fill();
                    break;
                case 'today':
                    var l = new Date;
                    l = n(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0),
                    this.showMode( - 2);
                    var u = 'linked' == this.o.todayBtn ? null : 'view';
                    this._setDate(l, u);
                    break;
                case 'clear':
                    var h;
                    this.isInput ? h = this.element : this.component && (h = this.element.find('input')),
                    h && h.val('') .change(),
                    this.update(),
                    this._trigger('changeDate'),
                    this.o.autoclose && this.hide()
                }
                break;
            case 'span':
                s.is('.disabled') || (this.viewDate.setUTCDate(1), s.is('.month') ? (r = 1, o = s.parent() .find('span') .index(s), i = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(o), this._trigger('changeMonth', this.viewDate), 1 === this.o.minViewMode && this._setDate(n(i, o, r)))  : (r = 1, o = 0, i = parseInt(s.text(), 10) || 0, this.viewDate.setUTCFullYear(i), this._trigger('changeYear', this.viewDate), 2 === this.o.minViewMode && this._setDate(n(i, o, r))), this.showMode( - 1), this.fill());
                break;
            case 'td':
                s.is('.day') && !s.is('.disabled') && (r = parseInt(s.text(), 10) || 1, i = this.viewDate.getUTCFullYear(), o = this.viewDate.getUTCMonth(), s.is('.old') ? 0 === o ? (o = 11, i -= 1)  : o -= 1 : s.is('.new') && (11 == o ? (o = 0, i += 1)  : o += 1), this._setDate(n(i, o, r)))
            }
            this.picker.is(':visible') && this._focused_from && t(this._focused_from) .focus(),
            delete this._focused_from
        },
        _toggle_multidate: function (t) {
            var e = this.dates.contains(t);
            if (t ? - 1 !== e ? this.dates.remove(e)  : this.dates.push(t)  : this.dates.clear(), 'number' == typeof this.o.multidate)
            for (; this.dates.length > this.o.multidate; ) this.dates.remove(0)
        },
        _setDate: function (t, e) {
            e && 'date' != e || this._toggle_multidate(t && new Date(t)),
            e && 'view' != e || (this.viewDate = t && new Date(t)),
            this.fill(),
            this.setValue(),
            this._trigger('changeDate');
            var n;
            this.isInput ? n = this.element : this.component && (n = this.element.find('input')),
            n && n.change(),
            !this.o.autoclose || e && 'date' != e || this.hide()
        },
        moveMonth: function (t, n) {
            if (!t) return e;
            if (!n) return t;
            var i,
            o,
            r = new Date(t.valueOf()),
            s = r.getUTCDate(),
            a = r.getUTCMonth(),
            l = Math.abs(n);
            if (n = n > 0 ? 1 : - 1, 1 == l) o = - 1 == n ? function () {
                return r.getUTCMonth() == a
            }
             : function () {
                return r.getUTCMonth() != i
            },
            i = a + n,
            r.setUTCMonth(i),
            (0 > i || i > 11) && (i = (i + 12) % 12);
             else {
                for (var u = 0; l > u; u++) r = this.moveMonth(r, n);
                i = r.getUTCMonth(),
                r.setUTCDate(s),
                o = function () {
                    return i != r.getUTCMonth()
                }
            }
            for (; o(); ) r.setUTCDate(--s),
            r.setUTCMonth(i);
            return r
        },
        moveYear: function (t, e) {
            return this.moveMonth(t, 12 * e)
        },
        dateWithinRange: function (t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function (t) {
            if (this.picker.is(':not(:visible)')) return void (27 == t.keyCode && this.show());
            var e,
            n,
            o,
            r = !1,
            s = this.focusDate || this.viewDate;
            switch (t.keyCode) {
            case 27:
                this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get( - 1) || this.viewDate, this.fill())  : this.hide(),
                t.preventDefault();
                break;
            case 37:
            case 39:
                if (!this.o.keyboardNavigation) break;
                e = 37 == t.keyCode ? - 1 : 1,
                t.ctrlKey ? (n = this.moveYear(this.dates.get( - 1) || i(), e), o = this.moveYear(s, e), this._trigger('changeYear', this.viewDate))  : t.shiftKey ? (n = this.moveMonth(this.dates.get( - 1) || i(), e), o = this.moveMonth(s, e), this._trigger('changeMonth', this.viewDate))  : (n = new Date(this.dates.get( - 1) || i()), n.setUTCDate(n.getUTCDate() + e), o = new Date(s), o.setUTCDate(s.getUTCDate() + e)),
                this.dateWithinRange(n) && (this.focusDate = this.viewDate = o, this.setValue(), this.fill(), t.preventDefault());
                break;
            case 38:
            case 40:
                if (!this.o.keyboardNavigation) break;
                e = 38 == t.keyCode ? - 1 : 1,
                t.ctrlKey ? (n = this.moveYear(this.dates.get( - 1) || i(), e), o = this.moveYear(s, e), this._trigger('changeYear', this.viewDate))  : t.shiftKey ? (n = this.moveMonth(this.dates.get( - 1) || i(), e), o = this.moveMonth(s, e), this._trigger('changeMonth', this.viewDate))  : (n = new Date(this.dates.get( - 1) || i()), n.setUTCDate(n.getUTCDate() + 7 * e), o = new Date(s), o.setUTCDate(s.getUTCDate() + 7 * e)),
                this.dateWithinRange(n) && (this.focusDate = this.viewDate = o, this.setValue(), this.fill(), t.preventDefault());
                break;
            case 32:
                s = this.focusDate || this.dates.get( - 1) || this.viewDate,
                this._toggle_multidate(s),
                r = !0,
                this.focusDate = null,
                this.viewDate = this.dates.get( - 1) || this.viewDate,
                this.setValue(),
                this.fill(),
                t.preventDefault();
                break;
            case 13:
                this.focusDate && (this._toggle_multidate(this.focusDate), r = !0, this.focusDate = null, this.viewDate = this.dates.get( - 1) || this.viewDate, this.setValue(), this.fill()),
                this.hide(),
                t.preventDefault();
                break;
            case 9:
                this.focusDate = null,
                this.viewDate = this.dates.get( - 1) || this.viewDate,
                this.fill(),
                this.hide()
            }
            if (r) {
                this.dates.length ? this._trigger('changeDate')  : this._trigger('clearDate');
                var a;
                this.isInput ? a = this.element : this.component && (a = this.element.find('input')),
                a && a.change()
            }
        },
        showMode: function (t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))),
            this.picker.find('>div') .hide() .filter('.datepicker-' + m.modes[this.viewMode].clsName) .css('display', 'block'),
            this.updateNavArrows()
        }
    };
    var h = function (e, n) {
        this.element = t(e),
        this.inputs = t.map(n.inputs, function (t) {
            return t.jquery ? t[0] : t
        }),
        delete n.inputs,
        t(this.inputs) .datepicker(n) .bind('changeDate', t.proxy(this.dateUpdated, this)),
        this.pickers = t.map(this.inputs, function (e) {
            return t(e) .data('datepicker')
        }),
        this.updateDates()
    };
    h.prototype = {
        updateDates: function () {
            this.dates = t.map(this.pickers, function (t) {
                return t.getUTCDate()
            }),
            this.updateRanges()
        },
        updateRanges: function () {
            var e = t.map(this.dates, function (t) {
                return t.valueOf()
            });
            t.each(this.pickers, function (t, n) {
                n.setRange(e)
            })
        },
        dateUpdated: function (e) {
            if (!this.updating) {
                this.updating = !0;
                var n = t(e.target) .data('datepicker'),
                i = n.getUTCDate(),
                o = t.inArray(e.target, this.inputs),
                r = this.inputs.length;
                if ( - 1 != o) {
                    if (t.each(this.pickers, function (t, e) {
                        e.getUTCDate() || e.setUTCDate(i)
                    }), i < this.dates[o])
                    for (; o >= 0 && i < this.dates[o]; ) this.pickers[o--].setUTCDate(i);
                     else if (i > this.dates[o])
                    for (; r > o && i > this.dates[o]; ) this.pickers[o++].setUTCDate(i);
                    this.updateDates(),
                    delete this.updating
                }
            }
        },
        remove: function () {
            t.map(this.pickers, function (t) {
                t.remove()
            }),
            delete this.element.data() .datepicker
        }
    };
    var c = t.fn.datepicker;
    t.fn.datepicker = function (n) {
        var i = Array.apply(null, arguments);
        i.shift();
        var o;
        return this.each(function () {
            var a = t(this),
            l = a.data('datepicker'),
            c = 'object' == typeof n && n;
            if (!l) {
                var p = r(this, 'date'),
                f = t.extend({
                }, d, p, c),
                m = s(f.language),
                g = t.extend({
                }, d, m, p, c);
                if (a.is('.input-daterange') || g.inputs) {
                    var v = {
                        inputs: g.inputs || a.find('input') .toArray()
                    };
                    a.data('datepicker', l = new h(this, t.extend(g, v)))
                } else a.data('datepicker', l = new u(this, g))
            }
            return 'string' == typeof n && 'function' == typeof l[n] && (o = l[n].apply(l, i), o !== e) ? !1 : void 0
        }),
        o !== e ? o : this
    };
    var d = t.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        daysOfWeekDisabled: [
        ],
        endDate: 1 / 0,
        forceParse: !0,
        format: 'mm/dd/yyyy',
        keyboardNavigation: !0,
        language: 'en',
        minViewMode: 0,
        multidate: !1,
        multidateSeparator: ',',
        orientation: 'auto',
        rtl: !1,
        startDate: - (1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0
    },
    p = t.fn.datepicker.locale_opts = [
        'format',
        'rtl',
        'weekStart'
    ];
    t.fn.datepicker.Constructor = u;
    var f = t.fn.datepicker.dates = {
        en: {
            days: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            daysShort: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sun'
            ],
            daysMin: [
                'Su',
                'Mo',
                'Tu',
                'We',
                'Th',
                'Fr',
                'Sa',
                'Su'
            ],
            months: [
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
                'December'
            ],
            monthsShort: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            today: 'Today',
            clear: 'Clear'
        }
    },
    m = {
        modes: [
            {
                clsName: 'days',
                navFnc: 'Month',
                navStep: 1
            },
            {
                clsName: 'months',
                navFnc: 'FullYear',
                navStep: 1
            },
            {
                clsName: 'years',
                navFnc: 'FullYear',
                navStep: 10
            }
        ],
        isLeapYear: function (t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        },
        getDaysInMonth: function (t, e) {
            return [31,
            m.isLeapYear(t) ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31][e]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function (t) {
            var e = t.replace(this.validParts, ' ') .split(' '),
            n = t.match(this.validParts);
            if (!e || !e.length || !n || 0 === n.length) throw new Error('Invalid date format.');
            return {
                separators: e,
                parts: n
            }
        },
        parseDate: function (i, o, r) {
            if (!i) return e;
            if (i instanceof Date) return i;
            if ('string' == typeof o && (o = m.parseFormat(o)), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) {
                var s,
                a,
                l = /([\-+]\d+)([dmwy])/,
                h = i.match(/([\-+]\d+)([dmwy])/g);
                i = new Date;
                for (var c = 0; c < h.length; c++) switch (s = l.exec(h[c]), a = parseInt(s[1]), s[2]) {
                case 'd':
                    i.setUTCDate(i.getUTCDate() + a);
                    break;
                case 'm':
                    i = u.prototype.moveMonth.call(u.prototype, i, a);
                    break;
                case 'w':
                    i.setUTCDate(i.getUTCDate() + 7 * a);
                    break;
                case 'y':
                    i = u.prototype.moveYear.call(u.prototype, i, a)
                }
                return n(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0)
            }
            var d,
            p,
            s,
            h = i && i.match(this.nonpunctuation) || [],
            i = new Date,
            g = {
            },
            v = [
                'yyyy',
                'yy',
                'M',
                'MM',
                'm',
                'mm',
                'd',
                'dd'
            ],
            y = {
                yyyy: function (t, e) {
                    return t.setUTCFullYear(e)
                },
                yy: function (t, e) {
                    return t.setUTCFullYear(2000 + e)
                },
                m: function (t, e) {
                    if (isNaN(t)) return t;
                    for (e -= 1; 0 > e; ) e += 12;
                    for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() != e; ) t.setUTCDate(t.getUTCDate() - 1);
                    return t
                },
                d: function (t, e) {
                    return t.setUTCDate(e)
                }
            };
            y.M = y.MM = y.mm = y.m,
            y.dd = y.d,
            i = n(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0);
            var _ = o.parts.slice();
            if (h.length != _.length && (_ = t(_) .filter(function (e, n) {
                return - 1 !== t.inArray(n, v)
            }) .toArray()), h.length == _.length) {
                for (var c = 0, b = _.length; b > c; c++) {
                    if (d = parseInt(h[c], 10), s = _[c], isNaN(d)) switch (s) {
                    case 'MM':
                        p = t(f[r].months) .filter(function () {
                            var t = this.slice(0, h[c].length),
                            e = h[c].slice(0, t.length);
                            return t == e
                        }),
                        d = t.inArray(p[0], f[r].months) + 1;
                        break;
                    case 'M':
                        p = t(f[r].monthsShort) .filter(function () {
                            var t = this.slice(0, h[c].length),
                            e = h[c].slice(0, t.length);
                            return t == e
                        }),
                        d = t.inArray(p[0], f[r].monthsShort) + 1
                    }
                    g[s] = d
                }
                for (var w, x, c = 0; c < v.length; c++) x = v[c],
                x in g && !isNaN(g[x]) && (w = new Date(i), y[x](w, g[x]), isNaN(w) || (i = w))
            }
            return i
        },
        formatDate: function (e, n, i) {
            if (!e) return '';
            'string' == typeof n && (n = m.parseFormat(n));
            var o = {
                d: e.getUTCDate(),
                D: f[i].daysShort[e.getUTCDay()],
                DD: f[i].days[e.getUTCDay()],
                m: e.getUTCMonth() + 1,
                M: f[i].monthsShort[e.getUTCMonth()],
                MM: f[i].months[e.getUTCMonth()],
                yy: e.getUTCFullYear() .toString() .substring(2),
                yyyy: e.getUTCFullYear()
            };
            o.dd = (o.d < 10 ? '0' : '') + o.d,
            o.mm = (o.m < 10 ? '0' : '') + o.m;
            for (var e = [
            ], r = t.extend([], n.separators), s = 0, a = n.parts.length; a >= s; s++) r.length && e.push(r.shift()),
            e.push(o[n.parts[s]]);
            return e.join('')
        },
        headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    m.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + m.headTemplate + '<tbody></tbody>' + m.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + '</table></div></div>',
    t.fn.datepicker.DPGlobal = m,
    t.fn.datepicker.noConflict = function () {
        return t.fn.datepicker = c,
        this
    },
    t(document) .on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (e) {
        var n = t(this);
        n.data('datepicker') || (e.preventDefault(), n.datepicker('show'))
    }),
    t(function () {
        t('[data-provide="datepicker-inline"]') .datepicker()
    })
}(window.jQuery),
define('enketo-widget/date/bootstrap3-datepicker/js/bootstrap-datepicker', function () {
}),
define('enketo-widget/date/datepicker-extended', [
    'enketo-js/Widget',
    'enketo-js/support',
    'jquery',
    'enketo-widget/date/bootstrap3-datepicker/js/bootstrap-datepicker'
], function (t, e, n) {
    'use strict';
    function i(e, n) {
        this.namespace = o,
        t.call(this, e, n),
        this._init()
    }
    var o = 'datepickerExtended';
    return i.prototype = Object.create(t.prototype),
    i.prototype.constructor = i,
    i.prototype._init = function () {
        var t = this,
        e = n(this.element) .parent('label'),
        i = e.hasClass('or-appearance-year') ? {
            format: 'yyyy',
            startView: 'decade',
            minViewMode: 'years'
        }
         : e.hasClass('or-appearance-month-year') ? {
            format: 'yyyy-mm',
            startView: 'year',
            minViewMode: 'months'
        }
         : {
            format: 'yyyy-mm-dd',
            startView: 'month',
            minViewMode: 'day'
        },
        o = this._createFakeDateInput(i.format);
        this._setManualHandler(o),
        this._setFocusHandler(o),
        this._setResetHandler(o),
        o.datepicker({
            format: i.format,
            autoclose: !0,
            todayHighlight: !0,
            startView: i.startView,
            minViewMode: i.minViewMode,
            orientation: 'top'
        }) .on('changeDate', function () {
            var e = n(this) .val();
            'decade' === i.startView && 4 === e.length ? e += '-01-01' : 'year' === i.startView && e.length < 8 && (e += '-01'),
            n(t.element) .val(e) .trigger('change') .blur()
        })
    },
    i.prototype._createFakeDateInput = function (t) {
        var e = n(this.element),
        i = this._formatDate(t, e.val()),
        o = n('<div class="widget date"><input class="ignore input-small" readonly="readonly" type="text" value="' + i + '" placeholder="' + t + '" /><button class="btn-icon-only btn-reset" type="button"><i class="icon icon-refresh"> </i></button></div>'),
        r = o.find('input');
        return e.hide() .after(o),
        r
    },
    i.prototype._formatDate = function (t, e) {
        if ('' == e) return '';
        var n = e.split('-');
        return 'yyyy' == t ? n[0] : 'yyyy-mm' == t ? n[0] + '-' + n[1] : e
    },
    i.prototype._setManualHandler = function (t) {
    },
    i.prototype._setResetHandler = function (t) {
        t.next('.btn-reset') .on('click', function () {
            t.val('') .trigger('changeDate') .datepicker('update')
        })
    },
    i.prototype._setFocusHandler = function (t) {
        var e = this;
        t.on('focus blur', function (t) {
            n(e.element) .trigger('fake' + t.type)
        })
    },
    n.fn[o] = function (t, r) {
        return t = t || {
        },
        this.each(function () {
            var s = n(this),
            a = s.data(o),
            l = /GT-P31[0-9]{2}.+AppleWebKit\/534\.30/;
            a || 'object' != typeof t || t.touch && e.inputtypes.date && !l.test(navigator.userAgent) ? a && 'string' == typeof t && a[t](this)  : s.data(o, a = new i(this, t, r))
        })
    },
    o
}),
function (t, e, n, i) {
    'use strict';
    var o = function (e, n) {
        this.widget = '',
        this.$element = t(e),
        this.defaultTime = n.defaultTime,
        this.disableFocus = n.disableFocus,
        this.disableMousewheel = n.disableMousewheel,
        this.isOpen = n.isOpen,
        this.minuteStep = n.minuteStep,
        this.modalBackdrop = n.modalBackdrop,
        this.orientation = n.orientation,
        this.secondStep = n.secondStep,
        this.showInputs = n.showInputs,
        this.showMeridian = n.showMeridian,
        this.showSeconds = n.showSeconds,
        this.template = n.template,
        this.appendWidgetTo = n.appendWidgetTo,
        this.showWidgetOnAddonClick = n.showWidgetOnAddonClick,
        this._init()
    };
    o.prototype = {
        constructor: o,
        _init: function () {
            var e = this;
            this.showWidgetOnAddonClick && (this.$element.parent() .hasClass('input-append') || this.$element.parent() .hasClass('input-prepend')) ? (this.$element.parent('.input-append, .input-prepend') .find('.add-on') .on({
                'click.timepicker': t.proxy(this.showWidget, this)
            }), this.$element.on({
                'focus.timepicker': t.proxy(this.highlightUnit, this),
                'click.timepicker': t.proxy(this.highlightUnit, this),
                'keydown.timepicker': t.proxy(this.elementKeydown, this),
                'blur.timepicker': t.proxy(this.blurElement, this),
                'mousewheel.timepicker DOMMouseScroll.timepicker': t.proxy(this.mousewheel, this)
            }))  : this.template ? this.$element.on({
                'focus.timepicker': t.proxy(this.showWidget, this),
                'click.timepicker': t.proxy(this.showWidget, this),
                'blur.timepicker': t.proxy(this.blurElement, this),
                'mousewheel.timepicker DOMMouseScroll.timepicker': t.proxy(this.mousewheel, this)
            })  : this.$element.on({
                'focus.timepicker': t.proxy(this.highlightUnit, this),
                'click.timepicker': t.proxy(this.highlightUnit, this),
                'keydown.timepicker': t.proxy(this.elementKeydown, this),
                'blur.timepicker': t.proxy(this.blurElement, this),
                'mousewheel.timepicker DOMMouseScroll.timepicker': t.proxy(this.mousewheel, this)
            }),
            this.template !== !1 ? this.$widget = t(this.getTemplate()) .on('click', t.proxy(this.widgetClick, this))  : this.$widget = !1,
            this.showInputs && this.$widget !== !1 && this.$widget.find('input') .each(function () {
                t(this) .on({
                    'click.timepicker': function () {
                        t(this) .select()
                    },
                    'keydown.timepicker': t.proxy(e.widgetKeydown, e),
                    'keyup.timepicker': t.proxy(e.widgetKeyup, e)
                })
            }),
            this.setDefaultTime(this.defaultTime)
        },
        blurElement: function () {
            this.highlightedUnit = null,
            this.updateFromElementVal()
        },
        clear: function () {
            this.hour = '',
            this.minute = '',
            this.second = '',
            this.meridian = '',
            this.$element.val('')
        },
        decrementHour: function () {
            if (this.showMeridian)
            if (1 === this.hour) this.hour = 12;
             else {
                if (12 === this.hour) return this.hour--,
                this.toggleMeridian();
                if (0 === this.hour) return this.hour = 11,
                this.toggleMeridian();
                this.hour--
            } else this.hour <= 0 ? this.hour = 23 : this.hour--
        },
        decrementMinute: function (t) {
            var e;
            e = t ? this.minute - t : this.minute - this.minuteStep,
            0 > e ? (this.decrementHour(), this.minute = e + 60)  : this.minute = e
        },
        decrementSecond: function () {
            var t = this.second - this.secondStep;
            0 > t ? (this.decrementMinute(!0), this.second = t + 60)  : this.second = t
        },
        elementKeydown: function (t) {
            switch (t.keyCode) {
            case 9:
            case 27:
                this.updateFromElementVal();
                break;
            case 37:
                t.preventDefault(),
                this.highlightPrevUnit();
                break;
            case 38:
                switch (t.preventDefault(), this.highlightedUnit) {
                case 'hour':
                    this.incrementHour(),
                    this.highlightHour();
                    break;
                case 'minute':
                    this.incrementMinute(),
                    this.highlightMinute();
                    break;
                case 'second':
                    this.incrementSecond(),
                    this.highlightSecond();
                    break;
                case 'meridian':
                    this.toggleMeridian(),
                    this.highlightMeridian()
                }
                this.update();
                break;
            case 39:
                t.preventDefault(),
                this.highlightNextUnit();
                break;
            case 40:
                switch (t.preventDefault(), this.highlightedUnit) {
                case 'hour':
                    this.decrementHour(),
                    this.highlightHour();
                    break;
                case 'minute':
                    this.decrementMinute(),
                    this.highlightMinute();
                    break;
                case 'second':
                    this.decrementSecond(),
                    this.highlightSecond();
                    break;
                case 'meridian':
                    this.toggleMeridian(),
                    this.highlightMeridian()
                }
                this.update()
            }
        },
        getCursorPosition: function () {
            var t = this.$element.get(0);
            if ('selectionStart' in t) return t.selectionStart;
            if (n.selection) {
                t.focus();
                var e = n.selection.createRange(),
                i = n.selection.createRange() .text.length;
                return e.moveStart('character', - t.value.length),
                e.text.length - i
            }
        },
        getTemplate: function () {
            var t,
            e,
            n,
            i,
            o,
            r;
            switch (this.showInputs ? (e = '<input type="text" class="bootstrap-timepicker-hour form-control" maxlength="2"/>', n = '<input type="text" class="bootstrap-timepicker-minute form-control" maxlength="2"/>', i = '<input type="text" class="bootstrap-timepicker-second form-control" maxlength="2"/>', o = '<input type="text" class="bootstrap-timepicker-meridian form-control" maxlength="2"/>')  : (e = '<span class="bootstrap-timepicker-hour"></span>', n = '<span class="bootstrap-timepicker-minute"></span>', i = '<span class="bootstrap-timepicker-second"></span>', o = '<span class="bootstrap-timepicker-meridian"></span>'), r = '<table><tr><td><a href="#" data-action="incrementHour"><i class="glyphicon glyphicon-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="glyphicon glyphicon-chevron-up"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="glyphicon glyphicon-chevron-up"></i></a></td>' : '') + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="glyphicon glyphicon-chevron-up"></i></a></td>' : '') + '</tr><tr><td>' + e + '</td> <td class="separator">:</td><td>' + n + '</td> ' + (this.showSeconds ? '<td class="separator">:</td><td>' + i + '</td>' : '') + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + o + '</td>' : '') + '</tr><tr><td><a href="#" data-action="decrementHour"><i class="glyphicon glyphicon-chevron-down"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="glyphicon glyphicon-chevron-down"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="glyphicon glyphicon-chevron-down"></i></a></td>' : '') + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="glyphicon glyphicon-chevron-down"></i></a></td>' : '') + '</tr></table>', this.template) {
            case 'modal':
                t = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? 'true' : 'false') + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">' + r + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
                break;
            case 'dropdown':
                t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + r + '</div>'
            }
            return t
        },
        getTime: function () {
            return '' === this.hour ? '' : this.hour + ':' + (1 === this.minute.toString() .length ? '0' + this.minute : this.minute) + (this.showSeconds ? ':' + (1 === this.second.toString() .length ? '0' + this.second : this.second)  : '') + (this.showMeridian ? ' ' + this.meridian : '')
        },
        hideWidget: function () {
            this.isOpen !== !1 && (this.$element.trigger({
                type: 'hide.timepicker',
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            }), 'modal' === this.template && this.$widget.modal ? this.$widget.modal('hide')  : this.$widget.removeClass('open'), t(n) .off('mousedown.timepicker, touchend.timepicker'), this.isOpen = !1, this.$widget.detach())
        },
        highlightUnit: function () {
            this.position = this.getCursorPosition(),
            this.position >= 0 && this.position <= 2 ? this.highlightHour()  : this.position >= 3 && this.position <= 5 ? this.highlightMinute()  : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond()  : this.highlightMeridian()  : this.position >= 9 && this.position <= 11 && this.highlightMeridian()
        },
        highlightNextUnit: function () {
            switch (this.highlightedUnit) {
            case 'hour':
                this.highlightMinute();
                break;
            case 'minute':
                this.showSeconds ? this.highlightSecond()  : this.showMeridian ? this.highlightMeridian()  : this.highlightHour();
                break;
            case 'second':
                this.showMeridian ? this.highlightMeridian()  : this.highlightHour();
                break;
            case 'meridian':
                this.highlightHour()
            }
        },
        highlightPrevUnit: function () {
            switch (this.highlightedUnit) {
            case 'hour':
                this.showMeridian ? this.highlightMeridian()  : this.showSeconds ? this.highlightSecond()  : this.highlightMinute();
                break;
            case 'minute':
                this.highlightHour();
                break;
            case 'second':
                this.highlightMinute();
                break;
            case 'meridian':
                this.showSeconds ? this.highlightSecond()  : this.highlightMinute()
            }
        },
        highlightHour: function () {
            var t = this.$element.get(0),
            e = this;
            this.highlightedUnit = 'hour',
            t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(0, 1)  : t.setSelectionRange(0, 2)
            }, 0)
        },
        highlightMinute: function () {
            var t = this.$element.get(0),
            e = this;
            this.highlightedUnit = 'minute',
            t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(2, 4)  : t.setSelectionRange(3, 5)
            }, 0)
        },
        highlightSecond: function () {
            var t = this.$element.get(0),
            e = this;
            this.highlightedUnit = 'second',
            t.setSelectionRange && setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(5, 7)  : t.setSelectionRange(6, 8)
            }, 0)
        },
        highlightMeridian: function () {
            var t = this.$element.get(0),
            e = this;
            this.highlightedUnit = 'meridian',
            t.setSelectionRange && (this.showSeconds ? setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(8, 10)  : t.setSelectionRange(9, 11)
            }, 0)  : setTimeout(function () {
                e.hour < 10 ? t.setSelectionRange(5, 7)  : t.setSelectionRange(6, 8)
            }, 0))
        },
        incrementHour: function () {
            if (this.showMeridian) {
                if (11 === this.hour) return this.hour++,
                this.toggleMeridian();
                12 === this.hour && (this.hour = 0)
            }
            return 23 === this.hour ? void (this.hour = 0)  : void this.hour++
        },
        incrementMinute: function (t) {
            var e;
            e = t ? this.minute + t : this.minute + this.minuteStep - this.minute % this.minuteStep,
            e > 59 ? (this.incrementHour(), this.minute = e - 60)  : this.minute = e
        },
        incrementSecond: function () {
            var t = this.second + this.secondStep - this.second % this.secondStep;
            t > 59 ? (this.incrementMinute(!0), this.second = t - 60)  : this.second = t
        },
        mousewheel: function (e) {
            if (!this.disableMousewheel) {
                e.preventDefault(),
                e.stopPropagation();
                var n = e.originalEvent.wheelDelta || - e.originalEvent.detail,
                i = null;
                switch ('mousewheel' === e.type ? i = - 1 * e.originalEvent.wheelDelta : 'DOMMouseScroll' === e.type && (i = 40 * e.originalEvent.detail), i && (e.preventDefault(), t(this) .scrollTop(i + t(this) .scrollTop())), this.highlightedUnit) {
                case 'minute':
                    n > 0 ? this.incrementMinute()  : this.decrementMinute(),
                    this.highlightMinute();
                    break;
                case 'second':
                    n > 0 ? this.incrementSecond()  : this.decrementSecond(),
                    this.highlightSecond();
                    break;
                case 'meridian':
                    this.toggleMeridian(),
                    this.highlightMeridian();
                    break;
                default:
                    n > 0 ? this.incrementHour()  : this.decrementHour(),
                    this.highlightHour()
                }
                return !1
            }
        },
        place: function () {
            if (!this.isInline) {
                var n = this.$widget.outerWidth(),
                i = this.$widget.outerHeight(),
                o = 10,
                r = t(e) .width(),
                s = t(e) .height(),
                a = t(e) .scrollTop(),
                l = parseInt(this.$element.parents() .filter(function () {
                }) .first() .css('z-index'), 10) + 10,
                u = this.component ? this.component.parent() .offset()  : this.$element.offset(),
                h = this.component ? this.component.outerHeight(!0)  : this.$element.outerHeight(!1),
                c = this.component ? this.component.outerWidth(!0)  : this.$element.outerWidth(!1),
                d = u.left,
                p = u.top;
                this.$widget.removeClass('timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left'),
                'auto' !== this.orientation.x ? (this.picker.addClass('datepicker-orient-' + this.orientation.x), 'right' === this.orientation.x && (d -= n - c))  : (this.$widget.addClass('timepicker-orient-left'), u.left < 0 ? d -= u.left - o : u.left + n > r && (d = r - n - o));
                var f,
                m,
                g = this.orientation.y;
                'auto' === g && (f = - a + u.top - i, m = a + s - (u.top + h + i), g = Math.max(f, m) === m ? 'top' : 'bottom'),
                this.$widget.addClass('timepicker-orient-' + g),
                'top' === g ? p += h : p -= i + parseInt(this.$widget.css('padding-top'), 10),
                this.$widget.css({
                    top: p,
                    left: d,
                    zIndex: l
                })
            }
        },
        remove: function () {
            t('document') .off('.timepicker'),
            this.$widget && this.$widget.remove(),
            delete this.$element.data() .timepicker
        },
        setDefaultTime: function (t) {
            if (this.$element.val()) this.updateFromElementVal();
             else if ('current' === t) {
                var e = new Date,
                n = e.getHours(),
                i = e.getMinutes(),
                o = e.getSeconds(),
                r = 'AM';
                0 !== o && (o = Math.ceil(e.getSeconds() / this.secondStep) * this.secondStep, 60 === o && (i += 1, o = 0)),
                0 !== i && (i = Math.ceil(e.getMinutes() / this.minuteStep) * this.minuteStep, 60 === i && (n += 1, i = 0)),
                this.showMeridian && (0 === n ? n = 12 : n >= 12 ? (n > 12 && (n -= 12), r = 'PM')  : r = 'AM'),
                this.hour = n,
                this.minute = i,
                this.second = o,
                this.meridian = r,
                this.update()
            } else t === !1 ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = 'AM')  : this.setTime(t)
        },
        setTime: function (t, e) {
            if (!t) return void this.clear();
            var n,
            i,
            o,
            r,
            s;
            'object' == typeof t && t.getMonth ? (i = t.getHours(), o = t.getMinutes(), r = t.getSeconds(), this.showMeridian && (s = 'AM', i > 12 && (s = 'PM', i %= 12), 12 === i && (s = 'PM')))  : (s = null !== t.match(/p/i) ? 'PM' : 'AM', t = t.replace(/[^0-9\:]/g, ''), n = t.split(':'), i = n[0] ? n[0].toString()  : n.toString(), o = n[1] ? n[1].toString()  : '', r = n[2] ? n[2].toString()  : '', i.length > 4 && (r = i.substr(4, 2)), i.length > 2 && (o = i.substr(2, 2), i = i.substr(0, 2)), o.length > 2 && (r = o.substr(2, 2), o = o.substr(0, 2)), r.length > 2 && (r = r.substr(2, 2)), i = parseInt(i, 10), o = parseInt(o, 10), r = parseInt(r, 10), isNaN(i) && (i = 0), isNaN(o) && (o = 0), isNaN(r) && (r = 0), this.showMeridian ? 1 > i ? i = 1 : i > 12 && (i = 12)  : (i >= 24 ? i = 23 : 0 > i && (i = 0), 13 > i && 'PM' === s && (i += 12)), 0 > o ? o = 0 : o >= 60 && (o = 59), this.showSeconds && (isNaN(r) ? r = 0 : 0 > r ? r = 0 : r >= 60 && (r = 59))),
            this.hour = i,
            this.minute = o,
            this.second = r,
            this.meridian = s,
            this.update(e)
        },
        showWidget: function () {
            if (!this.isOpen && !this.$element.is(':disabled')) {
                this.$widget.appendTo(this.appendWidgetTo);
                var e = this;
                t(n) .on('mousedown.timepicker, touchend.timepicker', function (t) {
                    e.$element.parent() .find(t.target) .length || e.$widget.is(t.target) || e.$widget.find(t.target) .length || e.hideWidget()
                }),
                this.$element.trigger({
                    type: 'show.timepicker',
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }),
                this.place(),
                this.disableFocus && this.$element.blur(),
                '' === this.hour && (this.defaultTime ? this.setDefaultTime(this.defaultTime)  : this.setTime('0:0:0')),
                'modal' === this.template && this.$widget.modal ? this.$widget.modal('show') .on('hidden', t.proxy(this.hideWidget, this))  : this.isOpen === !1 && this.$widget.addClass('open'),
                this.isOpen = !0
            }
        },
        toggleMeridian: function () {
            this.meridian = 'AM' === this.meridian ? 'PM' : 'AM'
        },
        update: function (t) {
            this.updateElement(),
            t || this.updateWidget(),
            this.$element.trigger({
                type: 'changeTime.timepicker',
                time: {
                    value: this.getTime(),
                    hours: this.hour,
                    minutes: this.minute,
                    seconds: this.second,
                    meridian: this.meridian
                }
            })
        },
        updateElement: function () {
            this.$element.val(this.getTime()) .change()
        },
        updateFromElementVal: function () {
            this.setTime(this.$element.val())
        },
        updateWidget: function () {
            if (this.$widget !== !1) {
                var t = this.hour,
                e = 1 === this.minute.toString() .length ? '0' + this.minute : this.minute,
                n = 1 === this.second.toString() .length ? '0' + this.second : this.second;
                this.showInputs ? (this.$widget.find('input.bootstrap-timepicker-hour') .val(t), this.$widget.find('input.bootstrap-timepicker-minute') .val(e), this.showSeconds && this.$widget.find('input.bootstrap-timepicker-second') .val(n), this.showMeridian && this.$widget.find('input.bootstrap-timepicker-meridian') .val(this.meridian))  : (this.$widget.find('span.bootstrap-timepicker-hour') .text(t), this.$widget.find('span.bootstrap-timepicker-minute') .text(e), this.showSeconds && this.$widget.find('span.bootstrap-timepicker-second') .text(n), this.showMeridian && this.$widget.find('span.bootstrap-timepicker-meridian') .text(this.meridian))
            }
        },
        updateFromWidgetInputs: function () {
            if (this.$widget !== !1) {
                var t = this.$widget.find('input.bootstrap-timepicker-hour') .val() + ':' + this.$widget.find('input.bootstrap-timepicker-minute') .val() + (this.showSeconds ? ':' + this.$widget.find('input.bootstrap-timepicker-second') .val()  : '') + (this.showMeridian ? this.$widget.find('input.bootstrap-timepicker-meridian') .val()  : '');
                this.setTime(t, !0)
            }
        },
        widgetClick: function (e) {
            e.stopPropagation(),
            e.preventDefault();
            var n = t(e.target),
            i = n.closest('a') .data('action');
            i && this[i](),
            this.update(),
            n.is('input') && n.get(0) .setSelectionRange(0, 2)
        },
        widgetKeydown: function (e) {
            var n = t(e.target),
            i = n.attr('class') .replace('bootstrap-timepicker-', '');
            switch (e.keyCode) {
            case 9:
                if (this.showMeridian && 'meridian' === i || this.showSeconds && 'second' === i || !this.showMeridian && !this.showSeconds && 'minute' === i) return this.hideWidget();
                break;
            case 27:
                this.hideWidget();
                break;
            case 38:
                switch (e.preventDefault(), i) {
                case 'hour':
                    this.incrementHour();
                    break;
                case 'minute':
                    this.incrementMinute();
                    break;
                case 'second':
                    this.incrementSecond();
                    break;
                case 'meridian':
                    this.toggleMeridian()
                }
                this.setTime(this.getTime()),
                n.get(0) .setSelectionRange(0, 2);
                break;
            case 40:
                switch (e.preventDefault(), i) {
                case 'hour':
                    this.decrementHour();
                    break;
                case 'minute':
                    this.decrementMinute();
                    break;
                case 'second':
                    this.decrementSecond();
                    break;
                case 'meridian':
                    this.toggleMeridian()
                }
                this.setTime(this.getTime()),
                n.get(0) .setSelectionRange(0, 2)
            }
        },
        widgetKeyup: function (t) {
            (65 === t.keyCode || 77 === t.keyCode || 80 === t.keyCode || 46 === t.keyCode || 8 === t.keyCode || t.keyCode >= 46 && t.keyCode <= 57) && this.updateFromWidgetInputs()
        }
    },
    t.fn.timepicker = function (e) {
        var n = Array.apply(null, arguments);
        return n.shift(),
        this.each(function () {
            var i = t(this),
            r = i.data('timepicker'),
            s = 'object' == typeof e && e;
            r || i.data('timepicker', r = new o(this, t.extend({
            }, t.fn.timepicker.defaults, s, t(this) .data()))),
            'string' == typeof e && r[e].apply(r, n)
        })
    },
    t.fn.timepicker.defaults = {
        defaultTime: 'current',
        disableFocus: !1,
        disableMousewheel: !1,
        isOpen: !1,
        minuteStep: 15,
        modalBackdrop: !1,
        orientation: {
            x: 'auto',
            y: 'auto'
        },
        secondStep: 15,
        showSeconds: !1,
        showInputs: !0,
        showMeridian: !0,
        template: 'dropdown',
        appendWidgetTo: 'body',
        showWidgetOnAddonClick: !0
    },
    t.fn.timepicker.Constructor = o
}(jQuery, window, document),
define('enketo-widget/time/bootstrap3-timepicker/js/bootstrap-timepicker', function () {
}),
define('enketo-widget/time/timepicker-extended', [
    'enketo-js/Widget',
    'enketo-js/support',
    'jquery',
    'enketo-widget/time/bootstrap3-timepicker/js/bootstrap-timepicker'
], function (t, e, n) {
    'use strict';
    function i(e, n) {
        this.namespace = o,
        t.call(this, e, n),
        this._init()
    }
    var o = 'timepickerExtended';
    return i.prototype = Object.create(t.prototype),
    i.prototype.constructor = i,
    i.prototype._init = function () {
        var t = n(this.element),
        e = n(this.element) .val(),
        i = n('<div class="widget bootstrap-timepicker"><input class="ignore timepicker-default input-small" readonly="readonly" type="text" value="' + e + '" placeholder="hh:mm" /><button class="btn-icon-only btn-reset" type="button"><i class="icon icon-refresh"> </i></button></div>'),
        o = i.find('.btn-reset'),
        r = i.find('input');
        t.next('.widget.bootstrap-timepicker-component') .remove(),
        t.hide() .after(i),
        r.timepicker({
            defaultTime: e.length > 0 ? e : 'current',
            showMeridian: !1
        }) .val(e) .closest('.widget') .find('input') .addClass('ignore'),
        r.on('change', function () {
            var e = n(this),
            i = /^[0-9]:/.test(e.val()) ? '0' + e.val()  : e.val();
            return i = /^[0-9]{2}:$/.test(i) ? i + '00' : i,
            t.val(i) .trigger('change') .blur(),
            !1
        }),
        o.on('click', function () {
            r.val('') .trigger('change')
        }),
        r.on('focus blur', function (e) {
            t.trigger('fake' + e.type)
        })
    },
    n.fn[o] = function (t, r) {
        return t = t || {
        },
        this.each(function () {
            var s = n(this),
            a = s.data(o);
            a || 'object' != typeof t || t.touch && e.inputtypes.time ? a && 'string' == typeof t && a[t](this)  : s.data(o, a = new i(this, t, r))
        })
    },
    o
}),
define('enketo-widget/datetime/datetimepicker-extended', [
    'enketo-js/Widget',
    'enketo-js/support',
    'jquery',
    'enketo-js/extend',
    'enketo-widget/date/bootstrap3-datepicker/js/bootstrap-datepicker',
    'enketo-widget/time/bootstrap3-timepicker/js/bootstrap-timepicker'
], function (t, e, n) {
    'use strict';
    function i(e, n) {
        this.namespace = o,
        t.call(this, e, n),
        this._init()
    }
    var o = 'datetimepickerExtended';
    return i.prototype = Object.create(t.prototype),
    i.prototype.constructor = i,
    i.prototype._init = function () {
        function t() {
            if (a.val() .length > 0 && l.val() .length > 0) {
                var t = a.val() .split('-'),
                n = l.val() .split(':');
                e.val(new Date(t[0], t[1] - 1, t[2], n[0], n[1]) .toISOLocalString()) .trigger('change') .blur()
            } else e.val('') .trigger('change') .blur()
        }
        var e = n(this.element),
        i = e.val() .length > 0 ? new Date(e.val()) .toISOLocalString()  : '',
        o = i.split('T'),
        r = o[0],
        s = o[1] && o[1].length > 4 ? o[1].substring(0, 5)  : '',
        a = this._createFakeDateInput(r),
        l = this._createFakeTimeInput(s);
        e.hide() .after('<div class="datetimepicker widget" />'),
        e.siblings('.datetimepicker') .append(a.closest('.date')) .append(l.closest('.bootstrap-timepicker')),
        a.datepicker({
            format: 'yyyy-mm-dd',
            autoclose: !0,
            todayHighlight: !0
        }),
        l.timepicker({
            defaultTime: s.length > 0 ? 'value' : 'current',
            showMeridian: !1
        }) .val(s) .closest('.widget') .find('input') .addClass('ignore'),
        this._setManualHandler(a),
        this._setFocusHandler(a.add(l)),
        a.on('change changeDate', function () {
            return t(),
            !1
        }),
        l.on('change', function () {
            return t(),
            !1
        }),
        l.next('.btn-reset') .on('click', function () {
            a.val('') .trigger('change') .datepicker('update'),
            l.val('') .trigger('change')
        })
    },
    i.prototype._createFakeDateInput = function (t) {
        var e = n('<div class="date"><input class="ignore input-small" type="text" readonly="readonly" value="' + t + '" placeholder="yyyy-mm-dd"/></div>'),
        i = e.find('input');
        return i
    },
    i.prototype._createFakeTimeInput = function (t) {
        var e = n('<div class="bootstrap-timepicker"><input class="ignore timepicker-default input-small" readonly="readonly" type="text" value="' + t + '" placeholder="hh:mm"/><button class="btn-icon-only btn-reset" type="button"><i class="icon icon-refresh"> </i></button></div>'),
        i = e.find('input');
        return i
    },
    i.prototype._setManualHandler = function () {
    },
    i.prototype._setFocusHandler = function (t) {
        var e = this;
        t.on('focus blur', function (t) {
            n(e.element) .trigger('fake' + t.type)
        })
    },
    n.fn[o] = function (t, r) {
        return t = t || {
        },
        this.each(function () {
            var s = n(this),
            a = s.data(o),
            l = /GT-P31[0-9]{2}.+AppleWebKit\/534\.30/;
            a || 'object' != typeof t || t.touch && e.inputtypes.datetime && !l.test(navigator.userAgent) ? a && 'string' == typeof t && a[t](this)  : s.data(o, a = new i(this, t, r))
        })
    },
    o
}),
define('enketo-widget/mediagrid/mediagridpicker', function () {
}),
define('enketo-widget/file/filepicker', [
    'jquery',
    'enketo-js/Widget',
    'file-manager'
], function (t, e, n) {
    'use strict';
    function i(t, n, i) {
        i && (i.stopPropagation(), i.preventDefault()),
        this.namespace = o,
        e.call(this, t, n),
        this._init()
    }
    var o = 'filepicker';
    return i.prototype = Object.create(e.prototype),
    i.prototype.constructor = i,
    i.prototype._init = function () {
        var e = t(this.element),
        o = e.attr('data-loaded-file-name'),
        r = this;
        this.mediaType = e.attr('accept'),
        this.mediaType || (this.mediaType = e.attr('data')),
        e.attr('disabled', 'disabled') .addClass('transparent') .parent() .addClass('with-media clearfix'),
        this.$widget = t('<div class="widget file-picker"><div class="fake-file-input"></div><div class="file-feedback"></div></div>') .insertAfter(e);
        var s = t('<div class="file-preview"></div>');
        s.insertAfter(e.parent()),
        this.$feedback = this.$widget.find('.file-feedback'),
        this.$preview = s;
        var a = t('<span class="get_image_link"></span>');
        if (a.insertAfter(this.$preview), this.$downloadLink = a, this.$fakeInput = this.$widget.find('.fake-file-input'), this.$deleteButton = t('<button class="remove-file"> Remove </button>'), i.prototype._showRemoveButton = function (t, e) {
            var n = this;
            n.$deleteButton.insertAfter(t),
            n.$deleteButton.click(function () {
                e.val(''),
                n._showPreview(null),
                n._showFileName(null),
                n.$deleteButton.remove(),
                e.removeAttr('data-loaded-file-name'),
                e.trigger('change.file'),
                n.$downloadLink.remove()
            })
        }, this.showDownloadLinkAndPreview = function (n) {
            var i = t('document') .context.defaultView.surveyResponseId,
            o = '/download/attachment/' + i + '/';
            'image/*' == this.mediaType && this._showPreview(o + 'preview_' + n, this.mediaType),
            this.$downloadLink.append('<a href="' + o + n + '" class="get_image_link">Download file</a>'),
            this._showRemoveButton(this.$preview, e)
        }, o && (this._showFileName(o, this.mediaType), this.showDownloadLinkAndPreview(o)), !n || !n.isSupported()) {
            var l = n.notSupportedAdvisoryMsg ? n.notSupportedAdvisoryMsg : '';
            return void this._showFeedback('Media questions are not supported in this browser. ' + l, 'warning')
        }
        n.isWaitingForPermissions() && this._showFeedback('Waiting for user permissions.', 'warning'),
        n.init() .then(function () {
            r._showFeedback(),
            r._changeListener(),
            e.removeAttr('disabled'),
            o && n.getFileUrl(o) .then(function (t) {
                r._showPreview(t, r.mediaType)
            }) ['catch'](function () {
                r._showFeedback('File "' + o + '" could not be found (leave unchanged if already submitted and you want to preserve it).', 'error')
            })
        }) ['catch'](function (t) {
            r._showFeedback(t.message, 'error')
        })
    },
    i.prototype._getMaxSubmissionSize = function () {
        var e = t(document) .data('maxSubmissionSize');
        return e || 5242880
    },
    i.prototype._changeListener = function () {
        var e,
        i = this;
        this.element.onclick = function () {
            return e = t(this) [0].files,
            !0
        },
        t(this.element) .on('change.propagate.' + this.namespace, function (o) {
            var r,
            s,
            a = t(this),
            l = a.attr('data-loaded-file-name');
            return r = this.files[0],
            void 0 == r ? (o.stopPropagation(), '' == a.val() ? (i.$preview.empty(), i.$deleteButton.remove(), i.$downloadLink.remove(), t(this) .removeAttr('data-loaded-file-name'), i._showFileName(null), a.trigger('change.file'))  : t(this) [0].files = e, o.preventDefault(), !1)  : 'propagate' === o.namespace ? (a.trigger('change.file'), !1)  : (o.stopImmediatePropagation(), r = this.files[0], s = i._getFileName(r), void n.getFileUrl(r) .then(function (t) {
                i._showPreview(t, i.mediaType),
                i._showRemoveButton(i.$preview, a),
                i._showFeedback(''),
                i._showFileName(s),
                l && l !== s && a.removeAttr('data-loaded-file-name'),
                a.trigger('change.propagate')
            }) ['catch'](function (t) {
                a.val('') .trigger('change.propagate'),
                i._showFileName(''),
                i._showPreview(null),
                i._showFileName(null),
                i._showFeedback(t.message, 'error'),
                a.trigger('change.passthrough')
            }))
        })
    },
    i.prototype._getFileName = function (t) {
        return 'object' == typeof t && t.name ? t.name : ''
    },
    i.prototype._showFileName = function (t) {
        this.$fakeInput.text(t)
    },
    i.prototype._showFeedback = function (t, e) {
        t = t || '',
        e = e || '',
        this.$feedback.text(t) .attr('class', 'file-feedback ' + e)
    },
    i.prototype._showPreview = function (e, n) {
        var i;
        switch (n) {
        case 'image/*':
            i = t('<img />');
            break;
        case 'audio/*':
            i = t('<audio controls="controls"/>');
            break;
        case 'video/*':
            i = t('<video controls="controls"/>');
            break;
        default:
            i = t('<span>No preview for this mediatype</span>')
        }
        this.$preview.empty(),
        e && (this.$downloadLink.empty(), this.$preview.append(i.attr('src', e)))
    },
    t.fn[o] = function (e, n) {
        return e = e || {
        },
        this.each(function () {
            var r = t(this),
            s = r.data(o);
            s || 'object' != typeof e ? s && 'string' == typeof e && s[e](this)  : r.data(o, s = new i(this, e, n))
        })
    },
    o
}),
define('enketo-widget/select-likert/likertitem', function () {
}),
function (t) {
    'function' == typeof define && define.amd && define.amd.jQuery ? define('bootstrap-slider', [
        'jquery'
    ], t)  : t(jQuery)
}(function (t) {
    function e(e, i) {
        if (s[e]) {
            var o = n(this),
            r = s[e].apply(o, i);
            return 'undefined' == typeof r ? t(this)  : r
        }
        throw new Error('method \'' + e + '()\' does not exist for slider.')
    }
    function n(e) {
        var n = t(e) .data('slider');
        if (n && n instanceof r) return n;
        throw new Error(o.callingContextNotSliderInstance)
    }
    function i(e) {
        var n = t(this);
        return n.each(function () {
            var n = t(this),
            i = n.data('slider'),
            o = 'object' == typeof e && e;
            i && !o && (o = {
            }, t.each(t.fn.slider.defaults, function (t) {
                o[t] = i[t]
            })),
            n.data('slider', new r(this, t.extend({
            }, t.fn.slider.defaults, o)))
        }),
        n
    }
    var o = {
        formatInvalidInputErrorMsg: function (t) {
            return 'Invalid input value \'' + t + '\' passed in'
        },
        callingContextNotSliderInstance: 'Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method'
    },
    r = function (e, n) {
        var i = this.element = t(e) .hide(),
        o = t(e) [0].style.width,
        r = !1,
        s = this.element.next('.widget');
        switch (s.hasClass('slider') === !0 ? (r = !0, this.picker = s)  : this.picker = t('<div class="slider widget"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div></div>') .insertAfter(this.element), this.id = this.element.data('slider-id') || n.id, this.id && (this.picker[0].id = this.id), ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch) && (this.touchCapable = !0), r === !0 && (this.picker.removeClass('slider-horizontal'), this.picker.removeClass('slider-vertical')), this.orientation = this.element.data('slider-orientation') || n.orientation, this.orientation) {
        case 'vertical':
            this.picker.addClass('slider-vertical'),
            this.stylePos = 'top',
            this.mousePos = 'pageY',
            this.sizePos = 'offsetHeight';
            break;
        default:
            this.picker.addClass('slider-horizontal') .css('width', o),
            this.orientation = 'horizontal',
            this.stylePos = 'left',
            this.mousePos = 'pageX',
            this.sizePos = 'offsetWidth'
        }
        var a = this;
        switch (t.each(['min',
        'max',
        'step',
        'precision',
        'value',
        'reversed',
        'handle'], function (t, e) {
            'undefined' != typeof i.data('slider-' + e) ? a[e] = i.data('slider-' + e)  : 'undefined' != typeof n[e] ? a[e] = n[e] : 'undefined' != typeof i.prop(e) ? a[e] = i.prop(e)  : a[e] = 0
        }), this.value instanceof Array ? r && !this.range ? this.value = this.value[0] : this.range = !0 : this.range && (this.value = [
            this.value,
            this.max
        ]), this.selection = this.element.data('slider-selection') || n.selection, this.selectionEl = this.picker.find('.slider-selection'), 'none' === this.selection && this.selectionEl.addClass('hide'), this.selectionElStyle = this.selectionEl[0].style, this.handle1 = this.picker.find('.slider-handle:first'), this.handle1Stype = this.handle1[0].style, this.handle2 = this.picker.find('.slider-handle:last'), this.handle2Stype = this.handle2[0].style, r === !0 && (this.handle1.removeClass('round triangle'), this.handle2.removeClass('round triangle hide')), this.handle) {
        case 'round':
            this.handle1.addClass('round'),
            this.handle2.addClass('round');
            break;
        case 'triangle':
            this.handle1.addClass('triangle'),
            this.handle2.addClass('triangle')
        }
        this.offset = this.picker.offset(),
        this.size = this.picker[0][this.sizePos],
        this.formater = n.formater,
        this.setValue(this.value),
        this.handle1.on({
            keydown: t.proxy(this.keydown, this, 0)
        }),
        this.handle2.on({
            keydown: t.proxy(this.keydown, this, 1)
        }),
        this.touchCapable && this.picker.on({
            touchstart: t.proxy(this.mousedown, this)
        }),
        this.picker.on({
            mousedown: t.proxy(this.mousedown, this)
        }),
        this.enabled = n.enabled && (void 0 === this.element.data('slider-enabled') || this.element.data('slider-enabled') === !0),
        this.enabled ? this.enable()  : this.disable(),
        this.natural_arrow_keys = this.element.data('slider-natural_arrow_keys') || n.natural_arrow_keys
    };
    r.prototype = {
        constructor: r,
        over: !1,
        inDrag: !1,
        layout: function () {
            var t;
            t = this.reversed ? [
                100 - this.percentage[0],
                this.percentage[1]
            ] : [
                this.percentage[0],
                this.percentage[1]
            ],
            this.handle1Stype[this.stylePos] = t[0] + '%',
            this.handle2Stype[this.stylePos] = t[1] + '%',
            'vertical' === this.orientation ? (this.selectionElStyle.top = Math.min(t[0], t[1]) + '%', this.selectionElStyle.height = Math.abs(t[0] - t[1]) + '%')  : (this.selectionElStyle.left = Math.min(t[0], t[1]) + '%', this.selectionElStyle.width = Math.abs(t[0] - t[1]) + '%')
        },
        mousedown: function (e) {
            if (!this.isEnabled()) return !1;
            this.touchCapable && 'touchstart' === e.type && (e = e.originalEvent),
            this.triggerFocusOnHandle(),
            this.offset = this.picker.offset(),
            this.size = this.picker[0][this.sizePos];
            var n = this.getPercentage(e);
            if (this.range) {
                var i = Math.abs(this.percentage[0] - n),
                o = Math.abs(this.percentage[1] - n);
                this.dragged = o > i ? 0 : 1
            } else this.dragged = 0;
            this.percentage[this.dragged] = this.reversed ? 100 - n : n,
            this.layout(),
            this.touchCapable && t(document) .on({
                touchmove: t.proxy(this.mousemove, this),
                touchend: t.proxy(this.mouseup, this)
            }),
            t(document) .on({
                mousemove: t.proxy(this.mousemove, this),
                mouseup: t.proxy(this.mouseup, this)
            }),
            this.inDrag = !0;
            var r = this.calculateValue();
            return this.element.trigger({
                type: 'slideStart',
                value: r
            }) .data('value', r) .prop('value', r),
            this.setValue(r),
            !0
        },
        triggerFocusOnHandle: function (t) {
            0 === t && this.handle1.focus(),
            1 === t && this.handle2.focus()
        },
        keydown: function (t, e) {
            if (!this.isEnabled()) return !1;
            var n;
            switch (e.which) {
            case 37:
            case 40:
                n = - 1;
                break;
            case 39:
            case 38:
                n = 1
            }
            if (n) {
                this.natural_arrow_keys && ('vertical' === this.orientation && !this.reversed || 'horizontal' === this.orientation && this.reversed) && (n = - 1 * n);
                var i = n * this.percentage[2],
                o = this.percentage[t] + i;
                o > 100 ? o = 100 : 0 > o && (o = 0),
                this.dragged = t,
                this.adjustPercentageForRangeSliders(o),
                this.percentage[this.dragged] = o,
                this.layout();
                var r = this.calculateValue();
                return this.element.trigger({
                    type: 'slideStart',
                    value: r
                }) .data('value', r) .prop('value', r),
                this.setValue(r, !0),
                this.element.trigger({
                    type: 'slideStop',
                    value: r
                }) .data('value', r) .prop('value', r),
                !1
            }
        },
        mousemove: function (t) {
            if (!this.isEnabled()) return !1;
            this.touchCapable && 'touchmove' === t.type && (t = t.originalEvent);
            var e = this.getPercentage(t);
            this.adjustPercentageForRangeSliders(e),
            this.percentage[this.dragged] = this.reversed ? 100 - e : e,
            this.layout();
            var n = this.calculateValue();
            return this.setValue(n, !0),
            !1
        },
        adjustPercentageForRangeSliders: function (t) {
            this.range && (0 === this.dragged && this.percentage[1] < t ? (this.percentage[0] = this.percentage[1], this.dragged = 1)  : 1 === this.dragged && this.percentage[0] > t && (this.percentage[1] = this.percentage[0], this.dragged = 0))
        },
        mouseup: function () {
            if (!this.isEnabled()) return !1;
            this.touchCapable && t(document) .off({
                touchmove: this.mousemove,
                touchend: this.mouseup
            }),
            t(document) .off({
                mousemove: this.mousemove,
                mouseup: this.mouseup
            }),
            this.inDrag = !1;
            var e = this.calculateValue();
            return this.layout(),
            this.element.data('value', e) .prop('value', e) .trigger({
                type: 'slideStop',
                value: e
            }),
            !1
        },
        calculateValue: function () {
            var t;
            return this.range ? (t = [
                this.min,
                this.max
            ], 0 !== this.percentage[0] && (t[0] = Math.max(this.min, this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step), t[0] = this.applyPrecision(t[0])), 100 !== this.percentage[1] && (t[1] = Math.min(this.max, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step), t[1] = this.applyPrecision(t[1])), this.value = t)  : (t = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, t < this.min ? t = this.min : t > this.max && (t = this.max), t = parseFloat(t), t = this.applyPrecision(t), this.value = [
                t,
                this.value[1]
            ]),
            t
        },
        applyPrecision: function (t) {
            var e = this.precision || this.getNumDigitsAfterDecimalPlace(this.step);
            return this.applyToFixedAndParseFloat(t, e)
        },
        getNumDigitsAfterDecimalPlace: function (t) {
            var e = ('' + t) .match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? + e[2] : 0))  : 0
        },
        applyToFixedAndParseFloat: function (t, e) {
            var n = t.toFixed(e);
            return parseFloat(n)
        },
        getPercentage: function (t) {
            !this.touchCapable || 'touchstart' !== t.type && 'touchmove' !== t.type || (t = t.touches[0]);
            var e = 100 * (t[this.mousePos] - this.offset[this.stylePos]) / this.size;
            return e = Math.round(e / this.percentage[2]) * this.percentage[2],
            Math.max(0, Math.min(100, e))
        },
        getValue: function () {
            return this.range ? this.value : this.value[0]
        },
        setValue: function (t, e) {
            if (t || (t = 0), this.value = this.validateInputValue(t), this.range ? (this.value[0] = this.applyPrecision(this.value[0]), this.value[1] = this.applyPrecision(this.value[1]), this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1])))  : (this.value = this.applyPrecision(this.value), this.value = [
                Math.max(this.min, Math.min(this.max, this.value))
            ], this.handle2.addClass('hide'), 'after' === this.selection ? this.value[1] = this.max : this.value[1] = this.min), this.diff = this.max - this.min, this.diff > 0 ? this.percentage = [
                100 * (this.value[0] - this.min) / this.diff,
                100 * (this.value[1] - this.min) / this.diff,
                100 * this.step / this.diff
            ] : this.percentage = [
                0,
                0,
                100
            ], this.layout(), e === !0) {
                var n = this.range ? this.value : this.value[0];
                this.element.trigger({
                    type: 'slide',
                    value: n
                }) .data('value', n) .prop('value', n)
            }
        },
        validateInputValue: function (e) {
            if ('number' == typeof e) return e;
            if (e instanceof Array) return t.each(e, function (t, e) {
                if ('number' != typeof e) throw new Error(o.formatInvalidInputErrorMsg(e))
            }),
            e;
            throw new Error(o.formatInvalidInputErrorMsg(e))
        },
        destroy: function () {
            this.handle1.off(),
            this.handle2.off(),
            this.element.off() .show(),
            this.picker.off() .remove(),
            t(this.element) .removeData('slider')
        },
        disable: function () {
            this.enabled = !1,
            this.handle1.removeAttr('tabindex'),
            this.handle2.removeAttr('tabindex'),
            this.picker.addClass('slider-disabled'),
            this.element.trigger('slideDisabled')
        },
        enable: function () {
            this.enabled = !0,
            this.handle1.attr('tabindex', 0),
            this.handle2.attr('tabindex', 0),
            this.picker.removeClass('slider-disabled'),
            this.element.trigger('slideEnabled')
        },
        toggle: function () {
            this.enabled ? this.disable()  : this.enable()
        },
        isEnabled: function () {
            return this.enabled
        },
        setAttribute: function (t, e) {
            this[t] = e
        },
        getAttribute: function (t) {
            return this[t]
        }
    };
    var s = {
        getValue: r.prototype.getValue,
        setValue: r.prototype.setValue,
        setAttribute: r.prototype.setAttribute,
        getAttribute: r.prototype.getAttribute,
        destroy: r.prototype.destroy,
        disable: r.prototype.disable,
        enable: r.prototype.enable,
        toggle: r.prototype.toggle,
        isEnabled: r.prototype.isEnabled
    };
    t.fn.slider = function (t) {
        if ('string' == typeof t && 'refresh' !== t) {
            var n = Array.prototype.slice.call(arguments, 1);
            return e.call(this, t, n)
        }
        return i.call(this, t)
    },
    t.fn.slider.defaults = {
        min: 0,
        max: 10,
        step: 1,
        precision: 0,
        orientation: 'horizontal',
        value: 5,
        range: !1,
        selection: 'before',
        natural_arrow_keys: !1,
        handle: 'round',
        reversed: !1,
        enabled: !0,
        formater: function (t) {
            return t
        }
    },
    t.fn.slider.Constructor = r
}),
define('enketo-widget/distress/distresspicker', [
    'enketo-js/Widget',
    'jquery',
    'bootstrap-slider'
], function (t, e) {
    'use strict';
    function n(e, n, o) {
        this.namespace = i,
        t.call(this, e, n),
        this._init()
    }
    var i = 'distresspicker';
    return n.prototype = Object.create(t.prototype),
    n.prototype.constructor = n,
    n.prototype._init = function () {
        var t = 'decimal' === e(this.element) .attr('data-type-xml') ? 0.1 : 1,
        n = Number(this.element.value) || - 1;
        e(this.element) .slider({
            reversed: !0,
            min: - 1,
            max: 10,
            orientation: 'vertical',
            step: t,
            value: n
        }),
        this.$widget = e(this.element) .next('.slider'),
        this._addBulb(),
        this._addScale(),
        this._setChangeHandler()
    },
    n.prototype._addBulb = function () {
        this.$widget.append('<div class="bulb"><div class="inner"></div></div>')
    },
    n.prototype._addScale = function () {
        for (var t = e('<div class="scale"></div>'), n = 10; n >= - 1; n--) t.append('<div class="number"><div class="value">' + n + '</div></div>');
        this.$widget.prepend(t)
    },
    n.prototype._setChangeHandler = function () {
        e(this.element) .on('slideStop.' + this.namespace, function (t) {
            - 1 === this.value && (this.value = ''),
            e(this) .trigger('change')
        })
    },
    n.prototype.disable = function () {
        console.log('disableing', this.element),
        e(this.element) .slider('disable') .slider('setValue', this.element.value)
    },
    n.prototype.enable = function () {
        e(this.element) .slider('enable')
    },
    e.fn[i] = function (t, o) {
        return this.each(function () {
            var r = e(this),
            s = e(this) .data(i);
            t = t || {
            },
            s || 'object' != typeof t ? s && 'string' == typeof t && s[t](this)  : r.data(i, s = new n(this, t, o))
        })
    },
    i
}),
define('enketo-widget/horizontal-choices/horizontalchoices', [
    'jquery',
    'enketo-js/Widget'
], function (t, e) {
    'use strict';
    function n(t, n) {
        this.namespace = i,
        e.call(this, t, i, n),
        this._init()
    }
    var i = 'horizontalChoices';
    return n.prototype = Object.create(e.prototype),
    n.prototype.constructor = n,
    n.prototype._init = function () {
        t(this.element) .find('.option-wrapper') .each(function () {
            var e = t(this),
            n = e.find('label');
            n.length % 3 === 2 && e.append('<label class="filler"></label>')
        })
    },
    n.prototype.destroy = function () {
    },
    t.fn[i] = function (e, o) {
        return e = e || {
        },
        this.each(function () {
            var r = t(this),
            s = r.data(i);
            s || 'object' != typeof e ? s && 'string' == typeof e && s[e](this)  : r.data(i, s = new n(this, e, o))
        })
    },
    i
}),
define('text!enketo-widget/note/config.json', [
], function () {
    return '{\n    "stylesheet": "note.scss",\n    "selector": ".note",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/select-desktop/config.json', [
], function () {
    return '{\n    "stylesheet": "selectpicker.scss",\n    "selector": "select:not(#form-languages)",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/select-mobile/config.json', [
], function () {
    return '{\n    "stylesheet": "selectpicker.scss",\n    "selector": "select[multiple]",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/geo/config.json', [
], function () {
    return'{\n    "stylesheet": "geopicker.scss",\n    "selector": "input[data-type-xml=\\"geopoint\\"], input[data-type-xml=\\"geotrace\\"], input[data-type-xml=\\"geoshape\\"]",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/table/config.json', [
], function () {
    return '{\n    "stylesheet": "tablewidget.scss",\n    "selector": null,\n    "options": {}\n}\n'
}),
define('text!enketo-widget/radio/config.json', [
], function () {
    return '{\n    "stylesheet": "radiopicker.scss",\n    "selector": "form",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/date/config.json', [
], function () {
    return '{\n    "stylesheet": "datepicker-extended.scss",\n    "selector": "input[type=\\"date\\"]:not([readonly])",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/time/config.json', [
], function () {
    return '{\n    "stylesheet": "timepicker-extended.scss",\n    "selector": "input[type=\\"time\\"]:not([readonly])",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/datetime/config.json', [
], function () {
    return '{\n    "stylesheet": "datetimepicker-extended.scss",\n    "selector": "input[type=\\"datetime\\"]:not([readonly])",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/mediagrid/config.json', [
], function () {
    return '{\n    "stylesheet": "mediagridpicker.scss",\n    "selector": null,\n    "options": {}\n}\n'
}),
define('text!enketo-widget/file/config.json', [
], function () {
    return '{\n    "stylesheet": "filepicker.scss",\n    "selector": "input[type=\\"file\\"]",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/select-likert/config.json', [
], function () {
    return '{\n    "stylesheet": "likertitem.scss",\n    "selector": null,\n    "options": {}\n}\n'
}),
define('text!enketo-widget/distress/config.json', [
], function () {
    return '{\n    "stylesheet": "distresspicker.scss",\n    "selector": ".or-appearance-distress input[type=\'number\']",\n    "options": {}\n}\n'
}),
define('text!enketo-widget/horizontal-choices/config.json', [
], function () {
    return '{\n    "stylesheet": "horizontalchoices.scss",\n    "selector": ".or-appearance-horizontal",\n    "options": {}\n}\n'
});
