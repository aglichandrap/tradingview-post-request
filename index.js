const express = require('express');
const bodyParser = require('body-parser'); // To parse incoming JSON data

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// TradingView alert endpoint
app.post('/tradingview/alert', (req, res) => {
  const alertData = req.body; // Alert data sent from TradingView
  
  // Log the alert data (you can customize this part)
  console.log('Received TradingView Alert:', alertData);
  
  // Send a response
  res.status(200).json({ alertData });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
