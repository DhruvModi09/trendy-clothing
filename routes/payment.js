const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripeChargeCallback = (res) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

const paymentApi = (app) => {
  app.post("/payment", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
      description: "Software development services",
    };

    stripe.charges.create(body, stripeChargeCallback(res));
  });
};

module.exports = paymentApi;
