<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/app-name', function () {
    return response()->json([
        'app_name' => env('APP_NAME'),
    ]);
});

Route::get('/data/pasien', [App\Http\Controllers\Api\PasienController::class, 'json']);
Route::POST('/data/pasien/store', [App\Http\Controllers\Api\PasienController::class, 'store']);
Route::patch('/data/pasien/update/{id}', [App\Http\Controllers\Api\PasienController::class, 'update']);
Route::delete('/data/pasien/delete/{id}', [App\Http\Controllers\Api\PasienController::class, 'delete']);
