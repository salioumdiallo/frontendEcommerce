import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Affichescategoriecard from './Affichescategoriecard'

const Listscategoriecard = () => {
    const[scategorie, setScategorie]=useState([])

    const fetchscategorie=async()=>{
        await axios.get("http://localhost:3001/api/scategories")
        .then(res=>{
            setScategorie(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchscategorie()
    }, [])
  return (
    <div>
      <Affichescategoriecard scategories={scategorie}/>
    </div>
  )
}

export default Listscategoriecard
