import React from "react";
import DeliveryInfo from "./components/DeliveryInfo/DeliveryInfo";
import SignUpDetails from "./components/SignUpDetails/SignUpDetails";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import BasicDetails from "./components/WilliamMorris/Basic/BasicDetails";
import EditBasic from "./components/EditBasicDetails/EditBasic";
import Kyc from "./components/KycEdit/kyc";
import KycDetails from "./components/KycDetails/KycDetails";
import Security1 from "./components/Security1/Security1";
import Security2 from "./components/Security2/Security2";
import Security3 from "./components/Security3/Security3";
import Security4 from "./components/Security4/Security4";
import Security5 from "./components/Security5/Security5";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/HomePage/Home"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <div id="root">
          
            <Header/>
            <Route path="/" exact component={Home} />
            <Route path="/SignUpDetails" component={SignUpDetails} />
            <Route path="/DeliveryInfo" component={DeliveryInfo} />
            <Route path="/PaymentMethod" component={PaymentMethod} />
            <Route path="/BasicDetails" component={BasicDetails} />
            <Route path="/EditBasic" component={EditBasic} />
            <Route path="/Kyc" component={Kyc} />
            <Route path="/KycDetails" component={KycDetails} />
            <Route path="/Security1" component={Security1} />
            <Route path="/Security2" component={Security2} />
            <Route path="/Security3" component={Security3} />
            <Route path="/Security4" component={Security4} />
            <Route path="/Security5" component={Security5} />
            <Route path="/BasicDetails" component={BasicDetails} />
          <Footer/>
        
      </div>
    </Router>
    
      
      
    
   
  );
}

export default App;


