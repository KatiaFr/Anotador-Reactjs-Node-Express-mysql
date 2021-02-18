import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './styles.css';


export default class ListaDeNotas extends Component {

    state = {
        notas: []
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async function connect() {
        try {
            const responses = await axios.get("http://localhost:3001/anotador/notas");
            this.setState({
                notas: responses.data
            });
            console.log(responses.data);
        }
        catch (e) {
            console.log("salí por el catch", e);
        }

    }

    deleteNote = async (id) => {
        await axios.delete("http://localhost:3001/anotador/notas" + id);
        this.getNotes();
    }

    render() {
        return (
            <div className="row" id="columnasNotas">
                {
                    this.state.notas.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                <p>
                                        Id de la nota: {note.id}
                                    </p>
                                    <Link to={"/edit/" + note._id} className="btn btn-secondary">
                                        <i className="arrow-up-right-square"> Edit </i>
                                    </Link>

                                </div>

                                <div className="card-body">
                                    <h4 className="card-title">Card title:    {note.title}
                                    </h4>

                                    <p>
                                        Author: {note.user_name}
                                    </p>
                                    <p>
                                        Descripción: {note.descripcion}
                                    </p>
                                    <span className="badge bg-info text-light">Fecha: {note.timestamps}</span>

                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
