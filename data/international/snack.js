// international/snack.js — data for international -> snack category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ အမြည်းနှင့် အဆာပြေနာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalSnackNames = [
  'Fried Assorted Meats',
  'Fried Chicken, Pork, Finger Fish and Cashew Nuts',
  'Fried Whole Chicken',
  'Steamed Chicken with Assorted Vegetable Soup',
  'Farmer Style Catfish Soup',
  'Fried Organic Chicken',
  'Fried Pork Offal',
  'Steamed Three-Layer Pork',
  'Fried Grilled Pork Rib',
  'Fried Pork Spare Rib',
  'Prawn Tempura',
  'Fried Potato with Prawn'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].snack = internationalSnackNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'snack' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].snack[index]; 

  // Data မရှိခဲ့ရင် Error မတက်အောင် ကာကွယ်ထားပါတယ်
  if (!baseData) {
    return { name: enName, desc: '', price: '', img: '' };
  }

  // နာမည်ရယ်၊ မြန်မာကနေ ယူထားတဲ့ price, desc, img ရယ်ကို ပေါင်းထုတ်ပေးပါတယ်
  return {
    name: enName,
    desc: baseData.desc,
    price: baseData.price,
    img: baseData.img
  };
});