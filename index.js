const { select, input, checkbox } = require('@inquirer/prompts')

let metas = [ 
    {
        value: "Estudar 1h por dia",
        checked: false
    },
    {
        value: "Ler 10 página por dia",
        checked: false
    },
    {
        value: "Tomar 2L de água",
        checked: false
    }      
]

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

    metas.forEach((m) => {
        m.checked = false
    })
    
    if(responses.length == 0){
        console.log("Nenhuma meta selecionada!")
        return
    }

    responses.forEach((responses) => {
        const meta = metas.find((m) => {
            return m.value == responses
        })

        meta.checked = true
    })

    console.log("Metas(s) marcada(s) concluída(s)")
}

async function metasRealizadas() {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0){
        console.log("Não existem metas realizadas! :(")
        return
    }

    await select({
        message: "Metas Realizadas",
        choices: [...realizadas]
    })
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
                    name: "Metas realizadas",
                    value: "realizadas"
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

            case "realizadas":
                await metasRealizadas()
                break

            case "sair":
                console.log("vamos sair")
                return
        }
    }
}

start()