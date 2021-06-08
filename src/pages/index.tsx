import {ProjectForm} from "../components/Project/Form";
import {Code} from "../components/Code";
import {Layout} from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <Code/>
            <ProjectForm/>
        </Layout>
    )
}
