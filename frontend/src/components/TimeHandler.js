export const TimeHandler = (e) => {
    var month_array = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = e[0] + e[1] + e[2] + e[3];
    var month = parseInt(e[5] + e[6]) - 1;
    var day = parseInt(e[8] + e[9]); //11 to 18
    var time = "";
    for (let i = 11; i < 19; i++) {
      time += e[i];
    }

    return day + " " + month_array[month] + " " + year;
  };

  