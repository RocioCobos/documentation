---
sidebar_position: 2
---

# Hotel Buyers API (Legacy) - Cancel Policies

We have updated our [Quote (Valuation)](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/methods/bookingflow/quote/) response in order to provide more precise information regarding cancellationPolicies.

- **TIMEZONE:**  
    We have added the new field “Timezone” in our Metadata method:

    ```
    image
    ```

    Timezone (see the [Metadata](https://docs.travelgatex.com/connectiontypesbuyers/legacy/methods/messages/metadata/) docs to check all possible values) will specify the timezone in UTC in which the cancellation policies are located.


:::info
If you have any doubts about the timezone returned by your Seller (for example, if TimeZone is set as Unknown) we advise you to add an offset of +14 hours in order to avoid unexpected penalties caused by timezone difference.
:::

- **DEADLINE:**  
    Additionally, we have added the "Deadline" field on [CancellationPolicies](https://docs.travelgatex.com/connectiontypesbuyers/legacy/methods/messages/valuation/#valuationrs-example) returned in Quote/Valuation response, in order to provide more precise information and avoid losing competitiveness.

    This field is not subjected to any ambiguity as it is a date in **UTC-0 Standard**. The conversion of the date is made according to the value specified on the Metadata TimeZone.

    ```
    image
    ```

- **CALCULATED DEADLINE:**  
    Finally, we have also added a "CalculatedDeadline" field to specify if the Deadline has been taken from the Seller’s response or if it has been calculated by TravelgateX.

    Please check the following table for a clear view of how we will treat the Cancellation Policies returned by the Seller according to the TimeZone established on the Metadata:

    ```
    image
    ```


**What do I need to do?**
- **hoursBefore node:** TravelgateX returns the information as provided by the Seller - no extra hours added on our side. The logic regarding this information should be managed on your side.
- **deadline node:** TravelgateX returns the calculated deadline information - please check above chart. *Please make sure you use this node*.


:::info Why?
The limit in which a booking can be cancelled without penalty is specified on the field **HoursBefore**. This parameter informs about the maximum hours that could pass before the penalty starts to apply.

Transparency is a fundamental value in our culture and as such we avoid modifying the information provided by our partners. For this reason, hoursBefore value from cancellationPolicies will be returned without adding extra hours.
:::
