import { createUseStyles } from 'react-jss'

const useListItemStyles = createUseStyles({
	checkbox: {
		position: 'absolute',
		top: '50%',
		left: 15,
		transform: 'translateY(-50%)',
		marginTop: ''
	}
})

export default useListItemStyles