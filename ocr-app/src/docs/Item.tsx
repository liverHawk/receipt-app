import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Item() {
    const [open, setOpen] = useState(true);
    const param: Param = useParams<Param>();

    type Param = {
        itemId?: string
    }

    const handleModal = () => {
        setOpen(false);
        window.location.href = '/list'
    }

    return (
        <>
            <Modal open={open} onClose={handleModal}>
                <Box sx={style}>
                    <div>this is item {param.itemId}</div>
                </Box>
            </Modal>
        </>
    )
}