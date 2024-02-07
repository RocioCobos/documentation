/*! For license information please see 48705997.44ef4fa2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72740],{66136:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=o(17624),s=o(4552);const t={sidebar_position:5},r="Commission",l={id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision",title:"Commission",description:"Commission plugin defines the contracted/expected commission in cases where the Supplier is not able to send it via integration. The commission loaded in the FTP is considered as a Gross commission, meaning that the commission or profit is already included in the price.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Cheapest Price",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/cheapest-price"},next:{title:"Add Parameter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter"}},c={},d=[{value:"1. Create and Upload your Commission File",id:"1-create-and-upload-your-commission-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3},{value:"Check Some of the Most Common Use Cases",id:"check-some-of-the-most-common-use-cases",level:3},{value:"2.  Execute Commission Plugin in your Request",id:"2--execute-commission-plugin-in-your-request",level:2}];function a(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components},{BrowserWindow:o,Details:t}=i;return o||m("BrowserWindow",!0),t||m("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"commission",children:"Commission"}),"\n",(0,n.jsx)(i.p,{children:"Commission plugin defines the contracted/expected commission in cases where the Supplier is not able to send it via integration. The commission loaded in the FTP is considered as a Gross commission, meaning that the commission or profit is already included in the price."}),"\n",(0,n.jsx)(i.p,{children:"To get started with the Commission plugin, follow these simple steps:"}),"\n",(0,n.jsx)(i.h2,{id:"1-create-and-upload-your-commission-file",children:"1. Create and Upload your Commission File"}),"\n",(0,n.jsx)(i.p,{children:"To get started, create your commission file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."}),"\n",(0,n.jsx)(o,{children:(0,n.jsxs)(i.p,{children:["\ud83d\udcc1F0  _0000",(0,n.jsx)(i.br,{}),"\n","\xa0\xa0\xa0\xa0 \ud83d\udcc1HotelX_0000",(0,n.jsx)(i.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1BusinessRules",(0,n.jsx)(i.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,n.jsxs)(i.strong,{children:["\ud83d\udcc4",(0,n.jsx)(i.a,{href:"https://storage.travelgate.com/docs/BuyerContext_sequential_commission.csv",children:"RequestContext_sequential_commission.csv"})]})]})}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["If you need assistance with requesting your credentials to access the FTP server, determining the endpoint and directory format, or learning how to upload, update, and delete FTP files, please refer to the ",(0,n.jsx)(i.a,{href:"../plugins/overview",children:"overview"})," section of Plugins."]})}),"\n",(0,n.jsx)(i.h3,{id:"file-format-specification",children:"File Format Specification"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"File Name:"})," RequestContext_sequential_commission.csv"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Directory:"})," F0_0000/HotelX0000/BusinessRules"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Delimiter:"})," Comma (",(0,n.jsx)(i.code,{children:","}),")"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Header Row:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"RuleId (mandatory):"})," Unique identifier of the rule (assign one)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"ClientTokens:"})," Client token used for index the rule"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"SupplierCodes (mandatory):"})," List of the supplier codes you want the commission to be applied to.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"NotSupplierCodes (mandatory):"})," List of the supplier codes you don't want the commission to be applied to.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"CreationDateFrom:"})," Start creation date (yyyy-mm-dd)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"CreationDateTo:"})," End creation date (yyyy-mm-dd)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"CheckInFrom:"})," Checkin date (yyyy-mm-dd)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"CheckInTo:"})," Checkout date (yyyy-mm-dd)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"HotelCodes:"})," List of the hotel codes you want the commission to be applied to.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"NothotelCodes:"})," List of the hotel codes you don't want the commission to be applied to.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"ChainsCodes:"})," List of the chain codes you want the commission to be applied to.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"NotChainCodes:"})," List of the chain codes you don't want the commission to be applied to.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"DestinationCodes:"})," List of the destination codes you want the commission to be applied to.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"NotDestinationCodes:"})," List of the destination codes you don't want the commission to be applied to.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Separator for multiples codes in the same row: Semicolon (\u201c;\u201d)"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Percentage (mandatory):"})," Commission value (decimal separator must be point (\u201c.\u201d))"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Force (mandatory):"})," Boolean value true/false","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"True:"})," The rule will be applied if matching all its conditions criteria, regardless of a commission being received or not from the supplier through the integration."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"False:"})," The rule will not be applied despite of matching all its conditions criteria if a commission is received from the supplier through the integration."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.admonition,{title:"File Name",type:"info",children:[(0,n.jsx)(i.p,{children:'"RequestContext" on the file name depends on the context you use in your query:'}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"If you use your own Buyer context (multi mode search) you only need to load 1 file with your context in the name (BuyerContext_sequential_commission.csv)."}),"\n",(0,n.jsx)(i.li,{children:"If you use the Supplier context (single mode search) you will need to load 1 file for each supplier with the Supplier context in the name (SupplierContext_sequential_commission.csv)."}),"\n"]})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]}),"\n",(0,n.jsx)(i.h3,{id:"check-some-of-the-most-common-use-cases",children:"Check Some of the Most Common Use Cases"}),"\n",(0,n.jsx)(i.p,{children:"Here are some common use cases for the Commission plugin, along with the CSV template file to use:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Use Case"}),(0,n.jsx)(i.th,{children:"CSV Template file"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:'File for error \u201c"WRONG_FIELD" - "PLUGIN_ERROR" - some of the options have been discarded because we don\'t know if price is gross or net\u201d'}),(0,n.jsxs)(i.td,{children:["\ud83d\udcc4",(0,n.jsx)(i.a,{href:"https://storage.travelgate.com/docs/BuyerContext_sequential_commission-1.csv",children:"BuyerContext_sequential_commision.csv"})]})]})})]}),"\n",(0,n.jsx)(i.h2,{id:"2--execute-commission-plugin-in-your-request",children:"2.  Execute Commission Plugin in your Request"}),"\n",(0,n.jsx)(i.p,{children:"In the case of the commission plugin, there is no need to indicate it in the requests. Simply uploading the file to the FTP it will start working, no further action is required."})]})}function h(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}function m(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44808:(e,i,o)=>{var n=o(11504),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,i,o){var n,t={},d=null,a=null;for(n in void 0!==o&&(d=""+o),void 0!==i.key&&(d=""+i.key),void 0!==i.ref&&(a=i.ref),i)r.call(i,n)&&!c.hasOwnProperty(n)&&(t[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===t[n]&&(t[n]=i[n]);return{$$typeof:s,type:e,key:d,ref:a,props:t,_owner:l.current}}i.Fragment=t,i.jsx=d,i.jsxs=d},17624:(e,i,o)=>{e.exports=o(44808)},4552:(e,i,o)=>{o.d(i,{I:()=>l,M:()=>r});var n=o(11504);const s={},t=n.createContext(s);function r(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);