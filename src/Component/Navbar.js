import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const buttonTheme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#837D88',
            darker: '#2C2830',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});
export default function Navbar({onClick}){
    return (

       <nav className="relative container m-auto mx-auto p-6">
           <div className="flex items-center justify-between">
           <div className="p2-2">
               <h1 className="md:text-xl text-sm"> Nyanja Fruit Growers</h1>
           </div>

           <div className=" hidden md:flex space-x-2">
               <ThemeProvider theme={buttonTheme}>
               <Button variant="text" color="primary" onClick={onClick}>About us</Button>
               <Button variant="text" color="primary">Our Produce</Button>
               <Button variant="text" color="primary"> Member Spotlight</Button>
               <Button variant="outlined" color="primary" onClick={onClick}>Contact Us/Join Us</Button>
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
