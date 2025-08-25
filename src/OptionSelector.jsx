import React from 'react'

export default function OptionSelector({ options = [], setOption = () => {} }) {
    return (
        options.map(option => {
            return (
            <>
                <button 
                    key={option}
                    type="button" 
                    onClick={() => setOption(option)}
                >
                    {option}
                </button>
            </>       
            )
        })
    )
    
}