import React from "react";

function useLocalStorage(nameItem, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const localStorageItem = localStorage.getItem(nameItem);
  let parsedItem;
  React.useEffect(() => {
    setTimeout(() => {
      try {
        if (!localStorageItem) {
          localStorage.setItem(nameItem, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
        console.log(loading);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  });

  const saveItem = (newItem) => {
    try {
      const stringfieldItem = JSON.stringify(newItem);
      localStorage.setItem(nameItem, stringfieldItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
