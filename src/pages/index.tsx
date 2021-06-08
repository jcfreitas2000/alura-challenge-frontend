import {ProjectForm} from "../components/Project/Form";
import {Layout} from "../components/Layout";
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Página inicial da plataforma Alura Dev"/>
            </Head>
            <Layout>
                <ProjectForm/>
            </Layout>
        </>
    )
}
