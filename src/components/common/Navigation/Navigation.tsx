import { useMediaQuery } from "@mui/material"
import { device } from "../../../styles/device"
import useNavigationStyles from "./Navigation.styled"

export type JustifyContent = 'normal' | 'center' | 'start' | 'end' |
	'flex-start' | 'flex-end' | 'left' | 'right' | 'stretch' |
	'space-between' | 'space-around' | 'space-evenly' | undefined

export interface INavigationProps {
	children: React.ReactNode
	justifyContent?: JustifyContent
}
export type StyleProps = {
	justifyContent: JustifyContent
}

const Navigation: React.FC<INavigationProps> = ({ children, justifyContent }) => {
	const isMobile = !useMediaQuery(device.tabletS)
	const classes = useNavigationStyles({ justifyContent })
	const navigationClassNames = [
		classes.navigation,
	].join(' ')

	return (
		<div className={navigationClassNames} >
			{children}
		</div>
	)
}

export default Navigation