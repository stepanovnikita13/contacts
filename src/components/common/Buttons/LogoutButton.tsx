import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout'

const LogoutButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Logout'>
		<IconButton onClick={props.onClick} aria-label='logout'>
			<LogoutIcon />
		</IconButton>
	</Tooltip>
)

export default LogoutButton