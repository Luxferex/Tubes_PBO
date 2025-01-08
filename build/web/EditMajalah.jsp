<%@page contentType="text/html" pageEncoding="UTF-8"%>  
<%@page import="models.Majalah"%>  
  
<!DOCTYPE html>  
<html lang="en">  
  
<head>  
    <meta charset="UTF-8">  
    <title>Edit Majalah</title>  
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">  
</head>  
<body class="bg-gray-100 p-6">  
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">  
        <h2 class="text-2xl font-bold mb-6 text-center">Edit Majalah</h2>  
        <form action="Majalah" method="post">  
            <input type="hidden" name="action" value="edit">  
            <input type="hidden" name="id" value="${majalah.id}"> <!-- Menggunakan EL -->  
            
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">ID Majalah:</label>  
                <input type="text" name="idMajalah" value="${majalah.idMajalah}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Judul:</label>  
                <input type="text" name="judul" value="${majalah.judul}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Penerbit:</label>  
                <input type="text" name="penerbit" value="${majalah.penerbit}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Tahun Terbit:</label>  
                <input type="number" name="tahun_terbit" value="${majalah.tahunTerbit}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Stok Tersedia:</label>  
                <input type="number" name="stok_tersedia" value="${majalah.stokTersedia}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Stok Dibutuhkan:</label>  
                <input type="number" name="stok_dibutuhkan" value="${majalah.stokDibutuhkan}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
  
            <div class="flex justify-between">  
                <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Simpan Perubahan</button>  
                <a href="AdminPage.jsp?menu=majalah" class="text-gray-500 hover:text-gray-700">Batal</a>  
            </div>  
        </form>  
    </div>  
</body>  
</html>  
