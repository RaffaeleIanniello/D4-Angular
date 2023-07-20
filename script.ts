
class CapoAbb {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
  
    constructor(
      id: number,
      codprod: number,
      collezione: string,
      capo: string,
      modello: number,
      quantita: number,
      colore: string,
      prezzoivaesclusa: number,
      prezzoivainclusa: number,
      disponibile: string,
      saldo: number
    ) {
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
  
   
    getsaldocapo(): number {
      return this.prezzoivaesclusa - this.saldo;
    }
  
    
    getacquistocapo(): number {
      return this.prezzoivainclusa;
    }
  }
  
  
  const capo1 = new CapoAbb(
    1,
    12345,
    "Estate 2023",
    "T-shirt",
    101,
    50,
    "Bianco",
    20.0,
    24.4,
    "Disponibile",
    5.0
  );
  
  console.log("Prezzo originale:", capo1.prezzoivaesclusa);
  console.log("Saldo applicato:", capo1.getsaldocapo());
  console.log("Prezzo finale:", capo1.getacquistocapo());




const apiUrl = "file:///C:/Users/Raffaele/AppData/Local/Temp/Rar$DRa0.444/starter/Abbigliamento.json" ;


async function fnCapoAbb(): Promise<CapoAbb[]> {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Errore Api");
    }

    const data: CapoAbb[] = await response.json();
    return data;
  } catch (error) {
    console.error("errore:", error);
    return [];
  }
}


fnCapoAbb().then((capi) => {
  console.log("capi recuperati dall'API:", capi);
});
  