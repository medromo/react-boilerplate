const enterAsTab = (keyPressEvent, formElement, exceptionsId) => {
  if (keyPressEvent.key === "Enter") {
    const nodes = Array.from(
      formElement.querySelectorAll("input, select, textarea")
    ).filter(input => window.getComputedStyle(input).display !== "none");
    const index = nodes.indexOf(keyPressEvent.target);
    if (index < nodes.length - 1) {
      if (exceptionsId?.includes(keyPressEvent.target.id)) return;
      keyPressEvent.preventDefault();
      nodes[index + 1].focus();
    }
  }
};

export { enterAsTab };
