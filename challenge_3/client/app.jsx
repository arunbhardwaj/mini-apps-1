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
    console.log(newState);
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
  return (props.parent.showCheckout)
    ? (
      <div>
        <button onClick={() => props.changeForm({showCheckout: false, showF1: true})}>
          Checkout
        </button>
      </div>
      )
    : <div></div>
}

const ShowForm = (props) => {
  let {showF1, showF2, showF3} = props.parent;

  if (showF1) {
    return <F1 changeForm={props.changeForm}/>
  } else if (showF2) {
    return <F2 changeForm={props.changeForm}/>
  } else if (showF3) {
    return <F3 changeForm={props.changeForm}/>
  } else {
    return <div></div>;
  }
}

const F1 = (props) => {
  return (
    <div>
      <form>
        Name:
        <input></input>
        Email:
        <input></input>
        Password:
        <input></input>
      </form>
      <button onClick={() => props.changeForm({showF1: false, showF2: true})}>Next</button>
    </div>
  )
}
const F2 = (props) => {
  return (
    <div>
      <form>
        Line 1:
        <input></input>
        Line 2:
        <input></input>
        City:
        <input></input>
        State:
        <input></input>
        Zip Code:
        <input></input>
      </form>
      <button onClick={() => props.changeForm({showF2: false, showF3: true})}>Next</button>
    </div>
  )
}

const F3 = (props) => {
  return (
    <div>
      <form>
        Credit Card #:
        <input></input>
        Expiry Date:
        <input></input>
        CVV:
        <input></input>
        Billing Zip Code:
        <input></input>
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