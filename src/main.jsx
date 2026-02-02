import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ExperiencesPage from './pages/ExperiencesPage.jsx'
import PublicationsPage from './pages/PublicationsPage.jsx'
import ConferencesPage from './pages/ConferencesPage.jsx'
import VulgarisationPage from './pages/VulgarisationPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import TrainingPage from './pages/TrainingPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/conferences" element={<ConferencesPage />} />
            <Route path="/vulgarisation" element={<VulgarisationPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/training" element={<TrainingPage />} />
        </Routes>
    </HashRouter>
)