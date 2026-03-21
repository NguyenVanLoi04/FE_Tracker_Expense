export const renderBarChartData = (data: any[]) => {
  if (!data || data.length === 0) {
    return {};
  }
  const temp: { [key: string]: number[] } = {};
  data.forEach((item) => {
    Object.entries(item).forEach(([key, value]) => {
      if (key !== "date") {
        if (!temp[key]) {
          temp[key] = [];
        }
        temp[key].push(Number(value));
      }
    });
  });
  return temp;
};
