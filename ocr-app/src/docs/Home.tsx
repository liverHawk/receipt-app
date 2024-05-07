import { Button, Card, CardContent } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { get_items } from '../api/db-fetch';
import List from './List';
import { Item } from './types/dataTypes';

export default function Home() {
    const [sumPrice, setSumPrice] = useState(0);
    useEffect(() => {
        const get_all_price = async () => {
            const res = await get_items();
            var buf = 0;
            res.forEach((element: Item) => buf += element.price)
            setSumPrice(buf);
        }
        get_all_price();
    })
    return (
        <Container>
            <h2>ホーム</h2>
            <Card style={{ marginTop: "1em", marginBottom: "1em" }}>
                <CardContent>
                    <div>2024年5月2日現在の出費額</div>
                    <div>{sumPrice}円</div>
                </CardContent>
            </Card>
            <Button variant='contained' onClick={() => window.location.href = '/register'}>登録</Button>

            <h3>最近の記録</h3>
            <List count={5} />
        </Container>
    );
}