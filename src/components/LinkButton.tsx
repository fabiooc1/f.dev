import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type LinkButtonProps = {
    text: string
    icon?: ReactNode
    type: 'parent' | 'target'
    to: string
    elevationAnimation?: boolean
}

export function LinkButton({ text, icon, type = 'parent', to, elevationAnimation = false }: LinkButtonProps) {
    return (
        <Link
            to={to}
            target={`_${type}`}
            className={`flex items-center gap-3 mobile:gap-1 bg-green-100 w-fit py-2 px-4 mobile:px-2 rounded-lg ${elevationAnimation ? 'hover:translate-y-2' : 'hover:bg-green-300'} transition-all`}
        >
            {icon}
            <span className="font-semibold mobile:text-sm">{text}</span>
        </Link>
    )
}