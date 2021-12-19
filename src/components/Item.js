import Episodes from "./Episodes";
import { useState, useContext } from "react";
import {BsFillHeartFill} from 'react-icons/bs'
import {GrFormNextLink} from 'react-icons/gr'
import '../App.css';
import { likeContext } from "../Helper/Context";
export default function Item({flip,res}) {
    const [state,setState]=useState(false);
    const {liked,setLiked}= useContext(likeContext);
    const [like,setLike]=useState(false);

    return (
       
        <div className={`item ${flip ? 'dark-background' : ''}`}>
            <div className='image-container'>
                <img src={res.image} alt="" />
            </div>
            <div className='info-container'>
                <div className='name'>
                    <h4>{res.name}</h4>
                    <span className={`like ${like?'ed':''}`} onClick={()=>{setLike(!like)}}><BsFillHeartFill /></span>
                </div>
                <div className="info-description">
                    <div className='description-top'>
                        <h6>Origin</h6>
                        <h6>{res.species}</h6>
                    </div>
                    <div className='description-bottom'>
                        <h6>{res.origin.name}</h6>
                        <h6>{res.origin.type}</h6>
                    </div>
                </div>
                <div onClick={()=>{setState(!state)}} className='episodes-button'>
                    <h6>See Episodes</h6>
                    <span><GrFormNextLink /></span>
                </div>
            </div>
            {state?<Episodes like={like} setLiked={setLiked} flip={flip} state={state}setState={setState} res={res}/>:null}
        </div>
        
    )
}
