export function volumeKubus(sisi) {
  if (sisi <= 0) throw new Error('Panjang sisi harus lebih dari nol.')
  return Math.pow(sisi, 3)
}

export function volumeBalok(panjang, lebar, tinggi) {
  if (panjang <= 0 || lebar <= 0 || tinggi <= 0)
    throw new Error('Dimensi harus lebih dari nol.')
  return panjang * lebar * tinggi
}

export function volumeLimasSegiempat(sisiAlas, tinggi) {
  if (sisiAlas <= 0 || tinggi <= 0)
    throw new Error('Dimensi harus lebih dari nol.')
  return (1 / 3) * Math.pow(sisiAlas, 2) * tinggi
}

export function volumePrismaSegitiga(alas, tinggiSegitiga, panjang) {
  if (alas <= 0 || tinggiSegitiga <= 0 || panjang <= 0)
    throw new Error('Dimensi harus lebih dari nol.')
  return (1 / 2) * alas * tinggiSegitiga * panjang
}

export function volumeLimasSegitiga(alas, tinggi) {
  if (alas <= 0 || tinggi <= 0) throw new Error('Dimensi harus lebih dari nol.')
  return (1 / 6) * alas * tinggi
}

export function volumeTabung(jariJari, tinggi) {
  if (jariJari <= 0 || tinggi <= 0)
    throw new Error('Jari-jari dan tinggi harus lebih dari nol.')
  return Math.PI * Math.pow(jariJari, 2) * tinggi
}

export function volumeKerucut(jariJari, tinggi) {
  if (jariJari <= 0 || tinggi <= 0)
    throw new Error('Jari-jari dan tinggi harus lebih dari nol.')
  return (1 / 3) * Math.PI * Math.pow(jariJari, 2) * tinggi
}

export function volumeBola(jariJari) {
  if (jariJari <= 0) throw new Error('Jari-jari harus lebih dari nol.')
  return (4 / 3) * Math.PI * Math.pow(jariJari, 3)
}
