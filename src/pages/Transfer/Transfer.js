import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NativeSelect } from '@mui/material';
import { Paper, Typography, Grid, } from '@mui/material';
import '../Pages.css';
import { TextField, Button } from "@material-ui/core";
import { TextareaAutosize } from '@mui/base';
import { useDispatch, useSelector } from "react-redux";
import Modal from './Popup/Modal';
import { getComptesByUser, findCompte, compteToCompte, testusercompt } from '../../redux/features/compteSlice';
import { creatTransfer } from '../../redux/features/transfer';
import { toast } from 'react-toastify'
import useStyles from './styles';


const initialState = {
    sender: null,
    reciver: null,
    Devise: "TD",
    ammount: null,
    comment: null,
    transDate: null,
    reciverUser: ""
}


function Transfer() {

    const classes = useStyles();

    const [modalOpen, setModalOpen] = useState(false);

    const { userComptes, loading } = useSelector((state) => ({ ...state.compte }))
    const { user } = useSelector((state) => ({ ...state.auth }))
    const userId = user?.result?._id;

    const [formValue, setFormValue] = useState(initialState);
    const { sender, reciver, Devise, ammount, comment, transDate, reciverUser } = formValue;


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userId) {
            dispatch(getComptesByUser(userId));
        }

    }, [userId]);

    if (loading) {
        return <></>
    }

    const handleSubmit = (e) => {
        const transdata = {
            "numsender": sender,
            "numreciver": reciver,
            "amount": ammount,
        }



        if (sender && reciver && Devise && ammount && comment && transDate) {
            dispatch(creatTransfer({ formValue, userId, navigate, toast }))
            dispatch(compteToCompte(transdata))
        }

    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };


    const handelPopup = (e) => {
        e.preventDefault();
        dispatch(testusercompt({ userId, sender, ammount,transDate })).then((res) => {

            if (!res.payload.result) {
                toast.error(res.payload.message)
            } else {

                dispatch(findCompte(reciver)).then((res) => {
                    if (!res.payload.result) {

                        toast.error("verifié le numero du compte à créditer")
                    }
                    else {
                        console.log(res.payload.compte.owner)
                        setFormValue({ ...formValue, "reciverUser": res.payload.compte.owner });
                        setModalOpen(true);
                    }
                })

            }
        })


    }
    return (
        <div className='Pages' >
            <form onSubmit={handelPopup}>
                <br />
                <Paper className={classes.paper}>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <h1 style={{ paddingLeft: "7px", color: '#04951d' }}>Virement compte à compte </h1>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography className={classes.text} >Compte à débiter:</Typography>
                            <Grid item xs={12} className={classes.innerGrid}>
                                <select
                                    className={classes.selectInput}
                                    style={{ width: "96%" }}
                                    defaultValue={0}
                                    value={sender}
                                    name="sender"
                                    onChange={onInputChange} required>

                                    <option Value={0}>choisir un compte</option>
                                    {userComptes && userComptes.map((item, index) => (

                                        <option value={item.numCompte} key={item.numCompte}> {item.numCompte}</option>))}


                                </select>
                            </Grid>


                        </Grid>

                        <Grid item xs={6}>
                            <Typography className={classes.text}>Compte à créditer:</Typography>
                            <Grid item xs={12} className={classes.innerGrid}>
                                <TextField variant='standard' placeholder='code de compte' style={{ width: "96%" }} value={reciver} name="reciver" onChange={onInputChange} required />
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={classes.text} > Devise :</Typography>
                            <Grid item xs={12} className={classes.inputGrid} >
                                <select
                                    className={classes.selectInput}
                                    style={{ width: "98%" }}
                                    defaultValue={"TD"}
                                    value={Devise} name="Devise"
                                    onChange={onInputChange} required
                                >
                                    <option value={"TD"}>TD</option>
                                    <option value={"EUR"}>EUR</option>
                                    <option value={"USD"}>USD</option>
                                </select>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={classes.text}>Montant:</Typography>
                            <Grid item xs={12} className={classes.inputGrid} >
                                <TextField type="number" variant='standard' placeholder='2,500 DT' style={{ width: "98%" }} value={ammount} min="1" max="10000" name="ammount" onChange={onInputChange} required />
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography className={classes.text}>Motif de paiement:</Typography>
                            <Grid item xs={12} className={classes.inputGrid} >
                                <TextareaAutosize
                                    minRows={3}
                                    aria-label="empty textarea"
                                    placeholder=""
                                    className={classes.textArea}
                                    style={{ width: "98%", resize: "none" }}
                                    value={comment} name="comment"
                                    onChange={onInputChange} required
                                />
                            </Grid>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.text}>Date:</Typography>
                            <Grid item xs={12} className={classes.inputGrid}>
                                <input type="date"
                                   
                                    className={classes.dateInput}
                                    value={transDate}
                                    name="transDate"
                                    onChange={onInputChange} required />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} className={classes.innerGrid}>
                            <button
                                type="submit"
                                className={classes.button}
                                onClick={() => {
                                    handelPopup()
                                }}
                            >Continuer</button>
                        </Grid>
                        <br />


                    </Grid>

                </Paper>

            </form>
            {modalOpen && <Modal setOpenModal={setModalOpen} handleSubmit={handleSubmit} Devise={Devise} sender ={sender}receiver={reciver}amount={ammount} />}

        </div>
    )
}

export default Transfer