import { makeStyles } from "@mui/styles";

const useStyles= makeStyles({
    root:{
        width:"90%",
        height:"208px",
        backgroundImage:"linear-gradient(#022F44,#5A8ED1)",
        position:"absolute",
        top:"100%",
        borderRadius:"10px",
        transform:"translateY(-50%) translateX(5%)",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    iconWrap:{
        width:"100%",
        display:"flex",
        justifyContent:"space-around",
        padding:"0 30px",
        paddingTop:"30px"
    },
    text:{
        textAlign:"center",
        color:"white",
        fontWeight:"500",
        marginTop:"10px"
    },
    svgIcon:{
        height:"70px",
        width:"150px",
        overflow:"hidden"
    }
})
export default useStyles;