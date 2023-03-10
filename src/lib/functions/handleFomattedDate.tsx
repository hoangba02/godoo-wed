export const now = new Date();

export function getFormattedDate(date: Date | string | number) {
  // Lấy ngày, tháng và năm từ đối tượng Date
  if (!(date instanceof Date)) {
    return;
  }
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  // Trả về chuỗi định dạng dd/mm/yyyy
  return `${day}/${month}/${year}`;
}

export function getFormattedNewDate(date: string) {
  const newDate = new Date(Date.parse(date));
  return newDate;
}

export function isAgeEnough(date: Date | string | number): boolean | string {
  if (!(date instanceof Date)) {
    return 'error';
  }
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
    age--;
  }
  return age <= 15;
}
