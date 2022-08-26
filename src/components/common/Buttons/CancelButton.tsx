import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

const CancelButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Clear'>
		<IconButton onClick={props.onClick} size='large' aria-label='Clear'>
			<CloseIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default CancelButton