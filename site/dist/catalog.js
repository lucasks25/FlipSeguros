export const proposalUrl = 'proposta.html';
export const categories = [
  { id: 'todos', name: 'Todos os produtos' },
  { id: 'veiculos', name: 'Veículos' },
  { id: 'saude', name: 'Saúde e odonto' },
  { id: 'acidentes', name: 'Acidentes pessoais' },
  { id: 'viagem', name: 'Viagem' },
  { id: 'consorcios', name: 'Consórcios' },
];
export const products = [
  {id:'auto', name:'Seguro Auto', category:'veiculos', description:'Para proteger seu veículo, você também pode usufruir de uma série de vantagens.', purchase:'https://www.porto.vc/SEGUROAUTO_Z6BXUJ_8f44c2981f214bcfae66798cb5063efd'},
  {id:'empresarial', name:'Seguro Auto Empresarial', category:'veiculos', description:'Os veículos da sua empresa protegidos e com benefícios exclusivos.', slug:'auto-pequenas-empresas'},
  {id:'jovem', name:'Seguro Auto Jovem', category:'veiculos', description:'O seguro para você que tem um longo caminho pela frente. Além de proteger seu carro, oferece vantagens.', slug:'seguro-auto-jovem'},
  {id:'mulher', name:'Seguro Auto Mulher', category:'veiculos', description:'Um seguro que, além de proteger o seu automóvel, também cuida de você.', slug:'seguro-auto-mulher'},
  {id:'premium', name:'Seguro Auto Premium', category:'veiculos', description:'Exclusivo, como você. Rede de oficinas premium, assistência 24h, concierge e outros diferenciais.', slug:'auto-premium'},
  {id:'senior', name:'Seguro Auto Sênior', category:'veiculos', description:'São diversas vantagens para quem tem a partir de 60 anos.', slug:'seguro-auto-sênior'},
  {id:'taxi', name:'Seguro Táxi', category:'veiculos', description:'Serviços gratuitos, assistência rápida e descontos especiais para taxistas.', slug:'porto-seguro-táxi'},
  {id:'caminhao', name:'Seguro para Caminhão', category:'veiculos', description:'Coberturas e serviços que atendem à sua necessidade, na estrada e fora dela.', slug:'seguro-caminhão'},
  {id:'bike', name:'Seguro Bike', category:'veiculos', description:'Uma solução completa que cuida da bicicleta, do ciclista e de terceiros.', slug:'3faf4792-abd4-4da1-9980-2c2a4955f735'},
  {id:'saude', name:'Seguro Saúde', category:'saude', description:'As vantagens de uma contratação corporativa com atendimento personalizado.', slug:'seguro-saúde'},
  {id:'odonto', name:'Seguro Odontológico', category:'saude', description:'Para cuidar da saúde bucal e do bem-estar dos seus funcionários, com um sorriso mais saudável.', slug:'seguro-odontológico'},
  {id:'ocupacional', name:'Seguro Saúde Ocupacional', category:'saude', description:'Prevenção de riscos ocupacionais para cuidar integralmente dos seus negócios.', slug:'segurança-e-saúde-ocupacional'},
  {id:'acidentes-curto', name:'Seguro de Acidentes Pessoais Individual Prazo Curto', category:'acidentes', description:'Tranquilidade, proteção e auxílio em casos de acidente, com flexibilidade na vigência.', slug:'seguro-de-acidentes-pessoais-individual-curto-prazo'},
  {id:'acidentes-plus', name:'Seguro de Acidentes Pessoais Plus', category:'acidentes', description:'Vantagens e benefícios exclusivos para dar mais tranquilidade e segurança a você e à sua família.', slug:'seguro-de-acidentes-pessoais-plus'},
  {id:'viagem', name:'Seguro Viagem', category:'viagem', description:'Viajar é uma delícia. Com proteção e vantagens exclusivas, fica bem melhor. Viaje com segurança.', purchase:'https://www.porto.vc/VIAGEM_Z6BXUJ_d2bdb2b0c68f4f6486b2ba09b51409ef'},
  {id:'consorcio', name:'Consórcio', category:'consorcios', description:'A realização dos seus sonhos fica mais fácil com um plano de consórcio.', slug:'consórcio'},
  {id:'consorcio-veiculo', name:'Consórcio de Veículo', category:'consorcios', description:'Adquirir ou trocar seu carro fica bem mais fácil quando você tem o capital para esse investimento.', slug:'consórcio-automóvel'},
  {id:'consorcio-imovel', name:'Consórcio de Imóvel', category:'consorcios', description:'Para comprar casa ou apartamento, construir, reformar ou comprar um terreno.', slug:'consórcio-imóvel'},
];
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
export function filterProducts(category = 'todos', query = '') {
  const term = normalize(query);
  return products.filter(product => (category === 'todos' || product.category === category) && normalize(`${product.name} ${product.description}`).includes(term));
}
