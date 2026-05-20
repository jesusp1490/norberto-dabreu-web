export type BioSectionKey = 'biography' | 'statement' | 'cv';

type CvGroup = {
  title: string;
  items: string[];
};

export type BioLanguageContent = {
  pageLabel: string;
  backToMainMenu: string;
  backToBioMenu: string;
  tabs: Record<BioSectionKey, string>;
  biography: {
    title: string;
    paragraphs: string[];
  };
  statement: {
    title: string;
    paragraphs: string[];
  };
  cv: {
    title: string;
    groups: CvGroup[];
  };
  oldPhotos: {
    title: string;
    previousLabel: string;
    nextLabel: string;
  };
};

export const bioContent: Record<string, BioLanguageContent> = {
  es: {
    pageLabel: 'Bio',
    backToMainMenu: 'Inicio',
    backToBioMenu: 'Volver',
    tabs: {
      biography: 'Biografía',
      statement: 'Declaración artística',
      cv: 'CV',
    },
    biography: {
      title: 'Biografía',
      paragraphs: [
        'Norberto D’Abreu nace en Venezuela en 1956, de padres portugueses. Recibe toda su cultura y tradición, mezclándola con los colores y costumbres de la tierra que lo vio nacer.',
        'Se inicia en la pintura con el pintor madrileño Alfonso de la Vega, sobrino del famoso pintor español José María Sert, quien lo introduce desde muy temprana edad en el arte.',
        'Estudia dibujo, publicidad y decoración en Caracas. En su búsqueda por ampliar sus conocimientos viaja a España, donde estudia cerámica, fotografía, diseño de modas, paisajismo y museología en diferentes academias.',
        'En España se forma en instituciones como el Círculo de Bellas Artes, Academia Artium, Academia Arjona, Academia de Artes y Oficios y en el atelier del pintor Rogelio García Vásquez.',
        'Su obra absorbe influencias de Sorolla, Velásquez, las paletas impresionistas francesas, la luz tropical y las veladuras españolas, creando una simbiosis particular en su estilo.',
        'Tras regresar a Venezuela desarrolla una amplia actividad cultural como ilustrador, diseñador textil, diseñador gráfico y diseñador de moda. Más tarde funda su atelier de arte, donde imparte clases de dibujo, pintura e historia del arte.',
        'A partir de 2013 viaja entre Europa y Venezuela. Después de varias exhibiciones decide instalarse en Portugal, donde continúa desarrollando su obra, sus retratos y sus historias visuales llenas de color, luz y memoria.',
      ],
    },
    statement: {
      title: 'Declaración artística',
      paragraphs: [
        'Soy figurativo, con colores de paleta impresionista y conceptos de composición abierta.',
        'Trabajo desde un dibujo preciso y pinceladas sutiles, libres. Veo lo que pinto con ojos de esperanza.',
        'Me gusta romper la forma con técnicas que mezclo y confundo con la figura principal, ya sea con modelos en vivo, en el taller, o a través de medios audiovisuales o fotografías.',
        'Siempre un lienzo, y también maderas, sintéticos, laminilla dorada, liencillo, cerámica, bronce, alambre, pinceles, brochas, espátulas y acrílicos.',
        'Mi tutor y abuelo español Alfonso de la Vega encaminó mi pasión eufórica, infantil y empírica por el arte, volcando en mí sus conocimientos artísticos y culturales.',
        'Con él conocí los colores de los impresionistas, el dibujo de los clásicos españoles, las luces tropicales y las veladuras españolas.',
        'La figura humana es la base de mi trabajo. Para mí es el eje de la historia que voy a contar con mis colores, buscando descubrir gestos, miradas y actitudes únicas de cada personaje.',
        'En mi obra hablo del amor, de la familia, de lo profundo, de las raíces y de lo hermoso. Es la expresión profunda de mis sentimientos y de mi amor por la vida.',
      ],
    },
    cv: {
      title: 'Curriculum Vitae',
      groups: [
        {
          title: 'Educación',
          items: [
            '1960–1974 · Enseñanza básica y secundaria. Caracas, Venezuela.',
            '1974–1976 · Decoración, Academia Villasmil de León. Caracas, Venezuela.',
            '1974–1976 · Mercadotecnia y Publicidad, ISUM. Caracas, Venezuela.',
            '1974–1976 · Dibujo Publicitario, Academia Higuera Jiménez. Caracas, Venezuela.',
            'Dibujo y Pintura Artística, Academia Alfonso de la Vega. Caracas, Venezuela.',
            '1976–1980 · Pintura clásica, nuevos estilos, pintura impresionista, pintura al aire libre y diseño de moda. Madrid, España.',
            'Pintura Libre, Círculo de Bellas Artes. Madrid, España.',
          ],
        },
        {
          title: 'Trabajo profesional',
          items: [
            '1975–1976 · Creador y dibujante publicitario en Ghersy Quintero & Ted Bates. Caracas, Venezuela.',
            '1980–1989 · Pintura artística, diseño gráfico, publicidad, fotografía, ilustración, vitrinismo y eventos. GraphicArt 2A.',
            '1990–2017 · Fundador e instructor del Atelier-Galería BARROCONARTE.',
            'Clases y talleres de dibujo, cerámica y pintura.',
          ],
        },
        {
          title: 'Exposiciones seleccionadas',
          items: [
            '2019 · Exposición individual “Los Colores de la Lusofonía”. Galería Fernando Pessoa, Palacio de la Independencia de Portugal. Lisboa, Portugal.',
            '2019 · Exposición colectiva “Galería Zeller”. Espinho, Portugal.',
            '2018 · Exposición colectiva Galería “Espejos y Arte”. Caracas, Venezuela.',
            '2017 · Exposición colectiva “Galería Zeller”. Espinho, Portugal.',
            '2016 · Exposición individual “Norberto D’Abreu… en todos los Tiempos”. Retrospectiva. Ateneo de Cabudare, Venezuela.',
            '2015 · Exposición individual “Doradas Páginas Lusitanas”. Espinho, Portugal.',
            '2014 · Exposición individual “Doradas Páginas Lusitanas”. Lisboa, Portugal.',
            '2013 · Exposición individual “Colores que danzan... unos cuentan y otros riman”. Venezuela.',
            '2012 · Exposición individual “Mujeres... Tradición Infinita”. Venezuela.',
            '2008 · Exposición individual “Con las Tablas en el Corazón”. Venezuela.',
            '2001 · Exposición individual “Dorados de Sol... Génesis de Pueblo”. Venezuela.',
            '2000 · Exposición individual “Diseños de Piel”.',
            '1995 · Exposición individual “Raíces, Tierra y Viento”. Venezuela.',
          ],
        },
        {
          title: 'Colecciones seleccionadas',
          items: [
            'Besharat Gallery, Atlanta, Georgia, USA.',
            'Museo de Arte Latinoamericano de Los Ángeles, MOLAA, USA.',
            'Universidad Centro Occidental Lisandro Alvarado UCLA, Venezuela.',
            'Museo Guayasamín, Quito, Ecuador.',
            'Museo Gabriela Mistral, Chile.',
            'Círculo Militar, Caracas, Venezuela.',
            'Círculo Militar, Barquisimeto, Venezuela.',
            'Colección Centro Portugués, Caracas, Venezuela.',
            'Palacio de la Independencia de Portugal, Lisboa.',
            'Colecciones privadas en América y Europa.',
          ],
        },
      ],
    },
    oldPhotos: {
      title: 'Fotos viejas',
      previousLabel: 'Foto anterior',
      nextLabel: 'Foto siguiente',
    },
  },

  en: {
    pageLabel: 'Bio',
    backToMainMenu: 'Home',
    backToBioMenu: 'Back',
    tabs: {
      biography: 'Biography',
      statement: 'Artistic statement',
      cv: 'CV',
    },
    biography: {
      title: 'Biography',
      paragraphs: [
        'Norberto D’Abreu was born in Venezuela in 1956 to Portuguese parents. He inherited their culture and traditions, blending them with the colors and customs of the land where he was born.',
        'He began painting under the guidance of Madrid-born painter Alfonso de la Vega, nephew of the renowned Spanish painter José María Sert, who introduced him to art from a very early age.',
        'He studied drawing, advertising and decoration in Caracas. In his search to broaden his knowledge, he travelled to Spain, where he also studied ceramics, photography, fashion design, landscaping and museology in several academies.',
        'In Spain, he trained at institutions such as the Círculo de Bellas Artes, Academia Artium, Academia Arjona, Academia de Artes y Oficios and in the atelier of painter Rogelio García Vásquez.',
        'His work absorbs influences from Sorolla, Velázquez, French impressionist palettes, tropical light and Spanish glazes, creating a distinctive synthesis within his personal style.',
        'After returning to Venezuela, he developed an extensive cultural career as an illustrator, textile designer, graphic designer and fashion designer. He later founded his own art atelier, where he taught drawing, painting and art history.',
        'From 2013 onward, he travelled between Europe and Venezuela. After several exhibitions, he decided to settle in Portugal, where he continues to develop his work, portraits and visual stories filled with color, light and memory.',
      ],
    },
    statement: {
      title: 'Artistic Statement',
      paragraphs: [
        'I am a figurative artist, working with impressionist palette colors and concepts of open composition.',
        'My work is built through precise drawing and subtle, free brushstrokes. I see what I paint with eyes of hope.',
        'I like to break the form through techniques that I mix and merge with the main figure, whether working from live models, in the studio, or through audiovisual media and photographs.',
        'Always a canvas, but also wood, synthetic materials, gold leaf, raw canvas, ceramics, bronze, wire, brushes, paintbrushes, spatulas and acrylics.',
        'My Spanish tutor and grandfather, Alfonso de la Vega, guided my euphoric, childlike and empirical passion for art, passing on to me his artistic and cultural knowledge.',
        'Through him I discovered the colors of the Impressionists, the drawing of the Spanish classics, tropical lights and Spanish glazes.',
        'The human figure is the foundation of my work. For me, it is the axis of the story I want to tell through my colors, searching for the gestures, gazes and unique attitudes of each character.',
        'In my work, I speak of love, family, depth, roots and beauty. It is the profound expression of my feelings and of my love for life.',
      ],
    },
    cv: {
      title: 'Curriculum Vitae',
      groups: [
        {
          title: 'Education',
          items: [
            '1960–1974 · Primary and secondary education. Caracas, Venezuela.',
            '1974–1976 · Decoration, Academia Villasmil de León. Caracas, Venezuela.',
            '1974–1976 · Marketing and Advertising, ISUM. Caracas, Venezuela.',
            '1974–1976 · Advertising Drawing, Academia Higuera Jiménez. Caracas, Venezuela.',
            'Artistic Drawing and Painting, Academia Alfonso de la Vega. Caracas, Venezuela.',
            '1976–1980 · Classical painting, new styles, impressionist painting, plein air painting and fashion design. Madrid, Spain.',
            'Free Painting, Círculo de Bellas Artes. Madrid, Spain.',
          ],
        },
        {
          title: 'Professional work',
          items: [
            '1975–1976 · Creative and advertising illustrator at Ghersy Quintero & Ted Bates. Caracas, Venezuela.',
            '1980–1989 · Artistic painting, graphic design, advertising, photography, illustration, window dressing and events. GraphicArt 2A.',
            '1990–2017 · Founder and instructor of Atelier-Gallery BARROCONARTE.',
            'Drawing, ceramics and painting classes and workshops.',
          ],
        },
        {
          title: 'Selected exhibitions',
          items: [
            '2019 · Solo exhibition “Los Colores de la Lusofonía”. Fernando Pessoa Gallery, Palace of the Independence of Portugal. Lisbon, Portugal.',
            '2019 · Group exhibition “Galería Zeller”. Espinho, Portugal.',
            '2018 · Group exhibition at “Espejos y Arte” Gallery. Caracas, Venezuela.',
            '2017 · Group exhibition “Galería Zeller”. Espinho, Portugal.',
            '2016 · Solo exhibition “Norberto D’Abreu… en todos los Tiempos”. Retrospective. Ateneo de Cabudare, Venezuela.',
            '2015 · Solo exhibition “Doradas Páginas Lusitanas”. Espinho, Portugal.',
            '2014 · Solo exhibition “Doradas Páginas Lusitanas”. Lisbon, Portugal.',
            '2013 · Solo exhibition “Colores que danzan... unos cuentan y otros riman”. Venezuela.',
            '2012 · Solo exhibition “Mujeres... Tradición Infinita”. Venezuela.',
            '2008 · Solo exhibition “Con las Tablas en el Corazón”. Venezuela.',
            '2001 · Solo exhibition “Dorados de Sol... Génesis de Pueblo”. Venezuela.',
            '2000 · Solo exhibition “Diseños de Piel”.',
            '1995 · Solo exhibition “Raíces, Tierra y Viento”. Venezuela.',
          ],
        },
        {
          title: 'Selected collections',
          items: [
            'Besharat Gallery, Atlanta, Georgia, USA.',
            'Museum of Latin American Art, MOLAA, Los Angeles, USA.',
            'Universidad Centro Occidental Lisandro Alvarado UCLA, Venezuela.',
            'Guayasamín Museum, Quito, Ecuador.',
            'Gabriela Mistral Museum, Chile.',
            'Círculo Militar, Caracas, Venezuela.',
            'Círculo Militar, Barquisimeto, Venezuela.',
            'Centro Portugués Collection, Caracas, Venezuela.',
            'Palace of the Independence of Portugal, Lisbon.',
            'Private collections in America and Europe.',
          ],
        },
      ],
    },
    oldPhotos: {
      title: 'Old photos',
      previousLabel: 'Previous photo',
      nextLabel: 'Next photo',
    },
  },

  pt: {
    pageLabel: 'Bio',
    backToMainMenu: 'Início',
    backToBioMenu: 'Voltar',
    tabs: {
      biography: 'Biografia',
      statement: 'Declaração artística',
      cv: 'CV',
    },
    biography: {
      title: 'Biografia',
      paragraphs: [
        'Norberto D’Abreu nasceu na Venezuela em 1956, filho de pais portugueses. Recebeu toda a sua cultura e tradição, misturando-a com as cores e costumes da terra que o viu nascer.',
        'Iniciou-se na pintura com o pintor madrileno Alfonso de la Vega, sobrinho do famoso pintor espanhol José María Sert, que o introduziu na arte desde muito cedo.',
        'Estudou desenho, publicidade e decoração em Caracas. Na procura de ampliar os seus conhecimentos, viajou para Espanha, onde também estudou cerâmica, fotografia, design de moda, paisagismo e museologia em várias academias.',
        'Em Espanha, formou-se em instituições como o Círculo de Bellas Artes, Academia Artium, Academia Arjona, Academia de Artes y Oficios e no atelier do pintor Rogelio García Vásquez.',
        'A sua obra absorve influências de Sorolla, Velázquez, das paletas impressionistas francesas, da luz tropical e das veladuras espanholas, criando uma síntese muito própria no seu estilo.',
        'Ao regressar à Venezuela, desenvolveu uma ampla atividade cultural como ilustrador, designer têxtil, designer gráfico e designer de moda. Mais tarde fundou o seu atelier de arte, onde deu aulas de desenho, pintura e história da arte.',
        'A partir de 2013 viajou entre a Europa e a Venezuela. Depois de várias exposições, decidiu instalar-se em Portugal, onde continua a desenvolver a sua obra, os seus retratos e as suas histórias visuais cheias de cor, luz e memória.',
      ],
    },
    statement: {
      title: 'Declaração Artística',
      paragraphs: [
        'Sou figurativo, com cores de paleta impressionista e conceitos de composição aberta.',
        'Trabalho a partir de um desenho preciso e de pinceladas subtis e livres. Vejo o que pinto com olhos de esperança.',
        'Gosto de romper a forma com técnicas que misturo e confundo com a figura principal, seja com modelos ao vivo, no atelier, ou através de meios audiovisuais e fotografias.',
        'Sempre uma tela, mas também madeiras, materiais sintéticos, folha dourada, linho cru, cerâmica, bronze, arame, pincéis, brochas, espátulas e acrílicos.',
        'O meu tutor e avô espanhol, Alfonso de la Vega, orientou a minha paixão eufórica, infantil e empírica pela arte, transmitindo-me os seus conhecimentos artísticos e culturais.',
        'Com ele conheci as cores dos impressionistas, o desenho dos clássicos espanhóis, as luzes tropicais e as veladuras espanholas.',
        'A figura humana é a base do meu trabalho. Para mim, é o eixo da história que conto com as minhas cores, procurando descobrir gestos, olhares e atitudes únicas de cada personagem.',
        'Na minha obra falo do amor, da família, do profundo, das raízes e do belo. É a expressão profunda dos meus sentimentos e do meu amor pela vida.',
      ],
    },
    cv: {
      title: 'Curriculum Vitae',
      groups: [
        {
          title: 'Educação',
          items: [
            '1960–1974 · Ensino básico e secundário. Caracas, Venezuela.',
            '1974–1976 · Decoração, Academia Villasmil de León. Caracas, Venezuela.',
            '1974–1976 · Marketing e Publicidade, ISUM. Caracas, Venezuela.',
            '1974–1976 · Desenho Publicitário, Academia Higuera Jiménez. Caracas, Venezuela.',
            'Desenho e Pintura Artística, Academia Alfonso de la Vega. Caracas, Venezuela.',
            '1976–1980 · Pintura clássica, novos estilos, pintura impressionista, pintura ao ar livre e design de moda. Madrid, Espanha.',
            'Pintura Livre, Círculo de Bellas Artes. Madrid, Espanha.',
          ],
        },
        {
          title: 'Trabalho profissional',
          items: [
            '1975–1976 · Criador e desenhador publicitário na Ghersy Quintero & Ted Bates. Caracas, Venezuela.',
            '1980–1989 · Pintura artística, design gráfico, publicidade, fotografia, ilustração, vitrinismo e eventos. GraphicArt 2A.',
            '1990–2017 · Fundador e instrutor do Atelier-Galeria BARROCONARTE.',
            'Aulas e workshops de desenho, cerâmica e pintura.',
          ],
        },
        {
          title: 'Exposições selecionadas',
          items: [
            '2019 · Exposição individual “Los Colores de la Lusofonía”. Galeria Fernando Pessoa, Palácio da Independência de Portugal. Lisboa, Portugal.',
            '2019 · Exposição coletiva “Galería Zeller”. Espinho, Portugal.',
            '2018 · Exposição coletiva na Galeria “Espejos y Arte”. Caracas, Venezuela.',
            '2017 · Exposição coletiva “Galería Zeller”. Espinho, Portugal.',
            '2016 · Exposição individual “Norberto D’Abreu… en todos los Tiempos”. Retrospectiva. Ateneo de Cabudare, Venezuela.',
            '2015 · Exposição individual “Doradas Páginas Lusitanas”. Espinho, Portugal.',
            '2014 · Exposição individual “Doradas Páginas Lusitanas”. Lisboa, Portugal.',
            '2013 · Exposição individual “Colores que danzan... unos cuentan y otros riman”. Venezuela.',
            '2012 · Exposição individual “Mujeres... Tradición Infinita”. Venezuela.',
            '2008 · Exposição individual “Con las Tablas en el Corazón”. Venezuela.',
            '2001 · Exposição individual “Dorados de Sol... Génesis de Pueblo”. Venezuela.',
            '2000 · Exposição individual “Diseños de Piel”.',
            '1995 · Exposição individual “Raíces, Tierra y Viento”. Venezuela.',
          ],
        },
        {
          title: 'Coleções selecionadas',
          items: [
            'Besharat Gallery, Atlanta, Georgia, USA.',
            'Museu de Arte Latino-Americana de Los Angeles, MOLAA, USA.',
            'Universidad Centro Occidental Lisandro Alvarado UCLA, Venezuela.',
            'Museu Guayasamín, Quito, Equador.',
            'Museu Gabriela Mistral, Chile.',
            'Círculo Militar, Caracas, Venezuela.',
            'Círculo Militar, Barquisimeto, Venezuela.',
            'Coleção Centro Português, Caracas, Venezuela.',
            'Palácio da Independência de Portugal, Lisboa.',
            'Coleções privadas na América e na Europa.',
          ],
        },
      ],
    },
    oldPhotos: {
      title: 'Fotos antigas',
      previousLabel: 'Foto anterior',
      nextLabel: 'Foto seguinte',
    },
  },
};