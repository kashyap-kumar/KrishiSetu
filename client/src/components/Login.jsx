import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setCredentials } from "../features/auth/authSlice.js";
import { useLoginMutation } from "../features/api/apiSlice.js";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = await login({ email, password }).unwrap();
            dispatch(setCredentials(userData));
            toast.success("Logged in successfully!");
            navigate("/"); // navigate to home page
        }
        catch (error) {
            toast.error(error.data?.message || "Login failed. Please try again.");
        }
    }
    
    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <form
                onSubmit={handleSubmit}
                className="max-w-sm mx-auto border border-gray-200 rounded-lg p-6 bg-brand-background"
            >
                <h1 className="text-2xl text-brand-primary font-bold mb-5">Login</h1>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-brand-primary">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-white border border-brand-primary text-gray-900 text-sm rounded-lg focus:ring-brand-tertiary focus:border-brand-secondary block w-full p-2.5"
                        placeholder="kashyap@krishisetu.test"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-brand-primary">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-white border border-brand-primary text-gray-900 text-sm rounded-lg focus:ring-brand-tertiary focus:border-brand-secondary block w-full p-2.5"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-brand-tertiary dark:bg-gray-700 dark:border-brand-secondary dark:focus:ring-brand-secondary"
                        />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-brand-primary">
                        Remember me
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full text-white bg-brand-primary hover:bg-brand-secondary focus:ring-4 focus:ring-brand-tertiary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    disabled={isLoading}
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                <p className="mt-3 text-sm text-brand-accent">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-brand-accent hover:underline">
                        Sign up
                    </Link>
                    .
                </p>
            </form>
        </>
    );
};

export default Login;
