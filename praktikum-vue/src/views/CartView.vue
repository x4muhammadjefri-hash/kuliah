<template>
  <div style="text-align: center; padding: 20px;">
    <h2>Halaman Keranjang Belanja</h2>
    <p>Total Item: {{ cartStore.totalItems }}</p>

    <div v-if="cartStore.items.length === 0">
      <p>Keranjang Anda masih kosong.</p>
    </div>

    <div v-else>
      <ul style="list-style: none; padding: 0;">
        <li 
          v-for="(item, index) in cartStore.items" 
          :key="index" 
          style="margin-bottom: 12px;"
        >
          <strong>{{ item.title || item.nama || item.name || item.judul }}</strong> - Rp {{ item.price || item.harga }}

          <button 
            @click="cartStore.removeFromCart(index)" 
            style="margin-left: 10px; color: red; cursor: pointer;"
          >
            Hapus
          </button>
        </li>
      </ul>

      <button 
        @click="cartStore.clearCart()" 
        style="margin-top: 10px; padding: 6px 12px; cursor: pointer;"
      >
        Kosongkan Keranjang
      </button>
    </div>

    <div style="margin-top: 25px;">
      <RouterLink to="/katalog">Kembali ke Katalog (Beranda)</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>
