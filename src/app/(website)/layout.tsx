import type { PropsWithChildren } from 'react'

export default function AppLayoutContainer({ children }: PropsWithChildren) {
	return (
		<>
			<div>{children}</div>
		</>
	)
}
