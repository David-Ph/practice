<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(){
        // this means that go into login folder and look for index file
        // by convention, each controller should go into one folder
        return view('login.index', [
            "title" => "Login",
            "active" => "login"
        ]);
    }

    public function authenticate(Request $request){
        $validated = $request->validate([
            "email" => "required|email:dns",
            "password" => "required"
        ]);

        // this is laravel way to validate login
        if(Auth::attempt($validated)){
            // why regenerate session?
            // to prevent session fixation hacking, where someone tries to login with
            // previous session
            $request->session()->regenerate();

            return redirect()->intended('/dashboard');
        }

        return back()->with("loginError", "Login failed");
    }

    public function logout(Request $request){
        // logout user
        Auth::logout();
        // destroy session
        $request->session()->invalidate();
        // regenrate token
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
