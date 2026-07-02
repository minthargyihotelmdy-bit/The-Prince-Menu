// chinese/fresh.js — data for chinese -> fresh category
window.menusPartials = window.menusPartials || {};
window.menusPartials['chinese'] = window.menusPartials['chinese'] || {};

// ၁။ သစ်သီးဖျော်ရည် နာမည်များကို မူရင်း တရုတ်စာလုံးအတိုင်း ထားပါမယ်
const chineseFreshNames = [
  '牛油果汁',
  '草莓汁',
  '苹果汁',
  '梨汁',
  '橙汁',
  '火龙果汁',
  '蜂蜜柠檬汁',
  '芒果汁',
  '水果奶昔',
  '百香果汁',
  '木瓜汁',
  '西瓜汁',
  '蜜瓜汁',
  '青柠汁',
  '菠萝汁',
  '水果拼盘（大份）',
  '水果拼盘（小份）',
  '鲜青柠'
];

// ၂။ Myanmar Master File ကနေ desc, price နဲ့ img ကို Auto လှမ်းယူပါမယ်
window.menusPartials['chinese'].fresh = chineseFreshNames.map((zhName, index) => {
  // Myanmar Data ဆီကနေ 'fresh' ထဲက အစီအစဉ် (index) တူတဲ့ data ကို ဆွဲယူပါတယ်
  const baseData = window.menusPartials['myanmar'].fresh[index]; 

  // Data မရှိခဲ့ရင် Error မတက်အောင် ကာကွယ်ထားပါတယ်
  if (!baseData) {
    return { name: zhName, desc: '', price: '', img: '' };
  }

  // တရုတ်နာမည်ရယ်၊ မြန်မာကနေ ယူထားတဲ့ price, desc, img ရယ်ကို ပေါင်းထုတ်ပေးပါတယ်
  return {
    name: zhName,
    desc: baseData.desc,
    price: baseData.price,
    img: baseData.img
  };
});