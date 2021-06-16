const router = require('express').Router();
const db = require('./db');
const { models: {
    Customer,
    Order,
    Item
}  } = db;


router.get('/api/customers', async (req, res, next) => {
    try {
        const customers = await Customer.findAll({
            include: [
                { model: Order }
            ]
        })
        res.json(customers)
    }
    catch(ex) {
        next(ex);
    }
})

router.get('/api/items', async (req, res, next) => {
    try {
        const items = await Item.findAll({
            include: [
                { model: Customer }
            ]
        })
        res.json(items)
    }
    catch(ex) {
        next(ex);
    }
})

router.get('/api/customers/:id', async (req, res, next) => {
    try {
        const customer = await Customer.findByPk(req.params.id, {
            include: [
                { model: Order }
            ]
        })
        res.json(customer)
    }
    catch(ex) {
        next(ex);
    }
})

module.exports = router;