var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	this.getUserLoggedV2();
    },
  
    //BIND de eventos
    bindings: {
        local: {
    		'click .btn-somar': ['click_somar'],
            'click .btn-subtrair': ['click_subtrair'],
    		'click .btn-multiplicar': ['click_multiplicar'],
            'click .btn-dividir': ['click_dividir']
        },
        global: {}
    },
    
    getUserLoggedV2: function () {
    	var idNome = "#nomeUsuario_" + this.instanceId;

        $.getJSON(
            WCMAPI.getServerURL() + "/api/public/social/user/logged/v2",
            function(response) {
                var nome = response.content.name;

                $(idNome).text(" - " + nome);
            }
        );
    },
    
    click_somar: function () {
    	var resultado = Number($("#valor1_" + this.instanceId).val()) + Number($("#valor2_" + this.instanceId).val());
    	$("#resultado_" + this.instanceId).val(resultado);
    },
    
    click_subtrair: function () {
    	var resultado = Number($("#valor1_" + this.instanceId).val()) - Number($("#valor2_" + this.instanceId).val());
    	$("#resultado_" + this.instanceId).val(resultado);
    },
    
    click_multiplicar: function () {
    	var resultado = Number($("#valor1_" + this.instanceId).val()) * Number($("#valor2_" + this.instanceId).val());
    	$("#resultado_" + this.instanceId).val(resultado);
    },
    
    click_dividir: function () {
    	var resultado = Number($("#valor1_" + this.instanceId).val()) / Number($("#valor2_" + this.instanceId).val());
    	$("#resultado_" + this.instanceId).val(resultado);
    }

});

