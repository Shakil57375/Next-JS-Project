import React from 'react';
export const metadata = {
    title: "Next hero | Dashboard",
    description: "Generated by create next app",
};
  
const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>Sidebar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;