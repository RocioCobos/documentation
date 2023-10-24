"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27918],{10903:(e,t,a)=>{a.r(t),a.d(t,{default:()=>be});var n=a(67294),l=a(1944),r=a(902);const o=n.createContext(null);function s(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(o.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(86010),m=a(87524),u=a(87462),p=a(95999),b=a(39960);function h(e){const{permalink:t,title:a,subLabel:l,isNext:r}=e;return n.createElement(b.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function E(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(h,(0,u.Z)({},t,{subLabel:n.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(h,(0,u.Z)({},a,{subLabel:n.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function g(){const{metadata:e}=c();return n.createElement(E,{previous:e.previous,next:e.next})}var v=a(52263),f=a(80143),y=a(35281),_=a(60373),N=a(74477);const Z={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=Z[e.versionMetadata.banner];return n.createElement(t,e)}function w(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(b.Z,{to:a,onClick:l},n.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function C(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,v.Z)(),{pluginId:r}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,_.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,f.Jo)(r),i=s??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(k,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(w,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function L(e){let{className:t}=e;const a=(0,N.E)();return a.banner?n.createElement(C,{className:t,versionMetadata:a}):null}function T(e){let{className:t}=e;const a=(0,N.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function x(e){let{lastUpdatedBy:t}=e;return n.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:y.k.common.lastUpdated},n.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(x,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const B={iconEdit:"iconEdit_Z9Sw"};function I(e){let{className:t,...a}=e;return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(B.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function M(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:y.k.common.editThisPage},n.createElement(I,null),n.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const H={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function V(e){let{permalink:t,label:a,count:l}=e;return n.createElement(b.Z,{href:t,className:(0,d.Z)(H.tag,l?H.tagWithCount:H.tagRegular)},a,l&&n.createElement("span",null,l))}const P={tags:"tags_jXut",tag:"tag_QGVx"};function S(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(P.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:P.tag},n.createElement(V,{label:t,permalink:a}))}))))}const F={lastUpdated:"lastUpdated_vwxv"};function D(e){return n.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(S,e)))}function R(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(M,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",F.lastUpdated)},(a||l)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function q(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||a||r);return s||i?n.createElement("footer",{className:(0,d.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(D,{tags:o}),i&&n.createElement(R,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var z=a(86043),W=a(93743);const O={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function j(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",O.tocCollapsibleButton,!t&&O.tocCollapsibleButtonExpanded,a.className)}),n.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const G={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function X(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,z.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(G.tocCollapsible,!o&&G.tocCollapsibleExpanded,a)},n.createElement(j,{collapsed:o,onClick:s}),n.createElement(z.z,{lazy:!0,className:G.tocCollapsibleContent,collapsed:o},n.createElement(W.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const Y={tocMobile:"tocMobile_ITEo"};function $(){const{toc:e,frontMatter:t}=c();return n.createElement(X,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(y.k.docs.docTocMobile,Y.tocMobile)})}var J=a(39407);function Q(){const{toc:e,frontMatter:t}=c();return n.createElement(J.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var K=a(92503),ee=a(45042);function te(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(y.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(K.Z,{as:"h1"},a)),n.createElement(ee.Z,null,t))}var ae=a(52802),ne=a(48596),le=a(44996);function re(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const oe={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function se(){const e=(0,le.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(b.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(re,{className:oe.breadcrumbHomeIcon})))}const ce={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ie(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(b.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function de(e){let{children:t,active:a,index:l,addMicrodata:r}=e;return n.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function me(){const e=(0,ae.s1)(),t=(0,ne.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(y.k.docs.docBreadcrumbs,ce.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(se,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(de,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(ie,{href:t.href,isLast:l},t.label))})))):null}const ue={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function pe(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement($,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(Q,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&ue.docItemCol)},n.createElement(L,null),n.createElement("div",{className:ue.docItemContainer},n.createElement("article",null,n.createElement(me,null),n.createElement(T,null),a.mobile,n.createElement(te,null,t),n.createElement(q,null)),n.createElement(g,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function be(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(pe,null,n.createElement(a,null))))}},74477:(e,t,a)=>{a.d(t,{E:()=>s,q:()=>o});var n=a(67294),l=a(902);const r=n.createContext(null);function o(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},73527:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),l=a(91262),r=a(43518),o=a(33190),s=a(72389),c=a(10412),i=a(36822);let d=null;d=c.Z.canUseDOM?(0,r.n)({url:"https://api.travelgatex.com/"}):null;const m=(0,i.Z)((e=>{let{token:t,query:a,variables:r}=e;const c=(0,s.Z)(),[i,m]=(0,n.useState)('{\n        "Authorization": "Apikey test0000-0000-0000-0000-000000000000"\n    }');return(0,n.useEffect)((()=>{t&&m(`{"Authorization": "Bearer ${t}"}`)}),[t]),n.createElement(n.Fragment,null,c&&d&&n.createElement(l.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>n.createElement(n.Fragment,null,n.createElement(o.yB,{fetcher:d,headers:i,query:a??"\n    query {\n      hotelX {\n        hotels(criteria: {access: 7245}, relay: {}) {\n          edges {\n            node {\n              hotelData {\n                hotelName\n                hotelCode\n                categoryCode\n                location {\n                  city\n                  country\n                  coordinates {\n                    latitude\n                    longitude\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n",variables:r??"",onTabChange:e=>(e.tabs=[],!1)},n.createElement(o.yB.Logo,null,n.createElement(n.Fragment,null)))))))}))},97199:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=e=>{let{id:t}=e;return n.createElement("iframe",{style:{aspectRatio:"16 / 9",width:"100%"},src:`https://www.youtube.com/embed/${t}?controls=0`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}},50873:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),l=a(87233),r=a(73527),o=a(86010);const s="browserWindow_my1Q",c="browserWindowHeader_jXSR",i="buttons_uHc7",d="browserWindowAddressBar_Pd8y",m="dot_giz1",u="browserWindowMenuIcon_Vhuh",p="bar_rrRL",b="browserWindowBody_Idgs";var h=a(23612);const E=()=>n.createElement(n.Fragment,null,n.createElement(h.Z,{type:"info"},"Have any doubts or inquiries? Our amazing Customer Care team is just a ticket away. Reach out to them via ",n.createElement("a",{href:"https://app.travelgatex.com/tickets",target:"_blank"},"Tickets"),", and they will be more than happy to help you out \ud83d\ude80")),g=()=>n.createElement(n.Fragment,null,n.createElement(h.Z,{type:"caution",title:"Remember"},'It\'s important to note that even if certain fields in the "criteria" or "settings" inputs are labeled as optional, we still need to use some value internally. This value will either come from your query/mutation request or your ',n.createElement("a",{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/settings",target:"_blank"},"default settings"),". You have the ability to manage your default API settings by visiting the ",n.createElement("a",{href:"https://app.travelgatex.com/connections/settings",target:"_blank"},"API Settings section")," on our website."));var v=a(97199);const f={...l.Z,GraphqlSample:r.Z,BrowserWindow:function(e){let{children:t,minHeight:a,url:l="ftp.xmltravelgate.com",style:r,bodyStyle:h}=e;return n.createElement("div",{className:s,style:{...r,minHeight:a}},n.createElement("div",{className:c},n.createElement("div",{className:i},n.createElement("span",{className:m,style:{background:"#f25f58"}}),n.createElement("span",{className:m,style:{background:"#fbbe3c"}}),n.createElement("span",{className:m,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,o.Z)(d,"text--truncate")},l),n.createElement("div",{className:u},n.createElement("div",null,n.createElement("span",{className:p}),n.createElement("span",{className:p}),n.createElement("span",{className:p})))),n.createElement("div",{className:b,style:h},t))},TipContactCustomerCare:E,CautionSettingsHotelX:g,YoutubeVideo:v.Z}}}]);