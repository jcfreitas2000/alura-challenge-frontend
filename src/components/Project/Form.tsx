import {Button, Stack} from "@chakra-ui/react";
import {Legend} from "../Form/Legend";
import {Input} from "../Form/Input";
import {Textarea} from "../Form/Textarea";
import {Select} from "../Form/Select";
import {Code} from "../Code";
import {ColorPicker} from "../Form/ColorPicker";

export function ProjectForm() {
    return (
        <>
            <Code/>
            <Stack as="fieldset" spacing="8" w="100%" maxW="300px">
                <Stack as="fieldset" spacing="4">
                    <Legend text="Seu projeto"/>

                    <Input name="name" placeholder="Nome do seu projeto"/>

                    <Textarea name="description" placeholder="Descrição do seu projeto"/>
                </Stack>
                <Stack as="fieldset" spacing="4">
                    <Legend text="Personalização"/>

                    <Select name="language" options={
                        [
                            {label: "HTML", value: "html"},
                            {label: "CSS", value: "css"},
                            {label: "JavaScript", value: "js"},
                            {label: "Java", value: "java"}
                        ]
                    }/>

                    <ColorPicker/>
                </Stack>

                <Button colorScheme="blue" bgColor="blue.400" color="gray.900" lineHeight="6" py="6">Salvar
                    projeto</Button>
            </Stack>
        </>
    )
}
