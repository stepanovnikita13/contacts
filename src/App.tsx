import { Navigate, Route, Routes } from "react-router-dom"
import useAppStyles from "./App.styled"
import Header from "./components/Header/Header"
import Login from "./components/Login/Login"
import NotFound from "./components/NotFound/NotFound"
import Main from "./components/Main/Main"
import useGlobalStyles from "./styles/globalStyles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "./hooks/redux"
import { authMe } from "./redux/slices/authSlice"

const App = () => {
	const dispatch = useDispatch()
	const initialized = useSelector(state => state.auth.initialized)

	useGlobalStyles()
	const classes = useAppStyles()

	useEffect(() => {
		if (!initialized) {
			dispatch(authMe())
		}
	}, [initialized])

	if (!initialized) return null
	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Header />
				<Routes>
					<Route path='/' element={<Navigate to='contacts' replace={true} />} />
					<Route path='contacts' element={<Main />} />
					<Route path='login' element={<Login />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
