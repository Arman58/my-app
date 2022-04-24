import React from 'react';
import './Styles/App.scss';
import Main from "./Components";
import {CheckboxProvider} from "./context/CheckboxContext";

function App() {
    return (
        <div className="App">
            <CheckboxProvider>
            <Main/>
            </CheckboxProvider>
        </div>
    );
}

export default App;
