/*! For license information please see e075fd8a.7e48828a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8836],{4332:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(17624),i=r(4552);const s={sidebar_position:9},o="Preference",l={id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference",title:"Preference",description:"The Preference plugin works by prioritizing options that align with your preferences and presenting them in a preferred order. It follows a sequential process, where rules are checked one by one until a matching rule is found. When a match is found, the process stops, and your preference is applied. If no matching rule is found, the option will be validated.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Currency Converter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter"},next:{title:"Safety Margin",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin"}},c={},d=[{value:"Preference Plugin Workflow",id:"preference-plugin-workflow",level:2},{value:"1. Create and Upload your Preference File",id:"1-create-and-upload-your-preference-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3},{value:"2. Execute Preference Plugin in your Query",id:"2-execute-preference-plugin-in-your-query",level:2}];function a(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{BrowserWindow:r,Details:s}=n;return r||p("BrowserWindow",!0),s||p("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"preference",children:"Preference"}),"\n",(0,t.jsx)(n.p,{children:"The Preference plugin works by prioritizing options that align with your preferences and presenting them in a preferred order. It follows a sequential process, where rules are checked one by one until a matching rule is found. When a match is found, the process stops, and your preference is applied. If no matching rule is found, the option will be validated."}),"\n",(0,t.jsxs)(n.p,{children:["To determine matches, the plugin uses the ",(0,t.jsx)(n.code,{children:"clientTokens"})," field, which identifies the provider and helps filter which business rules can be applied to the request you send."]}),"\n",(0,t.jsx)(n.h2,{id:"preference-plugin-workflow",children:"Preference Plugin Workflow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Starts getting all the args set by the client in the query, like options, parameters (primaryKey among others), client tokens, etc."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Gets the rules stored in database which will establish which options will be added or discarted based on several factors as % of tolerance of the price, options status, hotelcodes, supplier, etc."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Builds a group function which will help to clasify the options slice in n different groups based on the primary key established in the query by the client and the rules stored in the data base (ftp preference file).Sorts the options in price order (from cheap to expensive)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Go over each option and group them by primary key index. However not all the options will be filled in these aggrupations. This is where the rules come into play.\nTo determine if an option will be discarted or not we have to check the group function which does the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If it is the first option in the pk index, this option will be automatically added."}),"\n",(0,t.jsx)(n.li,{children:"If the rule says that the competitors has to be discarted, all the options of that pk index will be discarted except for the first (the cheapest)."}),"\n",(0,t.jsx)(n.li,{children:"If it isnt the first option and there aren\u2019t any rule that matches the option, this option will be discarted."}),"\n",(0,t.jsx)(n.li,{children:"If it isnt the first option and the price is higher than the tolerance % established in the rules for that pk index, the option will also be discarted."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"With the resulting options grouped by pk indexes, finally collects all of them and return them to the service process which has used the plugin."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Some examples:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Percentage = 1, Supplier A: 126 \u20ac, Supplier B: 125 \u20ac"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"126 - 126 * 0.01 = 124,74 < 125 \u20ac, then the selected one is supplier A\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Percentage = 1, Supplier A: 128 \u20ac, Supplier B: 125 \u20ac"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"128 - 128 * 0.01 = 126.72> 125 \u20ac, then the selected one is supplier B\n"})}),"\n",(0,t.jsx)(n.p,{children:"To get started with the Preference plugin, follow these simple steps:"}),"\n",(0,t.jsx)(n.h2,{id:"1-create-and-upload-your-preference-file",children:"1. Create and Upload your Preference File"}),"\n",(0,t.jsx)(n.p,{children:"To get started, create your preference file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."}),"\n",(0,t.jsx)(r,{children:(0,t.jsxs)(n.p,{children:["\ud83d\udcc1F0  _0000",(0,t.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0 \ud83d\udcc1HotelX_0000",(0,t.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1BusinessRules",(0,t.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,t.jsxs)(n.strong,{children:["\ud83d\udcc4",(0,t.jsx)(n.a,{href:"https://storage.travelgate.com/docs/BuyerContext_sequential_preference.csv",children:"BuyerContext_sequential_preference.csv"})]})]})}),"\n",(0,t.jsx)(n.h3,{id:"file-format-specification",children:"File Format Specification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"File Name:"})," BuyerContext_sequential_preference.csv"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Directory:"})," F0_0000/HotelX0000/BusinessRules"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Delimiter:"})," Comma (",(0,t.jsx)(n.code,{children:","}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Header Row:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RuleId (mandatory):"})," Rule identifier"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ClientTokens (mandatory):"})," Identifier provided by the client that is used to filter which business rules can be applied for the sent request","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SupplierCodes (mandatory):"})," Supplier codes you want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NotSupplierCodes (mandatory):"})," Supplier codes you don't want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BookingDateFrom:"})," Booking date (yyyy-mm-dd)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BookingDateTo:"})," Booking date to (yyyy-mm-dd)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"StartDateFrom:"})," Start date from (yyyy-mm-dd)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"StartDateTo:"})," Start date to (yyyy-mm-dd)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HotelCodes:"})," Hotel codes you want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NothotelCodes:"})," Hotel codes you don't want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ChainsCodes:"})," Chain codes you want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NotChainCodes:"})," Chain codes you don't want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DestinationCodes:"})," Destination codes you want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NotDestinationCodes:"})," Destination codes you don't want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Status:"})," Option status (OK, RQ) you want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NotStatus:"})," Option status (OK, RQ) you don't want the preference to be applied to.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Separator for multiples codes in the same row: Semicolon ",(0,t.jsx)(n.code,{children:";"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Percentage (mandatory):"})," Commission value, decimal separator must be point ",(0,t.jsx)(n.code,{children:"."})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FilterCompetitors (mandatory):"})," Filter competitors"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"}),(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]}),"\n",(0,t.jsx)(n.h2,{id:"2-execute-preference-plugin-in-your-query",children:"2. Execute Preference Plugin in your Query"}),"\n",(0,t.jsxs)(n.p,{children:["Once you've uploaded your preference file, to use the plugin add the following field to the ",(0,t.jsx)(n.code,{children:"settings"})," node of your request. Note that preference plugin can just be executed in search query. In order to successfully execute the preference plugin, you will need to create the request with the following variables."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"step"})}),': "RESPONSE"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"type"})}),': "PRE_STEP"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})}),': "preference"']}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'"settings": {\n\t"plugins": [\n\t\t{\n\t\t\t"step": "RESPONSE",\n\t\t\t"pluginsType": {\n\t\t\t\t"type": "PRE_STEP",\n\t\t\t\t"name": "preference"\n\t\t\t}\n\t\t}\n\t]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44808:(e,n,r)=>{var t=r(11504),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,s={},d=null,a=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:a,props:s,_owner:l.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},17624:(e,n,r)=>{e.exports=r(44808)},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>o});var t=r(11504);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);