import React from "react";

function Contact() {
    return (
        <>
            <div class="container-fluid second-section">
                <div class="container">
                    <div class="d-flex p-4">
                        <div class="banner-icon ms-3 me-4">
                            <i class="fa-solid fa-headset text-primary"></i>
                        </div>
                        <div>
                            <h1>Contact Us</h1>
                            <p class="offer-font">We are here to help you. Reach out to us for any <br/> queries, appointments or support.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5 mb-5">
                <div class="row g-4">

                    <div class="col-lg-8">
                        <div class="bg-white shadow p-4 corners">
                            <h5 class="form-heading"><i class="fa-solid fa-comment-dots text-primary me-2"></i> Get in Touch</h5>
                            <hr />
                            <form>
                                <div class="row mt-4">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label field-label">Full Name <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-user text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter your full name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label field-label">Email Address <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-envelope text-secondary"></i></span>
                                            <input type="email" class="form-control" placeholder="Enter your email address" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label field-label">Phone Number</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-phone text-secondary"></i></span>
                                            <input type="tel" class="form-control" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label field-label">Subject <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-tag text-secondary"></i></span>
                                            <select class="form-select">
                                                <option>-- Select a Subject --</option>
                                                <option>General Enquiry</option>
                                                <option>Appointment</option>
                                                <option>Doctor Consultation</option>
                                                <option>Feedback</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label class="form-label field-label">Message <span class="text-danger">*</span></label>
                                        <textarea class="form-control" rows="5" placeholder="Type your message here..."></textarea>
                                    </div>
                                </div>

                                <div class="note-box p-3 mt-3">
                                    <p class="mb-0 note-text"><i class="fa-solid fa-circle-info text-primary me-2"></i>
                                        <b>Note:</b> We usually reply within 24 hours. For emergencies please call our 24/7 helpline directly.</p>
                                </div>

                                <div class="text-center mt-4">
                                    <button type="submit" class="btn btn-primary confirm-btn"><i class="fa-solid fa-paper-plane me-2"></i> Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="bg-white shadow p-4 corners">
                            <h5 class="form-heading"><i class="fa-solid fa-address-book text-primary me-2"></i> Contact Information</h5>
                            <hr />
                            <div class="d-flex mt-4">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-location-dot text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Address</h6>
                                    <p class="info-text mb-0">123, Health Street, Medical City</p>
                                    <p class="info-text">New Delhi - 110001, India</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-phone text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Phone</h6>
                                    <p class="info-text mb-0">+91 98765 43210</p>
                                    <p class="info-text">Mon - Sun : 24/7 Available</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-envelope text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Email</h6>
                                    <p class="info-text mb-0">info@medicare.com</p>
                                    <p class="info-text">We reply within 24 hours</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-bell text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Emergency</h6>
                                    <p class="info-text mb-0">+91 98765 43211</p>
                                    <p class="info-text">24/7 Emergency Support</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-clock text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Working Hours</h6>
                                    <p class="info-text mb-0">Mon - Fri : 8:00 AM - 8:00 PM</p>
                                    <p class="info-text mb-0">Saturday : 8:00 AM - 6:00 PM</p>
                                    <p class="info-text">Sunday : 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row g-4 mt-1">

                    <div class="col-lg-6">
                        <div class="bg-white shadow p-4 corners h-100">
                            <h5 class="form-heading"><i class="fa-solid fa-map-location-dot text-primary me-2"></i> Our Location</h5>
                            <hr />
                            <div class="note-box p-4 text-center mt-4">
                                <i class="fa-solid fa-location-dot text-primary banner-icon"></i>
                                <h6 class="info-title mt-2 mb-0">MediCare Hospital</h6>
                                <p class="info-text mb-0">123, Health Street, Medical City</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="bg-white shadow p-4 corners h-100">
                            <h5 class="form-heading"><i class="fa-solid fa-share-nodes text-primary me-2"></i> Connect With Us</h5>
                            <hr />
                            <p class="info-text mt-4">Follow us on social media for the latest updates and health tips.</p>
                            <div class="d-flex gap-3 mt-3">
                                <a href="#" class="info-icon text-primary"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" class="info-icon text-primary"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" class="info-icon text-primary"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#" class="info-icon text-primary"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="#" class="info-icon text-primary"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
