import React from 'react';
import Logo from '../Component/Logo';
import LogoImage from  '../assets/LogoImage.png'
import Contact from '../assets/contact.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { logoutUser, setCurrentUser } from '../userSlice';
import pb from '../Services/pocketBase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    faHouse,
    faCalendar,
    faLayerGroup,
    faTruckRampBox,
    faUser,
    faMessage,
    faGear,
    faArrowRightFromBracket,
    faUserPlus,
    faSitemap
} from '@fortawesome/free-solid-svg-icons';
import { faBell as faBellRegular, faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';

export default function DashBoard() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        pb.authStore.clear();
        dispatch(logoutUser());
        dispatch(setCurrentUser(null));
        toast.success('Logged out successfully!', { position: 'top-right' });
        window.location.href = '/';
    };
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#fafafa]">
            {/* Sidebar */}
            <aside className="w-full md:w-16 bg-black text-white flex md:flex-col flex-row items-center md:py-4 py-2 md:space-y-6 space-x-4 md:space-x-0 justify-between md:justify-start">
                <img src= {LogoImage} alt="Logo" className="h-10 w-auto cursor-pointer" />
                <nav className="flex md:flex-col flex-row gap-6 mt-0 md:mt-8">
                    <button className="text-xl cursor-pointer"><FontAwesomeIcon icon={faHouse} /></button>
                    <button className="text-xl cursor-pointer"><FontAwesomeIcon icon={faCalendar} /></button>
                    <button className="text-2xl text-white cursor-pointer"><i className='bxr bx-package'></i></button>
                    <button className="text-xl cursor-pointer"><FontAwesomeIcon icon={faLayerGroup} /></button>
                    <button className="text-2xl cursor-pointer"><i className='bxr bx-buildings'></i></button>
                    <button className='text-xl cursor-pointer'><FontAwesomeIcon icon={faTruckRampBox} /></button>
                    <button className="text-2xl cursor-pointer"><i className='bxr bx-file-report'></i></button>
                    <button className="text-xl cursor-pointer"><FontAwesomeIcon icon={faUser} /></button>
                    <button className="text-xl cursor-pointer"><FontAwesomeIcon icon={faGear} /></button>
                </nav>
                <div className="md:mt-auto md:mb-2">
                    <button className="text-xl cursor-pointer" onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1 px-2 md:px-8 py-4 md:py-6">
                {/* Top Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <input type="text" placeholder="Search Events...." className="px-4 py-2 rounded-md bg-[#f3f3f3] text-black w-full md:w-64" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto justify-center md:justify-end">
                        <button className="px-2 md:px-4 py-2 rounded-xl border border-gray-300 bg-white text-black font-semibold flex items-center gap-2 cursor-pointer text-xs md:text-base">New Client <i className='bxr bx-home-add bx-sm'></i></button>
                        <button className="px-2 md:px-4 py-2 rounded-xl bg-black text-white font-semibold flex items-center gap-2 cursor-pointer text-xs md:text-base">New Work Order <FontAwesomeIcon icon={faGear} /></button>
                        <button className="text-xl border-1 border-[#6e6e6e] p-2 rounded-xl cursor-pointer"><FontAwesomeIcon icon={faGear} /></button>
                        <button className="text-xl border-1 border-[#888787] p-2 rounded-xl cursor-pointer"><FontAwesomeIcon icon={faBellRegular} /></button>
                        <button className="text-2xl border-1 border-[#888787] p-2 rounded-xl cursor-pointer"><FontAwesomeIcon icon={faMessage} /></button>
                        <button className="rounded-xl cursor-pointer"><img src={Contact} alt="user" className='w-8 md:w-[45px] rounded-xl cursor-pointer' /></button>
                    </div>
                </div>
                <div className='mb-4 flex items-center'>
                    <FontAwesomeIcon icon={faSitemap} />
                    <span className="text-gray-500 text-xs md:text-sm ml-2.5 font-semibold">Dashboard</span>
                </div>
                {/* Title */}
                <h1 className="text-xl md:text-3xl font-bold mb-6">Platform Dashboard</h1>
                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="rounded-2xl bg-[#f3f3f3] h-32 md:h-48"></div>
                    <div className="rounded-2xl bg-[#f3f3f3] h-32 md:h-48"></div>
                    <div className="rounded-2xl bg-[#f3f3f3] h-32 md:h-48"></div>
                    <div className="rounded-2xl bg-[#f3f3f3] h-32 md:h-48"></div>
                    <div className="rounded-2xl bg-[#f3f3f3] h-32 md:h-48"></div>
                </div>
                {/* Bottom Bar (optional, for the black bar at the bottom) */}
            </main>
            <ToastContainer />
        </div>
    );
}