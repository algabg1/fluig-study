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
    	if (!this.verificaValores()) {
    		return;
    	}
    	
    	var resultado = Number($("#valor1_" + this.instanceId).val()) + Number($("#valor2_" + this.instanceId).val());
    	$("#resultado_" + this.instanceId).val(resultado);
    },
    
    click_subtrair: function () {
    	if (!this.verificaValores()) {
    		return;
    	}

    	var resultado = Number($("#valor1_" + this.instanceId).val()) - Number($("#valor2_" + this.instanceId).val());
    	$("#resultado_" + this.instanceId).val(resultado);
    },
    
    click_multiplicar: function () {
    	if (!this.verificaValores()) {
    		return;
    	}

    	var resultado = Number($("#valor1_" + this.instanceId).val()) * Number($("#valor2_" + this.instanceId).val());
    	$("#resultado_" + this.instanceId).val(resultado);
    },
    
    click_dividir: function () {
    	if (!this.verificaValores()) {
    		return;
    	}

    	var resultado = Number($("#valor1_" + this.instanceId).val()) / Number($("#valor2_" + this.instanceId).val());
    	$("#resultado_" + this.instanceId).val(resultado);
    },
    
    verificaValores: function () {
    	if ($("valor1_" + this.instanceId).val() == "" ||
    		$("valor2_" + this.instanceId).val() == ""
    	) {
    		
    		return false;
    		
    	}
    	return true;
    }

});

