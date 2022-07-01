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

       <nav className="relative container m-auto mx-auto p-6">
           <div className="flex items-center justify-between">
           <div className="p2-2">
               Nyanja Fruit Growers
           </div>

           <div className=" hidden md:flex space-x-2">
               <ThemeProvider theme={buttonTheme}>
               <Button variant="text" color="neutral" >About us</Button>
               <Button variant="text">Our Produce</Button>
               <Button variant="text"> Member Spotlight</Button>
               <Button variant="text">Our Customers</Button>
               <Button variant="text">Contact Us/Join Us</Button>
               </ThemeProvider>

           </div>
           </div>



       </nav>




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
