import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & share
        <br className="max-md:hidden"/>
        <span className="orange_gradient">Useful AI prompts</span>
      </h1>
      <p className="desc text-center">
        Myprompts is an opensource AI propmpting tool for modern world
        to find and share creative prompts
      </p>
      <Feed/>
    </section>
  )
}

export default Home