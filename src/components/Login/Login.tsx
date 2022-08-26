import { Button, TextField, Typography } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "../../hooks/redux"
import { login } from "../../redux/slices/authSlice"
import useLoginStyles from "./Login.styled"

export interface ILoginProps {
}
type Inputs = {
	username: string
	password: string
}

export default function Login(props: ILoginProps) {
	const isAuth = useSelector(state => state.auth.isAuth)
	const errorMessage = useSelector(state => state.auth.error)
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
	const dispatch = useDispatch()

	const classes = useLoginStyles()
	const loginClassNames = [
		classes.login,
		'container'
	].join(' ')

	const onSubmit: SubmitHandler<Inputs> = data => dispatch(login(data))

	if (isAuth) return <Navigate to={'/'} replace={true} />
	return (
		<div className={classes.wrapper} >
			<section className={loginClassNames}>
				<div className={classes.formWrapper}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							required
							error={!!errorMessage}
							id='Username'
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
				</div>
			</section>
		</div>
	)
}