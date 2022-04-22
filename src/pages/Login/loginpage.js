import React,{ useState } from 'react'
import {Grid,Tabs,Tab,Typography } from "@material-ui/core";

import Singin from './Form/singin';
import Singup from './Form/Singup';
import useStyles from './styles';
import loginlogo from './img/loginlogo.png'


function Login() {

  const classes = useStyles();

  var [activeTabId, setActiveTabId] = useState(0);

  const getGreeting = () => {
    const d = new Date();
    if (d.getHours() >= 4 && d.getHours() <= 12) {
      return "Bonjour!";
    } else if (d.getHours() >= 13 && d.getHours() <= 16) {
      return "bonne après-midi";
    } else if (d.getHours() >= 17 && d.getHours() <= 23) {
      return "Bonsoir";
    } else {
      return "Bonne nuit";
    }
  };

  return (
    <Grid container className={classes.container}>

      <div className={classes.customFormContainer}>

            <Typography variant="h3" className={classes.greeting} >
                    {getGreeting()}
            </Typography>
  
            <Tabs
                value={activeTabId}
                onChange={(e, id) => setActiveTabId(id)}
                
                centered
                classes ={{ indicator : classes.indicator}}
              >
                <Tab label="Connexion" classes={{ root: classes.tab }} />
                <Tab label="Créer" classes={{ root: classes.tab }} />
              </Tabs>

              {activeTabId===0 && <Singin/> }
              {activeTabId===1 && <Singup/> }
             
           
      </div>

      <div className={classes.logotypeContainer}>
        <img src={loginlogo} alt="logo" className={classes.logotypeImage} />
      </div>
    </Grid>
    
  )
}

export default Login