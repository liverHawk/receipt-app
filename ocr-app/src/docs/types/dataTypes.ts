export type Transaction = {
    id: number;
    date: Date;
    photos: Array<Photo>;
    items: Array<Item>;
}

export type Photo = {
    id: number;
    transaction_id: number;
    items: Array<Item>;
}

export type Item = {
    id: number;
    name: string;
    price: number;
    photo_id: number;
    transaction_id: number
}