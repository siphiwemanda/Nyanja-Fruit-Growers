import '../CSS/Navbar.css'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const buttonTheme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});
export default function Navbar(){
    return (

       <nav className="relative container"> </nav>



    /*        <ThemeProvider theme={buttonTheme}>
        <div className="navbar">
        <h4 className="navBarHeader">Nyanja Fruit Growers</h4>
    <ul className="list">
        <Button variant="text" color="neutral" >About us</Button>
        <Button variant="text">Our Produce</Button>
        <Button variant="text"> Member Spotlight</Button>
        <Button variant="text">Our Customers</Button>
        <Button variant="text">Contact Us/Join Us</Button>
    </ul>
</div>
        </ThemeProvider>*/
        );
}
