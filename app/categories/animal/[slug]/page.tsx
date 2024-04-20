interface Props {
  params: {
    id: string[]
  }
}

export async function generateStaticParams() {
  const films = await fetch('https://swapi.dev/api/films').then((res) => res.json()) //запрос к API
 
  return films.results.map((film: any) => ({
    slug: film.title.replace(/\s+/g, '-'), // slug: то чем будет заполнена переменная slug
  }))
}

export default function Post({ params} : any) {
  return (
    <div>
      <h1>Post with id {JSON.stringify(params)}</h1>
    </div>
  )
}