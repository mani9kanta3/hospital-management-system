import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light p-4">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> <img src="./hosp-logo.png" alt="" width="35px" /> Medicare Hospital</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-title">
                        <li class="nav-item ms-3 me-3">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item ms-3 me-3">
                            <a class="nav-link active" aria-current="page" href="#">Doctors</a>
                        </li>
                        <li class="nav-item ms-3 me-3">
                            <a class="nav-link active" aria-current="page" href="#">Patients</a>
                        </li>
                        <li class="nav-item ms-3 me-3">
                            <a class="nav-link active" aria-current="page" href="#">Appointments</a>
                        </li>
                        <li class="nav-item ms-3 me-3">
                            <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item ms-3 me-5">
                            <a class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    <button class="btn btn-primary">Book Appointment</button>
                </ul>
            </div>
        </div>
    </nav >
  )
}

export default Navbar