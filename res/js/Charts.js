var ctxL = document.getElementById("lineChart").getContext('2d');var ctxL = document.getElementById("lineChart").getContext('2d');
        var gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
        gradientFill.addColorStop(0, "rgba(230, 130, 13, 1)");
          gradientFill.addColorStop(1, "rgba(230, 130, 13, 0.1)");

        var myLineChart = new Chart(ctxL, {
          type: 'line',
          data: {
          labels: ["01 march", "07 march", "14 March", "19 march", " 22 march", "25 march", "31 march"],
          datasets: [
          {
              label: "Total Revenue",
              data: [0, 65, 45, 65, 35, 65, 0],
              backgroundColor: gradientFill,
              borderColor: [
              '#EF820D',
              ],
              borderWidth: 2,
              pointBorderColor: "#fff",
              pointBackgroundColor: "orange",
          }
                  ]
              },
              options: {
                responsive: true,
                maintainAspectRatio : false,
              }
       
          });
        
       
          var ctxL = document.getElementById("lineChart1").getContext('2d');var ctxL = document.getElementById("lineChart1").getContext('2d');
        var gradientFill = ctxL.createLinearGradient(0, 0, 0, 290);
        gradientFill.addColorStop(0, "rgba(230, 130, 13, 1)");
          gradientFill.addColorStop(1, "rgba(230, 130, 13, 0.1)");

          var myChart = new Chart(ctxL, {
            type: 'bar',
            data: {
              labels: ["M", "T", "W", "T", "F", "S", "S"],
              datasets: [{
                label: 'apples',
                data: [12, 19, 3, 17, 28, 24, 7],
                backgroundColor: "rgba(153,255,51,1)"
              }, {
                label: 'oranges',
                data: [30, 29, 5, 5, 20, 3, 10],
                backgroundColor: "rgba(255,153,0,1)"
              }]
            }
          });
        
          // var myLineChart = new Chart(ctxL, {
        //   type: 'bar',
        //   data: {
        //   labels: ["01 march", "07 march", "14 March", "19 march", " 22 march", "25 march", "31 march"],
        //   datasets: [
        //   {
        //       label: "Total Sales",
        //       data: [50, 65, 45, 65, 35, 65, 0],
        //       backgroundColor: gradientFill,
        //       borderColor: [
        //       '#EF820D',
        //       ],
        //       borderWidth: 2,
        //       pointBackgroundColor: "orange",
        //   }
        //           ]
        //       },
       
        //   });

        //   document.getElementById("myChart").getContext('2d');
