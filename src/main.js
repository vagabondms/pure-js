const loadItems = async () => {
  try {
    const result = await fetch("data/data.json");
    const parsed = result.json();
    return parsed;
  } catch (error) {
    console.error(error);
    return;
  }
};

const init = async () => {
  const items = await loadItems();
  console.log(items);
};

init();
