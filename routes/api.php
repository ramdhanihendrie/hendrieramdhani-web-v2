<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectsController;
use App\Http\Controllers\Api\CertificatesController;
use App\Http\Controllers\Api\EducationsController;
use App\Http\Controllers\Api\TechsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/projects', ProjectsController::class);
Route::apiResource('/certificates', CertificatesController::class);
Route::apiResource('/educations', EducationsController::class);
Route::apiResource('/techs', TechsController::class);