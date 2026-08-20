import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      experience: "10+ Years Experience",
      image: "/doc.jpg",
    },
    {
      id: 2,
      name: "Dr. Sarah Wilson",
      specialty: "Neurologist",
      experience: "8+ Years Experience",
      image: "/doc2.webp",
    },
    {
      id: 3,
      name: "Dr. David Brown",
      specialty: "Pediatrician",
      experience: "12+ Years Experience",
      image: "/doc3.jpg",
    },
    {
      id: 4,
      name: "Dr. Emily Johnson",
      specialty: "Dermatologist",
      experience: "9+ Years Experience",
      image: "/doc4.jpg",
    },
    {
      id: 5,
      name: "Dr. Michael Lee",
      specialty: "Orthopedic",
      experience: "11+ Years Experience",
      image: "/doc5.webp",
    },
    {
      id: 6,
      name: "Dr. Sophia Taylor",
      specialty: "Gynecologist",
      experience: "10+ Years Experience",
      image: "/doc6.png",
    },
    {
      id: 7,
      name: "Dr. James Miller",
      specialty: "ENT Specialist",
      experience: "7+ Years Experience",
      image: "/doc7.webp",
    },
    {
      id: 8,
      name: "Dr. Olivia White",
      specialty: "Psychiatrist",
      experience: "13+ Years Experience",
      image: "/doc8.jpg",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">

        <div className="container">

          <Link className="navbar-brand fw-bold" to="/doctors">
            <i className="bi bi-hospital-fill text-primary fs-2"></i>{" "}
            <span className="logo">WellMed</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/doctors">
                  Doctors
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/patients">
                  Patients
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/appointments">
                  Appointments
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

            <Link
              to="/appointments"
              className="btn btn-primary"
            >
              Book Appointment
            </Link>

          </div>
        </div>
      </nav>


      {/* Page Header */}
      <section className="doctor-header">

        <div className="container text-center">

          <h1>Our Specialist Doctors</h1>

          <p>
            Meet our experienced healthcare professionals.
          </p>

        </div>

      </section>


      {/* Doctors */}
      <section className="doctors">

        <div className="container">

          {/* 4 doctors per row */}
          <div className="doctor-grid">

            {doctors.map((doctor) => (

              <div
                className="doctor-card"
                key={doctor.id}
              >

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-img"
                />

                <div className="doctor-content">

                  <h5>{doctor.name}</h5>

                  <p className="specialty">
                    {doctor.specialty}
                  </p>

                  <p className="experience">
                    {doctor.experience}
                  </p>

                  {/* Single Doctor Profile Link */}
                  <Link
                    to={`/doctors/${doctor.id}`}
                    className="btn btn-primary profile-btn"
                  >
                    View Profile
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Doctors;