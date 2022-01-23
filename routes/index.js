const router = require('express').Router();
const apiRoutes = require('./api');
// const seedAll = require('../seeds/index');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// seedAll();

module.exports = router;