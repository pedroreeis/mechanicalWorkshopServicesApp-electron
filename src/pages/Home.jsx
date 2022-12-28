import { Button } from '../components/Button'
//import { Service } from '../components/Service'

import logoImg from '../images/logo.png';


import '../styles/home.scss';

//import {} from '../services/firebase'

export function Home() {
  return (
    <div id="page-services">
    <header>
      <div className="content">
        <img src={logoImg} alt="Logomarca do aplicativo."/>
        <div>
          <Button isInvisible>Serviços pendentes</Button>
          <Button isInvisible>Serviços concluidos</Button>
          <Button isOutlined>Novo serviço</Button>
        </div>
      </div>
    </header>
    
    <main>
      <div className="page-title">
        <h1>Serviço(s) pendentes.</h1>
      </div>

      <div className="service-list">

      </div>
    </main>
  </div>
  )
}