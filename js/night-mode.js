(()=>{var e,t={612:()=>{var e=document.querySelector("#nightMode");e.addEventListener("click",(function(){var t=document.documentElement;t.classList.contains("dark-mode")?(t.classList.remove("dark-mode"),e.textContent="Toggle dark mode",localStorage.setItem("ERTdarkMode","false")):(t.classList.add("dark-mode"),e.textContent="Toggle light mode",localStorage.setItem("ERTdarkMode","true"))}));!function(){var t=localStorage.getItem("ERTdarkMode");if(null===t)return!1;"true"===t&&(document.documentElement.classList.add("dark-mode"),e.textContent="Toggle light mode")}()},685:()=>{},437:()=>{}},o={};function r(e){var a=o[e];if(void 0!==a)return a.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,a,n)=>{if(!o){var d=1/0;for(c=0;c<e.length;c++){for(var[o,a,n]=e[c],l=!0,i=0;i<o.length;i++)(!1&n||d>=n)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(l=!1,n<d&&(d=n));if(l){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,a,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={995:0,938:0,682:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[d,l,i]=o,s=0;if(d.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(i)var c=i(r)}for(t&&t(o);s<d.length;s++)n=d[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.O(void 0,[938,682],(()=>r(612))),r.O(void 0,[938,682],(()=>r(685)));var a=r.O(void 0,[938,682],(()=>r(437)));a=r.O(a)})();