const locations = [
    { 
        id: 1,
        name: 'L’Olivier',
        location : 'Sainte Jalle',
        person : '2/4 pers.',
        url: 'https://fr.airbnb.be/rooms/608641665832643050?fbclid=IwAR3CEpD4Rlo68oDQJ56sADQeF7fxLQ7mDd5Png9VCpiOmOZqI_-rPEJH0Ps_aem_AUEtkNzgJWzuXzYFSvATgC5S0nSbqCnlMeoqH7WAixj7R3ZXNube2Gl-WfNPCm14g_eSd_d1YnWJzr5-XhrIaDge&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky&source_impression_id=p3_1713011050_5lnPfrSqjrtN5jdj',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '2/4 pers.' 
    },
    { 
        id: 2,
        name: 'La Guilhaumette',
        location : 'Sainte Jalle',
        person : '2/4 pers.',
        url: 'https://fr.airbnb.be/rooms/608641665832643050?fbclid=IwAR3CEpD4Rlo68oDQJ56sADQeF7fxLQ7mDd5Png9VCpiOmOZqI_-rPEJH0Ps_aem_AUEtkNzgJWzuXzYFSvATgC5S0nSbqCnlMeoqH7WAixj7R3ZXNube2Gl-WfNPCm14g_eSd_d1YnWJzr5-XhrIaDge&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky&source_impression_id=p3_1713011050_5lnPfrSqjrtN5jdj',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '2/4 pers.' 
    },
    { 
        id: 3,
        name: 'Ferme d’exception',
        location : 'Sainte Jalle',
        person : '+10 pers.',
        url: 'https://fr.airbnb.be/rooms/608641665832643050?fbclid=IwAR3CEpD4Rlo68oDQJ56sADQeF7fxLQ7mDd5Png9VCpiOmOZqI_-rPEJH0Ps_aem_AUEtkNzgJWzuXzYFSvATgC5S0nSbqCnlMeoqH7WAixj7R3ZXNube2Gl-WfNPCm14g_eSd_d1YnWJzr5-XhrIaDge&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky&source_impression_id=p3_1713011050_5lnPfrSqjrtN5jdj',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '+10 pers.' 
    },
    { 
        id: 4,
        name: 'Studio Cosy',
        location : 'Sainte Jalle',
        person : '2 pers.',
        url: 'https://fr.airbnb.be/rooms/1017277966663184963?fbclid=IwAR3ceLQq8m0GNCwqy08dl5T2yXTPx4GYSbHREdkXb8Fd70oJs4NmbI6jYB0_aem_AUH9M4SXlKodsuc_jM8ydQDt2zqjnxgwGNEaQ9XaKk_vBbPg0vQl8cP4qABD-urKTFH0sNFdjzNsPZfE8dLNlzG4&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '2/4 pers.' 
    },
    { 
        id: 5,
        name: 'La Viste',
        location : 'St Sauveur G.',
        person : '2/4 pers.',
        url: 'https://fr.airbnb.be/rooms/46307532?fbclid=IwAR0iijXvYG_F74prLe5FNvWEvKjzKBlPpYxqPMXg_ZnDQB5ANAnuftebbwk_aem_AUGK2x5T8c3ZIr16hGSiL6ixgWDHjDP4twxepHHZKsYNe6SouNTcUwwcnkXj3pY1yEdtZ_b-69r32g7mg6sh7FLr&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky&source_impression_id=p3_1713012781_zet7GB7x7uhWG7yn',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '2/4 pers.' 
    },
    { 
        id: 6,
        name: 'Villa Tamaris',
        location : 'Buis-les-Baronnies',
        person : '14 pers.',
        url: 'https://fr.airbnb.be/rooms/898599669795394930?fbclid=IwAR0u1dZ6SmQjzZ4s007rzcX-x6DHy1Qe2giWPkCgYL1VgFdbAzzuEZA9beo_aem_AUE9EiRI3C32DCRbOjy0sObVQc5hqkCAMPbPp8Kdu7J_IkLwcPYmc0rP3XsgClxluf8MjyTQkNuc6BrTHoPoxY2W&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky&source_impression_id=p3_1713012770_NuELVyyuTQezsFGe',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '+10 pers.' 
    },
    { 
        id: 7,
        name: 'Mas d’exception',
        location : 'La Roche sur le Buis',
        person : '14 pers.',
        url: 'https://fr.airbnb.be/rooms/33063077?fbclid=IwAR3DV_j-Xlx1xUPzJMVippfdMYPFDOLRTXibDf5NDPhMfiW42VJvcG4Sn30_aem_AUHnndR51c3ZrWwink8OEsGNTq6lw9zDe5vDvZ4bQzwNULbmkFb3VcDfaAx0FeqDWGyJ8ykFvN8lqmLX63SgGYHb&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky&source_impression_id=p3_1713012859_WDNVuqWEjAtCX9pQ',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '+10 pers.' 
    },
    { 
        id: 8,
        name: 'Belle Bastide',
        location : 'La Roche sur le Buis',
        person : '12 pers.',
        url: 'https://fr.airbnb.be/rooms/33510774?fbclid=IwAR0FNYfcTeyB2L65kG4BjH1qOszgZEoT_XCPTRxPFCtc1e_r-n1xUB3yTOI_aem_AUFciDAapTGhoT4ZssPHcPqoFJP14kW1d6_Zx1ZZP6Ti6lVINlTBX3L5ur3Hl7J3ileTeurfZanqZTO7FeFIEGQ_&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '+10 pers.' 
    },
    { 
        id: 9,
        name: 'Le Bastidon',
        location : 'Sainte Jalle',
        person : '6 pers.',
        url: 'https://fr.airbnb.be/rooms/604230236144465041?fbclid=IwAR1CeSnvaZcEFQTRR3Y1j9aJHmcqzRb5hmN9NOYLK1sJHePnq278jJcN1NU_aem_AUE3NsuYvt1VuSOTXxeMeBEy-7XEG8txq0j7IuHBQricHsy9iJRjfNIx_GlujNeIMGl8jpDPNtwFkl1kNb7yUGGs&_set_bev_on_new_domain=1713010895_YTRkZmMyMjBkZDky&source_impression_id=p3_1713012944_eAdLWTkZTrUkcGys',
        urlImg: '/assets/images/location.png', 
        alt: 'Nature', 
        category: '6 pers.' 
    },
];

export default locations;