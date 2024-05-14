   const express = require('express');
   const app = express();
   const PORT = 3000;

   app.get('/', (req, res) => {
       res.send('Welcome to the Home Page!');
   });

   app.get('/about', (req, res) => {
       res.send('About Us');
   });

   app.get('/info', (req, res) => {
       res.send('Info Page');
   });

   app.get('/user/:userId', (req, res) => {
       res.send(`Info for User ID: ${req.params.userId}`);
   });

   app.use((req, res, next) => {
       res.status(404).send('Sorry, page not found!');
   });

   app.listen(PORT, () => {
       console.log(`Server running on http://localhost:${PORT}`);
   });