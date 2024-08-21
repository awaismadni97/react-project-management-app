import NewProject from './components/NewProject.jsx';
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      <NewProject />
    </main>
  );
}

export default App;
