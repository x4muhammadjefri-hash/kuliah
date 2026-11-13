<template>
  <div>
    <nav style="padding: 15px; background: #f4f4f4; display: flex; gap: 20px;">
      <RouterLink to="/">Catatan Buku</RouterLink>
      <RouterLink to="/katalog">Beranda (Katalog)</RouterLink>
      <RouterLink to="/cart">Keranjang Belanja</RouterLink>
    </nav>
    <hr />
    <RouterView />
  </div>
</template>
