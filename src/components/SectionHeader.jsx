export function SectionHeader({snippet="Enter Your Code Here",callback}) {
    const languages = ["javascript","python","java","c++","php"]
    return (
        <div className='flex flex-col md:flex-row justify-between items-center my-5 md:my-2'>
            <p className='md:px-5 text-md md:text-xl bg-gradient-to-r from-purple-400 via-blue-500 to-green-500 bg-clip-text text-transparent font-bold'>
                {snippet}</p>
            <select defaultValue="Pick a language" className="select w-50 text-md"
                 onChange={(e)=>callback(e.target.value)}
            >
                <option disabled={true}>Pick a language</option>
                {languages.map((language,idx)=>(
                    <option key={idx} value={language}>{language.charAt(0).toUpperCase() + language.slice(1)}</option> 
                ))}
            </select>
        </div>
    )
}