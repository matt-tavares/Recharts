import React from 'react'
import GraphictQtdCursosPorInstituicao from './GraphictQtdCursosPorInstituicao'
import GraphictQtdDisciplinasPorProfessor from './GraphictQtdDisciplinasPorProfessor'
import GraphictQtdProfPorEstadoCivil from './GraphictQtdProfPorEstadoCivil'
import GraphictQtdReprovacoesPorAno from './GraphictQtdReprovacoesPorAno'

function App() {
    return <>  
             <h1> EXERCÍCIOS ACERCA DE GRÁFICOS </h1>
             <GraphictQtdCursosPorInstituicao/>
             <GraphictQtdDisciplinasPorProfessor/>
             <GraphictQtdProfPorEstadoCivil/>
             <GraphictQtdReprovacoesPorAno/>
             <br/>
           </>  
}

export default App;