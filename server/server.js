const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.get("/api/calendar", async (req,res)=>{
    const appointments = [
        {
          title: 'Website Re-Design PlanX',
          startDate: new Date(2024, 2, 11, 9, 35),
          endDate: new Date(2024, 2, 11, 11, 30),
          id: 0,
          location: 'Room 1',
        }, {
          title: 'Book Flights to San Fran for Sales Trip',
          startDate: new Date(2024, 2, 11, 12, 11),
          endDate: new Date(2024, 2, 11, 13, 0),
          id: 1,
          location: 'Room 1',
        }, {
          title: 'Install New Router in Dev Room',
          startDate: new Date(2024, 2, 11, 14, 30),
          endDate: new Date(2024, 2, 11, 15, 35),
          id: 2,
          location: 'Room 2',
        }, {
          title: 'Approve Personal Computer Upgrade Plan',
          startDate: new Date(2024, 2, 12, 10, 0),
          endDate: new Date(2024, 2, 12, 11, 0),
          id: 3,
          location: 'Room 2',
        }, {
          title: 'Final Budget Review',
          startDate: new Date(2024, 2, 12, 12, 0),
          endDate: new Date(2024, 2, 12, 13, 35),
          id: 4,
          location: 'Room 2',
        }, {
          title: 'New Brochures',
          startDate: new Date(2024, 2, 12, 14, 30),
          endDate: new Date(2024, 2, 12, 15, 45),
          id: 5,
          location: 'Room 2',
        }, {
          title: 'Install New Database',
          startDate: new Date(2024, 2, 13, 9, 45),
          endDate: new Date(2024, 2, 13, 11, 15),
          id: 6,
          location: 'Room 1',
        }, {
          title: 'Approve New Online Marketing Strategy',
          startDate: new Date(2024, 2, 27, 12, 0),
          endDate: new Date(2024, 2, 27, 14, 0),
          id: 7,
          location: 'Room 3',
        }, {
          title: 'Upgrade Personal Computers',
          startDate: new Date(2024, 2, 27, 15, 15),
          endDate: new Date(2024, 2, 27, 16, 30),
          id: 8,
          location: 'Room 3',
        }, {
          title: 'Customer Workshop',
          startDate: new Date(2024, 2, 28, 11, 0),
          endDate: new Date(2024, 2, 28, 12, 0),
          id: 9,
          location: 'Room 3',
        }, {
          title: 'Prepare 2015 Marketing Plan',
          startDate: new Date(2024, 2, 28, 11, 0),
          endDate: new Date(2024, 2, 28, 13, 30),
          id: 10,
          location: 'Room 1',
        }, {
          title: 'Brochure Design Review',
          startDate: new Date(2024, 2, 28, 14, 0),
          endDate: new Date(2024, 2, 28, 15, 30),
          id: 11,
          location: 'Room 2',
        }, {
          title: 'Create Icons for Website',
          startDate: new Date(2024, 2, 29, 10, 0),
          endDate: new Date(2024, 2, 29, 11, 30),
          id: 12,
          location: 'Room 2',
        }, {
          title: 'Upgrade Server Hardware',
          startDate: new Date(2024, 2, 29, 14, 30),
          endDate: new Date(2024, 2, 29, 16, 0),
          id: 13,
          location: 'Room 3',
        }, {
          title: 'Submit New Website Design',
          startDate: new Date(2024, 2, 29, 16, 30),
          endDate: new Date(2024, 2, 29, 18, 0),
          id: 14,
          location: 'Room 3',
        }, {
          title: 'Launch New Website',
          startDate: new Date(2024, 2, 29, 12, 20),
          endDate: new Date(2024, 2, 29, 14, 0),
          id: 15,
          location: 'Room 2',
        }, {
          title: 'Website Re-Design Plan',
          startDate: new Date(2024, 2, 2, 9, 30),
          endDate: new Date(2024, 2, 2, 15, 30),
          id: 16,
          location: 'Room 1',
        }, {
          title: 'Book Flights to San Fran for Sales Trip',
          startDate: new Date(2024, 2, 2, 12, 0),
          endDate: new Date(2024, 2, 2, 13, 0),
          id: 17,
          location: 'Room 3',
        }, {
          title: 'Install New Router in Dev Room',
          startDate: new Date(2024, 2, 2, 14, 30),
          endDate: new Date(2024, 2, 2, 17, 30),
          id: 18,
          location: 'Room 2',
        }, {
          title: 'Approve Personal Computer Upgrade Plan',
          startDate: new Date(2024, 2, 2, 16, 0),
          endDate: new Date(2024, 2, 3, 9, 0),
          id: 19,
          location: 'Room 2',
        }, {
          title: 'Final Budget Review',
          startDate: new Date(2024, 2, 3, 10, 15),
          endDate: new Date(2024, 2, 3, 13, 35),
          id: 20,
          location: 'Room 1',
        }, {
          title: 'New Brochures',
          startDate: new Date(2024, 2, 3, 14, 30),
          endDate: new Date(2024, 2, 3, 15, 45),
          id: 21,
          location: 'Room 3',
        }, {
          title: 'Install New Database',
          startDate: new Date(2024, 2, 3, 15, 45),
          endDate: new Date(2024, 2, 4, 12, 15),
          id: 22,
          location: 'Room 3',
        }, {
          title: 'Approve New Online Marketing Strategy',
          startDate: new Date(2024, 2, 4, 12, 35),
          endDate: new Date(2024, 2, 4, 14, 15),
          id: 23,
          location: 'Room 3',
        }, {
          title: 'Upgrade Personal Computers',
          startDate: new Date(2024, 2, 4, 15, 15),
          endDate: new Date(2024, 2, 4, 20, 30),
          id: 24,
          location: 'Room 2',
        }, {
          title: 'Customer Workshop',
          startDate: new Date(2024, 2, 5, 6, 0),
          endDate: new Date(2024, 2, 5, 14, 20),
          id: 25,
          location: 'Room 1',
        }, {
          title: 'Customer Workshop',
          startDate: new Date(2024, 2, 5, 14, 35),
          endDate: new Date(2024, 2, 5, 16, 20),
          id: 26,
          location: 'Room 1',
        }, {
          title: 'Customer Workshop 2',
          startDate: new Date(2024, 2, 5, 10, 0),
          endDate: new Date(2024, 2, 5, 11, 20),
          id: 27,
          location: 'Room 2',
        }, {
          title: 'Prepare 2015 Marketing Plan',
          startDate: new Date(2024, 2, 5, 20, 0),
          endDate: new Date(2024, 2, 6, 13, 30),
          id: 28,
          location: 'Room 3',
        }, {
          title: 'Brochure Design Review',
          startDate: new Date(2024, 2, 6, 14, 10),
          endDate: new Date(2024, 2, 6, 15, 30),
          id: 29,
          location: 'Room 3',
        }, {
          title: 'Create Icons for Website',
          startDate: new Date(2024, 2, 6, 10, 0),
          endDate: new Date(2024, 2, 7, 14, 30),
          id: 30,
          location: 'Room 1',
        }, {
          title: 'Upgrade Server Hardware',
          startDate: new Date(2024, 2, 3, 9, 30),
          endDate: new Date(2024, 2, 3, 12, 25),
          id: 31,
          location: 'Room 2',
        }, {
          title: 'Submit New Website Design',
          startDate: new Date(2024, 2, 3, 12, 30),
          endDate: new Date(2024, 2, 3, 18, 0),
          id: 32,
          location: 'Room 2',
        }, {
          title: 'Launch New Website',
          startDate: new Date(2024, 2, 3, 12, 20),
          endDate: new Date(2024, 2, 3, 14, 10),
          id: 33,
          location: 'Room 2',
        }, {
          title: 'Book Flights to San Fran for Sales Trip',
          startDate: new Date(2024, 2, 26, 0, 0),
          endDate: new Date(2024, 2, 27, 0, 0),
          id: 34,
          location: 'Room 1',
        }, {
          title: 'Customer Workshop',
          startDate: new Date(2024, 2, 29, 10, 0),
          endDate: new Date(2024, 2, 30, 14, 30),
          id: 35,
          location: 'Room 1',
        }, {
          title: 'Google AdWords Strategy',
          startDate: new Date(2024, 2, 3, 0, 0),
          endDate: new Date(2024, 2, 4, 10, 30),
          id: 36,
          location: 'Room 3',
        }, {
          title: 'Rollout of New Website and Marketing Brochures',
          startDate: new Date(2024, 2, 5, 10, 0),
          endDate: new Date(2024, 2, 9, 14, 30),
          id: 37,
          location: 'Room 3',
        }, {
          title: 'Update NDA Agreement',
          startDate: new Date(2024, 2, 1, 10, 0),
          endDate: new Date(2024, 2, 3, 14, 30),
          id: 38,
          location: 'Room 2',
        }, {
          title: 'Customer Workshop',
          startDate: new Date(2024, 2, 1),
          endDate: new Date(2024, 2, 2),
          allDay: true,
          id: 39,
          location: 'Room 1',
        },
        {
          title: 'Final Budget Review',
          startDate: new Date(2024, 2, 19, 12, 0),
          endDate: new Date(2024, 2, 19, 13, 35),
          id: 4,
          location: 'Room 2',
        },
        {
          title: 'Final Budget Review',
          startDate: new Date(2024, 2, 20, 9, 0),
          endDate: new Date(2024, 2, 20, 10, 35),
          id: 4,
          location: 'Room 2',
        },
        {
          title: 'Final Budget Review',
          startDate: new Date(2024, 2, 21, 9, 0),
          endDate: new Date(2024, 2, 21, 15, 35),
          id: 4,
          location: 'Room 2',
        },
      ];
      ;
      res.json(appointments)

})




    app.listen(7005, ()=>{
        console.log("server running on port 7005")
    })
