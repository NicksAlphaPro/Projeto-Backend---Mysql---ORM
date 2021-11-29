const Fabricante = require('../models/fabricanteModels.js');

module.exports = {
    async index(req, res){
        const fabricante = await Fabricante.findAll();
        return res.json(fabricante);
    }, 

    async store(req, res){
        const {
            fab_nome,
            fab_fantasia,
            fab_pais,
            fab_fundacao
        } = req.body;

        const fabricante = await Fabricante.create({
            fab_nome,
            fab_fantasia,
            fab_pais,
            fab_fundacao
        });

        return res.status(200).send({
            status: 1, 
            message: "Fabricante cadastrado com sucesso!!!",
            fabricante
        })
    },

    async update(req, res){
        const { fab_nome, fab_fantasia, fab_pais, fab_fundacao } = req.body;
        const { codigo } = req.params;
        
        await Fabricante.update({
            fab_nome, fab_fantasia, fab_pais, fab_fundacao
        }, { where : {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Fabricante atualizado com sucesso!!!"
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Fabricante.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Fabricante excluído com sucesso"
        })
    }
}