const { select, input, checkbox } = require('@inquirer/prompts')
const { json } = require('stream/consumers')

const fs = require("fs").promises

let metas

async function loadMetas(){
    try{
        const data = await fs.readFile("metas.json","utf-8")
        metas = JSON.parse(data)
    }catch(erro){
        metas = []
    }
}

async function saveMetas() {
    await fs.writeFile("metas.json",JSON.stringify(metas,null,2))
}

async function cadastrarMeta(){
    const meta = await input({message: "Digite a meta:"})

    if(meta.length == 0){
        message = "A meta não pode ser vazia."
        return
    }
    const metaJaCadastrada = metas.some((m) => m.value.toLowerCase() === meta.toLowerCase())
    
    if (metaJaCadastrada) {
        message = "Essa meta já foi cadastrada!";
        return;
    }
    
    metas.push({
        value: meta,
        checked: false
    })

    message = "Meta cadastrada com sucesso! :)";
    await saveMetas()
    
}

async function listarMetas() {
    if(metas.length == 0){
        message = "Não existem metas! :("
        return
    }
    const responses =  await checkbox({
        message: "Use as setas para mudar a meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(responses.length == 0){
        message = "Nenhuma meta selecionada!"
        return
    }

    responses.forEach((responses) => {
        const meta = metas.find((m) => {
            return m.value == responses
        })

        meta.checked = true
    })

    message = "Metas(s) marcada(s) concluída(s)"
    await saveMetas()
}

async function metasRealizadas() {
    if(metas.length == 0){
        message = "Não existem metas! :("
        return
    }
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0){
        messsage = "Não existem metas realizadas! :("
        return
    }

    await select({
        message: "Metas Realizadas: " + realizadas.length,
        choices: [...realizadas]
    })
}

async function metasAbertas() {
    if(metas.length == 0){
        message = "Não existem metas! :("
        return
    }
    const abertas = metas.filter((meta) => {
        return !meta.checked 
    })

    if(abertas.length == 0){
        message = "Não existem metas abertas! :)"
        return
    }

    await select({
        message: "Metas Abertas: " + abertas.length,
        choices: [...abertas]
    })
}

async function deletarMetas() {
    if(metas.length == 0){
        message = "Não existem metas! :("
        return
    }
    const metasDesmarcadas = metas.map((meta) => {
        return {
            value: meta.value,
            checked: false
        } 
    })
    const deletes =  await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false
    })  
    
    if(deletes.length == 0){
        message ="Nenhum item para deletar!"
        return
    }

    deletes.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })
    message ="Meta(s) deletada(s) com sucesso!!"
    await saveMetas()
}

function mostrarMensagem(){
    console.clear();

    if(message != ""){
        console.log(message)
        console.log("")
        message = ""
    }
}

let message = "Bem vindo ao app de Metas"

async function start(){
    await loadMetas()


    while(true){
        mostrarMensagem()

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
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
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
            
            case "abertas":
                await metasAbertas()
                break

            case "deletar":
                await deletarMetas()
                break

            case "sair":
                console.log("vamos sair")
                return
        }
    }
}

start()