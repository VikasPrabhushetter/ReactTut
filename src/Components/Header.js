import React from 'react'

const Header = () => {
    var CompanyName = "DijiSuji Technologies"
    var EmpCount = 200

    return (
        <>
           <h1>Welcome to {CompanyName}</h1>
           <h3>Company strength: {EmpCount}</h3>
        </>
    )
}

export default Header