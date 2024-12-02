import { ReactNode } from "react"

type SectionContainerProps = {
    id: string,
    children: ReactNode
}

export function SectionContainer({
    id,
    children
}: SectionContainerProps) {
    return (
        <section id={id} className="min-h-screen flex py-8 gap-5 flex-col justify-around">
            {children}
        </section>
    )
}