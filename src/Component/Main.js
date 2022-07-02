import React from 'react';
import Header from "./Header"
import OurProduce from "./OurProduce";
import MemberSpotlight from "./MemberSpotlight";
import OurCustomers from "./OurCustomers";
import CurrentNews from "./News";

const Main = ()=> {
    return(
        <div>
            <Header/>
            <OurProduce/>
            <CurrentNews/>
            <MemberSpotlight/>
            <OurCustomers/>
        </div>

    )
}
export default  Main;
