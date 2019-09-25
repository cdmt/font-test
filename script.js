tabluar = () => {
  const element = document.getElementById("tabular");
  if (element.classList.contains("tabular")) {
    element.classList.remove("tabular");
  } else {
    element.classList.add("tabular");
  }
};

zero = () => {
  const element = document.getElementById("zero");
  if (element.classList.contains("zero")) {
    element.classList.remove("zero");
  } else {
    element.classList.add("zero");
  }
};
