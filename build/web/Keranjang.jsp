<%@page contentType="text/html" pageEncoding="UTF-8"%>  
<%@page import="models.Buku"%>  
<%@page import="models.Majalah"%>  
<%@page import="java.util.Map"%>  
<%@page import="java.util.List"%>  

<%
    // Mengambil keranjang dari session
    Map<String, List<Object>> keranjang = (Map<String, List<Object>>) session.getAttribute("keranjang");
%>  

<!DOCTYPE html>  
<html lang="en">  
    <head>  
        <meta charset="UTF-8">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <title>Keranjang Pinjaman</title>  
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">  
    </head>  
    <body class="bg-gray-100">  
        <div class="container mx-auto py-6">  
            <h1 class="text-2xl font-bold text-center mb-8">Keranjang Pinjaman</h1>  

            <!-- Buku -->
            <div class="mb-6">  
                <h2 class="text-xl font-semibold mb-4">Buku</h2>  
                <% List<Object> bukuList = keranjang != null ? keranjang.get("buku") : null; %>  
                <table class="table-auto w-full bg-white shadow-lg rounded-lg">  
                    <thead class="bg-gray-800 text-white">  
                        <tr>  
                            <th class="px-4 py-2">Judul</th>  
                            <th class="px-4 py-2">Penulis</th>  
                            <th class="px-4 py-2">ISBN</th>  
                            <th class="px-4 py-2">Aksi</th>  
                        </tr>  
                    </thead>  
                    <tbody>  
                        <%
                            if (bukuList != null && !bukuList.isEmpty()) {
                                for (Object obj : bukuList) {
                                    Buku buku = (Buku) obj;
                        %>  
                        <tr class="text-gray-700">  
                            <td class="border px-4 py-2"><%= buku.getJudul()%></td>  
                            <td class="border px-4 py-2"><%= buku.getPenulis()%></td>  
                            <td class="border px-4 py-2"><%= buku.getIsbn()%></td>  
                            <td class="border px-4 py-2">  
                                <!-- Hapus buku dari keranjang -->
                                <a href="KeranjangController?tipe=buku&id=<%= buku.getId()%>&action=remove" class="text-red-500 hover:underline">Hapus</a>  
                            </td>  
                        </tr>  
                        <%
                            }
                        } else {
                        %>  
                        <tr>  
                            <td class="text-center py-2" colspan="4">Tidak ada buku di keranjang.</td>  
                        </tr>  
                        <% } %>  
                    </tbody>  
                </table>  
            </div>  

            <!-- Majalah -->
            <div class="mb-6">  
                <h2 class="text-xl font-semibold mb-4">Majalah</h2>  
                <% List<Object> majalahList = keranjang != null ? keranjang.get("majalah") : null; %>  
                <table class="table-auto w-full bg-white shadow-lg rounded-lg">  
                    <thead class="bg-gray-800 text-white">  
                        <tr>  
                            <th class="px-4 py-2">Judul</th>  
                            <th class="px-4 py-2">Penerbit</th>  
                            <th class="px-4 py-2">ISSN</th>  
                            <th class="px-4 py-2">Aksi</th>  
                        </tr>  
                    </thead>  
                    <tbody>  
                        <%
                            if (majalahList != null && !majalahList.isEmpty()) {
                                for (Object obj : majalahList) {
                                    Majalah majalah = (Majalah) obj;
                        %>  
                        <tr class="text-gray-700">  
                            <td class="border px-4 py-2"><%= majalah.getJudul()%></td>  
                            <td class="border px-4 py-2"><%= majalah.getPenerbit()%></td>  
                            <td class="border px-4 py-2"><%= majalah.getIdMajalah()%></td>  
                            <td class="border px-4 py-2">  
                                <!-- Hapus majalah dari keranjang -->
                                <a href="KeranjangController?tipe=majalah&id=<%= majalah.getId()%>&action=remove" class="text-red-500 hover:underline">Hapus</a>  
                            </td>  
                        </tr>  
                        <%
                            }
                        } else {
                        %>  
                        <tr>  
                            <td class="text-center py-2" colspan="4">Tidak ada majalah di keranjang.</td>  
                        </tr>  
                        <% }%>  
                    </tbody>  
                </table>  
            </div>  

            <div class="flex justify-end mt-4">
                <form action="BorrowController" method="post">
                    <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded-lg">
                        Proses Pinjam
                    </button>
                </form>
            </div>

        </div>  
    </body>  
</html>
