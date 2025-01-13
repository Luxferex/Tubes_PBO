<%@page contentType="text/html" pageEncoding="UTF-8"%>  
<%@page import="models.User"%>  
<%@page import="java.util.List"%>  
  
<!DOCTYPE html>  
<html lang="en">  
    <head>  
        <meta charset="UTF-8">  
        <title>Data Anggota</title>  
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">  
    </head>  
    <body class="bg-gray-100 p-6">  
        <h2 class="text-4xl font-extrabold mb-4 pt-20 text-purple-700 hover:text-blue-600">  
            Data Anggota  
        </h2>  
          
         
        <table class="min-w-full bg-white border border-gray-300">  
            <thead>  
                <tr>  
                    <th class="border border-gray-300 px-2 py-2 text-center">Nama</th>  
                    <th class="border border-gray-300 px-2 py-2 text-center">Email</th>  
                    <th class="border border-gray-300 px-2 py-2 text-center">NIM</th>  
                    <th class="border border-gray-300 px-2 py-2 text-center">Jurusan</th>  
                    <th class="border border-gray-300 px-2 py-2 text-center">Fakultas</th>  
                    <th class="border border-gray-300 px-2 py-2 text-center">Telepon</th>  
                    <th class="border border-gray-300 px-2 py-2 text-center">Role</th>  
                    <th class="border border-gray-300 px-2 py-2 text-center">Action</th>  
                </tr>  
            </thead>  
            <tbody>  
                <%  
                    List<User> userList = (List<User>) request.getAttribute("userList");  
                    if (userList != null && !userList.isEmpty()) {  
                        boolean hasUsers = false; // Untuk memastikan ada pengguna dengan role "user"  
                        for (User user : userList) {  
                            if (user.getRole().equals("user")) { // Memfilter berdasarkan role  
                                hasUsers = true;  
                %>  
                <tr>  
                    <td class="border border-gray-300 px-2 py-2 text-center"><%= user.getName()%></td>  
                    <td class="border border-gray-300 px-2 py-2 text-center"><%= user.getEmail()%></td>  
                    <td class="border border-gray-300 px-2 py-2 text-center"><%= user.getNim()%></td>  
                    <td class="border border-gray-300 px-2 py-2 text-center"><%= user.getJurusan()%></td>  
                    <td class="border border-gray-300 px-2 py-2 text-center"><%= user.getFakultas()%></td>  
                    <td class="border border-gray-300 px-2 py-2 text-center"><%= user.getPhone()%></td>  
                    <td class="border border-gray-300 px-2 py-2 text-center"><%= user.getRole()%></td>  
                    <td class="border border-gray-300 px-2 py-2 text-center">  
                        <a href="User?menu=edit&nim=<%= user.getNim()%>" class="text-blue-500">Edit</a> |  
                        <form action="User" method="post" style="display:inline;">  
                            <input type="hidden" name="action" value="delete">  
                            <input type="hidden" name="nim" value="<%= user.getNim() %>">  
                            <button type="submit" class="text-red-500">Delete</button>  
                        </form>  
                    </td>  
                </tr>  
                <%  
                        }  
                    }  
  
                    if (!hasUsers) { // Jika tidak ada pengguna dengan role "user"  
                %>  
                <tr>  
                    <td colspan="8" class="border border-gray-300 px-2 py-2 text-center">  
                        Tidak ada data pengguna dengan role "user".  
                    </td>  
                </tr>  
                <%  
                    }  
                } else {  
                %>  
                <tr>  
                    <td colspan="8" class="border border-gray-300 px-2 py-2 text-center">  
                        Tidak ada data pengguna yang ditemukan.  
                    </td>  
                </tr>  
                <%  
                    }  
                %>  
            </tbody>  
        </table>  
    </body>  
</html>  
    