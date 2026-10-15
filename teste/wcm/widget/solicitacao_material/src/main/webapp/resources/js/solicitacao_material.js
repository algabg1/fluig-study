var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	this.carregarMateriais();
    },
  
    //BIND de eventos
    bindings: {
        local: {
        },
        global: {}
    },
    
    carregarMateriais: function () {
        var campo = document.getElementById("material");

        campo.innerHTML =
            '<option value="">Selecione um material</option>';

        try {
            var dataset = DatasetFactory.getDataset(
                "dsMateriais",
                ["codigo", "descricao"],
                null,
                null
            );

            if (!dataset || dataset.values.length === 0) {
                campo.innerHTML =
                    '<option value="">Nenhum material encontrado</option>';
                return;
            }

            for (var i = 0; i < dataset.values.length; i++) {
                var material = dataset.values[i];
                var opcao = document.createElement("option");

                opcao.value = material.codigo;
                opcao.textContent = material.descricao;

                campo.appendChild(opcao);
            }
        } catch (erro) {
            console.error("Erro ao carregar materiais:", erro);

            campo.innerHTML =
                '<option value="">Erro ao carregar materiais</option>';
        }
    },
    
});

