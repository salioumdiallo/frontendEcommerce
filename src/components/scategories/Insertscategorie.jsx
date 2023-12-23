import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'

const Insertscategorie = () => {
    let navigate = useNavigate();
    const [nomscategorie, setNomscategorie] = useState("")
    const [imagescategorie, setImagescategorie] = useState("")
    const [categorieID, setCategorieID] = useState("")
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getcategories()
    }, []
    )
    const getcategories = async () => {
        try {
            const res = await axios.get("http://localhost:3001/api/categories")
            setCategories(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scategorie = {
            nomscategorie: nomscategorie,
            imagescategorie: imagescategorie,
            categorieID: categorieID

        }
        await axios.post("http://localhost:3001/api/scategories", scategorie);
        navigate("/scategories");
    };

    return (
        <div>
            <div className="row">

                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h4 align="center">Ajout sous Catégorie</h4>
                    <div className='form mt-3'>
                        <Form className="border p-3">
                            <Row className="mb-2">
                                <Form.Label >Nom scategorie *</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nom"
                                    value={nomscategorie}
                                    onChange={(e) => setNomscategorie(e.target.value)}

                                />
                                <br />
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Image"
                                    value={imagescategorie}
                                    onChange={(e) => setImagescategorie(e.target.value)}
                                />
                                <Form.Label>Catégorie</Form.Label>
                                <Form.Control
                                    as="select"
                                    type="select"
                                    value={categorieID}
                                    onChange={(e) => setCategorieID(e.target.value)}
                                >
                                    <option>Choisir une Scatégories</option>
                                    {categories.map((cat, index) =>
                                        <option value={cat._id}>{cat.nomcategorie}</option>
                                    )}
                                </Form.Control>
                            </Row>
                            <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                                <i class="fa-regular fa-floppy-disk"></i>Enregistrer</Button>
                            <Link className="btn btn-outline-danger mx-2" to="/scategories">
                                Cancel
                            </Link>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insertscategorie
