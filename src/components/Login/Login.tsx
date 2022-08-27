import { Navigate } from "react-router-dom"
import { useSelector } from "../../hooks/redux"
import useLoginStyles from "./Login.styled"
import LoginForm from "./LoginForm/LoginForm"

export interface ILoginProps {
}

export default function Login(props: ILoginProps) {
	const isAuth = useSelector(state => state.auth.isAuth)

	const classes = useLoginStyles()
	const loginClassNames = [
		classes.login,
		'container'
	].join(' ')

	if (isAuth) return <Navigate to={'/'} replace={true} />
	return (
		<div className={classes.wrapper} >
			<section className={loginClassNames}>
				<div className={classes.formWrapper}>
					<LoginForm />
				</div>
			</section>
		</div>
	)
}