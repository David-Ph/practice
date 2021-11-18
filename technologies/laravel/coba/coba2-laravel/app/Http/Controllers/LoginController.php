<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
}
