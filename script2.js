
function loadData() {

  $.ajax({

    url : "http://157.230.17.132:4014/sales",
    method : "GET",
    data: {},
    success : function(inData) {

      printLineChart(inData)

    },
    error : function(request, state, error) {
      console.log("request", request);
      console.log("state", state);
      console.log("error", error);
    },
  });

}

function printLineChart(inData) {

  var totMonth = {

    "gennaio": 0,
    "febbraio": 0,
    "marzo": 0,
    "aprile": 0,
    "maggio": 0,
    "giugno": 0,
    "luglio": 0,
    "agosto": 0,
    "settembre": 0,
    "ottobre": 0,
    "novembre": 0,
    "dicembre": 0,
  }

  for (var i = 0; i < inData.length; i++) {

    var d = inData[i];

    var amount = d.amount;
    var date = d.date;

    var mom = moment(date, "DD/MM/YYYY");
    var monthName = mom.locale("it").format("MMMM");

    totMonth[monthName] += amount;
  }

  var monthList = Object.keys(totMonth);
  var valueList = Object.values(totMonth);


  var ctx = document.getElementById('monthSalesChart').getContext('2d');
  var chart = new Chart(ctx, {

    type: 'line',

    data: {
      labels: monthList,
      datasets: [{
        label: 'ANNO 2017 - VENDITE TOTALI MESE',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'red',
        data: valueList,
      }]
    },

      options: {}
  });

  chart.canvas.parentNode.style.height = '1000px';
  chart.canvas.parentNode.style.width = '1000px';
}




function getMonthNameFromDate(date) {

  var mom = moment(date, "DD/MM/YYYY");
  var monthName = mom.format("MMMM");

  return monthName;
}

function printKeysAndValues(obj) {

  var keys = Object.keys(obj);
  var values = Object.values(obj);

  console.log("keys", keys);
  console.log("values", values);
}


function init() {

  loadData()

  var monthName = getMonthNameFromDate("12/07/2017");
  console.log(monthName);

  var obj = {

    "att1": "val1",
  }
  printKeysAndValues(obj);

}


$(document).ready(init);
