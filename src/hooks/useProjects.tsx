import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react'

interface Project {
    code: string
    name: string
    description: string
    language: string
    color: string
    likesCount: number
    commentsCount: number
}

type ProjectInput = Omit<Project, 'likesCount' | 'commentsCount'>

interface ProjectsContextData {
    projects: Project[]
    createProject: (project: ProjectInput) => void
}

const ProjectsContext = createContext<ProjectsContextData>(
    {} as ProjectsContextData
)

interface ProjectsProviderProps {
    children: ReactNode
}

export function ProjectsProvider({
    children
}: ProjectsProviderProps): JSX.Element {
    const [projects, setProjects] = useState<Project[]>([
        {
            code: 'Hello World',
            name: 'Exemplo',
            description: 'Um código de exemplo, apenas para não ficar vazio ;)',
            language: 'txt',
            color: 'blue.400',
            likesCount: 126,
            commentsCount: 34
        }
    ])

    useEffect(() => {
        const projects = localStorage.getItem('projects')

        if (projects) setProjects(JSON.parse(projects))
    }, [])

    function createProject(project: ProjectInput) {
        const newProjects: Project[] = [
            {
                commentsCount: Math.ceil(Math.random() * 100),
                likesCount: Math.ceil(Math.random() * 100),
                ...project
            },
            ...projects
        ]

        setProjects(newProjects)
        localStorage.setItem('projects', JSON.stringify(newProjects))
    }

    return (
        <ProjectsContext.Provider value={{ projects, createProject }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export function useProjects(): ProjectsContextData {
    return useContext(ProjectsContext)
}
