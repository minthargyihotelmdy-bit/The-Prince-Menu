// international/cocktail.js — data for international -> cocktail category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ Cocktail နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalCocktailNames = [
  'Goldel',
  'Baonex',
  'Caruso',
  'Fallen-Angel',
  'Losangele',
  'Robroy',
  'Harvey Wall Benger',
  'Wenbeley',
  'Bloody Marry',
  'Gin Sour',
  'Whisky Sour',
  'Rum Sour',
  'Red Nail',
  'Marlibu Milk Shake',
  'Screw Driver',
  'Vodka Sour'
];

// ၂။ Myanmar Master File ကနေ desc (ပါဝင်ပစ္စည်း)၊ price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].cocktail = internationalCocktailNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'cocktail' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].cocktail[index]; 

  // Data မရှိခဲ့ရင် Error မတက်အောင် ကာကွယ်ထားပါတယ်
  if (!baseData) {
    return { name: enName, desc: '', price: '', img: '' };
  }

  // နာမည်ရယ်၊ မြန်မာကနေ ယူထားတဲ့ price, desc, img ရယ်ကို ပေါင်းထုတ်ပေးပါတယ်
  return {
    name: enName,
    desc: baseData.desc,   // Myanmar ထဲက ပါဝင်ပစ္စည်း (Ingredients) ကို ယူသုံးပါမယ်
    price: baseData.price,  // Myanmar ထဲက ဈေးနှုန်းကို ယူသုံးပါမယ်
    img: baseData.img       // Myanmar ထဲက ပုံကို ယူသုံးပါမယ်
  };
});