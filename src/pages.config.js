import Assessment from './pages/Assessment';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import ThankYou from './pages/ThankYou';
import assessment from './pages/assessment';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Assessment": Assessment,
    "Home": Home,
    "Home2": Home2,
    "ThankYou": ThankYou,
    "assessment": assessment,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};