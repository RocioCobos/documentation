/*! For license information please see 8e24c2ee.2479295c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52057],{90812:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(74848),i=n(28453);const r="query ($criteria: HotelXMetadataQueryInput!) {\n\thotelX {\n\t\tmetadata(criteria: $criteria) {\n\t\t\tadviseMessage {\n\t\t\t\tcode\n\t\t\t\tlevel\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tcode\n\t\t\t\t\tadviseMessage {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tlevel\n\t\t\t\t\t\tdescription\n\t\t\t\t\t}\n\t\t\t\t\tmetadataData {\n\t\t\t\t\t\tsupplierCode\n\t\t\t\t\t\tsearch {\n\t\t\t\t\t\t\tdestinations {\n\t\t\t\t\t\t\t\tmaxNumberHotels {\n\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\trecommendedNumberHotels {\n\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tallowsCurrency {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\timplementsCombination {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tnumMarketsAllowed {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\trelease {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tminimumStay {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tmaxStay {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\troomCandidates {\n\t\t\t\t\t\t\t\tmaxNumberRoomCandidates {\n\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tpaxTypeRangeInRoomCandidates {\n\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\tcandidates {\n\t\t\t\t\t\t\t\t\t\tmin\n\t\t\t\t\t\t\t\t\t\tmax\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tmaxPaxInRoomCandidates {\n\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tmaxPaxInAllRooms {\n\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\trequiredRoomWithSamePaxConfiguration {\n\t\t\t\t\t\t\t\t\tsamePaxAge {\n\t\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tsamePaxNumber {\n\t\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\trateRules {\n\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tbeds {\n\t\t\t\t\t\t\t\t\tinformNumberOfUnits {\n\t\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tinformSharedBed {\n\t\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tinformBedType {\n\t\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tinformNumberOfBeds {\n\t\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tageRange {\n\t\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\t\tages {\n\t\t\t\t\t\t\t\t\t\tmin\n\t\t\t\t\t\t\t\t\t\tmax\n\t\t\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformBindingPrice {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformCancelPolicies {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformRoomCancelPolicies {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformRemarks {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tpaymentTypes {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformDailyPrice {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformDailyRatePlan {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformPromotions {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformNRFRateByRoom {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformSurcharges {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformRoomSurcharges {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformHotelName {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\trequiredNationality {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tquote {\n\t\t\t\t\t\t\tinformBindingPrice {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformNRFRate {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformRemarks {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformCancelPolicies {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformCancelPoliciesDescription {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformSurcharges {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\trequiredNationality {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbook {\n\t\t\t\t\t\t\tallowsDeltaPrice {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\trequiredAllPassengers {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tallowsRemarks {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformBillingSupplier {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformHotelReference {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformPrice {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\trequiredNationality {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbooking {\n\t\t\t\t\t\t\tqueryableBySupplierReference {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tqueryableByClientReference {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tqueryableByCreationDate {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tqueryableByCheckinDate {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformHotelReference {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformCancelPolicies {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformPriceCancel {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcancel {\n\t\t\t\t\t\t\tmutableBySupplierReference {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tmutableByClientReference {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinformPriceCancel {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\thotels {\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdestinations {\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\trooms {\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tboards {\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcategories {\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tmarkets {\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcurrencies {\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tamenities {\n\t\t\t\t\t\t\tlanguages {\n\t\t\t\t\t\t\t\treviewDate\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",o='{\n\t"criteria": {\n\t\t"supplierCodes": [\n\t\t\t"HOTELTEST"\n\t\t]\n\t}\n}',s={sidebar_position:7},l="Metadata",u={id:"apis/for-buyers/hotel-x-pull-buyers-api/content/metadata",title:"Metadata",description:"The Metadata Query returns a clear and summarized view of the Seller's main characteristics, as well as the methods implemented through their integration and the limitations and restrictions associated with their connection. The returned fields include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/content",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Boards",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview"}},d={},c=[{value:"Metadata Inputs",id:"metadata-inputs",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Complete Metadata information from a specific supplier",id:"complete-metadata-information-from-a-specific-supplier",level:4}];function m(t){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...t.components},{GraphqlSample:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"metadata",children:"Metadata"}),"\n",(0,a.jsx)(e.p,{children:"The Metadata Query returns a clear and summarized view of the Seller's main characteristics, as well as the methods implemented through their integration and the limitations and restrictions associated with their connection. The returned fields include:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"maxNumberHotels"})," (Maximum number of hotels that can be requested)"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"recommendedNumberHotels"})," (Recommended number of hotels that can be requested)"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"allowsCurrency"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"release"})," (Minimum days required in between booking date and checking date, if the value is zero then there is no limitation)"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"minimumStay"})," (Minimum number of days required for booking, if the value is zero then there is no limitation)"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"maxStay"})," (Maximum number of days allowed for booking)"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"maxNumberRoomCandidates"})," (Maximum number of room candidates that can be requested in the same search request)"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"paxTypeRangeInRoomCandidates"})," (Contains information about the age restrictions of the guests in a room)"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"maxPaxInRoomCandidates"})," (Maximum number paxs in same room that can be requested in the same search request)"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"maxPaxInAllRooms"})," (Maximum number of sum of paxs that can be requested in the same search request)"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"requiredRoomWithSamePaxConfiguration"})," (Indicates whether all room must have the same configuration, same ages or same number of paxs)"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"rateRules"})}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"ageRange"})," (The age range used by the supplier)"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"languages"})}),"\n"]}),"\n",(0,a.jsxs)(e.admonition,{type:"note",children:[(0,a.jsx)(e.p,{children:"Travelgate API specifications will always prevail over the Seller's specifications. For instance, nationality should always be sent in SearchRQ even though it may be optional for some Sellers."}),(0,a.jsx)(e.p,{children:"Since Metadata information may not be updated by our Sellers frequently (they update it whenever there is a major update on their APIs), we suggest you confirm directly with them whether the information is up to date."})]}),"\n",(0,a.jsx)(e.h2,{id:"metadata-inputs",children:"Metadata Inputs"}),"\n",(0,a.jsx)(e.p,{children:"When creating your metadata query, you have 1 input to fill based on your specific needs:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Criteria"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,a.jsxs)(e.p,{children:["This query has a single criteria, which is marked as mandatory (",(0,a.jsx)(e.code,{children:"supplierCodes"}),")."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Mandatory criteria"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"supplierCodes"})}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,a.jsx)(e.h4,{id:"complete-metadata-information-from-a-specific-supplier",children:"Complete Metadata information from a specific supplier"}),"\n",(0,a.jsx)(n,{query:r,variables:o})]})}function v(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(m,{...t})}):m(t)}},21020:(t,e,n)=>{var a=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,n){var a,r={},u=null,d=null;for(a in void 0!==n&&(u=""+n),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(d=e.ref),e)o.call(e,a)&&!l.hasOwnProperty(a)&&(r[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps)void 0===r[a]&&(r[a]=e[a]);return{$$typeof:i,type:t,key:u,ref:d,props:r,_owner:s.current}}e.Fragment=r,e.jsx=u,e.jsxs=u},74848:(t,e,n)=>{t.exports=n(21020)},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>s});var a=n(96540);const i={},r=a.createContext(i);function o(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);