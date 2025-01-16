import appStore from './utils/appStore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import Feed from './components/Feed'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
	return (
		<Provider store={appStore}>
			<BrowserRouter basename='/'>
				<Routes>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Body />
							</ProtectedRoute>
						}
					>
						<Route path='/login' element={<Login />} />
						<Route path='/' element={<Feed />} />
						<Route path='/profile' element={<Profile />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
