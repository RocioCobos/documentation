"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),s=c(a),k=n,m=s["".concat(i,".").concat(k)]||s[k]||g[k]||l;return a?o.createElement(m,r(r({ref:t},b),{},{components:a})):o.createElement(m,r({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=k;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:n,r[1]=d;for(var c=2;c<l;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},95072:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>b,Details:()=>m,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var o=a(87462),n=a(67294),l=a(3905);const r={id:"metadata-booking",title:"MetadataBooking",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/metadata-booking",id:"objects/metadata-booking",title:"MetadataBooking",description:"Return information about booking",source:"@site/api/objects/metadata-booking.mdx",sourceDirName:"objects",slug:"/objects/metadata-booking",permalink:"/api/objects/metadata-booking",draft:!1,tags:[],version:"current",frontMatter:{id:"metadata-booking",title:"MetadataBooking",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MetadataBook",permalink:"/api/objects/metadata-book"},next:{title:"MetadataCancel",permalink:"/api/objects/metadata-cancel"}},c={},b=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>queryableBySupplierReference</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbqueryablebysupplierreferencebcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>queryableByClientReference</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbqueryablebyclientreferencebcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>queryableByCreationDate</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbqueryablebycreationdatebcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>queryableByCheckinDate</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbqueryablebycheckindatebcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>informHotelReference</b></code><Bullet /><code>ReviewedBool</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbinformhotelreferencebcodereviewedbool-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>informCancelPolicies</b></code><Bullet /><code>ReviewedBool</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbinformcancelpoliciesbcodereviewedbool-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>informPriceCancel</b></code><Bullet /><code>ReviewedBool</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbinformpricecancelbcodereviewedbool-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>requiresCheckInDateInReferences</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbrequirescheckindateinreferencesbcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>requiresCheckOutDateInReferences</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbrequirescheckoutdateinreferencesbcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>requiresReservationDateInReferences</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbrequiresreservationdateinreferencesbcodereviewedbool--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataBooking.<b>timeZone</b></code><Bullet /><code>ReviewedTimeZone!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadatabookingbtimezonebcodereviewedtimezone--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[i,c]=(0,n.useState)(d);return(0,l.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},u={Bullet:b,SpecifiedBy:s,Badge:g,toc:k,Details:m},p="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Return information about booking"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type MetadataBooking {\n  queryableBySupplierReference: ReviewedBool!\n  queryableByClientReference: ReviewedBool!\n  queryableByCreationDate: ReviewedBool!\n  queryableByCheckinDate: ReviewedBool!\n  informHotelReference: ReviewedBool\n  informCancelPolicies: ReviewedBool\n  informPriceCancel: ReviewedBool\n  requiresCheckInDateInReferences: ReviewedBool!\n  requiresCheckOutDateInReferences: ReviewedBool!\n  requiresReservationDateInReferences: ReviewedBool!\n  timeZone: ReviewedTimeZone!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbqueryablebysupplierreferencebcodereviewedbool--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"queryableBySupplierReference"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if booking can be performed using supplier reference.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbqueryablebyclientreferencebcodereviewedbool--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"queryableByClientReference"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if booking can be performed using client reference.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbqueryablebycreationdatebcodereviewedbool--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"queryableByCreationDate"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if booking can be performed using creation dates.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbqueryablebycheckindatebcodereviewedbool--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"queryableByCheckinDate"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if booking can be performed using check in dates.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbinformhotelreferencebcodereviewedbool-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"informHotelReference"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if the supplier informs about Hotel Confirmation Number (HCN).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbinformcancelpoliciesbcodereviewedbool-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"informCancelPolicies"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if the supplier informs about the cancellation policies.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbinformpricecancelbcodereviewedbool-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"informPriceCancel"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if the supplier informs about the cancellation price.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbrequirescheckindateinreferencesbcodereviewedbool--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"requiresCheckInDateInReferences"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if the supplier requires check-in date in reference.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbrequirescheckoutdateinreferencesbcodereviewedbool--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"requiresCheckOutDateInReferences"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if the supplier requires check-out date in reference.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbrequiresreservationdateinreferencesbcodereviewedbool--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"requiresReservationDateInReferences"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if the supplier requires the reservation date in reference.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-metadatabookingbtimezonebcodereviewedtimezone--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MetadataBooking.",(0,l.kt)("b",null,"timeZone"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-time-zone"},(0,l.kt)("inlineCode",{parentName:"a"},"ReviewedTimeZone!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies the timezone in UTC in which the cancellation policies are located.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/metadata-data"},(0,l.kt)("inlineCode",{parentName:"a"},"MetadataData"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);