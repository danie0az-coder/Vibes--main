import { ProductItem, StoryChapter, GalleryPhoto, NavLink } from '../types';

export const BRAND_INFO = {
  name: 'VIBES GIRL',
  handle: '@vibesgirl021',
  instagramUrl: 'https://www.instagram.com/vibesgirl021/',
  logoUrl: 'https://i.postimg.cc/bwr1N9n9/Editedimage-1789057168829.png',
  heroCardImage: 'https://i.postimg.cc/sfnYFLQv/Generatedimage-1789058173291.png',
  concept: 'DO SONHO À VIBES GIRL',
  hero: {
    headline: 'Um sonho que virou Vibes Girl.',
    subheadline: 'Moda, coragem e personalidade construídas peça por peça.',
    ctaPrimary: 'CONHEÇA NOSSA HISTÓRIA',
    ctaSecondary: 'VER COLEÇÃO',
  },
  openingStatement: {
    title: 'Mais do que uma loja.',
    text: 'A Vibes Girl nasceu de um sonho, de uma vontade sincera de conquistar e da coragem de começar mesmo sem saber exatamente onde tudo aquilo iria chegar.',
  },
  brandReveal: {
    lead: 'E aquele sonho ganhou um nome.',
    title: 'VIBES GIRL',
    subtitle: 'Uma marca construída com coragem, personalidade, desafios, aprendizado e vontade constante de crescer.',
    transformation: {
      from: 'PEQUENO COMEÇO',
      to: 'VIBES GIRL',
    },
  },
  impactTransition: {
    title: 'Do primeiro expositor aos sonhos que ainda estão por vir.',
    subtitle: 'Essa história ainda está sendo escrita.',
  },
  instagramSection: {
    title: 'Da nossa tela para o seu mundo.',
    description: 'A Vibes Girl também nasceu no contato direto com quem acompanha, escolhe, veste e vive a marca.',
    cta: 'SEGUIR NO INSTAGRAM',
  },
  futureSection: {
    title: 'O melhor ainda está por vir.',
    description: 'Esse é um resumo de dois anos e três meses de uma marca que ainda tem muitos sonhos pela frente.',
    phrase1: 'Essa história ainda está sendo escrita.',
    phrase2: 'Continue fazendo parte dela.',
  },
  testimonialsSection: {
    title: 'Quem vive essa história com a gente.',
    subtitle: 'Espaço reservado para as histórias e relatos de quem escolhe vestir a Vibes Girl.',
    badge: 'Comunidade & Conexão',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossa História', href: '#historia' },
  { label: 'Coleção', href: '#colecao' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Instagram', href: '#instagram' },
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'capitulo-01',
    chapterNumber: '01',
    title: 'Tudo começou com uma vontade.',
    highlightText: '20 DE JUNHO DE 2024',
    keyStat: {
      value: '20.06.2024',
      label: 'O Primeiro Passo',
    },
    bodyParagraphs: [
      'A trajetória teve início com o desejo sincero de empreender e construir uma independência própria através do trabalho.',
      'No dia 20 de junho de 2024, surgiu a primeira oportunidade de vendas: um desafio aceito com total dedicação e uma meta superada com êxito.',
      'Cada conquista inicial, por mais simples que parecesse, foi o combustível necessário para acreditar que aquele era apenas o começo.',
    ],
    editorialQuote: 'Foi pequeno para alguns. Mas foi gigante para quem estava começando.',
    theme: 'neutral',
  },
  {
    id: 'capitulo-02',
    chapterNumber: '02',
    title: 'De um pequeno expositor para um sonho maior.',
    highlightText: 'PRIMEIRO EXPOSITOR',
    keyStat: {
      value: 'Expositor',
      label: 'Espaço Físico Inicial',
    },
    bodyParagraphs: [
      'Em um ponto comercial acolhedor e compartilhado, um pequeno expositor foi conquistado para dar os primeiros passos presenciais.',
      'Naquele espaço inicial, foram organizadas com zelo as primeiras peças de moda íntima e descanso.',
      'A receptividade do público mostrou logo nos primeiros meses que o projeto tinha energia e potencial para ir muito além.',
    ],
    editorialQuote: 'De um espaço modesto nascia a certeza de que aquele projeto tinha fôlego para voar mais alto.',
    theme: 'contrast',
  },
  {
    id: 'capitulo-03',
    chapterNumber: '03',
    title: 'O estilo que eu queria vestir.',
    highlightText: 'R$ 200',
    keyStat: {
      value: 'R$ 200',
      label: 'O Investimento Corajoso',
    },
    bodyParagraphs: [
      '“E se eu trouxesse para a cidade o estilo que eu queria vestir?” — esse questionamento marcou a virada de chave da marca.',
      'Surgiu a decisão ousada de investir em peças que representassem autenticidade: modelagens jovens, marcantes e acessíveis, que fugiam do óbvio.',
      'Foi com um investimento inicial de apenas R$ 200 que a seleção autoral ganhou vida, conectando-se de imediato com mulheres que buscavam essa mesma essência.',
    ],
    editorialQuote: 'Quando a autenticidade guia a escolha, cada peça deixa de ser tecido para se tornar identidade.',
    theme: 'neutral',
  },
  {
    id: 'capitulo-04',
    chapterNumber: '04',
    title: 'Nem todo sonho cresce sem tropeçar.',
    highlightText: 'SUPERANDO DESAFIOS',
    keyStat: {
      value: 'Resiliência',
      label: 'Desafios Superados',
    },
    bodyParagraphs: [
      'O caminho do empreendedorismo raramente é uma linha reta sem turbulências.',
      'Durante a caminhada, surgiram momentos difíceis e prejuízos inesperados provocados por desafios do percurso.',
      'Apesar dos impactos, cada obstáculo serviu como escola para forjar maturidade e transformar adversidade em força para seguir adiante.',
    ],
    editorialQuote: 'Construir também é aprender a continuar.',
    theme: 'accent',
  },
  {
    id: 'capitulo-05',
    chapterNumber: '05',
    title: 'Alguns sonhos também são construídos por quem acredita neles.',
    highlightText: 'GRATIDÃO & PILARES',
    keyStat: {
      value: 'Base Sólida',
      label: 'Pilares da Marca',
    },
    bodyParagraphs: [
      'Nenhum projeto grandioso se sustenta sozinho. A força para transformar aquele pequeno expositor na Vibes Girl veio de quem esteve presente em cada momento decisivo.',
      'A caminhada encontrou alicerce na fé, no incentivo constante de quem acreditou no projeto desde o primeiro dia, no apoio familiar e na confiança genuína de cada cliente.',
    ],
    editorialQuote: '“Com fé, apoio verdadeiro, dedicação diária e a confiança de cada cliente, a Vibes Girl segue transformando sonho em realidade.”',
    theme: 'contrast',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'vestido-glam-dourado',
    name: 'Vestido Glam Dourado',
    category: 'Vestido Noite / Festa',
    price: 139.9,
    imageUrl: 'https://i.postimg.cc/vcTK0xcG/Editedimage-1789057780310.png',
    description: 'Modelagem ajustada com brilho reluzente, recorte moderno e caimento impecável para noites marcantes.',
    colorTone: '#D4AF37',
    accentBadge: 'Destaque Glam',
    sizes: ['P', 'M', 'G'],
  },
  {
    id: 'vestido-cutout-purple',
    name: 'Vestido Cut-Out Purple Vibes',
    category: 'Vestido Curto',
    price: 129.9,
    imageUrl: 'https://i.postimg.cc/7bmc1nPX/Editedimage-1789057784793.png',
    description: 'Recortes frontais estratégicos, amarrações refinadas e detalhe drapeado na tonalidade assinatura da marca.',
    colorTone: '#7E22CE',
    accentBadge: 'Mais Desejado',
    sizes: ['P', 'M', 'G'],
  },
  {
    id: 'conjunto-night-glow',
    name: 'Conjunto Night Glow',
    category: 'Conjunto Especial',
    price: 149.9,
    imageUrl: 'https://i.postimg.cc/F1DqbVFT/Editedimage-1789057787924.png',
    description: 'Top estruturado com aplicações brilhantes e saia com caimento fluido, unindo sofisticação e presença.',
    colorTone: '#1A0E2B',
    accentBadge: 'Edição Especial',
    sizes: ['P', 'M', 'G', 'GG'],
  },
  {
    id: 'vestido-midi-elegance',
    name: 'Vestido Elegance Ombro a Ombro',
    category: 'Vestido Elegance',
    price: 119.9,
    imageUrl: 'https://i.postimg.cc/BtMy5BZD/Editedimage-1789057824544.png',
    description: 'Decote clássico ombro a ombro em tom profundo, valorizando a postura e a silhueta com discrição e luxo.',
    colorTone: '#3A0E28',
    accentBadge: 'Clássico Moderno',
    sizes: ['PP', 'P', 'M', 'G'],
  },
  {
    id: 'vestido-longo-imperial',
    name: 'Vestido Longo Gala Imperial',
    category: 'Vestido Longo',
    price: 169.9,
    imageUrl: 'https://i.postimg.cc/ThCSjJ2b/Editedimage-1789057827584.png',
    description: 'Comprimento longo fluido com detalhe frontal torcido, elegância atemporal e movimento sofisticado.',
    colorTone: '#0F1A3A',
    accentBadge: 'Alta Presença',
    sizes: ['P', 'M', 'G'],
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'galeria-01',
    title: 'Vestido Glam Dourado',
    description: 'Brilho reluzente e caimento perfeito no provador.',
    assetKey: 'lookPreto',
    aspectRatio: 'aspect-[3/4]',
    tag: 'Look Noite',
  },
  {
    id: 'galeria-02',
    title: 'Vestido Cut-Out Purple',
    description: 'Recortes frontais e drapeado marcante.',
    assetKey: 'vestidoRosa',
    aspectRatio: 'aspect-[3/4]',
    tag: 'Vibes Curto',
  },
  {
    id: 'galeria-03',
    title: 'Conjunto Night Glow',
    description: 'Top com brilhos aplicados e saia fluida.',
    assetKey: 'vestidoVinho',
    aspectRatio: 'aspect-[3/4]',
    tag: 'Conjunto Festa',
  },
  {
    id: 'galeria-04',
    title: 'Vestido Longo Imperial',
    description: 'Longo sofisticado com detalhe torcido.',
    assetKey: 'vestidoAzul',
    aspectRatio: 'aspect-[3/4]',
    tag: 'Longo Gala',
  },
];
