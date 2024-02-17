import '../scss/App.scss'
import Cards from './Cards'
import Filters from './Filters'
import Header from './Header'

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Filters></Filters>
      <main>
        <section>
          <Cards></Cards>
        </section>
      </main>
    </div>
  )
}

export default App
