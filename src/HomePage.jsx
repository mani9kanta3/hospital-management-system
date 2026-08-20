import React from 'react'
import doctorImg from './assets/doctor.png'
import groupImg from './assets/group.png'
import modernFacilities from './assets/modern facilities.png'
import support247 from './assets/247 support.png'
import trustedCare from './assets/trusted care.png'
import generalTreatment from './assets/general treatment.png'
import cardiology from './assets/cardiology.png'
import neurology from './assets/neurology.png'
import pediatrics from './assets/Pediatrics.png'
import labaratoryTest from './assets/labaratory test.png'
import emergencyCare from './assets/emergency care.png'

function HomePage() {
  return (
    <>
        <div class="container-fluid second-section">
        <div class="row">
            <div class="col-6 p-5 mt-5">
                <h1 class="quality-font ms-5 ps-5"> Quality Healthcare <br/>
                    For a <span class="text-primary">Better Life</span> </h1>
                <p class="offer-font ms-5 ps-5">We offer comprehensive medical services with modern <br/>
                    technology and experienced doctors.</p>
                <div class="d-flex mt-3 gap-3 ms-5 ps-5">
                    <button class="btn btn-primary custom-btn">🗓️ Book Appointment</button>
                    <button class="btn btn-outline-primary custom-btn">View Doctors</button>
                </div>
            </div>
            <div class="col-6">
                <img class="doctor-img" src={doctorImg} alt="" width="90%" />
            </div>
        </div>
    </div>
    <div class="container third-section">
        <div class="bg-white shadow p-4 corners">
        <div class="row">
            <div class="col-3">
                <div class="d-flex">
                    <img class="me-2" src={groupImg} alt="" width="30%"/>
                    <div class="mt-2">
                        <h5 class="font-3rd-section mt-1">Experienced Doctors</h5>
                        <p class="text-3rd-section">100+ Expert Doctors</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="d-flex">
                    <img class="me-2" src={modernFacilities} alt="" width="30%"/>
                    <div class="mt-2">
                        <h5 class="font-3rd-section mt-1">Modern Facilities</h5>
                        <p class="text-3rd-section">Advanced Technology</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="d-flex">
                    <img class="me-2" src={support247} alt="" width="30%"/>
                    <div class="mt-2">
                        <h5 class="font-3rd-section mt-1">24/7 Support</h5>
                        <p class="text-3rd-section">Always Here For You</p>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="d-flex">
                    <img class="me-2" src={trustedCare} alt="" width="30%"/>
                    <div class="mt-2">
                        <h5 class="font-3rd-section mt-1">Trusted Care</h5>
                        <p class="text-3rd-section">Safe & Reliable</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="container p-4 mt-3 services-section">
    <h6 class="text-center header">OUR SERVICES</h6>
    <h2 class="text-center">We Provide Best Services</h2>
        <div class="row row-cols-1 row-cols-md-6 g-4 mt-1">
        <div class="col">
            <div class="card h-100">
            <img src={generalTreatment} class="mx-auto d-block" alt="..." width="80%"/>
            <div class="card-body">
                <h5 class="card-title text-center">General Treatment</h5>
                <p class="card-text text-center">Complete diagnosis and treatment for general health issues.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={cardiology} class="mx-auto d-block" alt="..." width="80%"/>
            <div class="card-body">
                <h5 class="card-title text-center">Cardiology</h5>
                <p class="card-text text-center">Advanced care for heart conditions and related diseases.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={neurology} class="mx-auto d-block" alt="..." width="80%"/>
            <div class="card-body">
                <h5 class="card-title text-center">Neurology</h5>
                <p class="card-text text-center">Expert treatment for brain, spine and nervous system disorders.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={pediatrics} class="mx-auto d-block" alt="..." width="80%"/>
            <div class="card-body">
                <h5 class="card-title text-center">Pediatrics</h5>
                <p class="card-text text-center">Specialized healthcare for infants, children and adolescents.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={labaratoryTest} class="mx-auto d-block" alt="..." width="80%"/>
            <div class="card-body">
                <h5 class="card-title text-center">Laboratory Test</h5>
                <p class="card-text text-center">Accurate and fast lab testing with advanced equipment.</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={emergencyCare} class="mx-auto d-block" alt="..." width="80%"/>
            <div class="card-body">
                <h5 class="card-title text-center">Emergency Care</h5>
                <p class="card-text text-center">24/7 emergency services with quick and efficient response.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div class="container mt-4 our-doctors-section">
        <section class="our-doctors ">
        <h6 class="text-center header">OUR DOCTORS</h6>
        <h2 class="text-center">Meet Our Expert Doctors</h2>
        <div class="container-fluid mt-5">
            <div class="row mb-4">
                <div class="col-lg-3 col-md-6">
                    <div class="card h-100 shadow-sm border-1 rounded-4">
                        <img src="https://media.easy-peasy.ai/4213a5f1-2a75-41b3-91ca-76c9d8d4cff8/736d0655-3c7c-41c8-8288-4aaebcc9b2fd_medium.webp"
                            class="card-img-top doctor-image" alt="anjali" width="100%" height="70%"/>
                        <div class="card-body">
                            <h5>Dr. Anjali Sharma</h5>
                            <p class="mb-1 designation">Cardiologist</p>
                            <p class="mb-1 designation">10+ Years Experience</p>
                            <p class="text-warning">★★★★★</p>
                            <button class="btn btn-primary button-view" type="submit">View Profile</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card h-100 shadow-sm border-1 rounded-4">
                        <img src="https://img.freepik.com/premium-photo/default-striking-portrait-young-male-doctor-his-arms_992212-246886.jpg"
                            class="card-img-top doctor-image" alt="anjali"/>
                        <div class="card-body">
                            <h5>Dr. Rahul Verma</h5>
                            <p class="mb-1 designation">Neurologist</p>
                            <p class="mb-1 designation">8+ Years Experience</p>
                            <p class="text-warning">★★★★★</p>
                            <button class="btn btn-primary button-view" type="submit">View Profile</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card h-100 shadow-sm border-1 rounded-4">
                        <img src="https://imgcdn.stablediffusionweb.com/2025/7/3/1efa023c-3d64-4cf4-9542-11224eba8341.jpg"
                            class="card-img-top doctor-image" alt="anjali"/>
                        <div class="card-body">
                            <h5>Dr. Priya patel</h5>
                            <p class="mb-1 designation">Pediatrician</p>
                            <p class="mb-1 designation">6+ Years Experience</p>
                            <p class="text-warning">★★★★★</p>
                            <button class="btn btn-primary button-view" type="submit">View Profile</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card h-100 shadow-sm border-1 rounded-4">
                        <img src="https://img.freepik.com/premium-photo/professional-doctor-portrait-showcasing-expertise-compassion-healthcare_1204564-59616.jpg"
                            class="card-img-top doctor-image" alt="anjali"/>
                        <div class="card-body">
                            <h5>Dr. Amith Singh</h5>
                            <p class="mb-1 designation">Orthopedic</p>
                            <p class="mb-1 designation">10+ Years Experience</p>
                            <p class="text-warning">★★★★★</p>
                            <button class="btn btn-primary button-view" type="submit">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-outline-primary button-view mt-3 mb-4">View All Doctors</button>
            </div>
        </div>
    </section>
    </div>
    <div class="container book-appointment-section">
        <div class="d-flex align-items-center justify-content-between mx-3 px-3 bg-primary appointment">
        <div class="d-flex align-items-center flex-row">
            <img src="https://img.freepik.com/premium-vector/schedule-appointment-event-icon-simple-editable-vector-illustration_1178600-926.jpg"
                alt="Appointment" class="ms-4 rounded-3 appointment" height="70px" width="70px"/>
            <div class="p-3 ms-2 ">
                <h4 class="text-white mt-2">Book an Appointment</h4>
                <p class="text-white">Schedule Your Appointment with our expert doctors today.</p>
            </div>
        </div>
        <div>
            <button type="button" class="btn btn-light btn-lg me-3 book-btn"> Book Appointment Now  ➜ </button>
        </div>
    </div>
    </div>
    <div class="container mt-3">
            <section>
        <div class="d-flex align-items-center justify-content-around mx-1 px-1">
            <div class="d-flex align-items-center flex-row">
                <img src="https://logodix.com/logo/825378.png"
                    alt="" height="70px" width="70px"/>
                <div class="p-3">
                    <h3 class="ms-2 mt-3 number">5000+</h3>
                    <p class="ms-2 number-text">Happy Patients</p>
                </div>
            </div>
            <div class="d-flex align-items-center flex-row">
                <img src="https://static.vecteezy.com/system/resources/previews/067/191/254/non_2x/medical-and-healthcare-stethoscope-green-color-icon-in-flat-design-style-in-round-circle-background-editable-stroke-free-vector.jpg"
                    alt="" height="70px" width="70px"/>
                <div class="p-3">
                    <h3 class="ms-2 mt-3 number">100+</h3>
                    <p class="ms-2 number-text">Expert Doctors</p>
                </div>
            </div>
            <div class="d-flex align-items-center flex-row">
                <img src="https://thumbs.dreamstime.com/b/hospital-building-blue-round-flat-design-vector-icon-isolated-white-background-178412472.jpg"
                    alt="" height="70px" width="70px"/>
                <div class="p-3">
                    <h3 class="ms-2 mt-3 number">20+</h3>
                    <p class="ms-2 number-text">Departments</p>
                </div>
            </div>
            <div class="d-flex align-items-center flex-row">
                <img src="https://static.vecteezy.com/system/resources/previews/014/322/451/original/hospital-icons-design-in-blue-circle-png.png"
                    alt="Appointment" height="70px" width="70px"/>
                <div class="p-3">
                    <h3 class="ms-2 mt-3 number">15+</h3>
                    <p class="ms-2 number-text">Years of Service</p>
                </div>
            </div>

        </div>
    </section>
    </div>
    <div class="container patient-says-section mt-3 mb-5">
        <section>
        <h6 class="text-center header">PATIENT SAYS</h6>
        <h2 class="text-center">What Our Patient Say</h2>
        <div class="row g-4 mt-1">
            <div class="col-lg-4">
                <div class="card shadow-sm rounded-4 h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-start">
                                <h2 class="text-primary mb-2 me-2">❝</h2>
                                <p class="card-text">The doctors and staff were very supportive and the treatment was excellent. I am completely satisfied with the service.</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="d-flex align-items-center">
                                    <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                        class="rounded-circle" alt="" width="50" height="50"/>
                                    <div class="ms-3">
                                        <h6 class="mb-0">Ravi Kumar</h6>
                                        <small class="text-muted">Delhi</small>
                                    </div>
                                </div>
                                <div class="text-warning">★★★★★</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-lg-4">
                <div class="card shadow-sm rounded-4 h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-start">
                                <h2 class="text-primary mb-2 me-2">❝</h2>
                                <p class="card-text">Very clean and well-maintained hospital. Quick response and care from the entire team.
                         satisfied,Highly recommended!.</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="d-flex align-items-center">
                                    <img src="https://static.vecteezy.com/system/resources/previews/014/194/198/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
                                        class="rounded-circle profile-img" alt="" width="50" height="50"/>
                                    <div class="ms-3">
                                        <h6 class="mb-0">Sneha Verma</h6>
                                        <small class="text-muted">Mumbai</small>
                                    </div>
                                </div>
                                <div class="text-warning">★★★★★</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="col-lg-4">
                <div class="card shadow-sm rounded-4 h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-start">
                                <h2 class="text-primary mb-2 me-2">❝</h2>
                                <p class="card-text">I had heart surgery at this hospital, and Ireceived exceptional care.
                        Im deeply thankful for their professionalism throughout my treatment!</p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="d-flex align-items-center">
                                    <img src="https://i.pinimg.com/originals/05/5a/91/055a91979264664a1ee12b9453610d82.png"
                                        class="rounded-circle" alt="" width="50" height="50"/>
                                    <div class="ms-3">
                                        <h6 class="mb-0">Arjun Mehta</h6>
                                        <small class="text-muted">Bangalore</small>
                                    </div>
                                </div>
                                <div class="text-warning">★★★★★</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    </section>
    </div>
    </>
  )
}

export default HomePage