let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extencion = ['.com', '.es', '.ve', '.co', '.cl'];

const concatenation1 = () => {
    for (let i = 0; i < pronoun.length; i++) {
        for (let n = 0; n < adj.length; n++) {
            for (let p = 0; p < noun.length; p++) {
                for (let k = 0; k < extencion.length; k++) {
                    console.log(`${pronoun[i]}${adj[n]}${noun[p]}${extencion[k]}`);
                }
            }
        }
    }
}

concatenation1();