import React from 'react'
import hospLogo from './assets/hosp-logo.png'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    let fetchuser = localStorage.getItem('userinfo')
    const navigate = useNavigate()

    function handleLogout(){
        localStorage.removeItem('userinfo')
        navigate('/login')
    }

    return (
        <nav class="navbar navbar-expand-xl navbar-light p-4">
            <div class="container-fluid">
                <Link class="navbar-brand d-flex align-items-center" to='/'>
                    <img src={hospLogo} alt="MediCare Hospital" class="brand-logo me-2" />
                    <span>
                        <span class="brand-name text-primary">MediCare</span>
                        <span class="brand-sub">HOSPITAL</span>
                    </span>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-3 mb-2 mb-xl-0 nav-title">
                        <li class="nav-item ms-2 me-2">
                            <Link class="nav-link active text-nowrap" to='/'>Home</Link>
                        </li>
                        <li class="nav-item ms-2 me-2">
                            <Link class="nav-link active text-nowrap" to='/doctors'>Doctors</Link>
                        </li>
                        <li class="nav-item ms-2 me-2">
                            <Link class="nav-link active text-nowrap" to='/registration'>New Registration</Link>
                        </li>
                        <li class="nav-item ms-2 me-2">
                            <Link class="nav-link active text-nowrap" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li class="nav-item ms-2 me-2">
                            <Link class="nav-link active text-nowrap" to='/contact'>Contact</Link>
                        </li>
                    </ul>

                    <div class="d-flex align-items-center gap-3 me-2">
                        <Link class="btn btn-primary text-nowrap" to='/appointment'>Book Appointment</Link>
                        {
                            fetchuser ? (
                                <>
                                    <span class="field-label text-nowrap">
                                        <i class="fa-solid fa-user text-primary me-2"></i>{fetchuser.split('@')[0]}
                                    </span>
                                    <button class="btn btn-outline-primary text-nowrap" onClick={handleLogout}>Logout</button>
                                </>
                            ) : (
                                <Link class="btn btn-outline-primary text-nowrap" to='/login'>Login</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
