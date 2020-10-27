import Typewriter from 'typewriter-effect';

export default function Hero(){
    return (
        <div class="rounded-lg shadow-lg relative">
          <img class="w-full object-cover" src="/images/background.jpg" alt="Mountain Image" />
          <div class="px-6 py-4 m-auto md:flex items-center absolute top-0 left-0 right-0 bottom-0">
            <h2 class="font-semibold text-white tracking-tight text-6xl w-full mb-3 items-center text-center align-middle">
              <Typewriter options={{
                strings: ["Hi, I'm Brent!", "I like building things"],
                autoStart: true,
                loop: true,
              }} />
            </h2>
          </div>
        </div>
    )
}