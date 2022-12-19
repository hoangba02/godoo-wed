import { images } from 'assets/images';

export function Zodiac(date) {
  var day = new Date(date).getDate();
  var month = new Date(date).getMonth() + 1;
  console.log(date);
  console.log(4, day, month);

  switch (month) {
    case 1:
      if (day <= 19 && day > 0) {
        return { name: 'Capricornus', zodiac: images.CapricornusZ };
      }
      if (day > 19 && day <= 31) {
        return { name: 'Aquarius', zodiac: images.AquariusZ };
      }
      break;

    case 2:
      if (day <= 18 && day > 0) {
        return { name: 'Aquarius', zodiac: images.AquariusZ };
      }
      if (day > 18 && day <= 28) {
        return { name: 'Pisces', zodiac: images.PiscesZ };
      }
      break;

    case 3:
      if (day <= 20 && day > 0) {
        return { name: 'Pisces', zodiac: images.PiscesZ };
      }
      if (day > 20 && day <= 31) {
        return { name: 'Aries', zodiac: images.AriesZ };
      }
      break;

    case 4:
      if (day <= 19 && day > 0) {
        return { name: 'Aries', zodiac: images.AriesZ };
      }
      if (day > 19 && day <= 30) {
        return { name: 'Taurus', zodiac: images.TaurusZ };
      }
      break;

    case 5:
      if (day <= 20 && day > 0) {
        return { name: 'Taurus', zodiac: images.TaurusZ };
      }
      if (day > 20 && day <= 31) {
        return { name: 'Gemini', zodiac: images.GeminiZ };
      }
      break;

    case 6:
      if (day <= 21 && day > 0) {
        return { name: 'Gemini', zodiac: images.GeminiZ };
      }
      if (day > 21 && day <= 30) {
        return { name: 'Caner', zodiac: images.CanerZ };
      }
      break;

    case 7:
      if (day <= 22 && day > 0) {
        return { name: 'Caner', zodiac: images.CanerZ };
      }
      if (day > 22 && day <= 31) {
        return { name: 'Leo', zodiac: images.LeoZ };
      }
      break;

    case 8:
      if (day <= 22 && day > 0) {
        return { name: 'Leo', zodiac: images.LeoZ };
      }
      if (day > 22 && day <= 31) {
        return { name: 'Virgo', zodiac: images.VirgoZ };
      }
      break;

    case 9:
      if (day <= 22 && day > 0) {
        return { name: 'Virgo', zodiac: images.VirgoZ };
      }
      if (day > 22 && day <= 30) {
        return { name: 'Libra', zodiac: images.LibraZ };
      }
      break;

    case 10:
      if (day <= 23 && day > 0) {
        return { name: 'Libra', zodiac: images.LibraZ };
      }
      if (day > 23 && day <= 31) {
        return { name: 'Scorpio', zodiac: images.ScorpioZ };
      }
      break;

    case 11:
      if (day <= 21 && day > 0) {
        return { name: 'Scorpio', zodiac: images.ScorpioZ };
      }
      if (day > 21 && day <= 30) {
        return { name: 'Sagitarius', zodiac: images.SagitariusZ };
      }
      break;

    case 12:
      if (day <= 21 && day > 0) {
        return { name: 'Sagitarius', zodiac: images.SagitariusZ };
      } else if (day > 21 && day <= 31) {
        return { name: 'Capricornus', zodiac: images.CapricornusZ };
      }
      break;

    default:
      break;
  }
}
