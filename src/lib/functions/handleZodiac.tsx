import { images } from 'assets/images';

export const handleZodiac = (date: any) => {
  var day = new Date(date).getDate();
  var month = new Date(date).getMonth() + 1;

  if (date === '') {
    day = new Date().getDate();
    month = new Date().getMonth() + 1;
  }

  switch (month) {
    case 1:
      if (day <= 19 && day > 0) {
        return { name: 'Capricorn', zodiac: images.Capricorn };
      }
      if (day > 19 && day <= 31) {
        return { name: 'Aquarius', zodiac: images.Aquarius };
      }
      break;

    case 2:
      if (day <= 18 && day > 0) {
        return { name: 'Aquarius', zodiac: images.Aquarius };
      }
      if (day > 18 && day <= 28) {
        return { name: 'Pisces', zodiac: images.Pisces };
      }
      break;

    case 3:
      if (day <= 20 && day > 0) {
        return { name: 'Pisces', zodiac: images.Pisces };
      }
      if (day > 20 && day <= 31) {
        return { name: 'Aries', zodiac: images.Aries };
      }
      break;

    case 4:
      if (day <= 19 && day > 0) {
        return { name: 'Aries', zodiac: images.Aries };
      }
      if (day > 19 && day <= 30) {
        return { name: 'Taurus', zodiac: images.Taurus };
      }
      break;

    case 5:
      if (day <= 20 && day > 0) {
        return { name: 'Taurus', zodiac: images.Taurus };
      }
      if (day > 20 && day <= 31) {
        return { name: 'Gemini', zodiac: images.Gemini };
      }
      break;

    case 6:
      if (day <= 21 && day > 0) {
        return { name: 'Gemini', zodiac: images.Gemini };
      }
      if (day > 21 && day <= 30) {
        return { name: 'Caner', zodiac: images.Cancer };
      }
      break;

    case 7:
      if (day <= 22 && day > 0) {
        return { name: 'Caner', zodiac: images.Cancer };
      }
      if (day > 22 && day <= 31) {
        return { name: 'Leo', zodiac: images.Leo };
      }
      break;

    case 8:
      if (day <= 22 && day > 0) {
        return { name: 'Leo', zodiac: images.Leo };
      }
      if (day > 22 && day <= 31) {
        return { name: 'Virgo', zodiac: images.Virgo };
      }
      break;

    case 9:
      if (day <= 22 && day > 0) {
        return { name: 'Virgo', zodiac: images.Virgo };
      }
      if (day > 22 && day <= 30) {
        return { name: 'Libra', zodiac: images.Libra };
      }
      break;

    case 10:
      if (day <= 23 && day > 0) {
        return { name: 'Libra', zodiac: images.Libra };
      }
      if (day > 23 && day <= 31) {
        return { name: 'Scorpion', zodiac: images.Scorpion };
      }
      break;

    case 11:
      if (day <= 21 && day > 0) {
        return { name: 'Scorpion', zodiac: images.Scorpion };
      }
      if (day > 21 && day <= 30) {
        return { name: 'Sagittarius', zodiac: images.Sagittarius };
      }
      break;

    case 12:
      if (day <= 21 && day > 0) {
        return { name: 'Sagittarius', zodiac: images.Sagittarius };
      } else if (day > 21 && day <= 31) {
        return { name: 'Capricorn', zodiac: images.Capricorn };
      }
      break;

    default:
      break;
  }
};
