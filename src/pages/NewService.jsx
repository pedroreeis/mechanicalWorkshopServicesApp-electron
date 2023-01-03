import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button'

import logoImg from '../images/logo.png';

import '../styles/home.scss';

import { app } from '../services/firebase'
import { getDatabase, ref, push } from 'firebase/database';

export function NewService() {

  const database = getDatabase(app);

  const [licensePlate, setLicensePlate] = useState('');
  const [vehModel, setVehModel] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerContact, setOwnerContact] = useState('');
  const [ownerLocation, setOwnerLocation] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [serviceContent, setServiceContent] = useState('');

  function handleSubmitNewService(event) {
    event.preventDefault();

    if(licensePlate.trim() && vehModel.trim() && ownerName.trim() && ownerContact.trim() && ownerLocation.trim() && servicePrice.trim() && serviceContent.trim() === '') return
    
    const service = {
      content: serviceContent,
      isCompleted: false,
      isHighlighted: false,
      licensePlate: licensePlate,
      owner: {
        contact: ownerContact,
        location: ownerLocation,
        name: ownerName
      },
      servicePrice: servicePrice,
      vehModel: vehModel
    }

    const serviceRef = ref(database, "services");
    push(serviceRef, service);
    new window.Notification("MWS | Serviço Cadastrado!", {
      body: "Este serviço foi cadastrado e agora está disponível na aba Serviços Pendentes."
    })

    setLicensePlate('');
    setOwnerContact('');
    setOwnerLocation('');
    setOwnerName('');
    setServiceContent('');
    setServicePrice('');
    setVehModel('');
  }


  return (
    <div id="page-services">
    <header>
      <div className="content">
        <img src={logoImg} alt="Logomarca do aplicativo."/>
        <div>
          <Link to="/"><Button isInvisible>Serviços</Button></Link>
          <Link to="/newservice"><Button isOutlined>Novo serviço</Button></Link>
        </div>
      </div>
    </header>
    
    <main>
      <div className="page-title">
        <h1>Novo serviço.</h1>
      </div>

      <form>
          <textarea 
            placeholder="Placa do veiculo"
            onChange={event => setLicensePlate(event.target.value)}
            value={licensePlate}
            maxLength={8}
            minLength={7}
          />
          <textarea 
            placeholder="Modelo do veiculo"
            onChange={event => setVehModel(event.target.value)}
            value={vehModel}
            maxLength={1000}
            minLength={3}
          />
          <textarea 
            placeholder="Nome do proprietário do veiculo"
            onChange={event => setOwnerName(event.target.value)}
            value={ownerName}
            maxLength={1000}
            minLength={10}
          />
          <textarea 
            placeholder="Endereço do proprietário do veiculo"
            onChange={event => setOwnerLocation(event.target.value)}
            value={ownerLocation}
            maxLength={3000}
            minLength={20}
          />
          <textarea 
            placeholder="Numero de contato do proprietario do veiculo"
            onChange={event => setOwnerContact(event.target.value)}
            value={ownerContact}
          />
          <textarea 
            placeholder="O que será feito neste serviço ?"
            onChange={event => setServiceContent(event.target.value)}
            value={serviceContent}
            maxLength={3000}
            minLength={20}
          />
          <textarea 
            placeholder="Orçamento ?"
            onChange={event => setServicePrice(event.target.value)}
            value={servicePrice}
          />

          <div className="form-footer">          
            <Button 
              type="submit" 
              onClick={handleSubmitNewService}>Cadastrar serviço.</Button>
          </div>
        </form>
    </main>
  </div>
  )
}