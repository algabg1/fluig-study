function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
    // Cria o dataset
    var dataset = DatasetBuilder.newDataset();

    // Define as colunas
    dataset.addColumn("codigo");
    dataset.addColumn("descricao");

    // Adiciona os materiais
    dataset.addRow(["001", "Papel A4"]);
    dataset.addRow(["002", "Caneta"]);
    dataset.addRow(["003", "Pasta"]);
    dataset.addRow(["004", "Toner"]);

    // Retorna os dados
    return dataset;

}function onMobileSync(user) {

}