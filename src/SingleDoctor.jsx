import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import doctorsUrl from "./doctors.json?url";
import doctorImages from "./doctorImages";
import "./SingleDoctor.css";

function SingleDoctor() {
  const { id } = useParams();

  const { data, load, error } = useFetch(doctorsUrl);

  if (load) {
    return <div className="doctor-loading">Loading doctor details...</div>;
  }

  if (error) {
    return (
      <div className="doctor-error">
        <h2>Unable to load doctor details</h2>
        <Link to="/doctors">Back to Doctors</Link>
      </div>
    );
  }

  const doctors = Array.isArray(data) ? data : [];
  const doctor = doctors.find((item) => String(item.id) === String(id));

  if (!doctor) {
    return (
      <div className="doctor-error">
        <h2>Doctor not found</h2>
        <Link to="/doctors">Back to Doctors</Link>
      </div>
    );
  }


  return (
    <div className="single-doctor-page">

      {/* Main Profile */}

      <div className="doctor-profile">

        <div className="doctor-profile-image">
          <img src={doctorImages[doctor.id]} alt={doctor.name} />
        </div>

        <div className="doctor-main-details">

          <h1>{doctor.name}</h1>

          <h2>{doctor.specialization}</h2>

          <p className="qualification">{doctor.qualification}</p>

          <p className="experience">{doctor.experience} Experience</p>

          <hr />

          <div className="doctor-info-row">
            <span>📍</span>
            <p>{doctor.hospital}, {doctor.location}</p>
          </div>

          <div className="doctor-info-row">
            <span>🕐</span>
            <p>{doctor.availability}</p>
          </div>

          <div className="doctor-info-row">
            <span>📞</span>
            <p>{doctor.contactNumber}</p>
          </div>

        </div>

        <div className="appointment-box">

          <h2>Book an Appointment</h2>

          <p>
            Consult {doctor.name} for your health and medical concerns.
          </p>

          <Link to="/appointment" className="appointment-btn">
            Book Appointment
          </Link>

        </div>

      </div>

      <div className="doctor-details-section">

        <div className="about-doctor">

          <h2>About Doctor</h2>

          <p>{doctor.about}</p>

          <div className="detail-row">
            <strong>Gender</strong>
            <span>{doctor.gender}</span>
          </div>

          <div className="detail-row">
            <strong>Age</strong>
            <span>{doctor.age} Years</span>
          </div>

          <div className="detail-row">
            <strong>Languages Spoken</strong>
            <span>{doctor.languages?.join(", ")}</span>
          </div>

          <div className="detail-row">
            <strong>Contact Number</strong>
            <span>{doctor.contactNumber}</span>
          </div>

        </div>

        <div className="specialization-section">

          <h2>Specializations</h2>

          <ul>
            <li>{doctor.specialization}</li>
            <li>Preventive Healthcare</li>
            <li>Patient Care</li>
            <li>Medical Consultation</li>
          </ul>

          <h2 className="education-title">Education</h2>

          <div className="education-item">{doctor.qualification}</div>

        </div>

      </div>

    </div>
  );
}

export default SingleDoctor;
