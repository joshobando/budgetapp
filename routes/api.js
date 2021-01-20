const express = require("express");
const Transaction = require("../models/transaction");
const router = express.Router();

router.post("/api/transaction", ({ body }, res) => {
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
    Transaction.find({}).sort({date:-1})
    .then(dbTransaction => {
        res.json(dbTransaction);
    });
});

module.exports = router;