import { IconButton, Tooltip, useMediaQuery } from "@mui/material"
import { useCallback, useState } from "react"
import { device } from "../../styles/device"
import Contacts from "./Contacts/Contacts"
import useMainStyles from "./Main.styled"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useSelector } from "../../hooks/redux"
import { Navigate } from "react-router-dom"
import CardContainer from "./Card/CardContainer"

export interface IMainProps {
}
type ButtonProps = {
	onClick: () => void
}
export type StyleProps = { hidden: boolean }

export default function Main(props: IMainProps) {
	const isAuth = useSelector(state => state.auth.isAuth)
	const isMobile = !useMediaQuery(device.tabletS)
	const [hidden, setHidden] = useState(false)

	const classes = useMainStyles({ hidden })

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

	if (!isAuth) return <Navigate to={'/login'} replace={true} />
	return (
		<div className={classes.wrapper}>
			<div className={classes.border}>
				<div className='container'>
					<main className={classes.main}>
						{isMobile && <div className={classes.button}>
							<BackButton onClick={() => setHidden(false)} />
						</div>
						}
						<div className={classes.contactsBlock}>
							<Contacts hideContacts={hideContacts} isMobile={isMobile} />
						</div>
						<CardContainer />
					</main>
				</div>
			</div>
		</div>
	)
}
