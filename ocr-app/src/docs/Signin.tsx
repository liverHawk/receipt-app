import { Button, Card, CardContent, Container } from '@mui/material';
import React from 'react';

export default function Signin() {
    return (
        <Container>
            <h2>Signin</h2>
            <Card>
                <CardContent>
                    google
                    <br />
                    <Button variant='outlined'>signin</Button>
                </CardContent>
            </Card>
        </Container>
    );
}