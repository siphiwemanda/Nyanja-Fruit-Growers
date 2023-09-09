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
        console.log(e.target.id)
        const target = e.target.id
        if (target === "aboutUs"){
            this.setState({
                AboutUsPage: this.state.AboutUsPage = true,
                ContactPage: this.state.ContactPage = false,
                MainPage: this.state.MainPage = false,
                MemberSpotlight: this.state.MemberSpotlight = false,
                ProducePage: this.state.ProducePage = false
            });
        }
        if (target === "contact"){
            this.setState({
                AboutUsPage: this.state.AboutUsPage = false,
                ContactPage: this.state.ContactPage = true,
                MainPage: this.state.MainPage = false,
                MemberSpotlight: this.state.MemberSpotlight = false,
                ProducePage: this.state.ProducePage = false
            });
        }

        if (target === "ourProduce"){
            this.setState({
                AboutUsPage: this.state.AboutUsPage = false,
                ContactPage: this.state.ContactPage = false,
                MainPage: this.state.MainPage = false,
                MemberSpotlight: this.state.MemberSpotlight = false,
                ProducePage: this.state.ProducePage = true
            });
        }
        if (target === "Home"){
            this.setState({
                AboutUsPage: this.state.AboutUsPage = false,
                ContactPage: this.state.ContactPage = false,
                MainPage: this.state.MainPage = true,
                MemberSpotlight: this.state.MemberSpotlight = false,
                ProducePage: this.state.ProducePage = false
            });
        }
        if (target === "memberSpotlight"){
            this.setState({
                AboutUsPage: this.state.AboutUsPage = false,
                ContactPage: this.state.ContactPage = false,
                MainPage: this.state.MainPage = false,
                MemberSpotlight: this.state.MemberSpotlight = true,
                ProducePage: this.state.ProducePage = false
            });
        }
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
