"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CapoAbb {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        return this.prezzoivaesclusa - this.saldo;
    }
    getacquistocapo() {
        return this.prezzoivainclusa;
    }
}
const capo1 = new CapoAbb(1, 12345, "Estate 2023", "T-shirt", 101, 50, "Bianco", 20.0, 24.4, "Disponibile", 5.0);
console.log("Prezzo originale:", capo1.prezzoivaesclusa);
console.log("Saldo applicato:", capo1.getsaldocapo());
console.log("Prezzo finale:", capo1.getacquistocapo());
const apiUrl = "file:///C:/Users/Raffaele/AppData/Local/Temp/Rar$DRa0.444/starter/Abbigliamento.json";
function fnCapoAbb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Errore Api");
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("errore:", error);
            return [];
        }
    });
}
fnCapoAbb().then((capi) => {
    console.log("capi recuperati dall'API:", capi);
});
