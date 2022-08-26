import jsonServer from 'json-server'
import jwt from 'jsonwebtoken'
import fs from 'fs-extra'
import { IDataBase } from './types'
import type { Response } from 'express'

const server = jsonServer.create()
const router = jsonServer.router('server/db.json')
const middlewares = jsonServer.defaults()
const db: IDataBase = JSON.parse(fs.readFileSync('server/db.json', 'utf-8'))

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ?? 'MySecretKey'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '1h'

type ResultCode = 0 | 1
type ResponseData<D> = {
	resultCode: ResultCode
	message: null | string
	data: D
}
type LoginData = {
	accessToken: null | string
}

server.use(jsonServer.bodyParser)
server.use(middlewares)

function isLoginAuth(username: string, password: string) {
	return db.auth.username === username && db.auth.password === password
}

server.post('/auth/login', (req, res: Response<ResponseData<LoginData>>) => {
	const payload: { username: string; password: string } = { username: req.body.username, password: req.body.password }

	const isAuth = isLoginAuth(payload.username, payload.password)
	let resultCode: ResultCode

	if (isAuth) {
		resultCode = 1
		const accessToken = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRES_IN })
		res.status(200).json({ resultCode, message: null, data: { accessToken } })
		router.db.get("auth")
	} else {
		resultCode = 0
		const message = 'Incorrect username or password'
		res.status(401).json({ resultCode, message, data: { accessToken: null } })
	}
})

server.use(/^(?!\/auth\/login).*$/, (req, res: Response<ResponseData<null>>, next) => {
	let resultCode: ResultCode
	const data = null
	if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
		const status = 401;
		resultCode = 0
		const message = 'Error in authorization format';
		res.status(status).json({ resultCode, message, data });
		return;
	}
	try {
		const token = req.headers.authorization.split(' ')[1];
		const verifyTokenResult = jwt.verify(token, JWT_SECRET_KEY, (err, decode) => (decode !== undefined ? decode : err)) as any;

		if (verifyTokenResult instanceof Error) {
			const status = 401;
			resultCode = 0
			const message = 'Access token not provided';
			res.status(status).json({ resultCode, message, data });
			return;
		}
		next();
	} catch (err) {
		const status = 401;
		resultCode = 0
		const message = 'Error access_token is revoked';
		res.status(status).json({ resultCode, message, data });
	}
});

server.get('/auth/me', (req, res: Response<ResponseData<null>>) => {
	res.status(200).json({ resultCode: 1, message: 'Success! You are logged in', data: null })
})

server.use(router)
server.listen(8080, () => {
	console.log('JSON Server is running')
})