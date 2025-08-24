import React from 'react';
import Logo from '../Component/Logo';
import Contact from '../assets/contact.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../userSlice';
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
        dispatch(logoutUser());
        toast.success('Logged out successfully!', { position: 'top-right' });
    };
    return (
        <div className="flex min-h-screen bg-[#fafafa]">
            {/* Sidebar */}
            <aside className="w-16 bg-black text-white flex flex-col items-center py-4 space-y-6">
                <Logo />
                <nav className="flex flex-col gap-6 mt-8">
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
                <div className="mt-auto mb-2">
                    <button className="text-xl cursor-pointer" onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1 px-8 py-6">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <input type="text" placeholder="Search Events...." className="px-4 py-2 rounded-md bg-[#f3f3f3] text-black w-64" />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-black font-semibold flex items-center gap-2 cursor-pointer">New Client <i className='bxr bx-home-add bx-sm'></i></button>
                        <button className="px-4 py-2 rounded-xl bg-black text-white font-semibold flex items-center gap-2 cursor-pointer">New Work Order <FontAwesomeIcon icon={faGear} /></button>
                        <button className="text-xl border-1 border-[#6e6e6e] p-2 rounded-xl cursor-pointer"><FontAwesomeIcon icon={faGear} /></button>
                        <button className="text-xl border-1 border-[#888787] p-2 rounded-xl cursor-pointer"><FontAwesomeIcon icon={faBellRegular} /></button>
                        <button className="text-2xl border-1 border-[#888787] p-2 rounded-xl cursor-pointer"><FontAwesomeIcon icon={faMessage} /></button>
                        <button className="rounded-xl cursor-pointer"><img src={Contact} alt="user" className='w-[45px] rounded-xl cursor-pointer' /></button>
                    </div>
                </div>
                <div className='mb-4'>
                    <FontAwesomeIcon icon={faSitemap} />
                    <span className="text-gray-500 text-sm ml-2.5 font-semibold">Dashboard</span>
                </div>
                {/* Title */}
                <h1 className="text-3xl font-bold mb-6">Platform Dashboard</h1>
                {/* Dashboard Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="rounded-2xl bg-[#f3f3f3] h-48"></div>
                    <div className="rounded-2xl bg-[#f3f3f3] h-48"></div>
                    <div className="rounded-2xl bg-[#f3f3f3] h-48"></div>
                    <div className="rounded-2xl bg-[#f3f3f3] h-48"></div>
                    <div className="rounded-2xl bg-[#f3f3f3] h-48"></div>
                </div>
                {/* Bottom Bar (optional, for the black bar at the bottom) */}
            </main>
            <ToastContainer />
        </div>
    );
}