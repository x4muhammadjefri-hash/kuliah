<template>
  <div style="padding: 20px;">
    <h2>Katalog Produk</h2>
    <p>Total Item di Keranjang: {{ cartStore.totalItems }}</p>
    
    <div style="display: flex; gap: 15px; margin-top: 20px;">
      <!-- Produk 1 -->
      <div style="border: 1px solid #ccc; padding: 30px; border-radius: 20px;">
        <h3>Buku Pemrograman Vue.js</h3>
        <p>Rp 75.000</p>
        <button @click="cartStore.addToCart({ nama: 'Buku Pemrograman Vue.js', harga: 75000 })">
          Beli
        </button>
      </div>

      <!-- Produk 2 -->
      <div style="border: 1px solid #ccc; padding: 30px; border-radius: 20px;">
        <h3>Buku Perjuangan Seorang Anak</h3>
        <p>Rp 90.000</p>
        <button @click="cartStore.addToCart({ nama: 'Perjuangan Seorang Anak', harga: 90000 })">
          Beli
        </button>
      </div>

      <!-- Produk 3 -->
      <div style="border: 1px solid #ccc; padding: 30px; border-radius: 20px;">
        <h3>Buku Jiwa Kehidupan</h3>
        <p>Rp 60.000</p>
        <button @click="cartStore.addToCart({ nama: 'Buku Jiwa Kehidupan', harga: 60000 })">
          Beli
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>