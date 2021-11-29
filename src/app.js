import ReactDOM from "react-dom";

function App() {
    return <>
        <div class="container">
            <h1 class="title">Lucky Lottery Numbers</h1>
            <div class="balls">
            </div>
            <div class="drowning">
                <button class="generator">Generate numbers</button>
                <button class="generator next hide">Next</button>
            </div>
            <div class="results">
            </div>
        </div>
    </>
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);