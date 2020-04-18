export function routeUserToAuth () {
  this.$router.push({
    path: '/auth'
  })
}

export const userLogin = async function ({ commit }, payload) {
  const $fb = this.$fb
  // const { email, password } = payload
  return $fb.loginWithGoogle()
}

export const logoutUser = async function ({ commit }, payload) {
  const $fb = this.$fb
  await $fb.logoutUser()
}

