// anychart.onDocumentReady(function () {
//     // The data used in this sample can be obtained from the CDN
//     // https://cdn.anychart.com/samples/gantt-general-features/column-formatting-presets/data.json
//     anychart.data.loadJsonFile(
//       'http://localhost:8888/data',

anychart.onDocumentReady(function () {
  // The data used in this sample can be obtained from the CDN
  // https://cdn.anychart.com/samples/gantt-charts/human-resource-chart/data.js
  anychart.data.loadJsonFile("http://localhost:8888/data", function (result) {
    console.log(result);
    const data = [];
    result.map(item => {
        obj= {}
        obj["costo"] = item.Costo_Acumulado
        obj["costo"] = obj["costo"] + item.Costo
        obj["name"] = item.DESCRIPCION
        const periods = []
        const dates = {}
        let aux,aux2
        aux = item.F_Inicio.split(" ")
        aux = aux[1].split("/")
        aux2 = [aux[1], aux[0], aux[2]]
        aux2 = aux2.join("/")
        dates["start"] = Date.parse(aux2)
        aux = item.F_fin.split(" ")
        aux = aux[1].split("/")
        aux2 = [aux[1], aux[0], aux[2]]
        aux2 = aux2.join("/")
        dates["end"] = Date.parse(aux2)
        periods.push(dates)
        obj["periods"] =  periods
        // obj["periods"].end = item.F_fin
        data.push(obj)
    })
    console.log(data)

    fetch('https://cdn.anychart.com/samples/gantt-charts/human-resource-chart/data.json')
        .then(res => res.json())
        .then(data => console.log(data))

    // create data tree
    var treeData = anychart.data.tree(data, "as-table");
    // create resource gantt chart
    var chart = anychart.ganttResource();
    // background
    chart.background("#dcd598 0.3");
    // set data for the chart
    chart.data(treeData);
    chart
      .rowSelectedFill("#D4DFE8")
      .rowHoverFill("#98dc9a")
      // set start splitter position settings
      .splitterPosition(150);
    // get chart data grid link to set column settings
    var dataGrid = chart.dataGrid();
    // set first column settings
    dataGrid.column(0).title("#").width(30).labels({ hAlign: "center" });
    // set second column settings
    dataGrid.column(1).title("Actividad").width(520);
    dataGrid.column(1).title().fontColor("#f86233");
    dataGrid.column(1).title().fontWeight(600);

    dataGrid.column(2).width(50);
    dataGrid.column(2).title("Costo: (S/)");
    dataGrid.column(2).setColumnFormat("costo", "text");
    dataGrid.column(2).title().fontWeight(1000);
    dataGrid.column(2).title().fontWeight(1000);

    // anychart.dataGrid().column().tooltip().titleFormat("OTROOOOOOOOOOOOOO");
    // anychart.dataGrid().column().tooltip().format("Department: {%x} \nSum: {%value}");



    // set container id for the chart
    chart.container("container");
    // initiate chart drawing
    chart.draw();
    // zoom chart to specified date
    chart.zoomTo("week", 10, "first-date");
    // chart.zoomTo(1171036800000, 1176908400000);
  });
});
