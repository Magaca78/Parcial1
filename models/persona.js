const mongoose = require("mongoose");
const personaSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    mom: {
        type: Object,
        require: true,
        nameMom: {
            type: String,
            require: true
        },
        namepets_mom: {
            type: Array,
            require: true
        }
    },
    dad: {
        type: Object,
        require: true,
        jobs: {
            type: Object,
            require: true,
            mainjob: {
                type: String,
                require: true
            },
            alternatejob: {
                type: String,
                require: true
            }
        }
    }

});

module.exports = mongoose.model('PersonaDocument', personaSchema);