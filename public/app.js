anychart.onDocumentReady(function () {
    // The data used in this sample can be obtained from the CDN
    // https://cdn.anychart.com/samples/gantt-general-features/column-formatting-presets/data.json
    anychart.data.loadJsonFile(
      'http://localhost:8888/data',
      function (data) {
        // create data tree on raw data
        console.log(data)
        var treeData = anychart.data.tree(data, 'as-table');

        // create project gantt chart
        var chart = anychart.ganttProject();

        // set data for the chart
        chart.data(treeData);

        // set general splitter pixel position
        chart.splitterPosition(400);

        var dataGrid = chart.dataGrid();

        dataGrid
          .column(2)
          .title('Log')
          .setColumnFormat('commonLog', 'date-common-log');

        dataGrid
          .column(3)
          .title('iso8601')
          .setColumnFormat('iso8601', 'date-iso-8601');

        dataGrid
          .column(4)
          .title('US Short')
          .setColumnFormat('usShort', 'date-us-short');

        dataGrid
          .column(5)
          .title('DMY dots')
          .setColumnFormat('dmy', 'date-dmy-dots');

        dataGrid.column(6).title('%').setColumnFormat('percent', 'percent');

        dataGrid
          .column(7)
          .title('Spent, $')
          .setColumnFormat('financial', 'financial');

        dataGrid
          .column(8)
          .title('Custom')
          .setColumnFormat('custom', {
            formatter: function (val) {
              if (typeof val === 'number') {
                return val < 100
                  ? 'Small custom text for ' + val
                  : 'Big data, big text for ' + val;
              }
              if (typeof val === 'boolean') {
                return 'Boolean is ' + val;
              }
              return 'Simple text is ' + val;
            },
            textStyle: {
              fontDecoration: 'underline',
              fontWeight: 'bold',
              fontColor: 'green',
              hAlign: 'center'
            },
            width: 250
          });

        // set container id for the chart
        chart.container('container');

        // initiate chart drawing
        chart.draw();

        // show all visible range
        chart.fitAll();
      }
    );
  });