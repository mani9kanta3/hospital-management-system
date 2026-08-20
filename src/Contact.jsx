import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Contact() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">

          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-hospital-fill text-primary fs-2"></i>{" "}
            <span className="logo">MediCare</span>
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
                <Link className="nav-link" to="/doctors">
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
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

            <Link
              to="/appointments"
              className="btn btn-primary"
            >
              <i className="bi bi-calendar-check me-2"></i>
              Book Appointment
            </Link>

          </div>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="contact-hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5">

              <h1>
                Contact Us
              </h1>

              <p>
                We are here to help you. Reach out to us for any
                queries, appointments or support.
              </p>

              <div className="breadcrumb-contact">
                <Link to="/">
                  <i className="bi bi-house-door-fill"></i>
                  Home
                </Link>

                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>

                <span>Contact Us</span>
              </div>

            </div>


            <div className="col-lg-7">

              <img
                src="/hospital.jpg"
                alt="MediCare Hospital"
                className="hospital-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">

        <div className="container">

          <div className="row g-4">

            {/* ================= CONTACT FORM ================= */}
            <div className="col-lg-8">

              <div className="contact-card">

                <h3>
                  Get in Touch
                </h3>

                <div className="section-line"></div>

                <p className="contact-description">
                  Send us a message and we will get back to you shortly.
                </p>


                <form>

                  <div className="row">

                    <div className="col-md-6 mb-3">

                      <label>
                        Full Name <span>*</span>
                      </label>

                      <div className="input-box">

                        <i className="bi bi-person"></i>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your full name"
                        />

                      </div>

                    </div>


                    <div className="col-md-6 mb-3">

                      <label>
                        Email Address <span>*</span>
                      </label>

                      <div className="input-box">

                        <i className="bi bi-envelope"></i>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email address"
                        />

                      </div>

                    </div>


                    <div className="col-md-6 mb-3">

                      <label>
                        Phone Number
                      </label>

                      <div className="input-box">

                        <i className="bi bi-telephone"></i>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your phone number"
                        />

                      </div>

                    </div>


                    <div className="col-md-6 mb-3">

                      <label>
                        Subject <span>*</span>
                      </label>

                      <select className="form-select">

                        <option>
                          Select a subject
                        </option>

                        <option>
                          General Enquiry
                        </option>

                        <option>
                          Appointment
                        </option>

                        <option>
                          Doctor Consultation
                        </option>

                        <option>
                          Feedback
                        </option>

                      </select>

                    </div>


                    <div className="col-12 mb-3">

                      <label>
                        Message <span>*</span>
                      </label>

                      <textarea
                        className="form-control message-box"
                        rows="5"
                        placeholder="Type your message here..."
                      ></textarea>

                    </div>


                    <div className="col-12">

                      <button
                        type="submit"
                        className="btn btn-primary send-btn"
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        Send Message
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>


            {/* ================= CONTACT INFORMATION ================= */}
            <div className="col-lg-4">

              <div className="contact-card">

                <h3>
                  Contact Information
                </h3>

                <div className="section-line"></div>


                {/* Address */}
                <div className="contact-info">

                  <div className="info-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <h6>Address</h6>

                    <p>
                      123, Health Street, Medical City,
                      <br />
                      New Delhi - 110001, India
                    </p>
                  </div>

                </div>


                {/* Phone */}
                <div className="contact-info">

                  <div className="info-icon">
                    <i className="bi bi-telephone"></i>
                  </div>

                  <div>
                    <h6>Phone</h6>

                    <p>
                      +91 98765 43210
                      <br />
                      Mon - Sun : 24/7 Available
                    </p>
                  </div>

                </div>


                {/* Email */}
                <div className="contact-info">

                  <div className="info-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>
                    <h6>Email</h6>

                    <p>
                      info@medicare.com
                      <br />
                      We reply within 24 hours
                    </p>
                  </div>

                </div>


                {/* Emergency */}
                <div className="contact-info">

                  <div className="info-icon">
                    <i className="bi bi-bell"></i>
                  </div>

                  <div>
                    <h6>Emergency</h6>

                    <p>
                      +91 98765 43211
                      <br />
                      24/7 Emergency Support
                    </p>
                  </div>

                </div>

              </div>


              {/* ================= LOCATION ================= */}
              <div className="contact-card location-card">

                <h3>
                  Our Location
                </h3>

                <div className="section-line"></div>

                <div className="map-box">

                  <i className="bi bi-geo-alt-fill"></i>

                  <p>
                    MediCare Hospital
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ================= BOTTOM CARDS ================= */}
          <div className="row g-4 mt-1">

            {/* Social Media */}
            <div className="col-lg-4">

              <div className="small-contact-card">

                <h4>
                  Connect With Us
                </h4>

                <div className="section-line"></div>

                <p>
                  Follow us on social media for the latest
                  updates and health tips.
                </p>

                <div className="social-icons">

                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>

                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>

                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>

                  <a href="#">
                    <i className="bi bi-youtube"></i>
                  </a>

                </div>

              </div>

            </div>


            {/* Working Hours */}
            <div className="col-lg-4">

              <div className="small-contact-card">

                <h4>
                  Working Hours
                </h4>

                <div className="section-line"></div>

                <div className="working-hours">

                  <div className="clock-icon">
                    <i className="bi bi-clock"></i>
                  </div>

                  <div className="hours-list">

                    <p>
                      <span>Monday - Friday</span>
                      <b>8:00 AM - 8:00 PM</b>
                    </p>

                    <p>
                      <span>Saturday</span>
                      <b>8:00 AM - 6:00 PM</b>
                    </p>

                    <p>
                      <span>Sunday</span>
                      <b>9:00 AM - 2:00 PM</b>
                    </p>

                    <p className="emergency-text">
                      <span>Emergency Services</span>
                      <b>24/7 Available</b>
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* Address Mini Card */}
            <div className="col-lg-4">

              <div className="small-contact-card">

                <h4>
                  Visit Us
                </h4>

                <div className="section-line"></div>

                <p>
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  123, Health Street, Medical City
                </p>

                <p>
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  +91 98765 43210
                </p>

                <p>
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  info@medicare.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;