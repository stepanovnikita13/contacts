import Logo from "../common/Logo/Logo"
import useHeaderStyles from "./Header.styled"
import { useDispatch, useSelector } from "../../hooks/redux"
import { Slide, Typography, useScrollTrigger } from "@mui/material"
import LogoutButton from "../common/Buttons/LogoutButton"
import LoginButton from "../common/Buttons/LoginButton"
import { login, logout } from "../../redux/slices/authSlice"

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
	const isAuth = useSelector(state => state.auth.isAuth)
	const dispatch = useDispatch()
	const trigger = useScrollTrigger()

	const classes = useHeaderStyles()
	const containerClassnames = [
		classes.container,
		'container'
	].join(' ')

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			<div className={classes.wrapper}>
				<header className={containerClassnames}>
					<div>
						<Logo />
					</div>
					<div className={classes.auth}>
						{isAuth && <LogoutButton onClick={() => dispatch(logout())} />}
					</div>
				</header>
			</div>
		</Slide>
	)
}	