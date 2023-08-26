const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors());

app.post('/tradingview/alert', (req, res) => {
  const alertData = req.body;
  console.log('Received TradingView Alert:', alertData);
  res.status(200).json(alertData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
