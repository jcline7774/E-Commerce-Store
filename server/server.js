require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const productRoutes = require("./routes/products");
const checkoutRoutes = require("./routes/checkout");

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
};


app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/create-checkout-session", checkoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
