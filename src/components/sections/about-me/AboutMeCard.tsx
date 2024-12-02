import { AboutMeModel } from "../../../data/models/AboutMeModel"

type AboutMeCardProps = AboutMeModel

export function AboutMeCard({ img, title, description }: AboutMeCardProps) {
    return (
        <div className="flex mobile:flex-col items-center gap-12 p-8 shadow-xl rounded-xl bg-white hover:translate-y-[-8px] transition-transform">
            <img src={img.path} alt={img.name} width={80} height={80} />

            <div className="flex flex-col gap-4 w-full">
                <h2 className="font-extrabold text-4xl mobile:text-3xl text-center pr-[10vw] mobile:pr-0">
                    {title}
                </h2>
                <p className="font-semibold text-lg mobile:text-base">{description}</p>
            </div>
        </div>
    )
}