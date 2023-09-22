---
sidebar_position: 1
---

# Quickstart

Hotel-X API is a powerful aggregation solution that allows you to get results from the largest network of Sellers in a single request. Whether it's at the hotel, room type, or rate plan level, you have the flexibility to aggregate data to meet your specific needs.


What sets Hotel-X API apart is its innovative plugin structure, which enhances connectivity and equips you with a competitive edge in your operations. This unique feature is complemented by Hotel-X's ability to provide pre-processed responses, ensuring your system tasks are efficient and hassle-free.


[Añadir esquema]


In this quickstart tutorial, you will create a basic sample booking. Along the way, you will grasp essential concepts and techniques that are foundational to using the API for various tasks, including:


* Retrieving static information
* Making a booking
* Managing reservations


## Let's get started: How to make a booking!

Hotel-X offers a powerful GraphQL-based API that simplifies the process of booking hotels and managing reservations. Whether you're a seasoned developer or just getting started, this guide will walk you through the basics of using the API to make hotel bookings.


### Introduction and prerequisites

#### API Endpoint

Hotel-X, being a GraphQL-based API, utilizes a single endpoint for all operations:


```html
https://api.travelgatex.com
```

#### Request Headers

To interact with the API, you'll need to include two essential request headers:


* Gzip Compression: This header helps optimize data transfer between your application and the API.


```html
Accept-Encoding: gzip.
```


* API Key (For this basic sample booking, we provide you with a test API Key): We've provided a test API Key for this sample booking to get you started, but once you have started our Onboarding you would obtain your own API key to use in your dev andproduction environment.


```html
Authorization: ApiKey 8626cf56-e364-4fd1-4fe0-311e23ac6355
```

#### Supported Operations

Lastly, please note that the Hotel-X API supports two types of operations:


* `Query`: which are "read-only" and used for retrieving data from our system.  You can use queries to search for hotels, check availability...


* `Mutation`: which allow for changes, additions, or deletions of data within our system. This is where you can create bookings, update reservations...

But now this quickstart guide will focus on the basics of using the Hotel-X API to make hotel reservations, so let's dive in and get started!


### Step 1: Find available hotels based on your search criteria

The Search query is where the adventure begins in our shopping journey! Our aim here is to see what's available within your specified date range and for the number of guests (pax) you have in mind, whether it's for a particular hotel or in your desired destination. This step lets you explore your options before committing to a booking. You can even spice things up by searching with one or more sellers' accesses, giving you the freedom to tailor your search. But hey, for this example, let's kick it off with a simple search for a specific hotel using a particular test Seller!

:::tip

 This example demonstrates the essential fields for obtaining results but keep in mind that the Hotel-X API offers a wide range of additional fields and functionalities! If you're curious and want to discover all the exciting details, check out the full [search step documentation](#). Happy exploring! 😊🔍

:::


```graphql
query {
	hotelX {
		search(
			criteria: {
				checkIn: "2024-10-28"
				checkOut: "2024-10-29"
				occupancies: [{ paxes: [{ age: 30 }, { age: 30 }] }]
				hotels: ["1"]
				currency: "EUR"
				market: "ES"
				language: "es"
				nationality: "ES"
			}
			settings: {
				client: "client_demo"
				context: "HOTELTEST"
				testMode: true
				timeout: 25000
			}
			filterSearch: { access: { includes: ["2"] } }
		) {
			context
			errors {
				code
				type
				description
			}
			warnings {
				code
				type
				description
			}
			options {
				id
				accessCode
				supplierCode
				hotelCode
				hotelName
				boardCode
				paymentType
				status
				occupancies {
					id
					paxes {
						age
					}
				}
				rooms {
					occupancyRefId
					code
					description
					refundable
					roomPrice {
						price {
							currency
							binding
							net
							gross
							exchange {
								currency
								rate
							}
						}
						breakdown {
							start
							end
							price {
								currency
								binding
								net
								gross
								exchange {
									currency
									rate
								}
								minimumSellingPrice
							}
						}
					}
					beds {
						type
						count
					}
					ratePlans {
						start
						end
						code
						name
					}
				}
				price {
					currency
					binding
					net
					gross
					exchange {
						currency
						rate
					}
					minimumSellingPrice
					markups {
						channel
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						rules {
							id
							name
							type
							value
						}
					}
				}
				supplements {
					start
					end
					code
					name
					description
					supplementType
					chargeType
					mandatory
					durationType
					quantity
					unit
					resort {
						code
						name
						description
					}
					price {
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
					}
				}
				surcharges {
					code
					chargeType
					description
					price {
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						markups {
							channel
							currency
							binding
							net
							gross
							exchange {
								currency
								rate
							}
						}
					}
				}
				rateRules
				cancelPolicy {
					refundable
					cancelPenalties {
						deadline
						isCalculatedDeadline
						hoursBefore
						penaltyType
						currency
						value
					}
				}
				remarks
			}
		}
	}
}
```

### 2. Quote your selected option

Now, let's dive into the exciting part! After carefully reviewing all the options in the search results and finding the hotel that perfectly suits your journey, it's time to move forward and request a quote. This quote operation is like getting an exclusive preview before the grand booking. It provides you with up-to-the-minute pricing, a detailed breakdown of your expenses, and crucial information about cancellation policies.

To make this happen, you'll need to retrieve the `optionRefId` from the search results and use this value as the input for the Quote request:

```graphql
query {
	hotelX {
		quote(
			criteria: {
				optionRefId: "13[%!03!~|3[%@241028!~|241029!~|1!~|1!~|0!~|ES!~|ES!~|es!~|EUR!~|0!~|2!~|1!~|1!~|1!~|0!~|15091141!~|BAR[%@BAR!~|146[%@0[%@false[%@EUR[%@[%@0[%@!~|1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0!~|2269[%!2269!~|30[%@30!~|!~|Double Standard!~|1!~|!~|mercado[%@ES[%!ExpireDate[%@29/10/2024[%!tarifaNRF[%@true[%!RateRule[%@tarifaNoRefundablePorHabitacion!~|OK!~|Sith!~|0!~|"
			}
			settings: {
				client: "client_demo"
				context: "HOTELTEST"
				testMode: true
				timeout: 5000
			}
		) {
			errors {
				code
				type
				description
			}
			warnings {
				code
				type
				description
			}
			optionQuote {
				optionRefId
				status
				price {
					currency
					binding
					net
					gross
					exchange {
						currency
						rate
					}
					minimumSellingPrice
				}
				surcharges {
					chargeType
					price {
						currency
						binding
						net
						gross
						exchange {
							currency
							rate
						}
						minimumSellingPrice
					}
					description
				}
				cancelPolicy {
					refundable
					description
					cancelPenalties {
						hoursBefore
						penaltyType
						currency
						value
					}
				}
				paymentType
				cardTypes
				remarks
			}
		}
	}
}
```


### 3. Confirm and book the option!

You're almost there! After securing your quote and ensuring all the details align with your travel plans, it's time to proceed with the booking. In this step, you confirm your reservation and officially lock in your stay.

You'll need to provide the 'optionRefId' returned in the Quote step and enter all the necessary passenger information. Upon a successful booking request, you'll receive a confirmation along with essential reservation details. Congratulations! Your hotel stay is now officially booked.

```graphql
mutation {
	hotelX {
		book(
			input: {
				optionRefId: "11!11?1$241028?241029?1?1?0?ES?ES?es?EUR?0?2?1?1?1?0?15091142?BAR[%@BAR?146.0$0$false$EUR$$0$?1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0?2269!2269?30$30??Double Standard?1??After$146.0!Before$146.0!ExpireDate$29/10/2024!mercado$ES!tgx_sess$f6152cba-f792-4e81-a2c1-e73ca63ecd02?OK?Sith?0?"
				clientReference: "test_0123456789"
				deltaPrice: { amount: 10, percent: 10, applyBoth: true }
				holder: { name: "Jane", surname: "Doe" }
				remarks: "This is just a test booking! Feel free to include any extra information in the remarks section that you'd like the supplier to know."
				rooms: {
					occupancyRefId: 1
					paxes: [
						{ name: "Jane", surname: "Doe", age: 30 }
						{ name: "John", surname: "Smith", age: 30 }
					]
				}
			}
			settings: {
				client: "client_demo"
				context: "HOTELTEST"
				testMode: true
				timeout: 60000
			}
		) {
			errors {
				code
				type
				description
			}
			warnings {
				code
				type
				description
			}

			booking {
				status
				price {
					currency
					binding
					net
					gross
					exchange {
						currency
						rate
					}
				}
				reference {
					bookingID
					client
					supplier
					hotel
				}
				holder {
					name
					surname
				}
				cancelPolicy {
					refundable
					cancelPenalties {
						hoursBefore
						penaltyType
						currency
						value
					}
				}
				remarks
				hotel {
					hotelCode
					hotelName
					bookingDate
					start
					end
					boardCode
					occupancies {
						id
						paxes {
							age
						}
					}
					rooms {
						code
						description
						occupancyRefId
						price {
							currency
							binding
							net
							gross
							exchange {
								currency
								rate
							}
						}
					}
				}
			}
		}
	}
}

```

### Next steps

Congratulations on completing this quickstart tutorial! You've just learned how to create a basic sample booking. But there's more to discover:

- [Retrieve static information](../apis/for-buyers/hotel-x-pull-buyers-api/content): Explore accessing static data.
- [Make a booking](../apis/for-buyers/hotel-x-pull-buyers-api/booking-flow): Learn how to book with more details.
- [Manage reservations](../apis/for-buyers/hotel-x-pull-buyers-api/booking-management): Get the hang of reservation management.

Our documentation has additional useful fields and functionalities for your business. To find out more, browse through our documentation to unlock the potential of these methods. Enjoy your journey!