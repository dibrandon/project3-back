const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const characterSchema = new Schema({
    nombre: { type: String, unique: true, required: true },
    personajes: { type: Schema.Types.ObjectId, ref: "Character" },
});

module.exports = model("User", characterSchema);


