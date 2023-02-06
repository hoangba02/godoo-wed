export function format(time) {
  const today = time;
  const yyyy = today.getFullYear();
  let mm =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  let dd = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  return dd + '/' + mm + '/' + yyyy;
}
