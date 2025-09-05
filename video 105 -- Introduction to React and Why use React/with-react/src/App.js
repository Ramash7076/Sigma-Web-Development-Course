import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <NavBar logoText="CodeWithHarry"/>
      <div className="value"> {value}</div>
      <button onClick={()=>{setValue(value + 1)}}>Click me</button>
      <Footer/>
    </div>
  );
}

export default App;
