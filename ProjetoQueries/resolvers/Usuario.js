const { perfis } = require('../data/db')

module.exports = {
  salario (usuario) {
    return usuario.salario_real
  },
  perfil (usuario) {
    const sels = perfis.filter(p => p.id === usuario.perfil_id)

    return sels.length ? sels[0] : null
  }
}