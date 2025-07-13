const cursos = [
  { id: 'MATDIS', nombre: 'Matemática Discreta', ciclo: 1, prereq: [], abre: ['CALC1'] },
  { id: 'GEOM', nombre: 'Geometría Analítica', ciclo: 1, prereq: [], abre: ['CALC1', 'DIBUJO'] },
  { id: 'FILO', nombre: 'Filosofía', ciclo: 1, prereq: [] },
  { id: 'CIUDADANIA', nombre: 'Ciudadanía Intercultural', ciclo: 1, prereq: [], abre: ['ECO'] },
  { id: 'INGE', nombre: 'Introducción a la Ingeniería', ciclo: 1, prereq: [], abre: ['GEO', 'QUIM'] },
  { id: 'LENGUAJE', nombre: 'Lenguaje', ciclo: 1, prereq: [] },
  { id: 'METEST', nombre: 'Métodos de Estudio', ciclo: 1, prereq: [] },
  { id: 'ACCES', nombre: 'Accesibilidad y Diseño Universal', ciclo: 1, prereq: [], abre: ['DISCAP'] },
  { id: 'ACT1', nombre: 'Actividades I', ciclo: 1, prereq: [], abre: ['ACT2'] },
  { id: 'ING1', nombre: 'Inglés I', ciclo: 1, prereq: [], abre: ['ING2'] },

  { id: 'ALGEBRA', nombre: 'Álgebra Lineal', ciclo: 2, prereq: [], abre: ['FIS1'] },
  { id: 'CALC1', nombre: 'Cálculo I', ciclo: 2, prereq: ['MATDIS', 'GEOM'], abre: ['CALC2', 'FIS1', 'ESTAD'] },
  { id: 'DIBUJO', nombre: 'Dibujo y Diseño Gráfico', ciclo: 2, prereq: ['GEOM'] },
  { id: 'ECO', nombre: 'Introducción a la Economía', ciclo: 2, prereq: ['CIUDADANIA'], abre: ['CONTAB'] },
  { id: 'TOPO', nombre: 'Topografía', ciclo: 2, prereq: [], abre: ['TOPOAV'] },
  { id: 'GEO', nombre: 'Geología General', ciclo: 2, prereq: ['INGE'], abre: ['MAT', 'MS1'] },
  { id: 'ACT2', nombre: 'Actividades II', ciclo: 2, prereq: ['ACT1'] },
  { id: 'ING2', nombre: 'Inglés II', ciclo: 2, prereq: ['ING1'] },

  { id: 'CALC2', nombre: 'Cálculo II', ciclo: 3, prereq: ['CALC1'], abre: ['ED'] },
  { id: 'FIS1', nombre: 'Física I', ciclo: 3, prereq: ['CALC1', 'ALGEBRA'], abre: ['FIS2', 'ESTAT', 'DINAM'] },
  { id: 'ESTAD', nombre: 'Estadística y Probabilidades I', ciclo: 3, prereq: ['CALC1'] },
  { id: 'QUIM', nombre: 'Química General', ciclo: 3, prereq: ['INGE'], abre: ['TC'] },
  { id: 'MAT', nombre: 'Tecnología de los Materiales', ciclo: 3, prereq: ['GEO'], abre: ['CONST1', 'TC'] },
  { id: 'TOPOAV', nombre: 'Topografía Avanzada', ciclo: 3, prereq: ['TOPO'], abre: ['CAM1'] },

  { id: 'FIS2', nombre: 'Física II', ciclo: 4, prereq: ['FIS1'], abre: ['INSTEL'] },
  { id: 'ED', nombre: 'Ecuaciones Diferenciales', ciclo: 4, prereq: ['CALC2'], abre: ['MF1'] },
  { id: 'ESTAT', nombre: 'Estática', ciclo: 4, prereq: ['FIS1'], abre: ['RM1'] },
  { id: 'CONST1', nombre: 'Construcción I', ciclo: 4, prereq: ['MAT'], abre: ['CAM1', 'CONST2', 'ECOLOGIA', 'INSTEL'] },
  { id: 'DINAM', nombre: 'Dinámica', ciclo: 4, prereq: ['FIS1'], abre: ['MF1'] },
  { id: 'TC', nombre: 'Tecnología del Concreto', ciclo: 4, prereq: ['QUIM', 'MAT'] },

  { id: 'RM1', nombre: 'Resistencia de Materiales I', ciclo: 5, prereq: ['ESTAT'], abre: ['RM2'] },
  { id: 'CAM1', nombre: 'Caminos I', ciclo: 5, prereq: ['TOPOAV', 'CONST1'], abre: ['PAV'] },
  { id: 'CONST2', nombre: 'Construcción II', ciclo: 5, prereq: ['CONST1'], abre: ['PP'] },
  { id: 'CONTAB', nombre: 'Contabilidad General', ciclo: 5, prereq: ['ECO'], abre: ['GF'] },
  { id: 'ECOLOGIA', nombre: 'Ecología e Impacto Ambiental', ciclo: 5, prereq: ['CONST1'], abre: ['FEP'] },
  { id: 'INSTEL', nombre: 'Instalaciones Eléctricas en Edificaciones', ciclo: 5, prereq: ['FIS2', 'CONST1'], abre: ['PP'] },

  { id: 'MF1', nombre: 'Mecánica de Fluidos I', ciclo: 6, prereq: ['ED', 'DINAM'], abre: ['MF2', 'INSTSAN'] },
  { id: 'PAV', nombre: 'Pavimentos', ciclo: 6, prereq: ['CAM1'], abre: ['MS2'] },
  { id: 'GF', nombre: 'Gestión Financiera', ciclo: 6, prereq: ['CONTAB'], abre: ['FEP', 'PP'] },
  { id: 'MS1', nombre: 'Mecánica de Suelos I', ciclo: 6, prereq: ['GEO'], abre: ['MS2'] },
  { id: 'RM2', nombre: 'Resistencia de Materiales II', ciclo: 6, prereq: ['RM1'], abre: ['AE1'] },

  { id: 'MF2', nombre: 'Mecánica de Fluidos II', ciclo: 7, prereq: ['MF1'], abre: ['HIDRO'] },
  { id: 'AE1', nombre: 'Análisis Estructural I', ciclo: 7, prereq: ['RM2'], abre: ['AE2', 'CA1'] },
  { id: 'FEP', nombre: 'Formulación y Evaluación de Proyectos', ciclo: 7, prereq: ['GF', 'ECOLOGIA'], abre: ['PMI'] },
  { id: 'MS2', nombre: 'Mecánica de Suelos II', ciclo: 7, prereq: ['MS1', 'PAV'], abre: ['CA1'] },
  { id: 'PP', nombre: 'Presupuesto y Programación de Obra', ciclo: 7, prereq: ['GF', 'CONST2', 'INSTEL'], abre: ['ICOSTOS'] },
  { id: 'DISCAP', nombre: 'Discapacidad e Inclusión', ciclo: 7, prereq: ['ACCES'] },

  { id: 'AE2', nombre: 'Análisis Estructural II', ciclo: 8, prereq: ['AE1'], abre: ['ANTISIS', 'DAM'] },
  { id: 'CA1', nombre: 'Concreto Armado I', ciclo: 8, prereq: ['AE1', 'MS2'], abre: ['CA2'] },
  { id: 'PMI', nombre: 'Gestión de Proyectos – PMI', ciclo: 8, prereq: ['FEP'], abre: ['PROYF', 'VALUACIONES'] },
  { id: 'ICOSTOS', nombre: 'Ingeniería de Costos', ciclo: 8, prereq: ['PP'], abre: ['VALUACIONES'] },
  { id: 'HIDRO', nombre: 'Hidrología', ciclo: 8, prereq: ['MF2'], abre: ['HIDRAU'] },
  { id: 'INSTSAN', nombre: 'Instalaciones Sanitarias', ciclo: 8, prereq: ['MF1'], abre: ['HIDRAU'] },

  { id: 'CA2', nombre: 'Concreto Armado II', ciclo: 9, prereq: ['CA1'], abre: ['PUENTES'] },
  { id: 'ANTISIS', nombre: 'Ingeniería Antisísmica', ciclo: 9, prereq: ['AE2'], abre: ['INVEST'] },
  { id: 'PROYF', nombre: 'Proyecto final de Ingeniería Civil', ciclo: 9, prereq: ['PMI'], abre: ['INVEST'] },
  { id: 'HIDRAU', nombre: 'Hidráulica', ciclo: 9, prereq: ['HIDRO', 'INSTSAN'], abre: ['AGUA'] },
  { id: 'VALUACIONES', nombre: 'Ingeniería de Valuaciones y Tasaciones', ciclo: 9, prereq: ['PMI', 'ICOSTOS'], abre: ['ORG'] },
  { id: 'DAM', nombre: 'Diseño de acero y Madera', ciclo: 9, prereq: ['AE2'], abre: ['PUENTES'] },
  { id: 'ELECTIVO9', nombre: 'Electivo', ciclo: 9, prereq: [] },

  { id: 'AGUA', nombre: 'Abastecimiento de Agua y Alcantarillado', ciclo: 10, prereq: ['HIDRAU'] },
  { id: 'INVEST', nombre: 'Trabajo de Investigación', ciclo: 10, prereq: ['PROYF', 'ANTISIS'] },
  { id: 'ORG', nombre: 'Organización y dirección de empresas constructoras', ciclo: 10, prereq: ['VALUACIONES'] },
  { id: 'PUENTES', nombre: 'Puentes y obras de arte', ciclo: 10, prereq: ['DAM', 'CA2'] },
  { id: 'ETICA', nombre: 'Ética y Moral', ciclo: 10, prereq: [] },
  { id: 'ELECTIVO10', nombre: 'Electivo', ciclo: 10, prereq: [] },
];

const container = document.getElementById('malla-container');

const cursosMap = {};
cursos.forEach(curso => {
  const div = document.createElement('div');
  div.className = 'curso';
  div.id = curso.id;
  div.innerText = `${curso.nombre}\n(Ciclo ${curso.ciclo})`;
  container.appendChild(div);
  cursosMap[curso.id] = { ...curso, element: div };
});

// Desbloquea los cursos sin prerequisitos
Object.values(cursosMap).forEach(c => {
  if (c.prereq.length === 0) {
    c.element.classList.add('desbloqueado');
  }
});

Object.values(cursosMap).forEach(curso => {
  curso.element.addEventListener('click', () => {
    if (!curso.element.classList.contains('desbloqueado')) return;

    curso.element.classList.toggle('aprobado');

    // Verifica cuáles cursos pueden desbloquearse
    Object.values(cursosMap).forEach(c => {
      if (c.prereq.every(id => cursosMap[id].element.classList.contains('aprobado'))) {
        c.element.classList.add('desbloqueado');
      } else {
        c.element.classList.remove('desbloqueado');
      }
    });
  });
});
