require('dotenv').config()
let mongoose = require("mongoose")
let db = require("../models")
// connect to the mongo DB using mongoose
mongoose.connect(process.env.MONGODB_URI || process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if (err) throw err
    console.log("DB Connected Successfully")
  })
// Add all the data to the array to be used
let budgetSeed = [
  {
    name: "Internet bill",
    value: -30
  },
  {
    name: "gift card",
    value: 100
  },
  {
    name: "reimbursement",
    value: 250
  },
  {
    name: "rental parking",
    value: 100
  }
]
// delete any data that was there and then insert the data
db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
