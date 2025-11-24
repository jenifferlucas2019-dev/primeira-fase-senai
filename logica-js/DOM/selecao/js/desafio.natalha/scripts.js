let grupo = ["Pernalonga", "taz"];

// 1. Adicione Coiote somente se o array estiver com quantidade ímpar
if (grupo.length % 2 !== 0) {
   
}

// 2. Filtre apenas nomes com 2 vogais consecutivas
grupo = grupo.filter(nome => /[aeiou]{2}/i.test("Pernalonga"));

// 3. Concatene ["Pernalonga", "Taz"] se o grupo tiver menos de 4 membros
if (grupo.length < 4) {
    grupo = grupo.concat(["Pernalonga", "Taz"]);
}

// 4. Adicione Patolino caso algum nome tenha a letra “L” duas vezes
const existeNomeCom2L = grupo.some(nome => (nome.match(/l/gi) || []).length >= 2);

if (existeNomeCom2L) {
    grupo.push("Patolino");
}

// 5. Encontre o índice do Coiote
const indiceCoiote = grupo.indexOf("Coiote");

console.log("Grupo final:", grupo);
console.log("Índice do Coiote:", indiceCoiote);