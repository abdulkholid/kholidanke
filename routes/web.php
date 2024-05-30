<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::prefix('invitation/{uuid}')->name('invitation.')->group(function () {
    Route::get('/', [PageController::class, 'invitation'])->name('invitation');
    Route::get('bridegroom', [PageController::class, 'bridegroom'])->name('bridegroom');
    Route::get('save-the-date', [PageController::class, 'save_the_date'])->name('save-the-date');
    Route::get('thank-you', [PageController::class, 'thank_you'])->name('thank-you');
});

require __DIR__ . '/admin.php';
