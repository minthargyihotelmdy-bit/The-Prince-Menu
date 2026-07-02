// international/soup.js — data for international -> soup category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ စွပ်ပြုတ်နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalSoupNames = [
  'Any Vegetable Soup',
  'Fish Head Soup',
  'Quail Egg and Fish Ball Soup',
  'Spare Rib with Preserved Soup',
  'Chicken Gway Tauk Soup',
  'Chicken with Calabash Soup',
  'Assorted Meat with Vegetable Soup (Chicken, Pork, Fish)',
  'Assorted Meat with Vegetable Soup (Prawn, Seafood)',
  'Tom Yum Soup (Chicken, Pork, Fish)',
  'Tom Yum Soup (Prawn, Seafood)',
  'Thai Soup (Chicken, Pork, Fish)',
  'Thai Soup (Prawn, Seafood)',
  'Preserved Mustard Soup (Chicken, Pork, Fish)',
  'Vermicelli Soup with Bean'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].soup = internationalSoupNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'soup' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].soup[index]; 

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