import {
    FileArrowDown,
    GithubLogo,
    LinkedinLogo,
} from '@phosphor-icons/react'

import { LinkButton } from './LinkButton'

export function SocialButtons() {
    return (
        <div className="flex items-center gap-7 mobile:gap-3 justify-center">
            <LinkButton
                text="Linkedin"
                icon={<LinkedinLogo size={28} weight="bold" className='mobile:hidden' />}
                type='target'
                to="https://www.linkedin.com/in/fabio-caldas-a1545b220"
                elevationAnimation
            />

            <LinkButton
                text="Github"
                icon={<GithubLogo size={28} weight="bold" className='mobile:hidden' />}
                type='target'
                to="https://github.com/fabiooc1"
                elevationAnimation
            />

            <LinkButton
                text="Visualizar CV"
                icon={<FileArrowDown size={28} weight="bold" className='mobile:hidden' />}
                type='target'
                to="https://docs.google.com/document/d/1ZWk1lMDqy26FQKrc0X-irTQQTbzDh26KJtRsx0UPvyg/edit?usp=sharing"
                elevationAnimation
            />
        </div>
    )
}