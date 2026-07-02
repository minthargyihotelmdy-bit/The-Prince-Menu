// international/chicken.js — data for international -> chicken category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ အင်္ဂလိပ်နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalChickenNames = [
  'Hot&SweetChicken',
  'Fried Chicken with Banboo Shoot',
  'Fired Chicken With Basil Leaf',
  'Chicken Kabad',
  'Fired Finger Chicken ',
  'Chicken Omelette',
  'Fired Chicken with Tomyum Paste',
  'Deep Fired Chicken Wing',
  'Fired Chicken ',
  'Fired Chicken Kachin Style'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].chicken = internationalChickenNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'chicken' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].chicken[index]; 

  // Data မရှိခဲ့ရင် Error မတက်အောင် ကာကွယ်ထားပါတယ်
  if (!baseData) {
    return { name: enName, desc: '', price: '', img: '' };
  }

  // အင်္ဂလိပ်နာမည်ရယ်၊ မြန်မာကနေ ယူထားတဲ့ price, desc, img ရယ်ကို ပေါင်းထုတ်ပေးပါတယ်
  return {
    name: enName,
    desc: baseData.desc,
    price: baseData.price,
    img: baseData.img
  };
});