import mongoose from "mongoose";

const compteSchema = mongoose.Schema({
    numCompte: String, //not number cuz it removes the 0
    libelle: String,
    dateSolde: String, //not date cuz of the format
    devise: String,
    soldeActuel: Number,
    owner : String,
});

const CompteModal = mongoose.model("Compte", compteSchema);

export default CompteModal;