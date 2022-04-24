import './App.css';
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import AboutUs from "./Component/AboutUs";
import OurProduce from "./Component/OurProduce";
import MemberSpotlight from "./Component/MemberSpotlight";
import OurCustomers from "./Component/OurCustomers";
import ContactSection from "./Component/ContactSection";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <AboutUs/>
        <OurProduce/>
        <MemberSpotlight/>
        <OurCustomers/>
        <ContactSection/>
    </div>
  );
}
export default App;
