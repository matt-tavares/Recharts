import { GlobalStyle, STitle, SForm } from './StyledComponents'
import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
const axios = require('axios')


type defSource = { url: string}
type QtdProfPorEstadoCivil = {
    estado_civil: string,
    quantidade: number,
}
type GetQtdProfPorEstadoCivilResponse = { data: QtdProfPorEstadoCivil[] }

export default function GraphictQtdProfPorEstadoCivil(props: defSource) {
    const PIECOLORS = ['#8688FE', '#00C49F', '#F80']
    const [data, setData] = useState<QtdProfPorEstadoCivil[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function QtdProfPorEstadoCivil() {

            await axios.get(props.url)
            .then((res: GetQtdProfPorEstadoCivilResponse) => {

                let data = res.data
                let tapData : QtdProfPorEstadoCivil[] = []

                for ( let i = 0; i < data.length; i++)
                    tapData.push( {
                        estado_civil: data[i].estado_civil,
                        quantidade: parseInt(String(data[i].quantidade))
                    
                    })

                setData(tapData)
                setIsLoading(false)
            })
            .catch((error: any) => {
                return <h1> ERRO!! {error.mensage}</h1>
            })
        }
        QtdProfPorEstadoCivil()
    }, [])

    
    if (isLoading)
        return <p> ==== C A R R E G A N D O ==== </p>
    else 
        return<>
                <GlobalStyle/>
                <SForm>
                    <STitle> Quantidade de Professores por Estado Civil</STitle>

                    <PieChart width={700} height={250}>
                        <Pie
                            dataKey='quantidade'
                            isAnimationActive={false}
                            data={data}
                            cx='50%'
                            cy='50%'
                            outerRadius={80}
                            fill='#8884d8'
                            label={(entry) => `${entry.estado_civil} = ${entry.quantidade} `}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={PIECOLORS[index % PIECOLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </SForm>
            </>
}