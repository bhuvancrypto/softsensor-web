import Button from '@mui/material/Button';
import Logo from "../../images/Logo"
import { useHistory} from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar(){
    const history = useHistory();
    const myNav = [
        {
          text: "Home",
          onClick: () => history.push("/Home"),
        },
        {
          text: "OFFERINGS",
          onClick: () => history.push("/ContactUs"),
        },
        {
          text: "ABOUT US",
          onClick: () => history.push("/Home"),
        },
        {
          text: "OUR IMPACT",
          onClick: () => history.push("/Home"),
        },
        {
          text: "CONTACT US",
          onClick: () => history.push("/Contact"),
        },
      ];
    return(
        <div className={styles.navbar}>
          <Logo className={styles.logo}/>
          <div style={{ display: "flex", alignItems: "center",flexDirection:"coloumn",color: "white" }}>
        {myNav.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
                <Button  onClick={onClick} style={{color: "white"}} >
                 {text}
                </Button>
              
            );
          })}
          </div>
        </div>
    )
}

export default Navbar
