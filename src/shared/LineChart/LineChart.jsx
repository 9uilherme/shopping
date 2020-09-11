import React from 'react'
import {Wrapper, ProgressBar} from './LineChart.style'

// onclick do filho pro pai
// desestructuring
function LineChart({title, color, percentage}) {
    return <Wrapper>
        <span>
            {title}
        </span>
        <ProgressBar
        percentage={percentage}
        color={color}
        />
    </Wrapper>
}
export default LineChart