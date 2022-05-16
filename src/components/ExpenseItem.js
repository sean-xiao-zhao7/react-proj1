import "./ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <h2 className="expense-item__heading">{props.title}</h2>
            <div className="expense-item__price">$ {props.price}</div>
        </div>
    );
}
