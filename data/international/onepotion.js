// international/onepotion.js — data for international -> onepotion category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ တစ်ပွဲကျွေးဟင်းလျာ နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalOnePotionNames = [
  'Hot and Sour Chicken + Rice',
  'Chicken Kabad + Rice',
  'Chicken Salad + Rice',
  'Sauteed Chicken + Rice',
  'Chicken with Curry Powder + Rice',
  'Hot and Sour Pork + Rice',
  'Sauteed Pork + Rice',
  'Pork Salad + Rice',
  'Pork with Basil Leaf + Rice',
  'Colon Salad + Rice',
  'Hot and Sour Colon + Rice',
  'Hot and Sour Grilled Pork Rib + Rice',
  'Sauteed Fish + Rice',
  'Hot and Sour Fish + Rice',
  'Prawn Salad + Rice',
  'Hot and Sour Prawn + Rice',
  'Sauteed Prawn + Rice',
  'Squid Salad + Rice',
  'Hot and Sour Squid + Rice',
  'Sauteed Squid + Rice',
  'Deep Fried Mutton + Rice',
  'Mutton Kabad + Rice',
  'Beef with Basil Leaf + Rice'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].onepotion = internationalOnePotionNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'onepotion' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].onepotion[index]; 

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