import { Link } from 'react-router-dom';

import { Button } from '../components/Button'
import { Service } from '../components/Service'

import deleteImg from '../images/delete.svg';
import completeImg from '../images/check.svg';

import logoImg from '../images/logo.png';

import '../styles/home.scss';

import { useService } from '../hooks/useService';

import { app } from '../services/firebase'
import { getDatabase, ref, remove, update } from 'firebase/database';

export function ServicesCompleted() {
  const { services } = useService();

  const database = getDatabase(app);

  async function handleDeleteService(serviceId) {
    const serviceRef = ref(database, `services/${serviceId}`);
    await remove(serviceRef)
} 

  async function handleUncompleteService(serviceId) {
    const serviceRef = ref(database, `services/${serviceId}`);
    await update(serviceRef, {
      isCompleted: false,
  })
} 
  return (
    <div id="page-services">
    <header>
      <div className="content">
        <img src={logoImg} alt="Logomarca do aplicativo."/>
        <div>
          <Link to="/"><Button isInvisible>Serviços pendentes</Button></Link>
          <Link to="/servicecompleted"><Button isInvisible>Serviços concluidos</Button></Link>
          <Link to="/newservice"><Button isOutlined>Novo serviço</Button></Link>
        </div>
      </div>
    </header>
    
    <main>
      <div className="page-title">
        <h1>Serviço(s) concluidos.</h1>
      </div>

      <div className="service-list">
        
      </div>
    </main>
  </div>
  )
}