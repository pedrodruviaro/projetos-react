import React from 'react'

export default function Botao(props) {

    function mudaCor(){
        props.onClick()
    }

    return (
        <button className="btn" onClick={mudaCor}>Change Color</button>
    )
}