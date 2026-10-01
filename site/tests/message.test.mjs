import {test} from 'node:test';
import assert from 'node:assert/strict';
import {prepareMessage} from '../dist/message.js';
test('proposal preserves accented product and customer details in encoded email',()=>{
 const result=prepareMessage('proposal',{name:'João Silva',email:'joao@example.com',product:'Consórcio de Imóvel',message:'Quero comprar meu imóvel.',phone:'(11) 5183-5931',marketing:true});
 assert.ok(result.mailto.startsWith('mailto:atendimento@flipseguros.com.br?'));
 const params=new URLSearchParams(result.mailto.split('?')[1]);
 assert.equal(params.get('subject'),'Solicitação de proposta — Consórcio de Imóvel');
 assert.ok(params.get('body').includes('Nome: João Silva'));
 assert.ok(params.get('body').includes('Aceite de comunicações: Sim'));
});
test('contact uses contact subject and never includes unrelated document fields',()=>{
 const result=prepareMessage('contact',{name:'Ana',email:'ana@example.com',message:'Olá & obrigada!',document:'123',marketing:false});
 assert.equal(result.subject,'Contato — Flip Seguros');
 assert.ok(!result.body.includes('CPF'));
 assert.ok(result.body.includes('Olá & obrigada!'));
 assert.ok(result.body.includes('Aceite de comunicações: Não'));
});
test('required information cannot consist of whitespace',()=>{
 assert.throws(()=>prepareMessage('contact',{name:' ',email:'a@b.com',message:'hello'}));
 assert.throws(()=>prepareMessage('proposal',{name:'Ana',email:'a@b.com',message:'hello',product:''}));
});
