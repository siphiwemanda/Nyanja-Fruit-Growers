import '../CSS/Navbar.css'
const Navbar = () => {
    return (
<div className="navbar">

     <h4 className="navBarHeader">Nyanja Fruit Growers</h4>

    <ul className="list">
        <li className="btn btn-animated">About us</li>
        <li className="btn btn-animated">Our Produce</li>
        <li className="btn btn-animated"> Member Spotlight</li>
        <li className="btn btn-animated">Our Customers</li>
        <li className="btn btn-animated">Contact Us/Join Us</li>
    </ul>
</div>
        );
}


export default Navbar;
