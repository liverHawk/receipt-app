import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { get_items } from '../api/db-fetch';
import { Item } from './types/dataTypes';
import { Box, List as MList, ListItem, ListItemButton, ListItemText, Modal } from '@mui/material';
// import { Transaction } from './types/dataTypes';

const List: FC<{ count?: number, type?: string }> = (props) => {
    const [items, setItems] = useState([])
    const [open, setOpen] = useState(false);
    const [modalItem, setModalItem] = useState({} as Item);

    const Part: ReactNode[] = [];

    useEffect(() => {
        const get_items_array = async () => {
            const res = await get_items();
            setItems(res);
        }
        get_items_array();
    }, [])

    const handleClick = (item: Item) => {
        setModalItem(item);
        setOpen(true);
    }

    const handleModal = () => {
        setOpen(false);
    }



    const res = items.reverse().map((data: Item) => {
        return (
            <ListItem style={{ border: "solid" }}>
                <ListItemButton onClick={() => handleClick(data)}>
                    <ListItemText primary={data.name} secondary={`${data.price}円`} />
                </ListItemButton>
            </ListItem>
        )
    })

    const count = (props.count == null ? 30 : (props.count === 0 ? 10 : props.count));

    // const transactions = get_transactions().then((data) => { return data });
    // console.log(transactions)


    for (var i = 0; i < res.length; i++) {
        Part.push(res[i])
    }

    for (var j = 1; Part.length === count; j++) {
        Part.push(
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={`${props.type}${j}`} secondary={`${props.count}`} />
                </ListItemButton>
            </ListItem>
        )
    }

    return (
        <>
            <MList>
                {
                    Part.map((node) => node)
                }
            </MList>
            <Modal open={open} onClose={handleModal}>
                <Box sx={style}>
                    <div>this is item {modalItem.id}: {modalItem.price} 円</div>
                </Box>
            </Modal>
            <Outlet />
        </>

    )
}

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


export default List;