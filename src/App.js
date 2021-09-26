import './App.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import Navigator from './Pages/Navigator';

function App() {
    return (
        <BrowserRouter>
            <Navigator/>
        </BrowserRouter>
    );
}

export default App;
