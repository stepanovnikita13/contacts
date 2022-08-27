import { createUseStyles } from 'react-jss'
import { StyleProps } from './CardContainer'

const useCardContainerStyles = createUseStyles({
	container: {
		flex: 1,
	},
	inner: {
	},
	cardWrapper: {
		marginTop: -60,

	},
}, { name: 'card-container' })

export default useCardContainerStyles