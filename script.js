let xlabels = [];
let ylabels = [];
charIt();

async function charIt() {
  await getData();

  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: xlabels,
      datasets: [
        {
          label: "WATER USAGE PER HOUR",
          data: ylabels,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1
        }
      ]
    }
  });

  async function getData() {
    const res = await fetch(
      "https://e2igg6pqd1.execute-api.us-east-1.amazonaws.com/live"
    );
    const response = await res.json();
    const data = JSON.parse(response.body);

    for (let i = 0; i < data.length; i++) {
      const dataOfCurrentHour = data[i];
      console.log(dataOfCurrentHour);
      xlabels.push(dataOfCurrentHour[0].slice(11, 13));
      ylabels.push(dataOfCurrentHour[1]);
    }
  }
}
