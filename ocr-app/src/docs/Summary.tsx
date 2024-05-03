import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

export default function Summary() {
    const [select, setSelect] = useState<string | null>(null);

    const handleSelect = (
        event: React.MouseEvent<HTMLElement>,
        newSelect: string | null,
    ) => {
        setSelect(newSelect)
    }

    const category: { name: string, value: string }[] = [
        {
            name: "食",
            value: "eat"
        }, {
            name: "衣類",
            value: 'clothes'
        }, {
            name: "その他",
            value: 'other'
        }
    ]

    return (
        <Container>
            <h2>まとめ</h2>
            <ToggleButtonGroup
                value={select}
                exclusive
                onChange={handleSelect}
                aria-label="Basic button group">
                {
                    category.map((item) => {
                        return (
                            <ToggleButton value={item.value}>{item.name}</ToggleButton>
                        )
                    })
                }
            </ToggleButtonGroup>
            <br />
            {select}
        </Container>
    )
}