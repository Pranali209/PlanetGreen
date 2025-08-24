import React, { useState } from "react";
import Logo from '../Component/Logo';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [showTerms, setShowTerms] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.fullName || !form.username || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required.");
        toast.error('All fields are required.', { position: 'top-right' });
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
        toast.error('Passwords do not match.', { position: 'top-right' });
      return;
    }
    dispatch(registerUser({
      fullName: form.fullName,
      username: form.username,
      email: form.email,
      password: form.password
    }));
    setError("");
    Navigate("/"); // Redirect to login
      toast.success('Account created successfully!', { position: 'top-right' });
  };

  return (
    <div className="login-bg min-h-screen flex items-center justify-center px-2">
      <div className="bg-black bg-opacity-90 rounded-3xl shadow-lg w-full max-w-2xl p-4 md:p-10 flex flex-col">
        <div className="flex items-center justify-between align-middle mb-3">
          <h2 className="text-white text-xl md:text-2xl font-bold">Create <span className="font-normal">your account!</span></h2>
          <Logo/>
        </div>
        <p className="text-[#888787]  text-sm mb-6">Sign up to unlock exclusive features.</p>
  <p className="text-[#888787] text-xs md:text-sm mb-6">Sign up to unlock exclusive features.</p>
        <hr className="border-gray-700 mb-6" />
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mb-2">
            <div className="bg-[#202020] rounded-lg flex items-center justify-center w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115.75 0v.75a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75v-.75z" />
              </svg>
            </div>
            <div className="flex-1">
              <label className="text-white text-sm mb-1 block">Full Name</label>
       
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md bg-[#202020] text-white placeholder-gray-400 focus:outline-none text-xs md:text-base" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="text-white text-sm mb-1 block">Username</label>
              <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Enter your username" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md bg-[#202020] text-white placeholder-gray-400 focus:outline-none text-xs md:text-base" />
            </div>
            <div className="flex-1">
              <label className="text-white text-sm mb-1 block">Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your full email" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md bg-[#202020] text-white placeholder-gray-400 focus:outline-none text-xs md:text-base" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="text-white text-sm mb-1 block">Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md bg-[#202020] text-white placeholder-gray-400 focus:outline-none text-xs md:text-base" />
            </div>
            <div className="flex-1">
              <label className="text-white text-sm mb-1 block">Confirm Password</label>
              <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md bg-[#202020] text-white placeholder-gray-400 focus:outline-none text-xs md:text-base" />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <div className="flex items-center justify-between gap-4 mt-2">
            <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-white cursor-pointer" />
              <span className="text-gray-400 text-xs md:text-sm">I accept the <button type="button" className="underline text-white cursor-pointer" onClick={() => setShowTerms(true)}>Terms & Conditions</button></span>
            </div>
              <button type="submit" className="px-4 md:px-8 py-2 md:py-3 rounded-md bg-white text-black font-semibold flex items-center gap-2 cursor-pointer text-xs md:text-base">Create Account <span className="ml-2">→</span></button>
          </div>
        </form>
        <hr className="border-gray-700 mt-8 mb-2" />
        <div className="flex justify-between items-center text-gray-400 text-sm">
        <span className="text-xs md:text-sm">Already have an account? <a onClick={() => Navigate("/")}
         href="#" className="underline text-white cursor-pointer">Log in</a></span>
       <span className="text-xs">2025 © Demo Panel | FE</span>
        </div>
      </div>
      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="modal-overlay">
          {/* Blur and overlay background */}
         
          <div className="modal-content">
            <h3 className="text-2xl font-bold mb-4 text-left w-full cursor-pointer">Terms & Conditions</h3>
            <div className="text-gray-700 text-base max-h-[60vh] overflow-y-auto mb-6 w-full text-left">
              <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p className="mt-3">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
              <p className="mt-3">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
              <p className="mt-3">You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
              <p className="mt-3">Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
            </div>
              <button className="w-full py-2 rounded-md bg-black text-white font-semibold mt-2 cursor-pointer" onClick={() => setShowTerms(false)}>Close</button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
