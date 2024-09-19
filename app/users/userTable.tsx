import { sort } from 'fast-sort';
import Link from 'next/link';
import React from 'react'

interface IUser {
    id: number;
    name: string;
    email: string
}

interface Props {
    sortOrder: string
}
const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    )
    const users: IUser[] = await res.json();

    const sortedUser = sort(users).asc(sortOrder === 'email' ? (user) => user.email : (user) => user.name)

    return (
        <table className='table table-boarded'>
            <thead className='font-bold text-white text-xl'>
                <tr>
                    <td>
                        <Link href={"/users?sortOrder=name"}>Name</Link>
                    </td>
                    <td>
                        <Link href={"/users?sortOrder=email"}>Email</Link>
                    </td>
                </tr>
            </thead>
            <tbody>

                {sortedUser.map(user => <tr key={user.id}>
                    <td>
                        {user.name}
                    </td>
                    <td>
                        {user.email}
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default UserTable
