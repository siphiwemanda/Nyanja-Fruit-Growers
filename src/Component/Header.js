import mangoes from '../IMG/mangos.jpg'
import '../CSS/Header.css'
const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderMainText">
                <h1> Nyanja Fruit</h1>
                <h1>Growers</h1>
                <p> Based in Malawi, Nyanja Fruit Growers is an association of small holder farmers, growing fruit across the country. Formed in 2020, our aim is to ............. Combining our collective knowledge and experience, we are able to support each other and other farmers across the nation by .............. Our current mission is to ................. and our long term vision is to..................
                    We currently comprise of XX paid up members, but are open to developing and expanding our association. We are also interested in exploring investment opportunities with interested parties.
                    Our current Board is:
                    Chairman: Mr. Chopa Manda
                    Deputy Chair:
                    Treasurer:
                    Secretary:
                    Our association meets on a monthly basis.</p>
                <li className="btn btn-animated">Contact Us/Join Us</li>
            </div>
            <div className="HeaderImg">
                <img src={mangoes}  width={540} height={650} alt="Fruit"/>
            </div>

        </div>
    )
}
export default Header;
