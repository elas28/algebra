const apiUrl = `https://catfact.ninja/fact`;

document.querySelector("button").addEventListener("click", () => {
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          return response.json();
        }
      });
    })
