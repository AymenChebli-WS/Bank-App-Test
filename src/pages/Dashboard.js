import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCompte, getComptes } from '../redux/features/compteSlice';
import { Upgrade, Delete } from '@mui/icons-material';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';


const Dashboard = () => {
    const {comptes, loading} = useSelector((state) => ({...state.compte}));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComptes());
    }, []);

    if(loading) {
        return <Spinner />
    }

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this Compte?")) {
            dispatch(deleteCompte({id, toast}));
        }
    }

  return (
    <div className='Pages'>
        <table cellSpacing={10}>
            <tr>
                <th>Num Compte</th>
                <th>Libelle</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {comptes && comptes.map((item, index) => (
            <tr key={index}>
                <td>{item.numCompte}</td>
                <td>{item.libelle}</td>
                <td><Link to={`/editCompte/${item._id}`}><Upgrade color="primary"/></Link></td>
                <td><Delete color="warning" onClick={() => handleDelete(item._id)} /></td>
            </tr>
            ))}
        </table>
    </div>
  )
}

export default Dashboard