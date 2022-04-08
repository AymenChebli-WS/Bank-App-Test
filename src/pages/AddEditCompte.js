import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCompte, updateCompte } from '../redux/features/compteSlice';

const initialState = {
    numCompte: null,
    libelle: "",
    dateSolde: null,
    devise: "",
    soldeActuel: null,
    
}

const AddEditCompte = () => {

    const [compteData, setCompteData] = useState(initialState);
    const {error, loading, comptes} = useSelector((state) => ({ ...state.compte})); //register compte key
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {numCompte, libelle, dateSolde, devise, soldeActuel} = compteData;
    const {id} = useParams();

    useEffect(() => {
      if(id) {
        const singleCompte = comptes.find((compte) => compte._id === id);
        setCompteData({...singleCompte});
      }
    }, [id])

    useEffect(() => {
        error && toast.error(error);
    }, [error]); //will only show up if we have an error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (numCompte && libelle && dateSolde && devise && soldeActuel) {
          if(!id) {
            dispatch(createCompte({compteData, navigate, toast}));
          } else {
            dispatch(updateCompte({id, compteData, toast, navigate}));
          }
        }
    };
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCompteData({ ...compteData, [name]: value});
    };

  return (
    <div className='Pages'>
      <form onSubmit={handleSubmit}>
        Numéro Compte: <input type="number" value={numCompte} name="numCompte" onChange={onInputChange} required />
        <br />
        libellé: <input type="text" value={libelle} name="libelle" onChange={onInputChange} required />
        <br />
        Date Solde: <input type="date" value={dateSolde} name="dateSolde" onChange={onInputChange} required />
        <br />
        Devise: <input type="text" value={devise} name="devise" onChange={onInputChange} required />
        <br />
        Solde Actuel: <input type="number" value={soldeActuel} name="soldeActuel" onChange={onInputChange} required />
        <br />
        <input type="submit" value={id ? "Update" : "Create"} />
      </form>
    </div>
  )
}

export default AddEditCompte