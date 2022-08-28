import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

const CancelButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Cancel'>
		<IconButton {...props} size='large' aria-label='Cancel'>
			<CloseIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default CancelButton