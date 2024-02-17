import '../scss/App.scss'
import Filters from './Filters'
import Header from './Header'

function App() {
  return (
    <div>
      <Header></Header>
      <Filters></Filters>
      <section>
        <div>
          <cards></cards>
        </div>
      </section>
    </div>
  )
}

export default App
