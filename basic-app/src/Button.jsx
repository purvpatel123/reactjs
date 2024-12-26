function printHello(){
    console.log("hello world")
}
function print(){
    console.log("hello guys")
}

export default function Button(){
    return(
        <>
        <div><button onClick={printHello}>click me!</button></div>
        <p button onClick={print}>this is for printing</p>
        </>
    )
}