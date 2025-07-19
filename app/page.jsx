import Feed from '@components/Feed'

const Home = () => {
  return (
   <section className="w-full flex-center flex-col ">

    <h1 className="font-poppins font-semibold text-5xl mt-5 text-center
    ">Discover and Share
      <br className="max-md:hidden"/>
    <span className="cyber_shock font-bold text-center "> Marvellous Prompts For AI</span>
    </h1>
    <p className="desc text-center">Instructflow is an open-source prompting platform that helps people in the modern world find, make, and share original AI prompts</p>
    <Feed/>
   </section>
  )
}

export default Home