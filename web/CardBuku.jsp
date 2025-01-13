<%@page contentType="text/html" pageEncoding="UTF-8"%>      
<%@page import="models.Buku"%>      
<%@page import="java.util.List"%>      

<%
    List<Buku> daftarBuku = (List<Buku>) request.getAttribute("daftarBuku");
%>      

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Daftar Buku</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    </head>
    <body class="bg-gray-100">
        <div class="container mx-auto py-6">
            <h1 class="text-2xl font-bold text-center mb-8">Daftar Buku</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <%
                    if (daftarBuku != null && !daftarBuku.isEmpty()) {
                        for (Buku buku : daftarBuku) {
                %>
                <!-- Card Item -->
                <div class="bg-white p-4 rounded-lg shadow-lg flex flex-col transform transition hover:scale-105 hover:shadow-xl">
                    <!-- Icon -->
                    <div class="text-6xl text-gray-500 mb-4 flex justify-center">
                        <i class="fas fa-book"></i>
                    </div>
                    <!-- Book Info -->
                    <div class="mb-4">
                        <h3 class="text-lg font-semibold text-center text-gray-700 mb-2">
                            <%= buku.getJudul()%>
                        </h3>
                        <p class="text-sm text-gray-600">
                            <strong>Penulis:</strong> <%= buku.getPenulis()%>
                        </p>
                        <p class="text-sm text-gray-600">
                            <strong>Penerbit:</strong> <%= buku.getPenerbit()%>
                        </p>
                        <p class="text-sm text-gray-600">
                            <strong>ISBN:</strong> <%= buku.getIsbn()%>
                        </p>
                        <p class="text-sm text-gray-600">
                            <strong>Stok:</strong> <%= buku.getStokTersedia()%> tersedia dari <%= buku.getJumlah()%> total
                        </p>
                    </div>
                    <!-- Action Buttons -->
                    <div class="mt-auto flex justify-center space-x-2">

                        <button class="bg-green-500 text-white py-2 px-4 rounded-lg flex items-center"   
                                onclick="window.location.href = 'KeranjangController?tipe=buku&id=<%= buku.getId() %>&action=add'">  
                            <i class="fas fa-book-reader mr-2"></i> Pinjam  
                        </button>   

                    </div>
                </div>
                <%
                    }
                } else {
                %>
                <p class="col-span-full text-center text-red-500">Tidak ada buku yang tersedia.</p>
                <%
                    }
                %>
            </div>
        </div>
    </body>
</html>
