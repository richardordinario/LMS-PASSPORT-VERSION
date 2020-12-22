<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Authenticator;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Auth;

class LoginController extends Controller
{
    /**
     * @var Authenticator
     */
    private $authenticator;


    public function __construct(Authenticator $authenticator)
    {
        $this->authenticator = $authenticator;
    }

    /**
     * @param Request $request
     * @return array
     * @throws AuthenticationException
     */
    public function login(Request $request)
    {
        $credentials = array_values($request->only('email', 'password', 'provider'));

        if (! $user = $this->authenticator->attempt(...$credentials)) {
            throw new AuthenticationException();
        }

        $token = $user->createToken($request->provider)->accessToken;

        return [
            'token_type' => 'Bearer',
            'access_token' => $token,
            'user' => $user
        ];
    }

    public function provider()
    {
        if(Auth::guard('admin')->check() == true) {
            $role = 'admin';
        }else if(Auth::guard('teacher')->check() == true) {
            $role = 'teacher';
        }else {
            $role = 'user';
        }
        // $role = Auth::guard('api')->check();
        return response()->json($role, 200);
        //$role = Auth::guard('admin')->check();

        // try {
        //     Auth::guard('api')->user()->token()->revoke();
        //     return response()->json('Succefully Logout');
        // } catch (\Throwable $th) {
        //     return response()->json('Error','Something went wrong',401);
        // }
        //dd(Auth::guard('admin')->user()->token()->revoke());

    }

    public function error()
    {
        return response()->json('Unauthorized!',401);
    }
}
