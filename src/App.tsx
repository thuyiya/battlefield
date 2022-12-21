import AppProvider from './context/AppProvider'

import AppNavigator from './routes'

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  )
}

export default App
