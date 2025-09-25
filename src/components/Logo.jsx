export function Logo(){
    return (
        <div className="flex items-center flex-col mb-3 text-center text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent font-bold">
          <img src="/Logo.png" width={500} alt="" />
          <span>AI Code Converter</span>
        </div>
    )
}