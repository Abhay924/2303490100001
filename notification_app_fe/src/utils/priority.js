const typePriority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};
export function getPriorityList(items, count = 10) {
  const ranked = items.map((item) => {
    const priority = typePriority[item.Type] || 0;
    const timeValue = new Date(item.Timestamp).getTime();
    return {
      ...item,
      rankingScore: priority * 1000000000000 + timeValue,
    };
  });
  ranked.sort((first, second) => {
    return second.rankingScore - first.rankingScore;
  });
  return ranked.slice(0, count);
}