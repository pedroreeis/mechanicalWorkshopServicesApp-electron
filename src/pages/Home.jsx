import { Link } from 'react-router-dom';

import { Button } from '../components/Button'
import { Service } from '../components/Service'

import deleteImg from '../images/delete.svg';
import completeImg from '../images/check.svg';
import highlightImg from '../images/like.svg';

import logoImg from '../images/logo.png';

import '../styles/home.scss';

import { useService } from '../hooks/useService';

import { app } from '../services/firebase'
import { getDatabase, ref, remove, update } from 'firebase/database';

export function Home() {
  const { services } = useService();

  const database = getDatabase(app);

  async function handleDeleteService(serviceId) {
      const serviceRef = ref(database, `services/${serviceId}`);
      await remove(serviceRef)
  } 

  async function handleCompleteService(serviceId) {
    const serviceRef = ref(database, `services/${serviceId}`);
    await update(serviceRef, {
      isCompleted: true,
    })
  } 

  async function handleHighlightService(serviceId) {
    const serviceRef = ref(database, `services/${serviceId}`);
    await update(serviceRef, {
      isHighlighted: true,
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
        <h1>Serviço(s) pendentes.</h1>
        { services.length > 0 && <span>{services.length} serviço(s)</span> }
      </div>

      <div className="service-list">
        {services && services.length === 0 ? (
            <h3>Nenhum serviço no momento</h3>
          ) : (
            services
              .map(services => {
                return (
                  <Service
                    key={services.id}
                    content={services.content}
                    licensePlate={services.licensePlate}
                    ownerContact={services.ownerContact}
                    ownerLoc={services.ownerLocation}
                    ownerName={services.ownerName}
                    servicePrice={services.servicePrice}
                    vehModel={services.vehModel}
                    isCompleted={services.isCompleted}
                    isHighlighted={services.isHighlighted}
                    >
                      <button
                        type='button'
                        onClick={() => handleCompleteService(services.id)}>
                          <img src={completeImg} alt="Completar serviço" />
                      </button>
                      <button
                        type='button'
                        onClick={() => handleDeleteService(services.id)}>
                          <img src={deleteImg} alt="Deletar Serviço" />
                      </button>
                      <button
                        type='button'
                        onClick={() => handleHighlightService(services.id)}>
                          <img src={highlightImg} alt="Destacar serviço" />
                      </button>
                  </Service>
                )
              })
          )}
      </div>
    </main>
  </div>
  )
}