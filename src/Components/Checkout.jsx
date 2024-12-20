import React, { useContext, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { CartContext, CartContexts } from "../Contexts/CartContexts"

const Checkout = () => {

  const {clearCart} = useContext(CartContexts)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  
  const handlePaymentSuccess = (paymentDetails, data) => {
    // Handle successful payment here, e.g., update order status, send confirmation email, etc.
    setShowSuccessMessage(true);
  };

 
  
  const handlePaymentError = (error) => {
    // Handle payment errors here, e.g., display error message to user
    console.error('Error:', error);
  };

  const handlePaymentCancel = () => {
    // Handle payment cancellation here, e.g., display a message to the user
    console.log('Payment canceled');
  };

  const { cart } = useContext(CartContexts);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "sb-rc47xp34025619@business.example.com", // Replace with your PayPal client ID
        "data-client-token": "" // Optional, for advanced use cases
      }}
    >
      {showSuccessMessage ? (
        clearCart()
      ) : (
        <PayPalButtons
          style={{ layout: 'vertical' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total.toFixed(2), // Replace with your desired amount
                    currency_code: 'USD'
                  }
                }
              ]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              handlePaymentSuccess(details, data);
            });
          }}
          onError={handlePaymentError}
          onCancel={handlePaymentCancel}
        />
      )}
    </PayPalScriptProvider>
  );
};

export default Checkout;