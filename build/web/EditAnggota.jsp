<%@page contentType="text/html" pageEncoding="UTF-8"%>  
<%@page import="models.User"%>  

<!DOCTYPE html>  
<html lang="en">  

<head>  
    <meta charset="UTF-8">  
    <title>Edit Anggota</title>  
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">  
</head>  

<body class="bg-gray-100 p-6">  
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">  
        <h2 class="text-2xl font-bold mb-6 text-center">Edit Anggota</h2>  
        <form action="User" method="post">  
            <input type="hidden" name="action" value="edit">  
            <input type="hidden" name="nim" value="${user.nim}"> <!-- Menggunakan EL -->

            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Nama:</label>  
                <input type="text" name="name" value="${user.name}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
              
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Email:</label>  
                <input type="email" name="email" value="${user.email}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  

            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Jurusan:</label>  
                <input type="text" name="jurusan" value="${user.jurusan}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  

            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Fakultas:</label>  
                <input type="text" name="fakultas" value="${user.fakultas}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  

            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Nomor Telepon:</label>  
                <input type="text" name="phone" value="${user.phone}" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  

            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Role:</label>  
                <select name="role" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
                    <option value="user" ${user.role == 'user' ? 'selected' : ''}>User</option>  
                    <option value="admin" ${user.role == 'admin' ? 'selected' : ''}>Admin</option>  
                </select>  
            </div>  

            <div class="flex justify-between">  
                <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Simpan Perubahan</button>  
                <a href="AdminPage.jsp?menu=anggota" class="text-gray-500 hover:text-gray-700">Batal</a>  
            </div>  
        </form>  
    </div>  
</body>  

</html>  
