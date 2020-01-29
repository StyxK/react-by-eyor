import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setNum] = useState(0)
  useEffect(() => {
    setNum(number + 3)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>number : {number}</p>
        <button onClick={() => { setNum(number + 1) }}> Increse </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <App2 number={number} />
      </header>
    </div>
  );
}

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      fromApi: {}
    }
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/repos/StyxK/React-")
    const data = await response.json()
    this.setState({
      fromApi: data
    })
  }

  render() {
    let number = 1
    const incNum = () => {
      number = number + 1
      this.setState({
        count: ++this.state.count
      })
    }
    return (
      <div>
        <button onClick={() => { incNum() }}> Increse </button>
        <p> not a state : {number} </p>
        <p> a state : {this.state.count} </p>
        <p> a props : {this.props.number} </p>
        {console.log(this.state.fromApi)}
      </div>
    )
  }
}

export default App;
