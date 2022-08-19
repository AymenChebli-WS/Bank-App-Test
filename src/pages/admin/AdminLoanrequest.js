import React, { useState,useEffect } from 'react';
import { getAllLoanReq, updateLoanreq } from '../../redux/features/loanrequest';
import { createLoan } from '../../redux/features/loanSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


function AdminLoanrequest() {
    const dispatch = useDispatch();
    const { loanReqs } = useSelector((state) => ({ ...state.loanreq }));
    const [refresh ,setRefresh] = useState();

    useEffect(() => {
        dispatch(getAllLoanReq());
    }, []);


    const updatereq = (id, newStatus, item) => {
        const newstatus = newStatus === 1 ? "accepted" : "rejcted";
        const updateData = {
            id: id,
            newStatus: newstatus
        }
        const loanData = {
            User: item.requester,
            ammount: item.ammount,
            payBack: item.payBack,
        }

        dispatch(updateLoanreq(updateData));
        console.log(loanData)
        if (newStatus === 1) {
            dispatch(createLoan({ loanData, toast }))
        }
        window.location.reload(false);

    }

    return (
        <div className='Pages'>
            {loanReqs && loanReqs.map((item, index) => (
                <div>Status: {item.status}
                    <button onClick={() => { updatereq(item._id, 1, item); }}>accept</button>
                    <button onClick={() => { updatereq(item._id, 2, item); }}>reject</button> </div>
            ))}
        </div>
    )
}

export default AdminLoanrequest