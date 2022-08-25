import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'

const useContactsStyles = createUseStyles({
	container: {

	},
	navigation: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 40
	},
	selectedCounter: {
		display: 'flex',
		alignItems: 'center',
	},
	list: {
		paddingTop: 10
	},
}, { name: 'contacts' })

export default useContactsStyles