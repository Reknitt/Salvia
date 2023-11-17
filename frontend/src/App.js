import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { Container } from 'react-bootstrap';


function App() {
    return (
		<Router>
    		<Header />
			<Container>
				<Routes>
					<Route path='/' element={<HomeScreen />} exact />
					<Route path='/login' element={<LoginScreen />} exact />
					<Route path='/register' element={<RegisterScreen />} exact />
				</Routes>
			</Container>
		</Router>
    );
}

export default App;
