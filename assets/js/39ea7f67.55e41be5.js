/*! For license information please see 39ea7f67.55e41be5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3043],{1749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),o=n(28453);const s={sidebar_position:8},r="Hotel-X API Credentials",a={id:"our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials",title:"Hotel-X API Credentials",description:"Review your API Key, Clients, Accesses and Contexts.",source:"@site/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials.md",sourceDirName:"our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api",slug:"/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/hotel-x-credentials",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"kbSidebar",previous:{title:"Hotel-X API Languages",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/what-languages-does-hotel-x-api-support"},next:{title:"Connections Settings",permalink:"/kb/our-products/are-you-a-buyer/getting-started-with-hotel-x-buyers-api/connections-settings"}},c={},l=[{value:"Review your API Key, Clients, Accesses and Contexts.",id:"review-your-api-key-clients-accesses-and-contexts",level:2},{value:"Apikey\u2611\ufe0f",id:"apikey\ufe0f",level:3},{value:"Access\u2611\ufe0f",id:"access\ufe0f",level:3},{value:"Client\u2611\ufe0f",id:"client\ufe0f",level:3},{value:"Context\u2611\ufe0f",id:"context\ufe0f",level:3},{value:"What is the difference between access and context?\ud83d\udca1",id:"what-is-the-difference-between-access-and-context",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"hotel-x-api-credentials",children:"Hotel-X API Credentials"}),"\n",(0,i.jsx)(t.h2,{id:"review-your-api-key-clients-accesses-and-contexts",children:"Review your API Key, Clients, Accesses and Contexts."}),"\n",(0,i.jsx)(t.p,{children:"Once you have configured your account, you can access our APP and check your Hotel-X credentials and accesses by following this simple guide:"}),"\n",(0,i.jsx)(t.h3,{id:"apikey\ufe0f",children:"Apikey\u2611\ufe0f"}),"\n",(0,i.jsxs)(t.p,{children:["An Apikey is a unique alphanumeric code that serves as a form of authentication required for accessing Hotel-X API. This key must be included in the HTTP Authorization request header to verify and authenticate the user agent with the server. It acts as a secure identifier, ensuring that only authorized users can make requests and access the API's functionalities. You can find your Apikey (",(0,i.jsx)(t.strong,{children:"encrypted"}),") and generate new ones in section Connections > ",(0,i.jsx)(t.a,{href:"https://app.travelgatex.com/connections/settings",children:"API Settings"}),"."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["APP access: Log in with your credentials ",(0,i.jsx)(t.a,{href:"https://www.travelgatex.com/",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:['Connections: Click on "Connections" in the top menu. Then, click on "',(0,i.jsx)(t.a,{href:"https://app.travelgatex.com/connections/settings",children:"API Settings"}),'".']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["API Settings: List of API Keys associated with your Organization (encrypted). Simply click in the ",(0,i.jsx)(t.a,{href:"/kb/connections/api-settings/connections-settings",children:'"You can manage your API Keys here"'})," in the yellow callout in order to visualize this information. Please note that API Keys cannot be retrieved; therefore, ensure you keep a record of yours once created."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Please keep in mind that the Apikey will remain consistent across both test and production environments."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"access\ufe0f",children:"Access\u2611\ufe0f"}),"\n",(0,i.jsxs)(t.p,{children:["An access refers to the combination of credentials and authentication configuration that allows a Buyer to establish a connection with a Seller. It serves the purpose of distinguishing between different Sellers and filtering different credentials and configurations from the same Seller (e.g., B2B and B2C feeds). You can check this information in ",(0,i.jsx)(t.a,{href:"https://app.travelgatex.com/connections/myconnections",children:"My Connections"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["For ",(0,i.jsx)(t.strong,{children:"Hotel-X implementation and testing"}),", we recommend using the following accesses (they have already been activated on your account and are ready to use):"]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"TravelgateX Test Seller (tgx): Access 2 with context HOTELTEST"}),"\n",(0,i.jsx)(t.li,{children:"Smyrooms Test: Access 5647 with context LOGITEST"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How can I obtain an access code from an actual Seller?"}),"\nTo get your access code, simply establish a commercial agreement with the desired Partner and request activation through our website using the ",(0,i.jsx)(t.a,{href:"/kb/connections/my-connections/guick-guide-to-auto-activations",children:"Auto-Activations Form"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Please note it is highly advisable to ",(0,i.jsx)(t.strong,{children:"avoid making live bookings during the Hotel-X implementation process"})," until your development has been certified by TravelgateX."]})}),"\n",(0,i.jsx)(t.h3,{id:"client\ufe0f",children:"Client\u2611\ufe0f"}),"\n",(0,i.jsx)(t.p,{children:"A client refers to a party that buys accommodation services through the Hotel-X API implementation. Client codes remain consistent throughout all TravelgateX implementations and they are used to identify the business that is making the request and to confirm that they have a configuration assigned to it."}),"\n",(0,i.jsxs)(t.p,{children:["It is possible to have multiple client codes, for instance, in order to differentiate traffic between B2B and B2C credentials (e.g., client_b2b, client_b2c). As all accesses are compatible with any of your client codes, it is important to use the appropriate one according to your needs. You can find this information in your ",(0,i.jsx)(t.a,{href:"/kb/connections/api-settings/connections-settings",children:"API Settings"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"context\ufe0f",children:"Context\u2611\ufe0f"}),"\n",(0,i.jsx)(t.p,{children:"Context refers to the content codes utilized by both Buyers and Sellers. Each Seller has its own unique context, which may differ between test and production environments. The context includes specific codes for hotels, boards, rooms, etc."}),"\n",(0,i.jsxs)(t.p,{children:["Buyers also have the flexibility to either use their own context or choose content providers. In either case, they can create their own context using our ",(0,i.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",children:"Mapping Plugin"}),". This allows Buyers to align their own context with the Suppliers' context."]}),"\n",(0,i.jsxs)(t.p,{children:['To access the context, simply navigate to the Connections menu and click on "My Connections".\n',(0,i.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/hotelx-credentials-new-updated-2.jpg",alt:"hotelx-credentials-new-updated-2"})]}),"\n",(0,i.jsx)(t.p,{children:"Then, select the Seller and the information will be displayed."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/hotelx-credentials-new-updated-3.jpg",alt:"hotelx-credentials-new-updated-3"})}),"\n",(0,i.jsx)(t.p,{children:"When you activate a new Seller, the context information will be provided to you along with the credentials in the confirmation email."}),"\n",(0,i.jsx)(t.h3,{id:"what-is-the-difference-between-access-and-context",children:"What is the difference between access and context?\ud83d\udca1"}),"\n",(0,i.jsx)(t.p,{children:"The distinction between the two is that an access holds your credentials for a specific connection, while a context is the internal TravelgateX code required to request either the original Supplier hotel codes or your own hotel codes (previously mapped and uploaded to our FTP)."}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:["Feel free to check our ",(0,i.jsx)(t.a,{href:"/docs/get-started/key-concepts",children:"Hotel-X Buyers API Documentation"})," for additional information on Hotel-X credentials."]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,t,n)=>{var i=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);