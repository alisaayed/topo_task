<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/* Route::middleware('auth:api')->get('/user', function (Request $request) {

    return $request->user();
}); */

Route::group(['middleware' => ['cors', 'json.response']], function () {
    // ...
    Route::post('/file-upload', 'App\Http\Controllers\FileController@store');
    Route::get('/view-uploads', 'App\Http\Controllers\FileController@viewUploads');
    Route::post('/login', 'App\Http\Controllers\Auth\ApiAuthController@login')->name('login.api');
    Route::post('/register', 'App\Http\Controllers\Auth\ApiAuthController@register')->name('register.api');

    Route::middleware('auth:api')->group(function () {
        Route::post('/logout', 'App\Http\Controllers\Auth\ApiAuthController@logout')->name('logout.api');
        Route::resource('user', 'App\Http\Controllers\UserController');
        Route::resource('group', 'App\Http\Controllers\GroupController');
        Route::get('group/{id}/user', 'App\Http\Controllers\GroupController@userList')->name('group.userList');
        Route::put('group/{id}/user/{uid}', 'App\Http\Controllers\GroupController@userAdd')->name('group.userAdd');
        Route::delete('group/{id}/user/{uid}', 'App\Http\Controllers\GroupController@userDelete')->name('group.userDelete');
    });
});
