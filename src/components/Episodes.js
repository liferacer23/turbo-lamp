import Episode from "./Episode";
import {BsFillHeartFill} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'
import "../App.css";
export default function Episodes({res,state,setState,flip}) {
    return (
        <div className={`episodes ${flip ? "dark-background" : ""}`}>
            <div className={`episodes-div ${flip ? "dark-background" : ""}`}>
            <div className="episodes-header">
                <div className="left">
                    <img src={res.image} alt="" />
                    <h4> {res.name}</h4>
                    <span><BsFillHeartFill /></span>
                </div>
                <div className="right">
                    <span className="ep-num"><h4>40 Episodes</h4></span>
                    <span onClick={()=>{setState(!state)}} className="close"><MdClose/></span>
                </div>
            </div>
        </div>
       
        {/*      {res.map((result)=>{
                return(
                    <Episode key={result.id} result={res}/>
                )
            })}  */}
            
        </div>
    )
}
