import React from 'react'
import {CgPlayButtonR} from 'react-icons/cg';
import {MdDateRange} from 'react-icons/md';
import "../App.css";
export default function Episode({result}) {
    return (
  
        <div className='episode'>
            <div className='title'>
                <h6>{result.name}</h6>
            </div>
            <div className="episode-info">
                <div className="episode-season">
                    <span><CgPlayButtonR/></span>
                    <div>
                <h6>{result.id}</h6>
                    <h6>Episode</h6>
                    </div>
                </div>

                <div className='episode-date'>
                    <span><MdDateRange/></span>
                    <div>
                    <h6>{result.air_date}</h6>
                    <h6>Air Date</h6>
                    </div>
                </div>

            </div>
        </div>
        
    )
}
