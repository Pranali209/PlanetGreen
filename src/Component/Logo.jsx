import React from 'react'
import LogoImage from '../assets/Logo.svg'

function Logo() {
    return (
        <div>
            <img src={LogoImage} alt="Logo" className="h-10 w-auto" />
        </div>
    )
}

export default Logo