// function mensagem(){
//     return 'Esta é uma mensagem';
// }

// const men = () => 'mensagem'

// console.log(mensagem())
// console.log(men())

const json = (nome, salario) => {
    return {
        nome: nome,
        salario: salario,
        rendimentoAnual: salario * 12
    };
};


const pessoa = json("Gabrielly", 1000);


console.log(pessoa);


