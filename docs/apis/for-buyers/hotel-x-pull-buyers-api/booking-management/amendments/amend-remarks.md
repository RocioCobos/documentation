---
sidebar_position: 6
---

# Amend Remarks

The Amend Dates operation enables you to change the booking's remarks. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system.

## Quote Amend Remarks

The quote amend query simulates the amendment to confirm the price of the booking modification. The returned fields include:

* `amendFee`
* `amendedBookingDetail`
   * `reference`
   * `holder`
   * `hotel`
   * `price`
   * `quotePrice`
   * `cancelPolicy`
   * `remarks`
   * `status`

### Inputs

When creating your quote amend query, you have two different inputs to fill based on your specific needs:

1. Criteria
2. Settings

#### 1. Criteria 

You can perform the `query` (simulation) of the amendment sending all the booking information (references, dates, hotel code) or sending the bookingID got in the booking flow:

* Booking information:
   * `accessCode`
   * `language`
   * `hotelCode`
   * `reference`
   * `dates`

* BookingID got in the booking flow:
   * `bookingID`


### 2. Settings 

Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients.

Mandatory Settings:
* `context`
* `timeout` (timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)
* `businessRules`
* `language`
* `currency`
* `nationality`
* `markets`

Optional Settings:
* `group`
* `auditTransactions`
* `suppliers` (each one contains its own code, settings and accesses)
* `plugins`
* `testMode` (this flag allows only the accesses checked as test)
* `clientTokens` (used to identify the origin of the request, this is only used in plugins)



## Commit Amend Remarks 

The commit amend mutation generates the amendment to confirm the booking modification. The returned fields include:

* `amendFee`
* `amendedBookingDetail`
   * `reference`
   * `holder`
   * `hotel`
   * `price`
   * `quotePrice`
   * `cancelPolicy`
   * `remarks`
   * `status`


### Inputs

When creating your quote amend query, you have two different inputs to fill based on your specific needs:

1. Data
2. Settings

#### 1. Data 

You must perform the `mutation` (commit) of the amendment sending the amendmentID received in the quote amend response:
* `amendmentID`

### 2. Settings 

Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients.

**Mandatory Settings**
* `context`
* `timeout` (timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)
* `businessRules`
* `language`
* `currency`
* `nationality`
* `markets`

**Optional Settings**
* `group`
* `auditTransactions`
* `suppliers` (each one contains its own code, settings and accesses)
* `plugins`
* `testMode` (this flag allows only the accesses checked as test)
* `clientTokens` (used to identify the origin of the request, this is only used in plugins)