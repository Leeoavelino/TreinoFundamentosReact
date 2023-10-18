export default function Events(){

    const handleMyEvent = (e) => {
        console.log(e)
    }
    

    return(

        <>
            <div>
                <button onClick={handleMyEvent}> Clique aqui! </button>
            </div>

            <div>
                <button onClick={() => console.log('Clicou!')}>Clique aqui tambem!!</button>
                <button onClick={() => {
                    if(true){
                        console.log('Isso nao deveria existir =]')
                    }
                }}>Clica aqui, por favor</button>
            </div>

            

        
        </>

    )
}