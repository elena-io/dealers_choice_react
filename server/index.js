const path = require('path');
const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '../public');
const DIST_PATH = path.join(__dirname, '../dist');

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use(express.static('assets'));
app.use(require('../router.js'));

app.use('/css', express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome', 'css')))
app.use('/fonts', express.static(path.join(__dirname, '..', 'node_modules', 'font-awesome', 'fonts')))

const {
  conn,
  seed,
  models : {
    Customer,
    Order
  }
} = require('../db');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
