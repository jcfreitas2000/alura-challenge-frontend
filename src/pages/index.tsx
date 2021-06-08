import {ProjectForm} from "../components/Project/Form";
import {Code} from "../components/Code";
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
                <Code/>
                <ProjectForm/>
            </Layout>
        </>
    )
}
