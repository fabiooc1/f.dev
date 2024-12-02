import { useNavigate, useParams } from "react-router-dom"
import { DataProjects } from "../data/constants/DataProjects";
import { useEffect } from "react";
import { LinkButton } from "../components/LinkButton";
import { AppPading } from "../components/AppPadding";
import { GithubLogo, Link as LinkIcon } from "@phosphor-icons/react";

export function ProjectPage() {
    const { projectId } = useParams();
    const project = DataProjects.find(project => project.id.toString() == projectId);
    const navigate = useNavigate();

    useEffect(() => {
        if (!project) {
            navigate('/404');
        }
    }, [project, navigate])

    if (!project) {
        return null
    }

    return (
        <>
            <AppPading className="flex flex-col justify-center min-h-screen py-8">
                <nav className="h-[12vh]">
                    <h1 className="font-black text-6xl mobile:text-4xl">{project.name}</h1>
                </nav>

                <main className="flex flex-col gap-6">
                    <img
                        src={project.img.path}
                        alt={project.img.name}
                        className="rounded-xl w-full object-cover h-auto max-h-[500px] tablet:max-h-[600px] mobile:aspect-[4/3] desktop:aspect-[16/9] transition-all duration-300"
                    />

                    <p className="font">{project.description}</p>
                    <div className="flex gap-4">
                        <LinkButton
                            text="Acessar repositório"
                            type="target"
                            to={project.repositoryUrl}
                            icon={<GithubLogo size={28} weight="bold" className="mobile:hidden" />}
                            elevationAnimation
                        />

                        {project.productionUrl && <LinkButton
                            text="Acessar projeto"
                            type="target"
                            to={project.productionUrl!}
                            icon={<LinkIcon size={28} weight="bold" className="mobile:hidden" />}
                            elevationAnimation
                        />}
                    </div>
                </main>
            </AppPading>
        </>
    );
}