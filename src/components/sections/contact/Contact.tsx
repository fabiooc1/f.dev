import { useState } from "react";
import { SectionContainer } from "../SectionContainer";
import { SectionTitle } from "../SectionTitle";

export function Contact() {
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const email = 'fabiocaldas266@gmail.com'

    function handleCopyEmail() {
        navigator.clipboard.writeText(email);
        setIsCopied(true)

        setInterval(() => {
            setIsCopied(false)
        }, 2000)
    }

    return (
        <SectionContainer id="contact">
            <SectionTitle title="Contato" />

            <div className="flex gap-12 items-center justify-between mobile:flex-col">
                <div className="flex flex-col gap-4 w-[50%] mobile:w-full">
                    <h1 className="font-baloo_bhai_2 text-3xl mobile:text-2xl font-bold">Envie uma mensagem</h1>
                    <p className="text-xl mobile:text-lg">Quer tirar alguma ideia do papel e colocar em produção? Contate-me e conversamos para ver a possibilidade!</p>

                    <span className="p-4 shadow-lg rounded-xl bg-white-400 font-medium border-solid border-2 hover:border-gray-300 transition-all">fabiocaldas266@gmail.com</span>
                    <button onClick={handleCopyEmail} disabled={isCopied} className="px-4 py-2 rounded-md w-fit font-bold bg-green-100">{isCopied ? 'Email copiado!' : 'Copiar email'}</button>
                </div>

                <img src="/contact.svg" alt="Contact" className="h-full w-[50%] tablet:w-[40%] mobile:w-[60%]" />
            </div>
        </SectionContainer>
    )
}