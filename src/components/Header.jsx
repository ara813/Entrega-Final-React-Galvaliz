import NavBar from "./NavBar";
import Logo from "./img/merendarLogo.jpg";
const Header = () => { 
    
    return ( 
        <div className="header">
            <NavBar className="navy"/>
            <img src={Logo} alt="Meren-dar" width={230} className="logo" />
        </div>
        
    )
 }
 export default Header;