import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCompte } from '../redux/features/compteSlice';

const SingleCompte = () => {
    const dispatch = useDispatch();
    const {compte} = useSelector((state) => ({...state.compte}));
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            dispatch(getCompte(id))
        }
    }, [id])

  return (
    <div className='Pages'>
        N° de compte: {compte?.numCompte} <br />
        Libellé compte: {compte?.libelle} <br />
        Date solde: {compte?.dateSolde} <br />
        Devise: {compte?.devise} <br />
        Solde actuel: {compte?.soldeActuel} <br />
    </div>
  )
}

export default SingleCompte