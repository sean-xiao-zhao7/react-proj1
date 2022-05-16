import "./sass/App.scss";

// components
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            date: new Date(),
            title: "Ex officia cillum aute proident ad amet sit ipsum eu pariatur reprehenderit nostrud enim.",
            price: 123.32,
        },
        {
            date: new Date(),
            title: "2 Ex officia cillum aute proident ad amet sit ipsum eu pariatur reprehenderit nostrud enim.",
            price: 223.32,
        },
        {
            date: new Date(),
            title: "3 Ex officia cillum aute proident ad amet sit ipsum eu pariatur reprehenderit nostrud enim.",
            price: 323.32,
        },
        {
            date: new Date(),
            title: "4 Ex officia cillum aute proident ad amet sit ipsum eu pariatur reprehenderit nostrud enim.",
            price: 423.32,
        },
    ];
    return (
        <div className="App">
            <h1>Your expenses</h1>
            {expenses.map((e) => (
                <ExpenseItem
                    date={e.date}
                    title={e.title}
                    price={e.price}
                    key={e.date + e.title}
                ></ExpenseItem>
            ))}
        </div>
    );
}

export default App;
