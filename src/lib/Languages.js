import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { php } from "@codemirror/lang-php";
import { javascript } from "@codemirror/lang-javascript";

export function getLanguageExtension(lang) {
  switch (lang.toLowerCase()) {
    case "javascript":
      return javascript();
    case "python":
      return python();
    case "java":
      return java();
    case "c++":
      return cpp();
    case "php":
      return php();
    default:
      return javascript(); 
  }
}
