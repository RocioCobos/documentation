"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4666],{20996:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(11504),c=n(34064),o=n(15756),l=n(45864),r=n(35492),i=n(46192),s=n(84357),d=n(53943),m=n(27124);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,c]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:l,cancelScroll:r}=(0,d.yI)();return(0,d.SM)(((e,n)=>{let{scrollY:a}=e;const l=n?.scrollY;l&&(o.current?o.current=!1:a>=l?(r(),c(!1)):a<t?c(!1):a+window.innerHeight<document.documentElement.scrollHeight&&c(!0))})),(0,m.c)((e=>{e.location.hash&&(o.current=!0,c(!1))})),{shown:n,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,s.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.c)("clean-btn",l.W.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var p=n(13856),h=n(55592),E=n(11432),f=n(21824),v=n(68164),_=n(45072);function g(e){return a.createElement("svg",(0,_.c)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const k={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,s.G)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.G)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.c)("button button--secondary button--outline",k.collapseSidebarButton),onClick:t},a.createElement(g,{className:k.collapseSidebarButtonIcon}))}var C=n(43868),I=n(91100);const N=Symbol("EmptyContext"),T=a.createContext(N);function x(e){let{children:t}=e;const[n,c]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:c})),[n]);return a.createElement(T.Provider,{value:o},t)}var y=n(58448),B=n(13376),A=n(10867),W=n(93664);function w(e){let{collapsed:t,categoryLabel:n,onClick:c}=e;return a.createElement("button",{"aria-label":t?(0,s.G)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,s.G)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:c})}function L(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,f.y)(),v=function(e){const t=(0,W.c)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.Gw)(e):void 0),[e,t])}(t),g=(0,r.Md)(t,o),k=(0,B.Sc)(h,o),{collapsed:S,setCollapsed:C}=(0,y.a)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:x,setExpandedItem:L}=function(){const e=(0,a.useContext)(T);if(e===N)throw new I.AH("DocSidebarItemsExpandedStateProvider");return e}(),M=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!S;L(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:c}=e;const o=(0,I.i0)(t);(0,a.useEffect)((()=>{t&&!o&&n&&c(!1)}),[t,o,n,c])}({isActive:g,collapsed:S,updateCollapsed:M}),(0,a.useEffect)((()=>{b&&null!=x&&x!==s&&E&&C(!0)}),[b,x,s,C,E]),a.createElement("li",{className:(0,c.c)(l.W.docs.docSidebarItemCategory,l.W.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":S},p)},a.createElement("div",{className:(0,c.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(A.c,(0,_.c)({className:(0,c.c)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!S:void 0,href:b?v??"#":v},d),u),h&&b&&a.createElement(w,{collapsed:S,categoryLabel:u,onClick:e=>{e.preventDefault(),M()}})),a.createElement(y.U,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(j,{items:m,tabIndex:S?-1:0,onItemClick:n,activePath:o,level:i+1})))}var M=n(18136),H=n(3232);const P={menuExternalLink:"menuExternalLink_NmtK"};function R(e){let{item:t,onItemClick:n,activePath:o,level:i,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,r.Md)(t,o),E=(0,M.c)(m);return a.createElement("li",{className:(0,c.c)(l.W.docs.docSidebarItemLink,l.W.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(A.c,(0,_.c)({className:(0,c.c)("menu__link",!E&&P.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(H.c,null)))}const G={menuHtmlItem:"menuHtmlItem_M9Kj"};function D(e){let{item:t,level:n,index:o}=e;const{value:r,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,c.c)(l.W.docs.docSidebarItemLink,l.W.docs.docSidebarItemLinkLevel(n),i&&[G.menuHtmlItem,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:r}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(L,(0,_.c)({item:t},n));case"html":return a.createElement(D,(0,_.c)({item:t},n));default:return a.createElement(R,(0,_.c)({item:t},n))}}function F(e){let{items:t,...n}=e;const c=(0,r.mg)(t,n.activePath);return a.createElement(x,null,c.map(((e,t)=>a.createElement(U,(0,_.c)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(F),K={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function V(e){let{path:t,sidebar:n,className:o}=e;const r=function(){const{isActive:e}=(0,C.el)(),[t,n]=(0,a.useState)(e);return(0,d.SM)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,s.G)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,c.c)("menu thin-scrollbar",K.menu,r&&K.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,c.c)(l.W.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const Y="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",q="sidebarHidden_VK0M",O="sidebarLogo_isFc";function J(e){let{path:t,sidebar:n,onCollapse:o,isHidden:l}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,f.y)();return a.createElement("div",{className:(0,c.c)(Y,r&&z,l&&q)},r&&a.createElement(v.c,{tabIndex:-1,className:O}),a.createElement(V,{path:t,sidebar:n}),i&&a.createElement(S,{onClick:o}))}const Q=a.memo(J);var X=n(45168),Z=n(18200);const $=e=>{let{sidebar:t,path:n}=e;const o=(0,Z.q)();return a.createElement("ul",{className:(0,c.c)(l.W.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ee(e){return a.createElement(X.Mx,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,E.U)(),n="desktop"===t||"ssr"===t,c="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Q,e),c&&a.createElement(te,e))}const ae={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ae.expandButton,title:(0,s.G)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,s.G)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(g,{className:ae.expandButtonIcon}))}const oe={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function le(e){let{children:t}=e;const n=(0,i.m)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:r}=(0,h.IT)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,p.I)()&&s(!0),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,c.c)(l.W.docs.docSidebarContainer,oe.docSidebarContainer,n&&oe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.docSidebarContainer)&&n&&s(!0)}},a.createElement(le,null,a.createElement("div",{className:(0,c.c)(oe.sidebarViewport,i&&oe.sidebarViewportHidden)},a.createElement(ne,{sidebar:t,path:r,onCollapse:d,isHidden:i}),i&&a.createElement(ce,{toggleSidebar:d}))))}const ie={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,i.m)();return a.createElement("main",{className:(0,c.c)(ie.docMainContainer,(t||!o)&&ie.docMainContainerEnhanced)},a.createElement("div",{className:(0,c.c)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},n))}const de={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function me(e){let{children:t}=e;const n=(0,i.m)(),[c,o]=(0,a.useState)(!1);return a.createElement("div",{className:de.docsWrapper},a.createElement(b,null),a.createElement("div",{className:de.docRoot},n&&a.createElement(re,{sidebar:n.items,hiddenSidebarContainer:c,setHiddenSidebarContainer:o}),a.createElement(se,{hiddenSidebarContainer:c},t)))}var ue=n(96592);function be(e){const t=(0,r.Uj)(e);if(!t)return a.createElement(ue.c,null);const{docElement:n,sidebarName:s,sidebarItems:d}=t;return a.createElement(o.cr,{className:(0,c.c)(l.W.page.docsDocPage)},a.createElement(i.y,{name:s,items:d},a.createElement(me,null,n)))}},96592:(e,t,n)=>{n.d(t,{c:()=>r});var a=n(11504),c=n(34064),o=n(84357),l=n(56448);function r(e){let{className:t}=e;return a.createElement("main",{className:(0,c.c)("container margin-vert--xl",t)},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement(l.c,{as:"h1",className:"hero__title"},a.createElement(o.c,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.c,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.c,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);