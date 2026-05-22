export type ExhibitionImage = {
    src: string;
    alt: string;
};

export type ExhibitionLocaleContent = {
    title: string;
    description: string;
    location?: string;
    date?: string;
};

export type ExhibitionCategory = "exhibition" | "misc";

export type ExhibitionItem = {
    slug: string;
    year: string;
    category: ExhibitionCategory;
    catalogImage?: ExhibitionImage;
    es: ExhibitionLocaleContent;
    en: ExhibitionLocaleContent;
    pt: ExhibitionLocaleContent;
    images: ExhibitionImage[];
};

export type ExhibitionsLanguageContent = {
    pageLabel: string;
    backToMainMenu: string;
    backToExhibitionsMenu: string;
    listTitle: string;
    listSubtitle: string;
    emptyGalleryTitle: string;
    emptyGalleryText: string;
    previousLabel: string;
    nextLabel: string;
    openGalleryLabel: string;
    closeGalleryLabel: string;
    catalogueLabel: string;
    catalogueImageLabel: string;
    miscellaneousLabel: string;
    imageCounterLabel: string;
};

export const exhibitionsContent: Record<string, ExhibitionsLanguageContent> = {
    es: {
        pageLabel: "Exhibiciones",
        backToMainMenu: "Inicio",
        backToExhibitionsMenu: "Volver",
        listTitle: "Exhibiciones",
        listSubtitle:
            "Archivo de muestras, retrospectivas, catálogos y proyectos visuales de Norberto D’Abreu.",
        emptyGalleryTitle: "Galería en preparación",
        emptyGalleryText:
            "Aquí añadiremos fotografías, obras y material documental de esta exhibición.",
        previousLabel: "Imagen anterior",
        nextLabel: "Imagen siguiente",
        openGalleryLabel: "Ampliar imagen",
        closeGalleryLabel: "Cerrar galería",
        catalogueLabel: "Catálogo y galería",
        catalogueImageLabel: "Catálogo",
        miscellaneousLabel: "Misc.",
        imageCounterLabel: "Imagen",
    },

    en: {
        pageLabel: "Exhibitions",
        backToMainMenu: "Home",
        backToExhibitionsMenu: "Back",
        listTitle: "Exhibitions",
        listSubtitle:
            "Archive of exhibitions, retrospectives, catalogues and visual projects by Norberto D’Abreu.",
        emptyGalleryTitle: "Gallery in progress",
        emptyGalleryText:
            "Photographs, artworks and documentary material from this exhibition will be added here.",
        previousLabel: "Previous image",
        nextLabel: "Next image",
        openGalleryLabel: "Enlarge image",
        closeGalleryLabel: "Close gallery",
        catalogueLabel: "Catalogue and gallery",
        catalogueImageLabel: "Catalogue",
        miscellaneousLabel: "Misc.",
        imageCounterLabel: "Image",
    },

    pt: {
        pageLabel: "Exposições",
        backToMainMenu: "Início",
        backToExhibitionsMenu: "Voltar",
        listTitle: "Exposições",
        listSubtitle:
            "Arquivo de exposições, retrospectivas, catálogos e projetos visuais de Norberto D’Abreu.",
        emptyGalleryTitle: "Galeria em preparação",
        emptyGalleryText:
            "Aqui serão adicionadas fotografias, obras e material documental desta exposição.",
        previousLabel: "Imagem anterior",
        nextLabel: "Imagem seguinte",
        openGalleryLabel: "Ampliar imagem",
        closeGalleryLabel: "Fechar galeria",
        catalogueLabel: "Catálogo e galeria",
        catalogueImageLabel: "Catálogo",
        miscellaneousLabel: "Misc.",
        imageCounterLabel: "Imagem",
    },
};

export const exhibitions: ExhibitionItem[] = [
    {
        slug: "disenos-de-piel",
        year: "2000",
        category: "exhibition",
        catalogImage: {
            src: "/images/exhibiciones/catalogos/2000-disenos-de-piel.webp",
            alt: "Catálogo de la exhibición Diseños de Piel",
        },
        es: {
            title: "Diseños de Piel",
            description:
                "Exhibición centrada en la relación entre cuerpo, superficie, textura y memoria ancestral. Una serie donde la figura y el objeto principal se diluyen en el espacio pictórico.",
            location: "Galería Quipus, Barquisimeto, Venezuela",
            date: "2000",
        },
        en: {
            title: "Diseños de Piel",
            description:
                "An exhibition focused on the relationship between body, surface, texture and ancestral memory. A series where the figure and the main object dissolve into the pictorial space.",
            location: "Quipus Gallery, Barquisimeto, Venezuela",
            date: "2000",
        },
        pt: {
            title: "Diseños de Piel",
            description:
                "Exposição centrada na relação entre corpo, superfície, textura e memória ancestral. Uma série onde a figura e o objeto principal se diluem no espaço pictórico.",
            location: "Galeria Quipus, Barquisimeto, Venezuela",
            date: "2000",
        },
        images: [],
    },
    {
        slug: "dorados-de-sol",
        year: "2001",
        category: "exhibition",
        catalogImage: {
            src: "/images/exhibiciones/catalogos/2001-dorados-de-sol.webp",
            alt: "Catálogo de la exhibición Dorados de Sol",
        },
        es: {
            title: "Dorados de Sol... Génesis de Pueblo",
            description:
                "Serie marcada por la luz, los dorados, la memoria popular y la fuerza simbólica de la tierra.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Galería Universitaria Rafael Monasterios, Barquisimeto, Venezuela",
            date: "Junio - Julio 2001",
        },
        en: {
            title: "Dorados de Sol... Genesis of a People",
            description:
                "A series shaped by light, golden tones, popular memory and the symbolic force of the land.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Rafael Monasterios University Gallery, Barquisimeto, Venezuela",
            date: "June - July 2001",
        },
        pt: {
            title: "Dorados de Sol... Génese de Povo",
            description:
                "Série marcada pela luz, pelos dourados, pela memória popular e pela força simbólica da terra.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Galeria Universitária Rafael Monasterios, Barquisimeto, Venezuela",
            date: "Junho - Julho 2001",
        },
        images: [],
    },
    {
        slug: "con-las-tablas-en-el-corazon",
        year: "2008",
        category: "exhibition",
        catalogImage: {
            src: "/images/exhibiciones/catalogos/2008-con-las-tablas-en-el-corazon.webp",
            alt: "Catálogo de la exhibición Con las Tablas en el Corazón",
        },
        es: {
            title: "Con las Tablas en el Corazón",
            description:
                "Proyecto expositivo vinculado a la teatralidad, la figura humana, la memoria escénica y la emoción de las tablas.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Galería Universitaria Rafael Monasterios, Barquisimeto, Venezuela",
            date: "Junio - Julio 2008",
        },
        en: {
            title: "With the Stage in the Heart",
            description:
                "An exhibition project linked to theatricality, the human figure, scenic memory and the emotion of the stage.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Rafael Monasterios University Gallery, Barquisimeto, Venezuela",
            date: "June - July 2008",
        },
        pt: {
            title: "Com as Tábuas no Coração",
            description:
                "Projeto expositivo ligado à teatralidade, à figura humana, à memória cénica e à emoção do palco.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Galeria Universitária Rafael Monasterios, Barquisimeto, Venezuela",
            date: "Junho - Julho 2008",
        },
        images: [
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-01.webp',
                alt: 'Con las Tablas en el Corazón - obra 1',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-02.webp',
                alt: 'Con las Tablas en el Corazón - obra 2',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-03.webp',
                alt: 'Con las Tablas en el Corazón - obra 3',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-04.webp',
                alt: 'Con las Tablas en el Corazón - obra 4',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-05.webp',
                alt: 'Con las Tablas en el Corazón - obra 5',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-06.webp',
                alt: 'Con las Tablas en el Corazón - obra 6',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-07.webp',
                alt: 'Con las Tablas en el Corazón - obra 7',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-08.webp',
                alt: 'Con las Tablas en el Corazón - obra 8',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-09.webp',
                alt: 'Con las Tablas en el Corazón - obra 9',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-10.webp',
                alt: 'Con las Tablas en el Corazón - obra 10',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-11.webp',
                alt: 'Con las Tablas en el Corazón - obra 11',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-12.webp',
                alt: 'Con las Tablas en el Corazón - obra 12',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-13.webp',
                alt: 'Con las Tablas en el Corazón - obra 13',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-14.webp',
                alt: 'Con las Tablas en el Corazón - obra 14',
            },
            {
                src: '/images/exhibiciones/con-las-tablas-en-el-corazon/con-las-tablas-en-el-corazon-15.webp',
                alt: 'Con las Tablas en el Corazón - obra 15',
            },
        ],
    },
    {
        slug: "mujeres-tradicion-infinita",
        year: "2012",
        category: "exhibition",
        catalogImage: {
            src: "/images/exhibiciones/catalogos/2012-mujeres-tradicion-infinita.webp",
            alt: "Catálogo de la exhibición Mujeres Tradición Infinita",
        },
        es: {
            title: "Mujeres... Tradición Infinita",
            description:
                "Exhibición dedicada a la figura femenina, la tradición, la identidad y la memoria cultural.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Galería Universitaria Rafael Monasterios, Barquisimeto, Venezuela",
            date: "Noviembre 2012 - Enero 2012",
        },
        en: {
            title: "Women... Infinite Tradition",
            description:
                "An exhibition devoted to the female figure, tradition, identity and cultural memory.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Rafael Monasterios University Gallery, Barquisimeto, Venezuela",
            date: "November 2012 - January 2012",
        },
        pt: {
            title: "Mulheres... Tradição Infinita",
            description:
                "Exposição dedicada à figura feminina, à tradição, à identidade e à memória cultural.",
            location:
                "Universidad Centro Occidental Lisandro Alvarado. Galeria Universitária Rafael Monasterios, Barquisimeto, Venezuela",
            date: "Novembro 2012 - Janeiro 2012",
        },
        images: [
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-01.webp",
                alt: "Mujeres... Tradición Infinita - obra 1",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-02.webp",
                alt: "Mujeres... Tradición Infinita - obra 2",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-03.webp",
                alt: "Mujeres... Tradición Infinita - obra 3",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-04.webp",
                alt: "Mujeres... Tradición Infinita - obra 4",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-05.webp",
                alt: "Mujeres... Tradición Infinita - obra 5",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-06.webp",
                alt: "Mujeres... Tradición Infinita - obra 6",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-07.webp",
                alt: "Mujeres... Tradición Infinita - obra 7",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-08.webp",
                alt: "Mujeres... Tradición Infinita - obra 8",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-09.webp",
                alt: "Mujeres... Tradición Infinita - obra 9",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-10.webp",
                alt: "Mujeres... Tradición Infinita - obra 10",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-11.webp",
                alt: "Mujeres... Tradición Infinita - obra 11",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-12.webp",
                alt: "Mujeres... Tradición Infinita - obra 12",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-13.webp",
                alt: "Mujeres... Tradición Infinita - obra 13",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-14.webp",
                alt: "Mujeres... Tradición Infinita - obra 14",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-15.webp",
                alt: "Mujeres... Tradición Infinita - obra 15",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-16.webp",
                alt: "Mujeres... Tradición Infinita - obra 16",
            },
            {
                src: "/images/exhibiciones/mujeres-tradicion-infinita/mujeres-tradicion-infinita-17.webp",
                alt: "Mujeres... Tradición Infinita - obra 17",
            },
        ],
    },
    {
        slug: "colores-que-bailan",
        year: "2013",
        category: "exhibition",
        catalogImage: {
            src: "/images/exhibiciones/catalogos/2013-colores-que-bailan.webp",
            alt: "Catálogo de la exhibición Colores que Bailan",
        },
        es: {
            title: "Colores que bailan... Unos cuentan... Otros riman",
            description:
                "Muestra donde el color, el gesto y el ritmo visual construyen escenas cargadas de movimiento, oralidad y relato.",
            location:
                "XX Aniversario Festival Internacional de la Oralidad. Palacio de Gobierno, Barquisimeto, Venezuela",
            date: "Junio - Julio 2013",
        },
        en: {
            title: "Colors that Dance... Some Tell... Others Rhyme",
            description:
                "A show where color, gesture and visual rhythm build scenes filled with movement, orality and narrative.",
            location:
                "20th Anniversary of the International Festival of Orality. Government Palace, Barquisimeto, Venezuela",
            date: "June - July 2013",
        },
        pt: {
            title: "Cores que Dançam... Uns Contam... Outros Rimam",
            description:
                "Mostra onde a cor, o gesto e o ritmo visual constroem cenas carregadas de movimento, oralidade e narrativa.",
            location:
                "XX Aniversário do Festival Internacional da Oralidade. Palácio do Governo, Barquisimeto, Venezuela",
            date: "Junho - Julho 2013",
        },
        images: [
            {
                src: '/images/exhibiciones/colores-que-danzan/colores-que-bailan-01.webp',
                alt: 'Colores que Danzan - obra 1',
            },
            {
                src: '/images/exhibiciones/colores-que-danzan/colores-que-bailan-02.webp',
                alt: 'Colores que Danzan - obra 2',
            },
            {
                src: '/images/exhibiciones/colores-que-danzan/colores-que-bailan-03.webp',
                alt: 'Colores que Danzan - obra 3',
            },
            {
                src: '/images/exhibiciones/colores-que-danzan/colores-que-bailan-04.webp',
                alt: 'Colores que Danzan - obra 4',
            },
            {
                src: '/images/exhibiciones/colores-que-danzan/colores-que-bailan-05.webp',
                alt: 'Colores que Danzan - obra 5',
            },
            {
                src: '/images/exhibiciones/colores-que-danzan/colores-que-bailan-06.webp',
                alt: 'Colores que Danzan - obra 6',
            },
            {
                src: '/images/exhibiciones/colores-que-danzan/colores-que-bailan-07.webp',
                alt: 'Colores que Danzan - obra 7',
            },
            {
                src: '/images/exhibiciones/colores-que-danzan/colores-que-bailan-08.webp',
                alt: 'Colores que Danzan - obra 8',
            },
        ],
    },
    {
        slug: "doradas-paginas-lusitanas",
        year: "2014",
        category: "exhibition",
        catalogImage: {
            src: "/images/exhibiciones/catalogos/2014-doradas-paginas-lusitanas.webp",
            alt: "Catálogo de la exhibición Doradas Páginas Lusitanas",
        },
        es: {
            title:
                "Doradas Páginas Lusitanas... la mano que rasgó el velo de Occidente",
            description:
                "Serie inspirada en la memoria lusitana, la herencia portuguesa y las resonancias doradas de la tradición.",
            location:
                "Palacio de la Independencia / Sociedad Histórica de la Independencia de Portugal. Galería Fernando Pessoa, Lisboa, Portugal",
            date: "Diciembre 2014",
        },
        en: {
            title:
                "Golden Lusitanian Pages... the Hand that Tore the Veil of the West",
            description:
                "A series inspired by Lusitanian memory, Portuguese heritage and the golden resonances of tradition.",
            location:
                "Palace of the Independence / Historical Society of the Independence of Portugal. Fernando Pessoa Gallery, Lisbon, Portugal",
            date: "December 2014",
        },
        pt: {
            title: "Douradas Páginas Lusitanas... a mão que rasgou o véu do Ocidente",
            description:
                "Série inspirada na memória lusitana, na herança portuguesa e nas ressonâncias douradas da tradição.",
            location:
                "Palácio da Independência / Sociedade Histórica da Independência de Portugal. Galeria Fernando Pessoa, Lisboa, Portugal",
            date: "Dezembro 2014",
        },
        images: [],
    },
    {
        slug: "retrospectiva",
        year: "2016",
        category: "exhibition",
        catalogImage: {
            src: "/images/exhibiciones/catalogos/2016-retrospectiva.webp",
            alt: "Catálogo de la retrospectiva Norberto D’Abreu En todos los tiempos",
        },
        es: {
            title: "Retrospectiva Norberto D’Abreu “En todos los tiempos”",
            description:
                "Retrospectiva dedicada a recorrer diferentes etapas, lenguajes y momentos fundamentales de la obra del artista.",
            location: "Sala de Arte Jorge Arteaga, Ateneo de Cabudare, Venezuela",
            date: "Marzo 2016",
        },
        en: {
            title: "Norberto D’Abreu Retrospective “Through All Times”",
            description:
                "A retrospective devoted to different stages, languages and key moments in the artist’s work.",
            location: "Jorge Arteaga Art Room, Ateneo de Cabudare, Venezuela",
            date: "March 2016",
        },
        pt: {
            title: "Retrospectiva Norberto D’Abreu “Em todos os tempos”",
            description:
                "Retrospectiva dedicada a percorrer diferentes etapas, linguagens e momentos fundamentais da obra do artista.",
            location: "Sala de Arte Jorge Arteaga, Ateneo de Cabudare, Venezuela",
            date: "Março 2016",
        },
        images: [],
    },
    {
        slug: "los-colores-de-la-lusofonia",
        year: "2019",
        category: "exhibition",
        catalogImage: {
            src: "/images/exhibiciones/catalogos/2019-los-colores-de-la-lusofonia.webp",
            alt: "Catálogo de la exhibición Los Colores de la Lusofonía",
        },
        es: {
            title: "Los Colores de la Lusofonía",
            description:
                "Exhibición que reúne color, identidad, raíz portuguesa y memoria visual en torno al universo lusófono.",
            location:
                "Palacio de la Independencia / Sociedad Histórica de la Independencia de Portugal. Galería Fernando Pessoa, Lisboa, Portugal",
            date: "Diciembre 2019",
        },
        en: {
            title: "The Colors of Lusophony",
            description:
                "An exhibition bringing together color, identity, Portuguese roots and visual memory around the Lusophone world.",
            location:
                "Palace of the Independence / Historical Society of the Independence of Portugal. Fernando Pessoa Gallery, Lisbon, Portugal",
            date: "December 2019",
        },
        pt: {
            title: "As Cores da Lusofonia",
            description:
                "Exposição que reúne cor, identidade, raiz portuguesa e memória visual em torno do universo lusófono.",
            location:
                "Palácio da Independência / Sociedade Histórica da Independência de Portugal. Galeria Fernando Pessoa, Lisboa, Portugal",
            date: "Dezembro 2019",
        },
        images: [
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-01.webp',
                alt: 'Los Colores de la Lusofonía - obra 1',
            },
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-02.webp',
                alt: 'Los Colores de la Lusofonía - obra 2',
            },
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-03.webp',
                alt: 'Los Colores de la Lusofonía - obra 3',
            },
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-04.webp',
                alt: 'Los Colores de la Lusofonía - obra 4',
            },
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-05.webp',
                alt: 'Los Colores de la Lusofonía - obra 5',
            },
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-06.webp',
                alt: 'Los Colores de la Lusofonía - obra 6',
            },
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-07.webp',
                alt: 'Los Colores de la Lusofonía - obra 7',
            },
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-08.webp',
                alt: 'Los Colores de la Lusofonía - obra 8',
            },
            {
                src: '/images/exhibiciones/los-colores-de-la-lusofonia/los-colores-de-la-lusofonia-09.webp',
                alt: 'Los Colores de la Lusofonía - obra 9',
            },
        ],
    },
    {
        slug: "miscelaneos",
        year: "Misc.",
        category: "misc",
        es: {
            title: "Misceláneos",
            description:
                "Archivo abierto para otras obras, dibujos, cerámicas, piezas de moda y proyectos diversos del artista.",
        },
        en: {
            title: "Miscellaneous",
            description:
                "An open archive for other artworks, drawings, ceramics, fashion pieces and various artistic projects.",
        },
        pt: {
            title: "Miscelâneos",
            description:
                "Arquivo aberto para outras obras, desenhos, cerâmicas, peças de moda e vários projetos do artista.",
        },
        images: [],
    },
];

export function getLocalizedExhibition(
    exhibition: ExhibitionItem,
    locale: string,
) {
    return exhibition[locale as "es" | "en" | "pt"] ?? exhibition.es;
}

export function getExhibitionGalleryImages(exhibition: ExhibitionItem) {
    return exhibition.catalogImage
        ? [exhibition.catalogImage, ...exhibition.images]
        : exhibition.images;
}
