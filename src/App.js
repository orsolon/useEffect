import React from "react";
import "./styles.css";

const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["User1", "User2"]);
    }, 2000);
  });
};

function Loading() {
  React.useEffect(() => {
    console.log("Loading...");

    return () => {
      console.log("Loading...");
    };
  });

  return <h1>Loading...</h1>;
}

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("CodeSandBox");

  const handleChange = event => setName(event.target.value);

  React.useEffect(() => {
    api().then(response => {
      setUsers(response);
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    if (name === "React") {
      console.log("Change");
    }
  }, [name]);

  return (
    <div className="App">
      {loading && <Loading />}

      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      <div className="App">
        <div>
          <input type="text" value={name} onChange={handleChange} />
        </div>
        <h1>Hello {name} </h1>
      </div>
    </div>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     console.log('constructor')
//     super(props);

//     this.state = {
//       users: [],
//       loading: true
//     };
//   }

//   componentDidMount() {
//     console.log('didMount')
//     api().then(response => {
//       this.setState({
//         users: response,
//         loading: false
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Com class</h1>
//         {this.state.loading && "...loading"}

//         <ul>
//           {this.state.users.map(user => (
//             <li key={user}>{user}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
