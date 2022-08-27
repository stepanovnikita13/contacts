import { Typography } from "@mui/material"
import CancelButton from "../../../Buttons/CancelButton"
import useSelectedCounterStyles from "./SelectedCounter.styled"

export interface ISelectedCounterProps {
	onClose: () => void
	value: number
}

const SelectedCounter: React.FC<ISelectedCounterProps> = (props) => {
	const { onClose, value } = props
	const classes = useSelectedCounterStyles()
	return (
		<div className={classes.counter}>
			<CancelButton onClick={onClose} />
			<Typography>
				{`Selected ${value} contact`}
			</Typography>
		</div>
	)
}

export default SelectedCounter