import React, { useEffect, useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import {Wrapper, Container} from './App.style'
import Checkbox from '../../shared/Checkbox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'

function App() {
    // hook para criacao de estado
    const [lettuce, setLettuce] = useState(false)
    const [rice, setRice] = useState(false)  
    const [healthy, setHealthy] = useState(10)

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    
    // callback, sera chamado no momento da criacao do componete
    useEffect(function() {
        setTimeout(() => {
            setHealthy(100)
        }, 5000)
    }, [])

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
            left={<div style={{}}>
                Produtos disponíveis
                <Checkbox title="Alface" value={lettuce} onClick={() => setLettuce(!lettuce)} />
            </div>}
            
            middle={<div style={{}}>
                Sua lista de compras
                <Checkbox title="Arroz" value={rice} onClick={() => setRice(!rice)} />
            </div>}

            right={<div>
            Quantidade
    
            <LineChart title="nao saudavel" color={colors[0]} percentage={80} />
            <LineChart title="pouco saudavel" color={colors[1]} percentage={55} />
            <LineChart title="saudavel" color={colors[2]} percentage={35} />
            <LineChart title="muito saudavel" color={colors[3]} percentage={15} />
            
            </div>}
            />    
        </Container>
    </Wrapper>
}

export default App