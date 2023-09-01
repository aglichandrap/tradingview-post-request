const express = require('express');
const bodyParser = require('body-parser'); // To parse incoming JSON data

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

function getLogData(alertData) {
    // You can fetch or generate log data here, and incorporate alertData if needed
    const logData = `Received TradingView Alert: ${JSON.stringify(alertData)}`;
    return logData;
}

// TradingView alert endpoint
app.post('/tradingview/alert', (req, res) => {
    const alertData = req.body; // Alert data sent from TradingView

    // Log the alert data (you can customize this part)
    console.log('Received TradingView Alert:', alertData);

    // Get log data and send a response
    const logData = getLogData(alertData);
    res.status(200).json({ logData });
});

app.get('/tradingview/log', (req, res) => {
    // If you want to include alertData here, you can modify the getLogData function accordingly
    const alertData = req.body; // You may need to adjust this to get the alert data you want
    const logData = getLogData(alertData);
    res.send(logData);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
