function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(O,t),l?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function O(){var e=p();if(S(e))return h(e);a=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function h(e){return a=void 0,v&&o?b(e):(o=r=void 0,u)}function w(){var e=p(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(O,t),b(f)}return void 0===a&&(a=setTimeout(O,t)),u}return t=g(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},w.flush=function(){return void 0===a?u:h(p())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};document.querySelector("input"),document.querySelector("textarea");const b=document.querySelector("form");!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&Object.keys(t).map((e=>{document.querySelector(`[name='${e}']`).value=t[e]}))}(),b.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j)),console.log(j)}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")}));const j={};
//# sourceMappingURL=03-feedback.f3d3e86f.js.map
