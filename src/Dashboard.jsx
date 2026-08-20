import React from 'react'
import { Link } from 'react-router-dom'
import doctorImages from './doctorImages'

function Dashboard() {
  return (
    <>
    <div class="container-fluid heading-section">
        <div class="container">
            <div class="d-flex p-4">
                <div class="banner-icon ms-3 me-4">
                    <i class="fa-solid fa-chart-line text-primary"></i>
                </div>
                <div>
                    <h1>Dashboard</h1>
                    <p class="page-path"><a href="./index.html">Home</a> <i class="fa-solid fa-angle-right"></i>
                        <span class="text-dark">Dashboard</span></p>
                    <p class="offer-font">A quick overview of patients, appointments <br/> and doctors in our hospital.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-5 kpi-section">
        <div class="row g-4">
            <div class="col-lg-3 col-md-6">
                <div class="bg-white shadow p-4 corners hover-card">
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
                <div class="bg-white shadow p-4 corners hover-card">
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
                <div class="bg-white shadow p-4 corners hover-card">
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
                <div class="bg-white shadow p-4 corners hover-card">
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
    <div class="container mt-4 mb-5 main-section">
        <div class="row g-4">
            <div class="col-lg-8">
                <div class="bg-white shadow p-4 corners hover-card">
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
                                <td class="table-text">Dr. Arjun Mehta</td>
                                <td class="table-text">Cardiology</td>
                                <td class="table-text">09:00 AM</td>
                                <td><span class="badge bg-success">Confirmed</span></td>
                            </tr>
                            <tr>
                                <td class="table-text">Sneha Verma</td>
                                <td class="table-text">Dr. Priya Sharma</td>
                                <td class="table-text">Neurology</td>
                                <td class="table-text">10:30 AM</td>
                                <td><span class="badge bg-warning text-dark">Pending</span></td>
                            </tr>
                            <tr>
                                <td class="table-text">Arjun Mehta</td>
                                <td class="table-text">Dr. Rahul Verma</td>
                                <td class="table-text">Pediatrics</td>
                                <td class="table-text">11:15 AM</td>
                                <td><span class="badge bg-success">Confirmed</span></td>
                            </tr>
                            <tr>
                                <td class="table-text">Kavya Reddy</td>
                                <td class="table-text">Dr. Sneha Reddy</td>
                                <td class="table-text">Orthopedic</td>
                                <td class="table-text">02:00 PM</td>
                                <td><span class="badge bg-danger">Cancelled</span></td>
                            </tr>
                            <tr>
                                <td class="table-text">Mohan Rao</td>
                                <td class="table-text">Dr. Arjun Mehta</td>
                                <td class="table-text">Cardiology</td>
                                <td class="table-text">04:30 PM</td>
                                <td><span class="badge bg-success">Confirmed</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-center mt-3">
                        <Link to='/appointment' class="btn btn-outline-primary">View All Appointments</Link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="bg-white shadow p-4 corners hover-card">
                    <h5 class="form-heading"><i class="fa-solid fa-user-doctor text-primary me-2"></i> Available Doctors</h5>
                    <hr/>
                    <div class="d-flex mt-4">
                        <img src={doctorImages[1]}
                            class="rounded-circle profile-img me-3" alt=""/>
                        <div>
                            <h6 class="info-title text-dark">Dr. Arjun Mehta</h6>
                            <p class="info-text">Cardiology</p>
                        </div>
                        <span class="badge bg-success ms-auto align-self-center">Available</span>
                    </div>
                    <hr/>
                    <div class="d-flex">
                        <img src={doctorImages[2]}
                            class="rounded-circle profile-img me-3" alt=""/>
                        <div>
                            <h6 class="info-title text-dark">Dr. Priya Sharma</h6>
                            <p class="info-text">Neurology</p>
                        </div>
                        <span class="badge bg-secondary ms-auto align-self-center">In Surgery</span>
                    </div>
                    <hr/>
                    <div class="d-flex">
                        <img src={doctorImages[3]}
                            class="rounded-circle profile-img me-3" alt=""/>
                        <div>
                            <h6 class="info-title text-dark">Dr. Rahul Verma</h6>
                            <p class="info-text">Orthopedics</p>
                        </div>
                        <span class="badge bg-success ms-auto align-self-center">Available</span>
                    </div>
                    <hr/>
                    <div class="d-flex">
                        <img src={doctorImages[4]}
                            class="rounded-circle profile-img me-3" alt=""/>
                        <div>
                            <h6 class="info-title text-dark">Dr. Sneha Reddy</h6>
                            <p class="info-text">Pediatrics</p>
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
                    <Link to='/registration' class="action-card h-100 d-flex align-items-center p-3">
                        <div class="stat-icon stat-blue me-3">
                            <i class="fa-solid fa-user-plus"></i>
                        </div>
                        <div>
                            <h6 class="info-title text-dark">Add New Patient</h6>
                            <p class="info-text">Register a new patient</p>
                        </div>
                    </Link>
                </div>
                <div class="col-lg-3 col-md-6">
                    <Link to='/appointment' class="action-card h-100 d-flex align-items-center p-3">
                        <div class="stat-icon stat-green me-3">
                            <i class="fa-solid fa-calendar-plus"></i>
                        </div>
                        <div>
                            <h6 class="info-title text-dark">Book Appointment</h6>
                            <p class="info-text">Schedule new appointment</p>
                        </div>
                    </Link>
                </div>
                <div class="col-lg-3 col-md-6">
                    <Link to='/doctors' class="action-card h-100 d-flex align-items-center p-3">
                        <div class="stat-icon stat-orange me-3">
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <div>
                            <h6 class="info-title text-dark">View All Doctors</h6>
                            <p class="info-text">See all our specialists</p>
                        </div>
                    </Link>
                </div>
                <div class="col-lg-3 col-md-6">
                    <Link to='/contact' class="action-card h-100 d-flex align-items-center p-3">
                        <div class="stat-icon stat-purple me-3">
                            <i class="fa-solid fa-file-lines"></i>
                        </div>
                        <div>
                            <h6 class="info-title text-dark">Contact Support</h6>
                            <p class="info-text">Get help from our team</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard