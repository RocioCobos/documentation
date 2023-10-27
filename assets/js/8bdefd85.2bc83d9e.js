"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18494],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),m=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=m(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return t?i.createElement(h,l(l({ref:n},p),{},{components:t})):i.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<a;m++)l[m]=t[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var i=t(87462),r=(t(67294),t(3905));const a={sidebar_position:2},l="All about price, commission and binding prices",o={unversionedId:"faqs/faqs-price/price-commission-binding",id:"faqs/faqs-price/price-commission-binding",title:"All about price, commission and binding prices",description:"Overview: Price information in TravelgateX API response",source:"@site/kb/faqs/faqs-price/price-commission-binding.md",sourceDirName:"faqs/faqs-price",slug:"/faqs/faqs-price/price-commission-binding",permalink:"/kb/faqs/faqs-price/price-commission-binding",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kbSidebar",previous:{title:"Payment Types at TravelgateX",permalink:"/kb/faqs/faqs-price/payment-types-at-tgx"},next:{title:"Hotel-X Surcharges",permalink:"/kb/faqs/faqs-price/hotel-x-surcharges"}},s={},m=[{value:"Overview: Price information in TravelgateX API response",id:"overview-price-information-in-travelgatex-api-response",level:3},{value:"What is a Binding price?",id:"what-is-a-binding-price",level:3},{value:"How should I interpret the value in the field &quot;minimumSellingPrice&quot;?\ud83d\udd0e",id:"how-should-i-interpret-the-value-in-the-field-minimumsellingprice",level:3},{value:"Could a Minimum Selling Price be lower than the gross amount?",id:"could-a-minimum-selling-price-be-lower-than-the-gross-amount",level:3},{value:"Can I obtain the Minimum Selling Price from all Sellers?",id:"can-i-obtain-the-minimum-selling-price-from-all-sellers",level:3},{value:"Should I ignore the binding field when using Minimum Selling Price?",id:"should-i-ignore-the-binding-field-when-using-minimum-selling-price",level:3},{value:"What should I do if I haven&#39;t implemented the Minimum Selling Price yet as a Buyer and I receive NET=Gross?",id:"what-should-i-do-if-i-havent-implemented-the-minimum-selling-price-yet-as-a-buyer-and-i-receive-netgross",level:3},{value:"How should I interpret the value in the field &quot;commission&quot; in Hotel Buyers API (Legacy)?",id:"how-should-i-interpret-the-value-in-the-field-commission-in-hotel-buyers-api-legacy",level:3}],p={toc:m},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"all-about-price-commission-and-binding-prices"},"All about price, commission and binding prices"),(0,r.kt)("h3",{id:"overview-price-information-in-travelgatex-api-response"},"Overview: Price information in TravelgateX API response"),(0,r.kt)("p",null,"As quick intro, let\u2019s consider that in each API Search response, we return the options available, detailing the following information, among other fields: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"code": "5683",\n\n"description": "Double Suite Deluxe",\n\n"refundable": false,\n\n"roomPrice": {\n\n"price": {\n\n\u201ccurrency\u201d : \u201cUSD\u201d,\n\n\u201cbinding\u201d : true,\n\n\u201cnet\u201d : 150\n\n\u201cgross\u201d : 170,\n\n\u201cexchange\u201d : {\n\n\u201ccurrency\u201d : \u201cUSD\u201d,\n\n\u201crate\u201d : 1\n\n},\n\n\u201cminimumSellingPrice\u201d : 160,\n\n\u201cmarkups\u201d : null\n\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'What information will you receive in the "price" of an option?'),(0,r.kt)("br",{parentName:"p"}),"\n","Every option has a price and every price indicates:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Currency"),(0,r.kt)("li",{parentName:"ol"},"Amount (net and gross in ",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart"},"Hotel-X Pull Buyers API"),")"),(0,r.kt)("li",{parentName:"ol"},"Binding"),(0,r.kt)("li",{parentName:"ol"},"In the case of TravelgateX ",(0,r.kt)("a",{parentName:"li",href:"/docs/apis/for-buyers/legacy-pull-buyers-api/overview"},"Legacy Pull Buyers API"),", we also provide the commission."),(0,r.kt)("li",{parentName:"ol"},"Markup applied over the supplier price, whenever provided.")),(0,r.kt)("h3",{id:"what-is-a-binding-price"},"What is a Binding price?"),(0,r.kt)("p",null,'When a price is tagged as "binding", it means it\u2019s mandatory to sell over the amount indicated, gross or Minimum Selling Price if informed. It\u2019s also called as mandatory price or PVP in Spain. '),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'How does "binding" information work?'),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("strong",{parentName:"li"},"binding")," is set as ",(0,r.kt)("strong",{parentName:"li"},"true"),": it means that the Buyer must sell the hotel at least at the price provided by the Seller, not less."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("strong",{parentName:"li"},"binding")," is set as ",(0,r.kt)("strong",{parentName:"li"},"false"),": the Buyer can sell the product for a lower price than the one returned by them.")),(0,r.kt)("h3",{id:"how-should-i-interpret-the-value-in-the-field-minimumsellingprice"},'How should I interpret the value in the field "minimumSellingPrice"?\ud83d\udd0e'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What does minimumSellingPrice (MSP) mean?"),(0,r.kt)("br",{parentName:"p"}),"\n","The minimumSellingPrice (MSP) represents the ",(0,r.kt)("em",{parentName:"p"},"lowest price at which the Buyer can sell the Supplier's product")," to their Customers. This feature was introduced in TravelgateX in 2022, as mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"https://community.travelgatex.com/t/minor-update-notification-minimum-selling-price/2236"},"implementation update"),". Previously, we relied on the binding tag to identify mandatory gross amounts that served as minimum selling prices."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What Information does MSP return?"),(0,r.kt)("br",{parentName:"p"}),"\n","MSP field informs the ",(0,r.kt)("em",{parentName:"p"},"amount to be set as mandatory price")," and allows Buyers to get a competitive pricing reference, especially valuable when we have have in place 3 different pricing amounts: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gross price:")," gross amount to be subject to commission subtracting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Net price:")," net amount with no commission included, amount payable to the Seller."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Minimum Selling Price:")," lowest price allowed to be marked up by the Buyer when selling to their own Customers.  ")),(0,r.kt)("p",null,"This parameter holds significant value since it helps us determine the exact amount we should use as a ",(0,r.kt)("em",{parentName:"p"},"reference for pricing"),". Before, we could only use the gross amount as the minimum price and couldn't take other factors into account. But now, with this parameter, we have the awesome opportunity to set prices based on the exact amount needed to be competitive. It's a game-changer for making sure our prices are accurate and give us an edge in the market.  "),(0,r.kt)("p",null,"Taking our previous example from Search:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u201cbinding\u201d : true\n\n\u201cnet\u201d : 150\n\n\u201cgross\u201d : 170,\n\n\u201ccurrency\u201d : \u201cUSD\u201d,\n\n\u201cminimumSellingPrice\u201d : 160,\n")),(0,r.kt)("p",null,"In this case, we cannot sell lower than 160; and if we had no MSP field, we would need to inform gross as the binding minimum amount and will not be so competitive."),(0,r.kt)("h3",{id:"could-a-minimum-selling-price-be-lower-than-the-gross-amount"},"Could a Minimum Selling Price be lower than the gross amount?"),(0,r.kt)("p",null,"It's not something that happens often, but it's important to be aware that ",(0,r.kt)("em",{parentName:"p"},"it can occur"),". When reselling hotel products, the final price is determined by the business rules agreed upon by all parties involved. So, if the Minimum Selling Price (MSP) is communicated and followed, a wholesaler might sell to a B2B Partner at a rate higher than the MSP in order to apply a larger markup. This strategy can still lead to sales due to is a high demand for the product."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Hotel chain sells to a Bedbank with rates 10% commissionable:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\u201cbinding\u201d : true\n\n\u201cnet\u201d : 180\n\n\u201cgross\u201d : 200,\n\n\u201ccurrency\u201d : \u201cUSD\u201d,\n\n\u201cminimumSellingPrice\u201d : 200\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Bedbank sells to a B2B wholesaler and applies 9% markup, selling with net rates:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\u201cbinding\u201d: true\n\n\u201cnet\u201d: 196.2\n\n\u201cgross\u201d: 196.2\n\n\u201ccurrency\u201d : \u201cUSD\u201d,\n\n\u201cminimumSellingPrice\u201d : 200\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"B2B wholesaler sells to an OTA with 3% markup and net rates:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```\n\u201cbinding\u201d: true\n\n\u201cnet\u201d: 202.08\n\n\u201cgross\u201d: 202.08\n\n\u201ccurrency\u201d : \u201cUSD\u201d,\n\n\u201cminimumSellingPrice\u201d : 200\n```\n")),(0,r.kt)("p",{parentName:"li"},"As you can see, we always provide and maintain the minimum selling price as a reference. However, when multiple parties sell the same product, it's possible for the gross price to exceed the MSP initially set by the hotel chain."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"But does this mean the product is not competitive?")," Not necessarily. While the rate may be higher than what the hotel chain offers on their website, there are situations where high demand and limited inventory make selling a room, even at a slightly higher price than the direct channel, a fantastic opportunity for our distributors."),(0,r.kt)("h3",{id:"can-i-obtain-the-minimum-selling-price-from-all-sellers"},"Can I obtain the Minimum Selling Price from all Sellers?"),(0,r.kt)("p",null,"Since this field is relatively new, not all Sellers will have implemented this feature in their own API, which is integrated into our Marketplace. However, we will make sure to inform our Buyers about the Minimum Selling Price (MSP) whenever they utilize this field."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minimum Selling Price values:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u201cminimumSellingPrice\u201d = amount:")," the lowest possible amount that can be sold commercially"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u201cminimumSellingPrice\u201d = 0:")," no minimum selling price is provided."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u201cminimumSellingPrice\u201d = -1:")," we have no information about MSP from the Seller")),(0,r.kt)("h3",{id:"should-i-ignore-the-binding-field-when-using-minimum-selling-price"},"Should I ignore the binding field when using Minimum Selling Price?"),(0,r.kt)("p",null,"Since we are handling highly sensitive information that can have a significant impact on your business, we strongly recommend that you always make ",(0,r.kt)("em",{parentName:"p"},"proper use of both fields.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Binding field:")," used in order to determine whether the amount is mandatory or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Minimum Selling Price field:")," used in order to build your prices based on price restrictions and competitiveness.")),(0,r.kt)("h3",{id:"what-should-i-do-if-i-havent-implemented-the-minimum-selling-price-yet-as-a-buyer-and-i-receive-netgross"},"What should I do if I haven't implemented the Minimum Selling Price yet as a Buyer and I receive NET=Gross?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you receive ",(0,r.kt)("strong",{parentName:"li"},"binding = true")," and the Seller ",(0,r.kt)("strong",{parentName:"li"},"returns")," the Minimum Selling Price (MSP):\nMinimum Selling Price = Gross"),(0,r.kt)("li",{parentName:"ul"},"If you receive ",(0,r.kt)("strong",{parentName:"li"},"binding = false")," and the Seller ",(0,r.kt)("strong",{parentName:"li"},"does not return")," the Minimum Selling Price (MSP):\nThere is pricing freedom")),(0,r.kt)("h3",{id:"how-should-i-interpret-the-value-in-the-field-commission-in-hotel-buyers-api-legacy"},'How should I interpret the value in the field "commission" in Hotel Buyers API (Legacy)?'),(0,r.kt)("p",null,'In Hotel-X, we provide both the "Net" and "Gross" prices for each rate to help with calculations. However, in our legacy API, we only provide the amount, commission, and binding information. For instance:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<Room id = "4145" roomCandidateRefId = "1" code = "DBL#STAND" description = "Doble Standard" nonRefundable = "false" numberOfUnits = "5">\n<Price currency = "EUR" amount = "36.20" binding = "false" commission = "-1"/>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Commission values:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Commission = 0:")," the price returned is a net price."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Commission = -1:")," the Seller has not provided the Selling price nor the commission. In case it exists, commission has been agreed at a contractual level with the Seller and it is not traveling via TravelgateX. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Commission is greater than 0:")," X = % of the commission that is applied to the amount.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How can I check the commission amount in Hotel-X Buyers API?"),(0,r.kt)("br",{parentName:"p"}),"\n","There is ",(0,r.kt)("strong",{parentName:"p"},"no commission field in Hotel-X Pull Buyers API"),", as we simplify the process by calculating net amount.If you need to know the specific amount deducted as commission, you just need to subtract the net from the gross amount: ",(0,r.kt)("strong",{parentName:"p"},"Gross - net = commission")),(0,r.kt)("admonition",{title:"Important:",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please, keep in mind that if you don't follow these rules, you may put at risk your commercial agreement with the Seller.")))}c.isMDXComponent=!0}}]);