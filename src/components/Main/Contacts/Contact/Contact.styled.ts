import { createUseStyles } from 'react-jss'

const useContactNameStyles = createUseStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	check: {

	},
	textBlock: {
		paddingLeft: 15,

	},
}, { name: 'contact-item' })

export default useContactNameStyles