import "./assets/css/app.css";
import "./assets/css/index.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="The Job Board"></Header>
      <div className="container">
        <Jobs
          className="job job1"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        ></Jobs>
        <Jobs
          className="job job2"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Jobs>
        <Jobs
          className="job job3"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Jobs>
        <Jobs
          className="job job4"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        ></Jobs>
        <Jobs
          className="job job5"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        ></Jobs>
        <Jobs
          className="job job6"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        ></Jobs>
        <Jobs
          className="job job7"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        ></Jobs>
        <Jobs
          className="job job8"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        ></Jobs>
        <Jobs
          className="job job9"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        ></Jobs>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
