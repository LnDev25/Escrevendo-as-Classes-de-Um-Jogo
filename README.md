# ⚔️ Escrevendo as Classes de um Jogo

Este projeto aplica os conceitos de **Programação Orientada a Objetos (POO)** em JavaScript para criar um sistema de heróis de aventura. O programa utiliza classes para representar personagens e métodos para definir suas ações de combate.

---

## 📝 Sobre o Projeto e Funcionamento

O objetivo central foi criar uma estrutura onde cada herói é um **objeto** único, com características próprias, mas que compartilha comportamentos comuns (como o ato de atacar).

### Como a lógica funciona:

1.  **Criação da Classe `Hero`**: Foi definida uma planta (blueprint) que recebe `nome`, `idade` e `tipo` através de um método construtor.
2.  **Método `atacar()`**: Dentro da classe, existe uma função que verifica o `tipo` do herói (Mago, Guerreiro, Monge ou Ninja) usando uma estrutura `switch`.
3.  **Lógica de Ataque Dinâmica**: Dependendo do tipo escolhido, a variável `ataque` recebe uma string diferente:
    * **Mago**: "Usou Magia"
    * **Guerreiro**: "Usou uma Espada"
    * **Monge**: "Usou Artes Marciais"
    * **Ninja**: "Lançou algumas Shurikens"
4.  **Interatividade com `while`**: O programa utiliza o pacote `prompt-sync` em um laço de repetição, permitindo que o usuário crie e teste quantos heróis quiser sem interromper o script.

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)**: Focado em Programação Orientada a Objetos.
* **Node.js**: Ambiente para execução do código.
* **prompt-sync**: Biblioteca para capturar os dados dos heróis via terminal.

---

## 🚀 Como Instalar e Executar

Este projeto utiliza uma dependência externa para capturar as entradas do usuário. Siga os passos:

1.  **Clone o repositório**:
    ```bash
    git clone [https://github.com/seu-usuario/classes-de-um-jogo.git](https://github.com/seu-usuario/classes-de-um-jogo.git)
    ```
2.  **Acesse a pasta do projeto**:
    ```bash
    cd classes-de-um-jogo
    ```
3.  **Instale o pacote `prompt-sync`**:
    ```bash
    npm install prompt-sync
    ```
4.  **Execute o script**:
    ```bash
    node seu-arquivo.js
    ```
5.  **Uso**: Digite as características do seu herói e veja a frase de ataque personalizada. Para sair, basta responder `n` quando o programa perguntar se deseja criar outro herói.

---

## 💡 Conceitos de POO Aplicados

Neste desafio, os seguintes pilares da programação foram explorados:
- **Classes e Objetos**: Estruturação de entidades do mundo real em código.
- **Construtores**: Inicialização de propriedades durante a criação do objeto (`new Hero`).
- **Métodos**: Funções internas que definem o comportamento da classe.
- **Estruturas de Decisão (`switch`)**: Seleção de comportamentos baseada em atributos do objeto.

---
Desenvolvido com foco em POO por **LnDev25** 🚀
