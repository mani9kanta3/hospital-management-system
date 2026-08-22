import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import doctorsUrl from './doctors.json?url'
import doctorImages from './doctorImages'
import './SingleDoctor.css'

function SingleDoctor() {

  const { id } = useParams()

  const { data, load, error } = useFetch(doctorsUrl)

  if (load) {
    return <div class="doctor-loading">Loading doctor details...</div>
  }

  if (error) {
    return (
      <div class="doctor-error">
        <h2>Unable to load doctor details</h2>
        <Link to="/doctors">Back to Doctors</Link>
      </div>
    )
  }

  let doctors = []
  if (Array.isArray(data)) {
    doctors = data
  }

  const doctor = doctors.find((item) => String(item.id) === String(id))

  if (!doctor) {
    return (
      <div class="doctor-error">
        <h2>Doctor not found</h2>
        <Link to="/doctors">Back to Doctors</Link>
      </div>
    )
  }

  return (
    <div class="single-doctor-page">

      <div class="doctor-profile">

        <div class="doctor-profile-image">
          <img src={doctorImages[doctor.id]} alt={doctor.name} />
        </div>

        <div class="doctor-main-details">
          <h1>{doctor.name}</h1>
          <h2>{doctor.specialization}</h2>
          <p class="qualification">{doctor.qualification}</p>
          <p class="experience">{doctor.experience} Experience</p>

          <hr />

          <div class="doctor-info-row">
            <span>📍</span>
            <p>{doctor.hospital}, {doctor.location}</p>
          </div>

          <div class="doctor-info-row">
            <span>🕐</span>
            <p>{doctor.availability}</p>
          </div>

          <div class="doctor-info-row">
            <span>📞</span>
            <p>{doctor.contactNumber}</p>
          </div>
        </div>

        <div class="appointment-box">
          <h2>Book an Appointment</h2>
          <p>Consult {doctor.name} for your health and medical concerns.</p>
          <Link to="/appointment" class="appointment-btn">Book Appointment</Link>
        </div>

      </div>

      <div class="doctor-details-section">

        <div class="about-doctor">
          <h2>About Doctor</h2>
          <p>{doctor.about}</p>

          <div class="detail-row">
            <strong>Gender</strong>
            <span>{doctor.gender}</span>
          </div>

          <div class="detail-row">
            <strong>Age</strong>
            <span>{doctor.age} Years</span>
          </div>

          <div class="detail-row">
            <strong>Languages Spoken</strong>
            <span>{doctor.languages.join(', ')}</span>
          </div>

          <div class="detail-row">
            <strong>Contact Number</strong>
            <span>{doctor.contactNumber}</span>
          </div>
        </div>

        <div class="specialization-section">
          <h2>Specializations</h2>

          <ul>
            <li>{doctor.specialization}</li>
            <li>Preventive Healthcare</li>
            <li>Patient Care</li>
            <li>Medical Consultation</li>
          </ul>

          <h2 class="education-title">Education</h2>

          <div class="education-item">{doctor.qualification}</div>
        </div>

      </div>

    </div>
  )
}

export default SingleDoctor
