//package controllers;  
//  
//import java.io.IOException;  
//import javax.servlet.ServletException;  
//import javax.servlet.annotation.WebServlet;  
//import javax.servlet.http.HttpServlet;  
//import javax.servlet.http.HttpServletRequest;  
//import javax.servlet.http.HttpServletResponse;  
//import models.User;  
//  
//@WebServlet(name = "SignupServlet", urlPatterns = {"/signup"})  
//public class SignupController extends HttpServlet {  
//  
//    @Override  
//    protected void doPost(HttpServletRequest request, HttpServletResponse response)  
//            throws ServletException, IOException {  
//        // Retrieve parameters from the request  
//        String name = request.getParameter("name");  
//        String email = request.getParameter("email");  
//        String nim = request.getParameter("nim");  
//        String jurusan = request.getParameter("jurusan");  
//        String fakultas = request.getParameter("fakultas");  
//        String phoneStr = request.getParameter("phone");  
//        String role = "user"; // Default role for new users  
//  
//        // Validate phone number input  
//        Long phone = null;  
//        try {  
//            phone = Long.valueOf(phoneStr);  
//        } catch (NumberFormatException e) {  
//            request.setAttribute("error", "Invalid phone number format.");  
//            request.getRequestDispatcher("register.jsp").forward(request, response);  
//            return; // Exit the method after forwarding  
//        }  
//  
//        // Create a new User object  
//        User newUser = new User(name, email, nim, jurusan, fakultas, phone, role, "defaultPassword");  
//  
//        // Save the user to the database  
//        if (newUser.save()) {  
//            request.setAttribute("success", "Registration successful! You can now log in.");  
//            response.sendRedirect("login.jsp"); // Redirect to login page  
//        } else {  
//            request.setAttribute("error", "Registration failed. Please try again.");  
//            request.getRequestDispatcher("register.jsp").forward(request, response);  
//        }  
//    }  
//}  
