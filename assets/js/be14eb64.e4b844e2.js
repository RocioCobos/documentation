"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26624],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>p});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,p=c["".concat(u,".").concat(d)]||c[d]||v[d]||i;return t?a.createElement(p,o(o({ref:n},m),{},{components:t})):a.createElement(p,o({ref:n},m))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:6},o="Hotel-X Development - Metadata Query",l={unversionedId:"our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",id:"our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",title:"Hotel-X Development - Metadata Query",description:"The Metadata query delivers a clear and summarized view of the Seller's main characteristics, as well as the methods implemented through their integration and the limitations and restrictions associated with their connection.",source:"@site/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/static-content",slug:"/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"kbSidebar",previous:{title:"Hotel-X Development - Categories Query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-categories-query"},next:{title:"Token-based Pagination for Hotels, Rooms, and Destinations",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/faqs/token-based-pagination-hotel-room-destinations"}},u={},s=[],m={toc:s},c="wrapper";function v(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hotel-x-development---metadata-query"},"Hotel-X Development - Metadata Query"),(0,r.kt)("p",null,"The Metadata query delivers a clear and summarized view of the Seller's main characteristics, as well as the methods implemented through their integration and the limitations and restrictions associated with their connection."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that ",(0,r.kt)("strong",{parentName:"p"},"TravelgateX API specifications will always prevail over the Seller's specifications"),". For instance, nationality should always be sent in SearchRQ even though it may be optional for some Sellers.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Some of the information returned is:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods implemented"),(0,r.kt)("li",{parentName:"ul"},"Maximum/minimum stay"),(0,r.kt)("li",{parentName:"ul"},"Minimum release"),(0,r.kt)("li",{parentName:"ul"},"Supported payment types"),(0,r.kt)("li",{parentName:"ul"},"Maximum pax per room"),(0,r.kt)("li",{parentName:"ul"},"Maximum rooms per reservation"),(0,r.kt)("li",{parentName:"ul"},"Cancellation policies returned in Search or Quote"),(0,r.kt)("li",{parentName:"ul"},"\u201cRequiredAllPassengers\u201d (if name details for all the paxes are required in BookRQ)")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The information returned depends on the Seller and might vary between Partners.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of Metadata query:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"query":"{\\n hotelX {\\n metadata(criteria: {supplierCodes: [\\"\\"]}, relay: {}) {\\n adviseMessage {\\n code\\n level\\n description\\n }\\n edges {\\n node {\\n code\\n adviseMessage {\\n code\\n level\\n description\\n }\\n metadataData {\\n supplierCode\\n search {\\n destinations {\\n maxNumberHotels {\\n reviewDate\\n value\\n }\\n recommendedNumberHotels {\\n reviewDate\\n value\\n }\\n }\\n allowsCurrency {\\n reviewDate\\n value\\n }\\n implementsCombination {\\n reviewDate\\n value\\n }\\n numMarketsAllowed {\\n reviewDate\\n value\\n }\\n release {\\n reviewDate\\n value\\n }\\n minimumStay {\\n reviewDate\\n value\\n }\\n maxStay {\\n reviewDate\\n value\\n }\\n roomCandidates {\\n maxNumberRoomCandidates {\\n reviewDate\\n value\\n }\\n paxTypeRangeInRoomCandidates {\\n reviewDate\\n candidates {\\n min\\n max\\n type\\n }\\n }\\n maxPaxInRoomCandidates {\\n reviewDate\\n value\\n }\\n maxPaxInAllRooms {\\n reviewDate\\n value\\n }\\n requiredRoomWithSamePaxConfiguration {\\n samePaxAge {\\n reviewDate\\n value\\n }\\n samePaxNumber {\\n reviewDate\\n value\\n }\\n }\\n rateRules {\\n reviewDate\\n value\\n }\\n beds {\\n informNumberOfUnits {\\n reviewDate\\n value\\n }\\n informSharedBed {\\n reviewDate\\n value\\n }\\n informBedType {\\n reviewDate\\n value\\n }\\n informNumberOfBeds {\\n reviewDate\\n value\\n }\\n }\\n ageRange {\\n reviewDate\\n ages {\\n min\\n max\\n type\\n }\\n }\\n }\\n informBindingPrice {\\n reviewDate\\n value\\n }\\n informCancelPolicies {\\n reviewDate\\n value\\n }\\n informRoomCancelPolicies {\\n reviewDate\\n value\\n }\\n informRemarks {\\n reviewDate\\n value\\n }\\n paymentTypes {\\n reviewDate\\n value\\n }\\n languages {\\n reviewDate\\n value\\n }\\n informDailyPrice {\\n reviewDate\\n value\\n }\\n informDailyRatePlan {\\n reviewDate\\n value\\n }\\n informPromotions {\\n reviewDate\\n value\\n }\\n informNRFRateByRoom {\\n reviewDate\\n value\\n }\\n informSurcharges {\\n reviewDate\\n value\\n }\\n informRoomSurcharges {\\n reviewDate\\n value\\n }\\n informHotelName {\\n reviewDate\\n value\\n }\\n requiredNationality {\\n reviewDate\\n value\\n }\\n }\\n quote {\\n informBindingPrice {\\n reviewDate\\n value\\n }\\n informNRFRate {\\n reviewDate\\n value\\n }\\n informRemarks {\\n reviewDate\\n value\\n }\\n informCancelPolicies {\\n reviewDate\\n value\\n }\\n informCancelPoliciesDescription {\\n reviewDate\\n value\\n }\\n informSurcharges {\\n reviewDate\\n value\\n }\\n requiredNationality {\\n reviewDate\\n value\\n }\\n }\\n book {\\n allowsDeltaPrice {\\n reviewDate\\n value\\n }\\n requiredAllPassengers {\\n reviewDate\\n value\\n }\\n allowsRemarks {\\n reviewDate\\n value\\n }\\n informBillingSupplier {\\n reviewDate\\n value\\n }\\n informHotelReference {\\n reviewDate\\n value\\n }\\n informPrice {\\n reviewDate\\n value\\n }\\n requiredNationality {\\n reviewDate\\n value\\n }\\n }\\n booking {\\n queryableBySupplierReference {\\n reviewDate\\n value\\n }\\n queryableByClientReference {\\n reviewDate\\n value\\n }\\n queryableByCreationDate {\\n reviewDate\\n value\\n }\\n queryableByCheckinDate {\\n reviewDate\\n value\\n }\\n informHotelReference {\\n reviewDate\\n value\\n }\\n informCancelPolicies {\\n reviewDate\\n value\\n }\\n informPriceCancel {\\n reviewDate\\n value\\n }\\n }\\n cancel {\\n mutableBySupplierReference {\\n reviewDate\\n value\\n }\\n mutableByClientReference {\\n reviewDate\\n value\\n }\\n informPriceCancel {\\n reviewDate\\n value\\n }\\n }\\n hotels {\\n languages {\\n reviewDate\\n value\\n }\\n }\\n destinations {\\n languages{\\n value\\n }\\n languages {\\n reviewDate\\n value\\n }\\n }\\n rooms {\\n languages {\\n reviewDate\\n value\\n }\\n }\\n boards {\\n languages {\\n reviewDate\\n value\\n }\\n }\\n categories {\\n languages {\\n reviewDate\\n value\\n }\\n }\\n markets {\\n languages {\\n reviewDate\\n value\\n }\\n }\\n currencies {\\n languages {\\n reviewDate\\n value\\n }\\n }\\n amenities {\\n languages {\\n reviewDate\\n value\\n }\\n }\\n }\\n createdAt\\n updatedAt\\n }\\n }\\n }\\n }\\n}"}\n')),(0,r.kt)("p",null,"Since Metadata information may not be updated by our Sellers frequently (they update it whenever there is a major update on their APIs), we suggest you confirm directly with them whether the information is up to date."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Learn more about Metadata Query on our ",(0,r.kt)("a",{parentName:"p",href:"https://api.travelgatex.com/playground"},"Playground")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata"},"Documentation"),". ")))}v.isMDXComponent=!0}}]);