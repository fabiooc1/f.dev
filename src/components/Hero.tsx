import { CaretDown } from '@phosphor-icons/react'
import { SocialButtons } from './SocialButtons'
import { ReactTyped } from 'react-typed'

export function Hero() {
    return (
        <main id='hero' className="h-[100vh] flex flex-col items-center justify-center relative">
            <div className="flex flex-col gap-12">
                <div className="text-center">
                    <h1 className="baloo_bhai_2 font-extrabold text-8xl tablet:text-6xl mobile:text-6xl mb-3 uppercase">
                        <ReactTyped
                            strings={['Olá, eu sou o Fábio']}
                            typeSpeed={80}
                            backSpeed={40}
                            backDelay={1200}
                            loop={true}
                            showCursor={true}
                            cursorChar="|"
                        />
                    </h1>
                    <p className="font-semibold text-xl tablet:text-lg mobile:text-base">
                        Um profissional fullstack, empenhado em entregar soluções
                        escaláveis, seguras e chamativas
                    </p>
                </div>

                <SocialButtons />
            </div>

            <a href="#about-me" className="absolute bottom-[12vh] animate-pingUpDown">
                <CaretDown size={28} weight="bold" />
            </a>
        </main>
    )
}