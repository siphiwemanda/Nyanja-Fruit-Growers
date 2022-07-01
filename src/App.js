import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import OurProduce from "./Component/OurProduce";
import MemberSpotlight from "./Component/MemberSpotlight";
import OurCustomers from "./Component/OurCustomers";
import Footer from "./Component/Footer"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <OurProduce/>
        <MemberSpotlight/>
        <OurCustomers/>
        <Footer/>
    </div>
  );
}
export default App;
