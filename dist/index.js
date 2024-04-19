const express = require('express');
const app = express();

// Definiere eine Routen-Handler-Funktion für den Endpunkt "/"
app.get('/', (req, res) => {
  res.send('Hallo, Welt!');
});

// Starte den Server und lausche auf Port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
