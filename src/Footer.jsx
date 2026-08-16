import React from 'react'

function Footer() {
  return (
    <div className="container-fluid p-4 footer-section mt-5">
      <div className="container">
        <footer className="medicare-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <h5><img src="/hosp-logo.png" alt="" width="30" /> Medicare Hospital</h5>
                <p className="list-unstyled">We are commited to providing quality healthcare services with compassion and excellence.</p>
                <div>
                  <i className="fa-brands fa-facebook-f me-3"></i>
                  <i className="fa-brands fa-twitter me-3"></i>
                  <i className="fa-brands fa-linkedin-in me-3"></i>
                  <i className="fa-brands fa-instagram me-3"></i>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="">Home</a></li>
                  <li className="mt-1"><a href="">About us</a></li>
                  <li className="mt-1"><a href="">Doctors</a></li>
                  <li className="mt-1"><a href="">Appointments</a></li>
                  <li className="mt-1"><a href="">Contact us</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6">
                <h5>Our services</h5>
                <ul className="list-unstyled">
                  <li>General Treatment</li>
                  <li className="mt-1">Cardiology</li>
                  <li className="mt-1">Neurology</li>
                  <li className="mt-1">Pediatrics</li>
                  <li className="mt-1">Emergency Care</li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6">
                <h5>Contact us</h5>
                <p className="list-unstyled"><i className="fa-solid fa-map-pin"></i>  123,Health Street,Medical <br />
                  City, Hyderabad - 500001</p>
                <p className="list-unstyled"><i className="fa-solid fa-phone"></i>  +91 9876543210</p>
                <p className="list-unstyled"><i className="fa-solid fa-envelope"></i>  medicare@gmail.com</p>
                <p className="list-unstyled"><i className="fa-solid fa-clock"></i>  Mon-Sun: 24/7 Open</p>
              </div>
            </div>

            <div className="text-center mt-4">
              <p><i className="fa-solid fa-copyright"></i> 2026 Frontend HospitalManagement. All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
