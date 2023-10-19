"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(a),f=o,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||l;return a?n.createElement(m,r(r({ref:t},s),{},{components:a})):n.createElement(m,r({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,r[1]=c;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},94536:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>f});var n=a(87462),o=a(67294),l=a(3905);const r={id:"hotel-cancel-detail",title:"HotelCancelDetail",hide_table_of_contents:!1},c=void 0,i={unversionedId:"objects/hotel-cancel-detail",id:"objects/hotel-cancel-detail",title:"HotelCancelDetail",description:"This field contains a review of the cancellation status and other reservation-related information.",source:"@site/api/objects/hotel-cancel-detail.mdx",sourceDirName:"objects",slug:"/objects/hotel-cancel-detail",permalink:"/api/objects/hotel-cancel-detail",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-cancel-detail",title:"HotelCancelDetail",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelBooking",permalink:"/api/objects/hotel-booking"},next:{title:"HotelCancelPayload",permalink:"/api/objects/hotel-cancel-payload"}},d={},s=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCancelDetail.<b>reference</b></code><Bullet /><code>Reference</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelcanceldetailbreferencebcodereference-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCancelDetail.<b>cancelReference</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcanceldetailbcancelreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCancelDetail.<b>status</b></code><Bullet /><code>BookStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-hotelcanceldetailbstatusbcodebookstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCancelDetail.<b>price</b></code><Bullet /><code>Price</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelcanceldetailbpricebcodeprice-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCancelDetail.<b>booking</b></code><Bullet /><code>HotelBookingDetail</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelcanceldetailbbookingbcodehotelbookingdetail-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCancelDetail.<b>paymentInfo</b></code><Bullet /><code>GeneratedPaymentInfo</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelcanceldetailbpaymentinfobcodegeneratedpaymentinfo-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:c=!1}=e;const[i,d]=(0,o.useState)(c);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},u={Bullet:s,SpecifiedBy:p,Badge:b,toc:f,Details:m},k="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This field contains a review of the cancellation status and other reservation-related information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelCancelDetail {\n  reference: Reference\n  cancelReference: String\n  status: BookStatusType\n  price: Price\n  booking: HotelBookingDetail\n  paymentInfo: GeneratedPaymentInfo\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelcanceldetailbreferencebcodereference-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelCancelDetail.",(0,l.kt)("b",null,"reference"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reference"},(0,l.kt)("inlineCode",{parentName:"a"},"Reference"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Contains all the references obtained along the flow (client's, supplier's, hotel's...).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelcanceldetailbcancelreferencebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelCancelDetail.",(0,l.kt)("b",null,"cancelReference"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Cancellation ID in the supplier's system, if supported.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelcanceldetailbstatusbcodebookstatustype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelCancelDetail.",(0,l.kt)("b",null,"status"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/book-status-type"},(0,l.kt)("inlineCode",{parentName:"a"},"BookStatusType"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Booking Status.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelcanceldetailbpricebcodeprice-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelCancelDetail.",(0,l.kt)("b",null,"price"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/price"},(0,l.kt)("inlineCode",{parentName:"a"},"Price"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies the prices (Gross, Net and Amount) of the cancellation.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelcanceldetailbbookingbcodehotelbookingdetail-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelCancelDetail.",(0,l.kt)("b",null,"booking"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/hotel-booking-detail"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelBookingDetail"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information about the reservation.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelcanceldetailbpaymentinfobcodegeneratedpaymentinfo-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelCancelDetail.",(0,l.kt)("b",null,"paymentInfo"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/generated-payment-info"},(0,l.kt)("inlineCode",{parentName:"a"},"GeneratedPaymentInfo"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies the information about the payment generated at Book step.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/hotel-cancel-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelCancelPayload"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);