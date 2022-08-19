import React, {useEffect} from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Paper, Typography, Grid, Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import { getComptesByUser } from '../redux/features/compteSlice';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';


const VueDensemble = () => {
    const {userComptes, loading} = useSelector((state) => ({...state.compte}))
    const {user} = useSelector((state) => ({...state.auth}))
    const dispatch = useDispatch();
    const userId = user?.result?._id;

    useEffect(() => {
      if (userId){
        dispatch(getComptesByUser(userId));
      }
    }, [userId]);

    if(loading) {
        return <Spinner />
    }

  return (
    
        <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                  <Typography variant="h3" color="green" fontSize={20} gutterBottom>
                    Vue d'ensemble des comptes
                  </Typography>
                  <Typography variant="h1" color="black" fontSize={14} gutterBottom>
                  Vos comptes d'entreprise
                  </Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>N° de compte</TableCell>
                        <TableCell>Libellé compte</TableCell>
                        <TableCell>Date solde</TableCell>
                        <TableCell>Devise</TableCell>
                        <TableCell>Solde actuel</TableCell>
                      </TableRow>
                    </TableHead>
                    {userComptes.length === 0 && (
                        <Typography variant="h1" color="black" fontSize={14} gutterBottom>
                        Aucun compte trouvé.
                        </Typography>
                    )}

                    <TableBody>
                      {userComptes && userComptes.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.numCompte}</TableCell>
                          <TableCell>{item.libelle}</TableCell>
                          <TableCell>{item.dateSolde}</TableCell>
                          <TableCell>{item.devise}</TableCell>
                          <TableCell>{item.soldeActuel}</TableCell>
                          <TableCell><Link to={`/compte/${item._id}`}><ReceiptLongIcon color="success" /></Link></TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={3} />
                        <TableCell><Typography variant="subtitle2">
                          Solde Total:
                        </Typography></TableCell>
                        <TableCell>170000</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
        </Grid>
    
  )
}

export default VueDensemble