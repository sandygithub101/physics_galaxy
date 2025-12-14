export const razorpayGateway = (acc_key, key) => {
  const options = {
    key: key, // Replace with your Razorpay Key
    // amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise (500 INR).
    // currency: 'INR',
    order_id: acc_key,
    theme: {
      color: '#3399cc',
    },
  };
  const rzp1 = new window.Razorpay(options);

  rzp1.on('payment.failed', function (response) {
    console.log('Payment failed:', response.error.code, response.error.description);
  });
}