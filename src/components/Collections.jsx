import React, { useState, useEffect } from 'react';
import '../stylesheets/collections.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from '../providers/AuthProvider';
import { axiosIns } from "../utility/axios";

export const Collections = () => {

    const auth = useAuthState();

    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const [collections, setCollections] = useState();

    useEffect( async () => {
        if(!auth.token)
            navigate('/login');

        setMessage(null);
        setIsPending(true);

        try{
            const res = await axiosIns.get('/getCollections');
            if (res.status !== 200) {
                setMessage('Something went wrong. Please try again later.');
                setIsPending(false);
                return;
            }
            const collections = <>{
                res.data.map((details) => { return (
                    <Link key={details._id} to={`/collection/${details._id}`} className='collection-link'>
                        <div
                            className='collection-banner'
                            style={{
                                backgroundImage: `linear-gradient(135deg, ${details.colorA}, ${details.colorB})`,
                                // border: `1px solid ${details.colorB}`,
                                boxShadow: `${details.colorB} 0 4px 8px`,
                            }}
                        >
                            <h1>{details.name}</h1>
                            <p>{details.description}</p>
                        </div>
                    </Link>
                )})
            }</>
            setCollections(collections);
            setIsPending(false);
        } catch (err) {
            console.log(err);
            setMessage('Something went wrong. Please try again later.');
            setIsPending(false);
        }
    }, [])

    return (
        <div className='collections-back'>
            <div className="flexbox-container">
                <div className='banner'>
                    <h1 style={{backgroundImage: 'linear-gradient(135deg, #A64DFF, #532680)'}}>Collections</h1>
                </div>
                {message && <p style={{color: '#f05'}}>{message}</p>}
                {isPending && <p>Loading...</p>}
                {collections}
            </div>
        </div>
    );
};
