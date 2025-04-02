import ReactGA4 from "react-ga4";

export function arrayShuffler<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let temporaryValue: T;
  let randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const eventSenderGA = (
  category: string,
  action: string,
  label: string
) => {
  ReactGA4.event({
    category,
    action,
    label,
  });
};
