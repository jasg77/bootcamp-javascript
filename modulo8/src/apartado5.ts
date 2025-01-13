interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }
  
  const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    const contador: NumeroPacientesPorEspecialidad = {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    };
  
    for (let i = 0; i < pacientes.length; i++) {
      if (pacientes[i].especialidad === "Medico de familia") {
        contador.medicoDeFamilia++;
      } else if (pacientes[i].especialidad === "Pediatra") {
        contador.pediatria++;
      } else if (pacientes[i].especialidad === "Cardiólogo") {
        contador.cardiologia++;
      }
    }
  
    return contador;
  };
  