const malla = document.getElementById("malla");

function agruparPorCiclo(cursos) {
  const ciclos = {};

  cursos.forEach(curso => {
    if (!ciclos[curso.ciclo]) {
      ciclos[curso.ciclo] = [];
    }
    ciclos[curso.ciclo].push(curso);
  });

  return ciclos;
}

function numeroARomano(num) {
  const romanos = [
    "I", "II", "III", "IV", "V",
    "VI", "VII", "VIII", "IX", "X"
  ];
  return romanos[num - 1] || num;
}

function crearMalla() {
  const ciclos = agruparPorCiclo(cursos);

  Object.keys(ciclos)
    .sort((a, b) => a - b)
    .forEach(num => {
      const columna = document.createElement("div");
      columna.className = "ciclo";

      const titulo = document.createElement("h2");
      titulo.innerText = `${numeroARomano(num)} CICLO`;
      columna.appendChild(titulo);

      ciclos[num].forEach(curso => {
        const div = document.createElement("div");
        div.className = "curso";
        div.id = curso.id;
        div.innerText = curso.nombre;

        if (curso.prerequisitos.length === 0) {
          div.classList.add("activo");
        }

        div.addEventListener("click", () => {
          if (!div.classList.contains("activo")) return;

          div.classList.toggle("aprobado");

          cursos.forEach(c => {
            const cursoElemento = document.getElementById(c.id);
            if (cursoElemento.classList.contains("aprobado")) return;

            const desbloqueado = c.prerequisitos.every(pr =>
              document.getElementById(pr)?.classList.contains("aprobado")
            );

            if (desbloqueado) {
              cursoElemento.classList.add("activo");
            }
          });
        });

        columna.appendChild(div);
      });

      malla.appendChild(columna);
    });
}

crearMalla();
