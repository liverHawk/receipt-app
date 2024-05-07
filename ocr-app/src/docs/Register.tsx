import { Button, Container, styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from "react";
import { post_item, post_photo, post_transaction } from "../api/db-fetch";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function Register() {
    const [result, setResult] = useState();


    const register = async () => {
        const res = await post_transaction({ name: "test" })
        setResult(res);
    }

    const photo_register = async () => {
        const res = await post_photo({
            name: "Photo test",
            transaction_id: 5
        })
        setResult(res);

    }

    const item_register = async () => {
        const res = await post_item({
            name: "test",
            price: 3000,
            photo_id: 3,
            transaction_id: 5
        })
        setResult(res);

    }

    return (
        <Container>
            <h2>登録</h2>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
            <br />
            <Button onClick={register}>transaction</Button>
            <Button onClick={photo_register}>photo</Button>
            <Button onClick={item_register}>item</Button>
        </Container>
    )
}