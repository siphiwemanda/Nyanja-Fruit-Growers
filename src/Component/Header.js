import mangoes from '../IMG/mangos.jpg'
import '../CSS/Header.css'
const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderMainText">
                <h1> Nyanja Fruit {"\n"}Growers</h1>
                <p> A cooperative association of smallholder fruit growing farmers in Malawi.</p>
                <li className="btn btn-animated">Contact Us/Join Us</li>
            </div>
            <div className="HeaderImg">
                <img src={mangoes}  width={200} height={200} alt="Fruit"/>
            </div>

        </div>
    )
}
export default Header;
