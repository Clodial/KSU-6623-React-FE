import logo from './logo.svg';
import './App.css';
import { BasicTestComponent, simpleFunction } from './components/basic-test-component';
import React from 'react';

function App() {
  console.log(simpleFunction('asdlk fjasdhj asd'));
  return (
    <div>
      <Header></Header>
      <Body>
      </Body>
      <Footer></Footer>
    </div>
  )
}

export default App;
