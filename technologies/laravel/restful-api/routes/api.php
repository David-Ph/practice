<?php

use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::get('/v1/healthCheck', function () {
// });

Route::prefix('/v1')->group(function () {
    Route::get('/healthcheck', function () {
        return "Hello! API is running correctly!";
    });

    Route::apiResource('register', RegisterController::class);
});
