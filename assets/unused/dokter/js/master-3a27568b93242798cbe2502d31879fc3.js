window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);;!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(a){"use strict";function b(b){var c=b.data;b.isDefaultPrevented()||(b.preventDefault(),a(b.target).ajaxSubmit(c))}function c(b){var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!==b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function d(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}var e={};e.fileapi=void 0!==a("<input type='file'/>").get(0).files,e.formdata=void 0!==window.FormData;var f=!!a.fn.prop;a.fn.attr2=function(){if(!f)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"==typeof a?a:this.attr.apply(this,arguments)},a.fn.ajaxSubmit=function(b){function c(c){var d,e,f=a.param(c,b.traditional).split("&"),g=f.length,h=[];for(d=0;g>d;d++)f[d]=f[d].replace(/\+/g," "),e=f[d].split("="),h.push([decodeURIComponent(e[0]),decodeURIComponent(e[1])]);return h}function g(d){for(var e=new FormData,f=0;f<d.length;f++)e.append(d[f].name,d[f].value);if(b.extraData){var g=c(b.extraData);for(f=0;f<g.length;f++)g[f]&&e.append(g[f][0],g[f][1])}b.data=null;var h=a.extend(!0,{},a.ajaxSettings,b,{contentType:!1,processData:!1,cache:!1,type:i||"POST"});b.uploadProgress&&(h.xhr=function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,d=a.loaded||a.position,e=a.total;a.lengthComputable&&(c=Math.ceil(d/e*100)),b.uploadProgress(a,d,e,c)},!1),c}),h.data=null;var j=h.beforeSend;return h.beforeSend=function(a,c){c.data=b.formData?b.formData:e,j&&j.call(this,a,c)},a.ajax(h)}function h(c){function e(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(c){d("cannot get iframe.contentWindow document: "+c)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(c){d("cannot get iframe.contentDocument: "+c),b=a.document}return b}function g(){function b(){try{var a=e(r).readyState;d("state = "+a),a&&"uninitialized"==a.toLowerCase()&&setTimeout(b,50)}catch(c){d("Server abort: ",c," (",c.name,")"),h(A),w&&clearTimeout(w),w=void 0}}var c=l.attr2("target"),f=l.attr2("action"),g="multipart/form-data",j=l.attr("enctype")||l.attr("encoding")||g;x.setAttribute("target",o),(!i||/post/i.test(i))&&x.setAttribute("method","POST"),f!=m.url&&x.setAttribute("action",m.url),m.skipEncodingOverride||i&&!/post/i.test(i)||l.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(w=setTimeout(function(){v=!0,h(z)},m.timeout));var k=[];try{if(m.extraData)for(var n in m.extraData)m.extraData.hasOwnProperty(n)&&(a.isPlainObject(m.extraData[n])&&m.extraData[n].hasOwnProperty("name")&&m.extraData[n].hasOwnProperty("value")?k.push(a('<input type="hidden" name="'+m.extraData[n].name+'">').val(m.extraData[n].value).appendTo(x)[0]):k.push(a('<input type="hidden" name="'+n+'">').val(m.extraData[n]).appendTo(x)[0]));m.iframeTarget||q.appendTo("body"),r.attachEvent?r.attachEvent("onload",h):r.addEventListener("load",h,!1),setTimeout(b,15);try{x.submit()}catch(p){var s=document.createElement("form").submit;s.apply(x)}}finally{x.setAttribute("action",f),x.setAttribute("enctype",j),c?x.setAttribute("target",c):l.removeAttr("target"),a(k).remove()}}function h(b){if(!s.aborted&&!F){if(E=e(r),E||(d("cannot access response document"),b=A),b===z&&s)return s.abort("timeout"),y.reject(s,"timeout"),void 0;if(b==A&&s)return s.abort("server abort"),y.reject(s,"error","server abort"),void 0;if(E&&E.location.href!=m.iframeSrc||v){r.detachEvent?r.detachEvent("onload",h):r.removeEventListener("load",h,!1);var c,f="success";try{if(v)throw"timeout";var g="xml"==m.dataType||E.XMLDocument||a.isXMLDoc(E);if(d("isXml="+g),!g&&window.opera&&(null===E.body||!E.body.innerHTML)&&--G)return d("requeing onLoad callback, DOM not available"),setTimeout(h,250),void 0;var i=E.body?E.body:E.documentElement;s.responseText=i?i.innerHTML:null,s.responseXML=E.XMLDocument?E.XMLDocument:E,g&&(m.dataType="xml"),s.getResponseHeader=function(a){var b={"content-type":m.dataType};return b[a.toLowerCase()]},i&&(s.status=Number(i.getAttribute("status"))||s.status,s.statusText=i.getAttribute("statusText")||s.statusText);var j=(m.dataType||"").toLowerCase(),k=/(json|script|text)/.test(j);if(k||m.textarea){var l=E.getElementsByTagName("textarea")[0];if(l)s.responseText=l.value,s.status=Number(l.getAttribute("status"))||s.status,s.statusText=l.getAttribute("statusText")||s.statusText;else if(k){var o=E.getElementsByTagName("pre")[0],p=E.getElementsByTagName("body")[0];o?s.responseText=o.textContent?o.textContent:o.innerText:p&&(s.responseText=p.textContent?p.textContent:p.innerText)}}else"xml"==j&&!s.responseXML&&s.responseText&&(s.responseXML=H(s.responseText));try{D=J(s,j,m)}catch(t){f="parsererror",s.error=c=t||f}}catch(t){d("error caught: ",t),f="error",s.error=c=t||f}s.aborted&&(d("upload aborted"),f=null),s.status&&(f=s.status>=200&&s.status<300||304===s.status?"success":"error"),"success"===f?(m.success&&m.success.call(m.context,D,"success",s),y.resolve(s.responseText,"success",s),n&&a.event.trigger("ajaxSuccess",[s,m])):f&&(void 0===c&&(c=s.statusText),m.error&&m.error.call(m.context,s,f,c),y.reject(s,"error",c),n&&a.event.trigger("ajaxError",[s,m,c])),n&&a.event.trigger("ajaxComplete",[s,m]),n&&!--a.active&&a.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,s,f),F=!0,m.timeout&&clearTimeout(w),setTimeout(function(){m.iframeTarget?q.attr("src",m.iframeSrc):q.remove(),s.responseXML=null},100)}}}var j,k,m,n,o,q,r,s,t,u,v,w,x=l[0],y=a.Deferred();if(y.abort=function(a){s.abort(a)},c)for(k=0;k<p.length;k++)j=a(p[k]),f?j.prop("disabled",!1):j.removeAttr("disabled");if(m=a.extend(!0,{},a.ajaxSettings,b),m.context=m.context||m,o="jqFormIO"+(new Date).getTime(),m.iframeTarget?(q=a(m.iframeTarget),u=q.attr2("name"),u?o=u:q.attr2("name",o)):(q=a('<iframe name="'+o+'" src="'+m.iframeSrc+'" />'),q.css({position:"absolute",top:"-1000px",left:"-1000px"})),r=q[0],s={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";d("aborting upload... "+c),this.aborted=1;try{r.contentWindow.document.execCommand&&r.contentWindow.document.execCommand("Stop")}catch(e){}q.attr("src",m.iframeSrc),s.error=c,m.error&&m.error.call(m.context,s,c,b),n&&a.event.trigger("ajaxError",[s,m,c]),m.complete&&m.complete.call(m.context,s,c)}},n=m.global,n&&0===a.active++&&a.event.trigger("ajaxStart"),n&&a.event.trigger("ajaxSend",[s,m]),m.beforeSend&&m.beforeSend.call(m.context,s,m)===!1)return m.global&&a.active--,y.reject(),y;if(s.aborted)return y.reject(),y;t=x.clk,t&&(u=t.name,u&&!t.disabled&&(m.extraData=m.extraData||{},m.extraData[u]=t.value,"image"==t.type&&(m.extraData[u+".x"]=x.clk_x,m.extraData[u+".y"]=x.clk_y)));var z=1,A=2,B=a("meta[name=csrf-token]").attr("content"),C=a("meta[name=csrf-param]").attr("content");C&&B&&(m.extraData=m.extraData||{},m.extraData[C]=B),m.forceSync?g():setTimeout(g,10);var D,E,F,G=50,H=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},I=a.parseJSON||function(a){return window.eval("("+a+")")},J=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=I(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g};return y}if(!this.length)return d("ajaxSubmit: skipping submit process - no element selected"),this;var i,j,k,l=this;"function"==typeof b?b={success:b}:void 0===b&&(b={}),i=b.type||this.attr2("method"),j=b.url||this.attr2("action"),k="string"==typeof j?a.trim(j):"",k=k||window.location.href||"",k&&(k=(k.match(/^([^#]+)/)||[])[1]),b=a.extend(!0,{url:k,success:a.ajaxSettings.success,type:i||a.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},b);var m={};if(this.trigger("form-pre-serialize",[this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(b.beforeSerialize&&b.beforeSerialize(this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var n=b.traditional;void 0===n&&(n=a.ajaxSettings.traditional);var o,p=[],q=this.formToArray(b.semantic,p);if(b.data&&(b.extraData=b.data,o=a.param(b.data,n)),b.beforeSubmit&&b.beforeSubmit(q,this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[q,this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var r=a.param(q,n);o&&(r=r?r+"&"+o:o),"GET"==b.type.toUpperCase()?(b.url+=(b.url.indexOf("?")>=0?"&":"?")+r,b.data=null):b.data=r;var s=[];if(b.resetForm&&s.push(function(){l.resetForm()}),b.clearForm&&s.push(function(){l.clearForm(b.includeHidden)}),!b.dataType&&b.target){var t=b.success||function(){};s.push(function(c){var d=b.replaceTarget?"replaceWith":"html";a(b.target)[d](c).each(t,arguments)})}else b.success&&s.push(b.success);if(b.success=function(a,c,d){for(var e=b.context||this,f=0,g=s.length;g>f;f++)s[f].apply(e,[a,c,d||l,l])},b.error){var u=b.error;b.error=function(a,c,d){var e=b.context||this;u.apply(e,[a,c,d,l])}}if(b.complete){var v=b.complete;b.complete=function(a,c){var d=b.context||this;v.apply(d,[a,c,l])}}var w=a("input[type=file]:enabled",this).filter(function(){return""!==a(this).val()}),x=w.length>0,y="multipart/form-data",z=l.attr("enctype")==y||l.attr("encoding")==y,A=e.fileapi&&e.formdata;d("fileAPI :"+A);var B,C=(x||z)&&!A;b.iframe!==!1&&(b.iframe||C)?b.closeKeepAlive?a.get(b.closeKeepAlive,function(){B=h(q)}):B=h(q):B=(x||z)&&A?g(q):a.ajax(b),l.removeData("jqxhr").data("jqxhr",B);for(var D=0;D<p.length;D++)p[D]=null;return this.trigger("form-submit-notify",[this,b]),this},a.fn.ajaxForm=function(e){if(e=e||{},e.delegation=e.delegation&&a.isFunction(a.fn.on),!e.delegation&&0===this.length){var f={s:this.selector,c:this.context};return!a.isReady&&f.s?(d("DOM not ready, queuing ajaxForm"),a(function(){a(f.s,f.c).ajaxForm(e)}),this):(d("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return e.delegation?(a(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,c).on("submit.form-plugin",this.selector,e,b).on("click.form-plugin",this.selector,e,c),this):this.ajaxFormUnbind().bind("submit.form-plugin",e,b).bind("click.form-plugin",e,c)},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(b,c){var d=[];if(0===this.length)return d;var f,g=this[0],h=this.attr("id"),i=b?g.getElementsByTagName("*"):g.elements;if(i&&!/MSIE 8/.test(navigator.userAgent)&&(i=a(i).get()),h&&(f=a(":input[form="+h+"]").get(),f.length&&(i=(i||[]).concat(f))),!i||!i.length)return d;var j,k,l,m,n,o,p;for(j=0,o=i.length;o>j;j++)if(n=i[j],l=n.name,l&&!n.disabled)if(b&&g.clk&&"image"==n.type)g.clk==n&&(d.push({name:l,value:a(n).val(),type:n.type}),d.push({name:l+".x",value:g.clk_x},{name:l+".y",value:g.clk_y}));else if(m=a.fieldValue(n,!0),m&&m.constructor==Array)for(c&&c.push(n),k=0,p=m.length;p>k;k++)d.push({name:l,value:m[k]});else if(e.fileapi&&"file"==n.type){c&&c.push(n);var q=n.files;if(q.length)for(k=0;k<q.length;k++)d.push({name:l,value:q[k],type:n.type});else d.push({name:l,value:"",type:n.type})}else null!==m&&"undefined"!=typeof m&&(c&&c.push(n),d.push({name:l,value:m,type:n.type,required:n.required}));if(!b&&g.clk){var r=a(g.clk),s=r[0];l=s.name,l&&!s.disabled&&"image"==s.type&&(d.push({name:l,value:r.val()}),d.push({name:l+".x",value:g.clk_x},{name:l+".y",value:g.clk_y}))}return d},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;g>f;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;e>d;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&-1==b.selectedIndex))return null;if("select"==f){var g=b.selectedIndex;if(0>g)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;k>l;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"==e?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==e?this.selectedIndex=-1:"file"==d?/MSIE/.test(navigator.userAgent)?a(this).replaceWith(a(this).clone(!0)):a(this).val(""):b&&(b===!0&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},a.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1});function FastClick(a,b){"use strict";function c(a,b){return function(){return a.apply(b,arguments)}}var d;if(b=b||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=b.touchBoundary||10,this.layer=a,this.tapDelay=b.tapDelay||200,!FastClick.notNeeded(a)){for(var e=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],f=this,g=0,h=e.length;h>g;g++)f[e[g]]=c(f[e[g]],f);deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(d=a.onclick,a.addEventListener("click",function(a){d(a)},!1),a.onclick=null)}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.sendClick(g,a),deviceIsIOS&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a,b){"use strict";return new FastClick(a,b)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;(function(e,t,n,r){"use strict";function l(e){if(typeof e=="string"||e instanceof String)e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"");return e}
var i=function(t){var n=t.length,r=e("head");while(n--)r.has("."+ t[n]).length===0&&r.append('<meta class="'+ t[n]+'" />')};i(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){typeof FastClick!="undefined"&&typeof n.body!="undefined"&&FastClick.attach(n.body)});var s=function(t,r){if(typeof t=="string"){if(r){var i;if(r.jquery){i=r[0];if(!i)return r}else i=r;return e(i.querySelectorAll(t))}
return e(n.querySelectorAll(t))}
return e(t,r)},o=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},u=function(e){var t=e.split("-"),n=t.length,r=[];while(n--)n!==0?r.push(t[n]):this.namespace.length>0?r.push(this.namespace,t[n]):r.push(t[n]);return r.reverse().join("-")},a=function(t,n){var r=this,i=!s(this).data(this.attr_name(!0));s(this.scope).is("["+ this.attr_name()+"]")?(s(this.scope).data(this.attr_name(!0)+"-init",e.extend({},this.settings,n||t,this.data_options(s(this.scope)))),i&&this.events(this.scope)):s("["+ this.attr_name()+"]",this.scope).each(function(){var i=!s(this).data(r.attr_name(!0)+"-init");s(this).data(r.attr_name(!0)+"-init",e.extend({},r.settings,n||t,r.data_options(s(this)))),i&&r.events(this)});if(typeof t=="string")return this[t].call(this,n)},f=function(e,t){function n(){t(e[0])}
function r(){this.one("load",n);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+ t)}}
if(!e.attr("src")){n();return}
e[0].complete||e[0].readyState===4?n():r.call(e)};t.matchMedia=t.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),s=e.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(s),function(e){return s.innerHTML='&shy;<style media="'+ e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=s.offsetWidth===42,n.removeChild(i),{matches:t,media:e}}}(n),function(e){function a(){n&&(s(a),u&&jQuery.fx.tick())}
var n,r=0,i=["webkit","moz"],s=t.requestAnimationFrame,o=t.cancelAnimationFrame,u="undefined"!=typeof jQuery.fx;for(;r<i.length&&!s;r++)s=t[i[r]+"RequestAnimationFrame"],o=o||t[i[r]+"CancelAnimationFrame"]||t[i[r]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=o,u&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,a())},jQuery.fx.stop=function(){n=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n- r)),s=t.setTimeout(function(){e(n+ i)},i);return r=n+ i,s},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.3.0",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:r},init:function(e,t,n,r,i){var o=[e,n,r,i],u=[];this.rtl=/rtl/i.test(s("html").attr("dir")),this.scope=e||this.scope,this.set_namespace();if(t&&typeof t=="string"&&!/reflow/i.test(t))this.libs.hasOwnProperty(t)&&u.push(this.init_lib(t,o));else
for(var a in this.libs)u.push(this.init_lib(a,t));return e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?(typeof this.libs[t].settings!="undefined"?e.extend(!0,this.libs[t].settings,n[t]):typeof this.libs[t].defaults!="undefined"&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=o,e.add_namespace=u,e.bindings=a,e.S=this.utils.S},inherit:function(e,t){var n=t.split(" "),r=n.length;while(r--)this.utils.hasOwnProperty(n[r])&&(e[n[r]]=this.utils[n[r]])},set_namespace:function(){var t=this.global.namespace===r?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===r||/false/i.test(t)?"":t},libs:{},utils:{S:s,throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;n==null&&(n=setTimeout(function(){e.apply(r,i),n=null},t))}},debounce:function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},data_options:function(t,n){function f(e){return!isNaN(e- 0)&&e!==null&&e!==""&&e!==!1&&e!==!0}
function l(t){return typeof t=="string"?e.trim(t):t}
n=n||"options";var r={},i,s,o,u=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+ n):e.data(n)},a=u(t);if(typeof a=="object")return a;o=(a||":").split(";"),i=o.length;while(i--)s=o[i].split(":"),s=[s[0],s.slice(1).join(":")],/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),f(s[1])&&(s[1].indexOf(".")===-1?s[1]=parseInt(s[1],10):s[1]=parseFloat(s[1])),s.length===2&&s[0].length>0&&(r[l(s[0])]=l(s[1]));return r},register_media:function(t,n){Foundation.media_queries[t]===r&&(e("head").append('<meta class="'+ n+'"/>'),Foundation.media_queries[t]=l(e("."+ n).css("font-family")))},add_custom_rule:function(e,t){if(t===r&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==r&&Foundation.stylesheet.insertRule("@media "+ Foundation.media_queries[t]+"{ "+ e+" }")}},image_loaded:function(e,t){var n=this,r=e.length;r===0&&t(e),e.each(function(){f(n.S(this),function(){r-=1,r===0&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+(new Date)).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}})(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.slider={name:"slider",version:"5.3.0",settings:{start:0,end:100,step:1,initial:null,display_selector:"",vertical:!1,on_change:function(){}},cache:{},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n),this.reflow()},events:function(){var n=this;e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+ n.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(t){n.cache.active||(t.preventDefault(),n.set_active_slider(e(t.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(t){!n.cache.active||(t.preventDefault(),e.data(n.cache.active[0],"settings").vertical?n.calculate_position(n.cache.active,t.pageY||t.originalEvent.clientY||t.originalEvent.touches[0].clientY||t.currentPoint.y):n.calculate_position(n.cache.active,t.pageX||t.originalEvent.clientX||t.originalEvent.touches[0].clientX||t.currentPoint.x))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(e){n.remove_active_slider()}).on("change.fndtn.slider",function(e){n.settings.on_change()}),n.S(t).on("resize.fndtn.slider",n.throttle(function(e){n.reflow()},300))},set_active_slider:function(e){this.cache.active=e},remove_active_slider:function(){this.cache.active=null},calculate_position:function(t,n){var r=this,i=e.data(t[0],"settings"),s=e.data(t[0],"handle_l"),o=e.data(t[0],"handle_o"),u=e.data(t[0],"bar_l"),a=e.data(t[0],"bar_o");requestAnimationFrame(function(){var e;Foundation.rtl&&!i.vertical?e=r.limit_to((a+ u- n)/ u, 0, 1) : e = r.limit_to((n - a) / u, 0, 1), e = i.vertical ? 1 - e : e;
var s=r.normalized_value(e,i.start,i.end,i.step);r.set_ui(t,s)})},set_ui:function(t,n){var r=e.data(t[0],"settings"),i=e.data(t[0],"handle_l"),s=e.data(t[0],"bar_l"),o=this.normalized_percentage(n,r.start,r.end),u=o*(s- i)- 1,a=o*100;Foundation.rtl&&!r.vertical&&(u=-u),u=r.vertical?-u+ s- i+ 1:u,this.set_translate(t,u,r.vertical),r.vertical?t.siblings(".range-slider-active-segment").css("height",a+"%"):t.siblings(".range-slider-active-segment").css("width",a+"%"),t.parent().attr(this.attr_name(),n).trigger("change").trigger("change.fndtn.slider"),t.parent().children("input[type=hidden]").val(n),r.input_id!=""&&e(r.display_selector).each(function(){this.hasOwnProperty("value")?e(this).val(n):e(this).text(n)})},normalized_percentage:function(e,t,n){return(e- t)/ (n - t)
},normalized_value:function(e,t,n,r){var i=n- t,s=e*i,o=(s- s%r)/ r,
u=s%r,a=u>=r*.5?r:0;return o*r+ a+ t},set_translate:function(t,n,r){r?e(t).css("-webkit-transform","translateY("+ n+"px)").css("-moz-transform","translateY("+ n+"px)").css("-ms-transform","translateY("+ n+"px)").css("-o-transform","translateY("+ n+"px)").css("transform","translateY("+ n+"px)"):e(t).css("-webkit-transform","translateX("+ n+"px)").css("-moz-transform","translateX("+ n+"px)").css("-ms-transform","translateX("+ n+"px)").css("-o-transform","translateX("+ n+"px)").css("transform","translateX("+ n+"px)")},limit_to:function(e,t,n){return Math.min(Math.max(e,t),n)},initialize_settings:function(t){var n=e.extend({},this.settings,this.data_options(e(t).parent()));n.vertical?(e.data(t,"bar_o",e(t).parent().offset().top),e.data(t,"bar_l",e(t).parent().outerHeight()),e.data(t,"handle_o",e(t).offset().top),e.data(t,"handle_l",e(t).outerHeight())):(e.data(t,"bar_o",e(t).parent().offset().left),e.data(t,"bar_l",e(t).parent().outerWidth()),e.data(t,"handle_o",e(t).offset().left),e.data(t,"handle_l",e(t).outerWidth())),e.data(t,"bar",e(t).parent()),e.data(t,"settings",n)},set_initial_position:function(t){var n=e.data(t.children(".range-slider-handle")[0],"settings"),r=n.initial?n.initial:Math.floor((n.end- n.start)*.5/n.step)*n.step+ n.start,i=t.children(".range-slider-handle");this.set_ui(i,r)},set_value:function(t){var n=this;e("["+ n.attr_name()+"]",this.scope).each(function(){e(this).attr(n.attr_name(),t)}),!e(this.scope).attr(n.attr_name())||e(this.scope).attr(n.attr_name(),t),n.reflow()},reflow:function(){var t=this;t.S("["+ this.attr_name()+"]").each(function(){var n=e(this).children(".range-slider-handle")[0],r=e(this).attr(t.attr_name());t.initialize_settings(n),r?t.set_ui(e(n),parseFloat(r)):t.set_initial_position(e(this))})}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";var i=i||!1;Foundation.libs.joyride={name:"joyride",version:"5.3.0",defaults:{expose:!1,modal:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(t,n,r){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||e.extend({},this.defaults,r||n),this.bindings(n,r)},events:function(){var n=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(e("["+ n.attr_name()+"]").length>0&&n.settings.$next_tip){if(n.settings.exposed.length>0){var t=e(n.settings.exposed);t.each(function(){var t=e(this);n.un_expose(t),n.expose(t)})}
n.is_phone()?n.pos_phone():n.pos_default(!1)}},100))},start:function(){var t=this,n=e("["+ this.attr_name()+"]",this.scope),r=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],i=r.length;if(!n.length>0)return;this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,typeof e.cookie!="function"&&(this.settings.cookie_monster=!1);if(!this.settings.cookie_monster||this.settings.cookie_monster&&!e.cookie(this.settings.cookie_name))this.settings.$tip_content.each(function(n){var s=e(this);this.settings=e.extend({},t.defaults,t.data_options(s));var o=i;while(o--)t.settings[r[o]]=parseInt(t.settings[r[o]],10);t.create({$li:s,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")},resume:function(){this.set_li(),this.show()},tip_template:function(t){var n,r;return t.tip_class=t.tip_class||"",n=e(this.settings.template.tip).addClass(t.tip_class),r=e.trim(e(t.li).html())+ this.button_text(t.button_text)+ this.settings.template.link+ this.timer_instance(t.index),n.append(e(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),t.index),e(".joyride-content-wrapper",n).append(r),n[0]},timer_instance:function(t){var n;return t===0&&this.settings.start_timer_on_click&&this.settings.timer>0||this.settings.timer===0?n="":n=e(this.settings.template.timer)[0].outerHTML,n},button_text:function(t){return this.settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},create:function(t){var n=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),r=t.$li.attr("class"),i=e(this.tip_template({tip_class:r,index:t.index,button_text:n,li:t.$li}));e(this.settings.tip_container).append(i)},show:function(t){var n=null;this.settings.$li===r||e.inArray(this.settings.$li.index(),this.settings.pause_after)===-1?(this.settings.paused?this.settings.paused=!1:this.set_li(t),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),n=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(n.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(n.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show():this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr(this.add_namespace("data-class")),r=this.settings.$li.attr(this.add_namespace("data-id")),i=function(){return r?e(n.getElementById(r)):t?e("."+ t).first():e("body")};this.settings.$target=i()},scroll_to:function(){var n,r;n=e(t).height()/ 2, r = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), r != 0 && e("html, body").stop().animate({
scrollTop:r},this.settings.scroll_speed,"swing")},paused:function(){return e.inArray(this.settings.$li.index()+ 1,this.settings.pause_after)===-1},restart:function(){this.hide(),this.settings.$li=r,this.show("init")},pos_default:function(e){var t=this.settings.$next_tip.find(".joyride-nub"),n=Math.ceil(t.outerWidth()/ 2),
r=Math.ceil(t.outerHeight()/ 2),
i=e||!1;i&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show());if(!/body/i.test(this.settings.$target.selector)){var s=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,o=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+ r+ this.settings.$target.outerHeight()+ s,left:this.settings.$target.offset().left+ this.settings.$target.outerWidth()- this.settings.$next_tip.outerWidth()+ o}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+ r+ this.settings.$target.outerHeight()+ s,left:this.settings.$target.offset().left+ o}),this.nub_position(t,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top- this.settings.$next_tip.outerHeight()- r+ s,left:this.settings.$target.offset().left+ this.settings.$target.outerWidth()- this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top- this.settings.$next_tip.outerHeight()- r+ s,left:this.settings.$target.offset().left+ o}),this.nub_position(t,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+ s,left:this.settings.$target.outerWidth()+ this.settings.$target.offset().left+ n+ o}),this.nub_position(t,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+ s,left:this.settings.$target.offset().left- this.settings.$next_tip.outerWidth()- n+ o}),this.nub_position(t,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}else this.settings.$li.length&&this.pos_modal(t);i&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=this.settings.$next_tip.outerHeight(),r=this.settings.$next_tip.offset(),i=this.settings.$target.outerHeight(),s=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(s.outerHeight()/ 2),
u=t||!1;s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),u&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(s):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top- n- o}),s.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+ i+ o}),s.addClass("top")),u&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");t.length<1&&e("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,r,i,s,o,u="expose-"+ this.random_str(6);if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}if(i.length<1)return t.console&&console.error("element not valid",i),!1;n=e(this.settings.template.expose),this.settings.$body.append(n),n.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),r=e(this.settings.template.expose_cover),s={zIndex:i.css("z-index"),position:i.css("position")},o=i.attr("class")==null?"":i.attr("class"),i.css("z-index",parseInt(n.css("z-index"))+ 1),s.position=="static"&&i.css("position","relative"),i.data("expose-css",s),i.data("orig-class",o),i.attr("class",o+" "+ this.settings.expose_add_class),r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(r),n.addClass(u),r.addClass(u),i.data("expose",u),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,i),this.add_exposed(i)},un_expose:function(){var n,r,i,s,o,u=!1;if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}if(r.length<1)return t.console&&console.error("element not valid",r),!1;n=r.data("expose"),i=e("."+ n),arguments.length>1&&(u=arguments[1]),u===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():i.remove(),s=r.data("expose-css"),s.zIndex=="auto"?r.css("z-index",""):r.css("z-index",s.zIndex),s.position!=r.css("position")&&(s.position=="static"?r.css("position",""):r.css("position",s.position)),o=r.data("orig-class"),r.attr("class",o),r.removeData("orig-classes"),r.removeData("expose"),r.removeData("expose-z-index"),this.remove_exposed(r)},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||typeof t=="object"?this.settings.exposed.push(t[0]):typeof t=="string"&&this.settings.exposed.push(t)},remove_exposed:function(t){var n,r;t instanceof e?n=t[0]:typeof t=="string"&&(n=t),this.settings.exposed=this.settings.exposed||[],r=this.settings.exposed.length;while(r--)
if(this.settings.exposed[r]==n){this.settings.exposed.splice(r,1);return}},center:function(){var n=e(t);return this.settings.$next_tip.css({top:(n.height()- this.settings.$next_tip.outerHeight())/ 2 + n.scrollTop(),
left:(n.width()- this.settings.$next_tip.outerWidth())/ 2 + n.scrollLeft()
}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){var r=e(t),i=r.height()/ 2,
s=Math.ceil(this.settings.$target.offset().top- i+ this.settings.$next_tip.outerHeight()),o=r.width()+ r.scrollLeft(),u=r.height()+ s,a=r.height()+ r.scrollTop(),f=r.scrollTop();return s<f&&(s<0?f=0:f=s),u>a&&(a=u),[n.offset().top<f,o<n.offset().left+ n.outerWidth(),a<n.offset().top+ n.outerHeight(),r.scrollLeft()>n.offset().left]},visible:function(e){var t=e.length;while(t--)
if(e[t])return!1;return!0},nub_position:function(e,t,n){t==="auto"?e.addClass(n):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(t){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.$next_tip.data("closed",!0),e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide();if(typeof t=="undefined"||t===!1)this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip);e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.3.0",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var n=!1,r=t.find("["+ this.attr_name()+"-watch]:visible"),i=t.data(this.attr_name(!0)+"-init");if(r.length===0)return;var s=r.first().offset().top;i.before_height_change(),t.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"),r.height("inherit"),r.each(function(){var t=e(this);t.offset().top!==s&&(n=!0)});if(i.equalize_on_stack===!1&&n)return;var o=r.map(function(){return e(this).outerHeight(!1)}).get();if(i.use_tallest){var u=Math.max.apply(null,o);r.css("height",u)}else{var a=Math.min.apply(null,o);r.css("height",a)}
i.after_height_change(),t.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")},reflow:function(){var t=this;this.S("["+ this.attr_name()+"]",this.scope).each(function(){var n=e(this);t.image_loaded(t.S("img",this),function(){t.equalize(n)})})}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.3.0",settings:{active_class:"open",align:"bottom",is_hover:!1,opened:function(){},closed:function(){}},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(n){var r=this,i=r.S;i(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+ this.attr_name()+"]",function(t){var n=i(this).data(r.attr_name(!0)+"-init")||r.settings;if(!n.is_hover||Modernizr.touch)t.preventDefault(),r.toggle(e(this))}).on("mouseenter.fndtn.dropdown","["+ this.attr_name()+"], ["+ this.attr_name()+"-content]",function(e){var t=i(this),n,s;clearTimeout(r.timeout),t.data(r.data_attr())?(n=i("#"+ t.data(r.data_attr())),s=t):(n=t,s=i("["+ r.attr_name()+"='"+ n.attr("id")+"']"));var o=s.data(r.attr_name(!0)+"-init")||r.settings;i(e.target).data(r.data_attr())&&o.is_hover&&r.closeall.call(r),o.is_hover&&r.open.apply(r,[n,s])}).on("mouseleave.fndtn.dropdown","["+ this.attr_name()+"], ["+ this.attr_name()+"-content]",function(e){var t=i(this);r.timeout=setTimeout(function(){if(t.data(r.data_attr())){var e=t.data(r.data_attr(!0)+"-init")||r.settings;e.is_hover&&r.close.call(r,i("#"+ t.data(r.data_attr())))}else{var n=i("["+ r.attr_name()+'="'+ i(this).attr("id")+'"]'),e=n.data(r.attr_name(!0)+"-init")||r.settings;e.is_hover&&r.close.call(r,t)}}.bind(this),150)}).on("click.fndtn.dropdown",function(t){var n=i(t.target).closest("["+ r.attr_name()+"-content]");if(i(t.target).data(r.data_attr())||i(t.target).parent().data(r.data_attr()))return;if(!i(t.target).data("revealId")&&n.length>0&&(i(t.target).is("["+ r.attr_name()+"-content]")||e.contains(n.first()[0],t.target))){t.stopPropagation();return}
r.close.call(r,i("["+ r.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+ r.attr_name()+"-content]",function(){r.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+ r.attr_name()+"-content]",function(){r.settings.closed.call(this)}),i(t).off(".dropdown").on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50)),this.resize()},close:function(e){var t=this;e.each(function(){t.S(this).hasClass(t.settings.active_class)&&(t.S(this).css(Foundation.rtl?"right":"left","-99999px").removeClass(t.settings.active_class).prev("["+ t.attr_name()+"]").removeClass(t.settings.active_class).removeData("target"),t.S(this).trigger("closed").trigger("closed.fndtn.dropdown",[e]))})},closeall:function(){var t=this;e.each(t.S("["+ this.attr_name()+"-content]"),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.prev("["+ this.attr_name()+"]").addClass(this.settings.active_class),e.data("target",t.get(0)).trigger("opened").trigger("opened.fndtn.dropdown",[e,t])},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+ this.name:this.name},toggle:function(e){var t=this.S("#"+ e.data(this.data_attr()));if(t.length===0)return;this.close.call(this,this.S("["+ this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?(this.close.call(this,t),t.data("target")!==e.get(0)&&this.open.call(this,t,e)):this.open.call(this,t,e)},resize:function(){var e=this.S("["+ this.attr_name()+"-content].open"),t=this.S("["+ this.attr_name()+"='"+ e.attr("id")+"']");e.length&&t.length&&this.css(e,t)},css:function(e,t){var n=Math.max((t.width()- e.width())/ 2, 8);
this.clear_idx();if(this.small()){var r=this.dirs.bottom.call(e,t);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:r.top}),e.css(Foundation.rtl?"right":"left",n)}else{var i=t.data(this.attr_name(!0)+"-init")||this.settings;this.style(e,t,i)}
return e},style:function(t,n,r){var i=e.extend({position:"absolute"},this.dirs[r.align].call(t,n,r));t.attr("style","").css(i)},dirs:{_base:function(e){var t=this.offsetParent(),n=t.offset(),r=e.offset();return r.top-=n.top,r.left-=n.left,r},top:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e),i=8;return this.addClass("drop-top"),(e.outerWidth()<this.outerWidth()||n.small())&&n.adjust_pip(i,r),Foundation.rtl?{left:r.left- this.outerWidth()+ e.outerWidth(),top:r.top- this.outerHeight()}:{left:r.left,top:r.top- this.outerHeight()}},bottom:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e),i=8;return(e.outerWidth()<this.outerWidth()||n.small())&&n.adjust_pip(i,r),n.rtl?{left:r.left- this.outerWidth()+ e.outerWidth(),top:r.top+ e.outerHeight()}:{left:r.left,top:r.top+ e.outerHeight()}},left:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-left"),{left:n.left- this.outerWidth(),top:n.top}},right:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-right"),{left:n.left+ e.outerWidth(),top:n.top}}},adjust_pip:function(e,t){var n=Foundation.stylesheet;this.small()&&(e+=t.left- 8),this.rule_idx=n.cssRules.length;var r=".f-dropdown.open:before",i=".f-dropdown.open:after",s="left: "+ e+"px;",o="left: "+(e- 1)+"px;";n.insertRule?(n.insertRule([r,"{",s,"}"].join(" "),this.rule_idx),n.insertRule([i,"{",o,"}"].join(" "),this.rule_idx+ 1)):(n.addRule(r,s,this.rule_idx),n.addRule(i,o,this.rule_idx+ 1))},clear_idx:function(){var e=Foundation.stylesheet;this.rule_idx&&(e.deleteRule(this.rule_idx),e.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(t).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.3.0",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",touch_label:"",init:!1,locked:!1},init:function(e,t,n){var r=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(t,n),r.S(this.scope).is("["+ this.attr_name()+"]")?this.assemble(r.S("li",this.scope)):r.S("["+ this.attr_name()+"]",this.scope).each(function(){r.assemble(r.S("li",this))})},events:function(r){var i=this,s=i.S,o=e(".scroll-container");o.length>0&&(this.scope=o),s(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+ this.attr_name()+"] li "+ this.settings.open_selectors,function(e,t,n){var t=t||s(this),n=n||t,r=t.next("li"),o=t.closest("["+ i.attr_name()+"]").data(i.attr_name(!0)+"-init"),u=s(e.target);e.preventDefault(),o||(i.init(),o=t.closest("["+ i.attr_name()+"]").data(i.attr_name(!0)+"-init")),n.hasClass("visible")&&t[0]===n[0]&&r.length>0&&i.is_open(t)&&(n=r,u=s("img",n)),i.open(u,t,n),i.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-next",function(e){i.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(e){i.nav(e,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)}),e(n).on("keydown.fndtn.clearing",function(e){i.keydown(e)}),s(t).off(".clearing").on("resize.fndtn.clearing",function(){i.resize()}),this.swipe_events(r)},swipe_events:function(e){var t=this,n=t.S;n(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};n(this).data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);if(e.touches.length>1||e.scale&&e.scale!==1)return;var r=n(this).data("swipe-transition");typeof r=="undefined"&&(r={}),r.delta_x=e.touches[0].pageX- r.start_page_x,Foundation.rtl&&(r.delta_x=-r.delta_x),typeof r.is_scrolling=="undefined"&&(r.is_scrolling=!!(r.is_scrolling||Math.abs(r.delta_x)<Math.abs(e.touches[0].pageY- r.start_page_y)));if(!r.is_scrolling&&!r.active){e.preventDefault();var i=r.delta_x<0?"next":"prev";r.active=!0,t.nav(e,i)}}).on("touchend.fndtn.clearing",".visible-img",function(e){n(this).data("swipe-transition",{}),e.stopPropagation()})},assemble:function(t){var n=t.parent();if(n.parent().hasClass("carousel"))return;n.after('<div id="foundationClearingHolder"></div>');var r=n.detach(),i="";if(r[0]==null)return;i=r[0].outerHTML;var s=this.S("#foundationClearingHolder"),o=n.data(this.attr_name(!0)+"-init"),u={grid:'<div class="carousel">'+ i+"</div>",viewing:o.templates.viewing},a='<div class="clearing-assembled"><div>'+ u.viewing+ u.grid+"</div></div>",f=this.settings.touch_label;Modernizr.touch&&(a=e(a).find(".clearing-touch-label").html(f).end()),s.after(a).remove()},open:function(t,r,i){function p(){setTimeout(function(){this.image_loaded(l,function(){l.outerWidth()===1&&!h?p.call(this):d.call(this,l)}.bind(this))}.bind(this),100)}
function d(t){var n=e(t);n.css("visibility","visible"),o.css("overflow","hidden"),u.addClass("clearing-blackout"),a.addClass("clearing-container"),f.show(),this.fix_height(i).caption(s.S(".clearing-caption",f),s.S("img",i)).center_and_label(t,c).shift(r,i,function(){i.closest("li").siblings().removeClass("visible"),i.closest("li").addClass("visible")}),f.trigger("opened.fndtn.clearing")}
var s=this,o=e(n.body),u=i.closest(".clearing-assembled"),a=s.S("div",u).first(),f=s.S(".visible-img",a),l=s.S("img",f).not(t),c=s.S(".clearing-touch-label",a),h=!1;l.error(function(){h=!0}),this.locked()||(f.trigger("open.fndtn.clearing"),l.attr("src",this.load(t)).css("visibility","hidden"),p.call(this))},close:function(t,r){t.preventDefault();var i=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(r)),s=e(n.body),o,u;return r===t.target&&i&&(s.css("overflow",""),o=e("div",i).first(),u=e(".visible-img",o),u.trigger("close.fndtn.clearing"),this.settings.prev_index=0,e("ul["+ this.attr_name()+"]",i).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),o.removeClass("clearing-container"),u.hide(),u.trigger("closed.fndtn.clearing")),!1},is_open:function(e){return e.parent().prop("style").length>0},keydown:function(t){var n=e(".clearing-blackout ul["+ this.attr_name()+"]"),r=this.rtl?37:39,i=this.rtl?39:37,s=27;t.which===r&&this.go(n,"next"),t.which===i&&this.go(n,"prev"),t.which===s&&this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")},nav:function(t,n){var r=e("ul["+ this.attr_name()+"]",".clearing-blackout");t.preventDefault(),this.go(r,n)},resize:function(){var t=e("img",".clearing-blackout .visible-img"),n=e(".clearing-touch-label",".clearing-blackout");t.length&&(this.center_and_label(t,n),t.trigger("resized.fndtn.clearing"))},fix_height:function(e){var t=e.parent().children(),n=this;return t.each(function(){var e=n.S(this),t=e.find("img");e.height()>t.outerHeight()&&e.addClass("fix-height")}).closest("ul").width(t.length*100+"%"),this},update_paddles:function(e){e=e.closest("li");var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?this.S(".clearing-main-next",t).removeClass("disabled"):this.S(".clearing-main-next",t).addClass("disabled"),e.prev().length>0?this.S(".clearing-main-prev",t).removeClass("disabled"):this.S(".clearing-main-prev",t).addClass("disabled")},center_and_label:function(e,t){return this.rtl?(e.css({marginRight:-(e.outerWidth()/ 2),
marginTop:-(e.outerHeight()/ 2),
left:"auto",right:"50%"}),t.length>0&&t.css({marginRight:-(t.outerWidth()/ 2),
marginTop:-(e.outerHeight()/ 2) - t.outerHeight() - 10,
left:"auto",right:"50%"})):(e.css({marginLeft:-(e.outerWidth()/ 2),
marginTop:-(e.outerHeight()/ 2)
}),t.length>0&&t.css({marginLeft:-(t.outerWidth()/ 2),
marginTop:-(e.outerHeight()/ 2) - t.outerHeight() - 10
})),this},load:function(e){var t;return e[0].nodeName==="A"?t=e.attr("href"):t=e.parent().attr("href"),this.preload(e),t?t:e.attr("src")},preload:function(e){this.img(e.closest("li").next()).img(e.closest("li").prev())},img:function(e){if(e.length){var t=new Image,n=this.S("a",e);n.length?t.src=n.attr("href"):t.src=this.S("img",e).attr("src")}
return this},caption:function(e,t){var n=t.attr("data-caption");return n?e.html(n).show():e.text("").hide(),this},go:function(e,t){var n=this.S(".visible",e),r=n[t]();r.length&&this.S("img",r).trigger("click",[n,r]).trigger("click.fndtn.clearing",[n,r]).trigger("change.fndtn.clearing")},shift:function(e,t,n){var r=t.parent(),i=this.settings.prev_index||t.index(),s=this.direction(r,e,t),o=this.rtl?"right":"left",u=parseInt(r.css("left"),10),a=t.outerWidth(),f,l={};t.index()!==i&&!/skip/.test(s)?/left/.test(s)?(this.lock(),l[o]=u+ a,r.animate(l,300,this.unlock())):/right/.test(s)&&(this.lock(),l[o]=u- a,r.animate(l,300,this.unlock())):/skip/.test(s)&&(f=t.index()- this.settings.up_count,this.lock(),f>0?(l[o]=-(f*a),r.animate(l,300,this.unlock())):(l[o]=0,r.animate(l,300,this.unlock()))),n()},direction:function(e,t,n){var r=this.S("li",e),i=r.outerWidth()+ r.outerWidth()/ 4,
s=Math.floor(this.S(".clearing-container").outerWidth()/ i) - 1,
o=r.index(n),u;return this.settings.up_count=s,this.adjacent(this.settings.prev_index,o)?o>s&&o>this.settings.prev_index?u="right":o>s- 1&&o<=this.settings.prev_index?u="left":u=!1:u="skip",this.settings.prev_index=o,u},adjacent:function(e,t){for(var n=t+ 1;n>=t- 1;n--)
if(n===e)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";var i=function(){},s=function(i,s){if(i.hasClass(s.slides_container_class))return this;var f=this,l,c=i,h,p,d,v=0,m,g,y=!1,b=!1;f.slides=function(){return c.children(s.slide_selector)},f.slides().first().addClass(s.active_slide_class),f.update_slide_number=function(t){s.slide_number&&(h.find("span:first").text(parseInt(t)+ 1),h.find("span:last").text(f.slides().length)),s.bullets&&(p.children().removeClass(s.bullets_active_class),e(p.children().get(t)).addClass(s.bullets_active_class))},f.update_active_link=function(t){var n=e('a[data-orbit-link="'+ f.slides().eq(t).attr("data-orbit-slide")+'"]');n.siblings().removeClass(s.bullets_active_class),n.addClass(s.bullets_active_class)},f.build_markup=function(){c.wrap('<div class="'+ s.container_class+'"></div>'),l=c.parent(),c.addClass(s.slides_container_class),s.stack_on_small&&l.addClass(s.stack_on_small_class),s.navigation_arrows&&(l.append(e('<a href="#"><span></span></a>').addClass(s.prev_class)),l.append(e('<a href="#"><span></span></a>').addClass(s.next_class))),s.timer&&(d=e("<div>").addClass(s.timer_container_class),d.append("<span>"),d.append(e("<div>").addClass(s.timer_progress_class)),d.addClass(s.timer_paused_class),l.append(d)),s.slide_number&&(h=e("<div>").addClass(s.slide_number_class),h.append("<span></span> "+ s.slide_number_text+" <span></span>"),l.append(h)),s.bullets&&(p=e("<ol>").addClass(s.bullets_container_class),l.append(p),p.wrap('<div class="orbit-bullets-container"></div>'),f.slides().each(function(t,n){var r=e("<li>").attr("data-orbit-slide",t).on("click",f.link_bullet);p.append(r)}))},f._goto=function(t,n){if(t===v)return!1;typeof g=="object"&&g.restart();var r=f.slides(),i="next";y=!0,t<v&&(i="prev");if(t>=r.length){if(!s.circular)return!1;t=0}else if(t<0){if(!s.circular)return!1;t=r.length- 1}
var o=e(r.get(v)),u=e(r.get(t));o.css("zIndex",2),o.removeClass(s.active_slide_class),u.css("zIndex",4).addClass(s.active_slide_class),c.trigger("before-slide-change.fndtn.orbit"),s.before_slide_change(),f.update_active_link(t);var a=function(){var e=function(){v=t,y=!1,n===!0&&(g=f.create_timer(),g.start()),f.update_slide_number(v),c.trigger("after-slide-change.fndtn.orbit",[{slide_number:v,total_slides:r.length}]),s.after_slide_change(v,r.length)};c.height()!=u.height()&&s.variable_height?c.animate({height:u.height()},250,"linear",e):e()};if(r.length===1)return a(),!1;var l=function(){i==="next"&&m.next(o,u,a),i==="prev"&&m.prev(o,u,a)};u.height()>c.height()&&s.variable_height?c.animate({height:u.height()},250,"linear",l):l()},f.next=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(v+ 1)},f.prev=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(v- 1)},f.link_custom=function(t){t.preventDefault();var n=e(this).attr("data-orbit-link");if(typeof n=="string"&&(n=e.trim(n))!=""){var r=l.find("[data-orbit-slide="+ n+"]");r.index()!=-1&&f._goto(r.index())}},f.link_bullet=function(t){var n=e(this).attr("data-orbit-slide");if(typeof n=="string"&&(n=e.trim(n))!="")
if(isNaN(parseInt(n))){var r=l.find("[data-orbit-slide="+ n+"]");r.index()!=-1&&f._goto(r.index()+ 1)}else f._goto(parseInt(n))},f.timer_callback=function(){f._goto(v+ 1,!0)},f.compute_dimensions=function(){var t=e(f.slides().get(v)),n=t.height();s.variable_height||f.slides().each(function(){e(this).height()>n&&(n=e(this).height())}),c.height(n)},f.create_timer=function(){var e=new o(l.find("."+ s.timer_container_class),s,f.timer_callback);return e},f.stop_timer=function(){typeof g=="object"&&g.stop()},f.toggle_timer=function(){var e=l.find("."+ s.timer_container_class);e.hasClass(s.timer_paused_class)?(typeof g=="undefined"&&(g=f.create_timer()),g.start()):typeof g=="object"&&g.stop()},f.init=function(){f.build_markup(),s.timer&&(g=f.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),g.start)),m=new a(s,c),s.animation==="slide"&&(m=new u(s,c)),l.on("click","."+ s.next_class,f.next),l.on("click","."+ s.prev_class,f.prev),s.next_on_click&&l.on("click","."+ s.slides_container_class+" [data-orbit-slide]",f.link_bullet),l.on("click",f.toggle_timer),s.swipe&&l.on("touchstart.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};l.data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);if(e.touches.length>1||e.scale&&e.scale!==1)return;var t=l.data("swipe-transition");typeof t=="undefined"&&(t={}),t.delta_x=e.touches[0].pageX- t.start_page_x,typeof t.is_scrolling=="undefined"&&(t.is_scrolling=!!(t.is_scrolling||Math.abs(t.delta_x)<Math.abs(e.touches[0].pageY- t.start_page_y)));if(!t.is_scrolling&&!t.active){e.preventDefault();var n=t.delta_x<0?v+ 1:v- 1;t.active=!0,f._goto(n)}}).on("touchend.fndtn.orbit",function(e){l.data("swipe-transition",{}),e.stopPropagation()}),l.on("mouseenter.fndtn.orbit",function(e){s.timer&&s.pause_on_hover&&f.stop_timer()}).on("mouseleave.fndtn.orbit",function(e){s.timer&&s.resume_on_mouseout&&g.start()}),e(n).on("click","[data-orbit-link]",f.link_custom),e(t).on("load resize",f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){l.prev("."+ s.preloader_class).css("display","none"),f.update_slide_number(0),f.update_active_link(0),c.trigger("ready.fndtn.orbit")})},f.init()},o=function(e,t,n){var r=this,i=t.timer_speed,s=e.find("."+ t.timer_progress_class),o,u,a=-1;this.update_progress=function(e){var t=s.clone();t.attr("style",""),t.css("width",e+"%"),s.replaceWith(t),s=t},this.restart=function(){clearTimeout(u),e.addClass(t.timer_paused_class),a=-1,r.update_progress(0)},this.start=function(){if(!e.hasClass(t.timer_paused_class))return!0;a=a===-1?i:a,e.removeClass(t.timer_paused_class),o=(new Date).getTime(),s.animate({width:"100%"},a,"linear"),u=setTimeout(function(){r.restart(),n()},a),e.trigger("timer-started.fndtn.orbit")},this.stop=function(){if(e.hasClass(t.timer_paused_class))return!0;clearTimeout(u),e.addClass(t.timer_paused_class);var n=(new Date).getTime();a-=n- o;var s=100- a/i*100;r.update_progress(s),e.trigger("timer-stopped.fndtn.orbit")}},u=function(t,n){var r=t.animation_speed,i=e("html[dir=rtl]").length===1,s=i?"marginRight":"marginLeft",o={};o[s]="0%",this.next=function(e,t,n){e.animate({marginLeft:"-100%"},r),t.animate(o,r,function(){e.css(s,"100%"),n()})},this.prev=function(e,t,n){e.animate({marginLeft:"100%"},r),t.css(s,"-100%"),t.animate(o,r,function(){e.css(s,"100%"),n()})}},a=function(t,n){var r=t.animation_speed,i=e("html[dir=rtl]").length===1,s=i?"marginRight":"marginLeft";this.next=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},r,"linear",function(){e.css("margin","100%"),n()})},this.prev=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},r,"linear",function(){e.css("margin","100%"),n()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.3.0",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:i,after_slide_change:i},init:function(e,t,n){var r=this;this.bindings(t,n)},events:function(e){var t=new s(this.S(e),this.S(e).data("orbit-init"));this.S(e).data(self.name+"-instance",t)},reflow:function(){var e=this;if(e.S(e.scope).is("[data-orbit]")){var t=e.S(e.scope),n=t.data(e.name+"-instance");n.compute_dimensions()}else e.S("[data-orbit]",e.scope).each(function(t,n){var r=e.S(n),i=e.data_options(r),s=r.data(e.name+"-instance");s.compute_dimensions()})}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.3.0",settings:{open_method:"move",close_on_click:!0},init:function(e,t,n){this.bindings(t,n)},events:function(){var e=this,t=e.S,n="",r="",i="";this.settings.open_method==="move"?(n="move-",r="right",i="left"):this.settings.open_method==="overlap"&&(n="offcanvas-overlap"),t(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(t){e.click_toggle_class(t,n+ r)}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(t){var i=e.get_settings(t);i.close_on_click&&e.hide.call(e,n+ r,e.get_wrapper(t))}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(t){e.click_toggle_class(t,n+ i)}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(t){var r=e.get_settings(t);r.close_on_click&&e.hide.call(e,n+ i,e.get_wrapper(t))}).on("click.fndtn.offcanvas",".exit-off-canvas",function(t){e.click_remove_class(t,n+ i),r&&e.click_remove_class(t,n+ r)})},toggle:function(e,t){t=t||this.get_wrapper(),t.is("."+ e)?this.hide(e,t):this.show(e,t)},show:function(e,t){t=t||this.get_wrapper(),t.trigger("open").trigger("open.fndtn.offcanvas"),t.addClass(e)},hide:function(e,t){t=t||this.get_wrapper(),t.trigger("close").trigger("close.fndtn.offcanvas"),t.removeClass(e)},click_toggle_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.toggle(t,n)},click_remove_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.hide(t,n)},get_settings:function(e){var t=this.S(e.target).closest("["+ this.attr_name()+"]");return t.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(e){var t=this.S(e?e.target:this.scope).closest(".off-canvas-wrap");return t.length===0&&(t=this.S(".off-canvas-wrap")),t},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.alert={name:"alert",version:"5.3.0",settings:{callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;e(this.scope).off(".alert").on("click.fndtn.alert","["+ this.attr_name()+"] a.close",function(e){var r=n(this).closest("["+ t.attr_name()+"]"),i=r.data(t.attr_name(!0)+"-init")||t.settings;e.preventDefault(),Modernizr.csstransitions?(r.addClass("alert-close"),r.on("transitionend webkitTransitionEnd oTransitionEnd",function(e){n(this).trigger("close").trigger("close.fndtn.alert").remove(),i.callback()})):r.fadeOut(300,function(){n(this).trigger("close").trigger("close.fndtn.alert").remove(),i.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";function i(e){var t=/fade/i.test(e),n=/pop/i.test(e);return{animate:t||n,pop:n,fade:t}}
Foundation.libs.reveal={name:"reveal",version:"5.3.0",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,n,r){e.extend(!0,this.settings,n,r),this.bindings(n,r)},events:function(e){var t=this,r=t.S;return r(this.scope).off(".reveal").on("click.fndtn.reveal","["+ this.add_namespace("data-reveal-id")+"]:not([disabled])",function(e){e.preventDefault();if(!t.locked){var n=r(this),i=n.data(t.data_attr("reveal-ajax"));t.locked=!0;if(typeof i=="undefined")t.open.call(t,n);else{var s=i===!0?n.attr("href"):i;t.open.call(t,n,{url:s})}}}),r(n).on("touchend.fndtn.reveal click.fndtn.reveal",this.close_targets(),function(e){e.preventDefault();if(!t.locked){var n=r("["+ t.attr_name()+"].open").data(t.attr_name(!0)+"-init"),i=r(e.target)[0]===r("."+ n.bg_class)[0];if(i){if(!n.close_on_background_click)return;e.stopPropagation()}
t.locked=!0,t.close.call(t,i?r("["+ t.attr_name()+"].open"):r(this).closest("["+ t.attr_name()+"]"))}}),r("["+ t.attr_name()+"]",this.scope).length>0?r(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):r(this.scope).on("open.fndtn.reveal","["+ t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+ t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+ t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+ t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+ t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+ t.attr_name()+"]",this.close_video),!0},key_up_on:function(e){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var n=t.S("["+ t.attr_name()+"].open"),r=n.data(t.attr_name(!0)+"-init");r&&e.which===27&&r.close_on_esc&&!t.locked&&t.close.call(t,n)}),!0},key_up_off:function(e){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(t,n){var r=this,i;t?typeof t.selector!="undefined"?i=r.S("#"+ t.data(r.data_attr("reveal-id"))).first():(i=r.S(this.scope),n=t):i=r.S(this.scope);var s=i.data(r.attr_name(!0)+"-init");s=s||this.settings;if(!i.hasClass("open")){var o=r.S("["+ r.attr_name()+"].open");typeof i.data("css-top")=="undefined"&&i.data("css-top",parseInt(i.css("top"),10)).data("offset",this.cache_offset(i)),this.key_up_on(i),i.trigger("open").trigger("open.fndtn.reveal"),o.length<1&&this.toggle_bg(i,!0),typeof n=="string"&&(n={url:n});if(typeof n=="undefined"||!n.url)o.length>0&&this.hide(o,s.css.close),this.show(i,s.css.open);else{var u=typeof n.success!="undefined"?n.success:null;e.extend(n,{success:function(t,n,a){e.isFunction(u)&&u(t,n,a),i.html(t),r.S(i).foundation("section","reflow"),r.S(i).children().foundation(),o.length>0&&r.hide(o,s.css.close),r.show(i,s.css.open)}}),e.ajax(n)}}},close:function(e){var e=e&&e.length?e:this.S(this.scope),t=this.S("["+ this.attr_name()+"].open"),n=e.data(this.attr_name(!0)+"-init")||this.settings;t.length>0&&(this.locked=!0,this.key_up_off(e),e.trigger("close").trigger("close.fndtn.reveal"),this.toggle_bg(e,!1),this.hide(t,n.css.close,n))},close_targets:function(){var e="."+ this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+ this.settings.bg_class:e},toggle_bg:function(t,n){this.S("."+ this.settings.bg_class).length===0&&(this.settings.bg=e("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var i=this.settings.bg.filter(":visible").length>0;n!=i&&((n==r?i:!n)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(n,r){if(r){var s=n.data(this.attr_name(!0)+"-init")||this.settings,o=s.root_element;if(n.parent(o).length===0){var u=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(u),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(o)}
var a=i(s.animation);a.animate||(this.locked=!1);if(a.pop){r.top=e(t).scrollTop()- n.data("offset")+"px";var f={top:e(t).scrollTop()+ n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(r).animate(f,s.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),s.animation_speed/2)}
if(a.fade){r.top=e(t).scrollTop()+ n.data("css-top")+"px";var f={opacity:1};return setTimeout(function(){return n.css(r).animate(f,s.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),s.animation_speed/2)}
return n.css(r).show().css({opacity:1}).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")}
var s=this.settings;return i(s.animation).fade?n.fadeIn(s.animation_speed/2):(this.locked=!1,n.show())},hide:function(n,r){if(r){var s=n.data(this.attr_name(!0)+"-init");s=s||this.settings;var o=i(s.animation);o.animate||(this.locked=!1);if(o.pop){var u={top:-e(t).scrollTop()- n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(u,s.animation_speed,"linear",function(){this.locked=!1,n.css(r).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),s.animation_speed/2)}
if(o.fade){var u={opacity:0};return setTimeout(function(){return n.animate(u,s.animation_speed,"linear",function(){this.locked=!1,n.css(r).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),s.animation_speed/2)}
return n.hide().css(r).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")}
var s=this.settings;return i(s.animation).fade?n.fadeOut(s.animation_speed/2):n.hide()},close_video:function(t){var n=e(".flex-video",t.target),r=e("iframe",n);r.length>0&&(r.attr("data-src",r[0].src),r.attr("src","about:blank"),n.hide())},open_video:function(t){var n=e(".flex-video",t.target),i=n.find("iframe");if(i.length>0){var s=i.attr("data-src");if(typeof s=="string")i[0].src=i.attr("data-src");else{var o=i[0].src;i[0].src=r,i[0].src=o}
n.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+ e:e},cache_offset:function(e){var t=e.show().height()+ parseInt(e.css("top"),10);return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.3.0",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,medium:Foundation.media_queries.medium,large:Foundation.media_queries.large,xlarge:Foundation.media_queries.xlarge,xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,n,r){if(/IMG/.test(t[0].nodeName)){var i=t[0].src;if((new RegExp(n,"i")).test(i))return;return t[0].src=n,r(t[0].src)}
var s=t.data(this.data_attr+"-last-path"),o=this;if(s==n)return;return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n)?(e(t).css("background-image","url("+ n+")"),t.data("interchange-last-path",n),r(n)):e.get(n,function(e){t.html(e),t.data(o.data_attr+"-last-path",n),r()})}}},init:function(t,n,r){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),e.extend(!0,this.settings,n,r),this.bindings(n,r),this.load("images"),this.load("nodes")},get_media_hash:function(){var e="";for(var t in this.settings.named_queries)e+=matchMedia(this.settings.named_queries[t]).matches.toString();return e},events:function(){var n=this,r;return e(t).off(".interchange").on("resize.fndtn.interchange",n.throttle(function(){var e=n.get_media_hash();e!==r&&n.resize(),r=e},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded){setTimeout(e.proxy(this.resize,this),50);return}
for(var n in t)
if(t.hasOwnProperty(n)){var r=this.results(n,t[n]);r&&this.settings.directives[r.scenario[1]].call(this,r.el,r.scenario[0],function(){if(arguments[0]instanceof Array)var e=arguments[0];else var e=Array.prototype.slice.call(arguments,0);r.el.trigger(r.scenario[1],e)})}},results:function(e,t){var n=t.length;if(n>0){var r=this.S("["+ this.add_namespace("data-uuid")+'="'+ e+'"]');while(n--){var i,s=t[n][2];this.settings.named_queries.hasOwnProperty(s)?i=matchMedia(this.settings.named_queries[s]):i=matchMedia(s);if(i.matches)return{el:r,scenario:t[n]}}}
return!1},load:function(e,t){return(typeof this["cached_"+ e]=="undefined"||t)&&this["update_"+ e](),this["cached_"+ e]},update_images:function(){var e=this.S("img["+ this.data_attr+"]"),t=e.length,n=t,r=0,i=this.data_attr;this.cache={},this.cached_images=[],this.images_loaded=t===0;while(n--){r++;if(e[n]){var s=e[n].getAttribute(i)||"";s.length>0&&this.cached_images.push(e[n])}
r===t&&(this.images_loaded=!0,this.enhance("images"))}
return this},update_nodes:function(){var e=this.S("["+ this.data_attr+"]").not("img"),t=e.length,n=t,r=0,i=this.data_attr;this.cached_nodes=[],this.nodes_loaded=t===0;while(n--){r++;var s=e[n].getAttribute(i)||"";s.length>0&&this.cached_nodes.push(e[n]),r===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}
return this},enhance:function(n){var r=this["cached_"+ n].length;while(r--)this.object(e(this["cached_"+ n][r]));return e(t).trigger("resize").trigger("resize.fndtn.interchange")},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},parse_scenario:function(e){var t=e[0].match(/(.+),\s*(\w+)\s*$/),n=e[1];if(t)var r=t[1],i=t[2];else var s=e[0].split(/,\s*$/),r=s[0],i="";return[this.trim(r),this.convert_directive(i),this.trim(n)]},object:function(e){var t=this.parse_data_attr(e),n=[],r=t.length;if(r>0)
while(r--){var i=t[r].split(/\((.*?)(\))$/);if(i.length>1){var s=this.parse_scenario(i);n.push(s)}}
return this.store(e,n)},store:function(e,t){var n=this.random_str(),r=e.data(this.add_namespace("uuid",!0));return this.cache[r]?this.cache[r]:(e.attr(this.add_namespace("data-uuid"),n),this.cache[n]=t)},trim:function(t){return typeof t=="string"?e.trim(t):t},set_data_attr:function(e){return e?this.namespace.length>0?this.namespace+"-"+ this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+ this.namespace+"-"+ this.settings.load_attr:"data-"+ this.settings.load_attr},parse_data_attr:function(e){var t=e.attr(this.attr_name()).split(/\[(.*?)\]/),n=t.length,r=[];while(n--)t[n].replace(/[\W\d]+/,"").length>4&&r.push(t[n]);return r},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.3.0",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(){var n=this,r=n.S,i=n.settings;n.set_expedition_position(),r(n.scope).off(".magellan").on("click.fndtn.magellan","["+ n.add_namespace("data-magellan-arrival")+'] a[href^="#"]',function(t){t.preventDefault();var r=e(this).closest("["+ n.attr_name()+"]"),i=r.data("magellan-expedition-init"),s=this.hash.split("#").join(""),o=e("a[name='"+ s+"']");o.length===0&&(o=e("#"+ s));var u=o.offset().top- i.destination_threshold;u-=r.outerHeight(),e("html, body").stop().animate({scrollTop:u},700,"swing",function(){history.pushState?history.pushState(null,null,"#"+ s):location.hash="#"+ s})}).on("scroll.fndtn.magellan",n.throttle(this.check_for_arrivals.bind(this),i.throttle_delay)),e(t).on("resize.fndtn.magellan",n.throttle(this.set_expedition_position.bind(this),i.throttle_delay))},check_for_arrivals:function(){var e=this;e.update_arrivals(),e.update_expedition_positions()},set_expedition_position:function(){var t=this;e("["+ this.attr_name()+"=fixed]",t.scope).each(function(n,r){var i=e(this),s=i.data("magellan-expedition-init"),o=i.attr("styles"),u;i.attr("style",""),u=i.offset().top+ s.threshold,i.data(t.data_attr("magellan-top-offset"),u),i.attr("style",o)})},update_expedition_positions:function(){var n=this,r=e(t).scrollTop();e("["+ this.attr_name()+"=fixed]",n.scope).each(function(){var t=e(this),i=t.data("magellan-expedition-init"),s=t.data("magellan-top-offset");if(r>=s){var o=t.prev("["+ n.add_namespace("data-magellan-expedition-clone")+"]");o.length===0&&(o=t.clone(),o.removeAttr(n.attr_name()),o.attr(n.add_namespace("data-magellan-expedition-clone"),""),t.before(o)),t.css({position:"fixed",top:i.fixed_top})}else t.prev("["+ n.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style","").removeClass("fixed")})},update_arrivals:function(){var n=this,r=e(t).scrollTop();e("["+ this.attr_name()+"]",n.scope).each(function(){var t=e(this),i=t.data(n.attr_name(!0)+"-init"),s=n.offsets(t,r),o=t.find("["+ n.add_namespace("data-magellan-arrival")+"]"),u=!1;s.each(function(e,r){if(r.viewport_offset>=r.top_offset){var s=t.find("["+ n.add_namespace("data-magellan-arrival")+"]");return s.not(r.arrival).removeClass(i.active_class),r.arrival.addClass(i.active_class),u=!0,!0}}),u||o.removeClass(i.active_class)})},offsets:function(t,n){var r=this,i=t.data(r.attr_name(!0)+"-init"),s=n;return t.find("["+ r.add_namespace("data-magellan-arrival")+"]").map(function(n,o){var u=e(this).data(r.data_attr("magellan-arrival")),a=e("["+ r.add_namespace("data-magellan-destination")+"="+ u+"]");if(a.length>0){var f=a.offset().top- i.destination_threshold- t.outerHeight();return{destination:a,arrival:e(this),top_offset:f,viewport_offset:s}}}).sort(function(e,t){return e.top_offset<t.top_offset?-1:e.top_offset>t.top_offset?1:0})},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+ e:e},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},reflow:function(){var t=this;e("["+ t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.3.0",settings:{active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+ this.attr_name()+"] > dd > a",function(r){var i=n(this).closest("["+ t.attr_name()+"]"),s=n("#"+ this.href.split("#")[1]),o=n("dd > .content",i),u=e("dd",i),a=t.attr_name()+"="+ i.attr(t.attr_name()),f=i.data(t.attr_name(!0)+"-init"),l=n("dd > .content."+ f.active_class,i);r.preventDefault(),i.attr(t.attr_name())&&(o=o.add("["+ a+"] dd > .content"),u=u.add("["+ a+"] dd"));if(f.toggleable&&s.is(l)){s.parent("dd").toggleClass(f.active_class,!1),s.toggleClass(f.active_class,!1),f.callback(s),s.triggerHandler("toggled",[i]),i.triggerHandler("toggled",[s]);return}
f.multi_expand||(o.removeClass(f.active_class),u.removeClass(f.active_class)),s.addClass(f.active_class).parent().addClass(f.active_class),f.callback(s),s.triggerHandler("toggled",[i]),i.triggerHandler("toggled",[s])})},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.3.0",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,scrolltop:!0,sticky_on:"all"},init:function(t,n,r){Foundation.inherit(this,"add_custom_rule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar"),this.bindings(n,r),i.S("["+ this.attr_name()+"]",this.scope).each(function(){var t=e(this),n=t.data(i.attr_name(!0)+"-init"),r=i.S("section",this);t.data("index",0);var s=t.parent();s.hasClass("fixed")||i.is_sticky(t,s,n)?(i.settings.sticky_class=n.sticky_class,i.settings.sticky_topbar=t,t.data("height",s.outerHeight()),t.data("stickyoffset",s.offset().top)):t.data("height",t.outerHeight()),n.assembled||i.assemble(t),n.is_hover?i.S(".has-dropdown",t).addClass("not-click"):i.S(".has-dropdown",t).removeClass("not-click"),i.add_custom_rule(".f-topbar-fixed { padding-top: "+ t.data("height")+"px }"),s.hasClass("fixed")&&i.S("body").addClass("f-topbar-fixed")})},is_sticky:function(e,t,n){var r=t.hasClass(n.sticky_class);return r&&n.sticky_on==="all"?!0:r&&this.small()&&n.sticky_on==="small"?matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:r&&this.medium()&&n.sticky_on==="medium"?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:r&&this.large()&&n.sticky_on==="large"?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&matchMedia(Foundation.media_queries.large).matches:!1},toggle:function(n){var r=this,i;n?i=r.S(n).closest("["+ this.attr_name()+"]"):i=r.S("["+ this.attr_name()+"]");var s=i.data(this.attr_name(!0)+"-init"),o=r.S("section, .section",i);r.breakpoint()&&(r.rtl?(o.css({right:"0%"}),e(">.name",o).css({right:"100%"})):(o.css({left:"0%"}),e(">.name",o).css({left:"100%"})),r.S("li.moved",o).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),s.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(s.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),r.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),r.S("body").addClass("f-topbar-fixed")):(r.is_sticky(i,i.parent(),s)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded"),r.S("body").addClass("f-topbar-fixed")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),r.update_sticky_positioning())))},timer:null,events:function(n){var r=this,i=this.S;i(this.scope).off(".topbar").on("click.fndtn.topbar","["+ this.attr_name()+"] .toggle-topbar",function(e){e.preventDefault(),r.toggle(this)}).on("click.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+ this.attr_name()+'] .top-bar-section li a[href^="#"]',function(t){var n=e(this).closest("li");r.breakpoint()&&!n.hasClass("back")&&!n.hasClass("has-dropdown")&&r.toggle()}).on("click.fndtn.topbar","["+ this.attr_name()+"] li.has-dropdown",function(t){var n=i(this),s=i(t.target),o=n.closest("["+ r.attr_name()+"]"),u=o.data(r.attr_name(!0)+"-init");if(s.data("revealId")){r.toggle();return}
if(r.breakpoint())return;if(u.is_hover&&!Modernizr.touch)return;t.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),e(n).siblings().removeClass("hover"),s[0].nodeName==="A"&&s.parent().hasClass("has-dropdown")&&t.preventDefault())}).on("click.fndtn.topbar","["+ this.attr_name()+"] .has-dropdown>a",function(e){if(r.breakpoint()){e.preventDefault();var t=i(this),n=t.closest("["+ r.attr_name()+"]"),s=n.find("section, .section"),o=t.next(".dropdown").outerHeight(),u=t.closest("li");n.data("index",n.data("index")+ 1),u.addClass("moved"),r.rtl?(s.css({right:-(100*n.data("index"))+"%"}),s.find(">.name").css({right:100*n.data("index")+"%"})):(s.css({left:-(100*n.data("index"))+"%"}),s.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",t.siblings("ul").outerHeight(!0)+ n.data("height"))}}),i(t).off(".topbar").on("resize.fndtn.topbar",r.throttle(function(){r.resize.call(r)},50)).trigger("resize").trigger("resize.fndtn.topbar"),i("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar",function(e){var t=i(e.target).closest("li").closest("li.hover");if(t.length>0)return;i("["+ r.attr_name()+"] li.hover").removeClass("hover")}),i(this.scope).on("click.fndtn.topbar","["+ this.attr_name()+"] .has-dropdown .back",function(e){e.preventDefault();var t=i(this),n=t.closest("["+ r.attr_name()+"]"),s=n.find("section, .section"),o=n.data(r.attr_name(!0)+"-init"),u=t.closest("li.moved"),a=u.parent();n.data("index",n.data("index")- 1),r.rtl?(s.css({right:-(100*n.data("index"))+"%"}),s.find(">.name").css({right:100*n.data("index")+"%"})):(s.css({left:-(100*n.data("index"))+"%"}),s.find(">.name").css({left:100*n.data("index")+"%"})),n.data("index")===0?n.css("height",""):n.css("height",a.outerHeight(!0)+ n.data("height")),setTimeout(function(){u.removeClass("moved")},300)})},resize:function(){var e=this;e.S("["+ this.attr_name()+"]").each(function(){var t=e.S(this),r=t.data(e.attr_name(!0)+"-init"),i=t.parent("."+ e.settings.sticky_class),s;if(!e.breakpoint()){var o=t.hasClass("expanded");t.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&e.toggle(t)}
e.is_sticky(t,i,r)&&(i.hasClass("fixed")?(i.removeClass("fixed"),s=i.offset().top,e.S(n.body).hasClass("f-topbar-fixed")&&(s-=t.data("height")),t.data("stickyoffset",s),i.addClass("fixed")):(s=i.offset().top,t.data("stickyoffset",s)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var n=this,r=t.data(this.attr_name(!0)+"-init"),i=n.S("section",t);i.detach(),n.S(".has-dropdown>a",i).each(function(){var t=n.S(this),i=t.siblings(".dropdown"),s=t.attr("href"),o;i.find(".title.back").length||(o=e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>'),r.custom_back_text==1?e("h5>a",o).html(r.back_text):e("h5>a",o).html("&laquo; "+ t.html()),i.prepend(o))}),i.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),e.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var n=0,r=this;return e("> li",t).each(function(){n+=r.S(this).outerHeight(!0)}),n},sticky:function(){var e=this;this.S(t).on("scroll",function(){e.update_sticky_positioning()})},update_sticky_positioning:function(){var e="."+ this.settings.sticky_class,n=this.S(t),r=this;if(r.settings.sticky_topbar&&r.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var i=this.settings.sticky_topbar.data("stickyoffset");r.S(e).hasClass("expanded")||(n.scrollTop()>i?r.S(e).hasClass("fixed")||(r.S(e).addClass("fixed"),r.S("body").addClass("f-topbar-fixed")):n.scrollTop()<=i&&r.S(e).hasClass("fixed")&&(r.S(e).removeClass("fixed"),r.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.tab={name:"tab",version:"5.3.0",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,t,n){var r=this,i=this.S;this.bindings(t,n),this.handle_location_hash_change(),i("["+ this.attr_name()+"] > .active > a",this.scope).each(function(){r.default_tab_hashes.push(this.hash)})},events:function(){var e=this,n=this.S;n(this.scope).off(".tab").on("click.fndtn.tab","["+ this.attr_name()+"] > * > a",function(t){var r=n(this).closest("["+ e.attr_name()+"]").data(e.attr_name(!0)+"-init");if(!r.is_hover||Modernizr.touch)t.preventDefault(),t.stopPropagation(),e.toggle_active_tab(n(this).parent())}).on("mouseenter.fndtn.tab","["+ this.attr_name()+"] > * > a",function(t){var r=n(this).closest("["+ e.attr_name()+"]").data(e.attr_name(!0)+"-init");r.is_hover&&e.toggle_active_tab(n(this).parent())}),n(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,n=this.S;n("["+ this.attr_name()+"]",this.scope).each(function(){var i=n(this).data(t.attr_name(!0)+"-init");if(i.deep_linking){var s=t.scope.location.hash;if(s!=""){var o=n(s);if(o.hasClass("content")&&o.parent().hasClass("tab-content"))t.toggle_active_tab(e("["+ t.attr_name()+"] > * > a[href="+ s+"]").parent());else{var u=o.closest(".content").attr("id");u!=r&&t.toggle_active_tab(e("["+ t.attr_name()+"] > * > a[href=#"+ u+"]").parent(),s)}}else
for(var a in t.default_tab_hashes)t.toggle_active_tab(e("["+ t.attr_name()+"] > * > a[href="+ t.default_tab_hashes[a]+"]").parent())}})},toggle_active_tab:function(n,i){var s=this.S,o=n.closest("["+ this.attr_name()+"]"),u=n.children("a").first(),a="#"+ u.attr("href").split("#")[1],f=s(a),l=n.siblings(),c=o.data(this.attr_name(!0)+"-init");s(this).data(this.data_attr("tab-content"))&&(a="#"+ s(this).data(this.data_attr("tab-content")).split("#")[1],f=s(a));if(c.deep_linking){var h=e("body,html").scrollTop();i!=r?t.location.hash=i:t.location.hash=a,c.scroll_to_content?i==r||i==a?n.parent()[0].scrollIntoView():s(a)[0].scrollIntoView():(i==r||i==a)&&e("body,html").scrollTop(h)}
n.addClass(c.active_class).triggerHandler("opened"),l.removeClass(c.active_class),f.siblings().removeClass(c.active_class).end().addClass(c.active_class),c.callback(n),f.triggerHandler("toggled",[n]),o.triggerHandler("toggled",[f])},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+ e:e},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.abide={name:"abide",version:"5.3.0",settings:{live_validate:!0,focus_on_invalid:!0,error_labels:!0,timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,t,r){var i=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,s=e.value,o=i===s;return o}}},timer:null,init:function(e,t,n){this.bindings(t,n)},events:function(t){var n=this,r=n.S(t).attr("novalidate","novalidate"),i=r.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),r.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function(e){var t=/ajax/i.test(n.S(this).attr(n.attr_name()));return n.validate(n.S(this).find("input, textarea, select").get(),e,t)}).on("reset",function(){return n.reset(e(this))}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(e){n.validate([this],e)}).on("keydown.fndtn.abide",function(e){i.live_validate===!0&&(clearTimeout(n.timer),n.timer=setTimeout(function(){n.validate([this],e)}.bind(this),i.timeout))})},reset:function(t){t.removeAttr(this.invalid_attr),e(this.invalid_attr,t).removeAttr(this.invalid_attr),e(".error",t).not("small").removeClass("error")},validate:function(e,t,n){var r=this.parse_patterns(e),i=r.length,s=this.S(e[0]).closest("[data-"+ this.attr_name(!0)+"]"),o=s.data(this.attr_name(!0)+"-init")||{},u=/submit/.test(t.type);s.trigger("validated").trigger("validated.fndtn.abide");for(var a=0;a<i;a++)
if(!r[a]&&(u||n))return o.focus_on_invalid&&e[a].focus(),s.trigger("invalid").trigger("invalid.fndtn.abide"),this.S(e[a]).closest("[data-"+ this.attr_name(!0)+"]").attr(this.invalid_attr,""),!1;return(u||n)&&s.trigger("valid").trigger("valid.fndtn.abide"),s.removeAttr(this.invalid_attr),n?!1:!0},parse_patterns:function(e){var t=e.length,n=[];while(t--)n.push(this.pattern(e[t]));return this.check_validation_and_apply_styles(n)},pattern:function(e){var t=e.getAttribute("type"),n=typeof e.getAttribute("required")=="string",r=e.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(r)&&r.length>0?[e,this.settings.patterns[r],n]:r.length>0?[e,new RegExp("^"+ r+"$"),n]:this.settings.patterns.hasOwnProperty(t)?[e,this.settings.patterns[t],n]:(r=/.*/,[e,r,n])},check_validation_and_apply_styles:function(t){var n=t.length,r=[],i=this.S(t[0][0]).closest("[data-"+ this.attr_name(!0)+"]"),s=i.data(this.attr_name(!0)+"-init")||{};while(n--){var o=t[n][0],u=t[n][2],a=o.value.trim(),f=this.S(o).parent(),l=o.getAttribute(this.add_namespace("data-abide-validator")),c=o.type==="radio",h=o.type==="checkbox",p=this.S('label[for="'+ o.getAttribute("id")+'"]'),d=u?o.value.length>0:!0,v,m;o.getAttribute(this.add_namespace("data-equalto"))&&(l="equalTo"),f.is("label")?v=f.parent():v=f,c&&u?r.push(this.valid_radio(o,u)):h&&u?r.push(this.valid_checkbox(o,u)):l?(m=this.settings.validators[l].apply(this,[o,u,v]),r.push(m),m?(this.S(o).removeAttr(this.invalid_attr),v.removeClass("error")):(this.S(o).attr(this.invalid_attr,""),v.addClass("error"))):t[n][1].test(a)&&d||!u&&o.value.length<1||e(o).attr("disabled")?(this.S(o).removeAttr(this.invalid_attr),v.removeClass("error"),p.length>0&&s.error_labels&&p.removeClass("error"),r.push(!0),e(o).triggerHandler("valid")):(this.S(o).attr(this.invalid_attr,""),v.addClass("error"),p.length>0&&s.error_labels&&p.addClass("error"),r.push(!1),e(o).triggerHandler("invalid"))}
return r},valid_checkbox:function(e,t){var e=this.S(e),n=e.is(":checked")||!t;return n?e.removeAttr(this.invalid_attr).parent().removeClass("error"):e.attr(this.invalid_attr,"").parent().addClass("error"),n},valid_radio:function(e,t){var n=e.getAttribute("name"),r=this.S(e).closest("[data-"+ this.attr_name(!0)+"]").find("[name='"+ n+"']"),i=r.length,s=!1;for(var o=0;o<i;o++)r[o].checked&&(s=!0);for(var o=0;o<i;o++)s?this.S(r[o]).removeAttr(this.invalid_attr).parent().removeClass("error"):this.S(r[o]).attr(this.invalid_attr,"").parent().addClass("error");return s},valid_equal:function(e,t,r){var i=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,s=e.value,o=i===s;return o?(this.S(e).removeAttr(this.invalid_attr),r.removeClass("error")):(this.S(e).attr(this.invalid_attr,""),r.addClass("error")),o},valid_oneof:function(e,t,n,r){var e=this.S(e),i=this.S("["+ this.add_namespace("data-oneof")+"]"),s=i.filter(":checked").length>0;s?e.removeAttr(this.invalid_attr).parent().removeClass("error"):e.attr(this.invalid_attr,"").parent().addClass("error");if(!r){var o=this;i.each(function(){o.valid_oneof.call(o,this,null,null,!0)})}
return s}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.3.0",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(e,t){return'<span data-selector="'+ e+'" class="'+ Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'">'+ t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){Foundation.inherit(this,"random_str"),this.bindings(t,n)},should_show:function(t,n){var r=e.extend({},this.settings,this.data_options(t));return r.show_on==="all"?!0:this.small()&&r.show_on==="small"?!0:this.medium()&&r.show_on==="medium"?!0:this.large()&&r.show_on==="large"?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(t){var n=this,r=n.S;n.create(this.S(t)),e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+ this.attr_name()+"]",function(t){var i=r(this),s=e.extend({},n.settings,n.data_options(i)),o=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&r(t.target).is("a"))return!1;if(/mouse/i.test(t.type)&&n.ie_touch(t))return!1;if(i.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),n.hide(i);else{if(s.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;!s.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),r(s.tooltip_class+".open").hide(),o=!0),/enter|over/i.test(t.type)?this.timer=setTimeout(function(){var e=n.showTip(i)}.bind(this),n.settings.hover_delay):t.type==="mouseout"||t.type==="mouseleave"?(clearTimeout(this.timer),n.hide(i)):n.showTip(i)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+ this.attr_name()+"].open",function(t){if(/mouse/i.test(t.type)&&n.ie_touch(t))return!1;if(e(this).data("tooltip-open-event-type")=="touch"&&t.type=="mouseleave")return;e(this).data("tooltip-open-event-type")=="mouse"&&/MSPointerDown|touchstart/i.test(t.type)?n.convert_to_touch(e(this)):n.hide(e(this))}).on("DOMNodeRemoved DOMAttrModified","["+ this.attr_name()+"]:not(a)",function(e){n.hide(r(this))})},ie_touch:function(e){return!1},showTip:function(e){var t=this.getTip(e);if(this.should_show(e,t))return this.show(e);return},getTip:function(t){var n=this.selector(t),r=e.extend({},this.settings,this.data_options(t)),i=null;return n&&(i=this.S('span[data-selector="'+ n+'"]'+ r.tooltip_class)),typeof i=="object"?i:!1},selector:function(e){var t=e.attr("id"),n=e.attr(this.attr_name())||e.attr("data-selector");return(t&&t.length<1||!t)&&typeof n!="string"&&(n=this.random_str(6),e.attr("data-selector",n)),t&&t.length>0?t:n},create:function(n){var r=this,i=e.extend({},this.settings,this.data_options(n)),s=this.settings.tip_template;typeof i.tip_template=="string"&&t.hasOwnProperty(i.tip_template)&&(s=t[i.tip_template]);var o=e(s(this.selector(n),e("<div></div>").html(n.attr("title")).html())),u=this.inheritable_classes(n);o.addClass(u).appendTo(i.append_to),Modernizr.touch&&(o.append('<span class="tap-to-close">'+ i.touch_close_text+"</span>"),o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(e){r.hide(n)})),n.removeAttr("title").attr("title","")},reposition:function(t,n,r){var i,s,o,u,a,f;n.css("visibility","hidden").show(),i=t.data("width"),s=n.children(".nub"),o=s.outerHeight(),u=s.outerHeight(),this.small()?n.css({width:"100%"}):n.css({width:i?i:"auto"}),f=function(e,t,n,r,i,s){return e.css({top:t?t:"auto",bottom:r?r:"auto",left:i?i:"auto",right:n?n:"auto"}).end()},f(n,t.offset().top+ t.outerHeight()+ 10,"auto","auto",t.offset().left);if(this.small())f(n,t.offset().top+ t.outerHeight()+ 10,"auto","auto",12.5,e(this.scope).width()),n.addClass("tip-override"),f(s,-o,"auto","auto",t.offset().left);else{var l=t.offset().left;Foundation.rtl&&(s.addClass("rtl"),l=t.offset().left+ t.outerWidth()- n.outerWidth()),f(n,t.offset().top+ t.outerHeight()+ 10,"auto","auto",l),n.removeClass("tip-override"),r&&r.indexOf("tip-top")>-1?(Foundation.rtl&&s.addClass("rtl"),f(n,t.offset().top- n.outerHeight(),"auto","auto",l).removeClass("tip-override")):r&&r.indexOf("tip-left")>-1?(f(n,t.offset().top+ t.outerHeight()/ 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left - n.outerWidth() - o).removeClass("tip-override"), s.removeClass("rtl")) : r && r.indexOf("tip-right") > -1 && (f(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + o).removeClass("tip-override"), s.removeClass("rtl"))
}
n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var n=e.extend({},this.settings,this.data_options(t)),r=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(n.additional_inheritable_classes),i=t.attr("class"),s=i?e.map(i.split(" "),function(t,n){if(e.inArray(t,r)!==-1)return t}).join(" "):"";return e.trim(s)},convert_to_touch:function(t){var n=this,r=n.getTip(t),i=e.extend({},n.settings,n.data_options(t));r.find(".tap-to-close").length===0&&(r.append('<span class="tap-to-close">'+ i.touch_close_text+"</span>"),r.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(e){n.hide(t)})),t.data("tooltip-open-event-type","touch")},show:function(e){var t=this.getTip(e);e.data("tooltip-open-event-type")=="touch"&&this.convert_to_touch(e),this.reposition(e,t,e.attr("class")),e.addClass("open"),t.fadeIn(150)},hide:function(e){var t=this.getTip(e);t.fadeOut(150,function(){t.find(".tap-to-close").remove(),t.off("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),e.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(n){e("["+ t.attr_name()+"]").eq(n).attr("title",e(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);;(function($,window,document,undefined){'use strict';Foundation.libs['magellan-expedition']={name:'magellan-expedition',version:'5.3.0',settings:{active_class:'active',threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0},init:function(scope,method,options){Foundation.inherit(this,'throttle');this.bindings(method,options);},events:function(){var self=this,S=self.S,settings=self.settings;self.set_expedition_position();S(self.scope).off('.magellan').on('click.fndtn.magellan','['+ self.add_namespace('data-magellan-arrival')+'] a[href^="#"]',function(e){e.preventDefault();var expedition=$(this).closest('['+ self.attr_name()+']'),settings=expedition.data('magellan-expedition-init'),hash=this.hash.split('#').join(''),target=$("a[name='"+hash+"']");if(target.length===0){target=$('#'+hash);}
var scroll_top=target.offset().top- settings.destination_threshold;scroll_top=scroll_top- expedition.outerHeight();$('html, body').stop().animate({'scrollTop':scroll_top},700,'swing',function(){if(history.pushState){history.pushState(null,null,'#'+hash);}
else{location.hash='#'+hash;}});}).on('scroll.fndtn.magellan',self.throttle(this.check_for_arrivals.bind(this),settings.throttle_delay));$(window).on('resize.fndtn.magellan',self.throttle(this.set_expedition_position.bind(this),settings.throttle_delay));},check_for_arrivals:function(){var self=this;self.update_arrivals();self.update_expedition_positions();},set_expedition_position:function(){var self=this;$('['+ this.attr_name()+'=fixed]',self.scope).each(function(idx,el){var expedition=$(this),settings=expedition.data('magellan-expedition-init'),styles=expedition.attr('styles'),top_offset;expedition.attr('style','');top_offset=expedition.offset().top+ settings.threshold;expedition.data(self.data_attr('magellan-top-offset'),top_offset);expedition.attr('style',styles);});},update_expedition_positions:function(){var self=this,window_top_offset=$(window).scrollTop();$('['+ this.attr_name()+'=fixed]',self.scope).each(function(){var expedition=$(this),settings=expedition.data('magellan-expedition-init'),top_offset=expedition.data('magellan-top-offset');if(window_top_offset>=top_offset){var placeholder=expedition.prev('['+ self.add_namespace('data-magellan-expedition-clone')+']');if(placeholder.length===0){placeholder=expedition.clone();placeholder.removeAttr(self.attr_name());placeholder.attr(self.add_namespace('data-magellan-expedition-clone'),'');expedition.before(placeholder);}
expedition.css({position:'fixed',top:settings.fixed_top});}else{expedition.prev('['+ self.add_namespace('data-magellan-expedition-clone')+']').remove();expedition.attr('style','').removeClass('fixed');}});},update_arrivals:function(){var self=this,window_top_offset=$(window).scrollTop();$('['+ this.attr_name()+']',self.scope).each(function(){var expedition=$(this),settings=expedition.data(self.attr_name(true)+'-init'),offsets=self.offsets(expedition,window_top_offset),arrivals=expedition.find('['+ self.add_namespace('data-magellan-arrival')+']'),active_item=false;offsets.each(function(idx,item){if(item.viewport_offset>=item.top_offset){var arrivals=expedition.find('['+ self.add_namespace('data-magellan-arrival')+']');arrivals.not(item.arrival).removeClass(settings.active_class);item.arrival.addClass(settings.active_class);active_item=true;return true;}});if(!active_item)arrivals.removeClass(settings.active_class);});},offsets:function(expedition,window_offset){var self=this,settings=expedition.data(self.attr_name(true)+'-init'),viewport_offset=window_offset;return expedition.find('['+ self.add_namespace('data-magellan-arrival')+']').map(function(idx,el){var name=$(this).data(self.data_attr('magellan-arrival')),dest=$('['+ self.add_namespace('data-magellan-destination')+'='+ name+']');if(dest.length>0){var top_offset=dest.offset().top- settings.destination_threshold- expedition.outerHeight();return{destination:dest,arrival:$(this),top_offset:top_offset,viewport_offset:viewport_offset}}}).sort(function(a,b){if(a.top_offset<b.top_offset)return-1;if(a.top_offset>b.top_offset)return 1;return 0;});},data_attr:function(str){if(this.namespace.length>0){return this.namespace+'-'+ str;}
return str;},off:function(){this.S(this.scope).off('.magellan');this.S(window).off('.magellan');},reflow:function(){var self=this;$('['+ self.add_namespace('data-magellan-expedition-clone')+']',self.scope).remove();}};}(jQuery,window,window.document));;(function($,window,document,undefined){'use strict';Foundation.libs.tooltip={name:'tooltip',version:'5.3.0',settings:{additional_inheritable_classes:[],tooltip_class:'.tooltip',append_to:'body',touch_close_text:'Tap To Close',disable_for_touch:false,hover_delay:200,show_on:'all',tip_template:function(selector,content){return'<span data-selector="'+ selector+'" class="'
+ Foundation.libs.tooltip.settings.tooltip_class.substring(1)
+'">'+ content+'<span class="nub"></span></span>';}},cache:{},init:function(scope,method,options){Foundation.inherit(this,'random_str');this.bindings(method,options);},should_show:function(target,tip){var settings=$.extend({},this.settings,this.data_options(target));if(settings.show_on==='all'){return true;}else if(this.small()&&settings.show_on==='small'){return true;}else if(this.medium()&&settings.show_on==='medium'){return true;}else if(this.large()&&settings.show_on==='large'){return true;}
return false;},medium:function(){return matchMedia(Foundation.media_queries['medium']).matches;},large:function(){return matchMedia(Foundation.media_queries['large']).matches;},events:function(instance){var self=this,S=self.S;self.create(this.S(instance));$(this.scope).off('.tooltip').on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip','['+ this.attr_name()+']',function(e){var $this=S(this),settings=$.extend({},self.settings,self.data_options($this)),is_touch=false;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)&&S(e.target).is('a')){return false;}
if(/mouse/i.test(e.type)&&self.ie_touch(e))return false;if($this.hasClass('open')){if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type))e.preventDefault();self.hide($this);}else{if(settings.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)){return;}else if(!settings.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(e.type)){e.preventDefault();S(settings.tooltip_class+'.open').hide();is_touch=true;}
if(/enter|over/i.test(e.type)){this.timer=setTimeout(function(){var tip=self.showTip($this);}.bind(this),self.settings.hover_delay);}else if(e.type==='mouseout'||e.type==='mouseleave'){clearTimeout(this.timer);self.hide($this);}else{self.showTip($this);}}}).on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip','['+ this.attr_name()+'].open',function(e){if(/mouse/i.test(e.type)&&self.ie_touch(e))return false;if($(this).data('tooltip-open-event-type')=='touch'&&e.type=='mouseleave'){return;}
else if($(this).data('tooltip-open-event-type')=='mouse'&&/MSPointerDown|touchstart/i.test(e.type)){self.convert_to_touch($(this));}else{self.hide($(this));}}).on('DOMNodeRemoved DOMAttrModified','['+ this.attr_name()+']:not(a)',function(e){self.hide(S(this));});},ie_touch:function(e){return false;},showTip:function($target){var $tip=this.getTip($target);if(this.should_show($target,$tip)){return this.show($target);}
return;},getTip:function($target){var selector=this.selector($target),settings=$.extend({},this.settings,this.data_options($target)),tip=null;if(selector){tip=this.S('span[data-selector="'+ selector+'"]'+ settings.tooltip_class);}
return(typeof tip==='object')?tip:false;},selector:function($target){var id=$target.attr('id'),dataSelector=$target.attr(this.attr_name())||$target.attr('data-selector');if((id&&id.length<1||!id)&&typeof dataSelector!='string'){dataSelector=this.random_str(6);$target.attr('data-selector',dataSelector);}
return(id&&id.length>0)?id:dataSelector;},create:function($target){var self=this,settings=$.extend({},this.settings,this.data_options($target)),tip_template=this.settings.tip_template;if(typeof settings.tip_template==='string'&&window.hasOwnProperty(settings.tip_template)){tip_template=window[settings.tip_template];}
var $tip=$(tip_template(this.selector($target),$('<div></div>').html($target.attr('title')).html())),classes=this.inheritable_classes($target);$tip.addClass(classes).appendTo(settings.append_to);if(Modernizr.touch){$tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');$tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',function(e){self.hide($target);});}
$target.removeAttr('title').attr('title','');},reposition:function(target,tip,classes){var width,nub,nubHeight,nubWidth,column,objPos;tip.css('visibility','hidden').show();width=target.data('width');nub=tip.children('.nub');nubHeight=nub.outerHeight();nubWidth=nub.outerHeight();if(this.small()){tip.css({'width':'100%'});}else{tip.css({'width':(width)?width:'auto'});}
objPos=function(obj,top,right,bottom,left,width){return obj.css({'top':(top)?top:'auto','bottom':(bottom)?bottom:'auto','left':(left)?left:'auto','right':(right)?right:'auto'}).end();};objPos(tip,(target.offset().top+ target.outerHeight()+ 10),'auto','auto',target.offset().left);if(this.small()){objPos(tip,(target.offset().top+ target.outerHeight()+ 10),'auto','auto',12.5,$(this.scope).width());tip.addClass('tip-override');objPos(nub,-nubHeight,'auto','auto',target.offset().left);}else{var left=target.offset().left;if(Foundation.rtl){nub.addClass('rtl');left=target.offset().left+ target.outerWidth()- tip.outerWidth();}
objPos(tip,(target.offset().top+ target.outerHeight()+ 10),'auto','auto',left);tip.removeClass('tip-override');if(classes&&classes.indexOf('tip-top')>-1){if(Foundation.rtl)nub.addClass('rtl');objPos(tip,(target.offset().top- tip.outerHeight()),'auto','auto',left).removeClass('tip-override');}else if(classes&&classes.indexOf('tip-left')>-1){objPos(tip,(target.offset().top+(target.outerHeight()/ 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
.removeClass('tip-override');nub.removeClass('rtl');}else if(classes&&classes.indexOf('tip-right')>-1){objPos(tip,(target.offset().top+(target.outerHeight()/ 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
.removeClass('tip-override');nub.removeClass('rtl');}}
tip.css('visibility','visible').hide();},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches;},inheritable_classes:function($target){var settings=$.extend({},this.settings,this.data_options($target)),inheritables=['tip-top','tip-left','tip-bottom','tip-right','radius','round'].concat(settings.additional_inheritable_classes),classes=$target.attr('class'),filtered=classes?$.map(classes.split(' '),function(el,i){if($.inArray(el,inheritables)!==-1){return el;}}).join(' '):'';return $.trim(filtered);},convert_to_touch:function($target){var self=this,$tip=self.getTip($target),settings=$.extend({},self.settings,self.data_options($target));if($tip.find('.tap-to-close').length===0){$tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');$tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose',function(e){self.hide($target);});}
$target.data('tooltip-open-event-type','touch');},show:function($target){var $tip=this.getTip($target);if($target.data('tooltip-open-event-type')=='touch'){this.convert_to_touch($target);}
this.reposition($target,$tip,$target.attr('class'));$target.addClass('open');$tip.fadeIn(150);},hide:function($target){var $tip=this.getTip($target);$tip.fadeOut(150,function(){$tip.find('.tap-to-close').remove();$tip.off('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');$target.removeClass('open');});},off:function(){var self=this;this.S(this.scope).off('.fndtn.tooltip');this.S(this.settings.tooltip_class).each(function(i){$('['+ self.attr_name()+']').eq(i).attr('title',$(this).text());}).remove();},reflow:function(){}};}(jQuery,window,window.document));function responsiveTabs(){$(".responsive-tabs").not('.manual').each(function(){$(".responsive-tabs-panel").not(":first").hide(),$("li",this).removeClass("active"),$("li:first-child",this).addClass("active"),$(".responsive-tabs-panel:first-child").show(),$("li",this).click(function(s){s.preventDefault();var e=$("a",this).attr("href");$(this).siblings().removeClass("active"),$(this).addClass("active"),$(e).siblings().hide(),$(e).show()}),$(window).width()<768&&$("#tab-section .responsive-tabs-panel").show()}),$(".responsive-tabs-content .responsive-tabs-panel .responsive-tabs-panel-link").on("click",function(s){var e=$(this).attr("href");$(this).parents(".responsive-tabs-content").siblings(".responsive-tabs").find("a[href="+ e+"]").parent().siblings().removeClass("active"),$(this).parents(".responsive-tabs-content").siblings(".responsive-tabs").find("a[href="+ e+"]").parent().addClass("active"),$(e).siblings().hide(),$(e).show(),s.preventDefault()})}
$(document).ready(function(){responsiveTabs(),$(".responsive-tabs li a").each(function(){var s=$(this).attr("href"),e=$(this).html();$(s+" .responsive-tab-title").prepend("<p>"+ e+"</p>")})}),$(window).resize(function(){responsiveTabs()});function convertToSlug(e){var t={"2d":"-",20:"-",24:"s",26:"and",30:"0",31:"1",32:"2",33:"3",34:"4",35:"5",36:"6",37:"7",38:"8",39:"9",41:"A",42:"B",43:"C",44:"D",45:"E",46:"F",47:"G",48:"H",49:"I",50:"P",51:"Q",52:"R",53:"S",54:"T",55:"U",56:"V",57:"W",58:"X",59:"Y",61:"a",62:"b",63:"c",64:"d",65:"e",66:"f",67:"g",68:"h",69:"i",70:"p",71:"q",72:"r",73:"s",74:"t",75:"u",76:"v",77:"w",78:"x",79:"y",100:"A",101:"a",102:"A",103:"a",104:"A",105:"a",106:"C",107:"c",108:"C",109:"c",110:"D",111:"d",112:"E",113:"e",114:"E",115:"e",116:"E",117:"e",118:"E",119:"e",120:"G",121:"g",122:"G",123:"g",124:"H",125:"h",126:"H",127:"h",128:"I",129:"i",130:"I",131:"i",132:"IJ",133:"ij",134:"J",135:"j",136:"K",137:"k",138:"k",139:"L",140:"l",141:"L",142:"l",143:"N",144:"n",145:"N",146:"n",147:"N",148:"n",149:"n",150:"O",151:"o",152:"OE",153:"oe",154:"R",155:"r",156:"R",157:"r",158:"R",159:"r",160:"S",161:"s",162:"T",163:"t",164:"T",165:"t",166:"T",167:"t",168:"U",169:"u",170:"U",171:"u",172:"U",173:"u",174:"W",175:"w",176:"Y",177:"y",178:"Y",179:"Z",180:"b",181:"B",182:"b",183:"b",184:"b",185:"b",186:"C",187:"C",188:"c",189:"D",190:"E",191:"F",192:"f",193:"G",194:"Y",195:"h",196:"i",197:"I",198:"K",199:"k",200:"A",201:"a",202:"A",203:"a",204:"E",205:"e",206:"E",207:"e",208:"I",209:"i",210:"R",211:"r",212:"R",213:"r",214:"U",215:"u",216:"U",217:"u",218:"S",219:"s",220:"n",221:"d",222:"8",223:"8",224:"Z",225:"z",226:"A",227:"a",228:"E",229:"e",230:"O",231:"o",232:"Y",233:"y",234:"l",235:"n",236:"t",237:"j",238:"db",239:"qp",240:"<",241:"?",242:"?",243:"B",244:"U",245:"A",246:"E",247:"e",248:"J",249:"j",250:"a",251:"a",252:"a",253:"b",254:"c",255:"e",256:"d",257:"d",258:"e",259:"e",260:"g",261:"g",262:"g",263:"Y",264:"x",265:"u",266:"h",267:"h",268:"i",269:"i",270:"w",271:"m",272:"n",273:"n",274:"N",275:"o",276:"oe",277:"m",278:"o",279:"r",280:"R",281:"R",282:"S",283:"f",284:"f",285:"f",286:"f",287:"t",288:"t",289:"u",290:"Z",291:"Z",292:"3",293:"3",294:"?",295:"?",296:"5",297:"C",298:"O",299:"B",363:"a",364:"e",365:"i",366:"o",367:"u",368:"c",369:"d",386:"A",388:"E",389:"H",390:"i",391:"A",392:"B",393:"r",394:"A",395:"E",396:"Z",397:"H",398:"O",399:"I",400:"E",401:"E",402:"T",403:"r",404:"E",405:"S",406:"I",407:"I",408:"J",409:"jb",410:"A",411:"B",412:"B",413:"r",414:"D",415:"E",416:"X",417:"3",418:"N",419:"N",420:"P",421:"C",422:"T",423:"y",424:"O",425:"X",426:"U",427:"h",428:"W",429:"W",430:"a",431:"6",432:"B",433:"r",434:"d",435:"e",436:"x",437:"3",438:"N",439:"N",440:"P",441:"C",442:"T",443:"Y",444:"qp",445:"x",446:"U",447:"h",448:"W",449:"W",450:"e",451:"e",452:"h",453:"r",454:"e",455:"s",456:"i",457:"i",458:"j",459:"jb",460:"W",461:"w",462:"Tb",463:"tb",464:"IC",465:"ic",466:"A",467:"a",468:"IA",469:"ia",470:"Y",471:"y",472:"O",473:"o",474:"V",475:"v",476:"V",477:"v",478:"Oy",479:"oy",480:"C",481:"c",490:"R",491:"r",492:"F",493:"f",494:"H",495:"h",496:"X",497:"x",498:"3",499:"3",500:"d",501:"d",502:"d",503:"d",504:"R",505:"R",506:"R",507:"R",508:"JT",509:"JT",510:"E",511:"e",512:"JT",513:"jt",514:"JX",515:"JX",531:"U",532:"D",533:"Q",534:"N",535:"T",536:"2",537:"F",538:"r",539:"p",540:"z",541:"2",542:"n",543:"x",544:"U",545:"B",546:"j",547:"t",548:"n",549:"C",550:"R",551:"8",552:"R",553:"O",554:"P",555:"O",556:"S",561:"w",562:"f",563:"q",564:"n",565:"t",566:"q",567:"t",568:"n",569:"p",570:"h",571:"a",572:"n",573:"a",574:"u",575:"j",576:"u",577:"2",578:"n",579:"2",580:"n",581:"g",582:"l",583:"uh",584:"p",585:"o",586:"S",587:"u","4a":"J","4b":"K","4c":"L","4d":"M","4e":"N","4f":"O","5a":"Z","6a":"j","6b":"k","6c":"l","6d":"m","6e":"n","6f":"o","7a":"z",a2:"c",a3:"f",a5:"Y",a7:"s",a9:"c",aa:"a",ae:"r",b2:"2",b3:"3",b5:"u",b6:"p",b9:"1",c0:"A",c1:"A",c2:"A",c3:"A",c4:"A",c5:"A",c6:"AE",c7:"C",c8:"E",c9:"E",ca:"E",cb:"E",cc:"I",cd:"I",ce:"I",cf:"I",d0:"D",d1:"N",d2:"O",d3:"O",d4:"O",d5:"O",d6:"O",d7:"X",d8:"O",d9:"U",da:"U",db:"U",dc:"U",dd:"Y",de:"p",df:"b",e0:"a",e1:"a",e2:"a",e3:"a",e4:"a",e5:"a",e6:"ae",e7:"c",e8:"e",e9:"e",ea:"e",eb:"e",ec:"i",ed:"i",ee:"i",ef:"i",f0:"o",f1:"n",f2:"o",f3:"o",f4:"o",f5:"o",f6:"o",f8:"o",f9:"u",fa:"u",fb:"u",fc:"u",fd:"y",ff:"y","10a":"C","10b":"c","10c":"C","10d":"c","10e":"D","10f":"d","11a":"E","11b":"e","11c":"G","11d":"g","11e":"G","11f":"g","12a":"I","12b":"i","12c":"I","12d":"i","12e":"I","12f":"i","13a":"l","13b":"L","13c":"l","13d":"L","13e":"l","13f":"L","14a":"n","14b":"n","14c":"O","14d":"o","14e":"O","14f":"o","15a":"S","15b":"s","15c":"S","15d":"s","15e":"S","15f":"s","16a":"U","16b":"u","16c":"U","16d":"u","16e":"U","16f":"u","17a":"z","17b":"Z","17c":"z","17d":"Z","17e":"z","17f":"f","18a":"D","18b":"d","18c":"d","18d":"q","18e":"E","18f":"e","19a":"l","19b":"h","19c":"w","19d":"N","19e":"n","19f":"O","1a0":"O","1a1":"o","1a2":"P","1a3":"P","1a4":"P","1a5":"p","1a6":"R","1a7":"S","1a8":"s","1a9":"E","1aa":"l","1ab":"t","1ac":"T","1ad":"t","1ae":"T","1af":"U","1b0":"u","1b1":"U","1b2":"U","1b3":"Y","1b4":"y","1b5":"Z","1b6":"z","1b7":"3","1b8":"3","1b9":"3","1ba":"3","1bb":"2","1bc":"5","1bd":"5","1be":"5","1bf":"p","1c4":"DZ","1c5":"Dz","1c6":"dz","1c7":"Lj","1c8":"Lj","1c9":"lj","1ca":"NJ","1cb":"Nj","1cc":"nj","1cd":"A","1ce":"a","1cf":"I","1d0":"i","1d1":"O","1d2":"o","1d3":"U","1d4":"u","1d5":"U","1d6":"u","1d7":"U","1d8":"u","1d9":"U","1da":"u","1db":"U","1dc":"u","1dd":"e","1de":"A","1df":"a","1e0":"A","1e1":"a","1e2":"AE","1e3":"ae","1e4":"G","1e5":"g","1e6":"G","1e7":"g","1e8":"K","1e9":"k","1ea":"Q","1eb":"q","1ec":"Q","1ed":"q","1ee":"3","1ef":"3","1f0":"J","1f1":"dz","1f2":"dZ","1f3":"DZ","1f4":"g","1f5":"G","1f6":"h","1f7":"p","1f8":"N","1f9":"n","1fa":"A","1fb":"a","1fc":"AE","1fd":"ae","1fe":"O","1ff":"o","20a":"I","20b":"i","20c":"O","20d":"o","20e":"O","20f":"o","21a":"T","21b":"t","21c":"3","21d":"3","21e":"H","21f":"h","22a":"O","22b":"o","22c":"O","22d":"o","22e":"O","22f":"o","23a":"A","23b":"C","23c":"c","23d":"L","23e":"T","23f":"s","24a":"Q","24b":"q","24c":"R","24d":"r","24e":"Y","24f":"y","25a":"e","25b":"3","25c":"3","25d":"3","25e":"3","25f":"j","26a":"i","26b":"I","26c":"I","26d":"I","26e":"h","26f":"w","27a":"R","27b":"r","27c":"R","27d":"R","27e":"r","27f":"r","28a":"u","28b":"v","28c":"A","28d":"M","28e":"Y","28f":"Y","29a":"B","29b":"G","29c":"H","29d":"j","29e":"K","29f":"L","2a0":"q","2a1":"?","2a2":"c","2a3":"dz","2a4":"d3","2a5":"dz","2a6":"ts","2a7":"tf","2a8":"tc","2a9":"fn","2aa":"ls","2ab":"lz","2ac":"ww","2ae":"u","2af":"u","2b0":"h","2b1":"h","2b2":"j","2b3":"r","2b4":"r","2b5":"r","2b6":"R","2b7":"W","2b8":"Y","2df":"x","2e0":"Y","2e1":"1","2e2":"s","2e3":"x","2e4":"c","36a":"h","36b":"m","36c":"r","36d":"t","36e":"v","36f":"x","37b":"c","37c":"c","37d":"c","38a":"I","38c":"O","38e":"Y","38f":"O","39a":"K","39b":"A","39c":"M","39d":"N","39e":"E","39f":"O","3a0":"TT","3a1":"P","3a3":"E","3a4":"T","3a5":"Y","3a6":"O","3a7":"X","3a8":"Y","3a9":"O","3aa":"I","3ab":"Y","3ac":"a","3ad":"e","3ae":"n","3af":"i","3b0":"v","3b1":"a","3b2":"b","3b3":"y","3b4":"d","3b5":"e","3b6":"c","3b7":"n","3b8":"0","3b9":"1","3ba":"k","3bb":"j","3bc":"u","3bd":"v","3be":"c","3bf":"o","3c0":"tt","3c1":"p","3c2":"s","3c3":"o","3c4":"t","3c5":"u","3c6":"q","3c7":"X","3c8":"Y","3c9":"w","3ca":"i","3cb":"u","3cc":"o","3cd":"u","3ce":"w","3d0":"b","3d1":"e","3d2":"Y","3d3":"Y","3d4":"Y","3d5":"O","3d6":"w","3d7":"x","3d8":"Q","3d9":"q","3da":"C","3db":"c","3dc":"F","3dd":"f","3de":"N","3df":"N","3e2":"W","3e3":"w","3e4":"q","3e5":"q","3e6":"h","3e7":"e","3e8":"S","3e9":"s","3ea":"X","3eb":"x","3ec":"6","3ed":"6","3ee":"t","3ef":"t","3f0":"x","3f1":"e","3f2":"c","3f3":"j","3f4":"O","3f5":"E","3f6":"E","3f7":"p","3f8":"p","3f9":"C","3fa":"M","3fb":"M","3fc":"p","3fd":"C","3fe":"C","3ff":"C","40a":"Hb","40b":"Th","40c":"K","40d":"N","40e":"Y","40f":"U","41a":"K","41b":"jI","41c":"M","41d":"H","41e":"O","41f":"TT","42a":"b","42b":"bI","42c":"b","42d":"E","42e":"IO","42f":"R","43a":"K","43b":"JI","43c":"M","43d":"H","43e":"O","43f":"N","44a":"b","44b":"bI","44c":"b","44d":"e","44e":"io","44f":"r","45a":"Hb","45b":"h","45c":"k","45d":"n","45e":"y","45f":"u","46a":"mY","46b":"my","46c":"Im","46d":"Im","46e":"3","46f":"3","47a":"O","47b":"o","47c":"W","47d":"w","47e":"W","47f":"W","48a":"H","48b":"H","48c":"B","48d":"b","48e":"P","48f":"p","49a":"K","49b":"k","49c":"K","49d":"k","49e":"K","49f":"k","4a0":"K","4a1":"k","4a2":"H","4a3":"h","4a4":"H","4a5":"h","4a6":"Ih","4a7":"ih","4a8":"O","4a9":"o","4aa":"C","4ab":"c","4ac":"T","4ad":"t","4ae":"Y","4af":"y","4b0":"Y","4b1":"y","4b2":"X","4b3":"x","4b4":"TI","4b5":"ti","4b6":"H","4b7":"h","4b8":"H","4b9":"h","4ba":"H","4bb":"h","4bc":"E","4bd":"e","4be":"E","4bf":"e","4c0":"I","4c1":"X","4c2":"x","4c3":"K","4c4":"k","4c5":"jt","4c6":"jt","4c7":"H","4c8":"h","4c9":"H","4ca":"h","4cb":"H","4cc":"h","4cd":"M","4ce":"m","4cf":"l","4d0":"A","4d1":"a","4d2":"A","4d3":"a","4d4":"AE","4d5":"ae","4d6":"E","4d7":"e","4d8":"e","4d9":"e","4da":"E","4db":"e","4dc":"X","4dd":"X","4de":"3","4df":"3","4e0":"3","4e1":"3","4e2":"N","4e3":"n","4e4":"N","4e5":"n","4e6":"O","4e7":"o","4e8":"O","4e9":"o","4ea":"O","4eb":"o","4ec":"E","4ed":"e","4ee":"Y","4ef":"y","4f0":"Y","4f1":"y","4f2":"Y","4f3":"y","4f4":"H","4f5":"h","4f6":"R","4f7":"r","4f8":"bI","4f9":"bi","4fa":"F","4fb":"f","4fc":"X","4fd":"x","4fe":"X","4ff":"x","50a":"H","50b":"h","50c":"G","50d":"g","50e":"T","50f":"t","51a":"Q","51b":"q","51c":"W","51d":"w","53a":"d","53b":"r","53c":"L","53d":"Iu","53e":"O","53f":"y","54a":"m","54b":"o","54c":"N","54d":"U","54e":"Y","54f":"S","56a":"d","56b":"h","56c":"l","56d":"lu","56e":"d","56f":"y","57a":"w","57b":"2","57c":"n","57d":"u","57e":"y","57f":"un"};var n="";for(var r=0;r<e.length;r++){n+=t[e.charCodeAt(r).toString(16)]||""}return n.toLowerCase()}
if(!Function.prototype.bind){Function.prototype.bind=function(obj){if(typeof this!=='function')
throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');var slice=[].slice,args=slice.call(arguments,1),self=this,nop=function(){},bound=function(){return self.apply(this instanceof nop?this:(obj||{}),args.concat(slice.call(arguments)));};bound.prototype=this.prototype;return bound;};}
(function($){var needOverlay=false;$.support.ajax2=$.support.ajax&&typeof FormData!="undefined";$.ajaxUploadSettings={onprogress:function(e){console.log('progress')},onabort:function(e){console.log('abort')},onerror:function(e){console.log('error');console.log(e)},onload:function(e){console.log('load')},name:'uploads[]'}
$.ajaxUploadSerializeFiles=function(element){var data=[];var name=$(element).attr('name');for(var i=0,len=element.files.length;i<len;i++){data.push({'name':name,'value':element.files[i]});}
return data;}
$.ajaxUploadToFormData=function(kv,exist){var fd=exist||new FormData();for(var i=0,len=kv.length;i<len;i++){fd.append(kv[i].name,kv[i].value);}
return fd;}
$.ajaxUploadExtractData=function(data,exist,options){if(!data||data instanceof FormData)return data;var fd=$.ajaxUploadExtractData(exist)||new FormData();if(typeof data==="string"||data instanceof jQuery){var kv=[];$(data).each(function(index,element){$.merge(kv,$.ajaxUploadSerializeFiles(this));});data=kv;}else if(data instanceof FileList){var kv=[];for(var i=0,len=data.length;i<len;i++){kv.push({'name':options.name,'value':data[i]});}
data=kv;}else if(typeof data==="object"&&!$.isArray(data)){var temp=[];for(name in data){temp.push({'name':name,'value':data[name]});}
data=temp;}
return $.ajaxUploadToFormData(data,fd);}
$.ajaxUpload=function(origSettings){if(!$.support.ajax2)return false;var s=jQuery.extend(true,{},$.ajaxUploadSettings,origSettings);var fd=$.ajaxUploadExtractData(s.data);s.data=null;var nesseserySettings={processData:false,type:'POST',beforeSend:function(xhr,s){s.xhr=function(){var xhr=new window.XMLHttpRequest();xhr.upload.onprogress=s.onprogress.bind(this);xhr.upload.onabort=s.onabort.bind(this);xhr.upload.onerror=s.onerror.bind(this);xhr.upload.onload=s.onload.bind(this);return xhr;}
s.data=fd;if(origSettings.beforeSend){origSettings.beforeSend.call(this,xhr,s);}}}
s=jQuery.extend(true,{},s,nesseserySettings);if(s.contentType){delete s.contentType;}
$.ajax(s);}
$.fn.ajaxUpload=function(origSettings){if(!$.support.ajax2)return false;this.each(function(){var data=$(this).serializeArray();$('input:file',this).each(function(index,element){$.merge(data,$.ajaxUploadSerializeFiles(this));});var options=jQuery.extend(true,{},origSettings);options.data=$.ajaxUploadExtractData(data,options.data);$.ajaxUpload(origSettings);});return this;}
$.ajaxUploadPost=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data={};}
return $.ajaxUpload({type:"POST",url:url,data:data,success:callback,dataType:type});}
$.ajaxUploadPrompt=function(options){var nesseserySettings={success:function(){if(options.success){options.success.apply(this,arguments);}
form.remove();}};s=jQuery.extend(true,{},options,nesseserySettings);var multiple=' ';if(options.multiple)multiple=' multiple ';var id='ajaxupload'+ new Date().getTime();var form=$('<form action="'+ s.url+'" method="post" enctype="multipart/form-data" target="'+ id+'" />').appendTo('body');form.css({position:'relative',top:-1000,left:-1000,opacity:0});form.submit(function(){});var d=$('<input type="file" accept="'+ options.accept+'" '+ multiple+' name="'+ options.name+'" />').appendTo(form);d.change(function(){if(!this.files.length){return false;}
s.files=this.files;s.data=$.ajaxUploadExtractData(s.data,$.ajaxUploadSerializeFiles(this));$.ajaxUpload(s);});d.click();if(navigator.userAgent.indexOf('Safari')>0&&navigator.vendor.indexOf('Apple')!==-1){d.change();}}
$.fn.ajaxUploadPrompt=function(settings){if(this.data('processed'))return;this.data('processed','1');var origSettings={offset:{top:0,left:0},accept:'',multiple:true,data:{}};$.extend(origSettings,settings);var multiple=' ';if(origSettings.multiple)multiple=' multiple ';this.each(function(){if(needOverlay){var $this=$(this);var id='ajaxupload'+ new Date().getTime()+ Math.round(Math.random()*100000);var form=$('<form action="'+ origSettings.url+'" method="post" enctype="multipart/form-data" target="'+ id+'" />').insertAfter($this);var d=$('<input type="file" '+ multiple+' name="'+ origSettings.name+'" style="border:1px solid red; position: absolute; z-index:2; top: 0; right: 0; cursor: pointer;" />').appendTo(form);$.each(origSettings.data,function(key,value){var d=$('<input type="hidden" name="'+ key+'" value="'+ value+'" />').appendTo(form);});d.css({opacity:0,width:$this.outerWidth(),height:$this.outerHeight(),top:$this.position().top+(origSettings.offset.top||0),left:$this.position().left+(origSettings.offset.left||0)});d.change(function(){origSettings.files=this.files||{};var iframeSrc=/^https/i.test(window.location.href||'')?'javascript:false':'about:blank';var iframe=$('<iframe src="'+ iframeSrc+'" id="'+ id+'" name="'+ id+'" style="display: none;" />').appendTo('body');iframe.bind('load',function(){if(!iframe[0].parentNode){return;}
var doc=iframe[0].contentDocument?iframe[0].contentDocument:iframe[0].contentWindow.document
var data=doc.body.innerHTML;if(origSettings.success){origSettings.success.call(origSettings,data);}
iframe.unbind('load');setTimeout(function(){iframe.remove();},100);});form.submit(function(){origSettings.beforeSend.call(origSettings,{});origSettings.onprogress.call(origSettings,{});});form.submit();});}else{$(this).click(function(){$.ajaxUploadPrompt(origSettings);});}});return this;}
$.fn.ajaxUploadDrop=function(origSettings){if(this.data('processed-drop'))return;this.data('processed-drop','1');var multiple=' ';if(origSettings.multiple)multiple=' multiple ';if(!$.support.ajax2)return false;var fakeSafariDragDrop=false;this.each(function(){var $this=$(this);$this.one("dragenter",function(e){if(fakeSafariDragDrop){var d=$('<input type="file" '+ multiple+' name="uploads[]" />').appendTo($this);d.css({position:'absolute',display:'block',top:$this.position().top,left:$this.position().left,width:$this.outerWidth(),height:$this.outerHeight(),opacity:0});d.change(function(){var options=jQuery.extend(true,{},origSettings);options.data=$.ajaxUploadExtractData(this.files,options.data);$.ajaxUpload(options);});}else{e.stopPropagation();e.preventDefault();}
$this.addClass('dragover');}).bind("dragover",function(e){if(fakeSafariDragDrop){}else{e.stopPropagation();e.preventDefault();}
$this.addClass('dragover');}).bind("dragleave",function(e){$this.removeClass('dragover');}).bind("drop",function(e){if(fakeSafariDragDrop){}else{e.stopPropagation();e.preventDefault();var dt=e.originalEvent.dataTransfer;var files=dt.files;var options=jQuery.extend(true,{},origSettings);options.data=$.ajaxUploadExtractData(files,options.data,options);options.files=files;$.ajaxUpload(options);}
$this.removeClass('dragover');});});return this;}
$.fn.ajaxUploadUnbind=function(){this.each(function(){$(this).removeData('processed');$(this).off();});}})(jQuery);!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){a(b,window,document)}):a(jQuery,window,document)}(function(a,b,c,d){"use strict";function e(b,c){this.element=b,this.options=a.extend({},h,c),this._defaults=h,this.ns="."+f+g++,this.isGoodBrowser=Boolean(b.setSelectionRange),this.hadInitialPlaceholder=Boolean(a(b).attr("placeholder")),this._name=f,this.init()}var f="intlTelInput",g=1,h={autoFormat:!0,autoHideDialCode:!0,defaultCountry:"",nationalMode:!1,onlyCountries:[],preferredCountries:["us","gb"],responsiveDropdown:!1,utilsScript:""},i={UP:38,DOWN:40,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,ZERO:48,NINE:57,SPACE:32,BSPACE:8,DEL:46,CTRL:17,CMD1:91,CMD2:224},j=!1;a(b).load(function(){j=!0}),e.prototype={init:function(){this.options.utilsScript||(this.options.autoFormat=!1),this.options.nationalMode&&(this.options.autoHideDialCode=!1),navigator.userAgent.match(/Android/i)&&navigator.userAgent.match(/Chrome/i)&&(this.options.autoFormat=!1),this._processCountryData(),this._generateMarkup(),this._setInitialState(),this._initListeners()},_processCountryData:function(){this._setInstanceCountryData(),this._setPreferredCountries()},_addCountryCode:function(a,b,c){b in this.countryCodes||(this.countryCodes[b]=[]);var d=c||0;this.countryCodes[b][d]=a},_setInstanceCountryData:function(){var a;if(this.options.onlyCountries.length)for(this.countries=[],a=0;a<this.options.onlyCountries.length;a++){var b=this._getCountryData(this.options.onlyCountries[a],!0,!1);b&&this.countries.push(b)}else this.countries=k;for(this.countryCodes={},a=0;a<this.countries.length;a++){var c=this.countries[a];if(this._addCountryCode(c.iso2,c.dialCode,c.priority),c.areaCodes)for(var d=0;d<c.areaCodes.length;d++)this._addCountryCode(c.iso2,c.dialCode+c.areaCodes[d])}},_setPreferredCountries:function(){this.preferredCountries=[];for(var a=0;a<this.options.preferredCountries.length;a++){var b=this.options.preferredCountries[a],c=this._getCountryData(b,!1,!0);c&&this.preferredCountries.push(c)}},_generateMarkup:function(){this.telInput=a(this.element),this.telInput.wrap(a("<div>",{"class":"intl-tel-input"}));var b=a("<div>",{"class":"flag-dropdown"}).insertAfter(this.telInput),c=a("<div>",{"class":"selected-flag"}).appendTo(b);this.selectedFlagInner=a("<div>",{"class":"flag"}).appendTo(c),a("<div>",{"class":"arrow"}).appendTo(this.selectedFlagInner),this.countryList=a("<ul>",{"class":"country-list v-hide"}).appendTo(b),this.preferredCountries.length&&(this._appendListItems(this.preferredCountries,"preferred"),a("<li>",{"class":"divider"}).appendTo(this.countryList)),this._appendListItems(this.countries,""),this.dropdownHeight=this.countryList.outerHeight(),this.countryList.removeClass("v-hide").addClass("hide"),this.options.responsiveDropdown&&this.countryList.outerWidth(this.telInput.outerWidth()),this.countryListItems=this.countryList.children(".country")},_appendListItems:function(a,b){for(var c="",d=0;d<a.length;d++){var e=a[d];c+="<li class='country "+b+"' data-dial-code='"+e.dialCode+"' data-country-code='"+e.iso2+"'>",c+="<div class='flag "+e.iso2+"'></div>",c+="<span class='country-name'>"+e.name+"</span>",c+="<span class='dial-code'>+"+e.dialCode+"</span>",c+="</li>"}this.countryList.append(c)},_setInitialState:function(){var a=this.telInput.val();if(!a||!this.setNumber(a)){var b;b=this.options.defaultCountry?this._getCountryData(this.options.defaultCountry,!1,!1):this.preferredCountries.length?this.preferredCountries[0]:this.countries[0],this._selectFlag(b.iso2),a||this.options.autoHideDialCode||this._resetToDialCode(b.dialCode)}},_initListeners:function(){var c=this;this.options.autoHideDialCode&&this._initAutoHideDialCode();var d=this.telInput.closest("label");d.length&&d.on("click"+this.ns,function(a){c.countryList.hasClass("hide")?c.telInput.focus():a.preventDefault()}),this.options.autoFormat&&this.telInput.on("keypress"+this.ns,function(a){if(a.which>=i.SPACE){a.preventDefault();var b=a.which>=i.ZERO&&a.which<=i.NINE||a.which==i.PLUS,d=c.telInput[0],e=c.isGoodBrowser&&d.selectionStart==d.selectionEnd;if(b||e){var f=b?String.fromCharCode(a.which):null;c._handleInputKey(f,!0)}}}),this.telInput.on("keyup"+this.ns,function(a){if(a.which==i.ENTER);else if(c.options.autoFormat){var b=a.which==i.CTRL||a.which==i.CMD1||a.which==i.CMD2,d=c.telInput[0],e=c.isGoodBrowser&&d.selectionStart==d.selectionEnd,f=c.isGoodBrowser&&d.selectionStart==c.telInput.val().length;if(a.which==i.DEL||a.which==i.BSPACE||b&&e){var g=!(a.which==i.BSPACE&&f);c._handleInputKey(null,g)}if(!c.options.nationalMode){var h=c.telInput.val();if("+"!=h.substr(0,1)){var j=c.isGoodBrowser?d.selectionStart+1:0;c.telInput.val("+"+h),c.isGoodBrowser&&d.setSelectionRange(j,j)}}}else c._updateFlag(c.telInput.val())});var e=this.selectedFlagInner.parent();if(e.on("click"+this.ns,function(){c.countryList.hasClass("hide")&&!c.telInput.prop("disabled")&&c._showDropdown()}),this.options.utilsScript&&!a.fn[f].injectedUtilsScript){a.fn[f].injectedUtilsScript=!0;var g=function(){a.getScript(c.options.utilsScript,function(){a(".intl-tel-input input").intlTelInput("utilsLoaded")})};j?g():a(b).load(g)}},_handleInputKey:function(a,b){var c=this.telInput.val(),d=null,e=!1,f=this.telInput[0];if(this.isGoodBrowser){var g=f.selectionEnd,h=c.length;e=g==h,a?(c=c.substring(0,f.selectionStart)+a+c.substring(g,h),e||(d=g+(c.length-h))):d=f.selectionStart}else a&&(c+=a);this.setNumber(c,b),this.isGoodBrowser&&(e&&(d=this.telInput.val().length),f.setSelectionRange(d,d))},_initAutoHideDialCode:function(){var a=this;this.telInput.on("mousedown"+this.ns,function(b){a.telInput.is(":focus")||a.telInput.val()||(b.preventDefault(),a.telInput.focus())}),this.telInput.on("focus"+this.ns,function(){a.telInput.val()||(a._updateVal("+"+a.selectedCountryData.dialCode,!0),a.telInput.one("keypress.plus"+a.ns,function(b){if(b.which==i.PLUS){var c=a.options.autoFormat?"+":"";a.telInput.val(c)}}),setTimeout(function(){a._cursorToEnd()}))}),this.telInput.on("blur"+this.ns,function(){var b=a.telInput.val(),c="+"==b.substr(0,1);if(c){var d=a._getNumeric(b);d&&a.selectedCountryData.dialCode!=d||a.telInput.val("")}a.telInput.off("keypress.plus"+a.ns)})},_getNumeric:function(a){return a.replace(/\D/g,"")},_cursorToEnd:function(){var a=this.telInput[0];if(this.isGoodBrowser){var b=this.telInput.val().length;a.setSelectionRange(b,b)}},_showDropdown:function(){this._setDropdownPosition();var a=this.countryList.children(".active");this._highlightListItem(a),this.countryList.removeClass("hide"),this._scrollTo(a),this._bindDropdownListeners(),this.selectedFlagInner.children(".arrow").addClass("up")},_setDropdownPosition:function(){var c=this.telInput.offset().top,d=a(b).scrollTop(),e=c+this.telInput.outerHeight()+this.dropdownHeight<d+a(b).height(),f=c-this.dropdownHeight>d,g=!e&&f?"-"+(this.dropdownHeight-1)+"px":"";this.countryList.css("top",g)},_bindDropdownListeners:function(){var b=this;this.countryList.on("mouseover"+this.ns,".country",function(){b._highlightListItem(a(this))}),this.countryList.on("click"+this.ns,".country",function(){b._selectListItem(a(this))});var d=!0;a("html").on("click"+this.ns,function(){d||b._closeDropdown(),d=!1});var e="",f=null;a(c).on("keydown"+this.ns,function(a){a.preventDefault(),a.which==i.UP||a.which==i.DOWN?b._handleUpDownKey(a.which):a.which==i.ENTER?b._handleEnterKey():a.which==i.ESC?b._closeDropdown():(a.which>=i.A&&a.which<=i.Z||a.which==i.SPACE)&&(f&&clearTimeout(f),e+=String.fromCharCode(a.which),b._searchForCountry(e),f=setTimeout(function(){e=""},1e3))})},_handleUpDownKey:function(a){var b=this.countryList.children(".highlight").first(),c=a==i.UP?b.prev():b.next();c.length&&(c.hasClass("divider")&&(c=a==i.UP?c.prev():c.next()),this._highlightListItem(c),this._scrollTo(c))},_handleEnterKey:function(){var a=this.countryList.children(".highlight").first();a.length&&this._selectListItem(a)},_searchForCountry:function(a){for(var b=0;b<this.countries.length;b++)if(this._startsWith(this.countries[b].name,a)){var c=this.countryList.children("[data-country-code="+this.countries[b].iso2+"]").not(".preferred");this._highlightListItem(c),this._scrollTo(c,!0);break}},_startsWith:function(a,b){return a.substr(0,b.length).toUpperCase()==b},_updateVal:function(a,c){var d;d=this.options.autoFormat&&b.intlTelInputUtils?intlTelInputUtils.formatNumber(a,this.selectedCountryData.iso2,c):a,this.telInput.val(d)},_updateFlag:function(a){var b=this._getDialCode(a);if(b){var c=this.countryCodes[this._getNumeric(b)],d=!1;if(this.selectedCountryData)for(var e=0;e<c.length;e++)c[e]==this.selectedCountryData.iso2&&(d=!0);if(!d||this._isUnknownNanp(a,b))for(var f=0;f<c.length;f++)if(c[f]){this._selectFlag(c[f]);break}}return b},_isUnknownNanp:function(a,b){return"+1"==b&&this._getNumeric(a).length>=4},_resetToDialCode:function(a){var b=this.options.nationalMode?"":"+"+a;this.telInput.val(b)},_highlightListItem:function(a){this.countryListItems.removeClass("highlight"),a.addClass("highlight")},_getCountryData:function(a,b,c){for(var d=b?k:this.countries,e=0;e<d.length;e++)if(d[e].iso2==a)return d[e];if(c)return null;throw new Error("No country data for '"+a+"'")},_selectFlag:function(a){this.selectedFlagInner.attr("class","flag "+a),this.selectedCountryData=this._getCountryData(a,!1,!1);var b=this.selectedCountryData.name+": +"+this.selectedCountryData.dialCode;this.selectedFlagInner.parent().attr("title",b),this._updatePlaceholder();var c=this.countryListItems.children(".flag."+a).first().parent();this.countryListItems.removeClass("active"),c.addClass("active")},_updatePlaceholder:function(){if(b.intlTelInputUtils&&!this.hadInitialPlaceholder){var a=this.selectedCountryData.iso2,c=intlTelInputUtils.getExampleNumber(a,this.options.nationalMode);this.telInput.attr("placeholder",c)}},_selectListItem:function(a){var b=a.attr("data-country-code");this._selectFlag(b),this._closeDropdown(),this.options.nationalMode||this._updateDialCode("+"+a.attr("data-dial-code")),this.telInput.trigger("change"),this.telInput.focus()},_closeDropdown:function(){this.countryList.addClass("hide"),this.selectedFlagInner.children(".arrow").removeClass("up"),a(c).off(this.ns),a("html").off(this.ns),this.countryList.off(this.ns)},_scrollTo:function(a,b){var c=this.countryList,d=c.height(),e=c.offset().top,f=e+d,g=a.outerHeight(),h=a.offset().top,i=h+g,j=h-e+c.scrollTop(),k=d/2-g/2;if(e>h)b&&(j-=k),c.scrollTop(j);else if(i>f){b&&(j+=k);var l=d-g;c.scrollTop(j-l)}},_updateDialCode:function(b){var c,d=this.telInput.val(),e=this._getDialCode(d);if(e.length>1)c=d.replace(e,b);else{var f=d&&"+"!=d.substr(0,1)?a.trim(d):"";c=b+f}this._updateVal(c,!0)},_getDialCode:function(b){var c="";if("+"==b.charAt(0))for(var d="",e=0;e<b.length;e++){var f=b.charAt(e);if(a.isNumeric(f)&&(d+=f,this.countryCodes[d]&&(c=b.substring(0,e+1)),4==d.length))break}return c},destroy:function(){this._closeDropdown(),this.telInput.off(this.ns),this.selectedFlagInner.parent().off(this.ns),this.telInput.closest("label").off(this.ns);var a=this.telInput.parent();a.before(this.telInput).remove()},getSelectedCountryData:function(){return this.selectedCountryData},isValidNumber:function(){var c=a.trim(this.telInput.val()),d=this.options.nationalMode?this.selectedCountryData.iso2:"",e=/[a-zA-Z]/.test(c);return!e&&b.intlTelInputUtils&&intlTelInputUtils.isValidNumber(c,d)},selectCountry:function(a){this.selectedFlagInner.hasClass(a)||(this._selectFlag(a),this.telInput.val()||this.options.autoHideDialCode||this._resetToDialCode(this.selectedCountryData.dialCode))},setNumber:function(a,b){var c=this._updateFlag(a);return this._updateVal(a,b),c},utilsLoaded:function(){this.options.autoFormat&&this.telInput.val()&&this._updateVal(this.telInput.val()),this._updatePlaceholder()}},a.fn[f]=function(b){var c=arguments;if(b===d||"object"==typeof b)return this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var g;return this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&(g=d[b].apply(d,Array.prototype.slice.call(c,1))),"destroy"===b&&a.data(this,"plugin_"+f,null)}),g!==d?g:this}},a.fn[f].getCountryData=function(){return k},a.fn[f].setCountryData=function(a){k=a};for(var k=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61"],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358"],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212"],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47"],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262"],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy (Saint-Barthélemy)","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44"],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna","wf","681"],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"]],l=0;l<k.length;l++){var m=k[l];k[l]={name:m[0],iso2:m[1],dialCode:m[2],priority:m[3]||0,areaCodes:m[4]||null}}});(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function d(a,b){function c(){mb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}var d=!0;return j(function(){return d&&(c(),d=!1),b.apply(this,arguments)},b)}function e(a,b){return function(c){return m(a.call(this,c),b)}}function f(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function g(){}function h(a){z(a),j(this,a)}function i(a){var b=s(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._bubble()}function j(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function k(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&Ab.hasOwnProperty(b)&&(c[b]=a[b]);return c}function l(a){return 0>a?Math.ceil(a):Math.floor(a)}function m(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function n(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&hb(a,"Date",gb(a,"Date")+f*c),g&&fb(a,gb(a,"Month")+g*c),d&&mb.updateOffset(a,f||g)}function o(a){return"[object Array]"===Object.prototype.toString.call(a)}function p(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function q(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function r(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=bc[a]||cc[b]||b}return a}function s(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=r(c),b&&(d[b]=a[c]));return d}function t(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}mb[b]=function(e,f){var g,h,i=mb.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=mb().utc().set(d,a);return i.call(mb.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function v(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function w(a,b,c){return bb(mb([a,11,31+b-c]),b,c).week}function x(a){return y(a)?366:365}function y(a){return a%4===0&&a%100!==0||a%400===0}function z(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[tb]<0||a._a[tb]>11?tb:a._a[ub]<1||a._a[ub]>v(a._a[sb],a._a[tb])?ub:a._a[vb]<0||a._a[vb]>23?vb:a._a[wb]<0||a._a[wb]>59?wb:a._a[xb]<0||a._a[xb]>59?xb:a._a[yb]<0||a._a[yb]>999?yb:-1,a._pf._overflowDayOfYear&&(sb>b||b>ub)&&(b=ub),a._pf.overflow=b)}function A(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function B(a){return a?a.toLowerCase().replace("_","-"):a}function C(a,b){return b._isUTC?mb(a).zone(b._offset||0):mb(a).local()}function D(a,b){return b.abbr=a,zb[a]||(zb[a]=new g),zb[a].set(b),zb[a]}function E(a){delete zb[a]}function F(a){var b,c,d,e,f=0,g=function(a){if(!zb[a]&&Bb)try{require("./lang/"+a)}catch(b){}return zb[a]};if(!a)return mb.fn._lang;if(!o(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=B(a[f]).split("-"),b=e.length,d=B(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&q(e,d,!0)>=b-1)break;b--}f++}return mb.fn._lang}function G(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function H(a){var b,c,d=a.match(Fb);for(b=0,c=d.length;c>b;b++)d[b]=hc[d[b]]?hc[d[b]]:G(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function I(a,b){return a.isValid()?(b=J(b,a.lang()),dc[b]||(dc[b]=H(b)),dc[b](a)):a.lang().invalidDate()}function J(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Gb.lastIndex=0;d>=0&&Gb.test(a);)a=a.replace(Gb,c),Gb.lastIndex=0,d-=1;return a}function K(a,b){var c,d=b._strict;switch(a){case"Q":return Rb;case"DDDD":return Tb;case"YYYY":case"GGGG":case"gggg":return d?Ub:Jb;case"Y":case"G":case"g":return Wb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Vb:Kb;case"S":if(d)return Rb;case"SS":if(d)return Sb;case"SSS":if(d)return Tb;case"DDD":return Ib;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Mb;case"a":case"A":return F(b._l)._meridiemParse;case"X":return Pb;case"Z":case"ZZ":return Nb;case"T":return Ob;case"SSSS":return Lb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Sb:Hb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Hb;case"Do":return Qb;default:return c=new RegExp(T(S(a.replace("\\","")),"i"))}}function L(a){a=a||"";var b=a.match(Nb)||[],c=b[b.length-1]||[],d=(c+"").match(_b)||["-",0,0],e=+(60*d[1])+u(d[2]);return"+"===d[0]?-e:e}function M(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[tb]=3*(u(b)-1));break;case"M":case"MM":null!=b&&(e[tb]=u(b)-1);break;case"MMM":case"MMMM":d=F(c._l).monthsParse(b),null!=d?e[tb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[ub]=u(b));break;case"Do":null!=b&&(e[ub]=u(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=u(b));break;case"YY":e[sb]=mb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[sb]=u(b);break;case"a":case"A":c._isPm=F(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[vb]=u(b);break;case"m":case"mm":e[wb]=u(b);break;case"s":case"ss":e[xb]=u(b);break;case"S":case"SS":case"SSS":case"SSSS":e[yb]=u(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=L(b);break;case"dd":case"ddd":case"dddd":d=F(c._l).weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=u(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=mb.parseTwoDigitYear(b)}}function N(a){var c,d,e,f,g,h,i,j;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[sb],bb(mb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(j=F(a._l),g=j._week.dow,h=j._week.doy,d=b(c.gg,a._a[sb],bb(mb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=cb(d,e,f,h,g),a._a[sb]=i.year,a._dayOfYear=i.dayOfYear}function O(a){var c,d,e,f,g=[];if(!a._d){for(e=Q(a),a._w&&null==a._a[ub]&&null==a._a[tb]&&N(a),a._dayOfYear&&(f=b(a._a[sb],e[sb]),a._dayOfYear>x(f)&&(a._pf._overflowDayOfYear=!0),d=Z(f,0,a._dayOfYear),a._a[tb]=d.getUTCMonth(),a._a[ub]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?Z:Y).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function P(a){var b;a._d||(b=s(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],O(a))}function Q(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function R(a){if(a._f===mb.ISO_8601)return void V(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=F(a._l),h=""+a._i,i=h.length,j=0;for(d=J(a._f,g).match(Fb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(K(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),hc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),M(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[vb]<12&&(a._a[vb]+=12),a._isPm===!1&&12===a._a[vb]&&(a._a[vb]=0),O(a),z(a)}function S(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function T(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function U(a){var b,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=j({},a),b._pf=c(),b._f=a._f[f],R(b),A(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,d=b));j(a,d||b)}function V(a){var b,c,d=a._i,e=Xb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Zb.length;c>b;b++)if(Zb[b][1].exec(d)){a._f=Zb[b][0]+(e[6]||" ");break}for(b=0,c=$b.length;c>b;b++)if($b[b][1].exec(d)){a._f+=$b[b][0];break}d.match(Nb)&&(a._f+="Z"),R(a)}else a._isValid=!1}function W(a){V(a),a._isValid===!1&&(delete a._isValid,mb.createFromInputFallback(a))}function X(b){var c=b._i,d=Cb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?W(b):o(c)?(b._a=c.slice(0),O(b)):p(c)?b._d=new Date(+c):"object"==typeof c?P(b):"number"==typeof c?b._d=new Date(c):mb.createFromInputFallback(b)}function Y(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function Z(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function $(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function _(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ab(a,b,c){var d=rb(Math.abs(a)/1e3),e=rb(d/60),f=rb(e/60),g=rb(f/24),h=rb(g/365),i=d<ec.s&&["s",d]||1===e&&["m"]||e<ec.m&&["mm",e]||1===f&&["h"]||f<ec.h&&["hh",f]||1===g&&["d"]||g<=ec.dd&&["dd",g]||g<=ec.dm&&["M"]||g<ec.dy&&["MM",rb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,_.apply({},i)}function bb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=mb(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function cb(a,b,c,d,e){var f,g,h=Z(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:x(a-1)+g}}function db(b){var c=b._i,d=b._f;return null===c||d===a&&""===c?mb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=F().preparse(c)),mb.isMoment(c)?(b=k(c),b._d=new Date(+c._d)):d?o(d)?U(b):R(b):X(b),new h(b))}function eb(a,b){var c,d;if(1===b.length&&o(b[0])&&(b=b[0]),!b.length)return mb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function fb(a,b){var c;return"string"==typeof b&&(b=a.lang().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),v(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function gb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function hb(a,b,c){return"Month"===b?fb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ib(a,b){return function(c){return null!=c?(hb(this,a,c),mb.updateOffset(this,b),this):gb(this,a)}}function jb(a){mb.duration.fn[a]=function(){return this._data[a]}}function kb(a,b){mb.duration.fn["as"+a]=function(){return+this/b}}function lb(a){"undefined"==typeof ender&&(nb=qb.moment,qb.moment=a?d("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",mb):mb)}for(var mb,nb,ob,pb="2.7.0",qb="undefined"!=typeof global?global:this,rb=Math.round,sb=0,tb=1,ub=2,vb=3,wb=4,xb=5,yb=6,zb={},Ab={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_tzm:null,_isUTC:null,_offset:null,_pf:null,_lang:null},Bb="undefined"!=typeof module&&module.exports,Cb=/^\/?Date\((\-?\d+)/i,Db=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Eb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Fb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Gb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Hb=/\d\d?/,Ib=/\d{1,3}/,Jb=/\d{1,4}/,Kb=/[+\-]?\d{1,6}/,Lb=/\d+/,Mb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Nb=/Z|[\+\-]\d\d:?\d\d/gi,Ob=/T/i,Pb=/[\+\-]?\d+(\.\d{1,3})?/,Qb=/\d{1,2}/,Rb=/\d/,Sb=/\d\d/,Tb=/\d{3}/,Ub=/\d{4}/,Vb=/[+-]?\d{6}/,Wb=/[+-]?\d+/,Xb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yb="YYYY-MM-DDTHH:mm:ssZ",Zb=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],$b=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],_b=/([\+\-]|\d\d)/gi,ac=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),bc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},cc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},dc={},ec={s:45,m:45,h:22,dd:25,dm:45,dy:345},fc="DDD w W M D d".split(" "),gc="M D H h m s w W".split(" "),hc={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return m(this.year()%100,2)},YYYY:function(){return m(this.year(),4)},YYYYY:function(){return m(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+m(Math.abs(a),6)},gg:function(){return m(this.weekYear()%100,2)},gggg:function(){return m(this.weekYear(),4)},ggggg:function(){return m(this.weekYear(),5)},GG:function(){return m(this.isoWeekYear()%100,2)},GGGG:function(){return m(this.isoWeekYear(),4)},GGGGG:function(){return m(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return u(this.milliseconds()/100)},SS:function(){return m(u(this.milliseconds()/10),2)},SSS:function(){return m(this.milliseconds(),3)},SSSS:function(){return m(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+m(u(a/60),2)+":"+m(u(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+m(u(a/60),2)+m(u(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},ic=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];fc.length;)ob=fc.pop(),hc[ob+"o"]=f(hc[ob],ob);for(;gc.length;)ob=gc.pop(),hc[ob+ob]=e(hc[ob],2);for(hc.DDDD=e(hc.DDD,3),j(g.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=mb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=mb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return bb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),mb=function(b,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=c(),db(g)},mb.suppressDeprecationWarnings=!1,mb.createFromInputFallback=d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),mb.min=function(){var a=[].slice.call(arguments,0);return eb("isBefore",a)},mb.max=function(){var a=[].slice.call(arguments,0);return eb("isAfter",a)},mb.utc=function(b,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=d,g._strict=f,g._pf=c(),db(g).utc()},mb.unix=function(a){return mb(1e3*a)},mb.duration=function(a,b){var c,d,e,f=a,g=null;return mb.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=Db.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:u(g[ub])*c,h:u(g[vb])*c,m:u(g[wb])*c,s:u(g[xb])*c,ms:u(g[yb])*c}):(g=Eb.exec(a))&&(c="-"===g[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(g[2]),M:e(g[3]),d:e(g[4]),h:e(g[5]),m:e(g[6]),s:e(g[7]),w:e(g[8])}),d=new i(f),mb.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},mb.version=pb,mb.defaultFormat=Yb,mb.ISO_8601=function(){},mb.momentProperties=Ab,mb.updateOffset=function(){},mb.relativeTimeThreshold=function(b,c){return ec[b]===a?!1:(ec[b]=c,!0)},mb.lang=function(a,b){var c;return a?(b?D(B(a),b):null===b?(E(a),a="en"):zb[a]||F(a),c=mb.duration.fn._lang=mb.fn._lang=F(a),c._abbr):mb.fn._lang._abbr},mb.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),F(a)},mb.isMoment=function(a){return a instanceof h||null!=a&&a.hasOwnProperty("_isAMomentObject")},mb.isDuration=function(a){return a instanceof i},ob=ic.length-1;ob>=0;--ob)t(ic[ob]);mb.normalizeUnits=function(a){return r(a)},mb.invalid=function(a){var b=mb.utc(0/0);return null!=a?j(b._pf,a):b._pf.userInvalidated=!0,b},mb.parseZone=function(){return mb.apply(null,arguments).parseZone()},mb.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)},j(mb.fn=h.prototype,{clone:function(){return mb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=mb(this).utc();return 0<a.year()&&a.year()<=9999?I(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):I(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return A(this)},isDSTShifted:function(){return this._a?this.isValid()&&q(this._a,(this._isUTC?mb.utc(this._a):mb(this._a)).toArray())>0:!1},parsingFlags:function(){return j({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=I(this,a||mb.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a&&"string"==typeof b?mb.duration(isNaN(+b)?+a:+b,isNaN(+b)?b:a):"string"==typeof a?mb.duration(+b,a):mb.duration(a,b),n(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a&&"string"==typeof b?mb.duration(isNaN(+b)?+a:+b,isNaN(+b)?b:a):"string"==typeof a?mb.duration(+b,a):mb.duration(a,b),n(this,c,-1),this},diff:function(a,b,c){var d,e,f=C(a,this),g=6e4*(this.zone()-f.zone());return b=r(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-mb(this).startOf("month")-(f-mb(f).startOf("month")))/d,e-=6e4*(this.zone()-mb(this).startOf("month").zone()-(f.zone()-mb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:l(e)},from:function(a,b){return mb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(mb(),a)},calendar:function(a){var b=a||mb(),c=C(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){return y(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=$(a,this.lang()),this.add({d:a-b})):b},month:ib("Month",!0),startOf:function(a){switch(a=r(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=r(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+mb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+mb(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+C(a,this).startOf(b)},min:d("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=mb.apply(null,arguments),this>a?this:a}),max:d("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=mb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c=this._offset||0;return null==a?this._isUTC?c:this._d.getTimezoneOffset():("string"==typeof a&&(a=L(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,c!==a&&(!b||this._changeInProgress?n(this,mb.duration(c-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,mb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?mb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return v(this.year(),this.month())},dayOfYear:function(a){var b=rb((mb(this).startOf("day")-mb(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=bb(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=bb(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=bb(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return w(this.year(),1,4)},weeksInYear:function(){var a=this._lang._week;return w(this.year(),a.dow,a.doy)},get:function(a){return a=r(a),this[a]()},set:function(a,b){return a=r(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=F(b),this)}}),mb.fn.millisecond=mb.fn.milliseconds=ib("Milliseconds",!1),mb.fn.second=mb.fn.seconds=ib("Seconds",!1),mb.fn.minute=mb.fn.minutes=ib("Minutes",!1),mb.fn.hour=mb.fn.hours=ib("Hours",!0),mb.fn.date=ib("Date",!0),mb.fn.dates=d("dates accessor is deprecated. Use date instead.",ib("Date",!0)),mb.fn.year=ib("FullYear",!0),mb.fn.years=d("years accessor is deprecated. Use year instead.",ib("FullYear",!0)),mb.fn.days=mb.fn.day,mb.fn.months=mb.fn.month,mb.fn.weeks=mb.fn.week,mb.fn.isoWeeks=mb.fn.isoWeek,mb.fn.quarters=mb.fn.quarter,mb.fn.toJSON=mb.fn.toISOString,j(mb.duration.fn=i.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=l(e/1e3),h.seconds=a%60,b=l(a/60),h.minutes=b%60,c=l(b/60),h.hours=c%24,f+=l(c/24),h.days=f%30,g+=l(f/30),h.months=g%12,d=l(g/12),h.years=d},weeks:function(){return l(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12)},humanize:function(a){var b=+this,c=ab(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=mb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=mb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=r(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=r(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:mb.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(ob in ac)ac.hasOwnProperty(ob)&&(kb(ob,ac[ob]),jb(ob.toLowerCase()));kb("Weeks",6048e5),mb.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},mb.lang("en",{ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Bb?module.exports=mb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(qb.moment=nb),mb}),lb(!0)):lb()}).call(this);
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,e=this;if(e.defaults={accessibility:!0,appendArrows:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",fade:!1,focusOnSelect:!1,infinite:!0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:!0,pauseOnDotsHover:!1,responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:!0,touchMove:!0,touchThreshold:5,useCSS:!0,vertical:!1},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.paused=!1,e.positionProp=null,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.windowWidth=0,e.windowTimer=null,e.options=a.extend({},e.defaults,d),e.originalSettings=e.options,f=e.options.responsive||null,f&&f.length>-1){for(g in f)f.hasOwnProperty(g)&&(e.breakpoints.push(f[g].breakpoint),e.breakpointSettings[f[g].breakpoint]=f[g].settings);e.breakpoints.sort(function(a,b){return b-a})}e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init()}var b=0;return c}(),b.prototype.addSlide=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateSlide=function(b,c){var d={},e=this;e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}}):(e.applyTransition(),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var b=this,c=null!=b.options.asNavFor?a(b.options.asNavFor).getSlick():null;b.options.infinite===!1?1===b.direction?(b.currentSlide+1===b.slideCount-1&&(b.direction=0),b.slideHandler(b.currentSlide+b.options.slidesToScroll),null!=c&&c.slideHandler(c.currentSlide+c.options.slidesToScroll)):(0===b.currentSlide-1&&(b.direction=1),b.slideHandler(b.currentSlide-b.options.slidesToScroll),null!=c&&c.slideHandler(c.currentSlide-c.options.slidesToScroll)):(b.slideHandler(b.currentSlide+b.options.slidesToScroll),null!=c&&c.slideHandler(c.currentSlide+c.options.slidesToScroll))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.$slider),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode===!0&&(b.options.slidesToScroll=1,0===b.options.slidesToShow%2&&(b.options.slidesToShow=3)),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var c,d,b=this;if(b.originalSettings.responsive&&b.originalSettings.responsive.length>-1&&null!==b.originalSettings.responsive){d=null;for(c in b.breakpoints)b.breakpoints.hasOwnProperty(c)&&a(window).width()<b.breakpoints[c]&&(d=b.breakpoints[c]);null!==d?null!==b.activeBreakpoint?d!==b.activeBreakpoint&&(b.activeBreakpoint=d,b.options=a.extend({},b.options,b.breakpointSettings[d]),b.refresh()):(b.activeBreakpoint=d,b.options=a.extend({},b.options,b.breakpointSettings[d]),b.refresh()):null!==b.activeBreakpoint&&(b.activeBreakpoint=null,b.options=a.extend({},b.options,b.originalSettings),b.refresh())}},b.prototype.changeSlide=function(b){var c=this,d=a(b.target),e=null!=c.options.asNavFor?a(c.options.asNavFor).getSlick():null;switch(d.is("a")&&b.preventDefault(),b.data.message){case"previous":c.slideCount>c.options.slidesToShow&&(c.slideHandler(c.currentSlide-c.options.slidesToScroll),null!=e&&e.slideHandler(e.currentSlide-e.options.slidesToScroll));break;case"next":c.slideCount>c.options.slidesToShow&&(c.slideHandler(c.currentSlide+c.options.slidesToScroll),null!=e&&e.slideHandler(e.currentSlide+e.options.slidesToScroll));break;case"index":var f=a(b.target).parent().index()*c.options.slidesToScroll;c.slideHandler(f),null!=e&&e.slideHandler(f);break;default:return!1}},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.parent().hasClass("slick-track")&&b.$slides.unwrap().unwrap(),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var e,a=this,b=0,c=0,d=0;for(e=a.options.infinite===!0?a.slideCount+a.options.slidesToShow-a.options.slidesToScroll:a.slideCount;e>b;)d++,c+=a.options.slidesToScroll,b=c+a.options.slidesToShow;return d},b.prototype.getLeft=function(a){var c,d,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideCount%b.options.slidesToShow*b.slideWidth,e=-1*b.slideCount%b.options.slidesToShow*d)):0!==b.slideCount%b.options.slidesToShow&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.options.slidesToShow*b.slideWidth-b.slideCount%b.options.slidesToShow*b.slideWidth,e=b.slideCount%b.options.slidesToShow*d),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.checkResponsive()),null!==b.options.onInit&&b.options.onInit.call(this,b)},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",b.autoPlayClear).on("mouseleave.slick",b.autoPlay)},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.options.pauseOnHover===!0&&b.options.autoplay===!0&&(b.$list.on("mouseenter.slick",b.autoPlayClear),b.$list.on("mouseleave.slick",b.autoPlay)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy")+"?"+(new Date).getTime();b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0||b.options.fade===!0?(e=b.options.slidesToShow+b.currentSlide-1,f=e+b.options.slidesToShow+2):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow),c=b.$slider.find(".slick-slide").slice(e,f),g(c),1==b.slideCount?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.postSlide=function(a){var b=this;null!==b.options.onAfterChange&&b.options.onAfterChange.call(this,b,a),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]").length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.currentSlide=c,b.init()},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),null!==b.options.onReInit&&b.options.onReInit.call(this,b)},b.prototype.removeSlide=function(a,b){var c=this;return"boolean"==typeof a?(b=a,a=b===!0?0:c.slideCount-1):a=b===!0?--a:a,c.slideCount<1||0>a||a>c.slideCount-1?!1:(c.unload(),c.$slideTrack.children(this.options.slide).eq(a).remove(),c.$slides=c.$slideTrack.children(this.options.slide),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.append(c.$slides),c.$slidesCache=c.$slides,c.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?a+"px":"0px",e="top"==b.positionProp?a+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade()},b.prototype.setProps=function(){var a=this;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==document.body.style.WebkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==document.body.style.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition"),void 0!==document.body.style.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition"),void 0!==document.body.style.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition"),void 0!==document.body.style.transform&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):d.length<=b.options.slidesToShow?d.addClass("slick-active"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if((b.options.fade===!0||b.options.vertical===!0)&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=null!=c.options.asNavFor?a(c.options.asNavFor).getSlick():null,e=parseInt(a(b.target).parent().attr("index"));if(e||(e=0),!(c.slideCount<=c.options.slidesToShow)&&(c.slideHandler(e),null!=d)){if(d.slideCount<=d.options.slidesToShow)return;d.slideHandler(e)}},b.prototype.slideHandler=function(a){var b,c,d,e,f=null,g=this;return g.animating===!0?!1:(b=a,f=g.getLeft(b),d=g.getLeft(g.currentSlide),e=0!==g.slideCount%g.options.slidesToScroll?g.options.slidesToScroll:0,g.currentLeft=null===g.swipeLeft?d:g.swipeLeft,g.options.infinite===!1&&g.options.centerMode===!1&&(0>a||a>g.slideCount-g.options.slidesToShow+e)?(g.options.fade===!1&&(b=g.currentSlide,g.animateSlide(d,function(){g.postSlide(b)})),!1):g.options.infinite===!1&&g.options.centerMode===!0&&(0>a||a>g.slideCount-g.options.slidesToScroll)?(g.options.fade===!1&&(b=g.currentSlide,g.animateSlide(d,function(){g.postSlide(b)})),!1):(g.options.autoplay===!0&&clearInterval(g.autoPlayTimer),c=0>b?0!==g.slideCount%g.options.slidesToScroll?g.slideCount-g.slideCount%g.options.slidesToScroll:g.slideCount-g.options.slidesToScroll:b>g.slideCount-1?0:b,g.animating=!0,null!==g.options.onBeforeChange&&a!==g.currentSlide&&g.options.onBeforeChange.call(this,g,g.currentSlide,c),g.currentSlide=c,g.setSlideClasses(g.currentSlide),g.updateDots(),g.updateArrows(),g.options.fade===!0?(g.fadeSlide(c,function(){g.postSlide(c)}),!1):(g.animateSlide(f,function(){g.postSlide(c)}),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?"left":360>=d&&d>=315?"left":d>=135&&225>=d?"right":"vertical"},b.prototype.swipeEnd=function(b){var c=this,d=null!=c.options.asNavFor?a(c.options.asNavFor).getSlick():null;if(c.dragging=!1,void 0===c.touchObject.curX)return!1;if(c.touchObject.swipeLength>=c.touchObject.minSwipe)switch(a(b.target).on("click.slick",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.slick")}),c.swipeDirection()){case"left":c.slideHandler(c.currentSlide+c.options.slidesToScroll),null!=d&&d.slideHandler(d.currentSlide+d.options.slidesToScroll),c.touchObject={};break;case"right":c.slideHandler(c.currentSlide-c.options.slidesToScroll),null!=d&&d.slideHandler(d.currentSlide-d.options.slidesToScroll),c.touchObject={}}else c.touchObject.startX!==c.touchObject.curX&&(c.slideHandler(c.currentSlide),null!=d&&d.slideHandler(d.currentSlide),c.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1||b.options.draggable===!1&&!a.originalEvent.touches))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var c,d,e,f,b=this;return f=void 0!==a.originalEvent?a.originalEvent.touches:null,c=b.getLeft(b.currentSlide),!b.dragging||f&&1!==f.length?!1:(b.touchObject.curX=void 0!==f?f[0].pageX:a.clientX,b.touchObject.curY=void 0!==f?f[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),d=b.swipeDirection(),"vertical"!==d?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),e=b.touchObject.curX>b.touchObject.startX?1:-1,b.swipeLeft=b.options.vertical===!1?c+b.touchObject.swipeLength*e:c+b.touchObject.swipeLength*(b.$list.height()/b.listWidth)*e,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")},b.prototype.updateArrows=function(){var a=this;a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},a.fn.slick=function(a){var c=this;return c.each(function(c,d){d.slick=new b(d,a)})},a.fn.slickAdd=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.addSlide(a,b,c)})},a.fn.slickCurrentSlide=function(){var a=this;return a.get(0).slick.getCurrent()},a.fn.slickFilter=function(a){var b=this;return b.each(function(b,c){c.slick.filterSlides(a)})},a.fn.slickGoTo=function(b){var c=this;return c.each(function(c,d){var e=null!=d.slick.options.asNavFor?a(d.slick.options.asNavFor):null;null!=e&&e.slickGoTo(b),d.slick.slideHandler(b)})},a.fn.slickNext=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"next"}})})},a.fn.slickPause=function(){var a=this;return a.each(function(a,b){b.slick.autoPlayClear(),b.slick.paused=!0})},a.fn.slickPlay=function(){var a=this;return a.each(function(a,b){b.slick.paused=!1,b.slick.autoPlay()})},a.fn.slickPrev=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"previous"}})})},a.fn.slickRemove=function(a,b){var c=this;return c.each(function(c,d){d.slick.removeSlide(a,b)})},a.fn.slickGetOption=function(a){var b=this;return b.get(0).slick.options[a]},a.fn.slickSetOption=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.options[a]=b,c===!0&&(e.slick.unload(),e.slick.reinit())})},a.fn.slickUnfilter=function(){var a=this;return a.each(function(a,b){b.slick.unfilterSlides()})},a.fn.unslick=function(){var a=this;return a.each(function(a,b){b.slick&&b.slick.destroy()})},a.fn.getSlick=function(){var a=null,b=this;return b.each(function(b,c){a=c.slick}),a}});
'use strict';

/*
 * SlickLightbox documentation #

Documentation generated by [CoffeeDoc](http://github.com/omarkhan/coffeedoc)
 */
var SlickLightbox, defaults;

SlickLightbox = (function() {

  /*
  	The one and only class used.
   */
  function SlickLightbox(element, options) {
    var that;
    this.options = options;

    /* Binds the plugin. */
    this.element = $(element);
    this.didInit = false;
    that = this;
    this.element.on('click.slickLightbox', this.options.itemSelector, function(e) {
      e.preventDefault();
      return that.init(that.element.find(that.options.itemSelector).index($(this)));
    });
  }

  SlickLightbox.prototype.init = function(index) {

    /* Creates the lightbox, opens it, binds events and calls `slick`. Accepts `index` of the element, that triggered it (so that we know, on which slide to start slick). */
    this.didInit = true;
    this.detectIE();
    this.createModal(index);
    this.bindEvents();
    this.initSlick();
    return this.open();
  };

  SlickLightbox.prototype.createModalItems = function(index) {
    var a, createItem, links;
    if (this.options.images) {
      links = $.map(this.options.images, function(img) {
        return "<div class=\"slick-lightbox-slick-item\"><div class=\"slick-lightbox-slick-item-inner\"><img class=\"slick-lightbox-slick-img\" src=\"" + img + "\" /></div></div>";
      });
    } else {
      createItem = (function(_this) {
        return function(el) {
          var caption;
          caption = _this.getElementCaption(el);
          return "<div class=\"slick-lightbox-slick-item\"><div class=\"slick-lightbox-slick-item-inner\"><img class=\"slick-lightbox-slick-img\" src=\"" + el.href + "\" />" + caption + "</div></div>";
        };
      })(this);
      a = this.element.find(this.options.itemSelector);
      if (index === 0 || index === -1) {
        links = $.map(a, createItem);
      } else {
        links = $.map(a.slice(index), createItem);
        $.each(a.slice(0, index), function(i, el) {
          return links.push(createItem(el));
        });
      }
    }
    return links;
  };

  SlickLightbox.prototype.createModal = function(index) {

    /* Creates a `slick`-friendly modal. Rearranges the items so that the `index`-th item is placed first. */
    var html, links;
    links = this.createModalItems(index);
    html = "<div class=\"slick-lightbox slick-hide-init" + (this.isIE ? ' slick-lightbox-ie' : void 0) + "\" style=\"background: " + this.options.background + ";\">\n	<div class=\"slick-lightbox-inner\">\n		<div class=\"slick-lightbox-slick slick-caption-" + this.options.captionPosition + "\">" + (links.join('')) + "</div>\n		<button type=\"button\" class=\"slick-lightbox-close\"></button>\n	<div>\n<div>";
    this.modalElement = $(html);
    return $('body').append(this.modalElement);
  };

  SlickLightbox.prototype.initSlick = function(index) {

    /* Runs slick by default, using `options.slick` if provided. If `options.slick` is a function, it gets fired instead of us initializing slick. */
    if (this.options.slick != null) {
      if (typeof this.options.slick === 'function') {
        this.options.slick(this.modalElement);
      } else {
        this.slick = this.modalElement.find('.slick-lightbox-slick').slick(this.options.slick);
      }
    } else {
      this.slick = this.modalElement.find('.slick-lightbox-slick').slick();
    }
    return this.modalElement.trigger('init.slickLightbox');
  };

  SlickLightbox.prototype.open = function() {

    /* Opens the lightbox. */
    return this.modalElement.removeClass('slick-hide-init');
  };

  SlickLightbox.prototype.close = function() {

    /* Closes the lightbox and destroys it, maintaining the original element bindings. */
    this.modalElement.addClass('slick-hide');
    return this.destroy();
  };

  SlickLightbox.prototype.bindEvents = function() {

    /* Binds global events. */
    var resizeSlides;
    resizeSlides = (function(_this) {
      return function() {
        var h;
        h = _this.modalElement.find('.slick-lightbox-inner').height();
        _this.modalElement.find('.slick-lightbox-slick-item').height(h);
        return _this.modalElement.find('.slick-lightbox-slick-img').css('max-height', Math.round(0.9 * h));
      };
    })(this);
    $(window).on('orientationchange.slickLightbox resize.slickLightbox', resizeSlides);
    this.modalElement.on('init.slickLightbox', resizeSlides);
    this.modalElement.on('destroy.slickLightbox', (function(_this) {
      return function() {
        return _this.destroy();
      };
    })(this));
    this.modalElement.on('click.slickLightbox touchstart.slickLightbox', '.slick-lightbox-close', (function(_this) {
      return function(e) {
        e.preventDefault();
        return _this.close();
      };
    })(this));
    if (this.options.closeOnEscape || this.options.navigateByKeyboard) {
      $(document).on('keydown.slickLightbox', (function(_this) {
        return function(e) {
          var code;
          code = e.keyCode ? e.keyCode : e.which;
          if (_this.options.navigateByKeyboard) {
            if (code === 37) {
              _this.slideSlick('left');
            } else if (code === 39) {
              _this.slideSlick('right');
            }
          }
          if (_this.options.closeOnEscape) {
            if (code === 27) {
              return _this.close();
            }
          }
        };
      })(this));
    }
    if (this.options.closeOnBackdropClick) {
      this.modalElement.on('click.slickLightbox touchstart.slickLightbox', '.slick-lightbox-slick-img', (function(_this) {
        return function(e) {
          return e.stopPropagation();
        };
      })(this));
      return this.modalElement.on('click.slickLightbox touchstart.slickLightbox', '.slick-lightbox-slick-item', (function(_this) {
        return function(e) {
          e.preventDefault();
          return _this.close();
        };
      })(this));
    }
  };

  SlickLightbox.prototype.slideSlick = function(direction) {
    if (direction === 'left') {
      return this.slick.slickPrev();
    } else {
      return this.slick.slickNext();
    }
  };

  SlickLightbox.prototype.detectIE = function() {
    var ieversion;
    this.isIE = false;
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
      ieversion = new Number(RegExp.$1);
      if (ieversion < 9) {
        return this.isIE = true;
      }
    }
  };

  SlickLightbox.prototype.getElementCaption = function(el) {
    var c;
    if (!this.options.caption) {
      return '';
    }
    c = (function() {
      switch (typeof this.options.caption) {
        case 'function':
          return this.options.caption(el);
        case 'string':
          return $(el).data(this.options.caption);
      }
    }).call(this);
    return "<span class=\"slick-lightbox-slick-caption\">" + c + "</span>";
  };

  SlickLightbox.prototype.unbindEvents = function() {

    /* Unbinds global events. */
    $(window).off('.slickLightbox');
    $(document).off('.slickLightbox');
    return this.modalElement.off('.slickLightbox');
  };

  SlickLightbox.prototype.destroy = function(unbindAnchors) {
    if (unbindAnchors == null) {
      unbindAnchors = false;
    }

    /* Destroys the lightbox and unbinds global events. If `true` is passed as an argument, unbinds the original element as well. */
    if (this.didInit) {
      this.unbindEvents();
      setTimeout(((function(_this) {
        return function() {
          return _this.modalElement.remove();
        };
      })(this)), this.options.destroyTimeout);
    }
    if (unbindAnchors) {
      return this.element.off('.slickLightbox', this.options.itemSelector);
    }
  };

  SlickLightbox.prototype.destroyPrevious = function() {

    /* Destroys lightboxes currently in DOM. */
    return $('body').children('.slick-lightbox').trigger('destroy.slickLightbox');
  };

  return SlickLightbox;

})();

defaults = {
  background: 'rgba(0,0,0,.8)',
  closeOnEscape: true,
  closeOnBackdropClick: true,
  destroyTimeout: 500,
  itemSelector: 'a',
  navigateByKeyboard: true,
  caption: false,
  captionPosition: 'dynamic',
  images: false,
  slick: {}
};

$.fn.slickLightbox = function(options) {
  options = $.extend({}, defaults, options);
  return this.slickLightbox = new SlickLightbox(this, options);
};

$.fn.unslickLightbox = function() {
  return this.slickLightbox.destroy(true);
};

/*!
 * FullCalendar v2.0.1
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t){"function"==typeof define&&define.amd?define(["jquery","moment"],t):t(jQuery,moment)})(function(t,e){function n(t,e){return e.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")}function r(t,e){var n=e.longDateFormat("L");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),t.isRTL?n+=" ddd":n="ddd "+n,n}function a(t){o(xe,t)}function o(e){function n(n,r){t.isPlainObject(r)&&t.isPlainObject(e[n])&&!i(n)?e[n]=o({},e[n],r):void 0!==r&&(e[n]=r)}for(var r=1;arguments.length>r;r++)t.each(arguments[r],n);return e}function i(t){return/(Time|Duration)$/.test(t)}function s(n,r){function a(t){se?f()&&(b(),m(t)):i()}function i(){le=ne.theme?"ui":"fc",n.addClass("fc"),ne.isRTL?n.addClass("fc-rtl"):n.addClass("fc-ltr"),ne.theme&&n.addClass("ui-widget"),se=t("<div class='fc-content' />").prependTo(n),oe=new l(te,ne),ie=oe.render(),ie&&n.prepend(ie),h(ne.defaultView),ne.handleWindowResize&&t(window).resize(w),v()||s()}function s(){setTimeout(function(){!ce.start&&v()&&g()},0)}function d(){ce&&(Q("viewDestroy",ce,ce,ce.element),ce.triggerEventDestroy()),t(window).unbind("resize",w),ne.droppable&&t(document).off("dragstart",J).off("dragstop",K),ce.selectionManagerDestroy&&ce.selectionManagerDestroy(),oe.destroy(),se.remove(),n.removeClass("fc fc-ltr fc-rtl ui-widget")}function f(){return n.is(":visible")}function v(){return t("body").is(":visible")}function h(t){ce&&t==ce.name||p(t)}function p(e){ye++,ce&&(Q("viewDestroy",ce,ce,ce.element),Y(),ce.triggerEventDestroy(),$(),ce.element.remove(),oe.deactivateButton(ce.name)),oe.activateButton(e),ce=new _e[e](t("<div class='fc-view fc-view-"+e+"' />").appendTo(se),te),g(),V(),ye--}function g(t){ce.start&&!t&&fe.isWithin(ce.intervalStart,ce.intervalEnd)||f()&&m(t)}function m(t){ye++,ce.start&&(Q("viewDestroy",ce,ce,ce.element),Y(),x()),$(),t&&(fe=ce.incrementDate(fe,t)),ce.render(fe.clone()),D(),V(),(ce.afterRender||k)(),H(),F(),Q("viewRender",ce,ce,ce.element),ye--,M()}function y(){f()&&(Y(),x(),b(),D(),S())}function b(){ue=ne.contentHeight?ne.contentHeight:ne.height?ne.height-(ie?ie.height():0)-T(se):Math.round(se.width()/Math.max(ne.aspectRatio,.5))}function D(){void 0===ue&&b(),ye++,ce.setHeight(ue),ce.setWidth(se.width()),ye--,de=n.outerWidth()}function w(t){if(!ye&&t.target===window)if(ce.start){var e=++me;setTimeout(function(){e==me&&!ye&&f()&&de!=(de=n.outerWidth())&&(ye++,y(),ce.trigger("windowResize",ge),ye--)},ne.windowResizeDelay)}else s()}function C(){x(),z()}function E(t){x(),S(t)}function S(t){f()&&(ce.renderEvents(be,t),ce.trigger("eventAfterAllRender"))}function x(){ce.triggerEventDestroy(),ce.clearEvents(),ce.clearEventData()}function M(){!ne.lazyFetching||he(ce.start,ce.end)?z():S()}function z(){pe(ce.start,ce.end)}function R(t){be=t,S()}function _(t){E(t)}function H(){oe.updateTitle(ce.title)}function F(){var t=te.getNow();t.isWithin(ce.intervalStart,ce.intervalEnd)?oe.disableButton("today"):oe.enableButton("today")}function N(t,e){ce.select(t,e)}function Y(){ce&&ce.unselect()}function A(){g(-1)}function O(){g(1)}function W(){fe.add("years",-1),g()}function L(){fe.add("years",1),g()}function Z(){fe=te.getNow(),g()}function P(t){fe=te.moment(t),g()}function j(t){fe.add(e.duration(t)),g()}function q(){return fe.clone()}function $(){se.css({width:"100%",height:se.height(),overflow:"hidden"})}function V(){se.css({width:"",height:"",overflow:""})}function X(){return te}function U(){return ce}function G(t,e){return void 0===e?ne[t]:(("height"==t||"contentHeight"==t||"aspectRatio"==t)&&(ne[t]=e,y()),void 0)}function Q(t,e){return ne[t]?ne[t].apply(e||ge,Array.prototype.slice.call(arguments,2)):void 0}function J(e,n){var r=e.target,a=t(r);if(!a.parents(".fc").length){var o=ne.dropAccept;(t.isFunction(o)?o.call(r,a):a.is(o))&&(ve=r,ce.dragStart(ve,e,n))}}function K(t,e){ve&&(ce.dragStop(ve,t,e),ve=null)}var te=this;r=r||{};var ee,ne=o({},xe,r);ee=ne.lang in Me?Me[ne.lang]:Me[xe.lang],ee&&(ne=o({},xe,ee,r)),ne.isRTL&&(ne=o({},xe,ze,ee||{},r)),te.options=ne,te.render=a,te.destroy=d,te.refetchEvents=C,te.reportEvents=R,te.reportEventChange=_,te.rerenderEvents=E,te.changeView=h,te.select=N,te.unselect=Y,te.prev=A,te.next=O,te.prevYear=W,te.nextYear=L,te.today=Z,te.gotoDate=P,te.incrementDate=j,te.getDate=q,te.getCalendar=X,te.getView=U,te.option=G,te.trigger=Q;var re=u(e.langData(ne.lang));if(ne.monthNames&&(re._months=ne.monthNames),ne.monthNamesShort&&(re._monthsShort=ne.monthNamesShort),ne.dayNames&&(re._weekdays=ne.dayNames),ne.dayNamesShort&&(re._weekdaysShort=ne.dayNamesShort),null!=ne.firstDay){var ae=u(re._week);ae.dow=ne.firstDay,re._week=ae}te.defaultAllDayEventDuration=e.duration(ne.defaultAllDayEventDuration),te.defaultTimedEventDuration=e.duration(ne.defaultTimedEventDuration),te.moment=function(){var t;return"local"===ne.timezone?(t=Re.moment.apply(null,arguments),t.hasTime()&&t.local()):t="UTC"===ne.timezone?Re.moment.utc.apply(null,arguments):Re.moment.parseZone.apply(null,arguments),t._lang=re,t},te.getIsAmbigTimezone=function(){return"local"!==ne.timezone&&"UTC"!==ne.timezone},te.rezoneDate=function(t){return te.moment(t.toArray())},te.getNow=function(){var t=ne.now;return"function"==typeof t&&(t=t()),te.moment(t)},te.calculateWeekNumber=function(t){var e=ne.weekNumberCalculation;return"function"==typeof e?e(t):"local"===e?t.week():"ISO"===e.toUpperCase()?t.isoWeek():void 0},te.getEventEnd=function(t){return t.end?t.end.clone():te.getDefaultEventEnd(t.allDay,t.start)},te.getDefaultEventEnd=function(t,e){var n=e.clone();return t?n.stripTime().add(te.defaultAllDayEventDuration):n.add(te.defaultTimedEventDuration),te.getIsAmbigTimezone()&&n.stripZone(),n},te.formatRange=function(t,e,n){return"function"==typeof n&&(n=n.call(te,ne,re)),I(t,e,n,null,ne.isRTL)},te.formatDate=function(t,e){return"function"==typeof e&&(e=e.call(te,ne,re)),B(t,e)},c.call(te,ne);var oe,ie,se,le,ce,de,ue,fe,ve,he=te.isFetchNeeded,pe=te.fetchEvents,ge=n[0],me=0,ye=0,be=[];fe=null!=ne.defaultDate?te.moment(ne.defaultDate):te.getNow(),ne.droppable&&t(document).on("dragstart",J).on("dragstop",K)}function l(e,n){function r(){f=n.theme?"ui":"fc";var e=n.header;return e?v=t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(o("left")).append(o("center")).append(o("right"))):void 0}function a(){v.remove()}function o(r){var a=t("<td class='fc-header-"+r+"'/>"),o=n.header[r];return o&&t.each(o.split(" "),function(r){r>0&&a.append("<span class='fc-header-space'/>");var o;t.each(this.split(","),function(r,i){if("title"==i)a.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"),o&&o.addClass(f+"-corner-right"),o=null;else{var s;if(e[i]?s=e[i]:_e[i]&&(s=function(){h.removeClass(f+"-state-hover"),e.changeView(i)}),s){var l,c=z(n.themeButtonIcons,i),d=z(n.buttonIcons,i),u=z(n.defaultButtonText,i),v=z(n.buttonText,i);l=v?R(v):c&&n.theme?"<span class='ui-icon ui-icon-"+c+"'></span>":d&&!n.theme?"<span class='fc-icon fc-icon-"+d+"'></span>":R(u||i);var h=t("<span class='fc-button fc-button-"+i+" "+f+"-state-default'>"+l+"</span>").click(function(){h.hasClass(f+"-state-disabled")||s()}).mousedown(function(){h.not("."+f+"-state-active").not("."+f+"-state-disabled").addClass(f+"-state-down")}).mouseup(function(){h.removeClass(f+"-state-down")}).hover(function(){h.not("."+f+"-state-active").not("."+f+"-state-disabled").addClass(f+"-state-hover")},function(){h.removeClass(f+"-state-hover").removeClass(f+"-state-down")}).appendTo(a);H(h),o||h.addClass(f+"-corner-left"),o=h}}}),o&&o.addClass(f+"-corner-right")}),a}function i(t){v.find("h2").html(t)}function s(t){v.find("span.fc-button-"+t).addClass(f+"-state-active")}function l(t){v.find("span.fc-button-"+t).removeClass(f+"-state-active")}function c(t){v.find("span.fc-button-"+t).addClass(f+"-state-disabled")}function d(t){v.find("span.fc-button-"+t).removeClass(f+"-state-disabled")}var u=this;u.render=r,u.destroy=a,u.updateTitle=i,u.activateButton=s,u.deactivateButton=l,u.disableButton=c,u.enableButton=d;var f,v=t([])}function c(e){function n(t,e){return!E||t.clone().stripZone()<E.clone().stripZone()||e.clone().stripZone()>S.clone().stripZone()}function r(t,e){E=t,S=e,O=[];var n=++H,r=_.length;F=r;for(var o=0;r>o;o++)a(_[o],n)}function a(t,e){o(t,function(n){if(e==H){if(n)for(var r=0;n.length>r;r++){var a=D(n[r],t);a&&O.push(a)}F--,F||M(O)}})}function o(n,r){var a,i,s=Re.sourceFetchers;for(a=0;s.length>a;a++){if(i=s[a].call(C,n,E.clone(),S.clone(),e.timezone,r),i===!0)return;if("object"==typeof i)return o(i,r),void 0}var l=n.events;if(l)t.isFunction(l)?(y(),l.call(C,E.clone(),S.clone(),e.timezone,function(t){r(t),b()})):t.isArray(l)?r(l):r();else{var c=n.url;if(c){var d,u=n.success,f=n.error,v=n.complete;d=t.isFunction(n.data)?n.data():n.data;var h=t.extend({},d||{}),p=A(n.startParam,e.startParam),g=A(n.endParam,e.endParam),m=A(n.timezoneParam,e.timezoneParam);p&&(h[p]=E.format()),g&&(h[g]=S.format()),e.timezone&&"local"!=e.timezone&&(h[m]=e.timezone),y(),t.ajax(t.extend({},He,n,{data:h,success:function(e){e=e||[];var n=Y(u,this,arguments);t.isArray(n)&&(e=n),r(e)},error:function(){Y(f,this,arguments),r()},complete:function(){Y(v,this,arguments),b()}}))}else r()}}function i(t){var e=s(t);e&&(F++,a(e,H))}function s(e){var n,r,a=Re.sourceNormalizers;if(t.isFunction(e)||t.isArray(e)?n={events:e}:"string"==typeof e?n={url:e}:"object"==typeof e&&(n=t.extend({},e),"string"==typeof n.className&&(n.className=n.className.split(/\s+/))),n){for(r=0;a.length>r;r++)a[r].call(C,n);return n}}function l(e){_=t.grep(_,function(t){return!c(t,e)}),O=t.grep(O,function(t){return!c(t.source,e)}),M(O)}function c(t,e){return t&&e&&u(t)==u(e)}function u(t){return("object"==typeof t?t.events||t.url:"")||t}function f(t){t.start=C.moment(t.start),t.end&&(t.end=C.moment(t.end)),w(t),h(t),M(O)}function h(t){var e,n,r,a;for(e=0;O.length>e;e++)if(n=O[e],n._id==t._id&&n!==t)for(r=0;W.length>r;r++)a=W[r],void 0!==t[a]&&(n[a]=t[a])}function p(t,e){var n=D(t);n&&(n.source||(e&&(R.events.push(n),n.source=R),O.push(n)),M(O))}function g(e){var n;if(e){if(!t.isFunction(e)){var r=e+"";e=function(t){return t._id==r}}for(O=t.grep(O,e,!0),n=0;_.length>n;n++)t.isArray(_[n].events)&&(_[n].events=t.grep(_[n].events,e,!0))}else for(O=[],n=0;_.length>n;n++)t.isArray(_[n].events)&&(_[n].events=[]);M(O)}function m(e){return t.isFunction(e)?t.grep(O,e):e?(e+="",t.grep(O,function(t){return t._id==e})):O}function y(){N++||k("loading",null,!0,x())}function b(){--N||k("loading",null,!1,x())}function D(n,r){var a,o,i,s,l={};return e.eventDataTransform&&(n=e.eventDataTransform(n)),r&&r.eventDataTransform&&(n=r.eventDataTransform(n)),a=C.moment(n.start||n.date),a.isValid()&&(o=null,!n.end||(o=C.moment(n.end),o.isValid()))?(i=n.allDay,void 0===i&&(s=A(r?r.allDayDefault:void 0,e.allDayDefault),i=void 0!==s?s:!(a.hasTime()||o&&o.hasTime())),i?(a.hasTime()&&a.stripTime(),o&&o.hasTime()&&o.stripTime()):(a.hasTime()||(a=C.rezoneDate(a)),o&&!o.hasTime()&&(o=C.rezoneDate(o))),t.extend(l,n),r&&(l.source=r),l._id=n._id||(void 0===n.id?"_fc"+Fe++:n.id+""),l.className=n.className?"string"==typeof n.className?n.className.split(/\s+/):n.className:[],l.allDay=i,l.start=a,l.end=o,e.forceEventDuration&&!l.end&&(l.end=z(l)),d(l),l):void 0}function w(t,e,n){var r,a,o,i,s=t._allDay,l=t._start,c=t._end,d=!1;return e||n||(e=t.start,n=t.end),r=t.allDay!=s?t.allDay:!(e||n).hasTime(),r&&(e&&(e=e.clone().stripTime()),n&&(n=n.clone().stripTime())),e&&(a=r?v(e,l.clone().stripTime()):v(e,l)),r!=s?d=!0:n&&(o=v(n||C.getDefaultEventEnd(r,e||l),e||l).subtract(v(c||C.getDefaultEventEnd(s,l),l))),i=T(m(t._id),d,r,a,o),{dateDelta:a,durationDelta:o,undo:i}}function T(n,r,a,o,i){var s=C.getIsAmbigTimezone(),l=[];return t.each(n,function(t,n){var c=n._allDay,u=n._start,f=n._end,v=null!=a?a:c,h=u.clone(),p=!r&&f?f.clone():null;v?(h.stripTime(),p&&p.stripTime()):(h.hasTime()||(h=C.rezoneDate(h)),p&&!p.hasTime()&&(p=C.rezoneDate(p))),p||!e.forceEventDuration&&!+i||(p=C.getDefaultEventEnd(v,h)),h.add(o),p&&p.add(o).add(i),s&&(+o||+i)&&(h.stripZone(),p&&p.stripZone()),n.allDay=v,n.start=h,n.end=p,d(n),l.push(function(){n.allDay=c,n.start=u,n.end=f,d(n)})}),function(){for(var t=0;l.length>t;t++)l[t]()}}var C=this;C.isFetchNeeded=n,C.fetchEvents=r,C.addEventSource=i,C.removeEventSource=l,C.updateEvent=f,C.renderEvent=p,C.removeEvents=g,C.clientEvents=m,C.mutateEvent=w;var E,S,k=C.trigger,x=C.getView,M=C.reportEvents,z=C.getEventEnd,R={events:[]},_=[R],H=0,F=0,N=0,O=[];t.each((e.events?[e.events]:[]).concat(e.eventSources||[]),function(t,e){var n=s(e);n&&_.push(n)});var W=["title","url","allDay","className","editable","color","backgroundColor","borderColor","textColor"]}function d(t){t._allDay=t.allDay,t._start=t.start.clone(),t._end=t.end?t.end.clone():null}function u(t){var e=function(){};return e.prototype=t,new e}function f(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}function v(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days"),ms:t.time()-n.time()})}function h(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function p(e,n,r){e.unbind("mouseover").mouseover(function(e){for(var a,o,i,s=e.target;s!=this;)a=s,s=s.parentNode;void 0!==(o=a._fci)&&(a._fci=void 0,i=n[o],r(i.event,i.element,i),t(e.target).trigger(e)),e.stopPropagation()})}function g(e,n,r){for(var a,o=0;e.length>o;o++)a=t(e[o]),a.width(Math.max(0,n-y(a,r)))}function m(e,n,r){for(var a,o=0;e.length>o;o++)a=t(e[o]),a.height(Math.max(0,n-T(a,r)))}function y(t,e){return b(t)+w(t)+(e?D(t):0)}function b(e){return(parseFloat(t.css(e[0],"paddingLeft",!0))||0)+(parseFloat(t.css(e[0],"paddingRight",!0))||0)}function D(e){return(parseFloat(t.css(e[0],"marginLeft",!0))||0)+(parseFloat(t.css(e[0],"marginRight",!0))||0)}function w(e){return(parseFloat(t.css(e[0],"borderLeftWidth",!0))||0)+(parseFloat(t.css(e[0],"borderRightWidth",!0))||0)}function T(t,e){return C(t)+S(t)+(e?E(t):0)}function C(e){return(parseFloat(t.css(e[0],"paddingTop",!0))||0)+(parseFloat(t.css(e[0],"paddingBottom",!0))||0)}function E(e){return(parseFloat(t.css(e[0],"marginTop",!0))||0)+(parseFloat(t.css(e[0],"marginBottom",!0))||0)}function S(e){return(parseFloat(t.css(e[0],"borderTopWidth",!0))||0)+(parseFloat(t.css(e[0],"borderBottomWidth",!0))||0)}function k(){}function x(t,e){return t-e}function M(t){return Math.max.apply(Math,t)}function z(t,e){if(t=t||{},void 0!==t[e])return t[e];for(var n,r=e.split(/(?=[A-Z])/),a=r.length-1;a>=0;a--)if(n=t[r[a].toLowerCase()],void 0!==n)return n;return t["default"]}function R(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function _(t){return t.replace(/&.*?;/g,"")}function H(t){t.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return!1})}function F(t){t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")}function N(t,e){var n=t.source||{},r=t.color,a=n.color,o=e("eventColor"),i=t.backgroundColor||r||n.backgroundColor||a||e("eventBackgroundColor")||o,s=t.borderColor||r||n.borderColor||a||e("eventBorderColor")||o,l=t.textColor||n.textColor||e("eventTextColor"),c=[];return i&&c.push("background-color:"+i),s&&c.push("border-color:"+s),l&&c.push("color:"+l),c.join(";")}function Y(e,n,r){if(t.isFunction(e)&&(e=[e]),e){var a,o;for(a=0;e.length>a;a++)o=e[a].apply(n,r)||o;return o}}function A(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t]}function O(n,r,a){var o,i,s,l,c=n[0],d=1==n.length&&"string"==typeof c;return e.isMoment(c)?(l=e.apply(null,n),c._ambigTime&&(l._ambigTime=!0),c._ambigZone&&(l._ambigZone=!0)):h(c)||void 0===c?l=e.apply(null,n):(o=!1,i=!1,d?Ye.test(c)?(c+="-01",n=[c],o=!0,i=!0):(s=Ae.exec(c))&&(o=!s[5],i=!0):t.isArray(c)&&(i=!0),l=r?e.utc.apply(e,n):e.apply(null,n),o?(l._ambigTime=!0,l._ambigZone=!0):a&&(i?l._ambigZone=!0:d&&l.zone(c))),new W(l)}function W(t){f(this,t)}function L(t){var e,n=[],r=!1,a=!1;for(e=0;t.length>e;e++)n.push(Re.moment(t[e])),r=r||n[e]._ambigTime,a=a||n[e]._ambigZone;for(e=0;n.length>e;e++)r?n[e].stripTime():a&&n[e].stripZone();return n}function Z(t,n){return e.fn.format.call(t,n)}function B(t,e){return P(t,V(e))}function P(t,e){var n,r="";for(n=0;e.length>n;n++)r+=j(t,e[n]);return r}function j(t,e){var n,r;return"string"==typeof e?e:(n=e.token)?Oe[n]?Oe[n](t):Z(t,n):e.maybe&&(r=P(t,e.maybe),r.match(/[1-9]/))?r:""}function I(t,e,n,r,a){return t=Re.moment.parseZone(t),e=Re.moment.parseZone(e),n=t.lang().longDateFormat(n)||n,r=r||" - ",q(t,e,V(n),r,a)}function q(t,e,n,r,a){var o,i,s,l,c="",d="",u="",f="",v="";for(i=0;n.length>i&&(o=$(t,e,n[i]),o!==!1);i++)c+=o;for(s=n.length-1;s>i&&(o=$(t,e,n[s]),o!==!1);s--)d=o+d;for(l=i;s>=l;l++)u+=j(t,n[l]),f+=j(e,n[l]);return(u||f)&&(v=a?f+r+u:u+r+f),c+v+d}function $(t,e,n){var r,a;return"string"==typeof n?n:(r=n.token)&&(a=We[r.charAt(0)],a&&t.isSame(e,a))?Z(t,r):!1}function V(t){return t in Le?Le[t]:Le[t]=X(t)}function X(t){for(var e,n=[],r=/\[([^\]]*)\]|\(([^\)]*)\)|(LT|(\w)\4*o?)|([^\w\[\(]+)/g;e=r.exec(t);)e[1]?n.push(e[1]):e[2]?n.push({maybe:X(e[2])}):e[3]?n.push({token:e[3]}):e[5]&&n.push(e[5]);return n}function U(t,e){function n(t,e){return t.clone().stripTime().add("months",e).startOf("month")}function r(t){a.intervalStart=t.clone().stripTime().startOf("month"),a.intervalEnd=a.intervalStart.clone().add("months",1),a.start=a.intervalStart.clone(),a.start=a.skipHiddenDays(a.start),a.start.startOf("week"),a.start=a.skipHiddenDays(a.start),a.end=a.intervalEnd.clone(),a.end=a.skipHiddenDays(a.end,-1,!0),a.end.add("days",(7-a.end.weekday())%7),a.end=a.skipHiddenDays(a.end,-1,!0);var n=Math.ceil(a.end.diff(a.start,"weeks",!0));"fixed"==a.opt("weekMode")&&(a.end.add("weeks",6-n),n=6),a.title=e.formatDate(a.intervalStart,a.opt("titleFormat")),a.renderBasic(n,a.getCellsPerWeek(),!0)}var a=this;a.incrementDate=n,a.render=r,J.call(a,t,e,"month")}function G(t,e){function n(t,e){return t.clone().stripTime().add("weeks",e).startOf("week")}function r(t){a.intervalStart=t.clone().stripTime().startOf("week"),a.intervalEnd=a.intervalStart.clone().add("weeks",1),a.start=a.skipHiddenDays(a.intervalStart),a.end=a.skipHiddenDays(a.intervalEnd,-1,!0),a.title=e.formatRange(a.start,a.end.clone().subtract(1),a.opt("titleFormat")," — "),a.renderBasic(1,a.getCellsPerWeek(),!1)}var a=this;a.incrementDate=n,a.render=r,J.call(a,t,e,"basicWeek")}function Q(t,e){function n(t,e){var n=t.clone().stripTime().add("days",e);return n=a.skipHiddenDays(n,0>e?-1:1)}function r(t){a.start=a.intervalStart=t.clone().stripTime(),a.end=a.intervalEnd=a.start.clone().add("days",1),a.title=e.formatDate(a.start,a.opt("titleFormat")),a.renderBasic(1,1,!1)}var a=this;a.incrementDate=n,a.render=r,J.call(a,t,e,"basicDay")}function J(e,n,r){function a(t,e,n){U=t,G=e,Q=n,o(),W||i(),s()}function o(){re=ie("theme")?"ui":"fc",ae=ie("columnFormat"),oe=ie("weekNumbers")}function i(){I=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)}function s(){var n=l();Y&&Y.remove(),Y=t(n).appendTo(e),A=Y.find("thead"),O=A.find(".fc-day-header"),W=Y.find("tbody"),L=W.find("tr"),Z=W.find(".fc-day"),B=L.find("td:first-child"),P=L.eq(0).find(".fc-day > div"),j=L.eq(0).find(".fc-day-content > div"),F(A.add(A.find("tr"))),F(L),L.eq(0).addClass("fc-first"),L.filter(":last").addClass("fc-last"),Z.each(function(e,n){var r=ue(Math.floor(e/G),e%G);se("dayRender",N,r,t(n))}),h(Z)}function l(){var t="<table class='fc-border-separate' style='width:100%' cellspacing='0'>"+c()+d()+"</table>";return t}function c(){var t,e,n=re+"-widget-header",r="";for(r+="<thead><tr>",oe&&(r+="<th class='fc-week-number "+n+"'>"+R(ie("weekNumberTitle"))+"</th>"),t=0;G>t;t++)e=ue(0,t),r+="<th class='fc-day-header fc-"+Ne[e.day()]+" "+n+"'>"+R(he(e,ae))+"</th>";return r+="</tr></thead>"}function d(){var t,e,n,r=re+"-widget-content",a="";for(a+="<tbody>",t=0;U>t;t++){for(a+="<tr class='fc-week'>",oe&&(n=ue(t,0),a+="<td class='fc-week-number "+r+"'>"+"<div>"+R(pe(n))+"</div>"+"</td>"),e=0;G>e;e++)n=ue(t,e),a+=u(n);a+="</tr>"}return a+="</tbody>"}function u(t){var e=N.intervalStart.month(),r=n.getNow().stripTime(),a="",o=re+"-widget-content",i=["fc-day","fc-"+Ne[t.day()],o];return t.month()!=e&&i.push("fc-other-month"),t.isSame(r,"day")?i.push("fc-today",re+"-state-highlight"):r>t?i.push("fc-past"):i.push("fc-future"),a+="<td class='"+i.join(" ")+"'"+" data-date='"+t.format()+"'"+">"+"<div>",Q&&(a+="<div class='fc-day-number'>"+t.date()+"</div>"),a+="<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"}function f(e){$=e;var n,r,a,o=Math.max($-A.height(),0);"variable"==ie("weekMode")?n=r=Math.floor(o/(1==U?2:6)):(n=Math.floor(o/U),r=o-n*(U-1)),B.each(function(e,o){U>e&&(a=t(o),a.find("> div").css("min-height",(e==U-1?r:n)-T(a)))})}function v(t){q=t,ee.clear(),ne.clear(),X=0,oe&&(X=A.find("th.fc-week-number").outerWidth()),V=Math.floor((q-X)/G),g(O.slice(0,-1),V)}function h(t){t.click(p).mousedown(de)}function p(e){if(!ie("selectable")){var r=n.moment(t(this).data("date"));se("dayClick",this,r,e)}}function m(t,e,n){n&&J.build();for(var r=ve(t,e),a=0;r.length>a;a++){var o=r[a];h(y(o.row,o.leftCol,o.row,o.rightCol))}}function y(t,n,r,a){var o=J.rect(t,n,r,a,e);return le(o,e)}function b(t){return t.clone().stripTime().add("days",1)}function D(t,e){m(t,e,!0)}function w(){ce()}function C(t,e){var n=fe(t),r=Z[n.row*G+n.col];se("dayClick",r,t,e)}function E(t,e){te.start(function(t){if(ce(),t){var e=ue(t),r=e.clone().add(n.defaultAllDayEventDuration);m(e,r)}},e)}function S(t,e,n){var r=te.stop();ce(),r&&se("drop",t,ue(r),e,n)}function k(t){return ee.left(t)}function x(t){return ee.right(t)}function M(t){return ne.left(t)}function z(t){return ne.right(t)}function _(t){return L.eq(t)}var N=this;N.renderBasic=a,N.setHeight=f,N.setWidth=v,N.renderDayOverlay=m,N.defaultSelectionEnd=b,N.renderSelection=D,N.clearSelection=w,N.reportDayClick=C,N.dragStart=E,N.dragStop=S,N.getHoverListener=function(){return te},N.colLeft=k,N.colRight=x,N.colContentLeft=M,N.colContentRight=z,N.getIsCellAllDay=function(){return!0},N.allDayRow=_,N.getRowCnt=function(){return U},N.getColCnt=function(){return G},N.getColWidth=function(){return V},N.getDaySegmentContainer=function(){return I},ge.call(N,e,n,r),Te.call(N),we.call(N),K.call(N);var Y,A,O,W,L,Z,B,P,j,I,q,$,V,X,U,G,Q,J,te,ee,ne,re,ae,oe,ie=N.opt,se=N.trigger,le=N.renderOverlay,ce=N.clearOverlays,de=N.daySelectionMousedown,ue=N.cellToDate,fe=N.dateToCell,ve=N.rangeToSegments,he=n.formatDate,pe=n.calculateWeekNumber;H(e.addClass("fc-grid")),J=new Ce(function(e,n){var r,a,o;O.each(function(e,i){r=t(i),a=r.offset().left,e&&(o[1]=a),o=[a],n[e]=o}),o[1]=a+r.outerWidth(),L.each(function(n,i){U>n&&(r=t(i),a=r.offset().top,n&&(o[1]=a),o=[a],e[n]=o)}),o[1]=a+r.outerHeight()}),te=new Ee(J),ee=new ke(function(t){return P.eq(t)}),ne=new ke(function(t){return j.eq(t)})}function K(){function t(t,e){n.renderDayEvents(t,e)}function e(){n.getDaySegmentContainer().empty()}var n=this;n.renderEvents=t,n.clearEvents=e,me.call(n)}function te(t,e){function n(t,e){return t.clone().stripTime().add("weeks",e).startOf("week")}function r(t){a.intervalStart=t.clone().stripTime().startOf("week"),a.intervalEnd=a.intervalStart.clone().add("weeks",1),a.start=a.skipHiddenDays(a.intervalStart),a.end=a.skipHiddenDays(a.intervalEnd,-1,!0),a.title=e.formatRange(a.start,a.end.clone().subtract(1),a.opt("titleFormat")," — "),a.renderAgenda(a.getCellsPerWeek())}var a=this;a.incrementDate=n,a.render=r,ae.call(a,t,e,"agendaWeek")}function ee(t,e){function n(t,e){var n=t.clone().stripTime().add("days",e);return n=a.skipHiddenDays(n,0>e?-1:1)}function r(t){a.start=a.intervalStart=t.clone().stripTime(),a.end=a.intervalEnd=a.start.clone().add("days",1),a.title=e.formatDate(a.start,a.opt("titleFormat")),a.renderAgenda(1)}var a=this;a.incrementDate=n,a.render=r,ae.call(a,t,e,"agendaDay")}function ne(t,e){return e.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")}function re(t,e){return e.longDateFormat("LT").replace(/\s*a$/i,"")}function ae(n,r,a){function o(t){xe=t,i(),$?l():s()}function i(){Fe=Le("theme")?"ui":"fc",Ye=Le("isRTL"),We=Le("columnFormat"),Ae=e.duration(Le("minTime")),Oe=e.duration(Le("maxTime")),me=e.duration(Le("slotDuration")),be=Le("snapDuration"),be=be?e.duration(be):me}function s(){var r,a,o,i,s=Fe+"-widget-header",c=Fe+"-widget-content",d=0===me.asMinutes()%15;for(l(),ee=t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n),Le("allDaySlot")?(ne=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ee),r="<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='"+s+" fc-agenda-axis'>"+(Le("allDayHTML")||R(Le("allDayText")))+"</th>"+"<td>"+"<div class='fc-day-content'><div style='position:relative'/></div>"+"</td>"+"<th class='"+s+" fc-agenda-gutter'>&nbsp;</th>"+"</tr>"+"</table>",re=t(r).appendTo(ee),ae=re.find("tr"),y(ae.find("td")),ee.append("<div class='fc-agenda-divider "+s+"'>"+"<div class='fc-agenda-divider-inner'/>"+"</div>")):ne=t([]),ie=t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ee),se=t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(ie),le=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(se),r="<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>",a=e.duration(+Ae),Me=0;Oe>a;)o=q.start.clone().time(a),i=o.minutes(),r+="<tr class='fc-slot"+Me+" "+(i?"fc-minor":"")+"'>"+"<th class='fc-agenda-axis "+s+"'>"+(d&&i?"&nbsp;":R(Ge(o,Le("axisFormat"))))+"</th>"+"<td class='"+c+"'>"+"<div style='position:relative'>&nbsp;</div>"+"</td>"+"</tr>",a.add(me),Me++;r+="</tbody></table>",ce=t(r).appendTo(se),b(ce.find("td"))}function l(){var e=c();$&&$.remove(),$=t(e).appendTo(n),V=$.find("thead"),X=V.find("th").slice(1,-1),U=$.find("tbody"),G=U.find("td").slice(0,-1),Q=G.find("> div"),J=G.find(".fc-day-content > div"),K=G.eq(0),te=Q.eq(0),F(V.add(V.find("tr"))),F(U.add(U.find("tr")))}function c(){var t="<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>"+d()+u()+"</table>";return t}function d(){var t,e,n,r=Fe+"-widget-header",a="";for(a+="<thead><tr>",Le("weekNumbers")?(t=Ve(0,0),e=Qe(t),Ye?e+=Le("weekNumberTitle"):e=Le("weekNumberTitle")+e,a+="<th class='fc-agenda-axis fc-week-number "+r+"'>"+R(e)+"</th>"):a+="<th class='fc-agenda-axis "+r+"'>&nbsp;</th>",n=0;xe>n;n++)t=Ve(0,n),a+="<th class='fc-"+Ne[t.day()]+" fc-col"+n+" "+r+"'>"+R(Ge(t,We))+"</th>";return a+="<th class='fc-agenda-gutter "+r+"'>&nbsp;</th>"+"</tr>"+"</thead>"}function u(){var t,e,n,a,o,i=Fe+"-widget-header",s=Fe+"-widget-content",l=r.getNow().stripTime(),c="";for(c+="<tbody><tr><th class='fc-agenda-axis "+i+"'>&nbsp;</th>",n="",e=0;xe>e;e++)t=Ve(0,e),o=["fc-col"+e,"fc-"+Ne[t.day()],s],t.isSame(l,"day")?o.push(Fe+"-state-highlight","fc-today"):l>t?o.push("fc-past"):o.push("fc-future"),a="<td class='"+o.join(" ")+"'>"+"<div>"+"<div class='fc-day-content'>"+"<div style='position:relative'>&nbsp;</div>"+"</div>"+"</div>"+"</td>",n+=a;return c+=n,c+="<td class='fc-agenda-gutter "+s+"'>&nbsp;</td>"+"</tr>"+"</tbody>"}function f(t){void 0===t&&(t=fe),fe=t,Je={};var e=U.position().top,n=ie.position().top,r=Math.min(t-e,ce.height()+n+1);te.height(r-T(K)),ee.css("top",e),ie.height(r-n-1);var a=ce.find("tr:first").height()+1,o=ce.find("tr:eq(1)").height();ye=(a+o)/2,De=me/be,Se=ye/De}function v(e){ue=e,_e.clear(),He.clear();var n=V.find("th:first");re&&(n=n.add(re.find("th:first"))),n=n.add(ce.find("th:first")),ve=0,g(n.width("").each(function(e,n){ve=Math.max(ve,t(n).outerWidth())}),ve);var r=$.find(".fc-agenda-gutter");re&&(r=r.add(re.find("th.fc-agenda-gutter")));var a=ie[0].clientWidth;pe=ie.width()-a,pe?(g(r,pe),r.show().prev().removeClass("fc-last")):r.hide().prev().addClass("fc-last"),he=Math.floor((a-ve)/xe),g(X.slice(0,-1),he)}function h(){function t(){ie.scrollTop(n)}var n=A(e.duration(Le("scrollTime")))+1;t(),setTimeout(t,0)}function p(){h()}function y(t){t.click(D).mousedown(qe)}function b(t){t.click(D).mousedown(B)}function D(t){if(!Le("selectable")){var e=Math.min(xe-1,Math.floor((t.pageX-$.offset().left-ve)/he)),n=Ve(0,e),a=this.parentNode.className.match(/fc-slot(\d+)/);if(a){var o=parseInt(a[1],10);n.add(Ae+o*me),n=r.rezoneDate(n),Ze("dayClick",G[e],n,t)}else Ze("dayClick",G[e],n,t)}}function w(t,e,n){n&&ze.build();for(var r=Ue(t,e),a=0;r.length>a;a++){var o=r[a];y(C(o.row,o.leftCol,o.row,o.rightCol))}}function C(t,e,n,r){var a=ze.rect(t,e,n,r,ee);return Be(a,ee)}function E(t,e){t=t.clone().stripZone(),e=e.clone().stripZone();for(var n=0;xe>n;n++){var r=Ve(0,n),a=r.clone().add("days",1),o=t>r?t:r,i=e>a?a:e;if(i>o){var s=ze.rect(0,n,0,n,se),l=Y(o,r),c=Y(i,r);s.top=l,s.height=c-l,b(Be(s,se))}}}function S(t){return _e.left(t)}function k(t){return He.left(t)}function M(t){return _e.right(t)}function z(t){return He.right(t)}function _(t){return Le("allDaySlot")&&!t.row}function N(t){var n=Ve(0,t.col),a=t.row;return Le("allDaySlot")&&a--,a>=0&&(n.time(e.duration(Ae+a*be)),n=r.rezoneDate(n)),n}function Y(t,n){return A(e.duration(t.clone().stripZone()-n.clone().stripTime()))}function A(t){if(Ae>t)return 0;if(t>=Oe)return ce.height();var e=(t-Ae)/me,n=Math.floor(e),r=e-n,a=Je[n];void 0===a&&(a=Je[n]=ce.find("tr").eq(n).find("td div")[0].offsetTop);var o=a-1+r*ye;return o=Math.max(o,0)}function O(t){return t.hasTime()?t.clone().add(me):t.clone().add("days",1)}function W(t,e){t.hasTime()||e.hasTime()?L(t,e):Le("allDaySlot")&&w(t,e,!0)}function L(e,n){var r=Le("selectHelper");if(ze.build(),r){var a=Xe(e).col;if(a>=0&&xe>a){var o=ze.rect(0,a,0,a,se),i=Y(e,e),s=Y(n,e);if(s>i){if(o.top=i,o.height=s-i,o.left+=2,o.width-=5,t.isFunction(r)){var l=r(e,n);l&&(o.position="absolute",de=t(l).css(o).appendTo(se))}else o.isStart=!0,o.isEnd=!0,de=t($e({title:"",start:e,end:n,className:["fc-select-helper"],editable:!1},o)),de.css("opacity",Le("dragOpacity"));de&&(b(de),se.append(de),g(de,o.width,!0),m(de,o.height,!0))}}}else E(e,n)}function Z(){Pe(),de&&(de.remove(),de=null)}function B(e){if(1==e.which&&Le("selectable")){Ie(e);var n;Re.start(function(t,e){if(Z(),t&&t.col==e.col&&!_(t)){var r=N(e),a=N(t);n=[r,r.clone().add(be),a,a.clone().add(be)].sort(x),L(n[0],n[3])}else n=null},e),t(document).one("mouseup",function(t){Re.stop(),n&&(+n[0]==+n[1]&&P(n[0],t),je(n[0],n[3],t))})}}function P(t,e){Ze("dayClick",G[Xe(t).col],t,e)}function j(t,e){Re.start(function(t){if(Pe(),t){var e=N(t),n=e.clone();e.hasTime()?(n.add(r.defaultTimedEventDuration),E(e,n)):(n.add(r.defaultAllDayEventDuration),w(e,n))}},e)}function I(t,e,n){var r=Re.stop();Pe(),r&&Ze("drop",t,N(r),e,n)}var q=this;q.renderAgenda=o,q.setWidth=v,q.setHeight=f,q.afterRender=p,q.computeDateTop=Y,q.getIsCellAllDay=_,q.allDayRow=function(){return ae},q.getCoordinateGrid=function(){return ze},q.getHoverListener=function(){return Re},q.colLeft=S,q.colRight=M,q.colContentLeft=k,q.colContentRight=z,q.getDaySegmentContainer=function(){return ne},q.getSlotSegmentContainer=function(){return le},q.getSlotContainer=function(){return se},q.getRowCnt=function(){return 1},q.getColCnt=function(){return xe},q.getColWidth=function(){return he},q.getSnapHeight=function(){return Se},q.getSnapDuration=function(){return be},q.getSlotHeight=function(){return ye},q.getSlotDuration=function(){return me},q.getMinTime=function(){return Ae},q.getMaxTime=function(){return Oe},q.defaultSelectionEnd=O,q.renderDayOverlay=w,q.renderSelection=W,q.clearSelection=Z,q.reportDayClick=P,q.dragStart=j,q.dragStop=I,ge.call(q,n,r,a),Te.call(q),we.call(q),oe.call(q);var $,V,X,U,G,Q,J,K,te,ee,ne,re,ae,ie,se,le,ce,de,ue,fe,ve,he,pe,me,ye,be,De,Se,xe,Me,ze,Re,_e,He,Fe,Ye,Ae,Oe,We,Le=q.opt,Ze=q.trigger,Be=q.renderOverlay,Pe=q.clearOverlays,je=q.reportSelection,Ie=q.unselect,qe=q.daySelectionMousedown,$e=q.slotSegHtml,Ve=q.cellToDate,Xe=q.dateToCell,Ue=q.rangeToSegments,Ge=r.formatDate,Qe=r.calculateWeekNumber,Je={};
H(n.addClass("fc-agenda")),ze=new Ce(function(e,n){function r(t){return Math.max(l,Math.min(c,t))}var a,o,i;X.each(function(e,r){a=t(r),o=a.offset().left,e&&(i[1]=o),i=[o],n[e]=i}),i[1]=o+a.outerWidth(),Le("allDaySlot")&&(a=ae,o=a.offset().top,e[0]=[o,o+a.outerHeight()]);for(var s=se.offset().top,l=ie.offset().top,c=l+ie.outerHeight(),d=0;Me*De>d;d++)e.push([r(s+Se*d),r(s+Se*(d+1))])}),Re=new Ee(ze),_e=new ke(function(t){return Q.eq(t)}),He=new ke(function(t){return J.eq(t)})}function oe(){function n(t,e){var n,r=t.length,o=[],s=[];for(n=0;r>n;n++)t[n].allDay?o.push(t[n]):s.push(t[n]);v("allDaySlot")&&(V(o,e),w()),i(a(s),e)}function r(){C().empty(),E().empty()}function a(t){var e,n,r,a,i,s=H(),l=X(),c=U(),d=[];for(n=0;s>n;n++)for(e=_(0,n),i=o(t,e.clone().time(l),e.clone().time(c)),i=ie(i),r=0;i.length>r;r++)a=i[r],a.col=n,d.push(a);return d}function o(t,e,n){e=e.clone().stripZone(),n=n.clone().stripZone();var r,a,o,i,s,l,c,d,u=[],f=t.length;for(r=0;f>r;r++)a=t[r],o=a.start.clone().stripZone(),i=J(a).stripZone(),i>e&&n>o&&(e>o?(s=e.clone(),c=!1):(s=o,c=!0),i>n?(l=n.clone(),d=!1):(l=i,d=!0),u.push({event:a,start:s,end:l,isStart:c,isEnd:d}));return u.sort(pe)}function i(e,n){var r,a,o,i,c,d,u,f,g,m,b,D,w,C,S,x,R=e.length,_="",H=E(),F=v("isRTL");for(r=0;R>r;r++)a=e[r],o=a.event,i=k(a.start,a.start),c=k(a.end,a.start),d=M(a.col),u=z(a.col),f=u-d,u-=.025*f,f=u-d,g=f*(a.forwardCoord-a.backwardCoord),v("slotEventOverlap")&&(g=Math.max(2*(g-10),g)),F?(b=u-a.backwardCoord*f,m=b-g):(m=d+a.backwardCoord*f,b=m+g),m=Math.max(m,d),b=Math.min(b,u),g=b-m,a.top=i,a.left=m,a.outerWidth=g,a.outerHeight=c-i,_+=s(o,a);for(H[0].innerHTML=_,D=H.children(),r=0;R>r;r++)a=e[r],o=a.event,w=t(D[r]),C=h("eventRender",o,o,w),C===!1?w.remove():(C&&C!==!0&&(w.remove(),w=t(C).css({position:"absolute",top:a.top,left:a.left}).appendTo(H)),a.element=w,o._id===n?l(o,w,a):w[0]._fci=r,Z(o,w));for(p(H,e,l),r=0;R>r;r++)a=e[r],(w=a.element)&&(a.vsides=T(w,!0),a.hsides=y(w,!0),S=w.find(".fc-event-title"),S.length&&(a.contentTop=S[0].offsetTop));for(r=0;R>r;r++)a=e[r],(w=a.element)&&(w[0].style.width=Math.max(0,a.outerWidth-a.hsides)+"px",x=Math.max(0,a.outerHeight-a.vsides),w[0].style.height=x+"px",o=a.event,void 0!==a.contentTop&&10>x-a.contentTop&&(w.find("div.fc-event-time").text(Q(o.start,v("timeFormat"))+" - "+o.title),w.find("div.fc-event-title").remove()),h("eventAfterRender",o,o,w))}function s(t,e){var n="<",r=t.url,a=N(t,v),o=["fc-event","fc-event-vert"];return g(t)&&o.push("fc-event-draggable"),e.isStart&&o.push("fc-event-start"),e.isEnd&&o.push("fc-event-end"),o=o.concat(t.className),t.source&&(o=o.concat(t.source.className||[])),n+=r?"a href='"+R(t.url)+"'":"div",n+=" class='"+o.join(" ")+"'"+" style="+"'"+"position:absolute;"+"top:"+e.top+"px;"+"left:"+e.left+"px;"+a+"'"+">"+"<div class='fc-event-inner'>"+"<div class='fc-event-time'>"+R(f.getEventTimeText(t))+"</div>"+"<div class='fc-event-title'>"+R(t.title||"")+"</div>"+"</div>"+"<div class='fc-event-bg'></div>",e.isEnd&&b(t)&&(n+="<div class='ui-resizable-handle ui-resizable-s'>=</div>"),n+="</"+(r?"a":"div")+">"}function l(t,e,n){var r=e.find("div.fc-event-time");g(t)&&d(t,e,r),n.isEnd&&b(t)&&u(t,e,r),D(t,e)}function c(t,n,r){function a(){c||(n.width(o).height("").draggable("option","grid",null),c=!0)}var o,i,s,l=r.isStart,c=!0,d=S(),u=F(),f=X(),p=W(),g=O(),y=A(),b=Y();n.draggable({opacity:v("dragOpacity","month"),revertDuration:v("dragRevertDuration"),start:function(e,r){h("eventDragStart",n[0],t,e,r),P(t,n),o=n.width(),d.start(function(e,r){if($(),e){i=!1;var o=_(0,r.col),d=_(0,e.col);s=d.diff(o,"days"),e.row?l?c&&(n.width(u-10),m(n,G.defaultTimedEventDuration/p*g),n.draggable("option","grid",[u,1]),c=!1):i=!0:(q(t.start.clone().add("days",s),J(t).add("days",s)),a()),i=i||c&&!s}else a(),i=!0;n.draggable("option","revert",i)},e,"drag")},stop:function(r,o){if(d.stop(),$(),h("eventDragStop",n[0],t,r,o),i)a(),n.css("filter",""),B(t,n);else{var l,u,v=t.start.clone().add("days",s);c||(u=Math.round((n.offset().top-L().offset().top)/b),l=e.duration(f+u*y),v=G.rezoneDate(v.clone().time(l))),j(n[0],t,v,r,o)}}})}function d(t,e,n){function r(){$(),s&&(c?(n.hide(),e.draggable("option","grid",null),q(b,D)):(a(),n.css("display",""),e.draggable("option","grid",[C,E])))}function a(){b&&n.text(f.getEventTimeText(b,t.end?D:null))}var o,i,s,l,c,d,u,p,g,m,y,b,D,w=f.getCoordinateGrid(),T=H(),C=F(),E=Y(),S=A();e.draggable({scroll:!1,grid:[C,E],axis:1==T?"y":!1,opacity:v("dragOpacity"),revertDuration:v("dragRevertDuration"),start:function(n,r){h("eventDragStart",e[0],t,n,r),P(t,e),w.build(),o=e.position(),i=w.cell(n.pageX,n.pageY),s=l=!0,c=d=x(i),u=p=0,g=0,m=y=0,b=null,D=null},drag:function(n,a){var f=w.cell(n.pageX,n.pageY);if(s=!!f){if(c=x(f),u=Math.round((a.position.left-o.left)/C),u!=p){var v=_(0,i.col),h=i.col+u;h=Math.max(0,h),h=Math.min(T-1,h);var k=_(0,h);g=k.diff(v,"days")}c||(m=Math.round((a.position.top-o.top)/E))}(s!=l||c!=d||u!=p||m!=y)&&(c?(b=t.start.clone().stripTime().add("days",g),D=b.clone().add(G.defaultAllDayEventDuration)):(b=t.start.clone().add(m*S).add("days",g),D=J(t).add(m*S).add("days",g)),r(),l=s,d=c,p=u,y=m),e.draggable("option","revert",!s)},stop:function(n,a){$(),h("eventDragStop",e[0],t,n,a),s&&(c||g||m)?j(e[0],t,b,n,a):(s=!0,c=!1,u=0,g=0,m=0,r(),e.css("filter",""),e.css(o),B(t,e))}})}function u(t,e,n){var r,a,o,i=Y(),s=A();e.resizable({handles:{s:".ui-resizable-handle"},grid:i,start:function(n,o){r=a=0,P(t,e),h("eventResizeStart",e[0],t,n,o)},resize:function(l,c){if(r=Math.round((Math.max(i,e.height())-c.originalSize.height)/i),r!=a){o=J(t).add(s*r);var d;d=r?f.getEventTimeText(t.start,o):f.getEventTimeText(t),n.text(d),a=r}},stop:function(n,a){h("eventResizeStop",e[0],t,n,a),r?I(e[0],t,o,n,a):B(t,e)}})}var f=this;f.renderEvents=n,f.clearEvents=r,f.slotSegHtml=s,me.call(f);var v=f.opt,h=f.trigger,g=f.isEventDraggable,b=f.isEventResizable,D=f.eventElementHandlers,w=f.setHeight,C=f.getDaySegmentContainer,E=f.getSlotSegmentContainer,S=f.getHoverListener,k=f.computeDateTop,x=f.getIsCellAllDay,M=f.colContentLeft,z=f.colContentRight,_=f.cellToDate,H=f.getColCnt,F=f.getColWidth,Y=f.getSnapHeight,A=f.getSnapDuration,O=f.getSlotHeight,W=f.getSlotDuration,L=f.getSlotContainer,Z=f.reportEventElement,B=f.showEvents,P=f.hideEvents,j=f.eventDrop,I=f.eventResize,q=f.renderDayOverlay,$=f.clearOverlays,V=f.renderDayEvents,X=f.getMinTime,U=f.getMaxTime,G=f.calendar,Q=G.formatDate,J=G.getEventEnd;f.draggableDayEvent=c}function ie(t){var e,n=se(t),r=n[0];if(le(n),r){for(e=0;r.length>e;e++)ce(r[e]);for(e=0;r.length>e;e++)de(r[e],0,0)}return ue(n)}function se(t){var e,n,r,a=[];for(e=0;t.length>e;e++){for(n=t[e],r=0;a.length>r&&fe(n,a[r]).length;r++);(a[r]||(a[r]=[])).push(n)}return a}function le(t){var e,n,r,a,o;for(e=0;t.length>e;e++)for(n=t[e],r=0;n.length>r;r++)for(a=n[r],a.forwardSegs=[],o=e+1;t.length>o;o++)fe(a,t[o],a.forwardSegs)}function ce(t){var e,n,r=t.forwardSegs,a=0;if(void 0===t.forwardPressure){for(e=0;r.length>e;e++)n=r[e],ce(n),a=Math.max(a,1+n.forwardPressure);t.forwardPressure=a}}function de(t,e,n){var r,a=t.forwardSegs;if(void 0===t.forwardCoord)for(a.length?(a.sort(he),de(a[0],e+1,n),t.forwardCoord=a[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-n)/(e+1),r=0;a.length>r;r++)de(a[r],0,t.forwardCoord)}function ue(t){var e,n,r,a=[];for(e=0;t.length>e;e++)for(n=t[e],r=0;n.length>r;r++)a.push(n[r]);return a}function fe(t,e,n){n=n||[];for(var r=0;e.length>r;r++)ve(t,e[r])&&n.push(e[r]);return n}function ve(t,e){return t.end>e.start&&t.start<e.end}function he(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||pe(t,e)}function pe(t,e){return t.start-e.start||e.end-e.start-(t.end-t.start)||(t.event.title||"").localeCompare(e.event.title)}function ge(n,r,a){function o(e,n){var r=O[e];return t.isPlainObject(r)&&!i(e)?z(r,n||a):r}function s(t,e){return r.trigger.apply(r,[t,e||H].concat(Array.prototype.slice.call(arguments,2),[H]))}function l(t){var e=t.source||{};return A(t.startEditable,e.startEditable,o("eventStartEditable"),t.editable,e.editable,o("editable"))}function c(t){var e=t.source||{};return A(t.durationEditable,e.durationEditable,o("eventDurationEditable"),t.editable,e.editable,o("editable"))}function d(){N={},Y=[]}function u(t,e){Y.push({event:t,element:e}),N[t._id]?N[t._id].push(e):N[t._id]=[e]}function f(){t.each(Y,function(t,e){H.trigger("eventDestroy",e.event,e.event,e.element)})}function v(t,e){e.click(function(n){return e.hasClass("ui-draggable-dragging")||e.hasClass("ui-resizable-resizing")?void 0:s("eventClick",this,t,n)}).hover(function(e){s("eventMouseover",this,t,e)},function(e){s("eventMouseout",this,t,e)})}function h(t,e){g(t,e,"show")}function p(t,e){g(t,e,"hide")}function g(t,e,n){var r,a=N[t._id],o=a.length;for(r=0;o>r;r++)e&&a[r][0]==e[0]||a[r][n]()}function m(t,e,n,a,o){var i=r.mutateEvent(e,n,null);s("eventDrop",t,e,i.dateDelta,function(){i.undo(),F(e._id)},a,o),F(e._id)}function y(t,e,n,a,o){var i=r.mutateEvent(e,null,n);s("eventResize",t,e,i.durationDelta,function(){i.undo(),F(e._id)},a,o),F(e._id)}function b(t){return e.isMoment(t)&&(t=t.day()),B[t]}function D(){return L}function w(t,e,n){var r=t.clone();for(e=e||1;B[(r.day()+(n?e:0)+7)%7];)r.add("days",e);return r}function T(){var t=C.apply(null,arguments),e=E(t),n=S(e);return n}function C(t,e){var n=H.getColCnt(),r=I?-1:1,a=I?n-1:0;"object"==typeof t&&(e=t.col,t=t.row);var o=t*n+(e*r+a);return o}function E(t){var e=H.start.day();return t+=P[e],7*Math.floor(t/L)+j[(t%L+L)%L]-e}function S(t){return H.start.clone().add("days",t)}function k(t){var e=x(t),n=M(e),r=R(n);return r}function x(t){return t.clone().stripTime().diff(H.start,"days")}function M(t){var e=H.start.day();return t+=e,Math.floor(t/7)*L+P[(t%7+7)%7]-P[e]}function R(t){var e=H.getColCnt(),n=I?-1:1,r=I?e-1:0,a=Math.floor(t/e),o=(t%e+e)%e*n+r;return{row:a,col:o}}function _(t,e){var n=H.getRowCnt(),r=H.getColCnt(),a=[],o=x(t),i=x(e),s=+e.time();s&&s>=W&&i++,i=Math.max(i,o+1);for(var l=M(o),c=M(i)-1,d=0;n>d;d++){var u=d*r,f=u+r-1,v=Math.max(l,u),h=Math.min(c,f);if(h>=v){var p=R(v),g=R(h),m=[p.col,g.col].sort(),y=E(v)==o,b=E(h)+1==i;a.push({row:d,leftCol:m[0],rightCol:m[1],isStart:y,isEnd:b})}}return a}var H=this;H.element=n,H.calendar=r,H.name=a,H.opt=o,H.trigger=s,H.isEventDraggable=l,H.isEventResizable=c,H.clearEventData=d,H.reportEventElement=u,H.triggerEventDestroy=f,H.eventElementHandlers=v,H.showEvents=h,H.hideEvents=p,H.eventDrop=m,H.eventResize=y;var F=r.reportEventChange,N={},Y=[],O=r.options,W=e.duration(O.nextDayThreshold);H.getEventTimeText=function(t){var e,n;return 2===arguments.length?(e=arguments[0],n=arguments[1]):(e=t.start,n=t.end),n&&o("displayEventEnd")?r.formatRange(e,n,o("timeFormat")):r.formatDate(e,o("timeFormat"))},H.isHiddenDay=b,H.skipHiddenDays=w,H.getCellsPerWeek=D,H.dateToCell=k,H.dateToDayOffset=x,H.dayOffsetToCellOffset=M,H.cellOffsetToCell=R,H.cellToDate=T,H.cellToCellOffset=C,H.cellOffsetToDayOffset=E,H.dayOffsetToDate=S,H.rangeToSegments=_;var L,Z=o("hiddenDays")||[],B=[],P=[],j=[],I=o("isRTL");(function(){o("weekends")===!1&&Z.push(0,6);for(var e=0,n=0;7>e;e++)P[e]=n,B[e]=-1!=t.inArray(e,Z),B[e]||(j[n]=e,n++);if(L=n,!L)throw"invalid hiddenDays"})()}function me(){function e(t,e){var n=r(t,!1,!0);be(n,function(t,e){x(t.event,e)}),m(n,e),be(n,function(t,e){E("eventAfterRender",t.event,t.event,e)})}function n(t,e,n){var a=r([t],!0,!1),o=[];return be(a,function(t,r){t.row===e&&r.css("top",n),o.push(r[0])}),o}function r(e,n,r){var o,l,u=I(),f=n?t("<div/>"):u,v=a(e);return i(v),o=s(v),f[0].innerHTML=o,l=f.children(),n&&u.append(l),c(v,l),be(v,function(t,e){t.hsides=y(e,!0)}),be(v,function(t,e){e.width(Math.max(0,t.outerWidth-t.hsides))}),be(v,function(t,e){t.outerHeight=e.outerHeight(!0)}),d(v,r),v}function a(t){for(var e=[],n=0;t.length>n;n++){var r=o(t[n]);e.push.apply(e,r)}return e}function o(t){for(var e=U(t.start,ne(t)),n=0;e.length>n;n++)e[n].event=t;return e}function i(t){for(var e=C("isRTL"),n=0;t.length>n;n++){var r=t[n],a=(e?r.isEnd:r.isStart)?P:Z,o=(e?r.isStart:r.isEnd)?j:B,i=a(r.leftCol),s=o(r.rightCol);r.left=i,r.outerWidth=s-i}}function s(t){for(var e="",n=0;t.length>n;n++)e+=l(t[n]);return e}function l(t){var e="",n=C("isRTL"),r=t.event,a=r.url,o=["fc-event","fc-event-hori"];S(r)&&o.push("fc-event-draggable"),t.isStart&&o.push("fc-event-start"),t.isEnd&&o.push("fc-event-end"),o=o.concat(r.className),r.source&&(o=o.concat(r.source.className||[]));var i=N(r,C);return e+=a?"<a href='"+R(a)+"'":"<div",e+=" class='"+o.join(" ")+"'"+" style="+"'"+"position:absolute;"+"left:"+t.left+"px;"+i+"'"+">"+"<div class='fc-event-inner'>",!r.allDay&&t.isStart&&(e+="<span class='fc-event-time'>"+R(T.getEventTimeText(r))+"</span>"),e+="<span class='fc-event-title'>"+R(r.title||"")+"</span>"+"</div>",r.allDay&&t.isEnd&&k(r)&&(e+="<div class='ui-resizable-handle ui-resizable-"+(n?"w":"e")+"'>"+"&nbsp;&nbsp;&nbsp;"+"</div>"),e+="</"+(a?"a":"div")+">"}function c(e,n){for(var r=0;e.length>r;r++){var a=e[r],o=a.event,i=n.eq(r),s=E("eventRender",o,o,i);s===!1?i.remove():(s&&s!==!0&&(s=t(s).css({position:"absolute",left:a.left}),i.replaceWith(s),i=s),a.element=i)}}function d(t,e){var n,r=u(t),a=g(),o=[];if(e)for(n=0;a.length>n;n++)a[n].height(r[n]);for(n=0;a.length>n;n++)o.push(a[n].position().top);be(t,function(t,e){e.css("top",o[t.row]+t.top)})}function u(t){for(var e,n=O(),r=W(),a=[],o=f(t),i=0;n>i;i++){var s=o[i],l=[];for(e=0;r>e;e++)l.push(0);for(var c=0;s.length>c;c++){var d=s[c];for(d.top=M(l.slice(d.leftCol,d.rightCol+1)),e=d.leftCol;d.rightCol>=e;e++)l[e]=d.top+d.outerHeight}a.push(M(l))}return a}function f(t){var e,n,r,a=O(),o=[];for(e=0;t.length>e;e++)n=t[e],r=n.row,n.element&&(o[r]?o[r].push(n):o[r]=[n]);for(r=0;a>r;r++)o[r]=v(o[r]||[]);return o}function v(t){for(var e=[],n=h(t),r=0;n.length>r;r++)e.push.apply(e,n[r]);return e}function h(t){t.sort(De);for(var e=[],n=0;t.length>n;n++){for(var r=t[n],a=0;e.length>a&&ye(r,e[a]);a++);e[a]?e[a].push(r):e[a]=[r]}return e}function g(){var t,e=O(),n=[];for(t=0;e>t;t++)n[t]=L(t).find("div.fc-day-content > div");return n}function m(t,e){var n=I();be(t,function(t,n,r){var a=t.event;a._id===e?b(a,n,t):n[0]._fci=r}),p(n,t,b)}function b(t,e,n){S(t)&&T.draggableDayEvent(t,e,n),t.allDay&&n.isEnd&&k(t)&&T.resizableDayEvent(t,e,n),z(t,e)}function D(t,e){var n,r,a=X();e.draggable({delay:50,opacity:C("dragOpacity"),revertDuration:C("dragRevertDuration"),start:function(o,i){E("eventDragStart",e[0],t,o,i),F(t,e),a.start(function(a,o,i,s){if(e.draggable("option","revert",!a||!i&&!s),$(),a){var l=G(o),c=G(a);n=c.diff(l,"days"),r=t.start.clone().add("days",n),q(r,ne(t).add("days",n))}else n=0},o,"drag")},stop:function(o,i){a.stop(),$(),E("eventDragStop",e[0],t,o,i),n?Y(e[0],t,r,o,i):(e.css("filter",""),_(t,e))}})}function w(e,r,a){var o=C("isRTL"),i=o?"w":"e",s=r.find(".ui-resizable-"+i),l=!1;H(r),r.mousedown(function(t){t.preventDefault()}).click(function(t){l&&(t.preventDefault(),t.stopImmediatePropagation())}),s.mousedown(function(o){function s(n){E("eventResizeStop",r[0],e,n,{}),t("body").css("cursor",""),f.stop(),$(),c&&A(r[0],e,d,n,{}),setTimeout(function(){l=!1},0)}if(1==o.which){l=!0;var c,d,u,f=X(),v=r.css("top"),h=t.extend({},e),p=te(K(e.start));V(),t("body").css("cursor",i+"-resize").one("mouseup",s),E("eventResizeStart",r[0],e,o,{}),f.start(function(r,o){if(r){var s=Q(o),l=Q(r);if(l=Math.max(l,p),c=J(l)-J(s),d=ne(e).add("days",c),c){h.end=d;var f=u;u=n(h,a.row,v),u=t(u),u.find("*").css("cursor",i+"-resize"),f&&f.remove(),F(e)}else u&&(_(e),u.remove(),u=null);$(),q(e.start,d)}},o)}})}var T=this;T.renderDayEvents=e,T.draggableDayEvent=D,T.resizableDayEvent=w;var C=T.opt,E=T.trigger,S=T.isEventDraggable,k=T.isEventResizable,x=T.reportEventElement,z=T.eventElementHandlers,_=T.showEvents,F=T.hideEvents,Y=T.eventDrop,A=T.eventResize,O=T.getRowCnt,W=T.getColCnt,L=T.allDayRow,Z=T.colLeft,B=T.colRight,P=T.colContentLeft,j=T.colContentRight,I=T.getDaySegmentContainer,q=T.renderDayOverlay,$=T.clearOverlays,V=T.clearSelection,X=T.getHoverListener,U=T.rangeToSegments,G=T.cellToDate,Q=T.cellToCellOffset,J=T.cellOffsetToDayOffset,K=T.dateToDayOffset,te=T.dayOffsetToCellOffset,ee=T.calendar,ne=ee.getEventEnd}function ye(t,e){for(var n=0;e.length>n;n++){var r=e[n];if(r.leftCol<=t.rightCol&&r.rightCol>=t.leftCol)return!0}return!1}function be(t,e){for(var n=0;t.length>n;n++){var r=t[n],a=r.element;a&&e(r,a,n)}}function De(t,e){return e.rightCol-e.leftCol-(t.rightCol-t.leftCol)||e.event.allDay-t.event.allDay||t.event.start-e.event.start||(t.event.title||"").localeCompare(e.event.title)}function we(){function e(e){var n=c("unselectCancel");n&&t(e.target).parents(n).length||r(e)}function n(t,e){r(),t=l.moment(t),e=e?l.moment(e):u(t),f(t,e),a(t,e)}function r(t){h&&(h=!1,v(),d("unselect",null,t))}function a(t,e,n){h=!0,d("select",null,t,e,n)}function o(e){var n=s.cellToDate,o=s.getIsCellAllDay,i=s.getHoverListener(),l=s.reportDayClick;if(1==e.which&&c("selectable")){r(e);var d;i.start(function(t,e){v(),t&&o(t)?(d=[n(e),n(t)].sort(x),f(d[0],d[1].clone().add("days",1))):d=null},e),t(document).one("mouseup",function(t){i.stop(),d&&(+d[0]==+d[1]&&l(d[0],t),a(d[0],d[1].clone().add("days",1),t))})}}function i(){t(document).off("mousedown",e)}var s=this;s.select=n,s.unselect=r,s.reportSelection=a,s.daySelectionMousedown=o,s.selectionManagerDestroy=i;var l=s.calendar,c=s.opt,d=s.trigger,u=s.defaultSelectionEnd,f=s.renderSelection,v=s.clearSelection,h=!1;c("selectable")&&c("unselectAuto")&&t(document).on("mousedown",e)}function Te(){function e(e,n){var r=o.shift();return r||(r=t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")),r[0].parentNode!=n[0]&&r.appendTo(n),a.push(r.css(e).show()),r}function n(){for(var t;t=a.shift();)o.push(t.hide().unbind())}var r=this;r.renderOverlay=e,r.clearOverlays=n;var a=[],o=[]}function Ce(t){var e,n,r=this;r.build=function(){e=[],n=[],t(e,n)},r.cell=function(t,r){var a,o=e.length,i=n.length,s=-1,l=-1;for(a=0;o>a;a++)if(r>=e[a][0]&&e[a][1]>r){s=a;break}for(a=0;i>a;a++)if(t>=n[a][0]&&n[a][1]>t){l=a;break}return s>=0&&l>=0?{row:s,col:l}:null},r.rect=function(t,r,a,o,i){var s=i.offset();return{top:e[t][0]-s.top,left:n[r][0]-s.left,width:n[o][1]-n[r][0],height:e[a][1]-e[t][0]}}}function Ee(e){function n(t){Se(t);var n=e.cell(t.pageX,t.pageY);(Boolean(n)!==Boolean(i)||n&&(n.row!=i.row||n.col!=i.col))&&(n?(o||(o=n),a(n,o,n.row-o.row,n.col-o.col)):a(n,o),i=n)}var r,a,o,i,s=this;s.start=function(s,l,c){a=s,o=i=null,e.build(),n(l),r=c||"mousemove",t(document).bind(r,n)},s.stop=function(){return t(document).unbind(r,n),i}}function Se(t){void 0===t.pageX&&(t.pageX=t.originalEvent.pageX,t.pageY=t.originalEvent.pageY)}function ke(t){function e(e){return r[e]=r[e]||t(e)}var n=this,r={},a={},o={};n.left=function(t){return a[t]=void 0===a[t]?e(t).position().left:a[t]},n.right=function(t){return o[t]=void 0===o[t]?n.left(t)+e(t).width():o[t]},n.clear=function(){r={},a={},o={}}}var xe={lang:"en",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,titleFormat:{month:"MMMM YYYY",week:"ll",day:"LL"},columnFormat:{month:"ddd",week:r,day:"dddd"},timeFormat:{"default":n},displayEventEnd:{month:!1,basicWeek:!1,"default":!0},isRTL:!1,defaultButtonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},unselectAuto:!0,dropAccept:"*",handleWindowResize:!0,windowResizeDelay:200},Me={en:{columnFormat:{week:"ddd M/D"}}},ze={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}},Re=t.fullCalendar={version:"2.0.1"},_e=Re.views={};t.fn.fullCalendar=function(e){var n=Array.prototype.slice.call(arguments,1),r=this;return this.each(function(a,o){var i,l=t(o),c=l.data("fullCalendar");"string"==typeof e?c&&t.isFunction(c[e])&&(i=c[e].apply(c,n),a||(r=i),"destroy"===e&&l.removeData("fullCalendar")):c||(c=new s(l,e),l.data("fullCalendar",c),c.render())}),r},Re.langs=Me,Re.datepickerLang=function(e,n,r){var a=Me[e];a||(a=Me[e]={}),o(a,{isRTL:r.isRTL,weekNumberTitle:r.weekHeader,titleFormat:{month:r.showMonthAfterYear?"YYYY["+r.yearSuffix+"] MMMM":"MMMM YYYY["+r.yearSuffix+"]"},defaultButtonText:{prev:_(r.prevText),next:_(r.nextText),today:_(r.currentText)}}),t.datepicker&&(t.datepicker.regional[n]=t.datepicker.regional[e]=r,t.datepicker.regional.en=t.datepicker.regional[""],t.datepicker.setDefaults(r))},Re.lang=function(t,e){var n;e&&(n=Me[t],n||(n=Me[t]={}),o(n,e||{})),xe.lang=t},Re.sourceNormalizers=[],Re.sourceFetchers=[];var He={dataType:"json",cache:!1},Fe=1;Re.applyAll=Y;var Ne=["sun","mon","tue","wed","thu","fri","sat"],Ye=/^\s*\d{4}-\d\d$/,Ae=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;Re.moment=function(){return O(arguments)},Re.moment.utc=function(){var t=O(arguments,!0);return t.hasTime()&&t.utc(),t},Re.moment.parseZone=function(){return O(arguments,!0,!0)},W.prototype=u(e.fn),W.prototype.clone=function(){return O([this])},W.prototype.time=function(t){if(null==t)return e.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});delete this._ambigTime,e.isDuration(t)||e.isMoment(t)||(t=e.duration(t));var n=0;return e.isDuration(t)&&(n=24*Math.floor(t.asDays())),this.hours(n+t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())},W.prototype.stripTime=function(){var t=this.toArray();return e.fn.utc.call(this),this.year(t[0]).month(t[1]).date(t[2]).hours(0).minutes(0).seconds(0).milliseconds(0),this._ambigTime=!0,this._ambigZone=!0,this},W.prototype.hasTime=function(){return!this._ambigTime},W.prototype.stripZone=function(){var t=this.toArray(),n=this._ambigTime;return e.fn.utc.call(this),this.year(t[0]).month(t[1]).date(t[2]).hours(t[3]).minutes(t[4]).seconds(t[5]).milliseconds(t[6]),n&&(this._ambigTime=!0),this._ambigZone=!0,this},W.prototype.hasZone=function(){return!this._ambigZone},W.prototype.zone=function(t){return null!=t&&(delete this._ambigTime,delete this._ambigZone),e.fn.zone.apply(this,arguments)},W.prototype.local=function(){var t=this.toArray(),n=this._ambigZone;return delete this._ambigTime,delete this._ambigZone,e.fn.local.apply(this,arguments),n&&this.year(t[0]).month(t[1]).date(t[2]).hours(t[3]).minutes(t[4]).seconds(t[5]).milliseconds(t[6]),this},W.prototype.utc=function(){return delete this._ambigTime,delete this._ambigZone,e.fn.utc.apply(this,arguments)},W.prototype.format=function(){return arguments[0]?B(this,arguments[0]):this._ambigTime?Z(this,"YYYY-MM-DD"):this._ambigZone?Z(this,"YYYY-MM-DD[T]HH:mm:ss"):Z(this)},W.prototype.toISOString=function(){return this._ambigTime?Z(this,"YYYY-MM-DD"):this._ambigZone?Z(this,"YYYY-MM-DD[T]HH:mm:ss"):e.fn.toISOString.apply(this,arguments)},W.prototype.isWithin=function(t,e){var n=L([this,t,e]);return n[0]>=n[1]&&n[0]<n[2]},t.each(["isBefore","isAfter","isSame"],function(t,n){W.prototype[n]=function(t,r){var a=L([this,t]);return e.fn[n].call(a[0],a[1],r)}});var Oe={t:function(t){return Z(t,"a").charAt(0)},T:function(t){return Z(t,"A").charAt(0)}};Re.formatRange=I;var We={Y:"year",M:"month",D:"day",d:"day",A:"second",a:"second",T:"second",t:"second",H:"second",h:"second",m:"second",s:"second"},Le={};_e.month=U,_e.basicWeek=G,_e.basicDay=Q,a({weekMode:"fixed"}),_e.agendaWeek=te,_e.agendaDay=ee,a({allDaySlot:!0,allDayText:"all-day",scrollTime:"06:00:00",slotDuration:"00:30:00",axisFormat:ne,timeFormat:{agenda:re},dragOpacity:{agenda:.5},minTime:"00:00:00",maxTime:"24:00:00",slotEventOverlap:!0})});
(function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):e(jQuery,moment)})(function(e,t){(t.defineLocale||t.lang).call(t,"en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}}),e.fullCalendar.datepickerLang("en-gb","en-GB",{closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),e.fullCalendar.lang("en-gb",{columnFormat:{week:"ddd D/M"}})});
(function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):e(jQuery,moment)})(function(e,t){(t.defineLocale||t.lang).call(t,"id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiem:function(e){return 11>e?"pagi":15>e?"siang":19>e?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),e.fullCalendar.datepickerLang("id","id",{closeText:"Tutup",prevText:"&#x3C;mundur",nextText:"maju&#x3E;",currentText:"hari ini",monthNames:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],monthNamesShort:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agus","Sep","Okt","Nop","Des"],dayNames:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],dayNamesShort:["Min","Sen","Sel","Rab","kam","Jum","Sab"],dayNamesMin:["Mg","Sn","Sl","Rb","Km","jm","Sb"],weekHeader:"Mg",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),e.fullCalendar.lang("id",{defaultButtonText:{month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},allDayHtml:"Sehari<br/>penuh",eventLimitText:"lebih"})});
$(document).ready(function() {
	
	$(document).on('click', '[data-login]', function(event)
	{
		event.preventDefault();
		$('#modal-login .signup').hide();
	    $('#modal-login').foundation('reveal', 'open');
	});	

	$(document).on('click', '[data-recommend]', function(event)
	{
		event.preventDefault();
	    $('#modal-recommend').foundation('reveal', 'open');
	});

	$(document).on('click', '[signup-email]', function(event)
	{
		event.preventDefault();
		$(this).parent().find('.manual-signup').show();
	});

	$(document).on('click', '[already-registered]', function(event)
	{
		event.preventDefault();
		$('#modal-login .signup').hide();
		$('#modal-login .login').show();
		$('#modal-login').foundation('reveal', 'open');

		console.log("login");
	});		

	$(document).on('click', '[not-registered]', function(event)
	{
		event.preventDefault();
		$('#modal-login .signup').show();
		$('#modal-login:not(.loginweb) .login').hide();
		$('#modal-login').foundation('reveal', 'open');

	});	

	$(document).on('click', '[data-listid]', function(event)
	{
		event.preventDefault();
		$('#modal-login .signup').hide();
		$('#modal-login .login').show();
	});

	$(document).on('click', '[data-enquiry]', function(event)
	{
		// event.preventDefault();
		$('#modal-login .signup').hide();
		$('#modal-login .login').show();
	});

	$(document).on('click', '[signup]', function(event)
	{
		// event.preventDefault();
		$('#modal-login:not(.loginweb) .login').hide();
		$('#modal-login .signup').show();
	});

	$(document).on('click', '[forgot-password]', function(event)
	{
		event.preventDefault();
		$(this).parents('#modal-login').find('.signup').hide();
		$(this).parents('#modal-login').find('.login').find('.password_sent').show();

		//Ajax to mail password

	});

	if  ( $('.signup-submit').length > 0 ){
		$('.manual-signup .validation').hide();
	}

	$("input[name='phone']").intlTelInput({
		defaultCountry: "id",
		preferredCountries: ["us","id","ph"],
		responsiveDropdown: true,
    	utilsScript: "/assets/js/utils.js"
	});

	$(document).on('click', '.signup-submit', function(event)
	{
		var form = $('.signup');
		event.preventDefault();
		$(this).parent('.password_message').hide();
		var password = $(this).parent().find('#password').val();
		var repeat_pass = $(this).parent().find('#repeat_password').val();
		if(password != repeat_pass) {
			$(this).parent().parent().find('.password_message').show();
		}
		else {
			var name = $(this).parent().find('#name').val();
			var email = $(this).parent().find('#email').val();
			var surname = $(this).parent().find('#surname').val();
			var phone = $(this).parent().find('#phone').val();
			var password = $(this).parent().find('#password').val();
			var city = $(this).parent().find('#city').val();
			$.ajax({
	            url: '/patient/confirm-mail',
	            type: 'POST',
	            data:{
	            	name: name,
	            	email: email,
	            	password: password,
	            	surname: surname, 
	            	phone: phone,
	            	city: city,
	            	ajax: true
	            },
	            success: function(result) {
	                if(result.success)
                		location.reload();

	                else{
	                	if (result.errors) {
		                    $('.validation').text('').slideUp('100');
		                    $.each(result.errors, function(attribute, messages)
		                    {
		                        var el = form.find('[name="' + attribute + '"]');
		                        el.addClass('error');
		                        el.next('.validation').text(messages).slideDown(300);
		                    });
		                }		                        
	                }
	            }
	        });
		}
	});

	$(document).on('click', '.login-submit', function(event)
	{
		event.preventDefault();
		var form = $('.login');
		var email = $(this).parent().find('#email').val();
		var password = $(this).parent().find('#password').val();
		$.ajax({
            url: '/user/signin',
            type: 'POST',
            data:{
            	email: email,
            	password: password,
            	ajax: true
            },
            success: function(result) {
            	if(result.success)
                	window.location = result.redirect;
                else{
                	if (result.errors) {
                		// console.log(result.errors);
		                    $('.validation').text('').slideUp('100');
	                    // console.log("asas");
	                    form.find('[name="email"]').addClass('error');
	                    form.find('[name="password"]').addClass('errror');
	                    $.each(result.errors, function(attribute, messages)
	                    {
	                        form.find('.validation.login').text(messages).slideDown(300);
	                    });
	                }
                }
            }
        });
	});


});

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0.1
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Wether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;

  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
    // Determines map type and prevent illegal zoom levels
    var zoom = that.map_.getZoom();
    var minZoom = that.map_.minZoom || 0;
    var maxZoom = Math.min(that.map_.maxZoom || 100,
                         that.map_.mapTypes[that.map_.getMapTypeId()].maxZoom);
    zoom = Math.min(Math.max(zoom,minZoom),maxZoom);

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && (opt_markers.length || Object.keys(opt_markers).length)) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
    'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
    'images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function() {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function() {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function(styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function() {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function() {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function() {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function() {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function() {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function() {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
  if (markers.length) {
    for (var i = 0, marker; marker = markers[i]; i++) {
      this.pushMarkerTo_(marker);
    }
  } else if (Object.keys(markers).length) {
    for (var marker in markers) {
      this.pushMarkerTo_(markers[marker]);
    }
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function(marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
   return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
  var removed = false;

  for (var i = 0, marker; marker = markers[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function(ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function() {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function() {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function(map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function() {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function(size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function() {
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function(opt_hide) {
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function() {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function() {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function() {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function() {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function(marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function() {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function() {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function() {
  return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function() {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function() {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function() {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 */
ClusterIcon.prototype.triggerClusterClick = function() {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function() {
  this.div_ = document.createElement('DIV');
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  google.maps.event.addDomListener(this.div_, 'click', function() {
    that.triggerClusterClick();
  });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);
  pos.x -= parseInt(this.width_ / 2, 10);
  pos.y -= parseInt(this.height_ / 2, 10);
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function() {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function() {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function() {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function() {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function() {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function(sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function() {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.anchorText_ = style['anchorText'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function(center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function(pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else {

      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    var textHeight = this.anchorText_ ? this.height_ + this.anchorText_[0] : this.height_;
    var textWidth = this.anchorText_ ? this.width_ + this.anchorText_[1] : this.width_;
    style.push('height:' + this.height_ + 'px; line-height:' +
        textHeight + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;
  
  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px; font-family:museo-sans,sans-serif; font-weight:bold');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;

Object.keys = Object.keys || function(o) {  
    var result = [];  
    for(var name in o) {  
        if (o.hasOwnProperty(name))  
          result.push(name);  
    }  
    return result;  
};

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

    var bodyEl = document.body,
        // content = document.querySelector( '.content-wrap' ),
        openbtn = document.getElementById( 'show-legend' ),
        closebtn = document.getElementById( 'close-button' ),
        isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        if (openbtn) {
            openbtn.addEventListener( 'click', toggleMenu );
        }
        if( closebtn ) {
            closebtn.addEventListener( 'click', toggleMenu );
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        // content.addEventListener( 'click', function(ev) {
        //  var target = ev.target;
        //  if( isOpen && target !== openbtn ) {
        //      toggleMenu();
        //  }
        // } );
    }

    function toggleMenu() {
        if( isOpen ) {
            classie.remove( bodyEl, 'show-menu' );
        }
        else {
            classie.add( bodyEl, 'show-menu' );
        }
        isOpen = !isOpen;
    }

    init();

})();
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.4.2
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2015 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/

(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;
      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      return this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.choice_label = function(item) {
      if (this.include_group_label_in_selected && (item.group_label != null)) {
        return "<b class='group-name'>" + item.group_label + "</b>" + item.html;
      } else {
        return item.html;
      }
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, _i, _len, _ref;
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else {
          content += this.result_add_option(data);
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      option_el.style.cssText = option.style;
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.search_text;
      if (option.title) {
        option_el.title = option.title;
      }
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var classes, group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      classes = [];
      classes.push("group-result");
      if (group.classes) {
        classes.push(group.classes);
      }
      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.search_text;
      if (group.title) {
        group_el.title = group.title;
      }
      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function() {
      var result, _i, _len, _ref, _results;
      _ref = this.results_data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        result = _ref[_i];
        if (result.selected) {
          _results.push(result.selected = false);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      zregex = new RegExp(escapedSearchText, 'i');
      regex = this.get_search_regex(escapedSearchText);
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          option.search_text = option.group ? option.label : option.html;
          if (!(option.group && !this.group_search)) {
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };

    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
      var regex_anchor;
      regex_anchor = this.search_contains ? "" : "^";
      return new RegExp(regex_anchor + escaped_search_string, 'i');
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      var _this = this;
      return setTimeout((function() {
        return _this.results_search();
      }), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.browser_is_supported = function() {
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/Android/i.test(window.navigator.userAgent)) {
        if (/Mobile/i.test(window.navigator.userAgent)) {
          return false;
        }
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy' && chosen instanceof Chosen) {
          chosen.destroy();
        } else if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': "width: " + (this.container_width()) + ";",
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };

    Chosen.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.bind('touchstart.chosen', function(evt) {
        _this.container_mousedown(evt);
        return evt.preventDefault();
      });
      this.container.bind('touchend.chosen', function(evt) {
        _this.container_mouseup(evt);
        return evt.preventDefault();
      });
      this.container.bind('mousedown.chosen', function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.bind('mouseup.chosen', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.bind('mouseenter.chosen', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.bind('mouseleave.chosen', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.bind('mouseup.chosen', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.bind('mouseover.chosen', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.bind('mouseout.chosen', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
        _this.search_results_mousewheel(evt);
      });
      this.search_results.bind('touchstart.chosen', function(evt) {
        _this.search_results_touchstart(evt);
      });
      this.search_results.bind('touchmove.chosen', function(evt) {
        _this.search_results_touchmove(evt);
      });
      this.search_results.bind('touchend.chosen', function(evt) {
        _this.search_results_touchend(evt);
      });
      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
      });
      this.form_field_jq.bind("chosen:close.chosen", function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('blur.chosen', function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('keyup.chosen', function(evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.bind('keydown.chosen', function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.bind('focus.chosen', function(evt) {
        _this.input_focus(evt);
      });
      this.search_field.bind('cut.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      this.search_field.bind('paste.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.bind('click.chosen', function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.bind('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus.chosen", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.bind('click.chosen', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link,
        _this = this;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + (this.choice_label(item)) + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.bind('click.chosen', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val("");
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").html(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      return $('<div/>').text($.trim(this.search_field.val())).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;
      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({
          'width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);

/**
 * @name MarkerWithLabel for V3
 * @version 1.1.8 [February 26, 2013]
 * @author Gary Little (inspired by code from Marc Ridey of Google).
 * @copyright Copyright 2012 Gary Little [gary at luxcentral.com]
 * @fileoverview MarkerWithLabel extends the Google Maps JavaScript API V3
 *  <code>google.maps.Marker</code> class.
 *  <p>
 *  MarkerWithLabel allows you to define markers with associated labels. As you would expect,
 *  if the marker is draggable, so too will be the label. In addition, a marker with a label
 *  responds to all mouse events in the same manner as a regular marker. It also fires mouse
 *  events and "property changed" events just as a regular marker would. Version 1.1 adds
 *  support for the raiseOnDrag feature introduced in API V3.3.
 *  <p>
 *  If you drag a marker by its label, you can cancel the drag and return the marker to its
 *  original position by pressing the <code>Esc</code> key. This doesn't work if you drag the marker
 *  itself because this feature is not (yet) supported in the <code>google.maps.Marker</code> class.
 */

/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true */
/*global document,google */

/**
 * This constructor creates a label and associates it with a marker.
 * It is for the private use of the MarkerWithLabel class.
 * @constructor
 * @param {Marker} marker The marker with which the label is to be associated.
 * @param {string} crossURL The URL of the cross image =.
 * @param {string} handCursor The URL of the hand cursor.
 * @private
 */
function MarkerLabel_(marker, crossURL, handCursorURL) {
  this.marker_ = marker;
  this.handCursorURL_ = marker.handCursorURL;

  this.labelDiv_ = document.createElement("div");
  this.labelDiv_.style.cssText = "position: absolute; overflow: hidden;";

  // Set up the DIV for handling mouse events in the label. This DIV forms a transparent veil
  // in the "overlayMouseTarget" pane, a veil that covers just the label. This is done so that
  // events can be captured even if the label is in the shadow of a google.maps.InfoWindow.
  // Code is included here to ensure the veil is always exactly the same size as the label.
  this.eventDiv_ = document.createElement("div");
  this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;

  // This is needed for proper behavior on MSIE:
  this.eventDiv_.setAttribute("onselectstart", "return false;");
  this.eventDiv_.setAttribute("ondragstart", "return false;");

  // Get the DIV for the "X" to be displayed when the marker is raised.
  this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);
}

// MarkerLabel_ inherits from OverlayView:
MarkerLabel_.prototype = new google.maps.OverlayView();

/**
 * Returns the DIV for the cross used when dragging a marker when the
 * raiseOnDrag parameter set to true. One cross is shared with all markers.
 * @param {string} crossURL The URL of the cross image =.
 * @private
 */
MarkerLabel_.getSharedCross = function (crossURL) {
  var div;
  if (typeof MarkerLabel_.getSharedCross.crossDiv === "undefined") {
    div = document.createElement("img");
    div.style.cssText = "position: absolute; z-index: 1000002; display: none;";
    // Hopefully Google never changes the standard "X" attributes:
    div.style.marginLeft = "-8px";
    div.style.marginTop = "-9px";
    div.src = crossURL;
    MarkerLabel_.getSharedCross.crossDiv = div;
  }
  return MarkerLabel_.getSharedCross.crossDiv;
};

/**
 * Adds the DIV representing the label to the DOM. This method is called
 * automatically when the marker's <code>setMap</code> method is called.
 * @private
 */
MarkerLabel_.prototype.onAdd = function () {
  var me = this;
  var cMouseIsDown = false;
  var cDraggingLabel = false;
  var cSavedZIndex;
  var cLatOffset, cLngOffset;
  var cIgnoreClick;
  var cRaiseEnabled;
  var cStartPosition;
  var cStartCenter;
  // Constants:
  var cRaiseOffset = 20;
  var cDraggingCursor = "url(" + this.handCursorURL_ + ")";

  // Stops all processing of an event.
  //
  var cAbortEvent = function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };

  var cStopBounce = function () {
    me.marker_.setAnimation(null);
  };

  this.getPanes().overlayImage.appendChild(this.labelDiv_);
  this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);
  // One cross is shared with all markers, so only add it once:
  if (typeof MarkerLabel_.getSharedCross.processed === "undefined") {
    this.getPanes().overlayImage.appendChild(this.crossDiv_);
    MarkerLabel_.getSharedCross.processed = true;
  }

  this.listeners_ = [
    google.maps.event.addDomListener(this.eventDiv_, "mouseover", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        this.style.cursor = "pointer";
        google.maps.event.trigger(me.marker_, "mouseover", e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "mouseout", function (e) {
      if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {
        this.style.cursor = me.marker_.getCursor();
        google.maps.event.trigger(me.marker_, "mouseout", e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "mousedown", function (e) {
      cDraggingLabel = false;
      if (me.marker_.getDraggable()) {
        cMouseIsDown = true;
        this.style.cursor = cDraggingCursor;
      }
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, "mousedown", e);
        cAbortEvent(e); // Prevent map pan when starting a drag on a label
      }
    }),
    google.maps.event.addDomListener(document, "mouseup", function (mEvent) {
      var position;
      if (cMouseIsDown) {
        cMouseIsDown = false;
        me.eventDiv_.style.cursor = "pointer";
        google.maps.event.trigger(me.marker_, "mouseup", mEvent);
      }
      if (cDraggingLabel) {
        if (cRaiseEnabled) { // Lower the marker & label
          position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
          position.y += cRaiseOffset;
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          // This is not the same bouncing style as when the marker portion is dragged,
          // but it will have to do:
          try { // Will fail if running Google Maps API earlier than V3.3
            me.marker_.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(cStopBounce, 1406);
          } catch (e) {}
        }
        me.crossDiv_.style.display = "none";
        me.marker_.setZIndex(cSavedZIndex);
        cIgnoreClick = true; // Set flag to ignore the click event reported after a label drag
        cDraggingLabel = false;
        mEvent.latLng = me.marker_.getPosition();
        google.maps.event.trigger(me.marker_, "dragend", mEvent);
      }
    }),
    google.maps.event.addListener(me.marker_.getMap(), "mousemove", function (mEvent) {
      var position;
      if (cMouseIsDown) {
        if (cDraggingLabel) {
          // Change the reported location from the mouse position to the marker position:
          mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
          position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);
          if (cRaiseEnabled) {
            me.crossDiv_.style.left = position.x + "px";
            me.crossDiv_.style.top = position.y + "px";
            me.crossDiv_.style.display = "";
            position.y -= cRaiseOffset;
          }
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          if (cRaiseEnabled) { // Don't raise the veil; this hack needed to make MSIE act properly
            me.eventDiv_.style.top = (position.y + cRaiseOffset) + "px";
          }
          google.maps.event.trigger(me.marker_, "drag", mEvent);
        } else {
          // Calculate offsets from the click point to the marker position:
          cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
          cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
          cSavedZIndex = me.marker_.getZIndex();
          cStartPosition = me.marker_.getPosition();
          cStartCenter = me.marker_.getMap().getCenter();
          cRaiseEnabled = me.marker_.get("raiseOnDrag");
          cDraggingLabel = true;
          me.marker_.setZIndex(1000000); // Moves the marker & label to the foreground during a drag
          mEvent.latLng = me.marker_.getPosition();
          google.maps.event.trigger(me.marker_, "dragstart", mEvent);
        }
      }
    }),
    google.maps.event.addDomListener(document, "keydown", function (e) {
      if (cDraggingLabel) {
        if (e.keyCode === 27) { // Esc key
          cRaiseEnabled = false;
          me.marker_.setPosition(cStartPosition);
          me.marker_.getMap().setCenter(cStartCenter);
          google.maps.event.trigger(document, "mouseup", e);
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "click", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        if (cIgnoreClick) { // Ignore the click reported when a label drag ends
          cIgnoreClick = false;
        } else {
          google.maps.event.trigger(me.marker_, "click", e);
          cAbortEvent(e); // Prevent click from being passed on to map
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, "dblclick", function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, "dblclick", e);
        cAbortEvent(e); // Prevent map zoom when double-clicking on a label
      }
    }),
    google.maps.event.addListener(this.marker_, "dragstart", function (mEvent) {
      if (!cDraggingLabel) {
        cRaiseEnabled = this.get("raiseOnDrag");
      }
    }),
    google.maps.event.addListener(this.marker_, "drag", function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(cRaiseOffset);
          // During a drag, the marker's z-index is temporarily set to 1000000 to
          // ensure it appears above all other markers. Also set the label's z-index
          // to 1000000 (plus or minus 1 depending on whether the label is supposed
          // to be above or below the marker).
          me.labelDiv_.style.zIndex = 1000000 + (this.get("labelInBackground") ? -1 : +1);
        }
      }
    }),
    google.maps.event.addListener(this.marker_, "dragend", function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(0); // Also restores z-index of label
        }
      }
    }),
    google.maps.event.addListener(this.marker_, "position_changed", function () {
      me.setPosition();
    }),
    google.maps.event.addListener(this.marker_, "zindex_changed", function () {
      me.setZIndex();
    }),
    google.maps.event.addListener(this.marker_, "visible_changed", function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, "labelvisible_changed", function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, "title_changed", function () {
      me.setTitle();
    }),
    google.maps.event.addListener(this.marker_, "labelcontent_changed", function () {
      me.setContent();
    }),
    google.maps.event.addListener(this.marker_, "labelanchor_changed", function () {
      me.setAnchor();
    }),
    google.maps.event.addListener(this.marker_, "labelclass_changed", function () {
      me.setStyles();
    }),
    google.maps.event.addListener(this.marker_, "labelstyle_changed", function () {
      me.setStyles();
    })
  ];
};

/**
 * Removes the DIV for the label from the DOM. It also removes all event handlers.
 * This method is called automatically when the marker's <code>setMap(null)</code>
 * method is called.
 * @private
 */
MarkerLabel_.prototype.onRemove = function () {
  var i;
  this.labelDiv_.parentNode.removeChild(this.labelDiv_);
  this.eventDiv_.parentNode.removeChild(this.eventDiv_);

  // Remove event listeners:
  for (i = 0; i < this.listeners_.length; i++) {
    google.maps.event.removeListener(this.listeners_[i]);
  }
};

/**
 * Draws the label on the map.
 * @private
 */
MarkerLabel_.prototype.draw = function () {
  this.setContent();
  this.setTitle();
  this.setStyles();
};

/**
 * Sets the content of the label.
 * The content can be plain text or an HTML DOM node.
 * @private
 */
MarkerLabel_.prototype.setContent = function () {
  var content = this.marker_.get("labelContent");
  if (typeof content.nodeType === "undefined") {
    this.labelDiv_.innerHTML = content;
    this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
  } else {
    this.labelDiv_.innerHTML = ""; // Remove current content
    this.labelDiv_.appendChild(content);
    content = content.cloneNode(true);
    this.eventDiv_.appendChild(content);
  }
};

/**
 * Sets the content of the tool tip for the label. It is
 * always set to be the same as for the marker itself.
 * @private
 */
MarkerLabel_.prototype.setTitle = function () {
  this.eventDiv_.title = this.marker_.getTitle() || "";
};

/**
 * Sets the style of the label by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
MarkerLabel_.prototype.setStyles = function () {
  var i, labelStyle;

  // Apply style values from the style sheet defined in the labelClass parameter:
  this.labelDiv_.className = this.marker_.get("labelClass");
  this.eventDiv_.className = this.labelDiv_.className;

  // Clear existing inline style values:
  this.labelDiv_.style.cssText = "";
  this.eventDiv_.style.cssText = "";
  // Apply style values defined in the labelStyle parameter:
  labelStyle = this.marker_.get("labelStyle");
  for (i in labelStyle) {
    if (labelStyle.hasOwnProperty(i)) {
      this.labelDiv_.style[i] = labelStyle[i];
      this.eventDiv_.style[i] = labelStyle[i];
    }
  }
  this.setMandatoryStyles();
};

/**
 * Sets the mandatory styles to the DIV representing the label as well as to the
 * associated event DIV. This includes setting the DIV position, z-index, and visibility.
 * @private
 */
MarkerLabel_.prototype.setMandatoryStyles = function () {
  this.labelDiv_.style.position = "absolute";
  this.labelDiv_.style.overflow = "hidden";
  // Make sure the opacity setting causes the desired effect on MSIE:
  if (typeof this.labelDiv_.style.opacity !== "undefined" && this.labelDiv_.style.opacity !== "") {
    this.labelDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")\"";
    this.labelDiv_.style.filter = "alpha(opacity=" + (this.labelDiv_.style.opacity * 100) + ")";
  }

  this.eventDiv_.style.position = this.labelDiv_.style.position;
  this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;
  this.eventDiv_.style.opacity = 0.01; // Don't use 0; DIV won't be clickable on MSIE
  this.eventDiv_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(opacity=1)\"";
  this.eventDiv_.style.filter = "alpha(opacity=1)"; // For MSIE

  this.setAnchor();
  this.setPosition(); // This also updates z-index, if necessary.
  this.setVisible();
};

/**
 * Sets the anchor point of the label.
 * @private
 */
MarkerLabel_.prototype.setAnchor = function () {
  var anchor = this.marker_.get("labelAnchor");
  this.labelDiv_.style.marginLeft = -anchor.x + "px";
  this.labelDiv_.style.marginTop = -anchor.y + "px";
  this.eventDiv_.style.marginLeft = -anchor.x + "px";
  this.eventDiv_.style.marginTop = -anchor.y + "px";
};

/**
 * Sets the position of the label. The z-index is also updated, if necessary.
 * @private
 */
MarkerLabel_.prototype.setPosition = function (yOffset) {
  var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
  if (typeof yOffset === "undefined") {
    yOffset = 0;
  }
  this.labelDiv_.style.left = Math.round(position.x) + "px";
  this.labelDiv_.style.top = Math.round(position.y - yOffset) + "px";
  this.eventDiv_.style.left = this.labelDiv_.style.left;
  this.eventDiv_.style.top = this.labelDiv_.style.top;

  this.setZIndex();
};

/**
 * Sets the z-index of the label. If the marker's z-index property has not been defined, the z-index
 * of the label is set to the vertical coordinate of the label. This is in keeping with the default
 * stacking order for Google Maps: markers to the south are in front of markers to the north.
 * @private
 */
MarkerLabel_.prototype.setZIndex = function () {
  var zAdjust = (this.marker_.get("labelInBackground") ? -1 : +1);
  if (typeof this.marker_.getZIndex() === "undefined") {
    this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  } else {
    this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  }
};

/**
 * Sets the visibility of the label. The label is visible only if the marker itself is
 * visible (i.e., its visible property is true) and the labelVisible property is true.
 * @private
 */
MarkerLabel_.prototype.setVisible = function () {
  if (this.marker_.get("labelVisible")) {
    this.labelDiv_.style.display = this.marker_.getVisible() ? "block" : "none";
  } else {
    this.labelDiv_.style.display = "none";
  }
  this.eventDiv_.style.display = this.labelDiv_.style.display;
};

/**
 * @name MarkerWithLabelOptions
 * @class This class represents the optional parameter passed to the {@link MarkerWithLabel} constructor.
 *  The properties available are the same as for <code>google.maps.Marker</code> with the addition
 *  of the properties listed below. To change any of these additional properties after the labeled
 *  marker has been created, call <code>google.maps.Marker.set(propertyName, propertyValue)</code>.
 *  <p>
 *  When any of these properties changes, a property changed event is fired. The names of these
 *  events are derived from the name of the property and are of the form <code>propertyname_changed</code>.
 *  For example, if the content of the label changes, a <code>labelcontent_changed</code> event
 *  is fired.
 *  <p>
 * @property {string|Node} [labelContent] The content of the label (plain text or an HTML DOM node).
 * @property {Point} [labelAnchor] By default, a label is drawn with its anchor point at (0,0) so
 *  that its top left corner is positioned at the anchor point of the associated marker. Use this
 *  property to change the anchor point of the label. For example, to center a 50px-wide label
 *  beneath a marker, specify a <code>labelAnchor</code> of <code>google.maps.Point(25, 0)</code>.
 *  (Note: x-values increase to the right and y-values increase to the top.)
 * @property {string} [labelClass] The name of the CSS class defining the styles for the label.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {Object} [labelStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the label. Style values defined here override those that may
 *  be defined in the <code>labelClass</code> style sheet. If this property is changed after the
 *  label has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the label before the new style values are applied.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {boolean} [labelInBackground] A flag indicating whether a label that overlaps its
 *  associated marker should appear in the background (i.e., in a plane below the marker).
 *  The default is <code>false</code>, which causes the label to appear in the foreground.
 * @property {boolean} [labelVisible] A flag indicating whether the label is to be visible.
 *  The default is <code>true</code>. Note that even if <code>labelVisible</code> is
 *  <code>true</code>, the label will <i>not</i> be visible unless the associated marker is also
 *  visible (i.e., unless the marker's <code>visible</code> property is <code>true</code>).
 * @property {boolean} [raiseOnDrag] A flag indicating whether the label and marker are to be
 *  raised when the marker is dragged. The default is <code>true</code>. If a draggable marker is
 *  being created and a version of Google Maps API earlier than V3.3 is being used, this property
 *  must be set to <code>false</code>.
 * @property {boolean} [optimized] A flag indicating whether rendering is to be optimized for the
 *  marker. <b>Important: The optimized rendering technique is not supported by MarkerWithLabel,
 *  so the value of this parameter is always forced to <code>false</code>.
 * @property {string} [crossImage="http://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png"]
 *  The URL of the cross image to be displayed while dragging a marker.
 * @property {string} [handCursor="http://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur"]
 *  The URL of the cursor to be displayed while dragging a marker.
 */
/**
 * Creates a MarkerWithLabel with the options specified in {@link MarkerWithLabelOptions}.
 * @constructor
 * @param {MarkerWithLabelOptions} [opt_options] The optional parameters.
 */
function MarkerWithLabel(opt_options) {
  opt_options = opt_options || {};
  opt_options.labelContent = opt_options.labelContent || "";
  opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);
  opt_options.labelClass = opt_options.labelClass || "markerLabels";
  opt_options.labelStyle = opt_options.labelStyle || {};
  opt_options.labelInBackground = opt_options.labelInBackground || false;
  if (typeof opt_options.labelVisible === "undefined") {
    opt_options.labelVisible = true;
  }
  if (typeof opt_options.raiseOnDrag === "undefined") {
    opt_options.raiseOnDrag = true;
  }
  if (typeof opt_options.clickable === "undefined") {
    opt_options.clickable = true;
  }
  if (typeof opt_options.draggable === "undefined") {
    opt_options.draggable = false;
  }
  if (typeof opt_options.optimized === "undefined") {
    opt_options.optimized = false;
  }
  opt_options.crossImage = opt_options.crossImage || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";
  opt_options.handCursor = opt_options.handCursor || "http" + (document.location.protocol === "https:" ? "s" : "") + "://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";
  opt_options.optimized = false; // Optimized rendering is not supported

  this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor); // Bind the label to the marker

  // Call the parent constructor. It calls Marker.setValues to initialize, so all
  // the new parameters are conveniently saved and can be accessed with get/set.
  // Marker.set triggers a property changed event (called "propertyname_changed")
  // that the marker label listens for in order to react to state changes.
  google.maps.Marker.apply(this, arguments);
}

// MarkerWithLabel inherits from <code>Marker</code>:
MarkerWithLabel.prototype = new google.maps.Marker();

/**
 * Overrides the standard Marker setMap function.
 * @param {Map} theMap The map to which the marker is to be added.
 * @private
 */
MarkerWithLabel.prototype.setMap = function (theMap) {

  // Call the inherited function...
  google.maps.Marker.prototype.setMap.apply(this, arguments);

  // ... then deal with the label:
  this.label.setMap(theMap);
};
function scrollTo(scroll) {
    $('html, body').animate({
        scrollTop: $(scroll).offset().top
    }, 750);
}

function getDoctors(){
    var name = $('input[name="name"]').val();
    var surname = $('input[name="surname"]').val();
    var list = $('.doctor-list');
    if (name.length < 3 || surname.length < 3){
        $('.doctor-list-container').slideUp();
        return;
    }
    $.ajax({
        type: "GET",
        url: '/doctors/suggestions?name='+name+'&surname='+surname,
        success: function(data){
            list.empty();
            if(data.doctorsList.length == 0) {
                $('.doctor-list-container').slideUp();
            }
            else {
                $.each(data.doctorsList, function( key, value ) {
                    var doctorUrl = '/doctors/'+value.slug;
                    var doctorStep2 = '/doctors/signup-step-2/'+value.slug;

                    var doctor = '<div class="small-9 end columns"><a class="sug-name" target="_blank" href="'+doctorUrl+'">'+value.name+'</a>';
                    if(value.speciality.length > 0) doctor += '<span class="sug-spe">('+value.speciality[0]+')</span></div>';
                    if(value.active == 0)
                        doctor += '<div class="small-3 columns"><a href="'+doctorStep2+'" class="button green sug-me">'+Lang.get('copy.its_me')+'</a></div>';
                    list.append(doctor);
                });
                $('.doctor-list-container').slideDown();
            }
        }
    });
}

function toggleDisplay(element) {
    var tig = $('.trigger-toggle');
    var el = $('.'+element);
    if (el.is(':visible')) {
        tig.html('<i class="fi-plus"></i><span>'+Lang.get('copy.more_filters')+'</span>');
    } else {
        tig.html('<i class="fi-minus"></i><span>'+Lang.get('copy.less_filters')+'</span>');
    }
    $(el).toggle();
}

var show = 1;
function toggleSimilarDoctors() {
    if ($('#map').length > 0) {

        var map_selector = $('#map');
        var markers = $('#map').data('markers');
        map_selector.parent().find('.showhidenearby').html(Lang.get('doctor.show_nearby'));

        if (show) {
            // consle.log(markers);
            var similar = $('#map').data('similar');
            markers = markers.concat(similar);
            map_selector.parent().find('.showhidenearby').html(Lang.get('doctor.hide_nearby'));
        }

        show = !show;

        var mapOptions = {
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var bounds = new google.maps.LatLngBounds();
        var infowindow = new google.maps.InfoWindow({ maxWidth: 225, pixelOffset:new google.maps.Size(-1, 20) });
        
        for (var i = 0; i < markers.length; i++) {
            iconImage = '/assets/img/marker.png';
            var labelClass = "labels";
            if(markers[i]['type'] == 'hospital') {
                iconImage = '/assets/img/ddkter-icon-hospital.png';
                labelClass = "labels hospital";
            }
            else if (markers[i]['type'] == 'clinic') { 
                iconImage = '/assets/img/ddkter-icon-clinic.png';
                labelClass = "labels clinic";
            } 
            if (markers[i]['type'] == 'hospital' || markers[i]['type'] == 'clinic') {
                var marker = new MarkerWithLabel({
                    position: new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']),
                    title:"",
                    map: map,
                    icon: iconImage,
                    labelContent: markers[i]['number_of_doctors'],
                    labelAnchor: new google.maps.Point(10, 38),
                    labelClass: labelClass, // the CSS class for the label
                    labelInBackground: true,
                    number_of_doctors: markers[i]['number_of_doctors']
                });
            }
            else {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']),
                    title:"",
                    map: map,
                    icon: iconImage,
                });
            }

            // This is needed to set the zoom after fitbounds, 
            google.maps.event.addListener(map, 'zoom_changed', function() {
                zoomChangeBoundsListener = 
                    google.maps.event.addListener(map, 'bounds_changed', function(event) {
                        if (this.getZoom() > 15 && this.initialZoom == true) {
                            // Change max/min zoom here
                            this.setZoom(15);
                            this.initialZoom = false;
                        }
                    google.maps.event.removeListener(zoomChangeBoundsListener);
                });
            });
            map.initialZoom = true;

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    var info_content = 
                        '<div class="infowindow">'+
                            '<div class="dr-photo map" style="background-image:url('+markers[i]['avatar']+')">'+
                        '</div>'+
                        '<div class="dr-information">'+
                            '<div class="doctor-label hospital-label">'+
                            '<h1><a href="'+markers[i]['url']+'">'+markers[i]['name']+'</a></h1>'+
                            '<h2>'+markers[i]['formatted']+'</h2>'+
                            '</div>'+
                        '</div>'+
                        '</div>';
                  infowindow.setContent(info_content);
                  infowindow.open(map, marker);
                }
              })(marker, i));
            bounds.extend(marker.position);
        };
        if (markers.length == 0) {
            if($('#map').data('lat') && $('#map').data('lng')) {
                map.setCenter(new google.maps.LatLng($('#map').data('lat'), $('#map').data('lng')));
            }
            else {
                // Jakarta coordinates
                //map.setCenter(new google.maps.LatLng(-6.2297465, 106.829518));
            }
            map.setZoom(6);
        } 
        else {
            map.fitBounds(bounds); 
        }
    }
        
}

function loadMap() {
    var mapOptions = {
            maxZoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
        var map = new google.maps.Map(document.getElementById("search-map"), mapOptions);
        var boundPoints = $('#search-map').data('bounds');

        var bounds = new google.maps.LatLngBounds();
        var boundingFound = false;
        if (!$.isEmptyObject(boundPoints)) {
            bounds.extend(new google.maps.LatLng(boundPoints.southwest.lat, boundPoints.southwest.lng));
            bounds.extend(new google.maps.LatLng(boundPoints.northeast.lat, boundPoints.northeast.lng));
            boundingFound = true;
        }
        

        var clusterStyles = [
          {
            textColor: 'white',
            url: '/assets/img/ddkter-icon-group.png',
            height: 56,
            width: 56,
            anchorText: [0, 0]
          },
         {
            textColor: 'white',
            url: '/assets/img/ddkter-icon-group.png',
            height: 56,
            width: 56,
            anchorText: [0, 0]
          },
         {
            textColor: 'white',
            url: '/assets/img/ddkter-icon-group.png',
            height: 56,
            width: 56,
            anchorText: [0, 0]
          }
        ];

        var mcOptions = {
            gridSize: 50,
            maxZoom: 15,
            styles: clusterStyles,
            zoomOnClick: 1
        };

        var markers = $('#search-map').data('markers');

        var mc = new MarkerClusterer(map, [], mcOptions);

        mc.setCalculator(function(markers, numStyles) {
          var index = 0;
          var count = markers.length;
          var dv = count;
          while (dv !== 0) {
            dv = parseInt(dv / 10, 10);
            index++;
          }

          text = 0;
          for (var i = 0; i < count; i++) {
            if (markers[i].type != 'hospital' && markers[i].type != 'clinic') {
                text += markers[i].number_of_doctors;
            }
             
          };

          index = Math.min(index, numStyles);
          return {
            text: text,
            index: index
          };
        });


        var infowindow = new google.maps.InfoWindow({ maxWidth: 225, pixelOffset:new google.maps.Size(-1, 20) });
        for (var i = 0; i < markers.length; i++) {
            iconImage = '/assets/img/marker.png';
            var labelClass = "labels";
            if(markers[i]['type'] == 'hospital') {
                iconImage = '/assets/img/ddkter-icon-hospital.png';
                labelClass = "labels hospital";
            }
            else if (markers[i]['type'] == 'clinic') { 
                iconImage = '/assets/img/ddkter-icon-clinic.png';
                labelClass = "labels clinic";
            } 

            if (markers[i]['type'] == 'clinic' || markers[i]['type'] == 'hospital') {
                var marker = new MarkerWithLabel({
                    position: new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']),
                    title:"",
                    map: map,
                    icon: iconImage,
                    labelContent: markers[i]['number_of_doctors'],
                    labelAnchor: new google.maps.Point(10, 35),
                    labelClass: labelClass, // the CSS class for the label
                    labelInBackground: true,
                    number_of_doctors: markers[i]['number_of_doctors']
                });
            } else {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']),
                    title:"",
                    map: map,
                    icon: iconImage,
                    number_of_doctors: markers[i]['number_of_doctors']
                });
            }
            


            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {

                    if (!("data" in markers[i])) {
                        if (markers[i]['type'] == 'hospital' || markers[i]['type'] == 'clinic') {
                            $.ajax({
                               type: "GET",
                               url: '/maps/hospital/'+markers[i]['id'],
                               success: function(data){
                                    markers[i]['data'] = data['hospital'];
                                    showInfoWindow(marker, markers[i], infowindow, map);
                               }
                       });
                        } else if (markers[i]['type'] == 'doctor') {
                            $.ajax({
                               type: "GET",
                               url: '/maps/doctor/'+markers[i]['id']+'?lat='+markers[i]['lat']+"&lng="+markers[i]['lng'],
                               success: function(data){
                                    markers[i]['data'] = data['doctor'];
                                    showInfoWindow(marker, markers[i], infowindow, map);
                               }
                           });
                        }
                    } else {
                        showInfoWindow(marker, markers[i], infowindow, map);
                    }
                    

                    
                }
              })(marker, i));

            if (!boundingFound) {
                bounds.extend(marker.position);
            }

            mc.addMarker(marker);

            
        };
        if (boundingFound) {
            map.fitBounds(bounds);  

            var initial = 1;
            google.maps.event.addListener(map, 'bounds_changed', function() {
               if (initial) {
                   initial = 0;
                   map.setCenter(bounds.getCenter());
                   map.zoom = map.setZoom(map.zoom + 1);
               }
               
            });
        }
        if (markers.length == 0) {
            if (boundingFound) {
                map.fitBounds(bounds);  
            }
            else if($('#search-map').data('lat') && $('#search-map').data('lng')) {
                map.setCenter(new google.maps.LatLng($('#search-map').data('lat'), $('#search-map').data('lng')));
                map.setZoom(12);
            }
            else {
                // Jakarta coordinates
                //map.setCenter(new google.maps.LatLng(-6.2297465, 106.829518));
                map.setZoom(12);
            }
            
        } else {
            map.fitBounds(bounds);            
        }
}

function getInfoContent(markerData) {
    var info_content = 
        '<div class="infowindow">'+
            '<div class="infowindow-content">'+
            '<div class="dr-photo map" style="background-image:url('+markerData['data']['avatar']+')">'+
            '</div>'+
            '<div class="dr-information">'+
                '<div class="doctor-label">';

        if(markerData['type'] != 'hospital' && markerData['type'] != 'clinic') {
            info_content = info_content +
                    '<h1><a href=/doctors/'+markerData['data']['slug']+'>'+markerData['data']['name']+'</a></h1>'+'<h2>'+markerData['data']['specialities']+'</h2>'+
                    '</div>'+
                    '<div id="rating">'+
                        '<div>'+
                            '<div id="star-row">';

            for (var j = 1; j <= 5; j++) {
                if (j <= markerData['data']['valoration']) {
                    info_content = info_content + '<i class="fi-star yellowstar "></i>';
                } else {
                    info_content = info_content + '<i class="fi-star greystar "></i>';
                }
            }

            info_content = info_content + '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="address">'+
                    '<p>'+markerData['data']['formatted']+'</p>'+
               '</div>'+
               '</div>'+
            '</div>';
        }
        else {
            info_content = info_content +
                    '<h1><a href=/medicalcenter/'+markerData['data']['slug']+'/profile>'+markerData['data']['name'] +'<h2>'+markerData['data']['formatted']+'</h2></div>';
        }

    return info_content;
}

function showInfoWindow(markerToOpen, markerData, infowindow, map) {
    var info_content = getInfoContent(markerData);
    infowindow.setContent(info_content);
    infowindow.open(map, markerToOpen);
}


function recursiveMapLoading() {
    if (!google) {
        setTimeout(function() {recursiveMapLoading() }, 500)
    } else {
        loadMap();
    }
}

if ($('#search-map').length > 0) {
    recursiveMapLoading();
}

$(document).ready(function() {

    

    $('body').addClass('nonselectable');
    $.fn.ready(function(){
        var b=$(".nonselectable"),
            c=$(".selectable");

        b.on("dragstart, selectstart",function(a){
            a.preventDefault()
        });

        c.on("dragstart, selectstart",function(a){
            a.stopPropagation()
        });

        b.find("*").andSelf().attr("unselectable","on");
        c.find("*").andSelf().removeAttr("unselectable")});

    $(document).foundation();
    // TYPEKIT
    try {
        Typekit.load();
    } catch (e) {}

    if ($('#search-results').length > 0) {
        $('#search-results li').on("click", function() {
            $('img', this).toggleClass("rotateicon");
        });
    }

    // FOR EMPTY ANCHORS
    $("a").click(function(e){
        if($(this).attr("href") == "#" || $(this).attr("href") == "") {
            $(this).css({'cursor' :"default"});
            e.preventDefault();   
        }
        else{
            $(this).css({'cursor':"pointer"});
        }
    });

    // TABS HOME 
    if ($('.tabs-container').length > 0) {
        
        if ( $('#directory-tab-2').css('display').length != 0 ) {
            $('#tab-section').find('.responsive-tabs, .responsive-tabs-content').animate({'opacity': '1'});
        }

        if ( $('.tabs li').length < 2 ){
            $('.tabs li').css({'cursor' :"default"});
            $('.tabs li').click(function(e){
                e.preventDefault();   
            });
        }
    }


    // SLIDER ABOUT PAGE
    if ($('.flexslider:not(.doctor)').length > 0) {
        $('.flexslider').flexslider({
            controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: false, //Boolean: Create navigation for previous/next navigation? (true/false)
            animation: "slide",
            slideshowSpeed: 4000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 800, //Integer: Set the speed of animations, in milliseconds
            initDelay: 1000,
        });
    }

    // SAME HEIGHT THAN WIDTH
    if ($('.sameHeight').length > 0) {
        $(".sameHeight").each(function() {
            $(this).height($(this).width());
        });
        $(window).on('resize', function() {
            $(".sameHeight").each(function() {
                $(this).height($(this).width());
            });
        });
    }

    // SLIDER DOCTOR CARD
    if ($('.slides-panel').length > 0) {
          jQuery('.slides-panel').slick({
                dots: true,
                arrows: false,
                autoplay: true,
                easing: 'easeIn',
                speed: 1000,
                slidesToShow: 1
          })
    }

    $('div.image-slide').slickLightbox({});

    // SLIDER ABOUT US & STATICS
    if ($('#slideraboutus').length > 0) {
         jQuery('#slideraboutus').slick({
                dots: true,
                arrows: false,
                // autoplay: true,
                easing: 'easeIn',
                speed: 1000,
            })
   }

if ($('.see-phone').length > 0) {
        $('.dr-phone-see').click(function() {
            $('.dr-phone').toggleClass('hide');
            $(this).toggleClass('hide');
        });
   }





    if ($('#map').length > 0) {
        var mapOptions = {
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var bounds = new google.maps.LatLngBounds();
        var markers = $('#map').data('markers');
        var infowindow = new google.maps.InfoWindow({ maxWidth: 225, pixelOffset:new google.maps.Size(-1, 20) });
        for (var i = 0; i < markers.length; i++) {
            iconImage = '/assets/img/marker.png';
            var labelClass = "labels";
            if(markers[i]['type'] == 'hospital') {
                iconImage = '/assets/img/ddkter-icon-hospital.png';
                labelClass = "labels hospital";
            }
            else if (markers[i]['type'] == 'clinic') { 
                iconImage = '/assets/img/ddkter-icon-clinic.png';
                labelClass = "labels clinic";
            } 
            if (markers[i]['type'] == 'hospital' || markers[i]['type'] == 'clinic') {
                var marker = new MarkerWithLabel({
                    position: new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']),
                    title:"",
                    map: map,
                    icon: iconImage,
                    labelContent: markers[i]['number_of_doctors'],
                    labelAnchor: new google.maps.Point(10, 38),
                    labelClass: labelClass, // the CSS class for the label
                    labelInBackground: true,
                    number_of_doctors: markers[i]['number_of_doctors']
                });
            }
            else {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']),
                    title:"",
                    map: map,
                    icon: iconImage,
                });
            }
            

            // This is needed to set the zoom after fitbounds, 
            google.maps.event.addListener(map, 'zoom_changed', function() {
                zoomChangeBoundsListener = 
                    google.maps.event.addListener(map, 'bounds_changed', function(event) {
                        if (this.getZoom() > 15 && this.initialZoom == true) {
                            // Change max/min zoom here
                            this.setZoom(15);
                            this.initialZoom = false;
                        }
                    google.maps.event.removeListener(zoomChangeBoundsListener);
                });
            });
            map.initialZoom = true;

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    var info_content = 
                        '<div class="infowindow">'+
                            '<div class="dr-photo map" style="background-image:url('+markers[i]['avatar']+')">'+
                        '</div>'+
                        '<div class="dr-information">'+
                            '<div class="doctor-label hospital-label">'+
                            '<h1><a href="'+markers[i]['url']+'">'+markers[i]['name']+'</a></h1>'+
                            '<h2>'+markers[i]['formatted']+'</h2>'+
                            '</div>'+
                        '</div>'+
                        '</div>';
                  infowindow.setContent(info_content);
                  infowindow.open(map, marker);
                }
              })(marker, i));
            bounds.extend(marker.position);
        };
        if (markers.length == 0) {
            if($('#map').data('lat') && $('#map').data('lng')) {
                map.setCenter(new google.maps.LatLng($('#map').data('lat'), $('#map').data('lng')));
            }
            else {
                // Jakarta coordinates
                //map.setCenter(new google.maps.LatLng(-6.2297465, 106.829518));
            }
            map.setZoom(6);
        } 
        else {
            map.fitBounds(bounds); 
        }
    }



    if ($('#form-search').length > 0) {
        $('#form-search').submit(function() {
            var form = $(this);
            var specialist = form.find('select[name="specialist"]');
            var option_text = specialist.find('option[value="'+specialist.val()+'"]').text();
            if (specialist.val() != 0)   specialist_slug = specialist.val();
            else                        specialist_slug = 'all';
            var location = form.find('input[name="location"]').val();

            var gender = form.find('select[name="gender"]').val();
            var lang = form.find('select[name="lang"]').val();
            var children = form.find('input[name="children"]').is(':checked');
            var url_get = '';
            if (gender != -1 && gender !== undefined) {
                if (url_get != '') url_get += '&';
                url_get += 'gender='+gender;
            }
            if (lang != -1 && lang !== undefined) {
                if (url_get != '') url_get += '&';
                url_get += 'lang='+lang;
            }
            if (children) {
                if (url_get != '') url_get += '&';
                url_get += 'children=1';
            }
            if (url_get != '') url_get = '?'+url_get;

            window.location = '/cat/'+specialist_slug+'/'+convertToSlug(location)+url_get;
            return false;
        });
    }
    if ($('.calendar').length > 0) {
        var calendarOptions = {
            header: {
                left: 'prev',
                center: '',
                right: 'next'
            }, 
            lang: laravel.language,
            allDaySlot: false,
            allDayDefault: false,
            timeFormat: 'h:mm a',
            defaultView: 'basicWeek',
            columnFormat: 'ddd M/D/YY',
            editable: false,
            firstDay: 1,
            height: 120,
            loading: function(bool) {
                if (!(bool)) {
                    loadedAlert();
                }
            },
            eventClick: function(event) {
                if (event.url) {
                    var url = event.url+'&insurance='+$( "#insurance" ).val();
                    window.location = url;
                    return false;
                }
            }
        };

        $(".calendar").each(function() {
            delete calendarOptions.events;
            calendarOptions.events = '/doctors/'+$(this).data('doctorslug')+'/slots/'+$(this).data('medicalcenter');
            $(this).fullCalendar(calendarOptions);
        });

        function loadedAlert() {
            $(".calendar").each(function() {
                $(this).show().fullCalendar('render');
            });
        }
    }



    if ($('.calendar[data-tooltip]').length > 0) {
        $(".calendar[data-tooltip]").fullCalendar('removeEvents');
    }

    var getDoctorsTimeout = null;
    var getDoctorsDelayed = function() {
        clearTimeout(getDoctorsTimeout);
        getDoctorsTimeout = setTimeout(getDoctors, 500);
    };

    $('input[name="name"]').keyup(getDoctorsDelayed);
    $('input[name="surname"]').keyup(getDoctorsDelayed);

    // GEOCOMPLETE
    if ($('.geocomplete').length > 0) {
        $(".geocomplete").geocomplete().bind("geocode:result", function(event, result){
            var start = 0;

            for (var i = 0; i < (result['address_components']).length; i++) {
                $("input[name='"+result['address_components'][i]['types'][0]+"']").val(result['address_components'][i]['long_name']);
            };

            if ($('#form-selects.submit-on-change').length > 0) {
                $( "#form-selects" ).submit();
            }
        });
    }

    // FAQ  
    if ($('.accordion').length > 0) {
         $(".accordion dd").on("click", "a:eq(0)", function (event)
          {
            var dd_parent = $(this).parent();

            if(dd_parent.hasClass('active'))
              $(".accordion dd div.content:visible").slideToggle("normal");
            else
            {
              $(".accordion dd div.content:visible").slideToggle("normal");
              $(this).parent().find(".content").slideToggle("normal");
            }
          });    
     }

      // Video Modal
      var ytvideoid;
        $('.feature-modal-btn').on('click', function(e){  
          ytvideoid = $(this).data('ytvideoid');
        });   

      $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
        var modal = $(this);
        player = new YT.Player('feature-video', { //Add the player                        
            width: '100%',
            height: '650',
            videoId: ytvideoid, 
            playerVars: {
                rel            : 0,
                theme          : 'light',
                showinfo       : 0,
                showsearch     : 0,
                autoplay       : 1,
                autohide       : 1,
                modestbranding : 0
            },
            events: {
            }
        });
      });

      $(document).on('close.fndtn.reveal', '[data-reveal]', function () {  
        $('#reveal-video .flex-video #feature-video').remove();
        $('#reveal-video .flex-video').append('<div id="feature-video" />');
      });


});
