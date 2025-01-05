<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'check.role:admin'])->name('dashboard');


//  Manage users CRUD ===============
Route::middleware(['auth', 'check.role:admin'])->group(function () {
    // Route::get('/admin/dashboard', function () { 
    //     return Inertia::render('Dashboard');
    // })->name('dashbaord');

    Route::resource('users', UserController::class);
});
//  ==================================


//  Manage user Contact's CRUD ===============
Route::middleware(['auth', 'check.role:user'])->group(function () {
    // Route::get('/user/dashboard', function () {
    //     return Inertia::render('Contact/Index');
    // })->name('contact_user');

    Route::resource('contact', ContactController::class);
});
//  ==================================

Route::get('/user/dashboard', function () {
    return Inertia::render('Contact/Index');
})->middleware(['auth', 'verified', 'check.role:user'])->name('contact_user');

// Route::get('/test', function () {
//     return Inertia::render('Test');
// });
Route::middleware(['auth'])->group(function () {
    // Route::get('/contact', [ContactController::class,  'index'])->name('contact');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
