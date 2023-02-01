import './App.css';
import {GlobalContextProvider} from "./context";
import NavBar from './components/navigation/Navbar'
import Routes from './components/navigation/Routes'

function App() {
    return (

        <div className="App">
            <NavBar/>
            <Routes/>
        </div>
    );
}

export default App;
