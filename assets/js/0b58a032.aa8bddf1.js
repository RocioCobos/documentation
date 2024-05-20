/*! For license information please see 0b58a032.aa8bddf1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87906],{57225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453);const i={sidebar_position:7},a="Taxes",o={id:"apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/taxes",title:"Taxes",description:"The Taxes file is designed to facilitate the setup of taxes within the Inventory platform. It's necessary for managing tax-specific data and relate to the rates created previously.",source:"@site/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/taxes.mdx",sourceDirName:"apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up",slug:"/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/taxes",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/taxes",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/taxes.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Specific Clients",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/specific-clients"},next:{title:"Offers",permalink:"/docs/apis/for-buyers/inventory-buyers/inventory-set-up-csv-api/set-up/offers"}},d={},l=[{value:"File Name Format",id:"file-name-format",level:3},{value:"Tax",id:"tax",level:3},{value:"Sheet Format Example",id:"sheet-format-example",level:4},{value:"CSV Format Example for Channel Managers",id:"csv-format-example-for-channel-managers",level:4},{value:"Additional information",id:"additional-information",level:3},{value:"Apply Type",id:"apply-type",level:4},{value:"Penalty Type",id:"penalty-type",level:4}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"taxes",children:"Taxes"}),"\n",(0,r.jsx)(t.p,{children:"The Taxes file is designed to facilitate the setup of taxes within the Inventory platform. It's necessary for managing tax-specific data and relate to the rates created previously."}),"\n",(0,r.jsx)(t.h3,{id:"file-name-format",children:"File Name Format"}),"\n",(0,r.jsxs)(t.p,{children:["The file name format for the Tax Setup is as follows: ",(0,r.jsx)(t.strong,{children:"clientCode-providerCode-HotelCode#ContextCode-taxes.csv"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have any questions about how to add the requested information to create the file name, you can consult the following link:",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"../quickstart#3-file-naming-importance-for-travelgatex-ftp-uploads",children:"Importance of the file name for TravelgateX's FTP uploads"})]}),"\n",(0,r.jsx)(t.h3,{id:"tax",children:"Tax"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element"}),(0,r.jsx)(t.th,{children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Rate Code"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Unique identifier that associate this surcharge to a unique rate code."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Charge Type"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsxs)(t.td,{children:["Indicate if the surcharge is included or not in the final price. Example: (",(0,r.jsx)(t.strong,{children:"0"})," - Included (included in the final price)) or (",(0,r.jsx)(t.strong,{children:"1"})," - Excluded (excluded the final price))."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ApplyType"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsxs)(t.td,{children:["Number of days prior to check-in when the cancellation policy takes effect. Type of payment to be chosen between: (",(0,r.jsx)(t.a,{href:"#apply-type",children:"Check the ApplyType Codes"}),")"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Value"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Amount to be paid."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsxs)(t.td,{children:["Indicate the surcharge type (",(0,r.jsx)(t.a,{href:"#penalty-type",children:"Check the Penalty Type Codes"}),")."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Is Per Night"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsxs)(t.td,{children:["Indicate if it is a surcharge that applies per day or not. Example: (",(0,r.jsx)(t.strong,{children:"0"})," - False (not apply per day)) or (",(0,r.jsx)(t.strong,{children:"1"})," - True (apply per day))."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Is Per Pax"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsxs)(t.td,{children:["Indicate if it is a surcharge that applies per pax or not. Example: (",(0,r.jsx)(t.strong,{children:"0"})," - False (not apply per pax)) or (",(0,r.jsx)(t.strong,{children:"1"})," - True (apply per pax))."]})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"sheet-format-example",children:"Sheet Format Example"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/docs/inventory_csv_taxes-setup.png",alt:"inventory_csv_taxes-setup"})}),"\n",(0,r.jsx)(t.h4,{id:"csv-format-example-for-channel-managers",children:"CSV Format Example for Channel Managers"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'Rate Code;Charge Type;ApplyType;Value;Type;Is Per Night;Is Per Pax\n"123RATE_TEST";"1";"Amount";"20";"City";"1";"1"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"additional-information",children:"Additional information"}),"\n",(0,r.jsx)(t.h4,{id:"apply-type",children:"Apply Type"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Description"})})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"PerCent"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"Amount"})})]})]}),"\n",(0,r.jsx)(t.h4,{id:"penalty-type",children:"Penalty Type"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{children:"Description"})})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"City"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"Local"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"Resort Fee"})}),(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"Supplement To Be Paid On Spot"})})]})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," If ApplyType is PerCent, Is Per Night and Is Per Pax cannot be true."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);