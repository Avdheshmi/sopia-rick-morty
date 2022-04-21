import React from 'react'
import { useSelector } from "react-redux";
import Card from '../../components/Card/Card';
import "./Liked.css"


const Liked = () => {
  const favourites = useSelector((state) => state.Liked.product)
 
  
  return (
    <>
            <h1 className="heading">Your Favourites</h1>

    <div className="likedItem">
      {favourites.map((item)=>{
        return (<div><Card  key={item.val.id} name={item.val.name} status={item.val.status} image={item.val.image} gender={item.val.gender} species={item.val.species} Fav={false} remove={true}/>
        </div> 
        
        )
      })}
    </div>
    
    </>
  )
}

export default Liked