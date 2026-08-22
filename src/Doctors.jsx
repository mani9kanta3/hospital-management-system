import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'
import useDebounce from './useDebounce'
import doctorsUrl from './doctors.json?url'
import doctorImages from './doctorImages'
import './doctor.css'

function Doctors() {

    // load all doctors from our json file
    const { data, load, error } = useFetch(doctorsUrl)
    const doctors = Array.isArray(data) ? data : []

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    // wait 500ms after the user stops typing
    const searchText = useDebounce(search, 500)

    // filter the doctors by name, specialization or location
    const filtered = useMemo(() => {
        const text = searchText.toLowerCase()

        return doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(text) ||
        doctor.specialization.toLowerCase().includes(text) ||
        doctor.location.toLowerCase().includes(text)
        )
    }, [searchText, doctors])

    // go back to page 1 when a new search is done
  useEffect(() => {
        setPage(1)
    }, [searchText])

    // show only 4 doctors on one page
    const perPage = 4
    const totalPages = Math.ceil(filtered.length / perPage)
    const start = (page - 1) * perPage
    const showDoctors = filtered.slice(start, start + perPage)

    function changePage(e, newPage) {
        e.preventDefault()

        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage)
    }
  }

  return (
    <>
            <div class="container-fluid second-section">
                <div class="container">
                    <div class="d-flex p-4">
                        <div class="banner-icon ms-3 me-4">
                            <i class="fa-solid fa-user-doctor text-primary"></i>
            </div>
            <div>
              <h1>Our Specialist Doctors</h1>
                            <p class="offer-font">Meet our experienced healthcare professionals <br/> and book an appointment with them.</p>
            </div>
          </div>
        </div>
      </div>

            <div class="container mt-4 mb-4">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6">
                        <div class="input-group">
                            <span class="input-group-text bg-white">
                                <i class="fa-solid fa-magnifying-glass text-secondary"></i>
              </span>
                            <input type="text" class="form-control" placeholder="Search by name, specialization or location"
                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
            </div>

            <div class="container doctors mb-5">

                {load && <p class="text-center info-text mt-4">Loading doctors...</p>}

                {error && <p class="text-center info-text mt-4">Unable to load doctors. Please try again.</p>}

                <div class="doctor-grid">
                    {
                        showDoctors.map((doctor) => (
                            <div class="doctor-card" key={doctor.id}>
                                <img src={doctorImages[doctor.id]} alt={doctor.name} class="doctor-card-img" />
                                <div class="doctor-content">
                      <h5>{doctor.name}</h5>
                                    <p class="specialty">{doctor.specialization}</p>
                                    <p class="experience">{doctor.experience} Experience</p>
                                    <Link to={`/doctors/${doctor.id}`} class="btn btn-primary profile-btn">View Profile</Link>
                    </div>
                  </div>
                        ))
                    }
              </div>

                {
                    filtered.length === 0 && !load && (
                        <p class="text-center info-text mt-4">No doctors found for "{searchText}"</p>
                    )
                }

                {
                    totalPages > 1 && (
                <nav aria-label="Doctors pagination">
                            <ul class="pagination justify-content-center mt-5">

                                <li class={page === 1 ? 'page-item disabled' : 'page-item'}>
                                    <a class="page-link" href="#" onClick={(e) => changePage(e, page - 1)}>Previous</a>
                    </li>

                                {
                                    Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                        <li class={page === number ? 'page-item active' : 'page-item'} key={number}>
                                            <a class="page-link" href="#" onClick={(e) => changePage(e, number)}>{number}</a>
                      </li>
                                    ))
                                }

                                <li class={page === totalPages ? 'page-item disabled' : 'page-item'}>
                                    <a class="page-link" href="#" onClick={(e) => changePage(e, page + 1)}>Next</a>
                    </li>

                  </ul>
                </nav>
                    )
                }

        </div>
    </>
    )
}

export default Doctors
