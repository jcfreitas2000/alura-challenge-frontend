import { Button, Stack } from '@chakra-ui/react'
import { Legend } from '../Form/Legend'
import { Input } from '../Form/Input'
import { Textarea } from '../Form/Textarea'
import { Select } from '../Form/Select'
import { Code } from '../Code'
import { ColorPicker, ColorValue } from '../Form/ColorPicker'
import { FormEvent, useState } from 'react'
import { Container } from '../Container'
import { useProjects } from '../../hooks/useProjects'
import { useRouter } from 'next/router'

export function ProjectForm(): JSX.Element {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [language, setLanguage] = useState('')
    const [color, setColor] = useState<ColorValue>('blue.400')
    const [code, setCode] = useState('')

    const { createProject } = useProjects()
    const router = useRouter()

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        if (!name || !description || !language || !code) {
            alert(
                'Dados inválidos. Por favor, preencha todos os campos e tente novamente'
            )
        } else {
            createProject({ code, name, description, language, color })
            router.push('/community')
        }
    }

    return (
        <Container>
            <Stack
                as="form"
                onSubmit={handleSubmit}
                w="100%"
                spacing={8}
                direction={{ base: 'column', lg: 'row' }}
                align="flex-start"
            >
                <Code color={color} code={code} setCode={setCode} />
                <Stack spacing="8" w="100%" maxW={{ lg: '300px' }}>
                    <Stack as="fieldset" spacing="4">
                        <Legend text="Seu projeto" />

                        <Input
                            name="name"
                            label="Nome"
                            hiddenLabel
                            placeholder="Nome do seu projeto"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />

                        <Textarea
                            name="description"
                            label="Descrição"
                            hiddenLabel
                            placeholder="Descrição do seu projeto"
                            value={description}
                            onChange={event =>
                                setDescription(event.target.value)
                            }
                        />
                    </Stack>
                    <Stack as="fieldset" spacing="4">
                        <Legend text="Personalização" />

                        <Select
                            name="language"
                            label="Linguagem de programação"
                            hiddenLabel
                            placeholder="Linguagem de programação"
                            value={language}
                            onChange={event => setLanguage(event.target.value)}
                            options={[
                                { label: 'HTML', value: 'html' },
                                { label: 'CSS', value: 'css' },
                                { label: 'JavaScript', value: 'js' },
                                { label: 'Java', value: 'java' }
                            ]}
                        />

                        <ColorPicker color={color} setColor={setColor} />
                    </Stack>

                    <Button
                        colorScheme="blue"
                        bgColor="blue.400"
                        color="gray.900"
                        lineHeight="6"
                        py="6"
                        type="submit"
                    >
                        Salvar projeto
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}
