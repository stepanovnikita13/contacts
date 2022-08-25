import { IconButton, Tooltip } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { EventHandler } from "react"

type MoreButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const MoreButton: React.FC<MoreButtonProps> = (props) => (
	<Tooltip title='Options'>
		<IconButton onClick={props.onClick} size='large' aria-label='Clear'>
			<MoreVertIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default MoreButton