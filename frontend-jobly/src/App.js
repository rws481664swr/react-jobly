import NavBar from './components/navigation/Navbar'
import AppRoutes from './components/navigation/Routes'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/journal/bootstrap.min.css'
import './App.css';

const App = () =>
    <div className="App">
        <NavBar/>
        <AppRoutes/>
    </div>

export default App;
