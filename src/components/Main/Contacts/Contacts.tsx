import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Contact from './Contact/Contact'
import useContactsStyles from './Contacts.styled'

export interface IContactsProps {
}

const isAuth = true

export default function Contacts(props: IContactsProps) {
	const [isContactFocused, setIsContactFocused] = useState(false)
	const [hidden, setHidden] = useState(false)
	const classes = useContactsStyles()
	const containerClassNames = [
		classes.container,
		'container'
	].join(' ')

	if (!isAuth) return <Navigate to={'/login'} replace={true} />
	return (
		<div className={containerClassNames}>
			<div>
				search and add contact
			</div>
			<div className={classes.list}>
				<Contact
					isContactFocused={isContactFocused}
					setIsContactFocused={setIsContactFocused}
					setHidden={setHidden}
				/>
				<Contact
					isContactFocused={isContactFocused}
					setIsContactFocused={setIsContactFocused}
					setHidden={setHidden}
				/>
				<Contact
					isContactFocused={isContactFocused}
					setIsContactFocused={setIsContactFocused}
					setHidden={setHidden}
				/>
			</div>
		</div>
	)
}
