'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const { status, data: session } = useSession()

    return (
        <div className='flex bg-slate-200 p-5 text-black'>
            <Link className='mr-5' href={'/'} > Next.js</Link>
            <Link className='mr-5' href={'/users'} > Users</Link>
            {
                status === 'loading' &&
                <div>Loading... </div>
            }
            {
                status === 'authenticated' &&
                <>
                    <div>{session.user!.name} </div>
                    <Link className='ml-5' href={'/api/auth/signout'} > Sign Out</Link>
                </>

            }
            {
                status === 'unauthenticated' &&
                <Link href={'/api/auth/signin'} > Login</Link>
            }
        </div >
    )
}

export default NavBar