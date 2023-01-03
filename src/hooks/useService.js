import { useState, useEffect } from 'react'
import { app } from '../services/firebase'
import { getDatabase, ref, onValue } from 'firebase/database';

const database = getDatabase(app);

export function useService() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const serviceRef = ref(database, "services")

    onValue(serviceRef, (service) => {
      const databaseService = service.val();
      const firebaseServices = databaseService ?? {};

      const parsedServices = Object.entries(firebaseServices).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          isHighlighted: value.isHighlighted,
          isCompleted: value.isCompleted,
          ownerContact: value.owner.contact,
          ownerLocation: value.owner.location,
          ownerName: value.owner.name,
          servicePrice: value.servicePrice,
          licensePlate: value.licensePlate,
          vehModel: value.vehModel
        }
      })

      setServices(parsedServices);
  })
})

  return { services }
}