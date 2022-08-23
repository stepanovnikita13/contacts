import { createUseStyles } from 'react-jss'

const useContactsStyles = createUseStyles({
	container: {
		position: 'absolute',
		backgroundColor: '#fff'
	},
	list: {
		display: 'flex',
		flexFlow: 'column nowrap',
		rowGap: 10
	}
}, { name: 'contacts' })

export default useContactsStyles