import React from 'react';
import Header from "./Header"
import OurProduce from "./OurProduce";
import MemberSpotlight from "./MemberSpotlight";
import OurCustomers from "./OurCustomers";

const Main = ()=> {
    return(
        <div>
            <Header/>
            <OurProduce/>
            <MemberSpotlight/>
            <OurCustomers/>
        </div>

    )
}
export default  Main;
