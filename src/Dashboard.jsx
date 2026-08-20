import React from 'react'

function Dashboard() {
  return (
    <>
    <div class="container-fluid second-section">
        <div class="container">
            <div class="d-flex p-4">
                <div class="banner-icon ms-3 me-4">
                    <i class="fa-solid fa-chart-line text-primary"></i>
                </div>
                <div>
                    <h1>Dashboard</h1>
                    <p class="offer-font">A quick overview of patients, appointments <br/> and doctors in our hospital.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row g-4">
            <div class="col-lg-3 col-md-6">
                <div class="bg-white shadow p-4 corners">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="stat-label">Total Patients</p>
                            <h3 class="number">5,240</h3>
                            <p class="stat-note text-success">+12% this month</p>
                        </div>
                        <div class="stat-icon stat-blue">
                            <i class="fa-solid fa-users"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="bg-white shadow p-4 corners">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="stat-label">Appointments Today</p>
                            <h3 class="number">86</h3>
                            <p class="stat-note text-success">+5% from yesterday</p>
                        </div>
                        <div class="stat-icon stat-green">
                            <i class="fa-solid fa-calendar-check"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="bg-white shadow p-4 corners">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="stat-label">Total Doctors</p>
                            <h3 class="number">108</h3>
                            <p class="stat-note text-secondary">Across all departments</p>
                        </div>
                        <div class="stat-icon stat-orange">
                            <i class="fa-solid fa-user-doctor"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="bg-white shadow p-4 corners">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="stat-label">Departments</p>
                            <h3 class="number">24</h3>
                            <p class="stat-note text-secondary">Open 24/7</p>
                        </div>
                        <div class="stat-icon stat-purple">
                            <i class="fa-solid fa-hospital"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-4 mb-5">
        <div class="row g-4">
            <div class="col-lg-8">
                <div class="bg-white shadow p-4 corners ">
                    <h5 class="form-heading"><i class="fa-solid fa-clock-rotate-left text-primary me-2"></i> Recent Appointments</h5>
                    <hr/>
                    <table class="table table-hover align-middle mt-3">
                        <thead>
                            <tr>
                                <th class="table-head">Patient</th>
                                <th class="table-head">Doctor</th>
                                <th class="table-head">Department</th>
                                <th class="table-head">Time</th>
                                <th class="table-head">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-text">Ravi Kumar</td>
                                <td class="table-text">Dr. Anjali Sharma</td>
                                <td class="table-text">Cardiology</td>
                                <td class="table-text">09:00 AM</td>
                                <td><span class="badge bg-success">Confirmed</span></td>
                            </tr>
                            <tr>
                                <td class="table-text">Sneha Verma</td>
                                <td class="table-text">Dr. Rahul Verma</td>
                                <td class="table-text">Neurology</td>
                                <td class="table-text">10:30 AM</td>
                                <td><span class="badge bg-warning text-dark">Pending</span></td>
                            </tr>
                            <tr>
                                <td class="table-text">Arjun Mehta</td>
                                <td class="table-text">Dr. Priya Patel</td>
                                <td class="table-text">Pediatrics</td>
                                <td class="table-text">11:15 AM</td>
                                <td><span class="badge bg-success">Confirmed</span></td>
                            </tr>
                            <tr>
                                <td class="table-text">Kavya Reddy</td>
                                <td class="table-text">Dr. Amith Singh</td>
                                <td class="table-text">Orthopedic</td>
                                <td class="table-text">02:00 PM</td>
                                <td><span class="badge bg-danger">Cancelled</span></td>
                            </tr>
                            <tr>
                                <td class="table-text">Mohan Rao</td>
                                <td class="table-text">Dr. Anjali Sharma</td>
                                <td class="table-text">Cardiology</td>
                                <td class="table-text">04:30 PM</td>
                                <td><span class="badge bg-success">Confirmed</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-center mt-3">
                        <button class="btn btn-outline-primary">View All Appointments</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="bg-white shadow p-4 corners">
                    <h5 class="form-heading"><i class="fa-solid fa-user-doctor text-primary me-2"></i> Available Doctors</h5>
                    <hr/>
                    <div class="d-flex mt-4">
                        <img src="https://media.easy-peasy.ai/4213a5f1-2a75-41b3-91ca-76c9d8d4cff8/736d0655-3c7c-41c8-8288-4aaebcc9b2fd_medium.webp"
                            class="rounded-circle profile-img me-3" alt=""/>
                        <div>
                            <h6 class="info-title text-dark">Dr. Anjali Sharma</h6>
                            <p class="info-text">Cardiologist</p>
                        </div>
                        <span class="badge bg-success ms-auto align-self-center">Available</span>
                    </div>
                    <hr/>
                    <div class="d-flex">
                        <img src="https://img.freepik.com/premium-photo/default-striking-portrait-young-male-doctor-his-arms_992212-246886.jpg"
                            class="rounded-circle profile-img me-3" alt=""/>
                        <div>
                            <h6 class="info-title text-dark">Dr. Rahul Verma</h6>
                            <p class="info-text">Neurologist</p>
                        </div>
                        <span class="badge bg-secondary ms-auto align-self-center">In Surgery</span>
                    </div>
                    <hr/>
                    <div class="d-flex">
                        <img src="https://imgcdn.stablediffusionweb.com/2025/7/3/1efa023c-3d64-4cf4-9542-11224eba8341.jpg"
                            class="rounded-circle profile-img me-3" alt=""/>
                        <div>
                            <h6 class="info-title text-dark">Dr. Priya Patel</h6>
                            <p class="info-text">Pediatrician</p>
                        </div>
                        <span class="badge bg-success ms-auto align-self-center">Available</span>
                    </div>
                    <hr/>
                    <div class="d-flex">
                        <img src="https://img.freepik.com/premium-photo/professional-doctor-portrait-showcasing-expertise-compassion-healthcare_1204564-59616.jpg"
                            class="rounded-circle profile-img me-3" alt=""/>
                        <div>
                            <h6 class="info-title text-dark">Dr. Amith Singh</h6>
                            <p class="info-text">Orthopedic</p>
                        </div>
                        <span class="badge bg-success ms-auto align-self-center">Available</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mb-5 quick-actions">
        <div class="bg-white shadow p-4 corners">
            <h5 class="form-heading"><i class="fa-solid fa-bolt text-primary me-2"></i> Quick Actions</h5>
            <hr/>
            <div class="row g-4 mt-1">
                <div class="col-lg-3 col-md-6">
                    <a href="#" class="action-card h-100 d-flex align-items-center p-3">
                        <div class="stat-icon stat-blue me-3">
                            <i class="fa-solid fa-user-plus"></i>
                        </div>
                        <div>
                            <h6 class="info-title text-dark">Add New Patient</h6>
                            <p class="info-text">Register a new patient</p>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <a href="./appointment.html" class="action-card h-100 d-flex align-items-center p-3">
                        <div class="stat-icon stat-green me-3">
                            <i class="fa-solid fa-calendar-plus"></i>
                        </div>
                        <div>
                            <h6 class="info-title text-dark">Book Appointment</h6>
                            <p class="info-text">Schedule new appointment</p>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <a href="#" class="action-card h-100 d-flex align-items-center p-3">
                        <div class="stat-icon stat-orange me-3">
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <div>
                            <h6 class="info-title text-dark">View All Patients</h6>
                            <p class="info-text">See all registered patients</p>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <a href="#" class="action-card h-100 d-flex align-items-center p-3">
                        <div class="stat-icon stat-purple me-3">
                            <i class="fa-solid fa-file-lines"></i>
                        </div>
                        <div>
                            <h6 class="info-title text-dark">Generate Report</h6>
                            <p class="info-text">View hospital reports</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard