import { IconButton, Tooltip, useMediaQuery } from "@mui/material"
import { useCallback, useState } from "react"
import { device } from "../../styles/device"
import ContactCard from "./ContactCard/ContactCard"
import Contacts from "./Contacts/Contacts"
import useMainStyles from "./Main.styled"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ContactsContainer from "./Contacts/ContactsContainer"

export interface IMainProps {
}
type ButtonProps = {
	onClick: () => void
}
export type StyleProps = { hidden: boolean }

export default function Main(props: IMainProps) {
	const isMobile = !useMediaQuery(device.tabletS)
	const [hidden, setHidden] = useState(false)

	const classes = useMainStyles({ hidden })
	const mainClassNames = [
		classes.main,
		!isMobile && 'container'
	].join(' ')


	const BackButton = (props: ButtonProps) => {
		return (
			<Tooltip title='Go back'>
				<IconButton onClick={props.onClick} size='large'>
					<ArrowBackIcon fontSize='inherit' />
				</IconButton>
			</Tooltip>
		)
	}

	const hideContacts = useCallback(() => {
		isMobile && setHidden(true)
	}, [])
	return (
		<div className={classes.wrapper}>
			<main className={mainClassNames}>
				{isMobile && <div className={classes.button}>
					<BackButton onClick={() => setHidden(false)} />
				</div>
				}
				<div className={classes.contactsBlock}>
					<ContactsContainer hideContacts={hideContacts} isMobile={isMobile} />
				</div>
				<ContactCard isMobile={isMobile} />
			</main>
		</div>
	)
}
