<?php

namespace App\Http\Controllers\Api\Auth;

use SMartins\PassportMultiauth\ProviderRepository;
use App\Http\Requests\Auth\RegisterRequest;
use SMartins\PassportMultiauth\Provider;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Hash;
use Auth;

class UserController extends Controller
{
    public function register(RegisterRequest $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json('Successfully Registered');
    }

    public function logout()
    {
        Auth::user()->token()->revoke();
        return response()->json('Succefully Logout');
    }

    public function user(Request $request)
    {
        try {
            $data = Auth::user();
            $data = [
                'role' => 'user',
                'data' => $data,
            ];
            return response()->json($data, 200);
        } catch (\Throwable $th) {
            return response()->json('error','Unauthorized!', 401);
        }

    }

}
