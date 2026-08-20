import React from 'react'

function PatientRegistration() {
    return (
        <>
    <div class="heading">
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/9771/9771679.png" alt="" height="100px" width="100px"/>
        </div>
        <div class="txt">
            <h1>Patient Registration</h1>
            <p>Create your account to access our healthcare services<br/>and manage your appointments easily.</p>
        </div>
    </div>
    <div class="container">
        <div class="row whole-container">
            <div class="col-lg-8">
                <div class="registration-card">
                    <h3><i class="fa fa-user"></i> Personal Information</h3>
                    <div class="row first-row">
                        <div class="col-md-3">
                            <label>Full Name</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter full name" />
                        </div>
                        <div class="col-md-3">
                            <label>Date of Birth</label><span> *</span>
                            <input type="date" class="pr" />
                        </div>
                        <div class="col-md-3">
                            <label>Gender</label><span> *</span>
                            <select class=" pr">
                                <option>Male</option>
                                <option>Female</option>
                                <option>other</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label>Blood Group</label><span> *</span>
                            <select class=" pr">
                                <option>A+</option>
                                <option>B+</option>
                                <option>AB+</option>
                                <option>O+</option>
                                <option>A-</option>
                                <option>B-</option>
                                <option>AB-</option>
                                <option>o-</option>
                            </select>
                        </div>
                    </div>
                    <div class="row second-row">
                        <div class="col-md-4">
                            <label>Phone Number</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter 10 digit mobile number" />
                        </div>
                        <div class="col-md-4">
                            <label>Email Address</label><span> *</span>
                            <input type="email" class="pr" placeholder="Enter Your Email" />
                        </div>
                        <div class="col-md-4">
                            <label>Marital Status</label><span> *</span>
                            <select class="pr">
                                <option>Single</option>
                                <option>Married</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="registration-card">
                    <h3><i class="fa fa-map-marker"></i> Address Information</h3>
                    <div class="row first-row">
                        <div class="col-md-4">
                            <label> Address Line 1</label><span> *</span>
                            <input type="text" class="pr" placeholder="House no.,Building,Street" />
                        </div>
                        <div class="col-md-4">
                            <label> Address Line 2</label>
                            <input type="text" class="pr" placeholder="Landmark" />
                        </div>
                        <div class="col-md-4">
                            <label>City</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter City" />
                        </div>
                    </div>
                    <div class="row second-row">
                        <div class="col-md-4">
                            <label>State</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter State" />
                        </div>
                        <div class="col-md-4">
                            <label>Pincode</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter Pincode" />
                        </div>
                        <div class="col-md-4">
                            <label>Country</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter Country" />
                        </div>
                    </div>
                </div>
                <div class="registration-card">
                    <h3><i class="fa fa-shield"></i> Medical Information</h3>
                    <div class="row">
                        <div class="col-md-4">
                            <label> Known Allergies</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter allergies (if any)"/>
                        </div>
                        <div class="col-md-4">
                            <label>Existing Diseases</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter existing diseases (if any)"/>
                        </div>
                        <div class="col-md-4">
                            <label>Regular Medication</label><span> *</span>
                            <input type="text" class="pr" placeholder="Enter regular medication (if any)"/>
                        </div>
                    </div>
                </div>
                <div class="registration-bottom">
                    <div class="terms">
                        <input type="checkbox" id="terms"/>
                        <label>I agree to the<a href="#">Terms & Conditions</a>and<a href="#">Privacy Policy.</a>
                        </label>
                    </div>
                    <div class="register-area">
                        <button type="submit" class="register-button"><i class="fa fa-user"></i> Register Now</button>
                        <p>Already have an account?<a href="#">Login here</a></p>
                    </div>
                </div>
            </div>
       
            <div class="col-lg-4">
                <div class="registration-cards">
                    <h3><i class="fa fa-info-circle"></i>  Why Register?</h3>
                    <div class="side-bar">
                        <i class="fa fa-calendar"></i>
                        <div>
                            <h4>Easy Appointments</h4>
                            <p>Book, reschedule and manage your appointments with ease.</p>
                        </div>
                    </div>
                    <div class="side-bar">
                        <i class="fa fa-history"></i>
                        <div>
                            <h4>Medical History</h4>
                            <p>Keep your medical history secure and accessible.</p>
                        </div>
                    </div>
                    <div class="side-bar">
                        <i class="fa fa-bell"></i>
                        <div>
                            <h4>Reminders</h4>
                            <p>Receive timely reminders for your appointments and medications.</p>
                        </div>
                    </div>
                    <div class="side-bar">
                        <i class="fa fa-lock"></i>
                        <div>
                            <h4>Secure & Private</h4>
                            <p>Your data is safe with us.we ensure complete privacy and security.</p>
                        </div>
                    </div>
                    <div class="side-bar">
                        <i class="fa fa-file-text-o"></i>
                        <div>
                            <h4>Reports Access</h4>
                            <p>Access your lab reports and prescriptions anytime, anywhere.</p>
                        </div>
                    </div>    
                    <div class="side-bar">
                        <i class="fa fa-headphones"></i>
                        <div>
                            <h4>Need Help?</h4>
                            <p>Call us at +91 9876543210 or email medicare@gmail.com .</p>
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
