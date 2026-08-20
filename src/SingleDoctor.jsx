import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleDoctor.css";

function SingleDoctor() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const doctorImages = {
    1: "/doc.jpg",
    2: "/doc2.webp",
    3: "/doc3.jpg",
    4: "/doc4.jpg",
    5: "/doc5.webp",
    6: "/doc6.png",
  };

  useEffect(() => {
    fetch("https://hospital-management-backend-gp9t.onrender.com/doctors")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        return response.json();
      })
      .then((data) => {

        const selectedDoctor = data.find(
          (item) => String(item.id) === String(id)
        );

        if (!selectedDoctor) {
          setError("Doctor not found");
        } else {
          setDoctor(selectedDoctor);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Unable to load doctor details");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="doctor-loading">
        Loading doctor details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="doctor-error">
        <h2>{error}</h2>

        <Link to="/doctors">
          Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <div className="single-doctor-page">

      {/* Breadcrumb */}

      <div className="breadcrumb">

        <Link to="/">Home</Link>

        <span>›</span>

        <Link to="/doctors">Doctors</Link>

        <span>›</span>

        <span>{doctor.name}</span>

      </div>


      {/* Main Profile */}

      <div className="doctor-profile">

        {/* Left Side Image */}

        <div className="doctor-profile-image">

          <img
            src={doctorImages[doctor.id] || "/doc.jpg"}
            alt={doctor.name}
          />

        </div>


        {/* Middle Details */}

        <div className="doctor-main-details">

          <h1>{doctor.name}</h1>

          <h2>{doctor.specialization}</h2>

          <p className="qualification">
            {doctor.qualification}
          </p>

          <p className="experience">
            {doctor.experience} Experience
          </p>

          <hr />

          <div className="doctor-info-row">
            <span>📍</span>

            <p>
              {doctor.hospital}, {doctor.location}
            </p>
          </div>

          <div className="doctor-info-row">
            <span>🕐</span>

            <p>
              {doctor.availability}
            </p>
          </div>

          <div className="doctor-info-row">
            <span>📞</span>

            <p>
              {doctor.contactNumber}
            </p>
          </div>

        </div>


        {/* Appointment Box */}

        <div className="appointment-box">

          <h2>Book an Appointment</h2>

          <p>
            Consult {doctor.name} for your health
            and medical concerns.
          </p>

          <Link
            to="/appointments"
            className="appointment-btn"
          >
            Book Appointment
          </Link>

        </div>

      </div>



      <div className="doctor-details-section">


        <div className="about-doctor">

          <h2>About Doctor</h2>

          <p>
            {doctor.about}
          </p>


          <div className="detail-row">

            <strong>Languages Spoken</strong>

            <span>
              {doctor.languages?.join(", ")}
            </span>

          </div>


          <div className="detail-row">

            <strong>Registration No.</strong>

            <span>
              APMC/FMR/12345
            </span>

          </div>


          <div className="detail-row">

            <strong>Contact Number</strong>

            <span>
              {doctor.contactNumber}
            </span>

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


          <h2 className="education-title">
            Education
          </h2>

          <div className="education-item">
            {doctor.qualification}
          </div>

        </div>

      </div>

    </div>
  );
}

export default SingleDoctor;