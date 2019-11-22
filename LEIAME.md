# React Memo Example

App: https://8wpgs.csb.app/

CodeSandbox: https://codesandbox.io/s/react-memo-example-8wpgs

## Descrição

Eu criei esta aplicação para mostrar como memoização funciona no React e foi usado em uma talk que fiz em uma Open Talks ([Opensanca](www.opensanca.com) + React Sanca) no dia 26/09/2019.

A aplicação tem um grupo de containeres que mostra, junto com os seus nomes, o número de renderizações que tiveram.

Nós temos dois estados - `couter` e `counter5`. `counter` é o número de cliques no botão "increase" e `counter5` é aumentado quando `counter` atinge um valor multiplo de 5.

Dentro do App, temos 3 containeres: o primeiro com os componentes sem memorização; o segundo, com os componentes memorizados; e o terceiro, com um componente que renderiza um círculo usado para mostrar como o `useMemo` funciona.

Dentro dois dois primeiros containeres, temos:

- Title: usado para mostrar como React.memo funciona.

Ele recebe uma única props (`title`) e ela nunca muda. Nós esperamos que o MemoizedTitle nunca mude com a mudanças dos estados.

- Increase: usado para mostrar como o `useCallback` funciona (ele recebe um callback como uma props).

Mesmo se você usar o component MemoizedIncrese sem o `useCallback`, o número de renderização do componente continuará a aumentar. Isso porque o JavaScript entende como diferentes funções que são iguais. Para contonar este problema, temos que usar o `useCallback` na nossa função antes de passá-lo como props.

- Counter: usado para mostrar que nem todos os componentes devem ser memorizados.

Como o `counter` só aumenta, sabemos que Counter sempre vai receber um novo valos de props e ele será sempre re-renderizado. Não vale memorizar este componente porque ele vai executar uma função de comparação a mais todas as vezes.

- Counter5: usado para mostrar como podemos criar nossos próprios métodos de comparação no React.memo.

Couter5 sempre recebe `counter` e `counter5` como props mas ele só vai ser re-renderizado quando o `counter5` mudar. Nós podemos passar uma função como segundo parâmetro no React.memo, que é usada para fazer a nossa comparação:

```
const MenoizedCounter5 = React.memo(Counter5, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
```

Por fim, o terceiro container renderiza parte de um arco em função do `counter5`. Para criar o círculo, foi usada uma função que retorna um path de SVG, e, nesta função, são feitas transformações de coordenadas polares para cartesianas. Para efeito de demonstração, vamos supor que estas transformações consomem muito processamento e não queremos que ela seja executada toda vez que o componente re-renderiza, mas sim só quando o `counter5` muda. No centro do container está o número que a função que retorna o path foi executada.
