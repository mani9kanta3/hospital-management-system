import React from 'react'

function PatientRegistration() {
    return (
        <>
            <div class="container-fluid second-section">
                <div class="container">
                    <div class="d-flex p-4">
                        <div class="banner-icon ms-3 me-4">
                            <i class="fa-solid fa-user-plus text-primary"></i>
                        </div>
                        <div>
                            <h1>Patient Registration</h1>
                            <p class="offer-font">Create your account to access our healthcare services <br/> and manage your appointments easily.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5 mb-5">
                <div class="row g-4">

                    <div class="col-lg-8">
                        <div class="bg-white shadow p-4 corners">
                            <h5 class="form-heading"><i class="fa-solid fa-user text-primary me-2"></i> Personal Information</h5>
                            <hr />
                            <form>
                                <div class="row mt-4">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label field-label">Full Name <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-user text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter full name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label field-label">Date of Birth <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-calendar-days text-secondary"></i></span>
                                            <input type="date" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label field-label">Gender <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-venus-mars text-secondary"></i></span>
                                            <select class="form-select">
                                                <option>-- Select Gender --</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label field-label">Blood Group <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-droplet text-secondary"></i></span>
                                            <select class="form-select">
                                                <option>-- Select Blood Group --</option>
                                                <option>A+</option>
                                                <option>B+</option>
                                                <option>AB+</option>
                                                <option>O+</option>
                                                <option>A-</option>
                                                <option>B-</option>
                                                <option>AB-</option>
                                                <option>O-</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Phone Number <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-phone text-secondary"></i></span>
                                            <input type="tel" class="form-control" placeholder="Enter 10 digit mobile number" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Email Address <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-envelope text-secondary"></i></span>
                                            <input type="email" class="form-control" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Marital Status <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-ring text-secondary"></i></span>
                                            <select class="form-select">
                                                <option>-- Select Status --</option>
                                                <option>Single</option>
                                                <option>Married</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <h5 class="form-heading mt-4"><i class="fa-solid fa-location-dot text-primary me-2"></i> Address Information</h5>
                                <hr />
                                <div class="row mt-4">
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Address Line 1 <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-house text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="House no., Building, Street" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Address Line 2</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-map-pin text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Landmark" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">City <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-city text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter city" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">State <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-map text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter state" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Pincode <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-hashtag text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter pincode" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Country <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-globe text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter country" />
                                        </div>
                                    </div>
                                </div>

                                <h5 class="form-heading mt-4"><i class="fa-solid fa-shield-heart text-primary me-2"></i> Medical Information</h5>
                                <hr />
                                <div class="row mt-4">
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Known Allergies</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-triangle-exclamation text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter allergies (if any)" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Existing Diseases</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-stethoscope text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter existing diseases (if any)" />
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label class="form-label field-label">Regular Medication</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-pills text-secondary"></i></span>
                                            <input type="text" class="form-control" placeholder="Enter regular medication (if any)" />
                                        </div>
                                    </div>
                                </div>

                                <div class="note-box p-3 mt-3">
                                    <p class="mb-0 note-text">
                                        <input type="checkbox" id="terms" class="me-2" />
                                        I agree to the <a href="#" class="text-primary">Terms &amp; Conditions</a> and <a href="#" class="text-primary">Privacy Policy</a>.
                                    </p>
                                </div>

                                <div class="text-center mt-4">
                                    <button type="submit" class="btn btn-primary confirm-btn"><i class="fa-solid fa-user-plus me-2"></i> Register Now</button>
                                    <p class="info-text mt-3 mb-0">Already have an account? <a href="/login" class="text-primary">Login here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="bg-white shadow p-4 corners">
                            <h5 class="form-heading"><i class="fa-solid fa-circle-info text-primary me-2"></i> Why Register?</h5>
                            <hr />
                            <div class="d-flex mt-4">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-calendar-days text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Easy Appointments</h6>
                                    <p class="info-text">Book, reschedule and manage your appointments with ease.</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-clock-rotate-left text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Medical History</h6>
                                    <p class="info-text">Keep your medical history secure and accessible.</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-bell text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Reminders</h6>
                                    <p class="info-text">Receive timely reminders for your appointments and medications.</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-lock text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Secure &amp; Private</h6>
                                    <p class="info-text">Your data is safe with us. We ensure complete privacy and security.</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-file-lines text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Reports Access</h6>
                                    <p class="info-text">Access your lab reports and prescriptions anytime, anywhere.</p>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <div class="info-icon me-3">
                                    <i class="fa-solid fa-headset text-primary"></i>
                                </div>
                                <div>
                                    <h6 class="text-primary info-title">Need Help?</h6>
                                    <p class="info-text mb-0">Call us at +91 98765 43210</p>
                                    <p class="info-text">or email medicare@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PatientRegistration
