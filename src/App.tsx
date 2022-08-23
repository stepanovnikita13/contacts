import { Navigate, Route, Routes } from "react-router-dom"
import useAppStyles from "./App.styled"
import Header from "./components/Header/Header"
import Login from "./components/Login/Login"
import NotFound from "./components/NotFound/NotFound"
import Main from "./components/Main/Main"
import useGlobalStyles from "./styles/globalStyles"

const App = () => {
	useGlobalStyles()
	const classes = useAppStyles()

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
