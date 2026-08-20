import React from 'react'
import { Link } from 'react-router-dom'
import hospLogo from './assets/hosp-logo.png'

function Footer() {
  return (
    <div class="container-fluid p-4 footer-section">
      <div class="container">
        <footer class="medicare-footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <h5><img src={hospLogo} alt="Medicare Hospital" width="30" /> Medicare Hospital</h5>
                <p class="list-unstyled">We are commited to providing quality healthcare services with compassion and excellence.</p>
                <div>
                  <i class="fa-brands fa-facebook-f me-3"></i>
                  <i class="fa-brands fa-twitter me-3"></i>
                  <i class="fa-brands fa-linkedin-in me-3"></i>
                  <i class="fa-brands fa-instagram me-3"></i>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                  <li><Link to="/">Home</Link></li>
                  <li class="mt-1"><Link to="/registration">New Registration</Link></li>
                  <li class="mt-1"><Link to="/doctors">Doctors</Link></li>
                  <li class="mt-1"><Link to="/appointment">Appointments</Link></li>
                  <li class="mt-1"><Link to="/contact">Contact us</Link></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6">
                <h5>Our services</h5>
                <ul class="list-unstyled">
                  <li>General Treatment</li>
                  <li class="mt-1">Cardiology</li>
                  <li class="mt-1">Neurology</li>
                  <li class="mt-1">Pediatrics</li>
                  <li class="mt-1">Emergency Care</li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6">
                <h5>Contact us</h5>
                <p class="list-unstyled"><i class="fa-solid fa-map-pin"></i>  123,Health Street,Medical <br />
                  City, Hyderabad - 500001</p>
                <p class="list-unstyled"><i class="fa-solid fa-phone"></i>  +91 9876543210</p>
                <p class="list-unstyled"><i class="fa-solid fa-envelope"></i>  medicare@gmail.com</p>
                <p class="list-unstyled"><i class="fa-solid fa-clock"></i>  Mon-Sun: 24/7 Open</p>
              </div>
            </div>

            <div class="text-center mt-4">
              <p><i class="fa-solid fa-copyright"></i> 2026 Frontend HospitalManagement. All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
