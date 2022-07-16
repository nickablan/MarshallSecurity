const express = require('express');
const healthRouter = express.Router();
healthRouter.get('/', async (req, res, next) => {
    res.send({message: 'Health Check: All is well!'})
})
module.exports = healthRouter;