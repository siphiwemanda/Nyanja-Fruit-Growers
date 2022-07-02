import twitter from '../IMG/twitter.png'
import facebook from '../IMG/facebook.png'
import instagram from '../IMG/instagram.png'
import line from '../IMG/remove.png'
const Footer = () => {
    return(
        <div className="bg-Grey mt-10 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
                <div className="flex flex-col  items-center">
                    <h4 className="text-center pt-5 md:text-2xl">Nyanja Fruit Growers</h4>
                    <ul className="flex flex-row items-center pt-2 space-x-6">
                        <img src={facebook} width={24} height={24} alt="facebook logo"/>
                        <img src={instagram} width={24} height={24} alt="instgram logo"/>
                        <img src={twitter} width={24} height={24} alt="twitter logo"/>
                    </ul>
                    <img  className="self-center md:hidden" src ={line} width={50} height={50} alt="Line"/>
                </div>

                <div className="flex flex-col items-center md:p-5">
                    <ul>
                        <li variant="text" color="neutral">About us</li>
                        <li variant="text">Our Produce</li>
                        <li variant="text"> Member Spotlight</li>
                        <li variant="text">Our Customers</li>
                        <li variant="text">Contact Us/Join Us</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Footer;
