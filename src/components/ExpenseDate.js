export default function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    return (
        <div className="expense-item__date">
            {month + " " + day + ", " + year}
        </div>
    );
}
