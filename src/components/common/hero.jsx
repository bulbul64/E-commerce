import backgroundImage from '../../assets/heroBanner.jpg';


export default function Hero() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div
        className="h-96 bg-cover bg-center bg-no-repeat relative"
              style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
              }}
      >
        {/* Overlay */}
        <div className="flex flex-col items-start justify-center h-full px-8  bg-opacity-30 text-white">
          <h1 className="text-4xl font-bold mb-4">Discover Amazing Products</h1>
          <p className="mb-6 text-lg">Up to 50% off on selected items</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </section>
  );
}
