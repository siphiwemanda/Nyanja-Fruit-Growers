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
    onClick = () =>{
        console.log('click')
        this.setState({
            Click:this.state.Click = true,
            MainPage: this.state.MainPage = false
        });
    }
    render() {
        let comp = <Main/>;
        if (this.state.MainPage === false){
            comp = <ContactForm/>
        }
        return(
        <div className="App">
            <Navbar onClick ={this.onClick}/>
            {comp}
            <Footer />
        </div>
    )}


}
export default App;
