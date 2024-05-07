import { Auth0Provider } from "@auth0/auth0-react";
import React, { ReactNode } from "react";


interface AuthProviderProps {
    children: ReactNode
}

export default function AuthPrivider({ children }: AuthProviderProps) {
    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_ISSURE_BASE_URL!}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
            authorizationParams={{ redirect_uri: `${window.location.origin}/auth` }}
        >
            {children}
        </Auth0Provider>
    )
};
