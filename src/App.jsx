import { useEffect, useRef, useState } from 'react';
import './App.css'

import { Logo } from './components/Logo';
import { CodeBox } from './components/CodeBox';
import { SectionHeader } from './components/SectionHeader';

function App() {
    const [language,setLangauge] = useState("javascript")
    const [output,setOutput]= useState("//Converted Code Here")
    const [outputLanguage,setOutputLanguage]=useState("javascript")
    const [inputText,setInputText]= useState("//Enter Code to Convert")
    const [loading,setLaoding] = useState(false);
    const changeLanguage = (language)=>{
      setLangauge(language);
    }
    const getOutputLanguage = (language)=>{
      setOutputLanguage(language)
    }

    const handleConversion = async ()=>{
      let code = inputText.split("\n").filter(line => !line.trim().startsWith("//")) .join("\n"); 
      if(code && code != ""){
        setLaoding(true)
        try {
          const prompt = `Convert the following ${language} code into ${outputLanguage} code. 
          Only return valid ${outputLanguage} code without explanation:\n\n${code}`;
          const response = await window.puter.ai.chat(prompt, {
            model: "gpt-5-nano"
          });
          setOutput("//Converted Code\n" + response.message.content);
        } catch (err) {
          console.error("Error transforming:", err);
          setOutputCode("Error: " + err.message);
        }finally{
          setLaoding(false)
        }
      }
    }

  return (
    <>
      <div className=" p-10 h-max-content min-h-screen bg-gradient-to-r from-green-500/5 to-purple-400/5 ">
        <Logo />
        <div className="md:p-4 flex flex-col md:flex-row gap-5">
          <div className='flex-1 rounded-sm md:p-5 bg-gradient-to-l from-red-500/10 to-green-600/5 font-serif'>
            <SectionHeader callback={changeLanguage}/>
            <div>
              <CodeBox language={language} code={inputText} onChange={setInputText} />
            </div>
          </div>
          <button className="btn btn-primary md:hidden" 
          onClick={handleConversion}  disabled={loading}>
          Convert{loading && <span className="loading loading-dots loading-xs"></span>}
          </button>
          <div className='flex-1 rounded-sm md:p-5 bg-gradient-to-l from-red-500/10 to-green-600/5 font-serif'>
            <SectionHeader snippet='Output Code' callback={getOutputLanguage}/>
            <CodeBox language={outputLanguage} editable={false} code={output}/>
          </div>
        </div>
        <center>
        <button className="btn btn-primary" 
        onClick={handleConversion}
        disabled={loading}>
        Convert{loading && <span className="loading loading-dots loading-xs"></span>}
        </button>
        </center>
      </div>
    </>
  )
}

export default App
