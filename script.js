document.addEventListener("DOMContentLoaded", () => {
  const dependencies = {
    "Matemática Discreta": ["Cálculo I"],
    "Geometría Analítica": ["Cálculo I", "Dibujo y Diseño Gráfico"],
    "Ciudadanía Intercultural": ["Introducción a la Economía"],
    "Introducción a la Ingeniería": ["Geología General", "Química General"],
    "Accesibilidad y Diseño Universal": ["Discapacidad e Inclusión"],
    "Actividades I": ["Actividades II"],
    "Inglés I": ["Inglés II"],
    "Álgebra Lineal": ["Física I"],
    "Cálculo I": ["Cálculo II", "Física I", "Estadística y Probabilidades I"],
    "Introducción a la Economía": ["Contabilidad General"],
    "Topografía": ["Topografía Avanzada"],
    "Geología General": ["Tecnología de los Materiales", "Mecánica de Suelos I"],
    "Química General": ["Tecnología del Concreto"],
    "Tecnología de los Materiales": ["Construcción I", "Tecnología del Concreto"],
    "Topografía Avanzada": ["Caminos I"],
    "Física I": ["Física II", "Estática", "Dinámica"],
    "Cálculo II": ["Ecuaciones Diferenciales"],
    "Ecuaciones Diferenciales": ["Mecánica de Fluidos I"],
    "Estática": ["Resistencia de Materiales I"],
    "Construcción I": ["Caminos I", "Construcción II", "Ecología e Impacto Ambiental", "Instalaciones Eléctricas en Edificaciones"],
    "Dinámica": ["Mecánica de Fluidos I"],
    "Resistencia de Materiales I": ["Resistencia de Materiales II"],
    "Caminos I": ["Pavimentos"],
    "Construcción II": ["Presupuesto y Programación de Obra"],
    "Contabilidad General": ["Gestión Financiera"],
    "Ecología e Impacto Ambiental": ["Formulación y Evaluación de Proyectos"],
    "Instalaciones Eléctricas en Edificaciones": ["Presupuesto y Programación de Obra"],
    "Mecánica de Fluidos I": ["Mecánica de Fluidos II", "Instalaciones Sanitarias"],
    "Pavimentos": ["Mecánica de suelos II"],
    "Mecánica de Suelos I": ["Mecánica de suelos II"],
    "Gestión Financiera": ["Formulación y Evaluación de Proyectos", "Presupuesto y Programación de Obra"],
    "Resistencia de Materiales II": ["Análisis Estructural I"],
    "Mecánica de Fluidos II": ["Hidrología"],
    "Análisis Estructural I": ["Análisis Estructural II", "Concreto Armado I"],
    "Formulación y Evaluación de Proyectos": ["Gestión de Proyectos – PMI"],
    "Mecánica de suelos II": ["Concreto Armado I"],
    "Presupuesto y Programación de Obra": ["Ingeniería de Costos"],
    "Análisis Estructural II": ["Ingeniería Antisísmica", "Diseño de acero y Madera"],
    "Concreto Armado I": ["Concreto Armado II"],
    "Gestión de Proyectos – PMI": ["Proyecto final de Ingeniería Civil", "Ingeniería de Valuaciones y Tasaciones"],
    "Ingeniería de Costos": ["Ingeniería de Valuaciones y Tasaciones"],
    "Hidrología": ["Hidráulica"],
    "Instalaciones Sanitarias": ["Hidráulica"],
    "Concreto Armado II": ["Puentes y obras de arte"],
    "Ingeniería Antisísmica": ["Trabajo de Investigación"],
    "Proyecto final de Ingeniería Civil": ["Trabajo de Investigación"],
    "Hidráulica": ["Abastecimiento de Agua y Alcantarillado"],
    "Ingeniería de Valuaciones y Tasaciones": ["Organización y dirección de empresas constructoras"],
    "Diseño de acero y Madera": ["Puentes y obras de arte"]
  };

  function marcarNodo(nombre, clase) {
    const selector = `[id*='${nombre.replaceAll(" ", "_")}_']`;
    const nodos = document.querySelectorAll(selector);
    nodos.forEach(n => n.classList.add(clase));
  }

  function activar(nombre) {
    marcarNodo(nombre, "aprobado");
    (dependencies[nombre] || []).forEach(dep => {
      marcarNodo(dep, "habilitado");
    });
  }

  document.addEventListener("click", (e) => {
    const nodo = e.target.closest(".node");
    if (!nodo) return;
    const label = nodo.querySelector("tspan");
    if (!label) return;
    const nombre = label.textContent.trim();
    if (!nodo.classList.contains("aprobado")) {
      activar(nombre);
    }
  });
});

