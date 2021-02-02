const usersController = {

    signIn:(req, res, next) => {
        res.render('signIn')
    },
    signUp:(req, res, next) => {
        res.render('signUp')
    },
    config:(req, res, nex) =>{
        res.render('config')
    },
    excluirConta:(req,res,next) =>{
        res.render('excluirConta')
    },
    agendamentos:(req,res,next) =>{
        res.render('agendamentos')
    }
}

module.exports = usersController;