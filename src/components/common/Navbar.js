import Button from '@mui/material/Button';
import { useHistory} from "react-router-dom";

function Navbar(){
    const history = useHistory();
    const myNav = [
        {
          text: "Home",
          onClick: () => history.push("/Home"),
        },
      ];
    return(
        <div>
        {myNav.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button  onClick={onClick} >
                 {text}
                </Button>
              </div>
            );
          })}
        </div>
    )
}

export default Navbar
