const { usuarios, perfis } = require('../data/db')

module.exports = {
  ola () {
    return 'Bom dia'
  },

  horaAtual: () => new Date(),

  usuarioLogado (obj) {
    return {
      id: 1,
      nome: 'Pedro Barros',
      email: 'pedrobarros@herospark.com',
      idade: 22,
      salario_real: 1800.21,
      vip: true
    }
  },

  produtoEmDestaque () {
    return {
      nome: 'Pedro Barros',
      preco: 123.2,
      desconto: 0.8
    }
  },

  numerosMegaSena () {
    const crescente = (a, b) => a - b
    return Array(6).fill(0).map(() => parseInt(Math.random() * 61)).sort(crescente)
  },

  usuarios: () => usuarios,

  usuario (_, args) {
    const selecionados = usuarios.filter(({ id }) => id === parseInt(args.id))
    return selecionados.length ? selecionados[0] : null
  },

  perfis: () => perfis,

  perfil: (_, args) => {
    const perfilSelecionado = perfis.filter(({ id }) => id === parseInt(args.id))
    return perfilSelecionado ? perfilSelecionado[0] : null
  }
}