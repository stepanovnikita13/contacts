import { createUseStyles } from 'react-jss'
import { device } from '../../styles/device'
import { StyleProps } from './Main'

function getPaddingTop() {
	return document.getElementsByTagName('header').item(0)?.offsetHeight
}

const useMainStyles = createUseStyles({
	wrapper: {
		paddingTop: 50,
		[`@media ${device.tabletS}`]: {
			paddingTop: 60
		}
	},
	container: {

	},
	main: {
		display: 'flex',
		flexFlow: 'row nowrap',
		borderTop: [1, 'solid', 'lightgray'],
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
			flex: [0, 1, '360px']
		},
		[`@media ${device.laptopS}`]: {
			flex: '0 1 440px'
		},
	}),

}, { name: 'main' })

export default useMainStyles