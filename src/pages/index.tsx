import React from 'react'

import { ProjectForm } from '../components/Project/ProjectForm'
import { Layout } from '../components/Layout'
import Head from 'next/head'
import { ProjectsProvider } from '../hooks/useProjects'

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name="description"
                    content="Página inicial da plataforma Alura Dev"
                />
            </Head>
            <Layout>
                <ProjectsProvider>
                    <ProjectForm />
                </ProjectsProvider>
            </Layout>
        </>
    )
}

export default Home
