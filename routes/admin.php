<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\admin\EventSessionController;
use App\Http\Controllers\admin\InvitationController;
use App\Http\Controllers\Admin\SettingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin-panel')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');

    Route::prefix('event_session')->name('event_session.')->group(function () {
        Route::get('/', [EventSessionController::class, 'index'])->name('index');
        Route::post('insert', [EventSessionController::class, 'store'])->name('store');
        Route::put('{event_session_id}/update', [EventSessionController::class, 'update'])->name('update');
        Route::delete('{event_session_id}/delete', [EventSessionController::class, 'delete'])->name('delete');
    });
    Route::prefix('invitation')->name('invitation.')->group(function () {
        Route::get('/', [InvitationController::class, 'index'])->name('index');
        Route::post('insert', [InvitationController::class, 'store'])->name('store');
        Route::put('{invitation_id}/update', [InvitationController::class, 'update'])->name('update');
        Route::delete('{invitation_id}/delete', [InvitationController::class, 'delete'])->name('delete');
        Route::get('{invitation_id}/share', [InvitationController::class, 'share'])->name('share');
    });
    Route::prefix('setting')->name('setting.')->group(function () {
        Route::get('/', [SettingController::class, 'index'])->name('index');
        Route::post('/', [SettingController::class, 'index_submit'])->name('index.submit');
    });
});
