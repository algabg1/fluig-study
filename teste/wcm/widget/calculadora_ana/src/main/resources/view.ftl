<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">

<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">Calculadora <span id="nomeUsuario_${instanceId}"></span></h3>
    </div>

    <div class="panel-body">

		<div class="form-group">
		    <label for="valor1_${instanceId}">Valor 1</label>
		
		    <input
		        type="number"
		        class="form-control"
		        id="valor2_${instanceId}"
		    />
		</div>
		<div class="form-group">
		    <label for="valor2_${instanceId}">Valor 2</label>
		
		    <input
		        type="number"
		        class="form-control"
		        id="valor2_${instanceId}"
		    />
		</div>
		<div class="form-group">
		    <label for=resultado_${instanceId}">Valor 1</label>
		
		    <input
		        type="number"
		        class="form-control"
		        id="resultado_${instanceId}"
		        readoly
		    />
		</div>
		<div class="form-group">
		    <button type="button"
		            class="btn btn-primary"
		            data-operacao="somar">
		        +
		    </button>
		
		    <button type="button"
		            class="btn btn-primary"
		            data-operacao="subtrair">
		        -
		    </button>
		
		    <button type="button"
		            class="btn btn-primary"
		            data-operacao="multiplicar">
		        x
		    </button>
		
		    <button type="button"
		            class="btn btn-primary"
		            data-operacao="dividir">
		        %
		    </button>
		
		</div>
</div>

</div>

