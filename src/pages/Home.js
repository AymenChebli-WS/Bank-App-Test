import React from 'react';
import { Container } from 'react-bootstrap';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Paper, Typography, Grid, ListItem, ListItemIcon, ListItemText, List, ListItemButton } from '@mui/material';

import './Pages.css';

import VueDensemble from '../components/VueDensemble';


const Home = () => {
  return (
    <div className='Pages'>
      <Container className='test' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
           
      
              
              {/* Vue Densemble */}
              <VueDensemble />
              {/* CompteStuff */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper sx={{display: 'flex', flexDirection: 'column', height: 240,}}>
                <ListItem sx={{ backgroundColor: '#04953d', borderRadius: '2px', }}>
              <ListItemIcon sx={{ color: 'white' }}><ManageAccountsIcon /></ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Compte"
                primaryTypographyProps={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'light',
                  letterSpacing: 0,
                }}
              />
            </ListItem>
            <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>
              <Typography variant="subtitle2" fontSize={13}>
              Vue d'ensemble des comptes</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>
              <Typography variant="subtitle1" fontSize={13}>
              Recherche de mouvements</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>
              <Typography variant="subtitle1" fontSize={13}>
              Mouvements par opération</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>
              <Typography variant="subtitle1" fontSize={13}>
              CFONB</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>
    <Typography sx={{ pt: 4 }} variant="body2" color="text.secondary" align="center">@mennet {new Date().getFullYear()}.
    </Typography>
          </Container>
      
                
    </div>
  )
}

export default Home