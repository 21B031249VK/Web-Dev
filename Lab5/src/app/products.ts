export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  image1: string;
  image2: string;
  image3: string;
  isActive:boolean;
  likes:number;
  categoryId:number;
  currentCategory:number;
}
export const products = [
  {
    id: 1,
    name: 'Книга Уайльд О.: Портрет Дориана Грея',
    price: 1304,
    description: `"Портрет Дориана Грея" - самое знаменитое произведение Оскара Уайльда,
     единственный его роман, вызвавший в свое время шквал негативных оценок и тем не менее имевший невероятный успех.
     Главный герой романа, красавец Дориан, - фигура двойственная, неоднозначная. Тонкий эстет и романтик становится безжалостным преступником.
     Попытка сохранить свою необычайную красоту и молодость оборачивается провалом. Вместо героя стареет его портрет - но это не может продолжаться вечно,
     и смерть Дориана расставляет все по своим местам. Роман Оскара Уайльда продолжает быть очень актуальным и сегодня
     - разве погоня за вечной молодостью порой не оборачивается потерей своего истинного лица?
    `,
    url: `https://kaspi.kz/shop/p/uail-d-o-portret-doriana-greja-100996924/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/h9a/33377874673694/uajld-o-portret-doriana-grea-100996924-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/hf1/33377879457822/uajld-o-portret-doriana-grea-100996924-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h13/62304056836126/uajld-o-portret-doriana-grea-100996924-5.jpg`,
    isActive:true,
    rates1: 4,
    rates2: 1,
    rates3: 4,
    rates4: 11,
    rates5: 20,
    likes:0,
    categoryId:1,
    currentCategory:-1
  },
  {
    id: 2,
    name: 'Книга Ремарк Э. М.: Триумфальная арка',
    price: 2833,
    description: `«Триумфальная арка» – пронзительная история любви всему наперекор, любви, приносящей боль, но и дарующей бесконечную радость.
    Место действия – Париж накануне Второй мировой войны. Герой – беженец из Германии, без документов, скрывающийся и от французов, и от нацистов,
    хирург, спасающий человеческие жизни. Героиня – итальянская актриса, окруженная поклонниками, вспыльчивая, как все артисты, прекрасная и неотразимая.
    И время, когда влюбленным довелось встретиться, и город, пронизанный ощущением надвигающейся катастрофы, становятся героями этого романа.
    «Триумфальная арка» была дважды экранизирована и по-прежнему покоряет читателей всего мира.`,
    url: `https://kaspi.kz/shop/p/remark-e-m-triumfal-naja-arka-26025852/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/hc1/31836880273438/remark-e-m-triumfalnaa-arka-26025852-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf1/h83/31836887285790/remark-e-m-triumfalnaa-arka-26025852-3-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/hae/31836881813534/remark-e-m-triumfalnaa-arka-26025852-2-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 1,
    rates2: 2,
    rates3: 5,
    rates4: 15,
    rates5: 29,
    categoryId:1,
    currentCategory:-1
  },
  {
    id: 3,
    name: 'Книга Әуезов М.: Абай жолы 1-4 том',
    price: 8085,
    description: `«Путь Абая» — роман-эпопея Мухтара Ауэзова, описывающий жизнь известного казахского поэта Абая Кунанбаева.
    Первая эпопея, написанная на казахском языке. «Путь Абая» широко известен в Казахстане и далеко за его пределами.
    Роман-эпопея состоит из четырех книг. Главный герой романа — реальное историческое лицо, великий поэт,
    основоположник казахской письменной литературы, просветитель Абай Кунанбаев. В романе развернута панорама полной драматизма
    и противоречий народной жизни, быта и нравов кочевых и оседлых степняков конца XIX века, в полную силу показана широта
    и красота вольнолюбивой души казахского народа, его мечты о лучшем, его надежды и чаяния, его своеобразный духовный уклад,
    национальный характер. В 1948 году роман (1-2 книги) был удостоен Сталинской премии, а в 1959 году, после завершения эпопеи,
    он был отмечен Ленинской премией как выдающееся произведение социалистического реализма.
    `,
    url: `https://kaspi.kz/shop/p/-uezov-m-abai-zholy-1-4-tom-26016813/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h0e/31511306600478/-uezov-m-abaj-zoly-1-4-tom-26016813-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h5b/31511309385758/-uezov-m-abaj-zoly-1-4-tom-26016813-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/h6f/31511311515678/-uezov-m-abaj-zoly-1-4-tom-26016813-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 1,
    rates2: 1,
    rates3: 17,
    rates4: 31,
    rates5: 84,
    categoryId:1,
    currentCategory:-1
  },
  {
    id: 4,
    name: 'Книга Лондон Д.: Мартин Иден',
    price: 2129,
    description: `"Мартин Иден" - самый известный роман Джека Лондона, впервые напечатанный в 1908-1909 гг.
    Во многом автобиографическая книга о человеке, который "сделал себя сам", выбравшись из самых низов, добился признания.
    Любовь к девушке из высшего общества побуждает героя заняться самообразованием. Он становится писателем, но все издательства отказывают ему в публикации.
    И как это часто бывает в жизни, пройдя сквозь лишения и унижения, получив отказ от любимой девушки, он наконец становится знаменитым. Но ни слава,
    ни деньги, ни успех, ни даже возвращение его возлюбленной не могут уберечь Мартина от разочарования в этой насквозь фальшивой жизни.`,
    url: `https://kaspi.kz/shop/p/london-d-martin-iden-101137240/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/hca/46198049013790/london-d-martin-iden-101137240-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h31/62304396902430/london-d-martin-iden-101137240-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/hf7/62304398278686/london-d-martin-iden-101137240-5.jpg`,
    isActive:true,
    likes:0,
    rates1: 2,
    rates2: 5,
    rates3: 10,
    rates4: 30,
    rates5: 55,
    categoryId:1,
    currentCategory:-1
  },
  {
    id: 5,
    name: 'Книга Гоголь Н. В.: Мертвые души',
    price: 1249,
    description: `Поэма "Мертвые души" еще при жизни автора была переведена на множество других языков. Она имела невероятный успех.
    Никому до Гоголя и после него не удавалось так ярко и остро описать пороки и слабости русского человека,
    так живо и правдиво отразить важнейшие для России проблемы. Прошло 160 лет, и поэма звучит как только что написанная.
    Чичиковы, Коробочки, Ноздревы, Плюшкины, Собакевичи — их стремления, чувства, поступки не кажутся нам отголосками прошлого.
    Современное и острое звучание эти персонажи обретают, когда мы смотрим все новые и новые спектакли и фильмы по этой бессмертной поэме.`,
    url: `https://kaspi.kz/shop/p/gogol-n-v-mertvye-dushi-100299059/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/h96/32722759221278/gogol-n-v-mertvye-dusi-100299059-1.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/hef/32722763022366/gogol-n-v-mertvye-dusi-100299059-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h6d/32722765545502/gogol-n-v-mertvye-dusi-100299059-3.jpg`,
    isActive:true,
    likes:0,
    rates1: 8,
    rates2: 5,
    rates3: 23,
    rates4: 31,
    rates5: 80,
    categoryId:1,
    currentCategory:-1
  },


  {
    id: 6,
    name: 'Книга Ахматова А. А.: Стихотворения',
    price: 3525,
    description: `Есть поэты для поэтов, есть поэты для критиков. Ахматова - поэт для читателей.
    В сборнике, который вы держите в руках, опубликованы только те ахматовские стихи, которые она сама считала лучшими,
    в том числе из книг - "Вечер", "Четки", "Белая стая", "Подорожник" и "Anno Domini".`,
    url: `https://kaspi.kz/shop/p/ahmatova-a-a-stihotvorenija-100000925/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha8/h1b/32024016977950/ahmatova-a-a-stihotvorenia-100000925-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h6c/32024021336094/ahmatova-a-a-stihotvorenia-100000925-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4c/32024026316830/ahmatova-a-a-stihotvorenia-100000925-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 1,
    rates2: 4,
    rates3: 40,
    rates4: 30,
    rates5: 56,
    categoryId:2,
    currentCategory:-1
  },
  {
    id: 7,
    name: 'Книга Пастернак Б.: Свеча горела',
    price: 1800,
    description: `В настоящее издание вошло основное собрание лирических произведений великого русского поэта, лауреата
    Нобелевской премии Бориса Леонидовича Пастернака: девять поэтических книг, включая стихотворения из романа "Доктор Живаго",
    а также автобиографический очерк "Люди и положения". Каким бы сложным ни был путь поэта - от "высокого косноязычия"
    ранних "неистовых" стихов к "ошеломляющей простоте" поздней лирики, - для многих поколений читателей он был и остается любимым и
    значительным, как чистый звук в оглушающем шуме своей эпохи. По словам Цветаевой, у Пастернака никогда не будет "площади".
    Но будет "множество одиноких, одинокое множество жаждущих, которых он, уединенный родник, поит".
    `,
    url: `https://kaspi.kz/shop/p/pasternak-b-svecha-gorela-106322274/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h52/62213794791454/pasternak-b-sveca-gorela-106322274-1.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h65/62213795250206/pasternak-b-sveca-gorela-106322274-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/hce/62213795708958/pasternak-b-sveca-gorela-106322274-3.jpg`,
    isActive:true,
    likes:0,
    rates1: 6,
    rates2: 2,
    rates3: 15,
    rates4: 22,
    rates5: 25,
    categoryId:2,
    currentCategory:-1
  },
  {
    id: 8,
    name: 'Книга Бродский И. А.: Малое собрание сочинений',
    price: 7350,
    description: `Иосиф Бродский - один из крупнейших русских поэтов ХХ века, за свою недолгую, по нынешним представлениям,
    жизнь возвел огромное здание стихотворений, поэм, а также произведений особого, им созданного жанра - "больших стихотворений".
    Верный традициям русских классиков - Пушкина, Лермонтова, - Бродский стремительно расширял поле своей творческой работы.
    Он автор двух пьес - "Мрамор" и "Демократия" и нескольких десятков эссе, большинство из которых написаны на английском языке.
    В 1987 году Бродскому была присуждена Нобелевская премия по литературе "за многогранное творчество, отмеченное остротой мысли и глубокой поэтичностью".
    В настоящий том избранных произведений Иосифа Бродского вошли поэтические сборники "Остановка в пустыне", "Конец прекрасной эпохи",
    "Часть речи", "Новые стансы к Августе", "Урания" и "Пейзаж с наводнением", выпускавшиеся американским
    издательством "Ардис" с 1970 по 1996 годы, а также пьеса "Мрамор" и эссе.`,
    url: `https://kaspi.kz/shop/p/brodskii-i-a-maloe-sobranie-sochinenii-26013305/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc4/hf3/31647339118622/brodskij-i-a-maloe-sobranie-socinenij-26013305-1.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h96/31647343869982/brodskij-i-a-maloe-sobranie-socinenij-26013305-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h8b/31647348162590/brodskij-i-a-maloe-sobranie-socinenij-26013305-3.jpg`,
    isActive:true,
    likes:0,
    rates1: 2,
    rates2: 8,
    rates3: 13,
    rates4: 10,
    rates5: 14,
    categoryId:2,
    currentCategory:-1
  },
  {
    id: 9,
    name: 'Книга Есенин С. А.: Стихотворения',
    price: 1780,
    description: `Сергей Есенин - русский поэт, тонкий лирик, мастер психологического пейзажа, представитель новокрестьянской поэзии,
    а позднее имажинизма - писал пронзительные стихи о любви. "...земля русская не производила ничего более коренного,
    естественно уместного и родового, чем Сергей Есенин..." - писал Борис Пастернак. В книге представлены самые популярные,
    любимые многими, почти народные, стихи поэта.`,
    url: `https://kaspi.kz/shop/p/esenin-s-a-stihotvorenija-100255162/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h35/32795628371998/esenin-s-a-stihotvorenia-100255162-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h35/32795631583262/esenin-s-a-stihotvorenia-100255162-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/h81/32795635220510/esenin-s-a-stihotvorenia-100255162-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 1,
    rates2: 8,
    rates3: 4,
    rates4: 15,
    rates5: 10,
    categoryId:2,
    currentCategory:-1
  },
  {
    id: 10,
    name: 'Книга Гомер: Илиада',
    price: 2370,
    description: `"Илиада". Поэма, написанная тысячелетия назад. Поэма, которую будут читать и перечитывать столько,
    сколько просуществует человечество, ведь речь в ней идет о событиях и чувствах, которые не утратят актуальности никогда.
    Циничная, захватническая война людей, пришедших с огнем и мечом на чужую землю, – и священная война тех,
    кто защищает от захватчиков свой дом и близких. Любовь женщины, прекрасно понимающей, что отдала свое сердце ничтожеству и трусу.
    Неистовая, безнадежная и горькая страсть воина, утратившего самое дорогое в жизни и живущего лишь ради мести за свою утрату.
    Порок и добродетель, жадность и благородство, хитрость и глупость – кажется, "Илиада" вобрала в себя все многообразие человеческих натур и характеров.`,
    url: 'https://kaspi.kz/shop/p/gomer-iliada-100002340/?c=750000000#!/item',
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h04/32020991868958/gomer-iliada-100002340-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/hbe/32020998979614/gomer-iliada-100002340-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/hc3/32021003993118/gomer-iliada-100002340-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 1,
    rates2: 9,
    rates3: 5,
    rates4: 1,
    rates5: 8,
    categoryId:2,
    currentCategory:-1
  },


  {
    id: 11,
    name: 'Книга Толкин Дж. Р. Р.: Властелин колец',
    price: 5933,
    description: `Трилогия "Властелин колец" бесспорно, возглавляет список "культовых" книг ХХ века.
    Ее автор, Дж. Р.Р. Толкин, профессор Оксфордского университета, специалист по древнему и средневековому английскому языку,
    создал удивительный мир - Средиземье, который вот уже без малого пятьдесят лет неодолимо влечет к себе миллионы читателей.
    Великолепная кинотрилогия, снятая Питером Джексоном, в десятки раз увеличила ряды поклонников как Толкина, так и самого жанра героического фэнтези.`,
    url: `https://kaspi.kz/shop/p/tolkin-dzh-r-r-vlastelin-kolets-26004942/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hca/31867159347230/tolkin-dz-r-r-vlastelin-kolec-26004942-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h7f/31867163377694/tolkin-dz-r-r-vlastelin-kolec-26004942-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hfc/31867165933598/tolkin-dz-r-r-vlastelin-kolec-26004942-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 3,
    rates2: 2,
    rates3: 18,
    rates4: 30,
    rates5: 99,
    categoryId:3,
    currentCategory:-1
  },
  {
    id: 12,
    name: 'Книга Лавкрафт Г. Ф.: Зов Ктулху',
    price: 4360,
    description: `При жизни этот писатель не опубликовал ни одной книги, после смерти став кумиром как массового читателя,
    так и искушенного эстета, и неиссякаемым источником вдохновения для кино- и игровой индустрии;
    его называли "Эдгаром По ХХ века", гениальным безумцем и адептом тайных знаний; его творчество уникально настолько,
    что потребовало выделения в отдельный поджанр; им восхищались Роберт Говард и Клайв Баркер, Хорхе Луис Борхес и Айрис Мёрдок.
    Один из самых влиятельных мифотворцев современности, человек, оказавший влияние не только на литературу,
    но и на массовую культуру в целом, создатель "Некрономикона" и "Мифов Ктулху" — Говард Филлипс Лавкрафт.`,
    url: `https://kaspi.kz/shop/p/lavkraft-g-f-zov-ktulhu-26005637/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h4c/31948606570526/lavkraft-g-f-zov-ktulhu-26005637-1.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h8c/31948611387422/lavkraft-g-f-zov-ktulhu-26005637-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h1f/31948614336542/lavkraft-g-f-zov-ktulhu-26005637-3.jpg`,
    isActive:true,
    likes:0,
    rates1: 3,
    rates2: 6,
    rates3: 7,
    rates4: 40,
    rates5: 50,
    categoryId:3,
    currentCategory:-1
  },
  {
    id: 13,
    name: 'Книга Верн Ж.: Путешествие к центру Земли',
    price: 1249,
    description: `Научно-фантастический роман французского писателя Жюля Верна, впервые опубликованный в 1864 году
    и рассказывающий о путешествии, совершенном группой исследователей в земных недрах.
    Русский перевод был впервые сделан А. Сувориной и Е. Лихачёвой.`,
    url: `https://kaspi.kz/shop/p/vern-zh-puteshestvie-k-tsentru-zemli-100308964/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/hc8/32702501453854/vern-z-putesestvie-k-centru-zemli-100308964-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbb/h69/32702504435742/vern-z-putesestvie-k-centru-zemli-100308964-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hc6/32702507712542/vern-z-putesestvie-k-centru-zemli-100308964-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 3,
    rates2: 4,
    rates3: 22,
    rates4: 71,
    rates5: 112,
    categoryId:3,
    currentCategory:-1
  },
  {
    id: 14,
    name: 'Книга Стругацкий А. Н., Стругацкий Б. Н.: Пикник на обочине',
    price: 3084,
    description: `Пожалуй, в истории современной мировой фантастики найдется не так много произведений, которые оставались
    бы популярными столь долгое время. Повесть послужила основой культового фильма Тарковского "Сталкер";
    через три десятилетия появились не менее культовая компьютерная игра с тем же названием и целая серия повестей и романов,
    написанных с использованием мира "Пикника".`,
    url: `https://kaspi.kz/shop/p/strugatskii-a-n-strugatskii-b-n-piknik-na-obochine-26023771/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h04/31871484690462/strugackij-a-n-strugackij-b-n-piknik-na-obocine-26023771-1.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h34/31871489048606/strugackij-a-n-strugackij-b-n-piknik-na-obocine-26023771-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/hb5/31871491375134/strugackij-a-n-strugackij-b-n-piknik-na-obocine-26023771-3.jpg`,
    isActive:true,
    likes:0,
    rates1: 7,
    rates2: 13,
    rates3: 10,
    rates4: 40,
    rates5: 99,
    categoryId:3,
    currentCategory:-1
  },
  {
    id: 15,
    name: 'Книга Лем С.: Солярис',
    price: 1851,
    description: `"Солярис" - бесспорная вершина творчества Станислава Лема, произведение, повлиявшее на развитие
    научной фантастики XX века, в том числе и на русскую фантастику. Роман дважды экранизирован, по нему были поставлены радиопьесы,
    спектакли - и даже балет! Итак, что же такое - Солярис? Бескрайний мыслящий океан, преследующий непонятные человеку цели,
    тончайший камертон, преобразующий людские чувства в материальную форму? Воплощенный кошмар психолога или духовный целитель?
    Со дня публикации книги прошло больше 50 лет, а ее читатели все так же продолжают задаваться вопросами, ответы на которые
    невозможно получить, не заглянув в свое собственное сердце.`,
    url: `https://kaspi.kz/shop/p/lem-s-soljaris-100299017/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/hab/32710556778526/lem-s-solaris-100299017-1.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h9b/32710560972830/lem-s-solaris-100299017-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/he1/32710564675614/lem-s-solaris-100299017-3.jpg`,
    isActive:true,
    likes:0,
    rates1: 1,
    rates2: 1,
    rates3: 2,
    rates4: 5,
    rates5: 7,
    categoryId:3,
    currentCategory:-1
  },


  {
    id: 16,
    name: 'Книга Дойл А. К.: Собака Баскервилей. Его прощальный поклон. Архив Шерлока Холмса',
    price: 4650,
    description: `Английский врач и писатель сэр Артур Конан Дойл известен всему миру как непревзойденный мастер детективного жанра,
    автор множества произведений о гениальном сыщике Шерлоке Холмсе и его верном друге докторе Ватсоне.
    Классические переводы этих рассказов и романов, делавшиеся давно и множеством разных переводчиков, страдают известными недостатками:
    расхождения, пропуски, откровенные ошибки. Вашему вниманию предлагается заключительный том (роман «Собака Баскервилей»,
    сборники «Его прощальный поклон» и «Архив Шерлока Холмса») из давно готовившегося четырехтомника с полным переводом всего холмсовского канона.
    Это воистину уникальное издание: все произведения цикла переведены заново Людмилой Бриловой и Сергеем Сухаревым — мастерами,
    чьи переводы Кадзуо Исигуро и Рэя Брэдбери, Фрэнсиса Скотта Фицджеральда и Чарльза Паллисера, Томаса Де Квинси,
    Германа Мелвилла и других давно стали классическими. При этом в каждый том включено множество дополнительных материалов:
    предисловия к ранним публикациям, воспоминания Конан Дойла, касающиеся тех или иных произведений, некоторые интервью писателя.
    Плюс каждый том снабжен обширнейшими комментариями и богато иллюстрирован лучшими классическими рисунками.
    В данную книгу включен полный комплект иллюстраций, сопровождавших исходную публикацию в журнале «Стрэнд» романа «Собака Баскервилей»
    и всех рассказов из обоих сборников, — иллюстраций Сидни Пэджета, Уолтера Пэджета, Гилберта Холидея и других художников.`,
    url: `https://kaspi.kz/shop/p/doil-a-k-sobaka-baskervilei-ego-proschal-nyi-poklon-arhiv-sherloka-holmsa-26014609/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h8e/32007247527966/dojl-a-k-sobaka-baskervilej-ego-prosalnyj-poklon-arhiv-serloka-holmsa-26014609-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/hdb/49959345815582/dojl-a-k-sobaka-baskervilej-ego-prosalnyj-poklon-arhiv-serloka-holmsa-26014609-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h42/49959345881118/dojl-a-k-sobaka-baskervilej-ego-prosalnyj-poklon-arhiv-serloka-holmsa-26014609-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 1,
    rates2: 3,
    rates3: 5,
    rates4: 14,
    rates5: 45,
    categoryId:4,
    currentCategory:-1
  },
  {
    id: 17,
    name: 'Книга Кристи А.: Убийство в Месопотамии',
    price: 4800,
    description: `Известный археолог Лайднер попросил медсестру Эми Ледерен приехать в Ирак на раскопки возле города Хассани
    – ему нужно, чтобы кто-нибудь присматривал за его женой. Она вполне здорова, но ее мучают непонятные страхи.
    Эми соглашается – и вот она на месте. Но совсем скоро исполнение ею своего врачебного долга заканчивается – миссис Лайднер погибает.
    Значит, ее страхи были небеспочвенны? Эми пробует самостоятельно докопаться до правды. На ее счастье, в этих местах
    проездом оказывается великий сыщик Эркюль Пуаро, который соглашается помочь в расследовании убийства. Но даже ему приходится нелегко
    – ведь у всех участников археологической команды имеется железное алиби…`,
    url: `https://kaspi.kz/shop/p/kristi-a-ubiistvo-v-mesopotamii-26024365/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hce/hbb/49753790349342/kristi-a-ubijstvo-v-mesopotamii-26024365-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbd/h3f/49753790414878/kristi-a-ubijstvo-v-mesopotamii-26024365-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9a/h83/31874465300510/kristi-a-ubijstvo-v-mesopotamii-26024365-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 6,
    rates2: 2,
    rates3: 19,
    rates4: 13,
    rates5: 33,
    categoryId:4,
    currentCategory:-1
  },
  {
    id: 18,
    name: 'Книга Браун Д.: Происхождение',
    price: 6519,
    description: `Роберт Лэнгдон прибывает в музей Гуггенхайма в Бильбао по приглашению друга и бывшего студента Эдмонда Кирша.
    Миллиардер и компьютерный гуру, он известен своими удивительными открытиями и предсказаниями. И этим вечером Кирш собирается
    "перевернуть все современные научные представления о мире", дав ответ на два главных вопроса, волнующих человечество
    на протяжении всей истории: Откуда мы? Что нас ждет? Однако прежде чем Эдмонд успевает сделать заявление, роскошный прием превращается в хаос.
    Лэнгдону и директору музея, красавице Амбре Видаль, чудом удается бежать. Теперь их путь лежит в Барселону, где Кирш
    оставил для своего учителя закодированный ключ к тайне, способной потрясти сами основы представлений человечества о себе.
    Тайне, которая была веками похоронена во тьме забвения. Тайне, которой, возможно, лучше бы никогда не увидеть света,
    - по крайней мере, так считают те, кто преследует Лэнгдона и Видаль и готов на все, чтобы помешать им раскрыть истину.`,
    url: `https://kaspi.kz/shop/p/braun-d-proishozhdenie-26002722/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/h0b/31948951388190/braun-d-proishozdenie-26002722-1.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h07/31948955320350/braun-d-proishozdenie-26002722-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h84/31948958859294/braun-d-proishozdenie-26002722-3.jpg`,
    isActive:true,
    likes:0,
    rates1: 9,
    rates2: 12,
    rates3: 3,
    rates4: 93,
    rates5: 30,
    categoryId:4,
    currentCategory:-1
  },
  {
    id: 19,
    name: 'Книга Дойл А. К.: Приключения Шерлока Холмса. Возвращение Шерлока Холмса',
    price: 1970,
    description: `Прошло уже больше ста лет с того момента, как был напечатан первый рассказ о Шерлоке Холмсе,
    а читатели всего мира по-прежнему с упоением погружаются в мир интереснейших опасных приключений, особую прелесть
    которых составляет твердая уверенность в том, что все закончится хорошо, ведь рассказов-то - несколько дюжин!
    Итак, два полных авторских сборника - "Приключения Шерлока Холмса" и "Возвращение Шерлока Холмса". Здесь будут жених,
    опасающийся мести бывшей возлюбленной, и невеста, брошенная в день венчания; загадочные апельсиновые зернышки и
    тайный код пляшущих человечков, смертоносный китобойный гарпун и рождественский гусь с сюрпризом… Но главное - главное,
    что здесь будет, - это удивительная атмосфера старой доброй Англии со всеми ее красками, запахами и звуками.
    И даже если вы знаете наизусть все истории о знаменитом дуэте, вы все равно не сможете отказать себе в удовольствии
    в который раз открыть книгу, а вместе с ней - и знакомую дверь на Бейкер-стрит, 221-b.`,
    url: `https://kaspi.kz/shop/p/doil-a-k-prikljuchenija-sherloka-holmsa-vozvraschenie-sherloka-holmsa-100184946/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/hab/32310982803486/dojl-a-k-priklucenia-serloka-holmsa-vozvrasenie-serloka-holmsa-100184946-1-Container.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/hf6/32310984245278/dojl-a-k-priklucenia-serloka-holmsa-vozvrasenie-serloka-holmsa-100184946-2-Container.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h25/32310985523230/dojl-a-k-priklucenia-serloka-holmsa-vozvrasenie-serloka-holmsa-100184946-3-Container.jpg`,
    isActive:true,
    likes:0,
    rates1: 1,
    rates2: 4,
    rates3: 3,
    rates4: 18,
    rates5: 22,
    categoryId:4,
    currentCategory:-1
  },
  {
    id: 20,
    name: 'Книга Михаэлидес А.: Безмолвный пациент',
    price: 4157,
    description: `Жизнь Алисии Беренсон кажется идеальной. Известная художница вышла замуж за востребованного модного фотографа.
    Она живет в одном из самых привлекательных и дорогих районов Лондона в роскошном доме с большими окнами, выходящими в парк.
    Однажды поздним вечером, когда ее муж Габриэль возвращается домой с очередной съемки, Алисия пять раз стреляет ему в лицо.
    И с тех пор не произносит ни слова.Отказ Алисии говорить или давать какие-либо объяснения будоражит общественное воображение.
    Тайна делает художницу знаменитой. И в то время как сама она находится на принудительном лечении, цена ее последней работы -
    автопортрета с единственной надписью по-гречески “АЛКЕСТА” - стремительно растет. Тео Фабер - криминальный психотерапевт.
    Он долго ждал возможности поработать с Алисией, заставить ее говорить. Но что скрывается за его одержимостью безумной мужеубийцей,
    и к чему приведут все эти психологические эксперименты? Возможно, к истине, которая угрожает поглотить и его самого`,
    url: `https://kaspi.kz/shop/p/mihaelides-a-bezmolvnyi-patsient-26023129/?c=750000000#!/item`,
    image1: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/h61/31821751681054/mihaelides-a-bezmolvnyj-pacient-26023129-1.jpg`,
    image2: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/h72/31821752369182/mihaelides-a-bezmolvnyj-pacient-26023129-2.jpg`,
    image3: `https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h64/hfb/31821753319454/mihaelides-a-bezmolvnyj-pacient-26023129-3.jpg`,
    isActive:true,
    likes:0,
    rates1: 14,
    rates2: 11,
    rates3: 31,
    rates4: 8,
    rates5: 3,
    categoryId:4,
    currentCategory:-1
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
