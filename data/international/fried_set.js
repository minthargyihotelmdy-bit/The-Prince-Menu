// international/fried_set.js — data for international -> fried_set category
window.menusPartials = window.menusPartials || {};
window.menusPartials['international'] = window.menusPartials['international'] || {};

// ၁။ ထမင်းကြော်/ခေါက်ဆွဲကြော် နာမည်များကိုသာ သီးသန့် Array အနေနဲ့ ထားပါမယ်
const internationalFriedSetNames = [
  'Fried Rice (Chicken/Pork)',
  'Fried Rice (Prawn)',
  'Fried Noodle (Chicken/Pork)',
  'Fried Noodle (Prawn)',
  'Fried Vermicelli (Chicken/Pork)',
  'Fried Vermicelli (Prawn)',
  'Fried Rice Pu Sue Style (Vegetable)',
  'Fried Rice Pu Sue Style (Chicken/Pork)',
  'Fried Rice Pu Sue Style (Prawn)',
  'Fried Rice Thai Style (Vegetable)',
  'Fried Rice Thai Style (Chicken/Pork)',
  'Fried Rice Thai Style (Prawn)',
  'Fried Rice Tom Yum Paste (Vegetable)',
  'Fried Rice Tom Yum Paste (Chicken/Pork)',
  'Fried Rice Tom Yum Paste (Prawn)',
  'Fried Noodle Malaysia Style (Vegetable)',
  'Fried Noodle Malaysia Style (Chicken/Pork)',
  'Fried Noodle Malaysia Style (Prawn)',
  'Fried Yum Yum Noodle (Vegetable)',
  'Fried Yum Yum Noodle (Chicken/Pork)',
  'Fried Yum Yum Noodle (Prawn)',
  'Fried Rice Spain Style (Vegetable)',
  'Fried Rice Spain Style (Chicken/Pork)',
  'Fried Rice Spain Style (Prawn)',
  'Fried Rice with Chicken Drumstick'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['international'].fried_set = internationalFriedSetNames.map((enName, index) => {
  // Myanmar Data ဆီကနေ 'fried_set' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].fried_set[index]; 

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