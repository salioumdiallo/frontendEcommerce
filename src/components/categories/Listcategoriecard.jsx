import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Affichecategoriecard from './Affichecategoriecard'

const Listcategoriecard = () => {
    const[categorie, setCategorie]=useState([])

    const fetchcategorie=async()=>{
        await axios.get("http://localhost:3001/api/categories")
        .then(res=>{
            setCategorie(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchcategorie()
    }, [])
  return (
    <div>
      <Affichecategoriecard categories={categorie}/>
    </div>
  )
}

export default Listcategoriecard
