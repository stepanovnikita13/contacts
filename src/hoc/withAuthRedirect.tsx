import React from 'react'

export default function withAuthRedirect<P>(Component: React.ComponentType<P>) {
	const WrappedComponent: React.FC<P> = (props) => {

		return <Component {...props as P} />
	}

	WrappedComponent.displayName = `withAuthRedirect(${getDisplayName(Component)})`

	function getDisplayName(Component: React.ComponentType<P>) {
		return Component.displayName || Component.name || 'Component'
	}

	return WrappedComponent
}