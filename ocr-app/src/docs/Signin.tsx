import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import {
    Link,
    // Routes, 
    // Route 
} from 'react-router-dom';


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return <Button variant='outlined' onClick={() => loginWithRedirect()}>Login</Button>
}

const LogoutButton = () => {
    const { logout } = useAuth0();
    return <Button onClick={() => logout({ logoutParams: { returnTo: `${window.location.origin}` } })}>Logout</Button>
}

// const Profile = () => {
//     const { user, isAuthenticated } = useAuth0();
//     if (user === undefined) return <div></div>
//     return isAuthenticated ? <div>Hello, {user.name}</div> : <div>Please login</div>
// }

export default function Signin() {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/user'>Profile</Link>
                    </li>
                </ul>
                <LoginButton />
                <LogoutButton />
            </nav>
            {/* <Routes>
                <Route path='/profile' element={<Profile />} />
            </Routes> */}
        </>
    );
}