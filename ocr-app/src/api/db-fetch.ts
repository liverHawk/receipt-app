// REACT_APP_API_ROOT_URL
// import dotenv from 'dotenv';
// dotenv.config();

const methods: { [key: number]: string } = { 1: "GET", 2: "POST", 3: "DELETE" };

const communicate = async (method: number, url: string) => {

    const response = await fetch(url, {
        method: methods[method],
        mode: 'cors',
        cache: 'no-cache',
        credentials: "same-origin",
        headers: {
            "Content-Type": 'application/json'
        },
        redirect: "follow",
    });

    return response.json();
}

const communicate_post = async (method: number, url: string, data: any) => {

    const response = await fetch(url, {
        method: methods[method],
        mode: 'cors',
        cache: 'no-cache',
        credentials: "same-origin",
        headers: {
            "Content-Type": 'application/json'
        },
        redirect: "follow",
        body: JSON.stringify(data)
    });

    return response.json();
}

export const get_transactions = () => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}/transactions`;
    return communicate(1, url).then((data) => {
        return data
    })
}

export const get_items = () => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}/items`;
    return communicate(1, url).then((data) => { return data })
}

export const post_transaction = (data: any) => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}/transactions/register`

    return communicate_post(2, url, data).then((data) => { return data })
}

export const post_photo = (data: any) => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}/photos/register`

    return communicate_post(2, url, data).then((data) => { return data })
}

export const post_item = (data: any) => {
    const url = `${process.env.REACT_APP_API_ROOT_URL}/items/register`

    return communicate_post(2, url, data).then((data) => { return data })
}