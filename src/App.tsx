import { ThemeProvider } from './theme';
import './App.css'
import MainHeader from './components/MainHeader'

function App() {

  return (
    <>
      <ThemeProvider>
        <MainHeader/>
      </ThemeProvider>
    </>
  )
}

export default App
