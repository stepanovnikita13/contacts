import { IconButton, IconButtonProps, Tooltip } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { EventHandler } from "react"

const MoreButton: React.FC<IconButtonProps> = (props) => (
	<Tooltip title='Options'>
		<IconButton onClick={props.onClick} size='large' aria-label='Clear'>
			<MoreVertIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default MoreButton