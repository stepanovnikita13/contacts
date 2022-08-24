import { createUseStyles } from 'react-jss'

const useContactCardStyles = createUseStyles({
	card: {
		flex: 1,
		paddingTop: 10,
	},
	header: {
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center',

	}
}, { name: 'card' })

export default useContactCardStyles