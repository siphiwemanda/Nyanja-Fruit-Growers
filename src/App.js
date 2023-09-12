import React from 'react';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import Main  from "./Component/Main";
import ContactForm from "./Component/ContactForm";
import AboutUsPage from "./Component/AboutUsPage";
import OurProduce from "./Component/OurProduce";
import MemberSpotlight from "./Component/MemberSpotlight";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            MainPage:true,
            AboutUsPage: false,
            ProducePage: false,
            MemberSpotlight: false,
            ContactPage: false
        }
    }
    onClick = (e) =>{
        const target = e.target.id
        let aboutUs = false
        let contact = false
        let ourProduce = false
        let home = false
        let memberSpotlight = false

        switch(target) {
            case "aboutUs":
                aboutUs = true
                break;
            case "contact":
                contact = true
                break;
            case "ourProduce":
                ourProduce = true
                break;
            case "home":
                home = true
                break;
            case "memberSpotlight":
                memberSpotlight = true
                break;
            default:
                home = true
        }

        this.changeState(aboutUs, contact, ourProduce, home, memberSpotlight)

        }

    changeState (aboutUs, contact, ourProduce, home, memberSpotlight){
        this.setState({
            AboutUsPage : aboutUs,
            ContactPage : contact,
            MainPage :home,
            MemberSpotlight :memberSpotlight,
            ProducePage: ourProduce,
    })
    }

    render() {
        let comp = <Main/>;
        if (this.state.MainPage === true){
            comp = <Main/>
        }
        if (this.state.AboutUsPage === true){
            comp = <AboutUsPage/>
        }
        if (this.state.ContactPage === true){
            comp = <ContactForm/>
        }
        if (this.state.MemberSpotlight === true){
            comp = <MemberSpotlight/>
        }
        if (this.state.ProducePage === true){
            comp = <OurProduce/>
        }
        return(
        <div className="App">
            <Navbar onClick = {(e) => this.onClick(e)}/>
            {comp}
            <Footer />
        </div>
    )}
}
export default App;
