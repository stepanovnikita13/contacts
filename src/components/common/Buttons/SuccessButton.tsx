import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import DoneIcon from '@mui/icons-material/Done'

const SuccessButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Success'>
		<IconButton {...props} size='large' aria-label='Success'>
			<DoneIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default SuccessButton