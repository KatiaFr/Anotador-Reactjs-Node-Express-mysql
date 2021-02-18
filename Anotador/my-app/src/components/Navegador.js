import React, { Component } from 'react'
import {  Link } from "react-router-dom";

export default class Navegador extends Component {
    render() {
        return (
            <div className="App">
                <menu className = "container">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                            <Link className="navbar-brand" to="/">  Notas </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                <Link className="navbar-brand" to="/edit/id"> Editar Notas </Link>
                                </li>
                                <li className="nav-item">
                                <Link className="navbar-brand" to="/crear">  Crear Notas </Link>

                                </li>
                                <li className="nav-item">
                                <Link className="navbar-brand" to="/user"> Crear Usuario/persona </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </menu>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

            </div>

        )
    }
}
