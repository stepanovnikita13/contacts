import { useMedia } from "../../hooks/hooks"
import { device } from "../../styles/device"
import ContactCard from "./ContactCard/ContactCard"
import Contacts from "./Contacts/Contacts"
import useMainStyles from "./Main.styled"

export interface IMainProps {
}

export default function Main(props: IMainProps) {
	const classes = useMainStyles()
	const isMobile = useMedia([device.laptopS], [false], true)

	return (
		<main className={classes.main}>
			<Contacts />
			<ContactCard />
		</main>
	)
}
