import apiSlice from "../../app/apiSlice"


const calendarApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCalendar: build.query({
            query:()=>({
                url: '/api/calendar'
            })
        }),
    }),
  })
export const {
    useGetCalendarQuery,
} = calendarApiSlice