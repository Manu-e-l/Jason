import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [argonauteName, setArgonauteName] = useState("");
  const [argonauteList, setArgonauteList] = useState([]);
  const [newArgonaute, setNewArgonaute] = useState("");


  const getArgonauteUser = () => {
    const options = {
      method: "GET",
    };
    fetch(
      "http://localhost:4000/",
      options
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (responseObject) => {
          if (responseObject) {
            // console.log("response", responseObject);
            setArgonauteList(responseObject);

          } else {
            console.log("non");
          }
        },

        (error) => {
          console.log(error);
        }
      );
  };

  const postArgonauteUser = () => {
    // console.log("TEST ARGONAME", argonauteName)
    let data = { firstName: argonauteName }
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(
      "http://localhost:4000/",
      options
    )
      .then((response) => {

       
        return JSON.stringify(response)
      })
      .then(
        (responseObject) => {
          if (responseObject) {
            // console.log("Add user", responseObject);
            setArgonauteName(responseObject);
            setNewArgonaute(argonauteName);
            setArgonauteName("")

          } else {
            console.log("non");
          }
        },

        (error) => {
          console.log(error);
        }
      );

  }

  useEffect(() => {
    getArgonauteUser()
  }, [newArgonaute])


  // console.log("NINJA 2 : ", argonauteList)

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img className='logo-wild' src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          <br></br>Les Argonautes

        </h1>
      </header>
      <div className="App-Content">

        <form className="add-member-form" onSubmit={(e) => {
          e.preventDefault();
        }}>
          <h2>Ajouter un(e) Argonaute</h2>
          
          <input className="input" onChange={(e) => setArgonauteName(e.target.value)} value={argonauteName} type="text" placeholder="Nom du valeureux Argonaute" />
          <button className='btn-submit' type="submit" onClick={postArgonauteUser}>Envoyer</button>
        </form>


        <div className='crew-container'>
          <h2>Membres de l'équipage</h2>
          <section className="member-list">
            <div className='argo-list'>
              <div>
                {argonauteList.slice(0, 10).map((newArgoList) => (
                  <div className="member-item" key={newArgoList._id}>
                    {newArgoList.firstName}
                  </div>
                ))}
              </div>
              <div>
                {argonauteList.slice(10, 20).map((newArgoList) => (

                  <div className="member-item" key={newArgoList._id}>
                    {newArgoList.firstName}
                  </div>
                ))}
              </div>
              <div>
                {argonauteList.slice(20, 30).map((newArgoList) => (

                  <div className="member-item" key={newArgoList._id}>
                    {newArgoList.firstName}
                  </div>
                ))}
              </div>
              <div>
                {argonauteList.slice(30, 40).map((newArgoList) => (

                  <div className="member-item" key={newArgoList._id}>
                    {newArgoList.firstName}
                  </div>
                ))}
              </div>
              <div>
                {argonauteList.slice(40, 50).map((newArgoList) => (

                  <div className="member-item" key={newArgoList._id}>
                    {newArgoList.firstName}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="App-footer">
        <img  className="footer-logo" src='https://alexandre-corrette.github.io/Wild-Book/img/footer/icon-wild.png' alt='wild code school'/>
        <p>Réalisé par Manolo en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
