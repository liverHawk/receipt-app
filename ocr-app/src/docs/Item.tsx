import React from "react";
import { useParams } from "react-router-dom";

export default function Item() {
    type Param = {
        itemId?: string
    }
    const param: Param = useParams<Param>();
    return (
        <>
            <div>this is item {param.itemId}</div>

        </>
    )
}