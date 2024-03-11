

import Scheduler from 'devextreme-react/scheduler';
import {useGetCalendarQuery} from "./features/Calendar/calendarApiSlice"
import 'devextreme/dist/css/dx.light.css';
import heMessages from "./config/he.json";
import { locale, loadMessages } from "devextreme/localization";

const App = () => {
  const {data: schedulerData, isError, isLoading, error} = useGetCalendarQuery()
  const views = ['day', 'week', 'month'];
  loadMessages(heMessages);
  //locale(navigator.language);
  locale("he-IL")

  if(isLoading) return <h1>Loading</h1>
  if(isError) return <h1>{JSON.stringify(error)}</h1>
  const currentDate = "2024-03-11"

  return (
    <div>
      <Scheduler
    dataSource={schedulerData}
    views={views}
    defaultCurrentView="week"
    defaultCurrentDate={currentDate}
    startDayHour={9}
    endDayHour={20}
    remoteFiltering={true}
    dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
    textExpr="title"
    allDayExpr="AllDay"
  />
    </div>
  );
};

export default App;
