export const getLastTime = (end) => {
  if (end == "undefined") return;
  const today = new Date().getTime() / 1000;
  const seconds = end.seconds - today;
  const day = Math.round(seconds / 86400);
  const hour = Math.round((seconds % 86400) / 3600);
  const minute = Math.round(((seconds % 86400) % 3600) / 60);

  if (day < 0) {
    day = 0;
  }
  if (hour < 0) {
    hour = 0;
  }
  if (minute < 0) {
    minute = 0;
  }
  return day + "일" + hour + "시간" + minute + "분";
};
