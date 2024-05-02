import { Avatar, Container } from '@mui/material';
import React from 'react';

export default function User() {
    return (
        <Container>
            <h2>ユーザー</h2>
            <Avatar src='../logo.svg' />
            <p>user name</p>
            <p>user email</p>
            <p>user spend money</p>
        </Container>
    );
}