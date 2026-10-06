var MyWidget = SuperWidget.extend({

    init(){
        this.exemploVar();
        this.exemploLet();
        this.exemploConst();

        this.calcular();
        this.dobrarNumero();

        this.criarObjetoPessoa();

        this.criarTemplate();
        this.criarTemplate1();
        this.criarTemplate2();

        this.Objeto();
        this.criarArray();

        this.spreadOperator();
        this.restOperator();

        this.gerarObjeto();
        this.gerarObjeto2("campo2");

    },

    exemploVar: function() {
        if(true) {
            var nome = "Bruno";
        }
        console.log(nome);  //"bruno" - visível fora do bloco
    },

    exemploLet: function() {
        let idade = null;
        if(true) {
            idade = 30;
        }
        console.log(idade);
    },

    exemploConst: function() {
        const PI = 3.14;
        PI = 3.1415; // ERRO - não é possível reatribuir
    },

    calcular: function() {
        //antes do ES6
        function somaAntiga(a,b) {
            return a + b;
        }

        //com arrow function
        const somaNova = (a,b) => a + b;
        
        console.log(somaAntiga(2,3));   //5
        console.log(somaNova(3,3));     //6
    },

    dobrarNumero: function() {
        const numeros = [1,2,3];
        const dobrados = numeros.map(n => n * 2);
        console.log(dobrados);  //[2,4,6]
    },

    criarObjetoPessoa: function() {
        const pessoa = {
            nome: "Bruno",
            falarAntigo: function() { console.log(this.nome) }, //Bruno - this. é o próprio objeto
            // falarAntigo() { console.log(this.nome) } shorthand
            falarNovo: () => console.log(this.nome)             //undefined, escopo global 
        };

        pessoa.falarAntigo();
        pessoa.falarNovo();
    },

    //template string
    criarTemplate() {
        const nome = "Bruno";
        const idade = 30;

        console.log("Meu nome é " + nome + " e tenho ", idade, " anos."); //Meu nome é Bruno e tenho 30 anos
        console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);         // template string
    },

    criarTemplate1() {
        const mensagem = `
            Olá, pessoal!
            Esse é um exemplo
            de texto com múltiplas linhas.
        `;
    },

    criarTemplate2() {
        const a = 5;
        const b = 3;

        console.log(`A soma de ${a} + ${b} é ${a + b}`);
    },

    //destructing
    criarObjeto() {
        const pessoa = {
            nome: "Bruno",
            idade: 30,
            tamanhoCam: "G"
        };

        const { nome, idade, tamanhoCam } = pessoa;
        console.log(nome,idade,tamanhoCam); // Bruno 30 G

        const usuario = { nome: "Bruno", idade: 30 };
        const {nome: n, idade: i} = usuario;
    },

    criarArray() {
        const numeros = [10, 20, 30];
        const [a,b,c] = numeros;
        console.log(a, b, c); // 10 20 30

        numeros = [10, , 30];
        const [x, y=20, z] = numeros;
        console.log(x,y,z); // 10 20 30
    },

    //rest e spread
    spreadOperator() {
        const num = [1,2,3];
        const novosNum = [...num, 4, 5];

        console.log(novosNum); // [1,2,3,4,5]

        const pessoa = {nome: "Bruno", idade: 30};
        const novaPessoa = {...pessoa, cidade: "São Paulo"};

        console.log(novaPessoa); //{nome: "Bruno", idade: 30, cidade: "São Paulo"}
    },

    restOperator() {
        function soma(...numeros) {
            return numeros.reduce( (total, n) => total + n, 0);
        }

        console.log(soma(1,2,3,4)); //10

        const [primeiro, ...resto] = [10,20,30,40];
        console.log(primeiro); //10
        console.log(resto);    //[20,30,40]
    },

    //enhanced object literals
    gerarObjeto() {
        const nome = "Bruno";
        const idade = 30;

        //antes
        const pessoa1 = {nome: nome, idade: idade};
        console.log(pessoa1); //{nome: "Bruno", idade: 30}

        //com ES6
        const pessoa2 = {nome, idade};
        console.log(pessoa2); //{nome: "Bruno", idade: 30}

        //antes
        const usuario1 = {
            login: function() {
                console.log("Usuario logado 1!");
            }
        };

        //com ES6
        const usuario2 = {
            login() {
                console.log("Usuario logado 2!");
            }
        };

        usuario1.login(); // Usuario logado 1!
        usuario2.login(); // Usuario logado 2!
    },

    gerarObjeto2(campo2) {
        const campo = "email";
        const usuario3 = {
            nome: "Bruno",
            [campo]: "bruno@email.com",
            [campo2]: "valor do campo"
        };

        console.log(usuario3); // { nome: "Bruno", email: "bruno@email.com", campo2: "valor do campo" }
    }

});