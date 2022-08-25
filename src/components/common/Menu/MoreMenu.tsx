import { Fade, Menu, MenuItem } from "@mui/material"
import { useState } from "react";
import MoreButton from "../Buttons/MoreButton"

export type Field = {
	[key: string]: () => void
}
export interface IMoreMenuProps {
	fields: Array<Field>
}

const MoreMenu: React.FC<IMoreMenuProps> = ({ fields }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (fn: () => void) => {
		setAnchorEl(null);
	}
	const handleClickItem = (fn: () => void) => {
		setAnchorEl(null)
		fn()
	}
	return (
		<div>
			<MoreButton
				onClick={handleClick}
			/>
			<Menu
				id="fade-menu"
				MenuListProps={{
					'aria-labelledby': 'fade-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				{fields.map((item, index) => {
					const name = Object.entries(item)[0][0]
					const fn = Object.entries(item)[0][1]
					return (
						<MenuItem key={index} onClick={() => handleClickItem(fn)}>{name}</MenuItem>
					)
				})}
			</Menu>
		</div>
	)
}

export default MoreMenu