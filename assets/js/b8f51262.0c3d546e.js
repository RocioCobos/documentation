/*! For license information please see b8f51262.0c3d546e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85887],{73301:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>g,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>b});var d=t(74848),s=t(28453),n=t(96540);const o={id:"hotel-data",title:"HotelData",hide_table_of_contents:!1},l=void 0,c={id:"objects/hotel-data",title:"HotelData",description:"Hotel data",source:"@site/api/objects/hotel-data.mdx",sourceDirName:"objects",slug:"/objects/hotel-data",permalink:"/api/objects/hotel-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-data",title:"HotelData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelConnection",permalink:"/api/objects/hotel-connection"},next:{title:"HotelEdge",permalink:"/api/objects/hotel-edge"}},i={},r=()=>{const e={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,s.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:t,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[c,i]=(0,n.useState)(o);return(0,d.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&t]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatacodeid--",level:4},{value:'<code>HotelData.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatahotelcodestring--",level:4},{value:'<code>HotelData.<b>hotelCodeSupplier</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatahotelcodesupplierstring-",level:4},{value:'<code>HotelData.<b>giataData</b></code><Bullet></Bullet><code>GiataData</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatagiatadatagiatadata-",level:4},{value:'<code>HotelData.<b>hotelName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatahotelnamestring-",level:4},{value:'<code>HotelData.<b>categoryCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatacategorycodestring-",level:4},{value:'<code>HotelData.<b>property</b></code><Bullet></Bullet><code>Property</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatapropertyproperty--",level:4},{value:'<code>HotelData.<b>chainCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatachaincodestring-",level:4},{value:'<code>HotelData.<b>exclusiveDeal</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldataexclusivedealboolean--",level:4},{value:'<code>HotelData.<b>location</b></code><Bullet></Bullet><code>Location!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatalocationlocation--",level:4},{value:'<code>HotelData.<b>contact</b></code><Bullet></Bullet><code>Contact</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatacontactcontact-",level:4},{value:'<code>HotelData.<b>rank</b></code><Bullet></Bullet><code>[Int!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatarankint--",level:4},{value:'<code>HotelData.<b>cardTypes</b></code><Bullet></Bullet><code>[PaymentCardType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatacardtypespaymentcardtype--",level:4},{value:'<code>HotelData.<b>amenities</b></code><Bullet></Bullet><code>[AmenityStatic!]</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldataamenitiesamenitystatic---",level:4},{value:'<code>HotelData.<b>medias</b></code><Bullet></Bullet><code>[Media!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatamediasmedia--",level:4},{value:'<code>HotelData.<b>descriptions</b></code><Bullet></Bullet><code>[Description!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatadescriptionsdescription--",level:4},{value:'<code>HotelData.descriptions.<b>types</b></code><Bullet></Bullet><code>[DescriptionType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatadescriptionstypesdescriptiontype--",level:5},{value:'<code>HotelData.descriptions.<b>languages</b></code><Bullet></Bullet><code>[Language!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatadescriptionslanguageslanguage--",level:5},{value:'<code>HotelData.<b>rooms</b></code><Bullet></Bullet><code>RoomConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldataroomsroomconnection-",level:4},{value:'<code>HotelData.<b>propertyType</b></code><Bullet></Bullet><code>PropertyType</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatapropertytypepropertytype-",level:4},{value:'<code>HotelData.<b>mandatoryFees</b></code><Bullet></Bullet><code>[MandatoryFee!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatamandatoryfeesmandatoryfee--",level:4},{value:'<code>HotelData.<b>checkIn</b></code><Bullet></Bullet><code>CheckInformation</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatacheckincheckinformation-",level:4},{value:'<code>HotelData.<b>checkOut</b></code><Bullet></Bullet><code>CheckInformation</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatacheckoutcheckinformation-",level:4},{value:'<code>HotelData.<b>allAmenities</b></code><Bullet></Bullet><code>HotelXAmenityConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"hoteldataallamenitieshotelxamenityconnection-",level:4},{value:'<code>HotelData.allAmenities.<b>mapOptions</b></code><Bullet></Bullet><code>[HotelXMapOptionInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldataallamenitiesmapoptionshotelxmapoptioninput--",level:5},{value:'<code>HotelData.<b>mappings</b></code><Bullet></Bullet><code>[HotelXMappedCode!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatamappingshotelxmappedcode--",level:4},{value:'<code>HotelData.mappings.<b>contexts</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hoteldatamappingscontextsstring--",level:5},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}];function j(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Hotel data"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type HotelData {\n  code: ID!\n  hotelCode: String!\n  hotelCodeSupplier: String\n  giataData: GiataData\n  hotelName: String\n  categoryCode: String\n  property: Property @deprecated\n  chainCode: String\n  exclusiveDeal: Boolean!\n  location: Location!\n  contact: Contact\n  rank: [Int!]!\n  cardTypes: [PaymentCardType!]\n  amenities: [AmenityStatic!] @deprecated\n  medias: [Media!]\n  descriptions(\n    types: [DescriptionType!]\n    languages: [Language!]\n  ): [Description!]\n  rooms: RoomConnection\n  propertyType: PropertyType\n  mandatoryFees: [MandatoryFee!]\n  checkIn: CheckInformation\n  checkOut: CheckInformation\n  allAmenities(mapOptions: [HotelXMapOptionInput!]): HotelXAmenityConnection\n  mappings(contexts: [String!]): [HotelXMappedCode!]\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatacodeid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Internal code."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatahotelcodestring--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"hotelCode"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/string",children:(0,d.jsx)(a.code,{children:"String!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Code to perform availability."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatahotelcodesupplierstring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"hotelCodeSupplier"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Native supplier hotel code."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatagiatadatagiatadata-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"giataData"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/giata-data",children:(0,d.jsx)(a.code,{children:"GiataData"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Giata data stored in giata."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatahotelnamestring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"hotelName"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Name of the hotel in the Supplier selected."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatacategorycodestring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"categoryCode"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Hotel category (for example number of stars)."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatapropertyproperty--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"property"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/property",children:(0,d.jsx)(a.code,{children:"Property"})})," ",(0,d.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"caution",children:(0,d.jsx)(a.p,{children:"Deprecated from 2019-10-16. Redundant information"})}),"\n",(0,d.jsx)(a.p,{children:"Indicates property type"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatachaincodestring-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"chainCode"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/string",children:(0,d.jsx)(a.code,{children:"String"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Hotel chain code"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldataexclusivedealboolean--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"exclusiveDeal"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Indicates that the Hotel has an Exclusive Deal."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatalocationlocation--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"location"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/location",children:(0,d.jsx)(a.code,{children:"Location!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Indicates the location of the hotel"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatacontactcontact-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"contact"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/contact",children:(0,d.jsx)(a.code,{children:"Contact"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Contact contains information about hotel contact."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatarankint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"rank"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/int",children:(0,d.jsx)(a.code,{children:"[Int!]!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Rank indicates the supplier categorization."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatacardtypespaymentcardtype--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"cardTypes"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/enums/payment-card-type",children:(0,d.jsx)(a.code,{children:"[PaymentCardType!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"List of credit cards"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldataamenitiesamenitystatic---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"amenities"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/amenity-static",children:(0,d.jsx)(a.code,{children:"[AmenityStatic!]"})})," ",(0,d.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"caution",children:(0,d.jsx)(a.p,{children:"deprecated from 2021-09-17. Please, use allAmenities"})}),"\n",(0,d.jsx)(a.p,{children:"Amenities"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatamediasmedia--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"medias"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/media",children:(0,d.jsx)(a.code,{children:"[Media!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Medias"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatadescriptionsdescription--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"descriptions"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/description",children:(0,d.jsx)(a.code,{children:"[Description!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Descriptions"}),"\n",(0,d.jsxs)(a.h5,{id:"hoteldatadescriptionstypesdescriptiontype--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.descriptions.",(0,d.jsx)("b",{children:"types"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/enums/description-type",children:(0,d.jsx)(a.code,{children:"[DescriptionType!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h5,{id:"hoteldatadescriptionslanguageslanguage--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.descriptions.",(0,d.jsx)("b",{children:"languages"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/language",children:(0,d.jsx)(a.code,{children:"[Language!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldataroomsroomconnection-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"rooms"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/room-connection",children:(0,d.jsx)(a.code,{children:"RoomConnection"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Rooms"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatapropertytypepropertytype-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"propertyType"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/property-type",children:(0,d.jsx)(a.code,{children:"PropertyType"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Indicates property type."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatamandatoryfeesmandatoryfee--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"mandatoryFees"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/mandatory-fee",children:(0,d.jsx)(a.code,{children:"[MandatoryFee!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Mandatory fees of property"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatacheckincheckinformation-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"checkIn"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/check-information",children:(0,d.jsx)(a.code,{children:"CheckInformation"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"CheckIn information"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatacheckoutcheckinformation-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"checkOut"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/check-information",children:(0,d.jsx)(a.code,{children:"CheckInformation"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"CheckOut information"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldataallamenitieshotelxamenityconnection-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"allAmenities"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/hotel-xamenity-connection",children:(0,d.jsx)(a.code,{children:"HotelXAmenityConnection"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Amenities with mapping"}),"\n",(0,d.jsxs)(a.h5,{id:"hoteldataallamenitiesmapoptionshotelxmapoptioninput--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.allAmenities.",(0,d.jsx)("b",{children:"mapOptions"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/inputs/hotel-xmap-option-input",children:(0,d.jsx)(a.code,{children:"[HotelXMapOptionInput!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"hoteldatamappingshotelxmappedcode--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.",(0,d.jsx)("b",{children:"mappings"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/objects/hotel-xmapped-code",children:(0,d.jsx)(a.code,{children:"[HotelXMappedCode!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Mapping codes for this property in various contexts, e.g.: TGX, GIATA,..."}),"\n",(0,d.jsxs)(a.h5,{id:"hoteldatamappingscontextsstring--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelData.mappings.",(0,d.jsx)("b",{children:"contexts"})]})}),(0,d.jsx)(r,{}),(0,d.jsx)(a.a,{href:"/api/scalars/string",children:(0,d.jsx)(a.code,{children:"[String!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/objects/hotel",children:(0,d.jsx)(a.code,{children:"Hotel"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.h3,{id:"implemented-by",children:"Implemented by"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/unions/destination-search-result",children:(0,d.jsx)(a.code,{children:"DestinationSearchResult"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"union"})]})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},21020:(e,a,t)=>{var d=t(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,t){var d,n={},i=null,r=null;for(d in void 0!==t&&(i=""+t),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(r=a.ref),a)o.call(a,d)&&!c.hasOwnProperty(d)&&(n[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===n[d]&&(n[d]=a[d]);return{$$typeof:s,type:e,key:i,ref:r,props:n,_owner:l.current}}a.Fragment=n,a.jsx=i,a.jsxs=i},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>l});var d=t(96540);const s={},n=d.createContext(s);function o(e){const a=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(n.Provider,{value:a},e.children)}}}]);