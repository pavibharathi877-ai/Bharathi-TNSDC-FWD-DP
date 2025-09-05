<!DOCTYPE html>

<html>

<head>

  <title>My Portfolio</title>

</head>

<body>

  <h1 id="name">My Portfolio</h1>

  <p id="intro"></p>

  <h2>Projects</h2>

  <ul id="projects"></ul>

  <script>

    // Add intro text with JavaScript

    document.getElementById("intro").innerText = "Hi! I am learning JavaScript and web development.";

    // Add projects dynamically

    let projectList = ["Portfolio Website", "Todo App", "Calculator"];

    let ul = document.getElementById("projects");

    projectList.forEach(p => {

      let li = document.createElement("li");

      li.textContent = p;

      ul.appendChild(li);

    });

  </script>

</body>

</html>