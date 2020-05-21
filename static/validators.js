export const showMessage = (element, message) => {
  if (element instanceof HTMLElement) {
    element.innerText = message;
  }
};

export const isHexadecimal = (color) => !!String(color).match(/^#([A-Fa-f0-9]{6})$/g);