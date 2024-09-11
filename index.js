function start(){
    while(true){
        let option = "cadastrar"
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
                    break

                default:
                    console.log("opção invalida")
        }

    }
}


start()