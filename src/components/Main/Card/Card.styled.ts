import { createUseStyles } from 'react-jss'

const useContactCardStyles = createUseStyles({
	card: {
	},
	cardWrapper: {
		marginTop: -60,
	},
	header: {
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contact: {
		paddingTop: 40,
		fontSize: '1.1em',
		'& > div:not(:last-child)': {
			marginBottom: 20,
		},
		'& > div': {
			display: 'flex',
			alignItems: 'center',
			columnGap: 15
		}
	},
}, { name: 'card' })

export default useContactCardStyles