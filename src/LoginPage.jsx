import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function LoginPage() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        localStorage.setItem('userinfo',username)
        navigate('/')
    }
    return (
        <div class="container-fluid second-section">
            <div class="row justify-content-center align-items-center min-vh-100">
                <div class="col-md-8 col-lg-5 col-xl-4">
                    <div class="bg-white shadow p-4 corners">

                        <div class="text-center">
                            <div class="info-icon mx-auto">
                                <i class="fa-solid fa-lock text-primary"></i>
                            </div>
                            <h2 class="form-heading mt-3">Login</h2>
                            <p class="info-text">Please enter your credentials to continue</p>
                        </div>

                        <form class="mt-4" onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label class="form-label field-label">Email Address</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-white"><i class="fa-solid fa-envelope text-secondary"></i></span>
                                    <input type="email" class="form-control" placeholder="Enter your email address" 
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}/>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label field-label">Password</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-white"><i class="fa-solid fa-lock text-secondary"></i></span>
                                    <input type="password" class="form-control" placeholder="Enter your password" />
                                    <span class="input-group-text bg-white border-end"><i class="fa-solid fa-eye-slash text-secondary"></i></span>
                                </div>
                            </div>

                            <div class="text-end mb-3">
                                <Link to='/forgot-password' class="text-primary field-label">Forgot Password?</Link>
                            </div>

                            <button type="submit" class="btn btn-primary confirm-btn w-100">Login to Account</button>
                        </form>

                        <p class="info-text text-center mt-4 mb-0">
                            Don't have an account? <Link to='/signup' class="text-primary">Sign Up</Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage