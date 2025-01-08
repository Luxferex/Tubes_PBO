<%@page contentType="text/html" pageEncoding="UTF-8"%>  
<%@page import="models.Jurnal"%>  
  
<!DOCTYPE html>  
<html lang="en">  
  
<head>  
    <meta charset="UTF-8">  
    <title>Edit Jurnal</title>  
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">  
</head>  
<body class="bg-gray-100 p-6">  
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">  
        <h2 class="text-2xl font-bold mb-6 text-center">Edit Jurnal</h2>  
        <form action="Jurnal" method="post">  
            <input type="hidden" name="action" value="edit">  
            <input type="hidden" name="id" value="${jurnal.id}"> <!-- Menggunakan EL -->  
            
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">ID Majalah:</label>  
                <input type="text" name="idJurnal" value="${jurnal.idJurnal}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Judul:</label>  
                <input type="text" name="judul" value="${jurnal.judul}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Penulis:</label>  
                <input type="text" name="penulis" value="${jurnal.penulis}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Penerbit:</label>  
                <input type="text" name="penerbit" value="${jurnal.penerbit}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Tahun Terbit:</label>  
                <input type="number" name="tahun_terbit" value="${jurnal.tahunTerbit}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Stok Tersedia:</label>  
                <input type="number" name="stok_tersedia" value="${jurnal.stokTersedia}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Stok Dibutuhkan:</label>  
                <input type="number" name="stok_dibutuhkan" value="${jurnal.stokDibutuhkan}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
  
            <div class="flex justify-between">  
                <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Simpan Perubahan</button>  
                <a href="AdminPage.jsp?menu=jurnal" class="text-gray-500 hover:text-gray-700">Batal</a>  
            </div>  
        </form>  
    </div>  
</body>  
</html>  
