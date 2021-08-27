import { GlobalStyle, STitle, SForm } from './StyledComponents'
import React, { useState, useEffect} from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
const axios = require('axios')

type defSource = { url: string}
type DisciplinaPorInstituicao = {
    id_professor: string,
    nome: string,
    quantidade: string,
}
type GetDisciplinaPorInstituicaoResponse = { data: DisciplinaPorInstituicao[] }

function GraphictQtdDisciplinasPorProfessor(props: defSource) {
    const [data, setData] = useState<DisciplinaPorInstituicao[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getLines() {
            let lines: JSX.Element [] = []

            await axios.get(props.url)
            .then((res: GetDisciplinaPorInstituicaoResponse) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((error: any) => {
                return <h1> ERRO!! {error.mensage}</h1>
            })
        }
        getLines()
        console.log(data)
    }, [])

    
    if (isLoading)
        return <p> ==== C A R R E G A N D O ==== </p>
    else 
        return<>
                <GlobalStyle/>
                <SForm >
                    <STitle>Quantidade de Disciplinas por Professor</STitle>

                    <BarChart width={600} height={800} data={data} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />
                    <XAxis type="number"/>
                    <YAxis dataKey="nome" width={150} type="category"/>
                    <Legend />
                    <Bar dataKey="quantidade" fill="#8884d8" />
                    </BarChart>
                </SForm>
            </>
}

export default GraphictQtdDisciplinasPorProfessor
