import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
export default function CheckOuts() {
  return (
    <>
        <div id="paypal-button-container" class="paypal-button-container"></div>
        
        <div id="card-form" class="card_container">
            <div id="card-name-field-container"></div>
            <div id="card-number-field-container"></div>
            <div id="card-expiry-field-container"></div>
            <div id="card-cvv-field-container"></div>

            <div>
                <label for="card-billing-address-line-1">Billing Address</label>
                <input
                    type="text"
                    id="card-billing-address-line-1"
                    name="card-billing-address-line-1"
                    autocomplete="off"
                    placeholder="Address line 1"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="card-billing-address-line-2"
                    name="card-billing-address-line-2"
                    autocomplete="off"
                    placeholder="Address line 2"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="card-billing-address-admin-area-line-1"
                    name="card-billing-address-admin-area-line-1"
                    autocomplete="off"
                    placeholder="Admin area line 1"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="card-billing-address-admin-area-line-2"
                    name="card-billing-address-admin-area-line-2"
                    autocomplete="off"
                    placeholder="Admin area line 2"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="card-billing-address-country-code"
                    name="card-billing-address-country-code"
                    autocomplete="off"
                    placeholder="Country code"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="card-billing-address-postal-code"
                    name="card-billing-address-postal-code"
                    autocomplete="off"
                    placeholder="Postal/zip code"
                />
            </div>
            <br /><br />
            <button id="card-field-submit-button" type="button">
                Pay now with Card
            </button>
        </div>
        <p id="result-message"></p>
        
    </>
  )
}
