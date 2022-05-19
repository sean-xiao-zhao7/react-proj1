import { useState } from "react";

import "./NewExpense.scss";

const NewExpense = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    return (
        <div className="new-expense">
            <form>
                <div className="form-control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2010-01-01"
                        max="2023-01-01"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <button>Add</button>
            </form>
        </div>
    );
};

export default NewExpense;
