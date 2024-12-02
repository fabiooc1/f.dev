const navLinks = [
    {
        name: 'sobre mim',
        to: '#about-me',
    },
    {
        name: 'jornada',
        to: '#journey',
    },
    {
        name: 'projetos',
        to: '#projects',
    },
    {
        name: 'contato',
        to: '#contact',
    },
]

type NavLinksProps = {
    className: string
}

export function NavLinks({ className: css }: NavLinksProps) {
    return (
        <ul className={css}>
            {navLinks.map(item => (
                <li key={item.to}>
                    <a href={item.to} className="font-bold text-lg cursor-pointer">{item.name}</a>
                </li>
            ))}
        </ul>
    )
}