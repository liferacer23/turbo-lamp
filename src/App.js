import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import ItemContainer from "./components/ItemContainer";
import { useQuery, gql } from "@apollo/client";

const CHARACTER_QUERY = gql`
  query {
    characters {
      results {
        id
        name
        species
        origin {
          id
          name
          type
        }
        image
        episode {
          id
          name
          air_date
        }
        created
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(CHARACTER_QUERY);
  const [flip, setFlip] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  if (loading) {
    return "Loading...";
  }
  else if (error) {
    return error;
  }

  return (
    <div className="App">
      <Nav setSearchTerm={setSearchTerm} flip={flip} setFlip={setFlip} />
      <ItemContainer data={data.characters.results} searchTerm={searchTerm} flip={flip} />
     
    </div>
  );
}

export default App;
