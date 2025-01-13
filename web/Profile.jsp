<%@page contentType="text/html" pageEncoding="UTF-8"%>      
<%@page import="models.User"%>      
<%@page import="javax.servlet.http.HttpSession"%>      
<!DOCTYPE html>      
<html lang="en">      
<head>      
    <meta charset="UTF-8">      
    <title>Edit Profile - PBO Sistem Perpustakaan</title>      
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">      
</head>      
<body class="bg-gray-100">      
    <%      
    // Mengambil user dari session tanpa mendeklarasikan ulang      
    User user = (User) session.getAttribute("user"); // Ambil user dari session      
    if (user == null) {      
        response.sendRedirect("login.jsp"); // Redirect ke halaman login jika user tidak ada      
        return; // Hentikan eksekusi lebih lanjut      
    }      
    %>      
  
    <div class="container mx-auto p-6">      
        <h2 class="text-3xl font-bold text-center mb-6">Edit Profile</h2>      
        <div class="bg-white shadow-md rounded-lg p-6"> <!-- Card container -->  
            <form action="User" method="post">      
                <input type="hidden" name="action" value="edit" />      
                <input type="hidden" name="nim" value="<%= user.getNim() %>" />      
                <div class="mb-4">      
                    <label for="name" class="block mb-1 text-sm font-medium">Nama</label>      
                    <input type="text" name="name" id="name" value="<%= user.getName() %>" required class="border rounded-lg p-2 w-full" />      
                </div>      
                <div class="mb-4">      
                    <label for="email" class="block mb-1 text-sm font-medium">Email</label>      
                    <input type="email" name="email" id="email" value="<%= user.getEmail() %>" required class="border rounded-lg p-2 w-full" />      
                </div>      
                <div class="mb-4">      
                    <label for="phone" class="block mb-1 text-sm font-medium">Nomor Telepon</label>      
                    <input type="tel" name="phone" id="phone" value="<%= user.getPhone() %>" required class="border rounded-lg p-2 w-full" />      
                </div>      
                <div class="mb-4">      
                    <label for="password" class="block mb-1 text-sm font-medium">Password Baru</label>      
                    <input type="password" name="password" id="password" class="border rounded-lg p-2 w-full" placeholder="Masukkan password baru (jika ingin mengubah)" />      
                </div>      
                <div class="mb-4">      
                    <label for="confirmPassword" class="block mb-1 text-sm font-medium">Konfirmasi Password</label>      
                    <input type="password" name="confirmPassword" id="confirmPassword" class="border rounded-lg p-2 w-full" placeholder="Konfirmasi password baru" />      
                </div>      
                <div class="mb-4">      
                    <button type="submit" class="bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-700 transition">Simpan Perubahan</button>      
                </div>      
            </form>      
        </div>      
    </div>      
</body>      
</html>      
