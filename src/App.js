import logo from './logo.svg';
import './App.css';


function ProjectCard(props){
  return (
    <div className = "project__card">
    <div className = "project__card__header">
      <img style = {{}} src={props.img} width = "83px"></img>
      <h3 style = {{maring: "0", marginLeft: "20px"}}>{props.title}</h3>
    </div>
      <p style = {{marginTop: "10px", marginLeft: "20px", fontSize: "0.7em"}}>{props.desc}</p>
    </div>
  )

}



function AppBody(){
return(
  <div id = "app__body"> 
    <div id = "body__left">
      <h1 style ={{marginBottom: "10px"}}>About Me</h1>
      <p style ={{marginTop: "0px"}}>Welcome to my porfolio!</p>
      <h1 style = {{marginTop: "70px"}}>Technologies</h1>

    </div>

  <div id = "body__right">
    <h1>Projects</h1>
    <ProjectCard
    img = {logo}
    name ="Emanuel's Wbesite"
    desc =" This is a website that I made using my programming skills and God-given talent" />
    <ProjectCard
    img = {logo}
    name ="Java Project"
    desc =" This is a banking application I made in Java" />

      </div>
      </div>
    )
}




function AppHeader(){
return(
  <div id = "app__header">
    <h1 id="name"> Emanuel Rivas </h1>
  <div id = "btn__group">
  <button onClick = {function() {
    window.open("https://www.linkedin.com/in/emanuel-rivas-77b893222/")
  }}>
    linkedIn
  </button>
  <button onClick = {() => { 
    window.open("https://github.com/EmanuelRivas")
  }}>
    GitHub
  </button>
  </div>
  </div>



)

}



function App() {
  return (
    <div className = "App">
    <AppHeader />
    <AppBody></AppBody>
    </div>
  );
}

export default App;
