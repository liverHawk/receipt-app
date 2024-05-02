import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function List() {
    return (
        <>
            <ul>
                <li>
                    <Link to={"/list/1"}>item1</Link>
                </li>
                <li>
                    <Link to={"/list/2"}>item2</Link>
                </li>
            </ul>
            <Outlet />
        </>

    )
}
