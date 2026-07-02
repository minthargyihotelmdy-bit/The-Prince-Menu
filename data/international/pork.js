// international/pork.js — data for international -> pork category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ဝက်သားဟင်းလျာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalPorkNames = [
  'Stewed Pork with Bamboo Shoots',
  'Fried Pork with Preserved Mustard Spicy',
  'Fried Pork Ball with Sweet Gravy',
  'Fried Pork Basil',
  'Grilled Pork Rib',
  'Hot & Sour Grilled Pork Rib',
  'Stewed Pork',
  'Fried Pork Spare Rib',
  'Fried Flatten Pork',
  'Hot and Sour Colon',
  'Steamed Pork Rib Clay Pot'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].pork = internationalPorkNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'pork' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].pork[index]; 

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