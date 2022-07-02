import React from 'react';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import Main  from "./Component/Main";
import ContactForm from "./Component/ContactForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            MainPage:true,
            Click:false,
        }
    }
    onClick = function(){
        console.log('click')
    }
    render() {
        let comp = <Main/>;
        return(
        <div className="App">
            <Navbar onClick ={this.onClick}/>
            {comp}
            <Footer />
        </div>
    )}


}
export default App;
