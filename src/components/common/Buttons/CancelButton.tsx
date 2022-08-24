import { IconButton, Tooltip } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'

type CancelButtonProps = {
	onClick: () => void
}
const CancelButton: React.FC<CancelButtonProps> = (props) => (
	<Tooltip title='Clear'>
		<IconButton onClick={props.onClick} size='large' aria-label='Clear'>
			<CloseIcon fontSize='inherit' />
		</IconButton>
	</Tooltip>
)

export default CancelButton