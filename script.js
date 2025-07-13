const curriculum = {
  semesters: [
    {
      name: "Ciclo 1",
      courses: [
        { name: "Matemática Discreta", prerequisites: [] },
        { name: "Geometría Analítica", prerequisites: [] },
        { name: "Filosofía", prerequisites: [] },
        { name: "Ciudadanía Intercultural", prerequisites: [] },
        { name: "Introducción a la Ingeniería", prerequisites: [] },
        { name: "Lenguaje", prerequisites: [] },
        { name: "Métodos de Estudio", prerequisites: [] },
        { name: "Accesibilidad y Diseño Universal", prerequisites: [] },
        { name: "Actividades I", prerequisites: [] },
        { name: "Inglés I", prerequisites: [] }
      ]
    },
    {
      name: "Ciclo 2",
      courses: [
        { name: "Álgebra Lineal", prerequisites: [] },
        { name: "Cálculo I", prerequisites: ["Matemática Discreta", "Geometría Analítica"] },
        { name: "Dibujo y Diseño Gráfico", prerequisites: ["Geometría Analítica"] },
        { name: "Introducción a la Economía", prerequisites: ["Ciudadanía Intercultural"] },
        { name: "Topografía", prerequisites: [] },
        { name: "Geología General", prerequisites: ["Introducción a la Ingeniería"] },
        { name: "Actividades II", prerequisites: ["Actividades I"] },
        { name: "Inglés II", prerequisites: ["Inglés I"] }
      ]
    },
    {
      name: "Ciclo 3",
      courses: [
        { name: "Cálculo II", prerequisites: ["Cálculo I"] },
        { name: "Física I", prerequisites: ["Álgebra Lineal", "Cálculo I"] },
        { name: "Estadística y Probabilidades I", prerequisites: ["Cálculo I"] },
        { name: "Química General", prerequisites: ["Introducción a la Ingeniería"] },
        { name: "Tecnología de los Materiales", prerequisites: ["Geología General"] },
        { name: "Topografía Avanzada", prerequisites: ["Topografía"] }
      ]
    },
    {
      name: "Ciclo 4",
      courses: [
        { name: "Física II", prerequisites: ["Física I"] },
        { name: "Ecuaciones Diferenciales", prerequisites: ["Cálculo II"] },
        { name: "Estática", prerequisites: ["Física I"] },
        { name: "Construcción I", prerequisites: ["Tecnología de los Materiales"] },
        { name: "Dinámica", prerequisites: ["Física I"] },
        { name: "Tecnología del Concreto", prerequisites: ["Química General", "Tecnología de los Materiales"] }
      ]
    },
    {
      name: "Ciclo 5",
      courses: [
        { name: "Resistencia de Materiales I", prerequisites: ["Estática"] },
        { name: "Caminos I", prerequisites: ["Topografía Avanzada", "Construcción I"] },
        { name: "Construcción II", prerequisites: ["Construcción I"] },
        { name: "Contabilidad General", prerequisites: ["Introducción a la Economía"] },
        { name: "Ecología e Impacto Ambiental", prerequisites: ["Construcción I"] },
        { name: "Instalaciones Eléctricas en Edificaciones", prerequisites: ["Física II", "Construcción I"] }
      ]
    },
    {
      name: "Ciclo 6",
      courses: [
        { name: "Mecánica de Fluidos I", prerequisites: ["Dinámica", "Ecuaciones Diferenciales"] },
        { name: "Pavimentos", prerequisites: ["Caminos I"] },
        { name: "Gestión Financiera", prerequisites: ["Contabilidad General"] },
        { name: "Mecánica de Suelos I", prerequisites: ["Tecnología de los Materiales"] },
        { name: "Resistencia de Materiales II", prerequisites: ["Resistencia de Materiales I"] }
      ]
    },
    {
      name: "Ciclo 7",
      courses: [
        { name: "Mecánica de Fluidos II", prerequisites: ["Mecánica de Fluidos I"] },
        { name: "Análisis Estructural I", prerequisites: ["Resistencia de Materiales II"] },
        { name: "Formulación y Evaluación de Proyectos", prerequisites: ["Ecología e Impacto Ambiental", "Gestión Financiera"] },
        { name: "Mecánica de suelos II", prerequisites: ["Mecánica de Suelos I", "Pavimentos"] },
        { name: "Presupuesto y Programación de Obra", prerequisites: ["Construcción II", "Instalaciones Eléctricas en Edificaciones", "Gestión Financiera"] },
        { name: "Discapacidad e Inclusión", prerequisites: ["Accesibilidad y Diseño Universal"] }
      ]
    },
    {
      name: "Ciclo 8",
      courses: [
        { name: "Análisis Estructural II", prerequisites: ["Análisis Estructural I"] },
        { name: "Concreto Armado I", prerequisites: ["Análisis Estructural I", "Mecánica de suelos II"] },
        { name: "Gestión de Proyectos – PMI", prerequisites: ["Formulación y Evaluación de Proyectos"] },
        { name: "Ingeniería de Costos", prerequisites: ["Presupuesto y Programación de Obra"] },
        { name: "Hidrología", prerequisites: ["Mecánica de Fluidos II"] },
        { name: "Instalaciones Sanitarias", prerequisites: ["Mecánica de Fluidos I"] }
      ]
    },
    {
      name: "Ciclo 9",
      courses: [
        { name: "Concreto Armado II", prerequisites: ["Concreto Armado I"] },
        { name: "Ingeniería Antisísmica", prerequisites: ["Análisis Estructural II"] },
        { name: "Proyecto final de Ingeniería Civil", prerequisites: ["Gestión de Proyectos – PMI"] },
        { name: "Hidráulica", prerequisites: ["Hidrología", "Instalaciones Sanitarias"] },
        { name: "Ingeniería de Valuaciones y Tasaciones", prerequisites: ["Gestión de Proyectos – PMI", "Ingeniería de Costos"] },
        { name: "Diseño de acero y Madera", prerequisites: ["Análisis Estructural II"] },
        { name: "Electivo", prerequisites: [] }
      ]
    },
    {
      name: "Ciclo 10",
      courses: [
        { name: "Abastecimiento de Agua y Alcantarillado", prerequisites: ["Hidráulica"] },
        { name: "Trabajo de Investigación", prerequisites: ["Ingeniería Antisísmica", "Proyecto final de Ingeniería Civil"] },
        { name: "Organización y dirección de empresas constructoras", prerequisites: ["Ingeniería de Valuaciones y Tasaciones"] },
        { name: "Puentes y obras de arte", prerequisites: ["Concreto Armado II", "Diseño de acero y Madera"] },
        { name: "Ética y Moral", prerequisites: [] },
        { name: "Electivo", prerequisites: [] }
      ]
    }
  ]
};

