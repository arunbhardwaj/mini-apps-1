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
      showF3: false
    }
  }

  changeFormView = (newState) => {
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Checkout parent={this.state} changeForm={this.changeFormView} />
        <ShowForm parent={this.state} changeForm={this.changeFormView} />
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
      htmlFor: 'zip-code',
      inputType: 'number'
    },
  ],
  [
    {
      labelName: 'Credit Card #:',
      htmlFor: 'credit-card',
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
      htmlFor: 'billing-zip-code',
      inputType: 'number'
    },
  ]
]

const ShowForm = (props) => {
  let {showF1, showF2, showF3} = props.parent;

  return (
    <div>
      {showF1 && <Form title={'Guest Sign-Up'} arr={forms[0]} changeForm={props.changeForm} next={{showF1: false, showF2: true}}/>}
      {showF2 && <Form title={'Shipping Information'} arr={forms[1]} changeForm={props.changeForm} next={{showF2: false, showF3: true}}/>}
      {showF3 && <Form title={'Billing Information'} arr={forms[2]} changeForm={props.changeForm} next={{showF3: false, showCheckout: true}}/>}
    </div>
  )
}

const Form = ({title, arr, changeForm, next}) => {
  return (
    <div>
      <h2>{title}</h2>
      <form>
        {arr.map(({htmlFor, labelName, inputType, inputId = htmlFor}) => {
          return <Input htmlFor={htmlFor} labelName={labelName} inputType={inputType} />
        })}
      </form>
      <button onClick={() => changeForm(next)}>Next</button>
    </div>
  )
}

const Input = ({htmlFor, labelName, inputType, inputId = htmlFor}) => {
  return (
    <div className="input">
      <label htmlFor={htmlFor}>{labelName}</label>
      <input type={inputType} id={inputId} required></input>
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