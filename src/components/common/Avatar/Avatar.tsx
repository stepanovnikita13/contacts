import { Avatar, AvatarProps } from '@mui/material';
import { stringToColor } from '../../../utils/helpers';

interface CustomAvatar extends AvatarProps {
	name: string
}
function stringAvatar(name: string) {
	return `${name.split(' ').map(w => w.charAt(0)).join('')}`
}

const CustomAvatar: React.FC<CustomAvatar> = ({ sx, name, ...props }) => {
	return (
		<Avatar
			{...props}
			children={stringAvatar(name)}
			sx={{
				bgcolor: stringToColor(name),
				...sx
			}}
		/>
	)
}

export default CustomAvatar