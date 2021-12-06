<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $newData = $request->all();
        $user_id = $request->user()->id;
        $findUser = User::where('id', '=', $user_id)->first();

        $newData["password"] = Hash::make($newData["password"]);

        $updatedUser = User::where('id', $user_id)->update($newData);

        return response()->json([
            "data" => $newData,
            "status" => 201
        ]);
    }
}
