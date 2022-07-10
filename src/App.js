import React, { useCallback, useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function App() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  // const onHandleClick = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  // openapi key
  // fc43430f9be74b38a81cce98f8f323d9

  // use async/await
  const onHandleClick = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=fc43430f9be74b38a81cce98f8f323d9"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onHandleClick}>load</button>
  //     </div>
  //     {data && (
  //       <textarea
  //         rows={7}
  //         value={JSON.stringify(data, null, 2)}
  //         readOnly={true}
  //       />
  //     )}
  //   </div>
  // );

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
