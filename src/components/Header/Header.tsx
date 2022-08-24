import Logo from "../common/Logo/Logo"
import useHeaderStyles from "./Header.styled"
import { useSelector } from "../../hooks/redux"
import { Typography } from "@mui/material"
import LogoutButton from "../common/Buttons/LogoutButton"
import LoginButton from "../common/Buttons/LoginButton"

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
	const isAuth = useSelector(state => state.auth.isAuth)
	const classes = useHeaderStyles()
	const containerClassnames = [
		classes.container,
		'container'
	].join(' ')

	return (
		<header className={containerClassnames}>
			<div>
				<Logo />
			</div>
			<div className={classes.auth}>
				<Typography>{isAuth ? 'Logout' : 'Login'}</Typography>
				{isAuth
					? <LogoutButton onClick={() => { }} />
					: <LoginButton onClick={() => { }} />
				}
			</div>
		</header>
	)
}	