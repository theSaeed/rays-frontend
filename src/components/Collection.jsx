import React, { useState, useEffect } from 'react';
import '../stylesheets/collections.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from '../providers/AuthProvider';
import { axiosIns } from "../utility/axios";

export const Collection = () => {

    const auth = useAuthState();
    let { collectionId } = useParams();

    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const [collection, setCollection] = useState();
    const [polls, setPolls] = useState();

    useEffect( async () => {
        if(!auth.token)
            navigate('/login');

        setMessage(null);
        setIsPending(true);

        try{
            const res = await axiosIns.post('/getCollectionById', { collectionId });
            if (res.status !== 200) {
                setMessage('Something went wrong. Please try again later.');
                setIsPending(false);
                return;
            }
            setCollection(() => { return (
                <div className='banner'>
                    <h1 style={{backgroundImage: `linear-gradient(135deg, ${res.data.colorA}, ${res.data.colorB})`}}>{res.data.name}</h1>
                    <p style={{backgroundImage: `linear-gradient(135deg, ${res.data.colorA}, ${res.data.colorB})`}}>{res.data.description}</p>
                </div>
            )});
            const polls = <>{
                res.data.polls.map((poll) => { return (
                    <button key={poll._id} className='collection-link'>
                        <div
                            className='collection-banner'
                            style={{
                                backgroundImage: `linear-gradient(135deg, ${poll.colorA}, ${poll.colorB})`,
                                // border: `1px solid ${poll.colorB}`,
                                boxShadow: `${poll.colorB} 0 4px 8px`,
                            }}
                        >
                            <h1>{poll.name}</h1>
                        </div>
                    </button>
                )})
            }</>;
            setPolls(polls);
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
                {collection}
                {polls}
                {/* <div className='banner' style={{backgroundImage: 'linear-gradient(135deg, #A64DFF, #532680)', border: '1px solid #532680'}}>
                    <h1>Collections</h1>
                </div> */}
                {message && <p style={{color: '#f05'}}>{message}</p>}
                {isPending && <p>Loading...</p>}
            </div>
        </div>
    );
};
