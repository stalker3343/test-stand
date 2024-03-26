export function listenToScreenWidthChanges(
  callback: () => void,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  function debounce() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  }
  window.addEventListener("resize", debounce);
}
