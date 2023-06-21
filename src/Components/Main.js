import react, { useState } from "react";
import Card from "./Card"
import axios from "axios";
const Main=()=>{
    const[search, setSearch]=useState("");
    const[bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if (evt.onKeyPress==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCcL7Ew_rL12oeNKA0Z6yxhTJpfdNTWG0M'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>Ecommerce<br/> Tentativa 1.</h1>
            </div>
            <div className="row2">
                <h2>Busca</h2>
                <div className="search">
                    <input type="text" placeholder="Faça sua pesquisa aqui"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img src="./bg2.png" alt="" />
            </div>
        </div>

        <div className="container">
          <Card/>
        </div>
        </>
    )
}

export default Main; 

