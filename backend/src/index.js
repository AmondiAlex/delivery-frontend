const express = require('express')
require('./db/mongoose')
const User = require('./models/user');
const Order = require("./models/order");
const LogIn = require("./models/login");
const cors = require("cors");

const app = express()
const port = process.env.PORT || 8081
app.use(express.json())

app.use(cors())
app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    });
});
app.post('/Order', (req, res) => {
    const Order = new Order(req.body)
    Order.save().then(() => {
        res.send(Order)
    }).catch((e) => {
        res.status(400).send(e)
    });
});
app.post('/login', (req, res) => {
    const LogIn = new LogIn(req.body)
    LogIn.save().then(() => {
        res.send(LogIn)
    }).catch((e) => {
        res.status(400).send(e)
    });
});

app.get("/users", (req, res) => {
    User.find({})
    .then((users) => {
        res.json(users);
    })
    .catch((error) => {
        res.status(500).send(error);
    });
});
app.get("/order", (req, res) => {
    Order.find({})
    .then((order) => {
        res.json(order);
    })
    .catch((error) => {
        res.status(500).send(error);
    });
});
app.get("/login", (req, res) => {
    LogIn.find({})
    .then((login) => {
        res.json(login);
    })
    .catch((error) => {
        res.status(500).send(error);
    });
});
app.listen(port, () => {
    console.log('Server is up on port ' + port)
});