import Home from './pages/Home';
import Assessment from './pages/Assessment';
import assessment from './pages/assessment';
import ThankYou from './pages/ThankYou';
import Home2 from './pages/Home2';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Assessment": Assessment,
    "assessment": assessment,
    "ThankYou": ThankYou,
    "Home2": Home2,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};