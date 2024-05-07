
import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Avatar, Container, Drawer, IconButton, List as MList, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

import Home from './docs/Home';
// import User from './docs/User';
// import Signin from './docs/Signin';
import List from './docs/List';
import Item from './docs/Item';
import Summary from './docs/Summary';
import Register from './docs/Register';
// import Auth from './docs/Auth';

function AppRouter() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen);
        return
    }

    return (
        <div>
            <Container>
                <IconButton onClick={() => toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <div>Receipt App</div>
            </Container>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                <nav onClick={() => toggleDrawer(false)}>
                    <MList>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    src='../public/logo192.png'
                                    onClick={() => window.location.href = '/user'}>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="user" />
                        </ListItem>
                        <ListItem>
                            <ListItemButton href="/">
                                <ListItemText>ホーム</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        {/* <li>
                            <Link to="/user/">ユーザー</Link>
                        </li>
                        <li>
                            <Link to='/signin'>サインイン</Link>
                        </li> */}
                        <ListItem>
                            <ListItemButton href="/list">
                                <ListItemText>リスト</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton href="/summary">
                                <ListItemText>まとめ</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton href="/register">
                                <ListItemText>登録</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </MList>
                </nav>
            </Drawer>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/user' element={<User />} /> */}
                {/* <Route path='/signin' element={<Signin />} /> */}
                <Route path='/list' element={<List />}>
                    <Route path=':itemId' element={<Item />} />
                </Route>
                {/* <Route path='/auth' element={<Auth />} /> */}
                <Route path='/summary' element={<Summary />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    );
}

export default AppRouter;

/**
 * home
 * |
 * +-- signup
 * +-- signin
 * +-- signout
 * |
 * +-- user
 * +-- list
 *      |
 *      +-- {:item}
 * +-- sum
 * +-- register
 *      |
 *      +-- form -- modal
 * 
 */