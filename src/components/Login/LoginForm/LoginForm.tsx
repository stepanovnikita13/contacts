import { Button, TextField, Typography } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from '../../../hooks/redux'
import { login } from "../../../redux/slices/authSlice"

export interface ILoginFormProps {
}
type Inputs = {
	username: string
	password: string
}
const LoginForm: React.FC<ILoginFormProps> = props => {
	const { register, handleSubmit } = useForm<Inputs>()
	const errorMessage = useSelector(state => state.auth.error)
	const dispatch = useDispatch()

	const onSubmit: SubmitHandler<Inputs> = data => dispatch(login(data))
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField
				required
				error={!!errorMessage}
				id='username'
				label='Username'
				fullWidth
				margin='normal'
				autoComplete="username"
				{...register('username')}
			/>
			<TextField
				required
				error={!!errorMessage}
				id='Password'
				label='Password'
				type='password'
				fullWidth
				margin='normal'
				autoComplete="current-password"
				{...register('password')}
			/>
			{errorMessage && <Typography color='error'>{errorMessage}</Typography>}
			<Button
				className=""
				type={'submit'}
				fullWidth
				size="large"
			>Login
			</Button>
		</form>
	)
}

export default LoginForm