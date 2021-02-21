import React, { useEffect } from "react"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const App: React.FC = () => {
  const { fetchCurrencies } = useActions()
  const { loading, error, data } = useTypedSelector(state => state.data)

  useEffect(() => {
    fetchCurrencies()
  }, [])

  if (loading) {
    return <h1>Loading</h1>
  } else if (error) {
    return <h1>Error</h1>
  }


  return <div className="container">
    <div className="header">
      <h1 className="title">Current EURO exchange rate</h1>
      <p className="subtitle">This is a test app so what are you doing here?</p>
    </div>
    <div className="block">
      {data.map(item => <span key={item.label} className="block__elem"><b>{item.label}:</b> {item.value}</span>)}
    </div>
  </div>
}

export default App