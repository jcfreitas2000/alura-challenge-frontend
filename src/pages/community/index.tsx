import {Layout} from "../../components/Layout";
import {Grid, GridItem} from "@chakra-ui/react";
import {CodeCard} from "../../components/CodeCard";

export default function community() {
    return (
        <Layout>
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
