const userRouter = require("./user")
const authRouter = require("./auth")
const goodsRouter = require("./goods")
const bodiesRouter = require("./bodies")
const express = require("express")

const routes = (app) => {
    app.use(express.json())
    app.use('/users', userRouter)
    app.use('/login', authRouter)
    app.use('/goods', goodsRouter)
    app.use('/bodies', bodiesRouter)
}

module.exports = routes