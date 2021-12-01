# TP1 ES-2021-02
Trabalho prático de Engenharia de software 2021-02.\
EUquipe: Philippe Santos Silva\
Tema: [Assinaturas SEI](https://github.com/lipeph99/ES-2021-02)\
Descrição: Simular um sistemas de assinatura de documentos do SEI, que permite que instituições gerem documentos a serem assinados por usuários\
Tecnologia full-stack: Fluna
Product Owner: Larissa Moreira

## Tarefas Técnicas
    - Implementar uma tela de login simples
    - Projetar o banco de dados
    - Discutir histórias com o P.O

## História 0
    Eu como usuário/admin/instituição quero logar no sistema
    - Montar a tela de login
    - Criar a tela de usuário
    - Criar backend de controle de usuários logados
    - Criar tabela de usuários

## História 1
    Como admin, desejo cadastrar um usuário/instituição no sistema
    - Montar a tela que lista usuários
    - Montar a tela de cadastro de usuários
    - Montar o backend para processar as informações das telas
    * Depende da história 0

## História 2
    Como instituição, quero criar um documento e vincular usuários a ele
    - Montar a tela de listar documentos
    - Montar a tela de cadastro de documentos
    - Montar a tela de vincular documentos oas usuários
    - Montar o backend para processar as informações das telas
    - Criar tabela para documentos
    * Depende da história 1

## História 3
    Como usuário, quero assinar um documento a mim vinculado
    - Montar a tela de assinatura
    - Montar o backend para processar as informações das telas
    - Criar tabela para assinatura de documentos
    * Depende da história 2
    
 Philippe Santos Silva\
 [lipeph99](https://github.com/lipeph99)