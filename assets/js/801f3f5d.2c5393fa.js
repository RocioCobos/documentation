"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15782],{39285:(e,t,n)=>{n.d(t,{A:()=>d});var l=n(96540),a=n(78478),r=n(48126),c=n(34020),o=n(92303),s=n(38193),i=n(27549);let u=null;u=s.A.canUseDOM?(0,r.a)({url:"https://api.travelgatex.com/"}):null;const d=(0,i.A)((e=>{let{token:t,query:n,variables:r}=e;const s=(0,o.A)(),[i,d]=(0,l.useState)('{\n    "Authorization": "Apikey test0000-0000-0000-0000-000000000000"\n}'),[m,g]=(0,l.useState)(r);return(0,l.useEffect)((()=>{t&&d(`{"Authorization": "Bearer ${t}"}`)}),[t]),(0,l.useEffect)((()=>{r&&g(function(e,t){const n=JSON.parse(e);return n?.settings?.client?(n.settings.client=t,JSON.stringify(n,null,2)):e}(r,localStorage.getItem("client")??"client_demo"))}),[r]),l.createElement(l.Fragment,null,s&&u&&l.createElement(a.A,{fallback:l.createElement("div",null,"Loading...")},(()=>l.createElement(l.Fragment,null,l.createElement(c.Jd,{fetcher:u,headers:i,query:n??"\n    query {\n      hotelX {\n        hotels(criteria: {access: 7245}) {\n          edges {\n            node {\n              hotelData {\n                hotelName\n                hotelCode\n                categoryCode\n                location {\n                  city\n                  country\n                  coordinates {\n                    latitude\n                    longitude\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n",variables:m??"",onTabChange:e=>(e.tabs=[],!1)},l.createElement(c.Jd.Logo,null,l.createElement(l.Fragment,null)))))))}))},80275:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(96540),a=(n(78478),n(44586)),r=n(91922),c=n(48126),o=(n(34020),n(92303)),s=n(38193),i=n(27549),u=n(39285);let d=null;d=s.A.canUseDOM?(0,c.a)({url:"https://api.travelgatex.com/"}):null;const m=(0,i.A)((e=>{const{siteConfig:t}=(0,a.A)();(0,o.A)();return l.createElement(r.A,{title:t.title,description:"GraphQL Explorer"},l.createElement("div",{className:"g-playground"},l.createElement(u.A,e)))}))}}]);