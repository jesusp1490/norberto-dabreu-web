export type BioSectionKey = 'biography' | 'statement' | 'cv';

type CvGroup = {
  title: string;
  items: string[];
};

type BioLanguageContent = {
  pageLabel: string;
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
    subtitle: string;
  };
};

export const bioContent: Record<string, BioLanguageContent> = {
  es: {
    pageLabel: 'Bio',
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
            '2019 · Exposición individual “Los Colores de la Lusofonía”. Galería Fernando Pessoa, Palacio de la Independencia de Portugal. Lisboa.',
            '2016 · Exposición individual “Norberto D’Abreu… en todos los Tiempos”. Retrospectiva. Ateneo de Cabudare, Venezuela.',
            '2015 · Exposición individual “Doradas Páginas Lusitanas”. Espinho, Portugal.',
            '2014 · Exposición individual “Doradas Páginas Lusitanas”. Lisboa, Portugal.',
            '2013 · Exposición individual “Colores que danzan... unos cuentan y otros riman”. Lara, Venezuela.',
            '2012 · Exposición individual “Mujeres... Tradición Infinita”. UCLA, Barquisimeto, Venezuela.',
            '2008 · Exposición individual “Con las Tablas en el Corazón”. UCLA, Barquisimeto, Venezuela.',
            '2001 · Exposición individual “Dorados de Sol... Génesis de Pueblo”. UCLA, Barquisimeto, Venezuela.',
            '2000 · Exposición individual “Diseños de Piel”.',
            '1995 · Exposición individual “Raíces, Tierra y Viento”. Galería Parque Real, Lara, Venezuela.',
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
            'Palacio de la Independencia de Portugal, Lisboa.',
            'Colecciones privadas en América y Europa.',
          ],
        },
      ],
    },
    oldPhotos: {
      title: 'Fotos viejas',
      subtitle: 'Aquí colocaremos el archivo fotográfico antiguo cuando compartas las imágenes.',
    },
  },
};