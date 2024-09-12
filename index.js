const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: "Estudar 1h por dia",
    checked: false
}

let metas = [ meta ]

async function cadastrarMeta(){
    const meta = await input({message: "Digite a meta: "})

    if(meta.length == 0){
        console.log("A meta não pode ser vazia.")
        return
    }

    metas.push({
        value: meta,
        checked: false
    })
}

async function listarMetas() {
    const responses =  await checkbox({
        message: "Use as setas para mudar a meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false
    })
    if(responses.length == 0){
        console.log("Nenhuma meta selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })
    
    responses.forEach((responses) => {
        const meta = metas.find((m) => {
            return m.value == responses
        })

        meta.checked = true
    })

    console.log("Metas(s) marcada(s) concluída(s)")
}

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
                await cadastrarMeta()
                console.log(metas)
                break

            case "listar":
                await listarMetas()
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