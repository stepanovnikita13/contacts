import Logo from "../common/Logo/Logo"
import useHeaderStyles from "./Header.styled"
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Tooltip } from "@mui/material";

export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
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
				<div>Logout</div>
				<Tooltip title='logout'>
					<IconButton>
						<LogoutIcon />
					</IconButton>
				</Tooltip>
			</div>
		</header>
	)
}	