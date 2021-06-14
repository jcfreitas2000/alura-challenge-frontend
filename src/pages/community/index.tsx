import React from 'react'

import { Layout } from '../../components/Layout'
import { Grid, GridItem } from '@chakra-ui/react'
import { CodeCard } from '../../components/CodeCard'
import Head from 'next/head'
import { Container } from '../../components/Container'
import { ProjectsProvider, useProjects } from '../../hooks/useProjects'

const community: React.FC = () => {
    return (
        <Layout>
            <ProjectsProvider>
                <Head>
                    <title>Comunidade</title>
                    <meta
                        name="description"
                        content="Página da comunidade da plataforma Alura Dev"
                    />
                </Head>
                <Container>
                    <ProjectsList />
                </Container>
            </ProjectsProvider>
        </Layout>
    )
}

export default community

function ProjectsList(): JSX.Element {
    const { projects } = useProjects()

    return (
        <Grid maxW="100%" templateColumns="1fr 1fr" gap={6}>
            {projects.map((project, index) => (
                <GridItem key={index}>
                    <CodeCard
                        code={project.code}
                        title={project.name}
                        description={project.description}
                        color={project.color}
                        commentsCount={4}
                        likesCount={5}
                    />
                </GridItem>
            ))}
        </Grid>
    )
}
