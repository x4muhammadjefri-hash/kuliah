<script setup>
import { ref, computed,watch } from 'vue'

const judulBuku = ref('')
const kategoriBuku = ref('Fiksi')
const statusBaca = ref(false)

const daftarBuku = ref(JSON.parse(localStorage.getItem('daftarBuku')) || [])
watch(daftarBuku, (newValue) =>{
    localStorage.setItem('daftarBuku', JSON.stringify(newValue))
},{deep: true})

const tambahBuku = () => {
  if (!judulBuku.value.trim()) return
  daftarBuku.value.push({
    judul: judulBuku.value,
    kategori: kategoriBuku.value,
    selesai: statusBaca.value
  })
  judulBuku.value = ''
  statusBaca.value = false
}

const totalSelesai = computed(() => {
  return daftarBuku.value.filter(buku => buku.selesai).length
})
</script>

<template>
  <div style="padding: 20px;">
    <h2>Catatan Buku Saya</h2>
    <form @submit.prevent="tambahBuku">
      <div>
        <label>Judul Buku: </label>
        <input type="text" v-model="judulBuku" placeholder="Masukkan judul bukunya..." />
      </div>
      <div>
        <label>Kategori: </label>
        <select v-model="kategoriBuku">
          <option value="Fiksi">Fiksi</option>
          <option value="Non-Fiksi">Non-Fiksi</option>
          <option value="Edukasi">Edukasi</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="statusBaca" /> Selesai Dibaca
        </label>
      </div>
      <button type="submit">Tambah Buku</button>
    </form>
   

    <hr />

    <h3>Daftar Buku (Total Selesai Dibaca: {{ totalSelesai }})</h3>
    <ul>
      <li v-for="(buku, index) in daftarBuku" :key="index">
        <strong>{{ buku.judul }}</strong> - {{ buku.kategori }} 
        <span>({{ buku.selesai ? 'Sudah dibaca' : 'Belum dibaca' }})</span>
      </li>
    </ul>
  </div>
  <h3>&copy JefriTI049/2026</h3>

</template>