import { createUseStyles } from "react-jss"
import '@fontsource/roboto/400.css'
import { device } from "./device"

const useGlobalStyles = createUseStyles({
	'@global': {
		body: {
			color: '#2b2b2b',
			backgroundColor: '#fff',
			fontSize: '1em',
			lineHeight: 1,
			fontFamily: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
				'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
			WebkitFontSmoothing: 'antialiased',
			MozOsxFontSmoothing: 'grayscale',
		},
		'.container': {
			width: "100%",
			minWidth: 320,
			padding: [0, 10],
			[`@media ${device.tabletS}`]: {
				padding: [0, 15]
			},
			[`@media ${device.laptopS}`]: {
				maxWidth: 1200,
				margin: [0, "auto"],
				padding: 0
			},
		},
		'.items-center': {
			display: 'flex',
			alignItems: 'center'
		}
	}
})

export default useGlobalStyles