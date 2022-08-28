import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'

const AddButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Add'>
		<IconButton {...props} size='large' aria-label='Add'>
			<AddIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default AddButton