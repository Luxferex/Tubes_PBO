<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="models.Buku"%>
<%@page import="java.util.List"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Daftar Buku</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-6">
    <h2 class="text-4xl font-extrabold mb-4 pt-20 text-purple-700">Daftar Buku</h2>

    <div class="mb-4">
        <a href="AddBuku.jsp" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Tambah Buku
        </a>
    </div>

    <table class="min-w-full bg-white border border-gray-300">
        <thead>
            <tr>
                <th class="border border-gray-300 px-1 py-2 text-center">ID</th>
                <th class="border border-gray-300 px-1 py-2 text-center">ISBN</th>
                <th class="border border-gray-300 px-1 py-2 text-center">Judul</th>
                <th class="border border-gray-300 px-1 py-2 text-center">Penulis</th>
                <th class="border border-gray-300 px-1 py-2 text-center">Penerbit</th>
                <th class="border border-gray-300 px-1 py-2 text-center">Tahun Terbit</th>
                <th class="border border-gray-300 px-1 py-2 text-center">Stok Tersedia</th>
                <th class="border border-gray-300 px-1 py-2 text-center">Stok Dibutuhkan</th>
                <th class="border border-gray-300 px-1 py-2 text-center">Action</th>
            </tr>
        </thead>
        <tbody>
        <%
            List<Buku> bukuList = (List<Buku>) request.getAttribute("bukuList");
            if (bukuList != null && !bukuList.isEmpty()) {
                for (Buku buku : bukuList) {
        %>
        <tr>
            <td class="border border-gray-300 px-1 py-2 text-center"><%= buku.getId() %></td>
            <td class="border border-gray-300 px-1 py-2 text-center"><%= buku.getIsbn() %></td>
            <td class="border border-gray-300 px-1 py-2 text-center"><%= buku.getJudul() %></td>
            <td class="border border-gray-300 px-1 py-2 text-center"><%= buku.getPenulis() %></td>
            <td class="border border-gray-300 px-1 py-2 text-center"><%= buku.getPenerbit() %></td>
            <td class="border border-gray-300 px-1 py-2 text-center"><%= buku.getTahunTerbit() %></td>
            <td class="border border-gray-300 px-1 py-2 text-center"><%= buku.getStokTersedia() %></td>
            <td class="border border-gray-300 px-1 py-2 text-center"><%= buku.getStokDibutuhkan() %></td>
            <td class="border border-gray-300 px-1 py-2 text-center">
                <a href="Buku?menu=edit&id=<%= buku.getId() %>" class="text-blue-500 hover:text-blue-700">Edit</a>
                <form action="Buku" method="post" style="display:inline;">
                    <input type="hidden" name="action" value="delete">
                    <input type="hidden" name="id" value="<%= buku.getId() %>">
                    <button type="submit" class="text-red-500 hover:text-red-700 ml-2" onclick="return confirm('Are you sure you want to delete this book?');">Delete</button>
                </form>
            </td>
        </tr>
        <%
                }
            } else {
        %>
        <tr>
            <td colspan="9" class="border px-4 py-2 text-center">Tidak ada data buku.</td>
        </tr>
        <%
            }
        %>
        </tbody>
    </table>
</body>
</html>
