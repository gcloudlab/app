export const useStorage = (key: string, initialValue: any = null) => {
  if (initialValue) {
    localStorage.setItem(key, JSON.stringify(initialValue));
  } else {
    const storedValue = localStorage.getItem(key);
    if (storedValue && storedValue !== '') {
      return JSON.parse(storedValue);
    }
  }
};
