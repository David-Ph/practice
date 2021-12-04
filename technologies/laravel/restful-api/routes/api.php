<?php

use App\Http\Controllers\ActorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ReviewController;

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

// routes for config
Route::prefix('/v1/config')->group(function () {
    Route::get('/healthcheck', function () {
        return "Hello! API is running correctly!";
    });

    Route::get('/categories', [CategoryController::class, 'getCategories']);

    Route::get('/actors', [ActorController::class, 'getActors']);
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

    Route::get('/', [MovieController::class, 'index']);

    Route::get('/{movie:id}', [MovieController::class, 'show']);

    Route::delete('/{movie:id}', [MovieController::class, 'destroy']);

    Route::put('/{movie:id}', [MovieController::class, 'update'])
        ->middleware(('updateMovieValidator'));

    Route::post('/', [MovieController::class, 'store'])
        ->middleware('movieValidator');
});

// routes for reviews
Route::prefix('/v1/reviews')->group(function () {
    Route::get('/healthcheck', function () {
        return "Hello! API is running correctly!";
    });
    
    Route::get('/', [ReviewController::class, 'index']);

    Route::get('/{review:id}', [ReviewController::class, 'show']);

    Route::delete('/{review:id}', [ReviewController::class, 'destroy']);

    Route::put('/{review:id}', [ReviewController::class, 'update'])
        ->middleware((['auth:sanctum', 'updateReviewValidator', 'updateMovieRating']));

    Route::post('/', [ReviewController::class, 'store'])
        ->middleware(['auth:sanctum', 'createReviewValidator', 'updateMovieRating']);
});

Route::any('{any}', function () {
    return response()->json([
        "message" => "Route not found"
    ], 404);
})->where('any', '.*');
