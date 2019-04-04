
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
          var dataParse = moment(fullData, 'DD-MM-YYYY');
          var months = dataParse.format('MMMM');
          // console.log(months);

          if (myObjSalesMonth[months] == undefined) {
            myObjSalesMonth[months] = 0
          }
          myObjSalesMonth[months] += inData[i].amount;

          console.log(myObjSalesMonth);

          var arrayData = [];

          // --------------------------------------------------
          // Sfruttando questa variante del for non abbiamo
          // bisogno di specificare la lunghezza dell’array
          // nè l’istruzione di modifica della condizione.
          // JavaScript rileva che la variabile quantita è un
          // array ed assegna ad ogni iterazione alla variabile
          // indice il valore dell’indice corrente.
          // --------------------------------------------------
          // var quantita = [12, 34, 45, 7, 19];
          // var totale = 0;
          // var indice;
          // for (indice in quantita) {
	        //    totale = totale +  quantita[indice];
          //  }


          for (var indice in myObjSalesMonth) {
            arrayData.push(myObjSalesMonth[indice])
          }

        }
      }

      var ctx = document.getElementById('monthSalesChart').getContext('2d');
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
