import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import useDebounce from "./useDebounce";
import "./doctor.css";

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

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const filteredDoctors = useMemo(() => {
    const text = debouncedSearch.toLowerCase();

    return doctors.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(text) ||
        doctor.specialty.toLowerCase().includes(text)
      );
    });
  }, [debouncedSearch]);

  return (
    <>
      <div className="container-fluid second-section">
        <div className="container">
          <div className="d-flex p-4">
            <div className="banner-icon ms-3 me-4">
              <i className="fa-solid fa-user-doctor text-primary"></i>
            </div>
            <div>
              <h1>Our Specialist Doctors</h1>
              <p className="offer-font">Meet our experienced healthcare professionals <br/> and book an appointment with them.</p>
            </div>
          </div>
        </div>
      </div>


      <section className="container mt-4 mb-4">

        <div className="row justify-content-center">

          <div className="col-md-8 col-lg-6">

            <div className="input-group">

              <span className="input-group-text bg-white">
                <i className="fa-solid fa-magnifying-glass text-secondary"></i>
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search by doctor name or specialty"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

          </div>

        </div>

      </section>

      <section className="doctors">

        <div className="container">

          <div className="doctor-grid">

            {filteredDoctors.map((doctor) => (

              <div
                className="doctor-card"
                key={doctor.id}
              >

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-card-img"
                />

                <div className="doctor-content">

                  <h5>{doctor.name}</h5>

                  <p className="specialty">
                    {doctor.specialty}
                  </p>

                  <p className="experience">
                    {doctor.experience}
                  </p>

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

          {filteredDoctors.length === 0 && (
            <p className="text-center info-text mt-4">
              No doctors found for "{debouncedSearch}"
            </p>
          )}

        </div>

      </section>
    </>
  );
}

export default Doctors;