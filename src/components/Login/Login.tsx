import { Navigate } from "react-router-dom"
import { useSelector } from "../../hooks/redux"

export interface ILoginProps {
}

export default function Login(props: ILoginProps) {
	const isAuth = useSelector(state => state.auth.isAuth)
	if (isAuth) return <Navigate to={'/contacts'} replace={true} />
	return (
		<section>
			Login
		</section>
	)
}