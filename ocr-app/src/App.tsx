"use client"

import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Avatar, Button, Container, Drawer, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Home from './docs/Home';
import User from './docs/User';
import Signin from './docs/Signin';
import List from './docs/List';
import Item from './docs/Item';
import Summary from './docs/Summary';
import Register from './docs/Register';

function AppRouter() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen);
        return
    }

    return (
        <div>
            <IconButton onClick={() => toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                <Container>
                    <Avatar
                        src='../public/logo192.png'
                        onClick={() => window.location.href = '/user'}>
                    </Avatar>
                    user
                </Container>
                <nav onClick={() => toggleDrawer(false)}>
                    <ul>
                        <li>
                            <Link to="/">ホーム</Link>
                        </li>
                        <li>
                            <Link to="/user/">ユーザー</Link>
                        </li>
                        <li>
                            <Link to={"/signin"}>サインイン</Link>
                        </li>
                        <li>
                            <Link to={"/list"}>リスト</Link>
                        </li>
                        <li>
                            <Link to={"/summary"}>まとめ</Link>
                        </li>
                        <li>
                            <Link to={"/register"}>登録</Link>
                        </li>
                    </ul>
                </nav>
            </Drawer>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user' element={<User />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/list' element={<List />}>
                    <Route path=':itemId' element={<Item />} />
                </Route>
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