import image1 from '../src/assets/images/locations/L_OLIVIER.png';
import image2 from '../src/assets/images/locations/GUILHAUMETTE.png';
import image3 from '../src/assets/images/locations/SAINTE_LUCE.png';
import image4 from '../src/assets/images/locations/MACAJALLE.png';
import image5 from '../src/assets/images/locations/LA_VISTE.png';
import image6 from '../src/assets/images/locations/VILLA_TAMARIS.png';
import image7 from '../src/assets/images/locations/LE_MAS.png';
import image8 from '../src/assets/images/locations/LA_BASTIDE.png';
import image9 from '../src/assets/images/locations/LE_BASTIDON.png';
import image10 from '../src/assets/images/locations/LAVANDIER.png';
import image11 from '../src/assets/images/locations/DIGITAL_COTTAGE.png';

const locations = [
    { 
        id: 1,
        name: 'L’Olivier d’Anna',
        text: 'Au coeur de la partie médiévale du village de Sainte-Jalle, studio cosy rénové fin 2023. <br><br> Au plaisir de vous accueillir dans notre douce région ensoleillée au coeur des Baronnies provençales.',
        location : 'Sainte-Jalle',
        person : '2/4 pers.',
        url: 'https://www.airbnb.fr/rooms/608641665832643050?source_impression_id=p3_1717440950_P39DexpLnBYnDrRK',
        urlImg: image1, 
        alt: 'Nature', 
        category: '2/4 pers.',
        exterior: 'Piscine partagée'
    },
    { 
        id: 2,
        name: 'La Guilhaumette',
        text: 'Maisonnette (2 pièces) entièrement rénovée en juin 2019 située au coeur de la vallée de Ste-Jalle, au milieu des vignes (bio), à 1km du centre du village où vous trouverez épicerie, boulangerie, restaurant... <br>On entre dans la pièce de vie avec coin cuisine par une porte-fenêtre. A l’arrière, accessible par une double porte, l’espace nuit et la salle d’eau.',
        location : 'Sainte-Jalle',
        person : '2/4 pers.',
        url: 'https://www.airbnb.fr/rooms/23214830?source_impression_id=p3_1717440962_P38Y1ck_ybWuGrLl',
        urlImg: image2, 
        alt: 'Nature', 
        category: '2/4 pers.',
        exterior: 'Terrasse avec vue'
    },
    { 
        id: 3,
        name: 'Sainte Luce',
        text: 'Séjournez dans le charme et le confort d’une ferme rénovée de façon contemporaine, avec charme et authenticité. Surface habitable de 300m2 baignée de lumière, 1,2 ha de terrain arboré. La maison et ses terrasses offrent une vue imprenable sur la vallée, ses oliviers et ses lavandes. Un lieu idéal pour passer ses vacances au calme près de la piscine (12m sur 4,5 m), et/ou sportives (escalade, randonnées, via ferrata, vélo...) ou culturelles (Vaison-la-Romaine), à 15 minutes de Buis-les-Baronnies.',
        location : 'Vercoiran',
        person : '10 à 14 pers.',
        url: 'https://www.airbnb.fr/rooms/54104653?source_impression_id=p3_1717440973_P3JRV_3fqWGNxQ_V',
        urlImg: image3, 
        alt: 'Nature', 
        category: '+10 pers.',
        exterior: 'Piscine privée'
    },
    { 
        id: 4,
        name: 'Le Macajalle',
        text: 'Au coeur de la partie médiévale du village de Sainte-Jalle, studio cosy rénové fin 2023. <br><br>Au plaisir de vous accueillir dans notre douce région ensoleillée au coeur des Baronnies provençales.',
        location : 'Sainte-Jalle',
        person : '2 pers.',
        url: 'https://www.airbnb.fr/rooms/1017277966663184963?source_impression_id=p3_1717440862_P3YQ40Kbs1ytsSpv',
        urlImg: image4, 
        alt: 'Nature', 
        category: '2/4 pers.' ,
        exterior: 'Piscine partagée'
    },
    { 
        id: 5,
        name: 'La Viste',
        text: 'Profitez d’un séjour à deux ou avec les enfants dans ce gîte doté d’une piscine privée de deux chambres et d’une salle de bains. A 30 min des villes de Nyons et Buis-les-Baronnies, nichée sur les hauteurs du petit village de Saint-Sauveur-Gouvernet, la Viste (vue) est une ancienne bergerie complètement rénovée. Lovée au milieu d’une prairie de thym et de lavande, notre gîte bénéficie d’une vue imprenable sur les collines de la vallée de l’Ennuyé.',
        location : 'Saint-Sauveur-Gouvernet',
        person : '2/4 pers.',
        url: 'https://www.airbnb.fr/rooms/46307532?source_impression_id=p3_1717440985_P33Oht2g-jgWlU20',
        urlImg: image5, 
        alt: 'Nature', 
        category: '2/4 pers.',
        exterior: 'Piscine privée'
    },
    { 
        id: 6,
        name: 'Villa Tamaris',
        text: 'Séjournez dans le charme et le confort d’une maison entièrement rénovée de manière contemporaine, alliant élégance et bon goût. <br><br>Nichée au fond d’une impasse, à seulement 10 min. à pied du centre de Buis, cette propriété offre une atmosphère paisible tout en étant à proximité des commerces de la ville. L’endroit idéal pour des vacances en famille ou entre amis. Que vous soyez adepte du farniente, amateur de sports ou avide de découvertes culturelles !',
        location : 'Buis-les-Baronnies',
        person : '14 pers.',
        url: 'https://www.airbnb.fr/rooms/898599669795394930?source_impression_id=p3_1717440996_P3tNy6xEXEHa2cZO',
        urlImg: image6, 
        alt: 'Nature', 
        category: '+10 pers.',
        exterior: 'Piscine privée'
    },
    { 
        id: 7,
        name: 'Le Mas',
        text: 'Dans un cadre champêtre et un environnement privilégié, ce mas vous promet des vacances uniques dans une propriété aux prestations haut de gamme au coeur d’une vallée d’oliviers, de pins et de cyprès.',
        location : 'La-Roche-sur-le-Buis',
        person : '14 pers.',
        url: 'https://www.airbnb.fr/rooms/33063077?source_impression_id=p3_1717441009_P3ptXmqgXT38H9si',
        urlImg: image7, 
        alt: 'Nature', 
        category: '+10 pers.',
        exterior: 'Piscine privée'
    },
    { 
        id: 8,
        name: 'La Bastide',
        text: 'A seulement 10 minutes à pied du centre de Buis-les-Baronnies, dans un cadre paisible, superbe bastide pouvant accueillir jusqu’à 12 personnes, située sur un terrain arboré de 2 500 m². Piscine chauffée exposée plein Sud.',
        location : 'La-Roche-sur-le-Buis',
        person : '12 pers.',
        url: 'https://www.airbnb.fr/rooms/33510774?source_impression_id=p3_1717441020_P3-9cig-Zof5Yssc',
        urlImg: image8, 
        alt: 'Nature', 
        category: '+10 pers.',
        exterior: 'Piscine privée'
    },
    { 
        id: 9,
        name: 'Le Bastidon',
        text: 'La maison est située au cœur du vieux village de Sainte Jalle en Baronnies provençales.<br> Elle convient pour des vacances familiales, entre amis ou en groupe.<br>Un garage est disponible pour vos motos et vélos.<br> Christine sera votre personne de contact avant votre arrivée et sur place.',
        location : 'Sainte-Jalle',
        person : '6 pers.',
        url: 'https://www.airbnb.fr/rooms/604230236144465041?source_impression_id=p3_1717441030_P3IYi4BfCnX0rkr9',
        urlImg: image9, 
        alt: 'Nature', 
        category: '6 pers.',
        exterior: ''
    },
    { 
        id: 10,
        name: 'Le Lavandier',
        text: 'Au coeur du village médiéval de Sainte-Jalle, dans un environnement très calme, notre gîte est un agréable pied à terre pour découvrir les Baronnies provençales.<br> Située au 1er étage, entièrement remis à neuf en mars 2020, il comprend deux chambres disposant chaque d’une salle d’eau et d’une WC, une pièce avec un coin cuisine et un canapé-lit.<br> Vue dégagée sur le vieux village de Sainte-Jalle et les collines environnantes.',
        location : 'Sainte-Jalle',
        person : '5 pers.',
        url: 'https://www.airbnb.fr/rooms/42832867?source_impression_id=p3_1717441040_P3bW8-ZYFPagaSBR',
        urlImg: image10, 
        alt: 'Nature', 
        category: '2/4 pers.',
        exterior: 'Piscine partagée'
    },
    { 
        id: 11,
        name: 'The Digital Cottage',
        text: 'Cette maison en pierre, construite dans la muraille du village, est intégralement en bois et pierre apparente. La cuisine est en bois massif (et local), construite de mes mains et apporte cachet et chaleur au lieu.<br><br> À l’étage un beau volume vous accueillera, et c’est sur un grand lit que vous pourrez contempler les robustes poutres en chêne ou la peinture à la chaux. Un bureau ergonomique et équipé laissera les plus studieux travailler dans le calme de cette paisible vallée.',
        location : 'Sainte-Jalle',
        person : '2 pers.',
        url: 'https://www.airbnb.fr/rooms/1149419583963114909?source_impression_id=p3_1717441052_P3uFMLS1iwFueWe9',
        urlImg: image11, 
        alt: 'Nature', 
        category: '2/4 pers.',
        exterior: ''
    },
];

export default locations;