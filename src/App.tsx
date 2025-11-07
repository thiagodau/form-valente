import './App.css'
import { MultiStepForm } from './components/MultiStepForm'
import profileImage from './assets/foto.jpg' // substitua pelo caminho da sua imagem

function App() {

  return (
    <>
      <div className="header">
        <div className="profile-wrapper">
          <img src={profileImage} alt="Perfil" className="profile-image" />
          <p>@leandrovalente_</p>
        </div>
        <div>
          <h2>Interesse em financiamento de imóvel</h2>
          <p>🏡 Construo e realizo o sonho da sua casa própria.</p>
        </div>
      </div >

      <MultiStepForm />
    </>
  )
}

export default App
