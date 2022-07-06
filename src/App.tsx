import React, {useState} from 'react';
import './App.css';

function App() {
    const start = 0;
    const max = 5;

    let [counter, setCounter] = useState<number>(start);

    const addButton = () => {
        setCounter(counter+1);
    }
    const resetButton = () => {
      setCounter(start);
    }

    return (
        <div className="App">
            <div className="block">
                <div className={counter !==max? "counter": " counter number_5" } >{counter}</div>
                <div className="buttons">
                    <button disabled={counter>=max}
                            className="button"
                            onClick={addButton}
                    >inc
                    </button>
                    <button disabled={counter===start}
                            className="button"
                            onClick={resetButton}
                    >reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
