import CodeMirror from "@uiw/react-codemirror";
import { getLanguageExtension } from "../lib/Languages"
export function CodeBox({editable=true,language="javascript",code="//Output Code",onChange=null}){
    return(
        <CodeMirror
        value={code}
        height="400px"
        theme="dark"
        extensions={[getLanguageExtension(language)]}
        onChange={(value) => onChange && onChange(value)}
        editable={editable}
      />
    )
}