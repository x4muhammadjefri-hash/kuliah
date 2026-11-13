import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // 1. Ambil data riwayat keranjang dari localStorage saat pertama kali dimuat
  const items = ref(JSON.parse(localStorage.getItem('riwayatKeranjang')) || [])

  // 2. Hitung total item
  const totalItems = computed(() => items.value.length)

  // 3. Fungsi tambah barang ke keranjang
  function addToCart(product) {
    items.value.push(product)
  }

    // Hapus satu barang berdasarkan urutan (index)
  function removeFromCart(index) {
    items.value.splice(index, 1)
  }

  // (Opsional) Fungsi untuk mengosongkan riwayat keranjang
  function clearCart() {
    items.value = []
  }

  // 4. Pantau setiap perubahan pada 'items' dan simpan otomatis ke localStorage
  watch(
    items,
    (newItems) => {
      localStorage.setItem('riwayatKeranjang', JSON.stringify(newItems))
    },
    { deep: true }
  )

  return { items, totalItems,removeFromCart, addToCart, clearCart }
})
