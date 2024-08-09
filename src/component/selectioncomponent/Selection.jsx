
import Button from '../buttoncomponent/Button';
import './Selection.css'

const Selection = () => {

const arr = [
  {
    SelectionName: "GitHub",
    SelectionColor:"hsl(75, 94%, 57%)",
    Color:"hsl(0, 0%, 8%)",
    uniqueId: 1
  },

  {
    SelectionName: "Facebook",
    uniqueId: 2
  },
  {
    SelectionName: "FrontMentor",
    uniqueId: 3
  },
  {
    SelectionName: "LinkedIn",
    uniqueId: 4
  },
  {
    SelectionName: "Twiiter",
    uniqueId: 5
  },

]

  return (

    
    <div className="selectiondiv">

      <p>Front-end developer and avid reader.</p>


{arr.map((item) => {
  return (
    <Button
    key={item.uniqueId}
    ItemName={item.SelectionName} BgItem={item.SelectionColor} ColorItem={item.Color}></Button>  
  )
})}



    
    </div>
  );
}

export default Selection;






