"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),g=n,m=u["".concat(i,".").concat(g)]||u[g]||b[g]||o;return a?r.createElement(m,c(c({ref:t},s),{},{components:a})):r.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,c[1]=l;for(var d=2;d<o;d++)c[d]=a[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},93460:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>g});var r=a(87462),n=a(67294),o=a(3905);const c={id:"criteria-search",title:"CriteriaSearch",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/criteria-search",id:"objects/criteria-search",title:"CriteriaSearch",description:"Search criteria contains destination, travel dates and the number of pax in each room.",source:"@site/api/objects/criteria-search.mdx",sourceDirName:"objects",slug:"/objects/criteria-search",permalink:"/api/objects/criteria-search",draft:!1,tags:[],version:"current",frontMatter:{id:"criteria-search",title:"CriteriaSearch",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Coordinates",permalink:"/api/objects/coordinates"},next:{title:"CrmData",permalink:"/api/objects/crm-data"}},d={},s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CriteriaSearch.<b>checkIn</b></code><Bullet /><code>Date!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-criteriasearchbcheckinbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CriteriaSearch.<b>checkOut</b></code><Bullet /><code>Date!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-criteriasearchbcheckoutbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CriteriaSearch.<b>hotels</b></code><Bullet /><code>[String!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-criteriasearchbhotelsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CriteriaSearch.<b>occupancies</b></code><Bullet /><code>[RoomCriteria!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-criteriasearchboccupanciesbcoderoomcriteria--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CriteriaSearch.<b>language</b></code><Bullet /><code>Language</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-criteriasearchblanguagebcodelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CriteriaSearch.<b>currency</b></code><Bullet /><code>Currency</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-criteriasearchbcurrencybcodecurrency-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CriteriaSearch.<b>nationality</b></code><Bullet /><code>Country</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-criteriasearchbnationalitybcodecountry-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CriteriaSearch.<b>market</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-criteriasearchbmarketbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:l=!1}=e;const[i,d]=(0,n.useState)(l);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&c)},h={Bullet:s,SpecifiedBy:u,Badge:b,toc:g,Details:m},p="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Search criteria contains destination, travel dates and the number of pax in each room."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CriteriaSearch {\n  checkIn: Date!\n  checkOut: Date!\n  hotels: [String!]!\n  occupancies: [RoomCriteria!]!\n  language: Language\n  currency: Currency\n  nationality: Country\n  market: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-criteriasearchbcheckinbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CriteriaSearch.",(0,o.kt)("b",null,"checkIn"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Check-in date for booking\nFormat: YYYY-MM-DD")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-criteriasearchbcheckoutbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CriteriaSearch.",(0,o.kt)("b",null,"checkOut"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Check-out, booking date\nFormat: YYYY-MM-DD")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-criteriasearchbhotelsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CriteriaSearch.",(0,o.kt)("b",null,"hotels"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contains the list of hotel IDs")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-criteriasearchboccupanciesbcoderoomcriteria--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CriteriaSearch.",(0,o.kt)("b",null,"occupancies"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/room-criteria"},(0,o.kt)("inlineCode",{parentName:"a"},"[RoomCriteria!]!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For multi-room bookings, this array will contain multiple elements (rooms).\nFor each room you have to specify its own occupancy.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-criteriasearchblanguagebcodelanguage-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CriteriaSearch.",(0,o.kt)("b",null,"language"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/language"},(0,o.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Language to be used in the request.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-criteriasearchbcurrencybcodecurrency-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CriteriaSearch.",(0,o.kt)("b",null,"currency"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,o.kt)("inlineCode",{parentName:"a"},"Currency"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currency requested if supported by supplier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-criteriasearchbnationalitybcodecountry-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CriteriaSearch.",(0,o.kt)("b",null,"nationality"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/country"},(0,o.kt)("inlineCode",{parentName:"a"},"Country"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Nationality of the guests (use ISO3166_1_alfa_2)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-criteriasearchbmarketbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CriteriaSearch.",(0,o.kt)("b",null,"market"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Targeted zone, country or point-ofsale-to be used in request.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-search"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelSearch"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);