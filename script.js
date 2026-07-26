document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("messageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Mensaje para Mayra de ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\n\nMensaje para Mayra:\n${message}`
  );

  window.location.href = `mailto:YOUR_EMAIL_HERE?subject=${subject}&body=${body}`;
});
