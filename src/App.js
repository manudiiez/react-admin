
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import Team from "./pages/team/Index";
import Invoices from "./pages/invoices/Index";
import Contacts from "./pages/contacts/Index";
import Bar from "./pages/bar/Index";
import Form from "./pages/form/Index";
import Line from "./pages/line/Index";
import Pie from "./pages/pie/Index";
import FAQ from "./pages/faq/Index";
import Geography from "./pages/geography/Index";
import Calendar from "./pages/calendar/Index";

function App() {


  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/form" element={<Form/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/line" element={<Line/>} />
              <Route path="/faq" element={<FAQ/>} />
              <Route path="/geography" element={<Geography/>} />
              <Route path="/calendar" element={<Calendar/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
