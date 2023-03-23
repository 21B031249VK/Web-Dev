export interface Product {
  id: number;
  name: string;
  image: string;
  link:string;
  price: number;
  rating: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Султан спагетти 400 г',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h26/46066578554910/sultan-spagetti-400-g-100212199-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/sultan-spagetti-400-g-100212199/?c=750000000#!/item',
    price: 318,
    rating: 3,
    description:
      'Макароны спагетти из твердых сортов пшеницы не развариваются при варке. Превосходный гарнир, сочетающийся с соусами, овощами, мясом или птицей.',
  },
  {
    id: 2,
    name: 'Adal молоко 3.2% 925 мл',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h43/65753894682654/adal-moloko-3-2-925-ml-100982670-1.jpg',
    link: 'https://kaspi.kz/shop/p/adal-moloko-3-2-925-ml-100982670/?c=750000000#!/item',
    price: 715,
    rating: 4,
    description:
      'Молоко "Adal" 3,2% - молоко питьевое, ультрапастеризованное, изготовлено из натурального коровьего молока, удобная упаковка и современные технологии позволяют употреблять такое молоко без предварительной обработки. Полезный и нужный продукт на каждый день',
  },
  {
    id: 3,
    name: 'Яйца Казгер-Кус куриное отборное (О) 30 шт',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h18/47212645974046/kazger-kus-otbornoe-kurinoe-30-st-100236608-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/kazger-kus-kurinoe-otbornoe-o-30-sht-100236608/?c=750000000#!/item',
    price: 1879,
    rating: 3,
    description:
      'Свежие и качественные яйца станут отличной основой для множества вкусных блюд. Они - богатый источник протеина(белка), что так необходим для построения мышц.',
  },
  {
    id: 4,
    name: 'Coca-Cola Classic газированный напиток 2 л',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h37/31743011291166/coca-cola-classic-2-l-100208094-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-2-l-100208094/?c=750000000#!/item',
    price: 625,
    rating: 4,
    description:
      'Coca-Cola – один из самых популярных безалкогольных напитков в истории, а также один из наиболее узнаваемых брендов в мире. Сегодня неповторимый вкус Coca-Cola знаком миллионам людей по всему миру. Она освежает и наполняет энергией, оставляя приятное пряное послевкусие.',
  },
  {
    id: 5,
    name: 'Конфеты Рахат батончик молочный',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/hbd/45002088054814/rahat-marcipan-molocnyj-300-g-102160115-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/konfety-rahat-batonchik-molochnyi-102160115/?c=750000000#!/item',
    price: 1630,
    rating: 5,
    description:
      'Батончик Рахат Молочно-вафельный – это хрустящая вафельная крошка в молочном «батончике», который изготовлен на основе высококачественного растительного жира и молока. Оригинальная конфета, которая обязательно понравится и и детям, и взрослым. Она будет хорошим дополнением любого чаепития.',
  },
  {
    id: 6,
    name: '3 желания Классический кетчуп томатный неострый 250 г',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/hff/46744231149598/3-zelania-klassiceskij-250-g-100971994-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/3-zhelanija-klassicheskii-ketchup-tomatnyi-neostryi-250-g-100971994/?c=750000000#!/item',
    price: 339,
    rating: 2,
    description:
      'Кетчуп из натуральных помидоров обладает насыщенным томатным вкусом с ароматными нотками душистых специй. Великолепно сочетается с мясными блюдами, гарнирами и бутербродами.',
  },
  {
    id: 7,
    name: 'Чай Greenfield Kenyan Sunrise черный листовой 100 пакетиков',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/haa/46674550915102/greenfield-kenyan-sunrise-listovoj-100-paketikov-100210853-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/chai-greenfield-kenyan-sunrise-chernyi-listovoi-100-paketikov-100210853/?c=750000000#!/item',
    price: 1698,
    rating: 5,
    description:
      'Высокогорный кенийский чай из района Керичо. Отличается нежным ароматом, особой насыщенностью и полнотой янтарного настоя. Идеально сочетается с молоком.',
  },
  {
    id: 8,
    name: 'Чипсы LAYS из печи сметана и ароматные травы 85 г',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hbd/46885220352030/lays-iz-peci-smetana-i-aromatnye-travy-85-g-102740900-1.jpg',
    link: 'https://kaspi.kz/shop/p/chipsy-lays-iz-pechi-smetana-i-aromatnye-travy-85-g-102740900/?c=750000000#!/item',
    price: 499,
    rating: 5,
    description:
      'Чипсы с ярким и насыщенным вкусом, который им придают специи и натуральные травы, такие вкусные и хрустящие.',
  },
  {
    id: 9,
    name: 'МАСЛО-ДЕЛ сгущенное молоко Буренка 8.5 % 380 г',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h71/52130408824862/maslodel-burenka-8-5-380-g-100234543-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/maslo-del-sguschennoe-moloko-burenka-8-5-380-g-100234543/?c=750000000#!/item',
    price: 445,
    rating: 2,
    description:
      'Сгущенка "Буренка" от Масло-Дел - натуральный продукт с добавлением caxapа. Прекрасно подходит для выпечки, приготовления кремов, а так же как самостоятельную начинку для десертов и кондитерских изделий.',
  },
  {
    id: 10,
    name: 'ЦАРЬ Геркулес хлопья овсяные 400 г',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h6e/48499918831646/car-gerkules-hlopa-ovsanye-400-g-100222855-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/tsar-gerkules-hlop-ja-ovsjanye-400-g-100222855/?c=750000000#!/item',
    price: 635,
    rating: 4,
    description:
      'Овсяная каша на завтрак считается одной из самых полезных. Она богата витаминами и содержит один из самых важнейших элементов питания – растворимую клетчатку.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
