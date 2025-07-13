const container = document.getElementById("container");

function crearMalla() {
  cursos.forEach(curso => {
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
        if (document.getElementById(c.id).classList.contains("aprobado")) return;

        const desbloqueado = c.prerequisitos.every(pr =>
          document.getElementById(pr).classList.contains("aprobado")
        );

        if (desbloqueado) {
          document.getElementById(c.id).classList.add("activo");
        }
      });
    });

    container.appendChild(div);
  });
}

crearMalla();
