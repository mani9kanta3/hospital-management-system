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
        <div class="row">
            <div class="col-lg-6  col-md-6">
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-6 col-sm-3">
                                <label for="name" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
                            </div>
                            <div class="col-6 col-sm-3">
                                <label for="dob" class="form-label">Date Of Birth</label>
                                <input type="date" class="form-control" id="dob" value="Mark" required/>
                            </div>
                            <div class="col-6 col-sm-3 dropdown">
                                <label for="dob" class="form-label">Gender</label>
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    select gender
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><button class="dropdown-item" type="button">Male</button></li>
                                    <li><button class="dropdown-item" type="button">Female</button></li>
                                    <li><button class="dropdown-item" type="button">Other</button></li>
                                </ul>
                            </div>
                            <div class="col-6 col-sm-3">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
                            </div>

                           
                            <div class="w-100 d-none d-md-block"></div>

                            <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
                            <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
                            <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
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
