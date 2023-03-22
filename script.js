

const timeDisplayEl = $('#currentDay');

function displayTime() { //displays current tiem and date
  const rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

const timeCurrent = dayjs().format("HH"); //sets current time to 24h time

console.log('hello', timeCurrent);


//probably would have been easier just hard coding the .append into HTML instead of using forEach
const myDay = [
  {
    id: "0",
    hour: "09",
    meridiem: "am",
    time: '09',
  },
  {
    id: "1",
    hour: "10",
    meridiem: "am",
    time: '10',
  },
  {
    id: "2",
    hour: "11",
    meridiem: "am",
    time: '11',
  },
  {
    id: "3",
    hour: "12",
    meridiem: "pm",
    time: '12',
  },
  {
    id: "4",
    hour: "01",
    meridiem: "pm",
    time: '13',
  },
  {
    id: "5",
    hour: "02",
    meridiem: "pm",
    time: '14',
  },
  {
    id: "6",
    hour: "03",
    meridiem: "pm",
    time: '15',
  },
  {
    id: "7",
    hour: "04",
    meridiem: "pm",
    time: '16',
  },
  {
    id: "8",
    hour: "05",
    meridiem: "pm",
    time: '17',
  },

]

const reset = '05'; //sets reset time to 5am

function resetPage() { //resets local storage at 5am so you dont need to clear manually
  if (timeCurrent === reset) {
    localStorage.clear()
  }
}

console.log(timeCurrent)

$(document).ready(function () { //spaghetti code 
  myDay.forEach(function (item, index) {
    $('.append').eq(index).append(
      ` <div id="${item.id}" class="row time-block ">
        <div class="col-2 col-md-1 hour text-center py-3">${item.hour} ${item.meridiem}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`
    ) //appending content to each .append

    $(`.append #${item.id} .saveBtn`).on("click", function () { //on click, saves reminders to local storage
      const reminder = $(`.append #${item.id}`).val();
      localStorage.setItem(item.id, reminder);
    });


    const rowEl = $(`.append #${item.id}`); //sets class based on current time

    if (timeCurrent == parseInt(item.time)) {
      rowEl.addClass("present");  console.log('current')
    } else if (timeCurrent > parseInt(item.time)) { 
      rowEl.addClass("past"); console.log('past')
    } else {
      rowEl.addClass("future");
      console.log('future')
    }

    const savedReminder = localStorage.getItem(item.id); 
    if (savedReminder) { //checks if savedReminder has a value, if it does it runs the command
      $(`.append #${item.id} .description`).val(savedReminder);
    }
  });
});


displayTime() // displays time
setInterval(displayTime, 1000); //updates every 1s