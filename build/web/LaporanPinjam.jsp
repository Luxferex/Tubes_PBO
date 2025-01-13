<%@page contentType="text/html" pageEncoding="UTF-8"%>      
<%@page import="models.Buku"%>      
<%@page import="java.util.List"%>      
<%@page import="java.util.ArrayList"%>      
  
<!DOCTYPE html>      
<html lang="en">      
<head>      
    <meta charset="UTF-8">      
    <meta name="viewport" content="width=device-width, initial-scale=1.0">      
    <title>Laporan Pinjam</title>      
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">      
</head>      
<body class="bg-gray-100">      
    <div class="container mx-auto py-6">      
        <h1 class="text-2xl font-bold text-center mb-8">Laporan Pinjam</h1>      
  
        <table class="table-auto w-full bg-white shadow-lg rounded-lg">      
            <thead class="bg-gray-800 text-white">      
                <tr>      
                    <th class="px-4 py-2">Judul</th>      
                    <th class="px-4 py-2">Penulis</th>      
                    <th class="px-4 py-2">ISBN</th>      
                    <th class="px-4 py-2">Aksi</th> <!-- Kolom untuk aksi -->      
                </tr>      
            </thead>      
            <tbody>      
                <%      
                    // Ambil daftar buku yang dipinjam dari request      
                    List<Buku> borrowedBooks = (List<Buku>) request.getAttribute("borrowedBooks");      
                    if (borrowedBooks == null) {      
                        borrowedBooks = new ArrayList<>();      
                    }      
  
                    if (!borrowedBooks.isEmpty()) {      
                        for (Buku buku : borrowedBooks) {      
                %>      
                <tr class="text-gray-700">      
                    <td class="border px-4 py-2"><%= buku.getJudul() %></td>      
                    <td class="border px-4 py-2"><%= buku.getPenulis() %></td>      
                    <td class="border px-4 py-2"><%= buku.getIsbn() %></td>      
                    <td class="border px-4 py-2"> <!-- Tombol aksi -->      
                        <form action="processAction" method="post" class="inline"> <!-- Ganti dengan URL yang sesuai -->      
                            <input type="hidden" name="isbn" value="<%= buku.getIsbn() %>"> <!-- Kirim ISBN buku -->      
                            <button type="submit" name="action" value="accept" class="bg-green-500 text-white px-2 py-1 rounded">Terima</button>      
                            <button type="submit" name="action" value="reject" class="bg-red-500 text-white px-2 py-1 rounded">Tolak</button>      
                        </form>      
                    </td>      
                </tr>      
                <%      
                        }      
                    } else {      
                %>      
                <tr>      
                    <td class="text-center py-2" colspan="4">Tidak ada buku yang dipinjam.</td>      
                </tr>      
                <%      
                    }      
                %>      
            </tbody>      
        </table>      
    </div>      
</body>      
</html>    
