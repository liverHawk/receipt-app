export const authOptions = {
    domain: `${process.env.REACT_APP_AUTH0_ISSURE_BASE_URL!}`,
    clientId: `${process.env.REACT_APP_AUTH0_CLIENT_ID!}`,
    authorizationParams: `${{ redirect_uri: `${window.location.origin}/auth` }}`
}