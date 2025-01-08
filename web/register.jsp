<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup - PBO Sistem Perpustakaan</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 overflow-hidden">
    <div class="flex items-stretch h-screen">
        <div class="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center shadow-lg min-h-screen">
            <div class="w-11/12 sm:w-3/4 md:w-1/2 mx-auto mt-16">
                <h2 class="text-3xl font-bold mt-5 md:mt-10 text-zinc-600 text-center">Daftar</h2>
                <p class="text-zinc-500 text-center mt-3 md:mt-5">Silahkan isi form di bawah ini untuk mendaftar</p>
                <form class="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="mb-4">
                        <label for="name" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">Nama</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Masukkan Nama Anda"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Masukkan Email Anda"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Masukkan Password Anda"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="nim" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">NIM</label>
                        <input
                            type="text"
                            name="nim"
                            id="nim"
                            required
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Masukkan NIM Anda"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="jurusan" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">Jurusan</label>
                        <input
                            type="text"
                            name="jurusan"
                            id="jurusan"
                            required
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Masukkan Jurusan Anda"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="fakultas" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">Fakultas</label>
                        <input
                            type="text"
                            name="fakultas"
                            id="fakultas"
                            required
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Masukkan Fakultas Anda"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="block mb-1 md:mb-2 text-sm font-medium text-zinc-700">Nomor Telepon</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            class="border border-zinc-300 rounded-lg p-2 md:p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Masukkan Nomor Telepon Anda"
                        />
                    </div>
                    <div class="col-span-2">
                        <button type="submit" class="bg-blue-600 text-white hover:bg-blue-700 p-2 md:p-3 rounded-lg w-full transition duration-200">
                            Daftar
                        </button>
                    </div>
                    <div class="col-span-2 text-center">
                        <p class="text-zinc-500 text-sm mt-3 md:mt-5">
                            sudah punya akun? <a href="login.jsp" class="text-blue-600 hover:underline">Login</a>
                        </p>
                    </div>
                </form>
                <c:if test="${not empty error}">
                    <p class="text-red-500 text-center">${error}</p>
                </c:if>
                <c:if test="${not empty success}">
                    <p class="text-green-500 text-center">${success}</p>
                </c:if>
            </div>
        </div>
        <div class="hidden md:flex justify-center items-center w-full md:w-1/2">
            <img src="images/register.jpg" alt="Register Image" class="w-full h-full object-cover" />
        </div>
    </div>
</body>
</html>
