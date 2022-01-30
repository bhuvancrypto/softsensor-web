import { makeStyles } from "@mui/styles";
import background from "../../images/mainHome.png"
const useStyles = makeStyles({
  home: {
    width: "100vw",
    // paddingTop:"10vh",
    height: "100vh",
    top: "0",
    position:"relative",
    display:"flex",
    flexDirection:"column",
    background: `url(${background})`,
    backgroundPosition: "right",
    backgroundSize: "cover",
  },
  mainContent: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 700,
    paddingTop:"100px",
    width:"939px",
    paddingLeft:"100px",
    fontSize: "2.5rem",
    textTransform: "uppercase",
    display:"block",
    fontSize:"64px",
  },
  para: {
    fontSize:"20px",
    fontStyle:"italic",
    color: "#168FFF",
    display:"block",
    textTransform:"none",
  },
});
export default useStyles;
