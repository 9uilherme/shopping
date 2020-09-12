import React, { useEffect, useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import {Wrapper, Container} from './App.style'
import LineChart from '../../shared/LineChart/LineChart'
import ShoppingList from '../ShoppingList/ShoppingList'
import productsMock from '../../mocks/produtcs.json'
import extractPercent from '../../utils/extractPercent'

function App() {
    // hook para criacao de estado
    // const [lettuce, setLettuce] = useState(false)
    const [products, setProducts] = useState(productsMock.products)
    const [healthy, setHealthy] = useState(10)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    
    // run this callback anytime component is created
    useEffect(() => {
        // changed the behaviour to run when products are changed
        const newSelectedProducts = products
        .filter(product => product.checked);
        setSelectedProducts(newSelectedProducts)

    }, [products])

    // run this callback anytime component is created
    useEffect(() => {
        // changed the behaviour to run when selected products are changed
        const total = selectedProducts
        .map(product => product.price)
        .reduce((a, b) => a + b, 0)

        setTotalPrice(total)
    }, [selectedProducts])

    function handleToggle (id, checked, name) {
        // spread
        const newProducts = products
        .map(product =>
            product.id === id ? 
            { ...product, checked: !product.checked } : 
            product
            )
        // console.log(id, checked, name)
        setProducts(newProducts)
    }


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
            left={<ShoppingList 
                title="Produtos disponíveis" 
                products={products} 
                onToggle={handleToggle} />
            }
            
            middle={
                <ShoppingList 
                    title="Sua lista de produtos" 
                    products={selectedProducts} 
                    onToggle={handleToggle}
                    />
            }

            right={<div>
            Quantidade
    
            <LineChart 
            title="saudavel" 
            color={colors[0]} 
            percentage=
                {
                    extractPercent(selectedProducts.length, 
                        selectedProducts
                        .filter(selected => 
                            selected.tags.includes("healthy")).length)
                } 
            />
            <LineChart 
            title="Não tão saudável" 
            color={colors[1]} 
            percentage=
                {
                    extractPercent(selectedProducts.length, 
                        selectedProducts
                        .filter(selected => 
                            selected.tags.includes("junk")).length)
                } 
            />
            <LineChart 
            title="Limpeza" 
            color={colors[2]} 
            percentage=
                {
                    extractPercent(selectedProducts.length, 
                        selectedProducts
                        .filter(selected => 
                            selected.tags.includes("cleaning")).length)
                } 
            />
            <LineChart 
            title="Outros" 
            color={colors[3]} 
            percentage=
                {
                    extractPercent(selectedProducts.length, 
                        selectedProducts
                        .filter(selected => 
                            selected.tags.includes("others")).length)
                } 
            />

            <div style={{ marginTop: 12}}>
                <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                    Previsão de gastos
                </h2>
                <div style={{fontSize: 24}}>
                    R$ { totalPrice.toLocaleString('pt-br', {currency: 'BRL'}) }
                </div>
            </div>

            </div>}
            
            />    
        </Container>
    </Wrapper>
}

export default App