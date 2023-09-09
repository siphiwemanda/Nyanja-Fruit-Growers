import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {IconButton} from "@mui/material";
import MenuIcon from '@material-ui/icons/Menu';

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
    function showMenu() {
        const btn = document.getElementById('BurgerMenu')
        btn.classList.toggle('hidden')
    }

    return (

       <nav className="relative container m-auto mx-auto p-6">
           <div className="flex items-center justify-between">
           <div className="p2-2">
               <button className="md:text-xl text-sm" id = "Home" onClick={onClick}> Nyanja Fruit Growers</button>
           </div>

           <div className=" hidden md:flex space-x-2">
               <ThemeProvider theme={buttonTheme}>
               <Button variant="text" color="primary" id = "aboutUs" onClick={onClick}>About us</Button>
               <Button variant="text" color="primary" id = "ourProduce" onClick={onClick}>Our Produce</Button>
               <Button variant="text" color="primary" id = "memberSpotlight" onClick={onClick}> Member Spotlight</Button>
               <Button variant="outlined" color="primary" id = "contact" onClick={onClick}>Contact Us/Join Us</Button>
               </ThemeProvider>
           </div>

               <div className="md:hidden">
                   <div>
                       <IconButton onClick={showMenu}>
                       <MenuIcon/>
                   </IconButton>
                   </div>
                   <div id="BurgerMenu" className="hidden">
                       <div className="absolute flex flex-col items-center self-end py-8 mt-6 space-y-6 bg-JustWhite sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" onClick={showMenu}>
                           <ThemeProvider theme={buttonTheme}>
                               <Button variant="text" color="primary" id = "aboutUs" onClick={onClick}>About us</Button>
                               <Button variant="text" color="primary" id = "ourProduce" onClick={onClick}>Our Produce</Button>
                               <Button variant="text" color="primary" id = "memberSpotlight" onClick={onClick}> Member Spotlight</Button>
                               <Button variant="outlined" color="primary" id = "contact" onClick={onClick}>Contact Us/Join Us</Button>
                       </ThemeProvider>
                       </div>
                   </div>
               </div>

           </div>
       </nav>
        );
}
