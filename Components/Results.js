import Card from "./Card";


export default function Results({results}) {
  return (
    <div className="bg-gray-700 text-gray-200 select-none sm:grid grid-cols-2 lg:grid grid-cols-3 xl:grid grid-cols-4  2xl: grid grid-cols-5">
      {results.map(result => (
        <Card key={result.id} result={result}/>
      ))}
    </div>
  )
}
