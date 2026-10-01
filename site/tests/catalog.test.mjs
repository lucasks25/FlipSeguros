import { test } from 'node:test';
import assert from 'node:assert/strict';
import { products, filterProducts } from '../dist/catalog.js';
test('all original product variants remain available', () => {
 assert.equal(products.length,18);
 assert.equal(new Set(products.map(p=>p.id)).size,18);
 for(const name of ['Seguro Táxi','Seguro Bike','Seguro Auto Sênior','Seguro Saúde Ocupacional','Consórcio de Imóvel','Seguro Viagem']) assert.ok(products.some(p=>p.name===name));
});
test('category filtering includes every vehicle variant and excludes health', () => {
 const result=filterProducts('veiculos','');
 assert.equal(result.length,9);
 assert.ok(result.some(p=>p.name==='Seguro Táxi'));
 assert.ok(!result.some(p=>p.name==='Seguro Saúde'));
});
test('search ignores accents and capitalization while honoring category', () => {
 assert.equal(filterProducts('todos','  SENIOR  ')[0].name,'Seguro Auto Sênior');
 assert.equal(filterProducts('consorcios','imovel')[0].name,'Consórcio de Imóvel');
 assert.equal(filterProducts('saude','senior').length,0);
});
test('unmatched search returns no products and clearing returns full catalogue',()=>{
 assert.equal(filterProducts('todos','xyzfoobar').length,0);
 assert.equal(filterProducts('todos','').length,18);
});
