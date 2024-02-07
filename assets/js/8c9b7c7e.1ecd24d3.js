/*! For license information please see 8c9b7c7e.1ecd24d3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35008],{32620:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(17624),s=r(4552);const i={sidebar_position:6},a="Add Parameter",o={id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter",title:"Add Parameter",description:"The add parameter plugin allows to add parameters to existing accesses in the configuration. The plugin can be used in all booking services, allowing you to dynamically add parameters during the request time.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Commission",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision"},next:{title:"Currency Converter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter"}},l={},d=[{value:"1. Execute Add Parameter Plugin in your Query",id:"1-execute-add-parameter-plugin-in-your-query",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"add-parameter",children:"Add Parameter"}),"\n",(0,t.jsx)(n.p,{children:"The add parameter plugin allows to add parameters to existing accesses in the configuration. The plugin can be used in all booking services, allowing you to dynamically add parameters during the request time."}),"\n",(0,t.jsx)(n.p,{children:"Additionally, you have the option to replace the value of an existing parameter by adding a parameter with the same key in the query. This allows you to add different parameters to multiple accesses and/or suppliers in the same query."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You don't need to create any files for this plugin. Just specify it in the ",(0,t.jsx)(n.code,{children:"settings"})," > ",(0,t.jsx)(n.code,{children:"plugins"})," field in your search query."]})}),"\n",(0,t.jsx)(n.h2,{id:"1-execute-add-parameter-plugin-in-your-query",children:"1. Execute Add Parameter Plugin in your Query"}),"\n",(0,t.jsxs)(n.p,{children:["To use the plugin add the following field to the ",(0,t.jsx)(n.code,{children:"settings"})," node of your request. Note that add paramenter plugin can be executed in ",(0,t.jsx)(n.code,{children:"search"}),", ",(0,t.jsx)(n.code,{children:"quote"}),", ",(0,t.jsx)(n.code,{children:"book"}),", ",(0,t.jsx)(n.code,{children:"booking"})," and ",(0,t.jsx)(n.code,{children:"cancel"})," requests. In order to successfully execute the add paramenter plugin, you will need to create the request with the following variables."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"step"})}),': "REQUEST_ACCESS"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"type"})}),': "PRE_STEP"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"name"})}),': "add_parameterX"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"parameters"})}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"key"})}),': "parameter_name"']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"value"})}),': "paramenter_value"']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'For example, for a specific search request you need to send an extra parameter "client" with the value "TEST".'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{\n    "settings" : {\n        "plugins" : [\n            {\n                "step" : "REQUEST_ACCESS",\n                "pluginsType" : [\n                    {\n                        "name" : "add_parameterX",\n                        "type" : "POST_STEP",\n                        "parameters" : [\n                            {\n                                "key" : "client",\n                                "value" : "TEST"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},44808:(e,n,r)=>{var t=r(11504),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,c=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},17624:(e,n,r)=>{e.exports=r(44808)},4552:(e,n,r)=>{r.d(n,{I:()=>o,M:()=>a});var t=r(11504);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);