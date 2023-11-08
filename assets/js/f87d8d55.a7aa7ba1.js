"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32579],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=l.createContext({}),s=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(u,".").concat(k)]||d[k]||c[k]||r;return n?l.createElement(m,i(i({ref:e},p),{},{components:n})):l.createElement(m,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},57883:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const r={sidebar_position:11},i="Virtual Credit Card",o={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",title:"Virtual Credit Card",description:"Virtual Credit Card plugin adds the possibility to:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Safety Margin",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin"},next:{title:"Search by Destination",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination"}},u={},s=[{value:"1.Create and Upload your GenVCC File",id:"1create-and-upload-your-genvcc-file",level:2},{value:"File format specification",id:"file-format-specification",level:3},{value:"2. Execute Virtual Credit Card Plugin in your Mutation",id:"2-execute-virtual-credit-card-plugin-in-your-mutation",level:2},{value:"GenVCC",id:"genvcc",level:3},{value:"CanVCC",id:"canvcc",level:3}],p=(d="BrowserWindow",function(t){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)});var d;const c={toc:s},k="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtual-credit-card"},"Virtual Credit Card"),(0,a.kt)("p",null,"Virtual Credit Card plugin adds the possibility to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create a virtual credit card (VCCGen):")," The VCC generator plugin empowers Buyers to generate virtual credit cards featuring activation and expiration dates of their choosing. You can apply rules using the ",(0,a.kt)("inlineCode",{parentName:"p"},"genvcc.csv")," rules file to determine whether or not to utilize a specific VCC. This decision is based on the rules defined within the file and the parameters specified in the request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cancel a virtual credit card (VCCCan):")," The VCC cancel plugin is responsible for cancelling a virtual credit card identified by the id returned in the book response. The service will return the status of the payment card inside status field. This plugin should be utilized exclusively within the ",(0,a.kt)("a",{parentName:"p",href:"../booking-management/cancel"},"Cancel")," operation, contingent on the successful completion of the booking cancellation. To specify the virtual credit card to be used for cancellation, a rule that returns an access key will be employed, utilizing the same rule file as the VCC generator. You can establish rules within the ",(0,a.kt)("inlineCode",{parentName:"p"},"genvcc.csv")," rule file to determine the utilization of a particular VCC based on rules within the file and request parameters."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In order to activate this payment type for your connection or connections, open a ",(0,a.kt)("a",{parentName:"p",href:"https://app.travelgatex.com/tickets"},"ticket")," to our dedicated Customer Care team.")),(0,a.kt)("p",null,"To get started with the VCC plugin, follow these simple steps:"),(0,a.kt)("h2",{id:"1create-and-upload-your-genvcc-file"},"1.Create and Upload your GenVCC File"),(0,a.kt)("p",null,"To get started, create your credit card file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,a.kt)(p,{mdxType:"BrowserWindow"},(0,a.kt)("p",null,"\ud83d\udcc1F0  _0000",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,a.kt)("strong",{parentName:"p"},"\ud83d\udcc4",(0,a.kt)("a",{parentName:"strong",href:"https://storage.travelgate.com/docs/BuyerContext_sequential_genvcc.csv"},"BuyerContext_sequential_genvcc.csv")))),(0,a.kt)("h3",{id:"file-format-specification"},"File format specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File Name:")," BuyerContext_sequential_genvcc.csv"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX0000/BusinessRules"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,a.kt)("inlineCode",{parentName:"li"},","),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Header Row:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IdRule:")," Rule\u2019s identifier"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ClientToken:")," List of ClientTokens allowed for this rule"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NoClientToken:")," List of ClientTokens not allowed for this rule"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supplier:")," List of hotel Suppliers allowed for this rule"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NoSupplier:")," List of hotel Suppliers not allowed for this rule"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hotels:")," List of hotels for this rule which codes are in Context_Source context"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NotHotels:")," List of hotels not allowed for this rule which codes are in Context_Source context"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access:")," Access that will be selected if this rule is matched to generate/cancel card"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NoAccess")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CardType:")," CardType that will be used to generate the virtual credit card"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VccAccess"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"List of available card types"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("strong",null,"Codes")),(0,a.kt)("th",null,(0,a.kt)("strong",null,"Names")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"VI"),(0,a.kt)("td",null,"Visa")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"AX"),(0,a.kt)("td",null,"American Express")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"BC"),(0,a.kt)("td",null,"BC Card")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CA"),(0,a.kt)("td",null,"MasterCard")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CB"),(0,a.kt)("td",null,"Carte Blanche")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CU"),(0,a.kt)("td",null,"China Union Pay")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DS"),(0,a.kt)("td",null,"Discover")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DC"),(0,a.kt)("td",null,"Diners Club")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"T"),(0,a.kt)("td",null,"Carta Si")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"R"),(0,a.kt)("td",null,"Carte Bleue")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"Dankort")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"L"),(0,a.kt)("td",null,"Delta")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"E"),(0,a.kt)("td",null,"Electron")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JC"),(0,a.kt)("td",null,"Japan Credit Bureau")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TO"),(0,a.kt)("td",null,"Maestro")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"S"),(0,a.kt)("td",null,"Switch")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EC"),(0,a.kt)("td",null,"Electronic Cash")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EU"),(0,a.kt)("td",null,"EuroCard")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"TP"),(0,a.kt)("td",null,"Universal air travel card")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"OP"),(0,a.kt)("td",null,"Optima")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ER"),(0,a.kt)("td",null,"Air Canada/RnRoute")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"XS"),(0,a.kt)("td",null,"Access")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"O"),(0,a.kt)("td",null,"Others"))))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Bear in mind that this file is a collection of rules and we chose in every Book ",(0,a.kt)("strong",{parentName:"p"},"the first rule that matches the criteria sent in the Query"),". You should specify the more restrictive rules on the top of the file. If there is no value for any rule criteria row, it means that any value in the request matches this row. It is important to indicate the contexts used in values on the rule criteria to improve rule matching.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))),(0,a.kt)("h2",{id:"2-execute-virtual-credit-card-plugin-in-your-mutation"},"2. Execute Virtual Credit Card Plugin in your Mutation"),(0,a.kt)("h3",{id:"genvcc"},"GenVCC"),(0,a.kt)("p",null,"Once you've uploaded your genvcc file, to use the plugin add the following field to the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that genvcc plugin can just be executed in ",(0,a.kt)("inlineCode",{parentName:"p"},"book")," ",(0,a.kt)("inlineCode",{parentName:"p"},"mutation"),". In order to successfully execute the genvcc plugin, you will need to create the request with the following variables."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"step")),': "REQUEST"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"type")),': "PRE_STEP"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"name")),': "genvcc"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"parameters")),":")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value (if not sent)"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"activationDate")),(0,a.kt)("td",{parentName:"tr",align:null},"yyyy/mm/dd"),(0,a.kt)("td",{parentName:"tr",align:null},"Represents the date when the virtual credit card will be activated"),(0,a.kt)("td",{parentName:"tr",align:null},"Same day as the book"),(0,a.kt)("td",{parentName:"tr",align:null},"NO")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"expirationDate")),(0,a.kt)("td",{parentName:"tr",align:null},"yyyy/mm/dd"),(0,a.kt)("td",{parentName:"tr",align:null},"Represents the date when the virtual credit card will expire"),(0,a.kt)("td",{parentName:"tr",align:null},"One month after check in"),(0,a.kt)("td",{parentName:"tr",align:null},"NO")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"useGross")),(0,a.kt)("td",{parentName:"tr",align:null},"true or false"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to choose the origin of the card amount. The option\u2019s gross or the net."),(0,a.kt)("td",{parentName:"tr",align:null},"Net option\u2019s value"),(0,a.kt)("td",{parentName:"tr",align:null},"NO")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "REQUEST",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "genvcc"\n                "parameters": [\n                        {\n                            "key": "activationDate",\n                            "value": "yyyy/mm/dd"\n                        },\n                        {\n                            "key": "expirationDate",\n                            "value": "yyyy/mm/dd"\n                        },\n                        {\n                            "key" : "useGross",\n                            "value" : "true"\n                        }\n                    ]\n            }\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"canvcc"},"CanVCC"),(0,a.kt)("p",null,"In the case of canvcc, since it is a cancellation, there is no need to upload any file. You just have to indicate it in the request. Please note that the canvcc plugin can only be executed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," ",(0,a.kt)("inlineCode",{parentName:"p"},"mutation"),". To successfully execute the canvcc plugin, you will need to create the request with the following variables."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"step")),": ",(0,a.kt)("inlineCode",{parentName:"li"},"RESPONSE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"type")),": ",(0,a.kt)("inlineCode",{parentName:"li"},"PRE_STEP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"name")),": ",(0,a.kt)("inlineCode",{parentName:"li"},"canvcc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"parameters")),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"id")),": The id of the virtual credit card that you want to cancel.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "RESPONSE",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "canvcc"\n                "parameters": [\n                        {\n                            "key": "id",\n                            "value": "virtualCreditCardID"\n                        }\n                    ]\n            }\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);