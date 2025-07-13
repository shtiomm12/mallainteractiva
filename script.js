document.addEventListener("DOMContentLoaded", () => {
  const cursos = [
    { nombre: "Matemática Discreta", abre: ["Cálculo I"] },
    { nombre: "Geometría Analítica", abre: ["Cálculo I", "Dibujo y Diseño Gráfico"] },
    { nombre: "Filosofía" },
    { nombre: "Ciudadanía Intercultural", abre: ["Introducción a la Economía"] },
    { nombre: "Introducción a la Ingeniería", abre: ["Geología General", "Química General"] },
    { nombre: "Lenguaje" },
    { nombre: "Métodos de Estudio" },
    { nombre: "Accesibilidad y Diseño Universal", abre: ["Discapacidad e Inclusión"] },
    { nombre: "Actividades I", abre: ["Actividades II"] },
    { nombre: "Inglés I", abre: ["Inglés II"] },
    { nombre: "Álgebra Lineal", abre: ["Física I"] },
    { nombre: "Cálculo I", abre: ["Cálculo II", "Física I", "Estadística y Probabilidades I"] },
    { nombre: "Dibujo y Diseño Gráfico" },
    { nombre: "Introducción a la Economía", abre: ["Contabilidad General"] },
    { nombre: "Topografía", abre: ["Topografía Avanzada"] },
    { nombre: "Geología General", abre: ["Tecnología de los Materiales", "Mecánica de Suelos I"] },
    { nombre: "Actividades II" },
    { nombre: "Inglés II" },
    { nombre: "Cálculo II", abre: ["Ecuaciones Diferenciales"] },
    { nombre: "Física I", abre: ["Física II", "Estática", "Dinámica"] },
    { nombre: "Estadística y Probabilidades I" },
    { nombre: "Química General", abre: ["Tecnología del Concreto"] },
    { nombre: "Tecnología de los Materiales", abre: ["Construcción I", "Tecnología del Concreto"] },
    { nombre: "Topografía Avanzada", abre: ["Caminos I"] },
    { nombre: "Física II", abre: ["Instalaciones Eléctricas en Edificaciones"] },
    { nombre: "Ecuaciones Diferenciales", abre: ["Mecánica de Fluidos I"] },
    { nombre: "Estática", abre: ["Resistencia de Materiales I"] },
    { nombre: "Construcción I", abre: ["Caminos I", "Construcción II", "Ecología e Impacto Ambiental", "Instalaciones Eléctricas en Edificaciones"] },
    { nombre: "Dinámica", abre: ["Mecánica de Fluidos I"] },
    { nombre: "Tecnología del Concreto" },
    { nombre: "Resistencia de Materiales I", abre: ["Resistencia de Materiales II"] },
    { nombre: "Caminos I", abre: ["Pavimentos"] },
    { nombre: "Construcción II", abre: ["Presupuesto y Programación de Obra"] },
    { nombre: "Contabilidad General", abre: ["Gestión Financiera"] },
    { nombre: "Ecología e Impacto Ambiental", abre: ["Formulación y Evaluación de Proyectos"] },
    { nombre: "Instalaciones Eléctricas en Edificaciones", abre: ["Presupuesto y Programación de Obra"] },
    { nombre: "Mecánica de Fluidos I", abre: ["Mecánica de Fluidos II", "Instalaciones Sanitarias"] },
    { nombre: "Pavimentos", abre: ["Mecánica de suelos II"] },
    { nombre: "Gestión Financiera", abre: ["Formulación y Evaluación de Proyectos", "Presupuesto y Programación de Obra"] },
    { nombre: "Mecánica de Suelos I", abre: ["Mecánica de suelos II"] },
    { nombre: "Resistencia de Materiales II", abre: ["Análisis Estructural I"] },
    { nombre: "Mecánica de Fluidos II", abre: ["Hidrología"] },
    { nombre: "Análisis Estructural I", abre: ["Análisis Estructural II", "Concreto Armado I"] },
    { nombre: "Formulación y Evaluación de Proyectos", abre: ["Gestión de Proyectos – PMI"] },
    { nombre: "Mecánica de suelos II", abre: ["Concreto Armado I"] },
    { nombre: "Presupuesto y Programación de Obra", abre: ["Ingeniería de Costos"] },
    { nombre: "Discapacidad e Inclusión" },
    { nombre: "Análisis Estructural II", abre: ["Ingeniería Antisísmica", "Diseño de acero y Madera"] },
    { nombre: "Concreto Armado I", abre: ["Concreto Armado II"] },
    { nombre: "Gestión de Proyectos – PMI", abre: ["Proyecto final de Ingeniería Civil", "Ingeniería de Valuaciones y Tasaciones"] },
    { nombre: "Ingeniería de Costos", abre: ["Ingeniería de Valuaciones y Tasaciones"] },
    { nombre: "Hidrología", abre: ["Hidráulica"] },
    { nombre: "Instalaciones Sanitarias", abre: ["Hidráulica"] },
    { nombre: "Concreto Armado II", abre: ["Puentes y obras de arte"] },
    { nombre: "Ingeniería Antisísmica", abre: ["Trabajo de Investigación"] },
    { nombre: "Proyecto final de Ingeniería Civil", abre: ["Trabajo de Investigación"] },
    { nombre: "Hidráulica", abre: ["Abastecimiento de Agua y Alcantarillado"] },
    { nombre: "Ingeniería de Valuaciones y Tasaciones", abre: ["Organización y dirección de empresas constructoras"] },
    { nombre: "Diseño de acero y Madera", abre: ["Puentes y obras de arte"] },
    { nombre: "Electivo" },
    { nombre: "Abastecimiento de Agua y Alcantarillado" },
    { nombre: "Trabajo de Investigación" },
    { nombre: "Organización y dirección de empresas constructoras" },
    { nombre: "Puentes y obras de arte" },
    { nombre: "Ética y Moral" }
  ];

  const malla = document.getElementById("malla");
  const estado = {};

  cursos.forEach(curso => {
    estado[curso.nombre] = false;
    const div = document.createElement("div");
    div.className = "curso";
    div.textContent = curso.nombre;

    div.addEventListener("click", () => {
      estado[curso.nombre] = !estado[curso.nombre];
      div.classList.toggle("aprobado");

      if (curso.abre) {
        curso.abre.forEach(nombre => {
          const target = document.querySelector(`[data-nombre='${nombre}']`);
          if (target && estado[curso.nombre]) {
            target.classList.add("habilitado");
          }
        });
      }
    });

    div.setAttribute("data-nombre", curso.nombre);
    malla.appendChild(div);
  });
});

