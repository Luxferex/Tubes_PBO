<%@page contentType="text/html" pageEncoding="UTF-8"%>  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Login - PBO Sistem Perpustakaan</title>  
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">  
</head>  
<body class="bg-gray-100 overflow-hidden">  
    <div class="flex items-stretch h-screen">  
        <div class="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center shadow-lg min-h-screen">  
            <h1 class="text-xl md:text-3xl font-bold text-zinc-800 absolute top-6 left-6">PBO-Sistem Perpustakaan</h1>  
            <div class="w-11/12 sm:w-3/4 md:w-1/2 mx-auto mt-16">  
                <h2 class="text-3xl font-bold mt-5 md:mt-10 text-zinc-600 text-center">Login</h2>  
                <p class="text-zinc-500 text-center mt-3 md:mt-5">Selamat Datang! Silahkan masukkan NIM dan Password Anda untuk Login</p>  
                <form class="mt-4 md:mt-6" action="User?action=login" method="POST">    
                    <input type="hidden" name="action" value="login"> <!-- Hidden input for action -->  
                    <div class="mb-4">    
                        <label for="nim" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">NIM</label>    
                        <input    
                            type="text"    
                            name="nim"    
                            id="nim"    
                            required    
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full mb-4 md:mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600"    
                            placeholder="Masukkan NIM anda"    
                        />    
                    </div>    
                    <div class="mb-4">    
                        <label for="password" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">Password</label>    
                        <input    
                            type="password"    
                            name="password"    
                            id="password"    
                            required    
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full mb-6 md:mb-8 focus:outline-none focus:ring-2 focus:ring-blue-600"    
                            placeholder="Masukkan Password anda"    
                        />    
                    </div>    
                    <button type="submit" class="bg-blue-600 text-white hover:bg-blue-700 p-2 md:p-3 rounded-lg w-full transition duration-200">    
                        Sign in    
                    </button>    
                    <p class="text-zinc-500 text-sm mt-3 md:mt-5 text-center">    
                        belum punya akun? <a href="register.jsp" class="text-blue-600 hover:underline">Daftar</a>    
                    </p>    
                </form>
                <p color:red;>${error}</p>
            </div>  
        </div>  
        <div class="hidden md:flex justify-center items-center w-full md:w-1/2">  
            <img src="images/login.png" alt="Login Image" class="w-full h-full object-cover" />  
        </div>  
    </div>  
</body>  
</html>  
