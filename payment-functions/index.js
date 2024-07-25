const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
const paypal = require("paypal-rest-sdk");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors());

paypal.configure({
  mode: "sandbox",
  client_id:
    "AW_vE64qPk0GNxsqHPFEb8TlVmTuVdvPGSKbkKda0CXd4UW8yFKYFdxqEvPaGIAU1ySo5EvLiyzzJgq8",
  client_secret:
    "EECH3mOZ7V5wAwKlEBgBlodVihdbQnBrugJk_02eLRCukTQCe5GgVyCyY2mRPvzrit1FJB04v7V2k1jK",
});

// Root End point
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create payment
app.post("/payment", async (req, res) => {
  let selectedCourse = req.body.selectedCourse;
  let selectedEmail = req.body.selectedEmail;

  console.log("// Using PAYPAL payment portal");
  console.log("// Your selected Coures is ", selectedCourse);
  console.log("// Your selected Email is ", selectedEmail);
  //   console.log(emailId);
  let create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "https://us-central1-cyb-lms.cloudfunctions.net/api/success",
      cancel_url: "https://us-central1-cyb-lms.cloudfunctions.net/api/failed",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: selectedEmail,
              sku: selectedCourse,
              price: "1.00",
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: "1.00",
        },
        description: "This is the payment description.",
      },
    ],
  };
  try {
    await paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        console.log(error);
        throw error;
      } else {
        console.log(payment);

        let data = payment;
        res.json(data);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.toString());
  }
});

app.get("/success", async (req, res) => {
  try {
    console.log(req.query);

    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const express_checkout_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: "1.00",
          },
          description: "This is the payment description.",
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      express_checkout_json,
      async function (error, payment) {
        if (error) {
          console.log(error);
          return res.redirect("http://localhost:3000/failure");
        } else {
          const response = JSON.stringify(payment);
          const ParsedResponse = JSON.parse(response);

          console.log("** Payment done by ** ", ParsedResponse);
          console.log(
            "** Email used ** ",
            ParsedResponse.transactions[0].item_list.items[0].name,
          );
          console.log("** Transaction Id ** ", ParsedResponse.id);
          console.log("** Status ** ", ParsedResponse.state);
          console.log(
            "** Amount ** ",
            ParsedResponse.transactions[0].amount.total,
          );
          console.log(
            "** Course Id **",
            ParsedResponse.transactions[0].item_list.items[0].sku,
          );
          console.log(
            "** Payment Method ** ",
            ParsedResponse.payer.payment_method,
          );

          await db.collection("testFunction").add({
            email: ParsedResponse.transactions[0].item_list.items[0].name,
            txn_id: ParsedResponse.id,
            payment_status: ParsedResponse.state,
            amount: parseInt(ParsedResponse.transactions[0].amount.total),
            courseId: ParsedResponse.transactions[0].item_list.items[0].sku,
            payment_via: ParsedResponse.payer.payment_method,
            currency: "USD",
          });

          return res.redirect("http://localhost:3000/success");
        }
      },
    );
  } catch (error) {
    console.log(error);
    res.status(500).send(error.toString());
  }
});

app.get("/failed", async (req, res) => {
  return res.redirect("http://localhost:3000/failure");
});

// // Razor Pay Integrations
// const Razorpay = require("razorpay");
// const razorpay = new Razorpay({
//   key_id: "rzp_test_lIRAcs1beGRXP1",
//   key_secret: "0raTPfNbT20wcrN7t6pxtYQN",
// });

// app.post("/orders", async (req, res) => {
//   let selectedCourse = req.body.selectedCourse;
//   console.log("// Using RazorPayment Portal");
//   console.log("// Your selected Course is", selectedCourse);
//   console.log("// Request is ", req.body);

//   const options = {
//     amount: req.body.amount,
//     currency: req.body.currency,
//     // reciept: `receipt_order_${Date.now()}`,
//     reciept: `receipt_order_#1`,
//     payment_capture: 1,
//   };

//   try {
//     const response = await razorpay.orders.create(options);
//     console.log("// Response is here from TRY BLOCK");
//     console.log(response);
//     res.json({
//       id: response.id,
//       currency: response.currency,
//       amount: response.amount,
//     });
//   } catch (error) {
//     console.log(error);
//     // res.status(500).send(error.toString());
//   }
// });

// // Something else

// // app.post("/razorsuccess", async (req, res) => {
// //   try {
// //     const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
// //       req.body;
// //     const payment = await razorpay.payments.fetch(razorpay_payment_id);
// //     console.log("** Success Url");
// //     console.log(payment);
// //     console.log("** Payment done by ** ", payment.email);
// //     console.log("** Transaction Id ** ", payment.id);
// //     console.log("** Status ** ", payment.status);
// //     console.log("** Amount ** ", payment.amount / 100); // converting from paise to INR
// //     console.log("** Course Id **", payment.notes.courseId);

// //     await db.collection("testFunction").add({
// //       email: payment.email,
// //       txn_id: payment.id,
// //       payment_status: payment.status,
// //       amount: payment.amount / 100, // converting from paise to INR
// //       courseId: payment.notes.courseId,
// //     });
// //     res.redirect("http://localhost:3000/success");
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).send(error.toString());
// //   }
// // });
// // app.get("/failed", async (req, res) => {
// //   return res.redirect("http://localhost:3000/failure");
// // });

// // Something else

// app.get("/razorpayment/:paymentId", async (req, res) => {
//   const { paymentId } = req.params;
//   const razorpay = new Razorpay({
//     key_id: "rzp_test_lIRAcs1beGRXP1",
//     key_secret: "0raTPfNbT20wcrN7t6pxtYQN",
//   });
//   try {
//     const payment = await razorpay.payments.fetch(paymentId);

//     if (!payment) {
//       return res.status(500).json("**** Error at razorpay loading");
//     }

//     res.json({
//       status: payment.status,
//       method: payment.method,
//       amount: payment.amount,
//       currency: payment.currency,
//     });
//   } catch (error) {
//     res.status(500).json("**** Failed to fetch data");
//   }
// });

// Redo it

const Razorpay = require("razorpay");
const crypto = require("crypto");
// const cors = require("cors");

app.post("/order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      // CLIENT ID AND SECRET
      key_id: "rzp_test_lIRAcs1beGRXP1",
      key_secret: "0raTPfNbT20wcrN7t6pxtYQN",
    });
    if (!req.body) {
      return res.status(400).send("Bad Request request body is empty");
    }
    // Creating options for data coming from the client side
    const options = req.body;
    const order = await razorpay.orders.create(options);
    console.log("*** INSIDE RAZORPAY PORTAL ***");
    console.log("*** OPTIONS ***", options);
    console.log("*** ORDER ***", order);
    console.log("*** BODY ***", req.body);
    if (!order) {
      return res.status(400).send("Bad request Order Id not generated");
    }
    res.send(order);
  } catch (error) {
    console.log("error from outer block");
    console.log(error);
    res.status(500).send(error);
  }
});
app.post("/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", "0raTPfNbT20wcrN7t6pxtYQN");
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");

  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit " });
  }
  // Logs only if signature is verified
  console.log("^^^ SIGNATURE VERIFIED ^^^");
  // console.log("^^^ REQUEST ^^^", req);
  console.log("^^^ REQUEST BODY ^^^", req.body);
  console.log("^^^amount: ^^^", req.body.amount);
  console.log("^^^courseId: ^^^", req.body.selectedCourse);
  console.log("^^^email: ^^^", req.body.email);
  console.log("^^^payment_status: ^^^", "approved");
  console.log("^^^payment_via: ^^^", req.body.payment_via);
  console.log("^^^txn_id: ^^^", razorpay_payment_id);
  await db.collection("testFunction").add({
    email: req.body.email,
    txn_id: razorpay_payment_id,
    payment_status: "approved",
    amount: req.body.amount / 100,
    courseId: req.body.selectedCourse,
    payment_via: req.body.payment_via,
    currency: "INR",
  });

  res.json({
    msg: "Transaction is legit! ",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});

exports.api = functions.https.onRequest(app);
