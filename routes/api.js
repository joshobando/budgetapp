const express = require("express");
const Transaction = require("../models/transaction");
const router = express.Router();

router.post("/api/transections", ({ body }, res) => {
    Transaction.create(body)
    .then(dbTransaction => {
        res.json(dbTransaction);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
    Transaction.insertMany(body)
    .then(dbTransaction => {
        res.json(dbTransaction);
    });
});

router.get("/api/transaction", (req, res) => {
    Transaction.find({}).json({})
})