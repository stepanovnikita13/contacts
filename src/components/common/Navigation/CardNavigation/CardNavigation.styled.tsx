import { createUseStyles } from 'react-jss'

const useCardNavigationStyles = createUseStyles({
	wrapper: {
		position: 'relative',
	},
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		display: 'flex',
		flexDirection: 'row-reverse'
	}
}, { name: 'card-navigation' })

export default useCardNavigationStyles