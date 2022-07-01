import React from 'react';
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import OurProduce from "./Component/OurProduce";
import MemberSpotlight from "./Component/MemberSpotlight";
import OurCustomers from "./Component/OurCustomers";
import Footer from "./Component/Footer"

class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        Page: 1
    }
    const elm = {Header, OurProduce,MemberSpotlight, OurCustomers}
}
    render() {
        return (
            <div className="App">
                <Navbar/>
                {props.}
                <Footer/>
            </div>
        );

    }
}

export default App;
