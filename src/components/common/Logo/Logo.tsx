import logo from '../../../assets/images/logo-s.png'
import { createUseStyles } from 'react-jss'

const useLogoStyles = createUseStyles({
	logo: {
		width: 150
	}
})

interface ILogoProps {
	[key: string]: any
}
export default function Logo(props: ILogoProps) {
	const classes = useLogoStyles()
	return (
		<img src={logo} {...props} className={classes.logo} />
	)
}
