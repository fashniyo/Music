/* eslint-disable no-useless-escape */
export const hasUpperCase = (str) => /[A-Z]/.test(str)

export const hasSpecialChar = (str) =>
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str)

export const hasNumber = (str) => /\d/.test(str)
