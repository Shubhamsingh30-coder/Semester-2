    const logBox = document.getElementById("log");

    function log(message) {
      const div = document.createElement("div");
      div.className = "log-entry";
      div.textContent = message;
      logBox.appendChild(div);
    }

    const grandparent = document.getElementById("grandparent");
    const parent = document.getElementById("parent");
    const child = document.getElementById("child");

    // Capturing phase
    grandparent.addEventListener("click", () => {
      log("Grandparent — Capturing");
    }, true);

    parent.addEventListener("click", () => {
      log("Parent — Capturing");
    }, true);

    // Bubbling phase
    parent.addEventListener("click", () => {
      log("Parent — Bubbling");
    });

    grandparent.addEventListener("click", () => {
      log("Grandparent — Bubbling");
    });

    // Child handlers
    child.addEventListener("click", (e) => {
      log("Child — Handler 1 (stopPropagation)");
      e.stopPropagation();
    });

    child.addEventListener("click", () => {
      log("Child — Handler 2 (will NOT run)");
    });

    child.addEventListener("click", () => {
      log("Child — Handler 3 (will NOT run)");
    });