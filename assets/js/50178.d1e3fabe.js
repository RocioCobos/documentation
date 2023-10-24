(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50178],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23612:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(67294),r=n(86010),a=n(35281),c=n(95999);const l={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const i={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},s={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}function m(e){const{children:t,type:n,title:c,icon:m}=u(e),d=function(e){const t=s[e]??e,n=i[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),i.info)}(n),p=c??d.label,{iconComponent:f}=d,h=m??o.createElement(f,null);return o.createElement("div",{className:(0,r.Z)(a.k.common.admonition,a.k.common.admonitionType(e.type),"alert",`alert--${d.infimaClassName}`,l.admonition)},o.createElement("div",{className:l.admonitionHeading},o.createElement("span",{className:l.admonitionIcon},h),p),o.createElement("div",{className:l.admonitionContent},t))}},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(87462),r=n(67294),a=n(86010),c=n(95999),l=n(86668),i=n(39960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,l.L)();if("h1"===t||!n)return r.createElement(t,(0,o.Z)({},u,{id:void 0}));const d=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return r.createElement(t,(0,o.Z)({},u,{className:(0,a.Z)("anchor",m?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,u.className),id:n}),u.children,r.createElement(i.Z,{className:"hash-link",to:`#${n}`,"aria-label":d,title:d},"\u200b"))}},87233:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ie});var o=n(87462),r=n(67294),a=n(35742);var c=n(72389),l=n(86010),i=n(92949),s=n(86668);function u(){const{prism:e}=(0,s.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var m=n(35281),d=n(87594),p=n.n(d);const f=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:o}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:a}=t;if(a&&h.test(a)){const e=a.match(h).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(g),t)}}(o,r),l=n.split("\n"),i=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<l.length;){const e=l[p].match(c);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${p},`:u[t]?i[u[t]].start=p:m[t]&&(i[m[t]].range+=`${i[m[t]].start}-${p-1},`),l.splice(p,1)}n=l.join("\n");const d={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}const b={codeBlockContainer:"codeBlockContainer_Ckt0"};function E(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(u());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,l.Z)(n.className,b.codeBlockContainer,m.k.common.codeBlock)}))}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return r.createElement(E,{as:"pre",tabIndex:0,className:(0,l.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:k.codeBlockLines},t))}var C=n(902);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:L;const o=(0,C.zX)(t),a=(0,C.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var x={Prism:n(87410).Z,theme:B};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(){return Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Z.apply(this,arguments)}var O=/\r\n|\r|\n/,j=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},H=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function _(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var S=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=Z({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=Z({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=Z({},_(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?Z({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),T(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),T(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=Z({},_(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?Z({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),T(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,l=[],i=[l];c>-1;){for(;(a=o[c]++)<r[c];){var s=void 0,u=t[c],m=n[c][a];if("string"==typeof m?(u=c>0?u:["plain"],s=m):(u=H(u,m.type),m.alias&&(u=H(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(O),p=d.length;l.push({types:u,content:d[0]});for(var f=1;f<p;f++)j(l),i.push(l=[]),l.push({types:u,content:d[f]})}else c++,t.push(u),n.push(s),o.push(0),r.push(s.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return j(l),i}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);const I=S,A={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function P(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:c,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=c({line:t,className:(0,l.Z)(n,a&&A.codeLine)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},i({token:e,key:t})))));return r.createElement("span",s,a?r.createElement(r.Fragment,null,r.createElement("span",{className:A.codeLineNumber}),r.createElement("span",{className:A.codeLineContent},u)):u,r.createElement("br",null))}var z=n(95999);function M(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function D(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const W={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),i=(0,r.useCallback)((()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection(),a=r.rangeCount>0&&r.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,W.copyButton,o&&W.copyButtonCopied),onClick:i},r.createElement("span",{className:W.copyButtonIcons,"aria-hidden":"true"},r.createElement(M,{className:W.copyButtonIcon}),r.createElement(D,{className:W.copyButtonSuccessIcon})))}function V(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function q(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,o&&$.wordWrapButtonEnabled),"aria-label":a,title:a},r.createElement(V,{className:$.wordWrapButtonIcon,"aria-hidden":"true"}))}function F(e){let{children:t,className:n="",metastring:a,title:c,showLineNumbers:i,language:m}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,s.L)(),h=m??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d,g=u(),y=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),c=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),l=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return w(a,l),(0,r.useEffect)((()=>{l()}),[e,l]),(0,r.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),b=function(e){return e?.match(f)?.groups.title??""}(a)||c,{lineClassNames:N,code:C}=v(t,{metastring:a,language:h,magicComments:p}),L=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(a);return r.createElement(E,{as:"div",className:(0,l.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},b&&r.createElement("div",{className:k.codeBlockTitle},b),r.createElement("div",{className:k.codeBlockContent},r.createElement(I,(0,o.Z)({},x,{theme:g,code:C,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,l.Z)(t,k.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.Z)(k.codeBlockLines,L&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(P,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:N[t],showLineNumbers:L})))))})),r.createElement("div",{className:k.buttonGroup},(y.isEnabled||y.isCodeScrollable)&&r.createElement(q,{className:k.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),r.createElement(R,{className:k.codeButton,code:C}))))}function U(e){let{children:t,...n}=e;const a=(0,c.Z)(),l=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?F:N;return r.createElement(i,(0,o.Z)({key:String(a)},n),l)}var G=n(39960);var Y=n(86043);const Q={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function X(e){return!!e&&("SUMMARY"===e.tagName||X(e.parentElement))}function J(e,t){return!!e&&(e===t||J(e.parentElement,t))}function K(e){let{summary:t,children:n,...a}=e;const i=(0,c.Z)(),s=(0,r.useRef)(null),{collapsed:u,setCollapsed:m}=(0,Y.u)({initialState:!a.open}),[d,p]=(0,r.useState)(a.open),f=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,o.Z)({},a,{ref:s,open:d,"data-collapsed":u,className:(0,l.Z)(Q.details,i&&Q.isBrowser,a.className),onMouseDown:e=>{X(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;X(t)&&J(t,s.current)&&(e.preventDefault(),u?(m(!1),p(!0)):m(!0))}}),f,r.createElement(Y.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},r.createElement("div",{className:Q.collapsibleContent},n)))}const ee={details:"details_b_Ee"},te="alert alert--info";function ne(e){let{...t}=e;return r.createElement(K,(0,o.Z)({},t,{className:(0,l.Z)(te,ee.details,t.className)}))}var oe=n(92503);function re(e){return r.createElement(oe.Z,e)}const ae={containsTaskList:"containsTaskList_mC6p"};function ce(e){if(void 0!==e)return(0,l.Z)(e,e?.includes("contains-task-list")&&ae.containsTaskList)}const le={img:"img_ev3q"};const ie={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e):e));return r.createElement(a.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(U,e)},a:function(e){return r.createElement(G.Z,e)},pre:function(e){return r.createElement(U,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),a=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(ne,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:ce(e.className)}))},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,le.img))}));var t},h1:e=>r.createElement(re,(0,o.Z)({as:"h1"},e)),h2:e=>r.createElement(re,(0,o.Z)({as:"h2"},e)),h3:e=>r.createElement(re,(0,o.Z)({as:"h3"},e)),h4:e=>r.createElement(re,(0,o.Z)({as:"h4"},e)),h5:e=>r.createElement(re,(0,o.Z)({as:"h5"},e)),h6:e=>r.createElement(re,(0,o.Z)({as:"h6"},e)),admonition:n(23612).Z,mermaid:()=>null}},45042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(67294),r=n(3905),a=n(50873);function c(e){let{children:t}=e;return o.createElement(r.Zo,{components:a.Z},t)}},39407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(87462),r=n(67294),a=n(86010),c=n(93743);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function u(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,a.Z)(l.tableOfContents,"thin-scrollbar",t)},r.createElement(c.Z,(0,o.Z)({},n,{linkClassName:i,linkActiveClassName:s})))}},93743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(87462),r=n(67294),a=n(86668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):o.push(r)})),o}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>i(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function u(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:c}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let r=t;r<=n;r+=1)o.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:a,maxHeadingLevel:c}),i=s(l,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:o,isChild:a}=e;return t.length?r.createElement("ul",{className:a?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const p=r.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:d,...f}=e;const h=(0,a.L)(),g=u??h.tableOfContents.minHeadingLevel,y=d??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,r.useMemo)((()=>l({toc:c(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:g,maxHeadingLevel:y});return m((0,r.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:y}}),[i,s,g,y])),r.createElement(p,(0,o.Z)({toc:v,className:n,linkClassName:i},f))}},87594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);