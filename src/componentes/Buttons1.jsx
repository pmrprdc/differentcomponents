export default function Buttons1(props){


    return(
        <>
        {props.buttons.map(x=>(<button>{x.name}</button>))}
      
        </>
    )
}