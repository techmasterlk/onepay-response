const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// Payment callback handler
app.post("/payment-callback", (req, res) => {
  try {
    console.log("trigged");

    const paymentData = req.body;

    // Add your payment verification logic here
    // You should verify the transaction status with Onepay before updating your database

    // Sample response handling
    if (paymentData.status === 1000) {
      // Payment successful
      // Update your database with payment status
      res.json({
        status: "success",
        message: "Payment processed successfully",
      });
    } else {
      // Payment failed
      res.json({
        status: "failed",
        message: "Payment processing failed",
      });
    }
  } catch (error) {
    console.error("Payment callback error:", error);
    res.status(500).json({
      status: "error",
      message: "Error processing payment callback",
    });
  }
});

app.listen(4000, () => {
  console.log("running");
});
