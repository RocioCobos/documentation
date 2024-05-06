/*! For license information please see 2a9780ad.92046ea9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52143],{77594:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>p,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var n=t(74848),i=t(28453),o=t(96540);const r={id:"insights-portfolio-stats-where-input",title:"InsightsPortfolioStatsWhereInput"},a=void 0,l={id:"types/inputs/insights-portfolio-stats-where-input",title:"InsightsPortfolioStatsWhereInput",description:"No description",source:"@site/api/types/inputs/insights-portfolio-stats-where-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/insights-portfolio-stats-where-input",permalink:"/api/types/inputs/insights-portfolio-stats-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"insights-portfolio-stats-where-input",title:"InsightsPortfolioStatsWhereInput"},sidebar:"schemaSidebar",previous:{title:"InsightsCountriesWhereInput",permalink:"/api/types/inputs/insights-countries-where-input"},next:{title:"IntFilter",permalink:"/api/types/inputs/int-filter"}},d={},c=()=>{const e={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,i.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:t,startOpen:r=!1})=>{const a={details:"details",summary:"summary",...(0,i.R)()},[l,d]=(0,o.useState)(r);return(0,n.jsxs)(a.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InsightsPortfolioStatsWhereInput.<b>mode</b></code><Bullet></Bullet><code>ModeType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsportfoliostatswhereinputmodemodetype--",level:4},{value:'<code>InsightsPortfolioStatsWhereInput.<b>timeRange</b></code><Bullet></Bullet><code>TimeRangeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsportfoliostatswhereinputtimerangetimerangeinput--",level:4},{value:'<code>InsightsPortfolioStatsWhereInput.<b>buyer_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsportfoliostatswhereinputbuyer_inid--",level:4},{value:'<code>InsightsPortfolioStatsWhereInput.<b>seller_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsportfoliostatswhereinputseller_inid--",level:4},{value:'<code>InsightsPortfolioStatsWhereInput.<b>supplier_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsportfoliostatswhereinputsupplier_inid--",level:4},{value:'<code>InsightsPortfolioStatsWhereInput.<b>status_in</b></code><Bullet></Bullet><code>[InsightsPortfolioStatus!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsportfoliostatswhereinputstatus_ininsightsportfoliostatus--",level:4}];function f(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"input InsightsPortfolioStatsWhereInput {\n  mode: ModeType!\n  timeRange: TimeRangeInput!\n  buyer_in: [ID!]\n  seller_in: [ID!]\n  supplier_in: [ID!]\n  status_in: [InsightsPortfolioStatus!]\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"insightsportfoliostatswhereinputmodemodetype--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsPortfolioStatsWhereInput.",(0,n.jsx)("b",{children:"mode"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/enums/mode-type",children:(0,n.jsx)(s.code,{children:"ModeType!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Retrieve data as a Buyer or as a Seller"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"insightsportfoliostatswhereinputtimerangetimerangeinput--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsPortfolioStatsWhereInput.",(0,n.jsx)("b",{children:"timeRange"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/inputs/time-range-input",children:(0,n.jsx)(s.code,{children:"TimeRangeInput!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Input time"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"insightsportfoliostatswhereinputbuyer_inid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsPortfolioStatsWhereInput.",(0,n.jsx)("b",{children:"buyer_in"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(s.code,{children:"[ID!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"List of buyer codes"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"insightsportfoliostatswhereinputseller_inid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsPortfolioStatsWhereInput.",(0,n.jsx)("b",{children:"seller_in"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(s.code,{children:"[ID!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"List of seller codes"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"insightsportfoliostatswhereinputsupplier_inid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsPortfolioStatsWhereInput.",(0,n.jsx)("b",{children:"supplier_in"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(s.code,{children:"[ID!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"List of supplier codes"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"insightsportfoliostatswhereinputstatus_ininsightsportfoliostatus--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsPortfolioStatsWhereInput.",(0,n.jsx)("b",{children:"status_in"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/types/enums/insights-portfolio-status",children:(0,n.jsx)(s.code,{children:"[InsightsPortfolioStatus!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"List of status"}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,s,t)=>{var n=t(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var n,o={},d=null,c=null;for(n in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)r.call(s,n)&&!l.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:i,type:e,key:d,ref:c,props:o,_owner:a.current}}s.Fragment=o,s.jsx=d,s.jsxs=d},74848:(e,s,t)=>{e.exports=t(21020)},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var n=t(96540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);