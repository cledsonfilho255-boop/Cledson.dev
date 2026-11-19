import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import { perfil } from './data/perfil.js'

function App() {
  return (
    <>
      <Header usuario={perfil.usuario} />
      <main>
        <Hero
          nome={perfil.nome}
          cargo={perfil.cargo}
          resumo={perfil.resumo}
          cidade={perfil.cidade}
          foco={perfil.cargo}
        />
      </main>
    </>
  )
}

export default App