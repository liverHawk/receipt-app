import { Button, Card, CardContent } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import List from './List';

export default function Home() {
    return (
        <Container>
            <h2>ホーム</h2>
            <Card>
                <CardContent>
                    <div>2024年5月2日現在の出費額</div>
                    <div>10000円</div>
                </CardContent>
            </Card>
            <Button variant='contained' onClick={() => window.location.href = '/register'}>登録</Button>

            <h3>最近の記録</h3>
            <List count={5} />
        </Container>
    );
}