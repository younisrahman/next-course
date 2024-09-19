import React, { Suspense } from 'react'
import UserTable from './userTable'
import Link from 'next/link'

interface Props {
    searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {


    return (
        <div>
            <h1>Users</h1>

            <Link href="/users/new" className='btn'>New Users</Link>

            <Suspense fallback={<p>Loading...</p>}>

                <UserTable sortOrder={sortOrder} />
            </Suspense>
        </div>
    )
}

export default UsersPage 
