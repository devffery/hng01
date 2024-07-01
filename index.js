const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Function to get the client's IP address
function getClientIp(req) {
  const xForwardedFor = req.headers['x-forwarded-for'];
  return xForwardedFor ? xForwardedFor.split(',')[0] : req.connection.remoteAddress;
}

app.get('/api/hello', async (req, res) => {
  const visitorName = req.query.visitor_name || 'Visitor';

  const clientIp = getClientIp(req);

  // Placeholder for fetching location and temperature data
  const location = 'New York'; 
  const temperature = 11; 

  res.json({
    client_ip: clientIp,
    location: location,
    greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
