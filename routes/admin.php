<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin-panel')->name('admin.')->group(function () {
    Route::get('dashboard', [AdminController::class, 'dashboard']);
});
