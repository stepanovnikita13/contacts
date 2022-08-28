import { createUseStyles } from 'react-jss'
import { device } from '../../styles/device'
import { StyleProps } from './Main'

const useMainStyles = createUseStyles({
	wrapper: {
		paddingTop: 50,
		[`@media ${device.tabletS}`]: {
			paddingTop: 60
		}
	},
	border: {
		borderTop: [1, 'solid', 'lightgray'],
	},
	main: {
		display: 'flex',
		flexFlow: 'row nowrap',
		paddingTop: 10,
	},
	button: {
		position: 'fixed',
		zIndex: 5,
		paddingTop: 5
	},
	contactsBlock: ({ hidden }: StyleProps) => ({
		position: 'absolute',
		left: 0,
		right: 0,
		display: 'flex',
		flexFlow: 'column nowrap',
		height: 'calc(100vh - 80px)',
		transform: hidden ? 'translateX(-100%)' : 'translateX(0)',
		transition: 'transform .2s ease',
		backgroundColor: '#fff',
		zIndex: 10,
		[`@media ${device.tabletS}`]: {
			position: 'static',
			flex: [0, 1, '360px']
		},
		[`@media ${device.laptopS}`]: {
			flex: '0 1 440px'
		},
	}),

}, { name: 'main' })

export default useMainStyles