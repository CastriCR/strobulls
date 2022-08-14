import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <section id="Navigation">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg" aria-label="Eighth navbar example">
                                <div className="container">
                                    <a className="navbar-brand" href="#"><img width="50" src="https://cdn-icons-png.flaticon.com/512/107/107410.png" /></a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarsExample07">
                                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Nosotros</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Mascotas</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Raza</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">FAQ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link">Contacto</a>
                                            </li>
                                        </ul>
                                        <div>
                                            <button className="btn"><i className="bi bi-facebook"></i></button>
                                            <button className="btn"><i className="bi bi-instagram"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section id="header">
                <h1>Hello, we are Strobulls</h1>
                <p>We breed awesome French Bulldogs for over 16 years</p>
            </section>
            <section id="introduction">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>peaking of Frenchies, we are definitely one of the best kennels in America. Our champs are born and raised in Louisiana, loving environment with affection and discipline.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="breederDNA">

            </section>
            <section id="champions">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Proudly presenting our Champions</h1>
                            <p>There was a long way up to the top, years long. But we finally got there. Today we offer the purest blood Frenchies, crossed over generations. No mistake for full blooded French Bulldog at us!</p>
                            <button className="btn btn-primary">Any questions?</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card w-100" style={{ width: 18 + 'rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card w-100" style={{ width: 18 + 'rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card w-100" style={{ width: 18 + 'rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img width="50" src="https://cdn-icons-png.flaticon.com/512/107/107410.png" />
                            <br />
                            <button className='btn'><i className="bi bi-facebook"></i></button>
                            <button className='btn'><i className="bi bi-instagram"></i></button>
                            <button className='btn'><i className="bi bi-whatsapp"></i></button> <span className="bg-light">call: +506 8888-8888</span>
                            <p>Direccion de lugar a compartir // info@Strobulls.com</p>
                            <p>© 2022 Derechos reservados </p>
                        </div>
                    </div>
                </div>
            </section>
            <div>Home</div>
            <Link className="btn btn-primary" to="/aboutus">Nosotros</Link>
        </>
    )
}
