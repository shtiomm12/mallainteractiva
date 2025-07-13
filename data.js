const cursos = [
  // I CICLO
  { id: "MATDIS", nombre: "Matemática Discreta", ciclo: 1, prerequisitos: [] },
  { id: "GEOM", nombre: "Geometría Analítica", ciclo: 1, prerequisitos: [] },
  { id: "FILO", nombre: "Filosofía", ciclo: 1, prerequisitos: [] },
  { id: "CIUD", nombre: "Ciudadanía Intercultural", ciclo: 1, prerequisitos: [] },
  { id: "INGEN", nombre: "Introducción a la Ingeniería", ciclo: 1, prerequisitos: [] },
  { id: "LENG", nombre: "Lenguaje", ciclo: 1, prerequisitos: [] },
  { id: "MET", nombre: "Métodos de Estudio", ciclo: 1, prerequisitos: [] },
  { id: "ACCES", nombre: "Accesibilidad y Diseño Universal", ciclo: 1, prerequisitos: [] },
  { id: "ACT1", nombre: "Actividades I", ciclo: 1, prerequisitos: [] },
  { id: "ING1", nombre: "Inglés I", ciclo: 1, prerequisitos: [] },

  // II CICLO
  { id: "ALG", nombre: "Álgebra Lineal", ciclo: 2, prerequisitos: [] },
  { id: "CALC1", nombre: "Cálculo I", ciclo: 2, prerequisitos: ["MATDIS", "GEOM"] },
  { id: "DIB", nombre: "Dibujo y Diseño Gráfico", ciclo: 2, prerequisitos: ["GEOM"] },
  { id: "ECO", nombre: "Introducción a la Economía", ciclo: 2, prerequisitos: ["CIUD"] },
  { id: "TOPO", nombre: "Topografía", ciclo: 2, prerequisitos: [] },
  { id: "GEO", nombre: "Geología General", ciclo: 2, prerequisitos: ["INGEN"] },
  { id: "ACT2", nombre: "Actividades II", ciclo: 2, prerequisitos: ["ACT1"] },
  { id: "ING2", nombre: "Inglés II", ciclo: 2, prerequisitos: ["ING1"] },

  // III CICLO
  { id: "CALC2", nombre: "Cálculo II", ciclo: 3, prerequisitos: ["CALC1"] },
  { id: "FIS1", nombre: "Física I", ciclo: 3, prerequisitos: ["CALC1", "ALG"] },
  { id: "ESTAD", nombre: "Estadística y Probabilidades I", ciclo: 3, prerequisitos: ["CALC1"] },
  { id: "QUIM", nombre: "Química General", ciclo: 3, prerequisitos: ["INGEN"] },
  { id: "MAT", nombre: "Tecnología de los Materiales", ciclo: 3, prerequisitos: ["GEO"] },
  { id: "TOPOAV", nombre: "Topografía Avanzada", ciclo: 3, prerequisitos: ["TOPO"] },

  // IV CICLO
  { id: "FIS2", nombre: "Física II", ciclo: 4, prerequisitos: ["FIS1"] },
  { id: "ED", nombre: "Ecuaciones Diferenciales", ciclo: 4, prerequisitos: ["CALC2"] },
  { id: "ESTAT", nombre: "Estática", ciclo: 4, prerequisitos: ["FIS1"] },
  { id: "CONST1", nombre: "Construcción I", ciclo: 4, prerequisitos: ["MAT"] },
  { id: "DINAM", nombre: "Dinámica", ciclo: 4, prerequisitos: ["FIS1"] },
  { id: "TC", nombre: "Tecnología del Concreto", ciclo: 4, prerequisitos: ["QUIM", "MAT"] },

  // V CICLO
  { id: "RM1", nombre: "Resistencia de Materiales I", ciclo: 5, prerequisitos: ["ESTAT"] },
  { id: "CAM1", nombre: "Caminos I", ciclo: 5, prerequisitos: ["TOPOAV", "CONST1"] },
  { id: "CONST2", nombre: "Construcción II", ciclo: 5, prerequisitos: ["CONST1"] },
  { id: "CONTAB", nombre: "Contabilidad General", ciclo: 5, prerequisitos: ["ECO"] },
  { id: "ECOLOGIA", nombre: "Ecología e Impacto Ambiental", ciclo: 5, prerequisitos: ["CONST1"] },
  { id: "INSTEL", nombre: "Instalaciones Eléctricas en Edificaciones", ciclo: 5, prerequisitos: ["FIS2", "CONST1"] },

  // VI CICLO
  { id: "MF1", nombre: "Mecánica de Fluidos I", ciclo: 6, prerequisitos: ["ED", "DINAM"] },
  { id: "PAV", nombre: "Pavimentos", ciclo: 6, prerequisitos: ["CAM1"] },
  { id: "GF", nombre: "Gestión Financiera", ciclo: 6, prerequisitos: ["CONTAB"] },
  { id: "MS1", nombre: "Mecánica de Suelos I", ciclo: 6, prerequisitos: ["GEO"] },
  { id: "RM2", nombre: "Resistencia de Materiales II", ciclo: 6, prerequisitos: ["RM1"] },

  // VII CICLO
  { id: "MF2", nombre: "Mecánica de Fluidos II", ciclo: 7, prerequisitos: ["MF1"] },
  { id: "AE1", nombre: "Análisis Estructural I", ciclo: 7, prerequisitos: ["RM2"] },
  { id: "FEP", nombre: "Formulación y Evaluación de Proyectos", ciclo: 7, prerequisitos: ["GF", "ECOLOGIA"] },
  { id: "MS2", nombre: "Mecánica de Suelos II", ciclo: 7, prerequisitos: ["MS1", "PAV"] },
  { id: "PP", nombre: "Presupuesto y Programación de Obra", ciclo: 7, prerequisitos: ["GF", "CONST2", "INSTEL"] },
  { id: "DISCAP", nombre: "Discapacidad e Inclusión", ciclo: 7, prerequisitos: ["ACCES"] },

  // VIII CICLO
  { id: "AE2", nombre: "Análisis Estructural II", ciclo: 8, prerequisitos: ["AE1"] },
  { id: "CA1", nombre: "Concreto Armado I", ciclo: 8, prerequisitos: ["AE1", "MS2"] },
  { id: "PMI", nombre: "Gestión de Proyectos – PMI", ciclo: 8, prerequisitos: ["FEP"] },
  { id: "ICOSTOS", nombre: "Ingeniería de Costos", ciclo: 8, prerequisitos: ["PP"] },
  { id: "HIDRO", nombre: "Hidrología", ciclo: 8, prerequisitos: ["MF2"] },
  { id: "INSTSAN", nombre: "Instalaciones Sanitarias", ciclo: 8, prerequisitos: ["MF1"] },

  // IX CICLO
  { id: "CA2", nombre: "Concreto Armado II", ciclo: 9, prerequisitos: ["CA1"] },
  { id: "ANTISIS", nombre: "Ingeniería Antisísmica", ciclo: 9, prerequisitos: ["AE2"] },
  { id: "PROYF", nombre: "Proyecto final de Ingeniería Civil", ciclo: 9, prerequisitos: ["PMI"] },
  { id: "HIDRAU", nombre: "Hidráulica", ciclo: 9, prerequisitos: ["HIDRO", "INSTSAN"] },
  { id: "VALUACIONES", nombre: "Ingeniería de Valuaciones y Tasaciones", ciclo: 9, prerequisitos: ["PMI", "ICOSTOS"] },
  { id: "DAM", nombre: "Diseño de acero y Madera", ciclo: 9, prerequisitos: ["AE2"] },
  { id: "ELECTIVO9", nombre: "Electivo", ciclo: 9, prerequisitos: [] },

  // X CICLO
  { id: "AGUA", nombre: "Abastecimiento de Agua y Alcantarillado", ciclo: 10, prerequisitos: ["HIDRAU"] },
  { id: "INVEST", nombre: "Trabajo de Investigación", ciclo: 10, prerequisitos: ["PROYF", "ANTISIS"] },
  { id: "ORG", nombre: "Organización y dirección de empresas constructoras", ciclo: 10, prerequisitos: ["VALUACIONES"] },
  { id: "PUENTES", nombre: "Puentes y obras de arte", ciclo: 10, prerequisitos: ["DAM", "CA2"] },
  { id: "ETICA", nombre: "Ética y Moral", ciclo: 10, prerequisitos: [] },
  { id: "ELECTIVO10", nombre: "Electivo", ciclo: 10, prerequisitos: [] }
];
