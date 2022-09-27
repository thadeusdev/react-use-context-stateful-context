import React, { createContext, useState } from "react"

// create the context object
const PauseContext = createContext()

// create the context provider (component)
function PauseProvider({ children }) {
    const [paused, setPaused] = useState(false)

    console.log({paused})

    const value = [paused, setPaused]
    
    return (
        <PauseContext.Provider value={value}>
            {children}
        </PauseContext.Provider>
    )
}

// export
export { PauseContext, PauseProvider }
