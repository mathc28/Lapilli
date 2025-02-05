document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login_form");
  const eventManager = document.querySelector("#event_manager");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("mdp").value.trim();

      if (email === "contact@lapilli.com" && password === "elsageraud2022") {
          localStorage.setItem("token", "faketoken123456");
          eventManager.style.display = "block";
          form.style.display = "none"; // Cacher le formulaire après connexion
          loadEvents(); // Charger les événements existants
      } else {
          document.getElementById("errorlogin").textContent = "Identifiants incorrects";
      }
  });
});
