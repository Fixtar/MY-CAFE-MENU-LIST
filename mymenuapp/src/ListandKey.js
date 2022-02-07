import React from "react";

function ListItem(props) {
    return (
        <li>
            {props.value}
        </li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    const ListItems = numbers.map((number) =>
        <ListItem value={number} key={number.toString()} />
    );

    return (
        <ul>
            {ListItems}
        </ul>
    );
}

export default NumberList;