import React from 'react'

function Appointment() {
    return (
        <>
            <div class="container-fluid second-section">
                <div class="container">
                    <div class="d-flex p-4">
                        <div class="banner-icon ms-3 me-4">
                            <i class="fa-solid fa-calendar-check text-primary"></i>
                        </div>
                        <div>
                            <h1>Book an Appointment</h1>
                            <p class="page-path"><a href="/">Home</a> <i class="fa-solid fa-angle-right"></i>
                                <a href="#">Appointments</a> <i class="fa-solid fa-angle-right"></i>
                                <span class="text-dark">Book Appointment</span></p>
                            <p class="offer-font">Fill in the details below to book an appointment <br/> with our specialist doctors.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
                <div class="row g-4">
                    <div class="col-lg-8">
                        <div class="bg-white shadow p-4 corners">
                            <h5 class="form-heading"><i class="fa-solid fa-clipboard text-primary me-2"></i> Appointment Details</h5>
                            <hr />
                            <form>
                                <div class="row mt-4">
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Full Name <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-user text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter your full name" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Phone Number <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-phone text-secondary"></i></span>
                                            <input type="tel" class="form-control" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Email Address <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-envelope text-secondary"></i></span>
                                            <input type="email" class="form-control" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Select Doctor <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-user-doctor text-secondary"></i></span>
                                            <select class="form-select">
                                                <option>-- Select Doctor --</option>
                                                <option>Dr. Anjali Sharma</option>
                                                <option>Dr. Rahul Verma</option>
                                                <option>Dr. Priya Patel</option>
                                                <option>Dr. Amith Singh</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Department <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-table-cells-large text-secondary"></i></span>
                                            <select class="form-select">
                                                <option>-- Select Department --</option>
                                                <option>General Treatment</option>
                                                <option>Cardiology</option>
                                                <option>Neurology</option>
                                                <option>Pediatrics</option>
                                                <option>Emergency Care</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Date <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-calendar-days text-secondary"></i></span>
                                            <input type="date" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Time <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-clock text-secondary"></i></span>
                                            <select class="form-select">
                                                <option>Select time</option>
                                                <option>09:00 AM</option>
                                                <option>11:00 AM</option>
                                                <option>02:00 PM</option>
                                                <option>05:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Appointment Type <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-stethoscope text-secondary"></i></span>
                                            <select class="form-select">
                                                <option>-- Select Type --</option>
                                                <option>New Consultation</option>
                                                <option>Follow Up</option>
                                                <option>Health Checkup</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Symptoms / Reason</label>
                                        <textarea class="form-control" rows="2" placeholder="Briefly describe your symptoms"></textarea>
                                    </div>
                                </div>
                                <div class="note-box p-3 mt-3">
                                    <p class="mb-0 note-text"><i class="fa-solid fa-circle-info text-primary me-2"></i>
                                        <b>Note:</b> Please arrive 15 minutes before your appointment time. Carry any relevant medical reports.</p>
                                </div>
                                <div class="text-center mt-4">
                                    <button type="submit" class="btn btn-primary confirm-btn"><i class="fa-solid fa-calendar-check me-2"></i> Confirm Appointment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="bg-white shadow p-4 corners">
                            <h5 class="form-heading"><i class="fa-solid fa-calendar-days text-primary me-2"></i> Appointment Information</h5>
                            <hr />
                            <div class="d-flex mt-4">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-clock text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Booking Hours</h6>
                                    <p class="info-text mb-0">Mon - Sat : 8:00 AM - 8:00 PM</p>
                                    <p class="info-text">Sun : 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-hourglass-half text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Appointment Duration</h6>
                                    <p class="info-text">Each appointment is typically 15 - 30 minutes</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-file-lines text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Cancellation Policy</h6>
                                    <p class="info-text">Please cancel at least 2 hours in advance to avoid charges.</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-phone text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Need Help?</h6>
                                    <p class="info-text mb-0">Call us at +91 98765 43210</p>
                                    <p class="info-text">or email info@medicare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Appointment