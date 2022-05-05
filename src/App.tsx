import { GlobalStyle, STitle, SForm } from './StyledComponents'
import React from 'react'
import GraphictQtdCursosPorInstituicao from './GraphictQtdCursosPorInstituicao'
import GraphictQtdDisciplinasPorProfessor from './GraphictQtdDisciplinasPorProfessor'
import GraphictQtdProfPorEstadoCivil from './GraphictQtdProfPorEstadoCivil'
import GraphictQtdReprovacoesPorAno from './GraphictQtdReprovacoesPorAno'

function App() {
    return <>  
                <STitle> GRÁFICOS </STitle>
                <GraphictQtdCursosPorInstituicao url='http://localhost:8080/curso/qtdp/byinstituicao'/>
                <GraphictQtdDisciplinasPorProfessor url='http://localhost:8080/professor/qtd/ofdisciplina'/>
                <GraphictQtdProfPorEstadoCivil url='http://localhost:8080/professor/qtd/byestadocivil'/>
                <GraphictQtdReprovacoesPorAno url='http://localhost:8080/cursa/qtd/reprovacoes'/>
                <br/>
           </>  
}

export default App;