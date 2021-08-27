import { GlobalStyle, STitle, SForm } from './StyledComponents'
import React, { useState, useEffect} from 'react'
import { BarChart, Bar, XAxis, Tooltip, CartesianGrid, YAxis } from 'recharts'
const axios = require('axios')

type defSource = { url: string}
type CursoPorInstituicao = {
    id_instituicao: string,
    nome: string,
    quantidade: string,
}
type GetCursoPorInstituicaoResponse = { data: CursoPorInstituicao[] }

function GraphictQtdCursosPorInstituicao(props: defSource) {
    const [data, setData] = useState<CursoPorInstituicao[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getLines() {
            let lines: JSX.Element [] = []

            await axios.get(props.url)
            .then((res: GetCursoPorInstituicaoResponse) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((error: any) => {
                return <h1> ERRO!! {error.mensage}</h1>
            })
        }
        getLines()
    }, [])

    
    if (isLoading)
        return <p> ==== C A R R E G A N D O ==== </p>
    else 
        return<>
                <GlobalStyle/>
                <SForm>
                    <STitle>Quantidade de Cursos por Instituição</STitle>
                    
                    <BarChart width={600} height={380} data={data} >
                        <XAxis dataKey='nome' stroke='#0004c0'/>
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
                        <Bar dataKey='quantidade' fill='red' barSize={30} />
                    </BarChart>
                </SForm>
            </>
}

export default GraphictQtdCursosPorInstituicao;