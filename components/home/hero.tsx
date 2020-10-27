import Typewriter from 'react-typewriter';

export default function Hero(){
    return (
        <div className="rounded-lg shadow-lg relative">
          <img className="w-full object-cover" src="/images/background.jpg" alt="Mountain Image" />
          <div className="px-6 py-4 m-auto md:flex items-center absolute top-0 left-0 right-0 bottom-0">
            <h2 className="font-semibold text-white tracking-tight text-6xl w-full mb-3 items-center text-center align-middle">
              <Typewriter typing={1}>Hello World!</Typewriter>
            </h2>
          </div>
        </div>
    )
}