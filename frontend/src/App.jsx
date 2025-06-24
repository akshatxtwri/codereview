import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import axios from 'axios';
import './App.css';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {

 
  const[code ,setcode] = useState(`function sum() {
    return 1+1}`);

    const [review , setreview] = useState(``)
    
  useEffect(() => {
    prism.highlightAll()
  },[])

  async function reviewcode(){
  const response = await axios.post('http://localhost:3000/ai/get-review' , {code})
  setreview(response.data);
  }




return (
  <>
  <main>
    <div className='left'>
      <div className='code'>
       <Editor
              value={code}
              onValueChange={code => setcode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 60,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}/>
      </div>
      <div className="zz" onClick={reviewcode}>Review</div>
    </div>

    <div className='right'>
       <Markdown
         rehypePlugins={[ rehypeHighlight ]}
       >{review}</Markdown>
    </div>
   

  </main>
  </>
)
}

export default App
