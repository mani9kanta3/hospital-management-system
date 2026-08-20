import React, { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetch from './useFetch'
import useDebounce from './useDebounce'
import doctorsUrl from './doctors.json?url'
import doctorImages from './doctorImages'
import './doctor.css'

function Doctors() {

    // get the doctors data from the json file
    const { data, load, error } = useFetch(doctorsUrl)

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    // how many doctors we want to show in one page
    const perPage = 4

    // if data is not an array, use an empty list
    let doctors = []
    if (Array.isArray(data)) {
        doctors = data
    }

    // search value updates only after the user stops typing for 500ms
    const debouncedSearch = useDebounce(search, 500)

    // filter the doctors. useMemo runs it again only when search or data changes
    const filteredDoctors = useMemo(() => {
        let text = debouncedSearch.toLowerCase()

        return doctors.filter((doctor) => {
            return doctor.name.toLowerCase().includes(text) ||
                doctor.specialization.toLowerCase().includes(text) ||
                doctor.location.toLowerCase().includes(text)
        })
    }, [debouncedSearch, data])

    // when user searches something new, go back to page 1
    useEffect(() => {
        setPage(1)
    }, [debouncedSearch])

    // total pages needed. 6 doctors / 4 per page = 2 pages
    let totalPages = Math.ceil(filteredDoctors.length / perPage)

    // cut out only the 4 doctors of the current page
    let firstIndex = (page - 1) * perPage
    let lastIndex = firstIndex + perPage
    let currentDoctors = filteredDoctors.slice(firstIndex, lastIndex)

    // make the page numbers list like [1, 2]
    let pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

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

            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6">
                        <div class="input-group">
                            <span class="input-group-text bg-white"><i class="fa-solid fa-magnifying-glass text-secondary"></i></span>
                            <input type="text" class="form-control" placeholder="Search by name, specialization or location"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5 mb-5">

                {load && <p class="text-center info-text">Loading doctors...</p>}

                {error && <p class="text-center info-text">Unable to load doctors. Please try again.</p>}

                {
                    !load && !error &&
                    <>
                        <div class="doctor-grid">
                            {
                                currentDoctors.map((doctor) => (
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
                            filteredDoctors.length === 0 &&
                            <p class="text-center info-text mt-4">No doctors found for "{debouncedSearch}"</p>
                        }

                        {
                            totalPages > 1 &&
                            <nav aria-label="Doctors pagination">
                                <ul class="pagination justify-content-center mt-5">

                                    <li class={page === 1 ? 'page-item disabled' : 'page-item'}>
                                        <a class="page-link" href="#" onClick={(e) => changePage(e, page - 1)}>Previous</a>
                                    </li>

                                    {
                                        pageNumbers.map((number) => (
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
                        }
                    </>
                }

            </div>
        </>
    )
}

export default Doctors
