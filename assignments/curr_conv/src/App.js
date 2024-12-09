import React from "react";

/*
Create the SourceCurrency component.
This component should render a dropdown to select the source currency (USD, EUR, JPY) and an input field to enter the amount.
The component should accept the following props:
- currency: the currently selected source currency
- amount: the currently entered amount
- onCurrencyChange: an event handler to be called on changes in the source currency dropdown
- onAmountChange: an event handler to be called on changes in the amount input field
*/
function SourceCurrency({ currency, amount, onCurrencyChange, onAmountChange }) {

    function handleCurrencyChange(e) {
        onCurrencyChange(e.target.value); /*call next function with value*/
    }

    function handleAmountChange(e) {
        onAmountChange(e.target.value);
    }

    return (
        <div>
            <label for="sourceCurrency">Source Currency</label>
            <select id="sourceCurrency" value={currency} onChange={handleCurrencyChange}> /*call function onChange*/
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
            </select>
            <label for="sourceAmount">Amount</label>
            <input id="sourceAmount" type="number" value={amount} onChange={handleAmountChange} ></input>
        </div>
    );
}

/*
Create the TargetCurrency component.
This component should render a dropdown to select the target currency (USD, EUR, JPY).
The component should accept the following props:
- currency: the currently selected target currency
- onCurrencyChange: an event handler to be called on changes in the target currency dropdown
*/
function TargetCurrency({ currency, onCurrencyChange }) {

    function handleTargetCurrency(e) {
        onCurrencyChange(e.target.value); /*call next function with value*/
    }

    return (
        <div>
            <label for="targetCurrency">Target Currency</label>
            <select id="targetCurrency" value={currency} onChange={handleTargetCurrency}> /*call function onChange*/
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
            </select>
        </div>
    );
}

/*
Create the ConversionResult component.
This component should render the converted amount and the target currency.
The component should accept the following props:
- amount: the converted amount
- currency: the target currency
*/
function ConversionResult({ amount, currency }) {
    return (
            <div>
                <p>Conversion Result: {amount}  {currency}</p>
            </div>
    );
}

      
/*
Write the MyApp component that will render the SourceCurrency, TargetCurrency, and ConversionResult components.
This component should have the following state:
- sourceCurrency: the currency selected in the source currency dropdown
- targetCurrency: the currency selected in the target currency dropdown
- amount: the amount entered in the amount input field
- convertedAmount: the amount converted to the target currency

This component should have event handlers to handle changes in the source currency, target currency, and amount.
These event handlers should be passed as props to the SourceCurrency and TargetCurrency components.
When the source currency, target currency, or amount changes, the converted amount should be updated.

To compute the conversion, you can use the free currency API at https://www.freecurrencyapi.com/.
You can use the following API key: fca_live_e8k2PVN6I4tfPmtQvLLtNhLZwJVOljHTfYJvMhld
The API endpoint to get the latest exchange rates is: https://api.freecurrencyapi.com/v1/latest
The API endpoint requires the following query parameters:
- apikey: the API key
- currencies: the target currency
- base_currency: the source currency
The API will return the exchange rates for the target currency relative to the source currency.
Here's an example request: https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_e8k2PVN6I4tfPmtQvLLtNhLZwJVOljHTfYJvMhld&currencies=EUR&base_currency=USD
The response will be in the following format:
{
    "status": 200,
    "data": {
        "EUR": 0.85
    }
}

*/
function App() {
    
    const freeCurrencyApiKey = 'fca_live_e8k2PVN6I4tfPmtQvLLtNhLZwJVOljHTfYJvMhld';
    

    /*
    Initialize the state variables sourceCurrency, targetCurrency, amount, and convertedAmount using the React.useState hook.
    */
    const [sourceCurrency, setSourceCurrency] = React.useState('USD');
    const [targetCurrency, setTargetCurrency] = React.useState('JPY');
    const [amount, setAmount] = React.useState(0);
    const [convertedAmount, setConvertedAmount] = React.useState(0);

    /*
    Write a function fetchConversionRate that takes an API key, source currency, and target currency as arguments.
    This function should make a request to the free currency API to get the conversion rate from the source currency to the target currency.
    The function should return the conversion rate.
    */
    const fetchConversionRate = async (apikey, source, target) => {
        const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apikey}&base_currency=${source}&currencies=${target}`;
        const response = await fetch(url);
        const resp = await response.json();
        return resp.data[target]; /*[0]*/
    };

    /*
    Write a function computeConversion that takes the source currency, target currency, and amount as arguments.
    This function should call fetchConversionRate to get the conversion rate from the source currency to the target currency.
    It should then compute the converted amount by multiplying the amount by the conversion rate.
    Finally, it should update the convertedAmount state with the computed value.
    */
    const computeConversion = async (source, target, amount) => {
        const conversionRate = await fetchConversionRate(freeCurrencyApiKey, source, target);
        setConvertedAmount(amount * conversionRate);
    };

    /*
    Write an event handler handleSourceCurrencyChange that takes a currency as an argument.
    This event handler should update the sourceCurrency state with the new currency.
    It should then call computeConversion with the new source currency, target currency, and amount.
    */
    const handleSourceCurrencyChange = (currency) => {
        setSourceCurrency(currency);
        computeConversion(sourceCurrency, targetCurrency, amount);
    };
    

    /*
    Write an event handler handleTargetCurrencyChange that takes a currency as an argument.
    This event handler should update the targetCurrency state with the new currency.
    It should then call computeConversion with the source currency, new target currency, and amount.
    */
    const handleTargetCurrencyChange = (currency) => {
        setTargetCurrency(currency);
        computeConversion(sourceCurrency, targetCurrency, amount);
    };

    /*
    Write an event handler handleAmountChange that takes an amount as an argument.
    This event handler should update the amount state with the new amount.
    It should then call computeConversion with the source currency, target currency, and new amount.
    */
    const handleAmountChange = (amount) => {
        setAmount(amount);
        computeConversion(sourceCurrency, targetCurrency, amount);
    };

    /*
    Render the SourceCurrency, TargetCurrency, and ConversionResult components.
    Pass this component's state as props to each component.
    Also pass the event handlers to the SourceCurrency and TargetCurrency components.
    */
    return (
        <div>
            <h1>Currency Converter</h1>
            <SourceCurrency
                currency={sourceCurrency}
                amount={amount}
                onCurrencyChange={handleSourceCurrencyChange}
                onAmountChange={handleAmountChange}
            />
            <TargetCurrency
                currency={targetCurrency}
                onCurrencyChange={handleTargetCurrencyChange}
            />
            <ConversionResult
                amount={convertedAmount}
                currency={targetCurrency}
            />
        </div>
    );
}

export { App, SourceCurrency, TargetCurrency, ConversionResult };
