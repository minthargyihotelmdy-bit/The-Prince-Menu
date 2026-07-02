// international/light_food.js — data for international -> light_food category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ အပေါ့စားအစားအစာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalLightFoodNames = [
  'Toast Butter & Jam',
  'Bombay Toast',
  'Hamburger (Chicken/Pork)',
  'Sandwich (Chicken/Cheese)',
  'Sandwich (Tuna Sardine)',
  'Fried Cashew Nut',
  'Fried Finger Potatoes',
  'Fried Potato Chips',
  'Myanmar Tea-leaf Salad',
  'Myanmar Ginger Salad',
  'Tomato Salad'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].light_food = internationalLightFoodNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'light_food' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].light_food[index]; 

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