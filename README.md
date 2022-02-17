# Simulador de Investimentos

<p align="center">Menu</p>
<p align="center">
    <a href="#sobre">Sobre</a> •
    <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> •
    <a href="#funcionalidades">Funcionalidades</a> •
    <a href="#responsividade">Responsividade</a> •
    <a href="#como-executar">Como executar</a>
</p>

## Sobre

<p>Este projeto foi criado utilizando o React como teste prático para a vaga de Desenvolvedor Fronted na empresa EQI Investimentos, seguindo as orientações presentes no repositório do link: https://github.com/eqi-investimentos/desafio-frontend </p>
<p>O projeto é um simulador de investimentos, no qual o usuário entra com valores de aporte inicial, prazo, aporte mensal e rentabilidade, além de selecionar o rendimento e o tipo de indexação e, ao clicar no botão simular, o sistema retorna o resultado da simulação, contendo os valores de investimento e ganho e um gráfico.</p>
<p>As informações de IPCA e CDI presentes nos inputs de entrada são resultado de uma requisição para a API já disponibilizada pela empresa, assim como os resultados que também são retornados a partir de uma requisição enviando o rendimento e o tipo de indexação selecionados pelo usuário.</p>

## Tecnologias utilizadas
+ React
+ JavaScript
+ HTML
+ CSS

## Funcionalidades
<p>Ao abrir o sistema o usuário encontra a tela presente na imagem a seguir, já com os valores de IPCA e CDI preenchidos, de acordo com a resposta da requisição GET feita ao backend, no qual deverá selecionar o rendimento e o tipo de indexação além preencher os valores de aporte inicial, prazo, aporte mensal e rentabiliade. Os campos de IPCA e CDI não são editáveis.</p>
<img alt="homeScreen" title="homeScreen" src="./public/readme/home.PNG"/>

<p>Ao clicar no botão "Limpar campos" todos os campos preenchidos pelo usuários são limpos. A funcionalidade pode ser observada no gif a seguir.</p>
<img alt="clear" title="clear" src="./public/readme/clear.gif"/>

<p>Caso um dos valores digitados não seja numérico, o sistema mostra um aviso informando que aquele campo deve ser um número, como na próxima imagem</p>
<img alt="warning" title="warning" src="./public/readme/warning.PNG"/>

<p>Com os dados preenchidos corretamente, o usuário poderá clicar no botão "Simular" e o resultado aparecerá. Um exemplo é mostrado na imagem a seguir:</p>
<img alt="results" title="results" src="./public/readme/results.PNG"/>

## Responsividade
<p>As imagens mostradas anteriormente são do projeto sendo executado em um desktop, porém é um sistema responsivo e, em dispositivos mobile, aparece como mostrado a seguir</p>
<img alt="mobile" title="mobile" src="./public/readme/mobile.gif"/>

## Como executar

Primeiramente, é necessário executar o servidor backend presente no seguinte link: https://github.com/eqi-investimentos/desafio-fake-api

Em seguida, deve-se fazer o clone/download deste repositório e executar `npm install` para instalar as dependências do projeto; depois executar `npm start` e abrir [http://localhost:3001](http://localhost:3001) para visualizar o sistema em seu navegador.