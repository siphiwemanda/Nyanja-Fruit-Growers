import React from 'react';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import Main  from "./Component/Main";
import AboutUsPage  from "./Component/AboutUsPage";
import ContactForm from "./Component/ContactForm";
import PropTypes from "prop-types";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            page: 1
        }
    }
    render() {
        let x = false
        const onClick = (e) => {
            console.log('click',e)
            x = true
            console.log(x)
        }

        let comp;

        switch(x = true){
            case this.state.page ===1:
                comp = <Main/>
                break;
            case this.state.page ===2:
                comp = <AboutUsPage/>
                break;
            case this.state.page ===3:
                comp = <ContactForm/>
                break;
            default:
                comp = <Main/>

        }
        return(
        <div className="App">
            <Navbar onClick = {onClick}/>
            {comp}
            <Footer />
        </div>
    )}


}

Navbar.propTypes ={
    onClick: PropTypes.func
}
export default App;
