export interface IContact {
	id: number
	firstName: string
	lastName: string
	description: string
	phoneNumbers: {
		common: string,
		second?: string
		home?: string
		work?: string
	},
	photo: string
}