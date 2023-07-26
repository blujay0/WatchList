import { useState, createContext } from "react"

const ErrorContext = createContext();

const ErrorProvider = ({children}) => {
  const [errors, setErrors] = useState(null)

  const saveErrors = (newError) => {
    setErrors(newError)
  }
  
  return (
    <ErrorContext.Provider value={{saveErrors, errors}} >
      {children}
    </ErrorContext.Provider>
  )
}

export {ErrorContext, ErrorProvider}

