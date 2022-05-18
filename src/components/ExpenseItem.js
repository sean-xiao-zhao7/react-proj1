import { useState } from "react";

import "./ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
    // eslint-disable-next-line
    const [title, setTitle] = useState(props.title);

    const onClickHandler = () => {
        console.log(title);
    };

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <h2 className="expense-item__heading">{props.title}</h2>
            <div className="expense-item__price">$ {props.price}</div>
            <button className="margin-small" onClick={onClickHandler}>
                Change title
            </button>
        </div>
    );
}
