# [Monstercat](https://www.frontendpractice.com/projects/monstercat)

![](https://www.frontendpractice.com/_next/image?url=%2Ffullsize%2FC2-Monstercat.png&w=3840&q=90)

Ideia: estabelecer um processo para o desenvolvimento desses projetos.

Baseado no que estou aprendendo em Data Science acho uma boa tornarmos isso em ciência.

E o primeiro passo de tudo é definir o problema que temos que resolver.

## 🎯 Objetivo

> Recriar página do álbum

**Requisitos:**

- Ser responsivo
- Integrar com [Spotify](https://developer.spotify.com/documentation/web-api/reference/get-an-album) para tocar músicas
- Criar loading inicial ao carregar a página
- Buscar fontes que se assemelham às originais
- Botão de compartilhar
- Sidebar menu com dropdown menus
- Utilizar react + vite + tailwind
- Aproveitar para estudar como otimizar imagens com vite.

## Plano

- [x] Inicializar projeto
- [x] Encontrar fonte

  Pesquisando fontes, achei algumas interessantes, estou tentando achar uma que fica como a LEVEL DAYS, com borda, mas acabei de pensar em formas de atingir isso com css:

  [https://stackoverflow.com/questions/2570972/css-font-border]()

  possíveis fontes:

  [https://fonts.google.com/specimen/Tourney?categoryFilters=Appearance:%2FTheme%2FTechno;Sans+Serif:%2FSans%2F\*
  ](https://fonts.google.com/specimen/Tourney?categoryFilters=Appearance:%2FTheme%2FTechno;Sans+Serif:%2FSans%2F*)

  [https://fonts.google.com/specimen/Train+One?categoryFilters=Appearance:%2FTheme%2FTechno;Feeling:%2FExpressive%2FInnovative
  ](https://fonts.google.com/specimen/Train+One?categoryFilters=Appearance:%2FTheme%2FTechno;Feeling:%2FExpressive%2FInnovative)

  ainda falta achar uma para o corpo

  com a ajuda do chat gpt descobrimos que é possível deixar a fonte transparente com borda:

  ```css
  font-weight: bold;
  font-size: 3rem;
  color: transparent;
  -webkit-text-stroke: 2px #212121;
  ```

  Decided font: [Kanit](https://fonts.google.com/specimen/Kanit?preview.text=TRACK%20LIST&categoryFilters=Appearance:%2FTheme%2FTechno)

- [x] Encontrar imagens

  Pesquisando libs para ícones, dei uma olhada na Font Awesome mas estou achando muito complexo a configuração/uso.

  Usar a lib react-icons, pois ela contém os ícones de todas as outras praticamente, inclusive o próprio Font Awesome

  Verificar se conseguimos pegar o álbum pela api do spotify

  Chose the album from spotify: 6MEv8dNtVbKDW1WG4Hk6WZ, HomeSick by A Day To Remember

  Going to use getStaticProps to run the spotify api fetch on build time, so that the spotify credentials don't get present in client-side code.

- [x] Título e meta tags
- [ ] Background image + fade effect

  Percebi que tem um efeito de textura no fundo da página, não é só a cor preta comum.

  Pesquisando como reproduzir descobri que há formas de criar textura com css usando background-image e gradient:

  [https://projects.verou.me/css3patterns/#]()

  Mas talvez o melhor seja repetir uma imagem.

- [ ] header + fixed sidebar
- [ ] Favicon
- [ ] Expanded sidebar
- [ ] Hero
- [ ] Botão de play
- [ ] Botão de compartilhar
- [ ] Lista de músicas
- [ ] Music video
- [ ] Footer
- [ ] Loading inicial
- [ ] Garantir responsividade

## Lições aprendidas
