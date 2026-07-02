// international/fish.js — data for international -> fish category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ငါးဟင်းလျာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalFishNames = [
  'Fired Eel with Garlic',
  'Hot and Sour Eel',
  'Deep Fired Eel with Spicy',
  'Eel Calay Pot',
  'ငါးခူခြောက်စပ်',
  'ဗီယက်နမ် ငါးကြော်နှပ်',
  'ယိုးဒယားငါးနှစ်မျက်နှာ',
  'ငါးသင်္ဘော',
  'Fired fish with Cashwe Nut',
  'Fired finger Fish',
  'Fired Slice Fish with Oyster Wine',
  'Hot and Sour Fish',
  'Sweet and Sour Fish',
  'Fried fish with Sweet Greavy',
  'Min Thar Gyi Grilled Fish',
  'Steamed Whole Fish with Lemon Sauce',
  'Setaned Whole Fish with Lemon Soup',
  'Fired Whole Fish with Red Spicy Sauce',
  'Steamed Whole Fish with Tamarind Sauce',
  'Steamed Whole fish with Salted Damson Soup'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].fish = internationalFishNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'fish' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].fish[index]; 

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