import { createUseStyles } from 'react-jss'
import { device } from '../../styles/device'

const useHeaderStyles = createUseStyles({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: "center",
		height: 50,
		[`@media ${device.tabletS}`]: {
			height: 60
		},
	},
	auth: {
		display: 'flex',
		alignItems: 'center',
		columnGap: 5
	}
}, { name: 'header' })

export default useHeaderStyles