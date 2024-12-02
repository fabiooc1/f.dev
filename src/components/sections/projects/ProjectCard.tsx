import { Link } from "@phosphor-icons/react"
import { ProjectModel } from "../../../data/models/ProjectModel"
import { LinkButton } from "../../LinkButton"

type ProjectCardProps = ProjectModel

export function ProjectCard({
    id,
    name,
    description,
    img
}: ProjectCardProps) {
    function handleBigText(text: string) {
        const maxLength = 64;
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    return (
        <div className="w-[480px] mobile:w-[360px] flex flex-col flex-shrink-0 gap-6 shadow-lg rounded-xl bg-white-900">
            <img
                src={img.path}
                alt={img.name}
                className="w-full h-64 object-cover rounded-t-xl"
                draggable={false}
            />

            <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-gray-600 text-sm">{handleBigText(description)}</p>
                </div>

                <LinkButton
                    icon={<Link size={28} weight="bold" />}
                    text="Ver detalhes"
                    type="target"
                    to={`projects/${id}`}
                />
            </div>
        </div>
    )
}