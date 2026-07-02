// chinese/fish.js — data for chinese -> fish category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// ၁။ ငါးဟင်းလျာ နာမည်များကို မူရင်း တရုတ်စာလုံးအတိုင်း ထားပါမယ်
const chineseFishNames = [
  '蒜蓉炒鳝鱼',
  '酸辣鳝鱼',
  '香辣酥炸鳝鱼',
  '砂锅鳝鱼',
  '香辣干炒鲶鱼',
  '越南风味红烧鱼',
  '泰式双味鱼',
  '明炉蒸鱼',
  '腰果炒鱼片',
  '酥炸鱼柳',
  '蚝油炒鱼片',
  '酸辣鱼片',
  '糖醋鱼片',
  '甜汁炸鱼',
  '明达基烤鱼',
  '柠檬汁蒸全鱼',
  '柠檬汤全鱼',
  '红酱辣味炸全鱼',
  '罗望子汁蒸全鱼',
  '酸梅汤蒸全鱼'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['chinese'].fish = chineseFishNames.map((zhName, index) => {
  // Myanmar Data ဆီကနေ 'fish' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].fish[index]; 

  // Data မရှိခဲ့ရင် Error မတက်အောင် ကာကွယ်ထားပါတယ်
  if (!baseData) {
    return { name: zhName, desc: '', price: '', img: '' };
  }

  // တရုတ်နာမည်ရယ်、မြန်မာကနေ ယူထားတဲ့ price, desc, img ရယ်ကို ပေါင်းထုတ်ပေးပါတယ်
  return {
    name: zhName,
    desc: baseData.desc,
    price: baseData.price,
    img: baseData.img
  };
});