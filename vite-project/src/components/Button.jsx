import React from 'react'
import styled from 'styled-components'
const Button = styled.button(({disabled})=>({
    color : disabled ? "green": "green",
}))

export default Button
