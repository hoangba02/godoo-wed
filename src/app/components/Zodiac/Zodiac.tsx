import { images } from 'assets/images';

export function Zodiac(date) {
  var day = new Date(date).getDate();
  var month = new Date(date).getMonth() + 1;

  switch (month) {
    case 1:
      if (day <= 19 && day > 0) {
        return { name: 'Capricorn', zodiac: images.CapricornZ };
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
        return { name: 'Caner', zodiac: images.CancerZ };
      }
      break;

    case 7:
      if (day <= 22 && day > 0) {
        return { name: 'Caner', zodiac: images.CancerZ };
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
        return { name: 'Scorpion', zodiac: images.ScorpionZ };
      }
      break;

    case 11:
      if (day <= 21 && day > 0) {
        return { name: 'Scorpion', zodiac: images.ScorpionZ };
      }
      if (day > 21 && day <= 30) {
        return { name: 'Sagittarius', zodiac: images.SagittariusZ };
      }
      break;

    case 12:
      if (day <= 21 && day > 0) {
        return { name: 'Sagittarius', zodiac: images.SagittariusZ };
      } else if (day > 21 && day <= 31) {
        return { name: 'Capricorn', zodiac: images.CapricornZ };
      }
      break;

    default:
      break;
  }
}

export const zodiacMap = [
  { name: 'Aquarius', zodiac: images.AquariusE },
  { name: 'Pisces', zodiac: images.PiscesE },
  { name: 'Aries', zodiac: images.AriesE },
  { name: 'Taurus', zodiac: images.TaurusE },
  { name: 'Gemini', zodiac: images.GeminiE },
  { name: 'Leo', zodiac: images.LeoE },
  { name: 'Cancer', zodiac: images.CancerE },
  { name: 'Virgo', zodiac: images.VirgoE },
  { name: 'Libra', zodiac: images.LibraE },
  { name: 'Scorpion', zodiac: images.ScorpionE },
  { name: 'Sagittarius', zodiac: images.SagittariusE },
  { name: 'Capricorn', zodiac: images.CapricornE },
];
