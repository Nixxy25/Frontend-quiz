import { useSelector } from "react-redux";
import { selectData } from "../reducers/dataSlice";

const JavascriptPage = () => {
    const data = useSelector(selectData);

  return (
    <div>
    {data && (
        <div>
            {data.map((items) => (
                <div key={items.id}>
                    {items.question}
                </div>
            ))}
        </div>
    )}
    </div>
  )
}

export default JavascriptPage;