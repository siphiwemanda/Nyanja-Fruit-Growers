import twitter from '../IMG/twitter.png'
import facebook from '../IMG/facebook.png'
import instagram from '../IMG/instagram.png'
import '../CSS/Footer.css'
const Footer = () => {
    return(
        <div className="Footer">
            <div className="FooterTop">
                <h4>Nyanja Fruit Growers</h4>
                <ul>
                    <img src={facebook}  width={24} height={24} alt="facebook logo"/>
                    <img src={instagram}  width={24} height={24} alt="instgram logo"/>
                    <img src={twitter}  width={24} height={24} alt="twitter logo"/>
                </ul>
            </div>
        </div>

    )
}

export default Footer;
