import React from 'react'


const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='flex '>
            <aside className='bg-slate-200 p-5 mr-5 text-black'>Admin SideBar</aside>
            <div>{children}</div>
        </div>
    )
}

export default AdminLayout