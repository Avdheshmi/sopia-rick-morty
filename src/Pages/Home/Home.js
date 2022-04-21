import React ,{useEffect,useState}  from "react";
import Card from "../../components/Card/Card";
import "./Home.css"


const Home=()=>{
    const [data, setData]=useState(null)

useEffect(() => {
    let url="https://rickandmortyapi.com/api/character"
    const getData= async()=>{
        let response= await fetch(url,{
            method:"GET"
        })
        if(!response.ok){
            throw new Error("fetching Error")
        }
        const result=await response.json()
        console.log(result)
        setData(result.results)
    }

    getData()
}, [])

    return(
        <>
            <h1 className="heading">Rick and Morty anime</h1>

            <div className="container">
            {data && data.slice(0,21).map((item)=>{
                return <Card  key={item.id} name={item.name} status={item.status} image={item.image} gender={item.gender} species={item.species} res={item} Fav={true}/>
            })}
            </div>
          
 
        </>

    )
}

export default Home