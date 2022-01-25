import React, { useState, useEffect, useCallback } from 'react';
import '../stylesheets/login.css';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../providers/AuthProvider';
import { axiosIns } from "../utility/axios";

export const Create = () => {

    const sampleJSON = {
        "name": "Awards",
        "description": "Super huge awards",
        "colorA": "#ff6a00",
        "colorB": "#ee096a",
        "polls": {
            "0": {
                "name": "Shapes",
                "colorA": "#e35d5b",
                "colorB": "#e53935",
                "choices": {
                    "0": "Square",
                    "1": "Rectangle",
                    "2": "Triangle",
                    "3": "Circle"
                }
            },
            "1": {
                "name": "Colors",
                "colorA": "#ff0084",
                "colorB": "#33001b",
                "choices": {
                    "0": "Red",
                    "1": "Green",
                    "2": "Blue",
                    "3": "Yellow",
                    "4": "Black"
                }
            },
            "2": {
                "name": "One or Two",
                "colorA": "#fe8c00",
                "colorB": "#f83600",
                "choices": {
                    "0": "One",
                    "1": "Two"
                }
            },
            "3": {
                "name": "What",
                "colorA": "#ea384d",
                "colorB": "#d31027",
                "choices": {
                    "0": "Yeah",
                    "1": "Sure",
                    "2": "Nah",
                    "3": "Obviously",
                    "4": "Nope",
                    "5": "Clearly"
                }
            },
            "4": {
                "name": "Last One",
                "colorA": "#fc6767",
                "colorB": "#ec008c",
                "choices": {
                    "0": "Last One",
                    "1": "Last Two",
                    "2": "Last Three",
                    "3": "Last Four",
                    "4": "Last Five"
                }
            }
        }
    }

    const [collection, setCollection] = useState(JSON.stringify(sampleJSON, null, 4));

    const auth = useAuthState();

    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = useCallback( async (e) => {
        e.preventDefault();
        setMessage(null);
        setIsPending(true);
        
        try{
            const res = await axiosIns.post('/addCollection', JSON.parse(collection));
            console.log(res);
            if (res.status !== 201) {
                if (res.data.message)
                    setMessage(res.data.message);
                else
                    setMessage('Something went wrong. Please try again later.');
                setIsPending(false);
                return;
            }
            navigate('/');
            setIsPending(false);
        } catch (err) {
            console.log(err);
            if (err.response) {
                setMessage(err.response.data.message);
            } else {
                setMessage('Something went wrong. Please try again later.');
            }
            setIsPending(false);
        }
    })

    useEffect(() => {
        if(!auth.token || auth.userLevel !== 'admin')
            navigate('/');
    }, [])

    return (
        <div className='login' id="collection">
            <div className='flexbox-container'>
                <div className='login-panel'>
                    <div className='login-title-container'>
                        <h2 className='login-title'>Create Panel</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor='collection-field' className='field-label'>Collection formatted in JSON</label>
                        <textarea
                            required
                            className='field code'
                            id='collection-field'
                            name='collection-field'
                            autoCapitalize='off'
                            autoCorrect='off'
                            value={collection}
                            onChange={(e) => setCollection(e.target.value)}
                        />
                        {message && <>
                            <div className='login-gap'></div>
                            <p style={{color: '#f05'}}>{message}</p>
                        </>}
                        <div className='login-gap'></div>
                        <div className='login-button-container'>
                            <button disabled={isPending} className='login-button'>{isPending? 'Loading...':'Create'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
