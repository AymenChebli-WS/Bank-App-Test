import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getTransferByuser } from '../../redux/features/transfer';
import { Paper, Typography, Grid, Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material';

function Historique() {

    const {userTransfers, loading} = useSelector((state) => ({...state.transfer}))
    const {user} = useSelector((state) => ({...state.auth}))
    const userId = user?.result?._id;
    const dispatch = useDispatch();

    const [senderUser, setSenderUser] = useState();

    useEffect(() => {
        if (userId){
           dispatch(getTransferByuser(userId));
          }
       
    }, [userId]);

  return (
    <div className='Pages' >
              <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', }}>
                  <Typography variant="h3" color="green" fontSize={20} gutterBottom>
                    Historique
                  </Typography>
                  <Typography variant="h1" color="black" fontSize={14} gutterBottom>
                  Vos comptes d'entreprise
                  </Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>sender</TableCell>
                        <TableCell>reciver</TableCell>
                        <TableCell>ammount</TableCell>
                        <TableCell>Devise</TableCell>
      
                        <TableCell>reciverUser</TableCell>

                      </TableRow>
                    </TableHead>
                    {userTransfers.length === 0 && (
                        <Typography variant="h1" color="black" fontSize={14} gutterBottom>
                        Aucun compte trouvé.
                        </Typography>
                    )}

                    <TableBody>
                      {userTransfers && userTransfers.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.sender}</TableCell>
                          <TableCell>{item.reciver}</TableCell>
                          <TableCell>{item.ammount}</TableCell>
                          <TableCell>{item.Devise}</TableCell>
                          <TableCell>{item.reciverUser}</TableCell>
                        </TableRow>
                      ))}
  
                    </TableBody>
                  </Table>
                </Paper>
        </Grid>

    </div>
  )
}

export default Historique