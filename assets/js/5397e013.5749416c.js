/*! For license information please see 5397e013.5749416c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78648],{33940:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>x});var l=n(17624),i=n(4552),r=n(11504);const s={id:"hotel-xplugin-filter-input",title:"HotelXPluginFilterInput"},o=void 0,a={id:"inputs/hotel-xplugin-filter-input",title:"HotelXPluginFilterInput",description:"You can filter and specify which plugins need to be included or excluded.",source:"@site/api/inputs/hotel-xplugin-filter-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xplugin-filter-input",permalink:"/api/inputs/hotel-xplugin-filter-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xplugin-filter-input",title:"HotelXPluginFilterInput"},sidebar:"schemaSidebar",previous:{title:"HotelXMetadataQueryInput",permalink:"/api/inputs/hotel-xmetadata-query-input"},next:{title:"HotelXRoomQueryInput",permalink:"/api/inputs/hotel-xroom-query-input"}},u={},d=()=>{const e={span:"span",...(0,i.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=e=>{const t={a:"a",...(0,i.M)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,i.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXPluginFilterInput.<b>includes</b></code><Bullet></Bullet><code>[HotelXFilterPluginTypeInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxpluginfilterinputincludeshotelxfilterplugintypeinput--",level:4},{value:'<code>HotelXPluginFilterInput.<b>excludes</b></code><Bullet></Bullet><code>[HotelXFilterPluginTypeInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxpluginfilterinputexcludeshotelxfilterplugintypeinput--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,i.M)()},[a,u]=(0,r.useState)(s);return(0,l.jsxs)(o.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(o.summary,{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})};function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:'You can filter and specify which plugins need to be included or excluded.\n@deprecated (reason: "deprecated from 2018-10-21. Please, use PluginStepInput")'}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"input HotelXPluginFilterInput {\n  includes: [HotelXFilterPluginTypeInput!]\n  excludes: [HotelXFilterPluginTypeInput!]\n}\n"})}),"\n",(0,l.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(t.h4,{id:"hotelxpluginfilterinputincludeshotelxfilterplugintypeinput--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXPluginFilterInput.",(0,l.jsx)("b",{children:"includes"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(t.a,{href:"/api/inputs/hotel-xfilter-plugin-type-input",children:(0,l.jsx)(t.code,{children:"[HotelXFilterPluginTypeInput!]"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Plugins to be only executed"}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"hotelxpluginfilterinputexcludeshotelxfilterplugintypeinput--",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXPluginFilterInput.",(0,l.jsx)("b",{children:"excludes"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(t.a,{href:"/api/inputs/hotel-xfilter-plugin-type-input",children:(0,l.jsx)(t.code,{children:"[HotelXFilterPluginTypeInput!]"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Plugins to exclude"}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/api/inputs/hotel-xfilter-input",children:(0,l.jsx)(t.code,{children:"HotelXFilterInput"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,l.jsx)(d,{}),(0,l.jsx)(t.a,{href:"/api/inputs/hotel-xfilter-search-input",children:(0,l.jsx)(t.code,{children:"HotelXFilterSearchInput"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},44808:(e,t,n)=>{var l=n(11504),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var l,r={},u=null,d=null;for(l in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,l)&&!a.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===r[l]&&(r[l]=t[l]);return{$$typeof:i,type:e,key:u,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=u,t.jsxs=u},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>s});var l=n(11504);const i={},r=l.createContext(i);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);