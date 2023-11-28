"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),i=n(86010),a=n(53438),o=n(39960),l=n(13919),s=n(95999);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",p.cardContainer)},n)}function c(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",p.cardTitle),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",p.cardDescription),title:o},o))}function d(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(c,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(c,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},54745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),a=n(52991),o=n(53438);const l={sidebar_position:1},s="Overview",p={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview",title:"Overview",description:"Hotel-X offers a versatile feature: customizable Plugins! These plugins enable you to seamlessly integrate your unique business logic, eliminating the need for complex implementations. With Plugins, you can easily fine-tune your requests and responses as your business expands, simplifying the management of responses from various suppliers.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Amend Remarks",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-remarks"},next:{title:"Mapping",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping"}},u={},c=[{value:"FTP Files",id:"ftp-files",level:2},{value:"FTP Endpoint",id:"ftp-endpoint",level:3},{value:"Directory Format",id:"directory-format",level:3},{value:"Upload FTP Data",id:"upload-ftp-data",level:3},{value:"Update FTP Data",id:"update-ftp-data",level:3},{value:"Delete FTP Data",id:"delete-ftp-data",level:3},{value:"How to Execute a Plugin",id:"how-to-execute-a-plugin",level:2}],d=(m="BrowserWindow",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var m;const f={toc:c},h="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Hotel-X offers a versatile feature: customizable Plugins! These plugins enable you to seamlessly integrate your unique business logic, eliminating the need for complex implementations. With Plugins, you can easily fine-tune your requests and responses as your business expands, simplifying the management of responses from various suppliers.\nFor instance, you can customize currency exchange, establish blacklists for hotels based on different criteria, or exclusively receive the cheapest option for each meal plan."),(0,i.kt)(a.Z,{items:(0,o.jA)().items.filter(((e,t)=>t>0)),mdxType:"DocCardList"}),(0,i.kt)("p",null,"To utilize these plugins, simply add and configure the one that suits your needs in your requests. In some cases, you may be required to upload a specific file to your FTP account, which we provide."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There's an option to load default plugins into our database. To explore this, kindly contact our dedicated Customer Care team to initiate the process by ",(0,i.kt)("a",{parentName:"p",href:"https://app.travelgatex.com/tickets"},"opening a ticket"),". These default plugins will automatically execute in all your Queries and Mutations when you haven't specified any filters. Enjoy the convenience!")),(0,i.kt)("h2",{id:"ftp-files"},"FTP Files"),(0,i.kt)("p",null,"Upon receiving your Onboarding Welcome Pack, you will be granted access credentials to the FTP server. In the event that you need assistance or have not received your credentials, kindly ",(0,i.kt)("a",{parentName:"p",href:"https://app.travelgatex.com/tickets"},"open a ticket")," to our Customer Care team to obtain your FTP credentials and initiate your journey."),(0,i.kt)("h3",{id:"ftp-endpoint"},"FTP Endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ftp://ftp.xmltravelgate.com\n")),(0,i.kt)("h3",{id:"directory-format"},"Directory Format"),(0,i.kt)("p",null,"The structure of the directory should be in the below format, all files should be inside this directory:"),(0,i.kt)(d,{mdxType:"BrowserWindow"},(0,i.kt)("p",null,"\ud83d\udcc1F","[Folder code]","_","[Unique code]",(0,i.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX  _","[Unique code]")),(0,i.kt)("p",null,"F","[Folder code]","_","[Unique code]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Folder code: corresponds to the folder number."),(0,i.kt)("li",{parentName:"ul"},"Unique code: corresponds to the folder unique code in our system.")),(0,i.kt)("p",null,"HotelX_","[Unique code]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unique code: corresponds to the Hotel-X unique code in our system.")),(0,i.kt)("p",null,"Example: "),(0,i.kt)(d,{mdxType:"BrowserWindow"},(0,i.kt)("p",null,"\ud83d\udcc1F0_1781",(0,i.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_1790")),(0,i.kt)("h3",{id:"upload-ftp-data"},"Upload FTP Data"),(0,i.kt)("p",null,"To upload an FTP file, follow these simple steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Upload the File:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Once you've decided on the plugin you want to use, and if it's necessary, simply upload the required CSV file."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Wait for Processing:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Once you've uploaded the file, our system will take care of the rest."),(0,i.kt)("li",{parentName:"ul"},'We\'ll automatically add the "_processed" tagline to the end of the file name when the processing is complete.')),(0,i.kt)("p",{parentName:"li"},"For example, if you uploaded a file for hotel mapping plugin with the name:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"BuyerContext_SupplierContext_hotel_map_.csv\n")),(0,i.kt)("p",{parentName:"li"},"After our system processes it, it will look like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"BuyerContext_SupplierContext_hotel_map_processed.csv\n")))),(0,i.kt)("h3",{id:"update-ftp-data"},"Update FTP Data"),(0,i.kt)("p",null,"To update an FTP file, follow these simple steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If you need to update the information in the file, simply delete the old file."),(0,i.kt)("li",{parentName:"ol"},"Upload the new file with the updated information, using the correct name. You don't need to add the \"",(0,i.kt)("em",{parentName:"li"},"processed"),"\" tagline to the name; we'll take care of that on our end.")),(0,i.kt)("p",null,"That's it! Updating FTP files is as easy as that."),(0,i.kt)("h3",{id:"delete-ftp-data"},"Delete FTP Data"),(0,i.kt)("p",null,"To delete all the information stored in our system, follow these straightforward steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Prepare an empty file:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create a new file with empty content, including only the headers."),(0,i.kt)("li",{parentName:"ul"},"Ensure that the file structure, such as column headers, remains intact."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Load the empty file in the FTP folder.")))),(0,i.kt)("p",null,"That's it! By replacing the existing data with an empty file containing headers only, you effectively delete all the information previously loaded into our system."),(0,i.kt)("h2",{id:"how-to-execute-a-plugin"},"How to Execute a Plugin"),(0,i.kt)("p",null,"To execute the plugins, in some cases it is enough to upload the file to the FTP, in other cases you just have to indicate it in the request, and in some cases both actions need to be done, uploading the file to the FTP and indicating it in the request."),(0,i.kt)("p",null,'In each of the plugins, you will see a section called "',(0,i.kt)("em",{parentName:"p"},"Execute plugin in your request"),'", where it will be indicated how to execute that specific plugin.'))}y.isMDXComponent=!0}}]);