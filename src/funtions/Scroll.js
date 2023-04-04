export const scrollLeft = (
  className,
  setterLeft,
  setterRight,
  visibleL,
  visibleR
) => {
  const right = document.querySelector(className);
  right.scrollBy(-300, 0);

  const scrollL = right.scrollLeft;

  if (scrollL === 0 && visibleL === true) {
    setterLeft(false);
  }
  if (scrollL <= 610 && visibleR === false) {
    setterRight(true);
  }
};

export const scrollRight = (
  className,
  setterRight,
  setterLeft,
  visibleR,
  visibleL
) => {
  const left = document.querySelector(className);
  left.scrollBy(300, 0);

  const scrollL = left.scrollLeft;

  if (scrollL >= 600 && visibleR === true) {
    setterRight(false);
  }
  if (scrollL >= 0 && visibleL === false) {
    setterLeft(true);
  }
};
