import { createUseStyles } from 'react-jss'
import { device } from '../../styles/device'
import { StyleProps } from './Main'

const useMainStyles = createUseStyles({
	wrapper: {
		borderTop: [1, 'solid', 'lightgray'],
	},
	main: {
		display: 'flex',
		flexFlow: 'row nowrap',
		paddingTop: 10,
		[`@media ${device.tabletS}`]: {
			paddingTop: 15
		}
	},
	button: {
		position: 'fixed',
		zIndex: 5
	},
	contactsBlock: ({ hidden }: StyleProps) => ({
		width: '100%',
		position: 'absolute',
		paddingTop: 10,
		transform: hidden ? 'translateX(-100%)' : 'translateX(0)',
		transition: 'transform .2s ease',
		backgroundColor: '#fff',
		zIndex: 10,
		[`@media ${device.tabletS}`]: {
			position: 'static',
			flex: [0, 1, '320px']
		},
		[`@media ${device.laptopS}`]: {
			flex: '0 1 400px'
		},
	}),

}, { name: 'main' })

export default useMainStyles