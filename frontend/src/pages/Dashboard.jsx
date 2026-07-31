import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar'; 

const Dashboard = () => {
    return (
        <div className='flex pt-20 min-h-screen bg-gray-50'>
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <div className='flex-1 p-6 ml-64'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;