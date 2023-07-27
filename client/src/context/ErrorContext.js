import { useState, createContext } from "react"

const ErrorContext = createContext();

const ErrorProvider = ({children}) => {
  const [error, setError] = useState(null)

  // const saveError = (newError) => {
  //   setError(newError)
  // }

  return (
    <ErrorContext.Provider value={{error, setError}} >
      {children}
    </ErrorContext.Provider>
  )
}

export {ErrorContext, ErrorProvider}