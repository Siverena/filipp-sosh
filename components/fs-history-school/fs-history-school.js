import imageUrl from '@/utils/mixins/image-url.js';
export default {
    data() {
        return {
            currentSlide: 0,
            slides: [
                {
                    title: 'История Филипповской школы',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/8.jpeg'
                    )}" alt="Владимирская область Киржачский район Филипповское Церковь Николая Чудотворца Фотография" /><p>Село Филипповское когда-то принадлежало Московскому Чудову монастырю и получило свое название, по преданию, от посещения этой местности в 16 веке митрополитом Филиппом. Путешествуя из Троице-Сергиева монастыря в Киржач, он остановился здесь отдохнуть и переночевать. На том самом месте, где стоит церковь, росли вековые деревья. Впереди открывался красивый вид: внизу среди зеленеющих лугов, как голубая лента, извивалась полноводная река. Это место очень понравилось митрополиту, и он велел здесь построить церковь и монастырское подворье, а в память о своем посещении село назвать Филипповским.</p>`,
                },
                {
                    title: 'Филипповская школа грамотности',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/1.jpg'
                    )}" alt="Районная конференция учителей. 1924 год" /> <p>Самой первой школой в Филипповской волости в эпоху крепостничества являлась Филипповская церковная приходская школа начальной грамотности.</p>            <p>Летопись Филипповской церкви говорит, что Филипповская школа грамотности существовала с 1843 года по 1897 год или же по 1898 год. Помещалась она в церковном доме-сторожке.</p>            <p>Обучение детей C 1843 года по 1852 год велось местными священниками. С 1853 года дети уже обучались учителями, окончившими Духовную семинарию.</p>            <p>Данная школа содержалась по особому окладу, за счет крестьян, дети которых учились. Учились дети обоего пола от двадцати до сорока человек.</p>           <p>В 1868 году число учащихся возросло до 79 человек, из них мальчиков было 66, а девочек 11 человек.</p><p>В 1872 году школа закрылась с уходом учителя, а с 1873 года снова открылась с назначением нового учителя.</p>         `,
                },
                {
                    title: 'Филипповская школа грамотности',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/1.jpg'
                    )}" alt="Районная конференция учителей. 1924 год" /><p>С 1874 года обучение детей в Филипповской школе грамотности снова велось местным духовенством, преимущественно дьяконами. Филипповская школа грамотности прекратила свое существование в 1897-1898 году. Последним учителем в ней являлся церковный дьякон Соколов Матвей Ильич, который умер в 1907 году. Одним из последних учеников этой школы является Лисин Иван Петрович с 1886 года рождения.</p>            <p>Количество учащихся в Филипповской школе грамотности с 1874 года было сравнительно небольшое, так как с осени 1874 года параллельно этой школе грамотности в селе Филипповском была открыта другая начальная школа от Покровского уездного земства.</p>            <p>В 1895 году в Филипповской школе грамотности обучалось всего 12 человек, а в Филипповском Народном училище в этом же году обучалось 35 человек.</p>`,
                },
                {
                    title: 'Филипповское народное училище',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/2.jpg'
                    )}" alt="Фотография 1904 года" /><p>В центре Филипповской волости, в селе Филипповском, с осени 1874 года параллельно существующей церковно-приходской школе грамотности открылась вторая школа начального образования от Покровского уездного земства. Школа была четырехклассная, однокомплектная и именовалась она так: Филипповское Народное училище Покровского уездного земства. Попечителем училища был фабрикант из деревни Никулкино Яков Никитич Евдокимов.</p><p>В 1876 году в Филипповской волости открылась вторая начальная школа от Покровского уездного земства в деревне Никулкино, которая помещалась в отдельном флигеле фабрикантов Евдокимовых на Филипповской горе.</p><p>C 1902 года попечителем Филипповского народного училища стал племянник Я.Н. Евдокимова Беззаботнов Василий Ефремович.</p>`,
                },
                {
                    title: 'Филипповское народное училище',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/2.jpg'
                    )}" alt="Фотография 1904 года" /><p>Попечитель училища с 1881 года обязан был платить жалование письменные принадлежности, учителю, покупать учебные пособия и снабжать училище школьным инвентарем, отоплением и освещением. В девяностых годах 19 столетия Покровское уездное земство приняло на себя часть оплаты жалованья учителю: 15 рублей платило земство и 10 рублей доплачивала фабрика попечителя.</p><p>Филипповское народное училище c 1874 года до 1905 года функционировало в арендуемых сельским обществом домах у местного населения.</p><p>Первоначально училище было расположено в арендуемом верхнем этаже кирпичного двухэтажного дома (где в последствии находилась почта, потом библиотека, сейчас жилой дом) у Василия Тихоновича Новикова. Затем училище было переведено в дом Алексея Ильича Головина, а потом опять в кирпичный дом в верхний этаж (но этот дом уже принадлежал Беззаботнову).</p><p>С 1901 по 1913 год учителем Филипповского народного училища был Вахлин Александр Николаевич.</p>`,
                },
                {
                    title: 'Филипповское народное училище',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/2.jpg'
                    )}" alt="Фотография 1904 года" /><p>Александр Николаевич Вахлин родился в 1882 г. в Ивановской области Киржачского района, д. Лачуги в семье крестьянина. По национальности русский. Получил высшее образование.</p><p>Род деятельности — преподаватель русского языка и литературы. Был беспартийным. Александр Николаевич Вахлин стал жертвой массового террора. Был арестован 1 марта 1938 г. Обвинялся в руководстве контревалюционной эсеровской группой. Приговор вынесен Тройкой при УНКВД СССР по Московской обл. 29 мая 1938 г. Виновным себя не признал. Был расстрелян 4 июня 1938 г. на Бутовском полигоне НКВД под Москвой. Реабилитирован 7 декабря 1956 г. за отсутствием состава преступления).</p><p>В июне месяце 1902 года Беззаботнов В.Г. сделал устное заявление старосте села Филипповского Николаю Петровичу Куликову в том, что в июле истекает срок сдачи в аренду верхнего этажа его, Беззаботнова, дома обществу под училище и что он не желает больше сдавать свое помещение под училище, а поэтому требует к означенному сроку освободить его дом.</p>На основании полученного заявления сельский староста Филипповского общества 5 августа 1902 года собирает сельский сход Филипповского общества.</p>`,
                },
                {
                    title: 'Приговор',
                    text: `<p>«Приговор Филипповского Сельского Схода 1902 года августа 5 дня. Мы, ниже подписавшиеся, крестьяне. бывшие государственные, Владимирской губернии, Покровского уезда, Филипповской волости, Филипповского сельского общества, села Филипповского, состоящего всего из 214 ревизских, наличных душ мужского пола и домохозяев, имеющих по 47 ст. и примыкающих к ней общих положений о крестьянском праве голоса на сходе, собрались сего числа на сходе по распоряжению Сельского старосты нашего общества Николая Куликова в качестве наличных крестьян домохозяев. На сходе этом, выслушав от старосты заявление гражданина Беззаботнова о том, что он не желает больше сдавать свой дом под помещение училища, постановили: под помещение училища и для квартиры учителя снять передний дом у крестьянина Алексея Ильича Головина сроком на три года с платою по сто двадцати пяти рублей в год; или потребуется для квартиры учителя, снять отдельное помещение в доме Головина будет помещаться только школа, то общество платит Головину сто рублей в год.</p><p>Если общество выстроит под школу общественное здание, то общество уплачивает Головину аренду только по день нахождения школы в его доме.</p>`,
                },
                {
                    title: 'Приговор',
                    text: `<p>В чем и подписуемся: Алексей Рябцов, Василий Федин, Михаил Чамагин, Федор Крутов, Ефим Головин, Алексей Коляженков, Иван Новиков, Семен Залогинов, Михаил Васильев, Константин Туманов, Матвей Афанасьев, Иван Козлов, Афанасий Федоров, Иван Федоров, Иван Лядухин, Федор Александрыч, Яков Прокоф, Василий Новиков, Филип Павлов, Степан Лисин, Алексей Яковлев, Данила Смешнов, Александр Ершов, Яков Михайлов, Григорий Сухов, Михаил Тихонов, Андрей Павлов, Тимофей Никитин, Митрий Иванов, Алексей Львов, Михаил Лисин, Яков Грибов, Иван Зорин, Александр Ерисов, Василий Кутеников, Николай Черепанов, Алексей Митрошкин, Илья Тимофеев, Иван Ершой, Никонор Пьянов, Петр Рябцов, Алексей Тимофеев, Иван Кутеников, Василий Ванякин, Иван Егоров, Владимир Ершов, Иван Захаров, Николай Иванов, Василий Глебов, Петр Андреев, Никита Васильев, Михаил Степанов, Афанасий Львов, Иван Венедиктов, Василий Яковлев, Иван Николаев, Борис Дмитриев, Петр Федоров, Александр Степанов, Петр Венидиктов, Прокофьев Филиппов, Максим Андреев, Алексей Михайлов, Яков Яковлев, Василий Васильев, Иван Владимиров, Иван Глебов, Сергей Львов, Ефим Яковлев, Яков Григорьев, Петр Прокофьев, Сергей Алексеев, Иван Сергеев, Петр Дмитриев, Василий Паленов, Петр Львов, Петр Васильев, Иван Васильев, Яков Иванов, Василий Иванов, Василий Беспалов, Егор Андреев, Василий Лепихин, Ксенофорт Дмитриев, а по неграмотности их и личной просьбе и за себя расписался Сергей Николаев. Сельский Староста Куликов…»</p>`,
                },
                {
                    title: '1902г - ...',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/3.jpg'
                    )}" alt="1905 год" /><p>В 1902 году в селе Филипповском на улице Лепиловке (в настоящее время улица Школьная) Филипповское общество совместно с Покровским земством и с участием попечителя приступило к постройке общественного специального здания для народного училища.</p><p>С ранней осени 1902 года крестьяне села Филипповского начали возить камень для бута (ломовой камень в виде кустов плит, неправильной формы, употребляется, преимущественно, для кладки фундаментов) и кирпич для фундамента училища из деревни Захарово из разобранных заводских корпусов, нарушенного меднолитейного завода Александра Григорьевича Кольчугина в 1900-1901 гг., который был расположен на левом берегу реки Мележи в двух местах: в деревне Захарове и в деревне Мележи (Ново-Александровке).</p><p>Строительство здания было закончено к 25 декабря (старого стиля) 1904 года. Занятия в своем собственном здании начались после зимних каникул с 21-22 января (нового стиля) 1905 года.</p><p>Во время революционного движения 1905 года в здании Филипповского Народного училища находился штаб Совета рабочих депутатов.</p>`,
                },
                {
                    title: 'Филипповское Высшее Начальное Министерства Народного Просвещения училище',
                    text: `<p>В 1912-1913 годах Филипповское Народное Начальное училище было реарганизовано в Филипповское Высшее начальное шестиклассное училище. Заведующим училища был А.Н. Вахлин, а с 1914 года Архипов Федор Семенович.</p><p>Предъявитель сего сын крестьянина Владимирской губернии, Покровского уезда, Филипповской волоста, деревни Никулкино, Лысов Федор Иванович, родившийся в 7 день февраля месяца 1902 года, обучался с 1914 года по 1916 год в Филипповском 2х классном МНП училище Покровского уезда, Владимирской губернии в коем при отличном поведении и окончил полный курс с нижеследующими успехами:</p><ul><li>По закону Божию….. отлично — 5 </li><li> По русскому языку письменные работы отлично — 5 (устные ответы отлично — 5) </li><li>  По арифметике письменные работы отлично — 5 (устные ответы отлично — 5) </li><li>  По геометрии (практический ервоначальный курс и черчение) отлично — 5 </li><li>  По отечественной истории отлично — 5 </li><li>  По географии отлично — 5 </li><li>  По естествознанию отлично — 5</li> </ul>`,
                },
                {
                    title: 'Филипповское Высшее Начальное Министерства Народного Просвещения училище',
                    text: `<p>В удостоверении чего и о утверждения инспектора народных училищ Покровского уезда, Владимирской губернии и выдано ему, Лысов Ф.И., настоящее свидетельство с приложением казенной училищной печати мая 5 дня 1916 года.</p><p>Почетный блюститель училища</p><p>Заведующий учитель (Ф. Архипов), законоучитель (священник Ф. Янов), учительница (В. Янова), учительница (К. Архипова) На обороте свидетельства выписка из ст. 64 Устава воинской повинности по продолжению 1912 года.</p><p>Раздел 1. Лица, окончившие полный курс в учебных заведениях первого или второго разрядов, поименованных в приложении к статье 61 (по продолжению, а также выдержавшие соответствующие одному из сиз курсов испытание состоят на действительной службе три года, независимо от того, в какой род войск будут определены, а в записи числятся пятнадцать лет).</p><p>С 1918 года заведующим училища вместо выбывшего Архипова Ф.С. был назначен Пономарев Николай Александрович.</p>`,
                },
                {
                    title: 'Филипповская районная начальная школа',
                    text: `<p>С осени 1923 года Филипповское училище стало именоваться Филипповской районной школой кустового объединения всех школ Филипповской волости, которых в то время насчитывалось пятнадцать:</p><ul><li>Филипповская</li> <li>Аленинская</li><li>Никулкинская</li><li>Дубровская</li><li>Бережковская</li><li>Крутецкая</li><li>Дворищенская</li><li>Захаровская</li><li>Черновская</li><li>Зубцовская</li><li>Новинская</li><li>Погостская</li><li>Боровковская</li><li>Зареченская</li><li>Ратьковская</li> </ul><p>Филипповская и Зареченская школы являлись опорными школами.</p>`,
                },
                {
                    title: 'Филипповская школа семилетка',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/4.jpg'
                    )}" alt="Здание, в которое были переведены начальные классы" /><p>С осени 1925 года при Филипповской районной опорной школе открылась школа семилетка.</p><p>Директором Филипповской семилетней школы был назначен Николай Александрович Пономарев. По ходатайству местного населения с осени 1925 года одновременно с открытием семилетки открылась ремесленная столярная мастерская. Руководителем и учителем-мастером по столярному делу был назначен Василий Сергеевич Савельев.</p><p>В 1925-26 годах в школе был организован хоровой кружок под руководством Надежды Павловны Приклонской, а при Аленинском клубе – под руководством И.Д. Ганина.</p><p>В 1936 году зимой школьная столярная мастерская прекратила свое существование.</p><p>В ноябре месяце 1927 года начальные классы были переведены из основного здания школы в здание на центральной улице села Филипповского в каменный двухэтажный дом. Это переселение было сделано в связи с увеличением количества учащихся в 5-7 классах.</p>`,
                },
                {
                    title: 'Филипповская ШКМ',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/5.jpg'
                    )}" alt="На фото Недешев А.Ф, Куравцев В.А" /><p>В 1928 году директором школы был назначен Недёшев Александр Федорович.</p><p>Летом 1930 года Филипповскую семилетнюю школу реорганизовали в школу крестьянской молодежи тоже с семилетним обучением, но специально с сельскохозяйственным направлением.</p>`,
                },
                {
                    title: 'Филипповская НСШ №13',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/7.jpg'
                    )}" alt="Учителя: Приклонская Н.П, Новлянская Е.М, Потехина С.П Иванцов А.И, Кулокова А.Е., Евдокимова П.А, Алексеева Н, М, Скудина А.Н., Родионова А.С" /><p>В 1934 году Филипповская ШКМ была реорганизована снова в Филипповскую начальную среднюю школу и называлась она Неполная средняя школа № 13</p><p>В 1942 году Недешев А.Ф был демобилизован в  армию и в годы Великой отечественной войны пропал без вести. Директором стала Новлянская Е.М</p><p>В 1945—1947 гг директором был назначен Милославов Юрий Павлович. В 1947-50 годах директор школы Потехина Софья Павловна, учитель географии. С 1950 г. По 1964 г директором школы был Иванцов Александр Иванович.</p>`,
                },
                {
                    title: 'Филипповская средняя школа',
                    text: `<img src="${this.getStaticImageUrl(
                        'fs-history-school/9.jpg'
                    )}" alt="Филипповская средняя школа" /><p>В 1950 году Филипповская семилетняя школа была преобразована в Филипповскую среднюю школу с десятилетним сроком обучения. С 1957 года началось расширение школьного здания. Была сделана деревянная пристройка, по объему равная основному зданию.</p><p>В это же время был заложен сад, построен спортзал и теплица. Теплицу строили учащиеся под руководством мастера Коротеева.</p><p>В 1961 году школа была реорганизована в Филипповскую среднюю 11-тилетнюю школу с сельскохозяйственным уклоном. Школой был приобретен трактор. В этом же году пионерской дружине школы было присвоено имя летчика-космонавта Героя Советского Союза Юрия Алексеевича Гагарина.</p><p>Пионеры школы под руководством Рябовой Анны Алексеевны активно участвовали в драмкружке.</p><p>С 1964 года директором школы был Боровков Леонид Павлович.</p><p>В 1967 году директором Филипповской средней школы назначена Рябова Анна Алексеевна.</p>`,
                },
            ],
        };
    },
    mixins: [imageUrl],
    computed: {
        slidesCount() {
            return this.slides.length;
        },
    },
    methods: {
        nextSlide() {
            if (this.currentSlide === this.slides.length - 1) {
                this.currentSlide = 0;
            } else {
                this.currentSlide += 1;
            }
        },
        prevSlide() {
            this.currentSlide -= 1;
            if (this.currentSlide < 0) {
                this.currentSlide = this.slides.length - 1;
            }
        },
    },
    mounted() {},
};
