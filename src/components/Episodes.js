import Episode from "./Episode"
export default function Episodes({data}) {
    return (
        <div className="episodes-div">
            <div className="episodes-header">
                <div className="left">
                    <img src={data.image} alt="" />
                    <h1>{data.name}</h1>
                    <span></span>
                </div>
                <div className="rigth">
                    <span className="ep-num"></span>
                    <span className="close"></span>
                </div>
            </div>
            {data.map((res)=>{
                return(
                    <Episode key={res.id} res={res}/>
                )
            })}
            
        </div>
    )
}
