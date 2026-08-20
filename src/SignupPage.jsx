import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function SignupPage() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        if(password !== confirm){
            setError('Passwords do not match')
            return
        }
        if(password.length < 6){
            setError('Password must be at least 6 characters')
            return
        }

        setError('')
        localStorage.setItem('userinfo', email)
        navigate('/')
    }

    return (
        <div class="container-fluid second-section">
            <div class="row justify-content-center align-items-center min-vh-100">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="bg-white shadow p-4 corners">

                        <div class="text-center">
                            <div class="info-icon mx-auto">
                                <i class="fa-solid fa-user-plus text-primary"></i>
                            </div>
                            <h2 class="form-heading mt-3">Create Account</h2>
                            <p class="info-text">Sign up to book appointments and manage your visits</p>
                        </div>

                        <form class="mt-4" onSubmit={handleSubmit}>

                            <div class="mb-4">
                                <label class="form-label field-label">Full Name <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-white"><i class="fa-solid fa-user text-secondary"></i></span>
                                    <input type="text" class="form-control" placeholder="Enter your full name" required
                                        value={fullname}
                                        onChange={(e)=>setFullname(e.target.value)} />
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label field-label">Email Address <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-white"><i class="fa-solid fa-envelope text-secondary"></i></span>
                                    <input type="email" class="form-control" placeholder="Enter your email address" required
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label field-label">Phone Number <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-white"><i class="fa-solid fa-phone text-secondary"></i></span>
                                    <input type="tel" class="form-control" placeholder="Enter your phone number" required
                                        value={phone}
                                        onChange={(e)=>setPhone(e.target.value)} />
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label field-label">Password <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-white"><i class="fa-solid fa-lock text-secondary"></i></span>
                                    <input type="password" class="form-control" placeholder="Create a password" required
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)} />
                                    <span class="input-group-text bg-white border-end"><i class="fa-solid fa-eye-slash text-secondary"></i></span>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label field-label">Confirm Password <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-white"><i class="fa-solid fa-lock text-secondary"></i></span>
                                    <input type="password" class="form-control" placeholder="Re-enter your password" required
                                        value={confirm}
                                        onChange={(e)=>setConfirm(e.target.value)} />
                                </div>
                            </div>

                            {
                                error && (
                                    <div class="note-box p-3 mb-4">
                                        <p class="mb-0 note-text text-danger">
                                            <i class="fa-solid fa-circle-exclamation me-2"></i>{error}
                                        </p>
                                    </div>
                                )
                            }

                            <button type="submit" class="btn btn-primary confirm-btn w-100 mt-2">Create Account</button>
                        </form>

                        <p class="info-text text-center mt-4 mb-0">
                            Already have an account? <Link to='/login' class="text-primary">Login</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage