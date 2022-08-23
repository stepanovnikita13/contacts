import { createUseStyles } from 'react-jss'
import { device } from '../../styles/device'

const useMainStyles = createUseStyles({
	main: {
		paddingTop: 10,
		borderTop: [1, 'solid', 'lightgray'],
		[`@media ${device.tabletS}`]: {
			paddingTop: 15
		}
	}
}, { name: 'main' })

export default useMainStyles