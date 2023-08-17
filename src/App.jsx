import { BrowserRouter } from "react-router-dom"
import { motion } from "framer-motion";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = ()=> {

//   const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "j"]
// const Banner ={
//   animate:{
//     transition:{
//       delayChildren:2,
//       staggerChildren:1
//     }
//   }
// }
// const letterAnimation = {
//   initial:{
//     y:400
//   },
//   animate:{
//     y:0,
//     transition:{
//       ease:[0.6, 0.01, -0.05, 0.95]
//     }
//   }
// }
  return (

      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <motion.div
        variants={Banner}
        initial="initial"
        animate="animate"
      >
        <h2>scroll</h2>
      {[...letters].map((letter) => {
       return <motion.span
       className="text-[45px]"
       key={letter}
          variants={letterAnimation}
          initial="initial"
          animate="animate"
        >{letter}</motion.span>
      })}
      </motion.div> */}
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      </BrowserRouter>
      
  
  )
}

export default App
