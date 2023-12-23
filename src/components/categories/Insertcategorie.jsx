import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'

const Insertcategorie = () => {
    let navigate = useNavigate();
    const [nomcategorie, setNomcategorie] = useState("")
    const [imagecategorie, setImagecategorie] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categorie = {
            nomcategorie: nomcategorie,
            imagecategorie: imagecategorie,

        }
        await axios.post("http://localhost:3001/api/categories", categorie);
        navigate("/categories");
    };
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h4 align="center">Ajout Article</h4>
                    <div className='form mt-3'>
                        <Form className="border p-3">
                            <Row className="mb-2">
                                <Form.Label >Nom *</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nom"
                                    value={nomcategorie}
                                    onChange={(e) => setNomcategorie(e.target.value)}

                                />
                                <br />
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Image"
                                    value={imagecategorie}
                                    onChange={(e) => setImagecategorie(e.target.value)}

                                />
                            </Row>

                            <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                                <i class="fa-regular fa-floppy-disk"></i>Enregistrer</Button>
                            <Link className="btn btn-outline-danger mx-2" to="/categories">
                                Cancel
                            </Link>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insertcategorie
