function redirect(self, redirectUrl) {
  self.$router.push({name: redirectUrl})
}

export {redirect}
