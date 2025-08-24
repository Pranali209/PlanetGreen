import React, { useState } from "react";
import Logo from '../Component/Logo';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  const currentUser = useSelector(state => state.user.currentUser);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(form));
    if (users.find(u => u.email === form.email && u.password === form.password)) {
      setError("");
      navigate("/dashboard");
    toast.success('Logged in successfully!', { position: 'top-right' });
    } else {
      setError("Invalid email or password.");
    toast.error('Invalid email or password.', { position: 'top-right' });
    }
  };

  return (
    <div className="login-bg min-h-screen flex items-center justify-center  ">
      <div className="bg-black bg-opacity-90 rounded-3xl shadow-lg w-[25rem] max-w-md px-6 py-10 flex flex-col items-start">
        <Logo/>
        <h2 className="text-[#888787] text-2xl font-semibold mb-2 mt-10"><b className="text-white">Log in</b> to your account!</h2>
        <p className="text-[#888787] text-sm mb-6 ">Enter your email and password to login</p>
        <form className="w-full flex flex-col gap-4 mt-2" onSubmit={handleSubmit}>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email address.." className="w-full px-4 py-3 rounded-md bg-[#202020] text-white placeholder-[#888787] focus:outline-none" />
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter Password..." className="w-full px-4 py-3 rounded-md bg-[#202020] text-white placeholder-[#888787] focus:outline-none" />
          <div className="flex items-center mt-4 justify-between w-full text-gray-400 text-sm">
            <label className="flex items-center gap-2 ">
                <input type="checkbox" className="accent-white cursor-pointer" />
              <span className=" text-white">Remember me</span>
            </label>
              <a href="#" className="hover:underline text-[#888787] cursor-pointer">Forgot Password ?</a>
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <button type="submit" className="w-full py-3 rounded-md bg-white text-black font-semibold mt-2 cursor-pointer">Sign In to Account</button>
        </form>
        <div className="border-1 border-[#888787] w-2xs mt-6 m-auto"></div>
        <div className="w-full text-center mt-6">
          <p className="text-[#888787] text-sm mb-2">Don't have account ?</p>
            <button onClick={() => navigate("/signup")}
             className="w-full py-3 rounded-md border border-gray-400 text-[#e0dcdc] font-semibold cursor-pointer">Create New Account</button>
        </div>
        <div className="mt-6 text-[#888787]  text-xs m-auto">2025 © Demo Panel | FE</div>
      </div>
      <ToastContainer />
    </div>
  );
}
