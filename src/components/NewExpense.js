import { useState } from "react";

import "./NewExpense.scss";

const NewExpense = (props) => {
    

    return (
        <div className="new-expense">
            <form>
                <div className="form-control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <input type="date" min="2010-01-01" max="2023-01-01" />
                </div>
                <button>Add</button>
            </form>
        </div>
    );
};

export default NewExpense;
