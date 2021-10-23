const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkoutForm');

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
    cvv: Number,
    expiryDate: String,
    billingZipCode: String
  }
})

const Form = mongoose.model('Form', formSchema);

const save = ({name, email, password, line1, line2, city, state, zipCode, creditCard, cvv, expiryDate, billingZipCode}) => {
  let newEntry = new Form({
    name,
    email,
    password,
    address: {
      line1,
      line2,
      city,
      state,
      zipCode
    },
    payment: {
      creditCard,
      cvv,
      expiryDate,
      billingZipCode
    }
  });
  newEntry.save();
}

module.exports.save = save;