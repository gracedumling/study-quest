<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TriviaGameController;
use App\Http\Controllers\TriviaApiController;
use App\Http\Controllers\LeaderboardController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('leaderboard', function () {
        return Inertia::render('leaderboard');
    })->name('leaderboard');

    Route::get('guide', function () {
        return Inertia::render('guide');
    })->name('guide');


  // Replace the simple route with the controller method
  Route::get('leaderboard', [LeaderboardController::class, 'index'])->name('leaderboard');
    // Replace the simple route with the controller method
    Route::get('play', [TriviaGameController::class, 'index'])->name('play');
});

// Add API routes for the game interactions
Route::middleware(['auth:sanctum'])->prefix('api')->group(function () {
    Route::post('/trivia/answer', [TriviaApiController::class, 'submitAnswer']);
    Route::post('/trivia/clue', [TriviaApiController::class, 'getClue']);
    Route::post('/trivia/add-powerup', [TriviaApiController::class, 'addPowerUp']);
    
    // This is the key change - use 'restart' instead of 'restartGame'
    Route::post('/trivia/restart', [TriviaApiController::class, 'restart']);
    
    Route::post('/trivia/next-level', [TriviaApiController::class, 'nextLevel']);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';