// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const timeDisplayEl = $('#currentDay');

function displayTime() {
  const rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
console.log('hello', timeDisplayEl)

//TO DO:
// Make header display current time and date [X]

// Make timeblock editible if clicked on [x]
//  Add more timeblocks for the hours of business day.
//   Make save button work and save to local Storage 
//   add event listener to save button that uploads to local

// when save is clicked, add js to input text content into row []

// Add more time blocks for standart business hours []
//   make them color coded based on time of dayjs


///////////////////////////



const myDay = [
  {
    id: "0",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: ""
  },
  {
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: ""
  },
  {
    id: "2",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: ""
  },
  {
    id: "3",
    hour: "12",
    time: "12",
    meridiem: "pm",
    reminder: ""
  },
  {
    id: "4",
    hour: "01",
    time: "13",
    meridiem: "pm",
    reminder: ""
  },
  {
    id: "5",
    hour: "02",
    time: "14",
    meridiem: "pm",
    reminder: ""
  },
  {
    id: "6",
    hour: "03",
    time: "15",
    meridiem: "pm",
    reminder: ""
  },
  {
    id: "7",
    hour: "04",
    time: "16",
    meridiem: "pm",
    reminder: ""
  },
  {
    id: "8",
    hour: "05",
    time: "17",
    meridiem: "pm",
    reminder: ""
  },

]

$(document).ready(function () {
  myDay.forEach(function (item, index) {
    $('.append').eq(index).append(
      ` <div id="${item.id}" class="row time-block ">
        <div class="col-2 col-md-1 hour text-center py-3">${item.hour} ${item.meridiem}</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`
    )

    $(`.append #${item.id} .saveBtn`).on("click", function () {
      const reminder = $(`.append #${item.id} .description`).val();
      localStorage.setItem(item.id, reminder);
    });

    const savedReminder = localStorage.getItem(item.id);
    if (savedReminder) {
      $(`.append #${item.id} .description`).val(savedReminder);
    }
  });
});



displayTime()
setInterval(displayTime, 1000);