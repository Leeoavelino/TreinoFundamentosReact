import TemplateExpressions from "./TemplateExpressions"
import Mycomponent from "./Mycomponent"


export default function FirstComponet(){
    return(
        <>
            <h1>
                Meu primeiro componente
            </h1>

            <p className='teste'>
                Meu texto
            </p>

            <TemplateExpressions />
           <Mycomponent />
            
        </>
    )
}