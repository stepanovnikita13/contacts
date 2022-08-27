import { createUseStyles } from 'react-jss'
import { StyleProps } from './Navigation'

const useNavigationStyles = createUseStyles<'navigation', StyleProps>({
	navigation: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: ({ justifyContent = 'normal' }) => justifyContent,
		height: 'auto',
		overflow: 'hidden'
	},
})

export default useNavigationStyles