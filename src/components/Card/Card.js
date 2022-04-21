import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Likedredux";
import { removeProduct } from '../../redux/Likedredux';


const Card = (props) => {
  // const [fav, setFav] = useState(null)
  const dispatch=useDispatch()
 
  const handleFavClick=(val)=>{
     
      // setFav(val)
      dispatch(addProduct({val}))
      localStorage.setItem(val)

  }

  const removeClick=(val)=>{
    
    dispatch(removeProduct({val}))
 }
 
  return (
    <>
    <div className="box">
      <div class="flip-card ">
        <div class="flip-card-inner ">
          <div class="flip-card-front">
            <img src={props.image} alt="im" />
          </div>
          <div class="flip-card-back">
            <h1> {props.name}</h1>
            <p>Status :{props.status} </p>
            <p>Gender :{props.gender}</p>
            <p>Species :{props.species}</p>
          </div>
        </div>
      </div>
      {props.Fav === true && <div className="bottom" onClick={()=>handleFavClick(props.res)}>
        <div className="like">Add to favourite</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>

          </div>}
          {props.remove===true && <button onClick={()=>removeClick(props.res)}>remove</button>}
          </div>
    </>
  );
};

export default Card;
