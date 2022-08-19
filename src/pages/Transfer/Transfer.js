import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NativeSelect } from '@mui/material';
import { Paper, Typography, Grid, } from '@mui/material';
import '../Pages.css';
import { TextField, Button } from "@material-ui/core";
import { TextareaAutosize } from '@mui/base';
import {useDispatch, useSelector} from "react-redux";
import Modal from './Popup/Modal';
import { getComptes } from '../../redux/features/compteSlice';
import { creatTransfer } from '../../redux/features/transfer';
import { toast } from 'react-toastify'

const initialState = {
    sender: null,
    reciver: null,
    Devise:null,
    ammount :null,
    comment:null,
    transDate :null,
  }


function Transfer() {
    const [modalOpen, setModalOpen] = useState(false);

    const {comptes, loading} = useSelector((state) => ({...state.compte}))
    const [formValue, setFormValue] = useState(initialState);
    const {sender,reciver,Devise,ammount,comment,transDate} = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getComptes());
       
    }, []);

    if(loading) {
        return <></>
    }

    const handleSubmit = (e) => {
     
        e.preventDefault();
       
           console.log(formValue)
           if(sender && reciver && Devise  && ammount && comment && transDate){
            dispatch(creatTransfer({formValue, navigate, toast}))
          }
       
      };

    const onInputChange = (e) => {
        let {name, value} = e.target;
        setFormValue({ ...formValue, [name]: value });
      };

    return (
        <div className='Pages' >
             <form onSubmit={handleSubmit}>
            <br />
            <Paper style={{ width: 500, margin: "auto" }}>
               
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <h1 style={{ color: '#04951d' }}>Virement compte à compte </h1>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>Compte à débiter:</Typography>
                            <select  style={{ width: 200 }}
                                defaultValue={0}
                                value={sender}
                                 name="sender" 
                                onChange={onInputChange} required> 
                            
                            <option Value={0}>Default</option>
                            {comptes && comptes.map((item, index) => (
                                   
                        <option value={item.numCompte} key={item.numCompte}> {item.numCompte}</option>))}
                    
                                
                    </select>
                            

                        </Grid>

                        <Grid item xs={6}>
                            <Typography>Compte à créditer:</Typography>
                            <TextField  variant='standard' placeholder='code de compte' fullWidth value={reciver} name="reciver" onChange={onInputChange} required />

                        </Grid>

                        <Grid item xs={12}>
                            <Typography > Devise :</Typography>

                            <select
                                style={{ width: 500 }}
                                defaultValue={"TD"}
                                value={Devise} name="Devise"
                                onChange={onInputChange} required
                            >
                                <option value={"TD"}>TD</option>
                                <option value={"EUR"}>EUR</option>
                                <option value={"USD"}>USD</option>
                            </select>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography>Montant:</Typography>
                            <TextField  variant='standard' placeholder='2,500 DT' fullWidth value={ammount} name="ammount" onChange={onInputChange} required />

                        </Grid>

                        <Grid item xs={12}>
                            <Typography>comment:</Typography>
                            <TextareaAutosize

                                minRows={3}
                                aria-label="empty textarea"
                                placeholder=""
                                style={{ width: "100%", resize: "none" }}
                                value={comment} name="comment"
                                onChange={onInputChange} required
                            />

                        </Grid>

                        <Grid item xs={12}>
                            <Typography>Motif paiement:</Typography>
                        <input type="date"   value={transDate} name="transDate"  style={{width : "100%"}} onChange={onInputChange} required />
                        </Grid>

                        <Grid item xs={12}>
                        <Button
                         color="primary" 
                         size="large" 
                          style={{width : "100%", background:"#04951d",color :"white" }}
                          onClick={() => {
                            setModalOpen(true);
                          }}
                          >Continuer</Button>
                        </Grid>
                        <br/>


                    </Grid>
                
            </Paper>

            {modalOpen && <Modal setOpenModal={setModalOpen} />}





            </form>        
        </div>
    )
}

export default Transfer