import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setSent(true)
    }

    return (
        <div class="container-fluid second-section">
            <div class="row justify-content-center align-items-center min-vh-100">
                <div class="col-md-8 col-lg-5 col-xl-4">
                    <div class="bg-white shadow p-4 corners">

                        <div class="text-center">
                            <div class="info-icon mx-auto">
                                <i class="fa-solid fa-key text-primary"></i>
                            </div>
                            <h2 class="form-heading mt-3">Forgot Password</h2>
                            <p class="info-text">Enter your registered email and we will send you a reset link</p>
                        </div>

                        {
                            sent ? (
                                <div class="note-box p-3 mt-4">
                                    <p class="mb-0 note-text">
                                        <i class="fa-solid fa-circle-check text-primary me-2"></i>
                                        A reset link has been sent to <b>{email}</b>. Please check your inbox.
                                    </p>
                                </div>
                            ) : (
                                <form class="mt-4" onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label class="form-label field-label">Email Address</label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-white"><i class="fa-solid fa-envelope text-secondary"></i></span>
                                            <input type="email" class="form-control" placeholder="Enter your registered email"
                                                value={email}
                                                onChange={(e)=>setEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary confirm-btn w-100">Send Reset Link</button>
                                </form>
                            )
                        }

                        <p class="info-text text-center mt-4 mb-0">
                            <Link to='/login' class="text-primary">
                                <i class="fa-solid fa-arrow-left me-2"></i>Back to Login
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
