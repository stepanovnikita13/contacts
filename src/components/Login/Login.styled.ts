import { createUseStyles } from 'react-jss'
import { device } from '../../styles/device'

const useLoginStyles = createUseStyles({
	wrapper: {
		backgroundColor: '#f9cc0b',
	},
	login: {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	formWrapper: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#fff',
		borderRadius: 15,
		padding: 30,
		'@global': {
			form: {
				flex: 1
			}
		},
		[`@media ${device.tabletS}`]: {
			width: 430
		}
	}
}, { name: 'login' })

export default useLoginStyles