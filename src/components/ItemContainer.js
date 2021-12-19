
import Item from "./Item";
import "../App.css";


export default function ItemContainer({ flip, data,searchTerm }) {
 
  return (
    <div className={`item-container ${flip ? "dark-background" : ""}`}>
      
      {data.filter((res)=>{
        if(searchTerm===""){
          return res
        }
        else if(res.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return res
        }
        
      }).map((res)=>{
        return(
      <Item data={data} key={res.id} res={res} flip={flip} />
        )
    })}
    </div>

  );


}
