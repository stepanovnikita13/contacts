import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'

const useContactsStyles = createUseStyles({
	scrolled: {
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
	},
	list: {
		overflow: 'hidden auto',
		display: 'flex',
		flexDirection: 'column',
		flex: '1 1 100%',
		'&::-webkit-scrollbar': {
			width: 5
		}
	},
}, { name: 'contacts' })

export default useContactsStyles