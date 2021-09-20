// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home'
//import ContactUs from './views/Contact'
// import InvestmentTool from "./pages/investmentTool/investmentTool";
// import StakingTool from "./pages/StakingTool/staking-tool";
// import RadarTool from './pages/RadarTool/radar-tool'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;