

const JavascriptPage = ({data}) => {


  return (
    <div>
        {data.map((items, index) => (
            <div key={index}>
                {items.title}
            </div>
        ))}
    </div>
  )
}

export default JavascriptPage;