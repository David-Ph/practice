<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller {
    public function index() {
        return view('register.index', [
            "title" => "Register",
            "active" => "register"
        ]);
    }

    public function store(Request $request) {
        // before processing the request, validate it first
        $validated = $request->validate([
            'name' => 'required|max:255',
            'username' => ['required', 'min:3', 'max:255', 'unique:users'],
            'email' => 'required|email:dns|unique:users',
            'password' => 'required|min:5|max:255'
        ]);

        // $validated["password"] = bcrypt($validated["password"]);
        $validated["password"] = Hash::make($validated["password"]);


        User::create($validated);
        
        // to show flahs message
        // $request->session()->flash("success", "Registration successful! Please login");

        // when redirecting to login, also send a variable to session
        // intended to show flash message
        return redirect('/login')->with('success', 'Registration successful!');
    }
}
