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

Route::post('/login', 'Api\LoginController@login');
Route::post('/register', 'Api\Auth\UserController@register');
Route::get('/provider', 'Api\LoginController@provider');
Route::get('/null/user', 'Api\LoginController@error');

//user api route
Route::group(['middleware' => ['auth:api']], function(){
    Route::get('/logout', 'Api\Auth\UserController@logout');
    Route::get('/user/user', 'Api\Auth\UserController@user');
    //Route::get('/user', function (Request $request) { return $request->user(); });
});

//teacher api route
Route::group(['prefix' => 'teacher'], function(){
    Route::post('/login', 'Api\LoginController@login');
    Route::post('/register', 'Api\Auth\TeacherController@register');
});
Route::group(['prefix' => 'teacher', 'middleware' => ['auth:teacher']], function(){
    Route::get('/logout', 'Api\Auth\TeacherController@logout');
    Route::get('/user', function (Request $request) { return $request->user(); });
});

//admin api route
Route::group(['prefix' => 'admin'], function(){
    Route::post('/login', 'Api\LoginController@login');
    Route::post('/register', 'Api\Auth\AdminController@register');
});
Route::group(['prefix' => 'admin', 'middleware' => ['auth:admin']], function(){
    Route::get('/logout', 'Api\Auth\AdminController@logout');
    Route::get('/user', function (Request $request) { return $request->user(); });
});
