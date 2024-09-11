const { select } = require('@inquirer/prompts')

async function start(){

    while(true){

        const option = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        
        switch(option){
            
            case "cadastrar":
                console.log("vamos cadastrar")
                break

            case "listar":
                console.log("vamos listar")
                break

                case "sair":
                    console.log("vamos sair")
                    return

                default:
                    console.log("opção invalida")
        }

    }
}


start()