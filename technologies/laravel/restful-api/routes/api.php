<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// routes for users
Route::prefix('/v1/user')->group(function () {
    Route::get('/healthcheck', function () {
        return "Hello! API is running correctly!";
    });

    Route::post('/register', [AuthController::class, 'register'])
        ->middleware('registerValidator');

    Route::post('/login', [AuthController::class, 'login'])
        ->middleware('loginValidator');
});

// routes for movies
Route::prefix('/v1/movies')->group(function () {
    Route::get('/healthcheck', function () {
        return "Hello! API is running correctly!";
    });
});

Route::any('{any}', function() {
    return response()->json([
        "message" => "Route not found"
    ], 404);
})->where('any', '.*');