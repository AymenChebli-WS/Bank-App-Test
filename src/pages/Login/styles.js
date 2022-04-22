import { makeStyles } from "@material-ui/core";

export default makeStyles ( theme=>({
    
    container: {
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0
      },
    greeting: {
        fontWeight: 500,
        textAlign: "center",
        marginTop: theme.spacing(4)
      },
      logotypeContainer: {
        backgroundColor: "#04953d",
        width: "60%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          width: "50%"
        },
        [theme.breakpoints.down("md")]: {
          display: "none"
        }

       
      },
      logotypeImage: {
        width: 500,
        marginBottom: theme.spacing(4)
      },
      customFormContainer: {
        width: "40%",
        height: "100%",
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
      tab: {
        fontWeight: 400,
        fontSize: 18,
      },
      indicator:{
        backgroundColor: '#04953d',
      },

      
}));