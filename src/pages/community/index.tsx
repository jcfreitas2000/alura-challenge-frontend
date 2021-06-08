import {Layout} from "../../components/Layout";
import {Grid, GridItem} from "@chakra-ui/react";
import {CodeCard} from "../../components/CodeCard";
import Head from 'next/head';

export default function community() {
    return (
        <Layout>
            <Head>
                <title>Comunidade</title>
                <meta name="description" content="Página da comunidade da plataforma Alura Dev" />
            </Head>
            <Grid maxW="100%" templateColumns="1fr 1fr" gap={6}>
                <GridItem>
                    <CodeCard color="red.400" title="Título" description="Descrição" commentsCount={4} likesCount={5}/>
                </GridItem>
                <GridItem>
                    <CodeCard title="Título" description="Descrição" commentsCount={4} likesCount={5}/>
                </GridItem>
                <GridItem>
                    <CodeCard color="yellow.400" title="Título" description="Descrição" commentsCount={4} likesCount={5}/>
                </GridItem>
                <GridItem>
                    <CodeCard color="green.400" title="Título" description="Descrição" commentsCount={4} likesCount={5}/>
                </GridItem>
            </Grid>
        </Layout>
    );
}
