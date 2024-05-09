<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin-panel')->name('admin.')->group(function () {
    Route::get('dashboard', [AdminController::class, 'dashboard'])->name('dashboard');

    Route::prefix('event_session')->name('event_session.')->group(function () {
        Route::get('/', [AdminController::class, 'event_session'])->name('list');
    });
});
