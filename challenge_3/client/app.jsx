// import React from 'react';
// import ReactDOM from 'react-dom';
/*
>>> import causing issues bc not using webpack
using CDN you don't need to import. In fact you can't use import
*/


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCheckout: true,
      showF1: false,
      showF2: false,
      showF3: false,
      data: {
        // name: '',
        // email: '',
        // password: '',
        // line1: '',
        // line2: '',
        // city: '',
        // state: '',
        // zipCode: -1,
        // creditCard: -1,
        // expiryDate: '',
        // cvv: -1,
        // billingZipCode: -1
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  changeFormView = (newState) => {
    this.setState(newState);
  }

  onChange = (key, e) => {
    let newState = this.state;
    newState.data[[key]] = e.target.value;
    this.setState(newState);
  }

  handleSubmit() {
    axios.post('http://localhost:3300/', this.state.data)
      .then(() => {
        console.log('sent');
        this.setState({data: {}})
      })
      .catch(err => console.log('not received'));
  }

  render() {
    return (
      <div>
        <Checkout parent={this.state} changeForm={this.changeFormView} />
        <ShowForm parent={this.state} changeForm={this.changeFormView} handleSubmit={this.handleSubmit} onChange={this.onChange}/>
      </div>
    )
  }
}

const Checkout = (props) => {
  return (
    <div>
      {props.parent.showCheckout &&
        <button onClick={() => props.changeForm({showCheckout: false, showF1: true})}>
          Checkout
        </button>
      }
    </div>
  )
}

const forms = [
  [
    {
      labelName: 'Name:',
      htmlFor: 'name',
      inputType: 'text'
    },
    {
      labelName: 'Email:',
      htmlFor: 'email',
      inputType: 'email',
    },
    {
      labelName: 'Password:',
      htmlFor: 'password',
      inputType: 'password',
    }
  ],
  [
    {
      labelName: 'Line 1:',
      htmlFor: 'line1',
      inputType: 'text'
    },
    {
      labelName: 'Line 2:',
      htmlFor: 'line2',
      inputType: 'text'
    },
    {
      labelName: 'City:',
      htmlFor: 'city',
      inputType: 'text'
    },
    {
      labelName: 'State:',
      htmlFor: 'state',
      inputType: 'text'
    },,
    {
      labelName: 'Zip Code:',
      htmlFor: 'zipCode',
      inputType: 'number'
    },
  ],
  [
    {
      labelName: 'Credit Card #:',
      htmlFor: 'creditCard',
      inputType: 'number'
    },
    {
      labelName: 'Expiry Date:',
      htmlFor: 'expiry',
      inputType: 'date'
    },
    {
      labelName: 'CVV:',
      htmlFor: 'cvv',
      inputType: 'number'
    },
    {
      labelName: 'Billing Zip Code:',
      htmlFor: 'billingZipCode',
      inputType: 'number'
    },
  ]
]

// If adding more forms, be sure to change the 'isFinal' flag to the last form
// and change the 'next' value.
const ShowForm = (props) => {
  let {showF1, showF2, showF3} = props.parent;

  return (
    <div>
      {showF1 && <Form title={'Guest Sign-Up'} arr={forms[0]} changeForm={props.changeForm} next={{showF1: false, showF2: true}} onChange={props.onChange}/>}
      {showF2 && <Form title={'Shipping Information'} arr={forms[1]} changeForm={props.changeForm} next={{showF2: false, showF3: true}} onChange={props.onChange}/>}
      {showF3 && <Form title={'Billing Information'} arr={forms[2]} changeForm={props.changeForm} next={{showF3: false, showCheckout: true}} isFinal={true} handleSubmit={() => props.handleSubmit()} onChange={props.onChange}/>}
    </div>
  )
}

const Form = ({title, arr, changeForm, next, onChange, isFinal = false, handleSubmit = ()=>{}}) => {
  return (
    <div>
      <h2>{title}</h2>
      <form>
        {arr.map(({htmlFor, labelName, inputType, inputId = htmlFor}) => {
          return <Input htmlFor={htmlFor} labelName={labelName} inputType={inputType} onChange={onChange}/>
        })}
        {isFinal && <button type="submit" onClick={() => {handleSubmit(); changeForm(next)}}>Final</button>}
        {!isFinal && <button onClick={() => changeForm(next)}>Next</button>}
      </form>
    </div>
  )
}

const Input = ({htmlFor, labelName, inputType, inputId = htmlFor, onChange = ()=>{}}) => {
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{labelName}</label>
      <input type={inputType} id={inputId} onChange={(e) => onChange(htmlFor, e)} required={htmlFor !== 'line2'}></input>
    </div>
  )
}

const F1 = (props) => {
  return (
    <div>
      <h2>Guest Sign-Up</h2>
      <form>
        <Input htmlFor={'name'} labelName={'Name:'} inputType={'text'}/>
        <Input htmlFor={'email'} labelName={'Email:'} inputType={'email'}/>
        <Input htmlFor={'password'} labelName={'Password:'} inputType={'password'}/>
      </form>
      <button onClick={() => props.changeForm({showF1: false, showF2: true})}>Next</button>
    </div>
  )
}

const F2 = (props) => {
  return (
    <div>
      <h2>Shipping Information</h2>
      <form>
        <Input htmlFor={'line1'} labelName={'Line 1:'} inputType={'text'}/>
        <Input htmlFor={'line2'} labelName={'Line 2:'} inputType={'text'}/>
        <Input htmlFor={'city'} labelName={'City:'} inputType={'text'}/>
        <Input htmlFor={'state'} labelName={'State:'} inputType={'text'}/>
        <Input htmlFor={'zip-code'} labelName={'Zip Code:'} inputType={'number'}/>
      </form>
      <button type="submit" onClick={() => props.changeForm({showF2: false, showF3: true})}>Next</button>
    </div>
  )
}

const F3 = (props) => {
  return (
    <div>
      <h2>Billing Information</h2>
      <form>
        <Input htmlFor={'credit-card'} labelName={'Credit Card #:'} inputType={'text'}/>
        <Input htmlFor={'expiry'} labelName={'Expiry Date:'} inputType={'text'}/>
        <Input htmlFor={'cvv'} labelName={'CVV:'} inputType={'text'}/>
        <Input htmlFor={'billing-zip-code'} labelName={'Billing Zip Code:'} inputType={'number'}/>
      </form>
      <button onClick={() => props.changeForm({showF3: false, showCheckout: true})}>Finish</button>
    </div>
  )
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/F1" component={F1}></Route>
        <Route path="/F2" component={F2}></Route>
        <Route path="/F3" component={F3}></Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);