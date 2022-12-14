import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'

const LoginButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Login'>
		<IconButton {...props} aria-label='Login'>
			<LoginIcon />
		</IconButton>
	</Tooltip>
)

export default LoginButton

