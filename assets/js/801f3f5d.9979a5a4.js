"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77496],{67546:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),l=n(10748),r=n(43518),o=n(33190),c=n(51048),u=n(36136),s=n(23264);let i=null;i=u.Z.canUseDOM?(0,r.n)({url:"https://api.travelgatex.com/"}):null;const m=(0,s.Z)((e=>{let{token:t,query:n,variables:r}=e;const u=(0,c.Z)(),[s,m]=(0,a.useState)('{\n        "Authorization": "Apikey test0000-0000-0000-0000-000000000000"\n    }');return(0,a.useEffect)((()=>{t&&m(`{"Authorization": "Bearer ${t}"}`)}),[t]),a.createElement(a.Fragment,null,u&&i&&a.createElement(l.Z,{fallback:a.createElement("div",null,"Loading...")},(()=>a.createElement(a.Fragment,null,a.createElement(o.yB,{fetcher:i,headers:s,query:n??"\n    query {\n      hotelX {\n        hotels(criteria: {access: 7245}, relay: {}) {\n          edges {\n            node {\n              hotelData {\n                hotelName\n                hotelCode\n                categoryCode\n                location {\n                  city\n                  country\n                  coordinates {\n                    latitude\n                    longitude\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n",variables:r??"",onTabChange:e=>(e.tabs=[],!1)},a.createElement(o.yB.Logo,null,a.createElement(a.Fragment,null)))))))}))},15081:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(67294),l=(n(10748),n(39962)),r=n(3874),o=n(43518),c=(n(33190),n(51048)),u=n(36136),s=n(23264),i=n(67546);let m=null;m=u.Z.canUseDOM?(0,o.n)({url:"https://api.travelgatex.com/"}):null;const d=(0,s.Z)((e=>{const{siteConfig:t}=(0,l.Z)();(0,c.Z)();return a.createElement(r.Z,{title:t.title,description:"GraphQL Explorer"},a.createElement("div",{className:"g-playground"},a.createElement(i.Z,e)))}))}}]);