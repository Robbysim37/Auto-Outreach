import './App.css';
import {useState} from "react"
import InputBox from './components/InputBox';

function App() {

  const [emailDetails, setEmailDetails] = useState(
    {
      name:"",
      position:"",
      company:""
    }
  )

  const email =
`Dear ${emailDetails.name}\n,
My name is Robert Lewis, and I'm eager to introduce myself as a software developer interested in the ${emailDetails.position} position that has recently opened at ${emailDetails.company}. During my education, I've developed a passion for programming and a foundation in key technologies like HTML, CSS, React, JavaScript, TypeScript, and Node.js.\n
I've focused on learning the fundamentals of React and Typescript to create user-friendly interfaces. I've also gained insights into building backend systems using Node.js. My enthusiasm and willingness to learn have allowed me to develop projects for local business as a Freelance Developer and I'm looking to bring those skills to a more professional environment.\n
While I have already applied through the regular channels,  I've attached my resume for your consideration. Please feel free to contact me at Robbysim37@gmail.com or 734-308-9797 to discuss how my initiative and dedication can help your team\n
Thank you for your time and consideration.
-Robert Lewis\n
Inquiring about recent job opening`

  const CopyClipboardClickHandler = async () => {

    try{
      await navigator.clipboard.writeText(email)
    }

    catch (err) {
      console.log(err)
    }

    console.log(

    )
}

  return (
    <>
    <div className='body'>
      <div className='email-details-container'>

        <InputBox label={"Name:"} id={"name"} setEmailDetails={setEmailDetails}
        emailDetails={emailDetails}></InputBox>

        <InputBox label={"Position:"} id={"position"} setEmailDetails={setEmailDetails}
        emailDetails={emailDetails}></InputBox>

        <InputBox label={"Company:"} id={"company"} setEmailDetails={setEmailDetails}
        emailDetails={emailDetails}></InputBox>

        <button className='copy-button' onClick={CopyClipboardClickHandler}>Copy to clipboard</button>
      </div>
    </div>
    </>
  );
}

export default App;
