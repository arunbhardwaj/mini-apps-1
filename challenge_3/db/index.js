const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3300/checkoutForm');

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipCode: String
  },
  payment: {
    creditCard: String,
    CVV: Number,
    expiryDate: String,
    billingZipCode: String
  }
})

const Form = mongoose.model('Form', formSchema);

const save = (obj) = {
  let newEntry = new Form(obj);
  newEntry.save();
}
