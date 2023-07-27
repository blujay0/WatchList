import { useState, createContext } from "react"

const SuccessContext = createContext();

const SuccessProvider = ({children}) => {
  const [success, setSuccess] = useState(null)

  // const saveError = (newError) => {
  //   setError(newError)
  // }

  // children wrapped by context provider will have access to state variables
  return (
    <SuccessContext.Provider value={{success, setSuccess}} >
      {children}
    </SuccessContext.Provider>
  )
}

export {SuccessContext, SuccessProvider}