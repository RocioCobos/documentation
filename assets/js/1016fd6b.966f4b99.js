"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67742],{3905:(t,l,n)=>{n.d(l,{Zo:()=>k,kt:()=>m});var e=n(67294);function u(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function a(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function r(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?a(Object(n),!0).forEach((function(l){u(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function s(t,l){if(null==t)return{};var n,e,u=function(t,l){if(null==t)return{};var n,e,u={},a=Object.keys(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||(u[n]=t[n]);return u}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}var i=e.createContext({}),o=function(t){var l=e.useContext(i),n=l;return t&&(n="function"==typeof t?t(l):r(r({},l),t)),n},k=function(t){var l=o(t.components);return e.createElement(i.Provider,{value:l},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},p=e.forwardRef((function(t,l){var n=t.components,u=t.mdxType,a=t.originalType,i=t.parentName,k=s(t,["components","mdxType","originalType","parentName"]),d=o(n),p=u,m=d["".concat(i,".").concat(p)]||d[p]||c[p]||a;return n?e.createElement(m,r(r({ref:l},k),{},{components:n})):e.createElement(m,r({ref:l},k))}));function m(t,l){var n=arguments,u=l&&l.mdxType;if("string"==typeof t||u){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var i in l)hasOwnProperty.call(l,i)&&(s[i]=l[i]);s.originalType=t,s[d]="string"==typeof t?t:u,r[1]=s;for(var o=2;o<a;o++)r[o]=n[o];return e.createElement.apply(null,r)}return e.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31860:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var e=n(87462),u=(n(67294),n(3905));const a={sidebar_position:3},r="HotelRatePlanNotif",s={unversionedId:"apis/for-buyers/channel-x-push-buyers-api/availability-and-rate/hotelrateplannotif",id:"apis/for-buyers/channel-x-push-buyers-api/availability-and-rate/hotelrateplannotif",title:"HotelRatePlanNotif",description:"The HotelRatePlanNotif message contains information about rate prices and supplements. No rate information will be returned except Code, currency and status.",source:"@site/docs/apis/for-buyers/channel-x-push-buyers-api/availability-and-rate/hotelrateplannotif.mdx",sourceDirName:"apis/for-buyers/channel-x-push-buyers-api/availability-and-rate",slug:"/apis/for-buyers/channel-x-push-buyers-api/availability-and-rate/hotelrateplannotif",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/availability-and-rate/hotelrateplannotif",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/channel-x-push-buyers-api/availability-and-rate/hotelrateplannotif.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HotelAvailNotif",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/availability-and-rate/hotelavailnotif"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/overview"}},i={},o=[{value:"<strong>Price per Room</strong>",id:"price-per-room",level:4},{value:"<strong>Price per Pax/Guest</strong> (Standard Occupancy)",id:"price-per-paxguest-standard-occupancy",level:4},{value:"<strong>Price per Occupancy</strong>",id:"price-per-occupancy",level:4},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2}],k={toc:o},d="wrapper";function c(t){let{components:l,...n}=t;return(0,u.kt)(d,(0,e.Z)({},k,n,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"hotelrateplannotif"},"HotelRatePlanNotif"),(0,u.kt)("p",null,"The HotelRatePlanNotif message contains information about rate prices and supplements. No rate information will be returned except Code, currency and status."),(0,u.kt)("p",null,"Our system works with up to ",(0,u.kt)("strong",{parentName:"p"},"3 types of prices: per room, per occupancy and per standard occupancy"),". Although it is unusual that a channel works with more than one, it can happen. If this is the case, the 3 price types can coexist and the system should always return the lowest one at availability response. Also when more than one price is charged for the same day, the newest price will be returned as available price."),(0,u.kt)("h4",{id:"price-per-room"},(0,u.kt)("strong",{parentName:"h4"},"Price per Room")),(0,u.kt)("p",null,"When a price is charged per Room means that all occupancies allowed in the room will have the same price. If an ",(0,u.kt)("inlineCode",{parentName:"p"},"AdditionalGuestAmount")," are charged for occupancies over the standard occupancy, they will be applied."),(0,u.kt)("details",null,(0,u.kt)("summary",null,'Sample scenarios for "Price per Room" price calculations.'),(0,u.kt)("div",null,(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 1"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"1-1-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"100"))))),(0,u.kt)("br",null),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 2"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"3-0-0"),(0,u.kt)("li",null,"1-1-0"),(0,u.kt)("li",null,"3-1-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt Type = "25" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "8" />\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-0-0"),(0,u.kt)("td",null,"100 + (100\u20442 + 20) = 170")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-1-0"),(0,u.kt)("td",null,"100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-1-0"),(0,u.kt)("td",null,"100 + (100\u20442 + 20) + (100\u20442 + 10) = 230"))))),(0,u.kt)("br",null),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 3"),(0,u.kt)("br",null),"Standard occupancy: 3",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"3-0-0"),(0,u.kt)("li",null,"4-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt Type = "25" AmountAfterTax="120.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "20.00" AgeQualifyingCode = "10" />\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"120")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"120")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-0-0"),(0,u.kt)("td",null,"120")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4-0-0"),(0,u.kt)("td",null,"120 + (120\u20443 + 20) = 180"))))))),(0,u.kt)("h4",{id:"price-per-paxguest-standard-occupancy"},(0,u.kt)("strong",{parentName:"h4"},"Price per Pax/Guest")," (Standard Occupancy)"),(0,u.kt)("p",null,"When a price is charged per Pax means that the price is for the number of guests specified. If NumberOfGuests is equal or under the standard occupancy, the price returned will have to be the same as the price charged. If ",(0,u.kt)("inlineCode",{parentName:"p"},"NumberOfGuests")," is over the Standard Occupancy, the price is calculated from the Standard Occupancy price and the ",(0,u.kt)("inlineCode",{parentName:"p"},"AdditionalGuestAmount")," charged."),(0,u.kt)("details",null,(0,u.kt)("summary",null,'Sample scenarios for "Price per Pax/Guest" price calculations.'),(0,u.kt)("div",null,(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 1"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>\n</BaseByGuestAmts> \n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100"))))),(0,u.kt)("br",null),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 2"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "1" AmountAfterTax="100.00"/>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="130.00"/>\n</BaseByGuestAmts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(130\u20442) = 130"))))),(0,u.kt)("br",null),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 3"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"3-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10"/>\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-0-0"),(0,u.kt)("td",null,"(100\u20442) + (100\u20442) + (100\u20442) + (40) = 190"))))),(0,u.kt)("br",null),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 4"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"3-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "10" Type="Exclusive"/>\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-0-0"),(0,u.kt)("td",null,"(100\u20442) + (100\u20442) + 40 = 140"))))),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 5"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"1-1-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "8" />\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-1-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100"))))),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 5.1"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"1-0-1")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "40.00" AgeQualifyingCode = "7" />\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-1-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100"))))),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 6"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"2-1-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-40.00" AgeQualifyingCode = "8" />\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-1-0"),(0,u.kt)("td",null,"2*(100\u20442) + ((100\u20442) -40) = 60"))))),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 7"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"3-0-0"),(0,u.kt)("li",null,"4-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "10.00" AgeQualifyingCode = "10" />\n    <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "-15.00" AgeQualifyingCode = "10" />\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-0-0"),(0,u.kt)("td",null,"(100\u20442) + (100\u20442) + ((100\u20442) + 10) = 160")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4-0-0"),(0,u.kt)("td",null,"(100\u20442) + (100\u20442) + ((100\u20442) + 10) + ((100\u20442) - 15) = 195")))))),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 8"),(0,u.kt)("br",null),"Standard occupancy: 2",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"3-0-0"),(0,u.kt)("li",null,"4-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "2" AmountAfterTax="100.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-0-0"),(0,u.kt)("td",null,"(100\u20442) + (100\u20442) + ((100\u20442) -10) = 140")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4-0-0"),(0,u.kt)("td",null,"(100\u20442) + (100\u20442) + ((100\u20442) -10) + ((100\u20442) - 10) = 180"))))),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 9"),(0,u.kt)("br",null),"Standard occupancy: 3",(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"3-0-0"),(0,u.kt)("li",null,"4-0-0"),(0,u.kt)("li",null,"5-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt NumberOfGuests = "3" AmountAfterTax="150.00"/>\n</BaseByGuestAmts>\n<AdditionalGuestAmounts>\n    <AdditionalGuestAmount MaxAdditionalGuests = "1" Amount = "-10.00" AgeQualifyingCode = "10" />\n    <AdditionalGuestAmount MaxAdditionalGuests = "2" Amount = "15.00" AgeQualifyingCode = "10" />\n</AdditionalGuestAmounts>\n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"2*(100\u20442) = 100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-0-0"),(0,u.kt)("td",null,"3*(150\u20443) = 150")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4-0-0"),(0,u.kt)("td",null,"(150\u20443) + (150\u20443) + (150\u20443) + ((150\u20443) - 10) = 190")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5-0-0"),(0,u.kt)("td",null,"(150\u20443) + (150\u20443) + (150\u20443) + ((150\u20443) - 10) + ((150\u20443) + 15) = 255")))))),(0,u.kt)("h4",{id:"price-per-occupancy"},(0,u.kt)("strong",{parentName:"h4"},"Price per Occupancy")),(0,u.kt)("p",null,"When a price is charged per Occupancy means that this price will only be available for the specified occupancy. No ",(0,u.kt)("inlineCode",{parentName:"p"},"AdditionalGuestAmount")," are applied."),(0,u.kt)("details",null,(0,u.kt)("summary",null,'Sample scenarios for "Price per Occupancy" price calculations.'),(0,u.kt)("div",null,(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 1"),(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"1-0-0"),(0,u.kt)("li",null,"2-0-0"),(0,u.kt)("li",null,"3-0-0")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt Type = "14" AmountAfterTax="100.00" Code = "2-0-0"/>\n</BaseByGuestAmts> \n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1-0-0"),(0,u.kt)("td",null,"\xd8")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-0"),(0,u.kt)("td",null,"100")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3-0-0"),(0,u.kt)("td",null,"\xd8"))))),(0,u.kt)("br",null),(0,u.kt)("div",null,(0,u.kt)("b",null,"Case 2"),(0,u.kt)("br",null),"Room uses:",(0,u.kt)("ul",null,(0,u.kt)("li",null,"2-1-0"),(0,u.kt)("li",null,"2-0-1")),"Message:",(0,u.kt)("p",null,(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'<BaseByGuestAmts>\n    <BaseByGuestAmt Type = "14" AmountAfterTax="95.00" Code = "2-1-0"/>\n    <BaseByGuestAmt Type = "14" AmountAfterTax="80.00" Code = "2-0-1"/>\n</BaseByGuestAmts>  \n'))),"Price:",(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,(0,u.kt)("strong",null,"Occupancy")),(0,u.kt)("th",null,(0,u.kt)("strong",null,"Price")))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-1-0"),(0,u.kt)("td",null,"95")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"2-0-1"),(0,u.kt)("td",null,"80"))))))),(0,u.kt)("h2",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,u.kt)("details",null,(0,u.kt)("summary",null,"For the standard occupancy calculation, should the data from `Quantities` `StandardNumBeds` or `BaseByGuestAmt` `NumberOfGuests` be consumed?"),(0,u.kt)("div",null,(0,u.kt)("div",null,"If this is set as true, the type of Min/Max LOS is on arrival for that specific day. For this type, the values for Min/Max LOS on arrival, only apply if it is applied to the check-in day. If this is set as false, it\u2019s a normal Min/Max LOS."))),(0,u.kt)("details",null,(0,u.kt)("summary",null,"Both tax `ChargeFrequency` and `ChargeUnit` are optional bits of information. So, what happens if they are not returned in a push message? Is need to re-calculate the price from `HotelRatePlanNotif` (if have tax elements are returned), or is it possible to assume `AmountAfterTax` in the final price?"),(0,u.kt)("div",null,(0,u.kt)("div",null,"If these elements are not returned, then a fixed amount will be returned as a tax if you have set it up in the SetUp part of the extranet and depending on the type of tax you have set up. You always have to calculate the price that is returned in this tag with the tax."))),(0,u.kt)("details",null,(0,u.kt)("summary",null,"If I set up an additional tax (i.e. per pax and per night), should I add up or subtract it from `AmountAfterTax` attribute?"),(0,u.kt)("div",null,(0,u.kt)("div",null,"The `AmountAfterTax` attribute inside the `RatePlanNotify` does not include the taxes you will set up (it might include any taxes the channel has loaded on their end if they have done so). The `AmountAfterTax` at the time of booking (the Reservation RS logs) will include the taxes indicated by you."))),(0,u.kt)("details",null,(0,u.kt)("summary",null,"Referring to the RatePlan message, there are `Supplement`. Understanding price is for meal basis, should I require calculation to add with `AmountAfterTax`? The purpose of this is an extra cost for supplement in case there are `AdditionalGuest` applied."),(0,u.kt)("div",null,(0,u.kt)("div",null,"The Supplement tag is for MealPlans, not for additional paxes. The price indicated in there, shows the price of the supplement."))),(0,u.kt)("details",null,(0,u.kt)("summary",null,"What happens if more than one price type is loaded for the same day/range of days and for the same room/rooms?"),(0,u.kt)("div",null,(0,u.kt)("div",null,"All price types can be loaded at the same time (or at different times without overwriting). This isn\u2019t usually the case and almost never is there more than 1 price type loaded at a time. If all price types are loaded at the same time, or only two are loaded at the same time, at the time of the Availability search the price that is returned is the cheapest one."))))}c.isMDXComponent=!0}}]);