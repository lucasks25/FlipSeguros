export function prepareMessage(type, values) {
  const value = key => String(values[key] || '').trim();
  if (!value('name') || !value('email') || !value('message') || (type === 'proposal' && !value('product'))) throw new Error('Preencha os campos obrigatórios.');
  const subject = type === 'proposal' ? `Solicitação de proposta — ${value('product')}` : 'Contato — Flip Seguros';
  const lines = [`Nome: ${value('name')}`, `E-mail: ${value('email')}`];
  if (type === 'proposal') {
    for (const [key, label] of [['document', 'CPF/CNPJ'], ['phone', 'Telefone'], ['mobile', 'Celular'], ['product', 'Produto']]) if (value(key)) lines.push(`${label}: ${value(key)}`);
  }
  lines.push('', 'Mensagem:', value('message'), '', 'Concordância com a Política de Privacidade: Sim', `Aceite de comunicações: ${values.marketing ? 'Sim' : 'Não'}`);
  const body = lines.join('\n');
  return { subject, body, mailto: `mailto:atendimento@flipseguros.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
}
