
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getLoanrequestByuser } from '../../redux/features/loanrequest';
import { Paper, Typography, Grid, Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material';

function StatutTransfer() {
    const {userLoanReqs, loading} = useSelector((state) => ({...state.loanreq}))
    const {user} = useSelector((state) => ({...state.auth}))
    const dispatch = useDispatch();
    const userId = user?.result?._id;

    useEffect(() => {
      if (userId){
        dispatch(getLoanrequestByuser(userId));
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
                        <TableCell>ammount</TableCell>
                        <TableCell>loanTerm</TableCell>
                        <TableCell>interest</TableCell>
                        <TableCell>nature</TableCell>
                        <TableCell>payBack</TableCell>
                      </TableRow>
                    </TableHead>
                    {userLoanReqs.length === 0 && (
                        <Typography variant="h1" color="black" fontSize={14} gutterBottom>
                        Aucun compte trouvé.
                        </Typography>
                    )}

                    <TableBody>
                      {userLoanReqs && userLoanReqs.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.ammount}</TableCell>
                          <TableCell>{item.loanTerm}</TableCell>
                          <TableCell>{item.interest}</TableCell>
                          <TableCell>{item.nature}</TableCell>
                          <TableCell>{item.payBack}</TableCell>

                        </TableRow>
                      ))}
  
                    </TableBody>
                  </Table>
                </Paper>
        </Grid>

    </div>
  )
}

export default StatutTransfer