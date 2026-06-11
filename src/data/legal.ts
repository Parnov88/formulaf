interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  afterList?: string[];
}

interface LegalDoc {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  footerNote: string;
}

export const termos: LegalDoc = {
  title: 'Termos de Uso — Fórmula F',
  lastUpdated: 'Última atualização: junho de 2026',
  sections: [
    {
      heading: '1. ACEITAÇÃO',
      paragraphs: ['Ao adquirir ou acessar os materiais da Fórmula F, você concorda com estes Termos.'],
    },
    {
      heading: '2. PRODUTO',
      paragraphs: [
        'A Fórmula F é um produto digital de desenvolvimento pessoal. O acesso é individual e intransferível.',
      ],
    },
    {
      heading: '3. PROPRIEDADE INTELECTUAL',
      paragraphs: [
        'Todo o conteúdo — textos, áudios, vídeos e materiais complementares — é protegido por direitos autorais. É proibida a reprodução, redistribuição ou revenda total ou parcial sem autorização prévia por escrito.',
      ],
    },
    {
      heading: '4. USO PERMITIDO',
      paragraphs: [
        'O material é licenciado para uso pessoal exclusivo do comprador. Não é permitido compartilhar login, copiar ou distribuir o conteúdo em qualquer formato.',
      ],
    },
    {
      heading: '5. RESULTADOS',
      paragraphs: [
        'Os resultados descritos são baseados em experiências reais de usuários. Resultados individuais podem variar conforme o contexto, a frequência de aplicação e as circunstâncias de cada pessoa. Não garantimos resultados específicos.',
      ],
    },
    {
      heading: '6. ISENÇÃO DE RESPONSABILIDADE',
      paragraphs: [
        'Este produto tem fins exclusivamente educacionais e de desenvolvimento pessoal. Não substitui acompanhamento psicológico ou terapêutico profissional.',
      ],
    },
    {
      heading: '7. GARANTIA E REEMBOLSO',
      paragraphs: [
        'Conforme descrito na página de vendas, oferecemos garantia de 90 dias. Solicitações de reembolso devem ser enviadas para parnov8@gmail.com dentro do prazo. O processamento é realizado pela Cakto em até 5 dias úteis.',
      ],
    },
    {
      heading: '8. PLATAFORMA',
      paragraphs: [
        'O acesso ao conteúdo é fornecido pela plataforma Cakto. Sujeito aos Termos de Serviço da Cakto (cakto.com.br).',
      ],
    },
    {
      heading: '9. CONTATO',
      paragraphs: ['Dúvidas: parnov8@gmail.com'],
    },
  ],
  footerNote: 'Fórmula F Brasil — CNPJ: 59.291.418/0001-48',
};

export const privacidade: LegalDoc = {
  title: 'Política de Privacidade — Fórmula F',
  lastUpdated: 'Última atualização: junho de 2026',
  sections: [
    {
      heading: '1. DADOS COLETADOS',
      paragraphs: [
        'Coletamos apenas os dados necessários para processar sua compra e entregar o produto: nome, e-mail e dados de pagamento (processados exclusivamente pela Cakto — não armazenamos dados de cartão).',
      ],
    },
    {
      heading: '2. USO DOS DADOS',
      paragraphs: ['Seus dados são usados para:'],
      list: [
        'Processar e entregar sua compra',
        'Enviar informações sobre seu acesso',
        'Comunicações relacionadas ao produto adquirido',
      ],
    },
    {
      heading: '3. COMPARTILHAMENTO',
      paragraphs: [
        'Não vendemos nem compartilhamos seus dados com terceiros, exceto com a Cakto (processamento de pagamento) e o Meta (pixel de conversão — dados agregados e anonimizados).',
      ],
    },
    {
      heading: '4. META PIXEL',
      paragraphs: [
        'Utilizamos o Meta Pixel para medir a eficácia de nossas campanhas. O pixel coleta dados de comportamento de navegação de forma agregada. Você pode optar por não participar nas configurações do seu navegador ou em facebook.com/privacy/explanation.',
      ],
    },
    {
      heading: '5. SEUS DIREITOS (LGPD)',
      paragraphs: ['Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:'],
      list: [
        'Acessar seus dados pessoais',
        'Corrigir dados incorretos',
        'Solicitar a exclusão dos seus dados',
        'Revogar o consentimento a qualquer momento',
      ],
      afterList: ['Para exercer esses direitos: parnov8@gmail.com'],
    },
    {
      heading: '6. COOKIES',
      paragraphs: [
        'Nosso site utiliza cookies para funcionamento técnico e análise de tráfego. Ao continuar navegando, você concorda com o uso de cookies.',
      ],
    },
    {
      heading: '7. SEGURANÇA',
      paragraphs: [
        'Adotamos medidas técnicas adequadas para proteger seus dados contra acesso não autorizado.',
      ],
    },
    {
      heading: '8. CONTATO',
      paragraphs: ['parnov8@gmail.com'],
    },
  ],
  footerNote: 'Fórmula F Brasil — CNPJ: 59.291.418/0001-48',
};
