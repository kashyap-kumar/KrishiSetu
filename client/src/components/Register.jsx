import React, { useState } from "react";
import { useRegisterMutation } from "../features/api/apiSlice";
import { setCredentials } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("consumer");
    const [register, { isLoading }] = useRegisterMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await register({ firstName, lastName, phoneNumber, email, password, role }).unwrap();
            dispatch(setCredentials(userData));
            navigate("/"); // navigate to home page
        } catch (err) {
            console.error("Failed to register:", err);
        }
    };

    return (
        <form
            method="POST"
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto border border-gray-200 rounded-lg p-6 bg-brand-background"
        >
            <h1 className="text-2xl text-brand-primary font-bold mb-5">Register</h1>

            <div className="mb-5 flex flex-row space-x-2">
                <div className="flex-1">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-brand-primary">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="bg-white border border-brand-primary text-gray-900 text-sm rounded-lg focus:ring-brand-tertiary focus:border-brand-secondary block w-full p-2.5"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-brand-primary">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="bg-white border border-brand-primary text-gray-900 text-sm rounded-lg focus:ring-brand-tertiary focus:border-brand-secondary block w-full p-2.5"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        required
                    />
                </div>
            </div>

            <div className="mb-5 flex flex-row space-x-2">
                <div className="flex-1">
                    <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-brand-primary">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="bg-white border border-brand-primary text-gray-900 text-sm rounded-lg focus:ring-brand-tertiary focus:border-brand-secondary block w-full p-2.5"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                        required
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="role" className="block mb-2 text-sm font-medium text-brand-primary">
                        Role
                    </label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="bg-white border border-brand-primary text-gray-900 text-sm rounded-lg focus:ring-brand-tertiary focus:border-brand-secondary block w-full p-2.5"
                    >
                        <option value="consumer">Consumer</option>
                        <option value="farmer">Farmer</option>
                    </select>
                </div>
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-brand-primary">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="bg-white border border-brand-primary text-gray-900 text-sm rounded-lg focus:ring-brand-tertiary focus:border-brand-secondary block w-full p-2.5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="kashyap@krishisetu.test"
                    required
                />
            </div>

            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-brand-primary">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="bg-white border border-brand-primary text-gray-900 text-sm rounded-lg focus:ring-brand-tertiary focus:border-brand-secondary block w-full p-2.5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full text-white bg-brand-primary hover:bg-brand-secondary focus:ring-4 focus:ring-brand-tertiary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={isLoading}
            >
                {isLoading ? "Registering..." : "Register"}
            </button>

            <p className="mt-3 text-sm text-brand-accent">
                Already have an account?{" "}
                <Link to="/login" className="text-brand-accent hover:underline">
                    Login here
                </Link>
                .
            </p>
        </form>
    );
};

export default Register;

