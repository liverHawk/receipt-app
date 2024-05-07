import { Button, Container } from "@mui/material";
import React from "react"
import { useLocation } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export default function Auth() {
    const { getAccessTokenSilently, user, isLoading, isAuthenticated } = useAuth0();

    const fetchProtectData = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await axios.get(`${process.env.REACT_APP_API_ROOT_URL}/auth/protected`, {
                // credentials: 'include',
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    grant_type: 'client_credentials',
                    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
                    client_secret: process.env.REACT_APP_AUTH0_SECRET,
                    audience: process.env.REACT_APP_AUTH0_AUDIENCE
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const search = useLocation().search;
    const query = new URLSearchParams(search);

    return (
        <>
            {
                isLoading && (
                    <>Loading</>
                )
            }
            {!isLoading && isAuthenticated && (
                <Container>
                    <Button onClick={fetchProtectData}>Fetch Protected Data</Button>
                    <p>{query.get('code')}</p>
                    <p>{query.get('state')}</p>
                    <p>{user!.email}</p>
                </Container>
            )}
            {!isLoading && !isAuthenticated && (
                <Container>
                    <p>no authentication</p>
                </Container>
            )}
        </>
    );
}