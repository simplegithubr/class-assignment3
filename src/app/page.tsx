import Image from "next/image";


export default function Home() {
  return (
    <>
   <div className="hero-section">
    <div className="container">
    <div className="main">
    <div className="hero-col">
      <h1 className="main-text">Hi, I am John, Creative Technologist</h1>
         <p className="main-para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do 
          amet sint. 
        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
        sunt nostrud amet.</p>
        <button className="btn">Download Resume</button>

    </div>
    <div className="heros2">
      <Image src="/hero-img.png" alt="pic" width={300} height={300}/>

    </div>
    
    
    </div>

    
    </div>


   

    
   </div>
   <div className="recent-post">
    <div className="container">
      <div className="main">
      <div className="heading">
        <h3>Recent Post</h3>
        <button className="view-btn">View All</button>

      </div>
      <div className="card-parent">
        <div className="card">
          <h2 className="card-heading">Making a design system from scratch</h2>
          <p className="data-text">12 Feb 2020 | Design , Pattern</p>
          <p className="pargrapg-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim 
            velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

        </div>
        <div className="card">
        <h2 className="card-heading">Making a design system from scratch</h2>
          <p className="data-text">12 Feb 2020 | Design , Pattern</p>
          <p className="pargrapg-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim 
            velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

        </div>
      </div>
      </div>

    </div>

   </div>
   {/* featured section*/ }
   <div className="featured-section">
    <div className="container">
      <div className="main">
      <div className="main-heading">
        <h3>Featured works</h3>
      </div>
      <div className="card-parent">
      <div className="card">
       <Image src="/Rectangle 30.png"  width={246} height={180} alt="images"/>
      
      <div className="card-contact">
        <h2>Designing Dashboards</h2>
        <div className="badge-parent">
          <div className="badge">
            <p>2022</p>
          </div>
          <p>Dashboard</p>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis 
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

      </div>
      </div>

      <div className="card">
       <Image src="/Rectangle 32.png"  width={246} height={180} alt="images"/>
      
      <div className="card-contact">
        <h2>Designing Dashboards</h2>
        <div className="badge-parent">
          <div className="badge">
            <p>2022</p>
          </div>
          <p>Dashboard</p>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis 
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

      </div>
      </div>
      
      <div className="card">
       <Image src="/Rectangle 34.png"  width={246} height={180} alt="images"/>
      
      <div className="card-contact">
        <h2>Designing Dashboards</h2>
        <div className="badge-parent">
          <div className="badge">
            <p>2022</p>
          </div>
          <p>Dashboard</p>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis 
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

      </div>
      </div>
      </div>
      

    </div>
    </div>
   </div>
   
    
   </>
    
  );
}
