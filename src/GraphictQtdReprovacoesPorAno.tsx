import { GlobalStyle, STitle, SForm } from './StyledComponents'
import React, { useState, useEffect} from 'react'
import { XAxis, YAxis, Legend, Line, CartesianGrid, Tooltip, LineChart } from 'recharts'
const axios = require('axios')

type defSource = { url: string}
type DisciplinaPorInstituicao = {
    ano: string,
    quantidade: string,
}
type GetDisciplinaPorInstituicaoResponse = { data: DisciplinaPorInstituicao[] }

function GraphictQtdReprovacoesPorAno(props: defSource) {
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
                <SForm>
                    <STitle>Quantidade de Reprovaçoes por Ano</STitle>

                    <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ano" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="quantidade" stroke="#8884d8" />
                    </LineChart>
                </SForm>
            </>
}

export default GraphictQtdReprovacoesPorAno
