"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59684,20404],{20404:(e,o,t)=>{t.r(o),t.d(o,{a:()=>u,d:()=>s});var n=t(28584),r=Object.defineProperty,i=(e,o)=>r(e,"name",{value:o,configurable:!0});function a(e,o){for(var t=0;t<o.length;t++){const n=o[t];if("string"!=typeof n&&!Array.isArray(n))for(const o in n)if("default"!==o&&!(o in e)){const t=Object.getOwnPropertyDescriptor(n,o);t&&Object.defineProperty(e,o,t.get?t:{enumerable:!0,get:()=>n[o]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(a,"_mergeNamespaces");!function(e){function o(o,t,n){var r,i=o.getWrapperElement();return(r=i.appendChild(document.createElement("div"))).className=n?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof t?r.innerHTML=t:r.appendChild(t),e.addClass(i,"dialog-opened"),r}function t(e,o){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=o}i(o,"dialogDiv"),i(t,"closeNotification"),e.defineExtension("openDialog",(function(n,r,a){a||(a={}),t(this,null);var u=o(this,n,a.bottom),s=!1,l=this;function c(o){if("string"==typeof o)d.value=o;else{if(s)return;s=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),l.focus(),a.onClose&&a.onClose(u)}}i(c,"close");var f,d=u.getElementsByTagName("input")[0];return d?(d.focus(),a.value&&(d.value=a.value,!1!==a.selectValueOnOpen&&d.select()),a.onInput&&e.on(d,"input",(function(e){a.onInput(e,d.value,c)})),a.onKeyUp&&e.on(d,"keyup",(function(e){a.onKeyUp(e,d.value,c)})),e.on(d,"keydown",(function(o){a&&a.onKeyDown&&a.onKeyDown(o,d.value,c)||((27==o.keyCode||!1!==a.closeOnEnter&&13==o.keyCode)&&(d.blur(),e.e_stop(o),c()),13==o.keyCode&&r(d.value,o))})),!1!==a.closeOnBlur&&e.on(u,"focusout",(function(e){null!==e.relatedTarget&&c()}))):(f=u.getElementsByTagName("button")[0])&&(e.on(f,"click",(function(){c(),l.focus()})),!1!==a.closeOnBlur&&e.on(f,"blur",c),f.focus()),c})),e.defineExtension("openConfirm",(function(n,r,a){t(this,null);var u=o(this,n,a&&a.bottom),s=u.getElementsByTagName("button"),l=!1,c=this,f=1;function d(){l||(l=!0,e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u),c.focus())}i(d,"close"),s[0].focus();for(var p=0;p<s.length;++p){var m=s[p];(function(o){e.on(m,"click",(function(t){e.e_preventDefault(t),d(),o&&o(c)}))})(r[p]),e.on(m,"blur",(function(){--f,setTimeout((function(){f<=0&&d()}),200)})),e.on(m,"focus",(function(){++f}))}})),e.defineExtension("openNotification",(function(n,r){t(this,c);var a,u=o(this,n,r&&r.bottom),s=!1,l=r&&typeof r.duration<"u"?r.duration:5e3;function c(){s||(s=!0,clearTimeout(a),e.rmClass(u.parentNode,"dialog-opened"),u.parentNode.removeChild(u))}return i(c,"close"),e.on(u,"click",(function(o){e.e_preventDefault(o),c()})),l&&(a=setTimeout(c,l)),c}))}((0,n.r)());var u={};const s=a({__proto__:null,default:(0,n.g)(u)},[u])},59684:(e,o,t)=>{t.r(o),t.d(o,{j:()=>l});var n=t(28584),r=t(20404),i=Object.defineProperty,a=(e,o)=>i(e,"name",{value:o,configurable:!0});function u(e,o){for(var t=0;t<o.length;t++){const n=o[t];if("string"!=typeof n&&!Array.isArray(n))for(const o in n)if("default"!==o&&!(o in e)){const t=Object.getOwnPropertyDescriptor(n,o);t&&Object.defineProperty(e,o,t.get?t:{enumerable:!0,get:()=>n[o]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}a(u,"_mergeNamespaces");!function(e){function o(e,o,t,n,r){e.openDialog?e.openDialog(o,r,{value:n,selectValueOnOpen:!0,bottom:e.options.search.bottom}):r(prompt(t,n))}function t(e){return e.phrase("Jump to line:")+' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use line:column or scroll% syntax)")+"</span>"}function n(e,o){var t=Number(o);return/^[-+]/.test(o)?e.getCursor().line+t:t-1}e.defineOption("search",{bottom:!1}),a(o,"dialog"),a(t,"getJumpDialog"),a(n,"interpretLine"),e.commands.jumpToLine=function(e){var r=e.getCursor();o(e,t(e),e.phrase("Jump to line:"),r.line+1+":"+r.ch,(function(o){var t;if(o)if(t=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(o))e.setCursor(n(e,t[1]),Number(t[2]));else if(t=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(o)){var i=Math.round(e.lineCount()*Number(t[1])/100);/^[-+]/.test(t[1])&&(i=r.line+i+1),e.setCursor(i-1,r.ch)}else(t=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(o))&&e.setCursor(n(e,t[1]),r.ch)}))},e.keyMap.default["Alt-G"]="jumpToLine"}((0,n.r)(),r.a);var s={};const l=u({__proto__:null,default:(0,n.g)(s)},[s])}}]);