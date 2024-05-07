import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard, Orders } from './components/pages'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/orders' element={<Orders />} />
			</Routes>
		</div>
	)
}

export default App
