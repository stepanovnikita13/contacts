import { Fade, Menu } from "@mui/material"
import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useState } from "react";
import MoreButton from "../Buttons/MoreButton"

export interface IMoreMenuProps {
	children: ReactNode
}

const MoreMenu: React.FC<IMoreMenuProps> = ({ children }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null)

	}
	function handleClickChild(child: ReactElement) {
		setAnchorEl(null)
		child.props.onClick()
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
				{Children.map<ReactNode, ReactNode>(children, child => {
					if (isValidElement(child))
						return cloneElement(child as ReactElement, { onClick: () => handleClickChild(child) })
				})}
			</Menu>
		</div>
	)
}

export default MoreMenu