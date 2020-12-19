<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teacher;
use Hash;
use Auth;

class TeacherController extends Controller
{
    public function register(RegisterRequest $request)
    {
        Teacher::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json('Successfully Registered');
    }

    public function logout()
    {
        Auth::guard('teacher')->user()->token()->revoke();
        return response()->json('Successfully Logout!');
    }
}
