const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`Dane odebrane! Imię: ${name}, E-mail: ${email}`);
});

app.listen(port, () => {
  console.log(`Aplikacja działa na http://localhost:${port}`);
});
