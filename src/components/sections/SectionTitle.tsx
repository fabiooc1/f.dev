type SectionTitleProps = {
    title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h1 className="font-extrabold text-7xl tablet:text-6xl mobile:text-5xl text-center">{title}</h1>
    )
}