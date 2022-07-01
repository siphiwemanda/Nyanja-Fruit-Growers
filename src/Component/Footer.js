import twitter from '../IMG/twitter.png'
import facebook from '../IMG/facebook.png'
import instagram from '../IMG/instagram.png'
import line from '../IMG/remove.png'
const Footer = () => {
    return(
        <div className="bg-Grey">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row items-center">
                    <h4 className="text-center pt-5">Nyanja Fruit Growers</h4>
                    <ul className="flex flex-row items-center pt-2 space-x-6">
                        <img src={facebook} width={24} height={24} alt="facebook logo"/>
                        <img src={instagram} width={24} height={24} alt="instgram logo"/>
                        <img src={twitter} width={24} height={24} alt="twitter logo"/>
                    </ul>
                    <img  className="self-center" src ={line} width={50} height={50} alt="Line"/>
                </div>
            </div>
        </div>

    )
}

export default Footer;
