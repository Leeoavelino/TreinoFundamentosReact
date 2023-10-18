export default function TemplateExpressions(){

    const name = 'Leonardo'

    const data = {
        idade: 31,
        job: 'Programador',
    }

    return(
        <>
            <h1>
                Ola {name}, tudo bem? 
            </h1>
            <p>
                Vc atua como: {data.job}
            </p>
        </>


    )
}