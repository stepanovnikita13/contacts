import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'

const useContactsStyles = createUseStyles({
	container: {

	},
	navigation: {
		display: 'flex',
		alignItems: 'center',
		height: 40
	},
	list: {
		display: 'flex',
		flexFlow: 'column nowrap',
		rowGap: 10
	}
}, { name: 'contacts' })

export default useContactsStyles