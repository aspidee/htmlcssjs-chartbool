
function monthSalesChart() {

  $.ajax({

    url : "http://157.230.17.132:4014/sales",
    method : "GET",
    data: {},
    success : function(inData) {

      var myObjSalesMonth = {};

      for (var i = 0; i < inData.length; i++) {
        var valSales = inData[i];
        console.log(valSales);

        // var valAmount = valSales.amount;
        // // console.log(valAmount);

        if (valSales.date) {

          var mom = moment(); // data corrente
          var valSalesDate = valSales.date.split('/');
          console.log(valSalesDate);

          mom.year(valSalesDate[2]);
          mom.month(valSalesDate[1]-1);
          mom.date(valSalesDate[0]);

          valSalesDate = mom.format('MMMM');
          console.log(valSalesDate);

          var fullData = inData[i].date;
          var arrayData = [];

        }
      }

      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [{
            label: 'ANNO 2017 - VENDITE TOTALI MESE',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'red',
            data: arrayData,
          }]
        },

          // Configuration options go here
          options: {}
      });

      chart.canvas.parentNode.style.height = '1000px';
      chart.canvas.parentNode.style.width = '1000px';

    },
    error : function(request, state, error) {
      console.log("request", request);
      console.log("state", state);
      console.log("error", error);
    },
  });

}


function init() {

  monthSalesChart();
}


$(document).ready(init);



// var day = moment();
// day.year(anno);
// day.month(mese);
// day.date(giorno);
