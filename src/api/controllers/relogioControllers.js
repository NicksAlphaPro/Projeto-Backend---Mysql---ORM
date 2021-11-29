const Relogio = require('../models/relogioModels.js');

module.exports = {
    async index(req, res){
        const relogio = await Relogio.findAll();
        return res.json(relogio);
    }, 

    async store(req, res){
        const {
            rel_descricao,
            rel_modelo,
            rel_tipo,
            rel_pulseira,
            rel_garantia,
            fab_codigo
        } = req.body;

        const relogio = await Relogio.create({
            rel_descricao,
            rel_modelo,
            rel_tipo,
            rel_pulseira,
            rel_garantia,
            fab_codigo
        });

        return res.status(200).send({
            status: 1, 
            message: "Relogio cadastrado com sucesso!!!",
            relogio
        })
    },

    async update(req, res){
        const { rel_descricao, rel_modelo, rel_tipo, rel_pulseira, rel_garantia, fab_codigo } = req.body;
        const { codigo } = req.params;
        
        await Relogio.update({
            rel_descricao, rel_modelo, rel_tipo, rel_pulseira, rel_garantia, fab_codigo
        }, { where : {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Relogio atualizado com sucesso!!!"
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Relogio.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Relogio excluído com sucesso"
        })
    }
}