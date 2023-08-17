import React from 'react';
import Sidebar from './Sidebar';
export const metadata = {
    title: "Next hero | Dashboard",
    description: "Generated by create next app",
};
  
const DashboardLayout = ({children}) => {
    return (
        <div className='flex container mx-auto'>
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;