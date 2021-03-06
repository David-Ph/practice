<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
            'status' => 200
        ]);
    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $data = $request->all();
        
        $newUser = User::create([
            "username" => $data['username'],
            "email" => $data['email'],
            "password" => Hash::make($data['password']),
        ]);

        $token = $newUser->createToken('auth_token')->plainTextToken;

        return response()->json([
            "user" => $newUser,
            "access_token" => $token,
            "token_type" => "Bearer",
            "status" => 201
        ]);
    }

     /**
     * get data of currently logged in user through token.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUser(Request $request)
    {
        $data = $request->user();
        $request = $request->bearerToken();
        return response()->json([
            "user" => $data,
            "token" => $request,
            "status" => 200
        ]);
    }
}
