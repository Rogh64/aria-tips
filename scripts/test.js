!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function t(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function n(e){return e.nodeName.toLowerCase()}function r(e,t){var n=e&&e.exec(t);return n&&0==n.index}function i(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return w(e)||/no(-?)highlight|plain|text/.test(e)})[0]}function o(e,t){var n,r={};for(n in e)r[n]=e[n];if(t)for(n in t)r[n]=t[n];return r}function a(e){var t=[];return function r(e,i){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?i+=o.nodeValue.length:1==o.nodeType&&(t.push({event:"start",offset:i,node:o}),i=r(o,i),n(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:i,node:o}));return i}(e,0),t}function u(e,r,i){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function a(e){function r(e){return" "+e.nodeName+'="'+t(e.value)+'"'}l+="<"+n(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function u(e){l+="</"+n(e)+">"}function c(e){("start"==e.event?a:u)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var d=o();if(l+=t(i.substr(s,d[0].offset-s)),s=d[0].offset,d==e){f.reverse().forEach(u);do c(d.splice(0,1)[0]),d=o();while(d==e&&d.length&&d[0].offset==s);f.reverse().forEach(a)}else"start"==d[0].event?f.push(d[0].node):f.pop(),c(d.splice(0,1)[0])}return l+t(i.substr(s))}function c(e){function t(e){return e&&e.source||e}function n(n,r){return new RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(i,a){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){var u={},c=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");u[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof i.k?c("keyword",i.k):Object.keys(i.k).forEach(function(e){c(e,i.k[e])}),i.k=u}i.lR=n(i.l||/\b\w+\b/,!0),a&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=n(i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=n(i.e)),i.tE=t(i.e)||"",i.eW&&a.tE&&(i.tE+=(i.e?"|":"")+a.tE)),i.i&&(i.iR=n(i.i)),void 0===i.r&&(i.r=1),i.c||(i.c=[]);var s=[];i.c.forEach(function(e){e.v?e.v.forEach(function(t){s.push(o(e,t))}):s.push("self"==e?i:e)}),i.c=s,i.c.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,a);var l=i.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(t).filter(Boolean);i.t=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function s(e,n,i,o){function a(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}function u(e,t){if(r(e.eR,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,t):void 0}function f(e,t){return!i&&r(t.iR,e)}function d(e,t){var n=x.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function p(e,t,n,r){var i=r?"":N.classPrefix,o='<span class="'+i,a=n?"":"</span>";return o+=e+'">',o+t+a}function g(){if(!y.k)return t(M);var e="",n=0;y.lR.lastIndex=0;for(var r=y.lR.exec(M);r;){e+=t(M.substr(n,r.index-n));var i=d(y,r);i?(k+=i[1],e+=p(i[0],t(r[0]))):e+=t(r[0]),n=y.lR.lastIndex,r=y.lR.exec(M)}return e+t(M.substr(n))}function h(){if(y.sL&&!E[y.sL])return t(M);var e=y.sL?s(y.sL,M,!0,R[y.sL]):l(M);return y.r>0&&(k+=e.r),"continuous"==y.subLanguageMode&&(R[y.sL]=e.top),p(e.language,e.value,!1,!0)}function b(){return void 0!==y.sL?h():g()}function v(e,n){var r=e.cN?p(e.cN,"",!0):"";e.rB?(C+=r,M=""):e.eB?(C+=t(n)+r,M=""):(C+=r,M=n),y=Object.create(e,{parent:{value:y}})}function m(e,n){if(M+=e,void 0===n)return C+=b(),0;var r=a(n,y);if(r)return C+=b(),v(r,n),r.rB?0:n.length;var i=u(y,n);if(i){var o=y;o.rE||o.eE||(M+=n),C+=b();do y.cN&&(C+="</span>"),k+=y.r,y=y.parent;while(y!=i.parent);return o.eE&&(C+=t(n)),M="",i.starts&&v(i.starts,""),o.rE?0:n.length}if(f(n,y))throw new Error('Illegal lexeme "'+n+'" for mode "'+(y.cN||"<unnamed>")+'"');return M+=n,n.length||1}var x=w(e);if(!x)throw new Error('Unknown language: "'+e+'"');c(x);var L,y=o||x,R={},C="";for(L=y;L!=x;L=L.parent)L.cN&&(C=p(L.cN,"",!0)+C);var M="",k=0;try{for(var A,B,j=0;y.t.lastIndex=j,A=y.t.exec(n),A;)B=m(n.substr(j,A.index-j),A[0]),j=A.index+B;for(m(n.substr(j)),L=y;L.parent;L=L.parent)L.cN&&(C+="</span>");return{r:k,value:C,language:e,top:y}}catch(O){if(-1!=O.message.indexOf("Illegal"))return{r:0,value:t(n)};throw O}}function l(e,n){n=n||N.languages||Object.keys(E);var r={r:0,value:t(e)},i=r;return n.forEach(function(t){if(w(t)){var n=s(t,e,!1);n.language=t,n.r>i.r&&(i=n),n.r>r.r&&(i=r,r=n)}}),i.language&&(r.second_best=i),r}function f(e){return N.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,N.tabReplace)})),N.useBR&&(e=e.replace(/\n/g,"<br>")),e}function d(e,t,n){var r=t?x[t]:n,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}function p(e){var t=i(e);if(!/no(-?)highlight|plain|text/.test(t)){var n;N.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e;var r=n.textContent,o=t?s(t,r,!0):l(r),c=a(n);if(c.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=u(c,a(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=d(e.className,t,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function g(e){N=o(N,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function b(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function v(t,n){var r=E[t]=n(e);r.aliases&&r.aliases.forEach(function(e){x[e]=t})}function m(){return Object.keys(E)}function w(e){return E[e]||E[x[e]]}var N={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},E={},x={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=g,e.initHighlighting=h,e.initHighlightingOnLoad=b,e.registerLanguage=v,e.listLanguages=m,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(t,n,r){var i=e.inherit({cN:"comment",b:t,e:n,c:[]},r||{});return i.c.push(e.PWM),i},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e}),hljs.registerLanguage("xml",function(e){var t="[A-Za-z0-9\\._:-]+",n={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},r={eW:!0,i:/</,r:0,c:[n,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[n],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[r],starts:{e:"</script>",rE:!0,sL:""}},n,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},r]}]}}),function(e,t){return"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.AriaTips=t()}(this,function(){var e,t,n,r,i,o,a,u,c;return e=6,c=[],t=function(){var e,t,r,i,o,a,s,l;for(u(),t=document.querySelectorAll("[role=tooltip]"),l=[],a=0,s=t.length;s>a;a++)e=t[a],document.body.appendChild(e),i=document.querySelectorAll("[aria-describedby="+e.id+"]"),l.push(function(){var e,t,a;for(a=[],e=0,t=i.length;t>e;e++)r=i[e],o=n.call(r),a.push(c.push(o));return a}());return l},u=function(){var e,t,n;for(t=0,n=c.length;n>t;t++)(e=c[t])();return c=[]},i=function(e){switch(e){case"top":return"bottom";case"bottom":return"top";case"left":return"right";case"right":return"left"}},o=function(t){var n,r,o,u,c,s,l,f;switch(a.call(this),o=t.dataset.tooltipDirection||this.dataset.tooltipDirection,n=t.getBoundingClientRect(),r={x:0|n.left+(n.right-n.left)/2,y:0|n.top+(n.bottom-n.top)/2},r.x=r.x+window.pageXOffset,r.y=r.y+window.pageYOffset,l={top:"auto",bottom:"auto",left:"auto",right:"auto"},c=function(){switch(o){case"top":return window.innerHeight-n.top-window.pageYOffset;case"bottom":return n.bottom+window.pageYOffset;case"left":return window.innerWidth-n.left-window.pageXOffset;case"right":return n.right+window.pageXOffset}}(),u=i(o),l[u]=""+(0|c+e)+"px",o){case"top":case"bottom":l.left=""+r.x+"px";break;case"left":case"right":l.top=""+r.y+"px"}for(s in l)f=l[s],this.style[s]=f;return o!==this.dataset.tooltipDirection?(this.origDirection=this.dataset.tooltipDirection,this.dataset.tooltipDirection=o):void 0},a=function(){return this.origDirection?(this.dataset.tooltipDirection=this.origDirection,this.origDirection=null):void 0},r=function(e){var t,n,r,i,o;for(r=this.querySelectorAll("pre.label"),i=0,o=r.length;o>i;i++)t=r[i],t.parentNode.removeChild(t);return n=e.getAttribute("aria-label"),n?(t=document.createElement("pre"),t.classList.add("label"),t.innerHTML="("+n+")",this.appendChild(t)):void 0},n=function(){var e,t,n,i,a,u;return a=this.getAttribute("aria-describedby"),i=document.querySelector("#"+a),n=null,t=function(a){return function(){return i.addEventListener("mouseover",t),i.addEventListener("mouseout",e),n?(clearTimeout(n),n=null,i.setAttribute("aria-hidden",!1)):(r.call(i,a),o.call(i,a),n=setTimeout(function(){return i.setAttribute("aria-hidden",!1)},300))}}(this),e=function(){return clearTimeout(n),n=setTimeout(function(){return n=null,i.removeEventListener("mouseover",t),i.removeEventListener("mouseout",e),i.setAttribute("aria-hidden",!0)},30)},this.addEventListener("mouseover",t),this.addEventListener("mouseout",e),u=function(n){return function(){return i.removeEventListener("mouseover",t),i.removeEventListener("mouseout",e),n.removeEventListener("mouseover",t),n.removeEventListener("mouseout",e)}}(this)},{bind:function(){return t()},unbind:function(){return u()}}});