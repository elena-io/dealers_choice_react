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

router.get('/api/orders', async (req, res, next) => {
    try {
        const orders = await Order.findAll({
            include: [
                { model: Customer,
                model:  Item}
            ]
        })
        res.json(orders)
    }
    catch(ex) {
        next(ex);
    }
})

router.get('/api/customers/:id/orders', async (req, res, next) => {
    try {
        res.send(await Order.findAll({
            where: {
                customerId: req.params.id
            },
            include: [ Customer, Item ]
        }))
    }
    catch(ex) {
        next(ex);
    }
})

module.exports = router;