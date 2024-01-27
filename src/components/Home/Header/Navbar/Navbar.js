import "./Navbar.css"
import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src='/assets/logo.png' alt='logo' className='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse py-2" style={{ margin: "0 20px 0 50px" }} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-4">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item fs-4">
                            <a className="nav-link" href="/doctors-appointment">Doctor Appointment</a>
                        </li>
                        <li className="nav-item fs-4">
                            <a className="nav-link" href="/registration">Registration</a>
                        </li>
                        <li className="nav-item fs-4">
                            <a className="nav-link" href="/my-appointment" aria-disabled="true">My Appointment</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
