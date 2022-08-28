export interface IContact {
	id: number
	firstName: string
	lastName: string
	description: string
	phoneNumbers: TNumbers,
	photo: string
}

export type TNumbers = {
	common: string,
	second?: string
	home?: string
	work?: string
}
export type TNewContact = Omit<IContact, 'id'>