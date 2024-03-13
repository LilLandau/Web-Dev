export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    category: 'acoustic guitar',
    name: 'Гитара Yamaha F310 желтый, коричневый',
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 25.0 дюйм.'},
      {subdescr: '-Тип: акустическая'},
      {subdescr: '-Количество струн: 6'} ,
      {subdescr: '-Для левши: Нет'} ,
      {subdescr: '-С подключением: Нет'}
    ],
    price: 63_290,
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/yamaha-f310-zheltyi-korichnevyi-14100411/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h94/h62/63762445795358.jpg?format=gallery-large'
  },
  {
    id: 2,
    category: 'acoustic guitar',
    name: 'Гитара YAMAHA C40 Natural',
    price: 59_190,
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 25.0 дюйм.'},
      {subdescr: '-Тип: акустическая'},
      {subdescr: '-Количество струн: 6'} ,
      {subdescr: '-Для левши: Нет'} ,
      {subdescr: '-С подключением: Нет'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/yamaha-c40-natural-14100052/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h22/63757912277022.jpg?format=gallery-large'
  },
  {
    id: 3,
    category: 'acoustic guitar',
    name: 'Гитара Stagg SA20D-N Natural',
    price: 49_990,
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 25.0 дюйм.'},
      {subdescr: '-Тип: акустическая'},
      {subdescr: '-Количество струн: 6'} ,
      {subdescr: '-Для левши: Нет'} ,
      {subdescr: '-С подключением: Нет'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/stagg-sa20d-n-natural-14100444/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/ha4/63809962016798.jpg?format=gallery-large'
  },
  {
    id: 4,
    category: 'acoustic guitar',
    name: 'Гитара Yamaha F310 TBS Tobacco Sunburst',
    price: 63_290,
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 25.0 дюйм.'},
      {subdescr: '-Тип: акустическая'},
      {subdescr: '-Количество струн: 6'} ,
      {subdescr: '-Для левши: Нет'} ,
      {subdescr: '-С подключением: Нет'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/yamaha-f310-tbs-tobacco-sunburst-14100078/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/hc3/63768523636766.jpg?format=gallery-large'
  },
  {
    id: 5,
    category: 'acoustic guitar',
    name: 'Гитара YAMAHA C40 Black',
    price: 67_390,
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 25.0 дюйм.'},
      {subdescr: '-Тип: акустическая'},
      {subdescr: '-Количество струн: 6'} ,
      {subdescr: '-Для левши: Нет'} ,
      {subdescr: '-С подключением: Нет'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/yamaha-c40-black-14100285/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/h0f/66342946078750.jpg?format=gallery-large'
  },
  {
    id: 6,
    category: 'electric guitar',
    name: 'Электрогитара YAMAHA Pacifica112J BL Black',
    price: 136_090,
    isLikePressed: false,
    description: [
      {subdescr: '-Тип: электрогитара'},
      {subdescr: '-Количество струн: 6'},
      {subdescr: '-Форма корпуса: double cutaway'},
      {subdescr: '-Для левши: Нет'} 
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/yamaha-pacifica112j-bl-black-14200280/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/hc2/63790430158878.jpg?format=gallery-medium'
  },
  {
    id: 7,
    category: 'electric guitar',
    name: 'Электрогитара Ibanez GRG121DX-BKF Black',
    price: 134_990,
    isLikePressed: false,
    description: [
      {subdescr: '-Тип: электрогитара'},
      {subdescr: '-Количество струн: 6'},
      {subdescr: '-Форма корпуса: superstrat'},
      {subdescr: '-Для левши: Нет'} 
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/ibanez-grg121dx-bkf-black-14200417/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h5f/63839171149854.jpg?format=gallery-large'
  },
  {
    id: 8,
    category: 'electric guitar',
    name: 'Электрогитара Squier SQUIER FSR Affinity Stratocaster HSS Olympic White 037-8108-505 бежевыйй',
    price: 186_990,
    isLikePressed: false,
    description: [
      {subdescr: '-Тип: электрогитара'},
      {subdescr: '-Количество струн: 6'},
      {subdescr: '-Форма корпуса: stratocaster'},
      {subdescr: '-Для левши: Нет'} 
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/squier-squier-fsr-affinity-stratocaster-hss-olympic-white-037-8108-505-bezhevyi-109088305/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h21/69455772385310.jpg?format=gallery-large'
  },
  {
    id: 9,
    category: 'electric guitar',
    name: 'Электрогитара Squier Sonic Stratocaster HT 037-3252-580 Arctic White белый',
    price: 101_600,
    isLikePressed: false,
    description: [
      {subdescr: '-Тип: электрогитара'},
      {subdescr: '-Количество струн: 6'},
      {subdescr: '-Форма корпуса: stratocaster'},
      {subdescr: '-Для левши: Нет'} 
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/squier-sonic-stratocaster-ht-037-3252-580-arctic-white-belyi-110453152/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/hf7/80853360640030.jpg?format=gallery-large'
  },
  {
    id: 10,
    category: 'electric guitar',
    name: 'Электрогитара Ibanez Gio GRG121DX Walnut Flat',
    price: 134_990,
    isLikePressed: false,
    description: [
      {subdescr: '-Тип: электрогитара'},
      {subdescr: '-Количество струн: 6'},
      {subdescr: '-Форма корпуса: superstrat'},
      {subdescr: '-Для левши: Нет'} 
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/ibanez-gio-grg121dx-walnut-flat-104108692/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h32/64775406026782.jpg?format=gallery-large'
  },
  {
    id: 11,
    category: 'ukulele',
    name: 'Укулеле Fender 097-1610-557 Venice Soprano Surf Green',
    price: 40_800,
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 14(35 см)'},
      {subdescr: '-Тип: сопрано'},
      {subdescr: '-Количество ладов: 12'},
      {subdescr: '-Цвет: зеленый'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/fender-097-1610-557-venice-soprano-surf-green-15500151/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/he0/63774072373278.jpg?format=gallery-large'
  },
  {
    id: 12,
    category: 'ukulele',
    name: 'Укулеле Fender 097-1610-722 Venice Soprano Natural',
    price: 42_782,
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 14(35 см)'},
      {subdescr: '-Тип: сопрано'},
      {subdescr: '-Количество ладов: 12'},
      {subdescr: '-Цвет: коричневый'}
    ],
    rating: 4.6,
    like: 3,
    link: 'https://kaspi.kz/shop/p/fender-097-1610-722-venice-soprano-natural-15500150/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/h05/63774413815838.jpg?format=gallery-large'
  },
  {
    id: 13,
    category: 'ukulele',
    isLikePressed: false,
    name: 'Укулеле Fender Seaside Soprano Pack Natural',
    price: 57_100,
    description: [
      {subdescr: '-Мензура: 13(33 см)'},
      {subdescr: '-Тип: сопрано'},
      {subdescr: '-Количество ладов: 16'},
      {subdescr: '-Цвет: коричневый'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/fender-seaside-soprano-pack-natural-100271703/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/hc9/63907804971038.jpg?format=gallery-large'
  },
  {
    id: 14,
    category: 'ukulele',
    name: 'Укулеле Fender 097-1610-556 Venice Soprano Shell Pink',
    price: 42_800,
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 13.6(34.5 см)'},
      {subdescr: '-Тип: сопрано'},
      {subdescr: '-Количество ладов: 12'},
      {subdescr: '-Цвет: розовый'}
    ],
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/fender-097-1610-556-venice-soprano-shell-pink-15500149/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/hc0/63763883753502.jpg?format=gallery-large'
  },
  {
    id: 15,
    category: 'ukulele',
    name: 'Укулеле Fender 097-1610-706 Venice Soprano Black',
    isLikePressed: false,
    description: [
      {subdescr: '-Мензура: 13.6(34.5 см)'},
      {subdescr: '-Тип: сопрано'},
      {subdescr: '-Количество ладов: 12'},
      {subdescr: '-Цвет: черный'}
    ],
    price: 42_100,
    rating: 5.0,
    like: 3,
    link: 'https://kaspi.kz/shop/p/fender-097-1610-706-venice-soprano-black-15500146/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h49/63766322020382.jpg?format=gallery-large'
  },
  {
    id: 16,
    category: 'pick',
    name: 'Planet Waves 1CCB4 1 шт',
    isLikePressed: false,
    description: [
      {subdescr: '-Материал: целлулоид'},
      {subdescr: '-Тип: медиатор'},
      {subdescr: '-Тип поверхности: полированная'} ,
      {subdescr: '-Форма: классическая'}
    ],
    price: 140,
    rating: 5.0,
    like: 10,
    link: 'https://kaspi.kz/shop/p/planet-waves-1ccb4-1-sht-106601180/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/h9b/64993532346398.jpg?format=gallery-large'
  },
  {
    id: 17,
    category: 'pick',
    name: 'Planet Waves 3NPR7',
    isLikePressed: false,
    description: [
      {subdescr: '-Материал: нейлон'},
      {subdescr: '-Тип: медиатор'},
      {subdescr: '-Тип поверхности: полированная'} ,
      {subdescr: '-Форма: классическая'}
    ],
    price: 118,
    rating: 5.0,
    like: 10,
    link: 'https://kaspi.kz/shop/p/planet-waves-3npr7-108166523/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/hdc/67174065733662.jpg?format=gallery-large'
  },
  {
    id: 18,
    category: 'pick',
    name: 'Planet Waves 1CCF6 1 шт',
    price: 140,
    isLikePressed: false,
    description: [
      {subdescr: '-Материал: целлулоид'},
      {subdescr: '-Тип: медиатор'},
      {subdescr: '-Тип поверхности: полированная'} ,
      {subdescr: '-Форма: классическая'}
    ],
    rating: 5.0,
    like: 104,
    link: 'https://kaspi.kz/shop/p/planet-waves-1ccf6-1-sht-106601198/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/h73/64488901509150.jpg?format=gallery-large'
  },
  {
    id: 19,
    category: 'pick',
    name: 'Planet Waves 1CMC7 1 шт',
    price: 175,
    isLikePressed: false,
    description: [
      {subdescr: '-Материал: целлулоид'},
      {subdescr: '-Тип: медиатор'},
      {subdescr: '-Тип поверхности: полированная'} ,
      {subdescr: '-Форма: классическая'}
    ],
    rating: 5.0,
    like: 12,
    link: 'https://kaspi.kz/shop/p/planet-waves-1cmc7-1-sht-106601246/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/h1d/64484691509278.jpg?format=gallery-large'
  },
  {
    id: 20,
    category: 'pick',
    name: 'PLANET WAVES 6DRD1-10 1 шт',
    price: 122,
    isLikePressed: false,
    description: [
      {subdescr: '-Материал: делрин'},
      {subdescr: '-Тип: медиатор'},
      {subdescr: '-Тип поверхности: полированная'} ,
      {subdescr: '-Форма: классическая'}
    ],
    rating: 5.0,
    like: 11,
    link: 'https://kaspi.kz/shop/p/planet-waves-6drd1-10-1-sht-108035294/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/hab/66872593481758.jpg?format=gallery-large'
  },
];
