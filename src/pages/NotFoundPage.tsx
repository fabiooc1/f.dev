import { LinkButton } from "../components/LinkButton";

export function NotFoundPage() {
    return (
        <main className="flex flex-col items-center justify-center h-screen gap-10">
            <div className="text-center">
                <h1 className="font-extrabold text-9xl">404</h1>
                <p>Ops! Pareci que a página que você está tentando achar não existe.</p>
            </div>

            <LinkButton
                text="Voltar para home"
                type="parent"
                to="/"
            />
        </main>
    )
}