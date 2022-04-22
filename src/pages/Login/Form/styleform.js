import { makeStyles } from "@material-ui/core";
import { light } from "@material-ui/core/styles/createPalette";

export default makeStyles (theme =>({
    formButtons: {
        width: "80%",
        marginTop: theme.spacing(4),
        display: "flex",
        alignItems: "center",
        background :"#04953d",
        color : "white",
        fontSize : "20  px",
      },
    customFormContainer: {
        width: "40%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "auto",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          width: "50%",
          overflow: "visible"
        }
       
      },
      forgetButton: {
        textTransform: "none",
        fontWeight: 400,
        color : "black",
      },

}));