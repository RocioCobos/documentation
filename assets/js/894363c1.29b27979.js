/*! For license information please see 894363c1.29b27979.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31452],{18348:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var o=t(74848),s=t(28453),l=t(96540);const a={id:"hotel-one-step-book-input",title:"HotelOneStepBookInput"},d=void 0,c={id:"types/inputs/hotel-one-step-book-input",title:"HotelOneStepBookInput",description:"Input that contains all the required information for booking the option in one step.",source:"@site/api/types/inputs/hotel-one-step-book-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/hotel-one-step-book-input",permalink:"/api/types/inputs/hotel-one-step-book-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-one-step-book-input",title:"HotelOneStepBookInput"},sidebar:"schemaSidebar",previous:{title:"HotelFilterInput",permalink:"/api/types/inputs/hotel-filter-input"},next:{title:"HotelOneStepQuoteInput",permalink:"/api/types/inputs/hotel-one-step-quote-input"}},r={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[c,r]=(0,l.useState)(a);return(0,o.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelOneStepBookInput.<b>checkIn</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputcheckindate--",level:4},{value:'<code>HotelOneStepBookInput.<b>checkOut</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputcheckoutdate--",level:4},{value:'<code>HotelOneStepBookInput.<b>hotel</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputhotelstring--",level:4},{value:'<code>HotelOneStepBookInput.<b>rooms</b></code><Bullet></Bullet><code>[OneStepBookRoomInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputroomsonestepbookroominput--",level:4},{value:'<code>HotelOneStepBookInput.<b>board</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputboardstring-",level:4},{value:'<code>HotelOneStepBookInput.<b>language</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputlanguagestring-",level:4},{value:'<code>HotelOneStepBookInput.<b>ratePlan</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputrateplanstring-",level:4},{value:'<code>HotelOneStepBookInput.<b>rateRulesExtended</b></code><Bullet></Bullet><code>[HotelOptionRateRuleInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputraterulesextendedhoteloptionrateruleinput--",level:4},{value:'<code>HotelOneStepBookInput.<b>price</b></code><Bullet></Bullet><code>PriceInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputpricepriceinput--",level:4},{value:'<code>HotelOneStepBookInput.<b>surcharges</b></code><Bullet></Bullet><code>[SurchargeInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputsurchargessurchargeinput--",level:4},{value:'<code>HotelOneStepBookInput.<b>supplements</b></code><Bullet></Bullet><code>[SupplementInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputsupplementssupplementinput--",level:4},{value:'<code>HotelOneStepBookInput.<b>nationality</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputnationalitystring-",level:4},{value:'<code>HotelOneStepBookInput.<b>cancelPolicy</b></code><Bullet></Bullet><code>CancelPolicyInput</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputcancelpolicycancelpolicyinput-",level:4},{value:'<code>HotelOneStepBookInput.<b>clientReference</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputclientreferencestring--",level:4},{value:'<code>HotelOneStepBookInput.<b>market</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputmarketstring-",level:4},{value:'<code>HotelOneStepBookInput.<b>payment</b></code><Bullet></Bullet><code>PaymentInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputpaymentpaymentinput--",level:4},{value:'<code>HotelOneStepBookInput.<b>holder</b></code><Bullet></Bullet><code>HolderInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelonestepbookinputholderholderinput--",level:4}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Input that contains all the required information for booking the option in one step."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"input HotelOneStepBookInput {\n  checkIn: Date!\n  checkOut: Date!\n  hotel: String!\n  rooms: [OneStepBookRoomInput!]!\n  board: String\n  language: String\n  ratePlan: String\n  rateRulesExtended: [HotelOptionRateRuleInput!]\n  price: PriceInput!\n  surcharges: [SurchargeInput!]\n  supplements: [SupplementInput!]\n  nationality: String\n  cancelPolicy: CancelPolicyInput\n  clientReference: String!\n  market: String\n  payment: PaymentInput!\n  holder: HolderInput!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputcheckindate--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"checkIn"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/date",children:(0,o.jsx)(n.code,{children:"Date!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Check-in date. Format: YYYY-MM-DD"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputcheckoutdate--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"checkOut"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/date",children:(0,o.jsx)(n.code,{children:"Date!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Check-out date. Format: YYYY-MM-DD"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputhotelstring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"hotel"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Hotel code."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputroomsonestepbookroominput--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"rooms"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/one-step-book-room-input",children:(0,o.jsx)(n.code,{children:"[OneStepBookRoomInput!]!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Rooms within this option."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputboardstring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"board"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Supplier's board code."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputlanguagestring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"language"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Language to be used in request."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputrateplanstring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"ratePlan"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Option's rate plan code."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputraterulesextendedhoteloptionrateruleinput--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"rateRulesExtended"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/hotel-option-rate-rule-input",children:(0,o.jsx)(n.code,{children:"[HotelOptionRateRuleInput!]"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"RateRules contains all the rules that the option booked must have."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputpricepriceinput--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"price"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/price-input",children:(0,o.jsx)(n.code,{children:"PriceInput!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Specifies the prices (Gross, Net and Amount) that the option booked must have."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputsurchargessurchargeinput--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"surcharges"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/surcharge-input",children:(0,o.jsx)(n.code,{children:"[SurchargeInput!]"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"List of surcharges that the option booked must have."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputsupplementssupplementinput--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"supplements"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/supplement-input",children:(0,o.jsx)(n.code,{children:"[SupplementInput!]"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"List of supplements that the option booked must have."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputnationalitystring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"nationality"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Nationality of the guest (use ISO3166_1_alfa_2) #TODO needed?"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputcancelpolicycancelpolicyinput-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"cancelPolicy"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/cancel-policy-input",children:(0,o.jsx)(n.code,{children:"CancelPolicyInput"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Specifies the cancel policies that the option booked must have."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputclientreferencestring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"clientReference"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Client reference/locator."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputmarketstring-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"market"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Targeted zone, country or point-of-sale to be used in request."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputpaymentpaymentinput--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"payment"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/payment-input",children:(0,o.jsx)(n.code,{children:"PaymentInput!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Information about the option payment. If the payment type is DIRECT, CARD_BOOKING or CARD_CHECK_IN, then is mandatory to specify the payment card information."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"hotelonestepbookinputholderholderinput--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelOneStepBookInput.",(0,o.jsx)("b",{children:"holder"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/holder-input",children:(0,o.jsx)(n.code,{children:"HolderInput!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Information of the passenger that holds the booking (has to be complementary to the first passenger)"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},21020:(e,n,t)=>{var o=t(96540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,t){var o,l={},r=null,i=null;for(o in void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(i=n.ref),n)a.call(n,o)&&!c.hasOwnProperty(o)&&(l[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===l[o]&&(l[o]=n[o]);return{$$typeof:s,type:e,key:r,ref:i,props:l,_owner:d.current}}n.Fragment=l,n.jsx=r,n.jsxs=r},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var o=t(96540);const s={},l=o.createContext(s);function a(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);