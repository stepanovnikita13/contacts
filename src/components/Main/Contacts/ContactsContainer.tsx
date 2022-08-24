import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "../../../hooks/redux";
import Contacts from "./Contacts";


export interface IContactsContainerProps {
}
export interface IContactsProps {
	hideContacts: () => void
	isMobile: boolean
}

const ContactsContainer: React.FC<IContactsContainerProps & IContactsProps> = React.memo((props) => {
	const isAuth = useSelector(state => state.auth.isAuth)

	if (!isAuth) return <Navigate to={'/login'} replace={true} />
	return (
		<Contacts {...props} />
	)
})

export default ContactsContainer