const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
        activarProtocolo = true;
        break;
      }
    }
    return activarProtocolo;
  };
  