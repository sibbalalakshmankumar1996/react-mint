import React, { useState } from 'react';

import './_signin.scss';
export default function Signin() {
    const [data, setData] = useState({ username: "", email: "", password: "", number: "", errMsg: "" })
    const handler = event => {
        const { name, value } = event.target;
        //console.log("handler event clicked");
        setData({ ...data, [name]: value })
    }
    console.log(data);
    const getFormData = (event) => {
        event.preventDefault();
        if (data.email !== "" && data.password !== "") {
            setData({ ...data, errMsg: "" })
        }
        else {
            setData({ ...data, errMsg: "Please fill the input field" })
        }
    }

    const getRegisterData = event => {
        event.preventDefault();
        if (data.username !== "" && data.email !== "" && data.number !== "") {
            setData({ ...data, errMsg: ""})
        }
        else {
            setData({ ...data, errMsg: "Please fill the input field" })
        }
    }

    return (

        <>
            <li>
                <a href="#0" className="icon-user_icon text-decoration-none bellafter-icon"></a>
            </li>
            <span className="header-top-text">Hello,</span>
            <button className="header-top-text signin-button" data-bs-toggle="modal" data-bs-target="#myModal">Sign in</button>

            {/* sign in modal */}
            <div className="modal" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title header-title">Sign In</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            {data.errMsg &&
                                <p className="error">{data.errMsg}</p>}
                            <form onSubmit={getFormData}>
                                <div className="form-group mb-4">
                                    <label className="form-label required">Email</label>
                                    <input type="email" className="form-control" placeholder="e.g. sara@gmail.com*" name="email" onChange={handler} />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label required">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Your Password" name="password" onChange={handler} />
                                </div>
                                <button type="submit" className="btn form-control bg-warning" id="login-button">Login</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <p className="account mt-4 mb-4">Don't have an account? <button type="button" className="btn btn-outline-primary btn-lg" data-bs-toggle="modal" data-bs-target="#signupModel">Sign Up</button></p>

                        </div>
                    </div>
                </div>
            </div>
            {/* signup modal */}
            <div className="modal" id="signupModel" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title header-title">Sign Up</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            {data.errMsg &&
                                <p className="error">{data.errMsg}</p>}
                            <form onSubmit={getRegisterData}>
                                <div className="form-group mb-4">
                                    <label className="form-label required">Username</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Username" name="username" onChange={handler} />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label required">Email</label>
                                    <input type="email" className="form-control" placeholder="e.g. sara@gmail.com*" name="email" onChange={handler} />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label required">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="94xxxxxx47" name="number" onChange={handler} />
                                </div>
                                <button type="submit" className="btn form-control bg-warning" id="register-button">Register</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <p className="account mt-4 mb-4">Already have an account? <button type="button" className="btn btn-outline-primary btn-lg" data-bs-toggle="modal" data-bs-target="#myModal">Sign In</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
