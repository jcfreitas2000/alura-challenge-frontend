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
}

type ProjectInput = Project

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
    const [projects, setProjects] = useState([
        {
            code: 'Hello World',
            name: 'Exemplo',
            description: 'Um código de exemplo, apenas para não ficar vazio ;)',
            language: 'txt',
            color: 'blue.400'
        }
    ])

    useEffect(() => {
        const projects = localStorage.getItem('projects')

        if (projects) setProjects(JSON.parse(projects))
    }, [])

    function createProject(project: ProjectInput) {
        const newProjects = [project, ...projects]

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
