document.getElementById('employeeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const cedula = document.getElementById('cedula').value;
  const telefono = document.getElementById('telefono').value;
  const gmail = document.getElementById('gmail').value;
  const cargo = document.getElementById('cargo').value;
  const sueldo = parseFloat(document.getElementById('sueldo').value);
  const horasExtras = parseFloat(document.getElementById('horasExtras').value);
  const foto = document.getElementById('foto').files[0];

  const codigoEmpleado = `EMP${Math.floor(Math.random() * 10000)}`;
  let sueldoFinal = sueldo;

  if (horasExtras > 30) {
      sueldoFinal += sueldo * 0.20;
  }

  sueldoFinal -= sueldoFinal * 0.05;

  const empleado = {
      nombre,
      apellido,
      cedula,
      telefono,
      gmail,
      codigoEmpleado,
      cargo,
      sueldo: sueldoFinal.toFixed(2),
      horasExtras,
      foto: URL.createObjectURL(foto)
  };

  agregarEmpleadoALista(empleado);
});

function agregarEmpleadoALista(empleado) {
  const employeeList = document.getElementById('employeeList');
  const employeeDiv = document.createElement('div');
  employeeDiv.classList.add('employee');
  employeeDiv.innerHTML = `
      <img src="${empleado.foto}" alt="Foto de ${empleado.nombre}">
      <div>
          <p><strong>Nombre:</strong> ${empleado.nombre}</p>
          <p><strong>Apellido:</strong> ${empleado.apellido}</p>
          <p><strong>Cédula:</strong> ${empleado.cedula}</p>
          <p><strong>Teléfono:</strong> ${empleado.telefono}</p>
          <p><strong>Gmail:</strong> ${empleado.gmail}</p>
          <p><strong>Código de Empleado:</strong> ${empleado.codigoEmpleado}</p>
          <p><strong>Cargo:</strong> ${empleado.cargo}</p>
          <p><strong>Sueldo:</strong> $${empleado.sueldo}</p>
          <p><strong>Horas Extras:</strong> ${empleado.horasExtras}</p>
      </div>
  `;
  employeeList.appendChild(employeeDiv);
}
