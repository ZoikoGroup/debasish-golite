
import "../globals.css";
import Openings from "../components/carrer/Openings";
import SearchSection from "../components/carrer/SearchSection";


export default function App() {
  return (
    <div className="bg-[#fff7f3] min-h-screen">
     



 {/* this is the why work page has been intergrated here to reduce the load of the website so rather than defining the entire things using components   */}
   
   
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
         
         {/* text appearing to the left side of the image */}
         <div>
           <h1 className="text-4xl font-bold mb-4">
             <span className="text-orange-500"> Join Our Team at GoLite Mobile</span> 
           </h1>
   
           <p className="text-gray-800 leading-relaxed">
             At GoLite Mobile, we believe in the power of creativity and innovation.
             We're always looking for passionate, talented and driven individuals to join our growing team.
             Whether you're experienced or just starting out, explore exciting
             opportunities in a dynamic work environment.
           </p>
         </div>
   
         {/* image avatar character */}
         <div className="flex justify-center">
           <img src="/img/carrer/hero.png" alt="Hero" className="w-80" />
         </div>
   
       </section>
     
<div>
  <section className="max-w-6xl mx-auto py-12 px-6 text-center">
  <h2 className="text-3xl font-bold text-orange-500 mb-10">
    Why Work With Us?
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow p-6">
      <div className="w-14 h-14 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <img
          src="/img/carrer/innovativeculture.png"
          alt="Innovative Culture"
          className="w-7 h-7 object-contain"
        />
      </div>
      <h3 className="font-semibold text-gray-900">
        Innovative Culture
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        We support your growth and creativity.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow p-6">
      <div className="w-14 h-14 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <img
          src="/img/carrer/growthopportunities.png"
          alt="Growth Opportunities"
          className="w-7 h-7 object-contain"
        />
      </div>
      <h3 className="font-semibold text-gray-900">
        Growth Opportunities
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        We support your growth and creativity.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow p-6">
      <div className="w-14 h-14 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <img
          src="/img/carrer/diversity.png"
          alt="Diversity & Inclusion"
          className="w-7 h-7 object-contain"
        />
      </div>
      <h3 className="font-semibold text-gray-900">
        Diversity & Inclusion
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        We support your growth and creativity.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-xl shadow p-6">
      <div className="w-14 h-14 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
        <img
          src="/img/carrer/purposedriven.png"
          alt="Purpose-Driven Work"
          className="w-7 h-7 object-contain"
        />
      </div>
      <h3 className="font-semibold text-gray-900">
        Purpose-Driven Work
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        We support your growth and creativity.
      </p>
    </div>
  </div>
</section>

</div>


      <Openings />
      <SearchSection/>
    </div>
  );
}
