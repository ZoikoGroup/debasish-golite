export default function Hero() {
  return (

    <>
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      
      {/* text appearing to the left side of the image */}
      <div>
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-orange-500"> Join Our Team</span> at GoLite Mobile
        </h1>

        <p className="text-gray-900 leading-relaxed">
          At GoLite Mobile, we believe in the power of creativity and innovation.
          We're always looking for passionate, talented and driven individuals to join our growing team.
          Whether you're experienced or just starting out, explore exciting
          opportunities in a dynamic work environment.
        </p>
      </div>

      {/* image avatar character */}
      <div className="flex justify-center">
        <img src="./img/carrer/hero.png" alt="Hero" className="w-80" />

      </div>

    </section>

    </>
  );
}
