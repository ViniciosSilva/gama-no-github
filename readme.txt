Projeto: Formulário de cadastro
Autor: Vinícios da Costa Silva  

O projeto consiste em um formulário de cadastro de dados pessoais para aplicação dos conhecimentos obtidos durante a trilha de aprendisagem do Projeto Gama Trilha Preparatória Itaú Tech{pessoas com deficiência}.

As tecnologias usadas na implementação do desafio foram: Html, Css e Javascript.
   
O formulário possue os seguintes campos:Nome, Sexo, CPF, RG, Endereço, Número, Bairro, Cidade, Estado, CEP, Telefone Fixo, Telefone Celular; sendo o Nome, o CPF, o endereço e sua numeração, além do telefone celular requisitos obrigatórios para preenchimento, conforme regra de negócio. 
   
A verificação dos campos obrigatórios é feita no Html com o atributo <required> da tag <input> e também no arquivo JavaScript.
Os campos de Nome, CPF, RG, Endereço, Número, CEP, Cidade, são do tipo Caixa de Texto. Já os campos de Telefone Fixo e Telefone Celular são do tipo Texto com um conteúdo exemplo para o usuário, que mostra como  ser preenchido.
Para selecionar o campo Sexo é usado um botão do tipo Rádio e para o campo Estado é usada uma caixa de seleção.

No arquivo Script.js está implementada a Função Valida que verifica se os campos obrigatórios foram preenchidos, se verdadeiro, retorna uma mensagem que os dados foram enviados, se não, retorna uma mensagem descrevendo qual campo não foi informado.

No arquivo Estilo.css foi configurada a cor de fundo do site, a cor e o tipo de fonte e o alinhamento dos campos.            