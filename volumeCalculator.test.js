import {
  volumeKubus,
  volumeBalok,
  volumeLimasSegiempat,
  volumePrismaSegitiga,
  volumeLimasSegitiga,
  volumeTabung,
  volumeKerucut,
  volumeBola,
} from './volumeCalculator.js'
import { expect } from 'chai'

describe('Kalkulator Volume', () => {
  // Test case untuk kubus
  it('Hitung Volume Bangun Ruang Kubus', () => {
    const volume = volumeKubus(3)
    expect(volume).to.equal(27)
  })

  it('harus memberikan error jika panjang sisi kubus adalah nol', () => {
    expect(() => volumeKubus(0)).to.throw('Panjang sisi harus lebih dari nol.')
  })

  // Test case untuk balok
  it('Hitung Volume Bangun Ruang Balok', () => {
    const volume = volumeBalok(2, 3, 4)
    expect(volume).to.equal(24)
  })

  it('harus memberikan error jika salah satu dimensi balok adalah nol', () => {
    expect(() => volumeBalok(2, 0, 4)).to.throw('Dimensi harus lebih dari nol.')
  })

  // Test case untuk limas segiempat
  it('Hitung Volume Bangun Ruang Limas Segiempat', () => {
    const volume = volumeLimasSegiempat(4, 6)
    expect(volume).to.equal(32)
  })

  it('harus memberikan error jika sisi alas atau tinggi limas segiempat adalah nol', () => {
    expect(() => volumeLimasSegiempat(0, 6)).to.throw(
      'Dimensi harus lebih dari nol.',
    )
  })

  // Test case untuk prisma segitiga
  it('Hitung Volume Bangun Ruang Prisma Segitiga', () => {
    const volume = volumePrismaSegitiga(3, 4, 5)
    expect(volume).to.equal(30)
  })

  it('harus memberikan error jika salah satu dimensi prisma segitiga adalah nol', () => {
    expect(() => volumePrismaSegitiga(0, 4, 5)).to.throw(
      'Dimensi harus lebih dari nol.',
    )
  })

  // Test case untuk limas segitiga
  it('Hitung Volume Bangun Ruang Limas Segitiga', () => {
    const volume = volumeLimasSegitiga(3, 6)
    expect(volume).to.equal(3)
  })

  it('harus memberikan error jika alas atau tinggi limas segitiga adalah nol', () => {
    expect(() => volumeLimasSegitiga(0, 6)).to.throw(
      'Dimensi harus lebih dari nol.',
    )
  })

  // Test case untuk tabung
  it('Hitung Volume Bangun Ruang Tabung', () => {
    const volume = volumeTabung(3, 5)
    expect(volume).to.be.closeTo(141.371, 0.001)
  })

  it('harus memberikan error jika jari-jari atau tinggi tabung adalah nol', () => {
    expect(() => volumeTabung(0, 5)).to.throw(
      'Jari-jari dan tinggi harus lebih dari nol.',
    )
  })

  // Test case untuk kerucut
  it('Hitung Volume Bangun Ruang Kerucut', () => {
    const volume = volumeKerucut(3, 5)
    expect(volume).to.be.closeTo(47.123, 0.001)
  })

  it('harus memberikan error jika jari-jari atau tinggi kerucut adalah nol', () => {
    expect(() => volumeKerucut(0, 5)).to.throw(
      'Jari-jari dan tinggi harus lebih dari nol.',
    )
  })

  // Test case untuk bola
  it('Hitung Volume Bangun Ruang Bola', () => {
    const volume = volumeBola(3)
    expect(volume).to.be.closeTo(113.097, 0.001)
  })

  it('harus memberikan error jika jari-jari bola adalah nol', () => {
    expect(() => volumeBola(0)).to.throw('Jari-jari harus lebih dari nol.')
  })
})
