document.addEventListener("DOMContentLoaded", () => {
  const cursos = [
    { nombre: "Matemática Discreta", abre: ["Cálculo I"] },
    { nombre: "Cálculo I", abre: ["Cálculo II"] },
    { nombre: "Cálculo II" },
    { nombre: "Física I" }
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

