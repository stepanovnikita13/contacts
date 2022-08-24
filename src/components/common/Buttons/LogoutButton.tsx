import { IconButton, Tooltip } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout'

type LogoutButtonProps = {
	onClick: () => void
}
const LogoutButton: React.FC<LogoutButtonProps> = (props) => (
	<Tooltip title='Logout'>
		<IconButton onClick={props.onClick} aria-label='logout'>
			<LogoutIcon />
		</IconButton>
	</Tooltip>
)

export default LogoutButton