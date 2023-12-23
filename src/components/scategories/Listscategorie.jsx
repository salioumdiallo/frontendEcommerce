import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Listscategorie = () => {
    const [scategories, setScategorie] = useState([]);

    useEffect(() => {
        getscategories();
    }, []);

    const getscategories = async () => {
        await axios.get("http://localhost:3001/api/scategories")
            .then(res => {
                setScategorie(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleDelete = async (id) => {
        if (window.confirm("êtes vous sure de vouloir supprimer cette sous catégorie?")) {
            await axios.delete(`http://localhost:3001/api/scategories/${id}`)
                .then(res => {
                    getscategories()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <div>
            liste des sous categories

            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">

                        <Link className="btn btn-outline-light" to="/scategories/add">
                            Ajouter Scategorie
                        </Link>
                    </div>
                </nav>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {scategories.map((scat, index) =>
                        <tr key={index}>
                            <td><img src={scat.imagescategorie} width={80} height={80} /></td>
                            <td>{scat.nomscategorie}</td>
                            <td><Link className='btn btn-outline-warning mx-2'
                                to={`/scategories/edit/${scat._id}`}
                            ><i class="fa-solid fa-pen"></i>Modifier</Link></td>
                            <td><Button variant="outline-danger" onClick={() => handleDelete(scat._id)}>
                                <i className="fa-solid fa-trash"></i> Delete</Button></td>

                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default Listscategorie
