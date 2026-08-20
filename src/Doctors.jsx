import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import doctorsUrl from "./doctors.json?url";
import doctorImages from "./doctorImages";
import useDebounce from "./useDebounce";
import "./doctor.css";

const PER_PAGE = 4;

function Doctors() {
  const { data, load, error } = useFetch(doctorsUrl);

  // guard: if the response is ever not an array, fall back to empty
  const doctors = Array.isArray(data) ? data : [];
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 500);

  const filteredDoctors = useMemo(() => {
    const text = debouncedSearch.toLowerCase();

    return doctors.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(text) ||
        doctor.specialization.toLowerCase().includes(text) ||
        doctor.location.toLowerCase().includes(text)
      );
    });
  }, [debouncedSearch, doctors]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const totalPages = Math.ceil(filteredDoctors.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const currentDoctors = filteredDoctors.slice(start, start + PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  function goTo(e, n) {
    e.preventDefault();
    if (n >= 1 && n <= totalPages) {
      setPage(n);
    }
  }


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
                placeholder="Search by name, specialization or location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="doctors">
        <div className="container">

          {load && (
            <p className="text-center info-text mt-4">Loading doctors...</p>
          )}

          {error && (
            <p className="text-center info-text mt-4">
              Unable to load doctors. Please try again.
            </p>
          )}

          {!load && !error && (
            <>
              <div className="doctor-grid">
                {currentDoctors.map((doctor) => (
                  <div className="doctor-card" key={doctor.id}>

                    <img
                      src={doctorImages[doctor.id]}
                      alt={doctor.name}
                      className="doctor-card-img"
                    />

                    <div className="doctor-content">
                      <h5>{doctor.name}</h5>

                      <p className="specialty">{doctor.specialization}</p>

                      <p className="experience">
                        {doctor.experience} Experience
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

              {totalPages > 1 && (
                <nav aria-label="Doctors pagination">
                  <ul className="pagination justify-content-center mt-5">

                    <li className={page === 1 ? "page-item disabled" : "page-item"}>
                      <a
                        className="page-link"
                        href="#"
                        tabIndex={page === 1 ? -1 : 0}
                        aria-disabled={page === 1}
                        onClick={(e) => goTo(e, page - 1)}
                      >
                        Previous
                      </a>
                    </li>

                    {pageNumbers.map((n) => (
                      <li
                        key={n}
                        className={page === n ? "page-item active" : "page-item"}
                        aria-current={page === n ? "page" : undefined}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={(e) => goTo(e, n)}
                        >
                          {n}
                        </a>
                      </li>
                    ))}

                    <li className={page === totalPages ? "page-item disabled" : "page-item"}>
                      <a
                        className="page-link"
                        href="#"
                        tabIndex={page === totalPages ? -1 : 0}
                        aria-disabled={page === totalPages}
                        onClick={(e) => goTo(e, page + 1)}
                      >
                        Next
                      </a>
                    </li>

                  </ul>
                </nav>
              )}
            </>
          )}

        </div>
      </section>
    </>
  );
}

export default Doctors;
