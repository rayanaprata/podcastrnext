// SPA
// SSR
// SSG

export default function Home(props) {

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )

}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }

}

/* REQUISIÇÃO MODELO SPA 

// import para SPA
// import { useEffect } from "react" 

  // (efeitos colaterais) -> dispara algo, sempre que algo mudar na aplicação
  useEffect(() => {
    fetch('http://localhost:3333/episodes')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])

  /* primeiro parametro: o que eu quero executar // segundo parametro: qundo quero executar */

  // REQUISIÇÃO MODELO SSR

/* REQUISIÇÃO MODELO SSR

Passar props como parametro na fucntion Home

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    }
  }

}

*/