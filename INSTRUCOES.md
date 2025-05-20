# Instruções para Personalização e Publicação da Página

## Como Personalizar as Fotos

Para substituir as imagens de exemplo por suas próprias fotos:

1. Acesse a pasta `images` dentro do diretório principal do projeto
2. Substitua os arquivos existentes (`imagem1.jpg`, `imagem2.jpg`, etc.) por suas próprias fotos
3. Mantenha os mesmos nomes de arquivo para que o carrossel continue funcionando corretamente
4. Recomendamos usar imagens com proporção similar (preferencialmente paisagem ou quadrada)
5. Tamanho recomendado: 1200x800 pixels ou similar para melhor desempenho

Alternativamente, você pode editar o arquivo `script.js` e modificar o array de imagens para incluir mais fotos ou alterar os nomes dos arquivos.

## Opções de Hospedagem

### 1. GitHub Pages (Gratuito)
- Crie uma conta no GitHub (se ainda não tiver)
- Crie um novo repositório
- Faça upload de todos os arquivos do projeto
- Vá para a aba "Settings" do repositório
- Role até a seção "GitHub Pages"
- Em "Source", selecione "Deploy from a branch"
- Em "Branch", selecione "main" e mantenha "/ (root)" selecionado
- Clique em "Save"
- Aguarde alguns minutos para que o site seja publicado
- A URL será exibida na mesma seção (formato: https://seuusuario.github.io/nome-do-repositorio/)

### 2. Netlify (Gratuito)
- Crie uma conta no Netlify
- Arraste e solte a pasta do projeto na interface do Netlify
- A página será publicada automaticamente com um URL aleatório
- Você pode personalizar o domínio nas configurações

## Personalizando a Mensagem

Para alterar a mensagem exibida junto ao contador:
1. Abra o arquivo `index.html`
2. Localize a linha com a classe `message` (aproximadamente linha 40)
3. Modifique o texto conforme desejado, mantendo as tags `<span>` para os números

## Personalizando as Cores

Para alterar as cores da página:
1. Abra o arquivo `styles.css`
2. Localize as variáveis de cores no início do arquivo (`:root`)
3. Modifique os códigos de cores conforme sua preferência

## Suporte

Se precisar de ajuda adicional para personalizar ou publicar sua página, não hesite em entrar em contato novamente.
