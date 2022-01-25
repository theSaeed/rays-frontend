import React, { useState, useEffect } from 'react';
import '../stylesheets/collections.css';
import { axiosIns } from "../utility/axios";

export const Poll = ({ poll, hidePoll }) => {

    const [choices, setChoices] = useState();
    const [isPending, setIsPending] = useState(true);
    const [message, setMessage] = useState(null);

    useEffect( async () => {
        setMessage(null);
        setIsPending(true);

        try{
            const res = await axiosIns.post('/getPollById', { pollId: poll._id });
            setIsPending(false);
            if (res.status !== 200) {
                setMessage('Something went wrong. Please try again later.');
                return;
            }
            if (res.data.canVote === true) {
                setMessage('Vote now!');
                const choices = <>{
                    res.data.choices.map((choice) => { return (
                        <button key={poll._id} className='choice-button' onClick={(e) => {}}>
                            <p style={{float: 'left'}}>{choice.name}</p>
                            <p style={{float: 'right'}}>{choice.voteCount}</p>
                        </button>
                    )})
                }</>;
                setChoices(choices);
            } else {
                setMessage('You\'ve already voted. But you can vote again, tomorrow!');
                const choices = <>{
                    res.data.choices.map((choice) => { return (
                        <button key={poll._id} disabled className='choice-button-disabled'>
                            <p style={{float: 'left'}}>{choice.name}</p>
                            <p style={{float: 'right'}}>{choice.voteCount}</p>
                        </button>
                    )})
                }</>;
                setChoices(choices);
            }
        } catch (err) {
            console.log(err);
            setMessage('Something went wrong. Please try again later.');
            setIsPending(false);
        }
    }, [])

    return (
        <div className='poll-background'>
            <div className="poll-container">
                <div
                    className="poll-panel"
                    style={{backgroundImage: `linear-gradient(135deg, ${poll.colorA}, ${poll.colorB})`}}
                >
                    <button className='poll-close' onClick={hidePoll}>X</button>
                    <h3>{poll.name}</h3>
                    
                    {message && <p className='poll-message'>{message}</p>}
                    {isPending && <p className='poll-message'>Loading</p>}
                    
                    {choices}
                </div>
            </div>
        </div>
    );
};
