
function FormSubmit(event){
    console.log("form was submited")
    event.preventDefault()
}

export default function Form(){
    return(
    <>
    <form onSubmit={FormSubmit}>
        <input placeholder="enter your name"></input>
        <button>submit</button>
    </form>
    </>
    )
}