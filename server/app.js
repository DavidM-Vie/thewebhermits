const express = require('express');
const path = require('path');

const app = express(); 

const  PORT = process.env.PORT || 3000; 

const publicPath = path.join(__dirname, '../', 'build'); 

app.use(express.static(path.join(__dirname, '../', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(PORT, () => console.log('Ole cloth ears is listening on port ', PORT))