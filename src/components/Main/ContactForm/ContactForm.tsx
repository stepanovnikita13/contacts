import { TextField } from "@mui/material"
import { useEffect, useMemo } from "react"
import { Controller, FieldPath, SubmitHandler, useForm } from "react-hook-form"
import { IContact, TNewContact } from "../../../types/types"
import CancelButton from "../../common/Buttons/CancelButton"
import SuccessButton from "../../common/Buttons/SuccessButton"
import Navigation from "../../common/Navigation/Navigation"
import useCardFormStyles from "./ContactForm.styled"

export interface IContactFormProps {
	contact?: IContact
	onSubmit?: (data: TNewContact) => void
	onClose?: () => void
}

const ContactForm: React.FC<IContactFormProps> = (props) => {
	const { contact, onSubmit, onClose } = props
	const newContactDefaultValues: TNewContact = { //Because form includes controlled inputs
		firstName: '',
		lastName: '',
		description: '',
		phoneNumbers: {
			common: '',
			second: '',
			home: '',
			work: ''
		},
		photo: ''
	}
	const defaultValues = contact ?? newContactDefaultValues
	const { register, handleSubmit, reset, control, getValues, formState: { errors } } = useForm<IContact>({
		defaultValues: useMemo(() => {
			return defaultValues
		}, [defaultValues])
	})

	const classes = useCardFormStyles()

	useEffect(() => {
		reset(defaultValues)
		// eslint-disable-next-line
	}, [contact])

	const onSubmitForm: SubmitHandler<IContact> = data => {
		if (onSubmit) onSubmit(data)
	}
	type TControlledInput = { name: FieldPath<TNewContact>; required?: boolean;[key: string]: any }
	const ControlledInput: React.FC<TControlledInput> = ({ name, required, ...props }) => {
		return (
			<Controller
				control={control}
				name={name}
				render={({ field: { value } }) => (
					<TextField
						required={required}
						{...props}
						value={value}
						margin='dense'
						size='small'
						{...register(name, { required })}
					/>
				)}
			/>
		)
	}
	return (
		<form className={classes.form} onSubmit={handleSubmit(onSubmitForm)} >
			<Navigation justifyContent='flex-end'>
				<SuccessButton onClick={handleSubmit(onSubmitForm)} />
				{onClose && <CancelButton onClick={onClose} />}
			</Navigation>
			<ControlledInput
				name="firstName"
				required
				id='firstName'
				label='First name'
				error={!!errors.firstName}
			/>
			<ControlledInput
				name="lastName"
				id='lastName'
				label='Last name'
			/>
			<ControlledInput
				name="description"
				id='description'
				label='Description'
			/>
			<ControlledInput
				name="phoneNumbers.common"
				id='commonNumber'
				label='Common number'
				required
				error={!!errors.phoneNumbers?.common}
			/>
			{Object.entries(getValues().phoneNumbers).map((item, index) => {
				const type = item[0]
				if (type === 'common') return null
				return (
					<ControlledInput
						key={index}
						name={(`phoneNumbers.${type}`) as FieldPath<TNewContact>}
						id={`${type}Number`}
						label={`${type.charAt(0).toUpperCase() + type.slice(1)} number`}
					/>
				)
			})}
			<ControlledInput
				name="photo"
				id='photo'
				label='Photo URL'
			/>
		</form>
	)
}

export default ContactForm