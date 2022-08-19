import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    paper: {
        margin: "auto",
        width: "35%", 
        [theme.breakpoints.down("md")]: {
            width: "50%", 
          },
          [theme.breakpoints.down("sm")]: {
            width: "80%", 
          }

    },

    button: {
        fontSize: "20px",
        width: "50%",
        background: "#04951d",
        color: "white",
        border: "none",
        WebkitTransition: "all 0.3s",
        MozTransition: "all 0.3s",
        transition: "all 0.3s",
        padding: "10px 32px",
        "&:hover": {
            background: "#047117",


        },
        "&:active": {
            background: "#2980b9",
            top: "2px",
        },

    },

    innerGrid: {
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "normal",
    },
    inputGrid: {
        paddingTop: "5px",
        paddingBottom: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "normal",
    },
    dateInput: {
        width: "98%",
        padding: "5px",
        fontSize: "15px",
        border: "none",
        borderBottom: "1px solid #949494"
    },
    selectInput: {

        padding: "5px",
        fontSize: "15px",
        border: "none",
        borderBottom: "1px solid #949494",
    },
    textArea: {
        padding: "5px",
        fontSize: "15px",
        border: "solid 1px #949494",
        borderBottom: "1px solid #949494",

        fontFamily: "Roboto,Helvetica,Arial,sans-serif"

    },
    text: {
        paddingLeft: "7px",
        fontSize: "16px",
    }


}))