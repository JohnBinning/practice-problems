const fisherman = (startDay, today) => {
  const start = new Date(startDay);
  const now = new Date(today);
  const fish = [1,2,3,6,7,8,11,12,13];
  const air = [4,5,9,10,15,16];
  const elapsedDays = ((now - start) / 86400000);
  if (fish.includes(elapsedDays % 16 + 1)) {
    return "Fishing";
  } else if (air.includes(elapsedDays % 16 + 1)) {
    return "Airing net";
  } else return "Selling fish";
}
