import mangoes from '../IMG/mangos.jpg'
const Header = () => {
    return (
        <div className="Header">
            <div className="HeaderMainText">
                <h1> Nyanja Fruit {"\n"}Growers</h1>
                <p> A cooperative association of smallholder fruit growing farmers in Malawi.</p>
            </div>
            <div className="FruitGrid">
                <img src={mangoes}  width={200} height={200} alt="Fruit"/>
                <img src={mangoes}  width={200} height={200} alt="Fruit"/>
                <img src={mangoes}  width={200} height={200} alt="Fruit"/>
                <img src={mangoes}  width={200} height={200} alt="Fruit"/>
                <img src={mangoes}  width={200} height={200} alt="Fruit"/>



            </div>

        </div>
    )
}

export default Header;
