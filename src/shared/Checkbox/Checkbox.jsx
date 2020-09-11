import React from 'react'
import {Wrapper, Indicator} from './Checkbox.style'

// onclick do filho pro pai
// desestructuring
function Checkbox({value, title, onClick}) {
    return <Wrapper onClick={onClick}>
        <Indicator value={value} />
        {title}
    </Wrapper>
}
export default Checkbox