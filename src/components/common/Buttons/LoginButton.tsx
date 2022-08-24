import { IconButton, Tooltip } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login'

type LoginButtonProps = {
	onClick: () => void
}
const LoginButton: React.FC<LoginButtonProps> = (props) => (
	<Tooltip title='Logout'>
		<IconButton onClick={props.onClick} aria-label='logout'>
			<LoginIcon />
		</IconButton>
	</Tooltip>
)

export default LoginButton

