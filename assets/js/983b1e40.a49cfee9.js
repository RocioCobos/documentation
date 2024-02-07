/*! For license information please see 983b1e40.a49cfee9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89212],{79596:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>o,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=t(17624),l=t(4552),d=t(11504);const a={id:"supplement-input",title:"SupplementInput"},i=void 0,r={id:"inputs/supplement-input",title:"SupplementInput",description:"Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",source:"@site/api/inputs/supplement-input.mdx",sourceDirName:"inputs",slug:"/inputs/supplement-input",permalink:"/api/inputs/supplement-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"supplement-input",title:"SupplementInput"},sidebar:"schemaSidebar",previous:{title:"SuitOrganizationInput",permalink:"/api/inputs/suit-organization-input"},next:{title:"SupplierContextInput",permalink:"/api/inputs/supplier-context-input"}},p={},c=()=>{const e={span:"span",...(0,l.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const n={a:"a",...(0,l.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,l.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SupplementInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputcodestring--",level:4},{value:'<code>SupplementInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputnamestring-",level:4},{value:'<code>SupplementInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputdescriptionstring-",level:4},{value:'<code>SupplementInput.<b>supplementType</b></code><Bullet></Bullet><code>SupplementType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputsupplementtypesupplementtype--",level:4},{value:'<code>SupplementInput.<b>chargeType</b></code><Bullet></Bullet><code>ChargeType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputchargetypechargetype--",level:4},{value:'<code>SupplementInput.<b>mandatory</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputmandatoryboolean--",level:4},{value:'<code>SupplementInput.<b>durationType</b></code><Bullet></Bullet><code>DurationType</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputdurationtypedurationtype-",level:4},{value:'<code>SupplementInput.<b>quantity</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputquantityint-",level:4},{value:'<code>SupplementInput.<b>unit</b></code><Bullet></Bullet><code>UnitTimeType</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputunitunittimetype-",level:4},{value:'<code>SupplementInput.<b>start</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputstartstring-",level:4},{value:'<code>SupplementInput.<b>end</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputendstring-",level:4},{value:'<code>SupplementInput.<b>resort</b></code><Bullet></Bullet><code>ResortInput</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputresortresortinput-",level:4},{value:'<code>SupplementInput.<b>price</b></code><Bullet></Bullet><code>PriceInput</code> <Badge class="badge badge--secondary"></Badge>',id:"supplementinputpricepriceinput-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,l.M)()},[r,p]=(0,d.useState)(a);return(0,s.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Supplement that it can be or its already added to the option returned. Contains all the information about the supplement."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input SupplementInput {\n  code: String!\n  name: String\n  description: String\n  supplementType: SupplementType!\n  chargeType: ChargeType!\n  mandatory: Boolean!\n  durationType: DurationType\n  quantity: Int\n  unit: UnitTimeType\n  start: String\n  end: String\n  resort: ResortInput\n  price: PriceInput\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputcodestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the supplement code."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputnamestring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"name"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the supplement name."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputdescriptionstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"description"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the supplement description."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputsupplementtypesupplementtype--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"supplementType"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/enums/supplement-type",children:(0,s.jsx)(n.code,{children:"SupplementType!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indicates the supplement type. Possible types: Fee, Ski_pass, Lessons, Meals, Equipment, Ticket, Transfers, Gla, Activity or Null."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputchargetypechargetype--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"chargeType"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/enums/charge-type",children:(0,s.jsx)(n.code,{children:"ChargeType!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indicates the charge types. We need to know whether the supplements have to be paid when the consumer gets to the hotel or beforehand.\nPossible charge types: Include or Exclude.\nWhen include: this supplement is mandatory and included in the option's price.\nWhen exclude: this supplement is not included in the option's price."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputmandatoryboolean--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"mandatory"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,s.jsx)(n.code,{children:"Boolean!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indicates if the supplement is mandatory or not. If mandatory, this supplement will be applied to this option.\nIf the chargeType is excluded the customer will have to pay it directly at the hotel."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputdurationtypedurationtype-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"durationType"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/enums/duration-type",children:(0,s.jsx)(n.code,{children:"DurationType"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the duration type. Possible duration types: Range (specified dates) or Open. This field is mandatory for PDI."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputquantityint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"quantity"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'Indicates the quantity of field in the element "unit".'}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputunitunittimetype-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"unit"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/enums/unit-time-type",children:(0,s.jsx)(n.code,{children:"UnitTimeType"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indicates the unit type. Possible unit types: Day or Hour."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputstartstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"start"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indicates the effective date of the supplement.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputendstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"end"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indicates the expire date of the supplement.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputresortresortinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"resort"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/inputs/resort-input",children:(0,s.jsx)(n.code,{children:"ResortInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Contains information about the resort"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"supplementinputpricepriceinput-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplementInput.",(0,s.jsx)("b",{children:"price"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/inputs/price-input",children:(0,s.jsx)(n.code,{children:"PriceInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Indicates the supplement price."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/inputs/hotel-one-step-book-input",children:(0,s.jsx)(n.code,{children:"HotelOneStepBookInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/inputs/hotel-one-step-quote-input",children:(0,s.jsx)(n.code,{children:"HotelOneStepQuoteInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function g(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},44808:(e,n,t)=>{var s=t(11504),l=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var s,d={},p=null,c=null;for(s in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,s)&&!r.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:l,type:e,key:p,ref:c,props:d,_owner:i.current}}n.Fragment=d,n.jsx=p,n.jsxs=p},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>a});var s=t(11504);const l={},d=s.createContext(l);function a(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);