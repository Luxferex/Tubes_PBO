<%@page contentType="text/html" pageEncoding="UTF-8"%>  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Tambah Anggota</title>  
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">  
</head>  
<body class="bg-gray-100 p-6">  
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">  
        <h2 class="text-2xl font-bold mb-6 text-center">Tambah Anggota</h2>  
        <form action="User" method="post">  
            <input type="hidden" name="action" value="add">  
            <input type="hidden" name="type" value="anggota">  
  
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Nama:</label>  
                <input type="text" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Email:</label>  
                <input type="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">NIM:</label>  
                <input type="number" name="nim" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Jurusan:</label>  
                <input type="text" name="jurusan" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Fakultas:</label>  
                <input type="text" name="fakultas" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Telepon:</label>  
                <input type="text" name="phone" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Role:</label>  
                <select name="role" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
                    <option value="user">User</option>  
                    <option value="admin">Admin</option>  
                </select>  
            </div>  
            <div class="mb-4">  
                <label class="block text-sm font-medium text-gray-700">Password:</label>  
                <input type="password" name="password" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">  
            </div>  
  
            <div class="flex justify-center">  
                <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Tambah Anggota</button>  
            </div>  
        </form>  
    </div>  
</body>  
</html>  
