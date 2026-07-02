// international/seafood.js — data for international -> seafood category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ပင်လယ်စာဟင်းလျာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalSeafoodNames = [
  'Fried Prawn with Vermicelli Clay Pot',
  'Prawn Zechon Clay Pot',
  'Fried Prawn Shan Hai Sauce',
  'Min Thar Gyi Lobster',
  'Fried Prawn with Quail Egg and Bread',
  'Hot and Sour Prawn',
  'Fried Prawn with Cashew Nut Tamarind Sauce',
  'Prawn Orly',
  'ပုဇွန်ရှန်ဟိုင်းဆော့စ်',
  'ပုဇွန်အားလူးလိပ်',
  'Fried Squid with Spicy Sauce',
  'Hot and Sour Squid',
  'Deep Fried Squid with Spicy',
  'Fried Squid with Oyster Sauce'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].seafood = internationalSeafoodNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'seafood' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].seafood[index]; 

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