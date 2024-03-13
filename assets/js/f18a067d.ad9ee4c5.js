/*! For license information please see f18a067d.ad9ee4c5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14616],{82408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=n(17624),i=n(4552);const r={sidebar_position:2},s="Mapping",a={id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",title:"Mapping",description:"Mapping plugin serves to convert either the Supplier's native codes to the Buyer's codes or vice versa.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview"},next:{title:"Blacklist",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist"}},l={},p=[{value:"1. Create and Upload your Mapping File",id:"1-create-and-upload-your-mapping-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3},{value:"2. Execute Mapping plugin in your query",id:"2-execute-mapping-plugin-in-your-query",level:2},{value:"Option 1: Mapping only with Buyer context and FTP files",id:"option-1-mapping-only-with-buyer-context-and-ftp-files",level:4},{value:"Option 2: Mapping with mixed contexts for specific entities",id:"option-2-mapping-with-mixed-contexts-for-specific-entities",level:4}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{BrowserWindow:n,Details:r}=t;return n||u("BrowserWindow",!0),r||u("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"mapping",children:"Mapping"}),"\n",(0,o.jsx)(t.p,{children:"Mapping plugin serves to convert either the Supplier's native codes to the Buyer's codes or vice versa.\nTo do this, you need a file that shows how the Buyer's and Seller's codes relate, so our system can do the conversion automatically."}),"\n",(0,o.jsx)(t.p,{children:"This feature includes Hotel Map, Board Map, Room Map, Rate Map, Amenity Map, Promotion Map and Room Description Map categories."}),"\n",(0,o.jsx)(t.admonition,{title:"Keep in mind",type:"warning",children:(0,o.jsx)(t.p,{children:"Please be aware that by default, options where board, rates, or room codes maps are not found will still be returned with the supplier's original code. If you would rather not receive options in your search results where those entities couldn't be mapped, please reach out to our team to configure it from our side."})}),"\n",(0,o.jsx)(t.p,{children:"To get started with the Mapping plugin, follow these simple steps:"}),"\n",(0,o.jsx)(t.h2,{id:"1-create-and-upload-your-mapping-file",children:"1. Create and Upload your Mapping File"}),"\n",(0,o.jsx)(t.p,{children:"To get started, create your mapping file for the desired entity (hotel, board, room...) in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."}),"\n",(0,o.jsx)(n,{children:(0,o.jsxs)(t.p,{children:["\ud83d\udcc1F0  _0000",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0 \ud83d\udcc1HotelX  _0000",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Maps",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Hotel",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,o.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,o.jsx)(t.a,{href:"https://storage.travelgate.com/docs/BuyerContext_SupplierContext_hotel_map.csv",children:"BuyerContext_SupplierContext_hotel_map.csv"})]}),(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Board",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,o.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,o.jsx)(t.a,{href:"https://storage.travelgate.com/docs/BuyerContext_SupplierContext_board_map.csv",children:"BuyerContext_SupplierContext_board_map.csv"})]}),(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Room",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,o.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,o.jsx)(t.a,{href:"https://storage.travelgate.com/docs/BuyerContext_SupplierContext_room_map.csv",children:"BuyerContext_SupplierContext_room_map.csv"})]}),(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Rate",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,o.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,o.jsx)(t.a,{href:"https://storage.travelgate.com/docs/BuyerContext_SupplierContext_rate_map.csv",children:"BuyerContext_SupplierContext_rate_map.csv"})]}),(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Amenity",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,o.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,o.jsx)(t.a,{href:"https://storage.travelgate.com/docs/BuyerContext_SupplierContext_amenity_map.csv",children:"BuyerContext_SupplierContext_amenity_map.csv"})]}),(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Promotion",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,o.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,o.jsx)(t.a,{href:"https://storage.travelgate.com/docs/BuyerContext_SupplierContext_promotion_map.csv",children:"BuyerContext_SupplierContext_promotion_map.csv"})]}),(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \ud83d\udcc1Room description",(0,o.jsx)(t.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 ",(0,o.jsxs)(t.strong,{children:["\ud83d\udcc4",(0,o.jsx)(t.a,{href:"https://storage.travelgate.com/docs/BuyerContext_SupplierContext_roomdescription_map.csv",children:"BuyerContext_SupplierContext_roomdescription_map.csv"})]})]})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"You should create one file for each supplier that you want to map an entity."})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["If you need assistance with requesting your credentials to access the FTP server, determining the endpoint and directory format, or learning how to upload, update, and delete FTP files, please refer to the ",(0,o.jsx)(t.a,{href:"../plugins/overview",children:"overview"})," section of Plugins."]})}),"\n",(0,o.jsx)(t.h3,{id:"file-format-specification",children:"File Format Specification"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"File Name:"})," BuyerContext_SupplierContext_entity_map.csv"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Directory:"})," F0_0000/HotelX_0000/Maps/[entity]"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Delimiter:"})," Comma (",(0,o.jsx)(t.code,{children:","}),")"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Header Row:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Buyer Context: Buyer's context code"}),"\n",(0,o.jsxs)(t.li,{children:["Supplier Context: Supplier's (Seller's) context code. This code can be found in the ",(0,o.jsx)(t.a,{href:"https://app.travelgatex.com/connections/myconnections",children:"My Connections"})," section on the Travelgate website."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"\ud83d\udcf9 Learn how to change the format of the csv file in order to edit and save it"}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{children:(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})})]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Can I use a default code for un-mapped Supplier codes?"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:[(0,o.jsx)(t.p,{children:"Imagine you've created a board mapping file for your Supplier's connection, but there are cases where you want to use a consistent code like 'RoomOnly' for meal plans that couldn't be mapped or for new board codes added by the supplier.\nTo achieve this, you can utilize the 'Default Code' feature."}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(t.p,{children:"This feature allows you to define a default code for each code in the source (supplier) context. The entities that can have default codes include: Board, Room, Rate, Amenity, Promotion and Room Description.\nTo use this feature, simply add a new row in the BuyerContext column with your default code and place an asterisk (*) in the Supplier context column:"})]}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"Buyer Context, Supplier Context\nRoom Only, RO\nAll Inclusive, AI\nRoom Only, *\n"})})}),(0,o.jsx)(t.p,{children:'In the example above, all the codes of entity board of supplier that are not found in the mapping file, will be "Room Only" in the response.\nPlease note that you can assign only one default code to each Supplier context.'})]})]}),"\n",(0,o.jsx)(t.h2,{id:"2-execute-mapping-plugin-in-your-query",children:"2. Execute Mapping plugin in your query"}),"\n",(0,o.jsx)(t.p,{children:"When working with your search query, you have two distinct ways to implement mapping:"}),"\n",(0,o.jsx)(t.h4,{id:"option-1-mapping-only-with-buyer-context-and-ftp-files",children:"Option 1: Mapping only with Buyer context and FTP files"}),"\n",(0,o.jsx)(t.p,{children:"If your search query's context is defined as your own Buyer context (meaning it differs from the supplier's context), Hotel-X will make an effort to map all entities (such as hotels, boards, etc., excluding amenities and promotions) to align with the query's context."}),"\n",(0,o.jsxs)(t.admonition,{title:"Important",type:"caution",children:[(0,o.jsx)(t.p,{children:"In this scenario, there's no need to specify a plugin in your query. Just provide your own context in the context field and upload the mapping files to your FTP account."}),(0,o.jsx)(t.p,{children:"On the other hand, please note that it's absolutely mandatory to use the plugin in your search query to map amenities and promotions:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'"settings": {\n\t"plugins": [\n\t\t{\n\t\t\t"step": "RESPONSE_OPTION",\n\t\t\t"pluginsType": {\n\t\t\t\t"type": "PRE_STEP",\n\t\t\t\t"name": "amenity_mapX"\n\t\t\t}\n\t\t}\n\t]\n}\n'})}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'"settings": {\n\t"plugins": [\n\t\t{\n\t\t\t"step": "RESPONSE_OPTION",\n\t\t\t"pluginsType": {\n\t\t\t\t"type": "PRE_STEP",\n\t\t\t\t"name": "promotion_mapX"\n\t\t\t}\n\t\t}\n\t]\n}\n'})})]}),"\n",(0,o.jsx)(t.h4,{id:"option-2-mapping-with-mixed-contexts-for-specific-entities",children:"Option 2: Mapping with mixed contexts for specific entities"}),"\n",(0,o.jsx)(t.p,{children:"While you can use either the Supplier's context or your own Buyer's context via FTP files in your search query, you can also mix both contexts for specific entities like boards, amenities, and promotions. For instance, you can keep using the Supplier's context for hotels or rooms but switch to your Buyer context for boards, amenities, and promotions.\nThis approach lets Hotel-X exclusively focus on mapping the entities you've specified in your query."}),"\n",(0,o.jsx)(t.p,{children:"To enable this, just include the plugin in your query. After uploading your mapping file, add the following field to the settings node of your request. To make the most of the mapping plugin, configure the request with the appropriate variables based on the type of mapping you intend to perform:"}),"\n",(0,o.jsx)(t.p,{children:"Remember, you can only change the context for the board, amenity and promotion entities:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"step"})}),': "RESPONSE_OPTION"']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"type"})}),': "PRE_STEP"']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"name"})}),': "{entity}_mapX"']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"parameters"})}),":","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"key"})}),': "context"']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"value"})}),": {BuyerContext}"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'"settings": {\n    "plugins": [\n        {\n            "step": "RESPONSE_OPTION",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "{entity}_mapX",\n                "parameters": [\n                    {\n                        "key": "context",\n                        "value": "{BuyerContext}"\n                    }\n                ]\n            }\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(t.admonition,{title:"Remember",type:"caution",children:(0,o.jsx)(t.p,{children:"Keep in mind that the mapping plugin can only be executed in a search query."})})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44808:(e,t,n)=>{var o=n(11504),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var o,r={},p=null,c=null;for(o in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:i,type:e,key:p,ref:c,props:r,_owner:a.current}}t.Fragment=r,t.jsx=p,t.jsxs=p},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var o=n(11504);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);