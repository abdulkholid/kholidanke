<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('invitation/{uuid}', [PageController::class, 'invitation'])->name('invitation');

require __DIR__ . '/admin.php';
