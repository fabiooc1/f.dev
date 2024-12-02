import { ReactNode } from "react"

type AppPadingProps = {
    children: ReactNode
    className?: string
}

export function AppPading({ children, className: css }: AppPadingProps) {
    return (
        <div className={`px-20 tablet:px-10 mobile:px-4 ${css}`}>
            {children}
        </ div>
    )
}