import { TextField } from "@mui/material"
import { useEffect, useMemo } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { IContact } from "../../../types/types"
import CancelButton from "../../common/Buttons/CancelButton"
import SuccessButton from "../../common/Buttons/SuccessButton"
import Navigation from "../../common/Navigation/Navigation"
import useCardFormStyles from "./ContactForm.styled"

export interface IContactFormProps {
	contact?: IContact
	onSubmit?: () => void
	onClose?: () => void
}

const ContactForm: React.FC<IContactFormProps> = (props) => {
	const { contact, onSubmit, onClose } = props
	const { register, handleSubmit, reset, control } = useForm<IContact>({
		defaultValues: useMemo(() => {
			return contact
		}, [contact])
	})

	const classes = useCardFormStyles()

	useEffect(() => {
		reset(contact)
	}, [contact])

	const onSubmitForm: SubmitHandler<IContact> = data => {
		if (onSubmit) onSubmit()
	}
	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmitForm)} >
			<Navigation justifyContent='flex-end'>
				<SuccessButton onClick={handleSubmit(onSubmitForm)} />
				{onClose && <CancelButton onClick={onClose} />}
			</Navigation>

			<Controller
				control={control}
				name='firstName'
				render={({ field: { value } }) => (
					<TextField
						error={false}
						id='firstName'
						label='First name'
						margin='dense'
						size='small'
						value={value}
						{...register('firstName')}
					/>
				)}
			/>
			<Controller
				control={control}
				name='lastName'
				render={({ field: { value } }) => (
					<TextField
						error={false}
						id='lastName'
						label='Last name'
						margin='dense'
						size='small'
						value={value}
						{...register('lastName')}
					/>
				)}
			/>
			<Controller
				control={control}
				name='description'
				render={({ field: { value } }) => (
					<TextField
						error={false}
						id='description'
						label='Description'
						margin='dense'
						size='small'
						value={value}
						{...register('description')}
					/>
				)}
			/>
			<Controller
				control={control}
				name='phoneNumbers.common'
				render={({ field: { value } }) => (
					<TextField
						required
						error={false}
						id='commonNumber'
						label='Number'
						margin='dense'
						size='small'
						value={value}
						{...register('phoneNumbers.common')}
					/>
				)}
			/>
			<Controller
				control={control}
				name='photo'
				render={({ field: { value } }) => (
					<TextField
						error={false}
						id='photo'
						label='Photo URL'
						margin='dense'
						size='small'
						value={value}
						{...register('photo')}
					/>
				)}
			/>
		</form>
	)
}

export default ContactForm