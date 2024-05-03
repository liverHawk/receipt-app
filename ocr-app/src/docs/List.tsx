import React, { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

const List: FC<{ count?: number }> = (props) => {
    const Part: ReactNode[] = []

    const count = props.count == null ? 30 : (props.count === 0 ? 10 : props.count)

    for (var i = 1; i <= count; i++) {
        Part.push(
            <li>
                <Link to={`/list/${i}`}>item{i}</Link>
            </li>
        )
    }

    return (
        <>
            <ul>
                {
                    Part.map((node) => node)
                }
            </ul>
            <Outlet />
        </>

    )
}

export default List;