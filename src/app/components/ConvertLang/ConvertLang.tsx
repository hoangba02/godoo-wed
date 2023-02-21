export function convertLang(str) {
  // bắt đầu xóa dấu tiếng việt  trong chuỗi
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str;
}
export const handleClearSpecialCharacter = (str: string) => {
  const newStr = convertLang(str);
  return newStr;
};

// export const handleClearSpecialCharacter = (str: string) => {
//   return str
//     .normalize('NFD')
//     .replace(/[\u0300-\u036f]/g, '')
//     .replace(/đ/g, 'd')
//     .replace(/Đ/g, 'D');
// };
export function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

const charMap = {
  // Chữ cái có dấu
  à: 'a',
  á: 'a',
  ạ: 'a',
  ả: 'a',
  ã: 'a',
  ă: 'a',
  ằ: 'a',
  ắ: 'a',
  ặ: 'a',
  ẳ: 'a',
  ẵ: 'a',
  â: 'a',
  ầ: 'a',
  ấ: 'a',
  ậ: 'a',
  ẩ: 'a',
  ẫ: 'a',
  è: 'e',
  é: 'e',
  ẹ: 'e',
  ẻ: 'e',
  ẽ: 'e',
  ê: 'e',
  ề: 'e',
  ế: 'e',
  ệ: 'e',
  ể: 'e',
  ễ: 'e',
  ì: 'i',
  í: 'i',
  ị: 'i',
  ỉ: 'i',
  ĩ: 'i',
  ò: 'o',
  ó: 'o',
  ọ: 'o',
  ỏ: 'o',
  õ: 'o',
  ô: 'o',
  ồ: 'o',
  ố: 'o',
  ộ: 'o',
  ổ: 'o',
  ỗ: 'o',
  ơ: 'o',
  ờ: 'o',
  ớ: 'o',
  ợ: 'o',
  ở: 'o',
  ỡ: 'o',
  ù: 'u',
  ú: 'u',
  ụ: 'u',
  ủ: 'u',
  ũ: 'u',
  ư: 'u',
  ừ: 'u',
  ứ: 'u',
  ự: 'u',
  ử: 'u',
  ữ: 'u',
  ỳ: 'y',
  ý: 'y',
  ỵ: 'y',
  ỷ: 'y',
  ỹ: 'y',
  // Chữ cái có ký tự đặc biệt
  đ: 'd',
  // Chữ cái in hoa có dấu
  À: 'A',
  Á: 'A',
  Ạ: 'A',
  Ả: 'A',
  Ã: 'A',
  Ă: 'A',
  Ằ: 'A',
  Ắ: 'A',
  Ặ: 'A',
  Ẳ: 'A',
  Ẵ: 'A',
  Â: 'A',
  Ầ: 'A',
  Ấ: 'A',
  Ậ: 'A',
  Ẩ: 'A',
  Ẫ: 'A',
  È: 'E',
  É: 'E',
  Ẹ: 'E',
  Ẻ: 'E',
  Ẽ: 'E',
  Ê: 'E',
  Ề: 'E',
  Ế: 'E',
  Ệ: 'E',
  Ể: 'E',
  Ễ: 'E',
  Ì: 'I',
  Í: 'I',
  Ị: 'I',
  Ỉ: 'I',
  Ĩ: 'I',
  Ò: 'O',
  Ó: 'O',
  Ọ: 'O',
  Ỏ: 'O',
  Õ: 'O',
  Ô: 'O',
  Ồ: 'O',
  Ố: 'O',
  Ộ: 'O',
  Ổ: 'O',
  Ỗ: 'O',
  Ơ: 'O',
  Ờ: 'O',
  Ớ: 'O',
  Ợ: 'O',
  Ở: 'O',
  Ỡ: 'O',
  Ù: 'U',
  Ú: 'U',
  Ụ: 'U',
  Ủ: 'U',
  Ũ: 'U',
  Ư: 'U',
  Ừ: 'U',
  Ứ: 'U',
  Ự: 'U',
  Ử: 'U',
  Ữ: 'U',
  Ỳ: 'Y',
  Ý: 'Y',
  Ỵ: 'Y',
  Ỷ: 'Y',
  Ỹ: 'Y',
};
export function transformInput(input) {
  let transformedInput = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    transformedInput += charMap[char] || char;
  }

  return transformedInput;
}
