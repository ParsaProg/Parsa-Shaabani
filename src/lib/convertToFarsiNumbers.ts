export default function EnToFaCn(text: any) {
  const englishToFarsi: any = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  return text ? text.replace(/[0-9]/g, (m: any) => englishToFarsi[m]) : text;
}
